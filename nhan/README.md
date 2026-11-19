# Bộ nhãn Thủy Sản Tím (15 sản phẩm)

- Nội dung: `nhan/san-pham.json` (sửa chữ ở đây). Chỗ `[ĐIỀN]` phải bổ sung theo hồ sơ trước khi in.
- Sinh nhãn: `node nhan/build.js` (tất cả, 3 concept) hoặc `node nhan/build.js --chi vh-glubenco-pro --concept a`.
- 3 concept, **chỉ 2 màu đặc tím `#4A044E` + trắng** để in trực tiếp lên bao bì (không chuyển màu, không tram, nét ≥ 0,25 mm). A: mặt trước tím, chữ có chân. B: nền trắng kiểu dược phẩm, dải tím đáy. C: nền tím, vòng tròn trắng. Nhà in pha màu tím theo mã này hoặc dò Pantone gần nhất trên bảng màu thật.
- Kết quả trong `nhan/out/` (`<slug>-concept-a|b|c.*`) (không đưa vào Git): `.pdf` vector có tràn lề 3 mm và dấu xén (gửi nhà in, mở được bằng Illustrator), `.png` 600 dpi xem trước, `.html` để sửa trực tiếp.
- Khổ: nhãn quấn 161,8 × 100 mm (φ : 1), ba mặt 50 | 61,8 | 50 mm (mặt trước = 38,2% tổng). **Xin nhà in khuôn bế thật** của chai/gói rồi sửa `W`, `H`, `SIDE` đầu file `build.js`.
- Phông: Cormorant Garamond và Be Vietnam Pro (SIL OFL, trong `nhan/fonts/`). Logo: `logo-tim.svg` (logo TIM của web).
