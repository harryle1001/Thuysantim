#!/usr/bin/env node
'use strict';
// Bảng giá nhập (giá NET công ty Noben giao) cho 15 sản phẩm, kèm thành phần đầy đủ.
//   node nhan/gia-nhap.js → nhan/out/bang-gia-nhap.pdf (A4 ngang, có ảnh) + bang-gia-nhap.xlsx
// Giá: "Phụ lục bảng kê – Danh mục 15SP Noben nhượng – Giá NET cty giao" (ảnh người dùng gửi 20/11/2026).
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const B = require('./build.js');

const OUT = path.join(__dirname, 'out');
const { P, G, esc, rich } = B;
const HS = B.data.he_so_gia_ban || 3;
const VAT = { 'thuc-an': 'KCT', 'moi-truong': '8%' };
const vnd = (n) => n.toLocaleString('vi-VN');
const plainTp = (t) => t.replace(/ · /g, ', ');

function thumb(p) {
  const f = path.join(OUT, `${p.slug}-mockup-${p.dang === 'chai' ? 'chai' : 'tui'}.png`);
  const tmp = path.join(OUT, `.gn-${p.slug}.jpg`);
  const box = p.dang === 'chai' ? '.30,.06,.62,.98' : '.08,.04,.52,.98';
  execFileSync('python3', ['-I', '-c', 'import sys;from PIL import Image;i=Image.open(sys.argv[1]).convert("RGB");w,h=i.size;c=[float(x) for x in sys.argv[3].split(",")];i=i.crop((int(w*c[0]),int(h*c[1]),int(w*c[2]),int(h*c[3])));i.thumbnail((260,360));i.save(sys.argv[2],quality=84)', f, tmp, box]);
  const b = fs.readFileSync(tmp).toString('base64'); fs.unlinkSync(tmp);
  return 'data:image/jpeg;base64,' + b;
}

