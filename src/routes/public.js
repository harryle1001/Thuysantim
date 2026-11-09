'use strict';
const express = require('express');
const rateLimit = require('express-rate-limit');
const M = require('../models');
const H = require('../utils/helpers');
const { query } = require('../config/db');
const { notifyInquiry } = require('../services/mailer');
const { analyzeArticle } = require('../services/article');

const router = express.Router({ mergeParams: true });

const formLimiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 20, standardHeaders: 'draft-7', legacyHeaders: false });

const seo = (res, title, description, extra = {}) => {
  res.locals.seo = { title, description, ...extra };
};

/* ---------------- Home ---------------- */
router.get('/', async (req, res) => {
  const L = req.locale;
  const [cats, featured, posts, diseases] = await Promise.all([
    M.categories.all(),
    M.products.list({ featured: true, limit: 8 }),
    M.posts.list({ limit: 14 }),
    M.diseases.all(),
  ]);
  seo(res, res.locals.t('meta.title'), res.locals.t('meta.description'));
  res.render('pages/home', {
    page: 'home',
    categories: cats.map((c) => M.localizeCategory(c, L)),
    featured: featured.map((p) => M.localizeProduct(p, L)),
    // Handbook: the pillar guide leads, the next newest follow, and the rest become keyword chips.
    ...(() => {
      const all = posts.map((p) => M.localizePost(p, L));
      const lead = all.find((p) => p.slug === 'quy-trinh-nuoi-tom-the-chan-trang-tu-a-den-z') || all[0];
      const rest = all.filter((p) => p !== lead);
      return { guideMain: lead, guideList: rest.slice(0, 4), guideChips: rest.slice(4, 12) };
    })(),
    diseases: diseases.slice(0, 6).map((d) => M.localizeDisease(d, L)),
  });
});

/* ---------------- Products ---------------- */
router.get('/products', async (req, res) => {
  const L = req.locale;
  const category = typeof req.query.category === 'string' ? req.query.category : '';
  const species = ['shrimp', 'fish'].includes(req.query.species) ? req.query.species : '';
  const q = typeof req.query.q === 'string' ? req.query.q.trim().slice(0, 80) : '';
  const sort = ['price-asc', 'price-desc', 'name'].includes(req.query.sort) ? req.query.sort : '';
  const [cats, rows] = await Promise.all([M.categories.all(), M.products.list({ category, species, q })]);
  let items = rows.map((p) => M.localizeProduct(p, L));
  if (sort === 'price-asc') items.sort((a, b) => a.minPrice - b.minPrice);
  if (sort === 'price-desc') items.sort((a, b) => b.minPrice - a.minPrice);
  if (sort === 'name') items.sort((a, b) => a.title.localeCompare(b.title, L));
  const cat = cats.find((c) => c.slug === category);
  const catLoc = cat ? M.localizeCategory(cat, L) : null;
  const t = res.locals.t;
  const catTitle = catLoc && (L === 'vi' ? `${catLoc.title} cho tôm, cá | Thủy Sản Tím` : `${catLoc.title} | Thủy Sản Tím`);
  seo(res, catTitle || t('seo.productsTitle'),
    catLoc ? catLoc.desc : t('seo.productsDesc'), { noindex: Boolean(q || sort) });
  res.render('pages/products', { page: 'products', categories: cats.map((c) => M.localizeCategory(c, L)), items, filters: { category, species, q, sort }, currentCategory: catLoc });
});

