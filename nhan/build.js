#!/usr/bin/env node
'use strict';
// Bộ nhãn Thủy Sản Tím: nhãn quấn chai/gói, khổ tỷ lệ vàng 161,8 × 100 mm (φ : 1), 3 mặt.
//   node nhan/build.js                 sinh tất cả sản phẩm trong nhan/san-pham.json
//   node nhan/build.js --chi vh-glubenco-pro,us-lacto --concept a   (a, b, c; mặc định cả 3)
// Xuất ra nhan/out/: <slug>-concept-<a|b|c>.pdf (vector, tràn lề 3 mm + dấu xén, đưa nhà in),
//                    <slug>.png (ảnh xem trước 600 dpi, trong đường xén), <slug>.html (mở/sửa trực tiếp).
// Chữ tự co để vừa khung; nhãn nào phải xuống dưới cỡ tối thiểu sẽ báo lỗi.
const fs = require('fs');
const path = require('path');

const DIR = __dirname;
const OUT = path.join(DIR, 'out');
const args = process.argv.slice(2);
const opt = (f) => { const i = args.indexOf(f); return i > -1 ? args[i + 1] : null; };

const PHI = 1.61803;
// Khổ (mm): rộng = φ × cao. Ba mặt: hai mặt bên mỗi mặt 38,2%/2 · φ… cụ thể 50 | 61,8 | 50.
const W = 161.8, H = 100, BLEED = 3, MARK = 6;
const SIDE = 50, FRONT = W - 2 * SIDE; // 61,8 mm = 38,2% tổng
const MIN_BODY = 1.6; // mm ≈ 4,5 pt

// Thang chữ φ (mm), gốc 2,1 mm ≈ 6 pt.
const T = { xs: 1.62, s: 1.85, b: 2.1, h: 3.4, l: 5.5, xl: 8.9, xxl: 14.4 };

// In trực tiếp lên bao bì: CHỈ 2 MÀU ĐẶC — tím TIM và trắng. Không chuyển màu, không tram mờ, nét ≥ 0,2 mm.
const P = '#4a044e'; // tím (màu giữa của logo TIM) — nhà in pha theo mã này
const WH = '#ffffff';
const G = '#b8914a'; // nhũ vàng champagne (concept D, mực nhũ / ép kim)
const { emblemSvg } = require('./emblem.js');
// Pha màu với trắng (t = 0..1) — tạo tông nhạt của màu sản phẩm.
function tint(hex, t) {
  const n = parseInt(hex.slice(1), 16), c = [n >> 16, (n >> 8) & 255, n & 255].map((v) => Math.round(v + (255 - v) * t));
  return '#' + c.map((v) => v.toString(16).padStart(2, '0')).join('');
}
// Cung sóng φ (concept E): các phần tư hình tròn đồng tâm ở góc (cx, cy), bán kính chia φ, nhiều lớp màu.
function arcs(pc, cx, cy, Rmax, nhom, inv) {
  const cols = inv ? [tint(pc, 0.82), tint(pc, 0.55), G, pc, WH, P] : [tint(pc, 0.82), tint(pc, 0.55), G, pc, P, WH];
  let s = '';
  // nhận biết nhóm: xử lý môi trường = cung tròn (sóng nước) · thức ăn bổ sung = hình thoi (hạt thức ăn)
  cols.forEach((col, k) => {
    const r = Rmax / Math.pow(PHI, k * 0.72);
    s += nhom === 'thuc-an'
      ? `<path d="M${cx - r * 1.2} ${cy} L${cx} ${cy - r * 1.2} L${cx + r * 1.2} ${cy} L${cx} ${cy + r * 1.2}Z" fill="${col}"/>`
      : `<circle cx="${cx}" cy="${cy}" r="${r.toFixed(3)}" fill="${col}"/>`;
  });
  return s;
}
const LINE = 0.25; // mm, nét mảnh nhất
const NHOM = { 'moi-truong': 'Xử lý môi trường nuôi', 'thuc-an': 'Thức ăn bổ sung' };
const CONCEPTS = {
  a: 'Concept A · Ấn tím: mặt trước tím đặc, chữ trắng; hai mặt bên trắng, chữ tím',
  b: 'Concept B · Trắng dược phẩm: nền trắng, tên chữ đậm không chân, hàng biểu tượng, dải tím 23,6% đáy mặt trước',
  f: 'Concept F · Đảo màu E: nền tím, chữ trắng',
  e: 'Concept E · Trắng φ: nền trắng chủ đạo, logo góc trái trên, màu riêng từng sản phẩm, cung sóng φ nhiều màu',
  d: 'Concept D · Hoàng gia: tím + nhũ vàng + trắng, biểu tượng vòng Tôm–Cá',
  c: 'Concept C · Vòng φ: nền tím toàn bộ, vòng tròn trắng lớn, tên chữ đậm không chân, thẻ trắng ở mặt bên',
};

const data = JSON.parse(fs.readFileSync(path.join(DIR, 'san-pham.json'), 'utf8'));
// Giá nội bộ (không đưa lên Git): nhan/gia-noi-bo.json → gộp gia_net, he_so_gia_ban vào data.
{
  const f = path.join(DIR, 'gia-noi-bo.json');
  if (fs.existsSync(f)) {
    const g = JSON.parse(fs.readFileSync(f, 'utf8'));
    data.he_so_gia_ban = g.he_so_gia_ban;
    for (const p of data.san_pham) p.gia_net = g.gia_net[p.slug];
  }
}
const logoSvg = fs.readFileSync(path.join(DIR, 'logo-tim.svg'), 'utf8');
const ringPath = /<path d="([^"]+)" fill="#ffffff" fill-rule/.exec(logoSvg)[1];
const letterPath = /<path d="([^"]+)" fill="#ffffff"\/>/.exec(logoSvg)[1];

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const SUP = { '⁰': 0, '¹': 1, '²': 2, '³': 3, '⁴': 4, '⁵': 5, '⁶': 6, '⁷': 7, '⁸': 8, '⁹': 9 };
const SUB = { '₀': 0, '₁': 1, '₂': 2, '₃': 3, '₄': 4, '₅': 5, '₆': 6, '₇': 7, '₈': 8, '₉': 9 };
// Chữ số mũ/chỉ số → <sup>/<sub> (phông Việt không có ký tự ⁹, ₄).
function rich(s) {
  return esc(s)
    .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]+/g, (m) => `<sup>${[...m].map((c) => SUP[c]).join('')}</sup>`)
    .replace(/[₀-₉]+/g, (m) => `<sub>${[...m].map((c) => SUB[c]).join('')}</sub>`)
    .replace(/\[ĐIỀN[^\]]*\]/g, (m) => `<mark>${m}</mark>`);
}

