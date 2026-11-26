# Báo cáo tối ưu hiệu năng & SEO kỹ thuật (26/11/2026)

Cách đo: Chromium (Playwright), điện thoại 390×844 DPR 2, mạng giả lập 4G chậm (1,6 Mbps, RTT 150 ms), CPU chậm 4×, cache lạnh, trung vị 3 lần.
"Trước" = commit `99497f7`, "Sau" = bản hiện tại. Dung lượng là số byte thực truyền (đã nén).

| Trang | FCP trước → sau | LCP trước → sau | Dung lượng | Số request |
|---|---|---|---|---|
| Trang chủ `/vi` | 1640 → 1300 ms | 1640 → 1300 ms | 1079 → 453 KB | 40 → 31 |
| Danh sách SP | 1340 → 1344 ms | 1340 → 1344 ms | 623 → 535 KB | 34 → 27 |
| Trang SP | 1076 → 1016 ms | 1076 → 1016 ms | 356 → 253 KB | 24 → 16 |
| Blog | 1084 → 1000 ms | 2984 → 2012 ms | 548 → 422 KB | 25 → 18 |
| Bài viết | 1148 → 1116 ms | 1220 → 1228 ms | 367 → 264 KB | 24 → 16 |
| Trang chủ `/zh` | 3628 → 1400 ms | 3628 → 1400 ms | 3036 → 491 KB | 66 → 32 |

CLS = 0 trên mọi trang (không đổi). Không lỗi console trên trang thật sau deploy.

## Đã làm
- **Font tự phục vụ** (`public/fonts`, `scripts/fetch-fonts.js`): bỏ Google Fonts CSS chặn render; bỏ weight 300/800; Be Vietnam Pro 15 → 8 file (đã chặn việc tải thừa latin-ext do dải ký tự chồng nhau). Cache 1 năm. Tiếng Trung dùng font hệ thống (trước đây tải ~2 MB Noto Sans/Serif SC từ Google — còn bị chặn ở Trung Quốc đại lục).
  Thử preload font: làm FCP chậm ~190 ms trên mạng chậm → đã bỏ.
- **Video hero trang chủ** nạp sau sự kiện `load` (bỏ qua khi tiết kiệm dữ liệu, 2G, giảm chuyển động); poster phim giới thiệu chỉ nạp khi cuộn gần tới. Tiết kiệm 523 KB tranh băng thông với CSS lúc đầu.
- **Ảnh bìa**: thêm bản 640 px cho thẻ bài (`-640.webp`, `build.js` sinh luôn), bỏ ảnh gốc 3840 px (>1 MB) khỏi `srcset`, nén lại các bìa nặng (giữ nguyên nội dung), có `width/height/decoding`.
- **Cache/phiên bản**: `asset()` gắn `?v=<md5 nội dung>` thay số phiên bản gõ tay (cache `immutable` 1 năm không còn giữ CSS/JS cũ khi có người quên tăng số); ảnh/video cache 30 ngày.
- **og-cover** PNG 994 KB → JPG 97 KB; `og:image:width/height` đúng theo ảnh; `/favicon.ico` trả 200 thay vì 404.
- **Schema**: bỏ `geo` sai (toạ độ Cần Thơ trong khi địa chỉ ở TP.HCM) và `priceRange` không có căn cứ; Product không còn `offers: []` rỗng.

## Kiểm tra SEO (308 URL trong sitemap, 3 ngôn ngữ)
Một H1 mỗi trang; canonical + hreflang vi/en/zh-CN/x-default đầy đủ; JSON-LD parse hợp lệ (Organization, WebSite, Product, BlogPosting, FAQPage, BreadcrumbList, ItemList); không có link nội bộ gãy; mọi `<img>` có `alt`; sitemap có lastmod + hreflang + ảnh; robots.txt đúng.

## Còn tồn đọng
1. **Nội dung en/zh của blog & sản phẩm vẫn là tiếng Việt** (tiêu đề/mô tả trùng giữa 3 ngôn ngữ). Nên dịch, hoặc tạm bỏ hreflang en/zh cho các trang chưa dịch.
2. `main.css` 168 KB (35 KB sau nén) còn nhiều CSS không dùng ở từng trang; cần tách theo trang (rủi ro xung đột với session giao diện nên chưa làm).
3. Giờ mở cửa trong schema Organization (07:30–17:30, T2–T7) đang gõ cứng trong `head.ejs`, nên lấy từ `settings.company.hours`.
4. Mô tả tiếng Trung ngắn (~55 ký tự) và tiêu đề tiếng Anh >70 ký tự do dùng nguyên chữ Việt.
