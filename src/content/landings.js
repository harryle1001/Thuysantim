'use strict';
/* Ad landing pages (/vi/lp/:slug) for Facebook / TikTok / Google Ads.
   One block per campaign: add a new key to launch a new page. Products are referenced by slug
   and loaded from the database (image, price, link). Vietnamese only — ads target VN farmers. */

const PROVINCES = ['Cà Mau', 'Bạc Liêu', 'Sóc Trăng', 'Kiên Giang', 'Trà Vinh', 'Bến Tre', 'Tiền Giang', 'Long An', 'Cần Thơ', 'An Giang', 'Đồng Tháp', 'Vĩnh Long', 'Hậu Giang', 'Ninh Thuận', 'Bình Thuận', 'Khánh Hòa', 'Phú Yên', 'Quảng Ninh', 'Tỉnh khác'];
const FORM = {
  button: 'Gọi lại cho tôi',
  note: 'Không spam · Bảo mật số điện thoại',
  done: 'Đã nhận thông tin!',
  doneLead: 'Thủy Sản Tím sẽ liên hệ lại trong giờ làm việc. Cần gấp, bà con nhắn Zalo hoặc gọi hotline ngay.',
  provinces: PROVINCES,
};
const STICKY = { call: 'Gọi ngay', zalo: 'Zalo', form: 'Tư vấn' };

