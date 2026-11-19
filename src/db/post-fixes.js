'use strict';
/**
 * Fact-check clean-up of the knowledge articles (audit of 38 posts).
 *  - RETIRED: articles built on invented products or evidence; removed from the site.
 *  - FIXES: sentence-level corrections. Old sample products (TÍM PRO-BIO 9, GUT-ZYME, ZEO-CLEAR, YUCCA MAX,
 *    MINERAL PLUS, C-1000, LIVER GUARD, HERBA-GUT, IODINE 90, BKC 80, FISH-IMMUNE, DO-OXY) never existed;
 *    they are replaced by the real products and doses printed on the labels (nhan/san-pham.json), or removed.
 *    Unsourced figures and unverifiable company claims are softened or deleted.
 *    Fixed articles lose their EN/ZH versions (translated from the faulty text); the site falls back to Vietnamese.
 * The same functions run on the seed data (fresh databases) and, once, on the stored posts (post_fixes_v1).
 */
const RETIRED = [
  'phong-benh-phan-trang-tu-duong-ruot',
  'nuoi-ca-tra-mat-do-cao-kiem-soat-gan-than-mu',
  'phong-benh-ca-tra-mua-chuyen-mua',
  'thuy-san-tim-khanh-thanh-phong-lab-vi-sinh',
];

const CONTACT = 'liên hệ Thủy Sản Tím qua hotline 0934 246 420 để được tư vấn';

