'use strict';
// Ảnh miễn phí từ Pexels (giấy phép Pexels: dùng thương mại, không bắt buộc ghi nguồn). Xem CREDITS.md.
// Mỗi bài chọn 1 ảnh + điểm lấy nét (x%, y%) để các bài dùng chung ảnh vẫn có khung cắt khác nhau.
const PHOTO = {
  harvest: 32230041, hand: 16521533, small: 11784965, pile: 5273798, shrimpwater: 8351657,
  pondA: 5786581, pondB: 5795822, pondC: 5806533, dike: 12220818, farm: 6872322, farm2: 6872324, farmland: 4220575, canal: 9210283,
  cyl: 38409888, beaker: 36515391, tube: 38093935, pipette: 39926423, rack: 7722793, flask: 7722652,
};
const RULES = [
  [/thu-hoach/, 'hand', 50, 50], [/tom-30-ngay/, 'small', 40, 40], [/chon-tom-giong/, 'shrimpwater', 50, 50],
  [/test-kit/, 'cyl', 50, 50], [/doc-nhan/, 'pipette', 50, 55], [/bao-quan/, 'rack', 50, 55], [/chon-men-vi-sinh/, 'beaker', 50, 40],
  [/tinh-the-tich/, 'pondA', 50, 50], [/chi-phi/, 'farm', 50, 50], [/ao-bat-hay-ao-dat/, 'farm2', 50, 55],
  [/oxy|nang-nong/, 'pondB', 50, 50], [/nhot|day-ao-bat/, 'pondC', 50, 50], [/biofloc/, 'pondA', 30, 60],
  [/chuan-bi-ao|truoc-khi-tha|a-den-z/, 'dike', 50, 55], [/khi-doc|h2s/, 'pondC', 30, 40], [/mua-mua/, 'canal', 50, 50],
  [/gay-mau|tao-lam|diet-tao/, 'pondA', 65, 45], [/kiem/, 'flask', 50, 55],
  [/sat-trung/, 'tube', 50, 45], [/khoang/, 'rack', 40, 40], [/yucca/, 'beaker', 55, 55], [/u-vi-sinh/, 'cyl', 25, 50],
  [/vi-sinh|men-tieu-hoa/, 'pipette', 50, 35], [/bo-gan|axit-amin|tron-thuoc|lich-dung/, 'tube', 50, 55],
  [/mem-vo|cham-lot/, 'pile', 40, 50], [/cham-lon/, 'shrimpwater', 50, 50], [/bo-an|nha-sang|thuc-an/, 'shrimpwater', 40, 45],
  [/den-mang|vang-mang/, 'hand', 40, 55], [/noi-dau/, 'pondB', 70, 50], [/duong-ruot|gan-tuy|6-benh/, 'pile', 60, 55],
  [/de-khang/, 'small', 55, 50],
];
function pick(slug, i) {
  for (const [re, key, x, y] of RULES) if (re.test(slug)) return { id: PHOTO[key], x, y };
  const keys = ['pondA', 'pondB', 'pondC', 'dike', 'farm', 'farm2'];
  return { id: PHOTO[keys[i % keys.length]], x: 50, y: 50 };
}
// ảnh minh họa trong thân bài (theo nhóm đề tài)
const INLINE = {
  pond: [5786581, 5795822, 5806533, 12220818, 6872324],
  shrimp: [16521533, 11784965, 5273798, 8351657],
  lab: [38409888, 36515391, 38093935, 39926423, 7722793],
};
module.exports = { PHOTO, pick, INLINE };
