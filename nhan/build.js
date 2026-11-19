#!/usr/bin/env node
'use strict';
// Bộ nhãn Thủy Sản Tím: nhãn quấn chai/gói, khổ tỷ lệ vàng 161,8 × 100 mm (φ : 1), 3 mặt.
//   node nhan/build.js                 sinh tất cả sản phẩm trong nhan/san-pham.json
//   node nhan/build.js --chi vh-glubenco-pro,us-lacto
// Xuất ra nhan/out/: <slug>.pdf (vector, tràn lề 3 mm + dấu xén, đưa nhà in),
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

const NHOM = {
  'moi-truong': { ten: 'Xử lý môi trường nuôi', accent: '#8fd8c3', ink: '#1f6b5c' },
  'thuc-an': { ten: 'Thức ăn bổ sung', accent: '#f3c97a', ink: '#8a5a12' },
};

const data = JSON.parse(fs.readFileSync(path.join(DIR, 'san-pham.json'), 'utf8'));
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

// Xoắn ốc vàng (logarit): bán kính tăng φ lần mỗi 1/4 vòng. Tâm (0,0), bán kính ngoài = 1.
function goldenSpiral(turns = 3.25) {
  const pts = [], end = turns * 2 * Math.PI;
  for (let t = 0; t <= end; t += 0.04) {
    const r = Math.pow(PHI, (2 * (t - end)) / Math.PI);
    pts.push(`${(r * Math.cos(t)).toFixed(4)} ${(r * Math.sin(t)).toFixed(4)}`);
  }
  return 'M' + pts.join(' L');
}

