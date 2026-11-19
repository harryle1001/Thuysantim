'use strict';
/**
 * Batch A of long-form Vietnamese guides: water & pond environment.
 * Same conventions as seed-posts.js (see src/services/article.js):
 *   ## headings -> table of contents, "## Câu hỏi thường gặp" -> FAQ + FAQPage schema,
 *   **PRODUCT NAME** (exact `ten` from nhan/san-pham.json) -> automatic product link.
 * Vietnamese only: en/zh fall back to vi.
 */
const L = (vi, en, zh) => ({ vi, en, zh });

module.exports = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'xu-ly-nhot-bat-nhot-nuoc-ao-nuoi-tom', topic: 'technique', daysAgo: 0,
    title: L('Xử lý nhớt bạt, nhớt nước ao tôm: nguyên nhân và cách làm sạch'),
    excerpt: L('Nhớt bạt, nước nhớt nổi bọt là dấu hiệu ao dư hữu cơ. Bài viết giải thích nguyên nhân, cách nhận biết sớm và quy trình xử lý nhớt ao tôm từng bước cho bà con.'),
    body: L(
`Bà con nuôi tôm ao bạt chắc không lạ cảnh này: sáng ra thấy bọt trắng gom thành vệt dài cuối hướng quạt, lấy tay vuốt mép bạt thấy trơn tuột, múc ly nước lên soi thì nước sánh, hơi đục, để lâu bọt không tan. Đó là hiện tượng **nhớt bạt, nhớt nước** — một trong những dấu hiệu sớm nhất cho thấy ao đang dư chất hữu cơ và hệ vi sinh trong ao bắt đầu mất cân bằng.

Nhớt không làm tôm chết ngay, nhưng nếu để kéo dài thì oxy hòa tan giảm, khí độc tăng, vi khuẩn có hại (nhất là nhóm *Vibrio*) có chỗ bám và sinh sôi. Tôm trong ao nhớt thường ăn kém, mang bẩn, dễ đóng rong, chậm lột xác. Bài này giải thích nhớt từ đâu ra, nhận biết thế nào và xử lý ra sao cho bền.

## Nhớt bạt, nhớt nước là gì?
"Nhớt" thực chất là một lớp màng sinh học (biofilm) gồm vi khuẩn, nấm, tảo tàn, protein và chất nhầy do chính vi sinh vật tiết ra. Lớp màng này bám lên mặt bạt, ống xi phông, dây oxy, cánh quạt và lơ lửng trong nước. Khi nồng độ chất hữu cơ hòa tan cao, nước có sức căng bề mặt thay đổi, quạt đánh vào là tạo bọt và bọt rất lâu tan.

Có thể chia làm hai dạng:

- **Nhớt bạt:** màng nhầy bám thành bạt, đáy bạt, khu vực ít dòng chảy. Sờ tay thấy trơn, có khi kéo thành sợi. Màu thường nâu, xám hoặc xanh rêu.
- **Nhớt nước:** chất nhầy phân tán trong cột nước, nước sánh, bọt trắng hoặc bọt vàng nổi nhiều, độ trong giảm dù màu tảo không đậm.

Hai dạng thường đi cùng nhau. Ao đã nhớt nước thì sớm muộn bạt cũng nhớt, và ngược lại.

## Nguyên nhân gây nhớt ao tôm
Nguyên nhân gốc rễ gần như luôn là **chất hữu cơ vào ao nhiều hơn khả năng phân hủy của hệ vi sinh**. Cụ thể:

1. **Cho ăn dư:** thức ăn thừa và phân tôm là nguồn đạm lớn nhất. Đến tháng thứ hai, khi lượng ăn tăng nhanh, nếu không kiểm tra nhá mà cứ theo bảng thì rất dễ dư.
2. **Tảo phát triển quá dày rồi tàn:** xác tảo phân hủy giải phóng nhiều chất nhầy. Sau những đợt mưa kéo dài hoặc sau khi diệt tảo, nhớt thường xuất hiện rõ.
3. **Lạm dụng đường, mật rỉ, chế phẩm dinh dưỡng tạt ao:** carbon hữu cơ đưa vào quá nhiều trong lúc oxy không đủ sẽ thúc đẩy nhóm vi khuẩn tạo nhầy phát triển.
4. **Xi phông không đều, quạt bố trí chưa hợp lý:** chất thải không gom về rốn mà rải khắp đáy, tạo các "vùng chết" nơi nhớt bám dày.
5. **Thiếu oxy về đêm:** vi khuẩn hiếu khí phân hủy kém, chất hữu cơ tích lũy.
6. **Sau khi dùng hóa chất diệt khuẩn liều cao:** hệ vi sinh có lợi bị suy giảm, xác vi sinh và tảo chết làm nước nhớt trong vài ngày tiếp theo.
7. **Độ mặn thấp, nước ngọt hóa:** ao nuôi độ mặn thấp (dưới 5‰) thường dễ nhớt và nổi bọt hơn.

## Cách nhận biết ao đang nhớt
Bà con nên kiểm tra mỗi sáng, chỉ mất vài phút:

| Dấu hiệu | Mức nhẹ | Mức nặng |
|---|---|---|
| Bọt cuối hướng quạt | Bọt trắng, tan trong vài phút | Bọt dày, vàng hoặc nâu, để cả giờ không tan |
| Thành bạt | Hơi trơn khi vuốt | Trơn nhầy, kéo thành sợi, có mùi tanh |
| Nước | Hơi sánh, độ trong giảm nhẹ | Nước đục, sánh, màu tảo không rõ |
| Tôm | Ăn bình thường | Giảm ăn, tấp mé, mang bẩn, đóng rong |
| Dụng cụ | Dây oxy, sàng ăn hơi nhớt | Sàng ăn, ống xi phông phủ lớp nhầy dày |

Một mẹo đơn giản: múc nước ao vào chai nhựa trong, lắc mạnh 10 giây rồi để yên. Nước sạch thì bọt tan gần hết trong khoảng một phút; nước nhớt thì bọt đứng lâu, mịn như bọt xà phòng.

## Tác hại nếu không xử lý kịp
- **Giảm oxy hòa tan:** lớp nhầy cản trao đổi khí ở mặt nước, đồng thời vi sinh vật phân hủy chất nhầy tiêu tốn nhiều oxy.
- **Tăng khí độc:** chất hữu cơ phân hủy không hết sinh NH₃; ở các vùng đáy thiếu oxy còn sinh H₂S.
- **Ổ chứa vi khuẩn có hại:** biofilm là nơi *Vibrio* bám và nhân lên, làm tăng nguy cơ tôm bị bệnh đường ruột, đen mang, phát sáng.
- **Tôm stress, chậm lớn:** mang bị bám bẩn, tôm hô hấp khó, ăn kém, lột xác không đều.

## Quy trình xử lý nhớt bạt, nhớt nước từng bước
### Bước 1: Giảm nguồn hữu cơ đưa vào
- Giảm 20–30% lượng thức ăn trong 2–3 ngày, theo dõi sát nhá để điều chỉnh. Tôm không đói chết vì giảm ăn vài ngày, nhưng có thể chết vì môi trường xấu.
- Tạm ngưng tạt đường, mật rỉ, chế phẩm dinh dưỡng cho đến khi ao bớt nhớt.

### Bước 2: Lấy bớt chất thải ra khỏi ao
- Tăng số lần xi phông đáy; với ao tròn có rốn, xi phông đến khi nước ra trong.
- Vớt bọt gom cuối hướng quạt bằng vợt lưới mịn.
- Nếu có nguồn nước sạch đã xử lý, thay 15–30% nước tùy mức độ. Không thay quá nhiều một lần để tránh tôm sốc môi trường.
- Chà nhẹ thành bạt khu vực mực nước dao động, nơi nhớt bám dày nhất.

### Bước 3: Tăng oxy
Mở thêm quạt, nhất là từ 22 giờ đến sáng. Oxy đủ (tham khảo duy trì từ 4–5 mg/L trở lên) giúp vi khuẩn hiếu khí phân hủy chất hữu cơ nhanh hơn và hạn chế khí độc.

### Bước 4: Dùng vi sinh phân hủy hữu cơ
Đây là bước giúp ao "tự làm sạch" một cách bền vững. Nên chọn vi sinh chứa nhóm *Bacillus* có khả năng phân hủy đạm, tinh bột, chất béo.

Ví dụ, **CLEAR 12H** là vi sinh xử lý đáy chứa *Bacillus licheniformis*, *B. megaterium*, *B. subtilis*, có công dụng giúp phân hủy mùn bã hữu cơ, thức ăn thừa, xác tảo tàn, phân tôm, giảm khí độc NH₃, H₂S và hỗ trợ làm sạch nhớt bạt, nhớt nước. Cách dùng theo nhãn:

- Ủ 1 gói **CLEAR 12H** với 3 kg đường cát (vàng hoặc trắng) và 50 lít nước, sục khí 12–24 giờ rồi đem sử dụng.
- **Ao bạt:** dùng 15–20 lít dịch ủ cho 1.000 m³ nước, định kỳ 3 ngày một lần.
- **Ao đất:** dùng 10–15 lít cho 1.000 m³ nước, định kỳ 5 ngày một lần.
- Mở quạt hoặc sục khí liên tục khi sử dụng; dùng khi có nắng, không dùng khi trời mưa.

Nếu bà con không tiện ủ, có thể tham khảo **ROVAZYME** — cũng là vi sinh phân hủy mùn bã hữu cơ, hỗ trợ làm sạch nhớt bạt. Theo nhãn: dùng 454 g cho 3.000 m³ nước, hòa nước tạt đều khắp ao vào sáng sớm hoặc chiều mát, định kỳ 5 ngày một lần, mở máy sục khí để tăng hiệu quả.

Lưu ý: **không dùng vi sinh cùng ngày với hóa chất diệt khuẩn**. Nếu vừa sát trùng nước, chờ ít nhất 2–3 ngày (tùy loại hóa chất) mới cấy vi sinh.

### Bước 5: Ổn định lại tảo và khoáng
Sau khi nhớt giảm, nước thường trong hơn, cần duy trì màu tảo ổn định để tránh tảo đáy phát triển. Kiểm tra độ kiềm (tham khảo 120–180 mg CaCO₃/L) và pH (tham khảo 7,5–8,5, dao động ngày đêm không quá 0,5). Kiềm thấp làm pH dao động, tảo dễ tàn và vòng nhớt lặp lại.

## Những sai lầm hay gặp khi xử lý nhớt
- **Tạt thêm đường cho "vi sinh có thức ăn":** khi ao đã dư hữu cơ, thêm carbon mà thiếu oxy chỉ làm nhớt nặng hơn.
- **Dùng hóa chất diệt khuẩn liều mạnh để "cắt nhớt":** nhớt có thể giảm vài hôm, nhưng hệ vi sinh bị phá, xác vi sinh và tảo chết lại làm ao nhớt trở lại, kèm nguy cơ tảo tàn, tụt oxy.
- **Chỉ tạt vi sinh mà không giảm ăn, không xi phông:** vi sinh không theo kịp lượng chất thải mới đưa vào mỗi ngày.
- **Dùng vi sinh khi trời mưa, quạt tắt:** vi sinh hiếu khí cần oxy; dùng lúc thiếu oxy hiệu quả kém.

## Phòng nhớt ngay từ đầu vụ
1. Cho ăn theo nhá, chia nhiều cữ, không để thức ăn tồn dư.
2. Bố trí quạt tạo dòng chảy tròn, gom chất thải về rốn; xi phông đều đặn từ khoảng tuần thứ 3–4.
3. Dùng vi sinh xử lý đáy định kỳ theo hướng dẫn nhà sản xuất, không đợi đến khi ao nhớt mới dùng.
4. Duy trì kiềm và khoáng ổn định để tảo không tàn đột ngột.
5. Sau mưa lớn, sau diệt tảo, sau sát trùng: theo dõi bọt và độ nhớt sát hơn 3–5 ngày.
6. Ghi sổ nhật ký: lượng ăn, xi phông, vi sinh, thông số nước. Khi nhớt xuất hiện, lật sổ là thấy nguyên nhân.

Liều lượng thực tế còn tùy mật độ, tuổi tôm và tình trạng ao. Bà con nên trao đổi với kỹ thuật viên trước khi điều chỉnh liều.

## Câu hỏi thường gặp
### Nước ao nổi bọt nhiều có phải luôn là nhớt không?
Không hẳn. Bọt trắng tan nhanh sau quạt là bình thường. Bọt dày, vàng nâu, để lâu không tan, kèm bạt trơn và nước sánh mới là dấu hiệu nhớt do dư hữu cơ.

### Bao lâu thì hết nhớt bạt?
Nếu giảm ăn, xi phông, tăng oxy và dùng vi sinh đúng cách, thường sau vài lần xử lý định kỳ bà con sẽ thấy bọt giảm, bạt bớt trơn. Thời gian cụ thể tùy mức độ nhớt và lượng chất thải trong ao.

### Có nên dùng vôi hoặc hóa chất để cắt nhớt nhanh?
Không nên lạm dụng. Hóa chất diệt khuẩn có thể làm nhớt giảm tạm thời nhưng phá hệ vi sinh có lợi, dễ gây tảo tàn và nhớt quay lại. Ưu tiên giảm nguồn hữu cơ và dùng vi sinh.

### Tạt vi sinh xử lý nhớt vào giờ nào tốt?
Với **CLEAR 12H**, nhãn hướng dẫn dùng khi có nắng, không dùng khi trời mưa và mở quạt liên tục. Nhìn chung nên tạt khi oxy trong ao đủ, tránh lúc rạng sáng oxy thấp.

### Ao nuôi độ mặn thấp có dễ bị nhớt hơn không?
Có. Ao độ mặn thấp thường dễ nổi bọt, nhớt và khoáng thiếu. Bà con cần chú ý bổ sung khoáng, giữ kiềm ổn định và kiểm soát lượng thức ăn chặt hơn.`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'cach-u-vi-sinh-voi-duong-mat-ri-truoc-khi-tat-ao', topic: 'technique', daysAgo: 0.15,
    title: L('Cách ủ vi sinh với đường, mật rỉ: tỷ lệ, thời gian sục khí, lỗi sai'),
    excerpt: L('Hướng dẫn ủ vi sinh với đường hoặc mật rỉ trước khi tạt ao tôm: dụng cụ, nguồn nước, tỷ lệ, thời gian sục khí, cách nhận biết mẻ ủ đạt và các lỗi hay mắc.'),
    body: L(
`Ủ vi sinh trước khi tạt là thói quen phổ biến ở các ao tôm miền Tây. Làm đúng, mẻ ủ giúp vi khuẩn có lợi "thức dậy" và nhân lên trước khi xuống ao, nhờ đó chiếm ưu thế nhanh hơn. Làm sai, bà con có thể tạt xuống ao một thùng nước chua, nhiễm tạp, thậm chí đưa thêm vi khuẩn có hại vào ao.

Bài này hướng dẫn **cách ủ vi sinh với đường hoặc mật rỉ** theo trình tự, giải thích vì sao phải làm như vậy và liệt kê những lỗi thường gặp để bà con tránh.

## Vì sao phải ủ vi sinh trước khi tạt?
Phần lớn vi sinh xử lý nước, xử lý đáy dạng bột chứa vi khuẩn *Bacillus* ở dạng bào tử — dạng "ngủ" để chịu được khô, nóng khi bảo quản. Khi gặp nước, dinh dưỡng và oxy, bào tử nảy mầm thành tế bào hoạt động. Ủ trước giúp:

- **Rút ngắn thời gian khởi động:** vi khuẩn đã hoạt động khi xuống ao, bắt đầu phân hủy chất hữu cơ sớm hơn.
- **Tăng mật độ vi khuẩn có lợi:** trong điều kiện thuận lợi, vi khuẩn nhân lên trong thùng ủ.
- **Tiết kiệm chế phẩm:** nhiều sản phẩm được thiết kế để dùng sau khi ủ, liều lượng ghi trên nhãn tính theo dịch ủ.

Tuy nhiên, **không phải sản phẩm nào cũng cần ủ**. Có loại nhà sản xuất hướng dẫn hòa nước tạt trực tiếp. Nguyên tắc số một: làm theo hướng dẫn trên nhãn của từng sản phẩm.

## Chuẩn bị dụng cụ và nguyên liệu
| Hạng mục | Yêu cầu | Lý do |
|---|---|---|
| Thùng ủ | Nhựa sạch, có nắp, dung tích lớn hơn lượng ủ 20–30% | Tránh nhiễm tạp, chừa chỗ cho bọt |
| Nguồn nước | Nước ao lắng đã hết dư lượng hóa chất, hoặc nước giếng không nhiễm phèn | Clo, thuốc sát trùng dư sẽ giết vi khuẩn |
| Sục khí | Máy sục và đá bọt (sủi) đặt ở đáy thùng | Vi khuẩn *Bacillus* cần oxy để phát triển |
| Đường | Đường cát vàng hoặc trắng, hoặc mật rỉ đường | Nguồn carbon, "thức ăn" cho vi khuẩn |
| Vị trí | Nơi râm mát, tránh mưa và nắng gắt trực tiếp | Nhiệt độ quá cao hoặc thấp đều không tốt |

**Không dùng thùng kim loại** (sắt, tôn) vì dễ gỉ và dịch ủ có tính axit nhẹ làm hòa tan kim loại. **Không dùng nước máy có clo** chưa được khử. Nếu chỉ có nước máy, để thùng nước hở và sục khí vài giờ cho bay bớt clo trước khi ủ.

## Đường cát hay mật rỉ?
- **Đường cát:** sạch, dễ hòa tan, thành phần ổn định, ít tạp chất. Phù hợp khi nhãn sản phẩm hướng dẫn dùng đường cát.
- **Mật rỉ đường:** rẻ, có thêm khoáng và vi lượng, nhưng chất lượng không đồng đều, có thể lẫn tạp chất, dễ lên men chua nếu để lâu. Nên mua ở nơi uy tín, bảo quản kín.

Nếu nhãn sản phẩm ghi rõ dùng đường cát, bà con nên theo đúng hướng dẫn. Khi thay bằng mật rỉ, lượng dùng và kết quả có thể khác, nên hỏi kỹ thuật viên trước.

## Quy trình ủ vi sinh từng bước
### Bước 1: Vệ sinh thùng ủ
Rửa sạch thùng, tráng lại bằng nước sạch. Không dùng xà phòng hay hóa chất tẩy rửa rồi để sót lại trong thùng.

### Bước 2: Cho nước và hòa đường
Cho nước vào thùng theo đúng lượng hướng dẫn, hòa tan hết đường trước. Đường tan hoàn toàn thì vi khuẩn mới sử dụng đều.

### Bước 3: Cho vi sinh vào, khuấy đều
Rắc vi sinh từ từ, khuấy đều để bột không vón cục.

### Bước 4: Sục khí liên tục
Đặt đá sủi ở đáy thùng, sục khí mạnh và liên tục suốt thời gian ủ. Đậy nắp hờ (chừa khe cho khí thoát) để tránh côn trùng, bụi, nước mưa.

### Bước 5: Kiểm tra và đem tạt
Hết thời gian ủ, kiểm tra màu, mùi, bọt (xem phần dưới) rồi tạt đều khắp ao khi quạt đang chạy.

### Ví dụ một công thức ủ theo nhãn
Với **CLEAR 12H**, nhãn hướng dẫn: lấy 1 gói vi sinh + 3 kg đường cát (vàng hoặc trắng) + 50 lít nước, **sục khí từ 12 đến 24 giờ** rồi đem sử dụng. Liều tạt: ao bạt 15–20 lít dịch ủ cho 1.000 m³ nước, định kỳ 3 ngày một lần; ao đất 10–15 lít cho 1.000 m³, định kỳ 5 ngày một lần. Mở quạt hoặc máy sục khí liên tục khi dùng, dùng khi có nắng, không dùng khi trời mưa.

Như vậy một mẻ 50 lít dùng được cho khoảng 2.500–3.300 m³ ao bạt hoặc 3.300–5.000 m³ ao đất mỗi lần tạt. Bà con tính thể tích ao (diện tích × độ sâu nước) để chia cho đúng.

Ngược lại, **ROVAZYME** được hướng dẫn hòa với nước một lượng vừa đủ rồi tạt đều khắp ao (454 g cho 3.000 m³ nước, định kỳ 5 ngày một lần) — tức là không yêu cầu ủ. Đây là ví dụ cho thấy mỗi sản phẩm một cách dùng, đừng áp một công thức cho mọi loại.

## Thời gian ủ bao lâu là đủ?
Thời gian ủ phổ biến cho vi sinh *Bacillus* là 6–24 giờ tùy sản phẩm và nhiệt độ. Một số điểm cần nhớ:

- **Ủ quá ngắn:** bào tử chưa nảy mầm hết, lợi ích của việc ủ giảm.
- **Ủ quá lâu:** đường cạn, dịch ủ chua dần, vi khuẩn bắt đầu suy yếu, đồng thời nguy cơ vi khuẩn tạp phát triển tăng lên.
- **Nhiệt độ:** trời nóng vi khuẩn phát triển nhanh, có thể dùng ở mức thời gian ngắn trong khoảng nhãn cho phép; trời lạnh có thể cần thời gian dài hơn trong khoảng đó.

Tốt nhất bà con canh giờ ủ sao cho mẻ ủ xong đúng lúc cần tạt (ví dụ ủ từ chiều hôm trước để sáng hôm sau có nắng thì tạt).

## Nhận biết mẻ ủ đạt và mẻ ủ hỏng
| Tiêu chí | Mẻ ủ đạt | Mẻ ủ có vấn đề |
|---|---|---|
| Mùi | Thơm nhẹ mùi men, hơi chua dịu | Thối, hôi như trứng ung, chua gắt |
| Màu | Đục đều, màu nâu nhạt hoặc vàng nhạt tùy đường | Có váng đen, xanh, đốm mốc |
| Bọt | Có lớp bọt mịn trên mặt | Không có bọt dù sục khí tốt, hoặc bọt nhầy đặc bất thường |
| Cặn | Ít cặn | Cặn đen dưới đáy thùng |

Nếu mẻ ủ có mùi thối hoặc màu lạ, **không tạt xuống ao**. Đổ bỏ ra khu vực xa ao, vệ sinh thùng và ủ lại mẻ mới.

## Những lỗi hay gặp khi ủ vi sinh
1. **Dùng nước còn clo hoặc thuốc sát trùng:** lỗi phổ biến nhất. Nước ao vừa diệt khuẩn hôm trước, lấy ủ hôm sau là vi sinh chết gần hết.
2. **Không sục khí hoặc sục yếu:** vi khuẩn *Bacillus* cần oxy. Ủ kín không sục dễ tạo điều kiện cho vi khuẩn yếm khí, sinh mùi hôi.
3. **Cho quá nhiều đường "cho vi sinh khỏe":** dịch ủ chua nhanh, pH tụt, và khi tạt xuống ao lại đưa thêm carbon hữu cơ, có thể góp phần làm nước nhớt.
4. **Ủ quá lâu, để qua ngày qua đêm nhiều lần:** dịch ủ "quá đát", hiệu quả kém.
5. **Dùng chung thùng ủ với thùng pha hóa chất:** dư lượng hóa chất bám thành thùng làm hỏng mẻ ủ.
6. **Ủ ngoài nắng gắt:** thùng nhựa phơi nắng trưa có thể nóng quá mức thích hợp cho vi khuẩn.
7. **Tạt vi sinh ngay sau khi sát trùng nước:** cần chờ hết dư lượng hóa chất (thường 2–3 ngày, tùy loại) rồi mới tạt.
8. **Tạt lúc trời mưa, quạt tắt:** vi sinh xuống ao không có oxy để hoạt động.

## Một số lưu ý an toàn
- Pha và ủ xa khu vực chứa hóa chất, thuốc sát trùng.
- Rửa tay sạch sau khi thao tác.
- Không để trẻ em chơi gần thùng ủ đang sục khí.
- Đọc kỹ hướng dẫn trên bao bì; nếu chưa chắc về liều lượng cho ao của mình, hỏi kỹ thuật viên.

## Câu hỏi thường gặp
### Có thể ủ vi sinh bằng nước ao đang nuôi tôm không?
Có, nếu nước ao không vừa dùng hóa chất sát trùng trong vài ngày gần đây. Nước ao có độ mặn và nhiệt độ gần với môi trường mà vi sinh sẽ được tạt xuống, khá phù hợp.

### Ủ vi sinh xong để được bao lâu?
Nên dùng ngay sau khi hết thời gian ủ theo nhãn. Để lâu đường cạn, dịch chua dần và vi khuẩn suy yếu, nguy cơ nhiễm tạp tăng.

### Dùng mật rỉ thay đường cát được không?
Được với nhiều loại vi sinh, nhưng mật rỉ có chất lượng không đồng đều. Nếu nhãn sản phẩm ghi dùng đường cát, nên theo đúng hướng dẫn hoặc hỏi kỹ thuật viên trước khi thay.

### Vì sao mẻ ủ có mùi thối?
Thường do thiếu oxy (không sục hoặc sục yếu), thùng bẩn, nguồn nước nhiễm tạp hoặc ủ quá lâu. Mẻ ủ có mùi thối không nên tạt xuống ao.

### Sản phẩm vi sinh nào cũng cần ủ phải không?
Không. Có loại nhà sản xuất hướng dẫn ủ với đường và sục khí, có loại chỉ cần hòa nước tạt trực tiếp. Luôn làm theo hướng dẫn trên nhãn từng sản phẩm.`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'yucca-trong-nuoi-tom-tac-dung-cach-dung', topic: 'technique', daysAgo: 0.3,
    title: L('Yucca trong nuôi tôm: tác dụng hấp thu NH3, khi nào dùng, cách dùng'),
    excerpt: L('Yucca giúp hấp thu khí độc NH3 trong ao tôm. Tìm hiểu cơ chế, thời điểm nên dùng, liều định kỳ và khi khí độc cao, cùng lưu ý để dùng yucca hiệu quả.'),
    body: L(
`Hỏi bà con nuôi tôm trong kho thuốc thường có gì, gần như ai cũng kể tên một chai **yucca**. Yucca được dùng rộng rãi để xử lý khí độc NH₃, nhất là giai đoạn cuối vụ khi lượng ăn lớn và chất thải nhiều. Nhưng không ít người dùng yucca như "thuốc tiên": thấy tôm yếu là tạt, mà không xem lại vì sao khí độc tăng.

Bài này giải thích yucca là gì, tác dụng thực tế trong ao tôm, khi nào nên dùng và cách dùng sao cho hiệu quả.

## Yucca là gì?
Yucca (*Yucca schidigera*) là một loài cây họ thùa mọc ở vùng sa mạc Bắc Mỹ và Mexico. Dịch chiết từ thân cây yucca chứa nhiều **saponin** và một số hợp chất phenolic. Trong chăn nuôi và nuôi trồng thủy sản, dịch chiết yucca được dùng phổ biến để giảm mùi và giảm ammonia.

Trên thị trường, yucca có dạng bột và dạng nước. Dạng nước thường tiện hơn khi tạt ao vì phân tán nhanh.

## Tác dụng của yucca trong ao nuôi tôm
### Hấp thu, giảm NH₃
Đây là tác dụng chính. Các hợp chất trong dịch chiết yucca có khả năng liên kết với ammonia, làm giảm lượng NH₃ tự do — dạng độc nhất đối với tôm. Vì tác dụng diễn ra khá nhanh, yucca thường được dùng khi cần hạ khí độc gấp.

### Hỗ trợ cấp cứu khi tôm nổi đầu do khí độc
Khi tôm nổi đầu, lờ đờ vì NH₃ cao, tạt yucca kết hợp tăng quạt, giảm ăn là một trong những biện pháp xử lý ban đầu. Lưu ý: tôm nổi đầu còn có thể do thiếu oxy, do bệnh, nên cần xác định nguyên nhân (xem thêm phần dưới).

### Cải thiện chất lượng nước
Giảm NH₃ giúp môi trường ít độc hơn, tôm bớt stress, ăn ổn định hơn.

## Hiểu đúng về NH₃ để dùng yucca đúng lúc
Trong nước, ammonia tồn tại ở hai dạng: **NH₄⁺** (ion, ít độc) và **NH₃** (khí tự do, rất độc). Tổng hai dạng gọi là TAN. Tỷ lệ NH₃ trong TAN tăng mạnh khi **pH và nhiệt độ cao**.

| pH | Tỷ lệ NH₃ tự do (tham khảo, ở khoảng 28–30 °C) | Ý nghĩa |
|---|---|---|
| 7,0 | Dưới 1% | NH₃ ít nguy hiểm |
| 7,5 | Khoảng 2% | Cần theo dõi |
| 8,0 | Khoảng 6–7% | Bắt đầu đáng lo khi TAN cao |
| 8,5 | Khoảng 18–20% | Nguy hiểm khi TAN cao |
| 9,0 | Khoảng 40–45% | Rất nguy hiểm |

Bảng trên là số liệu tham khảo theo cân bằng hóa học, dùng để bà con thấy xu hướng. Ngưỡng NH₃ thường được khuyến cáo cho ao tôm là **dưới 0,1 mg/L**.

Từ bảng có thể rút ra: **buổi chiều nắng, pH lên cao là lúc NH₃ độc nhất**. Ao có TAN cao mà pH chiều vượt 8,5 thì nguy cơ rất lớn, dù buổi sáng đo thấy bình thường.

## Khi nào nên dùng yucca?
1. **Định kỳ giai đoạn giữa và cuối vụ:** khi lượng thức ăn lớn, chất thải nhiều, TAN có xu hướng tăng.
2. **Khi test thấy NH₃/TAN vượt ngưỡng:** nhất là khi pH buổi chiều cao.
3. **Sau các biến động lớn:** tảo tàn, mưa lớn kéo dài, sau diệt tảo, sau khi dùng hóa chất làm hệ vi sinh suy yếu.
4. **Khi tôm có dấu hiệu nổi đầu, tấp mé do khí độc:** kết hợp với tăng oxy, giảm ăn.
5. **Trước và trong thời gian vận chuyển, san thưa:** một số trại dùng để giảm stress do NH₃ tích tụ.

## Cách dùng yucca hiệu quả
### Liều lượng theo nhãn
Mỗi sản phẩm có nồng độ dịch chiết khác nhau nên liều khác nhau. Ví dụ **SUPER YUCCA** chứa dịch chiết *Yucca schidigera* (hàm lượng saponin trong dịch chiết 12%), nhãn hướng dẫn:

- **Định kỳ:** 1 lít cho 5.000 m³ nước, 7 ngày một lần.
- **Khi khí độc cao:** 1 lít cho 3.000 m³ nước.
- Hòa với nước sạch của ao một lượng vừa đủ, tạt đều khắp ao vào sáng sớm hoặc chiều mát, mở quạt nước để sản phẩm phân tán đều.

Bà con tính thể tích nước ao: diện tích (m²) × độ sâu nước (m). Ví dụ ao bạt 1.500 m², nước sâu 1,4 m là khoảng 2.100 m³; dùng định kỳ theo nhãn cần khoảng 0,42 lít mỗi lần.

### Thời điểm tạt
- Sáng sớm hoặc chiều mát, khi quạt đang chạy.
- Nếu NH₃ cao vào buổi chiều do pH lên, có thể ưu tiên tạt chiều mát.
- Tránh tạt khi trời mưa to làm nước phân tầng, quạt yếu.

### Kết hợp với các biện pháp khác
Yucca chỉ "giải quyết phần ngọn" — hấp thu NH₃ đang có. Nếu nguồn sinh NH₃ (thức ăn thừa, phân tôm, xác tảo) vẫn còn, khí độc sẽ tăng lại. Vì vậy cần đồng thời:

- Giảm 20–30% thức ăn khi khí độc cao, kiểm tra nhá kỹ.
- Xi phông đáy, thay nước nếu có nguồn sạch.
- Tăng oxy, nhất là ban đêm.
- Dùng vi sinh xử lý đáy định kỳ để phân hủy chất hữu cơ, ví dụ **CLEAR 12H** có công dụng giúp phân hủy mùn bã, thức ăn thừa, phân tôm và giảm khí độc NH₃, H₂S.
- Giữ pH ổn định, hạn chế pH chiều vượt quá 8,5 bằng cách quản lý tảo và độ kiềm.

## Yucca và vi sinh: dùng chung được không?
Yucca là dịch chiết thực vật, không phải chất diệt khuẩn mạnh như clo, BKC hay iodine. Trong thực tế nhiều ao vẫn dùng yucca và vi sinh trong cùng giai đoạn. Tuy vậy, để mỗi sản phẩm phát huy tác dụng tốt, bà con có thể tạt **cách nhau vài giờ hoặc khác buổi** (ví dụ yucca buổi chiều mát, vi sinh buổi sáng có nắng). Nếu nhãn sản phẩm có lưu ý riêng, làm theo nhãn.

## Những sai lầm thường gặp khi dùng yucca
- **Dùng yucca thay cho quản lý thức ăn và đáy ao:** NH₃ giảm vài hôm rồi tăng lại, tốn tiền mà không bền.
- **Không đo mà đoán:** thấy tôm yếu là tạt yucca, trong khi nguyên nhân có thể là thiếu oxy, NO₂ cao hay bệnh. Nên có bộ test NH₃, NO₂, pH, kiềm và oxy.
- **Tăng liều tùy tiện:** liều cao hơn hướng dẫn không chắc hiệu quả hơn, lại tốn kém. Khi cần dùng ngoài khuyến cáo, hỏi kỹ thuật viên.
- **Nhầm NH₃ với NO₂:** yucca chủ yếu nhắm vào ammonia. NO₂ (nitrite) cao cần hướng xử lý khác như tăng oxy, thay nước, bổ sung khoáng, vi sinh nitrat hóa, và với ao độ mặn thấp, chú ý ion clorua.
- **Tạt lúc ao thiếu oxy mà không tăng quạt:** tôm nổi đầu do thiếu oxy thì việc quan trọng nhất là cấp oxy ngay.

## Dấu hiệu ao đang có khí độc NH₃ cao
- Tôm ăn giảm đột ngột, nhất là cữ chiều.
- Tôm tấp mé, bơi lờ đờ quanh bờ, có con nổi đầu.
- Mang tôm có thể sậm màu; tôm dễ mềm vỏ, chậm lột.
- Nước có màu tảo đậm, pH chiều cao; hoặc ngược lại, tảo vừa tàn, nước đục, có mùi.
- Test NH₃/TAN cho kết quả vượt ngưỡng tham khảo.

## Câu hỏi thường gặp
### Yucca có xử lý được khí H₂S không?
Tác dụng chính của yucca là hấp thu NH₃. H₂S sinh ra ở đáy yếm khí, cần xử lý bằng cách tăng oxy đáy, xi phông, dùng vi sinh xử lý đáy và giữ pH không quá thấp.

### Dùng yucca bao lâu thì thấy hiệu quả?
Yucca tác dụng tương đối nhanh với NH₃ trong nước. Tuy nhiên bà con nên đo lại sau khi dùng để kiểm tra, và đồng thời xử lý nguồn sinh khí độc để hiệu quả bền.

### Ao mới thả giống có cần dùng yucca không?
Giai đoạn đầu lượng thức ăn ít, khí độc thường thấp nên không nhất thiết dùng. Yucca thường cần hơn từ giữa vụ trở đi hoặc khi test thấy NH₃ tăng.

### Có thể dùng SUPER YUCCA khi tôm đang nổi đầu không?
Nhãn **SUPER YUCCA** có ghi công dụng cấp cứu khi tôm nổi đầu do khí độc, liều khi khí độc cao là 1 lít cho 3.000 m³ nước. Nhưng việc đầu tiên khi tôm nổi đầu vẫn là bật hết quạt, tăng oxy và tìm đúng nguyên nhân.

### Yucca dạng bột và dạng nước khác nhau thế nào?
Cả hai đều từ dịch chiết yucca, khác nhau ở nồng độ và cách dùng. Dạng nước phân tán nhanh khi tạt. Liều lượng mỗi sản phẩm khác nhau, cần làm theo nhãn.`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'khi-doc-h2s-day-ao-nuoi-tom-nhan-biet-xu-ly', topic: 'technique', daysAgo: 0.45,
    title: L('Khí độc H2S ở đáy ao tôm: nhận biết, nguyên nhân, cách xử lý và phòng'),
    excerpt: L('H2S là khí độc nguy hiểm sinh ra ở đáy ao yếm khí. Bài viết hướng dẫn nhận biết sớm, nguyên nhân, cách xử lý khẩn cấp và quy trình phòng H2S trong ao tôm thẻ.'),
    body: L(
`Trong các loại khí độc ở ao tôm, **H₂S (hydro sunfua)** là loại đáng sợ nhất vì độc ở nồng độ rất thấp và thường "ẩn" dưới đáy, ít khi đo được bằng bộ test thông thường. Nhiều ao tôm chết rải rác, tôm bỏ ăn mà không rõ lý do, đến khi xi phông mới thấy bùn đen, bốc mùi trứng thối.

Bài viết này giúp bà con hiểu H₂S sinh ra từ đâu, nhận biết sớm thế nào và làm gì để xử lý, phòng ngừa.

## H₂S là gì và vì sao nguy hiểm?
H₂S là khí không màu, có mùi trứng thối đặc trưng. Trong ao nuôi, H₂S được tạo ra khi **vi khuẩn khử sunfat** phân hủy chất hữu cơ trong điều kiện **thiếu oxy** ở đáy ao. Chúng dùng sunfat (SO₄²⁻) có sẵn trong nước — nhất là nước lợ, nước mặn — thay cho oxy, và thải ra H₂S.

Tại sao H₂S nguy hiểm:

- **Độc ở nồng độ rất thấp:** ngưỡng thường được khuyến cáo cho ao tôm là **dưới 0,02 mg/L**, thấp hơn nhiều so với NH₃.
- **Ức chế hô hấp:** H₂S cản trở quá trình sử dụng oxy ở cấp tế bào, tôm có thể ngạt dù nước có oxy.
- **Tập trung ở đáy:** đúng nơi tôm sống, ăn và lột xác.
- **Độc hơn khi pH thấp:** khi pH giảm, tỷ lệ H₂S dạng khí tự do (dạng độc) tăng lên.

| pH | Tỷ lệ H₂S dạng tự do (tham khảo) | Mức nguy hiểm |
|---|---|---|
| 6,5 | Khoảng 75–80% | Rất cao |
| 7,0 | Khoảng 50% | Cao |
| 7,5 | Khoảng 25% | Trung bình |
| 8,0 | Khoảng 8–10% | Thấp hơn |
| 8,5 | Khoảng 3% | Thấp |

Số liệu tham khảo theo cân bằng hóa học ở nhiệt độ khoảng 25–30 °C. Điều cần nhớ: **H₂S độc nhất lúc pH thấp, tức là rạng sáng** — ngược với NH₃ độc nhất lúc chiều pH cao.

## Nguyên nhân sinh H₂S ở đáy ao
1. **Chất hữu cơ tích tụ ở đáy:** thức ăn thừa, phân tôm, xác tảo, vỏ lột, xác vi sinh. Lớp bùn hữu cơ càng dày, vùng yếm khí càng lớn.
2. **Thiếu oxy ở đáy:** quạt không đủ, bố trí không tạo được dòng chảy sát đáy, hoặc mất điện ban đêm.
3. **Ao đất cải tạo không kỹ:** bùn đen từ vụ trước không nạo vét hết, đáy không phơi khô.
4. **Ao bạt có điểm chết:** góc ao, vùng giữa ao vuông, rốn xi phông không hút hết.
5. **Sau tảo tàn, sau diệt tảo:** xác tảo lắng xuống đáy cùng lúc, phân hủy tiêu tốn oxy mạnh.
6. **Mưa lớn:** nước phân tầng, lớp nước đáy thiếu oxy; pH giảm làm H₂S độc hơn.
7. **Nguồn nước có hàm lượng sunfat cao, vùng đất phèn:** cung cấp nguyên liệu cho vi khuẩn khử sunfat.

## Dấu hiệu nhận biết H₂S
H₂S khó đo trực tiếp bằng bộ test đơn giản, nên bà con cần dựa nhiều vào quan sát:

- **Bùn đáy màu đen, mùi trứng thối** khi xi phông hoặc khi lấy mẫu đáy bằng ống.
- **Bọt khí nổi lên từ đáy** ở một số điểm, nhất là khu vực ít dòng chảy.
- **Tôm bỏ ăn, giảm ăn**, nhá có thức ăn dư; thức ăn trong nhá ám đen.
- **Tôm tấp mé, nổi đầu lúc rạng sáng**, có tôm chết rải rác dưới đáy, nhất là tôm vừa lột.
- **Mang tôm đen, phụ bộ đen**, tôm yếu, chậm lớn.
- **Sàng ăn đặt ở khu vực có H₂S** thường ít tôm vào ăn.

Một cách kiểm tra đơn giản: dùng ống nhựa dài cắm xuống đáy ở nhiều điểm, bịt đầu ống, rút lên lấy mẫu bùn. Bùn nâu, mùi đất bình thường là tốt; bùn đen, có mùi hôi là đáy đang yếm khí.

## Xử lý khi ao có dấu hiệu H₂S
### 1. Tăng oxy ngay, nhất là oxy tầng đáy
- Mở hết quạt, bổ sung sục khí đáy (oxy đáy, ống sủi) ở khu vực có vấn đề.
- Điều chỉnh vị trí quạt để dòng chảy quét sát đáy, đẩy chất thải về rốn.
- Có thể dùng chế phẩm cung cấp oxy dạng hạt rải đáy ở khu vực bị nặng, theo hướng dẫn nhà sản xuất.

### 2. Giảm hoặc ngưng cho ăn
Giảm 30–50% hoặc ngưng 1–2 cữ tùy mức độ. Thức ăn rơi xuống vùng đáy có H₂S vừa không được ăn, vừa làm đáy xấu thêm.

### 3. Lấy bớt chất thải đáy
- Ao bạt: xi phông nhiều lần trong ngày cho đến khi nước ra trong.
- Ao đất: có thể kéo lưới, kéo dây xích nhẹ cho bùn bốc lên rồi thay nước — nhưng chỉ làm khi oxy đã được đảm bảo, vì khuấy bùn có thể giải phóng H₂S đột ngột.
- Thay nước 20–30% nếu có nguồn nước sạch đã xử lý.

### 4. Ổn định pH, không để pH tụt
Vì H₂S độc hơn khi pH thấp, cần giữ pH ổn định trong khoảng tham khảo 7,5–8,5 và kiềm 120–180 mg CaCO₃/L. Sau mưa, kiểm tra pH và bổ sung vôi, khoáng theo hướng dẫn kỹ thuật.

### 5. Dùng vi sinh xử lý đáy
Vi sinh *Bacillus* phân hủy chất hữu cơ ở đáy trong điều kiện có oxy, làm giảm nguồn nguyên liệu sinh H₂S. Ví dụ:

- **CLEAR 12H** có công dụng giúp phân hủy mùn bã hữu cơ, thức ăn thừa, xác tảo tàn, phân tôm ở đáy ao, giảm khí độc NH₃, H₂S. Ủ 1 gói với 3 kg đường cát và 50 lít nước, sục khí 12–24 giờ; ao bạt dùng 15–20 lít cho 1.000 m³ nước (3 ngày một lần), ao đất 10–15 lít cho 1.000 m³ (5 ngày một lần); mở quạt liên tục, dùng khi có nắng.
- **ROVAZYME** cũng có công dụng phân hủy mùn bã và giảm NH₃, H₂S; dùng 454 g cho 3.000 m³ nước, hòa nước tạt đều vào sáng sớm hoặc chiều mát, định kỳ 5 ngày một lần.

Vi sinh cần oxy để hoạt động, nên bước tăng oxy luôn phải đi trước hoặc đi cùng.

## Phòng ngừa H₂S suốt vụ nuôi
| Giai đoạn | Việc cần làm |
|---|---|
| Cải tạo ao | Ao đất: nạo vét bùn đen, bón vôi, phơi đáy đến khi nứt chân chim. Ao bạt: vệ sinh sạch, kiểm tra rốn xi phông |
| Thả giống – tuần 3 | Cho ăn đúng lượng, cấy vi sinh xử lý nước – đáy định kỳ |
| Tuần 4 trở đi | Xi phông đều đặn hằng ngày, tăng quạt theo sinh khối, vi sinh đáy định kỳ |
| Mùa mưa | Tăng quạt đêm, theo dõi pH sáng, bổ sung kiềm sau mưa |
| Sau tảo tàn, diệt tảo | Tăng oxy, giảm ăn, dùng vi sinh phân hủy xác tảo sau khi hết dư lượng hóa chất |

Thêm vài nguyên tắc:

- **Không để đáy có vùng chết:** quan sát nơi chất thải gom lại và điều chỉnh quạt cho hợp lý.
- **Đặt nhá ở nhiều vị trí:** nhá nào thức ăn dư, ám đen thường cho thấy đáy chỗ đó có vấn đề.
- **Không cho ăn dư:** đây là nguyên nhân gốc của đa số trường hợp đáy xấu.
- **Đảm bảo điện dự phòng:** mất điện ban đêm vài giờ là đủ để đáy chuyển yếm khí.

## Phân biệt H₂S với các nguyên nhân khác
Tôm tấp mé, nổi đầu, bỏ ăn có thể do H₂S, nhưng cũng có thể do thiếu oxy toàn ao, NH₃ hoặc NO₂ cao, hoặc bệnh. Bà con nên đo oxy, pH, NH₃, NO₂ để loại trừ, kiểm tra bùn đáy, và kiểm tra mẫu tôm (gan, ruột, mang). Khi chưa rõ nguyên nhân, hãy liên hệ kỹ thuật viên để được tư vấn.

## Câu hỏi thường gặp
### Làm sao đo được H₂S trong ao?
Có bộ test H₂S riêng nhưng không phổ biến và mẫu nước phải lấy sát đáy. Thực tế bà con thường dựa vào quan sát bùn đáy (màu đen, mùi trứng thối), tình trạng tôm và nhá ăn.

### Vì sao H₂S hay gây hại vào lúc rạng sáng?
Ban đêm tảo không quang hợp, oxy giảm thấp nhất lúc rạng sáng, đồng thời pH cũng thấp nhất. Cả hai điều kiện này làm H₂S sinh ra nhiều hơn và tồn tại ở dạng độc nhiều hơn.

### Ao bạt có bị H₂S không?
Có. Ao bạt không có bùn đất nhưng nếu chất thải tích tụ ở góc ao, giữa ao hoặc rốn xi phông không hút hết thì vẫn tạo vùng yếm khí sinh H₂S.

### Khuấy đáy có giúp giảm H₂S không?
Khuấy đáy khi oxy thấp có thể giải phóng H₂S đột ngột, gây hại cho tôm. Chỉ nên làm khi quạt chạy đủ, oxy cao, và kết hợp thay nước.

### Vi sinh có xử lý được H₂S ngay lập tức không?
Vi sinh phân hủy chất hữu cơ, giảm nguồn sinh H₂S theo thời gian chứ không loại bỏ ngay. Khi tôm có biểu hiện nguy cấp, việc đầu tiên là tăng oxy, giảm ăn, xi phông và thay nước.`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'diet-tao-bang-dong-cuso4-ao-nuoi-tom-an-toan', topic: 'technique', daysAgo: 0.6,
    title: L('Diệt tảo bằng đồng CuSO4 an toàn: liều, độ kiềm, rủi ro và lưu ý'),
    excerpt: L('Đồng sunfat (CuSO4) diệt tảo nhanh nhưng dễ gây độc cho tôm nếu dùng sai. Hướng dẫn liều theo nhãn, vai trò độ kiềm, rủi ro tảo tàn và lưu ý an toàn.'),
    body: L(
`Tảo phát triển quá dày, tảo lam nở hoa hay rong nhớt mọc kín đáy là những tình huống bà con nuôi tôm gặp thường xuyên, nhất là ao đất mùa nắng. Một trong những cách diệt tảo phổ biến nhất là dùng **đồng sunfat (CuSO₄)**. Đồng diệt tảo nhanh, giá rẻ, nhưng cũng là con dao hai lưỡi: dùng sai liều, sai thời điểm hoặc trong ao kiềm thấp có thể gây độc cho tôm và làm tảo tàn đồng loạt, kéo theo tụt oxy.

Bài này giúp bà con hiểu đồng hoạt động thế nào, những yếu tố quyết định độ an toàn và các bước dùng đồng cẩn thận. Trước khi dùng, nên xem thêm bài [xử lý tảo lam, tảo đáy ao nuôi tôm](/vi/blog/xu-ly-tao-lam-tao-day-ao-nuoi-tom) để chọn hướng xử lý phù hợp.

## Đồng diệt tảo theo cơ chế nào?
Ion đồng (Cu²⁺) hòa tan trong nước xâm nhập vào tế bào tảo, ức chế quá trình quang hợp và các enzyme quan trọng, làm tảo chết. Tảo lam, tảo sợi, rong nhớt đều nhạy với đồng. Tuy nhiên, **đồng không chọn lọc**: nó cũng tác động lên tảo có lợi, vi sinh vật, và ở nồng độ đủ cao sẽ gây độc cho tôm, cá — đặc biệt là mang và tôm đang lột xác.

## Độ kiềm và độ cứng quyết định độ an toàn
Đây là điểm quan trọng nhất mà nhiều người bỏ qua.

- **Kiềm thấp, nước mềm:** đồng tồn tại nhiều ở dạng ion tự do, **độc hơn với tôm cá**. Cùng một liều, ao kiềm thấp rủi ro cao hơn nhiều.
- **Kiềm cao, nước cứng:** đồng nhanh chóng kết tủa thành dạng carbonate, hydroxide, lắng xuống đáy, **giảm hiệu quả diệt tảo** nhưng ít độc hơn.
- **pH cao:** đồng kết tủa nhanh hơn, hiệu lực ngắn.
- **Nhiều chất hữu cơ, nước đục:** đồng bị liên kết, hiệu quả giảm.

| Điều kiện ao | Hiệu quả diệt tảo | Rủi ro cho tôm | Gợi ý |
|---|---|---|---|
| Kiềm dưới 80 mg CaCO₃/L | Mạnh | Cao | Cân nhắc kỹ, nâng kiềm trước, hỏi kỹ thuật |
| Kiềm 80–120 mg CaCO₃/L | Khá | Trung bình | Dùng liều thấp theo nhãn, theo dõi sát |
| Kiềm 120–180 mg CaCO₃/L (khoảng tham khảo cho ao tôm) | Vừa phải | Thấp hơn | Dùng đúng liều nhãn, có thể chia lần |
| Kiềm trên 180 mg CaCO₃/L | Giảm | Thấp | Đừng tăng liều tùy tiện để "bù" |

Bảng trên mang tính định hướng. Vì vậy **luôn đo kiềm trước khi dùng đồng**. Ao độ mặn thấp, nước ngọt hóa thường kiềm và độ cứng thấp — cần thận trọng hơn.

## Liều dùng theo nhãn sản phẩm
Mỗi sản phẩm chứa hàm lượng đồng khác nhau, **không quy đổi tùy tiện**. Hai ví dụ:

**BEN COPPER 500** (Cu dạng CuSO₄, dạng nước):
- Diệt tảo trong ao **có tôm, cá**: 500 ml cho 2.000 m³ nước, dùng lúc 10–11 giờ trưa, khi có nắng gắt và không có mưa.
- Diệt rong rêu, rong nhớt, rong đuôi chồn khi ao **không có tôm, cá**: 500 ml cho 1.000 m³ nước, dùng lúc nắng gắt, không mưa.
- Nhãn lưu ý: tùy tình trạng sức khỏe tôm để tăng hoặc giảm liều cho thích hợp.

**SUPER CUT ALGA** (Cu dạng CuSO₄.5H₂O trên chất đệm zeolite, dạng bột):
- Diệt tảo trong ao **có tôm, cá**: 100 g cho 1.000 m³ nước, dùng lúc 10–11 giờ trưa, nắng gắt, không mưa.
- Diệt rong rêu, rong nhớt khi ao **không có tôm, cá**: 200 g cho 1.000 m³ nước.

Lưu ý liều cho ao **không có tôm** cao gấp đôi liều ao có tôm. Tuyệt đối không dùng liều ao trống cho ao đang nuôi.

### Tính đúng thể tích nước
Sai số lớn nhất thường nằm ở thể tích ao. Thể tích (m³) = diện tích mặt nước (m²) × độ sâu nước trung bình (m). Ao đất có bờ dốc, đáy không bằng, nên đo độ sâu ở nhiều điểm rồi lấy trung bình. Ước lượng thừa thể tích dẫn đến dùng quá liều.

## Rủi ro khi dùng đồng diệt tảo
1. **Tảo tàn đồng loạt → tụt oxy:** đây là rủi ro lớn nhất. Tảo chết không còn quang hợp, xác tảo phân hủy tiêu tốn oxy. Đêm đầu tiên sau khi diệt tảo thường là đêm nguy hiểm nhất.
2. **Khí độc tăng sau vài ngày:** xác tảo phân hủy sinh NH₃, có thể sinh H₂S ở đáy.
3. **Độc trực tiếp cho tôm:** nhất là ao kiềm thấp, tôm yếu, tôm đang lột xác. Tôm có thể bỏ ăn, mang tổn thương.
4. **Tích lũy đồng trong đáy ao:** dùng nhiều lần trong vụ, đồng tích tụ ở bùn đáy, ảnh hưởng hệ vi sinh và các vụ sau.
5. **Ảnh hưởng vi sinh có lợi:** vi sinh xử lý đáy, xử lý nước bị ức chế trong thời gian có đồng.

## Quy trình dùng đồng diệt tảo an toàn
### Trước khi dùng
- Xác định đúng loại tảo và mức độ: có thật sự cần diệt không, hay chỉ cần giảm mật độ? Nhiều trường hợp giảm ăn, thay nước, dùng vi sinh là đủ.
- Đo **kiềm, pH, oxy**. Kiểm tra sức khỏe tôm, xem tôm có đang lột xác rộ không (thường trùng con nước). Tôm lột rộ thì nên lùi lại.
- Chuẩn bị đủ quạt, oxy dự phòng, nguồn nước thay nếu cần.
- Không dùng chung với hóa chất sát trùng khác hoặc vi sinh.

### Khi dùng
- Hòa sản phẩm với nhiều nước, tạt đều khắp mặt ao; với tảo tập trung cuối hướng gió, có thể tạt tập trung khu vực đó.
- Dùng đúng khung giờ nhãn hướng dẫn (10–11 giờ trưa, nắng gắt, không mưa) và **mở quạt liên tục**.
- Với ao tảo quá dày, cân nhắc **chia ra diệt từng phần** (ví dụ diệt một phần ao, hoặc chia liều hai ngày) thay vì diệt toàn bộ một lần để tránh tảo tàn đồng loạt. Hỏi kỹ thuật viên trước khi chia liều.

### Sau khi dùng
- **Đêm đầu tiên:** chạy toàn bộ quạt, theo dõi oxy lúc 22 giờ, 2 giờ và 5 giờ sáng.
- **Giảm ăn 30–50%** trong 1–2 ngày, theo dõi nhá.
- Sau 1–2 ngày, khi đồng đã giảm tác dụng, dùng vi sinh phân hủy xác tảo và chất hữu cơ, ví dụ **CLEAR 12H** (có công dụng phân hủy xác tảo tàn, mùn bã, giảm khí độc) theo hướng dẫn trên nhãn.
- Xi phông đáy để lấy bớt xác tảo lắng.
- Gây màu lại bằng khoáng và vi sinh khi nước đã ổn định, tránh để nước quá trong làm tảo đáy phát triển.
- Đo NH₃, NO₂ trong 3–5 ngày tiếp theo.

## Khi nào không nên dùng đồng?
- Kiềm quá thấp mà chưa nâng được.
- Tôm đang lột xác rộ, tôm yếu, đang có dấu hiệu bệnh.
- Trời âm u, mưa kéo dài — tảo đã yếu, diệt thêm dễ tàn đồng loạt và tụt oxy.
- Ao không đủ quạt, không có nguồn điện dự phòng.
- Ao đã dùng đồng nhiều lần trong vụ.

Trong những trường hợp này, ưu tiên các biện pháp nhẹ hơn: thay nước, giảm ăn, tăng vi sinh, che lưới hạn chế nắng một phần, quản lý dinh dưỡng trong nước.

## Biện pháp lâu dài để không phải diệt tảo liên tục
Tảo phát triển quá mức là hậu quả của **dư dinh dưỡng** (đạm, lân) trong nước. Diệt tảo chỉ là giải pháp tình thế. Để hạn chế:

- Cho ăn đúng lượng, không dư thức ăn.
- Xi phông đều, dùng vi sinh xử lý nước và đáy định kỳ.
- Duy trì kiềm ổn định để pH ít dao động.
- Thay nước định kỳ từ ao lắng đã xử lý.
- Giữ độ trong trong khoảng tham khảo 30–40 cm.

## Câu hỏi thường gặp
### Vì sao nhãn hướng dẫn dùng đồng lúc 10–11 giờ trưa?
Lúc nắng gắt tảo quang hợp mạnh, trong nước có nhiều oxy, và tảo đang hoạt động nên hấp thu đồng tốt. Bà con nên làm theo khung giờ trên nhãn sản phẩm và mở quạt liên tục.

### Dùng đồng rồi bao lâu mới tạt vi sinh?
Thường nên chờ khoảng 1–2 ngày để đồng giảm tác dụng rồi mới dùng vi sinh. Tùy liều dùng và điều kiện ao, nên hỏi kỹ thuật viên để chọn thời điểm phù hợp.

### Ao kiềm thấp có dùng đồng được không?
Ao kiềm thấp đồng độc hơn với tôm. Nên nâng kiềm về khoảng tham khảo trước khi dùng, và nếu bắt buộc phải xử lý tảo, cần hỏi ý kiến kỹ thuật viên về liều phù hợp.

### Có thể dùng BEN COPPER 500 và SUPER CUT ALGA cùng lúc không?
Không nên. Cả hai đều chứa đồng, dùng cùng lúc là cộng dồn liều, tăng nguy cơ ngộ độc cho tôm. Chọn một sản phẩm và dùng đúng liều trên nhãn.

### Sau khi diệt tảo nước bị trong, phải làm sao?
Nước quá trong dễ làm tảo đáy phát triển. Sau khi đồng giảm tác dụng, dùng vi sinh, khoáng để gây màu lại, theo dõi độ trong và pH.`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'sat-trung-nuoc-ao-nuoi-bkc-iodine-glutaraldehyde', topic: 'disease', daysAgo: 0.75,
    title: L('Sát trùng nước ao nuôi: so sánh BKC, iodine, glutaraldehyde'),
    excerpt: L('BKC, iodine hay glutaraldehyde: mỗi loại sát trùng nước ao có ưu nhược điểm riêng. So sánh cơ chế, khi nào dùng, cách dùng an toàn và cách ly vi sinh.'),
    body: L(
`Sát trùng nước là bước không thể thiếu khi chuẩn bị ao, và đôi khi cần trong lúc nuôi khi môi trường có nguy cơ mầm bệnh cao. Trên thị trường có rất nhiều loại thuốc sát trùng, nhưng phổ biến nhất trong ao tôm là ba nhóm: **BKC (benzalkonium chloride)**, **iodine (thường dạng PVP-iodine)** và **glutaraldehyde**.

Mỗi nhóm có cơ chế, ưu nhược điểm và điều kiện dùng khác nhau. Chọn sai loại hoặc dùng sai lúc có thể làm tảo tàn, tôm sốc, hoặc đơn giản là tốn tiền mà không hiệu quả. Bài này so sánh ba nhóm để bà con chọn cho đúng.

## Khi nào cần sát trùng nước ao?
- **Chuẩn bị ao, xử lý nước trước khi thả giống:** diệt vi khuẩn, nấm, nguyên sinh động vật trong nguồn nước cấp.
- **Nước cấp bổ sung trong lúc nuôi:** nước từ ao lắng cần được xử lý trước khi cấp vào ao nuôi.
- **Khi vùng nuôi có dịch bệnh, nguồn nước có nguy cơ cao:** theo khuyến cáo của kỹ thuật viên.
- **Khi tôm có biểu hiện đen mang, vàng mang, đóng rong, hoại tử phụ bộ** liên quan đến môi trường nhiều mầm bệnh: sát trùng nước là một phần trong hướng xử lý, kết hợp với cải thiện môi trường.

Sát trùng không nên làm "định kỳ cho chắc" khi ao đang ổn định, vì mỗi lần sát trùng đều ảnh hưởng hệ vi sinh và tảo có lợi.

## So sánh ba nhóm thuốc sát trùng
| Tiêu chí | BKC | Iodine (PVP-iodine) | Glutaraldehyde |
|---|---|---|---|
| Nhóm hoạt chất | Hợp chất amoni bậc bốn | Halogen (iod) | Aldehyde |
| Cơ chế chính | Phá màng tế bào vi sinh vật | Oxy hóa protein, enzyme của vi sinh vật | Liên kết, làm biến tính protein |
| Phổ tác dụng | Vi khuẩn, nấm, một số nguyên sinh động vật | Rộng: vi khuẩn, nấm, nguyên sinh động vật | Rộng: vi khuẩn, nấm |
| Ảnh hưởng của chất hữu cơ | Giảm hiệu quả khi nước nhiều hữu cơ | Giảm rõ khi nước nhiều hữu cơ, nước đục | Ít bị ảnh hưởng hơn |
| Ảnh hưởng của ánh sáng | Không đáng kể | Bị phân hủy bởi nắng, nên dùng chiều mát hoặc tối | Không đáng kể |
| Ảnh hưởng đến tảo | Có thể làm tảo yếu, tàn ở liều cao | Tương đối nhẹ hơn ở liều khuyến cáo | Có thể ảnh hưởng tảo ở liều cao |
| Đặc điểm khác | Tạo bọt khi quạt; ảnh hưởng mang nếu dùng liều cao | Thường được xem là nhẹ với tôm hơn ở liều khuyến cáo | Có mùi hắc, cần bảo hộ khi pha |

Bảng trên là đặc điểm chung của các nhóm hoạt chất; hiệu quả thực tế còn phụ thuộc sản phẩm, liều và điều kiện ao.

## Nhóm BKC (benzalkonium chloride)
BKC là chất hoạt động bề mặt cation, phá vỡ màng tế bào vi sinh vật. Được dùng rộng rãi vì giá hợp lý, dễ dùng.

**Ưu điểm:** hiệu quả với nhiều loại vi khuẩn, nấm, nguyên sinh động vật bám trên mang và vỏ tôm; ít bị ảnh hưởng bởi ánh sáng.

**Nhược điểm:** tạo bọt; ở liều cao ảnh hưởng tảo và mang tôm; hiệu quả giảm trong nước nhiều chất hữu cơ.

Ví dụ: **BEN BKC** chứa Benzalkonium chloride tối thiểu 50%, có công dụng sát trùng nguồn nước, giúp làm giảm vi khuẩn, nấm, nguyên sinh động vật gây hại trong môi trường nước; hỗ trợ sát khuẩn gây phát sáng, đen mang, vàng mang, cụt râu, sâu đuôi, hoại tử phụ bộ. Liều dùng bà con xem trên nhãn sản phẩm hoặc hỏi kỹ thuật viên Thủy Sản Tím để được hướng dẫn theo tình trạng ao.

## Nhóm iodine (PVP-iodine)
PVP-iodine là phức hợp iod với polyvinylpyrrolidone, giải phóng iod từ từ, giúp tác dụng ổn định và ít gây kích ứng hơn iod tự do.

**Ưu điểm:** phổ diệt khuẩn rộng; thường được đánh giá nhẹ với tôm ở liều khuyến cáo nên hay được chọn khi ao đang nuôi.

**Nhược điểm:** bị ánh nắng phân hủy, nên dùng vào chiều tối; hiệu quả giảm mạnh khi nước đục, nhiều chất hữu cơ; pH cao cũng làm giảm hiệu lực.

Ví dụ: **VH-DIO 99** chứa PVP Iodine tối thiểu 100 g/lít, có công dụng sát trùng nguồn nước, giúp làm giảm vi khuẩn, nấm, nguyên sinh động vật gây hại; xử lý môi trường ao nuôi, góp phần hạn chế các tác nhân gây cụt râu, sâu đuôi, hoại tử phụ bộ, phân trắng, đốm đen, đen mang, vàng mang. Liều dùng theo nhãn sản phẩm hoặc theo hướng dẫn của kỹ thuật viên.

## Nhóm glutaraldehyde
Glutaraldehyde là chất sát trùng phổ rộng, thường được phối hợp với các hoạt chất khác để tăng hiệu quả.

**Ưu điểm:** ít bị ảnh hưởng bởi chất hữu cơ và ánh sáng so với iodine; phổ diệt khuẩn rộng.

**Nhược điểm:** mùi hắc, gây kích ứng da, mắt, đường hô hấp khi pha — cần đeo găng tay, khẩu trang; ở liều cao ảnh hưởng tảo và vi sinh.

Ví dụ: **VH-GLUBENCO PRO** chứa Glutaraldehyde tối thiểu 15% và Bronopol, có công dụng sát trùng nguồn nước, giúp làm giảm vi khuẩn, nấm, nguyên sinh động vật gây hại. Hướng dẫn trên nhãn:

- Trong thời gian chuẩn bị ao: 1,5 lít cho 1.000 m³ nước, để 2–3 ngày.
- Sát trùng nguồn nước trong quá trình nuôi: 1 lít cho 1.000 m³ nước.
- Hòa tan với nước gấp 100 lần rồi phun hoặc tạt đều khắp ao; lắc đều trước khi dùng.
- Ngưng sử dụng trước thu hoạch 15 ngày.

## Chọn loại nào cho trường hợp nào?
| Tình huống | Gợi ý lựa chọn | Lưu ý |
|---|---|---|
| Xử lý nước ao lắng, chuẩn bị ao | Glutaraldehyde hoặc BKC | Nước nhiều hữu cơ thì nhóm glutaraldehyde ít bị ảnh hưởng hơn |
| Ao đang nuôi, tôm nhỏ hoặc tôm yếu | Iodine ở liều khuyến cáo | Dùng chiều tối, tránh nắng |
| Ao đang nuôi, nước đục nhiều hữu cơ | Glutaraldehyde | Theo dõi tảo, tăng quạt |
| Tôm đóng rong, bẩn mang do nguyên sinh động vật | BKC | Kết hợp cải thiện đáy, giảm hữu cơ |

Đây là gợi ý chung. Quyết định cuối cùng nên dựa trên tình trạng ao và ý kiến của kỹ thuật viên.

## Cách dùng thuốc sát trùng an toàn
1. **Đo thể tích nước chính xác** để tính liều.
2. **Pha loãng trước khi tạt:** hòa với nhiều nước, tạt đều khắp mặt ao.
3. **Mở quạt liên tục** trong và sau khi dùng; sát trùng làm tảo và vi sinh yếu, oxy có thể giảm.
4. **Chọn thời điểm phù hợp:** iodine dùng chiều tối; các loại khác tránh lúc oxy thấp (rạng sáng).
5. **Giảm ăn** trong ngày sát trùng, theo dõi nhá.
6. **Không trộn lẫn các loại thuốc sát trùng** với nhau, không dùng cùng vôi, đồng hay thuốc khác nếu không có hướng dẫn.
7. **Bảo hộ khi pha:** găng tay, khẩu trang, kính; pha ở nơi thoáng khí.
8. **Tôm đang lột xác rộ, tôm yếu:** cân nhắc lùi lại hoặc giảm liều theo tư vấn kỹ thuật.
9. **Tuân thủ thời gian ngưng sử dụng trước thu hoạch** ghi trên nhãn.

## Cách ly với vi sinh: chờ bao lâu?
Thuốc sát trùng giết cả vi khuẩn có lợi, nên **không bao giờ tạt vi sinh cùng lúc hoặc ngay sau khi sát trùng**. Thời gian chờ thường được khuyến cáo là **2–3 ngày** sau khi sát trùng mới cấy vi sinh, tùy loại hoạt chất, liều và điều kiện ao. Với nhãn **VH-GLUBENCO PRO**, khi chuẩn bị ao hướng dẫn để 2–3 ngày sau khi dùng.

Sau thời gian chờ, nên cấy vi sinh lại để hệ vi sinh có lợi nhanh chóng chiếm ưu thế, tránh để vi khuẩn có hại tái phát triển trước. Bà con cũng nên tránh lấy nước ao vừa sát trùng để ủ vi sinh.

## Những sai lầm thường gặp
- **Sát trùng định kỳ "phòng bệnh" dù ao đang ổn:** làm hệ vi sinh và tảo dao động liên tục.
- **Dùng iodine lúc giữa trưa nắng:** iod bị phân hủy, hiệu quả giảm.
- **Sát trùng trong ao nhiều bùn, nhiều hữu cơ mà không xi phông trước:** hoạt chất bị "tiêu hao" vào chất hữu cơ.
- **Tạt vi sinh ngay hôm sau:** vi sinh chết, tốn tiền.
- **Tự tăng liều khi thấy tôm chưa cải thiện:** dễ gây sốc tôm, tảo tàn. Hãy tìm nguyên nhân gốc và hỏi kỹ thuật viên.

## Câu hỏi thường gặp
### Sát trùng nước ao có làm chết tảo không?
Có thể. Ở liều cao, các thuốc sát trùng đều ảnh hưởng tảo, có thể làm tảo yếu hoặc tàn. Vì vậy cần mở quạt liên tục và theo dõi màu nước sau khi dùng.

### Sau khi sát trùng bao lâu thì cấy vi sinh?
Thường chờ 2–3 ngày, tùy loại hoạt chất và liều dùng. Nên làm theo hướng dẫn trên nhãn sản phẩm và tư vấn của kỹ thuật viên.

### Iodine có dùng được ban ngày không?
Iodine bị ánh nắng phân hủy nên hiệu quả giảm khi dùng ban ngày nắng gắt. Thường được khuyến cáo dùng vào chiều mát hoặc buổi tối.

### Có nên dùng luân phiên các loại thuốc sát trùng?
Luân phiên giữa các nhóm hoạt chất khác nhau ở các lần xử lý khác nhau là cách nhiều kỹ thuật viên áp dụng. Nhưng không trộn chung nhiều loại trong cùng một lần tạt.

### Sát trùng nước có chữa được bệnh cho tôm không?
Sát trùng nước giúp giảm mầm bệnh trong môi trường, là biện pháp hỗ trợ và phòng ngừa. Khi tôm có dấu hiệu bệnh, cần xác định đúng nguyên nhân và có hướng xử lý tổng hợp theo tư vấn của kỹ thuật viên.`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'quan-ly-day-ao-bat-nuoi-tom-the-xi-phong-quat-nuoc', topic: 'technique', daysAgo: 0.9,
    title: L('Quản lý đáy ao bạt nuôi tôm thẻ: xi phông, vi sinh, bố trí quạt'),
    excerpt: L('Đáy ao bạt sạch là nền tảng của vụ tôm thẻ thành công. Hướng dẫn xi phông theo tuổi tôm, dùng vi sinh đáy định kỳ, tính mật độ và bố trí quạt hợp lý.'),
    body: L(
`Ao bạt (ao lót bạt HDPE) giúp bà con kiểm soát môi trường tốt hơn ao đất rất nhiều: không có bùn, không rò rỉ phèn, dễ vệ sinh. Nhưng chính vì không có lớp đất đáy hấp thụ và phân hủy chất thải, **toàn bộ chất thải của tôm đọng lại trên mặt bạt**. Nếu không lấy ra kịp, đáy ao bạt có thể "thối" nhanh hơn ao đất.

Quản lý đáy ao bạt xoay quanh ba việc: **gom chất thải về một chỗ (quạt nước), lấy chất thải ra (xi phông) và phân hủy phần còn lại (vi sinh)**. Bài này hướng dẫn chi tiết từng việc.

## Vì sao đáy ao bạt quan trọng?
Mỗi ngày tôm thải ra phân, vỏ lột, cộng với thức ăn thừa và xác tảo. Đến giữa vụ, lượng chất thải này rất lớn. Nếu tích tụ ở đáy:

- Vi sinh vật phân hủy tiêu tốn oxy, đáy thiếu oxy.
- Sinh khí độc NH₃, NO₂, và H₂S ở vùng yếm khí.
- *Vibrio* và các vi khuẩn có hại phát triển mạnh trong lớp chất thải.
- Tôm sống sát đáy, ăn ở đáy, nên bị ảnh hưởng trực tiếp: bỏ ăn, đen mang, bệnh đường ruột.

## Thiết kế ao bạt hỗ trợ quản lý đáy
Thiết kế ao quyết định 50% việc quản lý đáy có dễ hay không:

- **Ao tròn hoặc ao vuông bo góc:** dòng chảy tròn đều, chất thải dễ gom về giữa. Ao vuông góc nhọn dễ có vùng chết ở góc.
- **Đáy dốc về giữa:** thường thiết kế độ dốc nhẹ từ bờ vào rốn.
- **Rốn xi phông ở tâm ao:** có lưới chắn, ống thoát đủ lớn, van đóng mở dễ thao tác.
- **Diện tích vừa phải:** ao bạt thâm canh thường có diện tích nhỏ (khoảng vài trăm đến vài nghìn m²) để dòng chảy kiểm soát được.

## Bố trí và tính mật độ quạt nước
### Vai trò của quạt
Quạt nước không chỉ cấp oxy mà còn **tạo dòng chảy tròn** để gom chất thải về rốn. Dòng chảy đủ mạnh sẽ đẩy chất thải nhẹ trôi theo vòng và lắng ở tâm ao, nơi vận tốc dòng chảy thấp nhất.

### Mật độ quạt tham khảo
Nhu cầu quạt tăng theo **sinh khối tôm** (tổng trọng lượng tôm trong ao), không chỉ theo diện tích. Một con số thường được nhắc đến trong nuôi thâm canh là **khoảng 1 HP cho mỗi 400–500 kg tôm**, tùy loại quạt và điều kiện ao. Đây là mức tham khảo; ao nuôi mật độ cao, nhiệt độ cao, hoặc độ mặn cao (oxy hòa tan thấp hơn) cần nhiều hơn.

| Giai đoạn | Sinh khối ước tính | Gợi ý vận hành quạt |
|---|---|---|
| Tuần 1–3 | Thấp | Chạy một phần số quạt, chủ yếu tạo dòng chảy nhẹ, tăng vào ban đêm |
| Tuần 4–6 | Tăng nhanh | Bổ sung số quạt chạy, nhất là từ chiều tối đến sáng |
| Tuần 7 đến thu hoạch | Cao | Chạy gần như toàn bộ quạt, đặc biệt ban đêm và lúc trời âm u |

Kết hợp quạt cánh (quạt mặt) với **sục khí đáy** (oxy đáy, ống sủi nano) giúp oxy phân bố đều hơn cả ở tầng đáy.

### Cách bố trí quạt
- Đặt quạt cách bờ khoảng 1/4 đến 1/3 bán kính ao, các giàn quạt **cùng chiều** để tạo dòng chảy tròn.
- Không đặt quạt quá gần rốn, làm chất thải bị khuấy tung lên thay vì lắng.
- Ao vuông: đặt quạt ở các góc, hướng chéo để dòng chảy vòng qua góc, hạn chế vùng chết.
- Quan sát sau xi phông: chất thải gom gọn ở tâm là bố trí đúng; chất thải rải rác thành vệt hoặc dồn ở góc là cần chỉnh lại.

## Xi phông đáy ao bạt đúng cách
### Khi nào bắt đầu xi phông?
Thường từ **khoảng tuần thứ 2–3 sau thả giống**, khi lượng thức ăn bắt đầu tăng và chất thải nhìn thấy rõ ở rốn. Giai đoạn đầu xi phông nhẹ, ít lần; càng về sau càng tăng.

### Tần suất xi phông tham khảo
| Tuổi tôm | Số lần xi phông/ngày (tham khảo) | Ghi chú |
|---|---|---|
| Tuần 2–4 | 1 lần | Xi phông ngắn, quan sát màu nước thải |
| Tuần 5–8 | 1–2 lần | Xi phông trước cữ ăn sáng hoặc sau cữ ăn khoảng 1–2 giờ |
| Tuần 9 đến thu hoạch | 2–3 lần trở lên | Tùy lượng chất thải, đến khi nước ra trong |

Nguyên tắc: **xi phông đến khi nước ra trong** thì dừng. Nước thải ra đen, có mùi là đáy đang tích nhiều chất thải, cần tăng tần suất.

### Đọc chất thải để biết sức khỏe ao
Bà con nên hứng một xô nước xi phông để quan sát:

- **Phân tôm dài, màu nâu sẫm, ít thức ăn thừa:** tôm ăn tốt, lượng cho ăn hợp lý.
- **Nhiều thức ăn thừa còn nguyên viên:** cho ăn dư, cần giảm.
- **Phân trắng, phân lỏng:** dấu hiệu bệnh đường ruột, cần kiểm tra tôm.
- **Nhiều vỏ lột:** tôm đang lột xác rộ, chú ý bổ sung khoáng.
- **Tôm chết theo nước xi phông:** đếm số lượng mỗi ngày để theo dõi tỷ lệ hao hụt.

### Lưu ý khi xi phông
- Bù lại lượng nước đã xi phông bằng nước sạch đã xử lý.
- Không xi phông quá mạnh làm mực nước tụt nhanh.
- Xi phông nhiều lần mỗi ngày tốt hơn một lần quá lâu.
- Ao chứa nước thải xi phông nên được xử lý trước khi xả ra môi trường.

## Dùng vi sinh xử lý đáy định kỳ
Xi phông lấy được phần lớn chất thải gom ở rốn, nhưng một phần vẫn bám trên bạt, lơ lửng trong nước. Vi sinh xử lý đáy giúp phân hủy phần này.

Ví dụ:

- **CLEAR 12H** chứa *Bacillus licheniformis*, *B. megaterium*, *B. subtilis*, có công dụng giúp phân hủy mùn bã hữu cơ, thức ăn thừa, xác tảo tàn, phân tôm ở đáy ao, giảm khí độc NH₃, H₂S và hỗ trợ làm sạch nhớt bạt. Với **ao bạt**, nhãn hướng dẫn ủ 1 gói + 3 kg đường cát + 50 lít nước, sục khí 12–24 giờ, dùng 15–20 lít dịch ủ cho 1.000 m³ nước, **định kỳ 3 ngày một lần**; mở quạt liên tục, dùng khi có nắng, không dùng khi mưa.
- **ROVAZYME** có công dụng phân hủy mùn bã hữu cơ, thức ăn thừa, phân tôm, hỗ trợ làm sạch nhớt bạt; dùng 454 g cho 3.000 m³ nước, hòa nước tạt đều vào sáng sớm hoặc chiều mát, định kỳ 5 ngày một lần; trường hợp tảo dày dùng liên tục 2 ngày.

Hướng dẫn chi tiết cách ủ có trong bài [cách ủ vi sinh với đường, mật rỉ trước khi tạt ao](/vi/blog/cach-u-vi-sinh-voi-duong-mat-ri-truoc-khi-tat-ao).

### Nguyên tắc dùng vi sinh đáy
- Dùng **định kỳ** từ đầu vụ, không đợi đáy xấu mới dùng.
- Cách xa thời điểm dùng hóa chất sát trùng ít nhất 2–3 ngày.
- Dùng khi quạt chạy, oxy đủ.
- Tăng tần suất khi lượng ăn lớn, sau mưa, sau tảo tàn.

## Vệ sinh mặt bạt và các vùng khó
- **Mép bạt, khu vực mực nước dao động:** nơi nhớt và rong bám nhiều. Có thể dùng chổi mềm chà nhẹ định kỳ.
- **Dây oxy, ống sủi đáy:** kiểm tra để không bị tắc, phủ nhầy.
- **Nhá ăn:** rửa sạch sau mỗi lần kiểm tra.
- **Lưới chắn rốn xi phông:** vệ sinh thường xuyên để nước thải thoát tốt.

## Nhật ký quản lý đáy
Ghi chép giúp bà con thấy vấn đề sớm:

- Số lần xi phông, màu và mùi nước thải.
- Lượng thức ăn mỗi cữ, lượng dư trong nhá.
- Ngày dùng vi sinh, sát trùng, khoáng.
- Số tôm chết theo xi phông.
- Thông số nước: oxy sáng sớm, pH sáng – chiều, kiềm, NH₃, NO₂.

Khi thấy nước xi phông chuyển đen nhanh, tôm chết tăng, hoặc NH₃, NO₂ tăng dần qua nhiều ngày, đó là lúc cần rà soát lại lượng ăn, số quạt và tần suất xi phông, đồng thời hỏi ý kiến kỹ thuật viên.

## Câu hỏi thường gặp
### Ao bạt có cần dùng vi sinh xử lý đáy không khi đã xi phông?
Có. Xi phông lấy được phần chất thải gom ở rốn, còn vi sinh giúp phân hủy chất hữu cơ bám trên bạt và lơ lửng trong nước. Hai việc bổ trợ cho nhau.

### Xi phông vào lúc nào trong ngày là tốt nhất?
Thường xi phông trước cữ ăn sáng hoặc sau cữ ăn khoảng 1–2 giờ, khi chất thải đã gom về rốn. Tránh xi phông ngay lúc vừa cho ăn vì sẽ hút mất thức ăn.

### Làm sao biết quạt bố trí đúng?
Sau xi phông, quan sát đáy: chất thải gom gọn ở tâm ao là đúng. Nếu chất thải dồn ở góc hoặc thành vệt dài, cần điều chỉnh vị trí và hướng quạt.

### Bao nhiêu quạt là đủ cho ao bạt?
Nhu cầu quạt phụ thuộc vào sinh khối tôm. Mức tham khảo thường được nhắc đến là khoảng 1 HP cho 400–500 kg tôm, cộng thêm sục khí đáy. Nên đo oxy lúc rạng sáng để kiểm tra, duy trì từ khoảng 4–5 mg/L trở lên.

### Nước xi phông có mùi hôi là dấu hiệu gì?
Mùi hôi, nước thải đen cho thấy chất thải tích tụ lâu, đáy có vùng yếm khí. Cần tăng số lần xi phông, kiểm tra quạt, giảm ăn nếu dư và tăng cường vi sinh xử lý đáy.`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'xu-ly-nuoc-truoc-khi-tha-giong-tom', topic: 'technique', daysAgo: 1.05,
    title: L('Xử lý nước trước khi thả giống tôm: lắng, diệt tạp, sát trùng, gây màu'),
    excerpt: L('Quy trình xử lý nước trước khi thả tôm giống: lắng lọc, diệt tạp, diệt giáp xác, sát trùng, cấy vi sinh, gây màu, kèm bảng thông số cần đạt trước ngày thả.'),
    body: L(
`Nước là "nhà" của tôm. Tôm giống mới thả rất nhạy cảm với môi trường, và những mầm bệnh, sinh vật tạp, khí độc có sẵn trong nước cấp có thể quyết định vụ nuôi ngay từ những ngày đầu. Vì vậy **xử lý nước trước khi thả giống** là bước bà con không nên rút ngắn.

Bài này tập trung vào phần xử lý nước, từ lúc lấy nước vào ao lắng cho đến khi nước sẵn sàng thả giống. Phần cải tạo ao (nạo vét, phơi đáy, vệ sinh bạt) bà con có thể xem trong bài [quy trình chuẩn bị ao nuôi tôm thẻ 7 bước](/vi/blog/quy-trinh-chuan-bi-ao-nuoi-tom-the-7-buoc).

## Tổng quan quy trình
| Bước | Nội dung | Thời gian tham khảo |
|---|---|---|
| 1 | Lấy nước qua túi lọc vào ao lắng | 1 ngày |
| 2 | Lắng nước | 3–7 ngày |
| 3 | Diệt cá tạp, giáp xác, ký chủ trung gian | 1 ngày xử lý + thời gian chờ theo hướng dẫn |
| 4 | Sát trùng nước | 1 ngày xử lý + 2–3 ngày chờ |
| 5 | Cấp nước vào ao nuôi, kiểm tra thông số | 1 ngày |
| 6 | Cấy vi sinh, gây màu, bổ sung khoáng | 3–7 ngày |
| 7 | Kiểm tra lần cuối, thả giống | Ngày thả |

Tổng thời gian thường từ 10–20 ngày tùy nguồn nước và điều kiện từng vùng. Không nên rút ngắn thời gian chờ sau các bước dùng hóa chất.

## Bước 1: Lấy nước qua túi lọc
- Chọn thời điểm lấy nước khi nguồn nước tốt: tránh lúc nước đục, đang có dịch bệnh trong vùng, hoặc vừa có mưa lớn làm phèn trôi xuống.
- Dùng **túi lọc hai lớp** (lớp trong mịn) ở đầu ống cấp để chặn trứng, ấu trùng cá tạp, giáp xác.
- Kiểm tra túi lọc thường xuyên, thay khi rách.

## Bước 2: Lắng nước
Lắng giúp phù sa, chất lơ lửng chìm xuống, giảm độ đục và một phần mầm bệnh. Thời gian lắng tham khảo 3–7 ngày.

Trong thời gian này nên đo sơ bộ: **độ mặn, pH, độ kiềm**. Vùng đất phèn cần kiểm tra pH kỹ; nếu pH thấp, cần xử lý vôi theo hướng dẫn kỹ thuật trước các bước tiếp theo.

## Bước 3: Diệt tạp và giáp xác
- **Cá tạp:** thường dùng saponin (bã trà) theo liều khuyến cáo của nhà cung cấp. Saponin độc với cá nhưng ít ảnh hưởng tôm hơn ở liều thường dùng; hiệu quả cao hơn khi nhiệt độ nước cao, dùng vào lúc nắng.
- **Giáp xác, ký chủ trung gian** (cua, còng, ruốc, tép…): là vật chủ mang mầm bệnh như virus đốm trắng. Dùng các sản phẩm diệt giáp xác **được phép lưu hành**, đúng liều, và **chờ đủ thời gian phân hủy dư lượng** theo hướng dẫn trên nhãn trước khi sang bước sau.
- Rào lưới quanh bờ ao để hạn chế cua, còng bò vào.

Lưu ý: chỉ sử dụng các hoạt chất được phép dùng trong nuôi trồng thủy sản, tuân thủ hướng dẫn của cơ quan chuyên môn và nhà sản xuất.

## Bước 4: Sát trùng nước
Mục tiêu là diệt vi khuẩn, nấm, nguyên sinh động vật còn lại trong nước.

Các nhóm hoạt chất thường dùng: chlorine (calcium hypochlorite), BKC, iodine, glutaraldehyde. Mỗi loại có ưu nhược điểm riêng — xem so sánh chi tiết tại bài [sát trùng nước ao nuôi: so sánh BKC, iodine, glutaraldehyde](/vi/blog/sat-trung-nuoc-ao-nuoi-bkc-iodine-glutaraldehyde).

Ví dụ với **VH-GLUBENCO PRO** (Glutaraldehyde tối thiểu 15% và Bronopol), nhãn hướng dẫn cho thời gian chuẩn bị ao: **1,5 lít cho 1.000 m³ nước, để 2–3 ngày**. Hòa tan với nước gấp 100 lần rồi phun hoặc tạt đều khắp ao, lắc đều trước khi dùng.

Nếu dùng chlorine, cần chạy quạt cho clo bay hơi và **kiểm tra dư lượng clo bằng bộ test** trước khi cấy vi sinh hoặc thả giống. Clo dư dù rất thấp cũng gây hại cho tôm giống.

## Bước 5: Cấp nước vào ao nuôi và kiểm tra
- Cấp nước từ ao lắng đã xử lý vào ao nuôi qua túi lọc.
- Mực nước tham khảo: ao bạt khoảng 1,2–1,5 m, ao đất khoảng 1,2–1,5 m tùy thiết kế.
- Chạy quạt để nước đồng đều, bay bớt dư lượng hóa chất.
- Đo lại pH, kiềm, độ mặn, nhiệt độ.

## Bước 6: Cấy vi sinh, gây màu, bổ sung khoáng
Sau khi hết dư lượng hóa chất (thường sau 2–3 ngày với nhiều loại thuốc sát trùng), tiến hành:

### Cấy vi sinh
Mục tiêu là đưa vi khuẩn có lợi vào chiếm chỗ trước khi vi khuẩn có hại kịp phát triển lại. Có thể dùng vi sinh xử lý nước, đáy chứa *Bacillus*. Ví dụ **CLEAR 12H** ủ theo nhãn (1 gói + 3 kg đường cát + 50 lít nước, sục khí 12–24 giờ), ao bạt dùng 15–20 lít cho 1.000 m³ nước, ao đất 10–15 lít cho 1.000 m³, dùng khi có nắng và mở quạt liên tục.

### Gây màu
Màu nước giúp ổn định pH, che bóng đáy hạn chế tảo đáy, tạo thức ăn tự nhiên. Màu tốt thường là xanh vỏ đậu nhạt hoặc nâu nhạt, độ trong tham khảo 30–40 cm. Chi tiết xem bài [cách gây màu nước ao nuôi tôm](/vi/blog/cach-gay-mau-nuoc-ao-nuoi-tom).

### Bổ sung khoáng, nâng kiềm
Kiềm và khoáng đủ giúp tảo phát triển ổn định và chuẩn bị tốt cho tôm lột xác. Ví dụ **MIX 79** (chứa P, Ca, Mg) có hướng dẫn: trường hợp cần làm tăng độ kiềm dùng 5 kg cho 1.500 m³ nước, dùng liên tục 2 ngày; hòa nước tạt đều khắp ao, nên dùng vào lúc chiều tối.

## Bước 7: Kiểm tra thông số trước ngày thả
| Chỉ tiêu | Khoảng tham khảo | Ghi chú |
|---|---|---|
| pH | 7,5–8,5 | Dao động sáng – chiều không quá 0,5 |
| Độ kiềm | 120–180 mg CaCO₃/L | Ao độ mặn thấp nên giữ ở mức cao trong khoảng này |
| Độ mặn | Gần với độ mặn nơi ương giống | Chênh lệch lớn cần thuần trước |
| Nhiệt độ | 28–32 °C | Thả lúc mát trời |
| Oxy hòa tan | Từ 5 mg/L trở lên | Đo lúc rạng sáng |
| NH₃ | Dưới 0,1 mg/L | |
| NO₂ | Dưới khoảng 0,5–1 mg/L | Càng thấp càng tốt |
| Clo dư | Không phát hiện | Bắt buộc kiểm tra nếu đã dùng chlorine |
| Độ trong | 30–40 cm | Màu nước ổn định 2–3 ngày |

Một cách kiểm tra đơn giản trước khi thả cả bầy: **thả thử một ít tôm giống vào giai** đặt trong ao 12–24 giờ, quan sát tỷ lệ sống và hoạt động.

## Những lỗi hay gặp khi xử lý nước
1. **Rút ngắn thời gian chờ sau diệt tạp, sát trùng:** dư lượng hóa chất gây sốc hoặc chết tôm giống.
2. **Cấy vi sinh khi còn dư lượng sát trùng:** vi sinh chết, ao "trống" vi sinh có lợi.
3. **Gây màu không lên vì kiềm thấp:** cần đo và nâng kiềm trước.
4. **Không kiểm tra độ mặn:** tôm giống từ trại có độ mặn khác nhiều so với ao, thả thẳng gây sốc.
5. **Thả giống khi màu nước chưa ổn định:** tảo tàn sau vài ngày thả, pH dao động mạnh.
6. **Bỏ qua túi lọc:** cá tạp, giáp xác theo nước vào, mang mầm bệnh.

## Câu hỏi thường gặp
### Xử lý nước trước khi thả giống mất bao lâu?
Thường khoảng 10–20 ngày, tùy nguồn nước, loại hóa chất dùng và thời gian gây màu. Không nên rút ngắn thời gian chờ sau các bước dùng hóa chất.

### Sau khi sát trùng bao lâu thì cấy vi sinh được?
Thường sau 2–3 ngày, khi dư lượng hóa chất đã hết. Với chlorine, nên kiểm tra clo dư bằng bộ test trước khi cấy vi sinh.

### Có cần thả thử tôm trước khi thả cả bầy không?
Nên làm. Thả thử một ít tôm giống vào giai trong ao 12–24 giờ giúp bà con kiểm tra nước có an toàn hay không trước khi thả toàn bộ.

### Gây màu mãi không lên thì phải làm sao?
Kiểm tra lại độ kiềm, pH, xem còn dư lượng hóa chất không, và đảm bảo có đủ dinh dưỡng, khoáng cho tảo phát triển. Nếu vẫn không lên màu, nên hỏi kỹ thuật viên để tìm nguyên nhân.

### Ao bạt có cần diệt tạp không?
Ao bạt ít cá tạp hơn ao đất, nhưng nguồn nước cấp vẫn có thể mang trứng cá, giáp xác, mầm bệnh. Vẫn cần lọc kỹ, xử lý ở ao lắng và sát trùng trước khi cấp vào ao nuôi.`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'tom-noi-dau-luc-sang-som-nguyen-nhan-xu-ly', topic: 'disease', daysAgo: 1.2,
    title: L('Tôm nổi đầu lúc sáng sớm: nguyên nhân và cách xử lý khẩn cấp'),
    excerpt: L('Tôm nổi đầu, tấp mé lúc rạng sáng là tín hiệu nguy cấp. Cách xác định nguyên nhân: thiếu oxy, khí độc, tảo tàn hay bệnh, và các bước xử lý khẩn cấp.'),
    body: L(
`Ba bốn giờ sáng đi thăm ao, rọi đèn thấy tôm nổi lờ đờ trên mặt nước, tụ quanh bờ hoặc bám dọc mép bạt — đó là cảnh khiến bất kỳ ai nuôi tôm cũng thót tim. **Tôm nổi đầu lúc sáng sớm** là tín hiệu tôm đang gặp nguy, và nếu xử lý chậm, chỉ trong vài giờ có thể thiệt hại nặng.

Bài này giúp bà con nhanh chóng xác định nguyên nhân và làm đúng những việc cần làm ngay, theo thứ tự ưu tiên.

## Vì sao tôm hay nổi đầu vào lúc rạng sáng?
Ban ngày tảo quang hợp, tạo ra oxy. Ban đêm tảo ngừng quang hợp nhưng vẫn hô hấp, cùng với tôm và vi sinh vật tiêu thụ oxy liên tục. Kết quả là **oxy hòa tan giảm dần suốt đêm và thấp nhất vào khoảng 3–6 giờ sáng**. Đồng thời, CO₂ tích tụ làm **pH cũng thấp nhất vào lúc này** — điều kiện khiến khí H₂S ở đáy độc hơn.

Vì vậy rạng sáng là thời điểm "yếu nhất" trong ngày của ao tôm.

## Các nguyên nhân chính khiến tôm nổi đầu
### 1. Thiếu oxy
Đây là nguyên nhân phổ biến nhất. Thường gặp khi:
- Mật độ tôm cao, sinh khối lớn nhưng số quạt không tăng theo.
- Tảo quá dày (tiêu thụ nhiều oxy về đêm) hoặc tảo tàn đột ngột.
- Trời âm u, mưa nhiều ngày, tảo quang hợp kém ban ngày.
- Nhiệt độ cao làm oxy hòa tan giảm và nhu cầu oxy của tôm tăng.
- Mất điện, quạt hỏng ban đêm.
- Nước phân tầng sau mưa lớn.

### 2. Khí độc (NH₃, NO₂, H₂S)
- **H₂S:** sinh ra ở đáy yếm khí, độc hơn khi pH thấp (rạng sáng). Tôm chết ở đáy, bùn đen mùi trứng thối.
- **NO₂ cao:** làm giảm khả năng vận chuyển oxy trong máu tôm, khiến tôm "thiếu oxy" dù nước có oxy.
- **NH₃:** thường độc nhất khi pH chiều cao, nhưng nếu TAN rất cao vẫn có thể gây hại suốt ngày đêm.

### 3. Tảo tàn
Tảo chết đồng loạt làm nước chuyển màu (đục, trắng, nâu đen), xác tảo phân hủy tiêu tốn oxy và sinh khí độc. Tảo tàn thường xảy ra sau vài ngày trời âm u, sau mưa lớn, sau diệt tảo hoặc khi tảo phát triển quá dày.

### 4. Bệnh
Tôm bị bệnh ở mang (đen mang, đóng rong, ký sinh trùng bám mang) hoặc bệnh toàn thân sẽ hô hấp kém và dễ nổi đầu dù môi trường không quá xấu. Trường hợp này tôm thường yếu kéo dài nhiều ngày, có dấu hiệu bệnh rõ khi kiểm tra.

## Cách phân biệt nhanh nguyên nhân
| Dấu hiệu | Nghiêng về thiếu oxy | Nghiêng về khí độc | Nghiêng về tảo tàn | Nghiêng về bệnh |
|---|---|---|---|---|
| Thời điểm | Rạng sáng, giảm khi mặt trời lên | Có thể kéo dài cả ngày | Sau vài ngày âm u, mưa | Kéo dài nhiều ngày |
| Màu nước | Tảo dày hoặc bình thường | Thường đục, đáy bẩn | Nước đổi màu đột ngột, có bọt, váng | Thường không đổi nhiều |
| Đo oxy rạng sáng | Thấp (dưới khoảng 3–4 mg/L) | Có thể bình thường | Thấp | Có thể bình thường |
| Phản ứng khi tăng quạt | Tôm lặn xuống nhanh | Cải thiện ít | Cải thiện một phần | Cải thiện ít |
| Kiểm tra tôm | Mang bình thường | Mang có thể sậm màu | Tôm yếu đồng loạt | Mang đen, bẩn; gan, ruột bất thường |

Bảng chỉ để định hướng nhanh. Thực tế thường có **nhiều nguyên nhân cùng lúc** (ví dụ tảo tàn → thiếu oxy → khí độc tăng).

## Xử lý khẩn cấp: làm ngay theo thứ tự
### Bước 1: Cấp oxy ngay lập tức
- Bật **toàn bộ quạt nước và sục khí đáy**. Kiểm tra quạt nào hỏng, dây curoa đứt.
- Nếu mất điện, khởi động máy phát dự phòng ngay.
- Có thể dùng chế phẩm cung cấp oxy dạng bột hoặc viên (thường là các hợp chất giải phóng oxy) rải ở khu vực tôm tập trung, theo hướng dẫn của nhà sản xuất.

### Bước 2: Ngưng cho ăn
Ngưng cữ ăn sáng, chỉ cho ăn lại khi tôm đã lặn xuống, hoạt động bình thường, và giảm lượng ăn trong 1–2 ngày tiếp theo. Thức ăn trong lúc tôm thiếu oxy không được ăn, chỉ làm môi trường xấu thêm.

### Bước 3: Đo nhanh các chỉ tiêu
Đo **oxy, pH, nhiệt độ**; nếu có bộ test thì đo thêm **NH₃, NO₂**. Kiểm tra bùn đáy bằng ống lấy mẫu hoặc xi phông. Bắt vài con tôm kiểm tra mang, gan, ruột.

### Bước 4: Thay nước nếu có nguồn sạch
Nếu có nước sạch đã xử lý ở ao lắng, thay 20–30% nước giúp giảm khí độc, xác tảo. Không cấp nước chưa xử lý trong lúc tôm yếu.

### Bước 5: Xử lý khí độc nếu có
Nếu nguyên nhân có liên quan đến NH₃, có thể dùng sản phẩm hấp thu khí độc. Ví dụ **SUPER YUCCA** có công dụng hấp thu khí độc NH₃ và cấp cứu khi tôm nổi đầu do khí độc; nhãn hướng dẫn khi khí độc cao dùng **1 lít cho 3.000 m³ nước**, hòa với nước sạch của ao, tạt đều khắp ao và mở quạt để sản phẩm phân tán đều.

Nếu nghi H₂S ở đáy: tăng oxy đáy, xi phông, thay nước, không khuấy đáy khi oxy còn thấp.

### Bước 6: Tuyệt đối không làm những việc sau
- **Không tạt hóa chất diệt khuẩn, diệt tảo** lúc tôm đang nổi đầu: tảo và vi sinh chết thêm, oxy tụt sâu hơn.
- **Không cho ăn bù** khi tôm vừa lặn.
- **Không khuấy đáy, kéo lưới** khi oxy chưa ổn định.
- **Không tạt vôi liều cao** đột ngột làm pH dao động mạnh.

## Sau khi qua cơn nguy cấp
Khi mặt trời lên, tảo quang hợp trở lại, oxy tăng, tôm thường lặn dần. Nhưng đó chưa phải là hết chuyện. Bà con cần:

1. **Tìm nguyên nhân gốc:** quạt có đủ cho sinh khối hiện tại không? Tảo có quá dày hay vừa tàn? Đáy có bẩn không? Lượng ăn có dư không?
2. **Phục hồi đáy và nước:** xi phông, dùng vi sinh xử lý đáy (ví dụ **CLEAR 12H** có công dụng phân hủy mùn bã hữu cơ, xác tảo tàn, giảm khí độc NH₃, H₂S — dùng theo hướng dẫn trên nhãn, khi có nắng, mở quạt liên tục).
3. **Ổn định tảo và kiềm:** giữ kiềm trong khoảng tham khảo 120–180 mg CaCO₃/L, pH dao động ngày đêm không quá 0,5.
4. **Theo dõi sát 3–5 đêm tiếp theo:** đo oxy lúc 22 giờ, 2 giờ và 5 giờ sáng.
5. **Kiểm tra tôm:** nếu tôm vẫn yếu, mang đen, gan ruột bất thường dù môi trường đã ổn, cần mời kỹ thuật viên kiểm tra bệnh.

## Phòng tôm nổi đầu lúc sáng sớm
- **Tăng quạt theo sinh khối tôm**, không theo cảm tính. Đến giữa và cuối vụ, nhu cầu oxy tăng rất nhanh.
- **Chạy quạt nhiều hơn từ chiều tối đến sáng**, nhất là những đêm trời âm u, oi bức, không gió.
- **Có máy phát điện dự phòng** và kiểm tra định kỳ.
- **Không để tảo quá dày:** độ trong tham khảo 30–40 cm.
- **Giảm ăn khi trời âm u, mưa nhiều ngày.**
- **Quản lý đáy tốt:** xi phông đều, vi sinh định kỳ.
- **Đo oxy lúc rạng sáng thường xuyên**, duy trì từ khoảng 4–5 mg/L trở lên. Có thể tham khảo thêm bài [oxy hòa tan ao nuôi tôm bao nhiêu là đủ](/vi/blog/oxy-hoa-tan-ao-nuoi-tom-bao-nhieu-la-du).

## Câu hỏi thường gặp
### Tôm nổi đầu nhưng mặt trời lên thì lặn, có cần lo không?
Có. Đó là dấu hiệu oxy về đêm không đủ. Nếu không xử lý (tăng quạt, giảm tảo, giảm ăn, quản lý đáy), tình trạng sẽ lặp lại và nặng dần, tôm chậm lớn, dễ bệnh.

### Tôm nổi đầu thì có nên tạt vôi không?
Không nên tạt vôi liều cao đột ngột lúc tôm đang nổi đầu. Ưu tiên cấp oxy, ngưng cho ăn và xác định nguyên nhân. Điều chỉnh pH, kiềm nên làm từ từ sau khi tôm đã ổn định.

### Oxy bao nhiêu thì tôm bắt đầu nổi đầu?
Tùy kích cỡ tôm, nhiệt độ và tình trạng sức khỏe. Thường khi oxy xuống dưới khoảng 3 mg/L, tôm bắt đầu stress rõ. Nên duy trì oxy từ khoảng 4–5 mg/L trở lên, kể cả lúc rạng sáng.

### Dùng yucca có cứu được tôm nổi đầu không?
Yucca như **SUPER YUCCA** giúp hấp thu NH₃, hỗ trợ khi tôm nổi đầu do khí độc. Nhưng nếu nguyên nhân là thiếu oxy thì việc quan trọng nhất là bật quạt, cấp oxy ngay.

### Tôm nổi đầu nhiều ngày dù oxy đủ là do đâu?
Có thể do khí độc (NO₂, H₂S) hoặc bệnh ở mang, gan, đường ruột. Nên kiểm tra mẫu tôm và các chỉ tiêu nước, đồng thời liên hệ kỹ thuật viên để được tư vấn.`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'lich-dung-vi-sinh-khoang-theo-tuan-tuoi-tom-the', topic: 'technique', daysAgo: 1.35,
    title: L('Lịch dùng vi sinh và khoáng theo tuần tuổi tôm thẻ (bảng chi tiết)'),
    excerpt: L('Bảng lịch dùng vi sinh xử lý nước, vi sinh đường ruột và khoáng theo từng tuần tuổi tôm thẻ chân trắng, kèm cách điều chỉnh theo thông số nước thực tế.'),
    body: L(
`Nhiều bà con dùng vi sinh và khoáng theo kiểu "thấy ao có vấn đề mới dùng", hoặc ngược lại, dùng dồn dập mà không theo kế hoạch. Cả hai cách đều tốn kém và kém hiệu quả. Vi sinh và khoáng phát huy tốt nhất khi được dùng **đều đặn, đúng giai đoạn**, phù hợp với nhu cầu thay đổi của ao theo tuổi tôm.

Bài này đưa ra một **lịch tham khảo theo tuần tuổi tôm thẻ chân trắng**, giải thích vì sao mỗi giai đoạn cần gì, và cách điều chỉnh khi thông số nước thay đổi. Đây là khung tham khảo, không phải công thức cứng — mỗi ao cần được điều chỉnh theo thực tế và theo tư vấn của kỹ thuật viên.

## Ba nhóm sản phẩm cần có trong lịch
1. **Vi sinh xử lý nước, đáy (tạt ao):** phân hủy chất hữu cơ, giảm khí độc, ổn định môi trường.
2. **Vi sinh đường ruột (trộn thức ăn):** hỗ trợ tiêu hóa, ổn định đường ruột tôm.
3. **Khoáng (tạt ao và/hoặc trộn ăn):** duy trì kiềm, cung cấp Ca, Mg, K… cho tôm lột xác, cứng vỏ.

Ngoài ra còn các sản phẩm dùng khi cần như hấp thu khí độc, bổ gan, nhưng không nhất thiết phải có trong lịch cố định.

## Nhu cầu của ao thay đổi theo tuổi tôm
| Giai đoạn | Đặc điểm ao | Ưu tiên |
|---|---|---|
| Tuần 1–2 | Lượng ăn ít, chất thải thấp, tảo mới hình thành | Giữ màu nước, ổn định vi sinh, kiềm |
| Tuần 3–5 | Lượng ăn tăng nhanh, bắt đầu có chất thải ở đáy | Vi sinh đáy định kỳ, khoáng cho lột xác, bắt đầu xi phông |
| Tuần 6–9 | Sinh khối lớn, chất thải nhiều, tôm lột xác đều | Tăng tần suất vi sinh đáy, khoáng đều đặn, theo dõi khí độc |
| Tuần 10 đến thu hoạch | Chất thải cao nhất, oxy dễ thiếu, khí độc dễ tăng | Vi sinh đáy dày hơn, xử lý khí độc khi cần, giữ kiềm ổn định |

## Bảng lịch tham khảo theo tuần
Bảng dưới đây dùng ví dụ một số sản phẩm và **liều theo nhãn** của chúng. Bà con có thể dùng sản phẩm tương đương, nhưng luôn tuân theo liều trên nhãn sản phẩm mình dùng.

| Tuần tuổi | Vi sinh tạt ao (xử lý nước, đáy) | Vi sinh trộn ăn | Khoáng | Việc khác |
|---|---|---|---|---|
| Trước thả 3–5 ngày | Cấy vi sinh sau khi hết dư lượng sát trùng; gây màu | – | Nâng kiềm về khoảng tham khảo | Kiểm tra pH, kiềm, độ mặn |
| Tuần 1 | Vi sinh xử lý nước định kỳ theo nhãn | Bắt đầu trộn lợi khuẩn hằng ngày | Khoáng tạt định kỳ nếu kiềm thấp | Theo dõi màu nước, pH sáng – chiều |
| Tuần 2 | Như tuần 1 | Duy trì hằng ngày | Khoáng tạt định kỳ | Đo kiềm 2 lần/tuần |
| Tuần 3–4 | Vi sinh xử lý đáy định kỳ (ao bạt 3 ngày/lần, ao đất 5 ngày/lần nếu theo **CLEAR 12H**) | Duy trì hằng ngày | Khoáng tạt định kỳ, chú ý con nước lột xác | Bắt đầu xi phông |
| Tuần 5–6 | Vi sinh đáy định kỳ | Duy trì; tăng liều khi phân lỏng, phân trắng theo nhãn | Khoáng tạt định kỳ, có thể bổ sung trộn ăn | Đo NH₃, NO₂ 2 lần/tuần |
| Tuần 7–9 | Vi sinh đáy định kỳ, có thể dùng thêm sau mưa, sau tảo tàn | Duy trì | Khoáng đều đặn, tăng khi kiềm giảm | Tăng quạt theo sinh khối |
| Tuần 10 đến thu hoạch | Vi sinh đáy định kỳ, chú ý nhiều hơn khi khí độc tăng | Duy trì | Khoáng đều đặn | Xử lý khí độc khi cần; tuân thủ thời gian ngưng thuốc |

## Chi tiết từng nhóm sản phẩm
### Vi sinh xử lý nước, đáy
Ví dụ **CLEAR 12H**: ủ 1 gói + 3 kg đường cát (vàng hoặc trắng) + 50 lít nước, sục khí 12–24 giờ.
- Ao bạt: 15–20 lít dịch ủ cho 1.000 m³ nước, **định kỳ 3 ngày một lần**.
- Ao đất: 10–15 lít cho 1.000 m³ nước, **định kỳ 5 ngày một lần**.
- Mở quạt hoặc sục khí liên tục khi dùng; dùng khi có nắng, không dùng khi trời mưa.

Lưu ý: không dùng trong vòng 2–3 ngày sau khi sát trùng nước.

### Vi sinh trộn thức ăn
Ví dụ **US LACTO** (chứa *Bacillus licheniformis*, *B. megaterium*, *B. subtilis*):
- Bổ sung hằng ngày: trộn **5 g/kg thức ăn**, cho ăn 2–3 lần/ngày và suốt vụ nuôi.
- Khi có dấu hiệu phân trắng, phân lỏng, phân đứt khúc: trộn **10–15 g/kg thức ăn**, cho ăn 2–3 lần/ngày.
- Hòa tan với nước sạch rồi trộn đều lên thức ăn, để yên 15 phút rồi cho tôm ăn.

### Khoáng tạt ao
Ví dụ **MIX 79** (chứa P, Ca, Mg):
- Định kỳ: **5 kg cho 3.000 m³ nước, 2 ngày một lần**.
- Khi cần làm tăng độ kiềm: 5 kg cho 1.500 m³ nước, dùng liên tục 2 ngày.
- Khi tôm cần cứng vỏ nhanh: 3 kg cho 2.000 m³ nước, dùng liên tục 2 ngày.
- Hòa với nước, tạt đều khắp ao, nên dùng vào lúc chiều tối.

Tôm thường lột xác vào ban đêm, nên tạt khoáng chiều tối giúp tôm có sẵn khoáng khi cần.

## Điều chỉnh lịch theo thông số nước
Lịch chỉ là khung. Quyết định hằng ngày nên dựa trên số đo:

| Thông số | Khoảng tham khảo | Khi lệch thì điều chỉnh gì |
|---|---|---|
| Độ kiềm | 120–180 mg CaCO₃/L | Kiềm thấp: tăng khoáng, vôi theo hướng dẫn; kiềm thấp kéo dài dễ làm pH dao động |
| pH | 7,5–8,5, dao động ngày đêm ≤ 0,5 | Dao động lớn: kiểm tra kiềm, mật độ tảo |
| NH₃ | Dưới 0,1 mg/L | Tăng: giảm ăn, xi phông, tăng vi sinh đáy, có thể dùng sản phẩm hấp thu khí độc |
| NO₂ | Càng thấp càng tốt, tham khảo dưới 0,5–1 mg/L | Tăng: tăng oxy, thay nước, vi sinh, khoáng |
| Oxy rạng sáng | Từ khoảng 4–5 mg/L trở lên | Thấp: tăng quạt, giảm ăn, giảm mật độ tảo |
| Độ trong | 30–40 cm | Quá đục: giảm ăn, tăng vi sinh; quá trong: gây màu lại |

## Những tình huống cần thay đổi lịch
- **Sau mưa lớn:** kiểm tra pH, kiềm; bổ sung khoáng; vi sinh dùng lại khi trời nắng.
- **Sau khi sát trùng nước:** tạm ngưng vi sinh tạt ao 2–3 ngày, sau đó cấy lại.
- **Sau diệt tảo:** chờ 1–2 ngày rồi dùng vi sinh phân hủy xác tảo.
- **Tôm lột xác rộ (con nước):** tăng khoáng, giảm ăn nhẹ, tránh dùng hóa chất.
- **Tôm có dấu hiệu phân trắng, phân lỏng:** tăng liều vi sinh trộn ăn theo nhãn, kiểm tra lại môi trường và hỏi kỹ thuật viên.

## Những sai lầm thường gặp
1. **Dùng vi sinh ngay sau khi sát trùng:** vi sinh chết, lãng phí.
2. **Đổi sản phẩm liên tục:** khó đánh giá hiệu quả. Nên dùng ổn định và theo dõi.
3. **Chỉ dùng vi sinh, không xi phông, không giảm ăn:** vi sinh không theo kịp chất thải.
4. **Tạt khoáng không đo kiềm:** có ao thừa, có ao thiếu.
5. **Không ghi chép:** không biết sản phẩm nào đã dùng, khi nào, liều bao nhiêu.

## Mẫu ghi chép đơn giản
Mỗi ngày ghi: ngày tuổi tôm, lượng ăn từng cữ, sản phẩm đã dùng và liều, thông số nước sáng – chiều, số tôm chết, ghi chú (mưa, lột xác, màu nước). Sau một vụ, sổ ghi chép sẽ giúp bà con xây dựng lịch riêng phù hợp nhất với ao của mình.

## Câu hỏi thường gặp
### Có cần dùng vi sinh ngay từ tuần đầu không?
Nên dùng. Cấy vi sinh từ trước khi thả và duy trì từ tuần đầu giúp vi khuẩn có lợi chiếm ưu thế sớm, ổn định màu nước và hạn chế vi khuẩn có hại.

### Vi sinh tạt ao và vi sinh trộn ăn có thay thế nhau được không?
Không. Vi sinh tạt ao xử lý môi trường nước, đáy; vi sinh trộn ăn hỗ trợ đường ruột tôm. Hai nhóm có vai trò khác nhau và bổ sung cho nhau.

### Tạt khoáng vào giờ nào tốt nhất?
Với **MIX 79**, nhãn khuyến cáo dùng vào lúc chiều tối. Tôm thường lột xác về đêm nên khoáng có sẵn trong nước vào thời điểm này là phù hợp.

### Lịch này có dùng được cho ao đất không?
Được, nhưng cần điều chỉnh. Ví dụ với **CLEAR 12H**, ao đất dùng liều 10–15 lít dịch ủ cho 1.000 m³ nước, định kỳ 5 ngày một lần thay vì 3 ngày như ao bạt.

### Có cần dùng vi sinh trong tuần trước thu hoạch không?
Vi sinh xử lý nước, đáy vẫn có thể duy trì để giữ môi trường ổn định đến khi thu hoạch. Riêng các thuốc sát trùng và hóa chất cần tuân thủ thời gian ngưng sử dụng trước thu hoạch ghi trên nhãn.`),
  },
];