function fontFaces() {
  const F = path.join(DIR, 'fonts');
  const VI = 'U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB';
  const LA = 'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD';
  const face = (fam, file, w, st, range) => `@font-face{font-family:'${fam}';src:url(data:font/woff2;base64,${fs.readFileSync(path.join(F, file)).toString('base64')}) format('woff2');font-weight:${w};font-style:${st};unicode-range:${range}}`;
  const out = [];
  for (const sub of [['latin', LA], ['vietnamese', VI]]) {
    for (const w of [500, 600, 700]) out.push(face('Cormorant', `cormorant-garamond-${sub[0]}-${w}-normal.woff2`, w, 'normal', sub[1]));
    out.push(face('Cormorant', `cormorant-garamond-${sub[0]}-500-italic.woff2`, 500, 'italic', sub[1]));
    for (const w of [400, 500, 600, 700]) out.push(face('BVP', `be-vietnam-pro-${sub[0]}-${w}-normal.woff2`, w, 'normal', sub[1]));
  }
  return out.join('\n');
}


function css(c) {
  const dark = c === 'c' || c === 'f';
  return `${fontFaces()}
:root{--phi:1.61803;--P:${P};--W:${WH};--G:${G};--ln:${LINE}mm}
*{box-sizing:border-box;margin:0;padding:0}
html,body{background:#fff}
sup{font-size:.62em;vertical-align:.5em;line-height:0}sub{font-size:.62em;vertical-align:-.2em;line-height:0}
mark{background:#ffe08a;color:#5a3b00;padding:0 .3mm}
.sheet{position:relative;width:${W + 2 * (BLEED + MARK)}mm;height:${H + 2 * (BLEED + MARK)}mm;background:#fff}
.bleed{position:absolute;left:${MARK}mm;top:${MARK}mm;width:${W + 2 * BLEED}mm;height:${H + 2 * BLEED}mm;overflow:hidden;background:${dark ? P : WH}}
.trim{position:absolute;left:${BLEED}mm;top:${BLEED}mm;width:${W}mm;height:${H}mm;display:grid;grid-template-columns:${SIDE}mm ${FRONT}mm ${SIDE}mm}
.bg{position:absolute;inset:0}
.marks{position:absolute;inset:0;pointer-events:none}
/* ---- mặt bên ---- */
.side{position:relative;height:${H}mm;padding:var(--pt) var(--px) var(--pb);color:var(--P);font-family:BVP,sans-serif;font-size:var(--fs);line-height:1.45;display:flex;flex-direction:column}
.side .fill{flex:1;min-height:0}
.sec{margin-bottom:calc(var(--fs) * 1.618)}
.hd{display:flex;align-items:center;gap:1.6mm;font-weight:700;font-size:calc(var(--fs) * .92);letter-spacing:.22em;text-transform:uppercase;margin-bottom:calc(var(--fs) * .75)}
.hd::after{content:'';flex:1;height:var(--ln);background:var(--P)}
.hd i{width:1.5mm;height:1.5mm;transform:rotate(45deg);background:var(--P);flex:none}
ul{list-style:none}
li{position:relative;padding-left:2.4mm;margin-bottom:calc(var(--fs) * .38)}
li::before{content:'';position:absolute;left:.3mm;top:calc(var(--fs) * .52);width:1mm;height:1mm;transform:rotate(45deg);background:var(--P)}
li b{font-weight:700}
.cp{display:flex;align-items:baseline;gap:1mm;padding:calc(var(--fs) * .32) 0;border-bottom:var(--ln) solid var(--P)}
.cp:first-of-type{border-top:var(--ln) solid var(--P)}
.cp span{flex:1}.cp b{font-weight:700;white-space:nowrap}
.cp.note{border:0;padding-top:calc(var(--fs) * .2)}
.chips{display:flex;gap:1.2mm;flex-wrap:wrap;margin-top:calc(var(--fs) * .7)}
.chips span{border:var(--ln) solid var(--P);border-radius:5mm;padding:.35mm 2mm;font-size:calc(var(--fs) * .82);font-weight:600;letter-spacing:.06em}
.small{font-size:calc(var(--fs) * .9)}
.legal{border-top:var(--ln) solid var(--P);padding-top:calc(var(--fs) * .8);font-size:calc(var(--fs) * .9)}
.legal p{margin-bottom:calc(var(--fs) * .3)}
.side .ms{margin-bottom:calc(var(--fs) * .3);font-size:calc(var(--fs) * .95)}
.dist{border:var(--ln) solid var(--pc,var(--P));border-radius:1mm;padding:calc(var(--fs) * .5) calc(var(--fs) * .7);margin:calc(var(--fs) * .4) 0 calc(var(--fs) * .3)}
.dist .t{font-weight:700;letter-spacing:.12em;color:var(--P)}.dist .t b{color:var(--pc,var(--P))}
.dist .h{font-weight:700;font-size:1.12em;color:var(--P)}
.mfr{color:var(--ink-2,#4b3a58);font-size:.92em;line-height:1.4;margin-top:calc(var(--fs) * .4)}

.legal strong{font-weight:700}
.boxes{display:grid;grid-template-columns:1fr 1fr 1fr;gap:1mm;margin:calc(var(--fs) * .55) 0}
.boxes div{border:var(--ln) solid var(--P);border-radius:.8mm;padding:.6mm 1mm;height:6.2mm;font-size:calc(var(--fs) * .8);font-weight:600;letter-spacing:.08em;text-transform:uppercase}
.foot{display:flex;gap:2mm;align-items:flex-end}
.foot .who{flex:1}
.bc{width:21mm;height:13mm;flex:none;border:var(--ln) dashed var(--P);border-radius:.8mm;display:grid;place-items:center;text-align:center;font-size:calc(var(--fs) * .8);letter-spacing:.08em}
.only{margin-top:calc(var(--fs) * .55);font-weight:700;letter-spacing:.14em;font-size:calc(var(--fs) * .82);text-transform:uppercase}
/* ---- mặt trước ---- */
.front{position:relative;height:${H}mm;text-align:center;display:flex;flex-direction:column;align-items:center;color:var(--fc)}
.brand{font-family:BVP;font-weight:700;font-size:${T.s}mm;letter-spacing:.42em;padding-left:.42em}
.motto{font-family:Cormorant;font-style:italic;font-weight:600;font-size:${T.b * 1.15}mm;letter-spacing:.03em}
.rule{display:flex;align-items:center;gap:1.6mm;width:${FRONT * 0.5}mm}
.rule::before,.rule::after{content:'';flex:1;height:var(--ln);background:currentColor}
.rule i{width:1.5mm;height:1.5mm;transform:rotate(45deg);border:var(--ln) solid currentColor}
.cat{font-family:BVP;font-weight:700;font-size:${T.s}mm;letter-spacing:.32em;text-transform:uppercase;padding-left:.32em}
.name{font-feature-settings:'lnum' 1;font-family:Cormorant;font-weight:700;line-height:.92;white-space:nowrap;letter-spacing:.01em}
.name span{display:block}
.tag{font-family:Cormorant;font-style:italic;font-weight:600;font-size:${T.h}mm;line-height:1.25}
.pill{border:var(--ln) solid currentColor;border-radius:6mm;padding:1mm 3.4mm;font-family:BVP;font-weight:500;font-size:${T.s}mm;letter-spacing:.06em}
.pill b{font-weight:700}
.vol{display:flex;align-items:baseline;gap:2.4mm;font-family:BVP;font-weight:600;font-size:${T.xs}mm;letter-spacing:.24em;text-transform:uppercase}
.vol strong{font-feature-settings:'lnum' 1;font-family:Cormorant;font-weight:700;font-size:${T.l}mm;letter-spacing:.02em;text-transform:none}
.icons{display:flex;justify-content:center;gap:${T.h}mm}
.icons div{display:flex;flex-direction:column;align-items:center;gap:.7mm;font-family:BVP;font-weight:700;font-size:${T.xs}mm;letter-spacing:.16em;text-transform:uppercase;padding-left:.16em}
.icons svg{width:${T.l + 0.6}mm;height:${T.l + 0.6}mm}
.meta{font-family:BVP;font-weight:600;font-size:${T.xs}mm;letter-spacing:.2em}
.no{font-feature-settings:'lnum' 1;font-family:Cormorant;font-style:italic;font-weight:600;font-size:${T.b * 1.1}mm;letter-spacing:.06em}
${c === 'f' ? CONCEPT_CSS.e + INV_CSS : CONCEPT_CSS[c]}`;
}