function css() {
  return `${fontFaces()}
:root{--phi:1.61803;--plum-0:#12061f;--plum-1:#1e0b3a;--plum-2:#2c0f47;--plum-3:#4a044e;--orchid:#86198f;
--ivory:#f8f3ea;--ivory-2:#efe6d6;--ink:#231330;--ink-2:#4b3a58;--mute:#7c6c86;
--gold-1:#f6e7bd;--gold-2:#d8b46c;--gold-3:#a47a36;--gold:#c9a25a}
*{box-sizing:border-box;margin:0;padding:0}
html,body{background:#fff}
sup{font-size:.62em;vertical-align:.5em;line-height:0}sub{font-size:.62em;vertical-align:-.2em;line-height:0}
mark{background:#ffe08a;color:#5a3b00;padding:0 .3mm;border-radius:.4mm}
.sheet{position:relative;width:${W + 2 * (BLEED + MARK)}mm;height:${H + 2 * (BLEED + MARK)}mm;background:#fff}
.bleed{position:absolute;left:${MARK}mm;top:${MARK}mm;width:${W + 2 * BLEED}mm;height:${H + 2 * BLEED}mm;overflow:hidden}
.trim{position:absolute;left:${BLEED}mm;top:${BLEED}mm;width:${W}mm;height:${H}mm;display:grid;grid-template-columns:${SIDE}mm ${FRONT}mm ${SIDE}mm}
.bg{position:absolute;inset:0}
.marks{position:absolute;inset:0;pointer-events:none}
/* --- Mặt bên (ngà) --- */
.side{position:relative;height:${H}mm;padding:${T.l + 1.3}mm ${T.h + 0.8}mm ${T.l + 0.6}mm;color:var(--ink);font-family:BVP,sans-serif;font-size:var(--fs);line-height:1.45;display:flex;flex-direction:column}
.side .fill{flex:1;min-height:0}
.sec{margin-bottom:calc(var(--fs) * 1.618)}
.sec:last-child{margin-bottom:0}
.hd{display:flex;align-items:center;gap:1.6mm;font-family:BVP;font-weight:700;font-size:calc(var(--fs) * .92);letter-spacing:.22em;text-transform:uppercase;color:var(--plum-3);margin-bottom:calc(var(--fs) * .75)}
.hd::after{content:'';flex:1;height:.18mm;background:linear-gradient(90deg,var(--gold-2),rgba(201,162,90,0))}
.hd i{width:1.5mm;height:1.5mm;transform:rotate(45deg);background:linear-gradient(135deg,var(--gold-1),var(--gold-3));flex:none}
ul{list-style:none}
li{position:relative;padding-left:2.4mm;margin-bottom:calc(var(--fs) * .38)}
li::before{content:'';position:absolute;left:.3mm;top:calc(var(--fs) * .55);width:.9mm;height:.9mm;transform:rotate(45deg);background:var(--gold-3)}
li b{font-weight:600;color:var(--plum-3)}
.cp{display:flex;align-items:baseline;gap:1mm;padding:calc(var(--fs) * .32) 0;border-bottom:.12mm solid rgba(164,122,54,.35)}
.cp:first-child{border-top:.12mm solid rgba(164,122,54,.35)}
.cp span{flex:1}
.cp b{font-weight:600;color:var(--plum-3);white-space:nowrap}
.cp.note{border:0;padding-top:calc(var(--fs) * .2);color:var(--mute);font-style:normal}
.chips{display:flex;gap:1.2mm;flex-wrap:wrap;margin-top:calc(var(--fs) * .6)}
.chips span{border:.15mm solid var(--gold);color:var(--gold-3);border-radius:5mm;padding:.35mm 2mm;font-size:calc(var(--fs) * .82);font-weight:600;letter-spacing:.06em}
.small{font-size:calc(var(--fs) * .88);color:var(--ink-2)}
.legal{border-top:.15mm solid var(--gold-2);padding-top:calc(var(--fs) * .8);font-size:calc(var(--fs) * .88);color:var(--ink-2)}
.legal p{margin-bottom:calc(var(--fs) * .3)}
.legal strong{color:var(--ink);font-weight:600}
.boxes{display:grid;grid-template-columns:1fr 1fr 1fr;gap:1mm;margin:calc(var(--fs) * .55) 0}
.boxes div{border:.15mm solid rgba(74,4,78,.35);border-radius:.8mm;padding:.6mm 1mm;height:6.2mm;font-size:calc(var(--fs) * .78);letter-spacing:.08em;text-transform:uppercase;color:var(--mute)}
.foot{display:flex;gap:2mm;align-items:flex-end;margin-top:calc(var(--fs) * .6)}
.foot .who{flex:1}
.bc{width:21mm;height:13mm;flex:none;border:.15mm dashed rgba(74,4,78,.45);border-radius:.8mm;display:grid;place-items:center;text-align:center;font-size:calc(var(--fs) * .78);color:var(--mute);letter-spacing:.08em}
.only{margin-top:calc(var(--fs) * .55);font-weight:700;letter-spacing:.14em;font-size:calc(var(--fs) * .8);color:var(--plum-3);text-transform:uppercase}
/* --- Mặt trước (tím đêm) --- */
.front{position:relative;height:${H}mm;color:var(--ivory);text-align:center;display:flex;flex-direction:column;align-items:center;padding:${T.h + 3.6}mm ${T.h + 3}mm ${T.h + 3}mm}
.brand{font-family:BVP;font-weight:600;font-size:${T.s}mm;letter-spacing:.42em;margin:${T.b}mm 0 .6mm;padding-left:.42em;background:linear-gradient(100deg,var(--gold-1),var(--gold-2) 55%,var(--gold-3));-webkit-background-clip:text;background-clip:text;color:transparent}
.motto{font-family:Cormorant;font-style:italic;font-weight:500;font-size:${T.b * 1.12}mm;color:#cdb7dc;letter-spacing:.04em}
.rule{display:flex;align-items:center;gap:1.6mm;width:${FRONT * 0.382 * 1.3}mm;margin:${T.h * 0.9}mm 0 ${T.h * 0.9}mm}
.rule::before,.rule::after{content:'';flex:1;height:.16mm;background:linear-gradient(90deg,rgba(216,180,108,0),var(--gold-2))}
.rule::after{transform:scaleX(-1)}
.rule i{width:1.4mm;height:1.4mm;transform:rotate(45deg);border:.16mm solid var(--gold-2)}
.cat{margin-top:auto;font-family:BVP;font-weight:600;font-size:${T.s}mm;letter-spacing:.32em;text-transform:uppercase;color:var(--accent);padding-left:.32em}
.name{font-feature-settings:'lnum' 1;font-family:Cormorant;font-weight:600;line-height:.92;margin:${T.b}mm 0 ${T.b}mm;color:#fbf6ec;letter-spacing:.01em;white-space:nowrap}
.name span{display:block}
.tag{font-family:Cormorant;font-style:italic;font-weight:500;font-size:${T.h}mm;line-height:1.25;color:#e7d9ef;max-width:${FRONT - 16}mm}
.hero{margin-top:auto;margin-bottom:${T.h + 1.2}mm;display:flex;flex-direction:column;align-items:center;gap:1.2mm}
.pill{border:.18mm solid var(--gold-2);border-radius:6mm;padding:1mm 3.4mm;font-family:BVP;font-weight:500;font-size:${T.s}mm;letter-spacing:.06em;color:var(--gold-1);background:rgba(18,6,31,.35)}
.pill b{font-weight:700;color:#fff}
.vol{display:flex;align-items:baseline;gap:2.6mm;margin-top:${T.b * 0.8}mm;font-family:BVP;font-size:${T.xs}mm;letter-spacing:.24em;text-transform:uppercase;color:#bfa9cf}
.vol strong{font-variant-numeric:lining-nums;font-feature-settings:'lnum' 1;font-family:Cormorant;font-weight:600;font-size:${T.l}mm;letter-spacing:.04em;color:var(--gold-1);text-transform:none}
.no{font-feature-settings:'lnum' 1;position:absolute;top:${T.h + 0.6}mm;right:${T.h + 1.4}mm;font-family:Cormorant;font-style:italic;font-weight:500;font-size:${T.b * 1.05}mm;color:var(--gold-2);letter-spacing:.06em}
.no2{position:absolute;top:${T.h + 0.6}mm;left:${T.h + 1.4}mm;font-family:BVP;font-weight:600;font-size:${T.xs}mm;color:#a993bb;letter-spacing:.2em}
.ms{position:absolute;bottom:${T.h + 2.4}mm;left:0;right:0;font-family:BVP;font-size:${T.xs}mm;letter-spacing:.2em;color:#9f8ab2;text-transform:uppercase}
`;
}

