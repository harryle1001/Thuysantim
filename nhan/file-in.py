"""Gói file gửi nhà in: chép PDF nhãn/túi/bao với tên dễ đọc + bảng kê (Excel + HTML → PDF).
Chạy: python3 nhan/file-in.py && node -e "..." (xem cuối file) — hoặc dùng lệnh trong README.
Đầu ra: nhan/out/file-in/ và nhan/out/file-in-nha-in.zip
"""
import base64, io, json, os, re, shutil, subprocess, unicodedata

import openpyxl
from openpyxl.styles import Alignment, Border, Font, PatternFill, Side
from PIL import Image

D = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(D, 'out')
FI = os.path.join(OUT, 'file-in')
data = json.load(open(os.path.join(D, 'san-pham.json'), encoding='utf-8'))
ps, pp = data['san_pham'], data['phan_phoi']


def asc(s):
    s = unicodedata.normalize('NFD', s.replace('Đ', 'D').replace('đ', 'd'))
    s = ''.join(c for c in s if unicodedata.category(c) != 'Mn')
    return re.sub(r'[^A-Za-z0-9]+', '-', s).strip('-')


def status(p):
    miss = []
    if any('ĐIỀN' in h for h in p['huong_dan']):
        miss.append('liều dùng')
    if not pp.get('hotline'):
        miss.append('ĐT nhà phân phối')
    return ('CHƯA IN – thiếu ' + ', '.join(miss)) if miss else 'Sẵn sàng in thử'


shutil.rmtree(FI, ignore_errors=True)
os.makedirs(FI)
rows = []
for p in ps:
    name = asc(p['ten'])
    if p['dang'] == 'chai':
        items = [('concept-e', 'Nhãn quấn chai', '161,8 × 100', '179,8 × 118 (tràn lề 3 mm + dấu xén)', '161.8x100',
                  'Decal giấy/nhựa (PP) dán chai, cán màng; 3 mặt gấp 38,2 | 61,8 | 61,8 mm (trái | trước | phải)')]
    else:
        items = [('tui-truoc', 'Túi đứng – mặt trước', '130 × 210', '136 × 216 (tràn lề 3 mm)', '130x210', 'Màng ghép in ống đồng; zip miệng; đáy gấp theo khuôn nhà in'),
                 ('tui-sau', 'Túi đứng – mặt sau', '130 × 210', '136 × 216 (tràn lề 3 mm)', '130x210', ''),
                 ('bao-truoc', 'Bao – mặt trước', '450 × 728', '456 × 734 (tràn lề 3 mm)', '450x728', 'Bao PP dệt in flexo / màng ghép'),
                 ('bao-sau', 'Bao – mặt sau', '450 × 728', '456 × 734 (tràn lề 3 mm)', '450x728', '')]
    for key, loai, tp, kf, tag, vl in items:
        dst = f"{p['stt']:02d}_{name}_{asc(loai)}_{tag}mm.pdf"
        shutil.copy(os.path.join(OUT, f"{p['slug']}-{key}.pdf"), os.path.join(FI, dst))
        im = Image.open(os.path.join(OUT, f"{p['slug']}-{key}.png")).convert('RGB')
        im.thumbnail((220, 140))
        b = io.BytesIO()
        im.save(b, 'JPEG', quality=80)
        rows.append(dict(stt=p['stt'], ten=p['ten'], quy=p['quy_cach_gia'], loai=loai, tp=tp, kf=kf, file=dst, vl=vl, tt=status(p),
                         thumb='data:image/jpeg;base64,' + base64.b64encode(b.getvalue()).decode()))

NOTES = ['1. Kích thước là khổ đề xuất. Nhà in đối chiếu với khuôn bế / kích thước chai, túi, bao thực tế và báo lại để chỉnh file trước khi ra phim.',
         '2. Túi: file gồm mặt trước + mặt sau; chưa có mảng đáy gấp – nhà in báo kích thước đáy để bổ sung. Gói 3 kg, 5 kg và chai 500 ml cần khổ riêng (đang dùng chung khổ).',
         '3. Màu tím thương hiệu #4A044E, nhũ vàng #B8914A – vui lòng in thử (proof) để duyệt màu trước khi in số lượng.',
         '4. Ô "MÃ VẠCH EAN-13" và các dòng Số lô / NSX / HSD để trống, in/dập sau.',
         '5. Sản phẩm "CHƯA IN" còn thiếu nội dung – chỉ báo giá, chưa in.']

wb = openpyxl.Workbook()
ws = wb.active
ws.title = 'Bảng file in'
P = '4A044E'
ws['A1'] = 'BẢNG FILE IN – NHÃN & BAO BÌ THỦY SẢN TÍM'
ws['A1'].font = Font(bold=True, size=14, color=P)
ws['A2'] = 'In 4 màu CMYK · file PDF vector, chữ đã nhúng phông · kích thước tính bằng mm (ngang × dọc)'
ws['A2'].font = Font(italic=True, color='7C6C86')
H = ['STT', 'Sản phẩm', 'Quy cách', 'Loại nhãn / bao bì', 'Kích thước thành phẩm (mm)', 'Khổ file PDF (mm)', 'Tên file', 'Vật liệu / gia công đề xuất', 'Trạng thái', 'Số lượng in', 'Ghi chú nhà in']
thin = Side(style='thin', color='DDD3E2')
for c, h in enumerate(H, 1):
    x = ws.cell(row=4, column=c, value=h)
    x.font = Font(bold=True, color='FFFFFF')
    x.fill = PatternFill('solid', fgColor=P)
    x.alignment = Alignment(horizontal='center', vertical='center', wrap_text=True)
