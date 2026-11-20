#!/usr/bin/env node
'use strict';
// Catalogue + bảng giá A4 (concept E) cho 15 sản phẩm.
//   node nhan/catalog.js   → nhan/out/catalogue-bang-gia.pdf + catalogue-trang-<n>.png
// Ảnh: mockup đã sinh (mockup.js). Giá: GIA bên dưới, lấy từ "Danh sách hàng hóa – MISA" (Google Drive).
const fs = require('fs');
const path = require('path');
const B = require('./build.js');

const OUT = path.join(__dirname, 'out');
const { P, G, esc, rich } = B;
// [quy cách, đơn giá (đ), thuế GTGT] — theo file MISA, ngày đọc 20/11/2026
const GIA = {
  'clear-12h': [['Gói 227 g', 85000, '8%']],
  rovazyme: [['Gói 500 g', 160000, '8%'], ['Gói 1 kg', 280000, '8%']],
  'ben-bkc': [['Chai 1 lít', 105000, '8%'], ['Can 2 lít', 190000, '8%']],
  'vh-glubenco-pro': [['Chai 1 lít', 60000, '8%']],
  'super-yucca': [['Chai 1 lít', 78703, '8%']],
  'mix-79': [['Gói 5 kg', 55000, '8%'], ['Bao 10 kg', 90000, '8%'], ['Xô 12 kg', 150000, '8%']],
  'ben-copper-500': [['Chai 250 ml', 45000, '8%'], ['Chai 500 ml', 85000, '8%']],
  'super-cut-alga': [['Hũ 100 g', 35000, '8%'], ['Gói 227 g', 80000, '8%']],
  'vh-dio-99': [['Chai 1 lít', 120000, 'KCT']],
  'us-lacto': [['Gói 500 g', 105000, 'KCT']],
  'biotic-99': [['Chai 1 lít', 80000, 'KCT']],
  'amin-care': [['Chai 1 lít', 55000, 'KCT'], ['Xô 3 kg', 135000, 'KCT']],
  'hepaliver-fs': [['Chai 1 lít', 70000, 'KCT']],
  'liver-max': [['Chai 1 lít', 70000, 'KCT']],
  'premix-ora': [['Chai 1 lít', 75000, 'KCT']],
};
const vnd = (n) => n.toLocaleString('vi-VN');

function img(slug, dang) {
  const f = path.join(OUT, `${slug}-mockup-${dang === 'chai' ? 'chai' : 'tui'}.png`);
  const tmp = path.join(OUT, `.cat-${slug}.jpg`);
  require('child_process').execFileSync('python3', ['-I', '-c',
    'import sys;from PIL import Image;i=Image.open(sys.argv[1]).convert("RGB");w,h=i.size;c=[float(x) for x in sys.argv[3].split(",")];i=i.crop((int(w*c[0]),int(h*c[1]),int(w*c[2]),int(h*c[3])));i.thumbnail((1400,1400));i.save(sys.argv[2],quality=86)', f, tmp, dang === 'chai' ? '.18,.02,.82,.98' : '.04,.02,.62,.98']);
  const b = fs.readFileSync(tmp).toString('base64'); fs.unlinkSync(tmp);
  return 'data:image/jpeg;base64,' + b;
}

