'use strict';
/**
 * Batch B of long-form farming guides: nutrition, feed and shrimp health.
 * Vietnamese only (en/zh fall back to vi). Same conventions as seed-posts.js:
 *   ## headings -> table of contents, "## Câu hỏi thường gặp" -> FAQ + FAQPage schema,
 *   **PRODUCT NAME** (exactly as in nhan/san-pham.json) -> automatic product link.
 */
const L = (vi, en, zh) => ({ vi, en, zh });

module.exports = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'bo-gan-cho-tom-khi-nao-can-dau-hieu-gan-tuy-yeu', topic: 'technique', daysAgo: 0.075,
    title: L('Bổ gan cho tôm: khi nào cần, dấu hiệu gan tụy yếu và cách dùng đúng'),
    excerpt: L('Gan tụy là "nhà máy" tiêu hóa và giải độc của tôm. Cách nhận biết gan tụy yếu, vai trò sorbitol, methionine, betaine và thời điểm bổ gan hợp lý trong vụ.'),
    body: L(
`Hỏi mười hộ nuôi tôm thì có đến tám, chín hộ đang trộn "thuốc bổ gan" vào thức ăn. Nhưng bổ gan lúc nào, bổ bao lâu, và vì sao có ao bổ suốt vụ mà gan vẫn xấu? Bài này giải thích ngắn gọn gan tụy của tôm làm việc gì, khi nào nó yếu đi, các hoạt chất thường gặp trong sản phẩm bổ gan có tác dụng gì, và cách dùng sao cho đáng đồng tiền.

## Gan tụy của tôm làm nhiệm vụ gì?
Gan tụy (hepatopancreas) nằm ở phần đầu ngực, ngay sau dạ dày. Đây là cơ quan làm nhiều việc nhất trong cơ thể tôm:

- **Tiết men tiêu hóa** để phân giải đạm, tinh bột và chất béo trong thức ăn.
- **Hấp thu và dự trữ** dinh dưỡng, nhất là chất béo và glycogen, làm "kho năng lượng" cho những lần lột xác.
- **Chuyển hóa và đào thải độc chất** từ thức ăn, từ môi trường (khí độc, độc tố tảo, nấm mốc) và từ các loại hóa chất, thuốc mà bà con sử dụng.
- **Tham gia miễn dịch**: khi gan tụy tổn thương, tôm dễ nhiễm khuẩn hơn hẳn.

Vì làm nhiều việc như vậy nên gan tụy cũng là cơ quan "lên tiếng" sớm nhất khi có vấn đề. Nhìn gan là biết được phần lớn tình trạng sức khỏe của ao tôm.

## Gan tụy khỏe và gan tụy yếu khác nhau thế nào?
Mỗi tuần nên bắt 10–20 con tôm ở nhá hoặc chài ở nhiều góc ao để quan sát. Dưới ánh sáng, gan tụy nằm dưới lớp vỏ đầu và có thể nhìn rõ.

| Đặc điểm | Gan tụy khỏe | Gan tụy có vấn đề |
|---|---|---|
| Màu sắc | Vàng nâu đến nâu sẫm, đều màu | Nhạt màu, vàng nhạt, trắng đục, hoặc đỏ, đen bất thường |
| Kích thước | To, đầy, chiếm gần hết khoang đầu | Teo nhỏ, có khoảng trống trong đầu; hoặc sưng to bất thường |
| Ranh giới | Rõ ràng, màng bao căng | Mờ, nhòe, có đốm hoặc vệt |
| Khi bóp nhẹ | Chắc, có độ đàn hồi | Mềm nhũn, chảy dịch, hoặc dai cứng |
| Đường ruột đi kèm | Ruột đầy, liên tục | Ruột rỗng, đứt khúc, phân lỏng |

Những dấu hiệu bên ngoài thường đi kèm khi gan yếu: tôm giảm ăn, nhá hết chậm, vỏ mỏng, lột xác không đều, tôm lờ đờ và màu thân nhợt. Nếu tôm chết rải rác ở đáy, gan teo trắng và ruột rỗng trong khoảng tháng đầu sau thả, bà con cần nghĩ đến bệnh và cho xét nghiệm ngay, đọc thêm phần dưới.

## Vì sao gan tụy tôm bị yếu?
Gan tụy hiếm khi yếu vì "thiếu thuốc bổ". Thường là do một hoặc nhiều nguyên nhân sau:

1. **Thức ăn**: cho ăn dư kéo dài, thức ăn kém chất lượng, ẩm mốc (độc tố nấm mốc gây hại gan rất rõ), hoặc thay đổi loại thức ăn đột ngột.
2. **Môi trường**: khí độc NH₃, NO₂, H₂S cao; tảo độc tàn; pH dao động mạnh; oxy thấp về đêm. Gan phải làm việc liên tục để xử lý độc chất.
3. **Hóa chất và thuốc**: dùng nhiều, dùng liên tục các loại thuốc, chất sát trùng hoặc kháng sinh không đúng chỉ định làm gan quá tải.
4. **Mầm bệnh**: vi khuẩn *Vibrio* (trong đó có chủng gây bệnh hoại tử gan tụy cấp AHPND), vi bào tử trùng EHP, và một số tác nhân khác tấn công trực tiếp vào gan tụy.
5. **Mật độ và stress**: nuôi dày, thời tiết thay đổi, lột xác đồng loạt khiến nhu cầu năng lượng và khả năng giải độc vượt quá sức gan.

Hiểu điều này để thấy: bổ gan chỉ là một phần, gốc rễ vẫn là quản lý thức ăn và môi trường.

## Sorbitol, methionine, betaine có tác dụng gì?
Đây là ba thành phần hay gặp nhất trong các sản phẩm bổ gan trộn thức ăn.

### Sorbitol
Sorbitol là một loại rượu đường. Trong dinh dưỡng thủy sản, sorbitol thường được dùng để hỗ trợ chuyển hóa, giúp gan làm việc nhẹ nhàng hơn và hỗ trợ tiêu hóa. Đây là thành phần "nền" của phần lớn sản phẩm bổ gan.

### Methionine
Methionine là axit amin thiết yếu chứa lưu huỳnh, tôm không tự tổng hợp được mà phải lấy từ thức ăn. Methionine tham gia tổng hợp đạm, và được biết đến với vai trò hỗ trợ chuyển hóa chất béo ở gan, hạn chế tích tụ mỡ bất thường.

### Betaine
Betaine là chất cho nhóm methyl, hỗ trợ cùng methionine trong các quá trình chuyển hóa ở gan. Betaine còn giúp tế bào giữ cân bằng áp suất thẩm thấu khi độ mặn thay đổi, và có mùi vị hấp dẫn nên giúp tôm bắt mồi tốt hơn.

Ba chất này bổ trợ cho nhau, vì vậy sản phẩm phối hợp cả ba thường tiện hơn mua lẻ từng loại.

## Khi nào nên bổ gan cho tôm?
Không cần đợi gan xấu mới bổ. Có thể chia làm hai chế độ:

### Bổ gan định kỳ (phòng)
- Từ khi tôm bắt đầu ăn mạnh (khoảng tuần thứ 2–3 sau thả) đến cuối vụ, trộn liều thấp mỗi ngày 1–2 cữ.
- Tăng cường trước và sau các đợt dùng hóa chất sát trùng, diệt tảo, hoặc sau khi xử lý bệnh.
- Tăng cường lúc giao mùa, mưa nhiều, nắng nóng kéo dài, khi tôm dễ stress.

### Bổ gan tăng cường (khi có dấu hiệu)
- Gan nhạt màu, teo nhẹ, ranh giới mờ nhưng tôm vẫn ăn.
- Sau đợt khí độc cao, tảo tàn, hoặc tôm bỏ ăn vài cữ rồi ăn lại.
- Dùng liều cao hơn trong 5–7 ngày rồi quay lại liều định kỳ, đồng thời tìm và xử lý nguyên nhân gốc.

## Gợi ý sản phẩm bổ gan của Thủy Sản Tím
**HEPALIVER-FS** là dạng nước bổ sung sorbitol, methionine, betaine vào thức ăn hằng ngày, giúp tôm bồi bổ gan, tiêu hóa tốt và hỗ trợ phục hồi, chuyển màu gan. Theo hướng dẫn trên nhãn:

- Dùng định kỳ: trộn 5 ml/kg thức ăn, cho ăn 2 lần/ngày, liên tục suốt vụ.
- Khi cần hỗ trợ: trộn 10 ml/kg thức ăn, cho ăn 3–4 lần/ngày, liên tục 5 ngày.
- Hòa với nước sạch một lượng vừa đủ, trộn đều lên thức ăn, để yên 15 phút rồi cho tôm ăn.

**LIVER - MAX** cũng bổ sung sorbitol, methionine, betaine nhưng có thể vừa trộn ăn vừa tạt trực tiếp xuống ao, tiện khi tôm giảm ăn mà bà con vẫn muốn hỗ trợ gan. Theo nhãn:

| Cách dùng | Định kỳ | Gan yếu, có dấu hiệu dịch bệnh |
|---|---|---|
| Tạt xuống ao | 1 lít/1.500 m³ nước, 5 ngày/lần | 1 lít/1.000 m³ nước, tạt liên tục 2 ngày |
| Trộn thức ăn | 10 ml/kg thức ăn, 3–4 lần/ngày | 20 ml/kg thức ăn, 2–3 lần/ngày |

Nên tạt vào lúc trời mát. Hai sản phẩm có thành phần tương tự nhau, bà con chọn một loại để dùng, không cần dùng chồng cả hai cùng lúc.

## Những sai lầm hay gặp khi bổ gan
- **Bổ gan mà không giảm ăn**: tôm gan yếu tiêu hóa kém, cho ăn như cũ chỉ làm dư thức ăn, bẩn đáy và gan càng quá tải. Khi gan xấu nên giảm 10–20% lượng ăn và theo dõi nhá.
- **Trộn quá nhiều thứ một lúc**: vi sinh, vitamin, khoáng, bổ gan, thuốc… trộn chung một cữ dễ làm thức ăn nhão, tan nhanh trong nước. Nên chia ra các cữ khác nhau. Xem thêm bài [cách trộn chế phẩm vào thức ăn đúng kỹ thuật](/vi/blog/cach-tron-thuoc-che-pham-vao-thuc-an-cho-tom).
- **Không có chất bao**: hoạt chất tan ra nước trước khi tôm kịp ăn. Nên áo bao sau khi trộn.
- **Chỉ bổ gan mà không tìm nguyên nhân**: nếu thức ăn mốc hay khí độc cao thì bổ bao nhiêu cũng không đủ.
- **Xem bổ gan là thuốc trị bệnh**: sản phẩm bổ gan là thức ăn bổ sung, giúp hỗ trợ chức năng gan, không thay thế chẩn đoán và xử lý bệnh.

## Khi nào phải xét nghiệm thay vì chỉ bổ gan?
Bà con nên lấy mẫu tôm gửi phòng xét nghiệm hoặc nhờ kỹ thuật viên kiểm tra khi thấy:

- Tôm chết rải rác hoặc chết tăng dần, nhất là trong 10–45 ngày đầu sau thả.
- Gan teo nhanh, trắng nhợt, ruột rỗng ở nhiều con cùng lúc.
- Tôm chậm lớn, phân đàn rõ dù đã chỉnh thức ăn và môi trường.
- Bổ gan tăng cường 5–7 ngày mà gan không cải thiện.

Xét nghiệm PCR giúp xác định có hay không các tác nhân như AHPND, EHP, đốm trắng. Biết đúng bệnh mới có hướng xử lý đúng. Đọc thêm: [bệnh gan tụy trên tôm thẻ: dấu hiệu và cách phòng](/vi/blog/benh-gan-tuy-tren-tom-the-dau-hieu-nguyen-nhan-phong-ngua).

## Câu hỏi thường gặp

### Có nên bổ gan cho tôm suốt vụ không?
Có thể dùng liều định kỳ suốt vụ, nhất là ao nuôi mật độ cao. Liều thấp mỗi ngày giúp gan luôn được hỗ trợ; liều cao chỉ dùng từng đợt ngắn khi tôm có dấu hiệu gan yếu hoặc sau các đợt dùng hóa chất.

### Gan tôm màu gì là khỏe?
Gan khỏe thường có màu vàng nâu đến nâu sẫm, đều màu, to, đầy và ranh giới rõ. Gan nhạt màu, trắng, teo nhỏ hoặc mềm nhũn là dấu hiệu cần chú ý.

### Bổ gan có chữa được bệnh hoại tử gan tụy không?
Không. Sản phẩm bổ gan là thức ăn bổ sung, giúp hỗ trợ chức năng gan và sức khỏe chung. Khi nghi bệnh, bà con cần xét nghiệm PCR và làm theo hướng dẫn của kỹ thuật viên hoặc cán bộ thú y.

### Trộn bổ gan chung với men vi sinh được không?
Thường được, nhưng không nên trộn quá nhiều chế phẩm vào cùng một cữ. Đọc kỹ nhãn từng sản phẩm, và không trộn vi sinh chung với kháng sinh hay axit hữu cơ.

### Bao lâu thì thấy gan tôm cải thiện?
Còn tùy nguyên nhân. Nếu đã xử lý được gốc (giảm ăn, cải thiện nước) và bổ gan đều đặn, thường sau vài ngày đến một tuần sẽ thấy màu gan và sức ăn thay đổi. Nếu không cải thiện, nên xét nghiệm.`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'axit-amin-va-dam-bo-sung-cho-tom-tac-dung-cach-tron', topic: 'technique', daysAgo: 0.225,
    title: L('Axit amin và đạm bổ sung cho tôm: tác dụng thật và cách trộn đúng'),
    excerpt: L('Axit amin thiết yếu quyết định tôm lớn nhanh hay chậm. Bài viết giải thích vai trò của đạm, axit amin, khi nào nên bổ sung và cách trộn vào thức ăn cho tôm thẻ.'),
    body: L(
`Đạm (protein) là thành phần đắt nhất trong thức ăn tôm, và cũng là thứ quyết định tôm lớn nhanh hay chậm. Nhưng tôm không dùng "đạm" nguyên khối: nó phân giải đạm thành các axit amin rồi lắp ráp lại thành thịt, vỏ, men tiêu hóa. Hiểu được chuyện này, bà con sẽ biết lúc nào cần bổ sung đạm và axit amin, lúc nào không cần.

## Đạm và axit amin khác nhau thế nào?
Có thể hình dung đạm là một bức tường, còn axit amin là từng viên gạch. Tôm ăn đạm vào, men tiêu hóa ở gan tụy cắt đạm thành axit amin, axit amin được hấp thu qua ruột rồi dùng để:

- Xây dựng cơ thịt, giúp tôm tăng trọng.
- Tạo men tiêu hóa, hormone, kháng thể.
- Tổng hợp lớp vỏ mới sau mỗi lần lột xác.
- Làm nguồn năng lượng khi thiếu tinh bột và chất béo (đây là cách dùng đạm "lãng phí" nhất).

Có khoảng 20 loại axit amin, trong đó khoảng 10 loại tôm **không tự tổng hợp được**, gọi là axit amin thiết yếu: arginine, histidine, isoleucine, leucine, lysine, methionine, phenylalanine, threonine, tryptophan và valine. Thiếu bất kỳ loại nào, tôm cũng không tận dụng hết phần đạm còn lại, giống như xây tường thiếu một loại gạch thì phải dừng.

## Vai trò của một số axit amin quan trọng
| Axit amin | Vai trò chính đối với tôm |
|---|---|
| Lysine | Tổng hợp cơ thịt, thường là axit amin "thiếu trước tiên" khi thức ăn dùng nhiều đạm thực vật |
| Methionine | Tổng hợp đạm, hỗ trợ chuyển hóa chất béo ở gan |
| Arginine | Tham gia chuyển hóa năng lượng, liên quan đến quá trình lột xác |
| Threonine | Cấu tạo chất nhầy bảo vệ niêm mạc ruột |
| Tryptophan | Tham gia điều hòa hành vi ăn, giảm stress |
| Glycine, alanine, glutamate (không thiết yếu) | Tạo vị, kích thích tôm bắt mồi |

Một điểm hay bị bỏ qua: các axit amin tự do và peptide nhỏ có mùi vị rất hấp dẫn với tôm. Đó là lý do đạm cá, dịch thủy phân cá hay dịch mực thường được dùng làm "chất dẫn dụ" giúp tôm bắt mồi nhanh.

## Khi nào tôm cần bổ sung đạm và axit amin?
Thức ăn công nghiệp chất lượng tốt đã được cân đối axit amin cho từng giai đoạn. Vì vậy bổ sung không phải lúc nào cũng cần. Những trường hợp nên cân nhắc:

1. **Tôm bắt mồi kém, ăn chậm** dù môi trường ổn định: bổ sung đạm có mùi tanh giúp kích thích ăn.
2. **Sau lột xác**: tôm cần nhiều đạm và khoáng để tạo vỏ mới, phục hồi nhanh.
3. **Tôm yếu sau stress**: sau mưa lớn, sau xử lý hóa chất, sau đợt bệnh, tôm ăn ít nên mỗi viên thức ăn cần "giàu dinh dưỡng" hơn.
4. **Tôm chậm lớn, mềm vỏ** mà đã loại trừ được nguyên nhân bệnh và môi trường.
5. **Giai đoạn cuối vụ** muốn tôm tăng trọng nhanh, thịt chắc trước khi thu.

Những trường hợp **không nên** tăng đạm: khi đáy ao dơ, khí độc NH₃/NO₂ đang cao, tảo dày. Đạm dư phân hủy thành amoni, làm nước càng xấu.

## Bổ sung đạm có làm tăng khí độc không?
Có, nếu dùng sai. Đạm tôm không hấp thu được sẽ thải ra dưới dạng amoni qua mang và phân. Thức ăn thừa giàu đạm chìm xuống đáy cũng phân hủy thành NH₃, NO₂. Vì vậy nguyên tắc là:

- Chỉ bổ sung khi tôm ăn tốt, nhá hết đúng giờ.
- Không bổ sung khi đang giảm ăn vì môi trường xấu.
- Kết hợp men tiêu hóa để tôm hấp thu tốt hơn, giảm phần thải ra.
- Theo dõi NH₃ và NO₂ 2 lần/tuần trong thời gian bổ sung.

## Cách trộn đạm, axit amin vào thức ăn cho tôm
Các sản phẩm đạm, axit amin dạng nước rất dễ trộn. Quy trình chung:

1. **Tính lượng thức ăn của cữ cần trộn** (không trộn cả ngày một lần).
2. **Hòa sản phẩm với nước sạch**: tổng lượng nước pha chỉ khoảng đủ thấm đều thức ăn, không làm thức ăn nhão. Kinh nghiệm thường dùng khoảng 30–50 ml dung dịch cho mỗi kg thức ăn viên, điều chỉnh theo cỡ viên.
3. **Rưới đều lên thức ăn**, đảo nhẹ tay để viên không vỡ.
4. **Để yên 15–30 phút ở nơi thoáng mát** cho thấm, không phơi nắng.
5. **Áo bao** bằng chất kết dính hoặc dầu mực để giữ hoạt chất không tan nhanh trong nước.
6. **Cho ăn trong ngày**, không trộn sẵn để qua đêm.

Chi tiết hơn về chất bao và thời gian để khô có trong bài [cách trộn thuốc, chế phẩm vào thức ăn đúng kỹ thuật](/vi/blog/cach-tron-thuoc-che-pham-vao-thuc-an-cho-tom).

## AMIN CARE: đạm cá và axit amin dạng nước
**AMIN CARE** của Thủy Sản Tím là sản phẩm bổ sung đạm cá và axit amin thiết yếu cho tôm, cá, với hàm lượng protein tối thiểu 25%. Theo công bố của sản phẩm, AMIN CARE giúp tôm ham ăn, chóng lớn, bắt mồi nhanh nhờ mùi tanh hấp dẫn; đồng thời hỗ trợ tăng đề kháng, tăng hấp thụ dinh dưỡng, hạn chế mềm vỏ, chậm lớn, bắt mồi kém.

Về liều dùng, bà con làm theo hướng dẫn in trên nhãn chai hoặc hỏi kỹ thuật viên của cửa hàng, vì liều có thể khác nhau theo giai đoạn tôm và mục đích sử dụng.

Một cách kết hợp hợp lý: trộn đạm, axit amin vào 1–2 cữ chính trong ngày (cữ sáng và chiều, khi tôm ăn mạnh nhất), còn men tiêu hóa, bổ gan chia sang các cữ khác để thức ăn không bị quá ướt.

## Kết hợp với thức ăn như thế nào cho hiệu quả?
- **Chọn thức ăn đúng độ đạm theo cỡ tôm**: tôm nhỏ cần thức ăn đạm cao hơn tôm lớn. Bổ sung không thay thế được việc chọn đúng thức ăn.
- **Bảo quản thức ăn tốt**: thức ăn ẩm mốc làm hỏng đạm và sinh độc tố. Kê cao, để nơi khô, dùng hết bao đã mở trong vài ngày.
- **Không cho ăn dư**: cho ăn theo nhá, xem bài [cách đọc nhá và điều chỉnh lượng ăn](/vi/blog/cach-doc-nha-sang-an-dieu-chinh-luong-an-tom-the).
- **Bổ sung khoáng song song**: đạm và khoáng cùng cần cho quá trình tạo vỏ. Thiếu khoáng, tôm vẫn mềm vỏ dù ăn đủ đạm.
- **Giữ gan và ruột khỏe**: men tiêu hóa ở gan tụy là thứ cắt đạm thành axit amin. Gan yếu thì đạm có nhiều cũng không hấp thu hết.

## Dấu hiệu cho thấy bổ sung đang có hiệu quả
Không có con số chung cho mọi ao, nhưng bà con có thể tự theo dõi:

- Tôm vào nhá nhanh hơn, nhá hết sớm hơn so với trước.
- Phân tôm dài, liền, màu theo thức ăn.
- Vỏ cứng lại nhanh sau lột, ít con mềm vỏ.
- Trọng lượng trung bình qua các lần cân mẫu (mỗi 7–10 ngày) tăng đều.

Nếu đã bổ sung mà các chỉ tiêu này không thay đổi, nguyên nhân thường nằm ở chỗ khác: giống, bệnh, môi trường. Tham khảo bài [tôm chậm lớn, lớn không đều: 8 nguyên nhân](/vi/blog/tom-cham-lon-lon-khong-deu-8-nguyen-nhan-cach-khac-phuc).

## Câu hỏi thường gặp

### Thức ăn công nghiệp đã đủ đạm, có cần bổ sung axit amin không?
Thức ăn tốt thường đã đủ cho tôm khỏe trong điều kiện bình thường. Bổ sung hữu ích khi tôm bắt mồi kém, sau lột xác, sau stress hoặc khi muốn tôm tăng trọng nhanh giai đoạn cuối.

### Bổ sung đạm có làm nước ao dơ không?
Có thể, nếu tôm ăn không hết hoặc tiêu hóa kém. Chỉ bổ sung khi tôm ăn tốt, cho ăn theo nhá và theo dõi khí độc thường xuyên.

### Trộn đạm cá xong để bao lâu thì cho tôm ăn?
Thường để 15–30 phút ở nơi mát cho thấm, áo bao rồi cho ăn trong ngày. Không phơi nắng và không để qua đêm.

### Dùng AMIN CARE với liều bao nhiêu?
Bà con dùng theo hướng dẫn in trên nhãn sản phẩm hoặc hỏi kỹ thuật viên Thủy Sản Tím để được tư vấn liều phù hợp giai đoạn nuôi.

### Có thể tự dùng dịch cá, ruột cá để trộn cho tôm không?
Không nên. Nguyên liệu tự làm khó kiểm soát vệ sinh, dễ mang mầm bệnh và nhanh hỏng, có thể gây hại cho tôm hơn là có lợi.`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'men-tieu-hoa-loi-khuan-tron-thuc-an-cho-tom', topic: 'technique', daysAgo: 0.375,
    title: L('Men tiêu hóa, lợi khuẩn trộn thức ăn cho tôm: cách trộn và bảo quản'),
    excerpt: L('Trộn men tiêu hóa sai cách khiến lợi khuẩn chết trước khi vào ruột tôm. Hướng dẫn chọn dạng bột hay nước, cách trộn, áo bao, bảo quản để men phát huy tác dụng.'),
    body: L(
`Men tiêu hóa (lợi khuẩn trộn ăn) gần như là món "bắt buộc" trong ao tôm thẻ hiện nay. Vậy mà rất nhiều ao trộn men đều đặn vẫn bị phân lỏng, ruột rỗng. Một phần lớn nguyên nhân nằm ở khâu trộn và bảo quản: lợi khuẩn chết hoặc trôi mất trước khi vào được ruột tôm. Bài này hướng dẫn cụ thể từng bước.

## Men tiêu hóa giúp gì cho tôm?
Đường ruột tôm luôn có cả vi khuẩn có lợi và vi khuẩn có hại (như *Vibrio*). Khi cân bằng nghiêng về phía có hại, tôm tiêu hóa kém, phân lỏng, dễ mắc bệnh đường ruột. Bổ sung lợi khuẩn hằng ngày giúp:

- **Cạnh tranh chỗ bám và dinh dưỡng** với vi khuẩn có hại trong ruột.
- **Tiết thêm men** (protease, amylase, lipase) hỗ trợ phân giải thức ăn.
- **Tăng hấp thu dinh dưỡng**, nhờ vậy giảm phần thức ăn thải ra, góp phần giảm FCR.
- **Ổn định đường ruột** khi thời tiết, thức ăn hoặc môi trường thay đổi.

Lưu ý: men trộn ăn tác động bên trong ruột tôm, khác với vi sinh xử lý nước, đáy ao. Hai loại bổ sung cho nhau chứ không thay thế nhau.

## Các dòng lợi khuẩn thường dùng
| Nhóm vi khuẩn | Đặc điểm |
|---|---|
| *Bacillus* (subtilis, licheniformis, megaterium…) | Có khả năng tạo bào tử nên bền với nhiệt, khô, dễ bảo quản; tiết nhiều men tiêu hóa |
| *Lactobacillus* (vi khuẩn lactic) | Tạo axit lactic, giúp ổn định môi trường ruột; kém bền hơn với nhiệt |
| Nấm men (*Saccharomyces*) | Cung cấp dinh dưỡng, vách tế bào chứa beta-glucan |

Phần lớn men trộn ăn cho tôm ở Việt Nam dùng nhóm *Bacillus* vì dễ bảo quản trong điều kiện nóng ẩm.

## Dạng bột hay dạng nước: chọn loại nào?
- **Dạng bột**: dễ vận chuyển, bảo quản lâu, cân liều chính xác. Cần hòa với nước trước khi trộn.
- **Dạng nước**: hòa nhanh, thấm đều lên thức ăn, tiện khi trộn nhiều cữ trong ngày. Cần để nơi mát, tránh nắng.

Thủy Sản Tím có cả hai dạng:

**US LACTO** (dạng bột) bổ sung lợi khuẩn *Bacillus* (licheniformis, megaterium, subtilis) vào thức ăn, giúp tôm tiêu hóa và hấp thụ thức ăn tốt, cải thiện đường ruột, hỗ trợ giảm FCR. Theo nhãn:
- Dùng hằng ngày: trộn 5 g/kg thức ăn, cho ăn 2–3 lần/ngày, suốt vụ nuôi.
- Khi có dấu hiệu phân trắng, phân lỏng, phân đứt khúc: trộn 10–15 g/kg thức ăn, 2–3 lần/ngày.
- Hòa tan với nước sạch, trộn đều lên thức ăn, để yên 15 phút rồi cho tôm ăn.

**BIOTIC 99** (dạng nước) bổ sung lợi khuẩn *Bacillus* vào thức ăn với cùng mục đích. Theo nhãn:
- Dùng hằng ngày: 3 ml/kg thức ăn, trộn 3–4 lần/ngày, liên tục suốt vụ.
- Khi có dấu hiệu bệnh đường ruột: 5–10 ml/kg thức ăn, 3–4 lần/ngày, liên tục 5 ngày.
- Không dùng chung với axit hữu cơ và kháng sinh.

Bà con chọn một trong hai tùy thói quen, không cần dùng chồng.

## Cách trộn men tiêu hóa vào thức ăn từng bước
1. **Cân thức ăn cho đúng cữ**. Chỉ trộn lượng cho 1 cữ hoặc tối đa cho các cữ trong buổi.
2. **Tính liều men theo kg thức ăn**, không theo diện tích ao. Ví dụ cữ 20 kg thức ăn, men bột dùng 5 g/kg thì cần 100 g.
3. **Hòa men với nước sạch** (nước giếng, nước máy để lắng, không dùng nước có chlorine dư). Lượng nước vừa đủ thấm đều thức ăn, thường khoảng 30–50 ml/kg thức ăn.
4. **Rưới hoặc phun đều** lên thức ăn trải mỏng trên bạt sạch, đảo nhẹ.
5. **Để yên 15 phút** ở chỗ mát để men thấm vào viên.
6. **Áo bao** nếu ao có dòng chảy mạnh hoặc viên thức ăn nhỏ dễ rã.
7. **Cho ăn ngay trong buổi**.

## Áo bao: có cần không và dùng gì?
Viên thức ăn ngấm nước rồi rơi xuống ao, men trên bề mặt dễ bị rửa trôi trước khi tôm kịp ăn. Áo bao tạo một lớp màng mỏng giữ men lại. Các loại hay dùng:

- **Chất kết dính chuyên dùng** dạng bột hoặc nước: tiện, ít mùi, ít ảnh hưởng nước.
- **Dầu mực, dầu cá**: vừa bao vừa dẫn dụ, nhưng dùng nhiều dễ gây váng dầu, nên dùng lượng ít.
- **Gelatin pha loãng**: một số hộ dùng, cần pha đúng tỷ lệ để không làm dính cục.

Trình tự đúng: **trộn men trước, để thấm, rồi mới áo bao**. Áo bao trước sẽ khiến men không thấm vào viên.

## Những điều làm chết lợi khuẩn khi trộn
- **Trộn chung với kháng sinh, thuốc sát trùng, axit hữu cơ** trong cùng cữ. Nếu đang dùng các chất này theo chỉ định, nên trộn ở cữ khác, cách xa nhau.
- **Phơi nắng** thức ăn sau khi trộn. Nhiệt và tia UV làm giảm lượng vi khuẩn sống.
- **Nước pha nóng hoặc có chlorine**.
- **Trộn sẵn để qua đêm**: thức ăn ẩm qua đêm dễ lên men lạ, mốc.
- **Pha với mật đường rồi ủ lâu** như cách ủ vi sinh xử lý nước: không cần thiết với men trộn ăn, trừ khi nhãn hướng dẫn.

## Bảo quản men tiêu hóa đúng cách
| Việc nên làm | Việc không nên làm |
|---|---|
| Để nơi khô ráo, thoáng mát, tránh nắng trực tiếp | Để trong nhà kho sát mái tôn nóng |
| Đóng kín miệng gói, nắp chai sau mỗi lần dùng | Để gói mở toang gần nơi ẩm, gần hóa chất |
| Dùng hết trong thời hạn ghi trên bao bì | Dùng men đã vón cục, đổi màu, có mùi lạ |
| Để cách xa chất sát trùng, vôi, thuốc | Để chung kệ với chlorine, BKC, thuốc tím |

Ở trại, nên có một thùng nhựa có nắp riêng để đựng men, đặt trong phòng mát, kê cao khỏi nền.

## Dùng men tiêu hóa thế nào cho có hiệu quả?
- **Dùng đều đặn** mỗi ngày ngay từ đầu vụ, không đợi tôm bệnh mới dùng. Hệ vi sinh đường ruột cần được duy trì liên tục.
- **Tăng liều** theo nhãn khi thời tiết thay đổi, sau khi dùng hóa chất, hoặc khi phân lỏng.
- **Kiểm tra đường ruột** tôm mỗi tuần 2 lần: ruột đầy, phân dài là dấu hiệu tốt. Xem thêm [tôm bị đường ruột: nguyên nhân, kiểm tra, phòng](/vi/blog/tom-bi-duong-ruot-ruot-long-dut-khuc-nguyen-nhan-cach-phong).
- **Kết hợp quản lý môi trường**: men tốt cũng không bù được cho đáy ao dơ, khí độc cao.

Bà con cũng có thể đọc bài [dùng men vi sinh đúng cách](/vi/blog/dung-men-vi-sinh-dung-cach) để phân biệt rõ men trộn ăn và vi sinh xử lý nước.

## Câu hỏi thường gặp

### Men tiêu hóa trộn xong có cần ủ không?
Phần lớn men trộn ăn chỉ cần hòa nước, trộn đều và để yên khoảng 15 phút cho thấm. Không cần ủ với mật đường như vi sinh xử lý nước, trừ khi nhãn sản phẩm hướng dẫn khác.

### Trộn men vi sinh chung với thuốc kháng sinh được không?
Không nên. Kháng sinh và các chất sát khuẩn làm chết lợi khuẩn. Nếu đang dùng thuốc theo chỉ định của cán bộ thú y, hãy trộn men ở cữ khác và tiếp tục dùng men sau khi kết thúc đợt thuốc.

### Nên trộn men vào mấy cữ mỗi ngày?
Tùy sản phẩm. Ví dụ US LACTO hướng dẫn cho ăn 2–3 lần/ngày, BIOTIC 99 hướng dẫn 3–4 lần/ngày. Bà con làm theo nhãn của sản phẩm đang dùng.

### Men dạng bột bị vón cục còn dùng được không?
Men vón cục thường là do bị ẩm, chất lượng có thể đã giảm. Nếu có mùi lạ hoặc đổi màu thì không nên dùng.

### Dùng men tiêu hóa có giảm được FCR không?
Lợi khuẩn hỗ trợ tôm tiêu hóa và hấp thu thức ăn tốt hơn, nhờ đó góp phần giảm FCR. Tuy nhiên FCR còn phụ thuộc nhiều vào cách cho ăn, chất lượng thức ăn, môi trường và sức khỏe tôm.`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'khoang-tron-thuc-an-va-khoang-tat-ao-khac-nhau-the-nao', topic: 'technique', daysAgo: 0.525,
    title: L('Khoáng trộn thức ăn và khoáng tạt ao cho tôm: khác nhau thế nào?'),
    excerpt: L('Khoáng tạt ao và khoáng trộn ăn đều cần nhưng không thay thế nhau. Cách phân biệt, dấu hiệu tôm thiếu khoáng và thời điểm nên dùng từng loại trong ao tôm thẻ.'),
    body: L(
`Tôm thẻ lột xác liên tục suốt vụ, mỗi lần lột là một lần phải "xây lại" lớp vỏ mới từ khoáng chất. Thiếu khoáng, tôm mềm vỏ, cong thân, đục cơ, lột không ra. Trên thị trường có hai nhóm sản phẩm: khoáng tạt xuống ao và khoáng trộn vào thức ăn. Nhiều bà con hỏi: dùng một loại có đủ không, hay phải dùng cả hai? Bài này giải thích rõ.

## Tôm cần những khoáng chất nào?
Khoáng chia thành hai nhóm:

- **Khoáng đa lượng**: canxi (Ca), magie (Mg), kali (K), natri (Na), phốt pho (P), clo (Cl). Tôm cần với lượng lớn, tham gia tạo vỏ, điều hòa áp suất thẩm thấu, hoạt động cơ và thần kinh.
- **Khoáng vi lượng**: kẽm, đồng, sắt, mangan, selen… Tôm cần lượng rất nhỏ, chủ yếu tham gia cấu tạo men và hệ miễn dịch.

| Khoáng | Vai trò chính | Tôm lấy từ đâu là chủ yếu |
|---|---|---|
| Canxi (Ca) | Thành phần chính của vỏ, đông cứng vỏ sau lột | Nước (qua mang) và thức ăn |
| Magie (Mg) | Tham gia hoạt động men, cơ, quá trình lột xác | Nước và thức ăn |
| Kali (K) | Điều hòa áp suất thẩm thấu, hoạt động cơ | Nước và thức ăn |
| Phốt pho (P) | Tạo vỏ cùng canxi, chuyển hóa năng lượng | Thức ăn là chủ yếu (nước thường rất ít) |
| Vi lượng (Zn, Cu, Mn…) | Cấu tạo men, miễn dịch | Thức ăn |

Trong nước biển tự nhiên, tỷ lệ Mg, Ca, K khá cân đối. Ở ao nuôi độ mặn thấp (dưới 10‰), ao pha nước ngọt hoặc vùng nước lợ nhạt nội đồng ở Đồng bằng sông Cửu Long, nước thường **thiếu kali và magie** so với nhu cầu của tôm, dù độ mặn đo được vẫn ổn.

## Dấu hiệu tôm thiếu khoáng
- Tôm mềm vỏ, vỏ mỏng, lâu cứng lại sau lột (quá 1–2 ngày vẫn còn mềm).
- Cong thân, đục cơ ở đốt bụng, nhất là phần đuôi.
- Lột xác không hoàn toàn, vỏ cũ dính lại ở đuôi hoặc chân.
- Tôm lột không đồng đều, chậm lớn.
- Vỏ sần, có nếp nhăn, màu nhợt.

Lưu ý: mềm vỏ, cong thân cũng có thể do nhiệt độ cao, oxy thấp, sốc môi trường hoặc bệnh. Xem thêm [tôm mềm vỏ, chậm lột xác: nguyên nhân và cách xử lý](/vi/blog/tom-mem-vo-cham-lot-xac-nguyen-nhan-cach-xu-ly).

## Khoáng tạt ao: tác dụng và khi nào dùng
Khoáng tạt hòa tan vào nước, làm tăng hàm lượng khoáng trong môi trường. Tôm hấp thu chủ yếu qua mang và qua bề mặt cơ thể, đặc biệt mạnh trong thời gian ngay sau lột xác khi vỏ mới đang cứng lại.

**Ưu điểm:**
- Tác động cả ao, kể cả những con đang lột, bỏ ăn.
- Một số loại khoáng tạt chứa gốc carbonate còn góp phần nâng và ổn định độ kiềm.
- Hỗ trợ ổn định môi trường cho tảo phát triển.

**Nhược điểm:**
- Một phần khoáng bị kết tủa, lắng xuống đáy hoặc bị tảo sử dụng.
- Tốn lượng lớn, nhất là ao rộng, nước sâu.
- Ao thay nước nhiều thì khoáng mất theo nước.

**Khi nào nên tạt khoáng:**
- Định kỳ suốt vụ, đặc biệt ao độ mặn thấp.
- Sau mưa lớn (nước mưa pha loãng khoáng và làm giảm kiềm).
- Khi tôm chuẩn bị lột đồng loạt (thường theo con nước, khoảng rằm và đầu tháng âm lịch) hoặc vừa lột xong.
- Khi kiềm giảm thấp.

**MIX 79** là khoáng tạt ao của Thủy Sản Tím, bổ sung P (dạng CaHPO₄), Ca (dạng CaCO₃) và Mg (dạng MgO) vào môi trường, giúp tôm lột xác đúng chu kỳ, tạo vỏ nhanh, vỏ cứng, thịt săn chắc. Theo nhãn:

| Mục đích | Liều dùng |
|---|---|
| Định kỳ | 5 kg/3.000 m³ nước, 2 ngày/lần |
| Tăng độ kiềm | 5 kg/1.500 m³ nước, dùng liên tục 2 ngày |
| Tôm cần cứng vỏ nhanh | 3 kg/2.000 m³ nước, dùng liên tục 2 ngày |

Hòa với nước một lượng vừa đủ rồi tạt đều khắp ao, nên dùng vào lúc chiều tối vì tôm thường lột xác về đêm.

## Khoáng trộn thức ăn: tác dụng và khi nào dùng
Khoáng trộn ăn đi vào đường tiêu hóa và được hấp thu qua ruột. Nhóm này đặc biệt có ý nghĩa với các khoáng tôm lấy chủ yếu từ thức ăn như phốt pho, vi lượng, và với ao mà nước thiếu kali, magie.

**Ưu điểm:**
- Lượng dùng ít, tính theo kg thức ăn nên chi phí ổn định, không phụ thuộc thể tích ao.
- Khoáng đi thẳng vào cơ thể tôm, không bị tảo và đáy ao "chia phần".
- Không làm thay đổi đột ngột các chỉ tiêu nước.

**Nhược điểm:**
- Chỉ những con ăn mới nhận được. Tôm đang lột, đang yếu bỏ ăn thì không hấp thu.
- Dễ tan ra nước nếu không áo bao.

**Khi nào nên trộn khoáng:**
- Hằng ngày ở ao độ mặn thấp, ao lót bạt ít trao đổi với nền đất.
- Khi tôm có biểu hiện cong thân, đục cơ, mềm vỏ, khó lột.
- Giai đoạn tôm lớn (từ khoảng tháng thứ hai), khi nhu cầu tạo vỏ tăng mạnh.

**PREMIX ORA** là khoáng trộn thức ăn dạng nước, bổ sung kali (dạng KCl) và magie (dạng MgCl₂) vào thức ăn hằng ngày, hỗ trợ quá trình lột xác và tạo vỏ, giúp tôm cứng vỏ nhanh, lột xác đúng chu kỳ, hỗ trợ cải thiện cong thân, đục cơ, mềm vỏ, khó lột. Về liều, bà con dùng theo hướng dẫn in trên nhãn chai hoặc hỏi kỹ thuật viên cửa hàng.

## So sánh nhanh hai loại khoáng
| Tiêu chí | Khoáng tạt ao | Khoáng trộn ăn |
|---|---|---|
| Đường hấp thu | Qua mang, bề mặt cơ thể | Qua đường ruột |
| Tác động | Cả ao, kể cả tôm bỏ ăn | Chỉ tôm có ăn |
| Ảnh hưởng nước | Có, có thể nâng kiềm | Gần như không |
| Lượng dùng | Theo thể tích nước, khá lớn | Theo kg thức ăn, ít |
| Thời điểm tốt | Chiều tối, trước và sau lột | Các cữ ăn chính trong ngày |
| Phù hợp nhất | Ao độ mặn thấp, sau mưa, kiềm thấp | Tôm cong thân, đục cơ, mềm vỏ, ao bạt |

## Có nên dùng cả hai loại không?
Với ao nuôi thâm canh, nhất là ao độ mặn thấp, câu trả lời thường là **có**. Khoáng tạt giữ cho môi trường đủ khoáng nền, khoáng trộn ăn bổ sung trực tiếp cho những con đang ăn tốt. Một lịch tham khảo:

- **Tháng đầu**: tạt khoáng định kỳ, chưa cần trộn khoáng nếu tôm khỏe và môi trường ổn.
- **Từ tháng thứ hai**: tạt khoáng định kỳ + trộn khoáng 1 cữ/ngày.
- **Trước và sau lột đồng loạt, sau mưa**: tăng cường tạt khoáng vào chiều tối; vẫn duy trì trộn khoáng.
- **Khi tôm cong thân, đục cơ**: kiểm tra nhiệt độ, oxy trước; sau đó tăng khoáng cả hai đường và theo dõi 3–5 ngày.

## Những lưu ý để dùng khoáng hiệu quả
- **Đo kiềm, độ mặn thường xuyên**: kiềm ổn định giúp khoáng phát huy tác dụng. Xem [cách tăng kiềm, ổn định pH ao nuôi tôm](/vi/blog/cach-tang-kiem-on-dinh-ph-ao-nuoi-tom).
- **Không tạt khoáng cùng lúc với vôi liều cao, hóa chất diệt tảo**: các phản ứng có thể làm giảm hiệu quả. Nên cách nhau vài giờ hoặc ngày khác.
- **Hòa tan kỹ trước khi tạt**: khoáng vón cục rơi xuống đáy không có tác dụng.
- **Trộn khoáng ở cữ riêng** nếu đã trộn nhiều chế phẩm khác, để thức ăn không quá ướt. Xem [cách trộn chế phẩm vào thức ăn đúng kỹ thuật](/vi/blog/cach-tron-thuoc-che-pham-vao-thuc-an-cho-tom).
- **Khoáng không thay thế đạm**: tạo vỏ cần cả đạm và khoáng, tôm ăn kém thì bổ khoáng bao nhiêu cũng chậm cứng vỏ.

## Câu hỏi thường gặp

### Ao nước mặn cao có cần bổ sung khoáng không?
Ao độ mặn cao thường ít thiếu khoáng hơn, nhưng khi nuôi mật độ dày, tôm lột liên tục và tảo dùng khoáng nhiều, bổ sung định kỳ vẫn có lợi. Nên đo kiềm thường xuyên để quyết định.

### Tạt khoáng lúc nào trong ngày là tốt nhất?
Nên tạt vào chiều tối vì tôm thường lột xác về đêm, lúc đó nhu cầu khoáng cao nhất. Nhãn MIX 79 cũng khuyến cáo dùng vào lúc chiều tối.

### Dùng khoáng trộn ăn rồi có cần tạt khoáng nữa không?
Ở ao độ mặn thấp hoặc sau mưa, nên dùng cả hai. Khoáng trộn ăn chỉ đến được tôm có ăn, còn khoáng tạt hỗ trợ cả những con đang lột và bỏ ăn.

### Tôm cong thân có phải luôn do thiếu khoáng?
Không. Cong thân, đục cơ còn có thể do nhiệt độ cao, oxy thấp, sốc môi trường hay bệnh. Cần kiểm tra các chỉ tiêu nước trước rồi mới tăng khoáng.

### Liều PREMIX ORA là bao nhiêu?
Bà con dùng theo hướng dẫn in trên nhãn sản phẩm hoặc liên hệ kỹ thuật viên Thủy Sản Tím để được tư vấn theo giai đoạn nuôi.`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'tom-bi-duong-ruot-ruot-long-dut-khuc-nguyen-nhan-cach-phong', topic: 'disease', daysAgo: 0.675,
    title: L('Tôm bị đường ruột (ruột lỏng, đứt khúc, rỗng): nguyên nhân, cách phòng'),
    excerpt: L('Ruột lỏng, đứt khúc, ruột rỗng là dấu hiệu sớm của nhiều vấn đề ở ao tôm. Cách kiểm tra đường ruột, các nguyên nhân thường gặp và biện pháp phòng ngừa hiệu quả.'),
    body: L(
`Đường ruột là "tấm gương" phản chiếu sức khỏe của tôm. Một con tôm khỏe luôn có đường ruột đầy, liên tục, màu theo thức ăn. Khi ruột bắt đầu lỏng, đứt khúc hay rỗng, đó thường là cảnh báo sớm trước khi tôm giảm ăn, phân trắng hay chết rải rác. Bài viết này giúp bà con nhận biết các dạng bệnh đường ruột, tìm nguyên nhân và phòng ngừa từ sớm.

## Đường ruột tôm khỏe trông như thế nào?
Đặt tôm lên lòng bàn tay, soi ngược sáng, bà con sẽ thấy đường ruột chạy dọc lưng từ đầu đến đuôi.

- **Ruột khỏe**: đầy, liên tục từ đầu đến hậu môn, màu nâu sẫm hoặc theo màu thức ăn, kích thước đều.
- **Phân khỏe**: dài, liền, có màng bao, chìm xuống đáy.

Thời điểm kiểm tra tốt nhất là sau khi cho ăn 1–2 giờ, khi thức ăn đã vào đầy ruột.

## Các dạng bất thường đường ruột thường gặp
| Dạng | Biểu hiện | Thường liên quan đến |
|---|---|---|
| Ruột lỏng | Ruột không chắc, màu nhạt, phân lỏng, không có hình dạng | Vi khuẩn có hại, thức ăn khó tiêu, môi trường xấu |
| Ruột đứt khúc | Ruột có đoạn có thức ăn, đoạn trống xen kẽ | Tôm ăn không đều, tiêu hóa kém, viêm ruột |
| Ruột rỗng | Không có thức ăn trong ruột dù đã cho ăn | Tôm bỏ ăn, gan tụy tổn thương, bệnh |
| Phân trắng, phân nổi | Phân màu trắng đục, nổi trên mặt nước, dồn góc ao | Bệnh phân trắng, thường liên quan gan tụy và đường ruột |
| Ruột sưng, đỏ | Ruột căng phồng, màu đỏ hoặc vàng bất thường | Viêm ruột do vi khuẩn, tảo độc |

## Nguyên nhân tôm bị đường ruột
### 1. Vi khuẩn có hại, nhất là Vibrio
*Vibrio* tồn tại sẵn trong nước và đáy ao. Khi chúng phát triển quá mức (đáy dơ, thức ăn thừa nhiều, nhiệt độ cao), chúng xâm nhập đường ruột gây viêm, tôm tiêu hóa kém, phân lỏng.

### 2. Ký sinh trùng và vi bào tử trùng
- **Gregarine** (trùng hai tế bào) ký sinh trong ruột, thường liên quan đến vật chủ trung gian như ốc, nhuyễn thể trong ao.
- **Vi bào tử trùng EHP** (*Enterocytozoon hepatopenaei*) ký sinh trong gan tụy, khiến tôm chậm lớn, phân đàn và thường đi kèm hiện tượng phân trắng. EHP chỉ xác định chính xác bằng xét nghiệm PCR.

### 3. Thức ăn
- Thức ăn kém chất lượng, ẩm mốc, hết hạn.
- Cho ăn dư kéo dài khiến tôm "ăn nhồi", tiêu hóa không kịp.
- Đổi loại thức ăn hoặc cỡ viên đột ngột.

### 4. Môi trường biến động
- Khí độc NH₃, NO₂, H₂S cao.
- pH, nhiệt độ dao động mạnh sau mưa, giao mùa.
- Tảo tàn, tảo độc (tảo lam) tiết độc tố ảnh hưởng ruột và gan.
- Oxy thấp về đêm làm tôm stress, giảm tiêu hóa.

### 5. Gan tụy yếu
Gan tụy tiết men tiêu hóa. Gan yếu thì thức ăn qua ruột không được tiêu hóa hết, ruột dễ lỏng và nhiễm khuẩn. Đọc thêm [bổ gan cho tôm: khi nào cần](/vi/blog/bo-gan-cho-tom-khi-nao-can-dau-hieu-gan-tuy-yeu).

## Cách kiểm tra đường ruột tôm tại ao
1. **Thu mẫu ở nhiều điểm**: bắt 10–20 con ở nhá và chài ở 2–3 vị trí khác nhau, không chỉ lấy con dạt bờ.
2. **Soi ruột ngược sáng**: đếm số con ruột đầy, ruột đứt khúc, ruột rỗng. Ghi lại tỷ lệ.
3. **Quan sát phân trong nhá**: phân dài, chìm là tốt; phân lỏng, phân trắng là cảnh báo.
4. **Kiểm tra gan tụy cùng lúc**: màu, kích thước, ranh giới.
5. **Xem mặt nước và góc ao** vào buổi sáng: có phân trắng nổi, bọt nhiều hay không.
6. **Ghi chép mỗi lần kiểm tra** để so sánh xu hướng, không chỉ nhìn một ngày.

Nếu nhiều con cùng có ruột rỗng, gan nhạt, phân trắng, tôm giảm ăn rõ hoặc chết rải rác, bà con nên **lấy mẫu gửi xét nghiệm** (PCR, soi tươi, nuôi cấy vi khuẩn) và trao đổi với kỹ thuật viên hoặc cán bộ thú y trước khi quyết định xử lý.

## Biện pháp phòng bệnh đường ruột
### Quản lý thức ăn
- Cho ăn theo nhá, không để dư. Xem [cách đọc nhá và điều chỉnh lượng ăn](/vi/blog/cach-doc-nha-sang-an-dieu-chinh-luong-an-tom-the).
- Giảm 20–30% lượng ăn khi trời mưa, lạnh, nắng nóng gắt hoặc khi tôm lột đồng loạt.
- Bảo quản thức ăn khô ráo, kê cao, dùng bao đã mở trong thời gian ngắn.
- Khi đổi cỡ viên, trộn dần thức ăn mới vào thức ăn cũ trong vài ngày.

### Bổ sung lợi khuẩn đường ruột
Trộn men tiêu hóa hằng ngày giúp duy trì hệ vi sinh có lợi, cạnh tranh với vi khuẩn có hại.

**US LACTO** bổ sung lợi khuẩn *Bacillus*, giúp cải thiện đường ruột, cải thiện hiện tượng phân lỏng, phân trắng, phân nát, đứt khúc. Theo nhãn: dùng hằng ngày 5 g/kg thức ăn, 2–3 lần/ngày suốt vụ; khi có dấu hiệu phân trắng, phân lỏng, đứt khúc, trộn 10–15 g/kg thức ăn, 2–3 lần/ngày.

**BIOTIC 99** dạng nước, theo nhãn: dùng hằng ngày 3 ml/kg thức ăn, 3–4 lần/ngày; khi có dấu hiệu bệnh đường ruột, 5–10 ml/kg thức ăn, 3–4 lần/ngày, liên tục 5 ngày. Không dùng chung với axit hữu cơ và kháng sinh.

Lưu ý: men tiêu hóa là chế phẩm bổ sung, giúp hỗ trợ đường ruột, không thay thế chẩn đoán khi tôm đã có bệnh. Cách trộn chi tiết có trong bài [men tiêu hóa, lợi khuẩn trộn thức ăn cho tôm](/vi/blog/men-tieu-hoa-loi-khuan-tron-thuc-an-cho-tom).

### Giữ môi trường ổn định
- Duy trì oxy hòa tan trên 5 mg/L, nhất là ban đêm và rạng sáng.
- Giữ pH, kiềm ổn định; hạn chế dao động sau mưa.
- Định kỳ xử lý đáy, si phông (ao bạt), dùng vi sinh xử lý nước theo lịch.
- Theo dõi mật độ *Vibrio* nếu có điều kiện (nhiều trại, đại lý có dịch vụ đếm khuẩn).

### Kiểm soát vật chủ trung gian
- Diệt ốc, cua, còng, nhuyễn thể khi chuẩn bị ao.
- Lọc nước cấp bằng túi lọc mịn.
- Không để chim, cá tạp vào ao.

### Chọn giống sạch bệnh
Chọn tôm giống có kết quả PCR âm tính với EHP, AHPND, đốm trắng. EHP rất khó xử lý một khi đã vào ao, nên phòng từ khâu giống là quan trọng nhất.

## Những sai lầm thường gặp
- **Thấy ruột lỏng là trộn kháng sinh**: dùng kháng sinh không có chẩn đoán dễ gây kháng thuốc, tồn dư, hại gan và không giải quyết được nguyên nhân như EHP hay môi trường xấu. Chỉ dùng thuốc khi có chỉ định của cán bộ thú y.
- **Không giảm ăn khi tôm yếu**: tôm tiêu hóa kém mà vẫn cho ăn nhiều làm bệnh nặng thêm.
- **Chỉ xử lý ruột mà quên gan**: đường ruột và gan tụy liên quan chặt chẽ, nên kiểm tra và hỗ trợ cả hai.
- **Chỉ kiểm tra khi có chuyện**: kiểm tra đều đặn 2 lần/tuần giúp phát hiện sớm khi còn dễ xử lý.

## Câu hỏi thường gặp

### Tôm ruột đứt khúc có nguy hiểm không?
Ruột đứt khúc là dấu hiệu tôm ăn không đều hoặc tiêu hóa kém. Nếu chỉ vài con và tôm vẫn ăn tốt thì cần theo dõi, chỉnh lượng ăn và bổ sung men tiêu hóa. Nếu nhiều con kèm gan nhạt, phân trắng thì nên xét nghiệm.

### Vì sao tôm ăn mạnh mà ruột vẫn rỗng?
Có thể thức ăn rơi xuống nhưng tôm không ăn hết (cho ăn dư), hoặc tôm ăn nhưng tiêu hóa, hấp thu kém do gan tụy tổn thương hay ký sinh trùng. Cần kiểm tra nhá, gan và cho xét nghiệm nếu kéo dài.

### Phân trắng và ruột lỏng có phải cùng một bệnh?
Không hẳn. Ruột lỏng có thể chỉ là rối loạn tiêu hóa nhẹ, còn phân trắng thường nghiêm trọng hơn, liên quan gan tụy, vi khuẩn hoặc EHP. Đọc thêm bài [phòng bệnh phân trắng từ đường ruột](/vi/blog/phong-benh-phan-trang-tu-duong-ruot).

### Bao lâu nên kiểm tra đường ruột tôm một lần?
Nên kiểm tra ít nhất 2 lần/tuần, mỗi ngày khi thời tiết thay đổi, sau mưa lớn hoặc khi thấy tôm giảm ăn.

### Có nên tự trộn tỏi cho tôm để phòng bệnh đường ruột không?
Nhiều hộ có dùng tỏi, nhưng liều lượng và hiệu quả khó kiểm soát. Ưu tiên quản lý thức ăn, môi trường và dùng men tiêu hóa đúng cách; khi tôm có dấu hiệu bệnh rõ thì nên xét nghiệm.`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'benh-gan-tuy-tren-tom-the-dau-hieu-nguyen-nhan-phong-ngua', topic: 'disease', daysAgo: 0.825,
    title: L('Bệnh gan tụy trên tôm thẻ: dấu hiệu nhận biết, nguyên nhân, phòng ngừa'),
    excerpt: L('Hoại tử gan tụy cấp (AHPND/EMS) và các bệnh gan tụy gây thiệt hại lớn cho tôm thẻ. Cách nhận biết sớm, nguyên nhân, xét nghiệm PCR và các biện pháp phòng ngừa.'),
    body: L(
`Trong các bệnh trên tôm thẻ chân trắng, nhóm bệnh liên quan đến gan tụy là nỗi lo lớn nhất của bà con, vì bệnh có thể diễn tiến nhanh, nhất là ở tháng đầu sau thả. Bài viết này tổng hợp những hiểu biết phổ biến về bệnh gan tụy: dấu hiệu, nguyên nhân, cách xác định và các biện pháp phòng ngừa thực tế cho ao nuôi ở miền Tây.

## Bệnh gan tụy là gì?
"Bệnh gan tụy" là cách gọi chung cho các tình trạng gan tụy tôm bị tổn thương, teo, nhạt màu hoặc hoại tử. Có nhiều nguyên nhân khác nhau, trong đó thường được nhắc đến:

- **Bệnh hoại tử gan tụy cấp tính (AHPND)**, trước đây hay gọi là hội chứng tôm chết sớm (EMS).
- **Vi bào tử trùng EHP** ký sinh trong gan tụy, gây chậm lớn.
- **Viêm gan tụy do vi khuẩn** khác (một số dòng *Vibrio*, vi khuẩn NHP).
- **Tổn thương gan do môi trường, thức ăn, độc tố** (nấm mốc, tảo độc, hóa chất).

Các nguyên nhân này có biểu hiện bên ngoài khá giống nhau nên **không thể chẩn đoán chính xác chỉ bằng mắt thường**.

## Bệnh hoại tử gan tụy cấp (AHPND/EMS)
### Tác nhân
AHPND do một số chủng vi khuẩn *Vibrio*, phổ biến nhất là *Vibrio parahaemolyticus*, mang một plasmid chứa gen sinh độc tố (thường gọi là độc tố PirA/PirB). Độc tố này phá hủy tế bào gan tụy. Không phải mọi *Vibrio parahaemolyticus* đều gây bệnh, chỉ những chủng mang gen độc tố.

### Thời điểm hay xảy ra
Bệnh thường xuất hiện sớm, trong khoảng 10–45 ngày đầu sau thả giống, nhưng cũng có thể gặp ở giai đoạn muộn hơn.

### Dấu hiệu thường gặp
- Tôm giảm ăn hoặc bỏ ăn đột ngột.
- Gan tụy **teo nhỏ, nhạt màu, trắng nhợt**; có trường hợp gan có đốm, vệt đen; khó bóp vỡ, dai.
- Dạ dày và ruột rỗng, không có thức ăn.
- Vỏ mềm, thân nhợt màu.
- Tôm lờ đờ, bơi chậm, chết chìm ở đáy, chết rải rác rồi tăng nhanh.

## Các bệnh gan tụy khác cần phân biệt
| Bệnh/tình trạng | Biểu hiện thường gặp | Đặc điểm khác |
|---|---|---|
| AHPND (EMS) | Gan teo, trắng nhợt, ruột rỗng, chết sớm | Thường trong tháng đầu, có thể chết nhanh |
| EHP | Tôm chậm lớn, phân đàn, có thể kèm phân trắng | Ít chết cấp, thiệt hại do tôm không lớn |
| Viêm gan do vi khuẩn khác | Gan sưng hoặc teo, màu bất thường | Hay gặp khi môi trường xấu, nhiệt độ cao |
| Tổn thương do độc tố, thức ăn | Gan nhạt, nhiều con cùng lúc, tôm giảm ăn | Liên quan thức ăn mốc, tảo độc, hóa chất |

Vì biểu hiện chồng lấp như vậy, xét nghiệm là bước không thể bỏ qua.

## Cách xác định bệnh: xét nghiệm là bắt buộc
Khi thấy dấu hiệu gan tụy bất thường kèm tôm giảm ăn, chết rải rác, bà con nên:

1. **Thu mẫu tôm** có dấu hiệu bệnh (con yếu, con còn sống) và cả mẫu tôm khỏe để so sánh. Giữ lạnh, không để tôm chết lâu.
2. **Gửi phòng xét nghiệm** để làm PCR phát hiện gen độc tố AHPND, EHP, và các tác nhân khác như đốm trắng (WSSV).
3. **Có thể làm thêm**: nuôi cấy và đếm *Vibrio* trong nước, gan tụy; soi tươi gan tụy (xem giọt mỡ, tế bào, ký sinh trùng); mô bệnh học nếu cần.
4. **Trao đổi với kỹ thuật viên hoặc cán bộ thú y thủy sản** về kết quả để có phương án xử lý phù hợp.

Kết quả xét nghiệm giúp tránh tình trạng "chữa mò": dùng thuốc sai bệnh vừa tốn tiền, vừa làm tôm yếu thêm.

## Nguyên nhân thuận lợi cho bệnh bùng phát
Mầm bệnh có sẵn chưa chắc gây bệnh. Bệnh bùng phát khi nhiều yếu tố bất lợi cộng lại:

- **Con giống mang mầm bệnh** hoặc yếu từ trại.
- **Chuẩn bị ao chưa kỹ**: đáy ao còn nhiều chất hữu cơ, chưa diệt khuẩn và giáp xác đúng cách.
- **Mật độ *Vibrio* cao** trong nước và đáy, thường do thức ăn thừa, chất hữu cơ tích tụ, nhiệt độ cao.
- **Môi trường biến động**: tảo tàn, pH, độ mặn, nhiệt độ thay đổi đột ngột.
- **Cho ăn dư ở tháng đầu**: tôm nhỏ ăn không hết, thức ăn phân hủy là "thức ăn" cho vi khuẩn.
- **Gan tôm đã yếu sẵn** do thức ăn kém, hóa chất, khí độc.

## Biện pháp phòng ngừa bệnh gan tụy
### 1. Chọn giống sạch bệnh
- Mua giống ở trại uy tín, có giấy xét nghiệm PCR âm tính với AHPND, EHP, WSSV, IHHNV.
- Có thể tự lấy mẫu giống đi xét nghiệm lại trước khi thả.
- Quan sát giống khỏe: đồng cỡ, ruột đầy, gan đậm màu, bơi ngược dòng. Xem [cách chọn tôm giống thẻ chân trắng chất lượng](/vi/blog/cach-chon-tom-giong-the-chan-trang-chat-luong).

### 2. Chuẩn bị ao và nước kỹ lưỡng
- Loại bỏ bùn đáy, chất hữu cơ, phơi đáy (ao đất), vệ sinh sát trùng (ao bạt).
- Xử lý nước cấp qua ao lắng, diệt khuẩn, diệt giáp xác.
- Gây màu và bổ sung vi sinh có lợi trước khi thả để vi khuẩn có lợi chiếm ưu thế.

### 3. Cho ăn hợp lý ở tháng đầu
- Không cho ăn quá nhiều ở 30 ngày đầu, theo dõi nhá từ sớm.
- Chia nhiều cữ nhỏ, giảm ăn khi thời tiết xấu.

### 4. Giữ ổn định môi trường
- Duy trì oxy, kiềm, pH ổn định; hạn chế thay đổi đột ngột.
- Định kỳ dùng vi sinh xử lý nước và đáy, si phông ao bạt.
- Kiểm soát mật độ tảo, không để tảo quá dày rồi tàn.

### 5. Hỗ trợ gan tụy bằng dinh dưỡng
Duy trì gan tụy khỏe giúp tôm có "nền" tốt hơn khi gặp bất lợi. Các sản phẩm bổ sung sorbitol, methionine, betaine được dùng phổ biến để hỗ trợ chức năng gan.

**LIVER - MAX** giúp bồi bổ gan, hỗ trợ giải độc gan và phục hồi, chuyển màu gan; có thể trộn ăn hoặc tạt xuống ao. Theo nhãn: tạt định kỳ 1 lít/1.500 m³ nước, 5 ngày/lần, hoặc trộn 10 ml/kg thức ăn; trường hợp gan yếu, có dấu hiệu dịch bệnh, tạt 1 lít/1.000 m³ nước liên tục 2 ngày hoặc trộn 20 ml/kg thức ăn, 2–3 lần/ngày.

**HEPALIVER-FS** dạng trộn ăn, theo nhãn dùng 5 ml/kg thức ăn, 2 lần/ngày suốt vụ; khi cần hỗ trợ, 10 ml/kg thức ăn, 3–4 lần/ngày, liên tục 5 ngày.

Cần nhấn mạnh: đây là **thức ăn bổ sung giúp hỗ trợ gan**, không phải thuốc điều trị AHPND hay bất kỳ bệnh nào. Khi tôm đã bệnh, việc xử lý phải dựa trên kết quả xét nghiệm và hướng dẫn của cán bộ thú y.

### 6. Hạn chế lạm dụng hóa chất, kháng sinh
Dùng kháng sinh tràn lan không phòng được AHPND mà còn tạo ra vi khuẩn kháng thuốc, gây tồn dư và hại gan. Chỉ sử dụng thuốc được phép, khi có chỉ định và tuân thủ thời gian ngưng thuốc trước thu hoạch.

## Khi ao đã có dấu hiệu bệnh gan tụy
Một số bước chung bà con có thể làm trong lúc chờ kết quả xét nghiệm:

- **Giảm hoặc tạm ngưng cho ăn** theo mức độ tôm bỏ ăn, tránh thức ăn thừa làm *Vibrio* phát triển thêm.
- **Tăng cường oxy**: chạy quạt, sục khí liên tục.
- **Ổn định môi trường**, hạn chế thay nước đột ngột.
- **Vớt tôm chết** ra khỏi ao, xử lý đúng cách (chôn với vôi), không vứt ra kênh mương.
- **Không xả nước ao bệnh ra môi trường** khi chưa xử lý.
- **Ghi chép** diễn biến để báo cho kỹ thuật viên, cán bộ thú y.

## Câu hỏi thường gặp

### Làm sao biết tôm bị AHPND hay chỉ gan yếu?
Bằng mắt thường rất khó phân biệt. Cần lấy mẫu xét nghiệm PCR để phát hiện gen độc tố AHPND. Gan teo trắng, ruột rỗng, chết rải rác trong tháng đầu là dấu hiệu nên xét nghiệm ngay.

### Bệnh AHPND có lây không?
Có. Vi khuẩn có thể lan qua nước, tôm bệnh, tôm chết, dụng cụ và con giống. Vì vậy cần xử lý nước thải, tôm chết đúng cách và dùng dụng cụ riêng cho từng ao.

### Sản phẩm bổ gan có chữa được bệnh hoại tử gan tụy không?
Không. Sản phẩm bổ gan là thức ăn bổ sung, giúp hỗ trợ chức năng gan. Khi tôm bệnh, cần xét nghiệm và làm theo hướng dẫn của cán bộ thú y.

### Tháng đầu nên phòng bệnh gan tụy như thế nào?
Chọn giống sạch bệnh có xét nghiệm, chuẩn bị ao kỹ, không cho ăn dư, giữ môi trường ổn định, bổ sung vi sinh và hỗ trợ gan tụy bằng dinh dưỡng ngay từ đầu.

### EHP có gây chết tôm hàng loạt không?
EHP thường không gây chết cấp tính như AHPND mà làm tôm chậm lớn, phân đàn, kéo dài vụ nuôi. Tuy vậy tôm nhiễm EHP yếu hơn và dễ mắc các bệnh khác.`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'tom-cham-lon-lon-khong-deu-8-nguyen-nhan-cach-khac-phuc', topic: 'technique', daysAgo: 0.975,
    title: L('Tôm chậm lớn, lớn không đều: 8 nguyên nhân thường gặp, cách khắc phục'),
    excerpt: L('Tôm thẻ chậm lớn, phân đàn làm kéo dài vụ và tăng giá thành. Cách đánh giá chậm lớn, 8 nguyên nhân từ giống, bệnh, thức ăn đến môi trường và cách xử lý.'),
    body: L(
`Ao tôm không chết nhưng mãi không lớn, cân mẫu thấy con to con nhỏ chênh nhau gấp đôi: đây là tình trạng khiến nhiều bà con "lỗ âm thầm". Vụ nuôi kéo dài thêm vài tuần là thêm tiền thức ăn, tiền điện, tiền chế phẩm, mà tôm thu được lại nhỏ cỡ, giá thấp. Bài viết này giúp bà con đánh giá đúng tình trạng và rà soát 8 nguyên nhân phổ biến nhất.

## Thế nào là tôm chậm lớn, lớn không đều?
Tôm thẻ lớn nhanh hay chậm phụ thuộc vào giống, mật độ, nhiệt độ, thức ăn và mô hình nuôi, nên không có một con số chung cho mọi ao. Cách đánh giá thực tế nhất là:

- **So với chính kế hoạch của ao**: trọng lượng trung bình qua các lần cân mẫu có tăng đều không, hay đứng yên qua 1–2 lần cân.
- **So với các vụ trước** cùng mô hình, cùng mùa vụ, cùng nguồn giống.
- **Độ đồng đều**: cân và đếm riêng 50–100 con mỗi lần lấy mẫu. Nếu tỷ lệ con nhỏ hơn hẳn mức trung bình chiếm nhiều, hoặc con lớn nhất nặng gấp đôi con nhỏ nhất, ao đang bị phân đàn.

Nên cân mẫu định kỳ 7–10 ngày/lần, lấy mẫu ở nhiều vị trí trong ao (chài, không chỉ lấy ở nhá vì con mạnh hay vào nhá trước).

## Nguyên nhân 1: Con giống kém chất lượng
Đây là nguyên nhân gốc khó khắc phục nhất. Giống từ đàn bố mẹ kém, giống bị cận huyết, hoặc giống bị ương ép tăng trưởng thường lớn chậm và phân đàn ngay từ đầu.

Đặc biệt, **virus IHHNV** có thể gây hội chứng còi và dị hình (RDS): tôm còi cọc, cong chủy, biến dạng đốt bụng, râu nhăn, lớn rất không đều.

**Khắc phục:** chọn giống có nguồn gốc rõ ràng, xét nghiệm PCR âm tính với IHHNV, EHP, AHPND, WSSV. Quan sát độ đồng cỡ của bầy giống trước khi mua. Xem [cách chọn tôm giống thẻ chân trắng chất lượng](/vi/blog/cach-chon-tom-giong-the-chan-trang-chat-luong).

## Nguyên nhân 2: Vi bào tử trùng EHP
EHP (*Enterocytozoon hepatopenaei*) ký sinh trong tế bào gan tụy, làm giảm khả năng tiêu hóa và hấp thu dinh dưỡng. Tôm nhiễm EHP vẫn ăn nhưng không lớn, phân đàn rõ, đôi khi kèm phân trắng. Bệnh không gây chết hàng loạt nên dễ bị bỏ qua.

**Khắc phục:** xét nghiệm PCR tôm giống và tôm nuôi khi nghi ngờ. Chuẩn bị ao kỹ (EHP có bào tử bền trong đáy ao, cần cải tạo và xử lý đáy đúng kỹ thuật). Khi đã nhiễm, cần trao đổi với kỹ thuật viên để quyết định hướng nuôi tiếp hay thu sớm.

## Nguyên nhân 3: Mật độ quá dày
Mật độ vượt quá khả năng của ao (oxy, xử lý chất thải, diện tích đáy) khiến tôm cạnh tranh thức ăn, con mạnh ăn nhiều, con yếu ăn ít, dẫn đến phân đàn. Mật độ cao cũng làm môi trường xuống cấp nhanh.

**Khắc phục:** thả mật độ phù hợp với hệ thống quạt, khả năng thay nước và xử lý chất thải. Với ao đã thả dày, có thể san thưa hoặc thu tỉa khi tôm đạt cỡ.

## Nguyên nhân 4: Thức ăn và cách cho ăn
- **Thức ăn kém chất lượng** hoặc độ đạm không phù hợp cỡ tôm.
- **Cho ăn thiếu**: lượng ăn không theo kịp tốc độ lớn của tôm, nhất là khi không tăng lượng theo nhá.
- **Rải thức ăn không đều**: chỉ rải một góc, con yếu không tranh được mồi.
- **Số cữ ăn ít**: tôm thẻ tiêu hóa nhanh, chia nhiều cữ giúp tôm ăn đều hơn.
- **Thức ăn ẩm mốc** gây hại gan tụy.

**Khắc phục:** chọn thức ăn đúng cỡ và độ đạm, rải đều khắp ao (dọc theo hướng quạt), chia 4–5 cữ/ngày, điều chỉnh theo nhá. Xem [cách đọc nhá và điều chỉnh lượng ăn](/vi/blog/cach-doc-nha-sang-an-dieu-chinh-luong-an-tom-the) và [cách tính lượng thức ăn cho tôm thẻ](/vi/blog/cach-tinh-luong-thuc-an-cho-tom-the).

Khi tôm bắt mồi kém, bà con có thể bổ sung đạm, axit amin để kích thích tôm ăn. **AMIN CARE** bổ sung đạm cá và axit amin thiết yếu, giúp tôm ham ăn, bắt mồi nhanh, hỗ trợ hạn chế chậm lớn, bắt mồi kém; liều dùng theo hướng dẫn trên nhãn.

## Nguyên nhân 5: Oxy thấp và nhiệt độ không phù hợp
Oxy hòa tan thấp (nhất là về đêm và rạng sáng) khiến tôm giảm ăn, giảm tiêu hóa, tiêu tốn năng lượng để "thở" thay vì để lớn. Nhiệt độ quá cao (trên 33 °C) hoặc thấp (dưới 25 °C) cũng làm tôm giảm ăn rõ rệt.

**Khắc phục:** bố trí đủ quạt và sục khí đáy, chạy tăng cường ban đêm; giữ mực nước sâu hoặc làm mái che vào mùa nắng nóng. Đọc thêm [oxy hòa tan ao nuôi tôm bao nhiêu là đủ](/vi/blog/oxy-hoa-tan-ao-nuoi-tom-bao-nhieu-la-du).

## Nguyên nhân 6: Môi trường kém, khí độc cao
NH₃, NO₂ ở mức cao kéo dài dù chưa làm tôm chết vẫn gây stress mãn tính, tổn thương mang và gan, làm tôm chậm lớn. pH dao động mạnh trong ngày cũng khiến tôm tốn năng lượng thích nghi.

**Khắc phục:** đo khí độc định kỳ, giữ kiềm, pH ổn định, duy trì vi sinh xử lý nước, xi phông đáy (ao bạt), hạn chế thức ăn dư.

## Nguyên nhân 7: Thiếu khoáng, lột xác không đều
Tôm chỉ tăng kích thước sau mỗi lần lột xác. Thiếu khoáng làm tôm lột khó, lột không đúng chu kỳ, vỏ lâu cứng, dẫn đến lớn chậm và lớn không đều. Ao độ mặn thấp đặc biệt dễ thiếu kali, magie.

**Khắc phục:** bổ sung khoáng cả qua nước và qua thức ăn. **PREMIX ORA** là khoáng trộn thức ăn bổ sung kali, magie, hỗ trợ lột xác, tạo vỏ, giúp tôm lột xác đúng chu kỳ; dùng theo hướng dẫn trên nhãn. Phân biệt khoáng tạt và khoáng trộn trong bài [khoáng trộn thức ăn và khoáng tạt ao khác nhau thế nào](/vi/blog/khoang-tron-thuc-an-va-khoang-tat-ao-khac-nhau-the-nao).

## Nguyên nhân 8: Gan tụy và đường ruột yếu
Gan tụy tiết men tiêu hóa, đường ruột hấp thu dinh dưỡng. Khi một trong hai bị tổn thương (do vi khuẩn, độc tố, thức ăn kém), tôm ăn vào bao nhiêu cũng không chuyển hóa được thành thịt. Biểu hiện: gan nhạt, teo; ruột lỏng, đứt khúc; FCR tăng.

**Khắc phục:** kiểm tra gan, ruột 2 lần/tuần; bổ sung men tiêu hóa hằng ngày như **US LACTO** (theo nhãn 5 g/kg thức ăn, 2–3 lần/ngày); hỗ trợ gan bằng các chế phẩm bổ sung sorbitol, methionine, betaine. Xem [bổ gan cho tôm: khi nào cần](/vi/blog/bo-gan-cho-tom-khi-nao-can-dau-hieu-gan-tuy-yeu) và [tôm bị đường ruột: nguyên nhân, cách phòng](/vi/blog/tom-bi-duong-ruot-ruot-long-dut-khuc-nguyen-nhan-cach-phong).

## Bảng rà soát nhanh nguyên nhân tôm chậm lớn
| Dấu hiệu bà con thấy | Nguyên nhân nên nghĩ đến trước | Việc cần làm |
|---|---|---|
| Phân đàn ngay từ tháng đầu, có con dị hình | Giống kém, IHHNV | Xét nghiệm PCR, rút kinh nghiệm chọn giống |
| Tôm ăn bình thường nhưng không lớn, có phân trắng | EHP | Xét nghiệm PCR EHP |
| Nhá hết nhanh, tôm tranh ăn, con yếu nhiều | Thiếu thức ăn, mật độ dày | Tăng lượng theo nhá, rải đều, chia thêm cữ |
| Tôm giảm ăn sáng sớm, nổi đầu nhẹ | Oxy thấp | Tăng quạt, sục khí ban đêm |
| Khí độc đo được thường xuyên cao | Môi trường kém | Giảm ăn, xử lý nước, đáy |
| Mềm vỏ, cong thân, lột không đều | Thiếu khoáng | Bổ sung khoáng nước và thức ăn |
| Gan nhạt, ruột lỏng, FCR tăng | Gan, ruột yếu | Men tiêu hóa, hỗ trợ gan, kiểm tra bệnh |

## Một vài nguyên tắc chung
- **Ghi chép đầy đủ**: lượng ăn, kết quả nhá, chỉ tiêu nước, cân mẫu. Không có số liệu thì rất khó tìm nguyên nhân.
- **Xử lý nhiều yếu tố cùng lúc**: tôm chậm lớn hiếm khi chỉ do một nguyên nhân.
- **Xét nghiệm sớm khi nghi bệnh**: EHP và IHHNV không nhìn bằng mắt mà kết luận được.
- **Cân nhắc kinh tế**: nếu tôm nhiễm bệnh mãn tính và chậm lớn kéo dài, nên trao đổi với kỹ thuật viên về phương án thu sớm thay vì nuôi kéo dài tốn chi phí.

## Câu hỏi thường gặp

### Tôm thẻ bao nhiêu ngày thì đạt cỡ thu hoạch?
Tùy giống, mật độ, mô hình và cỡ muốn thu. Thông thường một vụ tôm thẻ kéo dài khoảng 75–100 ngày. Quan trọng là theo dõi đà tăng trọng qua các lần cân mẫu của chính ao mình.

### Tôm phân đàn có thể khắc phục được không?
Nếu do thức ăn, mật độ, môi trường, khoáng thì có thể cải thiện khi điều chỉnh kịp thời. Nếu do giống kém hay bệnh như IHHNV, EHP thì rất khó khắc phục hoàn toàn.

### Cân mẫu tôm bao lâu một lần?
Nên cân 7–10 ngày/lần, lấy mẫu bằng chài ở nhiều điểm trong ao, mỗi lần 50–100 con để biết trọng lượng trung bình và độ đồng đều.

### Tăng lượng thức ăn có giúp tôm lớn nhanh hơn không?
Chỉ khi tôm đang ăn thiếu. Nếu tôm không ăn hết, thức ăn dư làm bẩn nước, tăng khí độc và khiến tôm càng chậm lớn. Hãy điều chỉnh theo nhá.

### Có sản phẩm nào giúp tôm hết chậm lớn ngay không?
Không có sản phẩm nào giải quyết được mọi nguyên nhân. Các chế phẩm bổ sung đạm, khoáng, men tiêu hóa chỉ hỗ trợ khi đã kiểm soát được giống, bệnh và môi trường.`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'tang-suc-de-khang-cho-tom-thoi-diem-giao-mua', topic: 'disease', daysAgo: 1.125,
    title: L('Tăng sức đề kháng cho tôm thời điểm giao mùa: việc cần làm mỗi ngày'),
    excerpt: L('Giao mùa là lúc tôm dễ stress, giảm ăn và dễ phát bệnh. Hướng dẫn giảm sốc môi trường, điều chỉnh thức ăn, bổ sung dinh dưỡng giúp tôm tăng sức đề kháng.'),
    body: L(
`Ở Đồng bằng sông Cửu Long, mỗi năm có hai thời điểm giao mùa rõ rệt: từ mùa khô sang mùa mưa (khoảng tháng 4–6) và từ mùa mưa sang mùa khô (khoảng tháng 10–12). Đây là lúc nhiều ao tôm gặp sự cố nhất. Không phải vì mầm bệnh tự dưng xuất hiện, mà vì tôm bị stress liên tục, sức đề kháng giảm, tạo cơ hội cho mầm bệnh có sẵn bùng phát. Bài này hướng dẫn những việc cụ thể để giúp tôm vượt qua giai đoạn này.

## Vì sao giao mùa tôm dễ bệnh?
Tôm là động vật biến nhiệt, cơ thể thay đổi theo môi trường. Khi giao mùa, nhiều yếu tố thay đổi cùng lúc:

| Yếu tố | Thay đổi khi giao mùa | Ảnh hưởng đến tôm |
|---|---|---|
| Nhiệt độ | Chênh lệch ngày – đêm lớn, nắng gắt rồi mưa đột ngột | Tôm sốc nhiệt, giảm ăn, giảm miễn dịch |
| Mưa | Nước mưa làm giảm pH, kiềm, độ mặn lớp nước mặt | Tôm khó lột xác, mềm vỏ, stress |
| Phân tầng nước | Nước mưa nhẹ, nằm trên; nước đáy thiếu oxy | Khí độc tích tụ ở đáy |
| Tảo | Thiếu nắng nhiều ngày, tảo tàn hàng loạt | Oxy giảm, nước đục, sinh khí độc |
| Mầm bệnh | Vi khuẩn phát triển mạnh khi môi trường xấu | Dễ phát bệnh đường ruột, gan tụy, đốm trắng |

Mỗi lần tôm phải thích nghi với thay đổi là một lần tiêu tốn năng lượng và "rút" sức đề kháng. Giao mùa kéo dài vài tuần, tôm bị stress liên tục nên rất dễ suy yếu.

## Nguyên tắc chung: giảm sốc trước, bổ sung sau
Bổ sung dinh dưỡng chỉ có ý nghĩa khi đã hạn chế được các cú sốc từ môi trường. Thứ tự ưu tiên nên là:

1. Giữ môi trường ổn định nhất có thể.
2. Điều chỉnh thức ăn phù hợp với sức ăn thực tế.
3. Bổ sung dinh dưỡng, khoáng, men tiêu hóa để hỗ trợ tôm.
4. Theo dõi sát và xét nghiệm sớm khi có dấu hiệu bất thường.

## Giữ môi trường ổn định khi giao mùa
### Trước cơn mưa
- Theo dõi dự báo thời tiết hằng ngày.
- Kiểm tra kiềm; nếu thấp, nâng kiềm trước để có "đệm" khi mưa xuống.
- Chuẩn bị sẵn vôi, khoáng, máy phát điện dự phòng.
- Nâng mực nước ao (nếu được) để giảm biến động nhiệt.

### Trong và sau mưa
- **Chạy quạt liên tục** để phá phân tầng, trộn nước mưa với nước ao và cấp oxy cho tầng đáy.
- **Xả bớt lớp nước mặt** (ao có cống xả mặt) để giảm lượng nước mưa.
- **Rải vôi quanh bờ** để hạn chế nước mưa chảy tràn kéo phèn, đất xuống ao.
- **Đo pH, kiềm sau mưa** và bổ sung kịp thời.
- **Bổ sung khoáng** vì nước mưa pha loãng khoáng trong ao.

**MIX 79** là khoáng tạt ao bổ sung P, Ca, Mg vào môi trường, giúp tôm lột xác đúng chu kỳ, vỏ cứng. Theo nhãn, dùng định kỳ 5 kg/3.000 m³ nước, 2 ngày/lần; khi cần tăng kiềm dùng 5 kg/1.500 m³ nước, liên tục 2 ngày. Nên tạt vào chiều tối.

### Khi trời âm u nhiều ngày
- Giảm lượng thức ăn, tránh để thức ăn thừa.
- Theo dõi oxy kỹ hơn vào ban đêm và rạng sáng.
- Hạn chế dùng hóa chất diệt khuẩn, diệt tảo trong những ngày này vì dễ làm tảo tàn, oxy tụt.

Đọc thêm [quản lý khí độc ao nuôi mùa mưa](/vi/blog/quan-ly-khi-doc-ao-nuoi-mua-mua) để biết cách xử lý đáy, khí độc chi tiết.

## Điều chỉnh thức ăn khi giao mùa
Đây là việc nhiều bà con làm chưa tốt nhất. Khi thời tiết thay đổi, tôm giảm ăn tự nhiên, nhưng nếu vẫn cho ăn như cũ thì thức ăn dư làm nước xấu thêm.

- **Giảm 20–30% lượng ăn** khi trời mưa lớn, lạnh hoặc nắng nóng gắt; có thể giảm hơn khi tôm có dấu hiệu yếu.
- **Bỏ cữ ăn** khi đang mưa to, chờ tạnh và quạt chạy ổn định rồi mới cho ăn.
- **Tăng tần suất kiểm tra nhá**, điều chỉnh từng cữ. Xem [cách đọc nhá và điều chỉnh lượng ăn](/vi/blog/cach-doc-nha-sang-an-dieu-chinh-luong-an-tom-the).
- **Cho ăn vào thời điểm nhiệt độ ổn định** trong ngày, tránh lúc nắng gắt nhất hoặc lúc vừa mưa xong.
- **Khi tôm lột đồng loạt**: giảm ăn trong 1–2 ngày lột, tăng dần lại khi vỏ cứng.

## Bổ sung dinh dưỡng giúp tôm tăng sức đề kháng
Khi tôm ăn ít hơn, mỗi cữ ăn cần "chất lượng" hơn. Một số nhóm dinh dưỡng thường được bổ sung trong giai đoạn này:

### Vitamin C
Vitamin C tham gia vào quá trình chống stress, hỗ trợ miễn dịch và hình thành vỏ. Đây là chất bổ sung phổ biến nhất khi thời tiết thay đổi. Lưu ý vitamin C dễ bị phân hủy bởi nhiệt và ánh sáng, nên trộn xong cho ăn ngay, không phơi nắng.

### Chất hỗ trợ miễn dịch (beta-glucan, nucleotide…)
Các chất này được dùng rộng rãi để hỗ trợ hệ miễn dịch không đặc hiệu của tôm. Nên bổ sung từ trước giai đoạn giao mùa vài ngày để có tác dụng.

### Hỗ trợ gan tụy
Giao mùa là lúc gan phải làm việc nhiều nhất để xử lý độc chất từ môi trường. **HEPALIVER-FS** bổ sung sorbitol, methionine, betaine, giúp bồi bổ gan, hỗ trợ giải độc gan. Theo nhãn: dùng định kỳ 5 ml/kg thức ăn, 2 lần/ngày; khi cần hỗ trợ, 10 ml/kg thức ăn, 3–4 lần/ngày, liên tục 5 ngày.

### Đạm và axit amin dễ hấp thu
Giúp tôm có đủ dinh dưỡng dù ăn ít, đồng thời có mùi hấp dẫn kích thích tôm bắt mồi. **AMIN CARE** bổ sung đạm cá và axit amin thiết yếu, hỗ trợ tăng đề kháng, tăng hấp thụ dinh dưỡng, hạn chế bắt mồi kém; dùng theo hướng dẫn trên nhãn.

### Men tiêu hóa
Duy trì men tiêu hóa hằng ngày giúp đường ruột ổn định khi tôm stress. Có thể tăng liều theo hướng dẫn nhãn trong những ngày thời tiết xấu. Xem [men tiêu hóa, lợi khuẩn trộn thức ăn cho tôm](/vi/blog/men-tieu-hoa-loi-khuan-tron-thuc-an-cho-tom).

**Lưu ý khi bổ sung:** không trộn quá nhiều thứ vào một cữ. Chia các chế phẩm ra các cữ khác nhau trong ngày và luôn áo bao. Đọc [cách trộn chế phẩm vào thức ăn đúng kỹ thuật](/vi/blog/cach-tron-thuoc-che-pham-vao-thuc-an-cho-tom).

## Lịch tham khảo trong giai đoạn giao mùa
| Thời điểm | Việc nên làm |
|---|---|
| 5–7 ngày trước giao mùa | Kiểm tra kiềm, gan, ruột; bắt đầu bổ sung vitamin C, chất hỗ trợ miễn dịch |
| Ngày có mưa lớn | Giảm hoặc bỏ cữ ăn, chạy quạt liên tục, xả nước mặt nếu được |
| Sau mưa | Đo pH, kiềm; bổ sung vôi, khoáng; dùng vi sinh khi nước đã ổn định |
| Mỗi ngày | Kiểm tra nhá, quan sát tôm sáng sớm, ghi chép chỉ tiêu nước |
| 2 lần/tuần | Kiểm tra gan tụy, đường ruột; cân mẫu nếu có thể |
| Khi có bất thường | Lấy mẫu xét nghiệm, báo kỹ thuật viên |

## Dấu hiệu cần xét nghiệm ngay
- Tôm giảm ăn mạnh liên tục 2–3 ngày dù môi trường đã ổn định.
- Tôm dạt bờ, bơi lờ đờ, chết rải rác.
- Gan teo, nhạt màu; ruột rỗng ở nhiều con.
- Xuất hiện đốm trắng trên vỏ, thân đỏ, đuôi đỏ.

Lúc này bà con nên lấy mẫu gửi xét nghiệm PCR và trao đổi với kỹ thuật viên hoặc cán bộ thú y thủy sản trước khi xử lý. Tránh tự ý dùng kháng sinh, hóa chất mạnh khi chưa biết rõ bệnh, vì có thể làm tôm yếu thêm.

## Câu hỏi thường gặp

### Giao mùa có nên thả tôm giống không?
Nên hạn chế thả giống vào thời điểm thời tiết thất thường. Nếu phải thả, chọn ngày thời tiết ổn định, chuẩn bị ao kỹ và giữ môi trường thật ổn định trong 2–3 tuần đầu.

### Trời mưa có cần cho tôm ăn không?
Khi đang mưa lớn nên tạm ngưng cho ăn. Sau mưa, khi quạt chạy ổn định và nước không còn biến động, cho ăn lại với lượng giảm 20–30%, điều chỉnh theo nhá.

### Bổ sung vitamin C bao lâu thì có tác dụng?
Nên bổ sung từ trước khi thời tiết thay đổi vài ngày và duy trì trong suốt giai đoạn giao mùa. Dùng theo hướng dẫn nhãn sản phẩm.

### Sản phẩm tăng đề kháng có thay được thuốc khi tôm bệnh không?
Không. Các chế phẩm bổ sung giúp tôm khỏe hơn để phòng bệnh. Khi tôm đã bệnh, cần xét nghiệm và làm theo hướng dẫn của cán bộ thú y.

### Vì sao sau mưa tôm hay lột xác đồng loạt?
Nước mưa làm thay đổi độ mặn, kiềm, nhiệt độ, kích thích tôm lột. Lúc này cần bổ sung khoáng vào chiều tối, tăng oxy và giảm ăn để hỗ trợ tôm cứng vỏ nhanh.`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'cach-tron-thuoc-che-pham-vao-thuc-an-cho-tom', topic: 'technique', daysAgo: 1.275,
    title: L('Cách trộn thuốc, chế phẩm vào thức ăn cho tôm đúng kỹ thuật'),
    excerpt: L('Trộn sai cách, hoạt chất tan ra nước trước khi tôm kịp ăn. Hướng dẫn tính liều theo kg thức ăn, lượng nước pha, chất bao, thời gian để ráo và thứ tự trộn chuẩn.'),
    body: L(
`Bà con bỏ tiền mua men, bổ gan, khoáng, vitamin… nhưng nếu trộn không đúng, phần lớn hoạt chất có thể tan ra nước hoặc bị hỏng trước khi vào bụng tôm. Trộn chế phẩm vào thức ăn nghe đơn giản nhưng có nhiều chi tiết quyết định hiệu quả. Bài này hướng dẫn từng bước, từ cách tính liều đến cách áo bao và bảo quản.

## Vì sao phải trộn đúng kỹ thuật?
Viên thức ăn rơi xuống nước sẽ ngấm nước và bắt đầu rã. Hoạt chất chỉ bám ở bề mặt viên rất dễ bị rửa trôi trong vài phút đầu. Trong khi đó tôm có thể mất một khoảng thời gian mới tìm và ăn hết thức ăn. Trộn đúng kỹ thuật giúp:

- Hoạt chất thấm vào viên, bám chắc, không tan nhanh.
- Liều dùng chính xác theo lượng tôm ăn thực tế.
- Thức ăn không bị nhão, vỡ vụn, không làm bẩn nước.
- Tránh các chất "kỵ" nhau làm mất tác dụng.

## Nguyên tắc 1: Tính liều theo kg thức ăn, không theo diện tích
Các chế phẩm trộn ăn luôn ghi liều theo **gam hoặc ml trên 1 kg thức ăn**. Vì vậy bước đầu tiên là biết chính xác lượng thức ăn của cữ đó.

Ví dụ ao cho ăn 60 kg/ngày, chia 4 cữ, mỗi cữ 15 kg:

| Sản phẩm | Liều theo nhãn (dùng hằng ngày) | Lượng cho cữ 15 kg |
|---|---|---|
| **US LACTO** (bột) | 5 g/kg thức ăn | 75 g |
| **BIOTIC 99** (nước) | 3 ml/kg thức ăn | 45 ml |
| **HEPALIVER-FS** (nước) | 5 ml/kg thức ăn | 75 ml |

Khi tăng giảm lượng thức ăn theo nhá, nhớ tính lại liều chế phẩm cho cữ đó. Đây chỉ là ví dụ minh họa cách tính, bà con chọn sản phẩm và liều theo tình trạng ao và hướng dẫn nhãn.

## Nguyên tắc 2: Lượng nước pha vừa đủ
- Nước quá ít: chế phẩm không thấm đều, có viên có, viên không.
- Nước quá nhiều: thức ăn nhão, vỡ, chìm nhanh và tan trong nước.

Kinh nghiệm thường dùng: tổng dung dịch pha (nước + chế phẩm dạng nước) khoảng **30–50 ml cho mỗi kg thức ăn viên**. Viên nhỏ (tôm nhỏ) thấm nhanh hơn nên dùng mức thấp; viên lớn có thể dùng mức cao hơn. Bà con nên thử với một lượng nhỏ trước để chọn mức phù hợp với loại thức ăn đang dùng.

Dùng nước sạch, nguội, không có chlorine dư. Không dùng nước ấm hoặc nước nóng vì làm chết vi sinh và phân hủy vitamin.

## Nguyên tắc 3: Thứ tự trộn chuẩn
1. **Trải thức ăn** thành lớp mỏng trên bạt sạch, thau lớn hoặc dùng máy trộn.
2. **Hòa chế phẩm** với lượng nước đã tính. Chế phẩm dạng bột cần khuấy kỹ cho tan hết.
3. **Rưới hoặc phun đều** dung dịch lên thức ăn. Bình phun giúp trộn đều hơn rưới tay.
4. **Đảo nhẹ tay** từ dưới lên, tránh làm vỡ viên.
5. **Để yên 15–30 phút** ở nơi thoáng, có bóng mát cho dung dịch thấm vào viên. Nhãn US LACTO, BIOTIC 99, HEPALIVER-FS đều hướng dẫn để yên 15 phút trước khi cho ăn.
6. **Áo bao** (xem phần dưới).
7. **Để ráo thêm một lúc** rồi cho tôm ăn.

## Chất bao: dùng loại nào, dùng bao nhiêu?
Chất bao (chất kết dính) tạo một lớp màng mỏng quanh viên, giữ hoạt chất lại khi viên rơi xuống nước.

| Loại chất bao | Ưu điểm | Lưu ý |
|---|---|---|
| Chất kết dính chuyên dùng (bột hoặc nước) | Bao tốt, ít ảnh hưởng nước, dễ dùng | Dùng theo liều nhà sản xuất |
| Dầu mực, dầu cá | Vừa bao vừa dẫn dụ, tôm thích ăn | Dùng ít, nhiều quá gây váng dầu, bẩn nước |
| Gelatin | Bao khá tốt | Pha đúng tỷ lệ, tránh dính cục |

Lưu ý quan trọng:
- **Áo bao sau cùng**, sau khi chế phẩm đã thấm vào viên.
- Không dùng chất bao quá liều làm viên dính cục, tôm khó ăn.
- Không cần áo bao quá dày, chỉ cần lớp màng mỏng.

## Nguyên tắc 4: Không trộn chung các chất "kỵ" nhau
| Không nên trộn chung | Lý do |
|---|---|
| Vi sinh (men tiêu hóa) + kháng sinh | Kháng sinh diệt cả lợi khuẩn |
| Vi sinh + axit hữu cơ | Axit có thể làm giảm hoạt lực lợi khuẩn (nhãn BIOTIC 99 khuyến cáo không dùng chung) |
| Vi sinh + chất sát trùng (iodine, BKC…) | Chất sát trùng diệt vi khuẩn |
| Quá nhiều chế phẩm dạng nước trong 1 cữ | Thức ăn quá ướt, nhão, dễ tan |

Cách làm thực tế: chia chế phẩm ra các cữ khác nhau trong ngày. Ví dụ cữ sáng trộn men tiêu hóa, cữ trưa trộn bổ gan, cữ chiều trộn khoáng hoặc đạm, cữ tối trộn lại men tiêu hóa. Bà con tự sắp xếp theo các sản phẩm đang dùng và theo tần suất ghi trên nhãn.

## Về thuốc trộn thức ăn
Khi cán bộ thú y chỉ định dùng thuốc trộn ăn cho tôm, bà con cần:

- **Chỉ dùng thuốc được phép lưu hành**, đúng liều, đúng thời gian theo chỉ định.
- **Tính liều chính xác theo kg thức ăn hoặc theo trọng lượng tôm** như hướng dẫn.
- **Ngưng dùng men vi sinh trong cữ có thuốc**, có thể dùng lại men sau đợt thuốc để phục hồi đường ruột.
- **Tuân thủ thời gian ngưng thuốc trước thu hoạch** để không bị tồn dư.
- **Không tự ý tăng liều hoặc kéo dài** vì dễ gây kháng thuốc và hại gan.

Không tự mua kháng sinh trộn "phòng bệnh". Kháng sinh không phải chất phòng bệnh và việc dùng tràn lan gây nhiều hệ lụy.

## Bảo quản thức ăn đã trộn
- **Trộn cữ nào cho ăn cữ đó**, tối đa trộn cho các cữ trong cùng buổi.
- **Không phơi nắng**: nắng làm chết vi sinh, phân hủy vitamin C và nhiều hoạt chất.
- **Không để qua đêm**: thức ăn ẩm dễ lên men lạ, mốc, sinh độc tố.
- **Đậy kín, để nơi mát** nếu phải chờ.
- **Vệ sinh dụng cụ trộn** sau mỗi lần dùng, phơi khô bạt, thau.

## Dụng cụ trộn nên có ở trại
Chuẩn bị sẵn dụng cụ giúp việc trộn nhanh, đều và chính xác hơn mỗi ngày:

- **Cân nhỏ** (cân điện tử loại vài kg) để cân chế phẩm dạng bột, và **ca, ống đong có vạch** để đong chế phẩm dạng nước.
- **Bạt sạch hoặc thau lớn** chỉ dùng riêng cho việc trộn thức ăn, không dùng chung với vôi, hóa chất.
- **Bình phun tay** giúp dung dịch phủ đều lên thức ăn hơn so với rưới bằng ca.
- **Máy trộn thức ăn** cho trại có nhiều ao hoặc lượng thức ăn lớn mỗi cữ, giúp đỡ tốn công và trộn đều.
- **Thùng có nắp** để đựng thức ăn đã trộn trong lúc chờ cho ăn, đặt ở chỗ mát.
- **Sổ ghi chép** lượng thức ăn và chế phẩm đã trộn từng cữ, tiện đối chiếu khi có sự cố.

Một mẹo nhỏ: dán bảng liều của các sản phẩm đang dùng (tính sẵn cho 1 kg, 10 kg, 20 kg thức ăn) ngay tại chỗ trộn. Người làm thuê hay người nhà thay ca cũng trộn đúng liều, không phải tính lại mỗi lần.

## Những lỗi thường gặp khi trộn
- Ước lượng chế phẩm bằng "nắm tay", "nắp chai" thay vì cân đo.
- Trộn xong cho ăn ngay, chưa đủ thời gian thấm.
- Phơi thức ăn đã trộn ngoài nắng cho "khô nhanh".
- Trộn một mẻ lớn cho cả ngày.
- Đổ hết các chế phẩm vào một thau trộn chung.
- Dùng dầu mực quá nhiều làm váng dầu trên mặt ao.

## Câu hỏi thường gặp

### Trộn chế phẩm xong bao lâu thì cho tôm ăn?
Thường để yên khoảng 15–30 phút ở chỗ mát cho chế phẩm thấm vào viên, áo bao, để ráo rồi cho ăn. Các sản phẩm như US LACTO, BIOTIC 99, HEPALIVER-FS hướng dẫn để yên 15 phút.

### Có cần phơi khô thức ăn sau khi trộn không?
Không cần phơi nắng. Chỉ cần để ráo ở nơi thoáng, có bóng mát. Phơi nắng làm giảm hiệu quả vi sinh và vitamin.

### Một cữ ăn có thể trộn bao nhiêu loại chế phẩm?
Nên hạn chế 1–2 loại mỗi cữ để thức ăn không quá ướt và tránh các chất kỵ nhau. Chia các chế phẩm khác sang cữ khác trong ngày.

### Dùng dầu mực làm chất bao có tốt không?
Dầu mực vừa bao vừa dẫn dụ tôm ăn, nhưng chỉ nên dùng lượng ít. Dùng nhiều dễ gây váng dầu trên mặt nước, ảnh hưởng trao đổi oxy.

### Trộn men vi sinh cùng bổ gan được không?
Thường có thể trộn chung nếu tổng lượng dung dịch không làm thức ăn quá ướt. Tuy nhiên nên đọc kỹ nhãn từng sản phẩm, và tuyệt đối không trộn men vi sinh với kháng sinh, axit hữu cơ hay chất sát trùng.`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'cach-doc-nha-sang-an-dieu-chinh-luong-an-tom-the', topic: 'technique', daysAgo: 1.425,
    title: L('Cách đọc nhá (sàng ăn) và điều chỉnh lượng ăn hằng ngày cho tôm thẻ'),
    excerpt: L('Nhá là công cụ rẻ nhất để biết tôm ăn bao nhiêu và khỏe hay yếu. Cách đặt nhá, lượng thức ăn bỏ nhá, thời gian kiểm tra theo cỡ tôm và bảng tăng giảm lượng ăn.'),
    body: L(
`Thức ăn chiếm phần lớn giá thành nuôi tôm. Cho ăn thiếu, tôm chậm lớn; cho ăn dư, nước dơ, khí độc tăng, tôm dễ bệnh. Bảng cho ăn của nhà sản xuất chỉ là điểm xuất phát, còn lượng ăn thực tế mỗi ngày phải dựa vào **nhá** (sàng ăn). Đọc nhá đúng là kỹ năng quan trọng bậc nhất của người nuôi tôm thẻ. Bài viết này hướng dẫn chi tiết.

## Nhá là gì và để làm gì?
Nhá là một khung (vuông hoặc tròn) căng lưới mịn, được thả xuống đáy ao ở vị trí cố định. Mỗi cữ, bà con bỏ một lượng nhỏ thức ăn vào nhá cùng lúc với rải thức ăn ra ao, sau một khoảng thời gian thì kéo nhá lên kiểm tra.

Nhá giúp bà con biết:
- **Tôm ăn hết hay còn dư** để điều chỉnh cữ sau.
- **Sức khỏe tôm**: ruột, gan, vỏ, mang, kích cỡ.
- **Tình trạng đáy ao** gần vị trí đặt nhá.
- **Phân tôm** có bình thường không.

## Cách đặt nhá đúng
- **Số lượng**: ao 1.000–2.000 m² thường đặt 2–4 nhá; ao lớn hơn đặt thêm, phân bố đều quanh ao.
- **Vị trí**: cách bờ khoảng 1,5–3 m, nơi đáy sạch, có dòng chảy nhẹ. Không đặt ở vùng tụ chất thải (giữa ao bạt có hố xi phông), không đặt sát quạt nơi dòng chảy mạnh, không đặt ở góc ao "chết".
- **Cố định vị trí** suốt vụ để kết quả so sánh được giữa các ngày.
- **Kích thước**: nhá phổ biến có cạnh khoảng 60–80 cm, có vành chắn để thức ăn không trôi ra.
- **Vệ sinh nhá** thường xuyên, phơi nắng định kỳ để tránh bám bẩn, rong, vi khuẩn.

Ở tháng đầu tôm nhỏ, thường bà con chủ yếu cho ăn theo bảng và dùng nhá để quan sát. Từ khoảng ngày 20–30 trở đi, nhá trở thành căn cứ chính để điều chỉnh lượng ăn.

## Bỏ bao nhiêu thức ăn vào nhá?
Lượng thức ăn bỏ vào nhá được tính theo phần trăm của lượng thức ăn cữ đó, chia đều cho các nhá. Mức tham khảo phổ biến:

| Giai đoạn | Lượng thức ăn bỏ vào nhá (so với lượng cữ) |
|---|---|
| Tháng thứ nhất | Khoảng 1% |
| Tháng thứ hai | Khoảng 1,5–2% |
| Tháng thứ ba trở đi | Khoảng 2–3% |

Bà con nên tham khảo thêm hướng dẫn của hãng thức ăn đang dùng vì mỗi hãng có khuyến cáo riêng. Quan trọng là giữ **cách tính nhất quán** để kết quả nhá có ý nghĩa.

## Bao lâu thì kiểm tra nhá?
Thời gian kiểm tra phụ thuộc vào cỡ tôm: tôm càng lớn ăn càng nhanh.

| Cỡ tôm (gam/con) | Thời gian kiểm tra sau khi cho ăn (tham khảo) |
|---|---|
| Dưới 3 g | 2,5–3 giờ |
| 3–5 g | 2–2,5 giờ |
| 5–10 g | 1,5–2 giờ |
| 10–15 g | 1–1,5 giờ |
| Trên 15 g | Khoảng 1 giờ |

Nhiệt độ cũng ảnh hưởng: trời mát tôm ăn chậm hơn, trời nóng vừa phải tôm ăn nhanh hơn. Bà con nên kéo nhá đúng giờ đã định cho từng giai đoạn để so sánh được giữa các cữ.

## Đọc nhá và điều chỉnh lượng ăn cữ sau
Kéo nhá lên từ từ, quan sát lượng thức ăn còn lại:

| Kết quả nhá | Ý nghĩa | Điều chỉnh cữ sau (tham khảo) |
|---|---|---|
| Hết sạch, nhiều tôm còn trong nhá | Tôm đói, thiếu thức ăn | Tăng 5–10% |
| Hết sạch, ít tôm | Lượng vừa đến hơi thiếu | Tăng khoảng 5% hoặc giữ nguyên |
| Còn rất ít (dưới khoảng 10%) | Lượng vừa đủ | Giữ nguyên |
| Còn khoảng 10–25% | Hơi dư | Giảm khoảng 10% |
| Còn nhiều (trên 25%) | Dư nhiều hoặc tôm có vấn đề | Giảm 20–30%, kiểm tra tôm và môi trường |
| Gần như còn nguyên | Tôm bỏ ăn | Ngưng hoặc giảm mạnh, tìm nguyên nhân ngay |

Một số nguyên tắc khi điều chỉnh:
- **Xét tổng các nhá**, không dựa vào một nhá duy nhất. Nếu các nhá cho kết quả rất khác nhau, có thể thức ăn rải không đều hoặc đáy ao một khu vực có vấn đề.
- **Tăng từ từ, giảm dứt khoát**: tăng mỗi lần 5–10%, nhưng khi tôm có dấu hiệu bỏ ăn thì giảm mạnh ngay.
- **Xem xu hướng nhiều cữ**: nếu nhá dư liên tục 2–3 cữ, không chỉ giảm lượng mà phải kiểm tra tôm.
- **Điều chỉnh theo từng cữ**: cữ sáng sớm và cữ tối thường tôm ăn khác cữ trưa.

## Đọc sức khỏe tôm qua nhá
Mỗi lần kéo nhá là một lần "khám" tôm miễn phí. Bà con nên tập thói quen quan sát:

- **Đường ruột**: đầy, liên tục là tốt; rỗng, đứt khúc là cảnh báo. Xem [tôm bị đường ruột: nguyên nhân, cách phòng](/vi/blog/tom-bi-duong-ruot-ruot-long-dut-khuc-nguyen-nhan-cach-phong).
- **Gan tụy**: vàng nâu, đầy là tốt; nhạt, teo là cảnh báo. Xem [bổ gan cho tôm: khi nào cần](/vi/blog/bo-gan-cho-tom-khi-nao-can-dau-hieu-gan-tuy-yeu).
- **Vỏ**: cứng, sáng bóng; mềm vỏ, nhiều vỏ lột trong nhá cho thấy tôm đang lột đồng loạt.
- **Mang**: sạch; mang đen, vàng, bẩn là dấu hiệu đáy dơ hoặc nhiễm khuẩn.
- **Phụ bộ, râu, đuôi**: nguyên vẹn; cụt râu, hoại tử đuôi là cảnh báo.
- **Kích cỡ**: tôm vào nhá có đều cỡ không.
- **Phân**: phân dài, chìm; phân trắng, phân lỏng là dấu hiệu cần xử lý đường ruột.

Khi thấy phân lỏng, đứt khúc, bà con có thể tăng cường men tiêu hóa như **US LACTO** theo nhãn (10–15 g/kg thức ăn, 2–3 lần/ngày khi có dấu hiệu phân trắng, phân lỏng, phân đứt khúc), đồng thời giảm ăn và kiểm tra môi trường. Nếu tôm bỏ ăn kèm chết rải rác, gan teo, nên lấy mẫu xét nghiệm.

## Những trường hợp không nên tăng ăn dù nhá hết
- **Tôm đang lột xác đồng loạt**: tôm giảm ăn tự nhiên, sau lột lại ăn mạnh; nên giữ ổn định hoặc giảm nhẹ trong 1–2 ngày lột.
- **Trời mưa lớn, nhiệt độ giảm đột ngột** hoặc nắng nóng gay gắt.
- **Oxy thấp, khí độc cao**: tôm có vẻ "ăn hết" nhưng thực chất thức ăn có thể bị cá tạp, cua ăn hoặc trôi khỏi nhá.
- **Sau khi dùng hóa chất** diệt khuẩn, diệt tảo.

## Nguyên nhân nhá dư mà tôm không bệnh
- Thức ăn rải không đều, tập trung quá nhiều một khu vực.
- Đổi cỡ viên hoặc đổi loại thức ăn đột ngột.
- Thức ăn kém chất lượng, mùi vị không hấp dẫn, viên bị ẩm.
- Đặt nhá ở vị trí đáy dơ, tôm không vào.
- Kéo nhá quá sớm so với cỡ tôm.

Kiểm tra lại các yếu tố này trước khi kết luận tôm có vấn đề.

## Ghi chép nhá hằng ngày
Một cuốn sổ đơn giản giúp bà con quản lý ao tốt hơn rất nhiều:

| Ngày | Cữ | Lượng ăn (kg) | Kết quả nhá 1 – 2 – 3 – 4 | Điều chỉnh | Ghi chú (thời tiết, lột, chỉ tiêu nước) |
|---|---|---|---|---|---|
| … | Sáng | … | Hết – Hết – Còn ít – Hết | Tăng 5% | Nắng, kiềm ổn |

Nhìn lại sổ, bà con sẽ thấy rõ xu hướng sức ăn, phát hiện sớm khi tôm giảm ăn, và tính được FCR cuối vụ. Kết hợp với [cách tính lượng thức ăn cho tôm thẻ](/vi/blog/cach-tinh-luong-thuc-an-cho-tom-the) để có kế hoạch cho ăn hoàn chỉnh.

## Câu hỏi thường gặp

### Ao bao nhiêu mét vuông thì đặt mấy nhá?
Ao khoảng 1.000–2.000 m² thường đặt 2–4 nhá, phân bố đều quanh ao, cách bờ khoảng 1,5–3 m. Ao lớn hơn thì đặt thêm để kết quả đại diện cho cả ao.

### Tôm nhỏ có cần kiểm tra nhá không?
Tháng đầu chủ yếu cho ăn theo bảng, nhưng vẫn nên đặt nhá để quan sát sức khỏe tôm và tập cho tôm vào nhá. Từ khoảng ngày 20–30, nhá là căn cứ chính để điều chỉnh lượng ăn.

### Nhá hết sạch có phải lúc nào cũng nên tăng ăn?
Không. Khi tôm đang lột đồng loạt, trời xấu, oxy thấp hoặc khí độc cao thì không nên tăng dù nhá hết. Cần xem cả tình trạng tôm và môi trường.

### Các nhá cho kết quả khác nhau thì làm sao?
Xem xét tổng thể tất cả nhá. Nếu chênh lệch lớn kéo dài, kiểm tra cách rải thức ăn và đáy ao tại các vị trí đó, có thể phải dời nhá hoặc rải lại cho đều.

### Bao lâu thì vệ sinh nhá một lần?
Nên rửa nhá sau mỗi lần kiểm tra nếu thấy bẩn, và phơi nắng định kỳ vài ngày một lần để hạn chế rong, vi khuẩn bám.`),
  },
];
