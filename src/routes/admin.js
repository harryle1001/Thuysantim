'use strict';
const express = require('express');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const rateLimit = require('express-rate-limit');
const { query, one } = require('../config/db');
const M = require('../models');
const H = require('../utils/helpers');
const { requireAdmin, csrfProtect, flash } = require('../middleware');

const router = express.Router();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 4 * 1024 * 1024, files: 1 },
  fileFilter: (req, file, cb) => cb(null, /^image\/(png|jpe?g|webp|gif|svg\+xml|avif)$/.test(file.mimetype)),
});
const loginLimiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 10, standardHeaders: 'draft-7', legacyHeaders: false, skipSuccessfulRequests: true });

const LANGS = H.LOCALES;
const ORDER_STATUSES = ['new', 'confirmed', 'shipping', 'completed', 'cancelled'];
const PAY_STATUSES = ['unpaid', 'paid', 'failed', 'refunded'];
const STATUS_LABEL = { new: 'Mới', confirmed: 'Đã xác nhận', shipping: 'Đang giao', completed: 'Hoàn tất', cancelled: 'Đã hủy' };
const PAY_LABEL = { unpaid: 'Chưa thanh toán', paid: 'Đã thanh toán', failed: 'Lỗi thanh toán', refunded: 'Đã hoàn tiền' };
const METHOD_LABEL = { cod: 'COD', vietqr: 'VietQR', vnpay: 'VNPay', momo: 'MoMo', callback: 'Gọi lại' };
const KIND_LABEL = { contact: 'Liên hệ', quote: 'Báo giá', dealer: 'Đại lý', callback: 'Gọi lại', newsletter: 'Bản tin' };

router.use((req, res, next) => {
  res.locals.H = H;
  res.locals.icon = require('../utils/icons').icon;
  res.locals.tr = (f) => H.tr(f, 'vi');
  res.locals.money = (n) => H.money(n, 'vi');
  res.locals.dt = H.formatDateTime;
  res.locals.LANGS = LANGS;
  res.locals.LANG_NAMES = { vi: 'Tiếng Việt', en: 'English', zh: '中文' };
  res.locals.STATUS_LABEL = STATUS_LABEL;
  res.locals.PAY_LABEL = PAY_LABEL;
  res.locals.METHOD_LABEL = METHOD_LABEL;
  res.locals.KIND_LABEL = KIND_LABEL;
  res.locals.adminPath = req.path;
  res.locals.robots = 'noindex, nofollow';
  res.set('X-Robots-Tag', 'noindex, nofollow');
  next();
});

/** Collect {vi,en,zh} from body field like name[vi] */
const ml = (obj) => {
  const o = obj && typeof obj === 'object' ? obj : {};
  const out = {};
  for (const l of LANGS) out[l] = typeof o[l] === 'string' ? o[l].trim() : '';
  return JSON.stringify(out);
};
const str = (v, n = 255) => (typeof v === 'string' ? v.trim().slice(0, n) : '');
const chk = (v) => (v === '1' || v === 'on' ? 1 : 0);

async function saveUpload(file) {
  if (!file) return null;
  const r = await query('INSERT INTO media (filename, mime, size, data) VALUES (?, ?, ?, ?)', [file.originalname.slice(0, 250), file.mimetype, file.size, file.buffer]);
  return String(r.insertId);
}

/* ======================= Auth ======================= */
router.get('/login', (req, res) => {
  if (req.session.user) return res.redirect('/admin');
  res.render('admin/login', { error: null, email: '' });
});

router.post('/login', loginLimiter, csrfProtect, async (req, res) => {
  const email = str(req.body.email, 190).toLowerCase();
  const user = await one('SELECT * FROM users WHERE email = ?', [email]);
  const ok = user && (await bcrypt.compare(String(req.body.password || ''), user.password_hash));
  if (!ok) return res.status(401).render('admin/login', { error: 'Email hoặc mật khẩu không đúng.', email });
  await query('UPDATE users SET last_login_at = NOW() WHERE id = ?', [user.id]);
  const returnTo = req.session.returnTo && req.session.returnTo.startsWith('/admin') ? req.session.returnTo : '/admin';
  req.session.regenerate((err) => {
    if (err) throw err;
    req.session.user = { id: user.id, email: user.email, name: user.name };
    res.redirect(returnTo);
  });
});

router.post('/logout', csrfProtect, (req, res) => {
  req.session.destroy(() => res.redirect('/admin/login'));
});

router.use(requireAdmin);

