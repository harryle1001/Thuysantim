# Thủy Sản Tím — Video giới thiệu (bản nháp kịch bản)

**Thời lượng:** 60 giây · 30 fps · 1920×1080 + 1080×1920
**Phong cách:** lặn biển cao cấp, đồng bộ nền `public/js/ocean.js` — lặn từ mặt nước có tia nắng (god rays, caustics, bọt khí) xuống tầng sâu (plankton phát sáng, ánh vàng). Chữ vàng champagne trên nền xanh biển đậm. Bố cục theo tỷ lệ vàng φ (đường chia 0.382 / 0.618).
**Âm thanh:** nhạc nền ambient dưới nước (tổng hợp bằng code, không bản quyền). Không lồng tiếng — phụ đề tiếng Việt chạy song song.

| # | Thời gian | Hình ảnh | Chữ trên màn hình / phụ đề |
|---|---|---|---|
| 1 | 0–6s | Mặt nước lấp lánh, tia nắng chiếu xuống; camera lặn dần. Logo Thủy Sản Tím hiện từ ánh vàng, bọt khí bay lên. | **THỦY SẢN TÍM** — *Tinh hoa sinh học · Vững vàng mùa vụ* |
| 2 | 6–16s | Nước tối và đục dần; 4 thẻ "vấn đề" nổi lên như bong bóng. | "Mỗi vụ nuôi, bà con lo nhất…" · Khí độc NH₃, NO₂, H₂S · Đáy ao dơ, nước mất màu · Tôm yếu gan, phân trắng · Lạm dụng kháng sinh → tồn dư, bị trả hàng |
| 3 | 16–26s | Hạt vi sinh phát sáng lan ra, nước trong trở lại; vòng tròn "chu kỳ nuôi" 4 bước. | "Giải pháp sinh học từ gốc" · Chủng vi sinh bản địa, phân lập từ ao nuôi Việt Nam · Chuẩn bị ao → Thả giống → Nuôi tăng trọng → Thu hoạch |
| 4 | 26–42s | 6 thẻ nhóm sản phẩm trượt vào theo lưới; mỗi thẻ có biểu tượng + sản phẩm đại diện. | Men vi sinh (PRO-BIO 9) · Xử lý nước & đáy (ZEO-CLEAR) · Khoáng & Vitamin (MINERAL PLUS) · Bổ gan & Đường ruột (LIVER GUARD) · Thảo dược (HERBA-GUT) · Sát trùng & Oxy (DO-OXY) |
| 5 | 42–52s | 4 cam kết hiện lần lượt với biểu tượng vàng; số liệu đếm lên. | 100% sinh học · Kỹ sư tư vấn 1:1 · Giao nhanh toàn quốc 24–72h · Có phiếu kiểm nghiệm (COA) từng lô — *15 năm · 650 đại lý · 12.000 ao nuôi* |
| 6 | 52–60s | Tầng sâu, plankton phát sáng; logo khiên vàng hiện lại. | Chỉ logo + **THỦY SẢN TÍM** (theo duyệt: bỏ hotline/Zalo/website) |

**Bản dọc 1080×1920:** cùng nội dung, bố cục xếp chồng; thẻ sản phẩm lưới 2×3; phụ đề đặt ở vùng an toàn (cách đáy ~17%) để không bị nút TikTok/Reels che.

**Kỹ thuật:** Remotion (React) trong `motion/intro/`, có `package.json` riêng — không đụng tới code website. Nền nước viết lại bằng shader WebGL theo `ocean.js`.
