'use strict';
const { query, one } = require('../config/db');
const { tr, parseJSON } = require('../utils/helpers');

/* ---------------- Settings (cached) ---------------- */
let settingsCache = null;
let settingsAt = 0;

async function getSettings() {
  if (settingsCache && Date.now() - settingsAt < 30000) return settingsCache;
  const rows = await query('SELECT `key`, `value` FROM settings');
  const s = {};
  for (const r of rows) s[r.key] = parseJSON(r.value, {});
  settingsCache = s;
  settingsAt = Date.now();
  return s;
}

async function saveSetting(key, value) {
  await query('INSERT INTO settings (`key`, `value`) VALUES (?, ?) ON DUPLICATE KEY UPDATE `value` = VALUES(`value`)', [key, JSON.stringify(value)]);
  settingsCache = null;
}

/* ---------------- Localizers ---------------- */
function imageUrl(image, fallback) {
  if (!image) return fallback;
  if (/^https?:\/\//.test(image) || image.startsWith('/')) return image;
  return `/media/${image}`;
}

function localizeCategory(row, locale) {
  if (!row) return null;
  return { ...row, title: tr(row.name, locale), desc: tr(row.description, locale) };
}

function localizeProduct(row, locale) {
  if (!row) return null;
  const variants = parseJSON(row.variants, []).filter((v) => v && v.label);
  const prices = variants.map((v) => Number(v.price) || 0).filter((p) => p > 0);
  return {
    ...row,
    title: tr(row.name, locale),
    summaryText: tr(row.summary, locale),
    descriptionText: tr(row.description, locale),
    compositionText: tr(row.composition, locale),
    usageText: tr(row.usage_text, locale),
    dosageText: tr(row.dosage, locale),
    categoryTitle: row.category_name ? tr(row.category_name, locale) : '',
    variantList: variants,
    minPrice: prices.length ? Math.min(...prices) : 0,
    imageSrc: imageUrl(row.image, `/pack/${row.slug}.svg`),
    galleryList: parseJSON(row.gallery, []).map((g) => imageUrl(g)),
  };
}

function localizePost(row, locale) {
  if (!row) return null;
  return { ...row, titleText: tr(row.title, locale), excerptText: tr(row.excerpt, locale), bodyText: tr(row.body, locale), coverSrc: imageUrl(row.cover, `/cover/${row.slug}.svg`) };
}

function localizeDisease(row, locale) {
  if (!row) return null;
  return {
    ...row,
    title: tr(row.name, locale),
    pathogenText: tr(row.pathogen, locale),
    symptomsText: tr(row.symptoms, locale),
    causesText: tr(row.causes, locale),
    preventionText: tr(row.prevention, locale),
    treatmentText: tr(row.treatment, locale),
    productIdList: String(row.product_ids || '').split(',').map((x) => parseInt(x, 10)).filter(Boolean),
  };
}

/* ---------------- Categories ---------------- */
const categories = {
  async all() {
    return query(
      `SELECT c.*, (SELECT COUNT(*) FROM products p WHERE p.category_id = c.id AND p.is_active = 1) AS product_count
       FROM categories c ORDER BY c.sort_order, c.id`
    );
  },
  bySlug: (slug) => one('SELECT * FROM categories WHERE slug = ?', [slug]),
  byId: (id) => one('SELECT * FROM categories WHERE id = ?', [id]),
};

/* ---------------- Products ---------------- */
const PRODUCT_SELECT = `SELECT p.*, c.slug AS category_slug, c.name AS category_name FROM products p LEFT JOIN categories c ON c.id = p.category_id`;

const products = {
  async list({ category, species, q, featured, limit = 100, includeInactive = false } = {}) {
    const where = [];
    const params = [];
    if (!includeInactive) where.push('p.is_active = 1');
    if (category) {
      where.push('c.slug = ?');
      params.push(category);
    }
    if (species && species !== 'all') {
      where.push("(p.species = ? OR p.species = 'all')");
      params.push(species);
    }
    if (featured) where.push('p.is_featured = 1');
    if (q) {
      where.push('(p.name LIKE ? OR p.summary LIKE ? OR p.sku LIKE ?)');
      const like = `%${q}%`;
      params.push(like, like, like);
    }
    const sql = `${PRODUCT_SELECT} ${where.length ? `WHERE ${where.join(' AND ')}` : ''} ORDER BY p.is_featured DESC, p.sort_order, p.id LIMIT ?`;
    params.push(limit);
    return query(sql, params);
  },
  bySlug: (slug) => one(`${PRODUCT_SELECT} WHERE p.slug = ? AND p.is_active = 1`, [slug]),
  byId: (id) => one(`${PRODUCT_SELECT} WHERE p.id = ?`, [id]),
  async byIds(ids) {
    if (!ids.length) return [];
    return query(`${PRODUCT_SELECT} WHERE p.id IN (?) AND p.is_active = 1`, [ids]);
  },
  async related(product, limit = 4) {
    return query(`${PRODUCT_SELECT} WHERE p.is_active = 1 AND p.id <> ? ORDER BY (p.category_id = ?) DESC, p.is_featured DESC, p.sort_order LIMIT ?`, [product.id, product.category_id, limit]);
  },
};

/* ---------------- Posts ---------------- */
const posts = {
  async list({ topic, limit = 12, offset = 0, includeDrafts = false } = {}) {
    const where = [];
    const params = [];
    if (!includeDrafts) where.push('is_published = 1 AND published_at <= NOW()');
    if (topic) {
      where.push('topic = ?');
      params.push(topic);
    }
    params.push(limit, offset);
    return query(`SELECT * FROM posts ${where.length ? `WHERE ${where.join(' AND ')}` : ''} ORDER BY published_at DESC, id DESC LIMIT ? OFFSET ?`, params);
  },
  async count({ topic } = {}) {
    const r = await one(`SELECT COUNT(*) AS n FROM posts WHERE is_published = 1 AND published_at <= NOW() ${topic ? 'AND topic = ?' : ''}`, topic ? [topic] : []);
    return r.n;
  },
  bySlug: (slug) => one('SELECT * FROM posts WHERE slug = ? AND is_published = 1', [slug]),
  byId: (id) => one('SELECT * FROM posts WHERE id = ?', [id]),
};

/* ---------------- Diseases ---------------- */
const diseases = {
  all: () => query('SELECT * FROM diseases ORDER BY sort_order, id'),
  bySlug: (slug) => one('SELECT * FROM diseases WHERE slug = ?', [slug]),
  byId: (id) => one('SELECT * FROM diseases WHERE id = ?', [id]),
};

/* ---------------- Orders ---------------- */
const orders = {
  byCode: (code) => one('SELECT * FROM orders WHERE code = ?', [code]),
  byId: (id) => one('SELECT * FROM orders WHERE id = ?', [id]),
  async setPayment(code, status, ref) {
    await query('UPDATE orders SET payment_status = ?, payment_ref = COALESCE(?, payment_ref) WHERE code = ?', [status, ref || null, code]);
  },
};

module.exports = {
  getSettings,
  saveSetting,
  localizeCategory,
  localizeProduct,
  localizePost,
  localizeDisease,
  imageUrl,
  categories,
  products,
  posts,
  diseases,
  orders,
};
