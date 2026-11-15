# Nhạc zen tự tạo — Thủy Sản Tím

Tạo hoàn toàn bằng code (`zen.py`, chỉ cần numpy) → không vướng bản quyền.

- `logo-zen.wav` (6.2 s): giọt nước chạm mặt ao (0.618 s) → chuông xoay ngân khi vòng logo khép (1.618 s) → chuông gió ngũ cung theo từng nét chữ TIM → chuông thứ hai khi chữ THỦY SẢN TÍM hiện (3.618 s) → nhạc nhỏ dần ở cuối.
- `bg-zen.wav` (10 s, lặp liền mạch): mưa rơi, gió thổi theo nhịp, giọt mưa trên mặt ao, nền drone quãng 5 và chuông xoay.

Video đã ghép tiếng nằm ở `../logo/out/*-zen.mp4` và `../bg/out/*-zen.mp4` (chuẩn âm lượng -16 LUFS, hợp với mạng xã hội).

Tạo lại / ghép lại:
```bash
python3 zen.py
ffmpeg -i ../logo/out/thuysantim-logo-1920x1080.mp4 -i logo-zen.wav -map 0:v -map 1:a -c:v copy \
  -af loudnorm=I=-16:TP=-1.5 -c:a aac -b:a 192k -shortest out.mp4
```
