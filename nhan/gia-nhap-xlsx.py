"""Ghi bảng giá nhập ra Excel (gọi từ gia-nhap.js): python3 gia-nhap-xlsx.py <data.json> <out.xlsx>"""
import json
import sys

from openpyxl import Workbook
from openpyxl.styles import Alignment, Border, Font, PatternFill, Side

rows = json.load(open(sys.argv[1], encoding='utf-8'))
wb = Workbook()
ws = wb.active
ws.title = 'Bảng giá nhập'
P, PL = '4A044E', 'F4EFF6'
ws['A1'] = 'BẢNG GIÁ NHẬP – 15 SẢN PHẨM (GIÁ NET CÔNG TY TNHH NO BEN GIAO)'
ws['A1'].font = Font(bold=True, size=14, color=P)
ws['A2'] = 'Thủy Sản Tím · cập nhật 20/11/2026 · thành phần tính trong 1 kg / 1 lít'
ws['A2'].font = Font(italic=True, color='7C6C86')
head = ['STT', 'Mã', 'Nhóm', 'Tên sản phẩm', 'Loại', 'Mã số lưu hành', 'TCCS', 'Thành phần', 'Quy cách', 'Thuế GTGT', 'Giá NET (đ)', 'Số lượng', 'Thành tiền (đ)']
thin = Side(style='thin', color='DDD3E2')
for c, h in enumerate(head, 1):
    x = ws.cell(row=4, column=c, value=h)
    x.font = Font(bold=True, color='FFFFFF')
    x.fill = PatternFill('solid', fgColor=P)
    x.alignment = Alignment(horizontal='center', vertical='center', wrap_text=True)
for i, r in enumerate(rows):
    n = 5 + i
    vals = [r['stt'], r['ma'], r['nhom'], r['ten'], r['loai'], r['msl'], r['tccs'], r['tp'], r['quy'], r['vat'], r['gia'], None, f'=K{n}*L{n}']
    for c, v in enumerate(vals, 1):
        x = ws.cell(row=n, column=c, value=v)
        x.alignment = Alignment(vertical='center', wrap_text=True, horizontal='center' if c in (1, 2, 10) else None)
        x.border = Border(bottom=thin)
        if i % 2:
            x.fill = PatternFill('solid', fgColor=PL)
    ws.cell(row=n, column=4).font = Font(bold=True, color=P)
    for c in (11, 13):
        ws.cell(row=n, column=c).number_format = '#,##0'
    ws.cell(row=n, column=11).font = Font(bold=True)
    ws.row_dimensions[n].height = 15 * max(2, r['tp'].count('\n') + 1) + 6
end = 4 + len(rows)
t = end + 1
ws.cell(row=t, column=12, value='Tổng').font = Font(bold=True)
ws.cell(row=t, column=13, value=f'=SUM(M5:M{end})').font = Font(bold=True, color=P)
ws.cell(row=t, column=13).number_format = '#,##0'
ws.cell(row=t + 2, column=1, value='Ghi chú: giá theo phụ lục bảng kê "Danh mục 15SP – Noben – Nhượng" (giá NET công ty giao). '
        'Thuế theo danh sách hàng hóa MISA; chưa rõ giá NET đã gồm thuế hay chưa. Nhập số lượng ở cột L để tính thành tiền.').font = Font(italic=True, color='7C6C86')
for col, w in zip('ABCDEFGHIJKLM', [5, 7, 20, 18, 18, 14, 16, 58, 18, 9, 13, 10, 15]):
    ws.column_dimensions[col].width = w
ws.freeze_panes = 'E5'
ws.auto_filter.ref = f'A4:M{end}'
ws.page_setup.orientation = 'landscape'
ws.page_setup.fitToWidth = 1
ws.page_setup.fitToHeight = 0
ws.sheet_properties.pageSetUpPr.fitToPage = True
ws.print_title_rows = '4:4'
wb.save(sys.argv[2])
