'use strict';
/**
 * Batch F (26/11/2026): five long-form Vietnamese guides on whiteleg shrimp (tôm thẻ chân trắng):
 * stocking density, salinity, lime, the pond log, and scattered mortality.
 * Same conventions as seed-posts-a..e.js (see src/services/article.js):
 *   ## headings -> table of contents, "## Câu hỏi thường gặp" -> FAQ + FAQPage schema,
 *   **PRODUCT NAME** (exact `ten` from nhan/san-pham.json) -> automatic product link.
 * Doses are quoted only from the label (nhan/san-pham.json); products without a dose there get none.
 * Numbers elsewhere are labelled as reference ranges. Vietnamese only: en/zh fall back to vi.
 * `date` fixes the publication date (see seed.js).
 */
const L = (vi, en, zh) => ({ vi, en, zh });
const DAY = '2026-11-26T';

module.exports = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'mat-do-tha-tom-the-bao-nhieu-la-hop-ly', topic: 'technique', daysAgo: 0, date: `${DAY}09:00:00+07:00`,
    title: L('Mật độ thả tôm thẻ bao nhiêu là hợp lý? Ao đất, ao bạt'),
    excerpt: L('Mật độ thả tôm thẻ bao nhiêu là hợp lý? Khoảng tham khảo theo kiểu ao (đất, bạt), cách chọn theo trình độ, oxy, nguồn nước và rủi ro khi thả quá dày.'),
    body: L(
`Không có một con số mật độ thả tôm thẻ đúng cho mọi ao. Mật độ hợp lý là mật độ mà ao của bà con đủ oxy, đủ khả năng xử lý đáy và nước, và người nuôi quản lý nổi. Với ao đất, mật độ thường thấp hơn nhiều so với ao lót bạt có quạt nước và sục khí mạnh; thả vượt quá khả năng của ao là nguyên nhân phổ biến khiến tôm chậm lớn, hao hụt và dễ bệnh.

Bài này đưa ra khoảng mật độ tham khảo theo từng kiểu nuôi, rồi hướng dẫn bà con tự cân nhắc theo điều kiện thực tế của ao. Các con số chỉ để tham khảo: mật độ cụ thể nên hỏi kỹ thuật viên địa phương hoặc theo hướng dẫn của cơ quan chuyên môn tại vùng nuôi.

## Mật độ thả tôm thẻ bao nhiêu con/m² là hợp lý?
Tôm thẻ chân trắng (*Litopenaeus vannamei*) chịu được mật độ cao hơn nhiều loài tôm khác, nên mới có các mô hình từ quảng canh cải tiến đến siêu thâm canh. Nhưng chịu được không có nghĩa là ao nào cũng nuôi được dày. Mật độ cao chỉ làm được khi hệ thống đủ oxy, có xử lý chất thải tốt và người nuôi theo dõi sát mỗi ngày.

Bảng dưới đây là khoảng tham khảo thường gặp, không phải khuyến cáo cho từng ao:

| Kiểu nuôi | Mật độ thả tham khảo (con/m²) | Điều kiện đi kèm |
|---|---|---|
| Quảng canh cải tiến | Khoảng vài con đến khoảng 10 | Ít hoặc không cho ăn nhiều, phụ thuộc thức ăn tự nhiên |
| Bán thâm canh (ao đất) | Khoảng 20 – 50 | Có quạt nước, cho ăn bằng thức ăn công nghiệp |
| Thâm canh (ao đất hoặc ao bạt) | Khoảng 60 – 120 | Quạt nước, sục khí đáy, xi phông (ao bạt), quản lý chặt |
| Siêu thâm canh (có mái che, biofloc, nuôi nhiều giai đoạn) | Có thể cao hơn nữa | Cần kỹ thuật và vận hành chuyên sâu, rủi ro lớn |

Mật độ thả là số tôm ban đầu. Mật độ lúc thu hoạch còn phụ thuộc tỷ lệ sống, bạn có thể xem cách ước lượng trong bài [ước lượng tỷ lệ sống và sản lượng tôm](/vi/blog/uoc-luong-ty-le-song-san-luong-tom).

## Chọn mật độ theo những yếu tố nào?
Thay vì chạy theo mật độ của ao hàng xóm, bà con hãy tự đối chiếu với các yếu tố sau.

### Khả năng cấp oxy
Mật độ càng cao, tôm và vi sinh vật trong ao tiêu thụ càng nhiều oxy, nhất là về đêm và sáng sớm. Nếu hệ thống quạt, sục khí không đủ, oxy tụt thấp sẽ làm tôm nổi đầu, giảm ăn và dễ nhiễm bệnh. Bà con có thể xem thêm [oxy hòa tan ao nuôi tôm bao nhiêu là đủ](/vi/blog/oxy-hoa-tan-ao-nuoi-tom-bao-nhieu-la-du) để tính hệ thống thiết bị cho phù hợp.

### Kiểu ao và khả năng xử lý đáy
Ao lót bạt có xi phông, gom chất thải ra giữa ao dễ quản lý đáy hơn, nên thường chịu được mật độ cao hơn ao đất. Ao đất khó kiểm soát lớp bùn đáy nên mật độ cao dễ sinh khí độc và đáy ao xấu nhanh. Hai mô hình được so sánh chi tiết ở bài [nuôi tôm ao bạt hay ao đất](/vi/blog/nuoi-tom-ao-bat-hay-ao-dat-so-sanh).

### Nguồn nước và khả năng xử lý nước
Ao có hệ thống ao chứa, ao lắng, ao xử lý riêng sẽ chủ động hơn ao lấy nước trực tiếp từ kênh. Nếu nguồn nước thường xuyên bị ô nhiễm, mặn thất thường hoặc có dịch bệnh xung quanh, nên giảm mật độ để giảm rủi ro.

### Kinh nghiệm và năng lực quản lý
Người mới nuôi nên bắt đầu ở mật độ vừa phải để làm quen việc đo môi trường, cho ăn theo nhá sàng, xử lý đáy. Khi đã có vài vụ ổn định mới nâng dần. Nuôi dày cần thời gian bà con ở ao nhiều hơn, thiết bị, điện và nhân lực dự phòng.

### Mùa vụ và thời tiết
Mùa mưa, giao mùa, nắng nóng gay gắt hoặc đợt lạnh làm môi trường dao động mạnh. Nhiều bà con giảm mật độ ở vụ có thời tiết khó đoán. Có thể tham khảo [nuôi tôm mùa lạnh, nhiệt độ thấp](/vi/blog/nuoi-tom-mua-lanh-nhiet-do-thap) và [nuôi tôm mùa nắng nóng](/vi/blog/nuoi-tom-mua-nang-nong-giam-nhiet-giu-oxy).

### Chất lượng con giống
Giống khỏe, đồng đều, đã kiểm tra bệnh mới "gánh" được mật độ cao. Giống yếu thả dày chỉ làm hao hụt nhanh hơn. Xem thêm [cách chọn tôm giống thẻ chân trắng chất lượng](/vi/blog/cach-chon-tom-giong-the-chan-trang-chat-luong).

## Thả quá dày gây ra hậu quả gì?
Khi mật độ vượt khả năng của ao, thường xảy ra các vấn đề sau:
- **Thiếu oxy**, đặc biệt về đêm, tôm nổi đầu, tấp mé.
- **Khí độc tăng nhanh** (NH3, NO2, H2S) do thức ăn và phân thải nhiều, đáy ao dơ nhanh.
- **Tôm cạnh tranh thức ăn và không gian**, kích cỡ không đều, chậm lớn.
- **Stress kéo dài**, sức đề kháng giảm, dễ nhiễm bệnh và dễ lây lan trong ao.
- **Hao hụt lớn khi có sự cố**, vì một đợt mất điện, một đêm mưa lớn cũng đủ gây thiệt hại nặng.
- **Chi phí tăng** do điện, thức ăn, xử lý môi trường, trong khi lợi nhuận không chắc cao hơn.

Mật độ vừa phải mà tôm lớn đều, tỷ lệ sống cao nhiều khi cho hiệu quả tốt hơn mật độ cao nhưng hao hụt nhiều. Bà con có thể cân nhắc các khoản mục trong bài [chi phí nuôi tôm thẻ 1 hecta](/vi/blog/chi-phi-nuoi-tom-the-1-hecta-va-cach-giam-gia-thanh).

## Cách xác định mật độ cho ao của mình
Có thể làm theo các bước sau:
1. **Đánh giá hạ tầng:** số quạt nước, sục khí, máy phát điện dự phòng, ao chứa, ao lắng.
2. **Nhìn lại các vụ trước:** ao từng gặp vấn đề gì (khí độc, oxy, bệnh), vụ nào thả dày thì kết quả ra sao. Dữ liệu ghi chép của chính ao mình là nguồn tham khảo đáng tin nhất, xem [nhật ký ao nuôi tôm ghi gì mỗi ngày](/vi/blog/nhat-ky-ao-nuoi-tom-ghi-gi-moi-ngay).
3. **Chọn mức vừa tầm:** thà thả thấp hơn một chút so với khả năng để còn dư địa xử lý sự cố.
4. **Tính số con giống cần mua** theo diện tích mặt nước và mật độ dự kiến, cộng thêm hao hụt vận chuyển và thả theo hướng dẫn của trại giống.
5. **Hỏi kỹ thuật viên** hoặc cán bộ khuyến nông địa phương về lịch thời vụ và khuyến cáo của vùng.

## Chuẩn bị gì khi thả mật độ cao?
Nuôi dày đòi hỏi đáy ao được xử lý tốt ngay từ đầu. Với vi sinh xử lý đáy, **CLEAR 12H** có công dụng giúp phân huỷ mùn bã hữu cơ, thức ăn thừa, phân tôm tích tụ ở đáy ao. Theo nhãn, sản phẩm cần ủ với đường cát và nước, sục khí 12 - 24 giờ rồi mới dùng; ao bạt dùng 15 - 20 lít/1.000m³ nước, định kỳ 3 ngày một lần; ao đất dùng 10 - 15 lít/1.000m³ nước, định kỳ 5 ngày một lần. Mở quạt nước liên tục khi dùng và dùng lúc có nắng, không dùng khi trời mưa.

Để nắm nền tảng chuẩn bị ao, bà con đọc thêm [quy trình chuẩn bị ao nuôi tôm thẻ 7 bước](/vi/blog/quy-trinh-chuan-bi-ao-nuoi-tom-the-7-buoc) và [quản lý đáy ao bạt: xi phông, quạt nước](/vi/blog/quan-ly-day-ao-bat-nuoi-tom-the-xi-phong-quat-nuoc). Tổng quan cả vụ nuôi có trong [quy trình nuôi tôm thẻ chân trắng từ A đến Z](/vi/blog/quy-trinh-nuoi-tom-the-chan-trang-tu-a-den-z).

Cần tư vấn cho ao của mình? Gọi hotline 1900 252 667 để kỹ thuật viên Thủy Sản Tím tư vấn miễn phí.

## Câu hỏi thường gặp

### Ao đất nên thả bao nhiêu con/m²?
Thường dao động từ vài con đến khoảng vài chục con/m² tùy mô hình (quảng canh cải tiến thấp, bán thâm canh cao hơn). Đây chỉ là khoảng tham khảo. Ao đất khó xử lý đáy nên bà con nên chọn mức vừa tầm và hỏi kỹ thuật viên địa phương.

### Ao bạt có thả dày hơn ao đất được không?
Thường là được, vì ao bạt dễ gom chất thải bằng xi phông và kiểm soát đáy tốt hơn. Tuy vậy, ao bạt cũng cần đủ oxy, quạt nước và điện dự phòng. Thả dày nhưng thiết bị không theo kịp vẫn dễ gặp sự cố.

### Người mới nuôi nên thả mật độ bao nhiêu?
Nên bắt đầu ở mật độ thấp đến vừa, để học cách đo môi trường, cho ăn theo nhá sàng và xử lý đáy. Khi vài vụ liền ổn định mới tăng dần mật độ.

### Thả dày có cho năng suất cao hơn không?
Chỉ khi ao đủ điều kiện quản lý. Nếu vượt khả năng, tôm dễ thiếu oxy, khí độc, hao hụt, chậm lớn và có thể kết quả không hơn ao thả vừa phải. Hiệu quả cần xét theo tỷ lệ sống, cỡ tôm và chi phí, không chỉ số lượng thả.

### Mật độ thả có thay đổi theo mùa không?
Có. Nhiều bà con giảm mật độ ở mùa mưa, giao mùa hoặc những vụ thời tiết bất lợi để giảm rủi ro biến động môi trường. Hãy tham khảo lịch thời vụ và khuyến cáo của cơ quan chuyên môn tại địa phương.
`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'do-do-man-va-dieu-chinh-do-man-ao-tom', topic: 'technique', daysAgo: 0, date: `${DAY}09:10:00+07:00`,
    title: L('Độ mặn ao tôm: cách đo và điều chỉnh khi độ mặn thấp, cao'),
    excerpt: L('Độ mặn ao tôm đo bằng khúc xạ kế hay máy đo thế nào cho đúng, khoảng tham khảo, cách điều chỉnh từ từ khi độ mặn thấp hoặc cao và bổ sung khoáng.'),
    body: L(
`Độ mặn ao tôm đo bằng khúc xạ kế hoặc máy đo độ mặn (đơn vị ppt hoặc ‰, 1 ppt tương đương khoảng 1 gam muối trong 1 lít nước). Tôm thẻ chân trắng chịu được dải độ mặn rất rộng, nhưng khi độ mặn thấp hoặc thay đổi nhanh, tôm dễ gặp khó khăn trong lột xác và tạo vỏ. Nguyên tắc quan trọng nhất là điều chỉnh từ từ và theo dõi thường xuyên, chứ không đổi đột ngột.

Bài này hướng dẫn bà con đo độ mặn đúng cách, hiểu độ mặn ảnh hưởng thế nào đến tôm, và cách xử lý khi độ mặn xuống thấp trong mùa mưa hoặc lên cao trong mùa khô.

## Độ mặn là gì và vì sao ảnh hưởng đến tôm?
Độ mặn là lượng muối hòa tan trong nước, gồm natri, clo, magie, canxi, kali, sunfat và nhiều ion khác. Tôm sống trong nước lợ phải liên tục điều hòa áp suất thẩm thấu giữa cơ thể và môi trường. Tôm thẻ chân trắng là loài rộng muối, có thể sống từ nước lợ nhạt đến nước mặn khá cao, nhưng mỗi khoảng độ mặn đòi hỏi tôm tiêu tốn năng lượng khác nhau.

Độ mặn ảnh hưởng đến:
- **Lột xác và tạo vỏ:** vỏ tôm cần canxi, magie và các khoáng; thiếu khoáng thì tôm dễ mềm vỏ, khó lột.
- **Tăng trưởng và ăn uống:** độ mặn quá xa mức ổn định làm tôm tốn sức, giảm ăn.
- **Độc tính của một số chất:** ví dụ khả năng chịu NO2 của tôm có thể thay đổi theo độ mặn.
- **Hệ vi sinh và tảo:** độ mặn thay đổi mạnh có thể làm tảo tàn, màu nước biến động.

## Đo độ mặn bằng gì cho đúng?
| Dụng cụ | Cách dùng | Lưu ý |
|---|---|---|
| Khúc xạ kế (refractometer) | Nhỏ vài giọt nước lên mặt kính, nhìn vạch phân cách | Rẻ, bền, dễ dùng; cần chỉnh về 0 bằng nước cất; có loại tự bù nhiệt |
| Máy đo độ mặn / máy đo EC điện tử | Nhúng đầu dò vào nước | Nhanh, hiển thị số; cần hiệu chuẩn bằng dung dịch chuẩn đúng hướng dẫn nhà sản xuất |
| Tỷ trọng kế (hydrometer) | Thả vào ống nước mẫu, đọc theo tỷ trọng | Dễ sai nếu nhiệt độ khác chuẩn, cần quy đổi |

### Hiệu chuẩn dụng cụ
- **Khúc xạ kế:** nhỏ nước cất lên mặt kính, đậy nắp, nhìn qua thị kính, chỉnh về vạch 0 theo hướng dẫn của máy. Làm trước mỗi lần dùng hoặc định kỳ.
- **Máy đo điện tử:** hiệu chuẩn bằng dung dịch chuẩn theo hướng dẫn nhà sản xuất, rửa đầu dò bằng nước sạch sau khi dùng và bảo quản đúng cách.
- Lau sạch mặt kính, đầu dò sau mỗi lần đo để không lệch kết quả.

### Cách lấy mẫu
Lấy nước ở vị trí và độ sâu cố định (ví dụ cách mặt nước khoảng nửa cánh tay), xa miệng cống cấp nước. Sau mưa lớn, nước ngọt thường nổi ở lớp mặt nên có thể chênh với nước ở dưới. Ghi lại kết quả mỗi lần đo cùng với thời tiết, xem thêm [cách đo chỉ tiêu nước ao tôm bằng test kit](/vi/blog/cach-do-chi-tieu-nuoc-ao-tom-bang-test-kit) và [nhật ký ao nuôi tôm](/vi/blog/nhat-ky-ao-nuoi-tom-ghi-gi-moi-ngay).

## Độ mặn bao nhiêu là phù hợp cho tôm thẻ?
Tôm thẻ chân trắng chịu được dải độ mặn rộng. Trong thực tế, nhiều vùng nuôi duy trì độ mặn khoảng 10 – 25 ppt (tham khảo), trong khi một số nơi nuôi ở nước lợ nhạt vài ppt hoặc ở độ mặn cao hơn. Con số phù hợp còn phụ thuộc vùng nuôi, giống, giai đoạn và cách quản lý. Điều quan trọng không chỉ là một con số mà là **ổn định và thuần hóa phù hợp**:

- Giống được thuần theo độ mặn của ao trước khi thả; hỏi trại giống về độ mặn đã thuần.
- Trong vụ nuôi, tránh dao động lớn trong thời gian ngắn.

## Độ mặn thấp: nguyên nhân và cách xử lý
### Vì sao độ mặn xuống thấp?
- Mưa lớn, mưa kéo dài, nước ngọt tràn vào ao.
- Lấy nước từ nguồn có độ mặn thấp vào mùa lũ.
- Nuôi ở vùng nước lợ nhạt hoặc vùng nước ngọt pha muối.

### Hậu quả thường gặp
Khi độ mặn thấp, nước thường nghèo khoáng, độ kiềm dễ tụt, tôm dễ mềm vỏ, chậm lột hoặc lột không hoàn chỉnh. Bà con xem thêm [tôm mềm vỏ, chậm lột xác: nguyên nhân và cách xử lý](/vi/blog/tom-mem-vo-cham-lot-xac-nguyen-nhan-cach-xu-ly).

### Cách xử lý
1. **Tránh đổi nước ngọt vào ao khi độ mặn đang thấp.** Hạn chế lấy thêm nước ngọt, che chắn ao, thoát nước mưa tràn bờ khi cần.
2. **Bổ sung khoáng:** nuôi nước lợ nhạt cần chú ý bổ sung các khoáng canxi, magie, kali; nhiều người quan tâm đến **tỷ lệ giữa các ion** (Ca, Mg, K) sao cho gần với tỷ lệ trong nước biển. Cụ thể, tỷ lệ cần đạt thường được kỹ thuật viên tính theo kết quả phân tích nước; bà con đừng tự pha tùy tiện.
3. **Giữ kiềm ổn định:** xem [cách tăng kiềm, ổn định pH ao nuôi tôm](/vi/blog/cach-tang-kiem-on-dinh-ph-ao-nuoi-tom).
4. **Nâng độ mặn từ từ** nếu cần, theo từng bước nhỏ và theo dõi tôm sau mỗi lần điều chỉnh.

**MIX 79** là khoáng tạt ao có công dụng bổ sung khoáng chất cần thiết vào môi trường ao nuôi, giúp quá trình lột xác và tạo vỏ của tôm nhanh hơn. Theo nhãn: dùng định kỳ 5kg/3.000m³ nước, 2 ngày một lần; khi cần tăng độ kiềm dùng 5kg/1.500m³ nước, liên tục 2 ngày. Hòa nước, tạt đều khắp ao, nên dùng vào lúc chiều tối. Thành phần trên nhãn gồm P, Ca (dạng CaCO₃), Mg (dạng MgO) và chất đệm dextrose.

Với khoáng trộn thức ăn, **PREMIX ORA** hỗ trợ quá trình lột xác và tạo vỏ; bà con xem liều lượng ghi trên nhãn sản phẩm.

## Độ mặn cao: nguyên nhân và cách xử lý
### Vì sao độ mặn lên cao?
- Mùa khô, nắng nóng làm nước bốc hơi, muối cô đặc lại.
- Lấy nước từ nguồn nhiễm mặn cao, nước ngầm mặn.
- Ao nông, ít được bổ sung nước.

### Hậu quả thường gặp
Độ mặn cao làm tôm tiêu tốn nhiều năng lượng điều hòa thẩm thấu, ăn kém hơn, tăng trưởng chậm. Ao cũng dễ biến động pH, tảo và nhiệt độ vào những ngày nắng gắt. Bà con xem thêm [nuôi tôm mùa nắng nóng, giảm nhiệt, giữ oxy](/vi/blog/nuoi-tom-mua-nang-nong-giam-nhiet-giu-oxy).

### Cách xử lý
- **Pha loãng từ từ** bằng nước ngọt hoặc nước lợ nhạt đã lắng và xử lý sạch, chia nhỏ nhiều lần, không cấp một lần ồ ạt.
- **Giữ mực nước đủ sâu** để giảm bốc hơi và dao động nhiệt.
- **Kiểm tra nguồn nước cấp** trước khi lấy; nước phải qua ao lắng, xử lý, xem [xử lý nước trước khi thả giống tôm](/vi/blog/xu-ly-nuoc-truoc-khi-tha-giong-tom).

## Nguyên tắc điều chỉnh độ mặn: từ từ và có kiểm soát
Tôm cần thời gian để thích nghi, nên khi nâng hoặc hạ độ mặn, bà con nên:
- Chia thành nhiều bước nhỏ trong nhiều ngày, thường chỉ vài ppt mỗi ngày là mức tham khảo thận trọng.
- Đo độ mặn trước và sau mỗi lần điều chỉnh, ghi vào sổ.
- Quan sát tôm: ăn, hoạt động, lột xác. Nếu tôm có dấu hiệu bất thường, dừng và kiểm tra lại.
- Không điều chỉnh độ mặn đồng thời với nhiều can thiệp lớn khác (thay nước lớn, sát trùng, diệt tảo) nếu không cần thiết.

Mỗi vùng nuôi có điều kiện riêng nên khi độ mặn thấp hoặc biến động bất thường, hãy trao đổi với kỹ thuật viên. Cần tư vấn cho ao của mình? Gọi hotline 1900 252 667 để kỹ thuật viên Thủy Sản Tím tư vấn miễn phí.

## Câu hỏi thường gặp

### Nên đo độ mặn bằng khúc xạ kế hay máy đo điện tử?
Cả hai đều dùng được. Khúc xạ kế rẻ, bền, đơn giản nhưng cần chỉnh về 0 bằng nước cất. Máy đo điện tử nhanh và tiện nhưng cần hiệu chuẩn và bảo quản đầu dò đúng cách. Điều quan trọng là dùng dụng cụ đã hiệu chuẩn và đo ở cùng vị trí mỗi lần.

### Độ mặn bao nhiêu ppt thì tôm thẻ sống được?
Tôm thẻ chân trắng chịu được dải độ mặn rất rộng, từ nước lợ nhạt đến mặn khá cao. Tuy vậy, mức phù hợp nhất còn tùy giống đã thuần, giai đoạn và cách quản lý; nhiều vùng nuôi duy trì khoảng 10 – 25 ppt (tham khảo). Hỏi trại giống và kỹ thuật viên địa phương để chọn mức cho ao.

### Mưa lớn làm độ mặn giảm đột ngột thì làm gì?
Đo ngay độ mặn và độ kiềm, hạn chế để nước ngọt tràn thêm vào ao, tăng cường quạt nước để trộn đều tầng nước, theo dõi tôm ăn và lột xác. Bổ sung khoáng và giữ kiềm ổn định theo hướng dẫn kỹ thuật, tránh can thiệp mạnh cùng lúc.

### Vì sao nuôi nước lợ nhạt tôm hay mềm vỏ?
Nước lợ nhạt thường thiếu khoáng như canxi, magie, kali hoặc mất cân bằng tỷ lệ giữa chúng, trong khi tôm cần khoáng để tạo vỏ sau mỗi lần lột. Vì vậy nuôi ở độ mặn thấp cần chú ý bổ sung khoáng và theo dõi độ kiềm.

### Tăng hoặc giảm độ mặn bao nhiêu mỗi ngày thì an toàn?
Không có con số cố định cho mọi ao. Nguyên tắc là điều chỉnh chậm, chia nhiều bước nhỏ, đo và quan sát tôm sau mỗi bước. Nếu cần thay đổi lớn, hãy hỏi kỹ thuật viên trước khi làm.
`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'dung-voi-trong-ao-tom-caco3-dolomite-voi-song', topic: 'technique', daysAgo: 0, date: `${DAY}09:20:00+07:00`,
    title: L('Dùng vôi trong ao tôm: CaCO3, dolomite, vôi sống khác nhau thế nào?'),
    excerpt: L('Dùng vôi trong ao tôm: vôi sống CaO, CaCO3 và dolomite khác nhau ra sao, dùng lúc cải tạo hay trong vụ nuôi, an toàn khi dùng vôi sống, liên hệ với pH và kiềm.'),
    body: L(
`Ba loại vôi hay dùng trong ao tôm có tác dụng khác nhau: vôi sống (CaO) và vôi tôi chủ yếu dùng để cải tạo đáy ao, nâng pH đất và diệt mầm bệnh khi ao đang trống; CaCO3 (đá vôi nghiền, vôi bột) và dolomite (CaMg(CO3)2) tác dụng nhẹ hơn, dùng để nâng độ kiềm, ổn định pH, và dolomite còn cung cấp thêm magie. Trong lúc đang nuôi tôm, không dùng vôi sống tạt trực tiếp xuống ao.

Dùng vôi đúng giúp ao ổn định, dùng sai (sai loại, quá liều, sai thời điểm) có thể làm pH tăng vọt, tôm sốc và khí độc NH3 tăng. Bài này giúp bà con phân biệt từng loại và dùng cho đúng chỗ.

## Các loại vôi dùng trong ao tôm khác nhau thế nào?
| Loại vôi | Tên hóa học | Đặc điểm chính | Dùng khi nào |
|---|---|---|---|
| Vôi sống (vôi nung, vôi cục) | CaO | Kiềm mạnh, gặp nước tỏa nhiệt mạnh, nâng pH rất cao | Cải tạo ao trống, xử lý đáy, diệt mầm bệnh |
| Vôi tôi (vôi thủy hóa) | Ca(OH)2 | Kiềm mạnh, dạng bột mịn, an toàn hơn vôi sống ở khâu thao tác nhưng vẫn gây bỏng | Cải tạo ao trống, nâng pH đất |
| Đá vôi nghiền, vôi bột (CaCO3) | CaCO3 | Tác dụng chậm, nhẹ, khó làm pH tăng quá cao | Nâng kiềm, ổn định pH, dùng được cả trong vụ |
| Dolomite | CaMg(CO3)2 | Giống CaCO3 nhưng có thêm magie | Nâng kiềm, bổ sung Ca và Mg |

Tên gọi ngoài thị trường khá lẫn lộn, vì vậy bà con nên đọc kỹ thành phần trên bao bì, hỏi rõ cửa hàng là CaO hay CaCO3, và không mua loại không rõ nguồn gốc.

## Vôi sống (CaO) dùng khi nào và dùng thế nào?
Vôi sống phản ứng mạnh với nước, nâng pH rất cao và tỏa nhiệt. Nhờ đó vôi sống có tác dụng khử trùng đáy, diệt mầm bệnh, và khi đáy ao phèn thì giúp nâng pH đất. Nó thường dùng ở **giai đoạn cải tạo ao**, khi ao đã tháo cạn, chưa có tôm.

### Dùng trong cải tạo ao
- Sau thu hoạch, ao tháo cạn, vệ sinh bùn đáy rồi rải vôi đều khắp đáy và bờ; có thể rải khi đáy còn ẩm.
- Liều tham khảo thường tính theo pH đất đáy, phổ biến khoảng vài kg đến khoảng 10 kg trên 100 m² (tùy pH đất); đáy ao phèn thường cần nhiều hơn. Liều cụ thể nên theo hướng dẫn của kỹ thuật viên địa phương, không tự tăng quá mức.
- Sau khi rải vôi, thường để ao phơi hoặc ngâm một thời gian theo quy trình rồi cấp nước và xử lý nước.

Chi tiết các bước xem [quy trình chuẩn bị ao nuôi tôm thẻ 7 bước](/vi/blog/quy-trinh-chuan-bi-ao-nuoi-tom-the-7-buoc) và [cải tạo ao sau thu hoạch nuôi tôm](/vi/blog/cai-tao-ao-sau-thu-hoach-nuoi-tom).

### An toàn khi dùng vôi sống
Vôi sống có thể gây bỏng da, bỏng mắt, hại đường hô hấp. Bà con nên:
- Mang găng tay, kính bảo hộ, khẩu trang, quần áo dài, ủng.
- Không để vôi sống tiếp xúc nước ngoài ý muốn trong khi vận chuyển, bảo quản.
- Đựng nơi khô ráo, kín, để xa tầm tay trẻ em.
- Nếu vôi dính vào da hoặc mắt, rửa ngay thật nhiều nước sạch và đi khám nếu cần.
- Tuyệt đối **không tạt vôi sống xuống ao đang nuôi tôm**, vì pH và nhiệt tăng đột ngột làm tôm sốc và có thể chết hàng loạt.

## CaCO3 và dolomite: dùng để nâng kiềm
CaCO3 và dolomite tan chậm, dùng để **nâng độ kiềm** và giúp pH ổn định, nên thường dùng ngay cả khi đang nuôi.

- **CaCO3:** chủ yếu cung cấp canxi và carbonat (nguồn kiềm).
- **Dolomite:** ngoài canxi và kiềm còn có magie, hữu ích khi ao thiếu Mg, như ao nuôi nước lợ nhạt.

Độ kiềm của ao tôm thẻ thường được giữ trong khoảng khoảng 120 – 160 mg/L tính theo CaCO3 (tham khảo); khoảng cụ thể nên hỏi kỹ thuật viên theo từng vùng. Bà con xem cách đo và duy trì ở [cách tăng kiềm, ổn định pH ao nuôi tôm](/vi/blog/cach-tang-kiem-on-dinh-ph-ao-nuoi-tom).

### Cách dùng trong vụ nuôi
- Đo độ kiềm và pH trước khi dùng, ghi vào sổ.
- Hòa với nước ao rồi tạt đều, vào buổi chiều mát hoặc theo hướng dẫn của sản phẩm, mở quạt nước.
- Dùng từng lượng nhỏ, chia nhiều lần, đo lại sau đó; không dồn một lần quá nhiều.
- Dùng loại bột mịn, không lẫn tạp chất.

Trong trường hợp bổ sung khoáng và tăng kiềm theo dạng sản phẩm đóng gói, **MIX 79** theo nhãn có thành phần Ca (dạng CaCO₃), Mg (dạng MgO), P và dextrose; liều dùng trên nhãn: định kỳ 5kg/3.000m³ nước 2 ngày một lần, hoặc khi cần tăng độ kiềm 5kg/1.500m³ nước dùng liên tục 2 ngày, hòa nước tạt đều khắp ao vào lúc chiều tối.

## Vôi liên quan thế nào đến pH và kiềm?
pH cho biết nước đang "chua" hay "kiềm" ở thời điểm đó, còn **độ kiềm** là khả năng nước giữ pH ổn định. Kiềm thấp thì pH dễ dao động mạnh giữa sáng và chiều, nhất là khi tảo phát triển mạnh. CaCO3 và dolomite giúp nâng kiềm nên giúp pH ổn định hơn.

Lưu ý: khi pH cao, tỷ lệ NH3 độc trong tổng đạm amoni tăng lên. Vì vậy, nâng pH quá nhiều bằng vôi mạnh có thể làm khí độc nguy hiểm hơn với tôm. Muốn hiểu thêm về khí độc, xem [quản lý khí độc ao nuôi mùa mưa](/vi/blog/quan-ly-khi-doc-ao-nuoi-mua-mua).

## Những sai lầm thường gặp khi dùng vôi
1. **Dùng vôi sống như vôi bột** khi đang nuôi tôm, gây sốc pH và nhiệt.
2. **Quá liều**, làm pH tăng vọt, nước đục, tảo chết hàng loạt rồi nước sập.
3. **Tạt vôi cùng lúc với nhiều sản phẩm khác** (vi sinh, thuốc sát trùng, thuốc diệt tảo), làm phản ứng khó kiểm soát và giảm hiệu quả. Nên cách ngày theo hướng dẫn của từng sản phẩm.
4. **Không đo pH, kiềm trước và sau khi dùng**, nên không biết liều đã đủ hay thừa.
5. **Dùng vôi không rõ thành phần**, lẫn tạp chất hoặc ẩm mốc.
6. **Dùng vôi thay cho xử lý đáy:** vôi không thay được việc hút bùn, phơi đáy và vệ sinh ao.

Với bước chuẩn bị ao, một số bà con kết hợp sát trùng nước. **VH-GLUBENCO PRO** theo nhãn có công dụng sát trùng nguồn nước, giúp làm giảm vi khuẩn, nấm, nguyên sinh động vật gây hại; trong thời gian chuẩn bị ao dùng 1,5 lít/1.000m³ nước, để 2 - 3 ngày, hòa tan với nước gấp 100 lần rồi phun hoặc tạt đều. Cần đọc kỹ nhãn, nhất là thời gian ngưng sử dụng trước thu hoạch.

Gặp tình trạng ao phèn, pH đáy thấp, kiềm tụt liên tục, bà con nên đo kỹ và hỏi kỹ thuật viên trước khi tăng liều. Cần tư vấn cho ao của mình? Gọi hotline 1900 252 667 để kỹ thuật viên Thủy Sản Tím tư vấn miễn phí.

## Câu hỏi thường gặp

### Vôi sống và vôi bột khác nhau thế nào?
Vôi sống là CaO, kiềm rất mạnh, tỏa nhiệt khi gặp nước, dùng khi cải tạo ao trống. Vôi bột thường là CaCO3 (đá vôi nghiền), tác dụng nhẹ, tan chậm, dùng nâng kiềm và ổn định pH, kể cả trong vụ nuôi. Hai loại không thay thế cho nhau.

### Dolomite khác CaCO3 chỗ nào?
Cả hai đều giúp nâng kiềm. Dolomite có thêm magie nên hữu ích khi ao thiếu Mg, nhất là ao nước lợ nhạt. CaCO3 chủ yếu cung cấp canxi.

### Có tạt vôi sống khi ao đang nuôi tôm được không?
Không nên. Vôi sống làm pH và nhiệt tăng đột ngột, dễ gây sốc và chết tôm. Khi đang nuôi, nếu cần nâng kiềm, hãy dùng CaCO3, dolomite hoặc sản phẩm khoáng theo hướng dẫn.

### Bao nhiêu vôi cho ao cải tạo?
Liều phụ thuộc pH đất đáy, loại đất, ao phèn hay không. Không có một liều cố định. Bà con nên đo pH đất, tham khảo hướng dẫn kỹ thuật địa phương và không tự tăng liều quá mức.

### Làm sao biết đã dùng đủ vôi trong vụ nuôi?
Đo pH sáng và chiều, đo độ kiềm trước và sau khi dùng, so với khoảng mục tiêu mà kỹ thuật viên khuyến cáo. Nếu pH dao động mạnh, kiềm thấp thì cần bổ sung; nếu pH đã cao thì ngưng và kiểm tra lại.
`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'nhat-ky-ao-nuoi-tom-ghi-gi-moi-ngay', topic: 'technique', daysAgo: 0, date: `${DAY}09:30:00+07:00`,
    title: L('Nhật ký ao nuôi tôm: ghi gì mỗi ngày để quản lý tốt'),
    excerpt: L('Nhật ký ao nuôi tôm ghi gì mỗi ngày: thông số nước, thức ăn, nhá sàng, tôm chết, thuốc đã dùng, thời tiết. Có bảng mẫu và cách dùng sổ để phát hiện sớm.'),
    body: L(
`Nhật ký ao nuôi tôm nên ghi mỗi ngày những thông tin sau: thông số nước (pH, nhiệt độ, độ mặn, độ trong, kiềm và khí độc khi đo), lượng thức ăn và kết quả nhá sàng, tình trạng tôm (hoạt động, lột xác, chết), sản phẩm đã dùng kèm ngày giờ và liều, thời tiết và sự cố. Có nhật ký, bà con nhìn thấy xu hướng của ao và phát hiện sớm bất thường thay vì chỉ nhớ mang máng.

Đối với bà con, quyển sổ này cũng là thứ kỹ thuật viên cần xem đầu tiên khi bạn nhờ tư vấn. Bài này hướng dẫn cách ghi gọn, đủ dùng và có bảng mẫu để in hoặc chép lại.

## Vì sao phải ghi nhật ký ao nuôi?
- **Phát hiện sớm bất thường:** tôm ăn giảm vài ngày liền, pH sáng tụt dần, tôm chết tăng nhẹ mỗi ngày. Những xu hướng này khó thấy nếu không ghi.
- **Tìm nguyên nhân khi có sự cố:** nhìn lại các ngày trước đó (mưa, đổi thức ăn, dùng sản phẩm mới) để lần ra nguyên nhân.
- **Giúp kỹ thuật viên tư vấn đúng:** số liệu rõ thì tư vấn sát hơn là kể bằng lời.
- **Tính toán hiệu quả:** lượng thức ăn, tỷ lệ sống, hệ số chuyển đổi thức ăn, xem [tính FCR và hồ sơ chuyển đổi thức ăn tôm](/vi/blog/tinh-fcr-ho-so-chuyen-doi-thuc-an-tom).
- **Rút kinh nghiệm cho vụ sau:** biết vụ nào thả mật độ nào, thời tiết ra sao, kết quả thế nào.

## Nên ghi những gì mỗi ngày?
### Nhóm 1: thông số môi trường nước
| Chỉ tiêu | Tần suất thường gặp | Ghi chú |
|---|---|---|
| Nhiệt độ | Sáng và chiều | Ghi cùng giờ mỗi ngày |
| pH | Sáng sớm và chiều | Chênh lệch sáng - chiều cũng là thông tin quan trọng |
| Độ mặn | Theo định kỳ, đo thêm sau mưa | Xem [đo và điều chỉnh độ mặn ao tôm](/vi/blog/do-do-man-va-dieu-chinh-do-man-ao-tom) |
| Độ trong | Hằng ngày | Đo bằng đĩa Secchi hoặc ước lượng theo cùng cách |
| Màu nước | Hằng ngày | Mô tả ngắn: xanh nhạt, xanh đậm, nâu, đục |
| Độ kiềm, NH3/NH4+, NO2 | Theo định kỳ hoặc khi nghi ngờ | Xem [cách đo bằng test kit](/vi/blog/cach-do-chi-tieu-nuoc-ao-tom-bang-test-kit) |
| Mực nước | Hằng ngày | Ghi khi cấp hoặc thay nước |

Các khoảng mục tiêu của từng chỉ tiêu nên theo hướng dẫn kỹ thuật cho vùng nuôi của bạn; quan trọng là ghi cùng một giờ, cùng vị trí và so sánh qua các ngày.

### Nhóm 2: thức ăn và nhá sàng
- Số cữ và lượng thức ăn từng cữ, tổng lượng cả ngày, loại thức ăn.
- Kết quả nhá sàng: còn thức ăn hay hết sạch, tôm bắt mồi nhanh hay chậm, màu ruột.
- Tổng thức ăn tích lũy từ đầu vụ (dùng tính FCR).

Cách đọc nhá sàng xem [cách đọc nhá sàng ăn để điều chỉnh lượng ăn tôm thẻ](/vi/blog/cach-doc-nha-sang-an-dieu-chinh-luong-an-tom-the) và [cách tính lượng thức ăn cho tôm thẻ](/vi/blog/cach-tinh-luong-thuc-an-cho-tom-the).

### Nhóm 3: tình trạng tôm
- Tôm hoạt động thế nào, có nổi đầu, tấp mé, bơi lờ đờ không.
- Số tôm chết vớt được (số con, hoặc ước lượng), vị trí và đặc điểm (vỏ mềm, có đốm, ruột đứt khúc...).
- Quan sát lột xác: tôm lột đồng loạt hay rải rác, có vỏ lột nổi không.
- Kiểm tra ruột, gan tụy, màu sắc khi kiểm tra sàng hoặc chài tôm.
- Cỡ tôm khi cân kiểm tra theo định kỳ (ví dụ mỗi tuần).

### Nhóm 4: sản phẩm và biện pháp đã dùng
Ghi **ngày, giờ, tên sản phẩm, liều, cách dùng** và lý do. Ví dụ: vi sinh xử lý đáy, khoáng, sát trùng nước, diệt tảo, bổ sung vào thức ăn. Việc ghi lại giúp bạn tránh dùng chồng chéo, đồng thời đối chiếu thời gian khi tôm có thay đổi. Danh mục sản phẩm của Thủy Sản Tím xem ở [trang sản phẩm](/vi/products).

### Nhóm 5: thời tiết và sự cố
- Nắng, mưa, nhiều mây, gió lớn, nhiệt độ ngoài trời.
- Mất điện, hỏng quạt, rò rỉ bạt, cấp hoặc thay nước, ai vào ao.

## Bảng nhật ký mẫu (có thể in hoặc chép lại)
| Ngày | Ngày nuôi | Nhiệt độ sáng/chiều | pH sáng/chiều | Độ mặn | Độ trong | Thức ăn (kg) | Nhá sàng | Tôm chết | Sản phẩm đã dùng | Thời tiết / ghi chú |
|---|---|---|---|---|---|---|---|---|---|---|
| 01/10 | 30 | 28 / 31 | 7,8 / 8,2 | 15 | 40 cm | 5,2 | Hết sạch sau 1 giờ | 3 con | Vi sinh đáy (chiều) | Nắng, quạt chạy bình thường |
| 02/10 | 31 | 27 / 30 | 7,7 / 8,0 | 14 | 38 cm | 5,4 | Còn ít | 5 con | Không | Mưa chiều, giảm ăn cữ tối |
| 03/10 | 32 | 27 / 29 | 7,6 / 7,9 | 12 | 35 cm | 4,8 | Còn nhiều | 8 con | Bổ sung khoáng (tối) | Mưa nhiều, độ mặn giảm |

Số liệu trong bảng chỉ là ví dụ minh họa cách ghi, không phải mức chuẩn cho ao của bà con.

## Cách dùng nhật ký để phát hiện vấn đề sớm
Mỗi tuần, bà con dành vài phút nhìn lại các cột và để ý:
- **pH sáng giảm dần** hoặc chênh sáng - chiều lớn hơn bình thường: kiểm tra kiềm, tảo, khí độc.
- **Lượng ăn giảm** nhiều ngày hoặc nhá sàng còn thức ăn: tìm nguyên nhân (môi trường, khí độc, bệnh, thời tiết).
- **Số tôm chết tăng dần:** không chờ đến khi nhiều mới xử lý. Bài [tôm chết rải rác trong ao: nguyên nhân và cách xử lý](/vi/blog/tom-chet-rai-rac-trong-ao-nguyen-nhan-va-cach-xu-ly) có bảng kiểm tra từng bước.
- **Sau mưa, đổi nước, dùng sản phẩm:** xem tôm phản ứng thế nào để rút kinh nghiệm.
- **Tôm chậm lớn** so với lịch vụ trước: đối chiếu mật độ, thức ăn, môi trường. Xem [tôm chậm lớn, lớn không đều](/vi/blog/tom-cham-lon-lon-khong-deu-8-nguyen-nhan-cach-khac-phuc).

Tổng quan các việc cần làm ở giai đoạn đầu xem thêm [tôm 30 ngày đầu cần làm gì](/vi/blog/tom-30-ngay-dau-can-lam-gi).

## Mẹo ghi nhật ký cho dễ duy trì
- **Ghi ngay tại ao**, đừng để tối mới nhớ lại.
- **Dùng một mẫu cố định** cho mọi ao, mỗi ao một trang hoặc một cuốn.
- **Ghi ngắn gọn bằng số**, có đơn vị; thông tin định tính thì dùng từ ngắn và nhất quán.
- **Chụp ảnh sổ** hoặc nhập vào điện thoại, để khi gọi tư vấn có thể gửi ngay.
- **Giữ lại sau mỗi vụ**, vì dữ liệu nhiều vụ có giá trị so sánh.
- **Một người chịu trách nhiệm chính**, nếu nhiều người cùng ghi thì thống nhất cách ghi.

## Chuẩn bị gì khi liên hệ kỹ thuật viên?
Khi nhờ tư vấn, bà con nên có sẵn: ngày nuôi, mật độ thả, các thông số gần nhất, lượng ăn, tình hình tôm chết, sản phẩm đã dùng và ảnh hoặc video tôm, ao. Với sổ nhật ký đầy đủ, việc trao đổi nhanh và chính xác hơn rất nhiều. Cần tư vấn cho ao của mình? Gọi hotline 1900 252 667 để kỹ thuật viên Thủy Sản Tím tư vấn miễn phí.

## Câu hỏi thường gặp

### Nhật ký ao nuôi tôm nên ghi bao nhiêu lần mỗi ngày?
Tối thiểu ghi sau mỗi lần đo và mỗi cữ cho ăn, rồi tổng kết một lần cuối ngày. Thông số như pH, nhiệt độ thường đo sáng và chiều; thức ăn và nhá sàng ghi theo từng cữ.

### Có cần ghi tất cả thông số mỗi ngày không?
Không cần. Các chỉ tiêu cơ bản (nhiệt độ, pH, độ trong, thức ăn, tôm chết) ghi hằng ngày; độ kiềm, độ mặn, NH3, NO2 đo theo định kỳ và khi thời tiết hoặc tôm có biến động.

### Dùng sổ giấy hay ghi trên điện thoại?
Cách nào bà con duy trì được đều tốt. Sổ giấy bền, ghi ngay tại ao; điện thoại tiện chia sẻ cho kỹ thuật viên. Có thể ghi giấy rồi chụp ảnh gửi.

### Nhật ký giúp gì khi tôm bị bệnh?
Nhật ký cho thấy diễn biến trước khi có dấu hiệu: thời tiết, môi trường, lượng ăn, sản phẩm đã dùng. Thông tin này giúp kỹ thuật viên phán đoán hướng nguyên nhân và quyết định có nên lấy mẫu xét nghiệm hay không.

### Có cần ghi tên sản phẩm đã dùng không?
Nên ghi đầy đủ ngày giờ, tên sản phẩm, liều và cách dùng. Việc này tránh dùng chồng chéo, giúp đối chiếu khi tôm thay đổi và là thông tin quan trọng khi hỏi tư vấn.
`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'tom-chet-rai-rac-trong-ao-nguyen-nhan-va-cach-xu-ly', topic: 'disease', daysAgo: 0, date: `${DAY}09:40:00+07:00`,
    title: L('Tôm chết rải rác trong ao: nguyên nhân và cách xử lý'),
    excerpt: L('Tôm chết rải rác trong ao do đâu? Kiểm tra theo thứ tự: oxy, khí độc, pH, lột xác, thức ăn, nghi bệnh; có bảng triệu chứng, cách xử lý và khi nào lấy mẫu PCR.'),
    body: L(
`Tôm chết rải rác trong ao (mỗi ngày vài con, lẻ tẻ) là tín hiệu cần kiểm tra sớm chứ không nên bỏ qua. Nguyên nhân thường gặp là môi trường nước (thiếu oxy về đêm, khí độc NH3, NO2, H2S, pH dao động), sốc khi lột xác, vấn đề thức ăn, hoặc giai đoạn đầu của bệnh. Bà con nên kiểm tra theo thứ tự: môi trường nước trước, rồi quan sát tôm, cuối cùng mới nghĩ tới lấy mẫu xét nghiệm.

Các dấu hiệu nêu trong bài chỉ mang tính gợi ý. Không thể kết luận bệnh chỉ bằng mắt, cần xét nghiệm PCR hoặc ý kiến của kỹ thuật viên, bác sĩ thú y thủy sản. Bài cũng không hướng dẫn dùng kháng sinh.

## Tôm chết rải rác là gì và vì sao không nên chủ quan?
"Rải rác" nghĩa là số tôm chết mỗi ngày ít, kéo dài nhiều ngày, thay vì chết hàng loạt trong một đêm. Có ba lý do cần theo dõi sát:
- Đây có thể là **hao hụt tự nhiên** nếu số lượng rất ít và ổn định, nhưng cũng có thể là **giai đoạn đầu** của vấn đề môi trường hoặc bệnh.
- Số chết tăng dần theo ngày là dấu hiệu xấu, nhất là khi kèm giảm ăn.
- Tôm chết lâu ngày trong ao làm bẩn nước, tạo điều kiện cho khí độc và vi khuẩn phát triển.

Nếu bà con đang ghi [nhật ký ao nuôi tôm](/vi/blog/nhat-ky-ao-nuoi-tom-ghi-gi-moi-ngay), hãy mở sổ ra đối chiếu những ngày gần đây.

## Danh sách kiểm tra: những nguyên nhân thường gặp
### 1. Thiếu oxy, nhất là đêm và sáng sớm
Tôm và tảo cùng tiêu thụ oxy về đêm. Quạt, sục khí không đủ hoặc có sự cố điện làm oxy tụt. Dấu hiệu: tôm nổi đầu, tấp mé vào sáng sớm. Xem [oxy hòa tan ao nuôi tôm bao nhiêu là đủ](/vi/blog/oxy-hoa-tan-ao-nuoi-tom-bao-nhieu-la-du) và [tôm nổi đầu lúc sáng sớm](/vi/blog/tom-noi-dau-luc-sang-som-nguyen-nhan-xu-ly).

### 2. Khí độc (NH3, NO2, H2S)
Đáy ao dơ, thức ăn dư, tảo tàn làm khí độc tăng. Tôm yếu, giảm ăn, có thể chết rải rác. Xem [khí độc H2S đáy ao nuôi tôm](/vi/blog/khi-doc-h2s-day-ao-nuoi-tom-nhan-biet-xu-ly) và [quản lý khí độc ao nuôi mùa mưa](/vi/blog/quan-ly-khi-doc-ao-nuoi-mua-mua).

### 3. pH, nhiệt độ, độ mặn biến động
Mưa lớn, nắng nóng, tảo nở rộ hoặc tàn làm pH dao động mạnh. Độ mặn giảm đột ngột cũng gây sốc cho tôm. Xem [đo và điều chỉnh độ mặn ao tôm](/vi/blog/do-do-man-va-dieu-chinh-do-man-ao-tom).

### 4. Sốc khi lột xác
Tôm mềm vỏ, lột xác không hoàn chỉnh, hoặc bị đồng loại ăn thịt sau lột có thể chết rải rác. Nguyên nhân thường là thiếu khoáng, kiềm thấp, độ mặn thấp hoặc môi trường biến động. Xem [tôm mềm vỏ, chậm lột xác](/vi/blog/tom-mem-vo-cham-lot-xac-nguyen-nhan-cach-xu-ly).

### 5. Vấn đề thức ăn và đường ruột
Thức ăn kém chất lượng, ẩm mốc, cho ăn dư hoặc cho ăn khi tôm yếu làm tôm rối loạn tiêu hóa. Xem [tôm bị đứt ruột, ruột lỏng](/vi/blog/tom-bi-duong-ruot-ruot-long-dut-khuc-nguyen-nhan-cach-phong).

### 6. Nghi ngờ bệnh
Các bệnh thường gặp trên tôm thẻ như bệnh hoại tử gan tụy cấp (AHPND/EMS), đốm trắng (WSSV), vi bào tử trùng EHP, bệnh gan tụy... có thể khởi đầu bằng vài con chết lẻ tẻ. Dấu hiệu bên ngoài dễ trùng nhau giữa các bệnh nên cần xét nghiệm. Xem [6 bệnh thường gặp trên tôm thẻ và cách phòng](/vi/blog/6-benh-thuong-gap-tren-tom-the-va-cach-phong) và [bệnh gan tụy trên tôm thẻ](/vi/blog/benh-gan-tuy-tren-tom-the-dau-hieu-nguyen-nhan-phong-ngua).

## Bảng quyết định: triệu chứng, kiểm tra, hướng xử lý
| Quan sát | Nên kiểm tra | Hướng xử lý (tham khảo) |
|---|---|---|
| Tôm nổi đầu, tấp mé lúc sáng sớm, chết rải rác | Oxy hòa tan, thiết bị quạt, sục khí, điện | Tăng quạt, sục khí; giảm cho ăn; kiểm tra đáy |
| Nước có mùi hôi, đáy đen, tôm giảm ăn | NH3, NO2, H2S, đáy ao | Xi phông, hút bùn (ao bạt); tăng quạt; xử lý môi trường |
| Sau mưa lớn, tôm yếu, chết lẻ tẻ | pH, độ mặn, độ kiềm | Ổn định môi trường; bổ sung khoáng; tránh can thiệp mạnh |
| Xác tôm lột nằm đáy, tôm mềm vỏ chết | Kiềm, độ mặn, khoáng Ca, Mg | Bổ sung khoáng, giữ kiềm ổn định |
| Ruột lỏng, đứt khúc, phân trắng | Thức ăn, đường ruột, môi trường | Điều chỉnh khẩu phần; hỗ trợ tiêu hóa |
| Tôm yếu, gan tụy teo hoặc nhạt, ruột trống, chết tăng dần | Quan sát gan, ruột; ghi số tôm chết theo ngày | Liên hệ kỹ thuật viên; cân nhắc lấy mẫu PCR |
| Đốm trắng trên vỏ, thân đỏ, tôm bơi bất thường | Lấy mẫu nhanh | Không tự ý xử lý; báo kỹ thuật viên, thú y; xử lý nước theo quy định |

Đây là bảng gợi ý định hướng, không thay cho chẩn đoán.

## Việc cần làm ngay trong 24 giờ đầu
1. **Đo nhanh môi trường:** nhiệt độ, pH, oxy (nếu có máy), độ mặn, NH3, NO2; xem [cách đo chỉ tiêu nước ao tôm bằng test kit](/vi/blog/cach-do-chi-tieu-nuoc-ao-tom-bang-test-kit).
2. **Kiểm tra thiết bị:** quạt nước, sục khí, nguồn điện, máy phát dự phòng.
3. **Vớt tôm chết** ở mé và đáy, đếm số lượng, ghi vào sổ; không vứt xuống kênh rạch.
4. **Kiểm tra sàng ăn và chài tôm:** xem ruột, gan, vỏ, đốm bất thường, tôm có khỏe không.
5. **Giảm hoặc điều chỉnh thức ăn** khi tôm yếu hoặc nhá sàng còn nhiều.
6. **Hạn chế can thiệp dồn dập:** tránh đổ nhiều sản phẩm cùng lúc khi chưa rõ nguyên nhân.
7. **Theo dõi số tôm chết trong 2 - 3 ngày:** tăng hay giảm.

## Sản phẩm có thể hỗ trợ khi nghi do môi trường
Chỉ dùng sau khi đã xác định hướng nguyên nhân, và luôn đọc kỹ nhãn.

- **SUPER YUCCA** theo nhãn có công dụng hấp thu khí độc NH3 trong ao, giúp cải thiện chất lượng nước. Liều theo nhãn: dùng định kỳ 1 lít/5.000m³ nước, 7 ngày một lần; khi khí độc cao dùng 1 lít/3.000m³ nước. Hòa với nước sạch ao, tạt đều vào sáng sớm hoặc chiều mát, mở quạt nước.
- **CLEAR 12H** theo nhãn giúp phân huỷ mùn bã hữu cơ, thức ăn thừa, phân tôm tích tụ đáy ao và giảm khí độc NH3, H2S. Cần ủ theo hướng dẫn trên nhãn trước khi dùng; dùng lúc có nắng, không dùng khi trời mưa, mở quạt liên tục.
- **MIX 79** bổ sung khoáng chất vào môi trường ao nuôi, giúp quá trình lột xác và tạo vỏ của tôm. Liều theo nhãn: định kỳ 5kg/3.000m³ nước, 2 ngày một lần, dùng chiều tối.

Những sản phẩm này hỗ trợ cải thiện môi trường, không phải thuốc chữa bệnh. Nếu nguyên nhân là bệnh, việc cải thiện môi trường chỉ giúp tôm bớt stress, không thay cho chẩn đoán và hướng xử lý của chuyên môn.

## Khi nào nên lấy mẫu xét nghiệm PCR?
Bà con nên cân nhắc lấy mẫu khi:
- Số tôm chết tăng nhiều ngày liên tục dù môi trường đã được xử lý.
- Tôm có dấu hiệu bất thường rõ: gan tụy teo hoặc nhạt, ruột trống, đốm trắng trên vỏ, thân đỏ, tôm yếu và giảm ăn đột ngột.
- Xung quanh đang có dịch bệnh.
- Cần xác định để quyết định tiếp tục nuôi, xử lý hay thu hoạch sớm.

Cách lấy mẫu cơ bản:
- Lấy **tôm còn sống nhưng yếu** (có biểu hiện bệnh), không lấy tôm đã chết lâu hoặc đã phân hủy.
- Giữ lạnh, đưa đến cơ sở xét nghiệm hoặc cơ quan thú y địa phương càng sớm càng tốt, theo hướng dẫn của họ.
- Ghi kèm ngày nuôi, mật độ, triệu chứng, sản phẩm đã dùng.

Nếu nghi bệnh nguy hiểm, hãy báo cho cán bộ thú y địa phương và hạn chế xả nước, chuyển tôm ra khỏi ao để tránh lây lan.

Cần tư vấn cho ao của mình? Gọi hotline 1900 252 667 để kỹ thuật viên Thủy Sản Tím tư vấn miễn phí.

## Câu hỏi thường gặp

### Mỗi ngày chết bao nhiêu con thì đáng lo?
Không có một con số cố định, vì còn phụ thuộc diện tích, mật độ và giai đoạn nuôi. Điều đáng lo là **xu hướng**: số tôm chết tăng dần, kèm giảm ăn hoặc tôm yếu. Hãy ghi số liệu mỗi ngày để thấy xu hướng.

### Tôm chết rải rác có phải do bệnh không?
Chưa chắc. Nhiều trường hợp do môi trường (oxy, khí độc, pH), sốc lột xác hoặc thức ăn. Chỉ xét nghiệm hoặc ý kiến chuyên môn mới xác định được bệnh. Bà con nên kiểm tra môi trường trước.

### Có nên vớt tôm chết ngay không?
Có. Vớt hằng ngày, đếm số lượng, ghi lại để theo dõi, và xử lý đúng cách, không vứt xuống kênh rạch. Tôm chết để lâu làm bẩn nước và tăng nguy cơ lây bệnh nếu có.

### Có cần dùng kháng sinh khi tôm chết rải rác không?
Bài này không khuyến cáo tự ý dùng kháng sinh. Nên tìm nguyên nhân trước, xét nghiệm khi cần và tham khảo kỹ thuật viên, bác sĩ thú y thủy sản; việc dùng thuốc phải theo quy định.

### Lấy mẫu xét nghiệm PCR cần chuẩn bị gì?
Chọn tôm còn sống nhưng có dấu hiệu bệnh, giữ lạnh, mang đến cơ sở xét nghiệm hoặc cơ quan thú y sớm và ghi kèm thông tin ao (ngày nuôi, mật độ, triệu chứng, sản phẩm đã dùng). Hỏi trước đơn vị xét nghiệm về cách bảo quản và vận chuyển mẫu.
`),
  },
];
