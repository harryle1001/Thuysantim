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

/**
 * One-time switch from the sample catalogue to the real 15 products (catalog-v2):
 * add the real products, hide the samples, point disease pages at the replacements.
 * Runs once per database (settings key `catalog_v2`), so later admin edits are kept.
 */
async function syncCatalogV2() {
  const done = await one("SELECT `value` FROM settings WHERE `key` = 'catalog_v2'");
  if (done) return;
  const { products, REPLACES } = require('./catalog-v2');
  const cats = {};
  for (const [i, c] of data.categories.entries()) {
    const r = await query(
      'INSERT INTO categories (slug, name, description, icon, sort_order) VALUES (?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE id = LAST_INSERT_ID(id)',
      [c.slug, J(c.name), J(c.description), c.icon, i]
    );
    cats[c.slug] = r.insertId;
  }
  const ids = {};
  for (const p of products) {
    const r = await query(
      `INSERT INTO products (slug, sku, category_id, species, name, summary, description, composition, usage_text, dosage, variants, image, color, badge, is_featured, is_active, sort_order)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, ?) ON DUPLICATE KEY UPDATE id = LAST_INSERT_ID(id)`,
      [p.slug, p.sku, cats[p.cat], p.species, J(p.name), J(p.summary), J(p.description), J(p.composition), J(p.usage), J(p.dosage), J(p.variants), p.image, p.color, p.badge, p.featured, p.sort]
    );
    ids[p.slug] = r.insertId;
  }
  const old = Object.keys(REPLACES);
  const oldRows = await query('SELECT id, slug FROM products WHERE slug IN (?)', [old]);
  const map = {};
  for (const r of oldRows) map[r.id] = ids[REPLACES[r.slug]];
  await query('UPDATE products SET is_active = 0, is_featured = 0 WHERE slug IN (?)', [old]);
  const diseases = await query('SELECT id, product_ids FROM diseases');
  for (const d of diseases) {
    const next = [...new Set(String(d.product_ids || '').split(',').filter(Boolean).map((id) => map[id] || id))].join(',');
    if (next !== d.product_ids) await query('UPDATE diseases SET product_ids = ? WHERE id = ?', [next, d.id]);
  }
  await query("INSERT INTO settings (`key`, `value`) VALUES ('catalog_v2', ?)", [J(new Date().toISOString())]);
  console.log(`[db] Đã chuyển sang danh mục thật: ${products.length} sản phẩm, ẩn ${oldRows.length} sản phẩm mẫu.`);
}

/**
 * One-time contact update (settings key `contact_v2`): real hotline/Zalo and address replace the sample ones,
 * and product images get a cache-busting version because the packshots were re-rendered with the hotline.
 */
async function syncContactV2() {
  if (await one("SELECT `value` FROM settings WHERE `key` = 'contact_v2'")) return;
  const row = await one("SELECT `value` FROM settings WHERE `key` = 'company'");
  let company = {};
  try { company = row ? JSON.parse(row.value) : {}; } catch (e) { company = {}; }
  const fresh = data.settings.company;
  for (const k of ['address', 'hotline', 'phone', 'zalo', 'mapEmbed']) company[k] = fresh[k];
  await query("INSERT INTO settings (`key`, `value`) VALUES ('company', ?) ON DUPLICATE KEY UPDATE `value` = VALUES(`value`)", [J(company)]);
  await query("UPDATE products SET image = CONCAT(SUBSTRING_INDEX(image, '?', 1), '?v=2') WHERE image LIKE '/img/products/%'");
  await query("INSERT INTO settings (`key`, `value`) VALUES ('contact_v2', ?)", [J(new Date().toISOString())]);
  console.log('[db] Đã cập nhật hotline, Zalo, địa chỉ công ty.');
}

/**
 * One-time clean-up (settings key `contact_v3`): the company is newly founded, so the sample scale/history claims go.
 * Updates the contact email, drops the homepage stats, unpublishes the sample "new lab" news post and
 * rewrites the "2,000 ponds" sentence in stored articles.
 */
async function syncContactV3() {
  if (await one("SELECT `value` FROM settings WHERE `key` = 'contact_v3'")) return;
  const row = await one("SELECT `value` FROM settings WHERE `key` = 'company'");
  let company = {};
  try { company = row ? JSON.parse(row.value) : {}; } catch (e) { company = {}; }
  company.email = data.settings.company.email;
  if (company.taxCode === '1801234567') { company.taxCode = ''; company.licenseDate = ''; company.licenseIssuer = ''; } // mã số thuế mẫu
  await query("INSERT INTO settings (`key`, `value`) VALUES ('company', ?) ON DUPLICATE KEY UPDATE `value` = VALUES(`value`)", [J(company)]);
  await query("DELETE FROM settings WHERE `key` = 'stats'");
  await query("UPDATE posts SET is_published = 0 WHERE slug = 'thuy-san-tim-khanh-thanh-phong-lab-vi-sinh'");
  const swaps = [
    ['áp dụng tại hơn 2.000 ao nuôi', 'áp dụng trong quá trình tư vấn ao nuôi'],
    ['our engineers use across 2,000+ ponds', 'our engineers use'],
    ['applies across 2,000+ ponds', 'applies'],
  ];
  for (const [a, b] of swaps) await query('UPDATE posts SET excerpt = REPLACE(excerpt, ?, ?), body = REPLACE(body, ?, ?)', [a, b, a, b]);
  await query("INSERT INTO settings (`key`, `value`) VALUES ('contact_v3', ?)", [J(new Date().toISOString())]);
  console.log('[db] Đã cập nhật email, gỡ số liệu và bài viết mẫu không đúng thực tế.');
}

