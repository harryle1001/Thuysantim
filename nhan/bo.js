#!/usr/bin/env node
'use strict';
// Bộ bao bì concept D (tím hoàng gia + nhũ vàng + trắng) cho TÚI và BAO: mặt trước + mặt sau.
//   node nhan/bo.js --chi vh-glubenco-pro
// Khổ (mm, tỷ lệ φ): túi đứng 130 × 210, bao 450 × 728. Mọi kích thước tính theo đơn vị u = rộng / 130.
// Xuất nhan/out/<slug>-<tui|bao>-<truoc|sau>.pdf (vector, tràn lề 3 mm) và .png (dùng làm ảnh dán cho mockup).
const fs = require('fs');
const path = require('path');
const B = require('./build.js');
const { emblemSvg } = require('./emblem.js');

const OUT = path.join(__dirname, 'out');
const args = process.argv.slice(2);
const opt = (f) => { const i = args.indexOf(f); return i > -1 ? args[i + 1] : null; };
const KHO = { tui: { w: 130, h: 210.3, ten: 'Túi đứng' }, bao: { w: 450, h: 728.1, ten: 'Bao' } };
const BLEED = 3;
const { P, G, WH, PHI, rich, esc } = B;
const KIEU = opt('--kieu') || 'e'; // d: tím + nhũ vàng · e: trắng φ nhiều màu

