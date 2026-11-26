'use strict';
/* Unit tests — no database required. Run: npm test */
const test = require('node:test');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');

process.env.VNP_TMN_CODE = 'TESTCODE';
process.env.VNP_HASH_SECRET = 'TESTSECRETKEY0123456789';
process.env.MOMO_PARTNER_CODE = 'MOMOTEST';
process.env.MOMO_ACCESS_KEY = 'access';
process.env.MOMO_SECRET_KEY = 'secret';

const H = require('../src/utils/helpers');
const pay = require('../src/services/payments');
const { packshotSvg } = require('../src/services/packshot');
const dict = { vi: require('../src/i18n/vi'), en: require('../src/i18n/en'), zh: require('../src/i18n/zh') };

test('slugify handles Vietnamese', () => {
  assert.equal(H.slugify('Men vi sinh Đặc trị — Tôm thẻ!'), 'men-vi-sinh-dac-tri-tom-the');
});

test('tr falls back to Vietnamese', () => {
  const f = JSON.stringify({ vi: 'Tôm', en: '', zh: '虾' });
  assert.equal(H.tr(f, 'en'), 'Tôm');
  assert.equal(H.tr(f, 'zh'), '虾');
});

test('money formats VND per locale', () => {
  assert.equal(H.money(1250000, 'vi'), '1.250.000 ₫');
  assert.equal(H.money(1250000, 'en'), '₫1,250,000');
});

test('orderCode format', () => {
  assert.match(H.orderCode(), /^TST[23456789A-HJ-NP-Z]{6}$/);
});

test('phone/email validators', () => {
  assert.ok(H.isPhone('0909 123 456'));
  assert.ok(H.isPhone('+84 912 345 678'));
  assert.ok(!H.isPhone('abc'));
  assert.ok(H.isEmail('a@b.vn'));
  assert.ok(!H.isEmail('a@b'));
});

