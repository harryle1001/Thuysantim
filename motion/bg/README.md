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

## Bản sáng · nắng sau mưa, cầu vồng (`scene-sang.html`)
Buổi sáng sau cơn mưa trên vùng ao nuôi: trời xanh, mây trắng trôi, mưa bóng mây thưa dần, cầu vồng rõ (có cung phụ và phản chiếu trên mặt nước), quạt nước quay sủi bọt, cò trắng bay, cỏ xanh lay theo gió. Logo tím mận trên nền trời sáng.
Bố cục φ: chân trời 61.8% chiều cao, mặt trời ở 23.6% chiều cao, tâm cầu vồng ở 23.6% chiều ngang. Video 10 s lặp liền mạch.

| File | Dùng cho |
|---|---|
| `thuysantim-bg-sang-1920x1080.mp4` / `-1080x1920.mp4` | Nền có logo |
| `*-trong.mp4` | Nền trống để chèn chữ/sản phẩm |
| `*-zen.mp4` | Bản có nhạc zen |
| `thuysantim-bg-sang-3840x2160*.png` / `2160x3840*.png` | Ảnh tĩnh 4K |

Render lại: `node render.js sang`. Bản web nhẹ cho landing page: `public/video/nang-cau-vong-1280.mp4` (+ ảnh `.webp`).

## Bản hoàng hôn tối giản, sang trọng (`scene-toi-gian.html`) · đang chờ duyệt
Chỉ giữ: trời tím mận chuyển vàng hồng, mặt trời sát chân trời, 12 tia nắng mảnh xoay rất chậm, một cung cầu vồng mờ, mặt nước phẳng lặng có cột phản chiếu, vài hạt sáng vàng bay lên. Logo trắng, chữ TÍM vàng đồng, giãn chữ rộng.
Video 20 s lặp liền mạch; bản `-nhac.mp4` kèm nhạc `../audio/sang-trong.wav` (ambient piano + pad cung Rê trưởng, tự tạo bằng `sang-trong.py`, chuẩn -16 LUFS). Render lại: `node render.js toi-gian`.