function css(u) {
  const m = (n) => `${(n * u).toFixed(3)}mm`;
  return `${B.fontFaces()}
*{box-sizing:border-box;margin:0;padding:0}
html,body{background:#fff}
sup{font-size:.62em;vertical-align:.5em;line-height:0}sub{font-size:.62em;vertical-align:-.2em;line-height:0}
mark{background:#ffe08a;color:#5a3b00;padding:0 .3mm}
:root{--P:${P};--G:${G};--W:${WH};--ln:${m(0.3)}}
.page{position:relative;overflow:hidden}
.face{position:absolute;left:${BLEED}mm;top:${BLEED}mm}
/* mặt trước */
.fr{background:var(--P);color:var(--W);text-align:center;display:flex;flex-direction:column;align-items:center}
.frame{position:absolute;inset:${m(5.5)};border:var(--ln) solid var(--G);pointer-events:none}
.frame i{position:absolute;width:${m(2)};height:${m(2)};background:var(--G);transform:rotate(45deg)}
.frame i:nth-child(1){left:${m(-1)};top:${m(-1)}}.frame i:nth-child(2){right:${m(-1)};top:${m(-1)}}
.frame i:nth-child(3){left:${m(-1)};bottom:${m(-1)}}.frame i:nth-child(4){right:${m(-1)};bottom:${m(-1)}}
.top{position:absolute;top:${m(9)};left:${m(10)};right:${m(10)};display:flex;justify-content:space-between;font-family:BVP;font-weight:600;font-size:${m(2.1)};letter-spacing:.24em;color:var(--G)}
.top .no{font-family:Cormorant;font-style:italic;font-weight:600;font-size:${m(3)};letter-spacing:.06em;font-feature-settings:'lnum' 1}
.em{margin-top:${m(17)}}
.brand{font-family:BVP;font-weight:700;font-size:${m(3)};letter-spacing:.46em;padding-left:.46em;color:var(--G);margin-top:${m(4)}}
.motto{font-family:Cormorant;font-style:italic;font-weight:600;font-size:${m(3.6)};margin-top:${m(1)}}
.rule{display:flex;align-items:center;gap:${m(2.4)};width:${m(64)};margin:${m(6)} 0 ${m(5)};color:var(--G)}
.rule::before,.rule::after{content:'';flex:1;height:var(--ln);background:currentColor}
.rule i{width:${m(2.2)};height:${m(2.2)};transform:rotate(45deg);border:var(--ln) solid currentColor}
.cat{font-family:BVP;font-weight:700;font-size:${m(2.9)};letter-spacing:.34em;padding-left:.34em;text-transform:uppercase;color:var(--G)}
.name{font-family:Cormorant;font-weight:700;line-height:.9;white-space:nowrap;margin:${m(3.2)} 0 ${m(3)};font-feature-settings:'lnum' 1}
.name span{display:block}
.tag{font-family:Cormorant;font-style:italic;font-weight:600;font-size:${m(5.4)};line-height:1.25;max-width:${m(100)}}
.icons{display:flex;gap:${m(9)};margin-top:${m(7)};color:var(--G)}
.icons div{display:flex;flex-direction:column;align-items:center;gap:${m(1.4)};font-family:BVP;font-weight:700;font-size:${m(2.3)};letter-spacing:.18em;color:var(--W)}
.icons svg{width:${m(9.5)};height:${m(9.5)};color:var(--G)}
.base{position:absolute;left:0;right:0;bottom:0;height:23.6%;background:var(--W);color:var(--P);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${m(2.6)}}
.base::before{content:'';position:absolute;left:0;right:0;top:${m(1.6)};height:${m(0.6)};background:var(--G)}
.pill{border:var(--ln) solid var(--P);border-radius:${m(9)};padding:${m(1.6)} ${m(5.5)};font-family:BVP;font-weight:500;font-size:${m(3)};letter-spacing:.06em}
.pill b{font-weight:700}
.vol{display:flex;align-items:baseline;gap:${m(3.5)};font-family:BVP;font-weight:700;font-size:${m(2.3)};letter-spacing:.24em;text-transform:uppercase}
.vol strong{font-family:Cormorant;font-weight:700;font-size:${m(9)};letter-spacing:.02em;text-transform:none;font-feature-settings:'lnum' 1}
.only{font-family:BVP;font-weight:700;font-size:${m(2.1)};letter-spacing:.2em;text-transform:uppercase}
/* mặt sau */
.bk{background:var(--W);color:var(--P);font-family:BVP;display:flex;flex-direction:column}
.bk .hdr{height:${m(26)};background:var(--P);color:var(--W);display:flex;align-items:center;gap:${m(4)};padding:0 ${m(9)};flex:none;border-bottom:${m(0.8)} solid var(--G)}
.bk .hdr .t{flex:1}
.bk .hdr .n{font-family:Cormorant;font-weight:700;font-size:${m(8)};line-height:1}
.bk .hdr .c{font-weight:700;font-size:${m(2.1)};letter-spacing:.28em;color:var(--G);text-transform:uppercase;margin-top:${m(1)}}
.bk .hdr .b{font-weight:700;font-size:${m(2.2)};letter-spacing:.34em;color:var(--G);text-align:right}
.cols{flex:1;min-height:0;display:grid;grid-template-columns:61.8fr 38.2fr;gap:${m(6)};padding:${m(8)} ${m(9)} ${m(6)};font-size:var(--fs);line-height:1.45}
.col{display:flex;flex-direction:column;min-height:0}
.sec{margin-bottom:calc(var(--fs) * 1.5)}
.hd{display:flex;align-items:center;gap:${m(2)};font-weight:700;font-size:calc(var(--fs) * .92);letter-spacing:.22em;text-transform:uppercase;margin-bottom:calc(var(--fs) * .7)}
.hd::after{content:'';flex:1;height:var(--ln);background:var(--G)}
.hd i{width:${m(1.9)};height:${m(1.9)};transform:rotate(45deg);background:var(--G);flex:none}
ul{list-style:none}
li{position:relative;padding-left:calc(var(--fs) * 1.15);margin-bottom:calc(var(--fs) * .38)}
li::before{content:'';position:absolute;left:.1em;top:.55em;width:.45em;height:.45em;transform:rotate(45deg);background:var(--G)}
li b{font-weight:700}
.cp{display:flex;align-items:baseline;gap:${m(1.4)};padding:calc(var(--fs) * .32) 0;border-bottom:var(--ln) solid var(--P)}
.cp:first-of-type{border-top:var(--ln) solid var(--P)}
.cp{flex-wrap:wrap}.cp span{flex:1 1 58%}.cp b{font-weight:700;white-space:nowrap;margin-left:auto}
.cp.note{border:0}
.legal{font-size:calc(var(--fs) * .9)}
.legal p{margin-bottom:calc(var(--fs) * .3)}.legal strong{font-weight:700}
.boxes{display:grid;grid-template-columns:1fr 1fr 1fr;gap:${m(1.4)};margin:calc(var(--fs) * .5) 0}
.boxes div{border:var(--ln) solid var(--P);border-radius:${m(1)};padding:${m(0.8)} ${m(1.2)};height:${m(8)};font-size:calc(var(--fs) * .78);font-weight:700;letter-spacing:.08em}
.bc{margin-top:auto;height:${m(17)};border:var(--ln) dashed var(--P);border-radius:${m(1)};display:grid;place-items:center;font-size:calc(var(--fs) * .8);letter-spacing:.1em;text-align:center}
.bk .ftr{flex:none;background:var(--P);color:var(--W);padding:${m(4)} ${m(9)};font-size:${m(2.3)};line-height:1.5;border-top:${m(0.8)} solid var(--G)}
.bk .ftr b{color:var(--G)}
.bk .ftr .d{font-size:${m(3)};line-height:1.45}.bk .ftr .d .n{font-weight:700;letter-spacing:.16em}.bk .ftr .d .h{font-weight:700;font-size:${m(3.4)}}
.bk .ftr .mf{opacity:.55;font-size:${m(2.1)};margin-top:${m(1.4)}}
.bk .ftr .w{font-weight:700;letter-spacing:.18em;color:var(--G);margin-top:${m(1)}}
`;
}