test('VNPay URL signature verifies and tampering is detected', () => {
  const url = pay.vnpayCreateUrl({ order: { code: 'TSTABC123', total: 605000 }, ip: '1.2.3.4', locale: 'vi', returnUrl: 'https://x.vn/payment/vnpay/return' });
  const q = Object.fromEntries(new URL(url).searchParams);
  assert.equal(q.vnp_Amount, '60500000');
  q.vnp_ResponseCode = '00';
  // Re-sign as VNPay would (response adds fields), then verify
  delete q.vnp_SecureHash;
  const signData = Object.keys(q).sort().map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(q[k]).replace(/%20/g, '+')}`).join('&');
  q.vnp_SecureHash = crypto.createHmac('sha512', process.env.VNP_HASH_SECRET).update(signData).digest('hex');
  const ok = pay.vnpayVerify(q);
  assert.equal(ok.valid, true);
  assert.equal(ok.amount, 605000);
  assert.equal(ok.txnRef, 'TSTABC123');
  assert.equal(pay.vnpayVerify({ ...q, vnp_Amount: '100' }).valid, false);
});

test('MoMo IPN signature verification', () => {
  const p = { partnerCode: 'MOMOTEST', orderId: 'TSTABC123-1700000000', requestId: 'TSTABC123-1700000000', amount: 605000, orderInfo: 'Thanh toan don hang TSTABC123', orderType: 'momo_wallet', transId: 123, resultCode: 0, message: 'Successful.', payType: 'qr', responseTime: 1700000001, extraData: '' };
  const raw = `accessKey=access&amount=${p.amount}&extraData=&message=${p.message}&orderId=${p.orderId}&orderInfo=${p.orderInfo}&orderType=${p.orderType}&partnerCode=${p.partnerCode}&payType=${p.payType}&requestId=${p.requestId}&responseTime=${p.responseTime}&resultCode=${p.resultCode}&transId=${p.transId}`;
  p.signature = crypto.createHmac('sha256', 'secret').update(raw).digest('hex');
  const v = pay.momoVerify(p);
  assert.equal(v.valid, true);
  assert.equal(v.success, true);
  assert.equal(v.orderCode, 'TSTABC123');
  assert.equal(pay.momoVerify({ ...p, amount: 1 }).valid, false);
});

test('VietQR URL contains amount and order reference', () => {
  const u = pay.vietqrUrl({ bin: 'VCB', accountNo: '0123', accountName: 'CTY' }, 605000, 'TSTABC123');
  assert.match(u, /^https:\/\/img\.vietqr\.io\/image\/VCB-0123-compact2\.png\?/);
  assert.match(u, /amount=605000/);
  assert.match(u, /addInfo=TSTABC123/);
});

test('packshot SVG escapes content', () => {
  const svg = packshotSvg({ id: 1, slug: 'x', sku: 'A<B', name: JSON.stringify({ vi: 'TÍM <X> — "test"' }), variants: '[{"label":"1 lít","price":1}]', color: '#123456' });
  assert.ok(svg.startsWith('<svg'));
  assert.ok(!svg.includes('<X>'));
  assert.ok(svg.includes('A&lt;B'));
});

test('i18n dictionaries have identical key structure', () => {
  const keys = (o, p = '') => Object.entries(o).flatMap(([k, v]) => (v && typeof v === 'object' && !Array.isArray(v) ? keys(v, `${p}${k}.`) : [`${p}${k}`])).sort();
  const vi = keys(dict.vi);
  assert.deepEqual(keys(dict.en), vi);
  assert.deepEqual(keys(dict.zh), vi);
});

test('landing pages: content complete, products exist, lead tag sanitised', () => {
  const lp = require('../src/content/landings');
  const seedSlugs = require('../src/db/catalog-v2').products.map((p) => p.slug); // real catalogue (sample products are hidden)
  assert.ok(lp.slugs().length > 0);
  for (const slug of lp.slugs()) {
    const page = lp.get(slug, 'vi');
    assert.ok(page.title && page.description.length <= 200, `${slug}: SEO title/description`);
    assert.ok(page.faq.length >= 3);
    page.products.slugs.forEach((s) => assert.ok(seedSlugs.includes(s), `${slug}: unknown product ${s}`));
  }
  assert.equal(lp.get('xu-ly-khi-doc-day-ao', 'en'), null);
  assert.equal(lp.get('__proto__', 'vi'), null);
  const tag = lp.leadTag('x', { utm_source: 'facebook', utm_campaign: 'mua<script>', fbclid: 'abc' });
  assert.equal(tag, 'LP x | utm: facebook/muascript | via fb');
});

test('parseDosage turns label text into calculator rules', () => {
  const { parseDosage } = require('../src/utils/dosage');
  const r = parseDosage('Định kỳ: 1 kg/3.000–4.000 m³.\nĐáy ao dơ: 20–30 kg/1.000 m².\nPhòng: 3–5 g/kg thức ăn.\nKhông dùng chung với men vi sinh.', 'Routine: x\nDirty: y\nPrevention: z');
  assert.equal(r.length, 3);
  assert.deepEqual([r[0].type, r[0].unit, r[0].label], ['vol', 'kg', 'Routine']);
  assert.equal(r[0].min, 1 / 4000);
  assert.equal(r[0].max, 1 / 3000);
  assert.deepEqual([r[1].type, r[1].min, r[1].max], ['area', 0.02, 0.03]);
  assert.deepEqual([r[2].type, r[2].unit, r[2].min, r[2].max], ['feed', 'g', 3, 5]);
  assert.deepEqual(parseDosage('', ''), []);
});

test('batch E articles: SEO lengths, real products, internal links resolve, AI images mapped', () => {
  const batch = require('../src/db/seed-posts-e');
  const all = require('../src/db/seed-data');
  const slugs = new Set(all.posts.map((p) => p.slug));
  const diseases = new Set(all.diseases.map((d) => d.slug));
  const names = require('../src/db/catalog-v2').products.map((p) => p.name.vi.split('—')[0].trim());
  const map = require('../scripts/covers/map');
  assert.equal(batch.length, 10);
  for (const p of batch) {
    assert.ok(slugs.has(p.slug), `${p.slug}: not in seed data`);
    assert.ok([...p.title.vi].length <= 60, `${p.slug}: title > 60`);
    assert.ok([...p.excerpt.vi].length <= 155, `${p.slug}: excerpt > 155`);
    assert.ok(!Number.isNaN(new Date(p.date).getTime()), `${p.slug}: date`);
    assert.ok(/## Câu hỏi thường gặp/.test(p.body.vi), `${p.slug}: FAQ`);
    assert.ok(!/tỷ lệ vàng|φ/i.test(p.body.vi), `${p.slug}: golden ratio in text`);
    for (const [, href] of p.body.vi.matchAll(/\]\((\/vi\/[^)]+)\)/g)) {
      const b = /^\/vi\/blog\/(.+)$/.exec(href);
      const d = /^\/vi\/diseases\/(.+)$/.exec(href);
      assert.ok((b && slugs.has(b[1])) || (d && diseases.has(d[1])), `${p.slug}: broken link ${href}`);
    }
    for (const [, bold] of p.body.vi.matchAll(/\*\*([A-Z0-9][A-Z0-9 -]+)\*\*/g)) assert.ok(names.includes(bold), `${p.slug}: unknown product ${bold}`);
    assert.ok(map.pick(p.slug, 0).local, `${p.slug}: no AI cover mapped`);
  }
});

test('no fabricated ratings or unverified claims in templates and dictionaries', () => {
  const fs = require('node:fs');
  const path = require('node:path');
  const product = fs.readFileSync(path.join(__dirname, '../views/pages/product.ejs'), 'utf8');
  assert.ok(!/aggregateRating|reviewCount/.test(product), 'product page must not emit made-up ratings');
  assert.ok(!/product\.rating/.test(product), 'product page must not show a star rating');
  for (const loc of ['vi', 'en', 'zh']) {
    const s = JSON.stringify(dict[loc].store);
    assert.ok(!/COA|100% sinh học|100% biological|100%生物/.test(s), `${loc}: unverified claim in store block`);
  }
});

test('footer social links hide bare site roots', () => {
  const fs = require('node:fs');
  const path = require('node:path');
  const foot = fs.readFileSync(path.join(__dirname, '../views/partials/foot.ejs'), 'utf8');
  assert.ok(/realUrl\(company\.facebook\)/.test(foot) && /realUrl\(company\.tiktok\)/.test(foot));
});