// Concept F = bố cục E, đảo màu: nền tím, chữ trắng (đổi chỗ biến --P / --W).
const INV_CSS = `
.bleed{--P:#ffffff;--W:${P};--ink:#ffffff;--ink-2:#efe6f4;--mute:#d9c9e3}
.side,.front{color:#fff}
.pill{color:#fff!important}.typ i{color:#fff}
.mfr{color:#e6daee!important}.lock .motto{color:${G}}
.cp{border-color:rgba(255,255,255,.45)!important}.hd::after{background:rgba(255,255,255,.5)}`;
const CONCEPT_CSS = {
  // A — mặt trước tím đặc, chữ trắng; mặt bên trắng
  a: `.side{--pt:${T.l + 1.3}mm;--px:${T.h + 0.8}mm;--pb:${T.l + 0.6}mm}
.front{--fc:var(--W);padding:${T.h + 4}mm ${T.h + 3}mm ${T.h + 3.4}mm}
.front .top{position:absolute;top:${T.h + 1}mm;left:${T.h + 1.6}mm;right:${T.h + 1.6}mm;display:flex;justify-content:space-between;align-items:baseline}
.brand{margin:${T.b}mm 0 .5mm}.rule{margin:${T.h * 0.8}mm 0}
.cat{margin-top:auto}.name{margin:${T.b}mm 0}
.hero{margin-top:auto;display:flex;flex-direction:column;align-items:center;gap:${T.b * 1.1}mm;margin-bottom:${T.b * 1.6}mm}
.hero .icons{margin-bottom:${T.b * 0.4}mm}
.front .meta.bot{position:absolute;bottom:${T.h + 2.6}mm;left:0;right:0}`,
  // B — nền trắng toàn bộ, chữ tím; đáy mặt trước có dải tím 23,6% (= 1/φ³)
  b: `.side{--pt:${T.l}mm;--px:${T.h + 0.8}mm;--pb:${T.l}mm}
.front{--fc:var(--P);padding:${T.h + 4.4}mm ${T.h + 3}mm 0}
.front .top{position:absolute;top:${T.h + 1.2}mm;left:${T.h + 2}mm;right:${T.h + 2}mm;display:flex;justify-content:space-between;align-items:baseline}
.brand{margin:${T.b}mm 0 .5mm}.rule{margin:${T.h * 0.7}mm 0}
.cat{margin-top:auto}.name{margin:${T.b}mm 0}
.name{font-family:BVP;font-weight:700;letter-spacing:-.01em;line-height:1}
.tag{font-family:BVP;font-style:normal;font-weight:500;font-size:${T.b * 1.3}mm}
.front>.icons{margin:${T.h}mm 0 auto}
.band{width:calc(100% + ${2 * (T.h + 3)}mm);height:${H * 0.236}mm;margin-top:${T.h}mm;background:var(--P);color:var(--W);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${T.b * 0.8}mm}
.band .pill{border-color:var(--W)}
.band .meta{font-size:${T.xs * 0.95}mm}`,
  // E — trắng chủ đạo, logo góc trái trên, màu riêng từng sản phẩm (--pc), bố cục theo đường vàng 38,2%
  e: `.side{--pt:${T.l + 1.6}mm;--px:${T.h + 0.8}mm;--pb:${T.l}mm}
.hd{color:var(--P)}.hd i,li::before{background:var(--pc)}.hd::after{background:var(--pcl)}
.cp{border-color:var(--pcl)!important}.chips span{border-color:var(--pc);color:var(--pc)}
.legal{border-color:var(--pcl)}.boxes div,.bc{border-color:var(--pcl)}
.front{--fc:var(--P);text-align:left;align-items:stretch;padding:0}
.lock{position:absolute;left:4.6mm;top:5.2mm;display:flex;align-items:center;gap:2.2mm}
.lock .w{display:flex;flex-direction:column;gap:.5mm}
.lock .brand{font-size:${T.s}mm;letter-spacing:.3em;padding-left:0;color:var(--P)}
.lock .motto{font-size:${T.b}mm;color:var(--G)}
.typ{position:absolute;right:4.6mm;top:4.9mm;display:flex;flex-direction:column;align-items:center;gap:.9mm}
.typ i{width:10.2mm;height:10.2mm;border-radius:50%;background:var(--pc);color:var(--W);display:grid;place-items:center}
.typ svg{width:6.3mm;height:6.3mm}
.typ b{font-family:BVP;font-weight:700;font-size:${T.xs}mm;letter-spacing:.14em;color:var(--pc)}
.grp{font-family:BVP;font-weight:600;font-size:${T.xs}mm;letter-spacing:.24em;text-transform:uppercase;color:var(--P);margin-bottom:1.3mm}
.mid{position:absolute;left:4.6mm;right:4.6mm;top:${H * 0.382 - 6.5}mm}
.cat{padding-left:0;color:var(--pc);letter-spacing:.26em}
.cat::after{content:'';display:block;width:${FRONT * 0.236}mm;height:.5mm;background:var(--pc);margin-top:1.6mm}
.name{font-family:BVP;font-weight:700;letter-spacing:-.015em;line-height:1;margin:${T.b * 1.2}mm 0 ${T.b * 0.9}mm;color:var(--P)}
.tag{color:var(--pc);font-size:${T.h * 1.02}mm}
.pill{display:inline-block;margin-top:${T.b * 1.4}mm;background:var(--pc);border-color:var(--pc);color:var(--W)}
.icons{position:absolute;left:4.6mm;bottom:${T.xl + 11.6}mm;justify-content:flex-start;gap:${T.b * 1.25}mm;color:var(--pc)}
.icons div{letter-spacing:.1em;font-size:${T.xs * 0.92}mm}
.icons span{color:var(--P)}
.vol{position:absolute;left:4.6mm;bottom:11.4mm;color:var(--P)}
.fdist{position:absolute;left:4.6mm;right:4.6mm;bottom:3.4mm;background:#fff;border:.3mm solid var(--pc);border-radius:1.2mm;padding:1.1mm 2mm 1.2mm;font-family:BVP;font-size:1.72mm;line-height:1.38;color:var(--P);text-align:left}
.fdist .t{font-weight:700;letter-spacing:.12em;font-size:1.66mm;color:var(--pc)}.fdist .h{font-weight:700;font-size:1.9mm}
.dist .pk{margin-top:calc(var(--fs) * .25);font-size:.92em}
.lot{border-top:var(--ln) solid var(--pcl,var(--P));margin-top:calc(var(--fs) * .5);padding-top:calc(var(--fs) * .4)}
.lot p{margin-bottom:calc(var(--fs) * .5) !important}
.vol strong{color:var(--P)}
.front .meta.bot{position:absolute;left:4.6mm;bottom:7.6mm;color:var(--P);opacity:1;font-size:${T.xs * 0.95}mm}
.made{position:absolute;left:4.6mm;bottom:5mm;font-family:BVP;font-weight:700;font-size:${T.xs * 0.95}mm;letter-spacing:.2em;color:var(--pc)}`,
  // D — tím + nhũ vàng: mặt trước tím, biểu tượng Tôm–Cá vàng; mặt bên trắng, điểm nhấn vàng
  d: `.side{--pt:${T.l + 1.3}mm;--px:${T.h + 0.8}mm;--pb:${T.l + 0.6}mm}
.hd i,li::before{background:var(--G)}.hd::after{background:var(--G)}
.chips span{border-color:var(--G)}
.front{--fc:var(--W);padding:${T.h + 3.6}mm ${T.h + 3}mm ${T.h + 3.4}mm}
.front .top{position:absolute;top:${T.h + 1}mm;left:${T.h + 1.6}mm;right:${T.h + 1.6}mm;display:flex;justify-content:space-between;align-items:baseline;color:var(--G)}
.brand{margin:${T.b * 0.9}mm 0 .4mm;color:var(--G)}.motto{color:var(--W)}
.rule{margin:${T.h * 0.7}mm 0;color:var(--G)}
.cat{margin-top:auto;color:var(--G)}.name{margin:${T.b}mm 0}
.hero{margin-top:auto;display:flex;flex-direction:column;align-items:center;gap:${T.b * 1.05}mm;margin-bottom:${T.b * 1.6}mm}
.icons{color:var(--G);margin-top:${T.b}mm}.icons span{color:var(--W)}
.pill{border-color:var(--G)}.pill b{color:var(--G)}
.vol strong{color:var(--G)}
.front .meta.bot{position:absolute;bottom:${T.h + 2.6}mm;left:0;right:0;color:var(--G)}`,
  // C — nền tím toàn bộ; vòng tròn trắng mặt trước; thẻ trắng bo góc ở mặt bên
  c: `.side{--pt:${T.l + 2.6}mm;--px:${T.h + 3.4}mm;--pb:${T.l + 2.6}mm}
.side::before{content:'';position:absolute;inset:${T.h + 0.6}mm ${T.h - 0.6}mm;background:var(--W);border-radius:2.6mm}
.side>*{position:relative}
.front{--fc:var(--W);padding:${T.h + 1.6}mm ${T.b}mm ${T.h}mm}
.brand{margin:${T.b * 0.7}mm 0 0}
.disc{position:relative;width:${FRONT * 0.854}mm;height:${FRONT * 0.854}mm;margin:${T.b * 1.2}mm 0 ${T.b * 1.1}mm;border-radius:50%;background:var(--W);color:var(--P);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 ${T.h}mm}
.disc::after{content:'';position:absolute;inset:1.6mm;border:var(--ln) solid var(--P);border-radius:50%}
.disc .name{margin:${T.b * 0.8}mm 0;font-family:BVP;font-weight:700;letter-spacing:-.01em;line-height:1}
.disc .tag{font-family:BVP;font-style:normal;font-weight:500;font-size:${T.b * 1.2}mm;max-width:${FRONT * 0.854 - 12}mm}
.disc .no{margin-bottom:${T.b * 0.6}mm}
.hero{display:flex;flex-direction:column;align-items:center;gap:${T.b * 0.9}mm}
.front .meta.bot{margin-top:auto}`,
};

