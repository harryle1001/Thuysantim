# Prompt thiết kế logo Thủy Sản Tím bằng AI

Dán nguyên phần tiếng Anh trong khung vào AI (AI hiểu tiếng Anh tốt hơn). Nên dùng:
- **Ideogram** (ideogram.ai): viết chữ đúng nhất, có dấu tiếng Việt. Chọn kiểu "Design", tỉ lệ 1:1.
- **ChatGPT** (tạo ảnh) hoặc **Gemini**: dán prompt, yêu cầu "nền trắng, file PNG".
- **Midjourney**: đẹp nhất về hình, nhưng hay viết sai chữ; thêm `--v 7 --style raw --ar 1:1` ở cuối.

AI tạo ảnh thường (PNG). Chọn được mẫu ưng ý thì gửi lại cho mình để vẽ lại thành file vector (SVG) sắc nét.

## Prompt 1: chữ thập trong vòng tròn

```
Minimal premium corporate logo for "THỦY SẢN TÍM", a Vietnamese aquaculture biotech brand.
The word "TÍM" is written twice in a crossword cross: once horizontally and once vertically,
sharing the middle letter "Í" at the center. Bold geometric sans-serif capitals, tight even spacing,
deep navy blue #0b2a4a. Surrounded by a thick circular ring made of two arcs: a warm gold gradient
arc on the upper-left and an ocean blue gradient arc on the lower-right, with small gaps between them.
Flat vector, clean white background, perfectly centered, high contrast, no shadows, no 3D,
no extra text, no mockup. Pharmaceutical brand quality, timeless and trustworthy.
```

## Prompt 2: vòng tròn tạo bởi con tôm và con cá (khuyên dùng)

```
Minimal luxury logo for "THỦY SẢN TÍM", a Vietnamese shrimp and fish farming brand.
Center: the word "TÍM" in a crossword cross, written horizontally and vertically, sharing the letter "Í",
bold geometric sans-serif capitals in deep navy #0b2a4a.
Around it, a circle formed by two animals swimming head to tail: on the left a curled shrimp drawn
as separated gold segments like jewelry rings, with long elegant antennae and a fan tail; on the right
a sleek ocean-blue fish with a forked tail completing the circle.
Flat vector emblem, elegant, simple, aristocratic, white background, centered, no shadows,
no gradients except subtle gold and blue, no extra text.
```

## Prompt 3: chữ thập trong khiên

```
Heraldic premium logo for "THỦY SẢN TÍM", a Vietnamese aquaculture brand.
A navy blue shield (#0b2a4a) with a polished gold double border. Inside, the word "TÍM" in a crossword
cross, horizontal and vertical sharing the letter "Í", bold geometric sans-serif capitals in ivory.
A small gold shrimp in the upper-left corner and a small gold fish in the upper-right corner.
Flat vector, luxurious, minimal, symmetric, white background, no 3D, no shadow, no extra text.
```

## Mẹo
- Muốn bản kèm tên: thêm câu `Next to the emblem, the wordmark "THỦY SẢN TÍM" in bold sans-serif, "TÍM" in gold.`
- AI viết sai dấu thì thêm: `Vietnamese diacritics must be exactly: THỦY SẢN TÍM, Í with acute accent.`
- Đừng ghi chữ "Bayer" vào prompt: AI sẽ chép logo Bayer, và logo quá giống Bayer có thể bị khiếu nại vì Bayer cũng bán thuốc thú y, thủy sản.
