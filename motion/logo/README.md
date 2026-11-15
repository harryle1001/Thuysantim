# Logo motion — Thủy Sản Tím

Logo reveal 6 s, 60 fps, dựng bằng HTML/SVG điều khiển theo thời gian (`stage.html` → `renderAt(t)`), render khung hình bằng Playwright, ghép bằng ffmpeg. Độc lập với code website.

**Kịch bản:** giọt nước vàng → sóng lan → khiên vẽ nét vàng → nước dâng lấp đầy khiên → tôm cuộn vòng từ đầu tới đuôi, râu vẽ nét → cá bơi vào → ánh vàng quét qua khiên → logo lùi sang vị trí lockup, chữ "THỦY SẢN TÍM" hiện từng ký tự → đường kẻ vàng + slogan → ánh kim chạy trên chữ "TÍM".

## File xuất (`out/`)
| File | Dùng cho |
|---|---|
| `thuysantim-logo-1920x1080.mp4` | YouTube, màn hình, intro video ngang |
| `thuysantim-logo-1080x1920.mp4` | Reels / TikTok / Shorts |
| `*-alpha.webm` | Nền trong suốt (VP9 alpha) — web, CapCut, Premiere |
| `*-alpha.mov` | ProRes 4444 nền trong suốt cho dựng phim chuyên nghiệp — **không commit** (~200 MB), tạo lại bằng lệnh render |
| `poster-1920x1080.jpg` | Ảnh khung cuối |

## Render lại
```bash
cd motion/logo
node render.js            # cả ngang + dọc, kèm bản alpha
node render.js h --no-alpha
node render.js v --stills 1,3,6   # chỉ xuất ảnh tĩnh để duyệt
```
Xem trực tiếp trong trình duyệt: mở `stage.html?play=1` (thêm `&o=v` cho bản dọc).

## Loader cho website
`web/loader.html` — bản SVG + CSS (~5 KB, không cần JS), có `prefers-reduced-motion`. Copy khối `.tst-loader` + style vào layout và thêm class `is-done` khi trang tải xong.