// ---- Concept E: trắng chủ đạo, logo góc trái trên, màu riêng sản phẩm, cung sóng φ ----
function cssE(u) {
  const m = (n) => `${(n * u).toFixed(3)}mm`;
  return `
.fe{background:var(--W);color:var(--P)}
.stripe{position:absolute;left:0;right:0;top:0;height:${m(4.2)};display:flex}.stripe i{display:block;height:100%}
.lockE{position:absolute;left:${m(10)};top:${m(13)};display:flex;align-items:center;gap:${m(3.6)}}
.lockE .b{font-family:BVP;font-weight:700;font-size:${m(3.4)};letter-spacing:.3em;color:var(--P)}
.lockE .m{font-family:Cormorant;font-style:italic;font-weight:600;font-size:${m(3.9)};color:var(--G);margin-top:${m(0.8)}}
.typE{position:absolute;right:${m(10)};top:${m(12)};display:flex;flex-direction:column;align-items:center;gap:${m(1.6)}}
.typE i{width:${m(20)};height:${m(20)};border-radius:50%;background:var(--pc);color:var(--W);display:grid;place-items:center}
.typE svg{width:${m(12.4)};height:${m(12.4)}}
.typE b{font-family:BVP;font-weight:700;font-size:${m(2.8)};letter-spacing:.14em;color:var(--pc)}
.grpE{font-family:BVP;font-weight:600;font-size:${m(2.5)};letter-spacing:.26em;text-transform:uppercase;color:var(--P);margin-bottom:${m(2.2)}}
.madeE{position:absolute;left:${m(10)};bottom:${m(13.4)};font-family:BVP;font-weight:700;font-size:${m(2.3)};letter-spacing:.22em;color:var(--pc)}
.midE{position:absolute;left:${m(10)};right:${m(10)};top:calc(38.2% - ${m(16)})}
.midE .cat{font-family:BVP;font-weight:700;font-size:${m(3)};letter-spacing:.28em;color:var(--pc);text-transform:uppercase}
.midE .cat{padding-left:0}
.midE .cat::after{content:'';display:block;width:${m(30)};height:${m(0.9)};background:var(--pc);margin-top:${m(2.6)}}
.midE .name{font-family:BVP;font-weight:700;letter-spacing:-.015em;line-height:1;white-space:nowrap;margin:${m(5)} 0 ${m(3.4)};color:var(--P)}
.midE .name span{display:table}
.midE .tag{font-family:Cormorant;font-style:italic;font-weight:600;font-size:${m(6.2)};line-height:1.2;color:var(--pc);max-width:${m(105)}}
.midE .pill{display:inline-block;margin-top:${m(6)};background:var(--pc);color:var(--W);border:0;border-radius:${m(9)};padding:${m(2)} ${m(6)};font-family:BVP;font-weight:500;font-size:${m(3.3)};letter-spacing:.05em}
.midE .pill b{font-weight:700}
.fe .icons{position:absolute;left:${m(10)};bottom:${m(41)};display:flex;gap:${m(5.5)};color:var(--pc)}
.fe .icons div{display:flex;flex-direction:column;align-items:center;gap:${m(1.4)};font-family:BVP;font-weight:700;font-size:${m(2.4)};letter-spacing:.18em;color:var(--P)}
.fe .icons svg{width:${m(10.5)};height:${m(10.5)};color:var(--pc)}
.volE{position:absolute;left:${m(10)};bottom:${m(20)};display:flex;align-items:baseline;gap:${m(3.4)};font-family:BVP;font-weight:700;font-size:${m(2.4)};letter-spacing:.22em;text-transform:uppercase}
.volE strong{font-family:Cormorant;font-weight:700;font-size:${m(11)};letter-spacing:0;text-transform:none;font-feature-settings:'lnum' 1}
.onlyE{position:absolute;left:${m(10)};bottom:${m(8.5)};font-family:BVP;font-weight:700;font-size:${m(2.1)};letter-spacing:.2em}
.arcE{position:absolute;right:0;bottom:0}
.bot{position:absolute;left:0;right:0;bottom:0;height:${m(2.4)};background:var(--P)}
/* mặt sau E */
.bk.e .hdr{background:var(--W);color:var(--P);border-bottom:${m(0.8)} solid var(--pc)}
.bk.e .hdr .c{color:var(--pc)}.bk.e .hdr .b{color:var(--P)}
.bk.e .hd::after{background:var(--pcl)}.bk.e .hd i,.bk.e li::before{background:var(--pc)}
.bk.e .cp{border-color:var(--pcl)!important}.bk.e .boxes div,.bk.e .bc{border-color:var(--pcl)}
.bk.e .ftr{border-top:${m(0.8)} solid var(--pc)}.bk.e .ftr b,.bk.e .ftr .w{color:var(--pcl)}
`;
}

