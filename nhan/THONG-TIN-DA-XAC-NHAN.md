# Thông tin đã xác nhận với chủ dự án (đọc trước khi làm nhãn / bảng giá)

Cập nhật 20/11/2026. Dữ liệu máy đọc nằm ở `san-pham.json`; file này ghi lại các quyết định để khỏi hỏi lại.

## Nhà phân phối (nổi bật trên nhãn)
- Tên: THỦY SẢN TÍM
- Địa chỉ: 295/32 Tân Kỳ Tân Quý, Tân Sơn Nhì, TP. Hồ Chí Minh, Việt Nam
- Website: thuysantim.com
- Hotline: CHƯA CÓ → nhãn hiện "ĐT: [ĐIỀN]" trong khung nhà phân phối. Có số thì điền `phan_phoi.hotline`.

## Nhà sản xuất — ghi "Sản phẩm của:" ở mặt phải
- CÔNG TY TNHH NO BEN · 228/9 Nguyễn Thị Lắng, Ấp Phú Lợi A, Xã Củ Chi, TP. Hồ Chí Minh, Việt Nam · ĐT: 0911 88 39 79 (xuống dòng).

## Bố cục nhãn chai (chốt 23/11/2026)
- Mặt trái: công dụng, thành phần, bảo quản, mã vạch; cuối cùng là "Chỉ dùng trong nuôi trồng thủy sản · Để xa tầm tay trẻ em".
- Mặt giữa: KHÔNG ghi dòng "MS … · N° x/19". Dưới cùng là khung NHÀ PHÂN PHỐI (tên, địa chỉ, ĐT, website).
- Mặt phải: hướng dẫn sử dụng; "Mã số tiếp nhận"; TCCS; "Sản phẩm của" + ĐT Noben; KHÔNG ghi quy cách; cuối cùng Số lô / NSX / HSD mỗi mục một dòng.
- Đơn vị vi sinh viết thường: cfu (không viết CFU).
- Túi/bao áp dụng tương tự (mặt sau).

## Danh mục sản phẩm (CHỈ làm nhãn cho các sản phẩm này)
Nguồn: file DM-NHUONG.xlsx (21/11/2026), 19 sản phẩm — đã thay danh mục 15 sản phẩm cũ.
- Xử lý môi trường (MT-01…11): BEN BKC, AQUA SQUICK, VH-DIO 99, BEN COPPER 500, SUPER CUT ALGA (gói 250 g), EDTA 99 (gói 3 kg), CLEAR 12H, ROVAZYME, VH-YUCCA C, MIX 79, VITA C TAT NEW (gói 5 kg).
- Thức ăn bổ sung (TA-12…19): NB BIOBEST (gói 500 g), PROZYM (gói 500 g), BIOTIC 99, AMIN CARE, LIVER - MAX, VH-LIVER PRO, VH-CANCI MILK, DAVI CID LIQUID (chai 500 ml).
- ĐÃ BỎ, không làm nhãn: VH-GLUBENCO PRO, SUPER YUCCA, US LACTO, HEPALIVER-FS, PREMIX ORA.
- Công dụng/liều dùng sản phẩm mới lấy từ dữ liệu web Noben; VH-LIVER PRO dùng chung LIVER - MAX (cùng công thức).

## Thiết kế
- Dùng concept E (nền trắng, logo TIM của web ở góc trái trên, màu riêng từng sản phẩm, tỷ lệ vàng). Ghi "Sản xuất tại Việt Nam".
- Nước → nhãn chai; bột → túi + bao.

## Thành phần
- Mọi sản phẩm Bacillus ghi 1 × 10⁹ CFU (bột: /g, nước: /lít) và ghi rõ tên chủng:
  - CLEAR 12H, ROVAZYME: Bacillus licheniformis · Bacillus megaterium · Bacillus mesentericus
  - NB BIOBEST: Bacillus subtilis · Bacillus licheniformis · Bacillus megaterium · Bacillus mesentericus
  - BIOTIC 99: hồ sơ chỉ ghi Bacillus spp. — chưa có tên chủng, không tự thêm chủng ngoài hồ sơ.

## Quy cách, giá
- BEN BKC: chai 1 lít.
- Giá nhập = "Giá NET công ty giao" trong phụ lục bảng kê Danh mục 15SP Noben nhượng (xem `gia-nhap.js`).
- Giá áp dụng riêng cho THỦY SẢN TÍM, không áp dụng cho công ty / đơn vị khác. (ghi rõ trên bảng giá nhập).
- Giá bán = giá NET × 3. Giá sỉ theo thùng = giá NET × 3 × số/thùng.
- Số mỗi thùng (`so_moi_thung`): gói 227/250/500 g = 30 gói; gói 3 kg = 10 gói; gói 5 kg = 5 gói; chai 1 lít = 20 chai; chai 500 ml = 30 chai. VH-DIO 99: chai nhựa 20 chai/thùng, chai sành 15 chai/thùng. Không dùng giá MISA cũ (nhiều mã thấp hơn giá NET).
- Giá NET và hệ số nằm ở `nhan/gia-noi-bo.json` — chỉ để trên máy, KHÔNG commit (thông tin nội bộ). Quy cách ứng với giá: `quy_cach_gia` trong san-pham.json.

## Còn thiếu (chờ chủ dự án)
- Hotline Thủy Sản Tím.
- Giá NET của 9 sản phẩm mới (AQUA SQUICK, EDTA 99, VH-YUCCA C, VITA C TAT NEW, NB BIOBEST, PROZYM, VH-LIVER PRO, VH-CANCI MILK, DAVI CID LIQUID) — catalogue đang ghi "Liên hệ".
- Liều dùng: BEN BKC, VH-DIO 99, AMIN CARE, VH-YUCCA C, VH-CANCI MILK.
- Số/thùng của sản phẩm mới đang lấy theo website cũ, cần xác nhận.