// Biểu tượng nét (24×24), học từ hàng icon công dụng trên nhãn Keeton/QB Labs. Màu theo chữ.
const ICON = {
  tom: '<path d="M17 5.5c-5.5 0-9.5 3.4-9.5 8.3 0 3.3 2.4 5.7 5.7 5.7"/><path d="M13.2 19.5l-3.4 2.6M13.2 19.5l.6 3"/><path d="M10.4 9.5l2.4 2.6M8.6 12.6l3.2 1.4M8.6 16l3.2-.4"/><path d="M17 5.5c2.2-.9 4.4-.6 5.8.6M17 5.5c.6-1.9 2.6-3.4 5.2-3.4"/><circle cx="16.4" cy="8.2" r=".9" fill="currentColor" stroke="none"/>',
  ca: '<path d="M2.8 12c3.4-5.6 10.6-6.2 15.4 0-4.8 6.2-12 5.6-15.4 0z"/><path d="M18.2 12l3.8-3.8v7.6z"/><path d="M9.6 7.6c.8 1.4 1.2 2.9 1.2 4.4s-.4 3-1.2 4.4"/><circle cx="6.6" cy="11" r=".9" fill="currentColor" stroke="none"/>',
  nuoc: '<path d="M12 2.8c4.2 5 6.3 8.3 6.3 11.2a6.3 6.3 0 0 1-12.6 0c0-2.9 2.1-6.2 6.3-11.2z"/><path d="M8.6 15.2c1.1 1.1 2.2 1.1 3.4 0s2.3-1.1 3.4 0"/>',
  an: '<path d="M3.5 12.5h17a8.5 6.5 0 0 1-17 0z"/><circle cx="8.6" cy="8.8" r="1.3"/><circle cx="12.2" cy="6.4" r="1.3"/><circle cx="15.6" cy="9" r="1.3"/>',
};
// Biểu tượng loại sản phẩm, dạng, cách dùng (nét 24×24) — hệ thống nhận biết trên nhãn.
Object.assign(ICON, {
  'vi-sinh': '<rect x="5" y="8.5" width="14" height="7" rx="3.5"/><path d="M5 12H2.6M19 12h2.4M9 8.5V6M15 8.5V6M9 15.5V18M15 15.5V18"/>',
  'sat-trung': '<path d="M12 2.8l7.5 2.8v5.6c0 4.6-3.1 8.2-7.5 10-4.4-1.8-7.5-5.4-7.5-10V5.6z"/><path d="M8.6 12l2.4 2.4 4.4-4.8"/>',
  'khi-doc': '<circle cx="8" cy="15.2" r="3.4"/><circle cx="15.6" cy="9.4" r="2.5"/><circle cx="16.6" cy="17.2" r="1.6"/><circle cx="8.4" cy="6.4" r="1.4"/>',
  khoang: '<path d="M12 2.8l7.6 4.4v9.6L12 21.2l-7.6-4.4V7.2z"/><path d="M12 7.4l4 4.6-4 4.6-4-4.6z"/>',
  'xu-ly-tao': '<path d="M12 21V9.5"/><path d="M12 15c-4.2 0-6.4-2.6-6.4-6.4 4.2 0 6.4 2.6 6.4 6.4z"/><path d="M12 11.4c0-3.8 2.2-6.4 6.4-6.4 0 3.8-2.2 6.4-6.4 6.4z"/>',
  'loi-khuan': '<path d="M6 3.5v3.6a3.2 3.2 0 0 0 3.2 3.2h5.6a3.2 3.2 0 0 1 0 6.4H9.2A3.2 3.2 0 0 0 6 19.9v.6"/><circle cx="17.6" cy="5.4" r="1.5"/>',
  'dinh-duong': '<circle cx="6" cy="16.4" r="2.6"/><circle cx="12" cy="6.8" r="2.6"/><circle cx="18" cy="16.4" r="2.6"/><path d="M7.4 14.2l3.2-5.2M13.4 9l3.2 5.2M8.6 16.4h6.8"/>',
  gan: '<path d="M3.4 10c0-2.8 3-4.4 8.6-4.4s8.6 1.4 8.6 4c0 3.6-3.8 5-6.8 6.2-2.8 1.1-3.8 2.8-5.8 2.8-2.6 0-4.6-4.2-4.6-8.6z"/><path d="M12 5.6v6.2"/>',
  bot: '<path d="M3.2 18.4h17.6"/><path d="M5.6 18.4c1.6-5.4 3.8-8.4 6.4-8.4s4.8 3 6.4 8.4"/><circle cx="12" cy="6.2" r=".7" fill="currentColor"/><circle cx="8.4" cy="8.4" r=".7" fill="currentColor"/><circle cx="15.6" cy="8.4" r=".7" fill="currentColor"/>',
  'tat-ao': '<path d="M2.8 9c1.6-1.8 3.2-1.8 4.6 0s3 1.8 4.6 0 3.2-1.8 4.6 0 3 1.8 4.6 0"/><path d="M2.8 15c1.6-1.8 3.2-1.8 4.6 0s3 1.8 4.6 0 3.2-1.8 4.6 0 3 1.8 4.6 0"/>',
});
Object.assign(ICON, { 'giai-doc': ICON.khoang, vitamin: ICON['dinh-duong'], enzyme: ICON['loi-khuan'], acid: ICON.nuoc });
const LOAI = {
  'vi-sinh': 'Vi sinh xử lý nước', 'sat-trung': 'Sát trùng nước', 'khi-doc': 'Hấp thu khí độc', khoang: 'Khoáng chất',
  'xu-ly-tao': 'Xử lý tảo', 'loi-khuan': 'Lợi khuẩn tiêu hóa', 'dinh-duong': 'Đạm · acid amin', gan: 'Bổ gan',
  'giai-doc': 'Giải độc nước', vitamin: 'Vitamin · chống sốc', enzyme: 'Enzyme tiêu hóa', acid: 'Acid hữu cơ',
};
const svgIcon = (k, extra = '') => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" ${extra}>${ICON[k]}</svg>`;
// Phân loại: mã = nhóm (MT: xử lý môi trường · TA: thức ăn bổ sung) + số thứ tự; loại; dạng; cách dùng.
function phanLoai(p) {
  return {
    ma: `${p.nhom === 'thuc-an' ? 'TA' : 'MT'}-${String(p.stt).padStart(2, '0')}`,
    loai: LOAI[p.loai] || '', loaiKey: p.loai,
    dang: p.dang === 'chai' ? 'Dung dịch' : 'Dạng bột', dangKey: p.dang === 'chai' ? 'nuoc' : 'bot',
    cach: p.cach_dung === 'tron-an' ? 'Trộn ăn' : 'Tạt ao', cachKey: p.cach_dung === 'tron-an' ? 'an' : 'tat-ao',
  };
}
function icons(p) {
  const f = phanLoai(p);
  return `<div class="icons">${[['tom', 'Tôm'], ['ca', 'Cá'], [f.dangKey, f.dang], [f.cachKey, f.cach]].map(([k, t]) => `<div>${svgIcon(k)}<span>${t}</span></div>`).join('')}</div>`;
}

