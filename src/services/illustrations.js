'use strict';
/**
 * Adds a couple of illustrative photos inside an article (before its 2nd and 4th section).
 * Photos are free Pexels images stored in public/img/blog/photos (see public/img/blog/CREDITS.md).
 * They are decorative: the article text never depends on them, and the caption says they are illustrations.
 */
const POOL = {
  pond: [5786581, 5795822, 5806533, 12220818, 6872324],
  shrimp: [16521533, 11784965, 5273798, 8351657],
  lab: [38409888, 36515391, 38093935, 39926423, 7722793],
};
const CAPTION = {
  pond: 'Ao nuôi tôm nhìn từ trên cao (ảnh minh họa)',
  shrimp: 'Tôm thẻ trong tay người nuôi (ảnh minh họa)',
  lab: 'Dụng cụ đo và pha chế trong phòng thí nghiệm (ảnh minh họa)',
};
function group(slug) {
  if (/test-kit|doc-nhan|bao-quan|vi-sinh|khoang|sat-trung|yucca|bo-gan|axit-amin|tron-thuoc|lich-dung|diet-tao|kiem|tinh-the-tich/.test(slug)) return 'lab';
  if (/tom-(?!the-nuoi-bao)|giong|thu-hoach|cham-lon|nha-sang|thuc-an|benh|de-khang|duong-ruot|gan-tuy/.test(slug)) return 'shrimp';
  return 'pond';
}
function hash(s) { let h = 0; for (const c of s) h = (h * 31 + c.charCodeAt(0)) >>> 0; return h; }

// Posts from batch E: own AI illustrations (scripts/covers/map.js AI_INLINE), used once the files are built.
const fs = require('fs');
const path = require('path');
const { AI_INLINE } = require('../../scripts/covers/map');
const AI_PHOTOS = path.join(__dirname, '..', '..', 'public', 'img', 'blog', 'photos', 'ai');
const aiCache = new Map();
function aiFigures(slug) {
  if (aiCache.has(slug)) return aiCache.get(slug);
  const spec = AI_INLINE[slug];
  const keys = Object.keys(spec).filter((k) => /^a\d+$/.test(k));
  const ok = keys.length > 0 && keys.every((k) => fs.existsSync(path.join(AI_PHOTOS, `${slug}-${k}.webp`)));
  const out = ok ? keys.map((k) => ({ src: `/img/blog/photos/ai/${slug}-${k}.webp`, caption: spec[k] })) : null;
  aiCache.set(slug, out);
  return out;
}
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function insertFigures(html, slug, coverPhotoId) {
  let g = group(slug);
  let figs = null;
  if (AI_INLINE[slug]) {
    figs = aiFigures(slug);
    if (!figs) {
      if (!AI_INLINE[slug].fallback) return html; // no fitting stock photo: no pictures rather than a wrong caption
      g = AI_INLINE[slug].fallback;
    }
  }
  const pool = POOL[g].filter((id) => id !== coverPhotoId);
  const start = hash(slug) % pool.length;
  const picks = figs || [pool[start], pool[(start + 1) % pool.length]].map((id) => ({ src: `/img/blog/photos/${id}.webp`, caption: CAPTION[g] }));
  const parts = html.split(/(?=<h2[\s>])/);
  if (parts.length < 4) return html; // short article: no extra pictures
  const fig = (f) => `<figure class="apost__fig"><img src="${f.src}" alt="${esc(f.caption)}" width="1600" height="900" loading="lazy"><figcaption>${esc(f.caption)}</figcaption></figure>`;
  const at = [2, Math.min(4, parts.length - 1)];
  const out = [];
  parts.forEach((p, i) => {
    if (i === at[0]) out.push(fig(picks[0]));
    else if (i === at[1] && at[1] !== at[0] && picks[1]) out.push(fig(picks[1]));
    out.push(p);
  });
  return out.join('');
}
module.exports = { insertFigures };
