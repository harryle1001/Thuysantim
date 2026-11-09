'use strict';
/**
 * Generates a premium SVG "packshot" for a product (pouch or bottle) so the
 * catalogue looks finished before real photography is uploaded.
 */
const { escapeHtml, tr, parseJSON } = require('../utils/helpers');

function shade(hex, amt) {
  const n = parseInt(hex.replace('#', ''), 16);
  const clamp = (v) => Math.max(0, Math.min(255, v));
  const r = clamp((n >> 16) + amt);
  const g = clamp(((n >> 8) & 0xff) + amt);
  const b = clamp((n & 0xff) + amt);
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}

function splitName(full) {
  // "TÍM PRO-BIO 9 — Men vi sinh ..." -> ["PRO-BIO 9", "Men vi sinh ..."]
  const [brand, ...rest] = String(full).split('—');
  const title = brand.replace(/^\s*TÍM\s*/i, '').trim();
  const sub = rest.join('—').trim();
  return [title, sub];
}

function wrapWords(text, max) {
  const words = String(text).split(/\s+/);
  const lines = [];
  let cur = '';
  for (const w of words) {
    if ((cur + ' ' + w).trim().length > max) {
      if (cur) lines.push(cur);
      cur = w;
    } else cur = (cur + ' ' + w).trim();
  }
  if (cur) lines.push(cur);
  return lines.slice(0, 2);
}

function packshotSvg(product, { transparent = false } = {}) {
  const color = /^#[0-9a-f]{6}$/i.test(product.color) ? product.color : '#6d28d9';
  const dark = shade(color, -70);
  const light = shade(color, 60);
  const [title, sub] = splitName(tr(product.name, 'vi'));
  const subLines = wrapWords(sub, 22);
  const variants = parseJSON(product.variants, []);
  const isLiquid = variants.some((v) => /l(í|i)t|ml|\bL\b|can/i.test(v.label));
  const id = `p${product.id || 0}`;

  const bg = `
  <defs>
    <radialGradient id="${id}bg" cx="50%" cy="40%" r="70%">
      <stop offset="0" stop-color="#ffffff"/>
      <stop offset="1" stop-color="#efeaf8"/>
    </radialGradient>
    <linearGradient id="${id}body" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0" stop-color="${dark}"/>
      <stop offset=".45" stop-color="${color}"/>
      <stop offset=".7" stop-color="${light}"/>
      <stop offset="1" stop-color="${dark}"/>
    </linearGradient>
    <linearGradient id="${id}gloss" x1="0" x2="1">
      <stop offset="0" stop-color="#fff" stop-opacity="0"/>
      <stop offset=".5" stop-color="#fff" stop-opacity=".35"/>
      <stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </linearGradient>
    <filter id="${id}sh" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="14"/></filter>
  </defs>
  ${transparent ? '' : `<rect width="600" height="600" fill="url(#${id}bg)"/>
  <circle cx="470" cy="120" r="70" fill="${light}" opacity=".18"/>
  <circle cx="110" cy="470" r="46" fill="${color}" opacity=".10"/>`}
  <ellipse cx="300" cy="540" rx="150" ry="20" fill="#2e1065" opacity=".22" filter="url(#${id}sh)"/>`;

  const label = (y) => `
  <rect x="200" y="${y}" width="200" height="190" rx="14" fill="#fff" opacity=".96"/>
  <text x="300" y="${y + 34}" text-anchor="middle" font-family="Be Vietnam Pro, Arial, sans-serif" font-size="13" letter-spacing="4" font-weight="700" fill="${dark}">THỦY SẢN TÍM</text>
  <line x1="250" x2="350" y1="${y + 46}" y2="${y + 46}" stroke="${color}" stroke-width="2"/>
  <text x="300" y="${y + 86}" text-anchor="middle" font-family="Be Vietnam Pro, Arial, sans-serif" font-size="${title.length > 10 ? 22 : 27}" font-weight="800" fill="#1f1235">${escapeHtml(title)}</text>
  ${subLines.map((l, i) => `<text x="300" y="${y + 116 + i * 18}" text-anchor="middle" font-family="Be Vietnam Pro, Arial, sans-serif" font-size="12.5" fill="#4b4560">${escapeHtml(l)}</text>`).join('')}
  <rect x="236" y="${y + 154}" width="128" height="22" rx="11" fill="${color}"/>
  <text x="300" y="${y + 169}" text-anchor="middle" font-family="Be Vietnam Pro, Arial, sans-serif" font-size="10.5" font-weight="700" letter-spacing="1.5" fill="#fff">${escapeHtml((product.sku || '').toUpperCase())}</text>`;

  let pack;
  if (isLiquid) {
    pack = `
  <rect x="262" y="70" width="76" height="44" rx="8" fill="${dark}"/>
  <rect x="270" y="110" width="60" height="22" fill="${shade(color, -40)}"/>
  <path d="M220 160 Q220 130 262 130 L338 130 Q380 130 380 160 L392 196 Q400 214 400 236 L400 500 Q400 530 370 530 L230 530 Q200 530 200 500 L200 236 Q200 214 208 196 Z" fill="url(#${id}body)"/>
  <rect x="214" y="200" width="22" height="300" rx="11" fill="url(#${id}gloss)"/>
  ${label(262)}`;
  } else {
    pack = `
  <path d="M170 110 L430 110 L438 150 Q450 330 440 510 Q438 530 418 530 L182 530 Q162 530 160 510 Q150 330 162 150 Z" fill="url(#${id}body)"/>
  <rect x="170" y="110" width="260" height="26" fill="${dark}" opacity=".55"/>
  ${Array.from({ length: 12 }, (_, i) => `<line x1="${178 + i * 22}" x2="${178 + i * 22}" y1="112" y2="134" stroke="#fff" stroke-opacity=".25"/>`).join('')}
  <circle cx="300" cy="160" r="9" fill="#fff" opacity=".6"/>
  <rect x="186" y="150" width="26" height="360" rx="13" fill="url(#${id}gloss)"/>
  ${label(232)}`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" role="img" aria-label="${escapeHtml(title)}">${bg}${pack}</svg>`;
}

module.exports = { packshotSvg };