router.get('/products/:slug', async (req, res, next) => {
  const L = req.locale;
  const row = await M.products.bySlug(req.params.slug);
  if (!row) return next();
  const product = M.localizeProduct(row, L);
  const shortName = product.title.split('—')[0].trim();
  const [related, allDiseases, guides] = await Promise.all([
    M.products.related(row, 4),
    M.diseases.all(),
    // Articles that mention this product (internal links both ways)
    query("SELECT * FROM posts WHERE is_published = 1 AND published_at <= NOW() AND body LIKE ? ORDER BY published_at DESC LIMIT 3", [`%${shortName}%`]),
  ]);
  const diseases = allDiseases.map((d) => M.localizeDisease(d, L)).filter((d) => d.productIdList.includes(row.id));
  seo(res, `${product.title} | Thủy Sản Tím`, product.summaryText.slice(0, 170), { image: `${res.locals.config.baseUrl}${product.imageSrc}`, type: 'product' });
  res.render('pages/product', { page: 'products', product, related: related.map((p) => M.localizeProduct(p, L)), diseases, guides: guides.map((p) => M.localizePost(p, L)) });
});

/* ---------------- Diseases ---------------- */
router.get('/diseases', async (req, res) => {
  const L = req.locale;
  const rows = await M.diseases.all();
  seo(res, res.locals.t('seo.diseasesTitle'), res.locals.t('seo.diseasesDesc'));
  res.render('pages/diseases', { page: 'diseases', items: rows.map((d) => M.localizeDisease(d, L)) });
});

router.get('/diseases/:slug', async (req, res, next) => {
  const L = req.locale;
  const row = await M.diseases.bySlug(req.params.slug);
  if (!row) return next();
  const disease = M.localizeDisease(row, L);
  const [prods, all] = await Promise.all([M.products.byIds(disease.productIdList), M.diseases.all()]);
  const dTitle = { vi: `${disease.title}: dấu hiệu, nguyên nhân và cách phòng trị`, en: `${disease.title}: signs, causes and prevention`, zh: `${disease.title}：症状、病因与防治` }[L];
  seo(res, `${dTitle} | Thủy Sản Tím`, `${disease.pathogenText}. ${disease.symptomsText}`.replace(/\s+/g, ' ').slice(0, 165));
  res.render('pages/disease', {
    page: 'diseases',
    disease,
    products: prods.map((p) => M.localizeProduct(p, L)),
    others: all.filter((d) => d.id !== row.id).slice(0, 4).map((d) => M.localizeDisease(d, L)),
  });
});

/* ---------------- Blog ---------------- */
router.get('/blog', async (req, res) => {
  const L = req.locale;
  const topic = ['technique', 'disease', 'news'].includes(req.query.topic) ? req.query.topic : '';
  const pageNo = H.clampInt(req.query.page, 1, 999, 1);
  const per = 9;
  const [rows, total] = await Promise.all([M.posts.list({ topic, limit: per, offset: (pageNo - 1) * per }), M.posts.count({ topic })]);
  const t = res.locals.t;
  const base = topic ? `${t('seo.topicTitles.' + topic)} | Thủy Sản Tím` : t('seo.blogTitle');
  seo(res, pageNo > 1 ? base.replace(' | ', ` – ${t('seo.page')} ${pageNo} | `) : base, t('seo.blogDesc'));
  res.render('pages/blog', { page: 'blog', items: rows.map((p) => M.localizePost(p, L)), topic, pageNo, pages: Math.max(1, Math.ceil(total / per)) });
});

router.get('/blog/:slug', async (req, res, next) => {
  const L = req.locale;
  const row = await M.posts.bySlug(req.params.slug);
  if (!row) return next();
  const post = M.localizePost(row, L);
  const [sameTopic, latest, allProducts] = await Promise.all([
    M.posts.list({ topic: row.topic, limit: 5 }),
    M.posts.list({ limit: 6 }),
    M.products.list({ limit: 100 }),
  ]);
  const products = allProducts.map((p) => M.localizeProduct(p, L));
  const article = analyzeArticle(post.bodyText, {
    render: res.locals.md,
    products: products.map((p) => ({ slug: p.slug, shortName: p.title.split('—')[0].trim() })),
    productUrl: (slug) => res.locals.url(`/products/${slug}`),
  });
  // Related reading: same topic first, then the newest, never the article itself.
  const seen = new Set([row.id]);
  const others = [...sameTopic, ...latest].filter((p) => !seen.has(p.id) && seen.add(p.id)).slice(0, 3);
  // Products the article talks about, or best-sellers as a fallback.
  let picks = article.mentioned.map((s) => products.find((p) => p.slug === s)).filter(Boolean);
  if (!picks.length) picks = products.filter((p) => p.is_featured);
  seo(res, `${post.titleText} | Thủy Sản Tím`, post.excerptText, {
    type: 'article',
    image: `${res.locals.config.baseUrl}/img/og-cover.png`,
    published: row.published_at,
    modified: row.updated_at,
  });
  res.render('pages/post', { page: 'blog', post, article, picks: picks.slice(0, 3), others: others.map((p) => M.localizePost(p, L)) });
});