function css() {
  return `${B.fontFaces()}
@page{size:210mm 297mm;margin:0}
*{box-sizing:border-box;margin:0;padding:0}
html,body{background:#fff;color:${P};font-family:BVP,sans-serif;-webkit-print-color-adjust:exact;print-color-adjust:exact}
sup{font-size:.62em;vertical-align:.5em;line-height:0}sub{font-size:.62em;vertical-align:-.2em;line-height:0}
mark{background:#ffe08a;color:#5a3b00;padding:0 .4mm}
.pg{position:relative;width:210mm;height:297mm;overflow:hidden;page-break-after:always;padding:20mm 16mm 18mm}
.stripe{position:absolute;left:0;right:0;top:0;height:4.2mm;display:flex}.stripe i{height:100%}
.hdr{position:absolute;left:16mm;right:16mm;top:9mm;display:flex;align-items:center;gap:3mm}
.hdr .b{font-weight:700;font-size:2.6mm;letter-spacing:.3em}.hdr .m{font-family:Cormorant;font-style:italic;font-weight:600;font-size:3mm;color:${G}}
.hdr .r{margin-left:auto;font-weight:700;font-size:2.4mm;letter-spacing:.22em;color:${P}}
.ftr{position:absolute;left:16mm;right:16mm;bottom:8mm;display:flex;justify-content:space-between;font-size:2.3mm;letter-spacing:.14em;color:#7c6c86;border-top:.25mm solid #e6dcea;padding-top:2.4mm}
.sec{font-weight:700;font-size:2.6mm;letter-spacing:.3em;text-transform:uppercase;margin:3mm 0 4mm;display:flex;align-items:center;gap:3mm}
.sec::after{content:'';flex:1;height:.3mm;background:#e6dcea}
.card{display:grid;grid-template-columns:38.2% 1fr;gap:6mm;height:78mm;margin-bottom:6.5mm;border-radius:3mm;overflow:hidden;background:#faf8fb;border:.25mm solid #eee6f0}
.card .ph{position:relative;background:#f1eef4}
.card .ph img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.card .ph .bd{position:absolute;left:3.2mm;top:3.2mm;display:flex;align-items:center;gap:1.6mm;background:#fff;border-radius:6mm;padding:1mm 2.6mm 1mm 1mm;font-weight:700;font-size:2.4mm;letter-spacing:.12em;color:var(--pc)}
.card .ph .bd i{width:6mm;height:6mm;border-radius:50%;background:var(--pc);color:#fff;display:grid;place-items:center}
.card .ph .bd svg{width:3.8mm;height:3.8mm}
.card .tx{padding:5mm 6mm 4.6mm 0;display:flex;flex-direction:column;min-width:0}
.cat{font-weight:700;font-size:2.3mm;letter-spacing:.26em;text-transform:uppercase;color:var(--pc)}
.nm{font-weight:700;font-size:7.4mm;line-height:1;letter-spacing:-.01em;margin:2mm 0 1.4mm}
.tg{font-family:Cormorant;font-style:italic;font-weight:600;font-size:4.2mm;line-height:1.2;color:var(--pc)}
.ul{list-style:none;margin:2.6mm 0 0;font-size:2.75mm;line-height:1.45;color:#3a2a44}
.ul li{position:relative;padding-left:3mm;margin-bottom:.6mm}
.ul li::before{content:'';position:absolute;left:.2mm;top:1.3mm;width:1.3mm;height:1.3mm;transform:rotate(45deg);background:var(--pc)}
.meta{font-size:2.4mm;color:#7c6c86;margin-top:1.6mm;letter-spacing:.04em}
.pr{margin-top:auto;display:flex;flex-wrap:wrap;gap:2mm}
.pr div{border:.3mm solid var(--pc);border-radius:2mm;padding:1.4mm 2.6mm;min-width:27mm}
.pr span{display:block;font-size:2.2mm;font-weight:600;letter-spacing:.08em;color:#7c6c86;text-transform:uppercase}
.pr b{font-family:Cormorant;font-weight:700;font-size:5.4mm;font-feature-settings:'lnum' 1;color:${P}}
.pr b small{font-family:BVP;font-size:2.2mm;font-weight:600;color:#7c6c86;margin-left:.8mm}
/* bìa */
.cover{padding:0}
.cover .in{position:absolute;left:16mm;right:16mm;top:0;bottom:0}
.cover .logo{position:absolute;left:0;top:22mm;display:flex;align-items:center;gap:5mm}
.cover .logo .b{font-weight:700;font-size:5mm;letter-spacing:.32em}.cover .logo .m{font-family:Cormorant;font-style:italic;font-weight:600;font-size:5.4mm;color:${G};margin-top:1mm}
.cover h1{position:absolute;left:0;top:${(297 * 0.382 - 20).toFixed(1)}mm;font-weight:700;font-size:15mm;line-height:.98;letter-spacing:-.02em}
.cover h1 em{display:block;font-family:Cormorant;font-weight:600;font-size:10mm;letter-spacing:0;color:${G};margin-top:4mm}
.cover .sub{position:absolute;left:0;top:${(297 * 0.382 + 32).toFixed(1)}mm;font-size:3.4mm;line-height:1.6;max-width:110mm;color:#3a2a44}
.cover .grid{position:absolute;left:0;right:0;bottom:30mm;display:grid;grid-template-columns:repeat(5,1fr);gap:2.4mm}
.cover .grid div{aspect-ratio:1;border-radius:2mm;background:#f1eef4 center/cover no-repeat;position:relative}
.cover .grid div b{position:absolute;left:1.4mm;bottom:1.2mm;font-size:2mm;font-weight:700;letter-spacing:.1em;color:#fff;background:var(--pc);border-radius:1mm;padding:.3mm 1mm}
.cover .made{position:absolute;left:0;bottom:16mm;font-weight:700;font-size:2.6mm;letter-spacing:.3em}
/* bảng giá */
table{width:100%;border-collapse:collapse;font-size:2.8mm}
th{font-size:2.2mm;letter-spacing:.18em;text-transform:uppercase;text-align:left;padding:2mm 2mm;border-bottom:.5mm solid ${P}}
td{padding:1.65mm 2mm;border-bottom:.25mm solid #eee6f0;vertical-align:middle}
td.n{text-align:right;font-weight:700;font-feature-settings:'tnum' 1;white-space:nowrap}
th.n{text-align:right}
td .dot{display:inline-block;width:2.4mm;height:2.4mm;border-radius:50%;margin-right:1.6mm;vertical-align:-.3mm}
tr.g td{background:#faf8fb;font-weight:700;font-size:2.3mm;letter-spacing:.22em;text-transform:uppercase;padding-top:2.6mm}
.note{margin-top:5mm;font-size:2.55mm;line-height:1.55;color:#5b4a66}
.note b{color:${P}}
`;
}

