/* End-to-end browser test. Usage: start the server, then `node test/e2e.browser.js [baseUrl]` */
'use strict';
const { chromium } = require('playwright');

const B = process.argv[2] || 'http://localhost:3000';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@thuysantim.vn';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'ThuySanTim@2026';

(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 1360, height: 900 } });
  const p = await ctx.newPage();
  const errs = [];
  p.on('pageerror', (e) => errs.push(`pageerror ${e.message}`));
  // "Failed to load resource" = expected 4xx from deliberate bad inputs / external images blocked offline
  p.on('console', (m) => { if (m.type() === 'error' && !m.text().startsWith('Failed to load resource')) errs.push(`console ${m.text()}`); });
  const ok = (c, msg) => { console.log(`${c ? 'PASS' : 'FAIL'} ${msg}`); if (!c) process.exitCode = 1; };

  // 1. Add to cart from product page (2nd variant, qty 3)
  await p.goto(`${B}/vi/products/tim-pro-bio-9`);
  await p.click('.variant:nth-child(2) span');
  ok((await p.textContent('[data-price]')).includes('520.000'), 'variant switch updates price');
  await p.fill('input[name=qty]', '3');
  await p.click('.pd__buy [data-add-to-cart]');
  await p.waitForFunction(() => document.querySelector('[data-cart-count]').textContent === '3');
  ok(true, 'add to cart updates badge (3)');
  await p.goto(`${B}/vi/products`);
  await p.click('.pcard [data-add-to-cart] >> nth=1');
  await p.waitForFunction(() => document.querySelector('[data-cart-count]').textContent === '4');
  ok(true, 'add from listing card');

  // 2. Cart page qty update
  await p.goto(`${B}/vi/cart`);
  ok((await p.$$('[data-line]')).length === 2, 'cart shows 2 lines');
  await p.click('[data-line] >> nth=1 >> [data-qty="+"]');
  await p.waitForTimeout(700);
  ok((await p.textContent('[data-cart-count]')) === '5', 'qty + updates cart count');

  // 3. Checkout with VietQR
  await p.click('text=Tiến hành đặt hàng');
  await p.fill('#o-name', 'Nguyễn Văn Test');
  await p.fill('#o-phone', '0909 000 111');
  await p.fill('#o-prov', 'Cần Thơ');
  await p.fill('#o-addr', '12 Đường Test, Ninh Kiều');
  await p.check('input[value=vietqr]', { force: true });
  await Promise.all([p.waitForNavigation(), p.click('button:has-text("Đặt hàng")')]);
  ok(p.url().includes('/vi/order/TST'), `order created → ${p.url()}`);
  const qr = await p.getAttribute('.qr-card img', 'src');
  ok(qr && qr.includes('img.vietqr.io') && qr.includes('amount='), 'VietQR image rendered');
  const orderUrl = p.url();

  // 4. Validation + COD order in EN
  await p.goto(`${B}/en/products/tim-yucca-max`);
  await p.click('.pd__buy [data-add-to-cart]');
  await p.waitForTimeout(500);
  await p.goto(`${B}/en/checkout`);
  await p.fill('#o-name', 'John');
  await p.fill('#o-phone', 'abc');
  await p.fill('#o-addr', 'Somewhere');
  await Promise.all([p.waitForNavigation(), p.click('button:has-text("Place order")')]);
  ok(await p.isVisible('.alert--error'), 'invalid phone shows error');
  await p.fill('#o-phone', '+84 912 345 678');
  await p.check('input[value=cod]', { force: true });
  await Promise.all([p.waitForNavigation(), p.click('button:has-text("Place order")')]);
  ok(p.url().includes('/en/order/'), 'COD order placed (EN)');

  // 5. Contact form (ZH) + callback ajax
  await p.goto(`${B}/zh/contact`);
  await p.fill('#c-name', '王先生');
  await p.fill('#c-phone', '0988777666');
  await p.fill('#c-msg', '想了解经销政策');
  await Promise.all([p.waitForNavigation(), p.click('.form-card button[type=submit]')]);
  ok(await p.isVisible('[data-toast].toast--success'), 'contact form success toast (ZH)');
  await p.goto(`${B}/vi`);
  await p.fill('#cta-name', 'Chị Lan');
  await p.fill('#cta-phone', '0911222333');
  await p.click('.cta__form button[type=submit]');
  await p.waitForSelector('[data-live-toast].is-visible');
  ok(true, 'callback ajax form');

  // 6. Order page access control from a fresh browser context
  const ctx2 = await b.newContext();
  const p2 = await ctx2.newPage();
  await p2.goto(orderUrl);
  ok(p2.url().includes('order-lookup'), 'order page requires ownership');
  await ctx2.close();

  // 7. Admin
  await p.goto(`${B}/admin`);
  ok(p.url().includes('/admin/login'), 'admin redirects to login');
  await p.fill('#email', ADMIN_EMAIL);
  await p.fill('#password', 'wrong-password');
  await p.click('button[type=submit]');
  ok(await p.isVisible('.flash--error'), 'wrong password rejected');
  await p.fill('#password', ADMIN_PASSWORD);
  await Promise.all([p.waitForNavigation(), p.click('button[type=submit]')]);
  ok(p.url().endsWith('/admin'), 'admin login ok');
  await p.goto(`${B}/admin/orders`);
  const n = await p.$$eval('tbody tr', (r) => r.length);
  ok(n >= 2, `orders listed: ${n}`);
  await p.click('tbody tr >> nth=0 >> a');
  await p.selectOption('select[name=status]', 'confirmed');
  await p.selectOption('select[name=payment_status]', 'paid');
  await Promise.all([p.waitForNavigation(), p.click('button:has-text("Cập nhật")')]);
  ok(await p.isVisible('.flash--success'), 'order status updated');
  await p.goto(`${B}/admin/inquiries`);
  ok((await p.$$('.inq')).length >= 2, 'inquiries listed');

  await p.goto(`${B}/admin/products`);
  await p.click('tbody tr >> nth=0 >> .prow');
  await p.click('[data-lang-tab=en]');
  ok(await p.isVisible('input[name="name[en]"]'), 'language tab shows EN fields');
  await p.click('[data-add-variant]');
  const rows = await p.$$('.variant-row');
  await (await rows[rows.length - 1].$('input[name=variant_label]')).fill('Thùng 25 kg');
  await (await rows[rows.length - 1].$('input[name=variant_price]')).fill('11500000');
  await Promise.all([p.waitForNavigation(), p.click('button:has-text("Lưu thay đổi")')]);
  ok(await p.isVisible('.flash--success'), 'product saved with new variant');

  await p.goto(`${B}/admin/posts/new`);
  const slug = `bai-test-${Date.now()}`;
  await p.fill('input[name="title[vi]"]', 'Bài test từ admin');
  await p.fill('input[name=slug]', slug);
  await p.fill('textarea[name="body[vi]"]', '## Xin chào\n\n- Một\n- Hai');
  await Promise.all([p.waitForNavigation(), p.click('button:has-text("Đăng bài")')]);
  ok(await p.isVisible('.flash--success'), 'post created');
  const r = await p.goto(`${B}/vi/blog/${slug}`);
  ok(r.status() === 200 && (await p.textContent('.prose')).includes('Xin chào'), 'new post visible on site');
  // clean up the test post
  await p.goto(`${B}/admin/posts`);
  await p.click(`a:has-text("Bài test từ admin")`);
  p.once('dialog', (d) => d.accept());
  await Promise.all([p.waitForNavigation(), p.click('button:has-text("Xóa bài viết")')]);

  await p.goto(`${B}/admin/settings`);
  const oldHotline = await p.inputValue('input[name="company[hotline]"]');
  await p.fill('input[name="company[hotline]"]', '1900 9999');
  await Promise.all([p.waitForNavigation(), p.click('button:has-text("Lưu cài đặt")')]);
  await p.goto(`${B}/vi`);
  ok((await p.textContent('.topbar')).includes('1900 9999'), 'settings reflected on site');
  await p.goto(`${B}/admin/settings`);
  await p.fill('input[name="company[hotline]"]', oldHotline);
  await Promise.all([p.waitForNavigation(), p.click('button:has-text("Lưu cài đặt")')]);

  for (const path of ['/admin/categories', '/admin/diseases', '/admin/diseases/1', '/admin/account', '/admin/posts', '/admin/products/new']) {
    const rr = await p.goto(B + path);
    ok(rr.status() === 200, `admin page ${path}`);
  }

  const res = await p.request.post(`${B}/vi/inquiry`, { form: { kind: 'contact', name: 'x', phone: '0909000000' }, headers: { accept: 'application/json' } });
  ok(res.status() === 403, `POST without CSRF token rejected (${res.status()})`);

  ok(errs.length === 0, `no browser JS errors ${JSON.stringify(errs)}`);
  await b.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