/* ---------------- Static pages ---------------- */
router.get('/about', (req, res) => {
  seo(res, `${res.locals.t('about.title')}`, res.locals.t('about.lead'));
  res.render('pages/about', { page: 'about' });
});

router.get('/contact', (req, res) => {
  seo(res, `${res.locals.t('contact.title')} — Thủy Sản Tím`, res.locals.t('contact.lead'));
  res.render('pages/contact', { page: 'contact', form: {}, sent: req.query.sent === '1', kind: req.query.kind === 'dealer' ? 'dealer' : 'contact' });
});

router.get('/quote', async (req, res) => {
  const L = req.locale;
  const rows = await M.products.list({});
  seo(res, `${res.locals.t('quote.title')} — Thủy Sản Tím`, res.locals.t('quote.lead'));
  res.render('pages/quote', { page: 'quote', products: rows.map((p) => M.localizeProduct(p, L)), form: { product: typeof req.query.product === 'string' ? req.query.product.slice(0, 200) : '' }, sent: req.query.sent === '1' });
});

/* ---------------- Inquiry submit (contact / quote / dealer / callback) ---------------- */
router.post('/inquiry', formLimiter, async (req, res) => {
  const t = res.locals.t;
  const b = req.body || {};
  const kind = ['contact', 'quote', 'dealer', 'callback', 'newsletter'].includes(b.kind) ? b.kind : 'contact';
  const clean = (v, n = 255) => (typeof v === 'string' ? v.trim().slice(0, n) : '');
  const inq = {
    kind,
    name: clean(b.name, 160) || (kind === 'newsletter' ? 'Newsletter' : ''),
    phone: clean(b.phone, 30) || (kind === 'newsletter' ? '-' : ''),
    email: clean(b.email, 190),
    company: clean(b.company, 190),
    province: clean(b.province, 120),
    product: clean(b.product, 255),
    quantity: clean(b.quantity, 120),
    message: clean(b.message, 4000),
  };
  const back = clean(b.back, 200).startsWith(`/${req.locale}`) ? clean(b.back, 200) : `/${req.locale}/contact`;
  const wantsJson = req.xhr || (req.get('accept') || '').includes('application/json');

  let error = null;
  if (b.website) error = t('form.errors.required'); // honeypot
  else if (kind === 'newsletter' ? !H.isEmail(inq.email) : !inq.name || !inq.phone) error = t('form.errors.required');
  else if (kind !== 'newsletter' && !H.isPhone(inq.phone)) error = t('form.errors.phone');
  else if (inq.email && !H.isEmail(inq.email)) error = t('form.errors.email');

  if (error) {
    if (wantsJson) return res.status(422).json({ ok: false, error });
    req.session.flash = { type: 'error', message: error };
    return res.redirect(back);
  }

  await query('INSERT INTO inquiries (kind, name, phone, email, company, province, product, quantity, message, locale) VALUES (?,?,?,?,?,?,?,?,?,?)', [
    inq.kind, inq.name, inq.phone, inq.email || null, inq.company || null, inq.province || null, inq.product || null, inq.quantity || null, inq.message || null, req.locale,
  ]);
  notifyInquiry(inq);
  if (wantsJson) return res.json({ ok: true, message: t('form.success') });
  req.session.flash = { type: 'success', message: t('form.success') };
  res.redirect(back);
});

module.exports = router;