/** [from, to] pairs, applied to the Vietnamese title, excerpt and body. A pair whose `from` is absent is skipped. */
const FIXES = {
  'quy-trinh-chuan-bi-ao-nuoi-tom-the-7-buoc': [
    [`80% thành công của vụ nuôi được quyết định trước khi thả giống. Đây là quy trình chuẩn bị ao mà đội ngũ kỹ thuật Thủy Sản Tím áp dụng trong quá trình tư vấn ao nuôi.`, `Chuẩn bị ao kỹ là nền tảng của cả vụ nuôi. Đây là quy trình chuẩn bị ao phổ biến trong nuôi tôm thẻ chân trắng.`],
    [`Ủ **TÍM PRO-BIO 9** với mật rỉ đường, tạt liên tục 3 ngày để tạo hệ vi sinh có lợi và màu nước xanh vỏ đỗ hoặc nâu nhạt.`, `Sau khi hết dư lượng hóa chất, gây màu bằng khoáng, mật rỉ đường và men vi sinh Bacillus (ủ và dùng theo hướng dẫn trên nhãn) đến khi nước có màu xanh vỏ đỗ hoặc nâu nhạt.`],
    [`Gọi hotline để được kỹ thuật viên hỗ trợ miễn phí.`, `Gọi hotline 0934 246 420 để được tư vấn.`],
  ],
  'quan-ly-khi-doc-ao-nuoi-mua-mua': [
    [`mở toàn bộ quạt khí, rải **TÍM DO-OXY** tại khu vực tôm tập trung.`, `mở toàn bộ quạt khí, máy sục khí; giảm hoặc ngưng cho ăn.`],
    [`tạt **TÍM YUCCA MAX** 1 lít/1.500 m³.`, `tạt **SUPER YUCCA** 1 lít/3.000 m³ nước khi khí độc cao (theo nhãn), hòa nước sạch, tạt đều và mở quạt.`],
  ],
  'dung-men-vi-sinh-dung-cach': [
    [`khiến hiệu quả giảm một nửa`, `khiến hiệu quả giảm`],
    [`Ủ với mật rỉ đường 6–8 giờ có sục khí giúp bào tử nảy mầm, tăng mật độ vi sinh gấp nhiều lần.`, `Ủ với đường hoặc mật rỉ có sục khí, đúng thời gian ghi trên nhãn (ví dụ CLEAR 12H: 12–24 giờ), giúp bào tử nảy mầm và tăng mật độ vi sinh.`],
  ],
  'quy-trinh-nuoi-tom-the-chan-trang-tu-a-den-z': [
    [`kèm bảng thông số chuẩn kỹ sư Thủy Sản Tím áp dụng trong quá trình tư vấn ao nuôi`, `kèm bảng thông số tham khảo`],
    [`Khoảng 80% thành công của vụ nuôi được quyết định trước khi thả giống.`, `Chuẩn bị ao kỹ là nền tảng của vụ nuôi.`],
    [`Ủ **TÍM PRO-BIO 9** với mật rỉ đường và tạt liên tục 3 ngày để vi khuẩn có lợi chiếm ưu thế trước khi thả giống.`, `Dùng men vi sinh Bacillus (ủ với đường hoặc mật rỉ theo hướng dẫn trên nhãn) để vi khuẩn có lợi chiếm ưu thế trước khi thả giống.`],
    [`Trộn **TÍM GUT-ZYME** vào thức ăn giúp tôm tiêu hóa tốt, phân dài, giảm hệ số chuyển đổi thức ăn (FCR).`, `Trộn **US LACTO** 5 g/kg thức ăn (hoặc **BIOTIC 99** 3 ml/kg), cho ăn 2–3 lần/ngày để hỗ trợ tiêu hóa và hấp thụ thức ăn.`],
    [`bổ sung **TÍM MINERAL PLUS** vào buổi tối để giữ kiềm và giúp tôm lột xác đều.`, `bổ sung **MIX 79** theo nhãn (5 kg/3.000 m³, 2 ngày/lần, dùng buổi chiều tối) để hỗ trợ tôm lột xác đúng chu kỳ.`],
    [`Bổ sung **TÍM LIVER GUARD** 3 ngày/tuần giúp gan tụy khỏe; dùng **TÍM C-1000** khi thời tiết thay đổi.`, `Bổ sung **HEPALIVER-FS** (5 ml/kg thức ăn, 2 lần/ngày) hoặc **LIVER - MAX** theo nhãn để hỗ trợ bồi bổ gan.`],
    [`hãy gửi chỉ số nước cho kỹ sư Thủy Sản Tím để được tư vấn miễn phí.`, `hãy ${CONTACT}.`],
  ],
  'cach-gay-mau-nuoc-ao-nuoi-tom': [
    [`mà kỹ sư Thủy Sản Tím áp dụng cho cả ao đất và ao bạt`, `mà nhiều người nuôi áp dụng cho cả ao đất và ao bạt`],
    [`tạt **TÍM MINERAL PLUS** 2–3 kg/1.000 m³ vào buổi tối`, `tạt khoáng (ví dụ **MIX 79** theo nhãn: 5 kg/3.000 m³) vào buổi chiều tối`],
    [`ủ 1 kg **TÍM PRO-BIO 9** với 5 kg mật rỉ đường và 20 lít nước sạch, sục khí 6–8 giờ. Tạt đều khắp ao vào 8–9 giờ sáng khi có nắng. Liều dùng 1 kg cho 2.000–3.000 m³ nước.`, `ủ men vi sinh Bacillus với đường hoặc mật rỉ, sục khí theo hướng dẫn trên nhãn sản phẩm, rồi tạt đều khắp ao vào 8–9 giờ sáng khi có nắng.`],
    [`bổ sung **TÍM DO-OXY** nếu tôm có dấu hiệu nổi đầu.`, `tăng sục khí, giảm cho ăn nếu tôm có dấu hiệu nổi đầu; khi khí độc cao có thể tạt **SUPER YUCCA** 1 lít/3.000 m³.`],
    [`Dùng **TÍM ZEO-CLEAR** để lắng xác tảo, sau đó xi phông hoặc gom chất thải.`, `Dùng men vi sinh phân hủy xác tảo (ví dụ **CLEAR 12H** hoặc **ROVAZYME** theo nhãn), sau đó xi phông hoặc gom chất thải.`],
    [`Tạt **TÍM YUCCA MAX** để cắt nhanh NH₃.`, `Tạt **SUPER YUCCA** để hấp thu NH₃.`],
  ],
  'cach-tang-kiem-on-dinh-ph-ao-nuoi-tom': [
    [`giai đoạn tôm lớn có thể làm kiềm giảm 5–10 mg/L mỗi ngày`, `giai đoạn tôm lớn có thể làm kiềm giảm dần`],
    [`lúc pH thấp nhất, khoáng hòa tan tốt và tôm thường lột xác vào ban đêm.`, `buổi tối, trước khi tôm lột xác ban đêm.`],
    [`Bổ sung **TÍM MINERAL PLUS** 2–3 kg/1.000 m³ định kỳ 5–7 ngày; khi tôm lột xác đồng loạt tăng lên 4–5 kg/1.000 m³.`, `Bổ sung **MIX 79** theo nhãn: định kỳ 5 kg/3.000 m³, 2 ngày/lần; khi cần tăng kiềm dùng 5 kg/1.500 m³, liên tục 2 ngày; dùng vào buổi chiều tối.`],
    [`để vi khuẩn sử dụng CO₂ – giúp hạ pH từ từ.`, `để vi khuẩn dị dưỡng hô hấp tạo CO₂ và hấp thu đạm, giúp hạ pH từ từ.`],
    [`Kết hợp **TÍM PRO-BIO 9** để ổn định hệ vi sinh và cạnh tranh dinh dưỡng với tảo.`, `Kết hợp men vi sinh (ví dụ **ROVAZYME** 454 g/3.000 m³, 5 ngày/lần theo nhãn) để hỗ trợ cắt tảo.`],
    [`Ban đêm pH thấp nhất nên vôi, khoáng hòa tan tốt hơn và không làm pH tăng đột ngột.`, `Buổi tối pH đã hạ nên vôi, khoáng ít làm pH tăng đột ngột.`],
    [`Kiềm trên 200 mg/L khiến vỏ tôm cứng nhanh, khó lột xác, tôm chậm lớn. Khi đó nên ngưng khoáng, thay một phần nước ngọt hoặc nước có kiềm thấp hơn.`, `Kiềm quá cao là không cần thiết và lãng phí; nên giữ trong khoảng 120–180 mg/L, ngưng khoáng và thay một phần nước nếu vượt xa.`],
  ],
  'cach-chon-tom-giong-the-chan-trang-chat-luong': [
    [`Con giống quyết định 50% thành bại của vụ nuôi.`, `Con giống ảnh hưởng rất lớn đến thành bại của vụ nuôi.`],
    [`tốn gấp đôi chi phí thuốc, men`, `tốn nhiều chi phí thuốc, men hơn`],
    [`mà kỹ sư Thủy Sản Tím hướng dẫn bà con trước mỗi vụ`, `mà người nuôi nên áp dụng trước mỗi vụ`],
    [` Ngày đầu có thể tạt **TÍM C-1000** để tôm giảm sốc.`, ``],
  ],
  'cach-tinh-luong-thuc-an-cho-tom-the': [
    [`Trộn **TÍM GUT-ZYME** 3–5 g/kg thức ăn giúp tôm hấp thu tốt hơn, phân chắc và dài.`, `Trộn **US LACTO** 5 g/kg thức ăn hằng ngày, cho ăn 2–3 lần/ngày (hòa nước, trộn đều, để yên 15 phút rồi cho ăn) để hỗ trợ tiêu hóa và hấp thụ thức ăn.`],
    [`Bổ sung **TÍM LIVER GUARD** 3 ngày/tuần để gan tụy chuyển hóa dinh dưỡng hiệu quả.`, `Bổ sung **HEPALIVER-FS** 5 ml/kg thức ăn, 2 lần/ngày để hỗ trợ bồi bổ gan.`],
  ],
  'nuoi-tom-mua-nang-nong-giam-nhiet-giu-oxy': [
    [`Lưới che nắng 30–50% giúp giảm 2–3 °C nhiệt độ nước buổi trưa.`, `Lưới che nắng giúp giảm nhiệt độ nước buổi trưa.`],
    [`Chuẩn bị sẵn **TÍM DO-OXY** cấp cứu khi cúp điện.`, `Chuẩn bị sẵn máy phát điện dự phòng và máy thổi khí để cấp cứu khi cúp điện.`],
    [`Tạt **TÍM PRO-BIO 9** định kỳ để vi sinh cạnh tranh dinh dưỡng với tảo;`, `Dùng vi sinh xử lý đáy, nước như **CLEAR 12H** hoặc **ROVAZYME** theo hướng dẫn trên nhãn để phân hủy mùn bã, hỗ trợ giảm tảo độc;`],
    [`Trộn **TÍM C-1000** 3–5 g/kg thức ăn trong những ngày nắng nóng kéo dài để tăng sức chống chịu; tạt **TÍM MINERAL PLUS** vào buổi tối vì tôm lột xác nhiều khi trời nóng.`, `Tạt **MIX 79** theo nhãn (5 kg/3.000 m³, 2 ngày/lần) vào buổi chiều tối vì tôm lột xác nhiều khi trời nóng.`],
  ],
  'tom-mem-vo-cham-lot-xac-nguyen-nhan-cach-xu-ly': [
    [`phác đồ khoáng giúp tôm cứng vỏ sau 2–3 ngày`, `phác đồ hỗ trợ tôm cứng vỏ trở lại`],
    [`Tạt **TÍM MINERAL PLUS** 4–5 kg/1.000 m³; đo kiềm, nâng lên 120–150 mg/L nếu thấp`, `Tạt **MIX 79** 3 kg/2.000 m³ (khi tôm cứng vỏ chậm) liên tục 2 ngày vào chiều tối; đo kiềm, nâng lên 120–150 mg/L nếu thấp`],
    [`Trộn khoáng hữu cơ và **TÍM C-1000** 3–5 g/kg vào thức ăn, giảm 20% lượng ăn`, `Trộn khoáng vào thức ăn (**PREMIX ORA**, theo hướng dẫn trên nhãn), giảm 20% lượng ăn`],
    [`Tạt **TÍM PRO-BIO 9** để ổn định môi trường, hạn chế khí độc`, `Dùng **CLEAR 12H** (ủ đường 12–24 giờ, ao đất 10–15 lít/1.000 m³) hoặc **SUPER YUCCA** 1 lít/5.000 m³ để giảm khí độc NH₃`],
    [`Bổ sung **TÍM LIVER GUARD** 10 ml/kg thức ăn để phục hồi gan tụy`, `Bổ sung **HEPALIVER-FS** 5 ml/kg thức ăn để hỗ trợ bồi bổ gan`],
    [`pH dưới 7,5 làm khoáng khó kết tủa vào vỏ`, `pH thấp kéo dài và kiềm thấp làm tôm khó hấp thu khoáng, khó tạo vỏ`],
  ],
  '6-benh-thuong-gap-tren-tom-the-va-cach-phong': [
    [`trộn men tiêu hóa **TÍM GUT-ZYME** và thảo dược **TÍM HERBA-GUT** vào thức ăn.`, `trộn lợi khuẩn **US LACTO** (5 g/kg thức ăn hằng ngày; 10–15 g/kg khi có dấu hiệu phân trắng, phân lỏng) hoặc **BIOTIC 99** (3 ml/kg; 5–10 ml/kg khi có dấu hiệu đường ruột) vào thức ăn.`],
    [`dùng **TÍM IODINE 90** hoặc chlorine theo hướng dẫn.`, `dùng **VH-GLUBENCO PRO** (1,5 lít/1.000 m³ khi chuẩn bị ao, để 2–3 ngày), **BEN BKC**, **VH-DIO 99** hoặc chlorine theo hướng dẫn trên nhãn.`],
    [`**TÍM PRO-BIO 9** giúp vi khuẩn có lợi lấn át *Vibrio*.`, `vi sinh xử lý đáy, nước như **CLEAR 12H** hoặc **ROVAZYME** giúp phân hủy chất hữu cơ, giảm khí độc, cải thiện môi trường ao.`],
    [`**TÍM C-1000**, **TÍM LIVER GUARD** trộn thức ăn theo lịch.`, `**HEPALIVER-FS** (hỗ trợ bồi bổ gan) trộn thức ăn theo hướng dẫn trên nhãn.`],
    [`nguyên nhân khởi phát của hầu hết dịch bệnh`, `yếu tố làm tôm dễ phát bệnh`],
  ],
  'xu-ly-tao-lam-tao-day-ao-nuoi-tom': [
    [`dùng **TÍM BKC 80** liều thấp 1 lít/4.000–5.000 m³ vào buổi sáng có nắng, mở quạt liên tục.`, `dùng **SUPER CUT ALGA** 100 g/1.000 m³ (ao có tôm) vào 10–11 giờ trưa lúc nắng gắt, không mưa, mở quạt liên tục (hoặc **BEN COPPER 500** 500 ml/2.000 m³), tùy sức khỏe tôm mà điều chỉnh liều.`],
    [`tạt **TÍM PRO-BIO 9** liên tục 2–3 ngày để vi khuẩn có lợi chiếm chỗ, kết hợp **TÍM ZEO-CLEAR** lắng xác tảo và **TÍM YUCCA MAX** hấp thu NH₃.`, `tạt vi sinh **CLEAR 12H** hoặc **ROVAZYME** (phân hủy xác tảo, giảm NH₃, H₂S) theo nhãn, kết hợp **SUPER YUCCA** 1 lít/5.000 m³ (1 lít/3.000 m³ khi khí độc cao) để hấp thu NH₃.`],
    [`Ao đất: rải **TÍM ZEO-CLEAR** 20–30 kg/1.000 m² ở khu vực tảo chết, sau đó tạt vi sinh.`, `Ao đất: xử lý đáy bằng vi sinh **CLEAR 12H** (ao đất 10–15 lít/1.000 m³, 5 ngày/lần theo nhãn).`],
  ],
  'nuoi-tom-biofloc-huong-dan-cho-nguoi-moi': [
    [`Tận dụng đạm thừa, giảm FCR 10–20%`, `Tận dụng đạm thừa, có thể giúp giảm FCR`],
    [`Ủ **TÍM PRO-BIO 9** với mật rỉ đường, tạt liên tục 5–7 ngày, sục khí mạnh.`, `Ủ vi sinh Bacillus với đường hoặc mật rỉ theo hướng dẫn nhà sản xuất, tạt liên tục 5–7 ngày, sục khí mạnh.`],
  ],
  'oxy-hoa-tan-ao-nuoi-tom-bao-nhieu-la-du': [
    [`Rải **TÍM DO-OXY** 3–5 kg/1.000 m³ tại khu vực tôm tập trung.`, `Dùng máy thổi khí, oxy đáy hoặc bơm oxy bổ sung tại khu vực tôm tập trung.`],
    [`tạt **TÍM YUCCA MAX** để giảm NH₃ và **TÍM ZEO-CLEAR** để lắng chất lơ lửng.`, `tạt **SUPER YUCCA** 1 lít/3.000 m³ (khi khí độc cao) để hấp thu NH₃.`],
  ],
  'chi-phi-nuoi-tom-the-1-hecta-va-cach-giam-gia-thanh': [
    [`giúp giảm giá thành 10–20%`, `giúp giảm giá thành`],
    [`trộn **TÍM GUT-ZYME** để tôm hấp thu tốt hơn.`, `trộn **US LACTO** để hỗ trợ tiêu hóa.`],
    [`Chọn men vi sinh mật độ cao như **TÍM PRO-BIO 9** để dùng liều thấp mà vẫn hiệu quả.`, `Chọn sản phẩm có thành phần, mật độ vi sinh (CFU) ghi rõ trên nhãn và dùng đúng liều hướng dẫn.`],
  ],
  'xu-ly-nhot-bat-nhot-nuoc-ao-nuoi-tom': [
    [`ao nuôi độ mặn thấp (dưới 5‰) thường dễ nhớt và nổi bọt hơn.`, `ao nuôi độ mặn thấp thường thiếu khoáng, kiềm dễ dao động, pH dao động và tảo dễ tàn, góp phần làm nhớt lặp lại.`],
    [`Có. Ao độ mặn thấp thường dễ nổi bọt, nhớt và khoáng thiếu.`, `Chưa có quy luật rõ ràng, nhưng ao độ mặn thấp thường thiếu khoáng, kiềm dễ dao động.`],
  ],
  'sat-trung-nuoc-ao-nuoi-bkc-iodine-glutaraldehyde': [
    [`hoặc hỏi kỹ thuật viên Thủy Sản Tím để được hướng dẫn theo tình trạng ao`, `hoặc liên hệ Thủy Sản Tím để được tư vấn`],
  ],
  'quan-ly-day-ao-bat-nuoi-tom-the-xi-phong-quat-nuoc': [
    [`Thiết kế ao quyết định 50% việc quản lý đáy có dễ hay không:`, `Thiết kế ao ảnh hưởng rất lớn đến việc quản lý đáy:`],
  ],
  'tom-bi-duong-ruot-ruot-long-dut-khuc-nguyen-nhan-cach-phong': [
    [`[phòng bệnh phân trắng từ đường ruột](/vi/blog/phong-benh-phan-trang-tu-duong-ruot)`, `[bệnh phân trắng](/vi/diseases/phan-trang-wfd)`],
    [`(nhiều trại, đại lý có dịch vụ đếm khuẩn)`, `(có thể nhờ phòng xét nghiệm)`],
  ],
  'axit-amin-va-dam-bo-sung-cho-tom-tac-dung-cach-tron': [
    [`hỏi kỹ thuật viên của cửa hàng`, `liên hệ Thủy Sản Tím để được tư vấn`],
    [`hỏi kỹ thuật viên Thủy Sản Tím để được tư vấn liều phù hợp giai đoạn nuôi`, `liên hệ Thủy Sản Tím để được tư vấn liều phù hợp giai đoạn nuôi`],
  ],
  'khoang-tron-thuc-an-va-khoang-tat-ao-khac-nhau-the-nao': [
    [`hỏi kỹ thuật viên cửa hàng`, `liên hệ Thủy Sản Tím để được tư vấn`],
    [`liên hệ kỹ thuật viên Thủy Sản Tím để được tư vấn theo giai đoạn nuôi`, `liên hệ Thủy Sản Tím để được tư vấn theo giai đoạn nuôi`],
  ],
  'bo-gan-cho-tom-khi-nao-can-dau-hieu-gan-tuy-yeu': [
    [`Hỏi mười hộ nuôi tôm thì có đến tám, chín hộ đang trộn "thuốc bổ gan" vào thức ăn.`, `Nhiều hộ nuôi tôm hiện nay trộn "thuốc bổ gan" vào thức ăn.`],
    [`thường sau vài ngày đến một tuần sẽ thấy màu gan và sức ăn thay đổi`, `có thể thấy màu gan và sức ăn thay đổi sau vài ngày đến một tuần, tùy từng ao`],
  ],
  'men-tieu-hoa-loi-khuan-tron-thuc-an-cho-tom': [
    [`**Tăng liều** theo nhãn khi thời tiết thay đổi, sau khi dùng hóa chất, hoặc khi phân lỏng.`, `**Tăng liều** theo nhãn chỉ khi có dấu hiệu phân lỏng, phân trắng, đứt khúc.`],
    [`Vậy mà rất nhiều ao trộn men đều đặn vẫn bị phân lỏng, ruột rỗng. Một phần lớn nguyên nhân nằm ở khâu trộn và bảo quản`, `Nếu trộn và bảo quản không đúng, lợi khuẩn có thể chết hoặc trôi mất trước khi vào được ruột tôm`],
    [`Phần lớn men trộn ăn cho tôm ở Việt Nam dùng nhóm *Bacillus*`, `Men trộn ăn cho tôm thường dùng nhóm *Bacillus*`],
  ],
  'tang-suc-de-khang-cho-tom-thoi-diem-giao-mua': [
    [`Đây là lúc nhiều ao tôm gặp sự cố nhất.`, `Đây là lúc ao tôm dễ gặp sự cố.`],
    [`Có thể tăng liều theo hướng dẫn nhãn trong những ngày thời tiết xấu.`, `Duy trì đều đặn theo nhãn; chỉ tăng liều khi có dấu hiệu phân lỏng, phân trắng theo hướng dẫn nhãn.`],
  ],
};