/* ======================= Dashboard ======================= */
router.get('/', async (req, res) => {
  const [stats] = await query(`SELECT
      (SELECT COUNT(*) FROM orders WHERE status = 'new') AS newOrders,
      (SELECT COALESCE(SUM(total),0) FROM orders WHERE status <> 'cancelled' AND created_at >= DATE_FORMAT(NOW(), '%Y-%m-01')) AS monthRevenue,
      (SELECT COUNT(*) FROM orders WHERE created_at >= DATE_FORMAT(NOW(), '%Y-%m-01')) AS monthOrders,
      (SELECT COUNT(*) FROM inquiries WHERE is_read = 0) AS unread,
      (SELECT COUNT(*) FROM products WHERE is_active = 1) AS products,
      (SELECT COUNT(*) FROM posts WHERE is_published = 1) AS posts`);
  const daily = await query(`SELECT DATE(created_at) AS d, COUNT(*) AS n, COALESCE(SUM(total),0) AS revenue FROM orders
      WHERE created_at >= DATE_SUB(CURDATE(), INTERVAL 13 DAY) AND status <> 'cancelled' GROUP BY DATE(created_at)`);
  const days = [];
  for (let i = 13; i >= 0; i -= 1) {
    const d = new Date(Date.now() - i * 86400000);
    const key = d.toISOString().slice(0, 10);
    const row = daily.find((r) => new Date(r.d).toISOString().slice(0, 10) === key || String(r.d).slice(0, 10) === key);
    days.push({ label: `${d.getDate()}/${d.getMonth() + 1}`, revenue: row ? Number(row.revenue) : 0, n: row ? row.n : 0 });
  }
  const recentOrders = await query('SELECT * FROM orders ORDER BY id DESC LIMIT 6');
  const recentInq = await query('SELECT * FROM inquiries ORDER BY id DESC LIMIT 6');
  res.render('admin/dashboard', { title: 'Tổng quan', stats, days, recentOrders, recentInq });
});

/* ======================= Products ======================= */
router.get('/products', async (req, res) => {
  const rows = await M.products.list({ includeInactive: true, limit: 1000, q: str(req.query.q, 80) });
  res.render('admin/products', { title: 'Sản phẩm', items: rows.map((p) => M.localizeProduct(p, 'vi')), q: str(req.query.q, 80) });
});

router.get('/products/new', async (req, res) => {
  res.render('admin/product-form', { title: 'Thêm sản phẩm', item: { variants: '[{"label":"1 kg","price":0}]', color: '#6d28d9', is_active: 1, species: 'all', rating: 5 }, categories: await M.categories.all() });
});

router.get('/products/:id', async (req, res, next) => {
  const item = await M.products.byId(req.params.id);
  if (!item) return next();
  res.render('admin/product-form', { title: 'Sửa sản phẩm', item, categories: await M.categories.all() });
});

router.post('/products/:id', upload.single('image_file'), csrfProtect, async (req, res) => {
  const b = req.body;
  const isNew = req.params.id === 'new';
  const names = b.name || {};
  const slug = H.slugify(str(b.slug) || names.vi || names.en || `san-pham-${Date.now()}`);
  const labels = [].concat(b.variant_label || []);
  const prices = [].concat(b.variant_price || []);
  const variants = labels.map((l, i) => ({ label: str(l, 60), price: Math.max(0, parseInt(String(prices[i] || '0').replace(/\D/g, ''), 10) || 0) })).filter((v) => v.label);
  let image = str(b.image, 255) || null;
  const uploaded = await saveUpload(req.file);
  if (uploaded) image = uploaded;
  if (b.remove_image === '1') image = null;
  const data = {
    slug,
    sku: str(b.sku, 60) || slug.toUpperCase().slice(0, 20),
    category_id: parseInt(b.category_id, 10) || null,
    species: ['shrimp', 'fish', 'all'].includes(b.species) ? b.species : 'all',
    name: ml(b.name),
    summary: ml(b.summary),
    description: ml(b.description),
    composition: ml(b.composition),
    usage_text: ml(b.usage_text),
    dosage: ml(b.dosage),
    variants: JSON.stringify(variants.length ? variants : [{ label: 'Liên hệ', price: 0 }]),
    image,
    color: /^#[0-9a-f]{6}$/i.test(b.color) ? b.color : '#6d28d9',
    badge: ['bestseller', 'new', 'premium'].includes(b.badge) ? b.badge : null,
    rating: Math.min(5, Math.max(0, parseFloat(b.rating) || 5)),
    is_featured: chk(b.is_featured),
    is_active: chk(b.is_active),
    sort_order: parseInt(b.sort_order, 10) || 0,
  };
  try {
    if (isNew) {
      const r = await query('INSERT INTO products SET ?', [data]);
      flash(req, 'success', 'Đã thêm sản phẩm.');
      return res.redirect(`/admin/products/${r.insertId}`);
    }
    await query('UPDATE products SET ? WHERE id = ?', [data, req.params.id]);
    flash(req, 'success', 'Đã lưu thay đổi.');
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') flash(req, 'error', 'Đường dẫn (slug) đã tồn tại, vui lòng chọn slug khác.');
    else throw err;
  }
  res.redirect(isNew ? '/admin/products/new' : `/admin/products/${req.params.id}`);
});

