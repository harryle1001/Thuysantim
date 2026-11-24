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

function insertFigures(html, slug, coverPhotoId) {
  const g = group(slug);
  const pool = POOL[g].filter((id) => id !== coverPhotoId);
  const start = hash(slug) % pool.length;
  const picks = [pool[start], pool[(start + 1) % pool.length]];
  const parts = html.split(/(?=<h2[\s>])/);
  if (parts.length < 4) return html; // short article: no extra pictures
  const fig = (id, n) => `<figure class="apost__fig"><img src="/img/blog/photos/${id}.webp" alt="${CAPTION[g]}" width="1600" height="900" loading="lazy"><figcaption>${CAPTION[g]}${n ? '' : ''}</figcaption></figure>`;
  const at = [2, Math.min(4, parts.length - 1)];
  const out = [];
  parts.forEach((p, i) => {
    if (i === at[0]) out.push(fig(picks[0]));
    else if (i === at[1] && at[1] !== at[0]) out.push(fig(picks[1], 1));
    out.push(p);
  });
  return out.join('');
}
module.exports = { insertFigures };
