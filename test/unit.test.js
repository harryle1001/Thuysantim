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
