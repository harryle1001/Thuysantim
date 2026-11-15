'use strict';
/* Ad landing pages (/vi/lp/:slug) for Facebook / TikTok / Google Ads.
   One block per campaign: add a new key to launch a new page. Products are referenced by slug
   and loaded from the database (image, price, link). Vietnamese only — ads target VN farmers. */

const pages = {
  'xu-ly-khi-doc-day-ao': {
    vi: {
      title: 'Xử lý khí độc NH₃, NO₂, H₂S & đáy ao nuôi tôm | Thủy Sản Tím',
      description: 'Tôm nổi đầu, đáy ao bùn đen, nước hôi? Bộ 3 TÍM cắt NH₃ trong 3–6 giờ, dọn đáy, phân hủy bùn tận gốc. Kỹ sư tư vấn phác đồ miễn phí, giao tận ao, thu tiền khi nhận.',
      campaign: 'Khí độc & đáy ao',
      hero: {
        eyebrow: 'Mùa mưa · Ao tôm thẻ, tôm sú, cá',
        title: 'Đáy ao dơ, khí độc tăng —',
        titleEm: 'tôm nổi đầu, bỏ ăn?',
        lead: 'Bộ 3 xử lý khí độc & đáy ao TÍM: cắt nhanh NH₃ trong 3–6 giờ, lắng tụ cặn bẩn, phân hủy bùn đáy tận gốc — giữ ao sạch, màu nước ổn định đến ngày thu hoạch.',
        bullets: ['Kỹ sư thủy sản gọi lại trong 15 phút', 'Giao tận ao · Kiểm hàng rồi trả tiền (COD)', 'Không kháng sinh, không tồn dư'],
      },
      form: {
        title: 'Nhận phác đồ xử lý miễn phí',
        lead: 'Để lại số điện thoại, kỹ sư gọi lại tư vấn đúng liều cho ao của bà con.',
        issues: ['Tôm nổi đầu sáng sớm', 'Đáy dơ, bùn đen, nước hôi', 'Nước đổi màu, tảo tàn', 'Muốn phòng định kỳ'],
        provinces: ['Cà Mau', 'Bạc Liêu', 'Sóc Trăng', 'Kiên Giang', 'Trà Vinh', 'Bến Tre', 'Tiền Giang', 'Long An', 'Cần Thơ', 'An Giang', 'Đồng Tháp', 'Vĩnh Long', 'Hậu Giang', 'Ninh Thuận', 'Bình Thuận', 'Khánh Hòa', 'Phú Yên', 'Quảng Ninh', 'Tỉnh khác'],
        button: 'Gọi lại cho tôi',
        note: 'Miễn phí · Không spam · Bảo mật số điện thoại',
        done: 'Đã nhận thông tin!',
        doneLead: 'Kỹ sư sẽ gọi lại trong giờ làm việc. Cần gấp, bà con nhắn Zalo hoặc gọi hotline ngay.',
      },
      signs: {
        kicker: 'Dấu hiệu cảnh báo',
        title: 'Ao đang nhiễm khí độc khi thấy',
        items: [
          { icon: 'shrimp', t: 'Tôm nổi đầu, tấp mé', d: 'Rõ nhất lúc 3–6 giờ sáng, khi oxy hòa tan xuống thấp nhất.' },
          { icon: 'alert', t: 'Mang đen, mang vàng', d: 'NH₃, NO₂ bám mang làm tôm khó hô hấp, yếu dần.' },
          { icon: 'drop', t: 'Đáy bùn đen, mùi trứng thối', d: 'Dấu hiệu khí H₂S sinh ra ở lớp bùn thiếu oxy.' },
          { icon: 'leaf', t: 'Nước đổi màu, tảo tàn', d: 'Tảo chết hàng loạt sau mưa, nước đục, bọt nhớt.' },
          { icon: 'refresh', t: 'Giảm ăn, lột xác kéo dài', d: 'Tôm bỏ vó, rớt đáy rải rác, lớn chậm, FCR tăng.' },
        ],
        whyTitle: 'Vì sao khí độc tăng vọt mùa mưa?',
        why: 'Mưa làm pH và nhiệt độ dao động, tảo tàn hàng loạt. Thức ăn dư, phân tôm và xác tảo lắng xuống đáy, phân hủy trong điều kiện thiếu oxy sinh ra NH₃, NO₂ và H₂S — tích tụ âm thầm cho đến khi tôm nổi đầu.',
        limitsTitle: 'Ngưỡng an toàn nên giữ',
        limits: [
          { k: 'NH₃', v: '< 0,1 mg/L' },
          { k: 'NO₂', v: '< 1 mg/L' },
          { k: 'H₂S', v: '< 0,03 mg/L' },
          { k: 'Oxy hòa tan', v: '> 5 mg/L' },
        ],
      },
      solution: {
        kicker: 'Giải pháp 3 tầng',
        title: 'Cắt nhanh — Dọn đáy — Xử lý tận gốc',
        lead: 'Không chỉ “chữa cháy”. Mỗi sản phẩm xử lý một tầng nguyên nhân, phối hợp để khí độc không quay lại.',
        steps: [
          { n: '01', t: 'Cắt nhanh khí độc', d: 'Saponin từ Yucca schidigera liên kết NH₃ tự do, giảm khí độc sau 3–6 giờ — cấp cứu khi tôm nổi đầu.', p: 'tim-yucca-max' },
          { n: '02', t: 'Dọn sạch đáy ao', d: 'Zeolite hạt 1–2 mm chìm nhanh, lắng tụ chất lơ lửng, hấp thu khí độc, tạo lớp lọc tự nhiên ở đáy.', p: 'tim-zeo-clear' },
          { n: '03', t: 'Phân hủy bùn tận gốc', d: '9 chủng Bacillus, Lactobacillus, Nitrosomonas, Nitrobacter (10¹⁰ CFU/g) ăn bùn hữu cơ, chuyển hóa NH₃ → NO₂ → NO₃ vô hại.', p: 'tim-pro-bio-9' },
        ],
      },
      products: {
        kicker: 'Sản phẩm chủ lực',
        title: 'Bộ 3 xử lý khí độc & đáy ao',
        slugs: ['tim-yucca-max', 'tim-zeo-clear', 'tim-pro-bio-9'],
        roles: { 'tim-yucca-max': 'Cấp cứu khí độc', 'tim-zeo-clear': 'Làm sạch đáy', 'tim-pro-bio-9': 'Vi sinh xử lý đáy' },
        from: 'Chỉ từ',
        detail: 'Xem chi tiết',
        combo: 'Mua theo bộ được kỹ sư tính liều theo diện tích ao — tiết kiệm hơn mua lẻ.',
      },
      proof: {
        kicker: 'Kết quả thực tế',
        title: 'Bà con đã xử lý thành công',
        caseTitle: 'Ao tôm thẻ 2.500 m² · Sóc Trăng · 45 ngày tuổi',
        caseNote: 'Đo bằng bộ test nhanh trước và 48 giờ sau phác đồ. Kết quả có thể khác tùy điều kiện ao.',
        metrics: [
          { k: 'NH₃ (mg/L)', before: 0.5, after: 0.05, max: 0.5 },
          { k: 'NO₂ (mg/L)', before: 3, after: 0.8, max: 3 },
          { k: 'H₂S (mg/L)', before: 0.1, after: 0.02, max: 0.1 },
        ],
        before: 'Trước',
        after: 'Sau 48 giờ',
        reviews: [
          { name: 'Anh Tư Hùng', place: 'Năm Căn, Cà Mau', text: 'Ao 4.000 m² nổi đầu lúc 4 giờ sáng. Tạt Yucca với mở hết quạt, 5 giờ sau tôm lặn, chiều ăn lại bình thường.' },
          { name: 'Chị Ngọc Hân', place: 'Vĩnh Châu, Sóc Trăng', text: 'Đáy ao bạt trước hôi lắm. Xi-phông thấy bùn ít hẳn sau 1 tuần dùng Pro-Bio 9 với Zeo, nước lên màu đẹp.' },
          { name: 'Anh Minh Trí', place: 'Đông Hải, Bạc Liêu', text: 'Kỹ sư gọi lại liền, tính liều theo diện tích ao chớ không bán đại. Vụ này FCR xuống còn 1,2.' },
        ],
        certs: ['Nhà máy chuẩn GMP', 'ISO 9001:2015', 'Lab vi sinh ISO 17025', 'Đăng ký lưu hành Bộ NN&PTNT'],
      },
      usage: {
        kicker: 'Cách dùng',
        title: 'Phác đồ xử lý khi ao có khí độc',
        steps: [
          { when: 'Ngày 1 · Cấp cứu', what: 'TÍM YUCCA MAX 1 lít/1.500–2.000 m³ nước, tạt đều khắp ao. Mở quạt khí tối đa, giảm 50% thức ăn.' },
          { when: 'Ngày 2 · Dọn đáy', what: 'TÍM ZEO-CLEAR 20–30 kg/1.000 m², rải đều nhất là khu vực bùn đáy (giữa ao).' },
          { when: 'Ngày 3–5 · Xử lý gốc', what: 'TÍM PRO-BIO 9 1 kg/2.000 m³, liên tục 2–3 ngày. Ủ trước với 5 kg mật rỉ đường + 20 lít nước, sục khí 6–8 giờ rồi tạt.' },
          { when: 'Định kỳ · Phòng ngừa', what: 'PRO-BIO 9: 1 kg/3.000–4.000 m³, 5–7 ngày/lần · ZEO-CLEAR: 10–15 kg/1.000 m², 7–10 ngày/lần.' },
        ],
        tips: [
          'Tạt vi sinh lúc 8–10 giờ sáng, trời nắng và mở quạt để vi sinh hoạt động mạnh.',
          'Dùng vi sinh cách thuốc sát trùng, diệt khuẩn ít nhất 2–3 ngày.',
          'Kiểm tra NH₃, NO₂, pH, kiềm mỗi ngày trong thời gian xử lý.',
        ],
      },
      faq: [
        { q: 'Bộ 3 dùng cho tôm sú, cá được không?', a: 'Được. Cả 3 sản phẩm dùng cho ao tôm thẻ, tôm sú và ao cá; vi sinh hoạt động ở độ mặn 0–35‰, phù hợp ao ngọt, lợ và mặn.' },
        { q: 'Bao lâu thì thấy hiệu quả?', a: 'Yucca giảm NH₃ sau 3–6 giờ. Zeolite lắng cặn trong 1–2 ngày. Vi sinh cần 3–5 ngày để thấy đáy sạch, nước ổn định rõ rệt.' },
        { q: 'Có dùng chung với thuốc diệt khuẩn được không?', a: 'Yucca và Zeolite dùng được ngay. Riêng men vi sinh nên tạt cách thuốc sát trùng, diệt khuẩn ít nhất 2–3 ngày để vi sinh không bị chết.' },
        { q: 'Ao lót bạt và ao đất dùng liều giống nhau không?', a: 'Liều tính theo thể tích nước (m³) và diện tích đáy. Ao bạt ít bùn hơn nên thường dùng mức thấp; ao đất đáy dơ dùng mức cao. Kỹ sư sẽ tính đúng cho ao của bà con.' },
        { q: 'Mua ở đâu, giao hàng thế nào?', a: 'Đặt qua hotline, Zalo hoặc để lại số điện thoại. Giao tận nơi toàn quốc qua đại lý gần nhất, kiểm hàng rồi mới trả tiền (COD).' },
        { q: 'Có kỹ thuật hỗ trợ tận ao không?', a: 'Có. Kỹ sư thủy sản tư vấn miễn phí qua điện thoại, Zalo; khu vực ĐBSCL có thể hẹn kỹ thuật xuống ao kiểm tra nước.' },
      ],
      cta: {
        title: 'Đừng đợi tôm rớt đáy mới xử lý',
        lead: 'Mỗi giờ khí độc tích tụ là tôm yếu thêm. Gọi ngay để kỹ sư tính liều đúng cho ao của bà con.',
        button: 'Nhận phác đồ miễn phí',
      },
      sticky: { call: 'Gọi ngay', zalo: 'Zalo', form: 'Tư vấn' },
    },
  },
};

const UTM = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'];

function get(slug, locale) {
  const p = Object.prototype.hasOwnProperty.call(pages, slug) ? pages[slug] : null;
  return (p && p[locale]) || null;
}

function slugs() {
  return Object.keys(pages);
}

/** Lead label stored in inquiries.product: campaign slug + ad source, so admins know which ad converted. */
function leadTag(slug, query = {}) {
  const utm = UTM.map((k) => (typeof query[k] === 'string' ? query[k].replace(/[^\w.\-+ ]/g, '').slice(0, 40) : ''))
    .filter(Boolean)
    .join('/');
  const click = ['fbclid', 'ttclid', 'gclid'].find((k) => typeof query[k] === 'string' && query[k]);
  return [`LP ${slug}`, utm && `utm: ${utm}`, click && `via ${click.replace('clid', '')}`].filter(Boolean).join(' | ').slice(0, 255);
}

module.exports = { get, slugs, leadTag };
