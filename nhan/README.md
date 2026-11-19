# Bộ nhãn Thủy Sản Tím (15 sản phẩm)

- Nội dung: `nhan/san-pham.json` (sửa chữ ở đây). Chỗ `[ĐIỀN]` phải bổ sung theo hồ sơ trước khi in.
- Sinh nhãn: `node nhan/build.js` (tất cả, 3 concept) hoặc `node nhan/build.js --chi vh-glubenco-pro --concept a`.
- 3 concept, **chỉ 2 màu đặc tím `#4A044E` + trắng** để in trực tiếp lên bao bì (không chuyển màu, không tram, nét ≥ 0,25 mm). A: mặt trước tím, chữ có chân. B: nền trắng kiểu dược phẩm, dải tím đáy. C: nền tím, vòng tròn trắng. Nhà in pha màu tím theo mã này hoặc dò Pantone gần nhất trên bảng màu thật.
- Kết quả trong `nhan/out/` (`<slug>-concept-a|b|c.*`) (không đưa vào Git): `.pdf` vector có tràn lề 3 mm và dấu xén (gửi nhà in, mở được bằng Illustrator), `.png` 600 dpi xem trước, `.html` để sửa trực tiếp.
- Khổ: nhãn quấn 161,8 × 100 mm (φ : 1), ba mặt 50 | 61,8 | 50 mm (mặt trước = 38,2% tổng). **Xin nhà in khuôn bế thật** của chai/gói rồi sửa `W`, `H`, `SIDE` đầu file `build.js`.
- Phông: Cormorant Garamond và Be Vietnam Pro (SIL OFL, trong `nhan/fonts/`). Logo: `logo-tim.svg` (logo TIM của web).

## Concept D · Hoàng gia (tím + nhũ vàng + trắng) và bộ bao bì
- Biểu tượng **Vòng tuần hoàn Tôm – Cá**: `emblem.js` (dựng bằng toán học, một màu đặc). File vector: `bieu-tuong-tom-ca-*.svg`.
- Màu: tím `#4A044E`, nhũ vàng `#B8914A` (mực nhũ hoặc ép kim, vd Pantone 871 C – dò bảng màu thật), trắng.
- Nhãn chai (quấn): `node nhan/build.js --chi <slug> --concept d`.
- Túi đứng 130 × 210 mm và bao 450 × 728 mm (mặt trước + sau): `node nhan/bo.js --chi <slug>`.
- Mockup 3D 4K (chai, túi, bao, cả bộ): `THREE_JS=<three@0.149 build/three.min.js> node nhan/mockup.js --chi <slug>`.

## Concept E · Trắng φ (đang dùng)
- Nền trắng chủ đạo, logo TIM (đúng logo web) góc trái trên, mỗi sản phẩm một màu riêng (`mau` trong `san-pham.json`), cung sóng φ nhiều màu ở góc phải dưới, dải 3 màu mép trên chia 61,8 / 23,6 / 14,6.
- Nhãn chai: `node nhan/build.js --chi <slug> --concept e` · Túi, bao: `node nhan/bo.js --chi <slug>` (thêm `--kieu d` cho bản tím + nhũ vàng).
- Video 4K: `node nhan/video.js --chi <slug> --loai motion` (21 s, 30 fps) và `--loai xoay` (xoay 360°, 12 s, 60 fps, lặp liền mạch). Cần ffmpeg và `THREE_JS`.

## Trọn bộ mỗi sản phẩm (concept E)
- `THREE_JS=<three.min.js> node nhan/tat-ca.js --chi <slug,...>`: nhãn → mockup 4K → video motion 4K → video xoay 360° 4K. Chạy lại sẽ bỏ qua bước đã có file.
- Nước (`dang: chai`) → nhãn chai; bột (`dang: goi`) → túi + bao.
- Nhận biết trên nhãn: màu riêng (`mau`), huy hiệu loại + mã (`MT-04`, `TA-10`), họa tiết nhóm (cung tròn = xử lý môi trường, hình thoi = thức ăn bổ sung), biểu tượng dạng và cách dùng, dòng "Sản xuất tại Việt Nam".
