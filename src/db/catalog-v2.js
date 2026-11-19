'use strict';
/**
 * Real Thủy Sản Tím catalogue (15 products), built from the label data in nhan/san-pham.json
 * so the website and the printed labels always say the same thing.
 * Images are the concept-E packaging mockups in public/img/products/<slug>.webp.
 * Prices are not set yet (0 = "Yêu cầu báo giá"); set them in the admin once they are final.
 */
const data = require('../../nhan/san-pham.json');

/** label `loai` → website category slug */
const CATEGORY = {
  'vi-sinh': 'men-vi-sinh',
  'loi-khuan': 'gan-ruot',
  'gan': 'gan-ruot',
  'sat-trung': 'sat-trung',
  'khi-doc': 'xu-ly-nuoc-day',
  'xu-ly-tao': 'xu-ly-nuoc-day',
  'khoang': 'khoang-vitamin',
  'dinh-duong': 'khoang-vitamin',
};

/** sample products shipped with the first release → the real product that replaces them */
const REPLACES = {
  'tim-pro-bio-9': 'clear-12h',
  'tim-gut-zyme': 'us-lacto',
  'tim-zeo-clear': 'rovazyme',
  'tim-yucca-max': 'super-yucca',
  'tim-mineral-plus': 'mix-79',
  'tim-c-1000': 'amin-care',
  'tim-liver-guard': 'hepaliver-fs',
  'tim-herba-gut': 'biotic-99',
  'tim-iodine-90': 'vh-dio-99',
  'tim-bkc-80': 'ben-bkc',
  'tim-fish-immune': 'biotic-99',
  'tim-do-oxy': 'super-yucca',
};

const FEATURED = new Set(['clear-12h', 'super-yucca', 'us-lacto', 'hepaliver-fs', 'mix-79', 'vh-glubenco-pro']);
const vi = (s) => ({ vi: s });
const bullets = (arr) => arr.map((s) => `- ${String(s).trim().replace(/\.$/, '')}`).join('\n');

function variants(p) {
  const size = /\d/.test(p.the_tich || '') ? p.the_tich : '1 lít';
  const raw = String(p.quy_cach || '').trim() || (p.dang === 'chai' ? `Chai ${size}` : `Gói ${size}`);
  // "Chai 250ml · 500ml · 1 lít" → several sizes; "Chai 500ml, 30 chai/ thùng" → one size with its carton note
  const parts = raw.includes('·') ? raw.split('·').map((s) => s.trim()) : [raw];
  const unit = /^(Chai|Gói|Can|Bao)\b/i.exec(parts[0]);
  return parts.map((s, i) => ({ label: i && unit && !/^(Chai|Gói|Can|Bao)\b/i.test(s) ? `${unit[1]} ${s}` : s, price: 0 }));
}

const products = data.san_pham.map((p, i) => {
  const nhan = (p.nhan_phu || []).join(', ');
  const usageLine = p.cach_dung === 'tron-an' ? 'Trộn vào thức ăn cho tôm, cá.' : 'Hòa nước, tạt đều khắp ao nuôi.';
  return {
    slug: p.slug,
    sku: `TST-${String(p.stt).padStart(2, '0')}`,
    cat: CATEGORY[p.loai] || 'xu-ly-nuoc-day',
    species: 'all',
    color: p.mau,
    badge: null,
    featured: FEATURED.has(p.slug) ? 1 : 0,
    image: `/img/products/${p.slug}.webp`,
    sort: i,
    name: vi(`${p.ten} — ${p.phu_de}`),
    summary: vi(`${p.phu_de}. ${String(p.cong_dung[0] || '').trim()}`),
    description: vi(`${p.ten} ${p.phu_de.charAt(0).toLowerCase()}${p.phu_de.slice(1)}${nhan ? ` (nhóm vấn đề: ${nhan.toLowerCase()})` : ''}.\n\n**Công dụng**\n\n${bullets(p.cong_dung)}\n\n**Quy cách:** ${variants(p).map((v) => v.label).join(' · ')} · **Bảo quản:** ${p.bao_quan}\n\nSản xuất tại Việt Nam bởi ${data.san_xuat.ten}. Số đăng ký/mã số: ${p.ma_so} · TCCS ${p.tccs}. Chỉ dùng trong nuôi trồng thủy sản.`),
    composition: vi(p.thanh_phan.join('\n')),
    usage: vi(`${usageLine} ${p.cong_dung.map((s) => String(s).trim().replace(/\.$/, '')).join('; ')}.`),
    dosage: vi(p.huong_dan.map((s) => String(s).trim()).join('\n')),
    variants: variants(p),
  };
});

module.exports = { products, REPLACES };
