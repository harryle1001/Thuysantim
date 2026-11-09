'use strict';
const path = require('path');
const crypto = require('crypto');
const express = require('express');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const helmet = require('helmet');
const compression = require('compression');

const config = require('./config');
const { one, query } = require('./config/db');
const M = require('./models');
const H = require('./utils/helpers');
const { localeMiddleware, commonLocals, csrfProtect, detectLocale, makeT, dict } = require('./middleware');
const { packshotSvg } = require('./services/packshot');

function createApp() {
  const app = express();
  if (config.trustProxy) app.set('trust proxy', 1);
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, '../views'));
  app.disable('x-powered-by');

  /* ---------- Security headers ---------- */
  app.use((req, res, next) => {
    res.locals.nonce = crypto.randomBytes(16).toString('base64');
    next();
  });
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'", (req, res) => `'nonce-${res.locals.nonce}'`],
          styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
          fontSrc: ["'self'", 'https://fonts.gstatic.com', 'data:'],
          imgSrc: ["'self'", 'data:', 'blob:', 'https:'],
          frameSrc: ['https://www.google.com', 'https://maps.google.com', 'https://www.youtube.com'],
          connectSrc: ["'self'"],
          formAction: ["'self'", 'https://sandbox.vnpayment.vn', 'https://pay.vnpay.vn', 'https://*.momo.vn'],
          upgradeInsecureRequests: config.isProd ? [] : null,
        },
      },
      crossOriginEmbedderPolicy: false,
    })
  );
  app.use(compression());

  /* ---------- Static & generated assets ---------- */
  app.use(express.static(path.join(__dirname, '../public'), { maxAge: config.isProd ? '7d' : 0, etag: true }));

  app.get('/media/:id', async (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    if (!id) return next();
    const row = await one('SELECT mime, data FROM media WHERE id = ?', [id]);
    if (!row) return next();
    res.set('Cache-Control', 'public, max-age=31536000, immutable');
    if (row.mime === 'image/svg+xml') res.set('Content-Security-Policy', "default-src 'none'; style-src 'unsafe-inline'");
    res.type(row.mime).send(row.data);
  });

  app.get('/pack/:file', async (req, res, next) => {
    const slug = String(req.params.file).replace(/\.svg$/, '');
    const row = await one('SELECT id, slug, sku, name, variants, color FROM products WHERE slug = ?', [slug]);
    if (!row) return next();
    res.set('Cache-Control', 'public, max-age=86400');
    res.type('image/svg+xml').send(packshotSvg(row, { transparent: req.query.bg === '0' }));
  });

  app.get('/health', async (req, res) => {
    try {
      await one('SELECT 1 AS ok');
      res.json({ ok: true, db: true, uptime: Math.round(process.uptime()) });
    } catch {
      res.status(503).json({ ok: false, db: false });
    }
  });

  app.get('/robots.txt', (req, res) => {
    res.type('text/plain').send(`User-agent: *\nAllow: /\nDisallow: /admin\nDisallow: /*/cart\nDisallow: /*/checkout\nDisallow: /*/order/\n\nSitemap: ${config.baseUrl}/sitemap.xml\n`);
  });

  app.get('/sitemap.xml', async (req, res) => {
    const [products, posts, diseases] = await Promise.all([
      query('SELECT slug, updated_at FROM products WHERE is_active = 1'),
      query('SELECT slug, updated_at FROM posts WHERE is_published = 1 AND published_at <= NOW()'),
      query('SELECT slug FROM diseases'),
    ]);
    const paths = ['', '/products', '/diseases', '/blog', '/about', '/contact', '/quote']
      .map((p) => ({ p }))
      .concat(products.map((r) => ({ p: `/products/${r.slug}`, m: r.updated_at })))
      .concat(posts.map((r) => ({ p: `/blog/${r.slug}`, m: r.updated_at })))
      .concat(diseases.map((r) => ({ p: `/diseases/${r.slug}` })));
    const urls = paths
      .map(({ p, m }) =>
        H.LOCALES.map(
          (l) => `<url><loc>${config.baseUrl}/${l}${p}</loc>${m ? `<lastmod>${new Date(m).toISOString().slice(0, 10)}</lastmod>` : ''}${H.LOCALES.map((a) => `<xhtml:link rel="alternate" hreflang="${dict[a].lang.html}" href="${config.baseUrl}/${a}${p}"/>`).join('')}</url>`
        ).join('')
      )
      .join('');
    res.type('application/xml').send(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`);
  });

  /* ---------- Sessions & body ---------- */
  const store = new MySQLStore({
    ...config.db,
    createDatabaseTable: true,
    clearExpired: true,
    checkExpirationInterval: 15 * 60 * 1000,
    expiration: 30 * 24 * 3600 * 1000,
    schema: { tableName: 'sessions' },
  });
  app.locals.sessionStore = store;
  app.use(
    session({
      name: 'tst.sid',
      secret: config.sessionSecret,
      store,
      resave: false,
      saveUninitialized: false,
      rolling: true,
      cookie: { httpOnly: true, sameSite: 'lax', secure: config.isProd, maxAge: 30 * 24 * 3600 * 1000 },
    })
  );
  app.use(express.urlencoded({ extended: true, limit: '2mb' }));
  app.use(express.json({ limit: '1mb' }));

  /* ---------- Payment callbacks (signature-verified, no CSRF) ---------- */
  app.use('/payment', require('./routes/payment'));

  /* ---------- CSRF for everything else (multipart handled after multer in admin) ---------- */
  app.use((req, res, next) => {
    if (req.is('multipart/form-data')) return next();
    if (req.path === '/admin/login') return next(); // checked in route after rate-limit
    return csrfProtect(req, res, next);
  });

  /* ---------- Admin ---------- */
  app.use('/admin', async (req, res, next) => {
    if (!req.session.csrf) req.session.csrf = crypto.randomBytes(24).toString('hex');
    res.locals.csrfToken = req.session.csrf;
    res.locals.flash = req.session.flash || null;
    delete req.session.flash;
    res.locals.user = req.session.user || null;
    if (req.session.user) {
      const r = await one("SELECT (SELECT COUNT(*) FROM orders WHERE status = 'new') AS o, (SELECT COUNT(*) FROM inquiries WHERE is_read = 0) AS i");
      res.locals.badges = r;
    }
    next();
  });
  app.use('/admin', require('./routes/admin'));

  /* ---------- Localised public site ---------- */
  app.get('/', (req, res) => res.redirect(302, `/${detectLocale(req)}`));

  const localized = express.Router({ mergeParams: true });
  localized.use(localeMiddleware, commonLocals);
  localized.use(require('./routes/public'));
  localized.use(require('./routes/shop'));
  app.use('/:lang', (req, res, next) => (H.LOCALES.includes(req.params.lang) ? localized(req, res, next) : next()));

  /* ---------- 404 ---------- */
  app.use(async (req, res) => {
    const locale = H.LOCALES.find((l) => req.path.startsWith(`/${l}/`) || req.path === `/${l}`) || detectLocale(req);
    if (req.path.startsWith('/admin')) return res.status(404).send('Không tìm thấy trang.');
    await renderError(req, res, 404, locale);
  });

  /* ---------- Errors ---------- */
  // eslint-disable-next-line no-unused-vars
  app.use(async (err, req, res, next) => {
    const status = err.status || err.statusCode || 500;
    if (status >= 500) console.error('[error]', req.method, req.originalUrl, err);
    if (res.headersSent) return;
    if (err.code === 'EBADCSRFTOKEN' || err.code === 'LIMIT_FILE_SIZE') {
      const msg = err.code === 'LIMIT_FILE_SIZE' ? 'Ảnh quá lớn (tối đa 4 MB).' : makeT(req.session && req.session.locale)('form.errors.csrf');
      if (req.session) req.session.flash = { type: 'error', message: msg };
      if (req.xhr || (req.get('accept') || '').includes('json')) return res.status(status).json({ ok: false, error: msg });
      return res.redirect(303, req.get('referer') && new URL(req.get('referer'), config.baseUrl).host === new URL(config.baseUrl).host ? req.get('referer') : '/');
    }
    if (req.path.startsWith('/admin')) return res.status(status).send(`<h1>Lỗi ${status}</h1><p>${config.isProd ? 'Đã có lỗi xảy ra.' : H.escapeHtml(err.message)}</p><a href="/admin">Quay lại</a>`);
    const locale = (req.session && req.session.locale) || 'vi';
    await renderError(req, res, status >= 500 ? 500 : status, locale);
  });

  async function renderError(req, res, status, locale) {
    res.status(status);
    const t = makeT(locale);
    Object.assign(res.locals, {
      locale,
      t,
      L: dict[locale],
      tr: (f) => H.tr(f, locale),
      money: (n) => H.money(n, locale),
      date: (d) => H.formatDate(d, locale),
      url: (p = '') => `/${locale}${p}`,
      pathRest: '',
      H,
      icon: require('./utils/icons').icon,
      LOCALES: H.LOCALES,
      dicts: dict,
      md: (s) => s,
      nl2p: (s) => s,
      cartCount: ((req.session && req.session.cart) || []).reduce((s, i) => s + i.qty, 0),
      flash: null,
      csrfToken: (req.session && req.session.csrf) || '',
      config: { baseUrl: config.baseUrl },
      seo: { title: `${status === 404 ? t('common.notFound') : t('common.error')} — Thủy Sản Tím`, description: '', noindex: true },
    });
    try {
      res.locals.settings = await M.getSettings();
    } catch {
      res.locals.settings = { company: { name: 'THỦY SẢN TÍM' } };
    }
    res.render('pages/error', { page: 'error', status });
  }

  return app;
}

module.exports = { createApp };
