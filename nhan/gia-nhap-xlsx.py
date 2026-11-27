"""Ghi bảng giá nhập ra Excel (gọi từ gia-nhap.js): python3 gia-nhap-xlsx.py <data.json> <out.xlsx>"""
import json
import sys

from openpyxl import Workbook
from openpyxl.styles import Alignment, Border, Font, PatternFill, Side

rows = json.load(open(sys.argv[1], encoding='utf-8'))
wb = Workbook()
ws = wb.active
ws.title = 'Giá nhập - giá bán'
P, PL = '4A044E', 'F4EFF6'
ws['A1'] = f'BẢNG GIÁ NHẬP & GIÁ BÁN – {len(rows)} SẢN PHẨM (GIÁ NET NO BEN GIAO · GIÁ BÁN = NET × {rows[0]["hs"]})'
ws['A1'].font = Font(bold=True, size=14, color=P)
ws['A2'] = 'Giá áp dụng riêng cho THỦY SẢN TÍM, không áp dụng cho công ty / đơn vị khác. Cập nhật 20/11/2026 · thành phần tính trong 1 kg / 1 lít'
ws['A2'].font = Font(bold=True, color='B4232C')
head = ['STT', 'Mã', 'Nhóm', 'Tên sản phẩm', 'Loại', 'Mã số lưu hành', 'TCCS', 'Thành phần', 'Quy cách', 'Thuế GTGT', 'Giá nhập NET (đ)', 'Hệ số', 'Giá bán (đ)', 'Lãi / đơn vị (đ)', 'Số lượng', 'Tiền nhập (đ)', 'Tiền bán (đ)', 'Lãi (đ)', 'Số / thùng', 'Giá sỉ / thùng (đ)']
thin = Side(style='thin', color='DDD3E2')
for c, h in enumerate(head, 1):
    x = ws.cell(row=4, column=c, value=h)
    x.font = Font(bold=True, color='FFFFFF')
    x.fill = PatternFill('solid', fgColor=P)
    x.alignment = Alignment(horizontal='center', vertical='center', wrap_text=True)
for i, r in enumerate(rows):
    n = 5 + i
    vals = [r['stt'], r['ma'], r['nhom'], r['ten'], r['loai'], r['msl'], r['tccs'], r['tp'], r['quy'], r['vat'], r['gia'], r['hs'], f'=K{n}*L{n}', f'=M{n}-K{n}', None, f'=K{n}*O{n}', f'=M{n}*O{n}', f'=R{n}-Q{n}', f"{r['thung']} {r['dv']}", r['thung']]
    for c, v in enumerate(vals, 1):
        x = ws.cell(row=n, column=c, value=v)
        x.alignment = Alignment(vertical='center', wrap_text=True, horizontal='center' if c in (1, 2, 10) else None)
        x.border = Border(bottom=thin)
        if i % 2:
            x.fill = PatternFill('solid', fgColor=PL)
    ws.cell(row=n, column=4).font = Font(bold=True, color=P)
    for c in (11, 13, 14, 16, 17, 18):
        ws.cell(row=n, column=c).number_format = '#,##0'
    ws.cell(row=n, column=13).font = Font(bold=True, color=P)
    ws.cell(row=n, column=20, value=f'=M{n}*{r["thung"]}').number_format = '#,##0'
    ws.cell(row=n, column=20).font = Font(bold=True, color=P)
    ws.row_dimensions[n].height = 15 * max(2, r['tp'].count('\n') + 1) + 6
end = 4 + len(rows)
t = end + 1
ws.cell(row=t, column=15, value='Tổng').font = Font(bold=True)
for c, L in ((16, 'P'), (17, 'Q'), (18, 'R')):
    ws.cell(row=t, column=c, value=f'=SUM({L}5:{L}{end})').font = Font(bold=True, color=P)
    ws.cell(row=t, column=c).number_format = '#,##0'
ws.cell(row=t + 2, column=1, value='Ghi chú: giá theo phụ lục bảng kê "Danh mục 15SP – Noben – Nhượng" (giá NET công ty giao). '
        'Giá bán = giá NET × hệ số (cột L, mặc định 3 – sửa được). Thuế theo danh sách hàng hóa MISA. Nhập số lượng ở cột O để tính tiền nhập, tiền bán, lãi.').font = Font(italic=True, color='7C6C86')
for col, w in zip('ABCDEFGHIJKLMNOPQRST', [5, 7, 20, 18, 18, 14, 16, 58, 18, 9, 13, 7, 13, 13, 9, 14, 14, 14, 11, 15]):
    ws.column_dimensions[col].width = w
ws.freeze_panes = 'E5'
ws.auto_filter.ref = f'A4:T{end}'
ws.page_setup.orientation = 'landscape'
ws.page_setup.fitToWidth = 1
ws.page_setup.fitToHeight = 0
ws.sheet_properties.pageSetUpPr.fitToPage = True
ws.print_title_rows = '4:4'
wb.save(sys.argv[2])
