# Thông tin đã xác nhận với chủ dự án (đọc trước khi làm nhãn / bảng giá)

Cập nhật 20/11/2026. Dữ liệu máy đọc nằm ở `san-pham.json`; file này ghi lại các quyết định để khỏi hỏi lại.

## Nhà phân phối (nổi bật trên nhãn)
- Tên: THỦY SẢN TÍM
- Địa chỉ: 295/32 Tân Kỳ Tân Quý, Tân Sơn Nhì, TP. Hồ Chí Minh, Việt Nam
- Website: thuysantim.com
- Hotline: CHƯA CÓ → để trống `phan_phoi.hotline`, dòng hotline tự ẩn. Có số thì điền vào là hiện.

## Nhà sản xuất (làm mờ, chữ nhỏ)
- CÔNG TY TNHH NO BEN · 228/9 Nguyễn Thị Lắng, Ấp Phú Lợi A, Xã Củ Chi, TP. Hồ Chí Minh, Việt Nam
- KHÔNG in số điện thoại Noben.

## Thiết kế
- Dùng concept E (nền trắng, logo TIM của web ở góc trái trên, màu riêng từng sản phẩm, tỷ lệ vàng). Ghi "Sản xuất tại Việt Nam".
- Nước → nhãn chai; bột → túi + bao.

## Thành phần
- Mọi sản phẩm Bacillus ghi 1 × 10⁹ CFU (bột: /g, nước: /lít) và ghi rõ tên chủng:
  - CLEAR 12H, US LACTO: Bacillus subtilis · Bacillus licheniformis · Bacillus megaterium
  - ROVAZYME: Bacillus licheniformis · Bacillus megaterium · Bacillus mesentericus
  - BIOTIC 99: hồ sơ chỉ ghi Bacillus spp. — chưa có tên chủng, không tự thêm chủng ngoài hồ sơ.

## Quy cách, giá
- BEN BKC: chai 1 lít.
- Giá nhập = "Giá NET công ty giao" trong phụ lục bảng kê Danh mục 15SP Noben nhượng (xem `gia-nhap.js`).
- Giá bán = giá NET × 3. Không dùng giá MISA cũ (nhiều mã thấp hơn giá NET).
- Giá NET và hệ số nằm ở `nhan/gia-noi-bo.json` — chỉ để trên máy, KHÔNG commit (thông tin nội bộ). Quy cách ứng với giá: `quy_cach_gia` trong san-pham.json.

## Còn thiếu (chờ chủ dự án)
- Hotline Thủy Sản Tím.
- Liều dùng: BEN BKC, VH-DIO 99, AMIN CARE, PREMIX ORA.
- Quy cách cần xác nhận: SUPER YUCCA, BEN COPPER 500, SUPER CUT ALGA.