// Logo TIM (đúng logo trên web), một màu đặc để in.
function brandMark({ fill = P } = {}, sizeAttr = '') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" ${sizeAttr}><path d="${ringPath}" fill="${fill}" fill-rule="evenodd"/><path d="${letterPath}" fill="${fill}"/></svg>`;
}

function logo(sizeMm, ring, letters, fill) {
  return `<svg width="${sizeMm}mm" height="${sizeMm}mm" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">${fill ? `<circle cx="100" cy="100" r="92" fill="${fill}"/>` : ''}<path d="${ringPath}" fill="${ring}" fill-rule="evenodd"/><path d="${letterPath}" fill="${letters}"/></svg>`;
}

function cpRow(t) {
  const m = /^Gồm/.test(t) ? null : /^(.*?):\s*(.+)$/.exec(t);
  if (!m) return `<div class="cp note">${rich(t)}</div>`;
  return `<div class="cp"><span>${rich(m[1])}</span><b>${rich(m[2])}</b></div>`;
}

// Nét trang trí (SVG, màu đặc) cho từng concept: khung, góc, nếp gấp.
function background(c, pc = '#0a8fb5', nhom = 'moi-truong') {
  const ARCS = arcs(pc, BLEED + SIDE + FRONT, BLEED + H - 1.2, FRONT / Math.pow(PHI, c === 'f' ? 2.1 : 1.5), nhom, c === 'f');
  const B = BLEED, tot = W + 2 * B, hh = H + 2 * B, fx = B + SIDE, fw = FRONT;
  const ln = LINE;
  const corner = (x, y, sx, sy, col) => `<path d="M${x} ${y + sy * 5.5} L${x} ${y} L${x + sx * 5.5} ${y}" fill="none" stroke="${col}" stroke-width="${ln * 1.4}"/><rect x="${x + sx * 1.4 - 0.65}" y="${y + sy * 1.4 - 0.65}" width="1.3" height="1.3" transform="rotate(45 ${x + sx * 1.4} ${y + sy * 1.4})" fill="${col}"/>`;
  const frame = (inset, col) => {
    const L = fx + inset, R = fx + fw - inset, Tp = B + inset, Bt = B + H - inset;
    return `<rect x="${L}" y="${Tp}" width="${R - L}" height="${Bt - Tp}" fill="none" stroke="${col}" stroke-width="${ln}"/>${corner(L - 1.3, Tp - 1.3, 1, 1, col)}${corner(R + 1.3, Tp - 1.3, -1, 1, col)}${corner(L - 1.3, Bt + 1.3, 1, -1, col)}${corner(R + 1.3, Bt + 1.3, -1, -1, col)}`;
  };
  let s = '';
  if (c === 'a' || c === 'd') {
    const acc = c === 'd' ? G : WH;
    s += `<rect x="0" y="0" width="${tot}" height="${B + 2.6}" fill="${P}"/><rect x="0" y="${B + H - 2.6}" width="${tot}" height="${2.6 + B}" fill="${P}"/>`;
    s += `<rect x="0" y="${B + 3.4}" width="${tot}" height="${ln}" fill="${P}"/><rect x="0" y="${B + H - 3.4 - ln}" width="${tot}" height="${ln}" fill="${P}"/>`;
    s += `<rect x="${fx}" y="0" width="${fw}" height="${hh}" fill="${P}"/>${frame(3.6, acc)}`;
    if (c === 'd') s += `<rect x="0" y="${B + 2.6}" width="${tot}" height="${ln * 1.4}" fill="${G}"/><rect x="0" y="${B + H - 2.6 - ln * 1.4}" width="${tot}" height="${ln * 1.4}" fill="${G}"/>`;
  } else if (c === 'e' || c === 'f') {
    // dải 3 màu mép trên chia φ (61,8 / 23,6 / 14,6) và vạch mảnh mép dưới; cung sóng φ góc phải dưới mặt trước
    const a1 = tot * 0.618, a2 = tot * 0.236;
    s += `<rect x="0" y="0" width="${a1}" height="${B + 2.2}" fill="var(--pc)"/><rect x="${a1}" y="0" width="${a2}" height="${B + 2.2}" fill="${P}"/><rect x="${a1 + a2}" y="0" width="${tot - a1 - a2}" height="${B + 2.2}" fill="${G}"/>`;
    s += `<rect x="0" y="${B + H - 1.2}" width="${tot}" height="${B + 1.2}" fill="${P}"/>`;
    s += `<clipPath id="fe"><rect x="${fx}" y="${B + 2.2}" width="${fw}" height="${H - 3.4}"/></clipPath><g clip-path="url(#fe)">${ARCS}</g>`;
    s += `<rect x="${fx - ln / 2}" y="${B + 6}" width="${ln * 0.8}" height="${H - 12}" fill="var(--pcl)"/><rect x="${fx + fw - ln / 2}" y="${B + 6}" width="${ln * 0.8}" height="${H - 12}" fill="var(--pcl)"/>`;
  } else if (c === 'b') {
    s += `<rect x="0" y="${B + 2.2}"" width="${tot}" height="${ln * 2}" fill="${P}"/><rect x="0" y="${B + 3.2}" width="${tot}" height="${ln}" fill="${P}"/>`;
    s += `<rect x="0" y="${B + H - 2.2 - ln * 2}" width="${tot}" height="${ln * 2}" fill="${P}"/><rect x="0" y="${B + H - 3.2 - ln}" width="${tot}" height="${ln}" fill="${P}"/>`;
    s += `<rect x="${fx - ln / 2}" y="${B + 6}" width="${ln}" height="${H - 12}" fill="${P}"/><rect x="${fx + fw - ln / 2}" y="${B + 6}" width="${ln}" height="${H - 12}" fill="${P}"/>`;
    s += `<rect x="${fx}" y="${B + H * (1 - 0.236)}" width="${fw}" height="${H * 0.236 + B}" fill="${P}"/>`;
    s += `<g>${frame(3.6, P).replace(/height="([\d.]+)" fill="none"/, `height="${(H * (1 - 0.236) - 3.6 - 1.6).toFixed(2)}" fill="none"`)}</g>`;
  } else {
    // C: nền tím đã tô ở .bleed; vạch gấp trắng mảnh giữa các mặt
    s += `<rect x="${fx - ln / 2}" y="${B + 8}" width="${ln}" height="${H - 16}" fill="${WH}"/><rect x="${fx + fw - ln / 2}" y="${B + 8}" width="${ln}" height="${H - 16}" fill="${WH}"/>`;
  }
  return `<svg class="bg" viewBox="0 0 ${tot} ${hh}" width="${tot}mm" height="${hh}mm" xmlns="http://www.w3.org/2000/svg">${s}</svg>`;
}

