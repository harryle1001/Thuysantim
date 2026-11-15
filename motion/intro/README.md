# Video giới thiệu Thủy Sản Tím (motion graphic)

Dự án Remotion độc lập — không ảnh hưởng code website. Kịch bản: `STORYBOARD.md`.

- `src/Video.tsx` — 6 cảnh (logo, vấn đề, giải pháp, sản phẩm, cam kết, kết), phụ đề.
- `src/Ocean.tsx` — nền nước WebGL, cùng ngôn ngữ với `public/js/ocean.js`.
- `src/captions.json` — phụ đề tiếng Việt (sửa ở đây, cả video lẫn `.srt` đều cập nhật).
- `scripts/make-music.mjs` — nhạc nền ambient tự tổng hợp (không bản quyền).

## Dựng lại

```bash
cd motion/intro
npm install
npm run music                       # tạo public/music.wav
node scripts/make-srt.mjs           # out/thuysantim-intro.vi.srt
npm run studio                      # xem trước, chỉnh trực tiếp
npm run render:16x9                 # out/thuysantim-intro-1920x1080.mp4
npm run render:9x16                 # out/thuysantim-intro-1080x1920.mp4
```

Máy không tải được Chrome của Remotion: đặt `REMOTION_BROWSER=/đường/dẫn/chrome-headless-shell`.
