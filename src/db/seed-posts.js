'use strict';
/**
 * Long-form, search-focused farming guides (VI full length, EN/ZH condensed).
 * Conventions the article page understands (see src/services/article.js):
 *   ## headings -> table of contents, "## Câu hỏi thường gặp" -> FAQ + FAQPage schema,
 *   **TÍM PRODUCT NAME** -> automatic link to the product.
 */
const L = (vi, en, zh) => ({ vi, en, zh });

module.exports = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'quy-trinh-nuoi-tom-the-chan-trang-tu-a-den-z', topic: 'technique', daysAgo: 1,
    title: L('Quy trình nuôi tôm thẻ chân trắng từ A đến Z: hướng dẫn chi tiết cho vụ nuôi thắng lợi',
      'Whiteleg Shrimp Farming from A to Z: A Complete Step-by-Step Guide',
      '南美白对虾养殖全流程：从清塘到收获的完整指南'),
    excerpt: L('Toàn bộ quy trình nuôi tôm thẻ chân trắng thâm canh: chuẩn bị ao, gây màu nước, chọn giống, cho ăn, quản lý môi trường, phòng bệnh và thu hoạch — kèm bảng thông số chuẩn kỹ sư Thủy Sản Tím áp dụng tại hơn 2.000 ao nuôi.',
      'The complete intensive whiteleg shrimp protocol — pond preparation, water colour, seed selection, feeding, water management, disease prevention and harvest — with the target parameters our engineers use across 2,000+ ponds.',
      '南美白对虾集约化养殖全流程：清塘、肥水、选苗、投喂、水质管理、病害预防与收获，附我们工程师在2,000多口池塘使用的标准参数表。'),
    body: L(
`Tôm thẻ chân trắng (*Litopenaeus vannamei*) là đối tượng nuôi chủ lực tại Việt Nam nhờ tốc độ lớn nhanh, chịu được mật độ cao và một vụ chỉ kéo dài 75–100 ngày. Nhưng cũng vì nuôi dày, chỉ một sai sót nhỏ về nước hay thức ăn có thể khiến cả vụ thất bại. Bài viết này tổng hợp **quy trình nuôi tôm thẻ chân trắng từ A đến Z** theo đúng trình tự, kèm những con số bạn cần theo dõi mỗi ngày.

## Bảng thông số môi trường chuẩn cho tôm thẻ
| Chỉ tiêu | Ngưỡng tối ưu | Ghi chú |
|---|---|---|
| pH | 7,5 – 8,5 | Chênh lệch sáng – chiều không quá 0,5 |
| Độ kiềm | 120 – 180 mg CaCO₃/L | Ao độ mặn thấp nên giữ trên 140 |
| Độ mặn | 10 – 25‰ | Tôm chịu được 2–40‰ nhưng lớn tốt nhất ở khoảng này |
| Nhiệt độ | 28 – 32 °C | Trên 33 °C tôm giảm ăn rõ rệt |
| Oxy hòa tan | ≥ 5 mg/L | Không để dưới 4 mg/L, kể cả lúc rạng sáng |
| NH₃ | < 0,1 mg/L | Độc hơn khi pH và nhiệt độ cao |
| NO₂ | < 1 mg/L | Ao độ mặn thấp nên giữ dưới 0,5 |
| H₂S | < 0,02 mg/L | Rất độc, sinh ra từ đáy ao yếm khí |
| Độ trong | 30 – 40 cm | Màu xanh vỏ đậu hoặc nâu nhạt |

## Giai đoạn 1: Chuẩn bị ao nuôi (10–15 ngày)
Khoảng 80% thành công của vụ nuôi được quyết định trước khi thả giống. Ao đất cần tháo cạn, nạo vét bùn đen, bón vôi và phơi đáy; ao bạt cần vệ sinh, sát trùng và kiểm tra rò rỉ. Nước cấp phải qua ao lắng, lọc bằng túi lọc hai lớp, diệt giáp xác và diệt khuẩn trước khi gây màu. Chi tiết từng bước có trong bài [quy trình chuẩn bị ao nuôi tôm thẻ 7 bước](/vi/blog/quy-trinh-chuan-bi-ao-nuoi-tom-the-7-buoc).

## Giai đoạn 2: Gây màu nước, ổn định hệ vi sinh
Sau khi hết dư lượng hóa chất (thường 3–5 ngày sau diệt khuẩn), tiến hành gây màu bằng men vi sinh kết hợp khoáng. Ủ **TÍM PRO-BIO 9** với mật rỉ đường và tạt liên tục 3 ngày để vi khuẩn có lợi chiếm ưu thế trước khi thả giống. Màu nước đẹp giúp ổn định pH, che bóng đáy ao, hạn chế tảo đáy và tạo thức ăn tự nhiên cho tôm nhỏ. Xem hướng dẫn: [cách gây màu nước ao nuôi tôm nhanh và bền màu](/vi/blog/cach-gay-mau-nuoc-ao-nuoi-tom).

## Giai đoạn 3: Chọn và thả tôm giống
- Chọn giống PL10–PL12 từ trại có kết quả xét nghiệm PCR âm tính với đốm trắng (WSSV), hoại tử gan tụy (AHPND), vi bào tử trùng (EHP) và IHHNV.
- Tôm khỏe bơi ngược dòng, phản xạ nhanh, ruột đầy, đồng cỡ, không dị hình.
- Thuần độ mặn ngay tại trại nếu chênh lệch quá 5‰ so với ao nuôi.
- Thả vào sáng sớm hoặc chiều mát; ngâm bao 15–20 phút cho cân bằng nhiệt độ rồi mới mở bao.

Mật độ tham khảo: ao đất bán thâm canh 30–60 con/m², ao bạt thâm canh 100–150 con/m², ao nổi siêu thâm canh có xi phông và ao chứa thải 200–300 con/m². Đọc thêm: [cách chọn tôm giống thẻ chân trắng chất lượng](/vi/blog/cach-chon-tom-giong-the-chan-trang-chat-luong).

## Giai đoạn 4: Quản lý thức ăn
Thức ăn chiếm 50–60% giá thành nuôi, vì vậy cho ăn đúng là cách nhanh nhất để giảm chi phí. Tháng đầu cho ăn 4 cữ/ngày theo bảng của nhà sản xuất; từ tháng thứ hai kiểm tra sàng ăn sau 1,5–2 giờ để tăng giảm 5–10%. Trộn **TÍM GUT-ZYME** vào thức ăn giúp tôm tiêu hóa tốt, phân dài, giảm hệ số chuyển đổi thức ăn (FCR). Mục tiêu FCR với tôm thẻ là 1,1–1,3. Bảng chi tiết: [cách tính lượng thức ăn cho tôm thẻ](/vi/blog/cach-tinh-luong-thuc-an-cho-tom-the).

## Giai đoạn 5: Quản lý môi trường hằng ngày
- **5–6 giờ sáng:** đo pH, oxy; quan sát tôm có nổi đầu, dạt bờ không.
- **14–15 giờ:** đo lại pH (cao nhất trong ngày), nhiệt độ, độ trong.
- **Mỗi tuần 2 lần:** đo kiềm, NH₃, NO₂; kiểm tra gan tụy và đường ruột tôm.
- **Định kỳ 5–7 ngày:** tạt men vi sinh để phân hủy chất hữu cơ; bổ sung **TÍM MINERAL PLUS** vào buổi tối để giữ kiềm và giúp tôm lột xác đều.
- Ao bạt cần xi phông đáy hằng ngày từ tuần thứ 3; ao đất cần bố trí quạt gom chất thải vào giữa ao.

Khi chỉ số kiềm, pH không ổn định, xem [cách tăng kiềm và ổn định pH ao tôm](/vi/blog/cach-tang-kiem-on-dinh-ph-ao-nuoi-tom).

## Giai đoạn 6: Phòng bệnh chủ động
Không có thuốc nào thay thế được môi trường ổn định. Phòng bệnh hiệu quả gồm ba lớp: con giống sạch bệnh, nước ổn định và tôm có sức đề kháng tốt. Bổ sung **TÍM LIVER GUARD** 3 ngày/tuần giúp gan tụy khỏe; dùng **TÍM C-1000** khi thời tiết thay đổi. Tra cứu dấu hiệu từng bệnh tại [thư viện bệnh tôm, cá](/vi/diseases) và bài [6 bệnh thường gặp trên tôm thẻ](/vi/blog/6-benh-thuong-gap-tren-tom-the-va-cach-phong).

## Giai đoạn 7: Thu hoạch
Tôm thẻ thường đạt cỡ 60–80 con/kg sau 80–100 ngày. Trước thu hoạch 1–2 ngày, bổ sung khoáng để tôm cứng vỏ, tránh thu đúng lúc tôm lột xác. Ngưng hóa chất, thuốc theo đúng thời gian cách ly để tôm sạch dư lượng, đạt chuẩn xuất khẩu.

> Mỗi ao là một hệ sinh thái riêng. Nếu cần phác đồ cụ thể cho ao của mình, hãy gửi chỉ số nước cho kỹ sư Thủy Sản Tím để được tư vấn miễn phí.

## Câu hỏi thường gặp
### Nuôi tôm thẻ chân trắng bao lâu thì thu hoạch?
Thông thường 75–100 ngày sau khi thả giống PL12, tôm đạt cỡ 60–80 con/kg. Nuôi 2 giai đoạn (ương 20–30 ngày rồi chuyển ao) rút ngắn thời gian ở ao thương phẩm còn 60–70 ngày.

### Mật độ thả tôm thẻ bao nhiêu là hợp lý?
Ao đất bán thâm canh nên thả 30–60 con/m², ao bạt thâm canh 100–150 con/m². Chỉ thả trên 200 con/m² khi có đủ quạt, oxy đáy, xi phông và ao chứa thải.

### Độ kiềm bao nhiêu là tốt cho tôm thẻ?
Nên duy trì 120–180 mg CaCO₃/L. Kiềm thấp khiến pH dao động mạnh và tôm khó cứng vỏ; ao độ mặn thấp cần giữ kiềm cao hơn, khoảng 140–180 mg/L.

### Hệ số FCR bao nhiêu là đạt?
Với tôm thẻ chân trắng, FCR 1,1–1,3 là tốt. Trên 1,5 nghĩa là đang lãng phí thức ăn hoặc tôm tiêu hóa kém, cần kiểm tra lại sàng ăn và sức khỏe đường ruột.`,
`Whiteleg shrimp (*Litopenaeus vannamei*) dominates Vietnamese aquaculture thanks to fast growth, tolerance of high densities and crops of just 75–100 days. That same intensity means small mistakes are costly. Here is the full protocol in order, with the numbers to watch every day.

## Target water parameters
| Parameter | Optimum | Note |
|---|---|---|
| pH | 7.5 – 8.5 | Morning–afternoon swing under 0.5 |
| Alkalinity | 120 – 180 mg CaCO₃/L | Keep above 140 in low-salinity ponds |
| Salinity | 10 – 25‰ | Tolerates 2–40‰ |
| Temperature | 28 – 32 °C | Feeding drops above 33 °C |
| Dissolved oxygen | ≥ 5 mg/L | Never below 4 mg/L at dawn |
| NH₃ | < 0.1 mg/L | More toxic at high pH |
| NO₂ | < 1 mg/L | Below 0.5 in low salinity |

## 1. Pond preparation
Drain, remove sludge, lime and dry earthen ponds; clean and disinfect lined ponds. Fill through settling ponds and double filter bags. Details: [7 essential pond-preparation steps](/en/blog/quy-trinh-chuan-bi-ao-nuoi-tom-the-7-buoc).

## 2. Water colour and probiotics
Once disinfectant residues are gone, activate **TÍM PRO-BIO 9** with molasses and apply for 3 days so beneficial bacteria dominate before stocking. See [how to build pond water colour](/en/blog/cach-gay-mau-nuoc-ao-nuoi-tom).

## 3. Seed selection and stocking
Use PCR-negative PL10–PL12 (WSSV, AHPND, EHP, IHHNV). Acclimatise salinity at the hatchery if the gap exceeds 5‰. Typical densities: 30–60/m² semi-intensive, 100–150/m² intensive lined ponds.

## 4. Feeding
Feed is 50–60% of production cost. Adjust by feeding trays after 1.5–2 hours and add **TÍM GUT-ZYME** to improve digestion. Target FCR: 1.1–1.3. See the [feeding table](/en/blog/cach-tinh-luong-thuc-an-cho-tom-the).

## 5. Daily management and harvest
Measure pH and DO at dawn and mid-afternoon; alkalinity, NH₃ and NO₂ twice a week. Apply probiotics every 5–7 days and **TÍM MINERAL PLUS** in the evening. Harvest at 60–80 shrimp/kg after 80–100 days, respecting withdrawal periods.

## Frequently asked questions
### How long does a whiteleg shrimp crop take?
Usually 75–100 days from PL12 stocking to 60–80 shrimp/kg; two-phase systems shorten grow-out to 60–70 days.

### What alkalinity is best?
Keep 120–180 mg CaCO₃/L, and 140–180 mg/L in low-salinity ponds, to stabilise pH and help moulting.`,
`南美白对虾生长快、耐高密度、一季仅需75–100天，是越南最主要的养殖品种。但高密度也意味着任何小失误代价都很大。以下按顺序介绍全流程及每日需关注的指标。

## 标准水质参数
| 指标 | 适宜范围 | 备注 |
|---|---|---|
| pH | 7.5 – 8.5 | 早晚波动小于0.5 |
| 碱度 | 120 – 180 mg/L | 低盐度池塘保持140以上 |
| 盐度 | 10 – 25‰ | 可耐受2–40‰ |
| 水温 | 28 – 32 °C | 高于33 °C摄食下降 |
| 溶解氧 | ≥ 5 mg/L | 黎明时也不低于4 mg/L |

## 1. 清塘
土池排干、清淤、施石灰、晒池；铺膜池清洗消毒。经蓄水池和双层滤袋进水。详见[清塘7个步骤](/zh/blog/quy-trinh-chuan-bi-ao-nuoi-tom-the-7-buoc)。

## 2. 肥水与益生菌
消毒剂残留消失后，用糖蜜活化 **TÍM PRO-BIO 9** 连续泼洒3天，让有益菌在放苗前占据优势。参见[肥水方法](/zh/blog/cach-gay-mau-nuoc-ao-nuoi-tom)。

## 3. 选苗与放苗
选择PCR检测阴性的PL10–PL12虾苗；盐度差超过5‰时在苗场先行淡化。参考密度：半集约30–60尾/m²，集约化铺膜池100–150尾/m²。

## 4. 投喂
饲料占成本50–60%。投喂后1.5–2小时查料台调整用量，拌喂 **TÍM GUT-ZYME** 改善消化，目标饲料系数1.1–1.3。

## 5. 日常管理与收获
黎明和下午测pH与溶氧，每周两次测碱度、氨氮、亚硝酸盐；每5–7天泼洒益生菌，傍晚补充 **TÍM MINERAL PLUS**。80–100天达到每公斤60–80尾即可收获。

## 常见问题
### 南美白对虾养多久可以收获？
从PL12放苗起通常75–100天达到每公斤60–80尾；两段式养殖可将成虾阶段缩短至60–70天。

### 碱度多少最合适？
保持120–180 mg/L，低盐度池塘保持140–180 mg/L，以稳定pH并帮助蜕壳。`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'cach-gay-mau-nuoc-ao-nuoi-tom', topic: 'technique', daysAgo: 5,
    title: L('Cách gây màu nước ao nuôi tôm nhanh, bền màu bằng men vi sinh',
      'How to Build Pond Water Colour Quickly and Keep It Stable with Probiotics',
      '如何用益生菌快速肥水并保持稳定水色'),
    excerpt: L('Màu nước quyết định độ ổn định của ao tôm. Hướng dẫn gây màu nước bằng men vi sinh và khoáng từng bước, cách nhận biết màu nước tốt – xấu và xử lý khi màu nước lên chậm hoặc bị tàn.',
      'Water colour drives pond stability. A step-by-step probiotic and mineral method, how to read good and bad colours, and what to do when colour is slow or crashes.',
      '水色决定池塘稳定性。分步骤介绍益生菌与矿物质肥水方法、如何辨别好坏水色，以及水色起不来或倒藻时的处理。'),
    body: L(
`Ao nuôi tôm có màu nước đẹp giống như có một "tấm áo giáp": tảo và vi sinh có lợi hấp thu khí độc, ổn định pH, che ánh nắng xuống đáy để tảo đáy không phát triển và cung cấp thức ăn tự nhiên cho tôm giai đoạn đầu. Ngược lại, ao trong veo hoặc màu nước quá đậm đều là mầm mống của rủi ro. Dưới đây là **cách gây màu nước ao nuôi tôm** mà kỹ sư Thủy Sản Tím áp dụng cho cả ao đất và ao bạt.

## Màu nước nào là tốt cho tôm?
| Màu nước | Đánh giá | Ý nghĩa |
|---|---|---|
| Xanh vỏ đậu, xanh lá non | Tốt | Tảo lục, tảo khuê chiếm ưu thế, pH ổn định |
| Nâu nhạt, vàng nâu | Tốt | Tảo khuê (diatom) – thức ăn tự nhiên giàu dinh dưỡng |
| Xanh đậm, xanh lam, có váng | Xấu | Tảo lam phát triển, dễ sinh độc tố, pH dao động mạnh |
| Nâu đen, đỏ nâu | Xấu | Tảo giáp, chất hữu cơ cao, nguy cơ thiếu oxy |
| Trong veo | Xấu | Thiếu dinh dưỡng, tảo đáy dễ phát triển, tôm dễ sốc |

Độ trong lý tưởng là **30–40 cm** khi đo bằng đĩa Secchi.

## Chuẩn bị trước khi gây màu
- Nước đã qua lắng, lọc và diệt khuẩn; chờ 3–5 ngày cho hết dư lượng chlorine hoặc thuốc sát trùng (có thể kiểm tra bằng bộ test chlorine).
- Độ kiềm đạt tối thiểu 100 mg/L. Kiềm thấp thì tảo không bền, màu nước nhanh tàn.
- Mực nước tối thiểu 1,2 m với ao đất để hạn chế tảo đáy.
- Chạy quạt nước để phân tán đều dinh dưỡng và vi sinh.

## Quy trình gây màu nước 5 ngày
**Ngày 1 – bổ sung khoáng:** tạt **TÍM MINERAL PLUS** 2–3 kg/1.000 m³ vào buổi tối để cung cấp khoáng đa lượng, vi lượng cho tảo và tôm.

**Ngày 2 – ủ men vi sinh:** ủ 1 kg **TÍM PRO-BIO 9** với 5 kg mật rỉ đường và 20 lít nước sạch, sục khí 6–8 giờ. Tạt đều khắp ao vào 8–9 giờ sáng khi có nắng. Liều dùng 1 kg cho 2.000–3.000 m³ nước.

**Ngày 3–4 – tạt lặp lại:** tiếp tục tạt men đã ủ thêm 2 ngày liên tiếp. Có thể kết hợp cám gạo ủ (2–3 kg/1.000 m³) để tăng dinh dưỡng hữu cơ cho vi sinh.

**Ngày 5 – kiểm tra:** đo độ trong, pH và kiềm. Khi màu nước đạt xanh vỏ đậu hoặc nâu nhạt, độ trong 30–40 cm, pH sáng 7,5–7,8 và chiều không quá 8,3 là có thể thả giống.

## Màu nước lên chậm: nguyên nhân và cách xử lý
- **Kiềm thấp:** bổ sung khoáng hoặc dolomite để nâng kiềm, sau đó mới gây màu lại.
- **Còn dư lượng thuốc sát trùng:** chờ thêm 1–2 ngày, thay một phần nước nếu cần.
- **Trời âm u kéo dài:** tảo thiếu ánh sáng nên lên chậm; tăng liều vi sinh và chạy quạt để tránh phân tầng.
- **Nước có nhiều phèn (ao đất mới):** bón vôi CaCO₃ 10–20 kg/1.000 m², kiểm tra pH đất trước khi lấy nước.

## Giữ màu nước bền suốt vụ
- Tạt men vi sinh định kỳ 5–7 ngày/lần để phân hủy thức ăn thừa, phân tôm, hạn chế tảo lam bùng phát.
- Không cho ăn dư: thức ăn thừa là nguồn dinh dưỡng chính làm tảo phát triển quá mức.
- Khi màu nước quá đậm (độ trong dưới 25 cm), thay 10–20% nước và giảm 10% lượng thức ăn trong 1–2 ngày.
- Sau mưa lớn, tạt khoáng và vôi để kéo kiềm lên trở lại, tránh tảo tàn đồng loạt. Xem thêm [quản lý khí độc trong mùa mưa](/vi/blog/quan-ly-khi-doc-ao-nuoi-mua-mua).

## Xử lý khi tảo tàn, nước đổi màu đột ngột
Tảo tàn khiến nước chuyển màu trắng đục hoặc vàng nhạt, bọt nhiều, oxy tụt về đêm và khí độc tăng. Cần:
1. Mở toàn bộ quạt, bổ sung **TÍM DO-OXY** nếu tôm có dấu hiệu nổi đầu.
2. Dùng **TÍM ZEO-CLEAR** để lắng xác tảo, sau đó xi phông hoặc gom chất thải.
3. Tạt **TÍM YUCCA MAX** để cắt nhanh NH₃.
4. Sau 24 giờ, gây màu lại bằng vi sinh và khoáng theo quy trình ở trên.

## Câu hỏi thường gặp
### Gây màu nước ao tôm mất bao lâu?
Thông thường 3–5 ngày nếu nước đã hết dư lượng thuốc sát trùng, kiềm đạt trên 100 mg/L và trời có nắng. Ngày âm u có thể kéo dài 6–7 ngày.

### Có nên dùng phân hóa học để gây màu nước?
Không khuyến khích. Phân vô cơ làm tảo bùng phát nhanh nhưng cũng tàn nhanh, dễ sinh tảo lam. Gây màu bằng vi sinh kết hợp khoáng cho màu nước bền và ổn định hơn.

### Màu nước xanh đậm có tốt không?
Không. Xanh đậm thường là tảo phát triển quá mức hoặc tảo lam, khiến pH dao động mạnh giữa ngày và đêm, thiếu oxy về sáng. Cần giảm thức ăn, thay nước một phần và tạt vi sinh.`,
`Good water colour is a pond’s armour: algae and beneficial bacteria absorb toxic gases, stabilise pH, shade the bottom and feed young shrimp. Clear water and very dark water are both warning signs.

## Reading water colour
| Colour | Verdict |
|---|---|
| Light green, pea green | Good — green algae and diatoms |
| Light brown | Good — diatoms, rich natural feed |
| Dark green / blue-green with scum | Bad — cyanobacteria, unstable pH |
| Dark brown, reddish | Bad — dinoflagellates, high organic load |
| Crystal clear | Bad — benthic algae and stress |

Target transparency: **30–40 cm** (Secchi disc).

## A 5-day method
1. **Day 1:** apply **TÍM MINERAL PLUS** 2–3 kg/1,000 m³ in the evening.
2. **Day 2:** activate 1 kg **TÍM PRO-BIO 9** with 5 kg molasses in 20 L water, aerate 6–8 h, spread at 8–9 am (1 kg per 2,000–3,000 m³).
3. **Days 3–4:** repeat the probiotic application.
4. **Day 5:** check transparency, pH (7.5–8.3) and alkalinity before stocking.

## When colour crashes
Run all aerators, use **TÍM DO-OXY** if shrimp surface, settle dead algae with **TÍM ZEO-CLEAR**, cut ammonia with **TÍM YUCCA MAX**, then rebuild colour after 24 hours.

## Frequently asked questions
### How long does it take to build water colour?
Usually 3–5 days once disinfectant residue is gone, alkalinity exceeds 100 mg/L and there is sunshine.

### Is chemical fertiliser a good idea?
Not recommended — it blooms fast and crashes fast. Probiotics plus minerals give a far more stable colour.`,
`良好的水色就像池塘的"盔甲"：藻类和有益菌吸收有毒气体、稳定pH、遮挡池底并为幼虾提供天然饵料。水太清或太浓都是风险信号。

## 如何判断水色
| 水色 | 评价 |
|---|---|
| 豆绿、嫩绿 | 好——绿藻、硅藻为主 |
| 浅褐色 | 好——硅藻，天然饵料丰富 |
| 深绿、蓝绿带浮膜 | 差——蓝藻，pH不稳 |
| 深褐、红褐 | 差——甲藻，有机物高 |
| 清澈见底 | 差——易长底藻，虾易应激 |

理想透明度：**30–40厘米**。

## 5天肥水法
1. **第1天：**傍晚泼洒 **TÍM MINERAL PLUS** 2–3 kg/1,000 m³。
2. **第2天：**1 kg **TÍM PRO-BIO 9** 加5 kg糖蜜和20升水，增氧活化6–8小时，上午8–9点全池泼洒。
3. **第3–4天：**重复泼洒益生菌。
4. **第5天：**检测透明度、pH和碱度后放苗。

## 倒藻处理
开足增氧机，虾浮头时使用 **TÍM DO-OXY**，用 **TÍM ZEO-CLEAR** 沉降死藻，**TÍM YUCCA MAX** 降氨氮，24小时后重新肥水。

## 常见问题
### 肥水需要多长时间？
消毒剂残留消失、碱度高于100 mg/L且有阳光时，一般3–5天。

### 可以用化肥肥水吗？
不建议。化肥起藻快、倒藻也快，益生菌加矿物质的水色更稳定。`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'cach-tang-kiem-on-dinh-ph-ao-nuoi-tom', topic: 'technique', daysAgo: 8,
    title: L('Cách tăng kiềm và ổn định pH ao nuôi tôm: nguyên nhân, liều dùng, thời điểm',
      'How to Raise Alkalinity and Stabilise pH in Shrimp Ponds',
      '如何提高虾塘碱度并稳定pH'),
    excerpt: L('Kiềm thấp, pH dao động là nguyên nhân hàng đầu khiến tôm chậm lột xác, mềm vỏ và dễ sốc. Hướng dẫn đo, tính liều và chọn đúng loại khoáng, vôi để tăng kiềm an toàn cho tôm thẻ.',
      'Low alkalinity and swinging pH are leading causes of slow moulting, soft shells and stress. How to test, calculate doses and choose the right lime or minerals.',
      '碱度低、pH波动大是虾蜕壳慢、软壳和应激的主要原因。介绍检测方法、用量计算及石灰与矿物质的选择。'),
    body: L(
`Trong các chỉ tiêu môi trường, **độ kiềm** là "bộ đệm" giữ cho pH ao nuôi không dao động. Kiềm đủ thì pH sáng – chiều chênh lệch ít, tôm lột xác đều và nhanh cứng vỏ. Kiềm thấp thì pH buổi chiều có thể vọt lên 9, sáng sớm tụt xuống 7,2, khiến tôm sốc, bỏ ăn và dễ nhiễm bệnh. Bài viết hướng dẫn **cách tăng kiềm ao nuôi tôm** đúng liều, đúng thời điểm.

## Kiềm và pH bao nhiêu là đạt?
| Chỉ tiêu | Tôm thẻ chân trắng | Tôm sú |
|---|---|---|
| Độ kiềm | 120 – 180 mg/L | 100 – 150 mg/L |
| pH buổi sáng | 7,5 – 7,8 | 7,5 – 7,8 |
| pH buổi chiều | ≤ 8,3 | ≤ 8,5 |
| Chênh lệch pH trong ngày | < 0,5 | < 0,5 |

Ao độ mặn thấp (dưới 10‰) cần giữ kiềm cao hơn, 140–180 mg/L, vì nước ngọt hóa nghèo khoáng.

## Vì sao kiềm trong ao tụt?
- **Mưa lớn:** nước mưa có tính axit và pha loãng khoáng.
- **Tôm lột xác:** tôm hấp thu canxi, bicarbonat để tạo vỏ mới; giai đoạn tôm lớn có thể làm kiềm giảm 5–10 mg/L mỗi ngày.
- **Vi sinh nitrat hóa hoạt động mạnh:** quá trình chuyển NH₃ thành NO₃ tiêu tốn kiềm.
- **Tảo phát triển quá mức:** quang hợp mạnh làm pH chiều tăng cao, kiềm carbonat bị tiêu thụ.
- **Đất phèn:** ao đất mới, đất phèn tiềm tàng giải phóng axit khi mưa.

## Chọn đúng loại vôi, khoáng
| Loại | Tác dụng chính | Khi nào dùng |
|---|---|---|
| CaCO₃ (vôi nông nghiệp) | Tăng kiềm chậm, an toàn | Định kỳ, kiềm hơi thấp |
| Dolomite CaMg(CO₃)₂ | Tăng kiềm, bổ sung Mg | Ao độ mặn thấp |
| NaHCO₃ (soda lạnh) | Tăng kiềm nhanh, ít làm tăng pH | Kiềm thấp cấp tính |
| CaO (vôi sống) | Tăng pH mạnh | Chỉ dùng cải tạo ao, không dùng khi có tôm |
| Khoáng tổng hợp | Bổ sung Ca, Mg, K, Na cân đối | Giai đoạn tôm lột xác, ao ngọt hóa |

## Cách tính liều tăng kiềm
Một quy tắc thực tế: **1 kg NaHCO₃ cho 1.000 m³ nước làm tăng khoảng 0,6 mg/L kiềm**. Ví dụ ao 4.000 m³ có kiềm 90 mg/L, muốn lên 120 mg/L (tăng 30 mg/L) cần khoảng 30 ÷ 0,6 × 4 = 200 kg NaHCO₃. Không nên tăng quá 20–30 mg/L mỗi ngày; hãy chia làm 2–3 ngày để tôm không sốc.

## Thời điểm tạt khoáng, vôi
- **Tạt vào 21–22 giờ đêm:** lúc pH thấp nhất, khoáng hòa tan tốt và tôm thường lột xác vào ban đêm.
- Tránh tạt CaCO₃, dolomite vào buổi trưa khi pH đang cao.
- Sau mưa lớn: tạt vôi CaCO₃ quanh bờ và mặt ao ngay trong lúc mưa để chặn phèn và giữ pH.
- Bổ sung **TÍM MINERAL PLUS** 2–3 kg/1.000 m³ định kỳ 5–7 ngày; khi tôm lột xác đồng loạt tăng lên 4–5 kg/1.000 m³.

## Khi pH chiều quá cao (trên 8,5)
- Giảm mật độ tảo: thay 10–20% nước, giảm thức ăn.
- Tạt mật rỉ đường 2–3 kg/1.000 m³ vào buổi sáng để vi khuẩn sử dụng CO₂ – giúp hạ pH từ từ.
- Kết hợp **TÍM PRO-BIO 9** để ổn định hệ vi sinh và cạnh tranh dinh dưỡng với tảo.

## Câu hỏi thường gặp
### Tăng kiềm ao tôm bằng gì nhanh nhất?
NaHCO₃ (soda lạnh) tăng kiềm nhanh nhất mà ít làm pH tăng vọt. Nên chia liều trong 2–3 ngày, mỗi ngày không tăng quá 20–30 mg/L.

### Vì sao tạt vôi vào ban đêm?
Ban đêm pH thấp nhất nên vôi, khoáng hòa tan tốt hơn và không làm pH tăng đột ngột. Đây cũng là lúc tôm lột xác, cần khoáng để cứng vỏ.

### Kiềm cao quá có sao không?
Kiềm trên 200 mg/L khiến vỏ tôm cứng nhanh, khó lột xác, tôm chậm lớn. Khi đó nên ngưng khoáng, thay một phần nước ngọt hoặc nước có kiềm thấp hơn.`,
`Alkalinity is the buffer that keeps pond pH from swinging. Enough alkalinity means a small morning–afternoon pH difference, even moulting and fast shell hardening.

## Targets
| Parameter | Whiteleg shrimp | Tiger shrimp |
|---|---|---|
| Alkalinity | 120 – 180 mg/L | 100 – 150 mg/L |
| Morning pH | 7.5 – 7.8 | 7.5 – 7.8 |
| Afternoon pH | ≤ 8.3 | ≤ 8.5 |

## Why alkalinity drops
Heavy rain, moulting, nitrification, algal blooms and acid-sulphate soils all consume it.

## Choosing the product
| Product | Use |
|---|---|
| CaCO₃ | Slow, safe routine increase |
| Dolomite | Adds magnesium; low-salinity ponds |
| NaHCO₃ | Fast increase with little pH rise |
| CaO | Pond preparation only |

**Rule of thumb:** 1 kg NaHCO₃ per 1,000 m³ raises alkalinity by about 0.6 mg/L. Spread the dose over 2–3 days, at most 20–30 mg/L per day.

## Timing
Apply minerals at 9–10 pm when pH is lowest and shrimp moult. Use **TÍM MINERAL PLUS** every 5–7 days, increasing the dose during mass moulting.

## Frequently asked questions
### What raises alkalinity fastest?
Sodium bicarbonate, split over 2–3 days.

### Why apply lime at night?
pH is lowest, so minerals dissolve better without spiking pH — and shrimp need them while moulting.`,
`碱度是防止池塘pH剧烈波动的"缓冲剂"。碱度充足，早晚pH差小，虾蜕壳整齐、硬壳快。

## 标准
| 指标 | 南美白对虾 | 斑节对虾 |
|---|---|---|
| 碱度 | 120 – 180 mg/L | 100 – 150 mg/L |
| 早晨pH | 7.5 – 7.8 | 7.5 – 7.8 |
| 下午pH | ≤ 8.3 | ≤ 8.5 |

## 碱度下降的原因
大雨、蜕壳、硝化作用、藻类过度繁殖及酸性土壤都会消耗碱度。

## 产品选择
| 产品 | 用途 |
|---|---|
| 碳酸钙 | 缓慢、安全的日常提升 |
| 白云石 | 补充镁，适合低盐度池 |
| 小苏打 | 快速提升碱度且pH升幅小 |
| 生石灰 | 仅用于清塘 |

**经验公式：**每1,000 m³用1 kg小苏打约提高碱度0.6 mg/L；分2–3天使用，每天提高不超过20–30 mg/L。

## 使用时间
晚上9–10点pH最低、虾蜕壳时泼洒矿物质；每5–7天使用 **TÍM MINERAL PLUS**。

## 常见问题
### 什么提高碱度最快？
小苏打，分2–3天使用。

### 为什么晚上泼石灰？
夜间pH最低，矿物质溶解好且不会使pH骤升，同时满足虾蜕壳需要。`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'cach-chon-tom-giong-the-chan-trang-chat-luong', topic: 'technique', daysAgo: 12,
    title: L('Cách chọn tôm giống thẻ chân trắng chất lượng: 8 tiêu chí và 3 phép thử tại trại',
      'Choosing Quality Whiteleg Shrimp Post-Larvae: 8 Criteria and 3 Hatchery Tests',
      '如何挑选优质南美白对虾苗：8项标准与3个现场测试'),
    excerpt: L('Con giống quyết định 50% thành bại của vụ nuôi. Bộ tiêu chí chọn tôm giống thẻ chân trắng, cách kiểm tra bằng mắt, phép thử sốc formol – sốc độ mặn và những giấy tờ bắt buộc phải xem.',
      'Seed quality decides half of a crop’s outcome. The selection criteria, visual checks, formalin and salinity stress tests, and the documents to ask for.',
      '虾苗质量决定一半的养殖成败。介绍挑选标准、目测方法、福尔马林与盐度应激测试，以及必须查看的检测文件。'),
    body: L(
`Người nuôi lâu năm thường nói "giống tốt là thắng nửa vụ". Một lô tôm giống nhiễm bệnh hoặc yếu sức có thể khiến tôm chết rải rác từ tuần thứ hai, lớn không đều và tốn gấp đôi chi phí thuốc, men. Đây là **cách chọn tôm giống thẻ chân trắng** mà kỹ sư Thủy Sản Tím hướng dẫn bà con trước mỗi vụ.

## 8 tiêu chí chọn tôm giống tốt
| Tiêu chí | Tôm giống đạt chuẩn | Dấu hiệu cần loại |
|---|---|---|
| Kích cỡ | PL10–PL12, dài 9–11 mm, đồng đều trên 90% | Lớn nhỏ không đều |
| Màu sắc | Trong, xám nhạt, thân sáng | Đỏ thân, trắng đục, đen mang |
| Đường ruột | Đầy thức ăn, rõ, liên tục đến đuôi | Ruột rỗng, đứt khúc |
| Gan tụy | To, màu nâu sẫm, rõ ràng | Nhỏ, nhợt nhạt, teo |
| Hoạt động | Bơi ngược dòng, bám thành chậu | Lờ đờ, tụ đáy |
| Phụ bộ | Râu, chân, đuôi xòe, nguyên vẹn | Cụt râu, đóng rong, dị hình |
| Phản xạ | Búng mạnh khi gõ thành chậu | Phản ứng chậm |
| Hồ sơ | Có kết quả PCR, nguồn bố mẹ rõ ràng | Không có giấy tờ |

## Giấy tờ bắt buộc phải xem
- Kết quả xét nghiệm PCR âm tính với **WSSV** (đốm trắng), **AHPND** (hoại tử gan tụy cấp), **EHP** (vi bào tử trùng) và **IHHNV**, mẫu lấy không quá 3 ngày trước khi xuất trại.
- Giấy kiểm dịch con giống của cơ quan thú y.
- Thông tin tôm bố mẹ: nguồn nhập khẩu hoặc dòng gia hóa, số thế hệ.

Nên chủ động lấy mẫu mang đến phòng xét nghiệm độc lập thay vì chỉ tin vào phiếu của trại.

## 3 phép thử nhanh ngay tại trại
**1. Sốc formol:** cho 100 con vào 1 lít nước có 100–200 ppm formol trong 30 phút. Tôm giống tốt có tỷ lệ sống trên 95%.

**2. Sốc độ mặn:** chuyển 100 con từ nước có độ mặn nuôi sang nước giảm một nửa độ mặn trong 30 phút, rồi trả lại nước cũ. Tỷ lệ sống trên 95% là đạt.

**3. Thử bơi ngược dòng:** khuấy nước trong thau theo vòng tròn. Tôm khỏe bơi ngược dòng hoặc bám thành thau; tôm yếu bị cuốn vào giữa.

## Kiểm tra trên kính hiển vi
Nếu có điều kiện, soi 20–30 con để kiểm tra gan tụy (giọt mỡ nhiều, không teo), cơ đuôi (trong, không có vùng trắng đục) và mang (không đóng rong, không ký sinh trùng).

## Lưu ý khi vận chuyển và thả giống
- Thuần độ mặn tại trại nếu chênh lệch quá 5‰ so với ao nuôi.
- Vận chuyển vào lúc mát, mật độ đóng bao phù hợp quãng đường.
- Ngâm bao trong ao 15–20 phút để cân bằng nhiệt độ; mở bao, cho nước ao vào từ từ rồi mới thả.
- Thả vào đầu hướng gió để tôm phân tán đều. Ngày đầu có thể tạt **TÍM C-1000** để tôm giảm sốc.

Sau khi thả, đọc tiếp [quy trình nuôi tôm thẻ chân trắng từ A đến Z](/vi/blog/quy-trinh-nuoi-tom-the-chan-trang-tu-a-den-z) để quản lý các giai đoạn tiếp theo.

## Câu hỏi thường gặp
### Nên thả tôm giống PL mấy?
Với ao nuôi trực tiếp nên thả PL10–PL12. Nếu có ao ương, có thể nhận PL8–PL10 và ương 20–30 ngày trước khi chuyển sang ao nuôi thương phẩm.

### Tôm giống đỏ thân có nên thả?
Không nên. Tôm đỏ thân thường do sốc nhiệt, sốc vận chuyển hoặc nhiễm khuẩn; tỷ lệ sống sau thả rất thấp.

### Có cần xét nghiệm lại tôm giống khi trại đã có phiếu PCR?
Nên làm. Tự lấy mẫu gửi phòng xét nghiệm độc lập giúp chắc chắn lô giống bạn nhận chính là lô đã được kiểm tra.`,
`Experienced farmers say "good seed wins half the crop." Weak or infected post-larvae cause scattered mortality, uneven growth and double treatment costs.

## 8 selection criteria
| Criterion | Good PL | Reject |
|---|---|---|
| Size | PL10–PL12, 9–11 mm, >90% uniform | Mixed sizes |
| Colour | Translucent, light grey | Red, milky, black gills |
| Gut | Full and continuous | Empty or broken |
| Hepatopancreas | Large, dark brown | Small, pale |
| Behaviour | Swims against current | Lethargic |
| Appendages | Intact, fanned tail | Fouled, deformed |
| Reflex | Strong flick | Slow |
| Documents | PCR results, broodstock origin | None |

## Documents
PCR-negative results for WSSV, AHPND, EHP and IHHNV sampled within 3 days of shipment, plus a veterinary quarantine certificate. Independent sampling is strongly recommended.

## 3 quick hatchery tests
1. **Formalin stress:** 100–200 ppm for 30 minutes — survival above 95%.
2. **Salinity stress:** halve salinity for 30 minutes — survival above 95%.
3. **Current test:** strong PL swim against a swirl.

## Frequently asked questions
### Which PL stage should I stock?
PL10–PL12 for direct stocking, or PL8–PL10 into a nursery for 20–30 days.

### Should I stock reddish post-larvae?
No — redness signals stress or infection and survival is poor.`,
`老养殖户常说"好苗赢一半"。弱苗或带病苗会导致零星死亡、生长不均，用药成本翻倍。

## 8项挑选标准
| 标准 | 优质苗 | 淘汰 |
|---|---|---|
| 规格 | PL10–PL12，9–11毫米，整齐度>90% | 大小不一 |
| 体色 | 透明、浅灰 | 发红、乳白、黑鳃 |
| 肠道 | 饱满连续 | 空肠、断肠 |
| 肝胰腺 | 大、深褐色 | 小、苍白 |
| 活力 | 逆水游动 | 呆滞沉底 |
| 附肢 | 完整、尾扇张开 | 附着物、畸形 |
| 反应 | 弹跳有力 | 反应慢 |
| 文件 | PCR报告、亲虾来源 | 无 |

## 检测文件
出苗前3天内采样、WSSV、AHPND、EHP和IHHNV均为阴性的PCR报告及检疫证明，建议自行送第三方复检。

## 3个现场测试
1. **福尔马林应激：**100–200 ppm浸泡30分钟，成活率>95%。
2. **盐度应激：**盐度减半30分钟，成活率>95%。
3. **逆水测试：**搅动水流，健康苗逆流游动。

## 常见问题
### 放多大的苗？
直接放养选PL10–PL12；有标粗池可放PL8–PL10标粗20–30天。

### 发红的苗能放吗？
不能，发红说明应激或感染，成活率低。`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'cach-tinh-luong-thuc-an-cho-tom-the', topic: 'technique', daysAgo: 15,
    title: L('Cách tính lượng thức ăn cho tôm thẻ theo trọng lượng: bảng tra và cách dùng sàng ăn',
      'How Much to Feed Whiteleg Shrimp: Feeding Table by Body Weight and Tray Checks',
      '南美白对虾投喂量计算：按体重投喂表与料台检查'),
    excerpt: L('Thức ăn chiếm 50–60% chi phí nuôi tôm. Bảng tỷ lệ cho ăn theo trọng lượng, cách ước tính sinh khối, kiểm tra sàng ăn và 6 trường hợp phải giảm thức ăn để hạ FCR mà tôm vẫn lớn nhanh.',
      'Feed is 50–60% of shrimp production cost. A feeding-rate table, biomass estimation, tray checks and six situations where you must cut feed to lower FCR.',
      '饲料占养虾成本的50–60%。提供按体重的投喂率表、存塘量估算、料台检查方法及6种必须减料的情况。'),
    body: L(
`Cho ăn thiếu thì tôm chậm lớn, phân đàn; cho ăn dư thì thức ăn thừa thối đáy, sinh khí độc và tảo bùng phát. Vì thức ăn chiếm tới 50–60% giá thành, **cách tính lượng thức ăn cho tôm thẻ** chính xác là kỹ năng mang lại lợi nhuận rõ rệt nhất. Bài viết hướng dẫn từ giai đoạn cho ăn "mù" đến khi tính theo sinh khối.

## Giai đoạn 1: Tháng đầu – cho ăn theo định lượng
Trong 3–4 tuần đầu, tôm còn nhỏ nên chưa kiểm tra sàng chính xác. Tham khảo: **ngày đầu khoảng 1–1,5 kg thức ăn cho 100.000 tôm PL12**, mỗi ngày tăng 0,1–0,2 kg, chia 4 cữ. Kết hợp thức ăn tự nhiên từ màu nước tốt. Luôn đối chiếu với bảng hướng dẫn của nhà sản xuất thức ăn bạn đang dùng.

## Giai đoạn 2: Từ tuần thứ 4 – tính theo sinh khối
**Sinh khối (kg) = Số tôm thả × Tỷ lệ sống ước tính × Trọng lượng trung bình (g) ÷ 1.000**

Trọng lượng trung bình lấy bằng cách chài 3–5 điểm trong ao, cân và đếm ít nhất 100 con, 7–10 ngày/lần.

| Trọng lượng tôm (g/con) | Tỷ lệ thức ăn (% sinh khối/ngày) | Số cữ/ngày | Kiểm tra sàng sau |
|---|---|---|---|
| 1 – 3 | 8 – 6% | 4 | 2,5 giờ |
| 3 – 5 | 6 – 5% | 4 | 2,5 giờ |
| 5 – 10 | 5 – 4% | 4 – 5 | 2 giờ |
| 10 – 15 | 4 – 3% | 4 – 5 | 1,5 – 2 giờ |
| 15 – 20 | 3 – 2,5% | 5 | 1,5 giờ |
| Trên 20 | 2,5 – 2% | 5 | 1,5 giờ |

**Ví dụ:** ao thả 200.000 con, tỷ lệ sống ước 85%, tôm đạt 10 g/con → sinh khối = 200.000 × 0,85 × 10 ÷ 1.000 = 1.700 kg. Với tỷ lệ 3,5%, lượng thức ăn ≈ 60 kg/ngày, chia 5 cữ ≈ 12 kg/cữ.

## Cách dùng sàng ăn để điều chỉnh
- Mỗi ao 2.000–3.000 m² đặt 3–4 sàng, cách bờ 2–3 m, tránh ngay dưới quạt.
- Cho vào sàng khoảng 1–2% lượng thức ăn của cữ.
- Kiểm tra sau thời gian trong bảng:

| Kết quả sàng | Điều chỉnh cữ sau |
|---|---|
| Sạch thức ăn, tôm còn nhiều trong sàng | Tăng 5% |
| Còn dưới 10% | Giữ nguyên |
| Còn 10–25% | Giảm 10% |
| Còn trên 25% | Giảm 20–30%, kiểm tra sức khỏe tôm |

## 6 trường hợp phải giảm thức ăn
1. Tôm lột xác đồng loạt (giảm 20–30% trong 1–2 ngày).
2. Trời mưa lớn, nhiệt độ nước giảm dưới 26 °C.
3. Nắng nóng, nhiệt độ nước trên 33 °C vào buổi trưa.
4. Oxy hòa tan sáng sớm dưới 4 mg/L.
5. Ngày tạt hóa chất sát trùng hoặc thay nhiều nước.
6. Tôm có dấu hiệu bệnh: gan tụy nhạt, ruột rỗng, phân trắng.

## Mẹo giảm hệ số FCR
- Trộn **TÍM GUT-ZYME** 3–5 g/kg thức ăn giúp tôm hấp thu tốt hơn, phân chắc và dài.
- Bổ sung **TÍM LIVER GUARD** 3 ngày/tuần để gan tụy chuyển hóa dinh dưỡng hiệu quả.
- Áo thức ăn bằng chất kết dính, để khô 20–30 phút trước khi cho ăn để hạn chế thất thoát vào nước.
- Cho ăn đúng giờ, rải đều theo chiều gió, chạy quạt nhẹ trong lúc cho ăn.

Đọc thêm [quy trình nuôi tôm thẻ chân trắng từ A đến Z](/vi/blog/quy-trinh-nuoi-tom-the-chan-trang-tu-a-den-z) để quản lý thức ăn đồng bộ với môi trường nước.

## Câu hỏi thường gặp
### Tôm thẻ ăn mấy cữ một ngày?
Tháng đầu 4 cữ/ngày; từ tháng thứ hai 4–5 cữ, rải đều từ 6 giờ sáng đến 22 giờ. Ao siêu thâm canh có máy cho ăn tự động có thể chia 8–12 lần/ngày.

### Có nên cho tôm ăn ban đêm?
Có thể cho cữ 21–22 giờ khi oxy đủ trên 5 mg/L. Nếu oxy về đêm thấp, nên bỏ cữ khuya để tránh tôm thiếu oxy.

### Hệ số FCR tính như thế nào?
FCR = Tổng lượng thức ăn đã dùng ÷ Tổng sản lượng tôm thu hoạch. Ví dụ dùng 6.500 kg thức ăn thu được 5.000 kg tôm thì FCR = 1,3.`,
`Underfeeding slows growth; overfeeding rots the bottom and fuels toxic gases and blooms. Since feed is 50–60% of cost, accurate feeding is the biggest profit lever.

## Month one: fixed ration
As a reference, start with about **1–1.5 kg per 100,000 PL12 per day**, adding 0.1–0.2 kg daily, in 4 meals. Always cross-check your feed supplier’s chart.

## From week four: feed by biomass
**Biomass (kg) = shrimp stocked × estimated survival × mean weight (g) ÷ 1,000**

| Body weight (g) | Daily ration (% biomass) | Meals/day | Check trays after |
|---|---|---|---|
| 1 – 3 | 8 – 6% | 4 | 2.5 h |
| 3 – 5 | 6 – 5% | 4 | 2.5 h |
| 5 – 10 | 5 – 4% | 4 – 5 | 2 h |
| 10 – 15 | 4 – 3% | 4 – 5 | 1.5 – 2 h |
| 15 – 20 | 3 – 2.5% | 5 | 1.5 h |
| > 20 | 2.5 – 2% | 5 | 1.5 h |

Example: 200,000 stocked × 85% × 10 g = 1,700 kg; at 3.5% that is about 60 kg/day.

## Tray rules
Empty tray: +5%. Under 10% left: keep. 10–25% left: −10%. Over 25% left: −20–30% and check health.

## Frequently asked questions
### How many meals a day?
Four in the first month, then 4–5 from 6 am to 10 pm; automatic feeders allow 8–12.

### How is FCR calculated?
Total feed used ÷ total harvest. 6,500 kg feed for 5,000 kg shrimp gives an FCR of 1.3.`,
`投喂不足虾长得慢、规格不齐；投喂过量残饵败底、产生有毒气体并引发藻类暴发。饲料占成本50–60%，精准投喂是最直接的盈利手段。

## 第一个月：定量投喂
参考：**每10万尾PL12首日约1–1.5 kg**，每天增加0.1–0.2 kg，分4餐。请同时参照饲料厂家的投喂表。

## 第四周起：按存塘量投喂
**存塘量(kg) = 放苗数 × 估计成活率 × 平均体重(g) ÷ 1,000**

| 体重(g/尾) | 日投喂率(%存塘量) | 每日餐数 | 查料台时间 |
|---|---|---|---|
| 1 – 3 | 8 – 6% | 4 | 2.5小时 |
| 3 – 5 | 6 – 5% | 4 | 2.5小时 |
| 5 – 10 | 5 – 4% | 4 – 5 | 2小时 |
| 10 – 15 | 4 – 3% | 4 – 5 | 1.5 – 2小时 |
| 15 – 20 | 3 – 2.5% | 5 | 1.5小时 |
| > 20 | 2.5 – 2% | 5 | 1.5小时 |

## 料台规则
吃光：+5%；剩余<10%：不变；剩余10–25%：−10%；剩余>25%：−20–30%并检查虾体健康。

## 常见问题
### 一天喂几次？
第一个月4次，之后6点至22点之间4–5次；自动投饵机可分8–12次。

### 饲料系数怎么算？
总投饲量 ÷ 总收获量。6,500 kg饲料收获5,000 kg虾，饲料系数为1.3。`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'nuoi-tom-mua-nang-nong-giam-nhiet-giu-oxy', topic: 'technique', daysAgo: 20,
    title: L('Nuôi tôm mùa nắng nóng: 9 cách giảm nhiệt độ nước, giữ oxy và chống sốc cho tôm',
      'Shrimp Farming in Hot Weather: 9 Ways to Cool Ponds, Keep Oxygen Up and Prevent Stress',
      '高温季节养虾：降温、增氧与防应激的9个方法'),
    excerpt: L('Khi nhiệt độ nước vượt 33 °C, tôm giảm ăn, oxy tụt và tảo lam bùng phát. 9 biện pháp kỹ thuật giúp ao tôm vượt qua mùa nắng nóng an toàn, từ mực nước, lưới che đến lịch cho ăn.',
      'Above 33 °C shrimp eat less, oxygen falls and cyanobacteria bloom. Nine practical measures — water depth, shade nets, feeding schedule and more.',
      '水温超过33 °C时，虾摄食下降、溶氧降低、蓝藻暴发。从水位、遮阳网到投喂时间的9项实用措施。'),
    body: L(
`Mùa nắng nóng (tháng 3 đến tháng 6 ở Nam Bộ) là giai đoạn ao tôm chịu áp lực lớn: nhiệt độ nước buổi trưa có thể vượt 34 °C, pH chiều tăng cao, oxy hòa tan giảm vì nước nóng giữ oxy kém hơn, trong khi tôm lại tiêu thụ oxy nhiều hơn. Dưới đây là **9 cách nuôi tôm mùa nắng nóng** an toàn.

## Nhiệt độ ảnh hưởng tôm thế nào?
| Nhiệt độ nước | Phản ứng của tôm thẻ |
|---|---|
| 28 – 32 °C | Ăn mạnh, lớn nhanh nhất |
| 33 – 34 °C | Giảm ăn, tăng tiêu thụ oxy |
| Trên 35 °C | Bỏ ăn, dễ sốc, đỏ thân, có thể chết |

Ngoài ra, nhiệt độ cao làm NH₃ chiếm tỷ lệ độc lớn hơn và vi khuẩn *Vibrio* phát triển nhanh.

## 1. Nâng mực nước
Giữ mực nước ao đất 1,4–1,6 m để tầng đáy mát hơn và ổn định nhiệt. Ao bạt nên giữ tối thiểu 1,2 m.

## 2. Che lưới cho ao bạt, ao ương
Lưới che nắng 30–50% giúp giảm 2–3 °C nhiệt độ nước buổi trưa. Không che kín toàn bộ ao đất vì tảo cần ánh sáng.

## 3. Tăng cường quạt và oxy đáy
Chạy quạt liên tục từ 22 giờ đến 7 giờ sáng và vào giữa trưa để phá phân tầng nhiệt. Ao mật độ cao nên có hệ thống oxy đáy. Chuẩn bị sẵn **TÍM DO-OXY** cấp cứu khi cúp điện.

## 4. Đổi lịch cho ăn
Dồn thức ăn vào sáng sớm (6–7 giờ) và chiều mát (17–18 giờ), giảm 20–30% cữ trưa khi nhiệt độ nước trên 33 °C.

## 5. Kiểm soát tảo, tránh tảo lam
Nắng gắt dễ khiến tảo lam bùng phát. Tạt **TÍM PRO-BIO 9** định kỳ để vi sinh cạnh tranh dinh dưỡng với tảo; giữ độ trong 30–40 cm. Chi tiết tại bài [xử lý tảo lam, tảo đáy trong ao tôm](/vi/blog/xu-ly-tao-lam-tao-day-ao-nuoi-tom).

## 6. Giữ pH buổi chiều không quá 8,5
Tạt mật rỉ đường vào buổi sáng, bổ sung khoáng vào buổi tối. Không bón vôi vào buổi trưa.

## 7. Bổ sung vitamin C và khoáng
Trộn **TÍM C-1000** 3–5 g/kg thức ăn trong những ngày nắng nóng kéo dài để tăng sức chống chịu; tạt **TÍM MINERAL PLUS** vào buổi tối vì tôm lột xác nhiều khi trời nóng.

## 8. Hạn chế thay nước giữa trưa
Nếu cần cấp nước, chỉ cấp vào ban đêm hoặc sáng sớm, nước đã qua ao lắng và có nhiệt độ gần với ao nuôi.

## 9. Theo dõi sát chỉ tiêu
Đo nhiệt độ, oxy lúc 5 giờ sáng và 14 giờ; quan sát tôm dạt bờ, nổi đầu. Ghi nhật ký để nhận biết xu hướng xấu sớm.

## Câu hỏi thường gặp
### Nhiệt độ nước bao nhiêu thì tôm thẻ bỏ ăn?
Tôm thẻ bắt đầu giảm ăn khi nước trên 33 °C và có thể bỏ ăn hoàn toàn khi vượt 35 °C, nhất là vào giữa trưa.

### Có nên che lưới cho ao đất?
Chỉ nên che một phần hoặc che khu vực ương. Che kín ao đất làm tảo thiếu ánh sáng, màu nước dễ tàn.

### Mùa nắng có nên giảm mật độ thả?
Nên giảm 10–20% mật độ so với mùa thuận nếu ao không có oxy đáy và hệ thống quạt dư công suất.`,
`From March to June, midday water temperature in southern Vietnam can exceed 34 °C: pH climbs, warm water holds less oxygen and shrimp consume more of it.

## How temperature affects whiteleg shrimp
| Water temperature | Response |
|---|---|
| 28 – 32 °C | Best feeding and growth |
| 33 – 34 °C | Feeding drops, oxygen demand rises |
| Above 35 °C | Stops feeding, stress, mortality risk |

## Nine measures
1. Keep earthen ponds 1.4–1.6 m deep.
2. Shade lined ponds and nurseries with 30–50% nets.
3. Run aerators through the night and at midday; keep **TÍM DO-OXY** for power cuts.
4. Feed early morning and late afternoon; cut the midday meal by 20–30%.
5. Apply **TÍM PRO-BIO 9** to keep cyanobacteria in check.
6. Keep afternoon pH below 8.5.
7. Add **TÍM C-1000** to feed and **TÍM MINERAL PLUS** in the evening.
8. Exchange water only at night or early morning.
9. Log temperature and oxygen at 5 am and 2 pm.

## Frequently asked questions
### At what temperature do shrimp stop eating?
Feeding falls above 33 °C and may stop above 35 °C.

### Should I shade earthen ponds?
Only partially — algae need light.`,
`越南南部3月至6月正午水温可超过34 °C：pH升高，热水溶氧低，而虾的耗氧量却增加。

## 水温对南美白对虾的影响
| 水温 | 反应 |
|---|---|
| 28 – 32 °C | 摄食、生长最佳 |
| 33 – 34 °C | 摄食下降、耗氧增加 |
| 35 °C以上 | 停食、应激、可能死亡 |

## 9项措施
1. 土池水位保持1.4–1.6米。
2. 铺膜池和标粗池使用30–50%遮阳网。
3. 夜间和正午开足增氧机，备好 **TÍM DO-OXY** 应对停电。
4. 清晨和傍晚投喂，中午减料20–30%。
5. 泼洒 **TÍM PRO-BIO 9** 控制蓝藻。
6. 下午pH控制在8.5以下。
7. 饲料添加 **TÍM C-1000**，傍晚泼洒 **TÍM MINERAL PLUS**。
8. 只在夜间或清晨换水。
9. 每天5点和14点记录水温和溶氧。

## 常见问题
### 水温多少虾会停食？
33 °C以上摄食下降，超过35 °C可能完全停食。

### 土池需要遮阳吗？
只宜局部遮阳，藻类需要光照。`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'tom-mem-vo-cham-lot-xac-nguyen-nhan-cach-xu-ly', topic: 'disease', daysAgo: 22,
    title: L('Tôm mềm vỏ, chậm lột xác: nguyên nhân và cách xử lý dứt điểm',
      'Soft-Shell and Slow-Moulting Shrimp: Causes and How to Fix Them',
      '虾软壳与蜕壳慢：原因与彻底解决方法'),
    excerpt: L('Tôm mềm vỏ kéo dài làm giảm giá bán, dễ bị đồng loại ăn thịt và nhiễm khuẩn. Phân tích 5 nguyên nhân chính, cách cân bằng tỷ lệ Ca – Mg – K và phác đồ khoáng giúp tôm cứng vỏ sau 2–3 ngày.',
      'Chronic soft shells lower prices and invite cannibalism and infection. Five main causes, how to balance Ca–Mg–K and a mineral protocol that hardens shells in 2–3 days.',
      '长期软壳会降低售价、引发自相残杀和感染。分析5大原因、钙镁钾比例平衡及2–3天硬壳的矿物质方案。'),
    body: L(
`Lột xác là quá trình tự nhiên giúp tôm lớn lên. Bình thường, tôm thẻ cứng vỏ trở lại sau 1–2 ngày. Nếu sau 3 ngày vỏ vẫn mềm, nhăn, bóp thấy lõm, đó là dấu hiệu **tôm mềm vỏ**. Tình trạng này không lây lan nhưng khiến tôm yếu, dễ bị ăn thịt, nhiễm khuẩn và giảm giá trị khi thu hoạch. Xem thêm mô tả bệnh trong [thư viện bệnh: tôm mềm vỏ](/vi/diseases/mem-vo).

## Dấu hiệu nhận biết
- Vỏ mỏng, mềm, nhăn nheo; dùng tay bóp nhẹ thấy lõm, không đàn hồi.
- Tôm lột xác không đều, nhiều con kẹt vỏ, cong thân.
- Tôm yếu, bơi lờ đờ, giảm ăn; tỷ lệ hao hụt tăng sau mỗi đợt lột.

## 5 nguyên nhân chính
**1. Thiếu khoáng và kiềm thấp.** Tôm cần canxi, magie, kali và bicarbonat để tạo vỏ mới. Ao có kiềm dưới 100 mg/L hoặc độ mặn thấp thường thiếu khoáng.

**2. Mất cân bằng tỷ lệ khoáng.** Trong nước biển, tỷ lệ Mg:Ca khoảng 3:1 và Na:K khoảng 28:1. Ao ngọt hóa thường thiếu Mg và K nghiêm trọng dù Ca đủ.

**3. pH thấp kéo dài.** pH dưới 7,5 làm khoáng khó kết tủa vào vỏ.

**4. Dinh dưỡng kém.** Thức ăn thiếu khoáng, vitamin C, D3 hoặc tôm ăn không đủ do bệnh đường ruột.

**5. Gan tụy suy yếu.** Gan tụy là nơi dự trữ và chuyển hóa khoáng; tôm bị bệnh gan khó cứng vỏ dù nước đủ khoáng.

## Phác đồ xử lý 3 ngày
| Thời điểm | Việc cần làm |
|---|---|
| Ngày 1 – tối | Tạt **TÍM MINERAL PLUS** 4–5 kg/1.000 m³; đo kiềm, nâng lên 120–150 mg/L nếu thấp |
| Ngày 1 – 3 | Trộn khoáng hữu cơ và **TÍM C-1000** 3–5 g/kg vào thức ăn, giảm 20% lượng ăn |
| Ngày 2 – sáng | Tạt **TÍM PRO-BIO 9** để ổn định môi trường, hạn chế khí độc |
| Ngày 2 – 3 | Bổ sung **TÍM LIVER GUARD** 10 ml/kg thức ăn để phục hồi gan tụy |
| Ngày 3 | Kiểm tra vỏ tôm; nếu chưa cứng, lặp lại khoáng tối và kiểm tra tỷ lệ Mg, K |

Lưu ý: không thay nước nhiều trong thời gian tôm lột xác vì làm biến động khoáng và pH. Xem cách nâng kiềm đúng liều tại bài [cách tăng kiềm và ổn định pH ao nuôi tôm](/vi/blog/cach-tang-kiem-on-dinh-ph-ao-nuoi-tom).

## Phòng tôm mềm vỏ ngay từ đầu vụ
- Duy trì kiềm 120–180 mg/L, kiểm tra 2 lần/tuần.
- Bổ sung khoáng định kỳ 5–7 ngày vào buổi tối, tăng liều vào ngày trăng tròn, trăng non (thời điểm tôm lột xác nhiều).
- Ao độ mặn dưới 5‰ nên kiểm tra định kỳ hàm lượng Mg, K.
- Giữ gan tụy và đường ruột khỏe bằng men tiêu hóa, thảo dược.

## Câu hỏi thường gặp
### Tôm lột xác bao lâu thì cứng vỏ?
Tôm thẻ khỏe mạnh cứng vỏ sau 1–2 ngày. Quá 3 ngày vỏ vẫn mềm là tôm đang thiếu khoáng hoặc có vấn đề về gan tụy.

### Tạt khoáng vào lúc nào tốt nhất?
Từ 21 đến 22 giờ, khi pH thấp và tôm bắt đầu lột xác nhiều.

### Tôm mềm vỏ có lây không?
Không lây vì không do mầm bệnh trực tiếp, nhưng tôm mềm vỏ dễ bị vi khuẩn tấn công và bị đồng loại ăn, nên cần xử lý sớm.`,
`Shrimp normally harden within 1–2 days after moulting. Shells still soft after 3 days mean a problem. It is not contagious, but weak shrimp invite cannibalism and infection.

## Five main causes
1. **Low minerals and alkalinity** (below 100 mg/L).
2. **Unbalanced ratios** — seawater has Mg:Ca ≈ 3:1 and Na:K ≈ 28:1; low-salinity ponds lack Mg and K.
3. **Persistently low pH** (below 7.5).
4. **Poor nutrition** — minerals, vitamin C and D3.
5. **Weak hepatopancreas**, which stores and processes minerals.

## A 3-day protocol
| When | Action |
|---|---|
| Day 1 evening | **TÍM MINERAL PLUS** 4–5 kg/1,000 m³; raise alkalinity to 120–150 mg/L |
| Days 1–3 | Organic minerals and **TÍM C-1000** in feed; cut feed by 20% |
| Day 2 morning | **TÍM PRO-BIO 9** to stabilise water |
| Days 2–3 | **TÍM LIVER GUARD** 10 ml/kg feed |

Avoid large water exchanges during moulting.

## Frequently asked questions
### How long until the shell hardens?
1–2 days in healthy shrimp; longer suggests mineral or liver problems.

### When should minerals be applied?
Between 9 and 10 pm.`,
`健康虾蜕壳后1–2天即可硬壳，3天后仍软说明存在问题。软壳本身不传染，但弱虾易被同类残食和感染。

## 五大原因
1. **矿物质与碱度不足**（低于100 mg/L）。
2. **比例失衡**——海水中镁钙比约3:1、钠钾比约28:1，低盐度池塘常缺镁和钾。
3. **pH长期偏低**（低于7.5）。
4. **营养不足**——矿物质、维生素C和D3。
5. **肝胰腺虚弱**，影响矿物质储存与代谢。

## 3天方案
| 时间 | 措施 |
|---|---|
| 第1天晚上 | **TÍM MINERAL PLUS** 4–5 kg/1,000 m³，碱度提升至120–150 mg/L |
| 第1–3天 | 饲料添加有机矿物质和 **TÍM C-1000**，减料20% |
| 第2天上午 | 泼洒 **TÍM PRO-BIO 9** 稳定水质 |
| 第2–3天 | **TÍM LIVER GUARD** 10 ml/kg饲料 |

蜕壳期间避免大量换水。

## 常见问题
### 蜕壳后多久硬壳？
健康虾1–2天，更长说明缺矿或肝脏有问题。

### 什么时候泼矿物质？
晚上9–10点。`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: '6-benh-thuong-gap-tren-tom-the-va-cach-phong', topic: 'disease', daysAgo: 28,
    title: L('6 bệnh thường gặp trên tôm thẻ chân trắng: dấu hiệu nhận biết và cách phòng',
      '6 Common Whiteleg Shrimp Diseases: Signs and Prevention',
      '南美白对虾6种常见病：症状识别与预防'),
    excerpt: L('Hoại tử gan tụy, đốm trắng, phân trắng, vi bào tử trùng EHP, đầu vàng và mềm vỏ — cách nhận biết sớm từng bệnh trên tôm thẻ, mức độ nguy hiểm và biện pháp phòng bệnh không dùng kháng sinh.',
      'AHPND, white spot, white feces, EHP, yellow head and soft shell — early signs, severity and antibiotic-free prevention for each.',
      '急性肝胰腺坏死、白斑、白便、EHP、黄头病和软壳——各病早期症状、危害程度及无抗生素预防措施。'),
    body: L(
`Phần lớn thiệt hại trong nghề nuôi tôm đến từ một nhóm nhỏ bệnh quen thuộc. Nhận biết sớm giúp bạn khoanh vùng, xử lý môi trường kịp thời và tránh mất trắng. Dưới đây là **6 bệnh thường gặp trên tôm thẻ chân trắng**, kèm liên kết tới thư viện bệnh chi tiết của Thủy Sản Tím.

> Lưu ý: chẩn đoán chính xác cần xét nghiệm PCR hoặc mô bệnh học. Thông tin dưới đây giúp nhận biết sớm, không thay thế chẩn đoán của phòng thí nghiệm.

## Tổng quan 6 bệnh
| Bệnh | Tác nhân | Giai đoạn hay gặp | Mức độ |
|---|---|---|---|
| Hoại tử gan tụy cấp (AHPND/EMS) | Vi khuẩn *Vibrio parahaemolyticus* mang độc tố | 10–45 ngày sau thả | Rất nguy hiểm |
| Đốm trắng (WSSV) | Virus | Mọi giai đoạn, nhất là khi thời tiết thay đổi | Rất nguy hiểm |
| Phân trắng (WFD) | *Vibrio*, nấm, ký sinh trùng đường ruột | Từ ngày 30 trở đi | Trung bình |
| Vi bào tử trùng (EHP) | Ký sinh trùng *Enterocytozoon hepatopenaei* | Suốt vụ | Trung bình, làm còi |
| Đầu vàng (YHV) | Virus | 50–70 ngày | Nguy hiểm |
| Mềm vỏ | Thiếu khoáng, môi trường | Sau lột xác | Thấp, gây hao hụt |

## 1. Hoại tử gan tụy cấp (AHPND)
Tôm bỏ ăn đột ngột, gan tụy nhợt nhạt, teo nhỏ, ruột rỗng; tôm chết rải rác rồi tăng nhanh trong vài ngày. Phòng bằng con giống sạch bệnh, kiểm soát mật độ *Vibrio* trong nước, men vi sinh định kỳ và bảo vệ gan tụy. Chi tiết: [bệnh hoại tử gan tụy cấp](/vi/diseases/hoai-tu-gan-tuy-cap-ahpnd).

## 2. Đốm trắng (WSSV)
Xuất hiện đốm trắng tròn dưới vỏ đầu ngực, thân tôm có thể chuyển hồng; tôm giảm ăn, dạt bờ và chết hàng loạt trong 3–10 ngày. Chưa có thuốc đặc trị, phòng là chính: giống PCR âm tính, diệt giáp xác mang mầm bệnh, hạn chế sốc môi trường. Chi tiết: [bệnh đốm trắng](/vi/diseases/dom-trang-wssv).

## 3. Phân trắng
Phân trắng nổi trên mặt nước, gom thành váng ở góc ao; ruột tôm trắng, đứt khúc. Phòng bằng cách không cho ăn dư, giữ đáy sạch, trộn men tiêu hóa **TÍM GUT-ZYME** và thảo dược **TÍM HERBA-GUT** vào thức ăn. Chi tiết: [bệnh phân trắng](/vi/diseases/phan-trang-wfd).

## 4. Vi bào tử trùng EHP
Tôm chậm lớn, phân đàn mạnh dù vẫn ăn, có thể kèm phân trắng. EHP không gây chết ồ ạt nhưng làm tăng FCR và kéo dài thời gian nuôi. Phòng bằng giống sạch, cải tạo đáy ao kỹ (vôi CaO liều cao với ao đất từng nhiễm). Chi tiết: [vi bào tử trùng EHP](/vi/diseases/vi-bao-tu-trung-ehp).

## 5. Đầu vàng (YHV)
Phần đầu ngực chuyển vàng, mang nhợt nhạt; tôm ăn mạnh bất thường rồi bỏ ăn đột ngột và chết nhanh. Phòng tương tự bệnh đốm trắng.

## 6. Mềm vỏ
Vỏ mềm, nhăn kéo dài sau lột xác do thiếu khoáng, kiềm thấp. Xem hướng dẫn chi tiết: [tôm mềm vỏ, chậm lột xác](/vi/blog/tom-mem-vo-cham-lot-xac-nguyen-nhan-cach-xu-ly).

## Nguyên tắc phòng bệnh không kháng sinh
1. **Con giống sạch bệnh:** xét nghiệm PCR độc lập trước khi thả.
2. **Ao lắng và diệt khuẩn nước cấp:** dùng **TÍM IODINE 90** hoặc chlorine theo hướng dẫn.
3. **Men vi sinh định kỳ:** **TÍM PRO-BIO 9** giúp vi khuẩn có lợi lấn át *Vibrio*.
4. **Tăng sức đề kháng:** **TÍM C-1000**, **TÍM LIVER GUARD** trộn thức ăn theo lịch.
5. **Ổn định môi trường:** hạn chế biến động pH, kiềm, nhiệt độ – nguyên nhân khởi phát của hầu hết dịch bệnh.

Tuyệt đối không dùng kháng sinh cấm, không dùng thuốc không rõ nguồn gốc. Tôm có dư lượng kháng sinh sẽ bị trả về, ảnh hưởng uy tín cả vùng nuôi.

## Câu hỏi thường gặp
### Bệnh nào nguy hiểm nhất trên tôm thẻ?
Hoại tử gan tụy cấp (AHPND) và đốm trắng (WSSV) gây thiệt hại lớn nhất vì có thể làm tôm chết hàng loạt chỉ trong vài ngày.

### Tôm bị đốm trắng có chữa được không?
Hiện chưa có thuốc đặc trị virus đốm trắng. Khi phát hiện cần báo cơ quan thú y, xử lý theo hướng dẫn và tập trung phòng bệnh cho vụ sau.

### Làm sao phân biệt phân trắng và EHP?
Phân trắng thường xuất hiện đột ngột, có váng phân nổi; EHP biểu hiện chủ yếu là tôm chậm lớn, phân đàn. Cách chắc chắn nhất là xét nghiệm PCR mẫu gan tụy.`,
`Most shrimp losses come from a short list of familiar diseases. Early recognition lets you act on water quality in time.

> Accurate diagnosis needs PCR or histology; these signs help with early detection only.

| Disease | Agent | Typical timing | Severity |
|---|---|---|---|
| AHPND/EMS | Toxin-carrying *Vibrio parahaemolyticus* | Days 10–45 | Very high |
| White spot (WSSV) | Virus | Any stage, weather changes | Very high |
| White feces | *Vibrio*, fungi, gut parasites | From day 30 | Medium |
| EHP | Microsporidian parasite | Whole crop | Medium, stunting |
| Yellow head | Virus | Days 50–70 | High |
| Soft shell | Minerals, environment | After moulting | Low |

## Prevention without antibiotics
1. PCR-negative seed, independently tested.
2. Settle and disinfect intake water, e.g. with **TÍM IODINE 90**.
3. Regular probiotics such as **TÍM PRO-BIO 9** to outcompete *Vibrio*.
4. Immune support with **TÍM C-1000** and **TÍM LIVER GUARD**.
5. Stable pH, alkalinity and temperature.

See the [disease library](/en/diseases) for details on each condition.

## Frequently asked questions
### Which disease is most dangerous?
AHPND and white spot, which can wipe out a pond within days.

### Can white spot be cured?
There is no specific treatment; report to veterinary authorities and focus on prevention.`,
`养虾损失大多来自少数几种常见病，及早识别才能及时处理水质。

> 准确诊断需PCR或组织病理检测，以下症状仅用于早期识别。

| 病害 | 病原 | 常见时间 | 危害 |
|---|---|---|---|
| 急性肝胰腺坏死 | 携毒副溶血弧菌 | 放苗后10–45天 | 极高 |
| 白斑病 | 病毒 | 任何阶段，天气变化时 | 极高 |
| 白便病 | 弧菌、真菌、肠道寄生虫 | 30天后 | 中等 |
| EHP | 微孢子虫 | 全程 | 中等，生长迟缓 |
| 黄头病 | 病毒 | 50–70天 | 高 |
| 软壳 | 矿物质、环境 | 蜕壳后 | 低 |

## 无抗生素预防
1. 经第三方检测的PCR阴性虾苗。
2. 进水沉淀消毒，如 **TÍM IODINE 90**。
3. 定期使用 **TÍM PRO-BIO 9** 等益生菌抑制弧菌。
4. 用 **TÍM C-1000** 和 **TÍM LIVER GUARD** 增强免疫。
5. 保持pH、碱度和水温稳定。

各病详情见[病害图鉴](/zh/diseases)。

## 常见问题
### 哪种病最危险？
急性肝胰腺坏死和白斑病，几天内即可造成全池死亡。

### 白斑病能治吗？
目前无特效药，应上报兽医部门并重点做好预防。`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'xu-ly-tao-lam-tao-day-ao-nuoi-tom', topic: 'technique', daysAgo: 30,
    title: L('Cách xử lý tảo lam, tảo đáy trong ao nuôi tôm an toàn, không gây sốc',
      'Controlling Blue-Green Algae and Benthic Algae in Shrimp Ponds Safely',
      '如何安全处理虾塘蓝藻和底藻'),
    excerpt: L('Tảo lam tiết độc tố, làm pH dao động và gây thiếu oxy về đêm; tảo đáy làm thối đáy và che chỗ ở của tôm. Cách nhận biết, xử lý từng bước và ngăn tảo tái phát bằng vi sinh.',
      'Cyanobacteria release toxins and destabilise pH and oxygen; benthic algae rot the bottom. How to recognise them, treat step by step and prevent regrowth with probiotics.',
      '蓝藻会释放毒素并造成pH和溶氧波动，底藻会导致败底。介绍识别方法、分步处理及用益生菌防止复发。'),
    body: L(
`Tảo là "con dao hai lưỡi" trong ao tôm. Mật độ vừa phải giúp ổn định môi trường, nhưng khi tảo lam (vi khuẩn lam) hoặc tảo đáy phát triển quá mức, ao nuôi trở nên bất ổn. **Xử lý tảo lam, tảo đáy** cần đúng thứ tự để không làm tảo tàn đồng loạt và gây sốc cho tôm.

## Nhận biết tảo lam và tảo đáy
| Đặc điểm | Tảo lam | Tảo đáy |
|---|---|---|
| Màu nước | Xanh đậm, xanh lam, có váng như sơn | Nước trong, đáy có thảm rêu |
| Vị trí | Nổi trên mặt, tụ cuối gió | Bám đáy, bờ ao, bạt |
| Mùi | Tanh, hôi | Hôi bùn khi tảo chết |
| Nguy cơ | Độc tố, pH dao động, thiếu oxy về đêm | Thối đáy, khí độc H₂S, tôm khó lột |

## Vì sao tảo lam bùng phát?
- Thức ăn dư, phân tôm tích tụ làm dư đạm và lân (phospho).
- Nắng gắt kéo dài, nước tĩnh, ít quạt.
- pH cao, kiềm thấp, tỷ lệ N:P thấp.
- Ít vi sinh có lợi cạnh tranh dinh dưỡng.

## Quy trình xử lý tảo lam 4 bước
**Bước 1 – Giảm dinh dưỡng:** giảm 20–30% thức ăn trong 2–3 ngày, xi phông đáy (ao bạt) hoặc gom chất thải.

**Bước 2 – Vớt váng, thay nước:** vớt váng tảo cuối gió, thay 15–20% nước nếu có nguồn nước sạch.

**Bước 3 – Cắt tảo có kiểm soát:** dùng **TÍM BKC 80** liều thấp 1 lít/4.000–5.000 m³ vào buổi sáng có nắng, mở quạt liên tục. Không cắt tảo quá mạnh một lần vì xác tảo phân hủy sẽ làm tụt oxy và tăng khí độc.

**Bước 4 – Phục hồi vi sinh:** sau 24–48 giờ, tạt **TÍM PRO-BIO 9** liên tục 2–3 ngày để vi khuẩn có lợi chiếm chỗ, kết hợp **TÍM ZEO-CLEAR** lắng xác tảo và **TÍM YUCCA MAX** hấp thu NH₃. Sau đó gây lại màu nước tảo khuê, tảo lục theo [hướng dẫn gây màu nước](/vi/blog/cach-gay-mau-nuoc-ao-nuoi-tom).

## Xử lý tảo đáy
- Nâng mực nước và gây màu nước để che ánh sáng xuống đáy.
- Ao bạt: dùng chổi hoặc xi phông kéo tảo, tạt vi sinh xử lý đáy.
- Ao đất: rải **TÍM ZEO-CLEAR** 20–30 kg/1.000 m² ở khu vực tảo chết, sau đó tạt vi sinh.
- Không dùng hóa chất diệt tảo liều cao khi đang có tôm lớn.

## Ngăn tảo tái phát
- Cho ăn đúng nhu cầu, kiểm tra sàng ăn từng cữ ([bảng cho ăn theo trọng lượng](/vi/blog/cach-tinh-luong-thuc-an-cho-tom-the)).
- Tạt vi sinh định kỳ 5–7 ngày/lần.
- Bổ sung mật rỉ đường để cân bằng tỷ lệ C:N, giúp vi khuẩn sử dụng đạm thay vì tảo.
- Duy trì độ trong 30–40 cm và kiềm trên 120 mg/L.

## Câu hỏi thường gặp
### Có nên dùng thuốc diệt tảo liều cao?
Không. Diệt tảo đồng loạt làm xác tảo phân hủy, tụt oxy và tăng khí độc, tôm có thể chết hàng loạt. Cần cắt tảo từ từ và phục hồi vi sinh ngay sau đó.

### Tảo lam có độc với tôm không?
Có. Một số loài tảo lam tiết độc tố gây tổn thương gan tụy, khiến tôm giảm ăn, chậm lớn.

### Sau khi cắt tảo bao lâu thì gây màu lại?
Sau 24–48 giờ, khi đã tạt vi sinh và lắng xác tảo, có thể gây màu lại bằng khoáng và vi sinh.`,
`Algae are a double-edged sword. Moderate densities stabilise a pond; overgrowth of cyanobacteria or benthic algae destabilises it. Treat in the right order to avoid a sudden crash.

| | Blue-green algae | Benthic algae |
|---|---|---|
| Look | Dark green, paint-like scum | Clear water, mats on the bottom |
| Risk | Toxins, pH swings, night-time oxygen loss | Rotting bottom, H₂S |

## Four steps for cyanobacteria
1. Cut feed by 20–30% for 2–3 days and remove waste.
2. Skim scum and exchange 15–20% of the water.
3. Thin algae gradually with **TÍM BKC 80** at 1 L/4,000–5,000 m³ on a sunny morning, aerators on.
4. After 24–48 h, apply **TÍM PRO-BIO 9** for 2–3 days with **TÍM ZEO-CLEAR** and **TÍM YUCCA MAX**, then rebuild colour.

## Frequently asked questions
### Should I use a strong algaecide?
No — a mass die-off crashes oxygen and releases toxic gases.

### Are blue-green algae toxic to shrimp?
Some species produce toxins that damage the hepatopancreas.`,
`藻类是把双刃剑：适量可稳定水质，蓝藻或底藻过度繁殖则会使池塘失衡。必须按正确顺序处理，避免倒藻。

| | 蓝藻 | 底藻 |
|---|---|---|
| 外观 | 深绿、油漆状浮膜 | 水清、池底有藻垫 |
| 风险 | 毒素、pH波动、夜间缺氧 | 败底、硫化氢 |

## 蓝藻处理4步
1. 减料20–30%持续2–3天，清除污物。
2. 捞除浮膜，换水15–20%。
3. 晴天上午用 **TÍM BKC 80**（1升/4,000–5,000 m³）逐步控藻，开足增氧。
4. 24–48小时后连续2–3天泼洒 **TÍM PRO-BIO 9**，配合 **TÍM ZEO-CLEAR** 和 **TÍM YUCCA MAX**，再重新肥水。

## 常见问题
### 可以大剂量杀藻吗？
不可以，藻类大量死亡会导致缺氧和有毒气体升高。

### 蓝藻对虾有毒吗？
部分蓝藻产生毒素，会损伤肝胰腺。`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'nuoi-tom-biofloc-huong-dan-cho-nguoi-moi', topic: 'technique', daysAgo: 36,
    title: L('Nuôi tôm công nghệ Biofloc cho người mới: nguyên lý, cách tạo floc và tỷ lệ C:N',
      'Biofloc Shrimp Farming for Beginners: Principles, Building Floc and the C:N Ratio',
      '生物絮团养虾入门：原理、絮团培养与碳氮比'),
    excerpt: L('Biofloc giúp giảm thay nước, tận dụng đạm thừa thành thức ăn và hạ FCR. Hướng dẫn nguyên lý, cách tính lượng mật rỉ đường theo tỷ lệ C:N, mức floc tối ưu và những sai lầm thường gặp.',
      'Biofloc cuts water exchange, recycles waste nitrogen into feed and lowers FCR. Principles, how to dose molasses by C:N ratio, ideal floc volume and common mistakes.',
      '生物絮团可减少换水、将残余氮转化为饵料并降低饲料系数。介绍原理、按碳氮比计算糖蜜用量、最佳絮团量及常见错误。'),
    body: L(
`**Nuôi tôm Biofloc** là mô hình dùng vi khuẩn dị dưỡng kết hợp nguồn carbon (mật rỉ đường, cám) để chuyển hóa đạm thừa trong nước thành các hạt floc – vừa làm sạch nước, vừa là thức ăn bổ sung giàu đạm cho tôm. Mô hình phù hợp ao bạt, ao tròn nổi có sục khí mạnh.

## Ưu và nhược điểm
| Ưu điểm | Nhược điểm |
|---|---|
| Giảm thay nước, an toàn sinh học cao | Cần sục khí 24/24, tốn điện |
| Tận dụng đạm thừa, giảm FCR 10–20% | Đòi hỏi theo dõi sát chỉ tiêu |
| Hạn chế *Vibrio* nhờ vi khuẩn có lợi chiếm ưu thế | Floc quá dày gây thiếu oxy, nghẹt mang |

## Nguyên lý tỷ lệ C:N
Vi khuẩn dị dưỡng cần khoảng 15–20 phần carbon cho mỗi phần nitơ để hấp thu NH₃ tạo sinh khối. Thức ăn tôm có tỷ lệ C:N khoảng 9:1 nên cần bổ sung carbon.

**Cách tính nhanh:** khoảng **0,5–0,6 kg mật rỉ đường cho mỗi 1 kg thức ăn** đưa vào ao để nâng tỷ lệ C:N lên 15:1 (với thức ăn 35–40% đạm). Chia mật rỉ đường làm 2 lần/ngày, tạt sau cữ ăn 1–2 giờ.

## Các bước tạo floc
1. Cấp nước, diệt khuẩn, chờ hết dư lượng hóa chất.
2. Nâng kiềm lên 150–180 mg/L vì vi khuẩn floc tiêu tốn kiềm.
3. Ủ **TÍM PRO-BIO 9** với mật rỉ đường, tạt liên tục 5–7 ngày, sục khí mạnh.
4. Theo dõi thể tích floc bằng nón Imhoff: lấy 1 lít nước, để lắng 15–20 phút và đọc vạch.

## Mức floc tối ưu
| Thể tích floc (ml/L) | Đánh giá | Xử lý |
|---|---|---|
| Dưới 5 | Thiếu | Tăng mật rỉ đường và vi sinh |
| 5 – 15 | Tối ưu cho tôm thẻ | Duy trì |
| Trên 20 | Quá dày | Xả bớt bằng bể lắng, tăng sục khí |

## Những sai lầm thường gặp
- Sục khí không đủ, có "góc chết" khiến floc lắng và phân hủy yếm khí.
- Quên bổ sung kiềm, pH tụt dần làm floc kém.
- Floc quá dày nhưng không xả bớt, gây nghẹt mang và tụt oxy về đêm.
- Dùng thuốc sát trùng liều cao làm chết hệ vi khuẩn floc.

Để nắm quy trình tổng thể trước khi chuyển sang Biofloc, xem [quy trình nuôi tôm thẻ chân trắng từ A đến Z](/vi/blog/quy-trinh-nuoi-tom-the-chan-trang-tu-a-den-z).

## Câu hỏi thường gặp
### Nuôi tôm Biofloc có cần thay nước không?
Gần như không cần thay nước thường xuyên, chỉ bù nước bay hơi và xả bớt floc khi quá dày.

### Mật độ thả tôm trong ao Biofloc là bao nhiêu?
Thường 150–300 con/m² ở ao bạt có sục khí mạnh. Người mới nên bắt đầu ở mức 150–200 con/m².

### Có thể dùng đường cát thay mật rỉ đường không?
Có thể, nhưng chi phí cao hơn. Mật rỉ đường, cám gạo, bột sắn là các nguồn carbon phổ biến và rẻ hơn.`,
`Biofloc systems use heterotrophic bacteria and a carbon source to convert waste nitrogen into floc particles — cleaning the water and providing extra protein feed. Best suited to lined or round tanks with strong aeration.

## The C:N ratio
Heterotrophic bacteria need roughly 15–20 parts carbon per part nitrogen. Shrimp feed is about 9:1, so add carbon: about **0.5–0.6 kg molasses per kg of feed** (35–40% protein feed), split into two daily doses 1–2 hours after feeding.

## Building floc
1. Fill and disinfect; wait for residues to clear.
2. Raise alkalinity to 150–180 mg/L.
3. Activate **TÍM PRO-BIO 9** with molasses and apply for 5–7 days under strong aeration.
4. Measure floc volume with an Imhoff cone after 15–20 minutes.

| Floc volume (ml/L) | Action |
|---|---|
| Below 5 | Add carbon and bacteria |
| 5 – 15 | Optimal for whiteleg shrimp |
| Above 20 | Remove excess via a settling tank |

## Frequently asked questions
### Do biofloc ponds need water exchange?
Rarely — only top-ups and floc removal.

### What stocking density suits biofloc?
150–300 shrimp/m²; beginners should start at 150–200.`,
`生物絮团利用异养细菌和碳源将残余氮转化为絮团颗粒，既净化水质又为虾提供蛋白质饵料，适合强增氧的铺膜池或圆形池。

## 碳氮比
异养细菌每份氮约需15–20份碳，而虾饲料碳氮比约9:1，需补充碳源：每投喂1 kg饲料（蛋白35–40%）约添加**0.5–0.6 kg糖蜜**，分两次在投喂后1–2小时泼洒。

## 培养絮团
1. 进水消毒，待残留消失。
2. 碱度提高到150–180 mg/L。
3. 用糖蜜活化 **TÍM PRO-BIO 9**，强增氧下连续泼洒5–7天。
4. 用英霍夫锥沉降15–20分钟测絮团量。

| 絮团量(ml/L) | 处理 |
|---|---|
| 低于5 | 增加碳源和菌种 |
| 5 – 15 | 南美白对虾最佳 |
| 高于20 | 通过沉淀池排出多余絮团 |

## 常见问题
### 生物絮团需要换水吗？
基本不需要，只需补充蒸发水并排出过多絮团。

### 放养密度多少合适？
150–300尾/m²，新手建议150–200尾/m²。`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'oxy-hoa-tan-ao-nuoi-tom-bao-nhieu-la-du', topic: 'technique', daysAgo: 39,
    title: L('Oxy hòa tan trong ao nuôi tôm bao nhiêu là đủ? Cách bố trí quạt và xử lý thiếu oxy',
      'How Much Dissolved Oxygen Do Shrimp Need? Aerator Layout and Low-Oxygen Emergencies',
      '虾塘溶解氧多少才够？增氧机布置与缺氧急救'),
    excerpt: L('Oxy hòa tan là chỉ tiêu sống còn của ao tôm. Ngưỡng oxy an toàn, thời điểm oxy thấp nhất, công thức tính số quạt theo mật độ và quy trình cấp cứu khi tôm nổi đầu.',
      'Dissolved oxygen is the life-or-death parameter. Safe thresholds, when oxygen is lowest, how many aerators you need and an emergency protocol when shrimp surface.',
      '溶解氧是虾塘的生命指标。介绍安全阈值、最低溶氧时段、增氧机数量计算及虾浮头急救流程。'),
    body: L(
`Tôm có thể nhịn ăn vài ngày nhưng chỉ chịu thiếu oxy vài giờ. Oxy hòa tan (DO) thấp không chỉ gây chết ngạt mà còn làm tôm giảm ăn, chậm lớn, tăng khí độc và tạo điều kiện cho vi khuẩn yếm khí phát triển ở đáy ao. Vậy **oxy hòa tan trong ao nuôi tôm bao nhiêu là đủ?**

## Ngưỡng oxy hòa tan cho tôm thẻ
| Oxy hòa tan (mg/L) | Ảnh hưởng |
|---|---|
| Trên 5 | Tối ưu – tôm ăn mạnh, lớn nhanh |
| 4 – 5 | Chấp nhận được, cần theo dõi |
| 3 – 4 | Tôm giảm ăn, stress |
| Dưới 3 | Nguy hiểm – tôm nổi đầu, có thể chết |

Oxy thấp nhất vào **3–6 giờ sáng** vì cả đêm tảo, vi sinh và tôm đều hô hấp mà không có quang hợp.

## Nguyên nhân thiếu oxy
- Mật độ nuôi cao, sinh khối lớn vào cuối vụ.
- Tảo tàn, trời âm u nhiều ngày.
- Nhiệt độ nước cao, nước nóng giữ oxy kém.
- Đáy ao nhiều chất hữu cơ, bùn đen.
- Cúp điện, quạt hỏng vào ban đêm.

## Cách tính số quạt nước
Kinh nghiệm phổ biến: **1 HP quạt nước cho khoảng 400–500 kg tôm** dự kiến thu hoạch. Ví dụ ao dự kiến thu 4 tấn cần tối thiểu 8–10 HP quạt.

## Bố trí quạt đúng cách
- Đặt quạt cách bờ 2–3 m, chạy cùng chiều để tạo dòng chảy vòng, gom chất thải vào giữa ao.
- Khoảng cách giữa các dàn quạt 20–30 m.
- Ao mật độ cao kết hợp oxy đáy (máy thổi khí, ống nano) để cấp oxy tầng đáy.
- Có máy phát điện dự phòng và kiểm tra định kỳ.

## Quy trình cấp cứu khi tôm nổi đầu
1. Mở toàn bộ quạt, máy thổi khí.
2. Rải **TÍM DO-OXY** 3–5 kg/1.000 m³ tại khu vực tôm tập trung.
3. Ngưng cho ăn cho đến khi oxy hồi phục trên 4 mg/L.
4. Sau 2–3 giờ, tạt **TÍM YUCCA MAX** để giảm NH₃ và **TÍM ZEO-CLEAR** để lắng chất lơ lửng.
5. Ngày hôm sau, tạt vi sinh để xử lý đáy, tìm nguyên nhân gốc (tảo tàn, đáy dơ, mật độ cao).

Kết hợp đọc bài [quản lý khí độc NH₃, NO₂, H₂S](/vi/blog/quan-ly-khi-doc-ao-nuoi-mua-mua) vì thiếu oxy và khí độc thường đi cùng nhau.

## Câu hỏi thường gặp
### Mấy giờ nên đo oxy trong ao tôm?
Đo lúc 5–6 giờ sáng (thấp nhất) và 14–15 giờ (cao nhất). Chênh lệch quá lớn cho thấy mật độ tảo quá cao.

### Tôm nổi đầu buổi sáng là bị gì?
Thường do thiếu oxy về đêm, có thể kèm khí độc. Cần tăng quạt ngay và xử lý theo quy trình cấp cứu ở trên.

### Một ao 5.000 m² cần bao nhiêu quạt?
Tùy sản lượng dự kiến: thu 5 tấn cần khoảng 10–12 HP quạt, chia 3–4 dàn và nên có thêm oxy đáy nếu nuôi mật độ trên 100 con/m².`,
`Shrimp can skip food for days but survive low oxygen for only hours. Low DO also cuts feeding and growth and favours anaerobic bacteria on the bottom.

| DO (mg/L) | Effect |
|---|---|
| Above 5 | Optimal |
| 4 – 5 | Acceptable, monitor |
| 3 – 4 | Reduced feeding, stress |
| Below 3 | Dangerous — shrimp surface |

Oxygen is lowest at **3–6 am**.

## How many aerators?
A common rule: **1 HP of paddlewheel per 400–500 kg of expected harvest** — 8–10 HP for a 4-tonne crop. Place them 2–3 m from the bank, running the same direction, and add bottom aeration at high densities.

## Emergency protocol
1. Run every aerator and blower.
2. Spread **TÍM DO-OXY** 3–5 kg/1,000 m³ where shrimp gather.
3. Stop feeding until DO exceeds 4 mg/L.
4. After 2–3 h, apply **TÍM YUCCA MAX** and **TÍM ZEO-CLEAR**.

## Frequently asked questions
### When should I measure oxygen?
At 5–6 am (lowest) and 2–3 pm (highest).

### Why are shrimp surfacing in the morning?
Usually night-time oxygen depletion, often with toxic gases.`,
`虾可以几天不吃，但缺氧只能撑几个小时。低溶氧还会导致摄食下降、生长变慢并促使池底厌氧菌繁殖。

| 溶氧(mg/L) | 影响 |
|---|---|
| 5以上 | 最佳 |
| 4 – 5 | 可接受，需监测 |
| 3 – 4 | 摄食下降、应激 |
| 3以下 | 危险——虾浮头 |

凌晨**3–6点**溶氧最低。

## 增氧机配置
常用经验：**每1马力水车式增氧机对应400–500 kg预计产量**，产量4吨需8–10马力。距岸2–3米、同向运转，高密度池加装底部增氧。

## 急救流程
1. 开启所有增氧设备。
2. 在虾聚集处撒 **TÍM DO-OXY** 3–5 kg/1,000 m³。
3. 停喂直到溶氧高于4 mg/L。
4. 2–3小时后使用 **TÍM YUCCA MAX** 和 **TÍM ZEO-CLEAR**。

## 常见问题
### 什么时候测溶氧？
早上5–6点（最低）和下午2–3点（最高）。

### 早上虾浮头是什么原因？
通常是夜间缺氧，常伴随有毒气体升高。`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'chi-phi-nuoi-tom-the-1-hecta-va-cach-giam-gia-thanh', topic: 'technique', daysAgo: 45,
    title: L('Chi phí nuôi tôm thẻ 1 hecta và 7 cách giảm giá thành sản xuất',
      'Cost of Farming One Hectare of Whiteleg Shrimp — and 7 Ways to Lower It',
      '每公顷南美白对虾养殖成本及7个降本方法'),
    excerpt: L('Cơ cấu chi phí một vụ nuôi tôm thẻ: giống, thức ăn, điện, thuốc – men, nhân công. Cách tính giá thành mỗi kg tôm, điểm hòa vốn và 7 giải pháp kỹ thuật giúp giảm giá thành 10–20%.',
      'The cost structure of a whiteleg shrimp crop, how to calculate cost per kilo and break-even, and seven technical ways to cut production cost by 10–20%.',
      '南美白对虾一季养殖的成本结构、每公斤成本与保本点计算，以及降低10–20%生产成本的7个技术方法。'),
    body: L(
`Lợi nhuận nghề nuôi tôm phụ thuộc vào hai yếu tố: giá bán (khó kiểm soát) và **giá thành sản xuất** (hoàn toàn có thể tối ưu). Bài viết phân tích cơ cấu chi phí nuôi tôm thẻ và cách giảm giá thành mà không đánh đổi năng suất.

## Cơ cấu chi phí một vụ nuôi tôm thẻ
| Hạng mục | Tỷ trọng tham khảo |
|---|---|
| Thức ăn | 50 – 60% |
| Con giống | 8 – 12% |
| Điện, nhiên liệu | 10 – 15% |
| Men vi sinh, khoáng, chế phẩm | 8 – 12% |
| Nhân công | 5 – 8% |
| Khấu hao, cải tạo ao, chi phí khác | 5 – 10% |

Tỷ trọng thay đổi theo mô hình (ao đất, ao bạt, siêu thâm canh) và vùng nuôi. Hãy tự ghi chép chi phí thực tế của trại để có con số chính xác.

## Cách tính giá thành mỗi kg tôm
**Giá thành (đồng/kg) = Tổng chi phí vụ nuôi ÷ Sản lượng thu hoạch (kg)**

**Điểm hòa vốn:** giá bán tại ao phải lớn hơn giá thành. Ví dụ tổng chi phí 1,1 tỷ đồng, thu 12 tấn → giá thành khoảng 91.700 đồng/kg. Nếu giá bán cỡ tôm thu hoạch thấp hơn mức này, vụ nuôi lỗ.

Vì thức ăn chiếm phần lớn chi phí, **giảm FCR từ 1,5 xuống 1,2 có thể giúp giảm giá thành 10–15%**.

## 7 cách giảm giá thành sản xuất
**1. Hạ FCR:** cho ăn theo sàng, theo sinh khối thực tế ([bảng cho ăn](/vi/blog/cach-tinh-luong-thuc-an-cho-tom-the)); trộn **TÍM GUT-ZYME** để tôm hấp thu tốt hơn.

**2. Nâng tỷ lệ sống:** con giống PCR âm tính, chuẩn bị ao kỹ, men vi sinh định kỳ. Tăng tỷ lệ sống từ 60% lên 80% giúp giảm giá thành rõ rệt vì chi phí cố định được chia cho nhiều kg tôm hơn.

**3. Nuôi 2 – 3 giai đoạn:** ương giống trong ao nhỏ 20–30 ngày giúp quản lý tốt hơn, rút ngắn thời gian ở ao lớn và tăng số vụ/năm.

**4. Tiết kiệm điện:** bố trí quạt hợp lý, dùng biến tần, chạy quạt theo nhu cầu oxy thực tế thay vì chạy cố định 24/24.

**5. Phòng bệnh thay vì chữa bệnh:** chi phí phòng bệnh chỉ bằng một phần nhỏ chi phí xử lý khi tôm đã bệnh, chưa kể thiệt hại sản lượng.

**6. Mua vật tư chất lượng, đúng liều:** sản phẩm rẻ nhưng kém chất lượng buộc phải dùng nhiều lần. Chọn men vi sinh mật độ cao như **TÍM PRO-BIO 9** để dùng liều thấp mà vẫn hiệu quả.

**7. Ghi chép và phân tích số liệu:** nhật ký ao nuôi (thức ăn, chỉ số nước, tăng trọng) giúp phát hiện lãng phí và rút kinh nghiệm cho vụ sau.

## Câu hỏi thường gặp
### Nuôi tôm thẻ 1 hecta cần bao nhiêu vốn?
Tùy mô hình và mật độ, vốn lưu động một vụ có thể từ vài trăm triệu (ao đất bán thâm canh) đến vài tỷ đồng (ao bạt thâm canh mật độ cao). Hãy lập dự toán từ giống, thức ăn, điện và vật tư theo kế hoạch sản lượng.

### Chi phí nào chiếm nhiều nhất khi nuôi tôm?
Thức ăn, chiếm khoảng 50–60% tổng chi phí. Vì vậy quản lý thức ăn và hạ FCR là cách giảm giá thành hiệu quả nhất.

### Làm sao biết vụ nuôi có lời?
So sánh giá thành mỗi kg với giá bán dự kiến theo cỡ tôm thu hoạch. Theo dõi giá thành mỗi tuần để quyết định thời điểm thu hoạch hợp lý.`,
`Profit depends on price (hard to control) and **production cost** (fully optimisable).

| Cost item | Typical share |
|---|---|
| Feed | 50 – 60% |
| Post-larvae | 8 – 12% |
| Electricity and fuel | 10 – 15% |
| Probiotics, minerals, inputs | 8 – 12% |
| Labour | 5 – 8% |
| Depreciation and other | 5 – 10% |

**Cost per kg = total crop cost ÷ harvest (kg).** Because feed dominates, cutting FCR from 1.5 to 1.2 can lower cost by 10–15%.

## Seven ways to lower cost
1. Lower FCR with tray-based feeding and **TÍM GUT-ZYME**.
2. Raise survival with clean seed, good preparation and regular probiotics.
3. Use two- or three-phase systems.
4. Save electricity with smart aerator layout and inverters.
5. Prevent rather than cure.
6. Buy concentrated, effective inputs such as **TÍM PRO-BIO 9**.
7. Keep pond records and analyse them.

## Frequently asked questions
### What is the biggest cost in shrimp farming?
Feed — 50–60% of the total.

### How do I know whether a crop is profitable?
Compare cost per kilo with the expected price for your harvest size, weekly.`,
`利润取决于售价（难以控制）和**生产成本**（完全可以优化）。

| 成本项目 | 参考占比 |
|---|---|
| 饲料 | 50 – 60% |
| 虾苗 | 8 – 12% |
| 电费燃料 | 10 – 15% |
| 益生菌、矿物质等 | 8 – 12% |
| 人工 | 5 – 8% |
| 折旧及其他 | 5 – 10% |

**每公斤成本 = 总成本 ÷ 收获量(kg)。**饲料占比最大，饲料系数从1.5降至1.2可降低成本10–15%。

## 7个降本方法
1. 按料台投喂并使用 **TÍM GUT-ZYME** 降低饲料系数。
2. 用健康苗、充分清塘和定期益生菌提高成活率。
3. 采用两段或三段式养殖。
4. 合理布置增氧机、使用变频器节电。
5. 预防重于治疗。
6. 选用高浓度高效产品，如 **TÍM PRO-BIO 9**。
7. 做好养殖记录并分析。

## 常见问题
### 养虾最大的成本是什么？
饲料，占总成本50–60%。

### 如何判断是否盈利？
每周对比每公斤成本与预计规格售价。`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'phong-benh-ca-tra-mua-chuyen-mua', topic: 'disease', daysAgo: 50,
    title: L('Phòng bệnh cho cá tra mùa chuyển mùa: gan thận mủ, xuất huyết và cách tăng đề kháng',
      'Protecting Pangasius During Seasonal Transitions: BNP, Haemorrhagic Disease and Immunity',
      '季节转换期巴沙鱼病害预防：肝肾脓肿、出血病与增强免疫'),
    excerpt: L('Giai đoạn chuyển mùa nhiệt độ nước dao động mạnh khiến cá tra dễ mắc gan thận mủ, xuất huyết. Lịch phòng bệnh, quản lý môi trường và tăng miễn dịch tự nhiên bằng beta-glucan.',
      'Temperature swings during seasonal transitions leave pangasius vulnerable to BNP and haemorrhagic disease. A prevention calendar, water management and natural immunity with beta-glucan.',
      '季节转换期水温波动大，巴沙鱼易患肝肾脓肿和出血病。介绍预防日历、水质管理及β-葡聚糖增强天然免疫。'),
    body: L(
`Cá tra là loài chịu đựng tốt nhưng rất nhạy cảm khi nhiệt độ nước thay đổi đột ngột, đặc biệt giai đoạn chuyển mùa (tháng 11 – tháng 2 và đầu mùa mưa). Hai bệnh gây thiệt hại lớn nhất là **gan thận mủ** và **xuất huyết**. Phòng bệnh chủ động giúp giảm hao hụt và hạn chế phải dùng thuốc.

## Hai bệnh thường gặp
| Bệnh | Tác nhân | Dấu hiệu | Thời điểm |
|---|---|---|---|
| Gan thận mủ | Vi khuẩn *Edwardsiella ictaluri* | Đốm trắng li ti trên gan, thận, tỳ; cá bơi lờ đờ | Nhiệt độ nước 22–28 °C, chuyển mùa |
| Xuất huyết | Vi khuẩn *Aeromonas* | Xuất huyết vây, hậu môn, da; bụng trướng | Mùa mưa, nước bẩn |

Chi tiết từng bệnh: [gan thận mủ trên cá tra](/vi/diseases/gan-than-mu-ca-tra), [bệnh xuất huyết trên cá](/vi/diseases/xuat-huyet-ca).

## Quản lý môi trường
- Duy trì mực nước 3–4 m với ao nuôi cá tra thâm canh để ổn định nhiệt độ.
- Thay nước theo thủy triều, ưu tiên nước sông sạch; tránh lấy nước khi đầu nguồn có dịch bệnh.
- Hút bùn đáy định kỳ, hạn chế thức ăn dư.
- Tạt **TÍM PRO-BIO 9** định kỳ để phân hủy chất hữu cơ và ổn định môi trường.

## Tăng đề kháng tự nhiên
Trước và trong giai đoạn chuyển mùa 2–3 tuần, trộn **TÍM FISH-IMMUNE** 5 g/kg thức ăn liên tục 10 ngày. Beta-glucan 1,3/1,6 kích hoạt miễn dịch không đặc hiệu, giúp cá chống chịu tốt hơn với vi khuẩn. Kết hợp **TÍM C-1000** 3–5 g/kg thức ăn khi thời tiết thay đổi đột ngột.

## Lịch phòng bệnh tham khảo
| Thời điểm | Biện pháp |
|---|---|
| Hằng tháng | **TÍM FISH-IMMUNE** 2–3 g/kg thức ăn, 7 ngày/tháng |
| 2 tuần trước chuyển mùa | Tăng lên 5 g/kg, 10 ngày liên tục; bổ sung vitamin C |
| Khi nhiệt độ dao động | Giảm 20–30% thức ăn, tăng thay nước sạch |
| Định kỳ 7–10 ngày | Tạt vi sinh xử lý nước, sát trùng nhẹ bằng **TÍM BKC 80** khi cần |

## Khi cá có dấu hiệu bệnh
Lấy mẫu cá gửi phòng xét nghiệm để xác định tác nhân và làm kháng sinh đồ. Chỉ sử dụng thuốc được phép theo chỉ định của cán bộ thú y, tuân thủ thời gian ngưng thuốc trước thu hoạch để đảm bảo cá đạt chuẩn xuất khẩu.

## Câu hỏi thường gặp
### Vì sao cá tra hay bị gan thận mủ vào mùa lạnh?
Vi khuẩn gây bệnh phát triển mạnh ở nhiệt độ nước 22–28 °C, trùng với giai đoạn chuyển mùa khi sức đề kháng của cá giảm.

### Beta-glucan có thay thế được kháng sinh không?
Beta-glucan giúp tăng miễn dịch để phòng bệnh, không phải thuốc điều trị. Khi cá đã bệnh cần xét nghiệm và điều trị theo hướng dẫn của cán bộ thú y.

### Nên cho cá ăn thế nào khi trời chuyển lạnh?
Giảm 20–30% lượng thức ăn, cho ăn vào lúc nhiệt độ nước cao nhất trong ngày và bổ sung vitamin C, chất tăng miễn dịch.`,
`Pangasius are hardy but sensitive to sudden temperature changes, especially in seasonal transitions. Bacillary necrosis (BNP) and haemorrhagic disease cause the heaviest losses.

| Disease | Agent | Signs |
|---|---|---|
| BNP | *Edwardsiella ictaluri* | White spots on liver, kidney, spleen |
| Haemorrhagic disease | *Aeromonas* | Bleeding fins, vent, skin; swollen belly |

## Management and immunity
- Keep 3–4 m water depth and exchange clean river water with the tide.
- Apply **TÍM PRO-BIO 9** regularly.
- Feed **TÍM FISH-IMMUNE** at 5 g/kg for 10 days before and during transitions; add **TÍM C-1000** when weather changes.

When fish are sick, sample them for laboratory diagnosis and use only approved treatments prescribed by a veterinarian, respecting withdrawal times.

## Frequently asked questions
### Why does BNP peak in cooler months?
The bacterium thrives at 22–28 °C, when fish immunity is lower.

### Can beta-glucan replace antibiotics?
It supports prevention; sick fish need a veterinary diagnosis.`,
`巴沙鱼抗逆性强，但对水温骤变敏感，季节转换期尤甚。损失最大的是肝肾脓肿和出血病。

| 病害 | 病原 | 症状 |
|---|---|---|
| 肝肾脓肿 | 鮰爱德华氏菌 | 肝、肾、脾有白色小点 |
| 出血病 | 气单胞菌 | 鳍、肛门、皮肤出血，腹部膨胀 |

## 管理与免疫
- 保持3–4米水深，随潮汐换入清洁河水。
- 定期泼洒 **TÍM PRO-BIO 9**。
- 季节转换前后在饲料中添加 **TÍM FISH-IMMUNE** 5 g/kg，连续10天；天气变化时加 **TÍM C-1000**。

鱼发病时应取样送检，仅在兽医指导下使用许可药物并遵守休药期。

## 常见问题
### 为什么凉季多发肝肾脓肿？
病原菌在22–28 °C水温下繁殖旺盛，此时鱼体免疫力下降。

### β-葡聚糖能替代抗生素吗？
它用于预防，鱼发病后需兽医诊断治疗。`),
  },
];