const stripe = (pc) => `<div class="stripe"><i style="width:61.8%;background:${pc}"></i><i style="width:23.6%;background:${P}"></i><i style="width:14.6%;background:${G}"></i></div>`;
const head = (r) => `<div class="hdr">${B.brandMark({ fill: P }, 'width="9mm" height="9mm"')}<div><div class="b">THỦY SẢN TÍM</div><div class="m">Tinh hoa sinh học · Vững vàng mùa vụ</div></div><div class="r">${r}</div></div>`;
const foot = (n) => `<div class="ftr"><span>CATALOGUE &amp; BẢNG GIÁ 2026 · SẢN XUẤT TẠI VIỆT NAM</span><span>${esc(B.data.phan_phoi.web)} · ${String(n).padStart(2, '0')}</span></div>`;

function card(p, src) {
  const f = B.phanLoai(p);
  const tp = p.thanh_phan.filter((t) => /:/.test(t) && !/vừa đủ/i.test(t)).slice(0, 2);
  return `<div class="card" style="--pc:${p.mau}">
  <div class="ph"><img src="${src}"><div class="bd"><i>${B.svgIcon(f.loaiKey)}</i>${f.ma}</div></div>
  <div class="tx">
    <div class="cat">${esc(f.loai)} · ${esc(f.dang)} · ${esc(f.cach)}</div>
    <div class="nm">${esc(p.ten)}</div>
    <div class="tg">${rich(p.phu_de)}</div>
    <ul class="ul">${p.cong_dung.slice(0, 2).map((c) => `<li>${rich(c.length > 118 ? c.slice(0, c.lastIndexOf(' ', 115)) + '…' : c)}</li>`).join('')}</ul>
    <div class="meta">${tp.map((t) => rich(t.replace(/\s*\(min\)/i, ''))).join(' · ')} &nbsp;|&nbsp; MS ${esc(p.ma_so)}</div>
    <div class="pr">${GIA[p.slug].map(([q, g, v]) => `<div><span>${q}</span><b>${vnd(g)}<small>đ</small></b></div>`).join('')}</div>
  </div></div>`;
}