async function main() {
  const list = B.data.san_pham;
  const rows = list.map((p) => {
    const f = B.phanLoai(p), nhom = p.nhom === 'thuc-an' ? 'thuc-an' : 'moi-truong';
    return { p, f, nhom, quy: p.quy_cach_gia, gia: p.gia_net, ban: p.gia_net * HS, xn: p.quy_cach_can_xac_nhan, vat: VAT[nhom] };
  });
  const tr = (r, i) => `<tr style="--pc:${r.p.mau}">
    <td class="c">${i + 1}</td>
    <td class="im"><img src="${thumb(r.p)}"></td>
    <td><div class="nm">${esc(r.p.ten)}</div><div class="cd"><span>${r.f.ma}</span>${esc(r.f.loai)}</div></td>
    <td class="sm">${esc(r.p.ma_so)}<br><span class="mu">TCCS ${esc(r.p.tccs)}</span></td>
    <td class="tp">${r.p.thanh_phan.map((t) => `<div>${rich(t)}</div>`).join('')}</td>
    <td class="sm">${esc(r.quy)}${r.xn ? '<br><span class="xn">cần xác nhận</span>' : ''}</td>
    <td class="c sm">${r.vat}</td>
    <td class="g n2">${vnd(r.gia)}</td><td class="g">${vnd(r.ban)}</td></tr>`;
  const grp = (k, t) => `<tr class="gr"><td colspan="9">${t}</td></tr>` + rows.filter((r) => r.nhom === k).map((r) => tr(r, rows.indexOf(r))).join('');
  const html = `<!doctype html><html lang="vi"><head><meta charset="utf-8"><title>Bảng giá nhập – Thủy Sản Tím</title><style>${B.fontFaces()}
@page{size:297mm 210mm;margin:12mm 12mm 13mm}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:BVP,sans-serif;color:${P};-webkit-print-color-adjust:exact;print-color-adjust:exact;font-size:2.75mm}
sup{font-size:.62em;vertical-align:.5em;line-height:0}sub{font-size:.62em;vertical-align:-.2em;line-height:0}
.top{display:flex;align-items:center;gap:3.4mm;padding-bottom:3mm;border-bottom:.5mm solid ${P};margin-bottom:2mm}
.top .b{font-weight:700;letter-spacing:.3em;font-size:2.6mm}.top .m{font-family:Cormorant;font-style:italic;font-weight:600;color:${G};font-size:3mm}
.top h1{margin-left:auto;text-align:right;font-size:6.6mm;line-height:1.2}.top h1 small{display:block;margin-top:.8mm;line-height:1.3;font-size:2.5mm;font-weight:600;letter-spacing:.2em;color:#7c6c86}
table{width:100%;border-collapse:collapse}
thead{display:table-header-group}
th{font-size:2.1mm;letter-spacing:.16em;text-transform:uppercase;text-align:left;padding:1.8mm 1.6mm;border-bottom:.4mm solid ${P};background:#faf8fb}
td{padding:1.6mm 1.6mm;border-bottom:.25mm solid #eee6f0;vertical-align:middle}
tr{page-break-inside:avoid}
.c{text-align:center}.sm{font-size:2.5mm;line-height:1.4}.mu{color:#7c6c86}
.im{width:13mm;padding:.8mm}.im img{display:block;width:12mm;height:16mm;object-fit:cover;border-radius:1mm;background:#f1eef4}
.nm{font-weight:700;font-size:3.2mm}
.cd{font-size:2.2mm;color:#7c6c86;margin-top:.6mm}.cd span{display:inline-block;background:var(--pc);color:#fff;font-weight:700;border-radius:.8mm;padding:.1mm 1mm;margin-right:1.2mm;letter-spacing:.06em}
.tp{font-size:2.45mm;line-height:1.4}.tp div{padding-left:2.4mm;position:relative}.tp div::before{content:'';position:absolute;left:.2mm;top:1.2mm;width:1mm;height:1mm;transform:rotate(45deg);background:var(--pc)}
.n2{color:#7c6c86;font-size:3mm!important}
.g{text-align:right;font-weight:700;font-size:3.6mm;white-space:nowrap;font-feature-settings:'tnum' 1}
.xn{display:inline-block;margin-top:.5mm;font-size:2mm;font-weight:700;color:#a35a00;background:#fff1d6;border-radius:.6mm;padding:0 .8mm}
tr.gr td{background:${P};color:#fff;font-weight:700;font-size:2.3mm;letter-spacing:.24em;text-transform:uppercase;padding:1.6mm}
.note{margin-top:3.4mm;font-size:2.4mm;line-height:1.5;color:#5b4a66}.note b{color:${P}}
</style></head><body>
<div class="top">${B.brandMark({ fill: P }, 'width="11mm" height="11mm"')}<div><div class="b">THỦY SẢN TÍM</div><div class="m">Tinh hoa sinh học · Vững vàng mùa vụ</div></div>
<h1>Bảng giá nhập &amp; giá bán · 15 sản phẩm<small>GIÁ NET CÔNG TY TNHH NO BEN GIAO · GIÁ BÁN = NET × ${HS} · CẬP NHẬT 20/11/2026</small></h1></div>
<table><thead><tr><th class="c">STT</th><th></th><th>Sản phẩm</th><th>Mã số lưu hành</th><th>Thành phần (trong 1 kg / 1 lít)</th><th>Quy cách</th><th class="c">Thuế</th><th style="text-align:right">Giá nhập NET (đ)</th><th style="text-align:right">Giá bán (đ)</th></tr></thead>
<tbody>${grp('moi-truong', 'Xử lý môi trường nuôi')}${grp('thuc-an', 'Thức ăn bổ sung')}</tbody></table>
<div class="note"><b>Nguồn giá:</b> Phụ lục bảng kê "Danh mục 15SP – Noben – Nhượng", cột Giá NET công ty giao. <b>Thuế:</b> theo mức trong danh sách hàng hóa MISA (xử lý môi trường 8%, thức ăn bổ sung không chịu thuế) – chưa rõ giá NET đã gồm thuế hay chưa.
<b>Quy cách</b> đánh dấu "cần xác nhận" là chỗ bảng kê không ghi quy cách và các nguồn khác ghi khác nhau.<br>
<b>Nhà sản xuất:</b> ${esc(B.data.san_xuat.ten)} · ${esc(B.data.san_xuat.dia_chi)} &nbsp; <b>Nhà phân phối:</b> ${esc(B.data.phan_phoi.ten)} · ${esc(B.data.phan_phoi.dia_chi)} · ${esc(B.data.phan_phoi.web)}</div>
</body></html>`;
  const { chromium } = require('playwright');
  const br = await chromium.launch();
  const pg = await br.newPage({ viewport: { width: 1123, height: 794 }, deviceScaleFactor: 2 });
  await pg.setContent(html, { waitUntil: 'load' });
  await pg.evaluate(() => document.fonts.ready);
  await pg.pdf({ path: path.join(OUT, 'bang-gia-nhap.pdf'), width: '297mm', height: '210mm', printBackground: true, margin: { top: '12mm', bottom: '13mm', left: '12mm', right: '12mm' },
    displayHeaderFooter: true, headerTemplate: '<span></span>', footerTemplate: '<div style="font-size:7px;width:100%;text-align:right;padding-right:12mm;color:#7c6c86">Trang <span class="pageNumber"></span>/<span class="totalPages"></span></div>' });
  await pg.screenshot({ path: path.join(OUT, 'bang-gia-nhap.png'), fullPage: true });
  await br.close();

  // Excel: thành phần mỗi dòng một ô xuống dòng, cột giá dạng số để cộng trừ
  const data = rows.map((r, i) => ({
    stt: i + 1, ma: r.f.ma, nhom: r.nhom === 'thuc-an' ? 'Thức ăn bổ sung' : 'Xử lý môi trường nuôi', ten: r.p.ten, loai: r.f.loai,
    msl: r.p.ma_so, tccs: r.p.tccs, tp: r.p.thanh_phan.map(plainTp).join('\n'), quy: r.quy + (r.xn ? ' (cần xác nhận)' : ''), vat: r.vat, gia: r.gia, hs: HS,
  }));
  fs.writeFileSync(path.join(OUT, '.gn.json'), JSON.stringify(data));
  execFileSync('python3', ['-I', path.join(__dirname, 'gia-nhap-xlsx.py'), path.join(OUT, '.gn.json'), path.join(OUT, 'bang-gia-nhap.xlsx')], { stdio: 'inherit' });
  fs.unlinkSync(path.join(OUT, '.gn.json'));
  console.log('nhan/out/bang-gia-nhap.pdf · bang-gia-nhap.xlsx');
}

main().catch((e) => { console.error(e); process.exit(1); });