for i, r in enumerate(rows):
    n = 5 + i
    for c, v in enumerate([r['stt'], r['ten'], r['quy'], r['loai'], r['tp'], r['kf'], r['file'], r['vl'], r['tt'], None, None], 1):
        x = ws.cell(row=n, column=c, value=v)
        x.alignment = Alignment(vertical='center', wrap_text=True)
        x.border = Border(bottom=thin)
    ws.cell(row=n, column=2).font = Font(bold=True, color=P)
    ws.cell(row=n, column=5).font = Font(bold=True)
    if r['tt'].startswith('CHƯA'):
        ws.cell(row=n, column=9).font = Font(bold=True, color='B4232C')
for col, w in zip('ABCDEFGHIJK', [5, 18, 12, 22, 16, 26, 46, 38, 26, 11, 24]):
    ws.column_dimensions[col].width = w
ws.freeze_panes = 'C5'
ws.auto_filter.ref = f'A4:K{4 + len(rows)}'
e = 6 + len(rows)
ws.cell(row=e, column=1, value='LƯU Ý CHO NHÀ IN:').font = Font(bold=True, color=P)
for k, t in enumerate(NOTES, 1):
    ws.cell(row=e + k, column=1, value=t).font = Font(color='5B4A66')
wb.save(os.path.join(FI, '00_BANG-FILE-IN.xlsx'))

tr = ''.join(f"<tr><td class=c>{r['stt']}</td><td><img src=\"{r['thumb']}\"></td><td><b>{r['ten']}</b><br><span class=m>{r['quy']}</span></td><td>{r['loai']}</td>"
             f"<td class=k>{r['tp']}</td><td class=s>{r['kf']}</td><td class=f>{r['file']}</td><td class=s>{r['vl']}</td>"
             f"<td class=\"s {'x' if r['tt'].startswith('CHƯA') else 'ok'}\">{r['tt']}</td></tr>" for r in rows)
html = ("<!doctype html><meta charset=utf-8><style>@@FONTS@@@page{size:297mm 210mm;margin:10mm}body{font-family:BVP;color:#4a044e;font-size:2.6mm}"
        "h1{font-size:6mm;margin:0}p.sub{color:#7c6c86;margin:1mm 0 3mm}table{width:100%;border-collapse:collapse}th{background:#4a044e;color:#fff;font-size:2.2mm;"
        "letter-spacing:.08em;text-transform:uppercase;padding:1.6mm;text-align:left}td{border-bottom:.25mm solid #eee6f0;padding:1.2mm 1.6mm;vertical-align:middle}"
        "tr{page-break-inside:avoid}thead{display:table-header-group}img{width:22mm;height:14mm;object-fit:contain;display:block}.c{text-align:center}.m{color:#7c6c86;font-size:2.3mm}"
        ".k{font-weight:700;font-size:3.2mm;white-space:nowrap}.s{font-size:2.3mm}.f{font-size:2.1mm;color:#5b4a66;word-break:break-all}.x{color:#b4232c;font-weight:700}"
        ".ok{color:#1f7a4d;font-weight:600}.n{margin-top:4mm;font-size:2.5mm;line-height:1.5;color:#5b4a66}.n b{color:#4a044e}</style>"
        f"<h1>Bảng file in – nhãn &amp; bao bì Thủy Sản Tím</h1><p class=sub>{len(rows)} file PDF vector · in 4 màu CMYK · kích thước mm (ngang × dọc)</p>"
        "<table><thead><tr><th>STT</th><th>Ảnh</th><th>Sản phẩm</th><th>Loại</th><th>Thành phẩm (mm)</th><th>Khổ file (mm)</th><th>Tên file</th><th>Vật liệu / gia công</th><th>Trạng thái</th></tr></thead>"
        f"<tbody>{tr}</tbody></table><div class=n><b>Lưu ý cho nhà in:</b><br>{'<br>'.join(NOTES)}</div>")
open(os.path.join(OUT, '.file-in.html'), 'w', encoding='utf-8').write(html)
js = """const fs=require('fs');const B=require(process.argv[1]);let h=fs.readFileSync(process.argv[2],'utf8').replace('@@FONTS@@',B.fontFaces());
(async()=>{const {chromium}=require('playwright');const b=await chromium.launch();const p=await b.newPage();await p.setContent(h);await p.evaluate(()=>document.fonts.ready);
await p.pdf({path:process.argv[3],width:'297mm',height:'210mm',printBackground:true,margin:{top:'10mm',bottom:'10mm',left:'10mm',right:'10mm'}});await b.close();})();"""
subprocess.run(['node', '-e', js, os.path.join(D, 'build.js'), os.path.join(OUT, '.file-in.html'), os.path.join(FI, '00_BANG-FILE-IN.pdf')], check=True, cwd=D)
os.remove(os.path.join(OUT, '.file-in.html'))
z = os.path.join(OUT, 'file-in-nha-in.zip')
if os.path.exists(z):
    os.remove(z)
subprocess.run(['zip', '-qr', '-0', z, 'file-in'], check=True, cwd=OUT)
print(f'{len(rows)} file → nhan/out/file-in-nha-in.zip')