router.post('/products/:id/delete', csrfProtect, async (req, res) => {
  await query('DELETE FROM products WHERE id = ?', [req.params.id]);
  flash(req, 'success', 'Đã xóa sản phẩm.');
  res.redirect('/admin/products');
});

/* ======================= Categories ======================= */
router.get('/categories', async (req, res) => {
  res.render('admin/categories', { title: 'Danh mục', items: await M.categories.all() });
});

router.post('/categories/:id', csrfProtect, async (req, res) => {
  const b = req.body;
  const data = {
    slug: H.slugify(str(b.slug) || (b.name && b.name.vi) || `danh-muc-${Date.now()}`),
    name: ml(b.name),
    description: ml(b.description),
    icon: ['microbe', 'drop', 'mineral', 'shield', 'leaf', 'flask'].includes(b.icon) ? b.icon : 'drop',
    sort_order: parseInt(b.sort_order, 10) || 0,
  };
  try {
    if (req.params.id === 'new') await query('INSERT INTO categories SET ?', [data]);
    else await query('UPDATE categories SET ? WHERE id = ?', [data, req.params.id]);
    flash(req, 'success', 'Đã lưu danh mục.');
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') flash(req, 'error', 'Slug danh mục đã tồn tại.');
    else throw err;
  }
  res.redirect('/admin/categories');
});

router.post('/categories/:id/delete', csrfProtect, async (req, res) => {
  await query('UPDATE products SET category_id = NULL WHERE category_id = ?', [req.params.id]);
  await query('DELETE FROM categories WHERE id = ?', [req.params.id]);
  flash(req, 'success', 'Đã xóa danh mục.');
  res.redirect('/admin/categories');
});

/* ======================= Posts ======================= */
router.get('/posts', async (req, res) => {
  const rows = await M.posts.list({ includeDrafts: true, limit: 500 });
  res.render('admin/posts', { title: 'Bài viết', items: rows });
});

router.get('/posts/new', (req, res) => {
  res.render('admin/post-form', { title: 'Viết bài mới', item: { is_published: 1, topic: 'technique', read_minutes: 5, published_at: new Date() } });
});

router.get('/posts/:id', async (req, res, next) => {
  const item = await M.posts.byId(req.params.id);
  if (!item) return next();
  res.render('admin/post-form', { title: 'Sửa bài viết', item });
});

router.post('/posts/:id', upload.single('cover_file'), csrfProtect, async (req, res) => {
  const b = req.body;
  const isNew = req.params.id === 'new';
  let cover = str(b.cover, 255) || null;
  const uploaded = await saveUpload(req.file);
  if (uploaded) cover = uploaded;
  if (b.remove_cover === '1') cover = null;
  const pub = new Date(b.published_at);
  const data = {
    slug: H.slugify(str(b.slug) || (b.title && b.title.vi) || `bai-viet-${Date.now()}`),
    title: ml(b.title),
    excerpt: ml(b.excerpt),
    body: ml(b.body),
    topic: ['technique', 'disease', 'news'].includes(b.topic) ? b.topic : 'technique',
    cover,
    author: str(b.author, 120) || 'Phòng Kỹ thuật Thủy Sản Tím',
    read_minutes: H.clampInt(b.read_minutes, 1, 120, 5),
    is_published: chk(b.is_published),
    published_at: Number.isNaN(pub.getTime()) ? new Date() : pub,
  };
  try {
    if (isNew) {
      const r = await query('INSERT INTO posts SET ?', [data]);
      flash(req, 'success', 'Đã đăng bài viết.');
      return res.redirect(`/admin/posts/${r.insertId}`);
    }
    await query('UPDATE posts SET ? WHERE id = ?', [data, req.params.id]);
    flash(req, 'success', 'Đã lưu bài viết.');
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') flash(req, 'error', 'Slug bài viết đã tồn tại.');
    else throw err;
  }
  res.redirect(isNew ? '/admin/posts/new' : `/admin/posts/${req.params.id}`);
});