function parts(p) {
  const pp = data.phan_phoi, sx = data.san_xuat;
  const total = String(data.san_pham.length).padStart(2, '0');
  const no = `N° ${String(p.stt).padStart(2, '0')} / ${total}`;
  const hero = (p.thanh_phan[0] || '').split(':');
  const heroHtml = hero.length > 1 ? `${rich(hero[0].replace(/\s*\(min\)/i, ''))} <b>${rich(hero[1].trim())}</b>` : rich(hero[0]);
  const nameParts = p.ten.length > 11 && p.ten.includes(' ') ? splitName(p.ten) : [p.ten];
  const vol = p.the_tich && !/In trên/.test(p.the_tich) ? p.the_tich : (p.quy_cach || '').replace(/^(Chai|Gói)\s*/i, '').split(/[,·]/)[0].trim();
  const volLabel = p.dang === 'chai' ? 'Thể tích thực' : 'Khối lượng tịnh';
  const pl = phanLoai(p);
  const left = `
    <div class="sec"><div class="hd"><i></i>Công dụng</div><ul>${p.cong_dung.map((c) => `<li>${rich(c)}</li>`).join('')}</ul></div>
    <div class="sec"><div class="hd"><i></i>Thành phần <span style="letter-spacing:.06em;text-transform:none;font-weight:500">${p.dang === 'chai' ? '(trong 1 lít)' : '(trong 1 kg)'}</span></div>${p.thanh_phan.map(cpRow).join('')}
      <div class="chips">${[pl.ma, pl.loai, pl.dang, pl.cach].map((c) => `<span>${esc(c)}</span>`).join('')}</div></div>
    <div class="fill"></div>
    <div class="foot"><div class="who small"><b>Bảo quản:</b> ${rich(p.bao_quan)}</div></div>
    <div class="only">Chỉ dùng trong nuôi trồng thủy sản · Để xa tầm tay trẻ em</div>`;
  const right = `
    <div class="sec"><div class="hd"><i></i>Hướng dẫn sử dụng</div><ul>${p.huong_dan.map((c) => `<li>${rich(c).replace(/^([^:]{3,48}):/, '<b>$1:</b>')}</li>`).join('')}</ul></div>
    <div class="fill"></div>
    <p class="ms"><strong>Mã số tiếp nhận:</strong> ${esc(p.ma_so)}</p>
    <p class="ms"><strong>TCCS:</strong> ${esc(p.tccs)}</p>
    <div class="legal">
      <div class="dist"><div class="t">NHÀ PHÂN PHỐI · <b>${esc(pp.ten)}</b></div><div>${esc(pp.dia_chi)}</div><div class="h">ĐT: ${rich(pp.hotline || '[ĐIỀN]')} · ${esc(pp.web)}</div><div class="pk">Sản phẩm được ${esc(p.che_bien)} và đóng gói tại: ${esc(sx.dia_chi)}</div></div>
      <p class="mfr"><strong>Sản phẩm của:</strong> ${esc(sx.ten)}<br><strong>ĐT:</strong> ${esc(sx.dien_thoai)} · <strong>Website:</strong> ${esc(sx.web)}<br><strong>Sản xuất tại:</strong> ${esc(sx.dia_chi)}</p>
      <div class="lot"><p><strong>Số lô:</strong></p><p><strong>NSX:</strong></p><p><strong>HSD:</strong></p></div>
    </div>`;
  return {
    no, left, right, cat: esc(NHOM[p.nhom] || NHOM['moi-truong']),
    name: `<h1 class="name" data-name data-max="0">${nameParts.map((s) => `<span>${esc(s)}</span>`).join('')}</h1>`,
    tag: `<div class="tag">${rich(p.phu_de)}</div>`,
    pill: `<div class="pill">${heroHtml}</div>`,
    vol: `<div class="vol">${volLabel} <strong>${rich(vol || '[ĐIỀN]')}</strong></div>`,
    ms: esc(p.ma_so), tccs: esc(p.tccs), icons: icons(p), ten: p.ten, pl,
  };
}