function background(p) {
  const B = BLEED, tot = W + 2 * B, hh = H + 2 * B;
  const fx = B + SIDE, fw = FRONT;
  const g = NHOM[p.nhom] || NHOM['moi-truong'];
  // gợn sóng nước: các cung đồng tâm, bán kính nhân φ
  const ripples = [];
  for (let i = 0, r = 6; i < 7; i++, r *= Math.sqrt(PHI)) ripples.push(`<ellipse cx="${fx + fw / 2}" cy="${B + H + 6}" rx="${(r * 1.9).toFixed(2)}" ry="${(r * 0.62).toFixed(2)}" fill="none" stroke="url(#gold)" stroke-width="${(0.22 - i * 0.02).toFixed(2)}" opacity="${(0.55 - i * 0.06).toFixed(2)}"/>`);
  const sp = goldenSpiral();
  const inset = 3.6;
  const corner = (x, y, sx, sy) => `<path d="M${x} ${y + sy * 5.5} L${x} ${y} L${x + sx * 5.5} ${y}" fill="none" stroke="url(#gold)" stroke-width=".32"/><rect x="${x + sx * 1.3 - 0.6}" y="${y + sy * 1.3 - 0.6}" width="1.2" height="1.2" transform="rotate(45 ${x + sx * 1.3} ${y + sy * 1.3})" fill="url(#gold)"/>`;
  const L = fx + inset, R = fx + fw - inset, Tp = B + inset, Bt = B + H - inset;
  return `<svg class="bg" viewBox="0 0 ${tot} ${hh}" width="${tot}mm" height="${hh}mm" xmlns="http://www.w3.org/2000/svg">
<defs>
<linearGradient id="gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f6e7bd"/><stop offset=".45" stop-color="#d8b46c"/><stop offset="1" stop-color="#a47a36"/></linearGradient>
<linearGradient id="plum" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2c0f47"/><stop offset=".618" stop-color="#1e0b3a"/><stop offset="1" stop-color="#12061f"/></linearGradient>
<radialGradient id="glow" cx=".5" cy=".2" r=".62"><stop offset="0" stop-color="#86198f" stop-opacity=".55"/><stop offset=".618" stop-color="#4a044e" stop-opacity=".18"/><stop offset="1" stop-color="#4a044e" stop-opacity="0"/></radialGradient>
<linearGradient id="paper" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fbf7f0"/><stop offset="1" stop-color="#f1e8d8"/></linearGradient>
<pattern id="weave" width="2.4" height="2.4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0 L0 2.4" stroke="#a47a36" stroke-width=".05" opacity=".35"/></pattern>
</defs>
<rect width="${tot}" height="${hh}" fill="url(#paper)"/>
<rect width="${tot}" height="${hh}" fill="url(#weave)" opacity=".5"/>
<!-- dải tím mảnh trên/dưới mặt bên, nối liền với mặt trước khi quấn -->
<rect x="0" y="0" width="${tot}" height="${B + 2.6}" fill="url(#plum)"/>
<rect x="0" y="${B + H - 2.6}" width="${tot}" height="${2.6 + B}" fill="url(#plum)"/>
<rect x="0" y="${B + 2.6}" width="${tot}" height=".3" fill="url(#gold)"/>
<rect x="0" y="${B + H - 2.9}" width="${tot}" height=".3" fill="url(#gold)"/>
<!-- hình chìm logo TIM trên mặt bên -->
<g opacity=".05" transform="translate(${B + SIDE / 2 - 19} ${B + H * 0.618 - 19}) scale(.19)"><path d="${ringPath}" fill="#4a044e" fill-rule="evenodd"/><path d="${letterPath}" fill="#4a044e"/></g>
<g opacity=".05" transform="translate(${B + SIDE + FRONT + SIDE / 2 - 19} ${B + H * 0.382 - 19}) scale(.19)"><path d="${ringPath}" fill="#4a044e" fill-rule="evenodd"/><path d="${letterPath}" fill="#4a044e"/></g>
<!-- mặt trước -->
<rect x="${fx}" y="0" width="${fw}" height="${hh}" fill="url(#plum)"/>
<rect x="${fx}" y="0" width="${fw}" height="${hh}" fill="url(#glow)"/>
<g opacity=".22" transform="translate(${fx + fw * 0.5} ${B + 13.5}) scale(30)"><path d="${sp}" fill="none" stroke="#d8b46c" stroke-width="${(0.16 / 30).toFixed(4)}"/></g>
<clipPath id="fc"><rect x="${fx}" y="0" width="${fw}" height="${hh}"/></clipPath>
<g clip-path="url(#fc)">${ripples.join('')}</g>
<rect x="${fx}" y="0" width=".35" height="${hh}" fill="url(#gold)"/><rect x="${fx + fw - 0.35}" y="0" width=".35" height="${hh}" fill="url(#gold)"/>
<rect x="${L}" y="${Tp}" width="${R - L}" height="${Bt - Tp}" fill="none" stroke="url(#gold)" stroke-width=".14" opacity=".75"/>
${corner(L - 1.2, Tp - 1.2, 1, 1)}${corner(R + 1.2, Tp - 1.2, -1, 1)}${corner(L - 1.2, Bt + 1.2, 1, -1)}${corner(R + 1.2, Bt + 1.2, -1, -1)}
<!-- dải màu nhóm sản phẩm (38,2% chiều rộng mặt trước) -->
<rect x="${fx + fw * 0.309}" y="${B + H - inset - 0.35}" width="${fw * 0.382}" height=".7" fill="${g.accent}"/>
</svg>`;
}