router.post('/posts/:id/delete', csrfProtect, async (req, res) => {
  await query('DELETE FROM posts WHERE id = ?', [req.params.id]);
  flash(req, 'success', 'Đã xóa bài viết.');
  res.redirect('/admin/posts');
});

/* ======================= Diseases ======================= */
router.get('/diseases', async (req, res) => {
  res.render('admin/diseases', { title: 'Tra cứu bệnh', items: await M.diseases.all() });
});

router.get('/diseases/new', async (req, res) => {
  res.render('admin/disease-form', { title: 'Thêm bệnh', item: { species: 'shrimp', severity: 'medium' }, products: await M.products.list({ includeInactive: true, limit: 1000 }) });
});

router.get('/diseases/:id', async (req, res, next) => {
  const item = await M.diseases.byId(req.params.id);
  if (!item) return next();
  res.render('admin/disease-form', { title: 'Sửa bệnh', item, products: await M.products.list({ includeInactive: true, limit: 1000 }) });
});

router.post('/diseases/:id', csrfProtect, async (req, res) => {
  const b = req.body;
  const isNew = req.params.id === 'new';
  const data = {
    slug: H.slugify(str(b.slug) || (b.name && b.name.vi) || `benh-${Date.now()}`),
    species: ['shrimp', 'fish', 'all'].includes(b.species) ? b.species : 'shrimp',
    severity: ['high', 'medium', 'low'].includes(b.severity) ? b.severity : 'medium',
    name: ml(b.name),
    pathogen: ml(b.pathogen),
    symptoms: ml(b.symptoms),
    causes: ml(b.causes),
    prevention: ml(b.prevention),
    treatment: ml(b.treatment),
    product_ids: [].concat(b.product_ids || []).map((x) => parseInt(x, 10)).filter(Boolean).join(','),
    sort_order: parseInt(b.sort_order, 10) || 0,
  };
  try {
    if (isNew) {
      const r = await query('INSERT INTO diseases SET ?', [data]);
      flash(req, 'success', 'Đã thêm bệnh.');
      return res.redirect(`/admin/diseases/${r.insertId}`);
    }
    await query('UPDATE diseases SET ? WHERE id = ?', [data, req.params.id]);
    flash(req, 'success', 'Đã lưu.');
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') flash(req, 'error', 'Slug đã tồn tại.');
    else throw err;
  }
  res.redirect(isNew ? '/admin/diseases/new' : `/admin/diseases/${req.params.id}`);
});

router.post('/diseases/:id/delete', csrfProtect, async (req, res) => {
  await query('DELETE FROM diseases WHERE id = ?', [req.params.id]);
  flash(req, 'success', 'Đã xóa.');
  res.redirect('/admin/diseases');
});

/* ======================= Orders ======================= */
router.get('/orders', async (req, res) => {
  const status = ORDER_STATUSES.includes(req.query.status) ? req.query.status : '';
  const q = str(req.query.q, 60);
  const where = [];
  const params = [];
  if (status) {
    where.push('status = ?');
    params.push(status);
  }
  if (q) {
    where.push('(code LIKE ? OR phone LIKE ? OR customer_name LIKE ?)');
    params.push(`%${q}%`, `%${q}%`, `%${q}%`);
  }
  const items = await query(`SELECT * FROM orders ${where.length ? `WHERE ${where.join(' AND ')}` : ''} ORDER BY id DESC LIMIT 300`, params);
  const counts = await query('SELECT status, COUNT(*) AS n FROM orders GROUP BY status');
  res.render('admin/orders', { title: 'Đơn hàng', items, status, q, counts: Object.fromEntries(counts.map((c) => [c.status, c.n])), ORDER_STATUSES });
});

router.get('/orders/:id', async (req, res, next) => {
  const order = await M.orders.byId(req.params.id);
  if (!order) return next();
  res.render('admin/order', { title: `Đơn ${order.code}`, order, items: H.parseJSON(order.items, []), ORDER_STATUSES, PAY_STATUSES });
});

router.post('/orders/:id', csrfProtect, async (req, res) => {
  const b = req.body;
  await query('UPDATE orders SET status = ?, payment_status = ?, admin_note = ? WHERE id = ?', [
    ORDER_STATUSES.includes(b.status) ? b.status : 'new',
    PAY_STATUSES.includes(b.payment_status) ? b.payment_status : 'unpaid',
    str(b.admin_note, 4000) || null,
    req.params.id,
  ]);
  flash(req, 'success', 'Đã cập nhật đơn hàng.');
  res.redirect(`/admin/orders/${req.params.id}`);
});