function front(c, x) {
  x.name = x.name.replace(/data-max="[^"]*"/, `data-max="${c === 'c' ? FRONT * 0.854 - 11 : FRONT - 10}"`);
  const brand = `<div class="brand">THỦY SẢN TÍM</div><div class="motto">Tinh hoa sinh học · Vững vàng mùa vụ</div>`;
  if (c === 'a') return `<section class="front">
    <div class="top"><span class="meta">MS ${x.ms}</span><span class="no">${x.no}</span></div>
    ${logo(16.2, WH, WH)}${brand}<div class="rule"><i></i></div>
    <div class="cat">${x.cat}</div>${x.name}${x.tag}
    <div class="hero">${x.icons}${x.pill}${x.vol}</div>
    <div class="meta bot">TCCS ${x.tccs}</div></section>`;
  if (c === 'e' || c === 'f') return `<section class="front">
    <div class="lock">${brandMark({ fill: c === 'f' ? WH : P }, 'width="11.5mm" height="11.5mm"')}<div class="w"><div class="brand">THỦY SẢN TÍM</div><div class="motto">Tinh hoa sinh học</div></div></div>
    <div class="typ"><i>${svgIcon(x.pl.loaiKey)}</i><b>${x.pl.ma}</b></div>
    <div class="mid"><div class="grp">${x.cat}</div><div class="cat">${esc(x.pl.loai)}</div>${x.name}${x.tag}${x.pill}</div>
    ${x.icons}${x.vol}<div class="made">SẢN XUẤT TẠI VIỆT NAM</div></section>`;
  if (c === 'd') return `<section class="front">
    <div class="top"><span class="meta">MS ${x.ms}</span><span class="no">${x.no}</span></div>
    ${emblemSvg({ fill: G, bg: P }, 'width="21mm" height="21mm"')}${brand}<div class="rule"><i></i></div>
    <div class="cat">${x.cat}</div>${x.name}${x.tag}
    <div class="hero">${x.icons}${x.pill}${x.vol}</div>
    <div class="meta bot">TCCS ${x.tccs}</div></section>`;
  if (c === 'b') return `<section class="front">
    <div class="top"><span class="meta">MS ${x.ms}</span><span class="no">${x.no}</span></div>
    ${logo(14.6, P, P)}${brand}<div class="rule"><i></i></div>
    <div class="cat">${x.cat}</div>${x.name}${x.tag}${x.icons}
    <div class="band">${x.pill}${x.vol}<div class="meta">TCCS ${x.tccs}</div></div></section>`;
  return `<section class="front">
    ${logo(11.8, WH, WH)}<div class="brand">THỦY SẢN TÍM</div>
    <div class="disc"><div class="no">${x.no}</div><div class="cat">${x.cat}</div>${x.name}${x.tag}</div>
    <div class="hero">${x.icons}${x.vol}</div>
    <div class="meta bot">MS ${x.ms} · TCCS ${x.tccs}</div></section>`;
}

