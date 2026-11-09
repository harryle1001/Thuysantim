'use strict';
const { query, one } = require('../config/db');
const data = require('./seed-data');

const J = (o) => JSON.stringify(o);

async function seedSettings() {
  for (const [key, value] of Object.entries(data.settings)) {
    await query('INSERT IGNORE INTO settings (`key`, `value`) VALUES (?, ?)', [key, J(value)]);
  }
}

/** Reading time from the Vietnamese body (≈200 words/minute). */
function readMinutes(post) {
  const words = String(post.body.vi || '').replace(/[#*>|`_\[\]()-]/g, ' ').split(/\s+/).filter(Boolean).length;
  return post.read || Math.max(2, Math.round(words / 200));
}

/**
 * Articles are added by slug, never overwritten: new guides shipped in a release
 * reach existing databases, and posts edited in the admin are left alone.
 */
async function seedPosts() {
  let added = 0;
  for (const p of data.posts) {
    const published = new Date(Date.now() - p.daysAgo * 86400000);
    const r = await query(
      `INSERT IGNORE INTO posts (slug, title, excerpt, body, topic, read_minutes, published_at) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [p.slug, J(p.title), J(p.excerpt), J(p.body), p.topic, readMinutes(p), published]
    );
    added += r.affectedRows || 0;
  }
  if (added) console.log(`[db] Đã thêm ${added} bài viết mới.`);
}

async function seed({ force = false } = {}) {
  await seedSettings();
  const existingPosts = await one('SELECT COUNT(*) AS n FROM posts');
  const existing = await one('SELECT COUNT(*) AS n FROM products');
  if (existing.n > 0 && !force) {
    if (existingPosts.n > 0) await seedPosts();
    return false;
  }

  const catIds = {};
  for (const [i, c] of data.categories.entries()) {
    const r = await query(
      'INSERT INTO categories (slug, name, description, icon, sort_order) VALUES (?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE id = LAST_INSERT_ID(id)',
      [c.slug, J(c.name), J(c.description), c.icon, i]
    );
    catIds[c.slug] = r.insertId;
  }

  const productIds = {};
  for (const [i, p] of data.products.entries()) {
    const r = await query(
      `INSERT INTO products (slug, sku, category_id, species, name, summary, description, composition, usage_text, dosage, variants, color, badge, rating, is_featured, sort_order)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE id = LAST_INSERT_ID(id)`,
      [p.slug, p.sku, catIds[p.cat], p.species, J(p.name), J(p.summary), J(p.description), J(p.composition), J(p.usage), J(p.dosage), J(p.variants), p.color, p.badge, p.rating, p.featured, i]
    );
    productIds[p.slug] = r.insertId;
  }

  for (const [i, d] of data.diseases.entries()) {
    await query(
      `INSERT IGNORE INTO diseases (slug, species, severity, name, pathogen, symptoms, causes, prevention, treatment, product_ids, sort_order)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [d.slug, d.species, d.severity, J(d.name), J(d.pathogen), J(d.symptoms), J(d.causes), J(d.prevention), J(d.treatment), d.products.map((s) => productIds[s]).filter(Boolean).join(','), i]
    );
  }

  await seedPosts();
  console.log('[db] Đã nạp dữ liệu mẫu.');
  return true;
}

module.exports = { seed };
