# Background quảng cáo — Thủy Sản Tím

Cảnh **mưa nắng trên ao nuôi lúc hoàng hôn tím**: nắng (mặt trời, tia nắng, vệt phản chiếu lấp lánh), mưa (3 lớp hạt mưa, gợn mưa trên mặt ao), gió (mưa xiên, cỏ lau đung đưa, vệt gió, mây trôi), nước (sóng gợn theo phối cảnh), cầu vồng mờ.
Bố cục φ: chân trời ở 61.8% chiều cao, mặt trời ở 61.8% chiều ngang. Video 10 s **lặp liền mạch**.

## File (`out/`)
| File | Dùng cho |
|---|---|
| `thuysantim-bg-1920x1080.mp4` / `-1080x1920.mp4` | Nền có logo — quảng cáo, màn hình LED, Reels |
| `*-trong.mp4` | Nền trống (không logo) để chèn chữ/sản phẩm |
| `thuysantim-bg-3840x2160*.png` / `2160x3840*.png` | Ảnh tĩnh 4K: banner, poster, ảnh bìa |

Render lại: `cd motion/bg && node render.js`. Xem trực tiếp: `scene.html?play=1` (`&o=v` bản dọc, `&logo=0` bỏ logo).