/** One-time sync (key `contact_v5`): registration-certificate phone number, no bank account shown. */
async function syncContactV5() {
  if (await one("SELECT `value` FROM settings WHERE `key` = 'contact_v5'")) return;
  const get = async (k) => { const r = await one('SELECT `value` FROM settings WHERE `key` = ?', [k]); try { return r ? JSON.parse(r.value) : {}; } catch (e) { return {}; } };
  const put = (k, v) => query('INSERT INTO settings (`key`, `value`) VALUES (?, ?) ON DUPLICATE KEY UPDATE `value` = VALUES(`value`)', [k, J(v)]);
  const company = await get('company');
  Object.assign(company, { hotline: data.settings.company.hotline, phone: data.settings.company.phone, zalo: data.settings.company.zalo });
  await put('company', company);
  await put('bank', data.settings.bank);
  const payments = await get('payments');
  payments.vietqr = false;
  await put('payments', payments);
  for (const col of ['excerpt', 'body']) await query(`UPDATE posts SET ${col} = REPLACE(${col}, '0934 246 420', '0869 739 679')`);
  await query("INSERT INTO settings (`key`, `value`) VALUES ('contact_v5', ?)", [J(new Date().toISOString())]);
  console.log('[db] Đã đổi số điện thoại theo giấy đăng ký và bỏ tài khoản ngân hàng.');
}

/** One-time company-info sync (key `company_v4`): data from the business registration certificate of 20/11/2026. */
async function syncCompanyV4() {
  if (await one("SELECT `value` FROM settings WHERE `key` = 'company_v4'")) return;
  const row = await one("SELECT `value` FROM settings WHERE `key` = 'company'");
  let company = {};
  try { company = row ? JSON.parse(row.value) : {}; } catch (e) { company = {}; }
  const src = data.settings.company;
  for (const k of ['legal', 'address', 'mapEmbed', 'taxCode', 'licenseDate', 'licenseIssuer', 'representative']) company[k] = src[k];
  await query("INSERT INTO settings (`key`, `value`) VALUES ('company', ?) ON DUPLICATE KEY UPDATE `value` = VALUES(`value`)", [J(company)]);
  await query("INSERT INTO settings (`key`, `value`) VALUES ('company_v4', ?)", [J(new Date().toISOString())]);
  console.log('[db] Đã cập nhật thông tin pháp lý và địa chỉ công ty.');
}

/**
 * One-time article clean-up (settings key `post_fixes_v3`): delete the retired articles and apply the
 * fact-check corrections (src/db/post-fixes.js) to stored posts. Later admin edits are not touched again.
 */
async function syncPostFixes() {
  if (await one("SELECT `value` FROM settings WHERE `key` = 'post_fixes_v3'")) return;
  const fx = require('./post-fixes');
  const del = await query('DELETE FROM posts WHERE slug IN (?)', [fx.RETIRED]);
  let fixed = 0;
  for (const slug of Object.keys(fx.FIXES)) {
    const row = await one('SELECT title, excerpt, body FROM posts WHERE slug = ?', [slug]);
    if (!row) continue;
    const o = fx.applyToRow(slug, row);
    await query('UPDATE posts SET title = ?, excerpt = ?, body = ? WHERE slug = ?', [o.title, o.excerpt, o.body, slug]);
    fixed += 1;
  }
  for (const [from, to] of fx.UPGRADES) {
    if (to.includes(from)) continue; // already contains the new wording (substring pair); handled by the longer pairs above
    await query('UPDATE posts SET excerpt = REPLACE(excerpt, ?, ?), body = REPLACE(body, ?, ?)', [from, to, from, to]);
  }
  await query("INSERT INTO settings (`key`, `value`) VALUES ('post_fixes_v3', ?)", [J(new Date().toISOString())]);
  console.log(`[db] Kiểm chứng bài viết: xóa ${del.affectedRows || 0} bài bịa, sửa ${fixed} bài.`);
}

/** One-time (settings key `author_v2`): articles are written by the company's technical department. */
async function syncAuthor() {
  if (await one("SELECT `value` FROM settings WHERE `key` = 'author_v2'")) return;
  await query("UPDATE posts SET author = 'Phòng Kỹ thuật Thủy Sản Tím' WHERE author = 'Thủy Sản Tím'");
  await query("INSERT INTO settings (`key`, `value`) VALUES ('author_v2', ?)", [J(new Date().toISOString())]);
}

async function seed({ force = false } = {}) {
  await seedSettings();
  const existingPosts = await one('SELECT COUNT(*) AS n FROM posts');
  const existing = await one('SELECT COUNT(*) AS n FROM products');
  if (existing.n > 0 && !force) {
    if (existingPosts.n > 0) await seedPosts();
    await syncCatalogV2();
    await syncContactV2();
    await syncContactV3();
    await syncPostFixes();
    await syncAuthor();
    await syncCompanyV4();
    await syncContactV5();
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
  await syncCatalogV2();
  await syncContactV2();
  await syncContactV3();
  await syncPostFixes();
  await syncAuthor();
  await syncCompanyV4();
  await syncContactV5();
  console.log('[db] Đã nạp dữ liệu mẫu.');
  return true;
}

module.exports = { seed };
