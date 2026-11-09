'use strict';
const { query, one } = require('../config/db');
const data = require('./seed-data');

const J = (o) => JSON.stringify(o);

async function seedSettings() {
  for (const [key, value] of Object.entries(data.settings)) {
    await query('INSERT IGNORE INTO settings (`key`, `value`) VALUES (?, ?)', [key, J(value)]);
  }
}

async function seed({ force = false } = {}) {
  await seedSettings();
  const existing = await one('SELECT COUNT(*) AS n FROM products');
  if (existing.n > 0 && !force) return false;

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

  for (const p of data.posts) {
    const published = new Date(Date.now() - p.daysAgo * 86400000);
    await query(
      `INSERT IGNORE INTO posts (slug, title, excerpt, body, topic, read_minutes, published_at) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [p.slug, J(p.title), J(p.excerpt), J(p.body), p.topic, p.read, published]
    );
  }
  console.log('[db] Đã nạp dữ liệu mẫu.');
  return true;
}

module.exports = { seed };