function stripe(p) {
  return `<div class="stripe"><i style="width:61.8%;background:var(--pc)"></i><i style="width:23.6%;background:${P}"></i><i style="width:14.6%;background:${G}"></i></div>`;
}

function frontE(p, k, u) {
  const x = B.parts(p);
  const m = (n) => `${(n * u).toFixed(3)}mm`;
  const { w, h } = KHO[k], Rr = w * 0.618;
  const vol = (/kg|g\b/i.test(p.quy_cach) ? 'Khối lượng tịnh' : 'Thể tích thực');
  const volV = x.vol.replace(/.*<strong>/, '').replace('</strong></div>', '');
  return `<div class="face fe" style="width:${w}mm;height:${h}mm">
  <svg class="arcE" width="${Rr}mm" height="${Rr}mm" viewBox="0 0 ${Rr} ${Rr}">${B.arcs(p.mau, Rr, Rr, Rr, p.nhom)}</svg>
  ${stripe(p)}<div class="bot"></div>
  <div class="lockE">${B.brandMark({ fill: P }, `width="${m(23)}" height="${m(23)}"`)}<div><div class="b">THỦY SẢN TÍM</div><div class="m">Tinh hoa sinh học · Vững vàng mùa vụ</div></div></div>
  <div class="typE"><i>${B.svgIcon(x.pl.loaiKey)}</i><b>${x.pl.ma}</b></div>
  <div class="midE"><div class="grpE">${x.cat}</div><div class="cat">${esc(x.pl.loai)}</div>${x.name.replace(/data-max="[^"]*"/, `data-max="${(w * 0.82).toFixed(1)}"`)}${x.tag}<br>${x.pill}</div>
  ${x.icons}
  <div class="volE">${vol} <strong>${volV}</strong></div>
  <div class="madeE">SẢN XUẤT TẠI VIỆT NAM · ${x.no}</div>
  <div class="onlyE">CHỈ DÙNG TRONG NUÔI TRỒNG THỦY SẢN</div>
</div>`;
}