async function main() {
  const list = B.data.san_pham;
  const IMG = Object.fromEntries(list.map((p) => [p.slug, img(p.slug, p.dang)]));
  const groups = [['moi-truong', 'Xử lý môi trường nuôi'], ['thuc-an', 'Thức ăn bổ sung']];
  const pages = [];
  // bìa
  pages.push(`<section class="pg cover">${stripe(B.data.san_pham[3].mau)}<div class="in">
    <div class="logo">${B.brandMark({ fill: P }, 'width="20mm" height="20mm"')}<div><div class="b">THỦY SẢN TÍM</div><div class="m">Tinh hoa sinh học · Vững vàng mùa vụ</div></div></div>
    <h1>Catalogue<br>&amp; Bảng giá<em>15 sản phẩm · 2026</em></h1>
    <div class="sub">Sản phẩm xử lý môi trường và thức ăn bổ sung cho tôm, cá. Mỗi sản phẩm một màu, một mã nhận biết: <b>MT</b> – xử lý môi trường, <b>TA</b> – thức ăn bổ sung.</div>
    <div class="grid">${list.map((p) => `<div style="--pc:${p.mau};background-image:url(${IMG[p.slug]})"><b>${B.phanLoai(p).ma}</b></div>`).join('')}</div>
    <div class="made">SẢN XUẤT TẠI VIỆT NAM</div></div></section>`);
  let n = 1;
  for (const [k, t] of groups) {
    const ps = list.filter((p) => (p.nhom === 'thuc-an' ? 'thuc-an' : 'moi-truong') === k);
    for (let i = 0; i < ps.length; i += 3) {
      n++;
      pages.push(`<section class="pg">${stripe(ps[i].mau)}${head(t.toUpperCase())}
        <div class="sec">${t} ${ps.length > 3 ? `· ${i / 3 + 1}/${Math.ceil(ps.length / 3)}` : ''}</div>
        ${ps.slice(i, i + 3).map((p) => card(p, IMG[p.slug])).join('')}${foot(n)}</section>`);
    }
  }
  // bảng giá tổng hợp
  n++;
  const rows = groups.map(([k, t]) => `<tr class="g"><td colspan="5">${t}</td></tr>` + list.filter((p) => (p.nhom === 'thuc-an' ? 'thuc-an' : 'moi-truong') === k)
    .map((p) => GIA[p.slug].map(([q, g, v], j) => `<tr><td>${j ? '' : `<span class="dot" style="background:${p.mau}"></span><b>${B.phanLoai(p).ma}</b>`}</td><td>${j ? '' : `<b>${esc(p.ten)}</b>`}</td><td>${q}</td><td>${v}</td><td class="n">${vnd(g)}</td></tr>`).join('')).join('')).join('');
  pages.push(`<section class="pg">${stripe(P)}${head('BẢNG GIÁ')}
    <div class="sec">Bảng giá tổng hợp</div>
    <table><thead><tr><th>Mã</th><th>Sản phẩm</th><th>Quy cách</th><th>Thuế GTGT</th><th class="n">Đơn giá (đ)</th></tr></thead><tbody>${rows}</tbody></table>
    <div class="note"><b>Ghi chú:</b> Đơn giá theo danh sách hàng hóa trên phần mềm MISA; cột thuế GTGT ghi mức thuế áp dụng (KCT: không chịu thuế). Giá có thể thay đổi, vui lòng liên hệ để có báo giá đại lý và chiết khấu theo số lượng.<br>
</div>
    <div style="margin-top:5mm;border:.4mm solid ${P};border-radius:2.4mm;padding:4mm 5mm;font-size:3.2mm;line-height:1.55">
      <div style="font-weight:700;letter-spacing:.24em;font-size:2.6mm">NHÀ PHÂN PHỐI · ĐẶT HÀNG</div>
      <div style="font-weight:700;font-size:5.2mm;margin:1mm 0">${esc(B.data.phan_phoi.ten)}</div>
      <div>${esc(B.data.phan_phoi.dia_chi)}</div>
      <div style="font-weight:700;font-size:4mm">${B.data.phan_phoi.hotline ? `Hotline ${rich(B.data.phan_phoi.hotline)} · ` : ''}${esc(B.data.phan_phoi.web)}</div></div>
    <div class="note" style="color:#9a8fa3;margin-top:3mm">Sản xuất tại: ${esc(B.data.san_xuat.ten)} · ${esc(B.data.san_xuat.dia_chi)}</div>${foot(n)}</section>`);

  const html = `<!doctype html><html lang="vi"><head><meta charset="utf-8"><title>Catalogue & Bảng giá – Thủy Sản Tím</title><style>${css()}</style></head><body>${pages.join('')}</body></html>`;
  const { chromium } = require('playwright');
  const br = await chromium.launch();
  const pg = await br.newPage({ viewport: { width: 794, height: 1123 }, deviceScaleFactor: 2 });
  await pg.setContent(html, { waitUntil: 'load' });
  await pg.evaluate(() => document.fonts.ready);
  // kiểm tra tràn: chữ trong thẻ sản phẩm không vượt khung
  const over = await pg.evaluate(() => [...document.querySelectorAll('.card .tx')].filter((t) => t.scrollHeight > t.clientHeight + 1).map((t) => t.querySelector('.nm').textContent));
  await pg.pdf({ path: path.join(OUT, 'catalogue-bang-gia.pdf'), width: '210mm', height: '297mm', printBackground: true });
  const secs = await pg.$$('section.pg');
  for (let i = 0; i < secs.length; i++) await secs[i].screenshot({ path: path.join(OUT, `catalogue-trang-${i + 1}.png`) });
  await br.close();
  console.log(`${secs.length} trang → nhan/out/catalogue-bang-gia.pdf${over.length ? ' · TRÀN: ' + over.join(', ') : ' · không tràn'}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