const DROP_LOCALES = ['en', 'zh'];

function fixText(slug, text) {
  let out = text;
  for (const [from, to] of FIXES[slug] || []) out = out.split(from).join(to);
  return out;
}

/** Apply the fixes to a seed post object ({title, excerpt, body}: {vi, en, zh}) in place. Returns true if changed. */
function applyToPost(p) {
  if (!FIXES[p.slug]) return false;
  for (const f of ['title', 'excerpt', 'body']) {
    if (!p[f] || typeof p[f] !== 'object') continue;
    p[f].vi = fixText(p.slug, p[f].vi || '');
    for (const l of DROP_LOCALES) delete p[f][l];
  }
  return true;
}

/** Same for rows read from the database (JSON strings). Returns { title, excerpt, body } JSON strings. */
function applyToRow(slug, row) {
  const out = {};
  for (const f of ['title', 'excerpt', 'body']) {
    let o; try { o = JSON.parse(row[f]); } catch (e) { o = { vi: String(row[f] || '') }; }
    if (o && typeof o === 'object') { o.vi = fixText(slug, o.vi || ''); for (const l of DROP_LOCALES) delete o[l]; }
    out[f] = JSON.stringify(o);
  }
  return out;
}

module.exports = { RETIRED, FIXES, applyToPost, applyToRow, fixText };