function front(p, k, u) {
  if (KIEU === 'e') return frontE(p, k, u);
  const x = B.parts(p);
  const m = (n) => `${(n * u).toFixed(3)}mm`;
  const vol = (/kg|g\b/i.test(p.quy_cach) ? 'Khối lượng tịnh' : 'Thể tích thực');
  const volV = x.vol.replace(/.*<strong>/, '').replace('</strong></div>', '');
  return `<div class="face fr" style="width:${KHO[k].w}mm;height:${KHO[k].h}mm">
  <div class="frame"><i></i><i></i><i></i><i></i></div>
  <div class="top"><span>MS ${x.ms}</span><span class="no">${x.no}</span></div>
  <div class="em">${emblemSvg({ fill: G, bg: P }, `width="${m(52)}" height="${m(52)}"`)}</div>
  <div class="brand">THỦY SẢN TÍM</div><div class="motto">Tinh hoa sinh học · Vững vàng mùa vụ</div>
  <div class="rule"><i></i></div>
  <div class="cat">${x.cat}</div>
  ${x.name.replace(/data-max="[^"]*"/, `data-max="${(KHO[k].w * 0.8).toFixed(1)}"`)}
  ${x.tag}${x.icons}
  <div class="base">${x.pill}<div class="vol">${vol} <strong>${volV}</strong></div><div class="only">Chỉ dùng trong nuôi trồng thủy sản</div></div>
</div>`;
}

function back(p, k, u) {
  const d = B.data, pp = d.phan_phoi, sx = d.san_xuat;
  const m = (n) => `${(n * u).toFixed(3)}mm`;
  const e = KIEU === 'e';
  return `<div class="face bk${e ? ' e' : ''}" style="width:${KHO[k].w}mm;height:${KHO[k].h}mm">${e ? stripe(p) : ''}
  <div class="hdr"${e ? ` style="margin-top:${m(4.2)}"` : ''}>${e ? B.brandMark({ fill: P }, `width="${m(17)}" height="${m(17)}"`) : emblemSvg({ fill: G, bg: P }, `width="${m(17)}" height="${m(17)}"`)}
    <div class="t"><div class="n">${esc(p.ten)}</div><div class="c">${esc(B.NHOM[p.nhom] || '')}</div></div><div class="b">THỦY SẢN TÍM</div></div>
  <div class="cols" data-fit>
    <div class="col">
      <div class="sec"><div class="hd"><i></i>Công dụng</div><ul>${p.cong_dung.map((c) => `<li>${rich(c)}</li>`).join('')}</ul></div>
      <div class="sec"><div class="hd"><i></i>Hướng dẫn sử dụng</div><ul>${p.huong_dan.map((c) => `<li>${rich(c).replace(/^([^:]{3,48}):/, '<b>$1:</b>')}</li>`).join('')}</ul></div>
      <div class="sec"><b>Bảo quản:</b> ${rich(p.bao_quan)}</div>
    </div>
    <div class="col">
      <div class="sec"><div class="hd"><i></i>Thành phần</div>${p.thanh_phan.map(B.cpRow).join('')}</div>
      <div class="sec legal">
        <p><strong>Phân loại:</strong> ${(() => { const f = B.phanLoai(p); return esc([f.ma, f.loai, f.dang, f.cach].join(' · ')); })()}</p>
        <p><strong>Mã số:</strong> ${esc(p.ma_so)}</p><p><strong>TCCS:</strong> ${esc(p.tccs)}</p>
        <p><strong>HSD:</strong> ${rich(p.hsd && !/In trên/.test(p.hsd) ? p.hsd : 'xem trên bao bì')}</p>
        <p><strong>Quy cách:</strong> ${rich(p.quy_cach || '')}</p>
        <div class="boxes"><div>SỐ LÔ</div><div>NSX</div><div>HSD</div></div>
      </div>
      <div class="bc">MÃ VẠCH<br>EAN-13</div>
    </div>
  </div>
  <div class="ftr"><div class="d"><div class="n"><b>NHÀ PHÂN PHỐI</b> · ${esc(pp.ten)}</div><div>${esc(pp.dia_chi)}</div><div class="h">Hotline ${rich(pp.hotline)} · ${esc(pp.web)}</div></div>
    <div class="mf">Sản xuất tại: ${esc(sx.ten)} · ${esc(sx.dia_chi)}</div>
    <div class="w">CHỈ DÙNG TRONG NUÔI TRỒNG THỦY SẢN · ĐỂ XA TẦM TAY TRẺ EM</div></div>
</div>`;
}

