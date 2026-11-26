'use strict';
/**
 * Batch G (26/11/2026): five Vietnamese guides on whiteleg shrimp (tôm thẻ chân trắng):
 * red body/tail, post-harvest pond renovation, cold-season culture, FCR, survival/yield estimation.
 * Same conventions as seed-posts-a..e.js (see src/services/article.js):
 *   ## headings -> table of contents, "## Câu hỏi thường gặp" -> FAQ + FAQPage schema,
 *   **PRODUCT NAME** (exact `ten` from nhan/san-pham.json) -> automatic product link.
 * Doses are quoted only from the label (nhan/san-pham.json); no dose is given where the label has none.
 * Vietnamese only: en/zh fall back to vi. `date` fixes the publication date (see seed.js).
 */
const L = (vi, en, zh) => ({ vi, en, zh });
const DAY = '2026-11-26T';

module.exports = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'tom-do-than-do-duoi-nguyen-nhan-cach-xu-ly', topic: 'disease', daysAgo: 0, date: `${DAY}09:00:00+07:00`,
    title: L('Tôm đỏ thân, đỏ đuôi: nguyên nhân và cách xử lý'),
    excerpt: L('Tôm đỏ thân, đỏ đuôi thường do stress, thiếu oxy, khí độc hoặc nghi nhiễm bệnh. Cách kiểm tra từng bước, xử lý ban đầu và khi nào cần xét nghiệm PCR.'),
    body: L(
`Tôm đỏ thân, đỏ đuôi là dấu hiệu cảnh báo chứ không phải tên một bệnh. Nguyên nhân thường gặp là tôm bị stress do thiếu oxy, khí độc (NH3, NO2), pH hoặc nhiệt độ biến động mạnh, nhưng cũng có thể là dấu hiệu sớm của bệnh do vi khuẩn hoặc virus. Việc cần làm ngay là đo nước, kiểm tra oxy, giảm cho ăn và quan sát thêm các dấu hiệu đi kèm; nếu tôm chết rải rác hoặc đỏ lan nhanh thì cần lấy mẫu xét nghiệm PCR.

Màu đỏ ở tôm thẻ chân trắng đến từ sắc tố carotenoid (trong đó có astaxanthin) nằm ở vỏ và lớp dưới vỏ. Khi tôm khỏe, màu thường trong, hơi xanh nâu hoặc xám nhạt. Khi bị kích thích mạnh hoặc tổn thương, màu có thể đậm lên, ngả hồng đến đỏ, rõ nhất ở thân, đuôi, chân bơi. Vì vậy bà con không nên kết luận "tôm bị bệnh X" chỉ dựa vào màu sắc.

## Tôm đỏ thân, đỏ đuôi nghĩa là gì?
Tôm đổi màu đỏ có thể thuộc một trong ba nhóm tình huống:

- **Stress môi trường:** thiếu oxy, khí độc, pH hoặc nhiệt độ thay đổi nhanh, độ mặn sốc. Tôm đỏ nhẹ, thường xuất hiện theo từng thời điểm trong ngày (sáng sớm, sau mưa lớn, sau khi thay nước).
- **Nhiễm khuẩn hoặc tổn thương:** đuôi, chân bơi đỏ, có thể kèm mòn đuôi, cụt râu, vỏ có vết đen. Một số bệnh do vi khuẩn như Vibrio có thể gây đỏ thân, đỏ phụ bộ.
- **Nghi bệnh do virus:** tôm đỏ thân kèm bỏ ăn, bơi lờ đờ dạt bờ, chết tăng nhanh; một số bệnh như đốm trắng (WSSV) có thể có đỏ thân. Chỉ PCR mới xác định được.

Những dấu hiệu bên ngoài chỉ mang tính gợi ý. Cùng một biểu hiện đỏ thân có thể do nhiều nguyên nhân khác nhau, nên cần kết hợp số đo nước, nhật ký ao và xét nghiệm.

## Nguyên nhân thường gặp khiến tôm đỏ thân, đỏ đuôi
| Nhóm nguyên nhân | Dấu hiệu đi kèm thường thấy | Việc cần kiểm tra |
|---|---|---|
| Thiếu oxy | Tôm nổi đầu, tụ gần bờ hoặc gần quạt, đỏ nhiều vào sáng sớm | Oxy hòa tan sáng sớm, hoạt động của quạt |
| Khí độc NH3, NO2 | Tôm bỏ ăn, nổi đầu, đen hoặc vàng mang | Test kit NH3, NO2, pH, nhiệt độ |
| pH, kiềm dao động | Tôm yếu, khó lột xác, đỏ sau mưa hoặc sau tảo tàn | pH sáng và chiều, độ kiềm |
| Nhiệt độ cao hoặc sốc nhiệt | Đỏ vào buổi trưa chiều, tôm bơi nhanh rồi yếu | Nhiệt độ nước các tầng |
| Sốc độ mặn | Đỏ sau mưa lớn hoặc sau khi cấp nước | Độ mặn trước và sau |
| Ký sinh, vi khuẩn | Đỏ đuôi, mòn đuôi, mang bẩn, có thể kèm dấu hiệu gan tụy | Soi mẫu, kiểm tra gan tụy, tư vấn kỹ thuật |
| Nghi bệnh virus | Chết tăng nhanh, bỏ ăn, dạt bờ | Lấy mẫu PCR |

## Tôm đỏ thân, đỏ đuôi có phải do thiếu oxy không?
Thiếu oxy là nguyên nhân bà con nên loại trừ đầu tiên vì dễ kiểm tra và xử lý nhanh. Oxy trong ao thấp nhất vào sáng sớm, nhất là ao nhiều tảo, ao có nhiều bùn đáy, ao nuôi mật độ cao. Dấu hiệu gợi ý: tôm tụ quanh quạt, nổi đầu, giảm ăn, ao có mùi hôi hoặc bọt nhiều.

Việc cần làm: kiểm tra toàn bộ quạt, máy sục khí còn chạy đủ công suất, vệ sinh dàn quạt, tăng thời gian chạy quạt vào ban đêm. Tham khảo thêm bài [oxy hòa tan ao nuôi tôm bao nhiêu là đủ](/vi/blog/oxy-hoa-tan-ao-nuoi-tom-bao-nhieu-la-du) để biết cách đo và đọc kết quả.

## Cách kiểm tra khi thấy tôm đỏ thân, đỏ đuôi
Bà con nên đi theo thứ tự sau, ghi lại kết quả mỗi bước:

1. **Đếm và ghi số tôm đỏ.** Dùng chài hoặc vợt lấy vài mẻ ở các vị trí khác nhau. Đỏ ít hay đỏ cả đàn, đỏ một góc ao hay khắp ao.
2. **Đo nước ngay.** pH, độ kiềm, NH3, NO2, nhiệt độ, độ mặn. Xem hướng dẫn trong bài [cách đo chỉ tiêu nước ao tôm bằng test kit](/vi/blog/cach-do-chi-tieu-nuoc-ao-tom-bang-test-kit).
3. **Kiểm tra oxy và quạt.** Nhất là đo vào sáng sớm.
4. **Kiểm tra sàng ăn.** Tôm có còn ăn không, thức ăn còn dư nhiều không, phân tôm trên sàng bình thường hay có dấu hiệu bất thường.
5. **Quan sát tôm chết và tôm yếu.** Số lượng tôm chết mỗi ngày tăng hay giảm; mang, gan tụy, ruột, vỏ, đuôi.
6. **Xem lại nhật ký ao.** Gần đây có mưa lớn, thay nước, bón vôi, dùng hóa chất, đổi thức ăn hay không. Xem gợi ý ở bài [nhật ký ao nuôi tôm ghi gì mỗi ngày](/vi/blog/nhat-ky-ao-nuoi-tom-ghi-gi-moi-ngay).

## Cách xử lý ban đầu
Mục tiêu là giảm stress và loại trừ nguyên nhân môi trường, không nên dùng nhiều sản phẩm cùng lúc.

- **Tăng oxy:** chạy hết quạt, kiểm tra dàn quạt, ưu tiên ban đêm và sáng sớm.
- **Giảm hoặc ngưng cho ăn tạm thời** khi tôm yếu, khí độc cao. Dựa vào sàng ăn để quyết định, xem thêm [cách đọc nhá sàng ăn và điều chỉnh lượng ăn tôm thẻ](/vi/blog/cach-doc-nha-sang-an-dieu-chinh-luong-an-tom-the).
- **Xử lý khí độc:** nếu NH3 cao, có thể dùng **SUPER YUCCA** hấp thụ khí độc NH3. Theo nhãn: dùng định kỳ 1 lít/5.000 m³ nước, 7 ngày/lần; khi khí độc cao dùng 1 lít/3.000 m³ nước, hòa nước sạch ao rồi tạt đều vào sáng sớm hoặc chiều mát, mở quạt nước. Đọc kỹ hướng dẫn trên bao bì.
- **Làm sạch đáy:** nếu đáy nhiều bùn, phân tôm, có thể dùng **CLEAR 12H** giúp phân hủy mùn bã hữu cơ, thức ăn thừa. Theo nhãn: ao bạt 15 – 20 lít/1.000 m³ nước, 3 ngày/lần; ao đất 10 – 15 lít/1.000 m³ nước, 5 ngày/lần, sau khi ủ theo hướng dẫn, dùng khi có nắng, mở quạt liên tục.
- **Hạn chế thay nước ồ ạt:** nếu cần thay, thay từng phần, giữ chênh lệch nhiệt độ, độ mặn, pH giữa nước mới và nước ao nhỏ.

Các sản phẩm trên chỉ hỗ trợ cải thiện môi trường, không phải thuốc trị bệnh.

## Khi nào cần lấy mẫu xét nghiệm PCR?
Bà con nên lấy mẫu gửi phòng xét nghiệm hoặc nhờ kỹ thuật viên, bác sĩ thủy sản hỗ trợ khi:

- Tôm đỏ thân kèm bỏ ăn, dạt bờ, chết tăng nhanh trong vài ngày.
- Đã xử lý oxy, khí độc nhưng tình trạng không cải thiện.
- Có các biểu hiện khác như đốm trắng dưới vỏ, gan tụy teo hoặc nhợt, ruột trống.
- Ao bên cạnh đang có dịch.

Mẫu nên lấy từ tôm còn sống nhưng yếu, bảo quản theo hướng dẫn của phòng xét nghiệm. Kết quả PCR giúp xác định tác nhân virus hoặc vi khuẩn cụ thể, từ đó quyết định hướng xử lý. Việc dùng thuốc hay biện pháp điều trị cần theo chỉ dẫn của kỹ thuật viên hoặc bác sĩ thú y thủy sản. Bà con cũng có thể tham khảo [6 bệnh thường gặp trên tôm thẻ và cách phòng](/vi/blog/6-benh-thuong-gap-tren-tom-the-va-cach-phong) để biết các dấu hiệu chính của từng bệnh.

## Phòng tôm đỏ thân, đỏ đuôi từ trước
- **Giữ oxy ổn định**, đặc biệt ban đêm và sáng sớm.
- **Đo nước đều đặn** (pH sáng, chiều; NH3, NO2 hằng tuần hoặc theo tình trạng ao) để phát hiện biến động sớm.
- **Giữ đáy sạch**, không để thức ăn thừa tích tụ.
- **Tránh sốc môi trường:** thay nước từ từ, theo dõi dự báo mưa, chuẩn bị quạt trước khi trời đổi.
- **Chọn giống sạch bệnh**, thả đúng mật độ hợp lý, xem bài [mật độ thả tôm thẻ bao nhiêu là hợp lý](/vi/blog/mat-do-tha-tom-the-bao-nhieu-la-hop-ly).
- **Cách ly và xử lý nước đầu vào** trước khi cấp vào ao nuôi.

Cần tư vấn cho ao của mình? Gọi hotline 1900 252 667 để kỹ thuật viên Thủy Sản Tím tư vấn miễn phí.

## Câu hỏi thường gặp

### Tôm thẻ đỏ thân có phải bị đốm trắng không?
Không chắc. Đỏ thân có thể do stress, thiếu oxy, khí độc hoặc vi khuẩn, đồng thời một số trường hợp đốm trắng cũng có đỏ thân. Dấu hiệu bên ngoài chỉ mang tính gợi ý, cần PCR để xác định.

### Tôm đỏ đuôi, mòn đuôi là bệnh gì?
Đỏ đuôi, mòn đuôi thường gợi ý tôm bị tổn thương, vi khuẩn hoặc môi trường ao bẩn. Cần kiểm tra đáy ao, khí độc và cho kỹ thuật viên xem tôm để có hướng xử lý phù hợp.

### Thấy tôm đỏ thân thì có nên thay nước ngay không?
Không nên thay ồ ạt vì dễ gây sốc thêm. Trước hết kiểm tra oxy, đo nước, rồi mới quyết định thay từng phần, từ từ và giữ chênh lệch các chỉ tiêu nhỏ.

### Tôm đỏ thân có cần ngưng cho ăn không?
Nếu tôm yếu hoặc khí độc cao, nên giảm hoặc ngưng tạm thời rồi theo dõi sàng ăn. Khi tôm hồi phục, cho ăn lại từ từ.

### Có thể dùng kháng sinh khi tôm đỏ thân không?
Không nên tự ý dùng. Chưa xác định tác nhân thì dùng thuốc dễ sai, gây lãng phí và rủi ro tồn dư. Hãy lấy mẫu, xác định nguyên nhân rồi hỏi ý kiến kỹ thuật viên hoặc bác sĩ thú y thủy sản.
`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'cai-tao-ao-sau-thu-hoach-nuoi-tom', topic: 'technique', daysAgo: 0, date: `${DAY}09:10:00+07:00`,
    title: L('Cải tạo ao sau thu hoạch: làm sạch đáy, phơi ao, vệ sinh bạt'),
    excerpt: L('Cải tạo ao sau thu hoạch nuôi tôm gồm nạo bùn, phơi đáy, bón vôi, vệ sinh bạt, lấy nước và xử lý. Các bước làm tuần tự và cách nối sang vụ nuôi kế tiếp.'),
    body: L(
`Cải tạo ao sau thu hoạch là chuỗi việc nối tiếp: thu dọn thiết bị, hút hoặc nạo bùn đáy, phơi khô đáy, xử lý pH đất bằng vôi khi cần, rửa và vệ sinh bạt, lấy nước qua lọc rồi xử lý nước trước khi thả giống. Làm đủ và đúng thứ tự giúp giảm mầm bệnh, khí độc từ đáy và ổn định ao ở đầu vụ sau. Thời gian mỗi bước phụ thuộc loại ao, thời tiết và tình trạng đáy, nên bà con cần theo hướng dẫn của kỹ thuật viên địa phương.

Nhiều ao gặp sự cố ngay 30 ngày đầu của vụ sau như nước bẩn, khí độc, tôm chậm lớn, mà nguyên nhân gốc nằm ở khâu cải tạo bị làm vội. Đáy ao còn bùn đen, nhớt bạt chưa sạch hay nước chưa được xử lý đủ thường để lại mầm bệnh và chất hữu cơ cho vụ mới. Bài này đi qua từng bước, kèm bảng tóm tắt dễ làm theo.

## Vì sao phải cải tạo ao sau mỗi vụ nuôi?
Trong suốt vụ nuôi, ao tích tụ thức ăn thừa, phân tôm, xác tảo, vỏ tôm lột và các chất hữu cơ khác ở đáy. Ở vùng đáy thiếu oxy, các chất này phân hủy kỵ khí và sinh ra H2S, NH3, làm môi trường xấu. Bùn đáy cũng là nơi mầm bệnh có thể tồn tại.

Cải tạo ao nhằm:
- Loại bỏ chất hữu cơ tích tụ, giảm nguồn khí độc.
- Giảm mầm bệnh còn sót từ vụ trước.
- Điều chỉnh đáy ao (pH đất, độ phẳng) cho vụ mới.
- Đảm bảo thiết bị, bạt, đường nước sạch và hoạt động tốt.

Bài này tập trung phần cải tạo sau thu hoạch. Quy trình chuẩn bị ao tổng quát trước khi thả giống có trong bài [quy trình chuẩn bị ao nuôi tôm thẻ 7 bước](/vi/blog/quy-trinh-chuan-bi-ao-nuoi-tom-the-7-buoc).

## Các bước cải tạo ao sau thu hoạch
| Bước | Việc cần làm | Lưu ý chính |
|---|---|---|
| 1. Thu hoạch xong, tháo nước | Tháo nước có kiểm soát, không xả thẳng ra kênh khi vụ vừa có bệnh | Xử lý nước thải theo quy định, qua ao lắng |
| 2. Dọn thiết bị | Thu quạt, sàng ăn, ống, dây điện, ống si phông | Rửa sạch, phơi, kiểm tra hư hỏng |
| 3. Hút, nạo bùn đáy | Loại bỏ lớp bùn đen, nhão | Đổ bùn ở nơi quy định, không đổ xuống kênh |
| 4. Rửa và vệ sinh bạt (ao bạt) | Cọ rửa nhớt, kiểm tra lỗ thủng, mối nối | Phơi nắng, vá chỗ rách |
| 5. Phơi đáy (ao đất) | Phơi nắng đến khi đáy khô, nứt | Thời gian tùy thời tiết, tránh mưa |
| 6. Xử lý pH đáy | Bón vôi khi cần theo kết quả đo | Dùng đúng loại vôi, đúng liều theo hướng dẫn |
| 7. Lấy nước, lắng, xử lý | Lấy nước qua túi lọc vào ao lắng rồi xử lý | Ổn định rồi mới thả giống |

## Thu hoạch xong làm gì trước tiên?
Việc đầu tiên là tháo nước một cách có kiểm soát. Nếu vụ vừa rồi tôm bị bệnh, bà con không nên xả thẳng nước ra kênh rạch mà nên đưa qua ao lắng, xử lý rồi mới thải theo quy định địa phương. Sau khi nước cạn, thu gom vỏ tôm, tôm chết sót, rác thải và vật tư hỏng.

Thiết bị như quạt nước, sàng ăn, ống si phông, dây điện, lưới chài nên được rửa sạch bằng nước sạch, phơi nắng và kiểm tra. Cánh quạt hoặc ống bị nhớt, rêu sẽ là nơi giữ chất hữu cơ và mầm bệnh sang vụ sau.

## Làm sạch đáy ao: hút bùn, nạo bùn như thế nào?
Lớp bùn đen, nhão, có mùi hôi ở đáy là nơi tích khí độc. Với ao đất, cần nạo hoặc hút lớp bùn này khỏi ao, nhất là khu vực giữa ao nơi chất thải gom lại do dòng nước. Với ao bạt, thường hút bùn bằng ống si phông trong vụ; khi thu hoạch xong cần dọn nốt phần còn lại.

Bùn đáy cần đem đến nơi quy định (bờ đất, bãi chứa riêng), không đổ xuống kênh rạch hoặc nguồn nước sinh hoạt. Nếu vụ vừa rồi có bệnh, nên báo cho kỹ thuật viên hoặc chính quyền địa phương về cách xử lý bùn.

Xem thêm cách quản lý đáy ao bạt trong bài [quản lý đáy ao bạt nuôi tôm thẻ: xi phông, quạt nước](/vi/blog/quan-ly-day-ao-bat-nuoi-tom-the-xi-phong-quat-nuoc).

## Phơi đáy ao bao lâu thì đủ?
Phơi đáy giúp oxy thấm vào lớp đất, ánh nắng và nhiệt độ giúp giảm mầm bệnh và mùi hôi. Ao đất nên phơi đến khi đáy khô và nứt chân chim ở phần lớn diện tích. Thời gian thường kéo dài từ khoảng một đến vài tuần, tùy nắng mưa, độ ẩm và loại đất. Đây là khoảng tham khảo; bà con nên theo hướng dẫn của kỹ thuật viên địa phương và điều kiện thực tế.

Mùa mưa không thể phơi lâu, nên cần ao có mái che hoặc rút ngắn thời gian rồi xử lý bằng cách khác. Tránh để đáy bị ngập nước mưa trở lại giữa chừng; nếu bị, nên hút nước mưa ra để phơi tiếp.

## Bón vôi, xử lý pH đáy ra sao?
Vôi thường được dùng để điều chỉnh pH đất, nhất là ao có đất chua, nhiễm phèn. Có nhiều loại vôi khác nhau (CaCO3, dolomite, vôi nung CaO, vôi tôi Ca(OH)2) với tác dụng và mức độ an toàn khác nhau. Không nên bón theo cảm tính; nên đo pH đất hoặc hỏi kỹ thuật viên để chọn loại và liều phù hợp. Tham khảo thêm bài [dùng vôi trong ao nuôi tôm: CaCO3, dolomite, vôi sống](/vi/blog/dung-voi-trong-ao-tom-caco3-dolomite-voi-song).

Vôi nung và vôi tôi nên rải khi đáy còn hơi ẩm và để tác dụng một thời gian, rồi mới lấy nước. Khi bón vôi cần chú ý an toàn lao động (đeo găng, kính, khẩu trang).

## Vệ sinh bạt: rửa, kiểm tra và khử nhớt
Với ao bạt, lớp nhớt (màng sinh học) bám trên bạt giữ chất hữu cơ và có thể chứa mầm bệnh. Sau khi hút hết nước:

1. **Cọ rửa bạt** bằng nước sạch áp lực và chổi mềm, bỏ lớp nhớt, rêu, cặn bẩn, chú ý vùng đáy và chân bờ.
2. **Kiểm tra lỗ thủng, mối nối, vết rách**; vá lại bằng vật liệu phù hợp.
3. **Vệ sinh ống, lưới, sàng ăn, đầu ống thoát đáy** đặt trong ao.
4. **Phơi nắng** để bạt khô, giúp giảm ẩm và mầm bệnh.
5. **Kiểm tra hố si phông, hệ thống thoát đáy**, loại bỏ bùn và cặn.

Chất khử trùng nếu dùng phải theo đúng nhãn và dụng cụ bảo hộ. Tránh để dư lượng hóa chất khi cấp nước vụ mới; rửa lại bằng nước sạch sau khi khử trùng nếu hướng dẫn trên nhãn yêu cầu.

## Lấy nước, lắng lọc và xử lý trước khi thả giống
Nước cấp vào nên đi qua túi lọc (lưới lọc mịn) để hạn chế cá tạp, giáp xác và trứng của chúng. Sau đó đưa vào ao lắng để lắng phù sa, rồi xử lý trước khi cấp vào ao nuôi. Bà con xem chi tiết ở bài [xử lý nước trước khi thả giống tôm](/vi/blog/xu-ly-nuoc-truoc-khi-tha-giong-tom).

Về sản phẩm xử lý nước, **VH-GLUBENCO PRO** là sản phẩm sát trùng nguồn nước ao nuôi, giúp làm giảm vi khuẩn, nấm, nguyên sinh động vật gây hại trong môi trường nước. Theo nhãn: trong thời gian chuẩn bị ao dùng 1,5 lít/1.000 m³ nước, để 2 – 3 ngày; hòa tan với nước gấp 100 lần rồi phun hoặc tạt đều khắp ao, lắc đều trước khi dùng. Tham khảo thêm hướng dẫn trên bao bì và ý kiến kỹ thuật viên.

Sau khi xử lý nước, cần chờ nước ổn định, đo pH, kiềm, độ mặn, NH3, NO2 trước khi thả giống. Đây cũng là lúc gây màu nước và cấy vi sinh đúng cách; xem [cách gây màu nước ao nuôi tôm](/vi/blog/cach-gay-mau-nuoc-ao-nuoi-tom).

## Cải tạo ao liên quan thế nào đến vụ nuôi sau?
Mỗi bước cải tạo ảnh hưởng đến một giai đoạn của vụ sau:

| Việc cải tạo | Ảnh hưởng đến vụ sau |
|---|---|
| Hút, nạo bùn kỹ | Giảm nguồn H2S, NH3 từ đáy; nền sạch cho 30 ngày đầu |
| Phơi đáy đủ | Giảm mầm bệnh, giúp đáy thông thoáng |
| Xử lý pH, bón vôi đúng | Ổn định pH, độ kiềm đầu vụ |
| Vệ sinh bạt, thiết bị | Hạn chế nhớt, mầm bệnh cũ |
| Lọc, lắng, xử lý nước | Giảm cá tạp, giáp xác, tác nhân gây hại |

Ao cải tạo tốt không có nghĩa là không còn rủi ro, nhưng nền sạch sẽ giúp ao dễ quản lý hơn khi vào vụ. Bà con cũng nên ghi lại những gì đã làm (ngày phơi, loại vôi, ngày lấy nước) trong nhật ký để rút kinh nghiệm cho vụ sau.

## Những sai lầm thường gặp khi cải tạo ao
- Rút ngắn thời gian phơi vì muốn thả sớm.
- Bón vôi quá tay hoặc dùng sai loại.
- Chỉ xử lý nước mà bỏ qua bùn đáy.
- Đổ bùn, nước thải xuống kênh rạch.
- Lấy nước không qua lọc.
- Không kiểm tra lỗ thủng bạt, hệ thống thoát đáy.

Cần tư vấn cho ao của mình? Gọi hotline 1900 252 667 để kỹ thuật viên Thủy Sản Tím tư vấn miễn phí.

## Câu hỏi thường gặp

### Cải tạo ao sau thu hoạch mất bao lâu?
Tùy loại ao, thời tiết và tình trạng đáy. Ao bạt thường nhanh hơn ao đất, ao đất mùa mưa thường lâu hơn. Bà con nên theo hướng dẫn của kỹ thuật viên địa phương thay vì áp dụng một con số cố định.

### Ao bạt có cần phơi khô không?
Nên phơi bạt cho khô sau khi cọ rửa, giúp giảm ẩm và mầm bệnh bám trên bề mặt. Thời gian phơi tùy nắng, nhưng không nên bỏ qua bước này.

### Bón vôi trước hay lấy nước trước?
Thường bón vôi khi đáy đã được dọn và phơi, trước khi lấy nước. Loại vôi và thời gian chờ tùy sản phẩm, nên theo hướng dẫn trên nhãn và tư vấn kỹ thuật.

### Có cần xử lý bùn đáy riêng không?
Có. Bùn đáy chứa nhiều chất hữu cơ và có thể chứa mầm bệnh nên cần đưa đến nơi quy định, không xả xuống kênh rạch, đặc biệt khi vụ vừa rồi tôm bị bệnh.

### Nếu vụ trước tôm bị bệnh thì cải tạo khác gì?
Cần cẩn thận hơn: xử lý nước thải và bùn đáy đúng cách, phơi đủ, vệ sinh thiết bị kỹ và nên hỏi kỹ thuật viên về quy trình phù hợp với bệnh đã gặp trước khi thả giống mới.
`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'nuoi-tom-mua-lanh-nhiet-do-thap', topic: 'technique', daysAgo: 0, date: `${DAY}09:20:00+07:00`,
    title: L('Nuôi tôm mùa lạnh: nhiệt độ thấp ảnh hưởng gì và cách giữ ấm ao'),
    excerpt: L('Nuôi tôm mùa lạnh cần chú ý nhiệt độ thấp làm tôm giảm ăn, chậm lột xác, dễ nhiễm bệnh. Các cách giữ ấm ao, giảm ăn theo sàng và tránh sốc nhiệt.'),
    body: L(
`Nuôi tôm mùa lạnh khó vì nhiệt độ nước thấp làm tôm giảm ăn, chậm lớn, chậm lột xác và sức đề kháng giảm, từ đó dễ nhiễm bệnh hơn. Tôm thẻ chân trắng thường sinh trưởng tốt trong khoảng 28 – 32 °C (tham khảo); khi nước xuống thấp hơn, tôm hoạt động kém dần. Cách ứng phó chính là giữ ấm ao (nước sâu, che phủ), giảm lượng ăn theo sàng, tránh gây sốc và hạn chế thay nước vào lúc trời lạnh.

Ở miền Bắc và miền Trung, mùa đông có những đợt rét đậm khiến nhiệt độ nước giảm nhiều trong thời gian ngắn. Ở miền Nam, mùa mưa hoặc đợt gió mùa cũng làm nhiệt độ nước dao động. Bài này giúp bà con hiểu nhiệt độ thấp tác động thế nào và những việc nên làm.

## Nhiệt độ bao nhiêu thì tôm thẻ bị ảnh hưởng?
Con số cụ thể còn phụ thuộc kích cỡ tôm, độ mặn, tốc độ giảm nhiệt và sức khỏe đàn tôm. Các khoảng sau chỉ mang tính tham khảo:

| Nhiệt độ nước (tham khảo) | Tình trạng thường gặp |
|---|---|
| Khoảng 28 – 32 °C | Khoảng thuận lợi cho tôm thẻ ăn, lớn và lột xác |
| Dưới khoảng 25 °C | Tôm bắt đầu giảm ăn, tăng trưởng chậm lại |
| Khoảng 20 °C trở xuống | Tôm yếu rõ rệt, dễ bị bệnh, rủi ro hao hụt cao |
| Giảm nhanh trong thời gian ngắn | Nguy cơ sốc nhiệt dù chưa xuống quá thấp |

Điều đáng lo không chỉ là mức nhiệt thấp mà còn là tốc độ thay đổi. Nước giảm vài độ trong một đêm thường gây hại nhiều hơn nước giảm từ từ.

## Nhiệt độ thấp ảnh hưởng gì đến tôm?
- **Giảm ăn:** tôm chuyển hóa chậm lại, ăn ít hơn. Nếu vẫn cho ăn như thường, thức ăn dư tích đáy, sinh khí độc.
- **Chậm lột xác và chậm lớn:** chu kỳ lột xác kéo dài, tôm tăng trọng chậm.
- **Giảm sức đề kháng:** tôm stress dễ nhiễm khuẩn, virus, ký sinh.
- **Nguy cơ bệnh tăng:** một số bệnh như đốm trắng (WSSV) thường bùng phát khi nhiệt độ nước thấp và biến động. Dấu hiệu chỉ gợi ý, cần PCR xác định.
- **Hệ sinh thái ao thay đổi:** tảo phát triển kém, màu nước nhạt hoặc tảo tàn; vi sinh hoạt động chậm hơn.
- **PH và khí độc dễ biến động:** tảo yếu khiến pH kém ổn định, thức ăn thừa dễ sinh khí độc, nên vẫn phải đo nước đều.

## Giữ ấm ao nuôi tôm: những biện pháp thực tế
### 1. Tăng mực nước
Nước sâu giữ nhiệt tốt hơn, biên độ nhiệt trong ngày nhỏ hơn. Nhiều ao nuôi mùa lạnh giữ mực nước sâu hơn bình thường, thường khoảng 1,2 – 1,5 m tùy ao và kết cấu bờ (tham khảo). Tránh hạ mực nước bất ngờ vào lúc trời lạnh.

### 2. Che phủ ao, làm nhà màng
Với ao bạt, mái che hoặc nhà màng giúp giảm thất thoát nhiệt ban đêm, chắn gió lạnh và mưa. Vật liệu che cần đảm bảo thoáng khí, đủ ánh sáng và không cản trở hoạt động quạt. Ao đất có thể che một phần hoặc trồng cây chắn gió quanh bờ.

### 3. Hạn chế gió lùa và mưa lạnh
Bờ ao cao, lưới chắn gió hoặc cây chắn gió giảm bay hơi và mất nhiệt. Nước mưa lạnh làm giảm nhiệt độ và độ mặn mặt nước nên cần theo dõi sau mưa.

### 4. Quản lý quạt nước hợp lý
Quạt chạy cần thiết để cấp oxy và tránh phân tầng, nhưng không cần chạy ở công suất tối đa nếu tôm ít ăn và tảo yếu. Cần đảm bảo oxy đủ, nhất là ban đêm và sáng sớm. Xem [oxy hòa tan ao nuôi tôm bao nhiêu là đủ](/vi/blog/oxy-hoa-tan-ao-nuoi-tom-bao-nhieu-la-du).

## Cho ăn thế nào khi trời lạnh?
Khi nhiệt độ giảm, nhu cầu thức ăn của tôm giảm theo. Bà con nên:

- **Kiểm tra sàng ăn thường xuyên** và giảm lượng ăn khi thấy thức ăn dư.
- **Chia nhỏ bữa, cho ăn vào lúc nước ấm hơn** trong ngày (thường giữa trưa, đầu giờ chiều), tránh sáng sớm lạnh nhất.
- **Không cố ép ăn** khi tôm yếu; thức ăn thừa làm bẩn đáy.
- **Theo dõi phân và ruột tôm** để phát hiện tôm có ăn tốt không.

Cách đọc sàng ăn và điều chỉnh lượng thức ăn được hướng dẫn trong [cách đọc nhá sàng ăn và điều chỉnh lượng ăn tôm thẻ](/vi/blog/cach-doc-nha-sang-an-dieu-chinh-luong-an-tom-the) và [cách tính lượng thức ăn cho tôm thẻ](/vi/blog/cach-tinh-luong-thuc-an-cho-tom-the).

## Thay nước, xử lý ao vào mùa lạnh cần lưu ý gì?
- **Hạn chế thay nước** khi trời lạnh; nước cấp thường lạnh hơn nước ao, dễ gây sốc nhiệt.
- Nếu buộc phải thay, nên chọn **giữa trưa khi nước ấm**, thay từng phần nhỏ, theo dõi nhiệt độ, độ mặn, pH của nước cấp so với nước ao.
- **Tránh làm nhiều việc cùng lúc** (thay nước, tạt hóa chất, thay thức ăn). Mỗi việc đều là một yếu tố gây stress.
- **Đo nước đều đặn**, đặc biệt pH, kiềm và khí độc, vì tảo yếu làm pH biến động và khí độc có thể tăng. Hướng dẫn tại [cách đo chỉ tiêu nước ao tôm bằng test kit](/vi/blog/cach-do-chi-tieu-nuoc-ao-tom-bang-test-kit).

## Dùng vi sinh, khoáng và hỗ trợ sức khỏe tôm mùa lạnh
Vi khuẩn có lợi hoạt động chậm hơn khi nước lạnh, vì vậy nên tạt vào lúc trời có nắng, nước ấm hơn trong ngày, tránh ngày mưa rét. Điều này cũng phù hợp với hướng dẫn trên nhãn của một số sản phẩm vi sinh là sử dụng khi có nắng. Bà con xem thêm [dùng men vi sinh đúng cách](/vi/blog/dung-men-vi-sinh-dung-cach).

- **US LACTO** là lợi khuẩn Bacillus trộn thức ăn, giúp tôm tiêu hóa và hấp thụ tốt thức ăn, hỗ trợ cải thiện đường ruột. Theo nhãn: bổ sung hằng ngày trộn 5 g/kg thức ăn, cho ăn 2 – 3 lần/ngày; hòa tan với nước sạch, trộn đều lên thức ăn, để yên 15 phút rồi cho tôm ăn.
- **MIX 79** là khoáng tạt ao, bổ sung khoáng chất vào môi trường ao nuôi, hỗ trợ tôm lột xác và tạo vỏ. Theo nhãn: dùng định kỳ 5 kg/3.000 m³ nước, 2 ngày/lần, hòa nước rồi tạt đều khắp ao, nên dùng vào lúc chiều tối.

Các sản phẩm chỉ hỗ trợ, không thay thế việc giữ nhiệt, oxy và quản lý cho ăn. Nếu tôm có dấu hiệu bệnh, cần xét nghiệm và hỏi kỹ thuật viên. Thêm hướng dẫn về sức đề kháng giao mùa ở bài [tăng sức đề kháng cho tôm thời điểm giao mùa](/vi/blog/tang-suc-de-khang-cho-tom-thoi-diem-giao-mua).

## Khi có đợt rét đậm sắp đến, nên chuẩn bị gì?
1. Theo dõi dự báo thời tiết, chuẩn bị trước 1 – 2 ngày.
2. Nâng mực nước, che ao (nếu có thể).
3. Kiểm tra quạt, máy phát điện dự phòng.
4. Giảm lượng ăn theo sàng, không cho ăn sát giờ nhiệt độ xuống thấp.
5. Tránh thay nước, tạt hóa chất không cần thiết.
6. Đo nhiệt độ, pH, oxy sáng sớm và chiều; ghi vào nhật ký ao ([nhật ký ao nuôi tôm ghi gì mỗi ngày](/vi/blog/nhat-ky-ao-nuoi-tom-ghi-gi-moi-ngay)).
7. Quan sát tôm bơi, ăn, chết mỗi ngày; nếu bất thường kéo dài, lấy mẫu xét nghiệm.

Cần tư vấn cho ao của mình? Gọi hotline 1900 252 667 để kỹ thuật viên Thủy Sản Tím tư vấn miễn phí.

## Câu hỏi thường gặp

### Nhiệt độ bao nhiêu thì nên ngưng thả tôm?
Không có ngưỡng chung cho mọi vùng. Nhiệt độ thấp kéo dài làm tôm giống khó thích nghi nên nhiều hộ tránh thả vào đợt rét. Bà con nên hỏi kỹ thuật viên địa phương và theo dự báo thời tiết.

### Trời lạnh có nên giảm cho ăn không?
Có, nếu sàng ăn thấy thức ăn dư hoặc tôm ăn kém. Nên điều chỉnh theo sàng ăn thay vì theo lịch cố định.

### Có nên che ao nuôi tôm mùa lạnh không?
Nên nếu có điều kiện, nhất là ao bạt. Che phủ giúp giữ nhiệt ban đêm, chắn gió và mưa lạnh nhưng cần đảm bảo thoáng khí và đủ ánh sáng.

### Mùa lạnh có thay nước được không?
Nên hạn chế. Khi cần, thay từng phần nhỏ vào giữa trưa lúc nước ấm, giữ nước mới gần với nước ao về nhiệt độ, độ mặn, pH để tránh sốc.

### Tôm chết nhiều lúc lạnh là do lạnh hay do bệnh?
Khó phân biệt bằng mắt thường vì lạnh làm tôm yếu và dễ nhiễm bệnh. Cần kiểm tra môi trường, quan sát dấu hiệu bệnh và lấy mẫu PCR để xác định.
`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'tinh-fcr-ho-so-chuyen-doi-thuc-an-tom', topic: 'technique', daysAgo: 0, date: `${DAY}09:30:00+07:00`,
    title: L('FCR là gì? Cách tính hệ số chuyển đổi thức ăn và giảm FCR cho tôm'),
    excerpt: L('FCR là gì? FCR bằng lượng thức ăn đã cho chia cho khối lượng tôm tăng thêm. Cách tính kèm ví dụ cụ thể, các yếu tố làm tăng FCR và cách giảm FCR cho tôm.'),
    body: L(
`FCR (food conversion ratio, hệ số chuyển đổi thức ăn) cho biết cần bao nhiêu kg thức ăn để tôm tăng thêm 1 kg khối lượng. Công thức: FCR = tổng lượng thức ăn đã cho (kg) chia cho khối lượng tôm tăng thêm (kg). FCR càng thấp nghĩa là thức ăn được tận dụng càng hiệu quả, ít thất thoát và ít làm bẩn ao hơn. Muốn giảm FCR, bà con cần cho ăn đúng lượng theo sàng ăn, giữ môi trường nước ổn định, tôm khỏe và ghi chép số liệu.

Thức ăn là khoản chi lớn nhất của nhiều ao nuôi tôm, nên FCR là một trong những chỉ số được quan tâm nhất. Nhưng nhiều người tính FCR sai, hoặc chỉ nhìn kết quả cuối vụ mà không theo dõi trong quá trình nuôi. Bài này hướng dẫn cách tính, đọc và cải thiện FCR một cách thực tế.

## FCR là gì và vì sao quan trọng?
FCR là tỷ lệ giữa lượng thức ăn cho ăn và lượng sinh khối tôm tăng thêm. Ví dụ FCR bằng 1,3 nghĩa là cho ăn 1,3 kg thức ăn để tôm tăng 1 kg.

FCR quan trọng vì:
- **Liên quan trực tiếp đến chi phí thức ăn** cho mỗi kg tôm thu được.
- **Phản ánh hiệu quả quản lý ao:** cho ăn dư, môi trường xấu, tôm bệnh đều làm FCR tăng.
- **Giúp so sánh giữa các ao, các vụ** nếu ghi chép đúng cách.

Lưu ý: FCR chỉ là con số tham khảo để đánh giá, không phải mục tiêu cố định. FCR mỗi ao, mỗi vụ khác nhau tùy mật độ, giống, thức ăn, thời tiết, kích cỡ thu hoạch và tình trạng bệnh.

## Công thức tính FCR
**FCR = Tổng lượng thức ăn đã cho (kg) ÷ Khối lượng tôm tăng thêm (kg)**

Trong đó: khối lượng tôm tăng thêm = sinh khối cuối kỳ trừ sinh khối đầu kỳ.

Có hai cách tính phổ biến:

| Loại FCR | Cách tính | Dùng khi nào |
|---|---|---|
| FCR cả vụ | Tổng thức ăn cả vụ ÷ (sản lượng thu hoạch trừ sinh khối tôm giống thả) | Tổng kết sau thu hoạch |
| FCR theo giai đoạn | Thức ăn trong giai đoạn ÷ (sinh khối cuối giai đoạn trừ sinh khối đầu giai đoạn) | Theo dõi trong vụ để điều chỉnh |

### Ví dụ 1: FCR cả vụ
Ao thả 200.000 tôm giống, mỗi con khoảng 0,01 g, nên sinh khối thả khoảng 2 kg. Cuối vụ thu 7.500 kg tôm, tổng thức ăn đã cho là 9.000 kg.

- Khối lượng tôm tăng thêm = 7.500 − 2 = 7.498 kg
- FCR = 9.000 ÷ 7.498 ≈ 1,20

Sinh khối giống thả rất nhỏ nên nhiều người tính gần đúng 9.000 ÷ 7.500 = 1,20. Kết quả như nhau.

### Ví dụ 2: FCR theo giai đoạn
Trong một tuần, ước sinh khối tôm trong ao tăng từ 2.000 kg lên 2.600 kg, lượng thức ăn đã cho trong tuần là 840 kg.

- Khối lượng tăng thêm = 2.600 − 2.000 = 600 kg
- FCR tuần = 840 ÷ 600 = 1,40

Sinh khối giữa vụ chỉ là ước tính (xem [cách ước lượng tỷ lệ sống và sản lượng tôm trong ao](/vi/blog/uoc-luong-ty-le-song-san-luong-tom)), nên FCR giữa vụ có sai số và chỉ dùng để theo dõi xu hướng, không nên coi là con số tuyệt đối.

## Những yếu tố làm FCR tăng
Nhiều nguyên nhân cùng lúc làm FCR cao. Bảng dưới đây liệt kê các nhóm thường gặp và hướng xử lý:

| Nguyên nhân làm FCR cao | Dấu hiệu | Hướng khắc phục |
|---|---|---|
| Cho ăn dư | Sàng ăn còn nhiều thức ăn, đáy bẩn | Điều chỉnh lượng ăn theo sàng, chia nhỏ bữa |
| Ước tính số lượng tôm sai | Lượng ăn không khớp tôm thực tế | Chài, cân mẫu định kỳ, ước lại tỷ lệ sống |
| Môi trường xấu (oxy thấp, khí độc, pH dao động) | Tôm giảm ăn, nổi đầu | Đo nước, tăng oxy, xử lý khí độc |
| Tôm bệnh, đường ruột yếu | Phân lỏng, phân trắng, ruột đứt khúc | Kiểm tra sàng, ruột, gan tụy; tư vấn kỹ thuật |
| Tôm chậm lớn, không đều | Size lệch lớn | Xem [tôm chậm lớn, lớn không đều](/vi/blog/tom-cham-lon-lon-khong-deu-8-nguyen-nhan-cach-khac-phuc) |
| Thức ăn hút ẩm, mốc, bảo quản kém | Thức ăn vón, có mùi | Bảo quản khô ráo, dùng đúng hạn |
| Tỷ lệ sống thấp nhưng vẫn cho ăn theo ước lượng cũ | Thức ăn dư, sản lượng thấp | Cập nhật số lượng tôm thường xuyên |

## Cách giảm FCR trong thực tế
### 1. Cho ăn theo sàng, không theo cảm tính
Sàng ăn cho biết tôm ăn hết hay còn dư, từ đó điều chỉnh lượng cho bữa sau. Hướng dẫn chi tiết ở [cách đọc nhá sàng ăn và điều chỉnh lượng ăn tôm thẻ](/vi/blog/cach-doc-nha-sang-an-dieu-chinh-luong-an-tom-the) và [cách tính lượng thức ăn cho tôm thẻ](/vi/blog/cach-tinh-luong-thuc-an-cho-tom-the).

### 2. Giữ môi trường ổn định
Khi oxy thấp, NH3 hoặc NO2 cao, pH dao động, tôm giảm ăn và tiêu hóa kém, thức ăn bị lãng phí. Đo nước đều đặn bằng test kit, giữ đáy sạch. Đáy ao nhiều thức ăn thừa tích tụ cũng sinh khí độc. Nếu NH3 cao, **SUPER YUCCA** có thể hỗ trợ hấp thụ khí độc NH3; liều theo nhãn: định kỳ 1 lít/5.000 m³ nước, 7 ngày/lần, hoặc 1 lít/3.000 m³ khi khí độc cao.

### 3. Hỗ trợ đường ruột và tiêu hóa
Tôm tiêu hóa tốt thì hấp thụ thức ăn tốt hơn. Theo nhãn, **US LACTO** là lợi khuẩn Bacillus trộn thức ăn, hỗ trợ tiêu hóa và hấp thụ thức ăn, giảm hệ số FCR; liều bổ sung hằng ngày trộn 5 g/kg thức ăn, cho ăn 2 – 3 lần/ngày. Ngoài ra **AMIN CARE** bổ sung đạm cá, acid amin thiết yếu cho tôm, giúp tôm ham ăn; liều dùng theo hướng dẫn trên nhãn. Các sản phẩm này chỉ hỗ trợ, hiệu quả phụ thuộc vào cách quản lý ao tổng thể. Xem thêm [men tiêu hóa, lợi khuẩn trộn thức ăn cho tôm](/vi/blog/men-tieu-hoa-loi-khuan-tron-thuc-an-cho-tom).

### 4. Cập nhật số lượng tôm thường xuyên
Nếu tỷ lệ sống thực tế thấp hơn ước tính mà vẫn cho ăn theo số cũ thì chắc chắn dư thức ăn, FCR tăng. Cần chài, cân mẫu định kỳ để điều chỉnh.

### 5. Bảo quản và dùng thức ăn đúng cách
Thức ăn để nơi khô ráo, thoáng, tránh ẩm mốc, dùng theo hạn. Khi trộn thuốc, men vào thức ăn cần làm đúng hướng dẫn, xem [cách trộn thuốc, chế phẩm vào thức ăn cho tôm](/vi/blog/cach-tron-thuoc-che-pham-vao-thuc-an-cho-tom).

### 6. Quản lý bệnh sớm
Tôm có bệnh đường ruột, gan tụy thì ăn kém, FCR tăng. Phát hiện sớm qua sàng ăn, phân, ruột, gan tụy; khi nghi bệnh nên xét nghiệm và hỏi kỹ thuật viên.

## FCR bao nhiêu là tốt?
Không có con số "tốt" áp dụng cho mọi ao. FCR phụ thuộc mô hình nuôi (ao đất, ao bạt, biofloc), mật độ, thức ăn, cỡ thu hoạch và thời tiết, nên đây không phải là chỉ tiêu cam kết. Cách đánh giá hợp lý là so sánh FCR của ao mình qua các vụ, cùng điều kiện, rồi tìm nguyên nhân khi FCR tăng bất thường. Nhà sản xuất thức ăn cũng thường có bảng tham khảo riêng cho từng loại thức ăn.

## Ghi chép để theo dõi FCR
Để tính FCR đúng, bà con cần ghi:
- Số lượng và trọng lượng giống thả.
- Lượng thức ăn cho mỗi ngày (theo bữa).
- Số liệu chài cân mẫu định kỳ.
- Sản lượng thu hoạch (kể cả thu tỉa nếu có).

Sổ ghi chép này cũng là cơ sở cho các quyết định khác. Xem [nhật ký ao nuôi tôm ghi gì mỗi ngày](/vi/blog/nhat-ky-ao-nuoi-tom-ghi-gi-moi-ngay). Nếu có thu tỉa, cộng cả sản lượng tỉa vào tổng sản lượng khi tính FCR cả vụ.

Cần tư vấn cho ao của mình? Gọi hotline 1900 252 667 để kỹ thuật viên Thủy Sản Tím tư vấn miễn phí.

## Câu hỏi thường gặp

### FCR là gì trong nuôi tôm?
FCR là hệ số chuyển đổi thức ăn, bằng lượng thức ăn đã cho chia cho khối lượng tôm tăng thêm. FCR 1,2 nghĩa là cho ăn 1,2 kg thức ăn để tôm tăng 1 kg.

### FCR càng thấp càng tốt đúng không?
Về hiệu quả thức ăn thì thấp thường là tốt, nhưng không nên cắt giảm thức ăn để ép FCR thấp vì tôm thiếu ăn sẽ chậm lớn. Quan trọng là cho ăn đủ, hợp lý và ghi chép chính xác.

### Tính FCR giữa vụ có chính xác không?
Chỉ gần đúng vì sinh khối giữa vụ là ước tính từ chài, cân mẫu và tỷ lệ sống. Nên dùng để theo dõi xu hướng, còn FCR cả vụ mới tính theo sản lượng thu hoạch thực tế.

### Vì sao FCR vụ này cao hơn vụ trước?
Có thể do cho ăn dư, tỷ lệ sống thấp hơn dự kiến, môi trường xấu, tôm bệnh hoặc thức ăn bảo quản kém. Cần so sánh nhật ký hai vụ để tìm nguyên nhân.

### Thu tỉa có làm thay đổi cách tính FCR không?
Có. Khi tính FCR cả vụ, phải cộng sản lượng các đợt tỉa vào tổng sản lượng, nếu không FCR sẽ bị tính cao hơn thực tế.
`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'uoc-luong-ty-le-song-san-luong-tom', topic: 'technique', daysAgo: 0, date: `${DAY}09:40:00+07:00`,
    title: L('Cách ước lượng tỷ lệ sống và sản lượng tôm trong ao'),
    excerpt: L('Cách ước lượng tỷ lệ sống và sản lượng tôm trong ao bằng chài, sàng ăn và cân mẫu. Công thức kèm ví dụ tính, sai số cần biết và cách dùng số liệu để chia ăn.'),
    body: L(
`Muốn ước lượng tỷ lệ sống và sản lượng tôm trong ao, bà con cần hai số liệu: số con còn lại và trọng lượng trung bình. Số con ước từ chài ở nhiều vị trí, trọng lượng trung bình từ cân mẫu. Sản lượng ước tính bằng số con nhân trọng lượng trung bình, tỷ lệ sống bằng số con còn lại chia số con đã thả. Các con số này chỉ là ước tính, có sai số, nên cần lặp lại định kỳ và so sánh theo xu hướng.

Biết tỷ lệ sống và sản lượng giúp bà con tính lượng thức ăn đúng, dự báo thời điểm thu hoạch và phát hiện sớm khi tôm hao hụt bất thường. Ngược lại, ước tính sai sẽ dẫn đến cho ăn dư hoặc thiếu, FCR tăng. Bài này hướng dẫn từng bước và có ví dụ tính cụ thể.

## Vì sao cần ước lượng tỷ lệ sống và sản lượng?
- **Tính lượng thức ăn:** lượng ăn dựa trên sinh khối tôm trong ao, nên nếu tỷ lệ sống thấp hơn ước tính thì dễ cho ăn dư.
- **Theo dõi sức khỏe đàn tôm:** số lượng giảm nhanh là dấu hiệu cần kiểm tra bệnh, môi trường.
- **Lập kế hoạch thu hoạch:** biết cỡ tôm và sản lượng dự kiến giúp chuẩn bị nhân công, đầu ra.
- **Tính FCR giữa vụ:** xem bài [FCR là gì? cách tính hệ số chuyển đổi thức ăn và giảm FCR cho tôm](/vi/blog/tinh-fcr-ho-so-chuyen-doi-thuc-an-tom).

## Công thức cần nhớ
| Đại lượng | Công thức |
|---|---|
| Mật độ tôm trong ao (con/m²) | Số tôm bắt được trên mẻ ÷ diện tích mẻ ÷ hệ số hiệu chỉnh |
| Số tôm còn lại (con) | Mật độ × diện tích ao |
| Tỷ lệ sống (%) | Số tôm còn lại ÷ số tôm đã thả × 100 |
| Trọng lượng trung bình (g/con) | Tổng khối lượng mẫu (g) ÷ số con trong mẫu |
| Cỡ tôm (con/kg) | 1.000 ÷ trọng lượng trung bình (g) |
| Sinh khối, sản lượng (kg) | Số tôm còn lại × trọng lượng trung bình (g) ÷ 1.000 |

Trong đó hệ số hiệu chỉnh là tỷ lệ tôm thực tế mà mỗi mẻ chài bắt được trong diện tích mẻ lưới. Mẻ chài không bắt được hết tôm, nên hệ số này nhỏ hơn 1 và khác nhau theo lưới, cách chài, độ sâu, tôm lớn hay nhỏ.

## Ước lượng số lượng tôm bằng chài
Chài (lưới tay) là cách phổ biến nhất. Cách làm:

1. **Chọn nhiều điểm chài** (thường từ 4 – 6 điểm trở lên) rải đều quanh bờ và các vị trí khác nhau, tránh chỉ chài chỗ tôm tụ.
2. **Chài đúng kỹ thuật**, cùng người chài, cùng loại lưới, để kết quả so sánh được giữa các lần.
3. **Đếm số tôm mỗi mẻ**, tính trung bình.
4. **Biết diện tích mẻ lưới.** Có thể ước từ đường kính mép lưới khi tung (diện tích ≈ π × bán kính²).
5. **Xác định hệ số hiệu chỉnh.** Mỗi người, mỗi loại lưới có hệ số riêng. Bà con nên tự hiệu chỉnh bằng cách so với kết quả thu hoạch các vụ trước hoặc hỏi kỹ thuật viên; không nên dùng con số của người khác.

### Ví dụ tính (số liệu minh họa)
Đây là ví dụ giả định để minh họa cách tính, không phải mức chuẩn:

- Ao 3.000 m², đã thả 300.000 tôm giống.
- Diện tích mỗi mẻ chài khoảng 6 m².
- Đếm trung bình 120 con/mẻ.
- Hệ số hiệu chỉnh (giả định) là 0,25.

Tính:
- Mật độ = 120 ÷ 6 ÷ 0,25 = 80 con/m²
- Số tôm còn lại = 80 × 3.000 = 240.000 con
- Tỷ lệ sống = 240.000 ÷ 300.000 × 100 = 80%

Nếu hệ số hiệu chỉnh thực tế khác, kết quả cũng thay đổi theo. Vì vậy chài ước lượng chủ yếu dùng để **theo dõi xu hướng** và so sánh các lần chài với nhau.

## Cân mẫu để biết trọng lượng trung bình
Cân mẫu là bước quyết định độ chính xác của sản lượng ước:

1. Chài ở nhiều vị trí, gom tôm lại, chọn ngẫu nhiên khoảng vài chục đến một trăm con, không chọn riêng con to hoặc con nhỏ.
2. Cân tổng khối lượng, đếm số con.
3. Tính trọng lượng trung bình = tổng khối lượng ÷ số con.
4. Ghi lại cả sự chênh lệch kích cỡ trong mẫu (đàn đều hay lệch).

### Ví dụ tiếp theo
Cân 100 tôm được 1,5 kg (1.500 g):
- Trọng lượng trung bình = 1.500 ÷ 100 = 15 g/con
- Cỡ tôm = 1.000 ÷ 15 ≈ 67 con/kg
- Sinh khối ước = 240.000 × 15 ÷ 1.000 = 3.600 kg

Như vậy theo ước tính ví dụ, ao còn khoảng 3.600 kg tôm cỡ khoảng 67 con/kg.

Khi cân mẫu, cần tránh làm tôm xây xát, nên thao tác nhẹ, nhanh và thả tôm trở lại ao. Không nên cân vào lúc tôm đang lột xác nhiều (tôm mềm vỏ dễ chết, kết quả cũng lệch).

## Dùng sàng ăn để kiểm tra thêm
Sàng ăn chủ yếu để xem tôm ăn thế nào, nhưng cũng cho thông tin tham khảo về số lượng và kích cỡ tôm. Khi nhấc sàng, nếu thấy số lượng tôm ít hơn bình thường hoặc tôm yếu, bà con nên chài kiểm tra. Xem cách đọc sàng trong bài [cách đọc nhá sàng ăn và điều chỉnh lượng ăn tôm thẻ](/vi/blog/cach-doc-nha-sang-an-dieu-chinh-luong-an-tom-the). Không nên dùng sàng để tính chính xác số con trong ao, vì tôm vào sàng không đại diện cho cả ao.

## Giới hạn và sai số cần biết
| Nguồn sai số | Ảnh hưởng | Cách hạn chế |
|---|---|---|
| Ít điểm chài | Số liệu lệch theo vị trí | Chài nhiều điểm, rải đều |
| Tôm phân bố không đều (tụ gần quạt, bờ) | Ước quá cao hoặc quá thấp | Chài cả khu giữa ao và khu gần quạt |
| Thay người chài hoặc đổi lưới | Hệ số hiệu chỉnh khác nhau | Giữ cố định người, lưới, cách chài |
| Mẫu cân nhỏ, chọn thiên lệch | Trọng lượng trung bình sai | Lấy mẫu ngẫu nhiên, cân đủ số con |
| Tôm lớn né chài | Ước thấp ở giai đoạn cuối | So thêm với kết quả thu tỉa, thu hoạch |
| Tôm lột xác, thời điểm trong ngày | Kết quả dao động | Chài cùng khung giờ |

Cách tốt nhất là coi các con số ước tính như một "khoảng" và ghi lại để so sánh theo thời gian, thay vì tin tuyệt đối vào một lần chài. Sau mỗi vụ, bà con nên so ước tính trong vụ với sản lượng thực để rút kinh nghiệm và điều chỉnh hệ số hiệu chỉnh cho lần sau.

## Bao lâu nên ước lượng một lần?
Tùy giai đoạn nuôi và quy mô, nhưng thường:
- **Giai đoạn đầu (tôm nhỏ):** kiểm tra thường xuyên hơn để nắm tỷ lệ sống sớm; xem [tôm 30 ngày đầu cần làm gì](/vi/blog/tom-30-ngay-dau-can-lam-gi).
- **Giữa và cuối vụ:** cân mẫu khoảng mỗi tuần một lần để theo dõi tăng trưởng.
- **Khi có bất thường** (tôm chết, bỏ ăn, mưa lớn, đổi thời tiết): chài kiểm tra ngay.

Lịch cụ thể nên tham khảo kỹ thuật viên và điều chỉnh theo ao của mình; đồng thời ghi vào nhật ký ([nhật ký ao nuôi tôm ghi gì mỗi ngày](/vi/blog/nhat-ky-ao-nuoi-tom-ghi-gi-moi-ngay)).

## Dùng số liệu để chia ăn và lên kế hoạch thu hoạch
- **Chia ăn:** lượng ăn tính từ sinh khối ước tính và bảng cho ăn của nhà sản xuất thức ăn, rồi hiệu chỉnh theo sàng. Cách tính ở [cách tính lượng thức ăn cho tôm thẻ](/vi/blog/cach-tinh-luong-thuc-an-cho-tom-the).
- **Phát hiện hao hụt:** nếu số lượng ước giảm nhanh giữa hai lần chài, cần kiểm tra môi trường, bệnh. Tôm chết rải rác có thể tham khảo [tôm chết rải rác trong ao: nguyên nhân và cách xử lý](/vi/blog/tom-chet-rai-rac-trong-ao-nguyen-nhan-va-cach-xu-ly).
- **Dự kiến thu hoạch:** từ trọng lượng trung bình và tốc độ tăng trưởng, bà con ước thời điểm đạt cỡ mong muốn, tham khảo [tôm thẻ nuôi bao lâu thì thu hoạch](/vi/blog/tom-the-nuoi-bao-lau-thu-hoach).
- **Đánh giá mật độ ban đầu:** xem [mật độ thả tôm thẻ bao nhiêu là hợp lý](/vi/blog/mat-do-tha-tom-the-bao-nhieu-la-hop-ly).

Cần tư vấn cho ao của mình? Gọi hotline 1900 252 667 để kỹ thuật viên Thủy Sản Tím tư vấn miễn phí.

## Câu hỏi thường gặp

### Làm sao biết tỷ lệ sống của tôm trong ao?
Ước số tôm còn lại từ các mẻ chài (có hiệu chỉnh), rồi chia cho số tôm đã thả. Kết quả là ước tính nên cần chài nhiều điểm, lặp lại định kỳ và so xu hướng.

### Chài được bao nhiêu con thì suy ra ao có bấy nhiêu con?
Không suy trực tiếp được vì mẻ chài chỉ bắt một phần tôm trong diện tích lưới. Cần hệ số hiệu chỉnh do bà con tự xác định bằng kinh nghiệm hoặc nhờ kỹ thuật viên.

### Cân mẫu bao nhiêu con thì đủ?
Càng nhiều con và càng nhiều vị trí thì càng đại diện. Thông thường lấy từ vài chục đến khoảng một trăm con ngẫu nhiên, tránh chọn riêng con to hoặc nhỏ.

### Ước tính sản lượng có chính xác không?
Chỉ gần đúng, có sai số do chài, phân bố tôm và mẫu cân. Nên coi là khoảng tham khảo và đối chiếu với sản lượng thực sau thu hoạch để hiệu chỉnh.

### Bao lâu nên chài, cân mẫu một lần?
Thường cân mẫu khoảng mỗi tuần một lần, chài kiểm tra thêm khi thấy bất thường. Lịch cụ thể nên hỏi kỹ thuật viên và điều chỉnh theo tình hình ao.
`),
  },
];
