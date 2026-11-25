'use strict';
/**
 * Batch E (25/11/2026): ten Vietnamese guides, mostly on fish (cá tra, cá rô phi, cá lóc), plus
 * giant river prawn and water exchange in fish ponds.
 * Same conventions as seed-posts-a..d.js (see src/services/article.js):
 *   ## headings -> table of contents, "## Câu hỏi thường gặp" -> FAQ + FAQPage schema,
 *   **PRODUCT NAME** (exact `ten` from nhan/san-pham.json) -> automatic product link.
 * Doses: from the label (nhan/san-pham.json); where the label has no dose yet, from the product's TCCS
 * (CONG-TY-NOBEN, "38 TCCS-TA tccs" and "TCCS- XỬ LÝ MÔI TRƯỜNG (62SP)"). Where label and TCCS disagree,
 * the article gives no figure and sends the reader to the label.
 * Vietnamese only: en/zh fall back to vi. `date` fixes the publication date (see seed.js).
 */
const L = (vi, en, zh) => ({ vi, en, zh });
const DAY = '2026-11-25T';

module.exports = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'benh-gan-than-mu-ca-tra-dau-hieu-cach-phong', topic: 'disease', daysAgo: 0, date: `${DAY}09:00:00+07:00`,
    title: L('Bệnh gan thận mủ cá tra: dấu hiệu, nguyên nhân, cách phòng'),
    excerpt: L('Bệnh gan thận mủ cá tra do vi khuẩn Edwardsiella ictaluri: mùa bệnh, dấu hiệu đốm trắng trên gan thận, yếu tố nguy cơ và các bước phòng bệnh tại ao.'),
    body: L(
`Bệnh gan thận mủ (còn gọi là bệnh mủ gan, tiếng Anh là *bacillary necrosis of Pangasius*, BNP) là bệnh do vi khuẩn *Edwardsiella ictaluri* gây ra, thường bùng phát vào mùa mưa, mùa nước lũ, khi nhiệt độ nước giảm xuống dưới khoảng 28 °C. Dấu hiệu đặc trưng nằm bên trong: gan, thận, tỳ tạng có nhiều đốm trắng nhỏ như mủ. Bên ngoài cá thường ít biểu hiện, chỉ bơi lờ đờ trên mặt nước và giảm ăn. Phòng bệnh dựa vào con giống tốt, mật độ hợp lý, môi trường ổn định và phát hiện sớm. Điều trị phải có chẩn đoán và hướng dẫn của cán bộ thú y thủy sản.

Đây là một trong những bệnh vi khuẩn gây thiệt hại lớn nhất cho nghề nuôi cá tra ở Đồng bằng sông Cửu Long, nhất là ở giai đoạn cá giống và cá nhỏ. Bài này giúp bà con nhận biết bệnh sớm, hiểu vì sao bệnh hay xuất hiện vào mùa lũ và những việc cần làm để giảm rủi ro.

## Bệnh gan thận mủ là gì?
Tác nhân gây bệnh là vi khuẩn *Edwardsiella ictaluri*. Vi khuẩn tấn công các cơ quan nội tạng, tạo thành những ổ hoại tử nhỏ màu trắng trên gan, thận và tỳ tạng (lá lách). Người nuôi gọi là "mủ gan", "gan thận mủ" vì các đốm trắng này trông như những hạt mủ.

Theo tổng hợp của Global Seafood Alliance về các bệnh thường gặp trên cá tra nuôi ở Việt Nam, bệnh:
- Thường đạt đỉnh vào **mùa mưa**, khi nhiệt độ nước giảm xuống dưới khoảng 28 °C.
- Gây **tỷ lệ chết cao ở cá giống và cá nhỏ**.
- Liên quan tới các yếu tố như **mật độ dày, nhập đàn từ nhiều nguồn** và thời tiết bất lợi.

## Dấu hiệu nhận biết cá bị gan thận mủ
| Vị trí quan sát | Dấu hiệu thường gặp |
|---|---|
| Hành vi | Cá giảm ăn hoặc bỏ ăn, bơi chậm, lờ đờ trên mặt nước, tách đàn |
| Bên ngoài | Giai đoạn đầu ít biểu hiện; da và mang có thể nhợt nhạt |
| Bên trong (mổ khám) | Gan, thận, tỳ tạng có nhiều đốm trắng nhỏ, kích thước không đều; tỳ tạng, thận có thể sưng |
| Diễn biến | Cá chết rải rác rồi tăng dần nếu không xử lý kịp |

Vì bên ngoài ít dấu hiệu, cách chắc chắn nhất là **mổ khám vài con cá yếu** khi thấy đàn giảm ăn bất thường. Nếu thấy đốm trắng trên gan, thận, tỳ tạng, bà con nên gửi mẫu cho phòng xét nghiệm hoặc cán bộ thú y để xác định đúng tác nhân, vì một số bệnh khác (như ký sinh trùng tạo bào nang) cũng có thể tạo đốm trắng trên nội tạng.

Xem thêm mô tả bệnh trong [thư viện bệnh: gan thận mủ trên cá tra](/vi/diseases/gan-than-mu-ca-tra).

## Vì sao bệnh hay bùng phát vào mùa lũ?
Bệnh không xuất hiện ngẫu nhiên. Nó thường đi kèm với một số điều kiện:

- **Nhiệt độ nước giảm:** mùa mưa, mùa lũ, nhiệt độ nước hạ xuống dưới khoảng 28 °C là điều kiện thuận lợi cho bệnh.
- **Thời tiết thay đổi thất thường:** mưa nắng xen kẽ làm cá stress, sức đề kháng giảm.
- **Mật độ cao, nhập đàn:** cá dày, cá từ nhiều nguồn khác nhau thả chung làm mầm bệnh lây lan nhanh.
- **Chất lượng nước kém:** đáy ao nhiều bùn, chất hữu cơ, oxy thấp làm cá yếu.
- **Vận chuyển, san cá, đánh bắt:** cá bị xây xát và stress.

Hiểu được các điều kiện này, bà con có thể chủ động chuẩn bị trước mùa bệnh thay vì chờ cá chết mới xử lý.

## Các bước phòng bệnh gan thận mủ
### 1. Chọn và thả giống đúng cách
- Mua cá giống từ cơ sở uy tín, cá đồng cỡ, bơi khỏe, không xây xát. Nếu có điều kiện, yêu cầu kết quả kiểm tra sức khỏe đàn giống.
- Hạn chế thả chung cá từ nhiều nguồn trong cùng một ao.
- Tránh thả giống vào đúng thời điểm nhiệt độ giảm mạnh, mưa kéo dài.

### 2. Giữ mật độ và lượng ăn hợp lý
- Không thả quá dày so với khả năng cấp, thay nước và quản lý đáy của ao.
- Khi trời mưa lạnh kéo dài, cá ăn kém, nên **giảm lượng thức ăn** để không dư thừa làm bẩn ao. Cách điều chỉnh lượng ăn xem bài [cách tính lượng thức ăn cho cá nuôi ao](/vi/blog/cach-tinh-luong-thuc-an-cho-ca-nuoi-ao).

### 3. Quản lý môi trường ao
- Duy trì nguồn nước cấp sạch, theo dõi oxy, pH, khí độc. Đáy ao nhiều bùn cần nạo vét giữa các vụ.
- Hạn chế để thức ăn thừa, cá chết tích tụ. Vớt và **tiêu hủy cá chết** đúng cách, không vứt xuống kênh rạch.
- Khi cá có dấu hiệu nổi đầu, xem thêm bài [cá nổi đầu thiếu oxy](/vi/blog/ca-noi-dau-thieu-oxy-nguyen-nhan-cach-xu-ly).

### 4. Hỗ trợ đường ruột và gan cho cá
Bổ sung lợi khuẩn và chất hỗ trợ gan vào thức ăn giúp cá tiêu hóa tốt, không thay thế được việc chẩn đoán và điều trị bệnh:
- **US LACTO** (lợi khuẩn *Bacillus* trộn thức ăn, nhãn ghi công dụng cho tôm, cá): giúp cá tiêu hóa, hấp thu thức ăn tốt; liều và cách trộn theo hướng dẫn trên bao bì.
- **HEPALIVER-FS** (sorbitol, methionine, betaine; nhãn ghi công dụng cho tôm, cá): hỗ trợ bồi bổ gan; dùng theo hướng dẫn trên bao bì.

Cách trộn chế phẩm vào thức ăn cho đều và ít thất thoát được hướng dẫn trong bài [cách trộn thuốc, chế phẩm vào thức ăn](/vi/blog/cach-tron-thuoc-che-pham-vao-thuc-an-cho-tom); phần lớn nguyên tắc dùng được cho cả thức ăn viên của cá.

### 5. Vắc-xin
Tại Việt Nam, Cục Thú y đã cấp phép vắc-xin tiêm cho cá tra phòng bệnh do *Edwardsiella ictaluri* và *Aeromonas hydrophila*. Vắc-xin phải tiêm cho từng con, tốn công và chi phí, nên chưa được áp dụng rộng rãi ở hộ nuôi nhỏ. Bà con muốn áp dụng nên hỏi cơ sở cung cấp giống và cán bộ thú y địa phương.

## Khi ao đã có cá bệnh
1. **Giảm hoặc ngưng cho ăn** vài cữ khi cá bỏ ăn nhiều, tránh thức ăn thừa.
2. **Thu gom cá chết, cá yếu** mỗi ngày, tiêu hủy xa ao.
3. **Lấy mẫu gửi xét nghiệm** (cá còn sống nhưng yếu) để xác định tác nhân và làm kháng sinh đồ.
4. **Chỉ dùng thuốc kháng sinh khi có chẩn đoán và kê đơn** của cán bộ thú y thủy sản, đúng loại được phép, đúng liều, đủ liệu trình và đúng thời gian ngưng thuốc trước thu hoạch. Global Seafood Alliance ghi nhận việc điều trị tùy tiện đã làm vi khuẩn gây bệnh này kháng với một số kháng sinh thường dùng, khiến điều trị về sau khó hơn.
5. **Không tự ý tăng liều hay phối nhiều thuốc**, không dùng hóa chất cấm.
6. Song song, giữ nước ổn định, tăng sục khí nếu oxy thấp và tiếp tục hỗ trợ đường ruột cho cá.

> Cá tra nuôi để xuất khẩu phải đáp ứng yêu cầu về dư lượng thuốc. Mọi loại thuốc dùng cho cá cần ghi chép trong nhật ký ao nuôi.

## Lịch theo dõi gợi ý trước và trong mùa lũ
| Thời điểm | Việc nên làm |
|---|---|
| Trước mùa mưa khoảng 2–4 tuần | Kiểm tra đáy ao, hệ thống cấp thoát nước; chuẩn bị thức ăn, chế phẩm; lên kế hoạch mật độ |
| Mỗi ngày | Quan sát cá ăn, bơi; vớt cá chết; ghi nhiệt độ nước sáng và chiều |
| Mỗi tuần | Mổ khám vài cá yếu nếu đàn có dấu hiệu lạ; đo pH, oxy, khí độc |
| Khi nhiệt độ nước giảm, mưa kéo dài | Giảm ăn, tăng theo dõi, chuẩn bị lấy mẫu xét nghiệm sớm |

Cần tư vấn cho ao của mình? Gọi hotline 0869 739 679 để kỹ thuật viên Thủy Sản Tím tư vấn.

## Nguồn tham khảo
- Từ Thanh Dung và cộng sự (2008), *Common diseases of pangasius catfish farmed in Vietnam*, Global Aquaculture Advocate (Global Seafood Alliance).
- Crumlish M. và cộng sự (2002), *Identification of Edwardsiella ictaluri from diseased freshwater catfish, Pangasius hypophthalmus (Sauvage), cultured in the Mekong Delta, Vietnam*, Journal of Fish Diseases 25.
- The Fish Site, Fish Farming Expert: tin về vắc-xin ALPHA JECT Panga của PHARMAQ phòng *E. ictaluri* và *A. hydrophila* cho cá tra được cấp phép tại Việt Nam.

## Câu hỏi thường gặp

### Bệnh gan thận mủ cá tra thường xuất hiện vào mùa nào?
Bệnh thường đạt đỉnh vào mùa mưa, mùa nước lũ, khi nhiệt độ nước giảm xuống dưới khoảng 28 °C và thời tiết thay đổi thất thường. Cá giống và cá nhỏ dễ chết nhiều hơn cá lớn.

### Làm sao biết cá bị gan thận mủ mà không phải bệnh khác?
Dấu hiệu gợi ý là đốm trắng nhỏ trên gan, thận, tỳ tạng khi mổ khám. Tuy nhiên một số bệnh khác cũng tạo đốm trắng nội tạng, nên muốn chắc chắn cần gửi mẫu xét nghiệm vi khuẩn.

### Có thể tự mua kháng sinh về trộn cho cá không?
Không nên. Kháng sinh chỉ dùng khi có chẩn đoán và kê đơn của cán bộ thú y thủy sản, đúng loại được phép và đúng thời gian ngưng thuốc. Dùng tùy tiện làm vi khuẩn kháng thuốc và có nguy cơ tồn dư trong sản phẩm.

### Men vi sinh, chế phẩm bổ gan có chữa được bệnh gan thận mủ không?
Không. Lợi khuẩn như US LACTO và chế phẩm hỗ trợ gan như HEPALIVER-FS chỉ giúp cá tiêu hóa tốt, hỗ trợ sức khỏe chung. Chúng không thay thế chẩn đoán và phác đồ điều trị.

### Ao vừa bị bệnh xong, vụ sau cần làm gì?
Sau thu hoạch nên nạo vét bùn đáy, phơi ao, bón vôi theo hướng dẫn kỹ thuật, xử lý nước kỹ trước khi thả giống mới, chọn giống tốt và thả mật độ hợp lý.
`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'benh-lien-cau-khuan-ca-ro-phi-nhan-biet-phong-benh', topic: 'disease', daysAgo: 0, date: `${DAY}09:10:00+07:00`,
    title: L('Bệnh liên cầu khuẩn ở cá rô phi: nhận biết và phòng bệnh'),
    excerpt: L('Bệnh liên cầu khuẩn (Streptococcus) trên cá rô phi: dấu hiệu mắt lồi, bơi xoáy, cong thân; nhiệt độ nguy cơ trên 26 °C và các bước phòng bệnh mùa nóng.'),
    body: L(
`Bệnh liên cầu khuẩn (streptococcosis) trên cá rô phi do vi khuẩn *Streptococcus agalactiae* và *Streptococcus iniae* gây ra. Cá bệnh thường bơi lờ đờ, bơi xoáy hoặc mất thăng bằng, thân cong hình chữ C, mắt lồi một bên hoặc hai bên, bỏ ăn. Bệnh hay bùng phát khi **nhiệt độ nước cao (trên khoảng 26–27 °C), oxy thấp, mật độ dày và nước bẩn**. Phòng bệnh chủ yếu bằng cách giảm các yếu tố gây stress trong mùa nắng nóng, quản lý thức ăn và chất lượng nước, và tiêm vắc-xin ở nơi có điều kiện. Điều trị phải có chẩn đoán và hướng dẫn của cán bộ thú y.

Cá rô phi được xem là loài dễ nuôi, chịu được môi trường khắc nghiệt. Nhưng chính vì thế nhiều ao nuôi dày, ít thay nước, và khi mùa nóng đến, bệnh liên cầu khuẩn có thể làm chết cá rải rác kéo dài, thậm chí chết nhiều ở cá lớn sắp thu hoạch.

## Tác nhân gây bệnh
- **Streptococcus agalactiae:** tác nhân phổ biến nhất trên cá rô phi. Có các biotype khác nhau; theo Global Seafood Alliance, biotype 1 gây bệnh ở cá từ nhỏ đến lớn, còn biotype 2 chủ yếu gây bệnh ở **cá lớn**.
- **Streptococcus iniae:** cũng gây bệnh trên cá rô phi và nhiều loài cá nước ấm khác.

Hai loài này, và cả hai biotype của *S. agalactiae*, gây triệu chứng gần giống nhau nên không phân biệt được bằng mắt thường. Muốn chọn đúng vắc-xin hay thuốc, cần xét nghiệm định danh tại phòng thí nghiệm.

## Dấu hiệu nhận biết cá bị liên cầu khuẩn
| Nhóm dấu hiệu | Biểu hiện |
|---|---|
| Hành vi | Bơi lờ đờ, bơi xoáy tròn, mất thăng bằng, nằm nghiêng; bỏ ăn |
| Hình dáng | Thân cong hình chữ C |
| Mắt | Lồi một bên hoặc hai bên, giác mạc đục, có thể xuất huyết trong mắt |
| Da, vây | Da sẫm màu; xuất huyết ở nắp mang, quanh miệng, hậu môn, gốc vây |
| Nội tạng | Bụng chướng; lá lách (tỳ tạng) sưng to, sẫm màu |
| Diễn biến | Chết rải rác kéo dài hoặc chết nhiều, thường nặng hơn khi trời nóng |

Mắt lồi và bơi xoáy là hai dấu hiệu người nuôi dễ nhận ra nhất. Tuy nhiên mắt lồi, xuất huyết cũng gặp ở bệnh do *Aeromonas* (xem bài [bệnh xuất huyết đốm đỏ trên cá](/vi/blog/benh-xuat-huyet-dom-do-tren-ca-nguyen-nhan-cach-phong)), nên không chẩn đoán chỉ bằng mắt thường.

## Những yếu tố làm bệnh bùng phát
Các tổng quan khoa học về bệnh do *S. agalactiae* trên cá rô phi nêu các yếu tố nguy cơ chính:

- **Nhiệt độ nước cao, trên khoảng 26–27 °C.** Mùa nắng nóng, ao cạn, nước tầng mặt nóng là thời điểm nguy hiểm.
- **Oxy hòa tan thấp**, nhất là lúc gần sáng.
- **Mật độ nuôi cao**, nuôi thâm canh.
- **Khí độc amoniac cao**, nước bẩn, đáy nhiều chất hữu cơ.
- **Cỡ cá, tuổi cá:** cá lớn thường bị nặng hơn ở một số biotype.
- **Thao tác gây stress:** đánh bắt, san thưa, vận chuyển.

## Các bước phòng bệnh liên cầu khuẩn
### Trước mùa nóng
- **Chọn giống tốt**, đồng cỡ, không xây xát; ưu tiên cá giống có nguồn gốc rõ ràng.
- **Không thả quá dày.** Tính toán mật độ theo khả năng sục khí, thay nước của ao. Tham khảo bài [nuôi cá rô phi ao đất](/vi/blog/nuoi-ca-ro-phi-ao-dat-mat-do-thuc-an-quan-ly-nuoc).
- **Ao đủ sâu** để giảm nhiệt độ tầng đáy, chuẩn bị quạt hoặc máy sục khí.
- **Vắc-xin:** tại Việt Nam đã có vắc-xin phòng *S. agalactiae* (biotype 2) và vắc-xin phòng *S. iniae* cho cá rô phi được đăng ký. Mỗi vắc-xin chỉ bảo vệ với đúng loài, đúng biotype vi khuẩn, nên cần hỏi cán bộ thú y, cơ sở giống về chủng lưu hành trong vùng.

### Trong mùa nóng
- **Theo dõi nhiệt độ và oxy** mỗi ngày, nhất là sáng sớm và chiều.
- **Giảm lượng ăn khi nước quá nóng hoặc oxy thấp.** Thức ăn thừa làm bẩn nước, tăng khí độc và tiêu hao oxy. Cách điều chỉnh xem bài [cách tính lượng thức ăn cho cá nuôi ao](/vi/blog/cach-tinh-luong-thuc-an-cho-ca-nuoi-ao).
- **Tăng sục khí** vào ban đêm và những ngày âm u.
- **Hạn chế đánh bắt, san cá** vào lúc trời nóng; nếu bắt buộc, làm vào sáng sớm và thao tác nhẹ nhàng.
- **Giữ nước sạch:** thay một phần nước từ nguồn đã xử lý nếu có điều kiện, hạn chế tích tụ đáy.
- **Khi khí độc cao:** **SUPER YUCCA** (dịch chiết *Yucca schidigera*) có công dụng hấp thu khí độc NH3 theo nhãn: định kỳ 1 lít/5.000 m³ nước, 7 ngày/lần; khi khí độc cao 1 lít/3.000 m³ nước. Hòa với nước sạch, tạt đều lúc sáng sớm hoặc chiều mát và mở quạt.

### Hỗ trợ sức khỏe đường ruột
- **US LACTO** (lợi khuẩn trộn thức ăn) giúp cá tiêu hóa, hấp thu thức ăn tốt; liều dùng theo hướng dẫn trên bao bì.
- **AMIN CARE** (đạm cá, acid amin) giúp cá ham ăn, bắt mồi tốt hơn sau giai đoạn stress. Liều theo hồ sơ tiêu chuẩn cơ sở của sản phẩm: trộn 3–5 ml/kg thức ăn, 3 lần/ngày; khi bắt mồi kém, chậm lớn có thể tăng gấp đôi trong 3–5 ngày rồi trở lại liều thường.

Chế phẩm dinh dưỡng chỉ hỗ trợ, không chữa được bệnh do vi khuẩn.

## Khi phát hiện cá bị bệnh
1. **Vớt cá chết, cá bệnh** mỗi ngày, tiêu hủy xa ao, không bán cá bệnh ra chợ.
2. **Giảm ăn**, tăng sục khí, kiểm tra nhiệt độ, oxy, NH3.
3. **Gửi mẫu xét nghiệm** (cá còn sống nhưng có dấu hiệu bệnh) để định danh vi khuẩn và làm kháng sinh đồ.
4. **Điều trị theo chỉ định của cán bộ thú y thủy sản**, chỉ dùng thuốc được phép, đúng liều, đủ liệu trình, tuân thủ thời gian ngưng thuốc trước thu hoạch. Cá bỏ ăn sẽ không ăn được thuốc trộn, vì vậy phát hiện sớm rất quan trọng.
5. **Không dùng chung dụng cụ, lưới** giữa ao bệnh và ao khỏe; sát trùng dụng cụ sau khi dùng.

Cần tư vấn cho ao của mình? Gọi hotline 0869 739 679 để kỹ thuật viên Thủy Sản Tím tư vấn.

## Nguồn tham khảo
- Sheehan B. và cộng sự (2009), *Streptococcosis in tilapia*, Global Aquaculture Advocate (Global Seafood Alliance).
- Abdallah E.S.H. và cộng sự (2024), *Streptococcus agalactiae infection in Nile tilapia (Oreochromis niloticus): a review*, Biology 13(11): 914.
- FAO (2009), *Cultured aquatic species fact sheets: Oreochromis niloticus* (Rakocy J.E.), bảng bệnh thường gặp.
- The Fish Site: tin MSD Animal Health đăng ký vắc-xin AQUAVAC Strep Sa và NORVAX Strep Si tại Việt Nam.

## Câu hỏi thường gặp

### Vì sao cá rô phi hay bị liên cầu khuẩn vào mùa nóng?
Nhiệt độ nước cao (trên khoảng 26–27 °C) cùng với oxy thấp, mật độ dày và nước bẩn làm vi khuẩn dễ gây bệnh và cá giảm sức đề kháng. Ao cạn, ít thay nước càng dễ bị.

### Cá mắt lồi, bơi xoáy có chắc chắn là liên cầu khuẩn không?
Không chắc chắn. Đây là dấu hiệu gợi ý mạnh, nhưng bệnh do Aeromonas hay một số vi khuẩn khác cũng có thể gây mắt lồi, xuất huyết. Cần xét nghiệm để biết đúng tác nhân.

### Có nên tự trộn kháng sinh phòng bệnh cho cá rô phi không?
Không nên. Trộn kháng sinh phòng bệnh làm vi khuẩn kháng thuốc và gây tồn dư. Kháng sinh chỉ dùng khi có chẩn đoán và kê đơn của cán bộ thú y thủy sản.

### Vắc-xin liên cầu khuẩn có dùng được cho mọi ao không?
Vắc-xin chỉ bảo vệ với đúng loài và chủng vi khuẩn có trong vắc-xin. Bà con nên hỏi cán bộ thú y về chủng lưu hành ở vùng mình và cỡ cá phù hợp để tiêm hoặc ngâm.

### Khi cá bệnh có nên ngưng cho ăn hẳn không?
Nên giảm mạnh lượng ăn để tránh dư thừa, nhưng nếu có phác đồ điều trị bằng thuốc trộn thì cần duy trì lượng ăn vừa đủ để cá ăn hết thuốc. Làm theo hướng dẫn của cán bộ thú y.
`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'nuoi-ca-ro-phi-ao-dat-mat-do-thuc-an-quan-ly-nuoc', topic: 'technique', daysAgo: 0, date: `${DAY}09:20:00+07:00`,
    title: L('Nuôi cá rô phi ao đất: mật độ, thức ăn, quản lý nước'),
    excerpt: L('Kỹ thuật nuôi cá rô phi ao đất: chuẩn bị ao, chọn giống đơn tính, mật độ thả, thức ăn theo cỡ cá, ngưỡng nhiệt độ, oxy và cách phòng bệnh mùa nóng.'),
    body: L(
`Nuôi cá rô phi ao đất hiệu quả cần năm việc: chuẩn bị ao sạch, chọn giống **đơn tính đực** đồng cỡ, thả mật độ phù hợp với khả năng sục khí và thay nước, cho ăn thức ăn đủ đạm theo cỡ cá, và giữ nước ổn định (nhiệt độ, oxy, khí độc). Cá rô phi lớn tốt ở nhiệt độ nước khoảng 27–32 °C, nên duy trì oxy hòa tan trên khoảng 5 mg/L để cá ăn khỏe. Theo FAO, cá rô phi đực có thể đạt 400–500 g sau khoảng 5–8 tháng nuôi tùy mô hình và thức ăn.

Cá rô phi (*Oreochromis niloticus* và các dòng lai, trong đó có cá điêu hồng) là loài nuôi phổ biến ở Việt Nam vì dễ nuôi, ăn tạp, chịu được nhiều điều kiện môi trường. Nhưng muốn có lãi ổn định, bà con cần kiểm soát tốt chi phí thức ăn và phòng được bệnh mùa nóng.

## Thông số môi trường tham khảo cho cá rô phi
| Chỉ tiêu | Khoảng tham khảo | Ghi chú |
|---|---|---|
| Nhiệt độ | Lớn tốt khoảng 27–32 °C | Ở 20–22 °C tốc độ lớn chỉ còn khoảng 30%; khoảng 11–12 °C cá có thể chết |
| Oxy hòa tan | Tốt nhất trên khoảng 5 mg/L | Dưới khoảng 3,5 mg/L cá chậm lớn; dưới 3 mg/L nên ngưng cho ăn |
| pH | Tốt nhất khoảng 7–8 | Cá lớn chậm hơn rõ ở pH 6 và pH 9; theo dõi dao động sáng chiều |
| NH3 | Càng thấp càng tốt | Nhiệt độ, pH cao làm NH3 độc hơn |
| Độ trong | Khoảng 25–40 cm | Nước xanh vừa phải |

Các con số trên tổng hợp từ FAO và các tổng quan về ảnh hưởng của môi trường lên cá rô phi, chỉ mang tính tham khảo. Mỗi vùng nuôi có điều kiện khác nhau.

## Bước 1: Chuẩn bị ao nuôi
- **Diện tích, độ sâu:** ao từ vài nghìn m² trở lên, mực nước khoảng 1,2–2 m giúp nhiệt độ ổn định hơn trong mùa nắng.
- **Cải tạo ao:** tháo cạn, vét bớt bùn đen, sửa bờ, lấp hang hốc. Phơi đáy vài ngày, bón vôi theo pH đất.
- **Lọc nước cấp:** cấp nước qua lưới lọc để ngăn cá tạp, trứng cá, địch hại.
- **Gây màu nước:** nước có màu xanh nhạt, độ trong khoảng 30–40 cm trước khi thả giống giúp cá có thức ăn tự nhiên và hạn chế stress.

Trong vụ nuôi, ao có nhiều bùn hữu cơ có thể dùng vi sinh phân hủy mùn bã như **ROVAZYME** (định kỳ 454 g/3.000 m³ nước, 5 ngày/lần theo nhãn; hòa nước, tạt đều lúc sáng sớm hoặc chiều mát và mở sục khí).

## Bước 2: Chọn giống
- **Ưu tiên cá đơn tính đực.** Theo FAO, cá rô phi đực lớn nhanh gần gấp đôi cá cái, và nuôi đơn tính tránh tình trạng cá đẻ tràn lan, ao bị "đầy cá nhỏ", cạnh tranh thức ăn khiến cá còi.
- Cá giống đồng cỡ, bơi nhanh, không trầy xước, không dị hình.
- Thả vào sáng sớm hoặc chiều mát; ngâm túi cá trong ao 15–20 phút để cân bằng nhiệt độ rồi mới thả.

## Bước 3: Mật độ thả
Mật độ phụ thuộc vào mức đầu tư:

| Hình thức nuôi | Mật độ tham khảo | Điều kiện |
|---|---|---|
| Bán thâm canh, cá đực, có cho ăn (theo FAO) | Khoảng 1–3 con/m² | Thay nước khoảng 5–15% mỗi ngày để giữ oxy |
| Thâm canh ao đất | Cao hơn, tùy thiết kế | Cần quạt/máy sục khí, thức ăn công nghiệp, thay nước chủ động |

Thả càng dày, rủi ro thiếu oxy và bệnh liên cầu khuẩn mùa nóng càng cao. Không có con số "chuẩn" cho mọi ao: hãy tăng mật độ từ từ qua từng vụ khi đã kiểm soát tốt oxy và nước.

## Bước 4: Thức ăn và cách cho ăn
- **Đạm trong thức ăn:** theo FAO, thức ăn giai đoạn ương khoảng 30% đạm; nuôi thương phẩm dùng thức ăn khoảng 24–35% đạm tùy hình thức nuôi và cỡ cá.
- **Lượng ăn theo phần trăm trọng lượng cá:** cá nhỏ ăn tỷ lệ cao (khoảng 6–10% trọng lượng thân/ngày ở cá 1–5 g), cá lớn ăn tỷ lệ thấp dần (khoảng 1,5–2% ở cá trên 250 g). Bảng chi tiết và cách tính có trong bài [cách tính lượng thức ăn cho cá nuôi ao](/vi/blog/cach-tinh-luong-thuc-an-cho-ca-nuoi-ao).
- **Số cữ ăn:** cá dưới 20 g khoảng 4 cữ/ngày, cá lớn 2–3 cữ/ngày.
- **Quan sát khi cho ăn:** cho ăn ở vị trí cố định, rải từ từ; cá ăn hết trong khoảng 15–30 phút là vừa. Nếu thức ăn nổi còn nhiều, giảm ở cữ sau.

Bổ sung lợi khuẩn vào thức ăn giúp cá tiêu hóa tốt, ví dụ **US LACTO** dùng theo hướng dẫn trên bao bì. Khi cá biếng ăn sau những ngày thời tiết xấu, có thể dùng **AMIN CARE** (đạm cá, acid amin) theo hồ sơ tiêu chuẩn cơ sở: 3–5 ml/kg thức ăn, 3 lần/ngày.

## Bước 5: Quản lý nước hằng ngày
- **Sáng sớm:** quan sát cá có nổi đầu không, đo oxy nếu có máy. Xem bài [cá nổi đầu thiếu oxy](/vi/blog/ca-noi-dau-thieu-oxy-nguyen-nhan-cach-xu-ly).
- **Chiều:** đo nhiệt độ, pH; quan sát màu nước.
- **Hằng tuần:** đo NH3, NO2; ước lượng cỡ cá để chỉnh lượng ăn.
- **Thay nước:** theo FAO, ao bán thâm canh thường thay khoảng 5–15% thể tích mỗi ngày để giữ oxy; ao không thay được nước hằng ngày thì cần quạt nước và giảm mật độ.
- **Khi khí độc NH3 cao:** giảm ăn, tăng sục khí; có thể dùng **SUPER YUCCA** 1 lít/3.000 m³ nước theo nhãn.

Cách đo các chỉ tiêu bằng test kit (pH, NH3, NO2) làm tương tự hướng dẫn trong bài [cách đo chỉ tiêu nước bằng test kit](/vi/blog/cach-do-chi-tieu-nuoc-ao-tom-bang-test-kit).

## Bước 6: Phòng bệnh
Các bệnh hay gặp trên cá rô phi gồm bệnh liên cầu khuẩn, bệnh xuất huyết do *Aeromonas*, bệnh do ký sinh trùng ở mang và da. Nguyên tắc chung:
- Không thả quá dày, giữ oxy tốt, không cho ăn dư.
- Cẩn thận khi đánh bắt, san cá để không làm cá trầy xước.
- Vớt cá chết mỗi ngày, ghi chép nhật ký.
- Khi có bệnh, gửi mẫu xét nghiệm và **làm theo hướng dẫn cán bộ thú y thủy sản**, không tự ý dùng kháng sinh.

Đọc thêm: [bệnh liên cầu khuẩn ở cá rô phi](/vi/blog/benh-lien-cau-khuan-ca-ro-phi-nhan-biet-phong-benh), [bệnh xuất huyết đốm đỏ trên cá](/vi/blog/benh-xuat-huyet-dom-do-tren-ca-nguyen-nhan-cach-phong), [ký sinh trùng trên cá](/vi/blog/ky-sinh-trung-tren-ca-trung-banh-xe-san-la-mang).

## Thu hoạch
- Ngưng cho ăn 1 ngày trước khi thu để cá sạch ruột, giảm hao hụt khi vận chuyển.
- Thu vào sáng sớm, thao tác nhanh, giữ cá trong nước có sục khí.
- Ngưng mọi thuốc, hóa chất theo đúng thời gian cách ly ghi trên nhãn hoặc theo chỉ định.

Cần tư vấn cho ao của mình? Gọi hotline 0869 739 679 để kỹ thuật viên Thủy Sản Tím tư vấn.

## Nguồn tham khảo
- FAO (2009), *Cultured aquatic species fact sheets: Oreochromis niloticus* (Rakocy J.E.).
- FAO AFFRIS, *Nile tilapia*, bảng 28: bảng cho ăn cá rô phi nuôi thâm canh.
- Abd El-Hack M.E. và cộng sự (2022), *Effect of environmental factors on growth performance of Nile tilapia (Oreochromis niloticus)*, International Journal of Biometeorology.

## Câu hỏi thường gặp

### Nuôi cá rô phi bao lâu thì thu hoạch?
Tùy mô hình, giống và thức ăn. Theo FAO, cá rô phi đực có thể đạt khoảng 400–500 g sau 5–8 tháng nuôi thương phẩm; nuôi bán thâm canh ít thức ăn công nghiệp thì lâu hơn.

### Vì sao nên nuôi cá rô phi đơn tính đực?
Cá đực lớn nhanh hơn cá cái gần gấp đôi, và nuôi đơn tính hạn chế cá sinh sản tự nhiên trong ao, tránh cảnh ao nhiều cá con cạnh tranh thức ăn làm cá chậm lớn.

### Cá rô phi chịu được nhiệt độ bao nhiêu?
Cá lớn tốt ở khoảng 27–32 °C. Ở khoảng 20–22 °C cá ăn ít và chậm lớn rõ rệt; khoảng 11–12 °C là ngưỡng có thể gây chết.

### Có cần sục khí cho ao cá rô phi không?
Ao nuôi mật độ thấp, thay nước thường xuyên có thể không cần. Ao thâm canh, nuôi dày thì nên có quạt hoặc máy sục khí, nhất là ban đêm và ngày âm u, để giữ oxy và giảm nguy cơ bệnh.

### Cho cá rô phi ăn mấy lần một ngày?
Cá dưới 20 g nên cho ăn khoảng 4 lần/ngày, cá lớn 2–3 lần/ngày. Cho ăn vào giờ cố định, quan sát lượng thừa để điều chỉnh cữ sau.
`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'nuoi-ca-loc-ao-dat-be-bat-mat-do-thuc-an', topic: 'technique', daysAgo: 0, date: `${DAY}09:30:00+07:00`,
    title: L('Nuôi cá lóc ao đất, bể bạt: mật độ, thức ăn, phòng bệnh'),
    excerpt: L('Kỹ thuật nuôi cá lóc ao đất và bể lót bạt: mật độ thả theo khảo sát ở miền Tây, thức ăn viên, phân cỡ chống ăn nhau, quản lý nước, phòng bệnh.'),
    body: L(
`Cá lóc (*Channa striata*) nuôi được ở mật độ rất cao vì cá có cơ quan hô hấp phụ, thở được không khí trên mặt nước. Ở Đồng bằng sông Cửu Long, khảo sát của Đại học Cần Thơ ghi nhận ao đất thả bình quân khoảng 46 con/m², còn bể lót bạt được thử nghiệm ở 100–200 con/m²; ngày càng nhiều hộ dùng **thức ăn viên công nghiệp** thay cá tạp. Muốn nuôi thành công, bà con cần ba điều: chọn giống đã quen ăn thức ăn viên, **phân cỡ định kỳ** để hạn chế cá ăn nhau, và giữ nước sạch vì nuôi dày thì khí độc tăng rất nhanh.

Nghề nuôi cá lóc phát triển mạnh nhờ con giống sinh sản nhân tạo và thức ăn viên thay cho cá tạp. Tuy nhiên giá thức ăn chiếm phần lớn chi phí, và một đợt bệnh có thể làm mất lãi cả vụ. Bài này tổng hợp các bước kỹ thuật chính, kèm những con số có nguồn để bà con tham khảo.

## Đặc điểm sinh học cần biết
- **Thở được không khí:** cá lóc có cơ quan hô hấp phụ nên chịu được nước ít oxy hơn nhiều loài cá khác. Vì vậy cá ít khi "nổi đầu" như cá tra, cá rô phi, nhưng không có nghĩa là chịu được nước bẩn: khí độc NH3, NO2 vẫn làm cá yếu và dễ bệnh.
- **Ăn thịt, ăn nhau:** cá lóc là loài ăn động vật. Khi cá chênh lệch kích cỡ, con lớn ăn con nhỏ. Đây là nguyên nhân hao hụt lớn ở giai đoạn ương và đầu vụ nuôi.
- **Hay nhảy:** cá có thể nhảy khỏi ao, bể khi bị động hoặc nước xấu, nên cần lưới chắn quanh bờ hoặc nắp lưới trên bể.

## Chọn hình thức nuôi: ao đất hay bể bạt?
| Tiêu chí | Ao đất | Bể lót bạt |
|---|---|---|
| Mật độ tham khảo | Bình quân khoảng 46 con/m² theo khảo sát hộ nuôi ở ĐBSCL | Thử nghiệm 100–200 con/m² ở An Giang; mật độ 200 con/m² cho hiệu quả cao trong nghiên cứu này |
| Chi phí đầu tư ban đầu | Thấp hơn nếu có sẵn ao | Cao hơn (bạt, khung, máy bơm) |
| Quản lý nước | Khó thay nước nhanh, đáy tích bùn | Dễ thay nước, dễ vệ sinh, dễ quan sát cá |
| Rủi ro | Đáy bẩn, khó thu hoạch triệt để | Phụ thuộc điện, nước; mật độ cao nên sự cố lan nhanh |

Các con số mật độ trên lấy từ các khảo sát và thí nghiệm của Đại học Cần Thơ, điều kiện mỗi nơi khác nhau. Bà con mới nuôi nên bắt đầu ở mức thấp, khi kiểm soát được nước và thức ăn mới tăng dần.

## Chuẩn bị ao, bể
- **Ao đất:** tháo cạn, vét bùn, phơi đáy, bón vôi; làm lưới chắn quanh bờ đủ cao để cá không nhảy ra ngoài. Cấp nước qua lưới lọc. Có thể thả lục bình hoặc bèo ở một góc ao để che mát (không phủ kín mặt ao).
- **Bể bạt:** vệ sinh, sát trùng bể trước khi thả; bố trí ống thoát đáy để thay nước, lưới che phía trên chống cá nhảy và giảm nắng.

## Chọn giống và thả giống
- Chọn cá giống **đồng cỡ**, bơi khỏe, không trầy xước, và **đã được tập ăn thức ăn viên** ở trại.
- Thả vào sáng sớm hoặc chiều mát, cân bằng nhiệt độ túi cá với nước ao 15–20 phút.
- Tránh thả nhiều cỡ cá vào cùng một ao hoặc bể.

Một nghiên cứu ương cá lóc của Đại học Cần Thơ dùng thức ăn viên 44% đạm, ở mật độ 300–500 con/m²; tỷ lệ sống chỉ khoảng 75% ở mật độ 400 con/m². Con số này cho thấy giai đoạn ương hao hụt đáng kể, vì vậy chọn giống từ trại uy tín, đã ương đến cỡ lớn là cách giảm rủi ro.

## Thức ăn và cách cho ăn
- **Dùng thức ăn viên chuyên cho cá lóc**, đạm cao, cỡ viên tăng theo cỡ cá. Thức ăn chất lượng giúp giảm hệ số FCR và giữ nước sạch hơn.
- **Cho ăn 2–3 lần/ngày** vào giờ cố định, rải ở một vài điểm để cá quen. Theo dõi cá ăn hết trong khoảng 15–20 phút; còn thừa thì giảm ở cữ sau.
- **Không cho ăn dư:** thức ăn thừa ở mật độ cao làm NH3 tăng nhanh.
- **Giảm ăn khi trời mưa lạnh, nước xấu** hoặc khi cá có dấu hiệu bệnh.

Bổ sung lợi khuẩn **US LACTO** (liều theo hướng dẫn trên bao bì) giúp cá tiêu hóa, hấp thu thức ăn tốt. Khi cá giảm ăn sau đợt thời tiết xấu, **AMIN CARE** (đạm cá, mùi tanh hấp dẫn) có thể trộn 3–5 ml/kg thức ăn, 3 lần/ngày theo hồ sơ tiêu chuẩn cơ sở của sản phẩm. Nuôi dày, ăn nhiều đạm thì gan cá làm việc nhiều; có thể dùng **HEPALIVER-FS** hỗ trợ gan theo hướng dẫn trên bao bì.

Cách tính lượng ăn theo trọng lượng đàn cá xem bài [cách tính lượng thức ăn cho cá nuôi ao](/vi/blog/cach-tinh-luong-thuc-an-cho-ca-nuoi-ao).

## Phân cỡ: việc không thể bỏ qua
- Kiểm tra độ đồng đều định kỳ, nhất là trong những tuần đầu sau khi thả. Nếu cá chênh lệch rõ, **lọc cá lớn ra nuôi riêng**.
- Phân cỡ vào sáng sớm, thao tác nhẹ nhàng, dùng lưới mềm.
- Sau phân cỡ, cá dễ bị trầy xước và stress: giữ nước sạch, quan sát cá vài ngày để phát hiện sớm dấu hiệu xuất huyết hay nấm.

## Quản lý nước
- **Bể bạt:** thay nước thường xuyên, xả cặn đáy hằng ngày khi mật độ cao.
- **Ao đất:** thay nước định kỳ từ nguồn đã lắng lọc, hạn chế để thức ăn thừa tích tụ.
- **Theo dõi NH3, NO2, pH** hằng tuần, tăng tần suất khi cá lớn và ăn nhiều. Khi khí độc cao, giảm ăn, thay nước; có thể dùng **SUPER YUCCA** để hấp thu NH3 theo nhãn (khi khí độc cao 1 lít/3.000 m³ nước).
- Mùi hôi, nước đục, cá bơi lờ đờ là dấu hiệu cần xử lý ngay.

## Phòng bệnh trên cá lóc
Cá lóc nuôi dày dễ gặp bệnh xuất huyết do vi khuẩn, bệnh ký sinh trùng ở da và mang, và các vết loét sau khi bị xây xát. Nguyên tắc phòng:
- Giữ mật độ và lượng ăn phù hợp, nước sạch.
- Hạn chế làm cá trầy xước khi phân cỡ, vận chuyển.
- Vớt cá chết, cá bệnh mỗi ngày.
- Khi cá bệnh, gửi mẫu xét nghiệm và làm theo hướng dẫn của cán bộ thú y thủy sản. Không tự ý dùng kháng sinh hay hóa chất ngoài danh mục cho phép.

Đọc thêm: [bệnh xuất huyết đốm đỏ trên cá](/vi/blog/benh-xuat-huyet-dom-do-tren-ca-nguyen-nhan-cach-phong) và [ký sinh trùng trên cá](/vi/blog/ky-sinh-trung-tren-ca-trung-banh-xe-san-la-mang).

## Thu hoạch
- Ngưng cho ăn khoảng 1 ngày trước khi thu.
- Thu vào sáng sớm, giữ cá trong bể nước sạch có sục khí trước khi vận chuyển.
- Tuân thủ thời gian ngưng thuốc trước thu hoạch nếu đã dùng thuốc trong vụ.

Cần tư vấn cho ao của mình? Gọi hotline 0869 739 679 để kỹ thuật viên Thủy Sản Tím tư vấn.

## Nguồn tham khảo
- Lê Xuân Sinh, Đỗ Minh Chung (Đại học Cần Thơ), *Khảo sát các mô hình nuôi cá lóc (Channa micropeltes và Channa striatus) ở Đồng bằng sông Cửu Long*.
- Tạp chí Khoa học Đại học Cần Thơ: thí nghiệm nuôi cá lóc trong bể lót bạt ở mật độ 100–200 con/m² tại An Giang; thí nghiệm ương cá lóc bằng thức ăn viên 44% đạm ở mật độ 300–500 con/m².

## Câu hỏi thường gặp

### Nuôi cá lóc mật độ bao nhiêu là phù hợp?
Khảo sát ở Đồng bằng sông Cửu Long ghi nhận ao đất thả bình quân khoảng 46 con/m², bể bạt được thử nghiệm ở 100–200 con/m². Người mới nên bắt đầu ở mức thấp và tăng dần khi đã kiểm soát được nước và thức ăn.

### Vì sao cá lóc nuôi hay hao hụt?
Nguyên nhân thường gặp là cá ăn nhau khi chênh lệch kích cỡ, cá nhảy khỏi ao bể, và bệnh do nước bẩn. Phân cỡ định kỳ, lưới chắn và quản lý nước tốt giúp giảm hao hụt.

### Cá lóc thở được không khí thì có cần sục khí không?
Cá lóc chịu thiếu oxy tốt hơn nhiều loài cá, nhưng nước bẩn, khí độc cao vẫn làm cá yếu và dễ bệnh. Ở mật độ cao, việc thay nước và giữ nước sạch quan trọng hơn sục khí.

### Có nên cho cá lóc ăn cá tạp không?
Ngày càng nhiều hộ nuôi dùng thức ăn viên vì chủ động nguồn, ít làm bẩn nước và ít nguy cơ mang mầm bệnh như cá tạp. Nếu dùng cá tạp, cần tươi, sạch và không để thừa.

### Bao lâu nên phân cỡ cá lóc một lần?
Nên kiểm tra định kỳ, nhất là giai đoạn đầu vụ khi cá lớn nhanh và dễ chênh lệch. Khi thấy cá chênh lệch rõ thì lọc cá lớn ra nuôi riêng.
`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'ca-noi-dau-thieu-oxy-nguyen-nhan-cach-xu-ly', topic: 'disease', daysAgo: 0, date: `${DAY}09:40:00+07:00`,
    title: L('Cá nổi đầu thiếu oxy: nguyên nhân và cách xử lý khẩn cấp'),
    excerpt: L('Cá nổi đầu lúc sáng sớm thường do thiếu oxy: ngưỡng oxy nguy hiểm, nguyên nhân (tảo tàn, trời âm u, cho ăn dư), cách xử lý khẩn cấp và phòng ngừa.'),
    body: L(
`Cá nổi đầu, đớp khí trên mặt nước vào lúc gần sáng là dấu hiệu điển hình của **thiếu oxy hòa tan**. Theo tài liệu khuyến nông của Đại học Florida (UF/IFAS), phần lớn loài cá bị stress khi oxy giảm xuống khoảng 2–4 mg/L và bắt đầu chết khi dưới 2 mg/L. Khi thấy cá nổi đầu, việc đầu tiên là **mở quạt, máy sục khí ngay**, ngưng cho ăn, và nếu có thể thì cấp thêm nước sạch có oxy. Sau đó mới tìm nguyên nhân: tảo tàn, trời âm u nhiều ngày, cho ăn dư, mật độ quá dày hoặc nước bị phân tầng sau mưa.

Thiếu oxy là nguyên nhân gây chết cá hàng loạt nhanh nhất trong ao nuôi, có khi chỉ trong vài giờ cuối đêm. Hiểu vì sao oxy tụt và chuẩn bị trước giúp bà con tránh được phần lớn rủi ro.

## Vì sao cá hay nổi đầu lúc gần sáng?
Oxy trong ao chủ yếu đến từ tảo quang hợp vào ban ngày. Ban đêm, tảo, vi sinh vật, cá và chất hữu cơ dưới đáy đều tiêu thụ oxy mà không có quang hợp bù lại. Vì vậy:
- **Oxy thấp nhất vào lúc rạng sáng**, cao nhất vào buổi chiều.
- Ao càng nhiều tảo, nhiều chất hữu cơ, mật độ cá càng dày thì oxy càng tụt sâu vào ban đêm.

Đó là lý do cá nổi đầu thường xảy ra khoảng 3–6 giờ sáng và hết khi mặt trời lên. Nhưng nếu tình trạng kéo dài, cá sẽ yếu, bỏ ăn, dễ bệnh, và một đêm oxy tụt sâu có thể làm cá chết cùng lúc.

## Ngưỡng oxy tham khảo
| Oxy hòa tan | Ý nghĩa với cá |
|---|---|
| Từ khoảng 5 mg/L trở lên | Tốt, cá ăn và lớn bình thường |
| Khoảng 4–5 mg/L | Cá có thể giảm ăn; nên giảm lượng ăn và theo dõi sát |
| Dưới khoảng 4 mg/L | UF/IFAS khuyến cáo chạy sục khí khẩn cấp |
| Khoảng 2–4 mg/L | Phần lớn loài cá bị stress, bắt đầu nổi đầu |
| Dưới khoảng 2 mg/L | Cá thường bắt đầu chết |

Ngưỡng chịu đựng khác nhau tùy loài và nhiệt độ. Cá rô phi chịu oxy thấp khá tốt, cá lóc thở được không khí, trong khi một số loài cá khác nhạy hơn. Cách chắc chắn nhất là đo bằng máy đo oxy vào lúc gần sáng.

## Nguyên nhân thường gặp khiến ao thiếu oxy
1. **Tảo tàn đột ngột:** tảo dày rồi chết hàng loạt (sau mưa, trời âm u, hoặc sau khi diệt tảo). Xác tảo phân hủy tiêu tốn rất nhiều oxy.
2. **Trời âm u, mưa nhiều ngày:** tảo quang hợp yếu nên oxy ban ngày không đủ bù cho ban đêm.
3. **Cho ăn dư:** thức ăn thừa phân hủy tiêu hao oxy và sinh khí độc.
4. **Mật độ quá dày** so với khả năng sục khí, thay nước của ao.
5. **Nhiệt độ cao:** nước nóng chứa ít oxy hơn, trong khi cá lại cần nhiều oxy hơn.
6. **Phân tầng nước và đảo nước:** ao sâu, lặng gió, lớp nước đáy thiếu oxy; sau trận mưa lớn hoặc gió mạnh, nước đảo lộn làm oxy toàn ao giảm đột ngột.
7. **Đáy ao nhiều bùn hữu cơ:** sinh khí độc H2S, NH3 và tiêu hao oxy.

## Phân biệt nổi đầu do oxy với nguyên nhân khác
Không phải lúc nào cá nổi đầu cũng do thiếu oxy:

| Dấu hiệu | Gợi ý nguyên nhân |
|---|---|
| Cả đàn nổi đầu lúc gần sáng, hết khi trời nắng | Thiếu oxy |
| Cá nổi đầu cả ban ngày dù oxy đo được vẫn cao | Bệnh mang, ký sinh trùng mang, khí độc |
| Mang nhợt, nhiều nhớt, cá cọ mình vào thành ao | Ký sinh trùng, xem bài [ký sinh trùng trên cá](/vi/blog/ky-sinh-trung-tren-ca-trung-banh-xe-san-la-mang) |
| Mang chuyển màu nâu, NO2 cao | Ngộ độc nitrit |
| Cá chết rải rác, có xuất huyết | Bệnh vi khuẩn, xem bài [bệnh xuất huyết đốm đỏ trên cá](/vi/blog/benh-xuat-huyet-dom-do-tren-ca-nguyen-nhan-cach-phong) |

Nếu đã tăng sục khí mà cá vẫn nổi đầu, cần kiểm tra mang và các chỉ tiêu nước khác.

## Cách xử lý khẩn cấp khi cá nổi đầu
1. **Mở toàn bộ quạt nước, máy sục khí ngay.** Đây là việc quan trọng nhất. Nếu không có quạt, có thể dùng máy bơm phun nước lên mặt ao để tăng tiếp xúc với không khí.
2. **Ngưng cho ăn** cho đến khi cá trở lại bình thường. Cho ăn lúc thiếu oxy chỉ làm tình hình tệ hơn.
3. **Cấp thêm nước sạch** có oxy cao (nước ao lắng đã xử lý, nước kênh tốt) nếu có điều kiện; tránh cấp nước có nhiệt độ, pH chênh lệch quá lớn.
4. **Không dùng hóa chất diệt tảo, thuốc sát trùng** trong lúc cá đang nổi đầu.
5. **Theo dõi liên tục** đến khi trời sáng hẳn và oxy tăng lại.

Khi khí độc NH3 cao đi kèm, sau khi đã đảm bảo sục khí, có thể dùng **SUPER YUCCA** (hấp thu khí độc NH3 theo nhãn): khi khí độc cao dùng 1 lít/3.000 m³ nước, hòa với nước sạch rồi tạt đều khắp ao, mở quạt cho sản phẩm phân tán đều. Cách tính thể tích nước để dùng đúng liều xem bài [cách tính thể tích nước ao](/vi/blog/cach-tinh-the-tich-nuoc-ao-nuoi-tom).

## Phòng ngừa thiếu oxy
- **Bố trí đủ quạt, máy sục khí** theo mật độ nuôi; chạy nhiều hơn vào ban đêm, ngày âm u.
- **Cho ăn vừa đủ**, giảm ăn khi trời mưa lạnh hoặc nóng gắt.
- **Giữ tảo ở mức vừa phải**: độ trong khoảng 30–40 cm. Tránh để tảo quá dày rồi tàn đồng loạt.
- **Không diệt tảo cả ao một lần** khi tảo quá dày; hỏi kỹ thuật viên để chia ra xử lý từng phần.
- **Xử lý đáy định kỳ:** vi sinh phân hủy mùn bã như **ROVAZYME** (454 g/3.000 m³ nước, 5 ngày/lần theo nhãn) giúp giảm chất hữu cơ tiêu hao oxy.
- **Theo dõi oxy lúc gần sáng** vào những đêm nguy cơ cao: sau mưa lớn, trời âm u, nhiệt độ cao, nước có màu lạ.
- **Chuẩn bị máy phát điện dự phòng** với ao nuôi dày.

Nhiều nguyên tắc về oxy cho ao tôm cũng áp dụng cho ao cá, xem thêm [oxy hòa tan trong ao nuôi bao nhiêu là đủ](/vi/blog/oxy-hoa-tan-ao-nuoi-tom-bao-nhieu-la-du).

Cần tư vấn cho ao của mình? Gọi hotline 0869 739 679 để kỹ thuật viên Thủy Sản Tím tư vấn.

## Nguồn tham khảo
- Francis-Floyd R., UF/IFAS Extension (Đại học Florida), *Dissolved Oxygen for Fish Production* (FA002).
- Clemson Cooperative Extension, *Pond Turnover and Dissolved Oxygen*.
- Texas A&M AgriLife Extension, AquaPlant: *Dissolved oxygen*.

## Câu hỏi thường gặp

### Cá nổi đầu lúc mấy giờ là đáng lo?
Cá nổi đầu vào khoảng 3–6 giờ sáng là dấu hiệu thiếu oxy phổ biến nhất. Nếu cá vẫn nổi đầu khi trời đã nắng, hoặc nổi đầu vào ban ngày, cần kiểm tra thêm mang, khí độc và bệnh.

### Oxy bao nhiêu thì cá bắt đầu nguy hiểm?
Phần lớn loài cá bị stress khi oxy khoảng 2–4 mg/L và thường bắt đầu chết khi dưới khoảng 2 mg/L. Tốt nhất giữ từ khoảng 5 mg/L trở lên để cá ăn và lớn bình thường.

### Cá nổi đầu có nên cho ăn không?
Không. Ngưng cho ăn cho đến khi cá bình thường trở lại. Thức ăn và quá trình tiêu hóa đều làm tăng nhu cầu oxy.

### Sau mưa lớn vì sao cá hay nổi đầu?
Mưa làm trời âm u, tảo quang hợp kém, nước mưa lạnh có thể gây đảo tầng nước và làm tảo tàn. Tất cả làm oxy giảm, nhất là vào đêm và sáng sớm sau mưa.

### Có cách nào biết trước đêm nay ao sẽ thiếu oxy không?
Đo oxy lúc chạng vạng và khoảng 21–22 giờ: nếu oxy giảm nhanh, đêm đó dễ thiếu oxy vào gần sáng. Trời âm u, nước nóng, tảo dày hoặc tảo đang tàn cũng là dấu hiệu nguy cơ.
`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'ky-sinh-trung-tren-ca-trung-banh-xe-san-la-mang', topic: 'disease', daysAgo: 0, date: `${DAY}09:50:00+07:00`,
    title: L('Ký sinh trùng trên cá: trùng bánh xe, sán lá mang, đốm trắng'),
    excerpt: L('Nhận biết ký sinh trùng trên cá nuôi: trùng bánh xe, trùng quả dưa (đốm trắng), sán lá mang; mùa dễ bị, cách kiểm tra mang da và nguyên tắc xử lý an toàn.'),
    body: L(
`Ký sinh trùng trên cá nuôi thường gặp nhất là **trùng bánh xe** (*Trichodina*), **trùng quả dưa** gây bệnh đốm trắng (*Ichthyophthirius multifiliis*) và **sán lá mang** (sán lá đơn chủ như *Dactylogyrus*; trên cá tra thường là *Thaparocleidus*). Cá bị ký sinh thường bơi lờ đờ trên mặt nước, cọ mình vào thành ao, mang nhợt, tiết nhiều nhớt, giảm ăn; nặng thì chết nhiều ở giai đoạn cá giống. Bệnh hay bùng phát khi thời tiết thất thường (mưa nắng xen kẽ, trời lạnh), ao nuôi dày và nước bẩn. Cách chắc chắn nhất là **soi mẫu nhớt da và mang dưới kính hiển vi**, rồi mới chọn cách xử lý theo hướng dẫn của cán bộ thú y.

Ký sinh trùng ít khi tự giết chết cá lớn khỏe mạnh, nhưng chúng làm tổn thương da, mang, tạo đường cho vi khuẩn xâm nhập. Nhiều đợt cá chết do xuất huyết, nấm bắt đầu từ một đợt ký sinh trùng không được phát hiện sớm.

## Các loại ký sinh trùng thường gặp
| Ký sinh trùng | Vị trí | Dấu hiệu chính | Thời điểm hay gặp |
|---|---|---|---|
| Trùng bánh xe (*Trichodina*) | Da, mang | Cá tách đàn, bơi lờ đờ, cọ mình; da sẫm màu, mang nhợt, nhiều nhớt; gây chết nhiều ở giai đoạn ương | Quanh năm, nặng khi thời tiết thất thường; ao dày, nước bẩn |
| Trùng loa kèn (*Epistylis*) | Da, vây | Đám lông trắng nhỏ trên da, vây | Tương tự trùng bánh xe |
| Trùng quả dưa (*Ichthyophthirius*), bệnh đốm trắng | Da, mang | Nhiều chấm trắng nhỏ dưới 1 mm trên da, mang; cá bơi chậm | Nhiệt độ nước khoảng 25–28 °C; cá giống chết nhiều trong 5–7 ngày |
| Sán lá mang (*Dactylogyrus*, *Thaparocleidus*) | Mang | Mang sưng, nhợt, nhiều nhớt; cá bơi chậm trên mặt nước, kém ăn | Nặng vào mùa mưa, thời tiết mát |

Các mô tả trên tổng hợp từ FAO và Global Seafood Alliance (bài về các bệnh thường gặp trên cá tra nuôi ở Việt Nam). Bảng chỉ để nhận diện ban đầu; muốn biết chắc phải soi mẫu.

## Cách kiểm tra cá có bị ký sinh trùng không
1. **Quan sát đàn cá:** cá cọ mình vào thành ao, bờ ao, nhảy lên mặt nước; tách đàn; bơi lờ đờ ven bờ; giảm ăn.
2. **Bắt vài con có biểu hiện bệnh** (không lấy cá đã chết lâu vì ký sinh trùng rời khỏi xác).
3. **Quan sát bằng mắt:** chấm trắng trên da, vây (đốm trắng); mang nhợt, sưng, nhiều nhớt.
4. **Soi kính hiển vi:** cạo nhẹ nhớt trên da và cắt một mẩu mang, đặt lên lam kính với một giọt nước ao, soi ở độ phóng đại thấp. Trùng bánh xe hình đĩa tròn quay liên tục; sán lá mang hình con sâu nhỏ bám vào tơ mang.

Nếu không có kính hiển vi, nên gửi cá đến trạm thú y, phòng xét nghiệm hoặc nhờ kỹ thuật viên kiểm tra. Đừng đoán bệnh qua dấu hiệu bên ngoài rồi dùng thuốc, vì dấu hiệu của ký sinh trùng dễ lẫn với thiếu oxy, khí độc và bệnh vi khuẩn (xem [cá nổi đầu thiếu oxy](/vi/blog/ca-noi-dau-thieu-oxy-nguyen-nhan-cach-xu-ly)).

## Vì sao cá bị ký sinh trùng nặng?
- **Mật độ cao:** ký sinh trùng lây từ con này sang con khác dễ hơn.
- **Nước bẩn, nhiều chất hữu cơ:** thuận lợi cho nhiều loài trùng phát triển.
- **Thời tiết thất thường:** mưa nắng xen kẽ, trời trở lạnh làm cá stress, sức đề kháng giảm.
- **Cá giống mang mầm bệnh** từ trại ương, hoặc thả chung cá nhiều nguồn.
- **Ao không cải tạo kỹ** giữa các vụ: trứng, bào nang ký sinh trùng tồn tại trong bùn đáy.

## Nguyên tắc xử lý an toàn
Ký sinh trùng ở da và mang có nhiều cách xử lý, nhưng mỗi cách đều có rủi ro với cá. Một số nguyên tắc chung:

- **Xác định đúng loại ký sinh trùng trước khi xử lý.** Mỗi loại nhạy với biện pháp khác nhau. Ví dụ, trùng quả dưa chỉ bị diệt ở giai đoạn bơi tự do trong nước; ở giai đoạn nằm dưới da cá, chúng được bảo vệ. Vì vậy tài liệu khuyến nông của Đại học Florida khuyến cáo **xử lý lặp lại cách ngày, 3–5 lần** để cắt vòng đời.
- **Chỉ dùng hóa chất, thuốc trong danh mục được phép** sử dụng trong nuôi trồng thủy sản tại Việt Nam, theo đúng hướng dẫn của cán bộ thú y thủy sản, và tuân thủ thời gian ngưng trước thu hoạch.
- **Muối ăn (NaCl)** được dùng khá rộng rãi cho một số nguyên sinh động vật ngoài da (như trùng bánh xe) ở cá nước ngọt. Tài liệu khuyến nông của Virginia Tech (Mỹ) ghi nhận muối ở nồng độ khoảng 1,5–3‰ có thể dùng cho trùng bánh xe; tắm muối nồng độ cao hơn thì chỉ trong thời gian ngắn. Mỗi loài cá chịu muối khác nhau, nên **luôn thử trên vài con trước** khi làm cả đàn, và hỏi kỹ thuật viên về nồng độ, thời gian phù hợp.
- **Đồng sunfat (CuSO₄)** từng được dùng trị trùng bánh xe nhưng **rất độc với cá ở nước mềm, kiềm thấp**. Các tài liệu khuyến nông ở Mỹ (Đại học Florida, Mississippi State, Oklahoma State) thống nhất: liều tối đa của đồng sunfat (tính bằng ppm) không vượt quá **độ kiềm tổng (mg/L CaCO₃) chia cho 100**, và **không dùng khi độ kiềm dưới khoảng 50 mg/L**. Đồng cũng diệt tảo, làm tụt oxy sau khi dùng. Chỉ dùng sản phẩm đồng được phép lưu hành, khi đã đo kiềm và có hướng dẫn của cán bộ thú y thủy sản. Tham khảo thêm [diệt tảo bằng đồng CuSO₄ an toàn](/vi/blog/diet-tao-bang-dong-cuso4-ao-nuoi-tom-an-toan).
- **Tăng sục khí** trong và sau khi xử lý; ngưng hoặc giảm cho ăn trong ngày xử lý.

> Không trộn kháng sinh để "trị ký sinh trùng". Kháng sinh không có tác dụng với trùng và sán, chỉ làm tăng nguy cơ kháng thuốc và tồn dư.

## Phòng ký sinh trùng cho ao cá
### Trước khi thả giống
- **Cải tạo ao kỹ:** tháo cạn, nạo vét bùn, phơi đáy, bón vôi. Global Seafood Alliance ghi nhận với một số ký sinh trùng tạo bào nang (như *Myxobolus*, *Henneguya*) chưa có thuốc trị hiệu quả, việc phơi ao và bón vôi để loại bỏ vật chủ trung gian trong bùn đáy là cách kiểm soát chính.
- **Sát trùng nước cấp** trong ao lắng trước khi đưa vào ao nuôi. Ví dụ **VH-DIO 99** (iodine dạng PVP, công dụng sát trùng nguồn nước): liều theo hồ sơ tiêu chuẩn cơ sở của sản phẩm khi chuẩn bị ao là 1 lít/3.000 m³ nước; hòa với nước tạt đều khắp ao, tạt vào lúc chiều mát. Chờ hết tác dụng của chất sát trùng rồi mới thả cá.
- **Kiểm tra cá giống:** soi mẫu da, mang một vài con trước khi nhận; không nhận cá có nhiều trùng.

### Trong vụ nuôi
- **Mật độ vừa phải**, không cho ăn dư, giữ nước sạch.
- **Soi kiểm tra định kỳ** da, mang (ví dụ mỗi 1–2 tuần, và ngay khi thời tiết thay đổi).
- **Sát trùng nước định kỳ** theo hướng dẫn kỹ thuật: **VH-DIO 99** liều định kỳ theo hồ sơ tiêu chuẩn cơ sở là 1 lít/6.000–9.000 m³ nước, 10–15 ngày/lần; ngưng sử dụng 7–10 ngày trước thu hoạch. Sát trùng nước giúp giảm mầm bệnh trong nước, không thay thế việc xử lý ký sinh trùng đã bám trên cá.
- **Không dùng chung dụng cụ** giữa các ao, sát trùng lưới, vợt sau khi dùng.
- **Hỗ trợ đường ruột** cho cá bằng lợi khuẩn trộn ăn như **US LACTO** (liều theo hướng dẫn trên bao bì), giúp cá tiêu hóa tốt, ăn khỏe hơn.

Cách so sánh các nhóm chất sát trùng (BKC, iodine, glutaraldehyde) xem bài [sát trùng nước ao nuôi](/vi/blog/sat-trung-nuoc-ao-nuoi-bkc-iodine-glutaraldehyde).

Cần tư vấn cho ao của mình? Gọi hotline 0869 739 679 để kỹ thuật viên Thủy Sản Tím tư vấn.

## Nguồn tham khảo
- Global Seafood Alliance, *Common diseases of pangasius catfish farmed in Vietnam*.
- FAO, *Cultured aquatic species fact sheets: Oreochromis niloticus* (bảng bệnh ký sinh trùng).
- UF/IFAS (Đại học Florida) và Texas A&M AgriLife Extension, *Introduction to Freshwater Fish Parasites*; SRAC, *Protozoan Parasites* (Publication 4701).
- Virginia Cooperative Extension (Virginia Tech), tài liệu về bệnh và cách dùng muối trong nuôi cá.
- UF/IFAS, Mississippi State Extension, Oklahoma State Extension: tài liệu về dùng đồng sunfat trong ao cá và quy tắc liều theo độ kiềm.

## Câu hỏi thường gặp

### Cá cọ mình vào thành ao có phải bị ký sinh trùng không?
Đây là dấu hiệu gợi ý thường gặp của ký sinh trùng da, mang. Tuy nhiên nên soi mẫu nhớt da và mang để xác định, vì nước có chất kích ứng hoặc khí độc cũng làm cá có biểu hiện tương tự.

### Bệnh đốm trắng trên cá có chữa được không?
Bệnh khó xử lý vì trùng nằm dưới da cá được bảo vệ, chỉ giai đoạn bơi tự do trong nước mới bị diệt. Phải phát hiện sớm và xử lý lặp lại theo hướng dẫn kỹ thuật để cắt vòng đời. Cá giống có thể chết nhiều trong 5–7 ngày nếu chậm trễ.

### Có thể dùng đồng sunfat trị trùng bánh xe không?
Đồng sunfat rất độc với cá ở ao kiềm thấp. Theo tài liệu khuyến nông, liều tối đa không nên vượt độ kiềm chia cho 100 (ppm), và không dùng khi kiềm dưới khoảng 50 mg/L. Chỉ dùng sản phẩm được phép, khi đã đo kiềm và có hướng dẫn của cán bộ thú y thủy sản.

### Kháng sinh có trị được ký sinh trùng không?
Không. Kháng sinh không diệt trùng và sán. Dùng kháng sinh sai mục đích gây kháng thuốc và tồn dư. Chỉ dùng kháng sinh khi có chẩn đoán bệnh vi khuẩn và kê đơn của cán bộ thú y.

### Bao lâu nên soi kiểm tra ký sinh trùng một lần?
Nên kiểm tra định kỳ, ví dụ 1–2 tuần một lần, và kiểm tra ngay khi thời tiết thay đổi, sau khi san cá, hoặc khi thấy cá cọ mình, giảm ăn.
`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'cach-tinh-luong-thuc-an-cho-ca-nuoi-ao', topic: 'technique', daysAgo: 0, date: `${DAY}10:00:00+07:00`,
    title: L('Cách tính lượng thức ăn cho cá nuôi ao theo trọng lượng'),
    excerpt: L('Cách tính lượng thức ăn cho cá nuôi ao: ước lượng sinh khối, bảng khẩu phần theo cỡ cá, điều chỉnh theo nhiệt độ và oxy, tính FCR để giảm chi phí thức ăn.'),
    body: L(
`Lượng thức ăn cho cá mỗi ngày được tính bằng công thức: **lượng ăn (kg/ngày) = tổng khối lượng cá trong ao (kg) × khẩu phần (% trọng lượng thân)**. Khẩu phần giảm dần khi cá lớn: theo bảng của FAO cho cá rô phi nuôi thâm canh, cá 1–5 g ăn khoảng 6–10% trọng lượng thân mỗi ngày, cá 20–100 g khoảng 3–4%, cá trên 250 g khoảng 1,5–2%. Mỗi 1–2 tuần cân mẫu để cập nhật khối lượng đàn cá, và giảm lượng ăn khi nhiệt độ thấp, oxy thấp hoặc cá có dấu hiệu bệnh.

Thức ăn thường là khoản chi lớn nhất trong nuôi cá. Cho ăn thiếu cá chậm lớn, cho ăn dư thì tốn tiền, nước bẩn, khí độc tăng và cá dễ bệnh. Bài này hướng dẫn cách tính lượng ăn từng bước, dùng được cho cá rô phi và tham khảo cho các loài cá ăn thức ăn viên khác.

## Bước 1: Ước lượng tổng khối lượng cá trong ao
**Tổng khối lượng cá (kg) = số cá còn sống × trọng lượng trung bình một con (kg)**

- **Số cá còn sống:** số thả ban đầu trừ đi hao hụt ước tính. Ghi chép số cá chết vớt được mỗi ngày giúp ước lượng sát hơn.
- **Trọng lượng trung bình:** chài hoặc vợt ngẫu nhiên ở vài điểm trong ao, cân một mẻ (ví dụ 30–50 con), chia cho số con.

Ví dụ: ao thả 20.000 con, ước tính còn 90% (18.000 con). Cân mẫu 40 con được 2 kg, trung bình 0,05 kg/con (50 g). Tổng khối lượng = 18.000 × 0,05 = 900 kg.

## Bước 2: Chọn khẩu phần theo cỡ cá
Bảng dưới đây lấy theo bảng cho ăn của FAO cho cá rô phi nuôi thâm canh (bảng 28, AFFRIS), chỉ mang tính tham khảo. Luôn ưu tiên bảng cho ăn in trên bao bì của nhà sản xuất thức ăn bà con đang dùng.

| Cỡ cá | Khẩu phần (% trọng lượng thân/ngày) | Số cữ/ngày |
|---|---|---|
| 1–5 g | Khoảng 6–10% | 4 |
| 5–20 g | Khoảng 4–6% | 4 |
| 20–100 g | Khoảng 3–4% | 2 |
| 100–250 g | Khoảng 2–3% | 2 |
| Trên 250 g | Khoảng 1,5–2% | 2 |

Số cữ trong bảng là mức tối thiểu theo bảng FAO; nhiều hộ chia thành 3 cữ để cá ăn đều hơn.

Tiếp ví dụ trên: cá 50 g, chọn khẩu phần 3,5%. Lượng ăn = 900 × 3,5% = 31,5 kg/ngày, chia 2–3 cữ (khoảng 10,5–16 kg/cữ).

## Bước 3: Điều chỉnh theo điều kiện thực tế
Khẩu phần trong bảng là cho điều kiện tốt. Cần giảm khi:

- **Nhiệt độ thấp:** cá rô phi ở 20–22 °C chỉ lớn được khoảng 30% so với điều kiện tối ưu, ăn ít hơn nhiều. Trời lạnh kéo dài thì giảm lượng ăn tương ứng.
- **Oxy thấp:** theo tổng quan của Abd El-Hack và cộng sự (2022), khi oxy hòa tan khoảng 3–5 mg/L nên giảm lượng ăn, và **ngưng cho ăn khi oxy từ 3 mg/L trở xuống**. Oxy giảm ngay sau khi cá ăn, nên tránh cho ăn lúc sáng sớm khi oxy thấp nhất. Xem bài [cá nổi đầu thiếu oxy](/vi/blog/ca-noi-dau-thieu-oxy-nguyen-nhan-cach-xu-ly).
- **Trời mưa, âm u, nước xấu**, khí độc cao.
- **Cá có dấu hiệu bệnh**, bỏ ăn.
- **Sau khi đánh bắt, san cá, xử lý nước**: cá stress, ăn kém 1–2 ngày.

Ngược lại, khi thời tiết tốt, cá ăn hết nhanh và hăng, có thể tăng dần 5–10% mỗi lần, không tăng đột ngột.

## Bước 4: Quan sát khi cho ăn
- **Cho ăn tại vị trí cố định**, giờ cố định; rải từ từ, không đổ cả bao một lúc.
- **Thức ăn nổi:** dễ quan sát. Cá ăn hết trong khoảng 15–30 phút là vừa; còn thừa nhiều thì giảm ở cữ sau.
- **Thức ăn chìm:** khó quan sát hơn, có thể dùng sàng ăn đặt dưới nước tại điểm cho ăn để kiểm tra lượng thừa.
- **Ghi lại** lượng ăn từng cữ, thời tiết, biểu hiện của cá.

## Bước 5: Tính hệ số chuyển đổi thức ăn (FCR)
**FCR = tổng lượng thức ăn đã dùng (kg) ÷ khối lượng cá tăng thêm (kg)**

Ví dụ: vụ nuôi dùng 15 tấn thức ăn, thu được 11 tấn cá, thả giống ban đầu 0,5 tấn. Khối lượng tăng = 11 − 0,5 = 10,5 tấn. FCR = 15 ÷ 10,5 ≈ 1,43.

FCR càng thấp nghĩa là càng ít thức ăn để có 1 kg cá. FCR phụ thuộc loài cá, chất lượng thức ăn, mật độ, môi trường và cách cho ăn. So sánh FCR giữa các vụ của chính ao mình là cách tốt nhất để biết cách cho ăn đã cải thiện hay chưa.

## Những cách giảm hao phí thức ăn
- **Chọn thức ăn đúng cỡ viên và đúng độ đạm** theo giai đoạn. Theo FAO, thức ăn cho cá rô phi ương khoảng 30% đạm, nuôi thương phẩm khoảng 24–35% tùy hình thức nuôi.
- **Bảo quản thức ăn nơi khô, thoáng**, kê cao khỏi nền, dùng hết bao đã mở trong thời gian ngắn. Thức ăn mốc gây hại cho gan cá. Nguyên tắc bảo quản tương tự bài [bảo quản thuốc, men vi sinh thủy sản](/vi/blog/bao-quan-thuoc-men-vi-sinh-thuy-san).
- **Bổ sung lợi khuẩn** giúp cá tiêu hóa, hấp thu tốt hơn: **US LACTO** (nhãn ghi công dụng hỗ trợ tiêu hóa, giảm hệ số FCR), liều dùng theo hướng dẫn trên bao bì.
- **Kích thích bắt mồi khi cá biếng ăn:** **AMIN CARE** (đạm cá, acid amin, mùi tanh hấp dẫn) trộn 3–5 ml/kg thức ăn, 3 lần/ngày theo hồ sơ tiêu chuẩn cơ sở của sản phẩm.
- **Hỗ trợ gan khi cho ăn nhiều đạm, mật độ cao:** **HEPALIVER-FS** hoặc **LIVER - MAX** dùng theo hướng dẫn trên bao bì.

Cách trộn chế phẩm vào thức ăn viên (hòa nước, trộn đều, để ráo trước khi cho ăn) xem bài [cách trộn thuốc, chế phẩm vào thức ăn](/vi/blog/cach-tron-thuoc-che-pham-vao-thuc-an-cho-tom).

## Mẫu sổ theo dõi thức ăn
| Ngày | Cữ | Lượng ăn (kg) | Thức ăn thừa | Nhiệt độ, thời tiết | Ghi chú |
|---|---|---|---|---|---|
| 01 | Sáng | 8 | Hết trong 20 phút | 29 °C, nắng | |
| 01 | Chiều | 9 | Còn ít | 31 °C | Giảm 0,5 kg cữ sau |

Cuối mỗi tuần cộng tổng lượng ăn; mỗi 1–2 tuần cân mẫu, tính lại khối lượng đàn và khẩu phần.

Cần tư vấn cho ao của mình? Gọi hotline 0869 739 679 để kỹ thuật viên Thủy Sản Tím tư vấn.

## Nguồn tham khảo
- FAO AFFRIS, *Nile tilapia*, bảng 26 và bảng 28 (bảng cho ăn theo cỡ cá).
- FAO (2009), *Cultured aquatic species fact sheets: Oreochromis niloticus* (Rakocy J.E.).
- Abd El-Hack M.E. và cộng sự (2022), *Effect of environmental factors on growth performance of Nile tilapia (Oreochromis niloticus)*, International Journal of Biometeorology.

## Câu hỏi thường gặp

### Cá ăn bao nhiêu phần trăm trọng lượng thân mỗi ngày?
Tùy cỡ cá. Theo bảng tham khảo của FAO cho cá rô phi, cá nhỏ 1–5 g ăn khoảng 6–10%, cá 20–100 g khoảng 3–4%, cá trên 250 g khoảng 1,5–2%. Nên ưu tiên bảng của hãng thức ăn đang dùng.

### Bao lâu nên cân mẫu cá một lần?
Khoảng 1–2 tuần một lần. Cá lớn nhanh nên nếu không cập nhật, lượng ăn sẽ bị thiếu; ngược lại nếu ước tính số cá sống quá cao thì sẽ cho ăn dư.

### Khi nào nên ngưng cho cá ăn?
Ngưng cho ăn khi oxy hòa tan khoảng 3 mg/L trở xuống, khi cá nổi đầu, và trong ngày xử lý nước hoặc đánh bắt. Khi cá bệnh, giảm mạnh lượng ăn và làm theo hướng dẫn của cán bộ thú y.

### FCR bao nhiêu là tốt?
FCR khác nhau theo loài, thức ăn và mô hình nuôi, nên không có một con số chung. Hãy so sánh FCR qua các vụ của chính ao mình; FCR giảm nghĩa là cách cho ăn và quản lý đã tốt hơn.

### Có nên cho cá ăn vào ban đêm không?
Thường không nên, vì oxy giảm vào ban đêm và gần sáng, trong khi cá ăn xong lại cần nhiều oxy hơn. Cữ ăn cuối nên kết thúc trước khi trời tối.
`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'benh-xuat-huyet-dom-do-tren-ca-nguyen-nhan-cach-phong', topic: 'disease', daysAgo: 0, date: `${DAY}10:10:00+07:00`,
    title: L('Bệnh xuất huyết đốm đỏ trên cá: nguyên nhân, cách phòng'),
    excerpt: L('Bệnh xuất huyết đốm đỏ trên cá do vi khuẩn Aeromonas: dấu hiệu trên thân, vây, hậu môn; thời điểm dễ bùng phát, yếu tố stress và cách phòng tại ao.'),
    body: L(
`Bệnh xuất huyết đốm đỏ trên cá chủ yếu do nhóm vi khuẩn *Aeromonas* di động (*Aeromonas hydrophila*, *A. sobria*, *A. caviae*) gây ra. Cá bệnh có các đốm đỏ xuất huyết trên đầu, quanh miệng, gốc vây; hậu môn sưng đỏ; bụng chướng chứa dịch màu hồng hoặc vàng; có thể mắt lồi. Theo Global Seafood Alliance, trên cá tra nuôi ở Việt Nam, bệnh thường xuất hiện vào **thời điểm chuyển từ mùa khô sang mùa mưa** và khi cá bị stress do đánh bắt, vận chuyển. Phòng bệnh dựa vào giảm mật độ, thao tác nhẹ nhàng, giữ nước sạch và quản lý sức khỏe đàn cá tốt. Điều trị cần có chẩn đoán và kê đơn của cán bộ thú y.

*Aeromonas* là vi khuẩn có sẵn trong môi trường nước ngọt. Chúng thường chỉ gây bệnh khi cá yếu, bị tổn thương da hoặc môi trường xấu. Vì vậy bệnh xuất huyết được xem là "bệnh của stress", gặp trên cá tra, cá rô phi, cá lóc, cá chép và nhiều loài cá nước ngọt khác.

## Dấu hiệu nhận biết
| Vị trí | Dấu hiệu |
|---|---|
| Hành vi | Cá bơi lờ đờ, mất thăng bằng, đớp khí trên mặt nước, giảm ăn hoặc bỏ ăn |
| Da, vây | Đốm đỏ xuất huyết trên đầu, quanh miệng, gốc vây; vây, da viêm đỏ; có thể có vết loét |
| Hậu môn | Sưng, đỏ |
| Mắt | Có thể lồi, giác mạc đục |
| Bụng, nội tạng | Bụng chướng, chứa dịch màu hồng đến vàng; đôi khi ruột có hơi |
| Diễn biến | Thường chết rải rác kéo dài; có thể chết nhiều khi stress nặng |

Mắt lồi, xuất huyết cũng gặp ở bệnh liên cầu khuẩn trên cá rô phi (xem [bệnh liên cầu khuẩn ở cá rô phi](/vi/blog/benh-lien-cau-khuan-ca-ro-phi-nhan-biet-phong-benh)), nên không thể phân biệt chắc chắn chỉ bằng mắt thường. Mô tả tóm tắt của bệnh có trong [thư viện bệnh: xuất huyết trên cá](/vi/diseases/xuat-huyet-ca).

## Nguyên nhân và yếu tố thuận lợi
- **Chuyển mùa:** thời điểm đầu mùa mưa, nhiệt độ và chất lượng nước thay đổi, cá dễ stress.
- **Đánh bắt, vận chuyển, san cá:** làm cá trầy xước, mất nhớt, tạo đường cho vi khuẩn xâm nhập.
- **Mật độ quá dày.**
- **Nước ô nhiễm hữu cơ**, đáy ao nhiều bùn, khí độc cao, oxy thấp.
- **Ký sinh trùng da, mang** gây tổn thương trước, vi khuẩn xâm nhập sau. Xem [ký sinh trùng trên cá](/vi/blog/ky-sinh-trung-tren-ca-trung-banh-xe-san-la-mang).
- **Thức ăn kém chất lượng, cho ăn dư** làm nước bẩn và cá yếu.

## Các bước phòng bệnh xuất huyết
### 1. Giảm stress khi thao tác với cá
- Đánh bắt, san cá, vận chuyển vào **sáng sớm hoặc chiều mát**, thao tác nhanh, nhẹ, dùng lưới mềm.
- Không để cá trong lưới, thùng quá lâu; vận chuyển có sục khí.
- Sau khi thả, theo dõi cá vài ngày để phát hiện sớm vết đỏ, vết loét.

### 2. Giữ mật độ và nước ổn định
Global Seafood Alliance nhận định **giảm mật độ nuôi và quản lý sức khỏe tốt** giúp giảm đáng kể tỷ lệ mắc bệnh. Cụ thể:
- Thả mật độ phù hợp với khả năng cấp, thay nước và sục khí của ao.
- Không cho ăn dư; tính lượng ăn theo trọng lượng đàn cá (xem [cách tính lượng thức ăn cho cá nuôi ao](/vi/blog/cach-tinh-luong-thuc-an-cho-ca-nuoi-ao)).
- Xử lý đáy, giảm chất hữu cơ. Vi sinh phân hủy mùn bã như **ROVAZYME** dùng 454 g/3.000 m³ nước, 5 ngày/lần theo nhãn.
- Khi khí độc NH3 cao: giảm ăn, tăng sục khí; **SUPER YUCCA** dùng 1 lít/3.000 m³ nước theo nhãn.

### 3. Sát trùng nước đúng lúc
- **Sát trùng nước cấp** ở ao lắng trước khi đưa vào ao nuôi.
- **Sau khi san cá, vận chuyển** hoặc sau đợt mưa lớn, có thể sát trùng nước theo hướng dẫn kỹ thuật. Ví dụ **VH-DIO 99** (iodine dạng PVP, công dụng sát trùng nguồn nước): theo hồ sơ tiêu chuẩn cơ sở của sản phẩm, liều định kỳ 1 lít/6.000–9.000 m³ nước, 10–15 ngày/lần; tăng gấp đôi khi nước nhiễm khuẩn nặng; hòa nước tạt đều khắp ao vào lúc chiều mát; ngưng sử dụng 7–10 ngày trước thu hoạch.
- **Không dùng chất sát trùng cùng lúc với men vi sinh**; sau sát trùng 2–3 ngày mới bổ sung vi sinh trở lại.

Tham khảo cách chọn nhóm chất sát trùng trong bài [sát trùng nước ao nuôi: BKC, iodine, glutaraldehyde](/vi/blog/sat-trung-nuoc-ao-nuoi-bkc-iodine-glutaraldehyde).

### 4. Hỗ trợ sức khỏe cho cá
- **US LACTO** (lợi khuẩn trộn thức ăn) hỗ trợ đường ruột; liều theo hướng dẫn trên bao bì.
- **BIOTIC 99** (lợi khuẩn dạng nước, nhãn ghi công dụng cho tôm, cá) dùng theo hướng dẫn trên bao bì. Lưu ý nhãn khuyến cáo không dùng chung với acid hữu cơ và kháng sinh.
- **HEPALIVER-FS** hỗ trợ bồi bổ gan cá, dùng theo hướng dẫn trên bao bì, nhất là sau đợt bệnh hoặc khi cá ăn nhiều.

Các chế phẩm trên chỉ hỗ trợ sức khỏe, không chữa được bệnh do vi khuẩn.

### 5. Vắc-xin cho cá tra
Tại Việt Nam, Cục Thú y đã cấp phép vắc-xin tiêm cho cá tra phòng đồng thời *Edwardsiella ictaluri* (gan thận mủ) và *Aeromonas hydrophila* (xuất huyết). Một số nghiên cứu lưu ý *Aeromonas hydrophila* rất đa dạng nên hiệu quả bảo vệ ngoài thực tế có thể khác nhau. Bà con hỏi cơ sở giống và cán bộ thú y để được tư vấn.

## Khi cá đã bị bệnh
1. **Vớt cá chết, cá bệnh nặng** mỗi ngày, tiêu hủy xa ao.
2. **Giảm ăn**, tăng sục khí, kiểm tra oxy, NH3, NO2.
3. **Hạn chế đánh bắt, san cá** cho đến khi đàn cá ổn định.
4. **Gửi mẫu xét nghiệm** để xác định vi khuẩn và làm kháng sinh đồ.
5. **Điều trị theo kê đơn của cán bộ thú y thủy sản**: chỉ dùng thuốc trong danh mục được phép, đúng liều, đủ liệu trình, tuân thủ thời gian ngưng thuốc trước thu hoạch.

Cần tư vấn cho ao của mình? Gọi hotline 0869 739 679 để kỹ thuật viên Thủy Sản Tím tư vấn.

## Nguồn tham khảo
- Từ Thanh Dung và cộng sự (2008), *Common diseases of pangasius catfish farmed in Vietnam*, Global Aquaculture Advocate (mục bệnh đốm đỏ do *Aeromonas*).
- FAO (2009), *Cultured aquatic species fact sheets: Oreochromis niloticus* (bảng bệnh: nhiễm khuẩn huyết do *Aeromonas* di động).
- Fish Farming Expert, The Fish Site: tin về vắc-xin ALPHA JECT Panga của PHARMAQ phòng *E. ictaluri* và *A. hydrophila* cho cá tra tại Việt Nam.

## Câu hỏi thường gặp

### Cá bị đốm đỏ trên thân là bệnh gì?
Đốm đỏ xuất huyết trên thân, gốc vây, quanh miệng thường gặp ở bệnh do vi khuẩn Aeromonas, nhưng một số bệnh khác (như liên cầu khuẩn trên cá rô phi) cũng có dấu hiệu tương tự. Cần xét nghiệm để xác định đúng.

### Vì sao cá hay bị xuất huyết sau khi vận chuyển, san cá?
Đánh bắt, vận chuyển làm cá trầy xước, mất lớp nhớt bảo vệ và bị stress. Vi khuẩn Aeromonas có sẵn trong nước dễ xâm nhập qua vết thương. Thao tác nhẹ và giữ nước sạch sau khi thả giúp giảm bệnh.

### Bệnh xuất huyết có lây sang ao khác không?
Có thể lây qua nước, dụng cụ, cá bệnh. Không dùng chung lưới, vợt giữa ao bệnh và ao khỏe, sát trùng dụng cụ sau khi dùng và không xả nước ao bệnh ra nguồn chung khi chưa xử lý.

### Có nên tự dùng kháng sinh khi cá xuất huyết?
Không nên. Kháng sinh chỉ dùng khi có chẩn đoán và kê đơn của cán bộ thú y thủy sản, đúng loại được phép và đúng thời gian ngưng thuốc. Dùng tùy tiện gây kháng thuốc và tồn dư.

### Sát trùng nước có chữa khỏi bệnh xuất huyết không?
Sát trùng giúp giảm mật độ vi khuẩn trong nước, hỗ trợ phòng và hạn chế lây lan, nhưng không chữa được vi khuẩn đã nằm trong cơ thể cá. Cần kết hợp cải thiện môi trường và điều trị theo hướng dẫn thú y.
`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'ky-thuat-nuoi-tom-cang-xanh-ao-dat', topic: 'technique', daysAgo: 0, date: `${DAY}10:20:00+07:00`,
    title: L('Kỹ thuật nuôi tôm càng xanh ao đất cho người mới'),
    excerpt: L('Kỹ thuật nuôi tôm càng xanh ao đất: thông số nước, mật độ thả, giá thể, thức ăn, hiện tượng tôm lớn không đều, thu tỉa tôm đực và cách phòng bệnh.'),
    body: L(
`Tôm càng xanh (*Macrobrachium rosenbergii*) nuôi thương phẩm trong **nước ngọt**, lớn tốt ở nhiệt độ khoảng 28–31 °C, pH khoảng 7,0–8,5 và độ cứng không quá 150 mg/L. Theo FAO, nuôi bán thâm canh thường thả **khoảng 4–20 con/m²**; các khảo sát ở Bến Tre, Trà Vinh ghi nhận ao đất thường thả khoảng 4–7 con/m² và nuôi khoảng 6–8 tháng. Điểm đặc biệt của tôm càng xanh là **tôm đực lớn không đều**, nên cần bố trí giá thể và **thu tỉa** tôm lớn để đàn còn lại phát triển.

Tôm càng xanh là đối tượng nuôi quen thuộc ở Đồng bằng sông Cửu Long, có thể nuôi chuyên trong ao đất, luân canh hoặc xen canh với lúa. Mô hình này phù hợp với vùng nước ngọt và những vùng đang chuyển đổi từ trồng lúa kém hiệu quả.

## Thông số nước tham khảo
| Chỉ tiêu | Khoảng tham khảo | Ghi chú |
|---|---|---|
| Nhiệt độ | Khoảng 28–31 °C | Tối ưu theo FAO |
| pH | Khoảng 7,0–8,5 | Dao động sáng chiều càng ít càng tốt |
| Độ cứng tổng | Khoảng 30–150 mg/L CaCO₃ | Nguồn nước có độ cứng trên khoảng 150 mg/L không phù hợp |
| Độ mặn | Nước ngọt khi nuôi thương phẩm | Ấu trùng cần nước lợ (khoảng 12‰) ở trại giống |
| Oxy hòa tan | Càng cao càng tốt, tránh tụt lúc gần sáng | Tôm hay chết khi lột xác vào đêm thiếu oxy |

Nguồn: FAO (*Cultured aquatic species fact sheets*; New, *Farming freshwater prawns*, 2002). Đây là khoảng tham khảo, tùy vùng nuôi.

## Bước 1: Chuẩn bị ao
- **Ao đất** diện tích vài nghìn m² trở lên, mực nước khoảng 1–1,5 m. Bờ ao chắc, không rò rỉ.
- **Cải tạo:** tháo cạn, vét bùn, phơi đáy, bón vôi theo pH đất; diệt cá tạp, cá dữ (cá lóc, cá rô, cá trê…) vì chúng ăn tôm.
- **Lọc nước cấp** qua lưới mịn để ngăn cá tạp và trứng cá.
- **Gây màu nước** nhẹ trước khi thả để có thức ăn tự nhiên.
- **Bố trí giá thể:** cành cây, tàu dừa, lưới cũ… đặt rải rác trong ao. FAO ghi nhận có giá thể giúp nuôi được mật độ cao hơn, vì tôm có chỗ trú khi lột xác và giảm ăn thịt lẫn nhau.

## Bước 2: Chọn và thả giống
- Chọn tôm giống (postlarvae hoặc tôm giống đã ương) **đồng cỡ, bơi khỏe, phản xạ nhanh**, màu sắc tươi.
- Hỏi trại giống về độ mặn đang ương để **thuần dần về nước ngọt** nếu cần.
- Thả vào sáng sớm hoặc chiều mát; ngâm bao 15–20 phút cho cân bằng nhiệt độ.

**Mật độ thả tham khảo:**

| Hình thức nuôi | Mật độ | Năng suất tham khảo |
|---|---|---|
| Quảng canh, xen canh với lúa | Thấp, thường dưới mức bán thâm canh | Theo FAO, dưới khoảng 0,5 tấn/ha/năm |
| Ao đất (khảo sát Bến Tre, Trà Vinh) | Khoảng 4–7 con/m² | Dao động lớn giữa các hộ; nuôi khoảng 6–8 tháng |
| Bán thâm canh (theo FAO) | Khoảng 4–20 con/m² | Khoảng 0,5–5 tấn/ha/năm |

Người mới nên bắt đầu ở mật độ thấp. Nhiều nơi **ương tôm giống trong ao nhỏ hoặc vèo** một thời gian trước khi thả ra ao nuôi để tăng tỷ lệ sống.

## Bước 3: Thức ăn
- **Thức ăn công nghiệp cho tôm càng xanh**, theo FAO thường có khoảng 30–35% đạm; FCR với thức ăn viên khô thường khoảng 2–3.
- **Thường cho ăn 2 cữ/ngày** (sáng sớm và chiều tối), tập trung nhiều hơn vào cữ chiều tối vì tôm hoạt động mạnh về đêm.
- **Rải thức ăn ven bờ** và quanh giá thể; dùng **sàng ăn** để kiểm tra lượng thừa và điều chỉnh. Nguyên tắc đọc sàng ăn tương tự bài [cách đọc nhá (sàng ăn)](/vi/blog/cach-doc-nha-sang-an-dieu-chinh-luong-an-tom-the).
- **Bổ sung lợi khuẩn** trộn ăn: **US LACTO**, liều theo hướng dẫn trên bao bì.
- **Bổ sung khoáng trộn ăn** hỗ trợ lột xác, cứng vỏ: **PREMIX ORA** theo hồ sơ tiêu chuẩn cơ sở của sản phẩm trộn 3–5 ml/kg thức ăn, 3 lần/ngày; khi tôm mềm vỏ, khó lột, chậm cứng vỏ có thể trộn gấp đôi.

## Bước 4: Quản lý nước và khoáng
- **Thay nước định kỳ** từ nguồn sạch đã lắng lọc, nhất là khi nước quá dày tảo hoặc đáy bẩn.
- **Theo dõi pH, oxy, độ trong** hằng ngày; đo kiềm, độ cứng định kỳ.
- **Nước ngọt thường nghèo khoáng.** Khoáng tạt ao giúp tôm lột xác và tạo vỏ, ví dụ **MIX 79** (khoáng tạt ao, nhãn ghi công dụng hỗ trợ lột xác, tạo vỏ), liều dùng theo hướng dẫn trên bao bì. Đo độ cứng trước, tránh để vượt khoảng 150 mg/L.
- **Xử lý đáy:** vi sinh **CLEAR 12H** giúp phân hủy mùn bã hữu cơ, giảm khí độc NH3, H2S; cách ủ và liều cho ao đất theo hướng dẫn trên bao bì.

Xem thêm: [khoáng trộn thức ăn và khoáng tạt ao khác nhau thế nào](/vi/blog/khoang-tron-thuc-an-va-khoang-tat-ao-khac-nhau-the-nao) và [cách ủ vi sinh với đường, mật rỉ](/vi/blog/cach-u-vi-sinh-voi-duong-mat-ri-truoc-khi-tat-ao).

## Tôm lớn không đều và thu tỉa
FAO nhấn mạnh tôm càng xanh đực có **tốc độ lớn rất không đồng đều**, và đây là yếu tố quan trọng bậc nhất khi quản lý ao nuôi. Trong ao thường có ba dạng tôm đực:
- **Đực càng xanh** (càng xanh, rất dài): tôm đực lớn, trội nhất.
- **Đực càng vàng cam:** đang lớn nhanh, sẽ chuyển thành đực càng xanh.
- **Đực nhỏ:** càng nhỏ, mảnh, gần như trong suốt.

Tôm đực lớn chiếm chỗ, kìm hãm tôm khác. Vì vậy nhiều mô hình **thu tỉa định kỳ** bằng lưới kéo có mắt lưới lớn để bắt tôm đạt cỡ (chủ yếu tôm đực lớn), giúp đàn còn lại có điều kiện phát triển. Cuối vụ mới thu toàn bộ.

## Phòng bệnh cho tôm càng xanh
- **Giữ nước ổn định**, tránh thay nước đột ngột làm chênh lệch nhiệt độ, pH.
- **Đủ giá thể và oxy** để tôm lột xác an toàn; tránh cho ăn dư.
- **Theo dõi dấu hiệu bất thường:** tôm đục cơ, đen mang, đốm nâu đen trên vỏ, lột xác không thoát vỏ. FAO liệt kê nhiều vấn đề trên tôm càng xanh như hoại tử cơ, bệnh đốm đen vỏ, chết do lột xác không thoát.
- **Khi tôm chết bất thường**, gửi mẫu xét nghiệm và làm theo hướng dẫn của cán bộ thú y thủy sản, không tự ý dùng kháng sinh.

Cần tư vấn cho ao của mình? Gọi hotline 0869 739 679 để kỹ thuật viên Thủy Sản Tím tư vấn.

## Nguồn tham khảo
- FAO (2009), *Cultured aquatic species fact sheets: Macrobrachium rosenbergii* (New M.B.).
- New M.B. (2002), *Farming freshwater prawns: a manual for the culture of the giant river prawn (Macrobrachium rosenbergii)*, FAO Fisheries Technical Paper 428.
- Tạp chí Khoa học Đại học Cần Thơ; Tạp chí Khoa học Đại học Trà Vinh: khảo sát nuôi tôm càng xanh ao đất ở Bến Tre, Trà Vinh và mô hình tôm càng xanh kết hợp lúa ở Bạc Liêu, Cà Mau.

## Câu hỏi thường gặp

### Nuôi tôm càng xanh bao lâu thì thu hoạch?
Các khảo sát ao đất ở Bến Tre, Trà Vinh ghi nhận thời gian nuôi khoảng 6–8 tháng. Nhiều hộ thu tỉa tôm lớn trước rồi mới thu toàn bộ vào cuối vụ.

### Tôm càng xanh có nuôi được ở nước lợ không?
Ấu trùng cần nước lợ ở trại giống, còn nuôi thương phẩm là nuôi nước ngọt. Một số vùng nước lợ nhẹ theo mùa vẫn nuôi được, nhưng cần hỏi kỹ thuật viên địa phương.

### Vì sao tôm càng xanh lớn không đều?
Đây là đặc điểm sinh học của loài: tôm đực phân thành nhiều dạng với tốc độ lớn khác nhau, tôm đực lớn kìm hãm các con khác. Thu tỉa tôm lớn và bố trí giá thể giúp giảm chênh lệch.

### Có cần giá thể trong ao tôm càng xanh không?
Nên có. Giá thể cho tôm chỗ trú khi lột xác, giảm ăn thịt lẫn nhau và giúp nuôi mật độ cao hơn.

### Nước ngọt có cần bổ sung khoáng không?
Nước ngọt thường nghèo khoáng, nên bổ sung khoáng giúp tôm lột xác, cứng vỏ. Đo độ cứng và kiềm trước khi dùng, không để độ cứng vượt khoảng 150 mg/L.
`),
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'thay-nuoc-ao-nuoi-ca-khi-nao-bao-nhieu', topic: 'technique', daysAgo: 0, date: `${DAY}10:30:00+07:00`,
    title: L('Thay nước ao nuôi cá: khi nào nên thay, thay bao nhiêu'),
    excerpt: L('Khi nào nên thay nước ao cá tra, cá rô phi, cá lóc; thay bao nhiêu, lấy nước tầng nào, xử lý nước cấp ra sao để cá không sốc và xả thải đúng cách.'),
    body: L(
`Thay nước ao nuôi cá nên làm khi có lý do rõ ràng: cá nổi đầu nhiều buổi sáng liền, khí độc NH3, NO2 cao kéo dài, tảo quá dày hoặc tảo tàn, nước có mùi hôi, hay nước mưa chảy tràn từ bờ vào ao. Mỗi lần nên **thay từng phần, từ từ**, ưu tiên rút nước tầng đáy và cấp nước mới đã lắng, lọc, giữ chênh lệch nhiệt độ, pH giữa nước mới và nước ao ở mức nhỏ. Thay nước không phải là cách cấp cứu nhanh: tài liệu khuyến nông của Trung tâm Nuôi trồng thủy sản vùng phía Nam Hoa Kỳ (SRAC) cho thấy ở ao lớn, bơm nước liên tục ba ngày chỉ làm giảm khí độc amoniac khoảng 10%. Khi cá nổi đầu, việc đầu tiên vẫn là **mở quạt, máy sục khí**.

Mỗi lần lấy nước từ sông, kênh vào ao là một lần có thể đưa theo mầm bệnh, cá tạp, phù sa, nước phèn hoặc nước mặn. Mỗi lần xả nước ao ra ngoài là một lần đưa chất thải ra môi trường chung. Vì vậy thay đúng lúc, đúng cách quan trọng hơn thay nhiều.

## Thay nước giúp được gì và không giúp được gì?
Thay nước giúp pha loãng chất thải, tảo và khí độc, cấp thêm nước có oxy, bù lại lượng nước mất do bốc hơi, rò rỉ. Nhưng tác dụng có giới hạn:
- **Giảm khí độc chậm hơn bà con nghĩ.** Trong tài liệu *Managing Ammonia in Fish Ponds* (SRAC số 4603), hai tác giả Hargreaves và Tucker tính cho một ao rộng khoảng 4 ha có amoniac tổng 1 mg/L: bơm nước giếng vào liên tục ba ngày (tương đương lớp nước khoảng 20 cm) chỉ làm amoniac giảm còn 0,90 mg/L; nếu tháo bớt khoảng 20 cm nước rồi mới cấp lại thì giảm còn 0,83 mg/L. Mức giảm này không đủ trong tình huống khẩn cấp.
- **Không giải quyết nguyên nhân.** Khí độc cao thường do cho ăn dư, mật độ dày, đáy ao nhiều bùn, tảo tàn. Không sửa các nguyên nhân này thì vài ngày sau nước lại xấu.
- **Có rủi ro đi kèm:** sốc môi trường, mang mầm bệnh vào ao và xả thải ra kênh rạch (xem các phần bên dưới).

Hiểu như vậy để bà con dùng thay nước như một công cụ hỗ trợ, đi cùng với quạt nước, quản lý thức ăn và đáy ao.

## Khi nào nên thay nước ao cá?
| Tình huống | Có nên thay? | Gợi ý |
|---|---|---|
| Cá nổi đầu lúc gần sáng nhiều ngày, oxy thấp | Mở quạt, sục khí trước; cấp thêm nước sạch nếu có nguồn tốt | Xem [cá nổi đầu thiếu oxy](/vi/blog/ca-noi-dau-thieu-oxy-nguyen-nhan-cach-xu-ly) |
| NH3, NO2 cao kéo dài dù đã giảm ăn | Thay một phần, kết hợp giảm ăn, xử lý đáy | Xem [khí độc NH3, NO2](/vi/diseases/khi-doc-nh3-no2) |
| Tảo quá dày, độ trong thấp, pH buổi chiều cao | Thay một phần, giảm ăn | Thay nhiều lần, mỗi lần ít |
| Tảo tàn, nước đổi màu đột ngột, có bọt, mùi hôi | Tăng sục khí ngay, sau đó thay một phần | Đề phòng oxy tụt về đêm |
| Sau mưa lớn, nước chảy tràn từ bờ vào ao | Kiểm tra pH, màu nước; xả bớt tầng mặt nếu nước đục, pH giảm | Mưa có thể kéo theo phèn, bùn đất từ bờ ao |
| Mực nước ao giảm do bốc hơi, rò rỉ | Cấp bù nước đã lắng lọc | Cấp từ từ |
| Cá đang bệnh, kênh cấp có nước xả từ ao bệnh | Hạn chế lấy nước | Dùng nước trong ao lắng; hỏi cán bộ thú y thủy sản |
| Mùa khô, nước kênh có nguy cơ nhiễm mặn | Đo độ mặn nước kênh trước khi lấy | Chọn thời điểm nước ngọt hơn hoặc dùng nước dự trữ |

Không nên thay nước theo lịch cứng khi nước ao vẫn tốt. Dựa vào quan sát cá ăn, cá bơi và kết quả đo oxy, pH, NH3, NO2. Cách đo bằng bộ test làm tương tự bài [cách đo chỉ tiêu nước bằng test kit](/vi/blog/cach-do-chi-tieu-nuoc-ao-tom-bang-test-kit).

## Thay bao nhiêu và thay như thế nào?
Không có một con số chung cho mọi ao. Lượng thay phụ thuộc vào độ sâu ao, mật độ cá, lượng ăn và chất lượng nguồn nước. Một số nguyên tắc:
- **Thay từng phần, chia nhiều lần.** Thay lượng lớn trong thời gian ngắn làm nhiệt độ, pH, màu nước thay đổi đột ngột, cá dễ sốc, bỏ ăn.
- **Rút nước tầng đáy**, nơi tích tụ chất thải, bùn và khí độc; cấp nước mới ở tầng mặt.
- **Đo trước khi bơm:** so nhiệt độ, pH (và độ mặn ở vùng có nguy cơ nhiễm mặn) của nước mới với nước ao. Chênh lệch càng nhỏ càng an toàn.
- **Cấp nước từ từ**, mở quạt để nước mới hòa đều.
- **Thay vào lúc mát trời** (sáng sớm hoặc chiều mát), tránh lúc nắng gắt.
- **Hạn chế thay khi cá đang yếu**, vừa san cá, vừa đánh bắt hoặc đang điều trị theo hướng dẫn của cán bộ thú y.
- **Ghi lại** lượng nước thay, thời gian và phản ứng của cá để rút kinh nghiệm cho ao mình.

Muốn biết lượng nước thay tương ứng bao nhiêu m³, cần biết thể tích ao (diện tích × độ sâu nước). Cách tính xem [cách tính thể tích nước ao](/vi/blog/cach-tinh-the-tich-nuoc-ao-nuoi-tom).

## Nguồn nước cấp: lắng, lọc và xử lý trước khi cấp
Nước cấp tốt nhất được xử lý trong **ao lắng** trước khi đưa vào ao nuôi:

1. **Lấy nước qua lưới lọc** ở cửa cống, đầu ống bơm để chặn cá tạp, trứng cá, rác.
2. **Lắng vài ngày** để phù sa, chất lơ lửng chìm xuống.
3. **Sát trùng nước trong ao lắng** khi nguồn nước có nguy cơ mang mầm bệnh. Ví dụ **VH-DIO 99** (iodine dạng PVP, công dụng sát trùng nguồn nước): theo hồ sơ tiêu chuẩn cơ sở của sản phẩm, khi chuẩn bị ao dùng 1 lít/3.000 m³ nước; hòa với nước tạt đều khắp ao, tạt vào lúc chiều mát. Ngưng sử dụng 7–10 ngày trước thu hoạch.
4. **Chờ hết tác dụng của chất sát trùng** rồi mới cấp nước sang ao nuôi.
5. **Kiểm tra nước lắng** (pH, nhiệt độ, màu nước) trước khi bơm.

Nước giếng khoan có thể ít oxy, ở một số vùng còn nhiễm sắt; nên cho chảy qua máng hoặc sục khí, để lắng trước khi cấp. So sánh các nhóm chất sát trùng: [sát trùng nước ao nuôi: BKC, iodine, glutaraldehyde](/vi/blog/sat-trung-nuoc-ao-nuoi-bkc-iodine-glutaraldehyde).

## Cá tra, cá rô phi, cá lóc: thay nước khác nhau thế nào?
**Cá tra ao sâu ven sông.** Ao nuôi cá tra ở Đồng bằng sông Cửu Long sâu hơn nhiều so với ao nuôi các loài khác. Khảo sát của Phan Thanh Lâm và cộng sự (2009) ghi nhận ao sâu 2–6 m, phần lớn (69%) giữ mực nước 3,5–4,5 m; khảo sát của Nguyễn Thanh Phương (Đại học Cần Thơ) đăng trong tài liệu kỹ thuật của FAO cũng ghi độ sâu trung bình khoảng 4,3–4,6 m. Ao nằm gần sông nên chất lượng nước được giữ chủ yếu bằng trao đổi nước với sông. Nghiên cứu của Nhut N. và cộng sự (2017) cho thấy ao vùng hạ nguồn thay nước theo thủy triều, ao vùng thượng nguồn kết hợp thủy triều với bơm nước. Cách làm thường gặp là xả nước khi triều xuống, lấy nước khi triều lên; những ngày nước kém thì phải bơm. Nhóm tác giả cũng lưu ý mặt trái: vì phụ thuộc vào nước sông nên mức an toàn sinh học thấp, mầm bệnh dễ theo nước vào ao. Với ao cá tra, bà con nên:
- Theo dõi tình hình dịch bệnh và nước xả của các ao xung quanh trước khi lấy nước.
- Đặt lưới chắn ở cống, ống bơm; ao có điều kiện nên dành một ao lắng.
- Tránh lấy nước khi nước sông đục nhiều, có dấu hiệu ô nhiễm hoặc có cá chết trôi.

**Cá rô phi ao đất.** Ao rô phi thường nông hơn ao cá tra và không phải ao nào cũng lấy được nước trực tiếp từ sông, nên thay nước dựa nhiều vào ao lắng và máy bơm. Rô phi chịu môi trường khá tốt, nhưng nuôi dày, cho ăn nhiều thì vẫn cần giữ oxy, khí độc ổn định. Ao không thay được nước thường xuyên thì phải dựa nhiều hơn vào quạt nước, mật độ vừa phải và cho ăn đúng lượng. Xem [kỹ thuật nuôi cá rô phi ao đất](/vi/blog/nuoi-ca-ro-phi-ao-dat-mat-do-thuc-an-quan-ly-nuoc).

**Cá lóc ao đất, bể bạt.** Cá lóc thở được không khí nên ít bị nổi đầu chết vì thiếu oxy như nhiều loài khác. Nhưng cá lóc nuôi dày, ăn nhiều đạm nên chất thải nhiều, nước nhanh bẩn và có mùi. Bể bạt thường phải xả cặn đáy và thay nước thường xuyên; ao đất thay nước định kỳ từ nguồn đã lắng lọc. Xem [kỹ thuật nuôi cá lóc ao đất, bể bạt](/vi/blog/nuoi-ca-loc-ao-dat-be-bat-mat-do-thuc-an).

## Rủi ro khi thay nước quá nhiều hoặc sai cách
- **Sốc nhiệt độ:** nước sông, nước giếng có thể lạnh hoặc nóng hơn nước ao, nhất là sau mưa hoặc giữa trưa.
- **Sốc pH:** nước phèn, nước giếng, nước mưa chảy tràn có pH khác nước ao; cá dễ bỏ ăn, yếu mang.
- **Oxy thấp từ nước cấp:** nước giếng hoặc nước tầng đáy kênh ít oxy, cấp nhiều vào ban đêm có thể làm cá nổi đầu.
- **Mang mầm bệnh vào ao:** vi khuẩn, ký sinh trùng, cá tạp theo nước vào. Sau khi cấp nước, theo dõi kỹ các dấu hiệu bệnh như [xuất huyết đốm đỏ](/vi/blog/benh-xuat-huyet-dom-do-tren-ca-nguyen-nhan-cach-phong) hay [ký sinh trùng trên cá](/vi/blog/ky-sinh-trung-tren-ca-trung-banh-xe-san-la-mang).
- **Mất màu nước:** thay quá nhiều làm tảo giảm đột ngột, nước trong, pH và oxy dao động mạnh vài ngày sau.

Nếu cá có dấu hiệu bệnh sau khi thay nước, giữ nước ổn định, giảm ăn, gửi mẫu cho cán bộ thú y thủy sản. Không tự ý dùng kháng sinh.

## Thay nước và môi trường: xả thải đúng cách
Luật Thủy sản 2017 (Điều 38) yêu cầu cơ sở nuôi trồng thủy sản đáp ứng quy định của pháp luật về bảo vệ môi trường, thú y và an toàn lao động. Quy định cụ thể về nước thải, bùn thải tùy theo loài nuôi, quy mô và địa phương, nên bà con hỏi cán bộ thủy sản, môi trường ở địa phương. Một số việc nên làm:
- **Có ao lắng hoặc ao chứa nước thải** trước khi xả ra kênh. Báo cáo của SRAC về quản lý nước thải ao nuôi (số 6004, 2012) ghi nhận để nước lắng 2–4 giờ đã giảm khoảng 75–90% chất rắn lơ lửng trong nước thải.
- **Xả chậm khi tháo cạn ao** để không khuấy bùn đáy theo dòng nước ra ngoài. Đây là khuyến cáo của GS. Claude Boyd (Đại học Auburn) trong bài viết về giảm nguy cơ phú dưỡng từ nước thải ao nuôi trên Global Seafood Alliance; bài viết cho ao tôm nhưng nguyên tắc dùng được cho ao cá.
- **Không xả nước ao đang có cá bệnh** ra kênh chung khi chưa xử lý.
- **Không đổ bùn đáy xuống sông, kênh.** Bùn nạo vét nên đưa lên khu chứa hoặc tận dụng có kiểm soát.
- **Không vứt cá chết xuống kênh rạch**; thu gom và tiêu hủy đúng cách.

Xả thải cẩn thận cũng là bảo vệ chính ao mình, vì nước kênh hôm nay nhận nước thải của ao này thì ngày mai lại là nước cấp cho ao khác.

## Giảm nhu cầu thay nước bằng quản lý trong ao
- **Cho ăn vừa đủ**, giảm ăn khi trời xấu, cá ăn chậm. Xem [cách tính lượng thức ăn cho cá nuôi ao](/vi/blog/cach-tinh-luong-thuc-an-cho-ca-nuoi-ao).
- **Mật độ phù hợp** với khả năng quạt nước và thay nước của ao.
- **Chạy quạt, máy sục khí** đủ vào ban đêm và ngày âm u.
- **Xử lý đáy định kỳ:** vi sinh phân hủy mùn bã như **ROVAZYME** dùng 454 g/3.000 m³ nước, 5 ngày/lần theo nhãn; hòa nước, tạt đều lúc sáng sớm hoặc chiều mát và mở sục khí.
- **Khi NH3 cao đột ngột:** giảm ăn, tăng sục khí; **SUPER YUCCA** (hấp thu khí độc NH3 theo nhãn) dùng 1 lít/3.000 m³ nước trong lúc tìm nguyên nhân.
- **Nạo vét bùn đáy** giữa các vụ nuôi.

Cần tư vấn cho ao của mình? Gọi hotline 0869 739 679 để kỹ thuật viên Thủy Sản Tím tư vấn.

## Nguồn tham khảo
- Hargreaves J.A., Tucker C.S. (2004), *Managing Ammonia in Fish Ponds*, SRAC Publication No. 4603, Southern Regional Aquaculture Center.
- Southern Regional Aquaculture Center (2012), *Management of Aquacultural Effluents from Ponds*, SRAC Publication No. 6004 (báo cáo dự án).
- Phan Thanh Lâm và cộng sự (2009), *Current status of farming practices of striped catfish, Pangasianodon hypophthalmus in the Mekong Delta, Vietnam*, Aquaculture 296.
- Nguyễn Thanh Phương (2013), *On-farm feed management practices for striped catfish (Pangasianodon hypophthalmus) in Mekong River Delta, Viet Nam*, FAO Fisheries and Aquaculture Technical Paper No. 583.
- Nhut N. và cộng sự (2017), *Quantifying sustainability indicators in striped catfish Pangasianodon hypophthalmus downstream and upstream ponds*, Aquaculture Environment Interactions 9.
- Boyd C.E., *Management of shrimp ponds to reduce the eutrophication potential of effluents*, Global Aquaculture Advocate (Global Seafood Alliance).
- Luật Thủy sản số 18/2017/QH14, Điều 38: điều kiện cơ sở nuôi trồng thủy sản.

## Câu hỏi thường gặp

### Ao cá có cần thay nước định kỳ không?
Không nhất thiết theo lịch cứng. Nên thay khi nước có dấu hiệu xấu: cá nổi đầu, khí độc cao, tảo quá dày hoặc tảo tàn, nước có mùi. Riêng ao cá tra ven sông thường thay nước theo con nước.

### Cá nổi đầu thì thay nước có cứu được không?
Thay nước chỉ hỗ trợ. Việc đầu tiên là mở quạt, máy sục khí và ngưng cho ăn. Cấp thêm nước sạch có oxy giúp thêm, nhưng ở ao lớn thì lượng nước bơm vào trong vài giờ thường không đủ để cứu cá nếu không có sục khí.

### Mỗi lần thay nước bao nhiêu là an toàn?
Không có con số chung cho mọi ao. Nên thay từng phần, từ từ, rút nước tầng đáy, giữ chênh lệch nhiệt độ, pH giữa nước mới và nước ao ở mức nhỏ. Nếu cần cải thiện nhiều thì chia ra nhiều lần.

### Có nên lấy nước sông, kênh trực tiếp vào ao cá không?
Nên hạn chế. Nước sông, kênh có thể mang mầm bệnh, cá tạp, phù sa, nước phèn hoặc nước mặn. Tốt nhất lấy qua lưới lọc vào ao lắng, xử lý rồi mới cấp vào ao nuôi; tránh lấy nước khi vùng xung quanh đang có dịch bệnh.

### Nước thải ao cá xả thẳng ra kênh có được không?
Không nên. Cơ sở nuôi phải đáp ứng quy định về bảo vệ môi trường và thú y. Nước thải nên qua ao lắng, nước ao đang có cá bệnh phải được xử lý trước, và không đổ bùn đáy hay cá chết xuống kênh rạch.
`),
  },
];