async function fit(page, k, u) {
  return page.evaluate(({ base, minFs }) => {
    const mm = 96 / 25.4;
    const s = document.querySelector('[data-fit]');
    if (s) {
      let fs = base; s.style.setProperty('--fs', fs + 'mm');
      const over = () => [...s.querySelectorAll('.col')].some((c) => c.scrollHeight > c.clientHeight + 0.5);
      while (over() && fs > minFs) { fs -= base * 0.02; s.style.setProperty('--fs', fs + 'mm'); }
      return { fs, over: over() };
    }
    const n = document.querySelector('[data-name]');
    let size = base * 9; n.style.fontSize = size + 'mm';
    const max = +n.dataset.max * mm;
    while ([...n.children].some((c) => c.getBoundingClientRect().width > max) && size > 4) { size *= 0.98; n.style.fontSize = size + 'mm'; }
    return { name: size };
  }, { base: 3.4 * u, minFs: 2.2 * u });
}

async function main() {
  const only = opt('--chi') ? new Set(opt('--chi').split(',')) : null;
  const list = B.data.san_pham.filter((p) => !only || only.has(p.slug));
  fs.mkdirSync(OUT, { recursive: true });
  const { chromium } = require('playwright');
  const browser = await chromium.launch();
  for (const p of list.filter((q) => q.dang !== 'chai' || args.includes('--ep'))) for (const k of ['tui', 'bao']) {
    const { w, h } = KHO[k], u = w / 130;
    for (const side of ['truoc', 'sau']) {
      const tw = w + 2 * BLEED, th = h + 2 * BLEED;
      // ảnh dán mockup: ~2400 px chiều cao cho túi, giữ nét cho bao
      const pxH = 3000, dsf = pxH / (h * 96 / 25.4);
      const page = await browser.newPage({ deviceScaleFactor: dsf, viewport: { width: Math.ceil(tw * 96 / 25.4), height: Math.ceil(th * 96 / 25.4) } });
      const body = side === 'truoc' ? front(p, k, u) : back(p, k, u);
      const bg = side === 'truoc' ? P : WH;
      await page.setContent(`<!doctype html><html lang="vi"><head><meta charset="utf-8"><style>${css(u)}${KIEU === 'e' ? cssE(u) : ''}</style></head><body><div class="page" style="width:${tw}mm;height:${th}mm;background:${KIEU === 'e' ? WH : bg};--pc:${p.mau};--pcl:${B.tint(p.mau, 0.62)}">${body}</div></body></html>`);
      await page.evaluate(() => document.fonts.ready);
      const r = await fit(page, k, u);
      const base = `${p.slug}-${k}-${side}${KIEU === 'e' ? '' : '-d'}`;
      await page.pdf({ path: path.join(OUT, base + '.pdf'), width: `${tw}mm`, height: `${th}mm`, printBackground: true, pageRanges: '1' });
      await page.screenshot({ path: path.join(OUT, base + '.png'), clip: await page.locator('.face').boundingBox() });
      console.log(`${r.over ? 'LỖI TRÀN' : 'ok'}  ${base}  ${r.fs ? 'chữ ' + (r.fs / 0.3528).toFixed(1) + 'pt' : 'tên ' + r.name.toFixed(1) + 'mm'}`);
      await page.close();
    }
  }
  await browser.close();
}

main().catch((e) => { console.error(e); process.exit(1); });
