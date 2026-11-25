'use strict';
/**
 * Batch D of long-form Vietnamese guides: test kit, tom bo an, den/vang mang,
 * bao quan thuoc/men vi sinh, 30 ngay dau.
 * Same conventions as seed-posts-a.js (see src/services/article.js):
 *   ## headings -> table of contents, "## Câu hỏi thường gặp" -> FAQ + FAQPage schema,
 *   **PRODUCT NAME** (exact `ten` from nhan/san-pham.json) -> automatic product link.
 * Vietnamese only: en/zh fall back to vi.
 */
const L = (vi, en, zh) => ({ vi, en, zh });

module.exports = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'cach-do-chi-tieu-nuoc-ao-tom-bang-test-kit', topic: 'technique', daysAgo: 0.15,
    title: L('Cách đo chỉ tiêu nước ao tôm bằng test kit: pH, kiềm, NH3, NO2'),
    excerpt: L('Cách đo chỉ tiêu nước ao tôm bằng test kit đúng: đo lúc nào, lấy mẫu ở đâu, đọc màu ra sao, khoảng tham khảo của pH, kiềm, NH3, NO2 và việc cần làm khi lệch.'),
    body: L(
`Muốn đo chỉ tiêu nước ao tôm bằng test kit cho đúng, bà con cần ba việc: lấy mẫu ở vị trí và độ sâu cố định, dụng cụ sạch, và đo vào đúng giờ trong ngày (pH đo cả sáng sớm lẫn chiều). Kết quả chỉ có giá trị khi so sánh được giữa các ngày, nên phải ghi sổ mỗi lần đo. Bài này hướng dẫn từng bước để bà con tự đo tại ao.

Test kit là cách nhanh và rẻ nhất để biết ao đang "khỏe" hay "có chuyện" trước khi tôm biểu hiện ra ngoài. Nhiều lần tôm bỏ ăn, nổi đầu hay đen mang đều có dấu hiệu báo trước trong số đo nước vài ngày. Vấn đề là nhiều người đo xong vẫn không tin kết quả vì mỗi lần một khác. Phần lớn là do cách lấy mẫu và cách đọc.

## Cần đo những chỉ tiêu nào trong ao tôm?
Bà con không cần đo hết mọi thứ mỗi ngày. Nhóm chỉ tiêu cơ bản nhất gồm:

- **pH:** cho biết nước thiên về axit hay kiềm. Dao động pH trong ngày phản ánh mức tảo quang hợp.
- **Độ kiềm (alkalinity):** khả năng "đệm" của nước, giúp pH không lên xuống đột ngột. Xem thêm bài [cách tăng kiềm ổn định pH ao nuôi tôm](/vi/blog/cach-tang-kiem-on-dinh-ph-ao-nuoi-tom).
- **Amoniac (NH3/NH4):** khí độc sinh ra từ phân tôm, thức ăn thừa, xác tảo.
- **Nitrit (NO2):** chất trung gian khi vi khuẩn chuyển hóa amoniac, độc với tôm.
- **Độ mặn, nhiệt độ:** hai thông số nền, ảnh hưởng đến độ độc của khí và nhu cầu oxy.

Ngoài ra nếu có điều kiện, bà con đo thêm oxy hòa tan (xem [oxy hòa tan ao nuôi tôm bao nhiêu là đủ](/vi/blog/oxy-hoa-tan-ao-nuoi-tom-bao-nhieu-la-du)) và độ trong.

## Nên đo vào lúc nào trong ngày?
Chỉ tiêu trong ao thay đổi theo giờ, nên cần cố định khung giờ đo:

| Chỉ tiêu | Giờ đo gợi ý | Lý do |
|---|---|---|
| pH | Sáng sớm (khoảng 5–6 giờ) và chiều (khoảng 14–15 giờ) | Sáng thấp nhất, chiều cao nhất; chênh lệch cho thấy mức tảo |
| Nhiệt độ | Cùng hai mốc với pH | Nhiệt độ cao làm khí độc nguy hiểm hơn |
| Kiềm | Một lần, thường vào buổi sáng | Ít dao động trong ngày |
| NH3, NO2 | Một lần mỗi lần đo, cùng giờ các ngày | Để so sánh giữa các ngày |
| Độ mặn | Khi thay nước, sau mưa lớn | Mưa làm độ mặn tầng mặt giảm |

Sau mưa lớn, trước khi dùng thuốc hay chế phẩm, và khi tôm có biểu hiện lạ (bỏ ăn, nổi đầu, tấp mé) là những thời điểm nên đo thêm ngoài lịch thường kỳ.

## Cách lấy mẫu nước đúng
Cách lấy mẫu quyết định phần lớn độ chính xác.

1. **Dụng cụ sạch:** dùng cốc hoặc chai riêng, tráng bằng chính nước ao 2–3 lần rồi mới lấy mẫu. Không dùng chung cốc với dụng cụ khác, tuyệt đối không để dính xà phòng, thuốc hay dầu.
2. **Độ sâu cố định:** thường lấy ở khoảng nửa cánh tay đến một cánh tay dưới mặt nước, tránh lớp nước mặt đầy bọt và tảo.
3. **Vị trí cố định:** chọn 1–2 điểm quen thuộc, cách bờ khoảng vài mét, không sát nơi vừa tạt thuốc, không đúng chỗ cánh quạt đang đánh mạnh. Nếu ao lớn, nên lấy ở hai vị trí rồi so sánh.
4. **Đo ngay:** nên đo trong thời gian ngắn sau khi lấy mẫu. Để mẫu lâu, nhiệt độ và khí hòa tan thay đổi, kết quả sẽ lệch.
5. **Không đo mẫu có cặn bùn:** nếu nước đục vì khuấy đáy, mẫu sẽ cho số khác thực tế.

## Cách đọc test kit đúng
Test kit dạng nhỏ giọt đổi màu có vài nguyên tắc chung bà con nên nhớ:

- **Làm đúng thể tích mẫu và số giọt** như hướng dẫn trên bộ kit. Thừa hoặc thiếu một vài giọt đã làm lệch màu.
- **Lắc đều, chờ đủ thời gian** phản ứng ghi trên hướng dẫn trước khi đọc.
- **Đọc màu dưới ánh sáng tự nhiên**, đặt ống trên nền trắng. Đọc dưới đèn vàng hay bóng râm rất dễ sai.
- **So màu với bảng màu của chính bộ kit đó,** không dùng bảng của hãng khác.
- **Màu nằm giữa hai ô:** ghi nhận khoảng giữa, đừng cố làm tròn theo ý thích.
- Nhiều bộ test amoniac thực chất đo **tổng amoniac (TAN)**, chứ không phải NH3 độc trực tiếp. Phần NH3 độc tăng lên khi pH và nhiệt độ cao, nên cùng một số TAN, buổi chiều nắng nóng nguy hiểm hơn buổi sáng sớm. Bà con xem kỹ nhãn bộ kit để biết nó đo gì.

## Khoảng giá trị tham khảo cho ao tôm thẻ
Các khoảng dưới đây chỉ mang tính **tham khảo**, tùy độ mặn, giai đoạn nuôi và khuyến cáo của kỹ thuật viên tại vùng của bà con:

| Chỉ tiêu | Khoảng tham khảo thường dùng | Lưu ý |
|---|---|---|
| pH | Khoảng 7,5–8,5 | Chênh lệch sáng – chiều thường nên không quá khoảng 0,5 |
| Độ kiềm | Thường khoảng 100–150 mg/L (CaCO3) | Kiềm thấp thì pH dễ dao động mạnh |
| NH3 (khí độc) | Càng thấp càng tốt, thường khuyến cáo dưới khoảng 0,1 mg/L | Tăng độc khi pH, nhiệt độ cao |
| NO2 | Thường khuyến cáo dưới khoảng 1 mg/L, tôm nhỏ nhạy cảm hơn | Nhiều ao muốn giữ thấp hơn nữa |
| Nhiệt độ | Thường khoảng 28–32 °C | Ngoài khoảng này tôm dễ giảm ăn |
| Oxy hòa tan | Thường trên khoảng 4–5 mg/L | Đo kỹ lúc gần sáng |

Nếu số đo của ao nằm ngoài khoảng trên nhưng tôm vẫn ăn khỏe, đừng vội xử lý hàng loạt. Hãy đo lại, đối chiếu với các ngày trước rồi mới quyết định.

## Những lỗi thường gặp khi dùng test kit
- **Bộ kit hết hạn hoặc để nơi nóng:** thuốc thử xuống cấp, màu lên sai. Xem hạn dùng, giữ nơi mát, đậy kín nắp lọ.
- **Mẫu nước bẩn, dụng cụ không tráng:** dư lượng thuốc, xà phòng hay nước từ lần đo trước làm lệch số.
- **Đo ngay sau khi tạt thuốc, vi sinh hay vôi:** kết quả không phản ánh trạng thái bình thường. Nên đợi hết một chu kỳ quạt.
- **Nước quá lạnh hoặc quá nóng:** một số phản ứng đổi màu chậm hoặc nhanh bất thường, nên để mẫu về nhiệt độ phòng nếu hướng dẫn yêu cầu.
- **Mỗi lần đo một người, một cách:** thống nhất một người đo và một cách làm để số liệu so sánh được.
- **Đo một lần rồi kết luận:** nên xem xu hướng 3–5 ngày liên tiếp thay vì một số đơn lẻ.

## Ghi sổ đo như thế nào cho có ích?
Một cuốn sổ nhỏ hoặc ghi chú điện thoại là đủ. Mỗi lần đo, bà con ghi: ngày giờ, vị trí lấy mẫu, pH sáng và chiều, kiềm, NH3 hoặc TAN, NO2, nhiệt độ, độ mặn, thời tiết hôm đó, lượng ăn và việc đã xử lý (vi sinh, khoáng, thuốc). Sau vài tuần, bà con sẽ thấy quy luật, ví dụ NO2 hay tăng sau mấy ngày mưa, hay pH tụt khi tảo tàn. Khi cần hỏi kỹ thuật viên, đưa cuốn sổ ra là họ nắm tình hình nhanh hơn rất nhiều.

## Số đo lệch thì làm gì?
Bà con nên tìm nguyên nhân trước khi dùng sản phẩm. Một số hướng xử lý cơ bản:

- **pH dao động lớn, kiềm thấp:** xem lại nguồn kiềm và mật độ tảo. Có thể bổ sung khoáng theo hướng dẫn, ví dụ **MIX 79** có hướng dẫn dùng khi cần tăng độ kiềm (5 kg/1.500 m³ nước, dùng liên tục 2 ngày, nên dùng vào lúc chiều tối). Xem thêm [cách tăng kiềm ổn định pH](/vi/blog/cach-tang-kiem-on-dinh-ph-ao-nuoi-tom).
- **NH3 cao:** giảm lượng ăn, kiểm tra đáy, xi phông chất thải, tăng sục khí. **SUPER YUCCA** theo công dụng trên nhãn là sản phẩm hấp thụ khí độc NH3; hướng dẫn dùng định kỳ là 1 lít/5.000 m³ nước (7 ngày/lần), khi khí độc cao dùng 1 lít/3.000 m³ nước; hòa nước tạt đều lúc sáng sớm hoặc chiều mát, mở quạt. Đọc thêm [yucca trong nuôi tôm](/vi/blog/yucca-trong-nuoi-tom-tac-dung-cach-dung).
- **NO2 cao:** hạn chế cho ăn, giữ oxy tốt, ổn định hệ vi sinh và xem bài [dùng men vi sinh đúng cách](/vi/blog/dung-men-vi-sinh-dung-cach). Cân nhắc hỏi kỹ thuật viên trước khi thay nước lớn.
- **Mùi trứng thối ở đáy, tôm nổi đầu:** xem bài [khí độc H2S đáy ao](/vi/blog/khi-doc-h2s-day-ao-nuoi-tom-nhan-biet-xu-ly).

Cần tư vấn cho ao của mình? Gọi hotline 1900 252 667 để kỹ thuật viên Thủy Sản Tím tư vấn miễn phí.

## Câu hỏi thường gặp

### Test kit đo được những gì, có thay thế được máy đo không?
Test kit cho kết quả ước lượng theo màu, đủ để theo dõi xu hướng hằng ngày. Máy đo điện tử cho số chính xác hơn nhưng cần hiệu chuẩn thường xuyên. Nhiều người dùng test kit hằng ngày và đối chiếu thỉnh thoảng với phòng xét nghiệm hoặc kỹ thuật viên.

### Nên đo pH vào buổi sáng hay buổi chiều?
Nên đo cả hai. pH buổi sáng sớm thường thấp nhất, buổi chiều thường cao nhất. Chênh lệch giữa hai lần đo cho biết ao có dao động mạnh hay không, từ đó đoán được tình trạng tảo và độ kiềm.

### Vì sao hôm nay đo NH3 thấp, mai lại cao dù không làm gì?
Có thể do giờ đo khác nhau, vị trí lấy mẫu khác, thời tiết đổi hoặc lượng ăn tăng. Amoniac độc còn thay đổi theo pH và nhiệt độ. Hãy đo cùng giờ, cùng vị trí và xem xu hướng nhiều ngày.

### Test kit để được bao lâu, bảo quản thế nào?
Hạn dùng được ghi trên bộ kit, bà con theo đúng hạn đó. Nên giữ nơi mát, tránh nắng, đậy kín nắp thuốc thử và không dùng khi thuốc đổi màu hay vẩn đục bất thường.

### Số đo ra ngoài khoảng tham khảo thì có phải xử lý ngay không?
Không nhất thiết. Hãy đo lại, đối chiếu với các ngày trước và quan sát tôm (ăn, bơi, màu mang). Nếu xu hướng xấu đi hoặc tôm có biểu hiện bất thường thì xử lý nguyên nhân, và nên trao đổi với kỹ thuật viên.
`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'tom-bo-an-nguyen-nhan-va-cach-xu-ly', topic: 'disease', daysAgo: 0.35,
    title: L('Tôm bỏ ăn: nguyên nhân và cách xử lý từng trường hợp'),
    excerpt: L('Tôm bỏ ăn có thể do nước xấu, thiếu oxy, nhiệt độ, lột xác, stress hay đường ruột, gan. Bảng triệu chứng, cách kiểm tra và hướng xử lý từng trường hợp.'),
    body: L(
`Tôm bỏ ăn thường do một trong các nhóm nguyên nhân sau: nước ao xấu (khí độc, pH lệch), thiếu oxy, nhiệt độ thay đổi đột ngột, tôm đang lột xác hoặc bị stress sau mưa, thức ăn kém chất lượng, hoặc tôm đang bệnh đường ruột và gan. Việc đầu tiên là kiểm tra nước và oxy, rồi mới nhìn tôm, đừng vội tăng giảm thuốc. Bài này giúp bà con khoanh vùng nguyên nhân theo từng triệu chứng.

Tôm bỏ ăn là một dấu hiệu, không phải một bệnh. Cùng một biểu hiện "sàng ăn còn sạch thức ăn nhưng tôm không vào" có thể đến từ rất nhiều gốc khác nhau. Xử lý sai gốc vừa tốn tiền vừa mất thêm thời gian.

## Tôm bỏ ăn là gì, nhận biết thế nào?
Bà con nhận ra tôm bỏ ăn qua sàng ăn (nhá). Sau thời gian chờ thường dùng, thức ăn vẫn còn nhiều, tôm không vào hoặc vào ít. Có khi tôm ăn nửa chừng rồi bỏ, hoặc ăn giảm dần qua nhiều cữ. Cần phân biệt:

- **Giảm ăn tạm thời:** vài cữ, rồi ăn lại, thường do lột xác hoặc thời tiết.
- **Bỏ ăn kéo dài:** từ nửa ngày trở lên mà không có lý do rõ, cần kiểm tra kỹ.
- **Bỏ ăn kèm dấu hiệu khác:** phân trắng, ruột rỗng, gan nhạt, tôm nổi đầu, tấp mé, đỏ thân... thường là vấn đề sức khỏe.

Cách đọc nhá và điều chỉnh lượng ăn xem ở bài [cách đọc nhá sàng ăn điều chỉnh lượng ăn tôm thẻ](/vi/blog/cach-doc-nha-sang-an-dieu-chinh-luong-an-tom-the).

## Quy trình 5 bước khi thấy tôm bỏ ăn
1. **Dừng lại, đừng cho ăn bù.** Cho thêm thức ăn khi tôm không ăn chỉ làm đáy bẩn nhanh hơn.
2. **Đo nước:** pH, kiềm, NH3 hoặc TAN, NO2, nhiệt độ, độ mặn (xem [cách đo chỉ tiêu nước ao bằng test kit](/vi/blog/cach-do-chi-tieu-nuoc-ao-tom-bang-test-kit)).
3. **Kiểm tra oxy và quạt:** quạt có chạy đủ không, có khu vực nước đứng không, tôm có tấp mé hay nổi đầu không.
4. **Soi tôm:** vớt vài con quan sát mang, ruột, gan, râu, đuôi, độ cứng vỏ.
5. **Nhìn đáy:** có mùi hôi, bùn đen, thức ăn thừa tích tụ không.

Làm đủ năm bước này thường đã khoanh được nhóm nguyên nhân.

## Bảng triệu chứng, cần kiểm tra và hướng xử lý
| Triệu chứng | Cần kiểm tra | Hướng xử lý tham khảo |
|---|---|---|
| Tôm bỏ ăn sau mưa lớn, nước đục hoặc đổi màu | pH, kiềm, độ mặn, màu nước | Chạy quạt đủ, ổn định kiềm, giảm ăn, theo dõi vài ngày |
| Bỏ ăn, tôm nổi đầu gần sáng | Oxy hòa tan, NH3, NO2 | Tăng sục khí, giảm ăn, xử lý đáy, hấp thụ khí độc |
| Bỏ ăn lúc trời nóng gắt hoặc lạnh đột ngột | Nhiệt độ nước sáng – chiều | Giữ mực nước, tăng oxy, điều chỉnh giờ cho ăn |
| Bỏ ăn, thấy nhiều vỏ lột hoặc tôm mềm vỏ | Khoáng, kiềm, lịch lột xác | Bổ sung khoáng, giảm ăn tạm thời, theo dõi |
| Ăn giảm, phân trắng, phân đứt khúc, ruột rỗng hoặc không liền | Ruột, phân trên sàng | Hỗ trợ đường ruột, giảm ăn, theo dõi sát |
| Ăn giảm, gan nhạt hoặc teo, tôm yếu | Gan tụy, ruột | Hỗ trợ gan, tham khảo kỹ thuật viên, xét nghiệm khi cần |
| Bỏ ăn đột ngột, thức ăn mới, mùi lạ | Lô thức ăn, cách bảo quản | Đổi lô, kiểm tra hạn và độ ẩm của thức ăn |

## Nguyên nhân thường gặp nhất
### Nước xấu và khí độc
Khi NH3, NO2 hay H2S tăng, tôm khó chịu, bơi chậm và ăn kém. Khí độc tăng nhanh khi thức ăn thừa, đáy bẩn, tảo tàn. Đây là nhóm nguyên nhân phổ biến vì nó xuất hiện cùng nhịp với việc cho ăn nhiều ở giữa vụ. Xem thêm [quản lý khí độc ao nuôi mùa mưa](/vi/blog/quan-ly-khi-doc-ao-nuoi-mua-mua) và [khí độc H2S đáy ao](/vi/blog/khi-doc-h2s-day-ao-nuoi-tom-nhan-biet-xu-ly).

### Thiếu oxy
Tôm thiếu oxy sẽ giảm ăn trước khi nổi đầu. Thường gặp ở cuối đêm, gần sáng, hoặc khi trời âm u nhiều ngày. Hãy kiểm tra hệ thống quạt, vị trí quạt và mật độ tảo.

### Nhiệt độ thay đổi đột ngột
Tôm ăn tốt trong khoảng nhiệt độ ưa thích, thường khoảng 28–32 °C. Nắng nóng gắt hoặc mưa lạnh đột ngột làm tôm ăn kém đi. Xem [nuôi tôm mùa nắng nóng giảm nhiệt giữ oxy](/vi/blog/nuoi-tom-mua-nang-nong-giam-nhiet-giu-oxy).

### Tôm lột xác và vỏ mềm
Trước và trong lúc lột xác, tôm thường giảm ăn rồi ăn lại mạnh sau khi vỏ cứng. Nếu tôm lột không đồng loạt hoặc hay mềm vỏ, cần xem lại khoáng và độ kiềm. Xem thêm [tôm mềm vỏ, chậm lột xác](/vi/blog/tom-mem-vo-cham-lot-xac-nguyen-nhan-cach-xu-ly).

### Stress do thời tiết, thay nước, đổi độ mặn
Mưa lớn, thay nước nhiều, tạt hóa chất liều cao đều có thể làm tôm stress vài ngày. Tôm ăn lại khi môi trường ổn định.

### Thức ăn kém chất lượng hoặc bảo quản sai
Thức ăn ẩm mốc, có mùi lạ, để lâu trong kho nóng ẩm khiến tôm chê. Bà con kiểm tra hạn dùng, bao bì và cách để thức ăn. Nếu nghi ngờ, đổi sang lô khác và so sánh phản ứng của tôm.

### Bệnh đường ruột, gan tụy
Khi tôm ăn giảm kèm phân trắng, phân đứt khúc, ruột lỏng hoặc gan nhạt, cần nghĩ đến vấn đề tiêu hóa và gan. Đọc thêm [tôm bị đường ruột, ruột lỏng đứt khúc](/vi/blog/tom-bi-duong-ruot-ruot-long-dut-khuc-nguyen-nhan-cach-phong) và [bệnh gan tụy trên tôm thẻ](/vi/blog/benh-gan-tuy-tren-tom-the-dau-hieu-nguyen-nhan-phong-ngua). Các dấu hiệu trên chỉ mang tính gợi ý, **không thể khẳng định bệnh bằng mắt**. Muốn biết chắc cần xét nghiệm (PCR hoặc soi mẫu tại phòng xét nghiệm) và trao đổi với kỹ thuật viên hoặc bác sĩ thú y thủy sản.

## Hỗ trợ khi tôm giảm ăn do đường ruột và gan
Khi xác định vấn đề nằm ở tiêu hóa, bà con có thể cân nhắc bổ sung sản phẩm hỗ trợ trộn thức ăn. Theo thông tin trên nhãn, **US LACTO** là lợi khuẩn trộn thức ăn, giúp hỗ trợ tiêu hóa, cải thiện hiện tượng phân lỏng, phân trắng, phân đứt khúc. Liều trong hướng dẫn: 5 g/kg thức ăn hằng ngày; khi có dấu hiệu phân lỏng, phân trắng, phân đứt khúc dùng 10–15 g/kg thức ăn, cho ăn 2–3 lần/ngày; hòa nước sạch trộn đều, để yên 15 phút rồi cho ăn.

Với gan, **HEPALIVER-FS** theo nhãn hỗ trợ bồi bổ gan, tiêu hóa tốt, hấp thụ thức ăn nhanh. Liều hướng dẫn trộn thức ăn: 5 ml/kg thức ăn, cho ăn 2 lần/ngày; khi hỗ trợ lúc có vấn đề là 10 ml/kg, 3–4 lần/ngày, liên tục 5 ngày. Cách trộn chi tiết xem [cách trộn thuốc chế phẩm vào thức ăn cho tôm](/vi/blog/cach-tron-thuoc-che-pham-vao-thuc-an-cho-tom).

Đây là các sản phẩm hỗ trợ, không thay thế việc tìm đúng nguyên nhân. Bà con không nên tự ý dùng kháng sinh khi chưa có chỉ định của kỹ thuật viên hoặc bác sĩ thú y, và cần tuân thủ quy định về thuốc cấm.

## Làm gì để hạn chế tôm bỏ ăn trong cả vụ?
- Cho ăn theo nhá, giảm lượng khi trời mưa, nước xấu hoặc tôm lột.
- Xi phông, quản lý đáy đều đặn (xem [quản lý đáy ao bạt: xi phông, quạt nước](/vi/blog/quan-ly-day-ao-bat-nuoi-tom-the-xi-phong-quat-nuoc)).
- Giữ oxy ổn định, nhất là gần sáng.
- Dùng men tiêu hóa, lợi khuẩn trộn ăn định kỳ, xem [men tiêu hóa lợi khuẩn trộn thức ăn](/vi/blog/men-tieu-hoa-loi-khuan-tron-thuc-an-cho-tom).
- Bảo quản thức ăn nơi khô ráo, dùng theo thứ tự nhập trước dùng trước.
- Tăng sức đề kháng trước các giai đoạn giao mùa, xem [tăng sức đề kháng cho tôm thời điểm giao mùa](/vi/blog/tang-suc-de-khang-cho-tom-thoi-diem-giao-mua).

Cần tư vấn cho ao của mình? Gọi hotline 1900 252 667 để kỹ thuật viên Thủy Sản Tím tư vấn miễn phí.

## Câu hỏi thường gặp

### Tôm bỏ ăn một ngày có nguy hiểm không?
Không nhất thiết. Tôm có thể giảm ăn do lột xác hoặc thời tiết. Điều đáng lo là tôm bỏ ăn kéo dài, kèm nổi đầu, phân trắng, gan nhạt hay tôm chết rải rác. Hãy đo nước và quan sát tôm ngay trong ngày.

### Tôm bỏ ăn có nên tăng thêm thức ăn hoặc chất dẫn dụ không?
Không nên cho ăn bù. Thức ăn dư làm bẩn đáy, tăng khí độc, khiến tình trạng nặng hơn. Hãy tìm nguyên nhân trước, giảm lượng ăn và chỉ tăng lại khi tôm ăn bình thường.

### Làm sao biết tôm bỏ ăn do nước hay do bệnh?
Đo nước trước. Nếu chỉ tiêu lệch rõ (NH3, NO2, pH, nhiệt độ, oxy) thì nhiều khả năng do môi trường. Nếu nước ổn mà tôm có phân trắng, gan nhạt, ruột rỗng, hãy nghĩ tới bệnh và nhờ kỹ thuật viên hoặc xét nghiệm xác nhận.

### Có thể dùng kháng sinh khi tôm bỏ ăn không?
Không nên tự ý dùng kháng sinh. Nhiều nguyên nhân bỏ ăn không liên quan vi khuẩn, và dùng sai gây hại cho tôm, môi trường, đầu ra sản phẩm. Hãy trao đổi với kỹ thuật viên hoặc bác sĩ thú y thủy sản trước khi quyết định.

### Sau khi xử lý bao lâu tôm ăn lại?
Tùy nguyên nhân. Tôm lột xác thường ăn lại sau một thời gian ngắn, còn do nước xấu hoặc bệnh thì cần thời gian phục hồi lâu hơn. Theo dõi sàng ăn từng cữ, nếu không cải thiện sau khi đã xử lý nguyên nhân thì cần xét nghiệm.
`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'tom-den-mang-vang-mang-nguyen-nhan', topic: 'disease', daysAgo: 0.55,
    title: L('Tôm đen mang, vàng mang: nguyên nhân và cách xử lý'),
    excerpt: L('Tôm đen mang, vàng mang là dấu hiệu mang bị bẩn hoặc tổn thương. Cách kiểm tra mang, các nguyên nhân thường gặp, hướng xử lý và phòng ngừa cho ao tôm thẻ.'),
    body: L(
`Tôm đen mang, vàng mang là tình trạng mang đổi từ màu trắng ngà sang vàng, nâu hoặc đen. Đây là dấu hiệu chứ không phải một bệnh riêng: nguyên nhân thường gặp là đáy ao bẩn, khí độc, nước nhiều chất hữu cơ, mang bị bám bẩn hoặc nhiễm nấm, ký sinh, vi khuẩn. Muốn xử lý đúng, bà con cần kiểm tra nước và đáy, soi mang và xác nhận bằng xét nghiệm khi cần. Các mô tả dưới đây chỉ mang tính gợi ý.

Mang là cơ quan thở, lọc và điều hòa muối của tôm. Mang bẩn hoặc tổn thương thì tôm thở yếu, ăn kém, chậm lớn, dễ chết khi thiếu oxy. Vì vậy bà con thấy mang đổi màu là nên kiểm tra sớm, không để kéo dài.

## Mang tôm khỏe trông như thế nào?
Mang khỏe thường có màu trắng ngà đến hơi hồng nhạt, các lá mang gọn, sạch, không bám bùn, không có chấm hay vệt lạ. Khi kiểm tra, bà con dùng tay vớt vài con ở các vị trí khác nhau, lật mang ra quan sát dưới ánh sáng. Nếu có điều kiện, nên soi bằng kính hiển vi để thấy rõ rong, ký sinh hay sợi nấm (có thể nhờ kỹ thuật viên).

## Phân biệt đen mang và vàng mang
| Dấu hiệu | Vàng mang | Đen mang |
|---|---|---|
| Màu mang | Vàng nhạt đến vàng nâu | Nâu sẫm đến đen, có thể từng mảng |
| Mức độ | Thường là giai đoạn đầu | Thường nặng hơn hoặc kéo dài hơn |
| Có thể gặp kèm | Nước nhiều hữu cơ, kim loại, phù sa | Đáy bẩn, khí độc, mang tổn thương, bám bẩn |
| Tôm | Ăn giảm, bơi chậm | Thở yếu, tấp mé, ăn kém, có thể chết rải rác |

Hai tình trạng có thể chuyển từ vàng sang đen nếu môi trường không được cải thiện. Phân biệt chỉ để bà con ước lượng mức độ, còn nguyên nhân chính xác cần kiểm tra thêm.

## Nguyên nhân thường gặp khiến tôm đen mang, vàng mang
### Đáy ao bẩn, bùn hữu cơ tích tụ
Đây là nhóm nguyên nhân gặp nhiều. Thức ăn thừa, phân tôm, xác tảo tàn lắng xuống đáy, phân hủy thiếu oxy sinh ra khí độc và vật chất lơ lửng bám lên mang. Tôm thường xuyên bơi sát đáy nên mang tiếp xúc trực tiếp với môi trường này. Đọc thêm [quản lý đáy ao bạt nuôi tôm thẻ](/vi/blog/quan-ly-day-ao-bat-nuoi-tom-the-xi-phong-quat-nuoc).

### Khí độc: NH3, NO2, H2S
Nồng độ khí độc cao làm mang tổn thương, tôm thở khó. Bà con nên đo chỉ tiêu nước (xem [cách đo chỉ tiêu nước bằng test kit](/vi/blog/cach-do-chi-tieu-nuoc-ao-tom-bang-test-kit)) và kiểm tra mùi đáy theo bài [khí độc H2S](/vi/blog/khi-doc-h2s-day-ao-nuoi-tom-nhan-biet-xu-ly).

### Nước nhiều chất hữu cơ, nhớt, tảo tàn
Nhớt bạt, nước nhớt, tảo tàn làm các mảnh vụn bám vào mang. Xem [xử lý nhớt bạt, nhớt nước ao tôm](/vi/blog/xu-ly-nhot-bat-nhot-nuoc-ao-nuoi-tom) và [xử lý tảo lam, tảo đáy](/vi/blog/xu-ly-tao-lam-tao-day-ao-nuoi-tom).

### Bám bẩn, đóng rong, ký sinh
Rong, tảo bám, nguyên sinh động vật ký sinh bám trên mang và vỏ làm mang đổi màu và cản trở hô hấp. Dấu hiệu thường kèm theo vỏ bẩn, nhớt, tôm ngứa, cọ vào nhau.

### Nấm và vi khuẩn
Một số trường hợp mang đổi màu liên quan đến nấm hoặc vi khuẩn bám, phát triển khi nước bẩn, tôm yếu. Muốn biết chính xác tác nhân, cần soi mẫu hoặc xét nghiệm. Không nên đoán rồi dùng thuốc.

### Kim loại, phèn hoặc nguồn nước
Nước ao nhiễm sắt hay phèn, hoặc nguồn nước đục có nhiều phù sa, cũng có thể làm mang đổi màu vàng nâu. Kiểm tra nguồn nước cấp và nước sau khi xử lý để loại trừ nguyên nhân này.

## Các bước kiểm tra khi thấy mang đổi màu
1. **Vớt nhiều con, nhiều điểm:** để biết tình trạng lan rộng hay cục bộ.
2. **Quan sát mang:** màu, độ bám bẩn, có chấm, có tơ nấm không.
3. **Đo nước:** pH, kiềm, NH3 hoặc TAN, NO2, độ mặn, nhiệt độ; kiểm tra oxy gần sáng.
4. **Kiểm tra đáy:** mùi, màu bùn, vị trí tích tụ chất thải.
5. **Xem lại nhá và lượng ăn:** thức ăn thừa nhiều là dấu hiệu nên giảm.
6. **Lấy mẫu gửi xét nghiệm:** khi tôm chết nhiều hoặc không rõ nguyên nhân.
7. **Phân biệt với bệnh gan tụy:** tôm gan tụy thường có gan, ruột bất thường rõ hơn; xem [bệnh gan tụy trên tôm thẻ](/vi/blog/benh-gan-tuy-tren-tom-the-dau-hieu-nguyen-nhan-phong-ngua) và [6 bệnh thường gặp trên tôm thẻ](/vi/blog/6-benh-thuong-gap-tren-tom-the-va-cach-phong).

Các dấu hiệu ngoài ao chỉ giúp khoanh vùng. Để xác nhận tác nhân, bà con nên làm PCR hoặc soi mẫu tại phòng xét nghiệm và trao đổi với kỹ thuật viên hoặc bác sĩ thú y thủy sản.

## Cách xử lý tôm đen mang, vàng mang
### Cải thiện môi trường trước tiên
- **Giảm cho ăn** trong những ngày xử lý, tránh thức ăn thừa.
- **Xi phông, gom chất thải** về rốn ao; kiểm tra lại hướng quạt để dòng chảy gom bùn tốt.
- **Tăng oxy**, nhất là gần sáng.
- **Giữ ổn định pH và kiềm**, tránh tạt nhiều thứ cùng lúc.
- **Thay nước một phần** khi nguồn nước đã xử lý sạch và chỉ tiêu phù hợp, theo tư vấn kỹ thuật.

### Hỗ trợ xử lý đáy và nước
Theo nhãn, **CLEAR 12H** là vi sinh giúp phân hủy mùn bã hữu cơ, thức ăn thừa, xác tảo, phân tôm ở đáy ao, giảm khí độc NH3, H2S và hỗ trợ làm sạch nhớt bạt, nhớt nước. Cách dùng theo hướng dẫn: 1 gói trộn 3 kg đường cát và 50 lít nước, sục khí 12–24 giờ rồi dùng; ao bạt dùng 15–20 lít/1.000 m³ nước, định kỳ 3 ngày một lần; ao đất 10–15 lít/1.000 m³, định kỳ 5 ngày một lần; dùng khi có nắng, không dùng khi trời mưa, chạy quạt liên tục. Xem thêm [cách ủ vi sinh với đường mật rỉ](/vi/blog/cach-u-vi-sinh-voi-duong-mat-ri-truoc-khi-tat-ao).

### Sát trùng nguồn nước khi cần
Có thể cân nhắc sản phẩm sát trùng nước khi môi trường có nhiều vi khuẩn, nấm, nguyên sinh động vật gây hại. **VH-GLUBENCO PRO** theo nhãn dùng sát trùng nguồn nước, hỗ trợ sát khuẩn gây phát sáng, đen mang, vàng mang, cụt râu. Liều trong quá trình nuôi theo hướng dẫn là 1 lít/1.000 m³ nước, hòa nước gấp 100 lần rồi phun hoặc tạt đều khắp ao, lắc đều trước khi dùng, ngưng dùng trước thu hoạch 15 ngày. **BEN BKC** cũng có công dụng sát trùng nguồn nước và hỗ trợ sát khuẩn gây đen mang, vàng mang; bà con dùng theo hướng dẫn trên nhãn. Tìm hiểu thêm [sát trùng nước ao nuôi bằng BKC, iodine, glutaraldehyde](/vi/blog/sat-trung-nuoc-ao-nuoi-bkc-iodine-glutaraldehyde).

Lưu ý: các sản phẩm sát trùng chỉ hỗ trợ, không thể thay thế việc dọn đáy và giảm hữu cơ. Dùng sát trùng khi môi trường còn bẩn thường chỉ giảm tạm thời.

## Phòng ngừa đen mang, vàng mang
- Xử lý ao kỹ trước vụ theo [quy trình chuẩn bị ao nuôi tôm thẻ 7 bước](/vi/blog/quy-trinh-chuan-bi-ao-nuoi-tom-the-7-buoc).
- Xử lý nước trước khi thả, xem [xử lý nước trước khi thả giống](/vi/blog/xu-ly-nuoc-truoc-khi-tha-giong-tom).
- Chọn giống sạch, kiểm tra PCR, xem [cách chọn tôm giống thẻ chân trắng chất lượng](/vi/blog/cach-chon-tom-giong-the-chan-trang-chat-luong).
- Dùng vi sinh đều đặn để giữ đáy sạch, xem [dùng men vi sinh đúng cách](/vi/blog/dung-men-vi-sinh-dung-cach).
- Cho ăn theo nhá, không để dư thức ăn.
- Kiểm tra mang tôm mỗi tuần, nhất là khi trời mưa hoặc giao mùa.

Cần tư vấn cho ao của mình? Gọi hotline 1900 252 667 để kỹ thuật viên Thủy Sản Tím tư vấn miễn phí.

## Câu hỏi thường gặp

### Tôm đen mang có phải bị bệnh không?
Đen mang là dấu hiệu, không phải một tên bệnh duy nhất. Nó có thể do môi trường bẩn, khí độc, bám bẩn hoặc do tác nhân gây bệnh. Cần kiểm tra ao, soi mang và xét nghiệm khi cần để biết nguyên nhân.

### Vàng mang khác đen mang như thế nào?
Vàng mang là mang chuyển vàng nhạt hoặc vàng nâu, thường ở giai đoạn đầu; đen mang là mang sẫm hoặc đen, thường nặng hơn. Hai tình trạng có thể liên quan cùng một nguyên nhân môi trường nếu không được cải thiện.

### Tôm đen mang còn ăn thì có cần xử lý không?
Có. Dù tôm còn ăn, mang bẩn vẫn làm tôm thở yếu và dễ nguy hiểm khi thiếu oxy. Hãy kiểm tra đáy, nước và giảm nguyên nhân gây bẩn trước khi tình trạng nặng thêm.

### Có thể tự nhận biết nguyên nhân bằng mắt thường không?
Chỉ khoanh vùng được. Muốn biết tác nhân (nấm, ký sinh, vi khuẩn) cần soi kính hoặc xét nghiệm. Bà con nên nhờ kỹ thuật viên hoặc bác sĩ thú y thủy sản xác nhận trước khi dùng thuốc.

### Thay nước có giúp tôm hết đen mang không?
Có thể giúp khi nguyên nhân là nước nhiều hữu cơ và khí độc, nhưng chỉ nên thay khi nguồn nước đã xử lý và các chỉ tiêu phù hợp. Thay nước mà không dọn đáy thì tình trạng dễ quay lại.
`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'bao-quan-thuoc-men-vi-sinh-thuy-san', topic: 'technique', daysAgo: 0.75,
    title: L('Cách bảo quản thuốc, men vi sinh thủy sản đúng cách'),
    excerpt: L('Cách bảo quản thuốc, men vi sinh thủy sản đúng cách: nơi khô ráo, thoáng mát, tránh nắng, xa trẻ em; xử lý sau khi mở bao, dịch ủ, thuốc nước và dạng bột.'),
    body: L(
`Cách bảo quản thuốc, men vi sinh thủy sản đúng là để nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp, xa tầm tay trẻ em, đậy kín sau khi mở và dùng theo hạn sử dụng trên nhãn. Đây cũng là nội dung ghi trên nhãn các sản phẩm của Thủy Sản Tím. Bảo quản sai làm sản phẩm giảm chất lượng, dùng vào ao không đạt kỳ vọng, nên bà con cần làm đúng từ lúc nhận hàng đến lúc dùng hết.

Nhiều bà con mua sản phẩm tốt nhưng để trong lều bạt nắng nóng, hoặc mở bao rồi để hở cả tháng, đến khi dùng thì kết quả không như ý và đổ lỗi cho sản phẩm. Thực ra phần lớn do bảo quản. Bài này giải thích từng điểm cần chú ý.

## Nhãn sản phẩm hướng dẫn bảo quản như thế nào?
Các sản phẩm trong danh mục của Thủy Sản Tím đều ghi hướng dẫn bảo quản giống nhau: **nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp, để xa tầm tay trẻ em.** Bà con có thể xem từng sản phẩm tại [trang sản phẩm](/vi/products). Dưới đây là cách hiểu và áp dụng từng ý:

| Ý trong nhãn | Nghĩa là gì | Làm thế nào |
|---|---|---|
| Nơi khô ráo | Tránh ẩm, tránh nước bắn | Kê cao, cách nền, cách tường ẩm, xa chỗ mưa hắt |
| Thoáng mát | Không bí, không nóng | Nơi có gió lưu thông, không sát mái tôn, không gần máy phát |
| Tránh ánh nắng trực tiếp | Không để dưới nắng | Che chắn, không phơi trên bờ ao, không để trên xe dưới nắng lâu |
| Xa tầm tay trẻ em | An toàn | Để cao, có khóa hoặc tủ riêng, không để lẫn đồ ăn uống |

## Vì sao bảo quản quan trọng, nhất là với men vi sinh?
Men vi sinh chứa các vi sinh vật sống hoặc bào tử. Nhiệt độ cao, ẩm và ánh nắng kéo dài làm giảm khả năng hoạt động của chúng. Với chế phẩm enzyme, khoáng hay dạng bột, hơi ẩm làm vón cục, đóng tảng, khó hòa tan và khó trộn đều.

Bà con không cần biết con số cụ thể. Chỉ cần nhớ: càng giữ mát, khô và kín thì sản phẩm càng giữ được chất lượng đến hạn dùng ghi trên bao bì.

## Bảo quản trước khi mở bao
- **Giữ nguyên bao bì gốc,** còn nguyên nhãn, hạn dùng, số lô để tra cứu khi cần.
- **Kê trên pallet hoặc kệ,** không đặt thẳng xuống nền ẩm.
- **Tránh chồng quá cao** làm bao dưới bị ép, rách hoặc vón.
- **Không để gần hóa chất mạnh,** xăng dầu, phân bón, thuốc diệt côn trùng hay vật có mùi nồng.
- **Kiểm tra bao bì khi nhận hàng:** bao rách, ướt, chai rò rỉ, nắp lỏng thì ghi nhận và báo ngay với nơi bán.

## Bảo quản sau khi đã mở bao
Đây là lúc dễ sai nhất.

1. **Đậy kín ngay:** gói bột nên gập, kẹp hoặc cho vào túi kín, thùng nhựa có nắp. Chai nước vặn chặt nắp.
2. **Ghi ngày mở** lên bao bằng bút lông.
3. **Để chỗ khô mát,** không để trong lều bạt sát mặt nước ao, nơi hơi nước và nhiệt cao.
4. **Dùng dụng cụ khô, sạch** khi lấy, không đưa tay ướt hoặc muỗng ướt vào bao bột.
5. **Không đổ sang chai nước uống, bình thực phẩm** vì dễ nhầm lẫn, nguy hiểm cho người.
6. **Ưu tiên dùng hết bao đã mở** trước khi mở bao mới.

Về thời gian dùng hết sau khi mở, mỗi sản phẩm có thể có khuyến cáo riêng. Bà con làm theo hướng dẫn trên nhãn và hạn sử dụng ghi trên bao bì, không tự suy ra con số.

## Thuốc nước và sản phẩm dạng bột: khác nhau chỗ nào?
| Tiêu chí | Dạng nước (chai, can) | Dạng bột, gói |
|---|---|---|
| Sợ nhất | Nhiệt cao, rò rỉ, nắp lỏng | Ẩm, vón cục |
| Cách đặt | Đứng thẳng, vặn chặt nắp | Gói kín, đặt chỗ khô |
| Trước khi dùng | Lắc đều nếu nhãn yêu cầu (ví dụ **VH-GLUBENCO PRO** ghi lắc đều trước khi dùng) | Kiểm tra có vón cục, ẩm mốc không |
| Dụng cụ lấy | Ly đong sạch, riêng từng loại | Muỗng, cân khô sạch |

Với sản phẩm trộn thức ăn như **BIOTIC 99**, nhãn còn ghi lưu ý không dùng chung với acid hữu cơ và kháng sinh. Đây là lưu ý về sử dụng nhưng cũng là lý do bà con không nên để lẫn các loại trong cùng một chỗ và cùng một dụng cụ để tránh nhầm.

## Dịch ủ vi sinh: dùng hết trong thời gian nào?
Một số vi sinh cần ủ với đường trước khi tạt, ví dụ **CLEAR 12H** có hướng dẫn trộn 1 gói với 3 kg đường cát và 50 lít nước, sục khí 12–24 giờ rồi sử dụng. Với dịch ủ:

- **Ủ đúng thời gian ghi trên nhãn,** không ủ quá lâu cũng không dùng non.
- **Ủ trong thùng sạch,** có sục khí, đặt nơi râm mát, tránh nắng.
- **Dùng sau khi ủ xong,** không để dịch ủ nhiều ngày rồi mới dùng, vì chất lượng khó kiểm soát; nếu thấy mùi hôi lạ, váng hoặc đổi màu bất thường thì bỏ.
- **Chia lượng ủ vừa đủ cho từng lần dùng** để tránh dư.

Xem thêm [cách ủ vi sinh với đường mật rỉ trước khi tạt ao](/vi/blog/cach-u-vi-sinh-voi-duong-mat-ri-truoc-khi-tat-ao) và [dùng men vi sinh đúng cách](/vi/blog/dung-men-vi-sinh-dung-cach).

## Nên cất chung hay tách riêng các loại?
Nguyên tắc: **tách riêng theo nhóm**.

- Tách **hóa chất sát trùng, diệt tảo** (ví dụ dòng sát trùng nước, đồng sunfat) khỏi **men vi sinh và sản phẩm trộn thức ăn**. Hóa chất bay hơi hoặc rò rỉ có thể làm hỏng và nhiễm chéo.
- Tách **thức ăn** khỏi mọi loại thuốc, hóa chất.
- Mỗi loại **một dụng cụ đong riêng** hoặc rửa sạch, phơi khô sau mỗi lần dùng.
- **Không để chung với thực phẩm,** đồ uống của gia đình.

Chi tiết về diệt tảo an toàn xem [diệt tảo bằng đồng CuSO4](/vi/blog/diet-tao-bang-dong-cuso4-ao-nuoi-tom-an-toan).

## Quản lý kho theo nguyên tắc nhập trước, dùng trước
Nguyên tắc FIFO (nhập trước, dùng trước) giúp không để hàng quá hạn:

1. Mỗi khi nhập hàng, ghi ngày nhập và hạn dùng lên bao.
2. Xếp hàng mới phía sau, hàng cũ phía trước.
3. Cuối mỗi tháng rà soát hạn dùng, ưu tiên dùng loại gần hết hạn.
4. Không mua quá nhiều so với nhu cầu của vụ nuôi.
5. Hàng quá hạn không dùng; xử lý theo hướng dẫn an toàn, không đổ thẳng xuống ao.

## Dấu hiệu sản phẩm đã hỏng hoặc không nên dùng
- Bao bì rách, phồng, ướt, chai rò rỉ.
- Bột vón cục cứng, ẩm mốc, đổi màu.
- Dung dịch đổi màu bất thường, đục lạ, có cặn hoặc váng, mùi lạ.
- Quá hạn sử dụng ghi trên nhãn.
- Mất nhãn, không rõ sản phẩm gì, không biết ngày sản xuất.

Gặp các dấu hiệu này, bà con không nên dùng. Nếu sản phẩm mới mua đã có vấn đề, hãy chụp ảnh nhãn và tình trạng rồi liên hệ nơi bán.

## Những lỗi bảo quản bà con hay gặp
- Để thuốc, men trong lều bạt giữa trưa nắng, mái tôn nóng hầm hập.
- Để trên bờ ao, hơi nước và mưa bắn vào.
- Mở bao rồi gập tạm, không buộc kín.
- Dùng muỗng ướt xúc bột.
- Để chung hóa chất, thức ăn, xăng dầu trong một kho nhỏ.
- Chuyển sang chai nước ngọt không ghi nhãn.
- Không ghi ngày mở bao, không nhớ lần dùng.

Cần tư vấn cho ao của mình? Gọi hotline 1900 252 667 để kỹ thuật viên Thủy Sản Tím tư vấn miễn phí.

## Câu hỏi thường gặp

### Men vi sinh có cần để tủ lạnh không?
Hãy làm theo hướng dẫn bảo quản trên nhãn từng sản phẩm. Các sản phẩm của Thủy Sản Tím ghi bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp, không yêu cầu cách bảo quản đặc biệt khác trong thông tin nhãn. Không để chung với thực phẩm.

### Mở bao men vi sinh rồi dùng được bao lâu?
Không có con số chung cho mọi sản phẩm. Hãy theo hạn sử dụng và hướng dẫn trên nhãn, đậy kín sau khi mở, ghi ngày mở và dùng hết bao đã mở trước. Nếu thấy vón cục, ẩm mốc hoặc mùi lạ thì không dùng.

### Dịch ủ vi sinh dư có giữ lại dùng hôm sau được không?
Nên ủ vừa đủ cho từng lần dùng và dùng sau khi ủ xong. Nếu dịch để lâu có mùi hôi lạ, váng hoặc đổi màu thì bỏ. Nếu nhãn có hướng dẫn riêng về thời gian giữ dịch ủ, hãy làm theo nhãn.

### Có thể để thuốc nước và men vi sinh chung một chỗ không?
Không nên. Hãy tách hóa chất sát trùng, diệt tảo khỏi men vi sinh và sản phẩm trộn thức ăn, dùng dụng cụ đong riêng để tránh nhiễm chéo và nhầm lẫn.

### Sản phẩm bị ướt bao bì nhưng chưa mở thì dùng được không?
Nếu bao chỉ ướt bên ngoài và sản phẩm bên trong khô, không đổi màu, không mùi lạ, bà con có thể cân nhắc, nhưng nếu bao đã thấm ướt vào trong, vón cục hoặc mốc thì không dùng. Khi nghi ngờ, hãy hỏi nơi bán hoặc kỹ thuật viên.
`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'tom-30-ngay-dau-can-lam-gi', topic: 'technique', daysAgo: 0.95,
    title: L('Tôm 30 ngày đầu cần làm gì? Chăm sóc giai đoạn tôm nhỏ'),
    excerpt: L('Tôm 30 ngày đầu cần làm gì: thả giống, thuần nước, cho ăn nhá, giữ màu nước, tránh sốc môi trường, kiểm tra gan ruột. Có bảng việc cần làm theo từng tuần.'),
    body: L(
`Tôm 30 ngày đầu cần làm những việc chính sau: thả giống đúng cách sau khi thuần nhiệt độ, độ mặn và pH, giữ màu nước và môi trường ổn định, cho ăn ít và nhiều cữ, kiểm tra tôm bằng sàng ăn, theo dõi gan và ruột mỗi ngày. Tránh mọi thay đổi đột ngột. Giai đoạn này nền móng của cả vụ nuôi, tôm nhỏ yếu hơn tôm lớn, một lỗi nhỏ cũng có thể để lại hậu quả lâu dài.

Nhiều bà con nói "một tháng đầu là một nửa thành công". Điều đó phản ánh đúng: tôm khỏe, đồng đều ở giai đoạn này thì các giai đoạn sau dễ nuôi hơn. Bài này tóm tắt các việc cần làm theo thứ tự.

## Vì sao 30 ngày đầu quan trọng?
Tôm giống mới thả còn nhỏ, sức đề kháng và khả năng chịu sốc kém hơn tôm lớn. Môi trường ao lúc này còn "non": hệ vi sinh, tảo và màu nước chưa ổn định. Vì vậy:

- Tôm dễ stress khi nhiệt độ, độ mặn, pH thay đổi.
- Mỗi thay đổi nhỏ trong ao ảnh hưởng nhiều hơn so với ao đã ổn định.
- Thói quen cho ăn, theo dõi nhá và ghi chép được hình thành ngay từ đầu.
- Phát hiện sớm dấu hiệu bất thường giúp xử lý khi tình hình còn nhẹ.

## Chuẩn bị trước khi thả
Ao chuẩn bị tốt là nền tảng cho 30 ngày đầu. Bà con xem lại [quy trình chuẩn bị ao nuôi tôm thẻ 7 bước](/vi/blog/quy-trinh-chuan-bi-ao-nuoi-tom-the-7-buoc), [xử lý nước trước khi thả giống](/vi/blog/xu-ly-nuoc-truoc-khi-tha-giong-tom) và [cách gây màu nước](/vi/blog/cach-gay-mau-nuoc-ao-nuoi-tom). Trước ngày thả, nên đo nước để chắc chắn chỉ tiêu ổn định, xem [cách đo chỉ tiêu nước ao bằng test kit](/vi/blog/cach-do-chi-tieu-nuoc-ao-tom-bang-test-kit).

Giống cũng quyết định nhiều, xem [cách chọn tôm giống thẻ chân trắng chất lượng](/vi/blog/cach-chon-tom-giong-the-chan-trang-chat-luong).

## Thả giống: thuần nước đúng cách
Đây là bước dễ gây sốc nhất.

1. **Thả vào lúc mát,** thường sáng sớm hoặc chiều mát, tránh nắng gắt.
2. **Thuần nhiệt độ:** đặt túi giống nổi trên mặt ao một thời gian cho nhiệt độ trong túi và ngoài ao cân bằng.
3. **Thuần độ mặn và pH:** nhận thông tin độ mặn nơi giống xuất xứ, so với ao; chênh lệch càng ít càng tốt, thường chênh lệch lớn thì cần thuần dần. Cho nước ao vào túi hoặc thùng từ từ thay vì đổ thẳng.
4. **Thả nhẹ nhàng,** để tôm tự bơi ra, không đổ mạnh.
5. **Chạy quạt vừa phải,** đủ oxy nhưng không tạo dòng chảy quá mạnh.
6. **Không cho ăn ngay trong giờ đầu;** theo dõi tôm bơi, bám đáy bình thường.

Nếu chênh lệch thông số lớn hoặc tôm giống có dấu hiệu yếu, hãy hỏi lại nơi cung cấp giống trước khi thả.

## Cho ăn trong 30 ngày đầu
Tôm nhỏ có dạ dày bé, ăn ít nhưng cần ăn đều. Một số nguyên tắc chung:

- **Chia nhiều cữ nhỏ** trong ngày, tránh dồn một lượng lớn.
- **Dùng thức ăn đúng cỡ** theo giai đoạn, đúng khuyến cáo hãng thức ăn.
- **Bắt đầu cho ăn theo bảng của hãng,** rồi điều chỉnh theo nhá.
- **Giảm lượng khi trời mưa, nước xấu, tôm lột** và tăng lại khi tôm ăn tốt.
- **Quan sát phân tôm và ruột** để biết tôm tiêu hóa tốt hay không.

Cách tính lượng ăn và đọc sàng xem [cách tính lượng thức ăn cho tôm thẻ](/vi/blog/cach-tinh-luong-thuc-an-cho-tom-the) và [cách đọc nhá sàng ăn](/vi/blog/cach-doc-nha-sang-an-dieu-chinh-luong-an-tom-the).

Dư thức ăn trong giai đoạn đầu rất tai hại vì tôm nhỏ chưa ăn hết, đáy bẩn nhanh, khí độc tăng khi hệ vi sinh còn yếu.

## Giữ màu nước và môi trường ổn định
Tôm nhỏ thích nước có màu tảo ổn định, độ trong vừa phải. Màu nước tốt có nhiều lợi: che bớt ánh nắng, giữ nhiệt độ ổn định, tạo nguồn thức ăn tự nhiên và hạn chế rong đáy. Nếu màu nước nhạt hay quá đậm, bà con xem lại [cách gây màu nước](/vi/blog/cach-gay-mau-nuoc-ao-nuoi-tom), [cách tăng kiềm ổn định pH](/vi/blog/cach-tang-kiem-on-dinh-ph-ao-nuoi-tom) và [dùng men vi sinh đúng cách](/vi/blog/dung-men-vi-sinh-dung-cach).

Một số nguyên tắc:

- Hạn chế thay đổi đột ngột: không tạt nhiều loại thuốc, hóa chất cùng lúc.
- Theo dõi pH sáng – chiều, kiềm, NH3, NO2 theo lịch.
- Duy trì oxy ổn định; quạt chạy đều, nhất là gần sáng.
- Trời mưa hoặc thay đổi thời tiết, tăng cường theo dõi.

## Kiểm tra gan và ruột sớm
Từ những tuần đầu, bà con nên tập thói quen quan sát gan tụy và ruột. Tôm khỏe thường có ruột đầy thức ăn liền mạch, gan có màu đậm, không teo. Phân tôm trên sàng gọn, không đứt khúc hay trắng.

Có thể bổ sung chế phẩm hỗ trợ tiêu hóa, gan trong thức ăn. Theo nhãn, **US LACTO** là lợi khuẩn trộn thức ăn, hỗ trợ tiêu hóa; liều hằng ngày trong hướng dẫn là 5 g/kg thức ăn, cho ăn 2–3 lần/ngày, hòa nước sạch trộn đều, để yên 15 phút rồi cho ăn. **HEPALIVER-FS** theo nhãn hỗ trợ bồi bổ gan, liều hướng dẫn trộn thức ăn là 5 ml/kg thức ăn, cho ăn 2 lần/ngày. Cách trộn xem [cách trộn thuốc chế phẩm vào thức ăn](/vi/blog/cach-tron-thuoc-che-pham-vao-thuc-an-cho-tom) và [men tiêu hóa lợi khuẩn trộn thức ăn](/vi/blog/men-tieu-hoa-loi-khuan-tron-thuc-an-cho-tom). Đây là sản phẩm hỗ trợ, không thay thế quản lý ao tốt.

## Bảng việc cần làm theo từng tuần
| Giai đoạn | Việc chính | Cần theo dõi |
|---|---|---|
| Ngày thả | Thuần nhiệt độ, độ mặn, pH; thả lúc mát; chạy quạt vừa phải | Tôm bơi, bám đáy, tôm chết khi thả |
| Tuần 1 | Cho ăn ít, nhiều cữ; giữ màu nước; đo nước hằng ngày | Màu nước, pH sáng – chiều, tôm có tấp mé không |
| Tuần 2 | Điều chỉnh lượng ăn theo nhá; duy trì vi sinh, khoáng theo kế hoạch | Ruột, phân, tốc độ ăn |
| Tuần 3 | Kiểm tra gan, ruột, vỏ, râu; kiểm soát tảo; ghi sổ | Gan có đậm màu không, tảo có phát triển quá mức |
| Tuần 4 | Tăng dần lượng ăn nếu tôm ăn tốt; chuẩn bị chế độ quản lý đáy | Khí độc, độ trong, đáy có bắt đầu tích tụ chất thải |

Bảng chỉ là khung tham khảo. Bà con điều chỉnh theo thực tế ao và tư vấn kỹ thuật.

## Quản lý đáy: khi nào bắt đầu?
Trong 30 ngày đầu lượng thức ăn còn ít, lượng chất thải chưa nhiều nên chưa đến lúc xi phông nặng như giữa vụ. Tuy vậy bà con vẫn nên quan sát đáy, kiểm tra hướng quạt có gom chất thải về giữa ao không. Việc xi phông thường bắt đầu muộn hơn trong chu kỳ, khi lượng ăn và chất thải tăng; xem [quản lý đáy ao bạt: xi phông, quạt nước](/vi/blog/quan-ly-day-ao-bat-nuoi-tom-the-xi-phong-quat-nuoc). Bà con có thể xem thêm toàn bộ quy trình ở [quy trình nuôi tôm thẻ chân trắng từ A đến Z](/vi/blog/quy-trinh-nuoi-tom-the-chan-trang-tu-a-den-z).

## Dấu hiệu cần chú ý trong tháng đầu
- Tôm tấp mé, bơi lờ đờ, nổi đầu.
- Tôm chết rải rác nhiều ngày liên tục.
- Ruột đứt khúc, ruột rỗng, phân trắng.
- Gan nhạt màu hoặc teo nhỏ.
- Tôm ăn giảm đột ngột, nhá còn nhiều thức ăn.
- Màu nước đổi đột ngột, nhớt, bọt nhiều.
- Tôm không đồng đều, chậm lớn, xem [tôm chậm lớn, lớn không đều](/vi/blog/tom-cham-lon-lon-khong-deu-8-nguyen-nhan-cach-khac-phuc).

Các dấu hiệu này chỉ mang tính gợi ý. Khi nghi có bệnh, hãy lấy mẫu xét nghiệm (PCR) và trao đổi với kỹ thuật viên. Một số vấn đề thường gặp ở tôm nhỏ xem [6 bệnh thường gặp trên tôm thẻ và cách phòng](/vi/blog/6-benh-thuong-gap-tren-tom-the-va-cach-phong).

## Danh sách kiểm tra hằng ngày
1. Quan sát tôm sáng sớm: bơi, bám đáy, tấp mé.
2. Đo pH sáng, chiều; nhiệt độ.
3. Xem màu nước và độ trong.
4. Cho ăn theo cữ, kiểm tra nhá.
5. Kiểm tra quạt, oxy.
6. Ghi sổ lượng ăn, chỉ tiêu nước, việc đã làm.
7. Soi vài con xem gan, ruột.

Cần tư vấn cho ao của mình? Gọi hotline 1900 252 667 để kỹ thuật viên Thủy Sản Tím tư vấn miễn phí.

## Câu hỏi thường gặp

### Tôm mới thả có cần cho ăn ngay không?
Nên để tôm ổn định trước, quan sát tôm bơi, bám đáy bình thường rồi mới cho ăn ít. Cữ đầu nên nhẹ, tăng dần theo nhá và theo khuyến cáo hãng thức ăn.

### Khi nào bắt đầu dùng sàng ăn?
Có thể dùng sàng ăn từ sớm để theo dõi lượng thức ăn và tình trạng tôm. Thời điểm và cách đọc tùy theo quy trình của từng ao; bà con xem bài hướng dẫn đọc nhá hoặc hỏi kỹ thuật viên.

### Tôm 30 ngày đầu có cần xi phông không?
Giai đoạn này chất thải còn ít nên thường chưa cần xi phông nặng như giữa vụ. Dù vậy cần quan sát đáy, hướng quạt và bắt đầu xi phông khi chất thải tích tụ, thường ở giai đoạn sau.

### Tôm chết rải rác vài con mỗi ngày trong tuần đầu có sao không?
Có thể do sốc khi thả hoặc yếu từ giống, nhưng nếu kéo dài nhiều ngày cần kiểm tra nước, oxy và gan ruột. Khi nghi ngờ, nên gửi mẫu xét nghiệm và trao đổi với kỹ thuật viên.

### Có cần tạt nhiều thuốc, hóa chất trong tháng đầu không?
Không nên tạt nhiều loại cùng lúc. Tôm nhỏ nhạy với biến động môi trường, nên ưu tiên giữ nước ổn định, dùng sản phẩm theo kế hoạch và đúng hướng dẫn trên nhãn.
`),
  },
];
