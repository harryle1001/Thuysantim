'use strict';
/**
 * Store policies (the set the Ministry of Industry and Trade checks when a
 * selling website is notified on online.gov.vn).
 *
 * Bodies are Vietnamese Markdown, the governing language. They are built per
 * request from the store settings, so company details, shipping fees, payment
 * methods and the bank account always match what the admin has saved.
 */
const H = require('../utils/helpers');

const EFFECTIVE = '10/11/2026';

// Legal details shown when the admin has not filled them in yet (sample data).
const LEGAL_DEFAULTS = {
  taxCode: '1801234567',
  licenseDate: '15/03/2011',
  licenseIssuer: 'Sở Kế hoạch và Đầu tư TP. Cần Thơ',
  representative: '',
};

/** Company details merged from settings and defaults, Vietnamese strings. */
function companyInfo(settings, baseUrl) {
  const c = (settings && settings.company) || {};
  const vi = (f) => H.tr(f, 'vi') || '';
  return {
    brand: 'Thủy Sản Tím',
    legal: vi(c.legal) || 'Công ty TNHH Thủy Sản Tím',
    address: vi(c.address),
    hotline: c.hotline || '',
    phone: c.phone || '',
    email: c.email || '',
    hours: vi(c.hours),
    zalo: c.zalo || '',
    taxCode: c.taxCode || LEGAL_DEFAULTS.taxCode,
    licenseDate: c.licenseDate || LEGAL_DEFAULTS.licenseDate,
    licenseIssuer: c.licenseIssuer || LEGAL_DEFAULTS.licenseIssuer,
    representative: c.representative || LEGAL_DEFAULTS.representative,
    website: String(baseUrl || '').replace(/^https?:\/\//, ''),
  };
}

const META = [
  { slug: 'huong-dan-mua-hang', icon: 'cart', title: { vi: 'Hướng dẫn mua hàng', en: 'How to order', zh: '购物指南' }, lead: { vi: 'Các bước đặt hàng trên website và những cách đặt hàng khác.', en: 'How to place an order on the website and other ways to order.', zh: '网站下单步骤及其他下单方式。' } },
  { slug: 'chinh-sach-van-chuyen', icon: 'truck', title: { vi: 'Chính sách vận chuyển và giao nhận', en: 'Shipping and delivery policy', zh: '配送与收货政策' }, lead: { vi: 'Phạm vi giao hàng, thời gian, phí vận chuyển và trách nhiệm của các bên.', en: 'Delivery area, lead times, fees and responsibilities.', zh: '配送范围、时效、运费及各方责任。' } },
  { slug: 'chinh-sach-kiem-hang', icon: 'eye', title: { vi: 'Chính sách kiểm hàng', en: 'Inspection on delivery', zh: '验货政策' }, lead: { vi: 'Quyền kiểm tra hàng hóa trước khi nhận và thanh toán.', en: 'Your right to inspect goods before accepting and paying.', zh: '签收及付款前的验货权利。' } },
  { slug: 'chinh-sach-thanh-toan', icon: 'wallet', title: { vi: 'Chính sách thanh toán', en: 'Payment policy', zh: '支付政策' }, lead: { vi: 'Các phương thức thanh toán được chấp nhận và lưu ý an toàn.', en: 'Accepted payment methods and safety notes.', zh: '可用支付方式及安全提示。' } },
  { slug: 'chinh-sach-doi-tra', icon: 'refresh', title: { vi: 'Chính sách đổi trả và hoàn tiền', en: 'Returns and refunds policy', zh: '退换货与退款政策' }, lead: { vi: 'Trường hợp được đổi trả, điều kiện, thời hạn và cách hoàn tiền.', en: 'When returns are accepted, conditions, time limits and refunds.', zh: '可退换情形、条件、期限及退款方式。' } },
  { slug: 'huong-dan-doi-tra', icon: 'box', title: { vi: 'Hướng dẫn đổi trả hàng', en: 'How to return an item', zh: '退换货指南' }, lead: { vi: 'Từng bước gửi yêu cầu, đóng gói và gửi trả sản phẩm.', en: 'Step by step: request, pack and send back.', zh: '提交申请、打包、寄回的具体步骤。' } },
  { slug: 'chinh-sach-bao-mat', icon: 'shield', title: { vi: 'Chính sách bảo mật thông tin', en: 'Privacy policy', zh: '隐私政策' }, lead: { vi: 'Cách chúng tôi thu thập, sử dụng và bảo vệ dữ liệu cá nhân của bạn.', en: 'How we collect, use and protect your personal data.', zh: '我们如何收集、使用与保护您的个人数据。' } },
  { slug: 'dieu-khoan-su-dung', icon: 'doc', title: { vi: 'Điều khoản sử dụng', en: 'Terms of use', zh: '使用条款' }, lead: { vi: 'Quy định chung khi truy cập website và mua hàng tại Thủy Sản Tím.', en: 'General terms for using the website and buying from Thủy Sản Tím.', zh: '访问本网站及在 Thủy Sản Tím 购物的一般规定。' } },
];

/* ---------------- Bodies ---------------- */

const contactBlock = (co, link) => `- **Hotline:** ${co.hotline}${co.phone ? ` – **Điện thoại/Zalo:** ${co.phone}` : ''}
- **Email:** ${co.email}
- **Địa chỉ:** ${co.address}
- **Thời gian làm việc:** ${co.hours}
- **Biểu mẫu liên hệ:** [${link('/contact')}](${link('/contact')})`;

const BODIES = {
  'huong-dan-mua-hang': ({ co, link, money, ship, methods }) => `
${co.brand} bán hàng trực tuyến tại website **${co.website}** và qua hotline, Zalo, Messenger. Bạn có thể đặt hàng 24/7; đơn đặt ngoài giờ làm việc sẽ được xác nhận vào đầu giờ làm việc kế tiếp.

## Cách 1: Đặt hàng trực tiếp trên website

### Bước 1: Tìm sản phẩm
- Bấm **Danh mục sản phẩm** ở đầu trang để xem theo nhóm: men vi sinh, xử lý nước và đáy, khoáng và vitamin, bổ gan và đường ruột, thảo dược, sát trùng và oxy.
- Hoặc gõ tên sản phẩm, công dụng (ví dụ: “khí độc”, “phân trắng”) vào **ô tìm kiếm**.
- Mục [Tra cứu bệnh](${link('/diseases')}) giúp bạn tìm sản phẩm phù hợp theo dấu hiệu bệnh trên tôm, cá.

### Bước 2: Xem thông tin và chọn quy cách
Trang chi tiết sản phẩm có thành phần, công dụng, liều dùng, quy cách đóng gói và giá. Bạn chọn **quy cách** (gói, hộp, xô, can…), nhập **số lượng** rồi bấm **Thêm vào giỏ** hoặc **Mua ngay**.

> Sản phẩm ghi “Liên hệ” là hàng bán theo báo giá. Bạn bấm vào biểu tượng báo giá hoặc vào trang [Nhận báo giá](${link('/quote')}) để được gửi giá trong ngày.

### Bước 3: Kiểm tra giỏ hàng
Bấm biểu tượng **Giỏ hàng** ở góc phải để xem lại sản phẩm, đổi số lượng hoặc xóa sản phẩm. Hệ thống tự tính tạm tính, phí vận chuyển và tổng tiền.${ship.freeFrom ? ` Đơn từ **${money(ship.freeFrom)}** được miễn phí vận chuyển.` : ''}

### Bước 4: Điền thông tin nhận hàng
Bấm **Tiến hành đặt hàng** và điền:
- Họ tên, số điện thoại người nhận (bắt buộc);
- Địa chỉ nhận hàng (bắt buộc) và tỉnh/thành phố;
- Email (không bắt buộc, để nhận xác nhận đơn);
- Ghi chú: giờ nhận hàng thuận tiện, tình trạng ao nuôi cần tư vấn…

### Bước 5: Chọn phương thức thanh toán
${methods.map((m) => `- **${m.t}**: ${m.d}`).join('\n')}

Chi tiết xem tại [Chính sách thanh toán](${link('/policies/chinh-sach-thanh-toan')}).

### Bước 6: Đặt hàng và nhận mã đơn
Bấm **Đặt hàng**. Website hiển thị **mã đơn hàng** và tóm tắt đơn; nếu bạn có nhập email, xác nhận sẽ được gửi vào email. Trong giờ làm việc, nhân viên gọi điện xác nhận đơn trong vòng **2 giờ** trước khi giao cho đơn vị vận chuyển.

Bạn theo dõi tình trạng đơn bất cứ lúc nào tại [Tra cứu đơn hàng](${link('/order-lookup')}) bằng mã đơn và số điện thoại đặt hàng.

## Cách 2: Đặt hàng qua điện thoại, Zalo, Messenger
Gọi **${co.hotline}**${co.phone ? ` hoặc nhắn Zalo **${co.phone}**` : ''}, cho biết tên sản phẩm, quy cách, số lượng, địa chỉ nhận hàng. Nhân viên lên đơn, báo tổng tiền và gửi mã đơn để bạn tra cứu.

## Cách 3: Khách hàng đại lý và đơn số lượng lớn
Đại lý, trang trại và đơn hàng số lượng lớn được hưởng giá và chính sách riêng theo hợp đồng. Vui lòng gửi yêu cầu tại [Nhận báo giá](${link('/quote')}) hoặc [Trở thành đại lý](${link('/contact?kind=dealer')}).

## Thay đổi hoặc hủy đơn
- Bạn được thay đổi sản phẩm, số lượng, địa chỉ hoặc **hủy đơn miễn phí** khi đơn **chưa được giao cho đơn vị vận chuyển**. Hãy gọi hotline kèm mã đơn.
- Đơn đã thanh toán trước mà bị hủy hợp lệ sẽ được hoàn tiền theo [Chính sách đổi trả và hoàn tiền](${link('/policies/chinh-sach-doi-tra')}).
- ${co.brand} có thể từ chối hoặc hủy đơn khi không liên lạc được với người đặt sau 3 lần gọi trong 2 ngày làm việc, khi thông tin đặt hàng không chính xác, hoặc khi sản phẩm hết hàng. Trong mọi trường hợp, chúng tôi sẽ thông báo cho bạn và hoàn lại toàn bộ số tiền đã thanh toán (nếu có).

## Lưu ý khi sử dụng sản phẩm
Sản phẩm thủy sản cần được dùng đúng liều lượng và hướng dẫn in trên nhãn. Nếu chưa chắc chắn, hãy gọi hotline để kỹ thuật viên tư vấn miễn phí trước khi sử dụng.

## Cần hỗ trợ?
${contactBlock(co, link)}
`,

  'chinh-sach-van-chuyen': ({ co, link, money, ship }) => `
Chính sách này áp dụng cho mọi đơn hàng đặt tại website **${co.website}** và qua các kênh bán hàng trực tuyến của ${co.legal}.

## 1. Phạm vi giao hàng
${co.brand} giao hàng trên **toàn quốc (34 tỉnh, thành phố)** thông qua đội giao hàng của công ty và các đơn vị vận chuyển uy tín như Viettel Post, Giao Hàng Nhanh, Giao Hàng Tiết Kiệm, J&T Express. Với đơn số lượng lớn, chúng tôi giao bằng xe tải hoặc gửi nhà xe theo thỏa thuận với khách hàng.

## 2. Thời gian giao hàng dự kiến
Thời gian tính theo **ngày làm việc** kể từ khi đơn hàng được xác nhận (không gồm Chủ nhật và ngày lễ, Tết):

| Khu vực nhận hàng | Thời gian dự kiến |
| --- | --- |
| Nội thành TP. Cần Thơ | 1 ngày |
| Các tỉnh Đồng bằng sông Cửu Long | 1 – 3 ngày |
| TP. Hồ Chí Minh và các tỉnh miền Đông Nam Bộ | 2 – 3 ngày |
| Miền Trung, Tây Nguyên | 3 – 5 ngày |
| Miền Bắc | 4 – 6 ngày |
| Vùng sâu, vùng xa, hải đảo | 5 – 8 ngày |

Thời gian có thể kéo dài do thời tiết, thiên tai, dịch bệnh, giao thông hoặc các lý do bất khả kháng khác. Khi đó, chúng tôi sẽ chủ động thông báo cho bạn.

Đơn hàng được xác nhận trước **15:00** sẽ được đóng gói và bàn giao cho đơn vị vận chuyển trong ngày.

## 3. Phí vận chuyển
- Phí vận chuyển được hiển thị rõ ở giỏ hàng và trang đặt hàng **trước khi bạn xác nhận đơn**.
- Phí đồng giá: **${money(ship.fee)}** cho mỗi đơn hàng.${ship.freeFrom ? `
- **Miễn phí vận chuyển** cho đơn hàng có giá trị từ **${money(ship.freeFrom)}** trở lên.` : ''}
- Đơn hàng cồng kềnh (xô, can, bao từ 20 kg) hoặc giao đến vùng sâu, vùng xa có thể phát sinh phụ phí. Nhân viên sẽ báo phụ phí khi gọi xác nhận và chỉ giao khi bạn đồng ý.
- Phí vận chuyển của đại lý và đơn số lượng lớn được thỏa thuận riêng.

## 4. Đóng gói
Sản phẩm được đóng gói kín, chèn lót chống va đập; hàng dạng lỏng được quấn màng co chống rò rỉ. Mỗi kiện hàng có mã đơn, tên người nhận và số điện thoại. Men vi sinh và chế phẩm sinh học được giữ nơi khô ráo, tránh nắng trong suốt quá trình lưu kho và vận chuyển.

## 5. Theo dõi đơn hàng
Sau khi giao cho đơn vị vận chuyển, chúng tôi gửi mã vận đơn qua tin nhắn, Zalo hoặc email. Bạn có thể xem trạng thái đơn tại [Tra cứu đơn hàng](${link('/order-lookup')}).

## 6. Giao hàng và nhận hàng
- Nhân viên giao hàng sẽ gọi trước khi giao. Nếu không liên lạc được, đơn vị vận chuyển giao lại **tối đa 3 lần**. Sau 3 lần không thành công, đơn hàng được hoàn về và chúng tôi sẽ liên hệ để sắp xếp giao lại.
- Bạn có quyền kiểm tra hàng trước khi nhận theo [Chính sách kiểm hàng](${link('/policies/chinh-sach-kiem-hang')}).
- Nếu bạn nhờ người khác nhận thay, vui lòng báo trước họ tên và số điện thoại người nhận thay.

## 7. Trách nhiệm của các bên
- ${co.brand} chịu trách nhiệm về hàng hóa và các rủi ro (mất mát, hư hỏng, giao sai) **cho đến khi hàng được giao đến người nhận**.
- Trường hợp hàng bị mất, hư hỏng do vận chuyển, chúng tôi **gửi lại hàng mới hoặc hoàn tiền 100%** cho phần hàng bị ảnh hưởng, không thu thêm phí.
- Khách hàng có trách nhiệm cung cấp đúng họ tên, số điện thoại, địa chỉ nhận hàng. Nếu đơn hàng phải hoàn về do thông tin sai hoặc khách từ chối nhận mà không có lý do chính đáng, phí vận chuyển phát sinh (nếu có) do khách hàng thanh toán.

## 8. Chứng từ giao hàng
Mỗi đơn hàng kèm phiếu giao hàng ghi rõ sản phẩm, số lượng, giá tiền. Hóa đơn giá trị gia tăng (hóa đơn điện tử) được xuất theo quy định; nếu cần xuất hóa đơn cho doanh nghiệp, vui lòng ghi tên công ty, mã số thuế và email nhận hóa đơn vào ô ghi chú khi đặt hàng.

## 9. Liên hệ
${contactBlock(co, link)}
`,

  'chinh-sach-kiem-hang': ({ co, link }) => `
${co.brand} khuyến khích khách hàng kiểm tra hàng hóa khi nhận để bảo đảm quyền lợi của mình.

## 1. Quyền kiểm tra hàng
Khi nhận hàng, bạn được **kiểm tra ngoại quan trước khi nhận và thanh toán** (với đơn COD), gồm:
- Kiện hàng còn nguyên vẹn, băng keo niêm phong của ${co.brand} chưa bị rách hoặc dán lại;
- Đúng **tên sản phẩm, quy cách, số lượng** theo phiếu giao hàng và đơn đã đặt;
- Bao bì sản phẩm không móp méo, rách, rò rỉ; tem nhãn, hạn sử dụng còn rõ ràng.

Để bảo đảm chất lượng, bạn **không mở nắp, xé tem niêm phong hoặc dùng thử** sản phẩm khi chưa nhận hàng.

## 2. Khi phát hiện hàng không đúng hoặc hư hỏng
- Bạn có quyền **từ chối nhận** phần hàng bị sai hoặc hư hỏng và không phải thanh toán cho phần hàng đó.
- Ghi chú tình trạng lên phiếu giao hàng (nếu được), chụp ảnh hoặc quay video và gọi ngay hotline **${co.hotline}**.
- Chúng tôi sẽ gửi bù hoặc đổi hàng mới **miễn phí** trong vòng 1 – 3 ngày làm việc.

## 3. Khuyến nghị quay video khi mở hàng
Bạn nên **quay video liên tục từ lúc mở kiện hàng** đến khi kiểm tra xong. Video giúp việc xử lý khiếu nại nhanh và chính xác hơn, đặc biệt với lỗi thiếu hàng hoặc hư hỏng bên trong mà không thể thấy từ bên ngoài.

## 4. Sau khi đã nhận hàng
Nếu phát hiện lỗi sau khi đã nhận (thiếu hàng, hàng bể vỡ bên trong, sai sản phẩm), vui lòng báo cho chúng tôi trong vòng **48 giờ** kể từ khi nhận hàng. Việc đổi trả được thực hiện theo [Chính sách đổi trả và hoàn tiền](${link('/policies/chinh-sach-doi-tra')}).

## 5. Liên hệ
${contactBlock(co, link)}
`,

  'chinh-sach-thanh-toan': ({ co, link, methods, bank, online = methods.filter((m) => /VNPay|MoMo/.test(m.t)).map((m) => (/VNPay/.test(m.t) ? 'VNPay' : 'MoMo')).join(', ') }) => `
${co.brand} cung cấp nhiều phương thức thanh toán an toàn. Giá sản phẩm niêm yết trên website bằng **Việt Nam đồng (₫)**; tổng tiền phải thanh toán (gồm giá hàng và phí vận chuyển) được hiển thị rõ trước khi bạn đặt hàng.

## 1. Các phương thức thanh toán
${methods.map((m, i) => `
### 1.${i + 1}. ${m.t}
${m.long}`).join('\n')}
${bank && bank.accountNo ? `
## 2. Tài khoản nhận chuyển khoản
Chúng tôi **chỉ nhận chuyển khoản vào tài khoản đứng tên công ty** dưới đây:

| | |
| --- | --- |
| Chủ tài khoản | **${bank.accountName}** |
| Số tài khoản | **${bank.accountNo}** |
| Ngân hàng | ${bank.bankName} |
| Nội dung chuyển khoản | Mã đơn hàng (ví dụ: TST12345) |

> ${co.brand} **không** yêu cầu chuyển khoản vào tài khoản cá nhân và **không** bao giờ hỏi mật khẩu, mã OTP của bạn. Nếu nhận được yêu cầu như vậy, vui lòng báo ngay hotline **${co.hotline}**.
` : ''}
## ${bank && bank.accountNo ? 3 : 2}. Xác nhận thanh toán
${online ? `- Với thanh toán qua ${online}, hệ thống tự động ghi nhận ngay khi giao dịch thành công.
` : ''}- Với chuyển khoản ngân hàng, đơn hàng được xác nhận đã thanh toán trong vòng 2 giờ làm việc kể từ khi tiền về tài khoản.
- Nếu đã trừ tiền nhưng đơn chưa được ghi nhận, vui lòng gửi ảnh chụp giao dịch kèm mã đơn qua Zalo hoặc email để được kiểm tra.

## ${bank && bank.accountNo ? 4 : 3}. An toàn thanh toán
${online ? `- Thanh toán trực tuyến được thực hiện trên cổng của **${online}**, tổ chức trung gian thanh toán được Ngân hàng Nhà nước Việt Nam cấp phép.
` : ''}- Website ${co.brand} **không lưu trữ** số thẻ, ngày hết hạn, mã CVV hay mã OTP của khách hàng.
- Mọi dữ liệu được truyền qua kết nối mã hóa **HTTPS (SSL/TLS)**.

## ${bank && bank.accountNo ? 5 : 4}. Hoàn tiền
Các khoản hoàn tiền (hủy đơn, đổi trả) được thực hiện theo [Chính sách đổi trả và hoàn tiền](${link('/policies/chinh-sach-doi-tra')}).

## ${bank && bank.accountNo ? 6 : 5}. Hóa đơn
Hóa đơn điện tử được xuất theo quy định của pháp luật về hóa đơn, chứng từ. Nếu cần hóa đơn cho doanh nghiệp, vui lòng ghi thông tin xuất hóa đơn vào ô ghi chú khi đặt hàng hoặc gửi cho chúng tôi trong ngày đặt hàng.

## ${bank && bank.accountNo ? 7 : 6}. Liên hệ
${contactBlock(co, link)}
`,

  'chinh-sach-doi-tra': ({ co, link }) => `
${co.legal} cam kết bảo vệ quyền lợi khách hàng theo Luật Bảo vệ quyền lợi người tiêu dùng số 19/2023/QH15. Chính sách này áp dụng cho sản phẩm mua tại website **${co.website}** và qua các kênh bán hàng trực tuyến của ${co.brand}.

## 1. Các trường hợp được đổi trả
Chúng tôi nhận **đổi sản phẩm mới hoặc hoàn tiền 100%** (bao gồm phí vận chuyển hai chiều) trong các trường hợp:
1. Giao **sai sản phẩm**, sai quy cách hoặc **thiếu số lượng** so với đơn hàng;
2. Sản phẩm bị **hư hỏng, móp méo, rò rỉ, vỡ** do quá trình vận chuyển;
3. Sản phẩm có **lỗi từ nhà sản xuất**: vón cục, đổi màu, có mùi lạ, tách lớp bất thường so với mô tả trên nhãn khi chưa sử dụng;
4. Sản phẩm **đã hết hạn sử dụng** hoặc còn hạn dưới **3 tháng** tại thời điểm nhận hàng mà không được thông báo trước;
5. Sản phẩm không đúng với mô tả trên website (thành phần, quy cách, công dụng ghi trên nhãn).

### Đổi trả theo nhu cầu (đổi ý)
Nếu bạn muốn đổi sang sản phẩm khác hoặc trả lại hàng vì không còn nhu cầu, chúng tôi vẫn hỗ trợ khi sản phẩm đáp ứng đủ điều kiện ở mục 2. Trường hợp này, **khách hàng chịu phí vận chuyển hai chiều**.

## 2. Điều kiện đổi trả
- Thời hạn yêu cầu: **7 ngày** kể từ ngày nhận hàng. Riêng lỗi thiếu hàng, giao sai, hư hỏng do vận chuyển cần báo trong vòng **48 giờ** kể từ khi nhận hàng.
- Sản phẩm **còn nguyên tem niêm phong, chưa mở nắp, chưa qua sử dụng**; bao bì, nhãn mác còn nguyên vẹn (trừ trường hợp lỗi nhà sản xuất phát hiện khi mở).
- Có **mã đơn hàng** hoặc phiếu giao hàng, hóa đơn mua hàng.
- Có hình ảnh hoặc video thể hiện tình trạng lỗi (khuyến khích video mở hàng).

## 3. Các trường hợp không áp dụng đổi trả
- Sản phẩm đã mở niêm phong, đã sử dụng một phần hoặc pha trộn với chất khác, trừ khi lỗi thuộc về nhà sản xuất;
- Sản phẩm hư hỏng do **bảo quản sai hướng dẫn** sau khi nhận (để nơi ẩm ướt, nắng nóng, hở nắp…);
- Sản phẩm đã quá thời hạn đổi trả nêu ở mục 2;
- Hàng khuyến mãi, quà tặng kèm (trừ khi bị lỗi);
- Đơn hàng của đại lý, đơn số lượng lớn có hợp đồng riêng: áp dụng theo điều khoản đổi trả trong hợp đồng.

> **Về hiệu quả sử dụng:** kết quả nuôi phụ thuộc vào nhiều yếu tố như môi trường ao, con giống, thời tiết, quy trình chăm sóc. Vì vậy, chúng tôi không hoàn tiền dựa trên kết quả vụ nuôi. Tuy nhiên, kỹ thuật viên của ${co.brand} luôn **hỗ trợ miễn phí** để bạn sử dụng sản phẩm đúng cách và đạt hiệu quả tốt nhất.

## 4. Hình thức hoàn tiền
| Phương thức đã thanh toán | Cách hoàn tiền | Thời gian |
| --- | --- | --- |
| Thanh toán khi nhận hàng (COD) | Chuyển khoản vào tài khoản ngân hàng do khách cung cấp | 3 – 5 ngày làm việc |
| Chuyển khoản ngân hàng | Chuyển khoản lại vào tài khoản đã thanh toán | 3 – 5 ngày làm việc |
| VNPay, MoMo | Hoàn về tài khoản, thẻ hoặc ví đã thanh toán | 5 – 7 ngày làm việc, tùy ngân hàng hoặc ví |

Thời gian hoàn tiền tính từ khi ${co.brand} nhận được hàng trả lại và xác nhận đủ điều kiện (hoặc từ khi xác nhận hủy đơn đã thanh toán). Số tiền hoàn bằng giá trị sản phẩm đổi trả cộng phí vận chuyển (nếu lỗi thuộc về ${co.brand}).

## 5. Thời gian xử lý
- Tiếp nhận và phản hồi yêu cầu: trong vòng **24 giờ làm việc**.
- Kiểm tra hàng trả lại: **1 – 2 ngày làm việc** kể từ khi nhận được hàng.
- Gửi hàng đổi mới: **1 – 3 ngày làm việc** sau khi xác nhận đổi trả, cộng thời gian vận chuyển.

Cách gửi yêu cầu và gửi hàng trả lại được hướng dẫn chi tiết tại [Hướng dẫn đổi trả hàng](${link('/policies/huong-dan-doi-tra')}).

## 6. Giải quyết khiếu nại
Nếu không đồng ý với kết quả xử lý, bạn có thể gửi khiếu nại theo [Điều khoản sử dụng](${link('/policies/dieu-khoan-su-dung')}) (mục Giải quyết khiếu nại, tranh chấp) hoặc liên hệ cơ quan bảo vệ quyền lợi người tiêu dùng theo quy định của pháp luật.

## 7. Liên hệ
${contactBlock(co, link)}
`,

  'huong-dan-doi-tra': ({ co, link }) => `
Hướng dẫn này giúp bạn gửi yêu cầu đổi trả nhanh và đúng quy trình. Điều kiện, thời hạn và các trường hợp được đổi trả xem tại [Chính sách đổi trả và hoàn tiền](${link('/policies/chinh-sach-doi-tra')}).

## Bước 1: Kiểm tra điều kiện
Trước khi gửi yêu cầu, vui lòng kiểm tra:
- Còn trong thời hạn **7 ngày** kể từ ngày nhận hàng (lỗi vận chuyển, thiếu hàng, giao sai: **48 giờ**);
- Sản phẩm còn tem niêm phong, chưa sử dụng (trừ lỗi nhà sản xuất);
- Bạn có mã đơn hàng hoặc phiếu giao hàng.

## Bước 2: Gửi yêu cầu đổi trả
Liên hệ qua một trong các kênh:
- Gọi hotline **${co.hotline}**;${co.phone ? `
- Nhắn Zalo **${co.phone}**;` : ''}
- Gửi email đến **${co.email}** với tiêu đề: *Đổi trả – [Mã đơn hàng]*;
- Gửi biểu mẫu tại trang [Liên hệ](${link('/contact')}).

Thông tin cần cung cấp:
1. Mã đơn hàng, họ tên và số điện thoại đặt hàng;
2. Tên sản phẩm, quy cách, số lượng cần đổi trả;
3. Lý do đổi trả và mong muốn của bạn (đổi sản phẩm mới, đổi sản phẩm khác hay hoàn tiền);
4. Hình ảnh hoặc video thể hiện tình trạng sản phẩm, tem nhãn, hạn sử dụng;
5. Số tài khoản ngân hàng nhận tiền (nếu yêu cầu hoàn tiền với đơn COD).

## Bước 3: Nhận xác nhận
Trong vòng **24 giờ làm việc**, nhân viên chăm sóc khách hàng sẽ liên hệ để xác nhận yêu cầu, hướng dẫn cách gửi hàng và thông báo chi phí (nếu có). Với lỗi giao sai, thiếu hàng hoặc hư hỏng do vận chuyển, chúng tôi có thể **gửi hàng bù ngay** mà không cần bạn gửi trả hàng lỗi.

## Bước 4: Đóng gói và gửi trả hàng
- Đóng gói sản phẩm trong bao bì gốc (nếu còn), bọc chống va đập, quấn kín nắp với sản phẩm dạng lỏng.
- Ghi **mã đơn hàng** và **họ tên, số điện thoại** của bạn bên ngoài kiện hàng.
- Gửi hàng về địa chỉ: **${co.legal} – ${co.address}**.
- Với lỗi thuộc về ${co.brand}, chúng tôi sẽ cho đơn vị vận chuyển đến lấy hàng tận nơi **miễn phí**, hoặc hoàn lại phí gửi hàng cho bạn.
- Giữ lại biên nhận gửi hàng và mã vận đơn đến khi hoàn tất đổi trả.

## Bước 5: Kiểm tra và hoàn tất
- ${co.brand} kiểm tra hàng trả lại trong **1 – 2 ngày làm việc** kể từ khi nhận hàng và thông báo kết quả cho bạn.
- **Đổi hàng:** sản phẩm mới được gửi đi trong 1 – 3 ngày làm việc.
- **Hoàn tiền:** thực hiện trong 3 – 7 ngày làm việc, tùy phương thức thanh toán ban đầu.

## Câu hỏi thường gặp
### Tôi đã mở nắp rồi mới thấy sản phẩm bị vón cục, có được đổi không?
Có. Đây là lỗi nhà sản xuất. Vui lòng chụp ảnh sản phẩm, tem nhãn, số lô và hạn sử dụng rồi gửi cho chúng tôi trong thời hạn 7 ngày kể từ khi nhận hàng.

### Tôi mua dư, muốn trả lại có được không?
Được, nếu sản phẩm còn nguyên niêm phong và trong thời hạn 7 ngày. Phí vận chuyển hai chiều do bạn chi trả.

### Bao lâu tôi nhận được tiền hoàn?
Từ 3 đến 7 ngày làm việc sau khi chúng tôi xác nhận hàng trả lại đủ điều kiện, tùy phương thức thanh toán.
`,

  'chinh-sach-bao-mat': ({ co, link }) => `
${co.legal} (“**${co.brand}**”, “**chúng tôi**”) tôn trọng và cam kết bảo vệ dữ liệu cá nhân của khách hàng theo Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15, Nghị định số 356/2025/NĐ-CP, Luật Thương mại điện tử số 122/2025/QH15, Luật Bảo vệ quyền lợi người tiêu dùng số 19/2023/QH15 và các văn bản hướng dẫn thi hành.

Chính sách này giải thích chúng tôi thu thập những thông tin gì, dùng để làm gì, lưu trữ bao lâu và bạn có những quyền gì đối với dữ liệu của mình khi sử dụng website **${co.website}**.

## 1. Mục đích thu thập thông tin cá nhân
Chúng tôi xử lý dữ liệu cá nhân của bạn cho các mục đích sau:
- Tiếp nhận, xác nhận, giao hàng và chăm sóc khách hàng sau bán hàng đối với đơn hàng bạn đặt;
- Xử lý thanh toán, hoàn tiền, xuất hóa đơn và thực hiện nghĩa vụ kế toán, thuế;
- Trả lời yêu cầu báo giá, tư vấn kỹ thuật, liên hệ, đăng ký đại lý;
- Gửi bản tin kỹ thuật, thông tin khuyến mãi **khi bạn đã đăng ký và đồng ý nhận**;
- Phát hiện, ngăn chặn gian lận, đặt hàng giả mạo, tấn công vào website;
- Cải thiện chất lượng sản phẩm, dịch vụ và trải nghiệm trên website.

Chúng tôi **không** sử dụng dữ liệu của bạn cho mục đích khác ngoài các mục đích trên khi chưa có sự đồng ý của bạn.

## 2. Phạm vi thông tin thu thập
**Thông tin bạn cung cấp** khi đặt hàng, gửi biểu mẫu hoặc liên hệ:
- Họ tên, số điện thoại, email, địa chỉ nhận hàng, tỉnh/thành phố;
- Tên công ty, mã số thuế (khi yêu cầu hóa đơn hoặc đăng ký đại lý);
- Thông tin đơn hàng, ghi chú, nội dung tin nhắn, mô tả tình trạng ao nuôi.

**Thông tin thu thập tự động** khi bạn truy cập website:
- Địa chỉ IP, loại trình duyệt, thời gian truy cập (nhật ký hệ thống, phục vụ bảo mật);
- Cookie cần thiết để duy trì giỏ hàng, phiên làm việc, ngôn ngữ và giao diện sáng/tối bạn đã chọn.

**Chúng tôi không thu thập và không lưu trữ** số thẻ ngân hàng, mã CVV, mật khẩu hay mã OTP. Thanh toán trực tuyến (nếu có) được xử lý trên cổng của tổ chức trung gian thanh toán được cấp phép.

Chúng tôi không thu thập dữ liệu cá nhân nhạy cảm và không chủ động thu thập dữ liệu của trẻ em. Người dưới 16 tuổi chỉ nên mua hàng khi có sự đồng ý và giám sát của cha mẹ hoặc người giám hộ.

## 3. Phạm vi sử dụng thông tin
Thông tin của bạn chỉ được sử dụng trong nội bộ ${co.brand} cho các mục đích ở mục 1. Bộ phận được tiếp cận gồm: bán hàng, chăm sóc khách hàng, kho vận, kế toán và kỹ thuật, theo nguyên tắc **chỉ tiếp cận phần dữ liệu cần thiết cho công việc**.

## 4. Thời gian lưu trữ thông tin
| Loại dữ liệu | Thời gian lưu trữ |
| --- | --- |
| Đơn hàng, hóa đơn, chứng từ thanh toán | Theo thời hạn lưu trữ chứng từ kế toán (tối thiểu 10 năm) |
| Yêu cầu liên hệ, báo giá, tư vấn | 24 tháng kể từ lần liên hệ cuối |
| Email nhận bản tin | Đến khi bạn hủy đăng ký |
| Nhật ký truy cập hệ thống | Tối đa 12 tháng |

Hết thời hạn trên, hoặc khi bạn yêu cầu xóa và pháp luật không bắt buộc lưu giữ, dữ liệu sẽ được xóa hoặc ẩn danh hóa.

## 5. Những người hoặc tổ chức có thể được tiếp cận thông tin
Chúng tôi **không bán, không trao đổi, không cho thuê** dữ liệu cá nhân của bạn. Dữ liệu chỉ được chia sẻ trong phạm vi cần thiết với:
- **Đơn vị vận chuyển** (Viettel Post, Giao Hàng Nhanh, Giao Hàng Tiết Kiệm, J&T Express…): họ tên, số điện thoại, địa chỉ nhận hàng, số tiền thu hộ;
- **Đơn vị trung gian thanh toán và ngân hàng** (VNPay, MoMo, ngân hàng nhận chuyển khoản): mã đơn hàng và số tiền giao dịch;
- **Nhà cung cấp hạ tầng** (máy chủ, email, hóa đơn điện tử) xử lý dữ liệu thay mặt chúng tôi theo hợp đồng có điều khoản bảo mật;
- **Cơ quan nhà nước có thẩm quyền** khi có yêu cầu theo quy định của pháp luật.

Các bên nhận dữ liệu phải bảo mật và chỉ sử dụng dữ liệu cho đúng mục đích được chia sẻ.

## 6. Địa chỉ của đơn vị thu thập và quản lý thông tin
- **Tên đơn vị:** ${co.legal}
- **Mã số doanh nghiệp:** ${co.taxCode}, cấp ngày ${co.licenseDate} tại ${co.licenseIssuer}
- **Địa chỉ:** ${co.address}
- **Điện thoại:** ${co.hotline}${co.phone ? ` – ${co.phone}` : ''}
- **Email:** ${co.email}

## 7. Quyền của bạn đối với dữ liệu cá nhân
Theo quy định của pháp luật về bảo vệ dữ liệu cá nhân, bạn có quyền:
- **Được biết** về hoạt động xử lý dữ liệu cá nhân của mình;
- **Đồng ý hoặc không đồng ý**, và **rút lại sự đồng ý** cho việc xử lý dữ liệu (ví dụ: hủy nhận bản tin);
- **Xem, chỉnh sửa** hoặc yêu cầu chỉnh sửa dữ liệu không chính xác;
- **Yêu cầu xóa** dữ liệu, **hạn chế xử lý**, **phản đối xử lý** dữ liệu, trừ trường hợp pháp luật yêu cầu lưu giữ;
- **Yêu cầu cung cấp** bản sao dữ liệu cá nhân của mình;
- **Khiếu nại, tố cáo, khởi kiện** và yêu cầu bồi thường thiệt hại theo quy định của pháp luật.

## 8. Phương tiện và công cụ để bạn tiếp cận, chỉnh sửa dữ liệu
- Xem lại thông tin đơn hàng tại [Tra cứu đơn hàng](${link('/order-lookup')}) bằng mã đơn và số điện thoại;
- Gửi yêu cầu xem, sửa, xóa dữ liệu qua email **${co.email}**, hotline **${co.hotline}** hoặc biểu mẫu [Liên hệ](${link('/contact')});
- Hủy nhận bản tin bằng cách trả lời email bản tin với nội dung “Hủy đăng ký” hoặc liên hệ chúng tôi.

Chúng tôi xác minh danh tính người yêu cầu (thường qua số điện thoại đặt hàng) và phản hồi trong vòng **72 giờ** kể từ khi nhận yêu cầu hợp lệ.

## 9. Cam kết bảo mật thông tin
- Dữ liệu được truyền qua kết nối mã hóa **HTTPS (SSL/TLS)** và lưu trữ trên máy chủ có tường lửa, sao lưu định kỳ.
- Tài khoản quản trị được bảo vệ bằng mật khẩu mã hóa, phân quyền theo vai trò và ghi nhật ký truy cập.
- Nhân viên tiếp xúc với dữ liệu khách hàng phải cam kết bảo mật thông tin.
- Khi xảy ra sự cố lộ, mất dữ liệu cá nhân, chúng tôi sẽ thực hiện ngay các biện pháp khắc phục, **thông báo cho cơ quan chuyên trách bảo vệ dữ liệu cá nhân** và cho khách hàng bị ảnh hưởng theo thời hạn pháp luật quy định.

Bạn cũng có trách nhiệm tự bảo vệ thông tin của mình: không chia sẻ mã OTP, mật khẩu ngân hàng cho bất kỳ ai, kể cả người tự xưng là nhân viên ${co.brand}.

## 10. Cookie
Website chỉ dùng cookie **cần thiết** để vận hành giỏ hàng, phiên đăng nhập, ngôn ngữ và giao diện. Bạn có thể xóa hoặc chặn cookie trong cài đặt trình duyệt, nhưng khi đó một số chức năng như giỏ hàng có thể không hoạt động.

## 11. Cơ chế tiếp nhận và giải quyết khiếu nại
Nếu cho rằng dữ liệu cá nhân của mình bị sử dụng sai mục đích hoặc ngoài phạm vi đã thông báo, bạn vui lòng gửi khiếu nại qua email **${co.email}** hoặc hotline **${co.hotline}**. Chúng tôi sẽ xác nhận trong **24 giờ làm việc** và giải quyết trong thời hạn tối đa **15 ngày làm việc**. Trường hợp không đạt được thỏa thuận, bạn có quyền gửi đơn đến cơ quan nhà nước có thẩm quyền hoặc khởi kiện tại Tòa án.

## 12. Thay đổi chính sách
Chính sách có thể được cập nhật để phù hợp với quy định pháp luật và hoạt động của chúng tôi. Phiên bản mới được đăng tại trang này kèm ngày hiệu lực. Với thay đổi quan trọng, chúng tôi sẽ thông báo trên website trước khi áp dụng.
`,

  'dieu-khoan-su-dung': ({ co, link }) => `
Chào mừng bạn đến với website **${co.website}** của ${co.legal}. Khi truy cập website và đặt hàng, bạn đồng ý với các điều khoản dưới đây. Vui lòng đọc kỹ trước khi sử dụng.

## 1. Thông tin doanh nghiệp
- **Tên doanh nghiệp:** ${co.legal}
- **Mã số doanh nghiệp:** ${co.taxCode}, cấp ngày ${co.licenseDate} tại ${co.licenseIssuer}${co.representative ? `
- **Người đại diện theo pháp luật:** ${co.representative}` : ''}
- **Địa chỉ:** ${co.address}
- **Hotline:** ${co.hotline} – **Email:** ${co.email}

## 2. Phạm vi áp dụng
Điều khoản này áp dụng cho mọi người truy cập website (“**người dùng**”) và khách hàng mua sản phẩm qua website hoặc qua các kênh trực tuyến của ${co.brand} (“**khách hàng**”). Khách hàng phải có năng lực hành vi dân sự đầy đủ; người dưới 18 tuổi cần có sự đồng ý của cha mẹ hoặc người giám hộ.

## 3. Thông tin sản phẩm và giá
- Chúng tôi nỗ lực cung cấp thông tin sản phẩm chính xác (thành phần, công dụng, quy cách, liều dùng, hình ảnh). Hình ảnh có thể khác thực tế đôi chút về màu sắc do thiết bị hiển thị hoặc thay đổi mẫu bao bì.
- Giá niêm yết bằng Việt Nam đồng, đã bao gồm thuế giá trị gia tăng theo quy định (nếu có), **chưa bao gồm phí vận chuyển**. Phí vận chuyển được hiển thị trước khi bạn xác nhận đặt hàng.
- Trường hợp có sai sót về giá hoặc thông tin do lỗi hệ thống, chúng tôi sẽ thông báo cho khách hàng trước khi giao hàng; khách hàng có quyền hủy đơn và được hoàn lại toàn bộ số tiền đã thanh toán.
- Giá và chương trình khuyến mãi có thể thay đổi; giá áp dụng là giá tại thời điểm đơn hàng được đặt thành công.

## 4. Đặt hàng và xác nhận đơn
- Hợp đồng mua bán được giao kết khi ${co.brand} **xác nhận đơn hàng** (qua điện thoại, tin nhắn hoặc email) sau khi bạn đặt hàng.
- Bạn có trách nhiệm cung cấp thông tin đặt hàng chính xác. Quy trình đặt hàng xem tại [Hướng dẫn mua hàng](${link('/policies/huong-dan-mua-hang')}).
- Giao hàng, kiểm hàng, thanh toán, đổi trả thực hiện theo các chính sách: [Vận chuyển và giao nhận](${link('/policies/chinh-sach-van-chuyen')}), [Kiểm hàng](${link('/policies/chinh-sach-kiem-hang')}), [Thanh toán](${link('/policies/chinh-sach-thanh-toan')}), [Đổi trả và hoàn tiền](${link('/policies/chinh-sach-doi-tra')}).

## 5. Sử dụng sản phẩm
Sản phẩm của ${co.brand} dùng trong nuôi trồng thủy sản. Khách hàng cần đọc kỹ nhãn, **sử dụng đúng liều lượng, đúng đối tượng và tuân thủ thời gian ngưng sử dụng** (nếu có) trước khi thu hoạch. Nội dung kỹ thuật trên website (bài viết, tra cứu bệnh) chỉ mang tính tham khảo, không thay thế chẩn đoán của cán bộ thú y tại ao nuôi. Chúng tôi không chịu trách nhiệm với thiệt hại phát sinh do sử dụng sai hướng dẫn.

## 6. Quyền và nghĩa vụ của người dùng
- Không sử dụng website vào mục đích vi phạm pháp luật; không đặt hàng giả mạo, quấy rối; không can thiệp, tấn công hoặc làm gián đoạn hệ thống.
- Không sao chép, phát tán nội dung website cho mục đích thương mại khi chưa được chấp thuận bằng văn bản.
- Được bảo vệ thông tin cá nhân theo [Chính sách bảo mật thông tin](${link('/policies/chinh-sach-bao-mat')}).

## 7. Quyền và nghĩa vụ của ${co.brand}
- Cung cấp thông tin trung thực về sản phẩm, giá, điều kiện giao dịch; bán đúng sản phẩm có nguồn gốc rõ ràng, được phép lưu hành theo quy định.
- Giao hàng, xuất hóa đơn, bảo hành, đổi trả theo cam kết đã công bố.
- Có quyền từ chối hoặc hủy đơn hàng có dấu hiệu gian lận, thông tin không chính xác, hoặc khi sản phẩm hết hàng; trong trường hợp đó sẽ thông báo và hoàn lại tiền (nếu đã thanh toán).

## 8. Quyền sở hữu trí tuệ
Toàn bộ nội dung trên website, gồm logo, nhãn hiệu, hình ảnh, bài viết, thiết kế, thuộc quyền sở hữu của ${co.legal} hoặc được sử dụng hợp pháp. Mọi hành vi sao chép, sử dụng trái phép đều bị xử lý theo quy định của pháp luật.

## 9. Giải quyết khiếu nại, tranh chấp
1. Khách hàng gửi khiếu nại qua hotline **${co.hotline}**, email **${co.email}** hoặc trực tiếp tại địa chỉ công ty, kèm mã đơn hàng và chứng cứ liên quan.
2. ${co.brand} xác nhận đã tiếp nhận trong vòng **24 giờ làm việc** và giải quyết trong thời hạn tối đa **15 ngày làm việc** kể từ khi nhận đủ thông tin.
3. Tranh chấp được ưu tiên giải quyết bằng **thương lượng, hòa giải**. Trường hợp không đạt được thỏa thuận, mỗi bên có quyền đề nghị cơ quan nhà nước có thẩm quyền giải quyết hoặc khởi kiện tại Tòa án theo quy định của pháp luật Việt Nam.

## 10. Luật áp dụng
Điều khoản này được điều chỉnh bởi pháp luật Việt Nam, bao gồm Bộ luật Dân sự, Luật Thương mại điện tử số 122/2025/QH15, Luật Bảo vệ quyền lợi người tiêu dùng số 19/2023/QH15, Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15 và các văn bản hướng dẫn thi hành. Bản tiếng Việt là bản có giá trị pháp lý.

## 11. Sửa đổi điều khoản
${co.brand} có thể sửa đổi điều khoản này. Nội dung mới có hiệu lực kể từ khi được đăng trên website và không áp dụng hồi tố cho các đơn hàng đã được xác nhận trước đó.
`,
};

/* ---------------- Payment method texts ---------------- */

function paymentMethods(settings, gateways, bank, money, link) {
  const on = (settings && settings.payments) || {};
  const list = [];
  if (on.cod !== false) list.push({ t: 'Thanh toán khi nhận hàng (COD)', d: 'trả tiền mặt cho nhân viên giao hàng sau khi kiểm tra hàng.', long: 'Bạn thanh toán bằng tiền mặt cho nhân viên giao hàng **sau khi đã kiểm tra hàng** theo [Chính sách kiểm hàng](' + link('/policies/chinh-sach-kiem-hang') + '). Số tiền thu hộ đúng bằng tổng tiền trên đơn hàng. Với đơn có giá trị lớn, chúng tôi có thể đề nghị đặt cọc trước và sẽ thông báo khi gọi xác nhận đơn.' });
  if (on.vietqr !== false && bank && bank.accountNo) list.push({ t: 'Chuyển khoản ngân hàng (VietQR)', d: 'quét mã QR hiển thị sau khi đặt hàng, số tiền và nội dung được điền sẵn.', long: 'Sau khi đặt hàng, website hiển thị **mã QR** chứa sẵn số tài khoản, số tiền và nội dung chuyển khoản (mã đơn hàng). Bạn mở ứng dụng ngân hàng, quét mã và xác nhận. Đơn hàng được xử lý sau khi tiền về tài khoản công ty.' });
  if (on.vnpay !== false && gateways.vnpay) list.push({ t: 'Cổng thanh toán VNPay', d: 'thẻ ATM nội địa, thẻ Visa/Mastercard/JCB hoặc QR VNPay.', long: 'Bạn được chuyển đến cổng thanh toán **VNPay** để thanh toán bằng thẻ ATM nội địa (có đăng ký thanh toán trực tuyến), thẻ quốc tế Visa, Mastercard, JCB hoặc quét QR VNPay. Kết quả giao dịch được cập nhật vào đơn hàng ngay lập tức.' });
  if (on.momo !== false && gateways.momo) list.push({ t: 'Ví điện tử MoMo', d: 'thanh toán nhanh qua ứng dụng MoMo.', long: 'Bạn được chuyển đến trang thanh toán của **MoMo**, quét mã hoặc xác nhận trên ứng dụng MoMo. Kết quả giao dịch được cập nhật vào đơn hàng ngay lập tức.' });
  if (on.callback !== false) list.push({ t: 'Đặt hàng, nhân viên gọi lại', d: 'chúng tôi gọi xác nhận, tư vấn và thống nhất cách thanh toán trước khi giao.', long: 'Bạn chỉ cần để lại đơn hàng. Nhân viên sẽ gọi để xác nhận, tư vấn kỹ thuật và thống nhất phương thức thanh toán (COD hoặc chuyển khoản) trước khi giao hàng.' });
  return list;
}

/* ---------------- Public API ---------------- */

function list(locale) {
  return META.map((m) => ({ slug: m.slug, icon: m.icon, title: m.title[locale] || m.title.vi, lead: m.lead[locale] || m.lead.vi }));
}

function find(slug) {
  return META.find((m) => m.slug === slug) || null;
}

/** Markdown body (Vietnamese) for one policy, filled from settings. */
function body(slug, { settings, baseUrl, gateways, link }) {
  const fn = BODIES[slug];
  if (!fn) return '';
  const money = (n) => H.money(n, 'vi');
  const bank = (settings && settings.bank) || {};
  const ship = { fee: 0, freeFrom: 0, ...((settings && settings.shipping) || {}) };
  const co = companyInfo(settings, baseUrl);
  const methods = paymentMethods(settings, gateways || {}, bank, money, link);
  return fn({ co, link, money, ship, bank, methods }).trim();
}

module.exports = { EFFECTIVE, LEGAL_DEFAULTS, companyInfo, list, find, body, slugs: META.map((m) => m.slug) };
