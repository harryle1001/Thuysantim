'use strict';
/**
 * Batch C of long-form Vietnamese guides: harvest, pond type, probiotics, label reading, pond volume.
 * Same conventions as seed-posts-a.js (see src/services/article.js):
 *   ## headings -> table of contents, "## Câu hỏi thường gặp" -> FAQ + FAQPage schema,
 *   **PRODUCT NAME** (exact `ten` from nhan/san-pham.json) -> automatic product link.
 * Vietnamese only: en/zh fall back to vi.
 */
const L = (vi, en, zh) => ({ vi, en, zh });

module.exports = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'tom-the-nuoi-bao-lau-thu-hoach', topic: 'technique', daysAgo: 0.05,
    title: L('Tôm thẻ nuôi bao lâu thì thu hoạch? Size, thời gian, dấu hiệu'),
    excerpt: L('Tôm thẻ nuôi bao lâu thì thu hoạch? Mốc ngày nuôi và size tham khảo, yếu tố ảnh hưởng, khi nào nên thu sớm và danh sách việc cần làm trước ngày thu.'),
    body: L(
`Tôm thẻ chân trắng thường được thu hoạch sau khoảng 60 đến 100 ngày nuôi, tương ứng cỡ tôm từ khoảng 100 đến 40 con/kg, tùy mật độ, mùa vụ, tình trạng ao và yêu cầu của đơn vị thu mua. Không có một con số cố định cho mọi ao: ngày thu đúng là ngày tôm đã đạt size mục tiêu, vỏ cứng, sức khỏe ổn định và ao còn an toàn để nuôi thêm.

Bài viết này đưa ra các mốc tham khảo theo ngày nuôi, những yếu tố làm tôm lớn nhanh hay chậm, các tình huống nên thu sớm và danh sách việc cần chuẩn bị trước ngày thu hoạch để bà con không bị bất ngờ.

## Tôm thẻ nuôi bao lâu thì thu hoạch?
Với ao nuôi thâm canh hoặc bán thâm canh, bà con thường gặp ba nhóm thời điểm thu:

- **Thu sớm (khoảng 60 - 75 ngày):** tôm cỡ nhỏ đến trung bình. Hay gặp khi mùa vụ không thuận lợi, khi ao có dấu hiệu rủi ro hoặc khi muốn quay vòng ao nhanh.
- **Thu phổ biến (khoảng 80 - 100 ngày):** tôm cỡ trung bình đến khá, là khoảng thời gian nhiều ao lựa chọn.
- **Nuôi dài ngày (trên 100 ngày):** nhắm đến cỡ lớn. Cần ao ổn định, ít bệnh và có thể theo dõi sát môi trường.

Đây chỉ là các mốc để định hướng. Cùng một ngày tuổi, ao thả thưa thường cho tôm lớn hơn ao thả dày; ao vào mùa nắng ấm thường lớn nhanh hơn ao gặp lạnh hoặc mưa kéo dài.

## Size tôm thẻ theo ngày nuôi: bảng tham khảo
Bảng dưới đây là mốc tham khảo thường gặp ở ao nuôi bình thường, không phải cam kết cho mọi ao. Tốc độ lớn của từng ao có thể nhanh hoặc chậm hơn khá nhiều.

| Ngày nuôi (tham khảo) | Trọng lượng thường gặp | Cỡ tương ứng (con/kg) | Ghi chú |
|---|---|---|---|
| Khoảng 60 ngày | 8 - 12 g | 125 - 85 | Cỡ nhỏ, thường thu sớm hoặc thu tỉa |
| Khoảng 75 ngày | 14 - 18 g | 70 - 55 | Cỡ trung bình |
| Khoảng 90 ngày | 18 - 23 g | 55 - 45 | Cỡ khá, nhiều ao chọn thu ở mốc này |
| Khoảng 105 ngày | 24 - 30 g | 42 - 33 | Cỡ lớn, cần ao ổn định |
| Khoảng 120 ngày | 30 g trở lên | khoảng 33 trở xuống | Nuôi dài ngày, rủi ro kéo dài |

Cách quy đổi đơn giản: lấy 1.000 chia cho trọng lượng trung bình (gram) sẽ ra số con/kg. Ví dụ tôm trung bình 20 g thì 1.000 ÷ 20 = 50 con/kg.

## Những yếu tố quyết định thời gian nuôi
Cùng một con giống, mỗi ao một kiểu lớn. Các yếu tố chính:

1. **Mật độ thả:** thả càng dày, tôm càng cạnh tranh thức ăn, oxy và không gian nên tốc độ lớn giai đoạn sau thường chậm lại.
2. **Chất lượng con giống:** giống khỏe, đồng đều thường lớn đều hơn. Xem thêm bài [cách chọn tôm giống thẻ chân trắng chất lượng](/vi/blog/cach-chon-tom-giong-the-chan-trang-chat-luong).
3. **Nhiệt độ và mùa vụ:** nước quá lạnh hoặc quá nóng làm tôm ăn kém, chậm lớn.
4. **Độ mặn, pH, kiềm, oxy:** môi trường biến động mạnh khiến tôm stress, tốn năng lượng và chậm lột xác.
5. **Thức ăn và cách cho ăn:** lượng ăn đúng nhu cầu, đúng cữ. Tham khảo [cách tính lượng thức ăn cho tôm thẻ](/vi/blog/cach-tinh-luong-thuc-an-cho-tom-the).
6. **Sức khỏe đường ruột, gan tụy:** tôm tiêu hóa kém hoặc gan yếu thường ăn giảm và lớn chậm.
7. **Bệnh và các đợt sốc môi trường:** mỗi lần tôm bệnh hoặc sốc đều làm "mất" vài ngày tăng trưởng.

Nếu ao của bà con chậm lớn hoặc cỡ không đều, nên đọc bài [tôm chậm lớn, lớn không đều: 8 nguyên nhân và cách khắc phục](/vi/blog/tom-cham-lon-lon-khong-deu-8-nguyen-nhan-cach-khac-phuc) để rà soát từng nguyên nhân.

## Nên thu size nào: thu sớm hay nuôi thêm?
Đây là câu hỏi mỗi vụ bà con đều phải cân nhắc, và không có đáp án đúng cho mọi ao.

- **Nuôi thêm** giúp tôm lớn hơn, nhưng thời gian nuôi dài hơn đồng nghĩa với thêm chi phí thức ăn, điện, quạt nước và kéo dài thời gian chịu rủi ro về bệnh, thời tiết, khí độc.
- **Thu sớm** giúp giảm rủi ro và quay vòng ao nhanh hơn, nhưng cỡ tôm nhỏ hơn.

Mỗi nhà máy, thương lái có yêu cầu về cỡ riêng, bà con nên hỏi và thống nhất trước để chọn ngày thu hợp lý. Muốn tính toán kỹ hơn về chi phí, xem bài [chi phí nuôi tôm thẻ 1 hecta và cách giảm giá thành](/vi/blog/chi-phi-nuoi-tom-the-1-hecta-va-cach-giam-gia-thanh).

## Dấu hiệu tôm đã sẵn sàng thu hoạch
Trước khi quyết định, bà con nên kiểm tra thực tế bằng chài hoặc sàng ăn:

- **Cỡ đạt mục tiêu:** chài ở nhiều vị trí (đầu, giữa, cuối ao), cân mẫu rồi đếm số con vừa đủ 1 kg để tính cỡ trung bình. Một mẻ chài chưa đại diện cho cả ao.
- **Tôm cứng vỏ:** vỏ bóng, chắc, bấm không bị mềm. Tôm mới lột xác vỏ còn mềm, dễ hao hụt và giảm chất lượng khi thu.
- **Tôm khỏe:** bơi nhanh, phản xạ tốt, ruột có thức ăn bình thường, gan tụy màu bình thường, mang sạch.
- **Môi trường ổn định:** oxy, pH, độ kiềm không biến động mạnh trong những ngày chuẩn bị thu.

Nếu trong ao có nhiều tôm mềm vỏ, nên đợi tôm cứng vỏ rồi mới thu. Bà con xem thêm [tôm mềm vỏ, chậm lột xác: nguyên nhân và cách xử lý](/vi/blog/tom-mem-vo-cham-lot-xac-nguyen-nhan-cach-xu-ly). Trong giai đoạn này có thể bổ sung khoáng cho môi trường. Ví dụ **MIX 79** có hướng dẫn dùng 3 kg cho 2.000 m³ nước, dùng liên tục 2 ngày trong trường hợp muốn tôm cứng vỏ nhanh, tạt vào lúc chiều tối. 

## Khi nào nên thu hoạch sớm?
Một số tình huống bà con nên cân nhắc thu sớm, kể cả khi tôm chưa đạt cỡ mong muốn:

- **Tôm đã đạt cỡ thương phẩm nhưng ao có dấu hiệu bệnh nặng, hao hụt tăng nhanh.** Dấu hiệu chỉ mang tính tham khảo, nên xét nghiệm PCR hoặc nhờ cán bộ thú y, kỹ thuật viên xác nhận bệnh trước khi quyết định.
- **Thời tiết cực đoan sắp tới:** bão, mưa lớn kéo dài, nhiệt độ thay đổi đột ngột, nguy cơ ngập ao.
- **Sự cố hệ thống:** mất điện kéo dài, hỏng quạt, thủng bạt, đáy ao xấu nhưng khó khắc phục.
- **Môi trường xuống cấp liên tục:** khí độc cao, oxy thấp mà đã xử lý nhiều lần không cải thiện. Xem thêm [quản lý khí độc ao nuôi mùa mưa](/vi/blog/quan-ly-khi-doc-ao-nuoi-mua-mua).
- **Yêu cầu thị trường:** đơn vị thu mua đang cần cỡ này hoặc thời điểm giao hàng đã chốt.

Với ao nghi nhiễm bệnh nguy hiểm, bà con nên liên hệ cán bộ thú y địa phương để được hướng dẫn thu hoạch và xử lý nước, xác tôm đúng quy định, không xả thẳng ra môi trường.

## Danh sách việc cần làm trước ngày thu hoạch
Chuẩn bị từ 7 đến 15 ngày trước thu sẽ giúp ngày thu suôn sẻ:

1. **Chốt cỡ và lịch thu với đơn vị thu mua.** Hỏi rõ yêu cầu về size, giờ nhận, cách vận chuyển.
2. **Rà soát sản phẩm đã dùng và thời gian ngưng.** Mỗi sản phẩm có thời gian ngưng sử dụng trước thu riêng ghi trên nhãn, bà con đọc kỹ từng nhãn. Ví dụ nhãn **VH-GLUBENCO PRO** ghi ngưng sử dụng trước thu hoạch 15 ngày. Với các sản phẩm khác, hãy đọc nhãn hoặc hỏi kỹ thuật viên.
3. **Không dùng sản phẩm không rõ nguồn gốc, hạn chế mọi chất cấm.** Nhiều đơn vị thu mua yêu cầu kiểm tra mẫu trước khi nhận.
4. **Giữ môi trường ổn định.** Duy trì quạt, oxy, tránh thay nước hoặc xử lý hóa chất mạnh trong những ngày cuối.
5. **Kiểm tra độ cứng vỏ.** Tránh thu đúng lúc tôm lột xác rộ.
6. **Điều chỉnh cữ ăn theo thỏa thuận.** Thường người thu mua yêu cầu giảm hoặc ngưng cho ăn trong một khoảng thời gian trước khi thu để ruột tôm bớt thức ăn.
7. **Chuẩn bị dụng cụ và nhân công:** lưới, sàng, thùng, nước đá, cân, máy phát điện dự phòng, xe vận chuyển.
8. **Chọn giờ thu mát:** thường là đêm hoặc sáng sớm để tôm ít bị sốc nhiệt. Trời nắng gắt sẽ làm tôm nhanh hư hơn.

## Sau khi thu hoạch cần làm gì?
Ngay sau thu, bà con nên ghi lại cỡ tôm, tỷ lệ sống, tổng thức ăn, thời gian nuôi và những sự cố đã gặp. Số liệu này giúp bà con điều chỉnh mật độ, con giống và lịch quản lý cho vụ sau. Ao sau thu cần được vệ sinh, xử lý đáy và chuẩn bị đúng quy trình, xem [quy trình chuẩn bị ao nuôi tôm thẻ 7 bước](/vi/blog/quy-trinh-chuan-bi-ao-nuoi-tom-the-7-buoc). Tổng quan cả vụ có trong bài [quy trình nuôi tôm thẻ chân trắng từ A đến Z](/vi/blog/quy-trinh-nuoi-tom-the-chan-trang-tu-a-den-z).

Cần tư vấn cho ao của mình? Gọi hotline 0934 246 420 để kỹ thuật viên Thủy Sản Tím tư vấn miễn phí.

## Câu hỏi thường gặp
### Tôm thẻ 60 ngày thu được chưa?
Về kỹ thuật, tôm 60 ngày thường đã có cỡ nhỏ, khoảng 125 đến 85 con/kg theo mốc tham khảo. Thu được nếu đơn vị thu mua nhận cỡ này, hoặc khi ao có rủi ro cần thu sớm. Bà con nên chài kiểm tra cỡ thực tế thay vì chỉ dựa vào số ngày.

### Nuôi bao nhiêu ngày thì tôm đạt 50 con/kg?
Theo mốc tham khảo, cỡ 50 con/kg tương ứng khoảng 20 g, thường đạt vào khoảng 85 đến 100 ngày. Ao thả dày, nước lạnh hoặc tôm bị bệnh có thể cần nhiều ngày hơn.

### Nên thu hoạch tôm lúc nào trong ngày?
Thường chọn đêm, sáng sớm hoặc chiều mát để tôm ít bị sốc nhiệt và giữ chất lượng tốt hơn. Tránh thu giữa trưa nắng gắt, và nên có sẵn nước đá để bảo quản.

### Có nên cho tôm nhịn ăn trước khi thu?
Nhiều đơn vị thu mua yêu cầu giảm hoặc ngưng cho ăn trong một khoảng thời gian trước khi thu để ruột tôm bớt thức ăn. Thời gian cụ thể nên thỏa thuận trước với nơi thu mua và thực hiện theo tình trạng ao.

### Có cần ngưng thuốc, chế phẩm trước khi thu hoạch không?
Có thể cần, tùy từng sản phẩm. Thời gian ngưng được ghi trên nhãn. Ví dụ nhãn **VH-GLUBENCO PRO** ghi ngưng sử dụng trước thu hoạch 15 ngày. Với sản phẩm khác, bà con đọc kỹ nhãn hoặc hỏi kỹ thuật viên, đồng thời kiểm tra yêu cầu của đơn vị thu mua.`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'nuoi-tom-ao-bat-hay-ao-dat-so-sanh', topic: 'technique', daysAgo: 0.25,
    title: L('Nuôi tôm ao bạt hay ao đất? So sánh ưu nhược điểm'),
    excerpt: L('Nuôi tôm ao bạt hay ao đất tốt hơn? So sánh vốn đầu tư, quản lý đáy, nước, dịch bệnh, và gợi ý mô hình phù hợp với điều kiện của từng hộ nuôi.'),
    body: L(
`Ao bạt dễ kiểm soát đáy, vệ sinh và chuẩn bị ao nhanh hơn, còn ao đất có chi phí xây dựng thấp hơn và môi trường nước thường ổn định hơn. Không có loại ao nào "tốt nhất" cho mọi người: lựa chọn đúng phụ thuộc vào vốn, nguồn nước, loại đất, nguồn điện, mật độ muốn nuôi và trình độ quản lý của hộ nuôi.

Bài viết so sánh công bằng hai mô hình, chỉ ra điểm mạnh, điểm yếu và gợi ý ai nên chọn loại nào, không đưa con số chi phí vì mỗi địa phương, mỗi thời điểm một khác.

## Ao bạt và ao đất khác nhau ở điểm nào?
- **Ao đất:** đáy và bờ là đất tự nhiên (có thể được đầm nén). Nước tiếp xúc trực tiếp với nền đất, đáy tích bùn theo thời gian.
- **Ao bạt:** đáy, thường cả bờ, được lót bằng tấm bạt nhựa (thường là HDPE). Nước không tiếp xúc với đất, đáy trơn, dễ làm sạch.

Ngoài hai dạng trên còn có mô hình lót bạt một phần (chỉ lót bờ, đáy vẫn là đất) hoặc ao nổi, ao bể xi măng. Bài này tập trung vào ao đất và ao bạt phổ biến nhất.

## Ưu điểm và nhược điểm của ao bạt
**Ưu điểm**
- **Kiểm soát đáy tốt:** đáy trơn, có thể xi phông chất thải về một điểm, loại bỏ nhanh phân và thức ăn thừa. Xem bài [quản lý đáy ao bạt nuôi tôm thẻ: xi phông, quạt nước](/vi/blog/quan-ly-day-ao-bat-nuoi-tom-the-xi-phong-quat-nuoc).
- **Hạn chế mầm bệnh tồn lưu trong đất:** bạt không thấm, dễ rửa, sát trùng giữa các vụ.
- **Không bị ảnh hưởng bởi phèn, kim loại và độ chua từ nền đất:** nhất là ở vùng đất phèn.
- **Chuẩn bị ao giữa các vụ nhanh hơn:** không cần phơi đáy lâu để nứt nẻ, chủ yếu là rửa, sát trùng và phơi bạt.
- **Dễ theo dõi tôm, dễ thu hoạch:** đáy nhẵn, ít bùn bám tôm.
- **Phù hợp nuôi mật độ cao hơn** khi có đủ hệ thống quạt, oxy và quản lý tốt.

**Nhược điểm**
- **Vốn đầu tư ban đầu thường cao hơn:** gồm bạt, nhân công lót, hệ thống quạt, ống xi phông, ao lắng và các hạng mục kèm theo.
- **Phụ thuộc điện và thiết bị:** quạt, oxy ngừng là rủi ro lớn, cần máy phát dự phòng.
- **Nhớt bạt, nhớt nước** dễ xuất hiện khi dư hữu cơ. Xem [xử lý nhớt bạt, nhớt nước ao tôm](/vi/blog/xu-ly-nhot-bat-nhot-nuoc-ao-nuoi-tom).
- **Nước ít được "đệm" tự nhiên** nên thông số như nhiệt độ, kiềm, pH có thể biến động nhanh hơn nếu không theo dõi.
- **Bạt có thể rách, thủng** do dụng cụ sắc, cua, chuột, hoặc lão hóa theo thời gian, cần kiểm tra thường xuyên.
- **Đòi hỏi kỹ thuật quản lý** chặt chẽ hơn: xi phông, cho ăn, oxy.

## Ưu điểm và nhược điểm của ao đất
**Ưu điểm**
- **Chi phí xây dựng thấp hơn** so với lót bạt toàn bộ, phù hợp hộ vốn ít hoặc đã có sẵn ao.
- **Nền đáy tự nhiên** có thể hỗ trợ ổn định môi trường: nhiệt độ ít biến động, có tảo và sinh vật đáy làm thức ăn tự nhiên bổ sung (nhất là khi nuôi mật độ vừa phải).
- **Ít phụ thuộc hệ thống thiết bị hơn** khi nuôi mật độ thấp đến trung bình.
- **Có kinh nghiệm truyền thống:** nhiều hộ đã quen cách quản lý ao đất.

**Nhược điểm**
- **Đáy tích bùn, hữu cơ theo từng vụ:** nếu không cải tạo kỹ, đáy sinh khí độc (NH₃, H₂S), tôm dễ bị ảnh hưởng. Xem [khí độc H₂S đáy ao nuôi tôm](/vi/blog/khi-doc-h2s-day-ao-nuoi-tom-nhan-biet-xu-ly).
- **Mầm bệnh dễ tồn lưu trong nền đất và bùn** nếu việc phơi đáy, vôi, sát trùng không đầy đủ.
- **Chuẩn bị ao tốn thời gian hơn:** phơi đáy, cày xới, vét bùn, bón vôi, phụ thuộc thời tiết.
- **Khó xi phông, khó kiểm soát đáy** khi nuôi mật độ cao.
- **Vùng đất phèn, đất cát hoặc đất thấm** có thể phát sinh vấn đề về pH, kim loại, rò rỉ nước, xói lở bờ.
- **Khó quan sát tôm, thu hoạch vất vả hơn** do đáy mềm và bùn.

## Bảng so sánh nhanh ao bạt và ao đất
| Tiêu chí | Ao bạt | Ao đất |
|---|---|---|
| Vốn đầu tư ban đầu | Thường cao hơn | Thường thấp hơn |
| Kiểm soát đáy, chất thải | Dễ, xi phông được | Khó hơn, bùn tích tụ |
| Mầm bệnh tồn lưu | Dễ vệ sinh, sát trùng | Dễ tồn lưu trong đất, bùn |
| Chuẩn bị ao giữa vụ | Nhanh hơn | Mất thời gian hơn |
| Ổn định nhiệt độ, kiềm | Dễ biến động hơn | Thường ổn định hơn |
| Phụ thuộc điện, thiết bị | Cao | Thấp hơn khi nuôi thưa |
| Mật độ phù hợp | Có thể cao nếu quản lý tốt | Thường thấp đến trung bình |
| Rủi ro thường gặp | Nhớt bạt, rách bạt, mất điện | Đáy dơ, khí độc, đất phèn |
| Yêu cầu kỹ thuật | Quản lý chặt, đều đặn | Cần cải tạo đáy tốt giữa vụ |

Bảng chỉ mang tính tổng quát. Một ao đất được quản lý tốt có thể cho kết quả tốt hơn một ao bạt quản lý kém, và ngược lại.

## Quản lý nước và vi sinh khác nhau thế nào?
Sự khác biệt về nền đáy kéo theo cách dùng chế phẩm khác nhau. Ví dụ với **CLEAR 12H**, nhãn hướng dẫn liều khác nhau cho hai loại ao sau khi ủ theo hướng dẫn (1 gói với 3 kg đường và 50 lít nước, sục khí 12 - 24 giờ):

- **Ao bạt:** 15 - 20 lít/1.000 m³ nước, định kỳ 3 ngày dùng 1 lần.
- **Ao đất:** 10 - 15 lít/1.000 m³ nước, định kỳ 5 ngày dùng 1 lần.

Điều này phản ánh thực tế: ao bạt không có đáy đất tự phân hủy nên cần bổ sung vi sinh thường xuyên hơn để xử lý chất thải. Chi tiết cách ủ xem bài [cách ủ vi sinh với đường mật rỉ trước khi tạt ao](/vi/blog/cach-u-vi-sinh-voi-duong-mat-ri-truoc-khi-tat-ao).

## Kiểm soát dịch bệnh: ao nào có lợi hơn?
Ao bạt thuận lợi cho việc vệ sinh và cắt đứt mầm bệnh giữa các vụ vì bề mặt nhẵn, rửa và sát trùng hiệu quả. Tuy vậy, mầm bệnh vẫn có thể vào qua nguồn nước, con giống, dụng cụ, chim, cua hay người ra vào. Với ao đất, mầm bệnh có thể ẩn trong bùn đáy, vì vậy phơi đáy, bón vôi và xử lý đáy kỹ càng là rất quan trọng.

Bất kể loại ao nào, bà con vẫn cần các biện pháp an toàn sinh học cơ bản: ao lắng xử lý nước, rào chắn cua, vệ sinh dụng cụ, chọn giống sạch bệnh. Khi nghi ngờ bệnh, nên xét nghiệm PCR và hỏi kỹ thuật viên, thú y thay vì tự đoán qua dấu hiệu bên ngoài. Xem thêm [6 bệnh thường gặp trên tôm thẻ và cách phòng](/vi/blog/6-benh-thuong-gap-tren-tom-the-va-cach-phong).

## Ai nên chọn ao bạt, ai nên chọn ao đất?
**Ao bạt thường phù hợp khi:**
- Bà con có đủ vốn đầu tư và nguồn điện ổn định.
- Muốn nuôi mật độ cao hơn, kiểm soát chặt đáy và dịch bệnh.
- Vùng đất phèn, đất xấu khó cải tạo.
- Có thời gian, nhân lực để xi phông, theo dõi hằng ngày.

**Ao đất thường phù hợp khi:**
- Vốn hạn chế hoặc đã có sẵn ao đất tốt.
- Nuôi mật độ thấp đến trung bình, ưu tiên chi phí vận hành thấp.
- Có điều kiện phơi đáy, cải tạo đáy kỹ sau mỗi vụ.
- Vùng đất ít phèn, giữ nước tốt.

Một số hộ chọn hướng trung gian: lót bạt bờ, hoặc nuôi ao đất trước rồi nâng cấp dần khi có vốn. Điều quan trọng là chọn mô hình mình có khả năng quản lý đều đặn, vì cả hai đều thất bại nếu bị bỏ bê.

## Sai lầm hay gặp khi chuyển từ ao đất sang ao bạt
1. **Giữ nguyên thói quen cho ăn như ao đất**, trong khi ao bạt không có thức ăn tự nhiên, cho ăn dư dễ gây ô nhiễm nhanh.
2. **Thiếu hệ thống oxy, quạt phù hợp** với mật độ đã tăng lên.
3. **Không xi phông đều đặn**, để chất thải tích tụ thành lớp.
4. **Bỏ qua theo dõi kiềm, pH và nhiệt độ**, vì ao bạt biến động nhanh hơn.
5. **Không kiểm tra bạt** thường xuyên, để thủng nhỏ trở thành rò rỉ lớn.

Tổng thể chi phí và cách tối ưu từng khâu, bà con xem thêm bài [chi phí nuôi tôm thẻ 1 hecta và cách giảm giá thành](/vi/blog/chi-phi-nuoi-tom-the-1-hecta-va-cach-giam-gia-thanh). Phần chuẩn bị ao dùng được cho cả hai mô hình có trong [quy trình chuẩn bị ao nuôi tôm thẻ 7 bước](/vi/blog/quy-trinh-chuan-bi-ao-nuoi-tom-the-7-buoc).

Cần tư vấn cho ao của mình? Gọi hotline 0934 246 420 để kỹ thuật viên Thủy Sản Tím tư vấn miễn phí.

## Câu hỏi thường gặp
### Nuôi tôm ao bạt hay ao đất lãi hơn?
Không thể khẳng định loại nào lãi hơn cho mọi hộ. Ao bạt cần vốn đầu tư cao hơn nhưng dễ kiểm soát hơn và có thể nuôi mật độ cao; ao đất chi phí thấp hơn nhưng đòi hỏi cải tạo đáy kỹ. Lợi nhuận cuối cùng phụ thuộc vào tỷ lệ sống, giá thành và cách quản lý của từng hộ.

### Ao bạt có nuôi mật độ cao hơn ao đất được không?
Thường là có thể, nhờ kiểm soát đáy và chất thải tốt hơn, nhưng chỉ khi hệ thống oxy, quạt và khả năng xi phông đáp ứng được. Mật độ nên chọn theo khả năng của hệ thống và của người quản lý, không nên chỉ chạy theo con số.

### Ao bạt có cần xi phông không?
Có. Xi phông giúp hút chất thải, thức ăn thừa về một điểm và hút bỏ ra ngoài, giảm hữu cơ ở đáy. Đây là việc làm đều đặn, tần suất tùy mật độ và lượng ăn của ao.

### Ao đất cần chuẩn bị gì giữa hai vụ?
Thường gồm vét bớt bùn đáy, phơi đáy, cày xới, bón vôi và sát trùng theo hướng dẫn, rồi lấy nước qua ao lắng. Chi tiết xem bài về quy trình chuẩn bị ao 7 bước. Thời gian phơi phụ thuộc thời tiết và tình trạng đáy.

### Vi sinh cho ao bạt và ao đất có khác nhau không?
Loại vi sinh có thể giống nhau, nhưng liều và tần suất có thể khác. Ví dụ nhãn **CLEAR 12H** hướng dẫn ao bạt dùng 15 - 20 lít/1.000 m³ định kỳ 3 ngày một lần, ao đất dùng 10 - 15 lít/1.000 m³ định kỳ 5 ngày một lần. Bà con luôn đọc kỹ nhãn từng sản phẩm.`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'cach-chon-men-vi-sinh-cho-ao-tom', topic: 'technique', daysAgo: 0.45,
    title: L('Cách chọn men vi sinh cho ao tôm: xử lý nước, đáy hay trộn ăn?'),
    excerpt: L('Cách chọn men vi sinh cho ao tôm: phân biệt vi sinh xử lý nước, đáy và vi sinh trộn ăn, cách đọc chủng và CFU trên nhãn, chọn theo tình huống, tránh sai lầm.'),
    body: L(
`Muốn chọn đúng men vi sinh cho ao tôm, trước hết phải xác định mục đích: xử lý nước và đáy ao (tạt xuống ao) hay hỗ trợ đường ruột tôm (trộn vào thức ăn). Hai nhóm này khác nhau về cách dùng, liều lượng và tác dụng, không thay thế được cho nhau. Sau khi chọn đúng nhóm, bà con đọc nhãn để xem chủng vi sinh, mật độ CFU, liều và cách dùng.

Bài viết hướng dẫn phân biệt ba nhóm vi sinh hay gặp, cách đọc nhãn, cách chọn theo tình huống thực tế trong ao và những sai lầm khiến vi sinh dùng tốn tiền mà không hiệu quả.

## Men vi sinh cho tôm gồm mấy nhóm?
Trong thực tế, bà con thường gặp ba nhóm sản phẩm. Đây là cách phân loại theo mục đích sử dụng để dễ chọn:

1. **Vi sinh xử lý nước ao:** tạt xuống nước để hỗ trợ phân hủy chất hữu cơ lơ lửng, cân bằng hệ vi sinh trong nước, hỗ trợ giảm khí độc, ổn định màu nước.
2. **Vi sinh xử lý đáy ao:** hướng đến phân hủy mùn bã, thức ăn thừa, phân tôm tích tụ ở đáy, giảm mùi hôi, hạn chế H₂S. Nhiều sản phẩm tạt ao vừa dùng cho nước vừa cho đáy.
3. **Vi sinh (lợi khuẩn) trộn thức ăn:** bổ sung vi khuẩn có lợi vào đường ruột để hỗ trợ tiêu hóa, hấp thụ, cải thiện phân.

Một số loại vi sinh dùng trong nuôi tôm gồm nhóm *Bacillus* (như *B. subtilis*, *B. licheniformis*, *B. megaterium*), một số loại men hoặc vi khuẩn lactic, vi khuẩn nitrate hóa... tùy mục đích sản phẩm. *Bacillus* phổ biến vì tạo bào tử, bền hơn khi bảo quản, nhưng mỗi chủng có vai trò riêng nên không thể nói chủng nào "tốt nhất" cho mọi tình huống.

## Vi sinh xử lý nước, đáy dùng khi nào?
Nhóm này được dùng định kỳ để giữ môi trường ổn định, và tăng khi ao có dấu hiệu dư hữu cơ. Các tình huống phù hợp:

- **Đầu vụ, sau khi xử lý nước:** để cấy hệ vi sinh có lợi trước khi tôm lớn, ăn nhiều.
- **Nước có nhớt, bọt nhiều, đáy có mùi:** dấu hiệu hữu cơ dư.

Với **CLEAR 12H**, nhãn ghi công dụng giúp phân hủy mùn bã hữu cơ, thức ăn thừa, xác tảo tàn, phân tôm ở đáy ao; giảm khí độc NH₃, H₂S, giảm mùi hôi; hỗ trợ làm sạch nhớt bạt, nhớt nước. Thành phần: *Bacillus* spp. tối thiểu 1 × 10⁹ CFU/g (gồm *B. licheniformis*, *B. megaterium*, *B. subtilis*). Cách dùng theo nhãn: lấy 1 gói + 3 kg đường cát + 50 lít nước, sục khí 12 - 24 giờ rồi sử dụng. Ao bạt dùng 15 - 20 lít/1.000 m³, định kỳ 3 ngày một lần; ao đất dùng 10 - 15 lít/1.000 m³, định kỳ 5 ngày một lần. Mở quạt hoặc sục khí liên tục khi dùng, dùng khi có nắng, không dùng khi trời mưa.

**ROVAZYME** cũng là vi sinh tạt ao (*B. licheniformis*, *B. megaterium*, *B. mesentericus*, tối thiểu 10⁹ CFU/kg), có công dụng tương tự về phân hủy mùn bã, giảm khí độc, hỗ trợ làm sạch nhớt, hỗ trợ giảm tảo độc. Điểm khác là cách dùng: nhãn hướng dẫn 454 g cho 3.000 m³ nước, hòa nước vừa đủ rồi tạt đều khắp ao vào sáng sớm hoặc chiều mát, định kỳ 5 ngày một lần, tảo dày thì dùng liên tục 2 ngày, mở máy sục khí để tăng hiệu quả.

Hướng dẫn ủ chi tiết xem bài [cách ủ vi sinh với đường mật rỉ trước khi tạt ao](/vi/blog/cach-u-vi-sinh-voi-duong-mat-ri-truoc-khi-tat-ao).

## Vi sinh trộn ăn dùng khi nào?
Nhóm này không xử lý nước mà hỗ trợ **đường ruột của tôm**. Phù hợp khi:

- Muốn duy trì tiêu hóa tốt trong suốt vụ nuôi (liều phòng).
- Tôm có dấu hiệu phân lỏng, phân nát, phân đứt khúc hoặc ruột kém (kết hợp rà soát môi trường, thức ăn).
- Sau các đợt sốc, thay đổi môi trường khiến tôm giảm ăn.

Hai sản phẩm trộn ăn trong danh mục:

- **US LACTO** (dạng bột, gói 500 g): thành phần *Bacillus* spp. tối thiểu 1,7 × 10⁹ CFU/g. Nhãn hướng dẫn trộn 5 g/kg thức ăn, cho ăn 2 - 3 lần/ngày và suốt vụ nuôi; khi có dấu hiệu phân trắng, phân lỏng, phân đứt khúc thì trộn 10 - 15 g/kg thức ăn. Hòa tan với nước sạch rồi trộn đều lên thức ăn, để yên 15 phút rồi cho tôm ăn.
- **BIOTIC 99** (dạng nước, chai 1 lít): thành phần *Bacillus* spp. tối thiểu 1,0 × 10⁹ CFU/lít. Nhãn hướng dẫn 3 ml/kg thức ăn, trộn 3 - 4 lần/ngày liên tục suốt vụ; khi có dấu hiệu bệnh đường ruột trộn 5 - 10 ml/kg thức ăn, 3 - 4 lần/ngày liên tục 5 ngày. Nhãn ghi rõ không dùng chung với acid hữu cơ và kháng sinh.

Cả hai đều ghi công dụng bổ sung lợi khuẩn vào thức ăn, hỗ trợ tiêu hóa, hấp thụ, hỗ trợ cải thiện đường ruột và phân. Bà con tham khảo thêm [men tiêu hóa, lợi khuẩn trộn thức ăn cho tôm](/vi/blog/men-tieu-hoa-loi-khuan-tron-thuc-an-cho-tom) và cách trộn đúng ở bài [cách trộn thuốc, chế phẩm vào thức ăn cho tôm](/vi/blog/cach-tron-thuoc-che-pham-vao-thuc-an-cho-tom).

## Cách đọc chủng vi sinh và CFU trên nhãn
Một nhãn vi sinh nên có đủ các thông tin sau:

- **Tên chủng:** ghi đến tên loài (ví dụ *Bacillus subtilis*). Chỉ ghi chung chung "vi sinh có lợi" mà không nêu chủng thì khó đánh giá.
- **Mật độ vi sinh (CFU):** CFU là đơn vị hình thành khuẩn lạc, đại diện cho số tế bào sống có thể phát triển. Chữ "min" hoặc "tối thiểu" nghĩa là hàm lượng thấp nhất theo công bố.
- **Đơn vị tính:** có sản phẩm ghi CFU/g, có sản phẩm ghi CFU/kg hoặc CFU/lít. Đơn vị khác nhau thì con số không so sánh trực tiếp với nhau được. Ví dụ 10⁹ CFU/kg và 10⁹ CFU/g chênh nhau 1.000 lần.
- **Hạn dùng, số lô, ngày sản xuất:** vi sinh là sinh vật sống, quá hạn hoặc bảo quản sai (nắng nóng, ẩm) thì mật độ sống giảm.
- **Hướng dẫn dùng và bảo quản:** liều, cách hòa, thời điểm, điều kiện bảo quản.

Một lưu ý quan trọng: con số CFU cao hơn không tự động đồng nghĩa với hiệu quả cao hơn. Hiệu quả còn phụ thuộc chủng phù hợp mục đích, liều dùng, chất lượng bảo quản và điều kiện ao (oxy, nhiệt độ, pH, lượng hữu cơ). Bà con nên so sánh trên cùng đơn vị, và chọn sản phẩm có thông tin rõ ràng, nguồn gốc minh bạch.

## Chọn men vi sinh theo tình huống
| Tình huống | Nhóm vi sinh nên cân nhắc | Ghi chú |
|---|---|---|
| Đầu vụ, ổn định môi trường | Vi sinh tạt ao định kỳ | Theo lịch tuần tuổi |
| Nước nhớt, bọt nhiều | Vi sinh xử lý nước, đáy | Kiểm tra cho ăn, xi phông, oxy |
| Đáy dơ, có mùi hôi | Vi sinh xử lý đáy | Kết hợp xi phông, quạt nước |
| Sau mưa lớn, tảo tàn | Vi sinh xử lý nước, đáy | Đợi hết mưa mới dùng theo nhãn |
| Tôm phân lỏng, phân đứt khúc | Vi sinh trộn ăn | Kiểm tra nguyên nhân, hỏi kỹ thuật viên |
| Muốn duy trì tiêu hóa | Vi sinh trộn ăn liều phòng | Dùng đều đặn suốt vụ |

## Cách dùng vi sinh để có hiệu quả
- **Đọc kỹ và làm đúng hướng dẫn trên nhãn:** nhiều sản phẩm cần hòa nước hoặc ủ trước. Với vi sinh cần ủ, sục khí đủ thời gian.
- **Không dùng ngay sau khi sát trùng, diệt tảo bằng hóa chất:** hóa chất có thể làm giảm số vi sinh. Hãy chờ theo hướng dẫn của sản phẩm sát trùng hoặc hỏi kỹ thuật viên.
- **Xem [dùng men vi sinh đúng cách](/vi/blog/dung-men-vi-sinh-dung-cach)** để biết thêm về thời điểm, cách pha và những lưu ý.

## Những sai lầm thường gặp khi dùng vi sinh
1. **Dùng vi sinh tạt ao để "trị" tôm bệnh đường ruột**, hoặc ngược lại dùng vi sinh trộn ăn để xử lý nước. Hai nhóm có vai trò khác nhau.
2. **Hy vọng vi sinh thay thế việc xi phông, giảm ăn, quạt nước.** Vi sinh hỗ trợ phân hủy chất hữu cơ chứ không "xóa" được mọi chất thải.
3. **Không ủ hoặc ủ sai** với sản phẩm cần ủ, dẫn đến vi sinh chưa được kích hoạt.
4. **Chỉ nhìn con số CFU**, bỏ qua đơn vị tính, chủng và liều dùng.
5. **Dùng chung với sản phẩm không tương thích.** Ví dụ nhãn **BIOTIC 99** nêu không dùng chung với acid hữu cơ và kháng sinh. Mỗi sản phẩm có lưu ý riêng, hãy đọc nhãn.

Cần tư vấn cho ao của mình? Gọi hotline 0934 246 420 để kỹ thuật viên Thủy Sản Tím tư vấn miễn phí.

## Câu hỏi thường gặp
### Vi sinh tạt ao và vi sinh trộn ăn khác nhau thế nào?
Vi sinh tạt ao dùng để xử lý nước và đáy: hỗ trợ phân hủy chất hữu cơ, giảm khí độc, làm sạch nhớt. Vi sinh trộn ăn là lợi khuẩn bổ sung vào đường ruột tôm: hỗ trợ tiêu hóa, hấp thụ thức ăn. Hai nhóm bổ sung cho nhau chứ không thay thế nhau.

### CFU là gì, CFU càng cao càng tốt không?
CFU là số đơn vị tạo khuẩn lạc, thể hiện lượng tế bào vi sinh còn sống có khả năng phát triển. CFU cao hơn không tự động tốt hơn vì hiệu quả còn phụ thuộc chủng, liều dùng, bảo quản và điều kiện ao. Cũng cần so sánh trên cùng đơn vị (CFU/g, CFU/kg hay CFU/lít).

### Dùng vi sinh bao lâu thì thấy hiệu quả?
Tùy tình trạng ao, mật độ, lượng hữu cơ và cách dùng nên không có mốc cố định. Bà con nên dùng đúng liều theo nhãn, giữ oxy, quản lý cho ăn và xi phông song song, rồi theo dõi màu nước, mùi đáy, nhớt và phân tôm để đánh giá.

### Có dùng vi sinh cùng lúc với thuốc sát trùng được không?
Không nên dùng cùng lúc. Chất sát trùng có thể làm giảm vi sinh có lợi. Bà con đọc nhãn sát trùng, chờ khoảng thời gian phù hợp rồi mới tạt vi sinh, hoặc hỏi kỹ thuật viên để sắp xếp lịch.

### Vi sinh trộn ăn nên dùng thường xuyên hay chỉ khi tôm có vấn đề?
Có thể dùng cả hai cách. Nhãn **US LACTO** hướng dẫn liều bổ sung hằng ngày 5 g/kg thức ăn suốt vụ, và liều cao hơn 10 - 15 g/kg khi có dấu hiệu phân trắng, phân lỏng, phân đứt khúc. Khi tôm có dấu hiệu bệnh, bà con nên kiểm tra thêm nguyên nhân và hỏi kỹ thuật viên.`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'cach-doc-nhan-thuoc-thuy-san-va-tinh-lieu-dung', topic: 'technique', daysAgo: 0.65,
    title: L('Cách đọc nhãn thuốc, chế phẩm thủy sản và tính liều dùng'),
    excerpt: L('Cách đọc nhãn thuốc, chế phẩm thủy sản: các mục cần xem, ý nghĩa của hàm lượng, và cách tính liều từ 1 lít/3.000 m³ cho ao của mình bằng ví dụ có số liệu.'),
    body: L(
`Để dùng thuốc, chế phẩm thủy sản đúng, bà con cần đọc đủ các mục trên nhãn (thành phần, hàm lượng, công dụng, hướng dẫn, hạn dùng, bảo quản) và biết tính liều theo thể tích nước ao. Công thức cơ bản: lượng cần dùng = thể tích ao ÷ thể tích chuẩn trên nhãn × lượng chuẩn trên nhãn. Ví dụ nhãn ghi 1 lít cho 3.000 m³, ao 1.500 m³ cần 0,5 lít.

Dùng thiếu liều thì không đạt hiệu quả, dùng thừa liều thì lãng phí và có thể gây stress cho tôm. Bài viết giải thích từng mục trên nhãn, cách đổi đơn vị và các ví dụ tính liều tạt ao lẫn trộn thức ăn.

## Trên nhãn thuốc, chế phẩm thủy sản có những mục nào?
Nhãn sản phẩm đáng tin cậy thường có đủ các thông tin sau. Bà con nên kiểm tra trước khi mua và trước khi dùng:

| Mục trên nhãn | Ý nghĩa, cần xem gì |
|---|---|
| Tên sản phẩm | Để đối chiếu đúng sản phẩm, tránh nhầm các loại có tên gần giống nhau |
| Thành phần, hàm lượng | Hoạt chất hoặc vi sinh có trong sản phẩm và lượng tối thiểu (min) |
| Công dụng | Sản phẩm dùng để làm gì (xử lý nước, đáy, bổ sung dinh dưỡng, sát trùng...) |
| Hướng dẫn sử dụng | Liều, tần suất, cách hòa, thời điểm dùng, lưu ý |
| Thời gian ngưng trước thu hoạch | Có ở một số sản phẩm (ví dụ sản phẩm sát trùng) |
| Ngày sản xuất, hạn dùng | Không dùng sản phẩm quá hạn |
| Số lô | Dùng để truy xuất khi có vấn đề, nên chụp ảnh giữ lại |
| Bảo quản | Nhiệt độ, ánh sáng, độ ẩm, để xa tầm tay trẻ em |
| Nhà sản xuất, đơn vị chịu trách nhiệm | Địa chỉ, thông tin liên hệ |
| Thông tin công bố, lưu hành | Số công bố tiêu chuẩn hoặc số lưu hành theo quy định. Có thể hỏi đại lý hoặc cơ quan quản lý để xác minh |

Nếu một sản phẩm thiếu hạn dùng, thiếu thành phần, không rõ nhà sản xuất hoặc chữ in mờ, nên cân nhắc không mua.

## Thành phần và hàm lượng: cách hiểu các đơn vị
Hàm lượng cho biết trong một đơn vị sản phẩm có bao nhiêu hoạt chất. Một số đơn vị hay gặp:

- **%:** phần trăm khối lượng hoặc thể tích. Ví dụ protein tối thiểu 25%.
- **mg/lít, mg/kg:** miligam hoạt chất trong 1 lít hoặc 1 kg sản phẩm.
- **ppm:** phần triệu. Với dung dịch, 1.000 ppm tương đương 1.000 mg/lít, tức 1 g/lít.
- **CFU/g, CFU/kg, CFU/lít:** số đơn vị vi sinh sống trong 1 g, 1 kg hoặc 1 lít sản phẩm.
- **(min):** hàm lượng tối thiểu theo công bố, thực tế có thể cao hơn một chút.

Ví dụ nhãn **SUPER YUCCA** ghi: dịch chiết *Yucca schidigera* tối thiểu 300 ml, hàm lượng saponin trong dịch chiết 12%, dung môi vừa đủ 1.000 ml. Nghĩa là trong mỗi 1.000 ml sản phẩm có tối thiểu 300 ml dịch chiết yucca. Nhãn **MIX 79** ghi P (dạng CaHPO₄) tối thiểu 2.500 mg/kg, Ca (dạng CaCO₃) tối thiểu 2.500 mg/kg, Mg (dạng MgO) tối thiểu 1.200 mg/kg: là các khoáng bổ sung với hàm lượng tính trên mỗi kg sản phẩm.

Bà con không cần nhớ các con số này, nhưng cần so sánh đúng đơn vị khi cân nhắc các sản phẩm tương tự.

## Công dụng ghi trên nhãn nói lên điều gì?
Công dụng cho biết mục đích sử dụng được công bố. Hãy chọn sản phẩm theo đúng nhu cầu và hiểu rằng đa số chế phẩm là hỗ trợ, không phải thuốc chữa bệnh. Ví dụ **SUPER YUCCA** ghi công dụng hấp thụ khí độc NH₃ trong ao nuôi, cải thiện chất lượng nước ao nuôi. Khi tôm có dấu hiệu bệnh, bà con nên xác định nguyên nhân (PCR, kỹ thuật viên, thú y) thay vì chỉ dựa vào chế phẩm.

## Cách đọc hướng dẫn sử dụng: tỉ lệ "X lít/Y m³"
Hướng dẫn tạt ao thường viết theo dạng "dùng X lít (hoặc kg) cho Y m³ nước". Đây là liều chuẩn, bà con cần quy đổi sang thể tích ao của mình. Phần tính thể tích ao xem bài [cách tính thể tích nước ao nuôi tôm](/vi/blog/cach-tinh-the-tich-nuoc-ao-nuoi-tom), nhưng để dễ hình dung, ta dùng một ao mẫu.

**Công thức:** Lượng cần dùng = (Thể tích ao ÷ Y) × X

**Đổi đơn vị cần nhớ:** 1 lít = 1.000 ml; 1 kg = 1.000 g; 1 m³ nước = 1.000 lít.

## Ví dụ tính liều tạt ao với SUPER YUCCA
Nhãn **SUPER YUCCA** hướng dẫn:
- Sử dụng định kỳ: 1 lít cho 5.000 m³ nước, 7 ngày một lần.
- Khi khí độc cao: 1 lít cho 3.000 m³ nước.
- Hòa với nước sạch ao nuôi một lượng vừa đủ rồi tạt đều khắp ao vào sáng sớm hoặc chiều mát, mở quạt nước.

**Ví dụ 1:** ao có diện tích 2.000 m², mực nước 1,2 m, thể tích = 2.000 × 1,2 = 2.400 m³.
- Liều định kỳ: 2.400 ÷ 5.000 × 1 = 0,48 lít = 480 ml.
- Liều khi khí độc cao: 2.400 ÷ 3.000 × 1 = 0,8 lít = 800 ml.

**Ví dụ 2:** ao 1.500 m³.
- Liều định kỳ: 1.500 ÷ 5.000 = 0,3 lít = 300 ml.
- Liều khi khí độc cao: 1.500 ÷ 3.000 = 0,5 lít = 500 ml.

Mẹo kiểm tra nhanh: liều định kỳ 1 lít/5.000 m³ tương đương 200 ml cho mỗi 1.000 m³; liều khi khí độc cao 1 lít/3.000 m³ tương đương khoảng 333 ml cho mỗi 1.000 m³. Ao 2.400 m³ thì 2,4 × 200 = 480 ml, trùng với kết quả trên.

## Ví dụ tính liều dạng bột với MIX 79
Nhãn **MIX 79** hướng dẫn dùng định kỳ 5 kg cho 3.000 m³ nước, 2 ngày một lần, hòa nước rồi tạt đều khắp ao, nên dùng vào lúc chiều tối.

- **Ao 2.400 m³:** 2.400 ÷ 3.000 × 5 = 4 kg.
- **Ao 4.200 m³:** 4.200 ÷ 3.000 × 5 = 7 kg.

Trong các trường hợp đặc biệt, nhãn có liều khác. Ví dụ để tăng độ kiềm: 5 kg cho 1.500 m³ nước, dùng liên tục 2 ngày. Ao 2.400 m³ khi đó cần 2.400 ÷ 1.500 × 5 = 8 kg mỗi ngày. Bà con cần đọc kỹ từng tình huống để áp đúng liều, không lẫn giữa các liều với nhau.

## Cách tính liều trộn thức ăn theo kg
Liều trộn ăn tính theo khối lượng thức ăn, không theo thể tích ao. Công thức: Lượng sản phẩm = Khối lượng thức ăn (kg) × liều mỗi kg.

Ví dụ với **US LACTO**, nhãn hướng dẫn bổ sung hàng ngày 5 g/kg thức ăn, và 10 - 15 g/kg khi có dấu hiệu phân trắng, phân lỏng, phân đứt khúc:
- Một cữ ăn 8 kg thức ăn, liều thường: 8 × 5 = 40 g.
- Một cữ ăn 8 kg, liều cao: 8 × 10 = 80 g đến 8 × 15 = 120 g.
- Trộn cho 30 kg thức ăn trong ngày, liều thường: 30 × 5 = 150 g.

Hòa với nước sạch rồi trộn đều lên thức ăn, để yên 15 phút rồi cho tôm ăn theo nhãn. Chi tiết cách trộn cho đều xem bài [cách trộn thuốc, chế phẩm vào thức ăn cho tôm](/vi/blog/cach-tron-thuoc-che-pham-vao-thuc-an-cho-tom). Lượng thức ăn mỗi cữ có thể ước tính theo [cách tính lượng thức ăn cho tôm thẻ](/vi/blog/cach-tinh-luong-thuc-an-cho-tom-the).

## Sản phẩm nhãn chưa có liều thì làm thế nào?
Nếu nhãn không ghi liều hoặc ghi mờ, bà con không nên tự đoán. Hãy dùng theo hướng dẫn trên nhãn gốc của sản phẩm, hỏi nhà cung cấp hoặc kỹ thuật viên. Bà con hãy xem trực tiếp bao bì sản phẩm thay vì dựa vào trí nhớ hay lời truyền miệng. Ví dụ nhãn **MIX 79** có ghi liều theo từng tình huống (định kỳ, tăng kiềm, cứng vỏ nhanh), mỗi tình huống một liều riêng.

## Những sai sót hay gặp khi dùng thuốc, chế phẩm
1. **Ước chừng thể tích ao sai** nên liều sai theo. Ao hình thang, ao có mái dốc cần tính kỹ.
2. **Lẫn đơn vị:** nhầm ml với lít, g với kg khiến liều sai gấp 1.000 lần.
3. **Dùng sai thời điểm:** ví dụ tạt giữa trưa nắng gắt hoặc khi trời mưa trong khi nhãn khuyến cáo sáng sớm, chiều mát hoặc không dùng khi mưa.
4. **Không hòa nước trước khi tạt** nên sản phẩm lắng cục, phân tán không đều.
5. **Trộn nhiều sản phẩm cùng lúc** mà không đọc lưu ý tương kỵ trên nhãn.
6. **Bỏ qua thời gian ngưng trước thu hoạch** ghi trên nhãn.
7. **Quên ghi chép:** không nhớ đã dùng gì, bao nhiêu, ngày nào. Nên ghi vào sổ cùng số lô.

Cần tư vấn cho ao của mình? Gọi hotline 0934 246 420 để kỹ thuật viên Thủy Sản Tím tư vấn miễn phí.

## Câu hỏi thường gặp
### "1 lít/3.000 m³" nghĩa là gì?
Nghĩa là cứ 3.000 m³ nước ao thì dùng 1 lít sản phẩm. Ao 1.500 m³ dùng 0,5 lít, ao 6.000 m³ dùng 2 lít. Công thức: thể tích ao chia cho 3.000 rồi nhân với 1 lít.

### Tính liều cho ao 2.400 m³ với SUPER YUCCA như thế nào?
Theo nhãn, liều định kỳ là 1 lít/5.000 m³ nên ao 2.400 m³ dùng 2.400 ÷ 5.000 = 0,48 lít (480 ml). Khi khí độc cao dùng liều 1 lít/3.000 m³, tức 2.400 ÷ 3.000 = 0,8 lít (800 ml). Bà con vẫn nên đọc thêm hướng dẫn ghi trên bao bì.

### Có nên tăng liều gấp đôi cho nhanh có hiệu quả không?
Không nên. Dùng vượt liều hướng dẫn trên nhãn có thể gây lãng phí, thay đổi môi trường đột ngột và làm tôm stress. Nếu thấy tình trạng ao nặng, hãy kiểm tra nguyên nhân gốc (cho ăn, oxy, đáy) và hỏi kỹ thuật viên thay vì tự tăng liều.

### Sản phẩm hết hạn nhưng nhìn còn tốt thì dùng được không?
Không nên. Hạn dùng được công bố dựa trên độ ổn định của sản phẩm. Với vi sinh, quá hạn thì lượng vi sinh sống có thể giảm; với các sản phẩm khác, hiệu quả và độ an toàn không còn được bảo đảm.

### Số lô để làm gì và có cần ghi lại không?
Số lô giúp truy xuất nguồn gốc nếu sản phẩm có vấn đề về chất lượng. Bà con nên chụp ảnh nhãn hoặc ghi số lô vào sổ cùng ngày dùng, liều dùng để dễ theo dõi và trao đổi với nhà cung cấp.`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'cach-tinh-the-tich-nuoc-ao-nuoi-tom', topic: 'technique', daysAgo: 0.85,
    title: L('Cách tính thể tích nước ao nuôi tôm để dùng thuốc đúng liều'),
    excerpt: L('Cách tính thể tích nước ao nuôi tôm: diện tích nhân mực nước, ao hình thang có mái dốc, mực nước trung bình, ví dụ có số liệu và bảng tính nhanh dễ làm.'),
    body: L(
`Thể tích nước ao (m³) bằng diện tích mặt ao (m²) nhân với mực nước (m). Ví dụ ao dài 50 m, rộng 40 m, mực nước 1,2 m có thể tích 50 × 40 × 1,2 = 2.400 m³. Với ao có mái dốc hoặc đáy không đều, bà con dùng mực nước trung bình hoặc công thức hình thang để tính gần đúng hơn.

Tính đúng thể tích rất quan trọng vì mọi liều thuốc, chế phẩm, khoáng tạt ao đều tính theo m³ nước. Bài viết hướng dẫn từng bước tính cho ao chữ nhật, ao có mái dốc, ao tròn, cách đo mực nước trung bình, bảng ví dụ và những mẹo đo thực tế.

## Vì sao phải tính đúng thể tích nước ao?
Nhãn sản phẩm thường ghi liều theo dạng "X lít (hoặc kg) cho Y m³ nước". Nếu thể tích ao tính sai, liều dùng sẽ sai theo cùng tỉ lệ:

- Tính **thiếu** thể tích: dùng thiếu liều, hiệu quả kém, phải dùng lại, tốn công.
- Tính **thừa** thể tích: dùng thừa liều, lãng phí, và với sản phẩm nhạy cảm có thể gây stress cho tôm.

Chỉ cần sai 10% về thể tích thì liều sai khoảng 10%. Vì vậy thay vì ước chừng "chắc khoảng 3.000 khối", bà con nên đo và tính cụ thể một lần, ghi lại để dùng cho cả vụ, và tính lại khi mực nước thay đổi nhiều.

## Cách tính thể tích nước ao chữ nhật
**Công thức:** Thể tích (m³) = Chiều dài (m) × Chiều rộng (m) × Mực nước (m)

**Ví dụ 1:** ao dài 50 m, rộng 40 m, mực nước 1,2 m.
- Diện tích = 50 × 40 = 2.000 m².
- Thể tích = 2.000 × 1,2 = 2.400 m³.

**Ví dụ 2:** ao dài 40 m, rộng 25 m, mực nước 1,3 m.
- Diện tích = 40 × 25 = 1.000 m².
- Thể tích = 1.000 × 1,3 = 1.300 m³.

Lưu ý: 1 m³ nước bằng 1.000 lít, nên ao 2.400 m³ chứa 2.400.000 lít nước. Một hecta là 10.000 m², nên ao 1 ha mực nước 1,2 m có 10.000 × 1,2 = 12.000 m³.

## Cách tính thể tích ao hình thang, ao có mái dốc
Ao đất và ao bạt thường có bờ nghiêng (mái dốc) nên mặt nước rộng hơn đáy. Nếu lấy kích thước mặt ao nhân mực nước sẽ tính thừa, lấy kích thước đáy sẽ tính thiếu. Cách tính gần đúng tốt:

**Công thức gần đúng:** Thể tích ≈ Mực nước × (Diện tích mặt nước + Diện tích đáy) ÷ 2

Với ao chữ nhật có mái dốc, mỗi cạnh mặt nước rộng hơn đáy một đoạn bằng mực nước × độ dốc. Độ dốc (hay hệ số mái) thường ghi dạng 1:1,5, nghĩa là cứ cao 1 m thì mái nghiêng ra ngoài 1,5 m.

**Ví dụ:** đáy ao 30 m × 40 m, mực nước 1,5 m, mái dốc 1:1,5.
1. Đoạn nghiêng mỗi phía = 1,5 × 1,5 = 2,25 m.
2. Kích thước mặt nước = (30 + 2 × 2,25) × (40 + 2 × 2,25) = 34,5 × 44,5 = 1.535,25 m².
3. Diện tích đáy = 30 × 40 = 1.200 m².
4. Thể tích ≈ 1,5 × (1.535,25 + 1.200) ÷ 2 = 1,5 × 1.367,6 ≈ 2.051 m³.

Công thức chính xác cho hình chóp cụt cho kết quả khoảng 2.046 m³, chênh lệch rất nhỏ so với 2.051 m³ nên dùng công thức gần đúng là đủ cho việc tính liều. Nếu dùng nhầm diện tích mặt nước nhân cả mực nước (1.535,25 × 1,5 ≈ 2.303 m³) thì lệch hơn 12%, đáng kể khi tính liều.

Điểm cần nhớ: chiều rộng đoạn nghiêng chỉ tính theo mực nước đang có, không tính theo chiều cao toàn bộ bờ ao.

## Mực nước trung bình: đo thế nào?
Ao đất, ao có rốn xi phông hoặc đáy nghiêng thì mực nước mỗi chỗ một khác. Để lấy mực nước trung bình:

1. Chọn 5 - 8 điểm đo phân bố đều: gần bờ, giữa ao, đầu và cuối ao, gần rốn.
2. Đo độ sâu nước từng điểm bằng cọc có chia vạch hoặc sào đo.
3. Cộng các giá trị rồi chia cho số điểm.

**Ví dụ:** đo 6 điểm được 1,0; 1,2; 1,4; 1,5; 1,3; 1,6 m. Tổng = 8,0 m, mực nước trung bình = 8,0 ÷ 6 ≈ 1,33 m. Nếu diện tích ao 3.000 m² thì thể tích ≈ 3.000 × 1,33 = 3.990 m³, làm tròn khoảng 4.000 m³.

Cách này chỉ cho kết quả gần đúng, nhưng tốt hơn rất nhiều so với việc chỉ đo một điểm, nhất là với ao đất đáy không phẳng.

## Cách tính thể tích bể tròn, ao tròn
Với bể tròn hoặc ao tròn có thành đứng:

**Công thức:** Thể tích = 3,14 × bán kính × bán kính × mực nước

**Ví dụ:** bể đường kính 10 m (bán kính 5 m), nước sâu 1,2 m.
- Diện tích đáy = 3,14 × 5 × 5 = 78,5 m².
- Thể tích = 78,5 × 1,2 = 94,2 m³.

## Bảng tính nhanh thể tích ao chữ nhật
Bảng dưới đây dùng cho ao có thành gần như đứng hoặc dùng làm ước tính nhanh (ao có mái dốc nên tính theo phần trên). Các giá trị đã tính sẵn:

| Dài × rộng (m) | Diện tích (m²) | Mực nước (m) | Thể tích (m³) |
|---|---|---|---|
| 30 × 30 | 900 | 1,2 | 1.080 |
| 40 × 25 | 1.000 | 1,3 | 1.300 |
| 50 × 40 | 2.000 | 1,2 | 2.400 |
| 60 × 50 | 3.000 | 1,4 | 4.200 |
| 80 × 50 | 4.000 | 1,5 | 6.000 |
| 100 × 60 | 6.000 | 1,3 | 7.800 |
| 100 × 100 (1 ha) | 10.000 | 1,2 | 12.000 |

Thể tích tăng giảm tỉ lệ thuận với mực nước. Nếu mực nước giảm từ 1,2 m xuống 1,0 m, thể tích còn 1,0 ÷ 1,2 ≈ 83% so với trước.

## Áp dụng vào tính liều thuốc
Khi đã có thể tích, bà con dùng công thức: Lượng dùng = Thể tích ao ÷ Y × X, với nhãn ghi "X cho Y m³".

**Ví dụ với SUPER YUCCA** (nhãn: định kỳ 1 lít/5.000 m³, khi khí độc cao 1 lít/3.000 m³):
| Thể tích ao | Liều định kỳ | Liều khi khí độc cao |
|---|---|---|
| 1.300 m³ | 0,26 lít (260 ml) | 0,43 lít (khoảng 433 ml) |
| 2.400 m³ | 0,48 lít (480 ml) | 0,8 lít (800 ml) |
| 4.200 m³ | 0,84 lít (840 ml) | 1,4 lít |
| 6.000 m³ | 1,2 lít | 2 lít |

Hướng dẫn trên nhãn **SUPER YUCCA**: hòa với nước sạch ao nuôi vừa đủ rồi tạt đều khắp ao lúc sáng sớm hoặc chiều mát, mở quạt nước. Với khoáng **MIX 79** (nhãn: dùng định kỳ 5 kg/3.000 m³), ao 2.400 m³ cần 2.400 ÷ 3.000 × 5 = 4 kg; ao 6.000 m³ cần 10 kg. Hướng dẫn chi tiết cách đọc nhãn và đổi đơn vị xem bài [cách đọc nhãn thuốc, chế phẩm thủy sản và tính liều dùng](/vi/blog/cach-doc-nhan-thuoc-thuy-san-va-tinh-lieu-dung).

## Mẹo đo thực tế cho dễ và chính xác
- **Đo kích thước ao bằng thước dây hoặc dây có đánh dấu.** Có thể dùng bản đồ vệ tinh hoặc ứng dụng đo diện tích trên điện thoại để ước tính ban đầu rồi đối chiếu bằng đo thực tế.
- **Làm cọc đo mực nước cố định** có chia vạch (ví dụ mỗi 10 cm) ở vài vị trí trong ao, nhìn là biết mực nước hiện tại.
- **Ghi lại mực nước mỗi tuần** hoặc sau khi thay nước, mưa lớn, bốc hơi nhiều và tính lại thể tích.
- **Chú ý đơn vị đo đất địa phương.** Một "công" đất ở mỗi vùng có thể khác nhau (thường gặp 1.000 m² hoặc 1.296 m²). Bà con nên quy ra mét vuông bằng cách đo thực tế để tránh nhầm.

## Sai số bao nhiêu thì chấp nhận được?
Trong thực tế, không thể tính chính xác tuyệt đối vì đáy ao không phẳng, bờ không thẳng, mực nước thay đổi theo ngày. Với đa số chế phẩm môi trường, sai số vài phần trăm (khoảng 5 - 10%) là điều khó tránh và thường chấp nhận được, miễn là bà con không tính nhầm lớn (ví dụ quên không nhân mực nước, hoặc nhầm đơn vị). Với các sản phẩm nhạy cảm như sát trùng, diệt tảo, hãy tính cẩn thận hơn và đọc kỹ nhãn. Nếu cần dùng thuốc với liều chính xác, nên nhờ kỹ thuật viên hỗ trợ.

Tính thể tích xong, bà con có thể áp dụng vào liều vi sinh, khoáng, xử lý nước theo lịch trong [quy trình nuôi tôm thẻ chân trắng từ A đến Z](/vi/blog/quy-trinh-nuoi-tom-the-chan-trang-tu-a-den-z). Nếu cần thông tin khi thả giống, xem [xử lý nước trước khi thả giống tôm](/vi/blog/xu-ly-nuoc-truoc-khi-tha-giong-tom).

Cần tư vấn cho ao của mình? Gọi hotline 0934 246 420 để kỹ thuật viên Thủy Sản Tím tư vấn miễn phí.

## Câu hỏi thường gặp
### Công thức tính thể tích nước ao là gì?
Thể tích (m³) = diện tích mặt nước (m²) × mực nước (m). Ví dụ ao 2.000 m² mực nước 1,2 m có 2.000 × 1,2 = 2.400 m³. Với ao có mái dốc dùng công thức gần đúng: mực nước × (diện tích mặt nước + diện tích đáy) ÷ 2.

### 1 ha ao nuôi tôm có bao nhiêu m³ nước?
1 ha = 10.000 m². Nếu mực nước 1,2 m thì có 12.000 m³, nếu mực nước 1,5 m thì có 15.000 m³. Thể tích thay đổi theo mực nước thực tế.

### Ao có mái dốc thì tính thể tích như thế nào?
Tính diện tích mặt nước (đáy cộng phần nghiêng hai phía theo mực nước và độ dốc), tính diện tích đáy, rồi lấy mực nước nhân trung bình cộng hai diện tích. Cách này cho kết quả gần đúng rất sát với công thức hình chóp cụt.

### Mực nước thay đổi thì có cần tính lại không?
Có. Thể tích tỉ lệ thuận với mực nước. Khi mực nước giảm do bốc hơi, xi phông hoặc tăng do mưa, thay nước, bà con nên đo lại và tính lại trước khi dùng thuốc, chế phẩm, nhất là các sản phẩm nhạy cảm với liều.

### Dùng chế phẩm theo nhãn "1 lít/5.000 m³" cho ao 1.500 m³ thì cần bao nhiêu?
Lấy 1.500 ÷ 5.000 = 0,3 lít, tức 300 ml. Đây là ví dụ cách quy đổi tỉ lệ trên nhãn. Với **SUPER YUCCA**, đó là liều định kỳ theo nhãn cho ao 1.500 m³; bà con vẫn nên đọc thêm hướng dẫn ghi trên bao bì.`),
  },
];
