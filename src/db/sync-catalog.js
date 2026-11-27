'use strict';
/**
 * Đồng bộ danh mục sản phẩm thật của THỦY SẢN TÍM (src/db/catalog-tim.json, sinh từ nhan/san-pham.json).
 * Chạy khi khởi động: chỉ áp dụng khi nội dung file thay đổi (so mã băm lưu trong settings.catalog_version),
 * nên sửa trong /admin vẫn giữ cho tới lần cập nhật file kế tiếp.
 * Sản phẩm không có trong danh mục bị ẩn (is_active = 0), không xóa — đơn hàng cũ vẫn tra được.
 */
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const { query, one } = require('../config/db');

const FILE = path.join(__dirname, 'catalog-tim.json');
const L = (s) => JSON.stringify({ vi: s, en: '', zh: '' });

async function syncCatalog({ force = false } = {}) {
  const raw = fs.readFileSync(FILE, 'utf8');
  const version = crypto.createHash('sha1').update(raw).digest('hex').slice(0, 12);
  const cur = await one('SELECT `value` FROM settings WHERE `key` = ?', ['catalog_version']);
  if (!force && cur && JSON.parse(cur.value || 'null') === version) return false;

  const items = JSON.parse(raw);
  const cats = await query('SELECT id, slug FROM categories');
  const catId = Object.fromEntries(cats.map((c) => [c.slug, c.id]));
  for (const [i, p] of items.entries()) {
    const variants = JSON.stringify(p.variants.map(([label, price]) => ({ label, price })));
    const vals = [p.sku, catId[p.cat] || null, p.species, L(p.name), L(p.summary), L(p.description), L(p.composition), L(p.usage), L(p.dosage), variants, p.image, p.color, p.featured, i];
    await query(
      `INSERT INTO products (sku, category_id, species, name, summary, description, composition, usage_text, dosage, variants, image, color, is_featured, sort_order, slug, badge, rating, is_active)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NULL, 5.0, 1)
       ON DUPLICATE KEY UPDATE sku = VALUES(sku), category_id = VALUES(category_id), species = VALUES(species), name = VALUES(name), summary = VALUES(summary),
         description = VALUES(description), composition = VALUES(composition), usage_text = VALUES(usage_text), dosage = VALUES(dosage), variants = VALUES(variants),
         image = VALUES(image), color = VALUES(color), is_featured = VALUES(is_featured), sort_order = VALUES(sort_order), is_active = 1`,
      [...vals, p.slug]
    );
  }
  await query('UPDATE products SET is_active = 0 WHERE slug NOT IN (?)', [items.map((p) => p.slug)]);
  await query('INSERT INTO settings (`key`, `value`) VALUES (?, ?) ON DUPLICATE KEY UPDATE `value` = VALUES(`value`)', ['catalog_version', JSON.stringify(version)]);
  console.log(`[db] Đã đồng bộ ${items.length} sản phẩm Thủy Sản Tím (bản ${version}); sản phẩm khác đã ẩn.`);
  return true;
}

module.exports = { syncCatalog };