function logo(sizeMm) {
  return `<svg width="${sizeMm}mm" height="${sizeMm}mm" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f6e7bd"/><stop offset=".45" stop-color="#d8b46c"/><stop offset="1" stop-color="#a47a36"/></linearGradient></defs><circle cx="100" cy="100" r="88" fill="#1e0b3a" opacity=".55"/><path d="${ringPath}" fill="url(#lg)" fill-rule="evenodd"/><path d="${letterPath}" fill="#fbf6ec"/></svg>`;
}

function cpRow(t) {
  const m = /^(.*?):\s*(.+)$/.exec(t);
  if (!m) return `<div class="cp note">${rich(t)}</div>`;
  return `<div class="cp"><span>${rich(m[1])}</span><b>${rich(m[2])}</b></div>`;
}

function html(p) {
  const g = NHOM[p.nhom] || NHOM['moi-truong'];
  const pp = data.phan_phoi, sx = data.san_xuat;
  const total = String(data.san_pham.length).padStart(2, '0');
  const no = String(p.stt).padStart(2, '0');
  const hero = (p.thanh_phan[0] || '').split(':');
  const heroHtml = hero.length > 1 ? `${rich(hero[0].replace(/\s*\(min\)/i, ''))} <b>${rich(hero[1].trim())}</b>` : rich(hero[0]);
  const nameParts = p.ten.length > 11 && p.ten.includes(' ') ? splitName(p.ten) : [p.ten];
  const vol = p.the_tich && !/In trên/.test(p.the_tich) ? p.the_tich : (p.quy_cach || '').replace(/^(Chai|Gói)\s*/i, '').split(/[,·]/)[0].trim();
  const volLabel = p.dang === 'chai' ? 'Thể tích thực' : 'Khối lượng tịnh';
  return `<!doctype html><html lang="vi"><head><meta charset="utf-8"><title>Nhãn ${esc(p.ten)} – Thủy Sản Tím</title>
<style>${css()}</style></head><body>
<div class="sheet"><div class="bleed">${background(p)}
<div class="trim">
  <section class="side" data-fit>
    <div class="sec"><div class="hd"><i></i>Công dụng</div><ul>${p.cong_dung.map((c) => `<li>${rich(c)}</li>`).join('')}</ul></div>
    <div class="sec"><div class="hd"><i></i>Thành phần <span style="letter-spacing:.06em;text-transform:none;font-weight:500;color:var(--mute)">${p.dang === 'chai' ? '(trong 1 lít)' : '(trong 1 kg)'}</span></div>${p.thanh_phan.map(cpRow).join('')}
      ${p.nhan_phu && p.nhan_phu.length ? `<div class="chips">${p.nhan_phu.map((c) => `<span>${esc(c)}</span>`).join('')}</div>` : ''}</div>
    <div class="fill"></div>
    <div class="foot"><div class="who small"><b style="color:var(--ink);font-weight:600">Bảo quản:</b> ${rich(p.bao_quan)}</div><div class="bc">MÃ VẠCH<br>EAN-13</div></div>
  </section>
  <section class="front" style="--accent:${g.accent}">
    <div class="no2">MS ${esc(p.ma_so)}</div>
    <div class="no">N° ${no} / ${total}</div>
    ${logo(16.2)}
    <div class="brand">THỦY SẢN TÍM</div>
    <div class="motto">Tinh hoa sinh học · Vững vàng mùa vụ</div>
    <div class="rule"><i></i></div>
    <div class="cat">${esc(g.ten)}</div>
    <h1 class="name" data-name>${nameParts.map((s) => `<span>${esc(s)}</span>`).join('')}</h1>
    <div class="tag">${rich(p.phu_de)}</div>
    <div class="hero">
      <div class="pill">${heroHtml}</div>
      <div class="vol">${volLabel} <strong>${rich(vol || '[ĐIỀN]')}</strong></div>
    </div>
    <div class="ms">TCCS ${esc(p.tccs)}</div>
  </section>
  <section class="side" data-fit>
    <div class="sec"><div class="hd"><i></i>Hướng dẫn sử dụng</div><ul>${p.huong_dan.map((c) => `<li>${rich(c).replace(/^([^:]{3,48}):/, '<b>$1:</b>')}</li>`).join('')}</ul></div>
    <div class="fill"></div>
    <div class="legal">
      <p><strong>Mã số:</strong> ${esc(p.ma_so)} &nbsp;·&nbsp; <strong>TCCS:</strong> ${esc(p.tccs)}</p>
      <p><strong>HSD:</strong> ${rich(p.hsd && !/In trên/.test(p.hsd) ? p.hsd : 'xem trên bao bì')} &nbsp;·&nbsp; <strong>Quy cách:</strong> ${rich(p.quy_cach || '')}</p>
      <div class="boxes"><div>Số lô</div><div>NSX</div><div>HSD</div></div>
      <p><strong>Sản xuất:</strong> ${esc(sx.ten)} · ${esc(sx.dia_chi)} · ĐT ${esc(sx.dien_thoai)}</p>
      <p><strong>Phân phối:</strong> ${esc(pp.ten)} · Hotline ${rich(pp.hotline)} · ${esc(pp.web)}</p>
      <div class="only">Chỉ dùng trong nuôi trồng thủy sản · Để xa tầm tay trẻ em</div>
    </div>
  </section>
</div></div>
${cropMarks()}
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

function cropMarks() {
  const tw = W + 2 * (BLEED + MARK), th = H + 2 * (BLEED + MARK);
  const x0 = MARK + BLEED, y0 = MARK + BLEED, x1 = x0 + W, y1 = y0 + H, L = MARK - 1;
  const ln = (a, b, c, d) => `<line x1="${a}" y1="${b}" x2="${c}" y2="${d}" stroke="#000" stroke-width=".1"/>`;
  const m = [];
  for (const x of [x0, x1]) { m.push(ln(x, 0, x, L), ln(x, th - L, x, th)); }
  for (const y of [y0, y1]) { m.push(ln(0, y, L, y), ln(tw - L, y, tw, y)); }
  for (const x of [x0 + SIDE, x0 + SIDE + FRONT]) { m.push(ln(x, 0, x, L * 0.6), ln(x, th - L * 0.6, x, th)); }
  return `<svg class="marks" viewBox="0 0 ${tw} ${th}" width="${tw}mm" height="${th}mm">${m.join('')}
<text x="${x0}" y="${th - 1.6}" font-family="BVP" font-size="1.6" fill="#555">Thủy Sản Tím · nhãn quấn ${W} × ${H} mm (φ : 1) · tràn lề ${BLEED} mm · gấp: ${SIDE} | ${FRONT} | ${SIDE} mm</text></svg>`;
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
    const max = (FRONT - 13) * mm;
    while ([...n.children].some((c) => c.getBoundingClientRect().width > max) && size > 5) { size -= 0.1; n.style.fontSize = size + 'mm'; }
    const f = document.querySelector('.front');
    const fb = f.getBoundingClientRect().bottom;
    const overFront = [...f.querySelectorAll('.name,.tag,.hero')].some((e) => e.getBoundingClientRect().bottom > fb);
    return { sides: rep, name: +size.toFixed(1), overFront };
  }, { T, MIN: MIN_BODY, FRONT });
}

async function main() {
  const only = opt('--chi') ? new Set(opt('--chi').split(',')) : null;
  const list = data.san_pham.filter((p) => !only || only.has(p.slug));
  fs.mkdirSync(OUT, { recursive: true });
  const { chromium } = require('playwright');
  const browser = await chromium.launch();
  const page = await browser.newPage({ deviceScaleFactor: 600 / 96 });
  let bad = 0;
  for (const p of list) {
    await page.setContent(html(p), { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    const r = await fit(page);
    const fixed = await page.evaluate(() => '<!doctype html>' + document.documentElement.outerHTML);
    fs.writeFileSync(path.join(OUT, `${p.slug}.html`), fixed);
    const tw = W + 2 * (BLEED + MARK), th = H + 2 * (BLEED + MARK);
    await page.pdf({ path: path.join(OUT, `${p.slug}.pdf`), width: `${tw}mm`, height: `${th}mm`, printBackground: true, pageRanges: '1' });
    const box = await page.locator('.trim').boundingBox();
    await page.screenshot({ path: path.join(OUT, `${p.slug}.png`), clip: box });
    const small = r.sides.some((s) => s.fs < 1.75);
    const err = r.sides.some((s) => s.over) || r.overFront;
    if (err) bad++;
    console.log(`${err ? 'LỖI TRÀN' : small ? 'chữ nhỏ' : 'ok'}  ${p.slug}  chữ mặt bên ${r.sides.map((s) => (s.fs / 0.3528).toFixed(1) + 'pt').join(' / ')} · tên ${r.name} mm`);
  }
  await browser.close();
  console.log(`${list.length} nhãn, ${bad} lỗi → ${path.relative(process.cwd(), OUT)}/`);
  process.exitCode = bad ? 1 : 0;
}

main().catch((e) => { console.error(e); process.exit(1); });
