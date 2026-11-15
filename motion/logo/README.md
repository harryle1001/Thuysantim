# Logo motion — Thủy Sản Tím (logo TIM)

Logo reveal ~6.2 s, 60 fps, theo logo chốt `public/brand/logo-tim-4k` (vòng tròn + chữ thập TIM, tỷ lệ φ). Mốc thời gian theo φ: 0.382 · 0.618 · 1 · 1.618 · 2.618 · 4.236 s.

**Kịch bản:** giọt nước rơi → gợn sóng lan → gợn thu lại thành vòng logo → chữ I mọc lên → T, M trượt ngang → T trên, M dưới ghép thành chữ thập → ánh champagne quét qua → logo lùi vào lockup, "THỦY SẢN TÍM" hiện từng chữ → vạch vàng + slogan.

## File xuất (`out/`)
| File | Dùng cho |
|---|---|
| `thuysantim-logo-1920x1080.mp4` | Intro video ngang, YouTube |
| `thuysantim-logo-1080x1920.mp4` | Reels / TikTok / Shorts |
| `*-alpha.webm` | Nền trong suốt (VP9 alpha) |
| `*-alpha.mov` | ProRes 4444 nền trong suốt — **không commit** (~200 MB), tạo lại bằng `node render.js` |
| `poster-1920x1080.jpg` | Khung cuối |

## Render lại
```bash
cd motion/logo
node render.js                    # ngang + dọc, kèm alpha
node render.js v --stills 1,3,6   # ảnh tĩnh để duyệt
```
Xem trực tiếp: mở `stage.html?play=1` (thêm `&o=v` cho bản dọc).

## Loader website
`web/loader.html` — SVG + CSS (~4 KB), tôn trọng `prefers-reduced-motion`. Thêm class `is-done` khi trang tải xong.