function html(p, c) {
  const x = parts(p);
  return `<!doctype html><html lang="vi"><head><meta charset="utf-8"><title>Nhãn ${esc(p.ten)} – ${CONCEPTS[c]}</title>
<style>${css(c)}</style></head><body>
<div class="sheet"><div class="bleed" style="--pc:${p.mau || '#0a8fb5'};--pcl:${tint(p.mau || '#0a8fb5', 0.62)}">${background(c, p.mau || '#0a8fb5', p.nhom)}
<div class="trim">
  <section class="side" data-fit>${x.left}</section>
  ${front(c, x)}
  <section class="side" data-fit>${x.right}</section>
</div></div>
${cropMarks(c)}
</div></body></html>`;
}

function splitName(n) {
  const w = n.split(' ');
  let best = [n], bd = 1e9;
  for (let i = 1; i < w.length; i++) {
    const a = w.slice(0, i).join(' '), b = w.slice(i).join(' ');
    const d = Math.abs(a.length - b.length);
    if (d < bd) { bd = d; best = [a, b]; }
  }
  return best;
}

function cropMarks(c) {
  const tw = W + 2 * (BLEED + MARK), th = H + 2 * (BLEED + MARK);
  const x0 = MARK + BLEED, y0 = MARK + BLEED, x1 = x0 + W, y1 = y0 + H, L = MARK - 1;
  const ln = (a, b, c, d) => `<line x1="${a}" y1="${b}" x2="${c}" y2="${d}" stroke="#000" stroke-width=".1"/>`;
  const m = [];
  for (const x of [x0, x1]) { m.push(ln(x, 0, x, L), ln(x, th - L, x, th)); }
  for (const y of [y0, y1]) { m.push(ln(0, y, L, y), ln(tw - L, y, tw, y)); }
  for (const x of [x0 + SIDE, x0 + SIDE + FRONT]) { m.push(ln(x, 0, x, L * 0.6), ln(x, th - L * 0.6, x, th)); }
  return `<svg class="marks" viewBox="0 0 ${tw} ${th}" width="${tw}mm" height="${th}mm">${m.join('')}
<text x="${x0}" y="${th - 1.6}" font-family="BVP" font-size="1.6" fill="#555">Thủy Sản Tím · nhãn quấn ${W} × ${H} mm (φ : 1) · tràn lề ${BLEED} mm · gấp: ${SIDE} | ${FRONT} | ${SIDE} mm · ${CONCEPTS[c]} · 2 màu đặc: tím ${P} + trắng</text></svg>`;
}

// Co chữ cho vừa: mặt bên giảm --fs, tên sản phẩm co theo chiều rộng.
async function fit(page) {
  return page.evaluate(({ T, MIN, FRONT }) => {
    const mm = 96 / 25.4, rep = [];
    for (const s of document.querySelectorAll('[data-fit]')) {
      let fs = T.b;
      s.style.setProperty('--fs', fs + 'mm');
      const over = () => {
        const lim = s.getBoundingClientRect().bottom - parseFloat(getComputedStyle(s).paddingBottom) + 0.5;
        return [...s.querySelectorAll('*')].some((e) => e.getBoundingClientRect().bottom > lim) || s.scrollHeight > s.clientHeight + 0.5;
      };
      while (over() && fs > MIN) { fs = +(fs - 0.05).toFixed(2); s.style.setProperty('--fs', fs + 'mm'); }
      rep.push({ fs, over: over() });
    }
    const n = document.querySelector('[data-name]');
    let size = T.xxl;
    n.style.fontSize = size + 'mm';
    const max = (+n.dataset.max || FRONT - 13) * mm;
    while ([...n.children].some((c) => c.getBoundingClientRect().width > max) && size > 5) { size -= 0.1; n.style.fontSize = size + 'mm'; }
    // concept E: khối tên không được chồng hàng biểu tượng → đẩy lên (không cao hơn đáy logo), rồi co chữ tên nếu vẫn chồng
    const mid = document.querySelector('.front .mid'), ic = document.querySelector('.front .icons'), lk = document.querySelector('.front .lock');
    if (mid && ic && lk) {
      const gap = 1.2 * mm, over = () => mid.getBoundingClientRect().bottom + gap - ic.getBoundingClientRect().top;
      const minTop = lk.getBoundingClientRect().bottom - mid.offsetParent.getBoundingClientRect().top + 2.5 * mm;
      let d = over();
      if (d > 0) mid.style.top = Math.max(minTop, mid.offsetTop - d) + 'px';
      while (over() > 0 && size > 5) { size -= 0.1; n.style.fontSize = size + 'mm'; }
    }
    const f = document.querySelector('.front');
    const fb = f.getBoundingClientRect().bottom;
    const overFront = [...f.querySelectorAll('.name,.tag,.hero,.band,.disc')].some((e) => e.getBoundingClientRect().bottom > fb);
    return { sides: rep, name: +size.toFixed(1), overFront };
  }, { T, MIN: MIN_BODY, FRONT });
}

async function main() {
  const only = opt('--chi') ? new Set(opt('--chi').split(',')) : null;
  const concepts = (opt('--concept') || 'a,b,c,d,e').split(',');
  const list = data.san_pham.filter((p) => !only || only.has(p.slug));
  fs.mkdirSync(OUT, { recursive: true });
  const { chromium } = require('playwright');
  const browser = await chromium.launch();
  const page = await browser.newPage({ deviceScaleFactor: 600 / 96 });
  let bad = 0;
  for (const p of list) for (const c of concepts) {
    const base = `${p.slug}-concept-${c}`;
    await page.setContent(html(p, c), { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    const r = await fit(page);
    fs.writeFileSync(path.join(OUT, `${base}.html`), await page.evaluate(() => '<!doctype html>' + document.documentElement.outerHTML));
    const tw = W + 2 * (BLEED + MARK), th = H + 2 * (BLEED + MARK);
    await page.pdf({ path: path.join(OUT, `${base}.pdf`), width: `${tw}mm`, height: `${th}mm`, printBackground: true, pageRanges: '1' });
    await page.screenshot({ path: path.join(OUT, `${base}.png`), clip: await page.locator('.trim').boundingBox() });
    const err = r.sides.some((s) => s.over) || r.overFront;
    if (err) bad++;
    console.log(`${err ? 'LỖI TRÀN' : 'ok'}  ${base}  chữ mặt bên ${r.sides.map((s) => (s.fs / 0.3528).toFixed(1) + 'pt').join(' / ')} · tên ${r.name} mm`);
  }
  await browser.close();
  console.log(`${list.length * concepts.length} nhãn, ${bad} lỗi → ${path.relative(process.cwd(), OUT)}/`);
  process.exitCode = bad ? 1 : 0;
}

module.exports = { brandMark, phanLoai, svgIcon, LOAI, tint, arcs, fontFaces, rich, esc, data, parts, icons, T, P, G, WH, PHI, NHOM, splitName, cpRow };
if (require.main === module) main().catch((e) => { console.error(e); process.exit(1); });