/* ======================= Inquiries ======================= */
router.get('/inquiries', async (req, res) => {
  const kind = Object.keys(KIND_LABEL).includes(req.query.kind) ? req.query.kind : '';
  const items = await query(`SELECT * FROM inquiries ${kind ? 'WHERE kind = ?' : ''} ORDER BY id DESC LIMIT 500`, kind ? [kind] : []);
  res.render('admin/inquiries', { title: 'Liên hệ & Báo giá', items, kind });
});

router.post('/inquiries/:id/read', csrfProtect, async (req, res) => {
  await query('UPDATE inquiries SET is_read = 1 - is_read WHERE id = ?', [req.params.id]);
  res.redirect(`/admin/inquiries${req.body.kind ? `?kind=${encodeURIComponent(req.body.kind)}` : ''}`);
});

router.post('/inquiries/:id/delete', csrfProtect, async (req, res) => {
  await query('DELETE FROM inquiries WHERE id = ?', [req.params.id]);
  flash(req, 'success', 'Đã xóa.');
  res.redirect('/admin/inquiries');
});

/* ======================= Settings ======================= */
router.get('/settings', async (req, res) => {
  const pay = require('../services/payments');
  res.render('admin/settings', { title: 'Cài đặt', s: await M.getSettings(), gateways: { vnpay: pay.vnpayEnabled(), momo: pay.momoEnabled() } });
});

router.post('/settings', csrfProtect, async (req, res) => {
  const b = req.body;
  const c = b.company || {};
  await M.saveSetting('company', {
    name: str(c.name, 120) || 'THỦY SẢN TÍM',
    legal: JSON.parse(ml(c.legal)),
    tagline: JSON.parse(ml(c.tagline)),
    address: JSON.parse(ml(c.address)),
    hours: JSON.parse(ml(c.hours)),
    hotline: str(c.hotline, 40),
    phone: str(c.phone, 40),
    zalo: str(c.zalo, 40).replace(/\D/g, ''),
    email: str(c.email, 190),
    facebook: str(c.facebook, 255),
    youtube: str(c.youtube, 255),
    tiktok: str(c.tiktok, 255),
    mapEmbed: /^https:\/\/(www\.)?google\.[a-z.]+\/maps/.test(str(c.mapEmbed, 1000)) ? str(c.mapEmbed, 1000) : '',
  });
  const st = b.stats || {};
  await M.saveSetting('stats', { years: H.clampInt(st.years, 0, 1e6, 0), dealers: H.clampInt(st.dealers, 0, 1e6, 0), provinces: H.clampInt(st.provinces, 0, 1e6, 0), ponds: H.clampInt(st.ponds, 0, 1e9, 0) });
  const bk = b.bank || {};
  await M.saveSetting('bank', { bin: str(bk.bin, 20), accountNo: str(bk.accountNo, 40).replace(/\s/g, ''), accountName: str(bk.accountName, 120).toUpperCase(), bankName: str(bk.bankName, 120) });
  const sh = b.shipping || {};
  await M.saveSetting('shipping', { fee: H.clampInt(String(sh.fee || '').replace(/\D/g, ''), 0, 1e9, 0), freeFrom: H.clampInt(String(sh.freeFrom || '').replace(/\D/g, ''), 0, 1e12, 0) });
  const p = b.payments || {};
  await M.saveSetting('payments', { cod: chk(p.cod) === 1, vietqr: chk(p.vietqr) === 1, vnpay: chk(p.vnpay) === 1, momo: chk(p.momo) === 1, callback: chk(p.callback) === 1 });
  flash(req, 'success', 'Đã lưu cài đặt.');
  res.redirect('/admin/settings');
});

/* ======================= Account ======================= */
router.get('/account', (req, res) => res.render('admin/account', { title: 'Tài khoản' }));

router.post('/account', csrfProtect, async (req, res) => {
  const user = await one('SELECT * FROM users WHERE id = ?', [req.session.user.id]);
  const { current, next: nextPw, confirm } = req.body;
  if (!(await bcrypt.compare(String(current || ''), user.password_hash))) flash(req, 'error', 'Mật khẩu hiện tại không đúng.');
  else if (String(nextPw || '').length < 10) flash(req, 'error', 'Mật khẩu mới phải có ít nhất 10 ký tự.');
  else if (nextPw !== confirm) flash(req, 'error', 'Xác nhận mật khẩu không khớp.');
  else {
    await query('UPDATE users SET password_hash = ? WHERE id = ?', [await bcrypt.hash(nextPw, 11), user.id]);
    flash(req, 'success', 'Đã đổi mật khẩu.');
  }
  res.redirect('/admin/account');
});

module.exports = router;