/* Product claims and doses below are copied from the product labels (nhan/san-pham.json). */
const pages = {
  'xu-ly-khi-doc-day-ao': {
    vi: {
      title: 'Xử lý khí độc NH₃, H₂S & đáy ao nuôi tôm | Thủy Sản Tím',
      description: 'Tôm nổi đầu, đáy ao bùn đen, nước hôi? Bộ 3 SUPER YUCCA, CLEAR 12H, ROVAZYME hấp thu khí độc, phân hủy mùn bã đáy ao. Liên hệ để được tư vấn liều, giao tận ao.',
      campaign: 'Khí độc & đáy ao',
      theme: 'hoang-hon',
      hero: {
        eyebrow: 'Mùa mưa · Ao tôm thẻ, tôm sú, cá',
        title: 'Đáy ao dơ, khí độc tăng —',
        titleEm: 'tôm nổi đầu, bỏ ăn?',
        lead: 'Bộ 3 xử lý khí độc & đáy ao của Thủy Sản Tím: hấp thu NH₃, phân hủy mùn bã hữu cơ, thức ăn thừa và xác tảo ở đáy ao, giảm mùi hôi, giữ nước ổn định.',
        bullets: ['Liên hệ để được tư vấn liều theo ao', 'Giao tận ao · Kiểm hàng rồi trả tiền (COD)', 'Sản xuất tại Việt Nam, có số đăng ký trên nhãn'],
      },
      form: { ...FORM, title: 'Liên hệ để được tư vấn', lead: 'Để lại số điện thoại, Thủy Sản Tím liên hệ lại tư vấn liều cho ao của bà con.', issues: ['Tôm nổi đầu sáng sớm', 'Đáy dơ, bùn đen, nước hôi', 'Nhớt bạt, nhớt nước', 'Muốn phòng định kỳ'] },
      signs: {
        kicker: 'Dấu hiệu cảnh báo',
        title: 'Ao đang nhiễm khí độc khi thấy',
        items: [
          { icon: 'shrimp', t: 'Tôm nổi đầu, tấp mé', d: 'Rõ nhất lúc 3–6 giờ sáng, khi oxy hòa tan xuống thấp nhất.' },
          { icon: 'alert', t: 'Mang đen, mang vàng', d: 'NH₃, NO₂ bám mang làm tôm khó hô hấp, yếu dần.' },
          { icon: 'drop', t: 'Đáy bùn đen, mùi trứng thối', d: 'Dấu hiệu khí H₂S sinh ra ở lớp bùn thiếu oxy.' },
          { icon: 'leaf', t: 'Nước đổi màu, tảo tàn', d: 'Tảo chết hàng loạt sau mưa, nước đục, bọt nhớt.' },
          { icon: 'refresh', t: 'Giảm ăn, lột xác kéo dài', d: 'Tôm bỏ vó, rớt đáy rải rác, lớn chậm.' },
        ],
        whyTitle: 'Vì sao khí độc tăng vọt mùa mưa?',
        why: 'Mưa làm pH và nhiệt độ dao động, tảo tàn hàng loạt. Thức ăn dư, phân tôm và xác tảo lắng xuống đáy, phân hủy trong điều kiện thiếu oxy sinh ra NH₃, NO₂ và H₂S, tích tụ âm thầm cho đến khi tôm nổi đầu.',
        limitsTitle: 'Ngưỡng tham khảo nên giữ',
        limits: [{ k: 'NH₃', v: '< 0,1 mg/L' }, { k: 'NO₂', v: '< 1 mg/L' }, { k: 'H₂S', v: '< 0,03 mg/L' }, { k: 'Oxy hòa tan', v: '> 5 mg/L' }],
      },
      solution: {
        kicker: 'Giải pháp 3 tầng',
        title: 'Hấp thu khí độc — Dọn đáy — Giữ nước ổn định',
        lead: 'Mỗi sản phẩm xử lý một tầng nguyên nhân, phối hợp để khí độc khó quay lại.',
        steps: [
          { n: '01', t: 'Hấp thu khí độc', d: 'Dịch chiết Yucca schidigera hấp thu khí độc NH₃, dùng khi tôm nổi đầu do khí độc.', p: 'super-yucca' },
          { n: '02', t: 'Phân hủy mùn bã đáy ao', d: 'Vi sinh Bacillus phân hủy mùn bã hữu cơ, thức ăn thừa, xác tảo, phân tôm; giảm NH₃, H₂S và mùi hôi; hỗ trợ làm sạch nhớt bạt.', p: 'clear-12h' },
          { n: '03', t: 'Định kỳ giữ đáy sạch', d: 'Vi sinh phân hủy mùn bã, hỗ trợ cắt tảo, dùng định kỳ 5 ngày/lần để đáy ao không tích tụ lại.', p: 'rovazyme' },
        ],
      },
      products: {
        kicker: 'Sản phẩm chủ lực',
        title: 'Bộ 3 xử lý khí độc & đáy ao',
        slugs: ['super-yucca', 'clear-12h', 'rovazyme'],
        roles: { 'super-yucca': 'Hấp thu khí độc', 'clear-12h': 'Vi sinh xử lý đáy', 'rovazyme': 'Vi sinh định kỳ' },
        from: 'Chỉ từ',
        detail: 'Xem chi tiết',
        combo: 'Mua theo bộ được tư vấn liều theo diện tích ao.',
      },
      usage: {
        kicker: 'Cách dùng theo nhãn',
        title: 'Phác đồ khi ao có khí độc',
        steps: [
          { when: 'Khí độc cao · Cấp cứu', what: 'SUPER YUCCA 1 lít/3.000 m³ nước. Hòa nước sạch, tạt đều khắp ao lúc sáng sớm hoặc chiều mát, mở quạt nước.' },
          { when: 'Xử lý đáy', what: 'CLEAR 12H: ủ 1 gói + 3 kg đường cát + 50 lít nước, sục khí 12–24 giờ. Ao bạt 15–20 lít/1.000 m³, 3 ngày/lần; ao đất 10–15 lít/1.000 m³, 5 ngày/lần.' },
          { when: 'Định kỳ · Phòng ngừa', what: 'ROVAZYME 454 g/3.000 m³ nước, 5 ngày/lần (tảo dày dùng liên tục 2 ngày) · SUPER YUCCA 1 lít/5.000 m³, 7 ngày/lần.' },
        ],
        tips: [
          'Dùng vi sinh khi trời có nắng, không dùng khi trời mưa; mở quạt hoặc sục khí liên tục.',
          'Dùng vi sinh cách thuốc sát trùng, diệt khuẩn ít nhất 2–3 ngày.',
          'Đo NH₃, NO₂, pH, kiềm mỗi ngày trong thời gian xử lý và đọc kỹ nhãn trước khi dùng.',
        ],
      },
      faq: [
        { q: 'Bộ 3 dùng cho tôm sú, cá được không?', a: 'Được. Cả 3 sản phẩm dùng xử lý môi trường ao nuôi tôm và cá. Thủy Sản Tím có thể tư vấn liều theo thể tích nước ao của bà con.' },
        { q: 'Bao lâu thì thấy hiệu quả?', a: 'Tùy mức độ ô nhiễm đáy và cách quản lý ao. Bà con nên đo NH₃, NO₂ hằng ngày để theo dõi; nếu tôm vẫn nổi đầu, liên hệ Thủy Sản Tím để được tư vấn thêm, vì có thể do nguyên nhân khác như thiếu oxy.' },
        { q: 'Có dùng chung với thuốc diệt khuẩn được không?', a: 'Vi sinh (CLEAR 12H, ROVAZYME) nên dùng cách thuốc sát trùng, diệt khuẩn ít nhất 2–3 ngày để vi sinh không bị chết.' },
        { q: 'Ao lót bạt và ao đất dùng liều giống nhau không?', a: 'Không. Theo nhãn CLEAR 12H, ao bạt dùng 15–20 lít dịch ủ/1.000 m³ mỗi 3 ngày, ao đất 10–15 lít/1.000 m³ mỗi 5 ngày.' },
        { q: 'Mua ở đâu, giao hàng thế nào?', a: 'Đặt qua hotline, Zalo hoặc để lại số điện thoại. Giao tận nơi toàn quốc, kiểm hàng rồi mới trả tiền (COD).' },
      ],
      cta: { title: 'Đừng đợi tôm rớt đáy mới xử lý', lead: 'Mỗi giờ khí độc tích tụ là tôm yếu thêm. Gọi ngay để được tư vấn liều cho ao của bà con.', button: 'Liên hệ để được tư vấn' },
      sticky: STICKY,
    },
  },

  'gan-khoe-ruot-day-vo-cung': {
    vi: {
      title: 'Bổ gan, men tiêu hóa, khoáng cho tôm: gan khỏe, ruột đầy | Thủy Sản Tím',
      description: 'Gan tụy nhạt màu, phân lỏng, tôm mềm vỏ? Bộ 3 HEPALIVER-FS, US LACTO, MIX 79 bồi bổ gan, bổ sung lợi khuẩn, khoáng tạt ao. Liên hệ để được tư vấn liều, giao tận ao.',
      campaign: 'Gan ruột & vỏ',
      theme: 'hoang-hon',
      hero: {
        eyebrow: 'Ao tôm thẻ, tôm sú · Cả vụ nuôi',
        title: 'Gan khỏe, ruột đầy, vỏ cứng —',
        titleEm: 'tôm ăn mạnh, lớn đều.',
        lead: 'Bộ 3 dinh dưỡng của Thủy Sản Tím: bồi bổ gan bằng sorbitol – methionine – betaine, bổ sung lợi khuẩn giúp tiêu hóa tốt, khoáng tạt ao giúp tôm lột xác đúng chu kỳ.',
        bullets: ['Liên hệ để được tư vấn liều theo ao', 'Giao tận ao · Kiểm hàng rồi trả tiền (COD)', 'Liều dùng in rõ trên nhãn từng sản phẩm'],
      },
      form: { ...FORM, title: 'Liên hệ để được tư vấn lịch bổ sung', lead: 'Để lại số điện thoại, Thủy Sản Tím liên hệ lại tư vấn lịch trộn ăn và tạt khoáng theo tuổi tôm của bà con.', issues: ['Gan tụy nhạt màu, teo gan', 'Phân lỏng, phân trắng, đứt khúc', 'Tôm mềm vỏ, lột xác kéo dài', 'Muốn bổ sung định kỳ cả vụ'] },
      signs: {
        kicker: 'Dấu hiệu cần chú ý',
        title: 'Tôm cần bồi bổ khi thấy',
        items: [
          { icon: 'shrimp', t: 'Gan tụy nhạt màu, sưng hoặc teo', d: 'Bóp nhẹ đầu tôm hoặc soi gan tụy khi kiểm tra nhá.' },
          { icon: 'alert', t: 'Phân lỏng, phân trắng, đứt khúc', d: 'Đường ruột yếu làm tôm hấp thụ kém thức ăn.' },
          { icon: 'refresh', t: 'Mềm vỏ, lột xác kéo dài', d: 'Thiếu khoáng trong nước, nhất là sau mưa lớn, độ mặn thấp.' },
          { icon: 'leaf', t: 'Ăn yếu, lớn không đều', d: 'Thức ăn dư trong nhá, tôm cùng ao chênh lệch kích cỡ.' },
          { icon: 'drop', t: 'Sau khi dùng thuốc, hóa chất', d: 'Gan tụy phải làm việc nhiều để giải độc, cần được bồi bổ.' },
        ],
        whyTitle: 'Vì sao gan, ruột và vỏ quyết định năng suất?',
        why: 'Gan tụy là nơi tiêu hóa và dự trữ năng lượng của tôm; đường ruột khỏe giúp hấp thụ thức ăn, giảm thức ăn thừa; khoáng đủ giúp tôm lột xác đúng chu kỳ. Ba yếu tố này yếu đi là tôm ăn kém, lớn chậm, dễ nhiễm bệnh.',
        limitsTitle: 'Chỉ tiêu tham khảo nên theo dõi',
        limits: [{ k: 'Độ kiềm', v: '120–180 mg/L' }, { k: 'pH', v: '7,5–8,5' }, { k: 'Độ mặn', v: '10–25‰' }, { k: 'Oxy hòa tan', v: '> 5 mg/L' }],
      },
      solution: {
        kicker: 'Giải pháp 3 tầng',
        title: 'Bổ gan — Khỏe ruột — Cứng vỏ',
        lead: 'Hai sản phẩm trộn ăn hằng ngày, một sản phẩm tạt ao định kỳ. Dễ làm, dùng suốt vụ.',
        steps: [
          { n: '01', t: 'Bồi bổ gan', d: 'Bổ sung sorbitol, methionine, betaine vào thức ăn; hỗ trợ bồi bổ, giải độc gan, giúp tôm tiêu hóa tốt.', p: 'hepaliver-fs' },
          { n: '02', t: 'Lợi khuẩn đường ruột', d: 'Bổ sung lợi khuẩn Bacillus vào thức ăn, giúp tôm tiêu hóa, hấp thụ tốt, hỗ trợ cải thiện phân lỏng, phân đứt khúc.', p: 'us-lacto' },
          { n: '03', t: 'Khoáng tạt ao', d: 'Bổ sung P, Ca, Mg vào môi trường ao, giúp tôm lột xác đúng chu kỳ, vỏ cứng dày, thịt săn chắc.', p: 'mix-79' },
        ],
      },
      products: {
        kicker: 'Sản phẩm chủ lực',
        title: 'Bộ 3 gan – ruột – vỏ',
        slugs: ['hepaliver-fs', 'us-lacto', 'mix-79'],
        roles: { 'hepaliver-fs': 'Bổ gan', 'us-lacto': 'Lợi khuẩn trộn ăn', 'mix-79': 'Khoáng tạt ao' },
        from: 'Chỉ từ',
        detail: 'Xem chi tiết',
        combo: 'Mua theo bộ được tư vấn lịch dùng theo tuổi tôm.',
      },
      usage: {
        kicker: 'Cách dùng theo nhãn',
        title: 'Lịch bổ sung hằng ngày',
        steps: [
          { when: 'Mỗi ngày · Trộn ăn', what: 'HEPALIVER-FS 5 ml/kg thức ăn, cho ăn 2 lần/ngày · US LACTO 5 g/kg thức ăn, cho ăn 2–3 lần/ngày. Hòa nước sạch, trộn đều, để yên 15 phút rồi cho ăn.' },
          { when: 'Khi tôm có dấu hiệu', what: 'Phân lỏng, phân trắng, đứt khúc: US LACTO 10–15 g/kg thức ăn · Gan yếu: HEPALIVER-FS 10 ml/kg thức ăn, 3–4 lần/ngày, liên tục 5 ngày.' },
          { when: 'Định kỳ · Tạt ao', what: 'MIX 79 5 kg/3.000 m³ nước, 2 ngày/lần; tôm cứng vỏ chậm: 3 kg/2.000 m³, liên tục 2 ngày. Tạt vào chiều tối.' },
        ],
        tips: [
          'Trộn ăn xong để yên 15 phút cho thuốc ngấm rồi mới cho tôm ăn.',
          'Tạt khoáng vào chiều tối, thời điểm tôm hay lột xác.',
          'Kiểm tra gan tụy và đường ruột khi kiểm tra nhá; gan bất thường kéo dài cần xét nghiệm.',
        ],
      },
      faq: [
        { q: 'Dùng suốt vụ có sao không?', a: 'Theo nhãn, HEPALIVER-FS và US LACTO có liều dùng hằng ngày suốt vụ nuôi. Bà con dùng đúng liều in trên nhãn hoặc theo tư vấn của Thủy Sản Tím.' },
        { q: 'Đây có phải thuốc chữa bệnh gan tụy không?', a: 'Không. Đây là sản phẩm bổ sung giúp hỗ trợ bồi bổ gan và tiêu hóa. Tôm có dấu hiệu bệnh nên được xét nghiệm (PCR, soi gan tụy) và hỏi bác sĩ thú y hoặc cán bộ kỹ thuật.' },
        { q: 'Trộn chung 2 sản phẩm vào một bữa được không?', a: 'Được trộn cùng bữa. Hòa từng sản phẩm với nước sạch theo đúng liều, trộn đều lên thức ăn, để yên 15 phút rồi cho ăn.' },
        { q: 'Khoáng tạt ao khác khoáng trộn ăn thế nào?', a: 'Khoáng tạt ao như MIX 79 bổ sung khoáng vào nước, tôm hấp thu qua mang và vỏ khi lột xác; khoáng trộn ăn đi qua đường tiêu hóa. Ao độ mặn thấp thường cần cả hai.' },
        { q: 'Mua ở đâu, giao hàng thế nào?', a: 'Đặt qua hotline, Zalo hoặc để lại số điện thoại. Giao tận nơi toàn quốc, kiểm hàng rồi mới trả tiền (COD).' },
      ],
      cta: { title: 'Tôm khỏe từ gan, lớn từ ruột', lead: 'Gọi ngay để được tư vấn lịch bổ sung cho cả vụ theo tuổi tôm và độ mặn ao của bà con.', button: 'Liên hệ để được tư vấn' },
      sticky: STICKY,
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
