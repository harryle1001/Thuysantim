# THỦY SẢN TÍM — Website thương mại thuốc & chế phẩm thủy sản cao cấp

Website đa ngôn ngữ **Tiếng Việt · English · 中文**, có catalog sản phẩm, giỏ hàng, thanh toán online, tra cứu bệnh, blog kỹ thuật và trang quản trị đầy đủ.

**Công nghệ:** Node.js 18+ · Express 5 · EJS (render phía server, chuẩn SEO) · MySQL/MariaDB · CSS/JS thuần, không cần bước build.

---

## Tính năng

| Khu vực | Chi tiết |
|---|---|
| **Trang chủ** | Hero động (sóng nước, bong bóng, phân tử), số liệu đếm tăng, 6 nhóm sản phẩm, sản phẩm nổi bật, quy trình 4 giai đoạn, R&D/Lab, tra cứu bệnh nhanh, đánh giá khách hàng, blog, form "gọi lại cho tôi" |
| **Sản phẩm** | Lọc theo danh mục / tôm / cá, tìm kiếm, sắp xếp giá; trang chi tiết có nhiều quy cách & giá, tab Mô tả / Thành phần / Công dụng / Liều dùng, bệnh liên quan, sản phẩm liên quan, thanh mua hàng cố định trên mobile |
| **Ảnh bao bì tự động** | Khi chưa có ảnh thật, hệ thống tự vẽ ảnh bao bì SVG (túi / chai) theo màu chủ đạo của từng sản phẩm |
| **Tra cứu bệnh** | 8 bệnh tôm cá phổ biến: triệu chứng, nguyên nhân, phòng ngừa, hướng xử lý, sản phẩm hỗ trợ; tìm kiếm tức thì không phân biệt dấu |
| **Giỏ hàng & đặt hàng** | Giỏ hàng lưu theo phiên, phí ship & ngưỡng miễn phí, kiểm tra dữ liệu, mã đơn ngẫu nhiên, tra cứu đơn bằng mã + SĐT |
| **Thanh toán** | COD · **VietQR** (tự sinh mã QR có sẵn số tiền + mã đơn) · **VNPay** · **MoMo** · Đặt hàng — nhân viên gọi lại |
| **Form** | Liên hệ, đăng ký đại lý, yêu cầu báo giá, nhận bản tin, gọi lại — có chống spam (honeypot + giới hạn tần suất), gửi email thông báo |
| **Admin `/admin`** | Tổng quan (KPI + biểu đồ doanh thu 14 ngày), Đơn hàng, Liên hệ & Báo giá, Sản phẩm (nhập 3 ngôn ngữ, nhiều quy cách, upload ảnh), Danh mục, Bài viết (Markdown), Tra cứu bệnh, Cài đặt (thông tin công ty, ngân hàng VietQR, phí ship, bật/tắt phương thức thanh toán), đổi mật khẩu |
| **SEO** | URL `/vi` `/en` `/zh`, hreflang, canonical, Open Graph, JSON-LD (Organization, Product, Article), `sitemap.xml` đa ngôn ngữ, `robots.txt` |
| **Bảo mật** | Helmet + CSP có nonce, CSRF token, session lưu MySQL, bcrypt, giới hạn đăng nhập sai, xác thực chữ ký HMAC cho VNPay/MoMo, kiểm tra số tiền khi IPN |
| **Hiệu năng & trải nghiệm** | Gzip, cache tĩnh, ảnh lazy-load, hỗ trợ `prefers-reduced-motion`, điều hướng bằng bàn phím, responsive từ 360px |

Ảnh upload được lưu **trong MySQL** (bảng `media`), nên **không bị mất khi Hostinger deploy lại** từ GitHub.

---

## Chạy trên máy (local)

```bash
cp .env.example .env
```

Mở `.env`, điền thông tin MySQL local, đặt `NODE_ENV=development`, `PORT=3000` và `BASE_URL=http://localhost:3000`. Sau đó:

```bash
npm install
```

```bash
npm run dev
```

Mở http://localhost:3000. Lần chạy đầu tiên, app sẽ **tự tạo bảng, nạp dữ liệu mẫu và tạo tài khoản admin** theo `ADMIN_EMAIL` / `ADMIN_PASSWORD`.

| Lệnh | Tác dụng |
|---|---|
| `npm start` | Chạy production |
| `npm run dev` | Chạy và tự khởi động lại khi sửa code |
| `npm test` | Unit test (không cần DB) |
| `npm run check` | Kiểm tra cú pháp toàn bộ template & module |
| `npm run db:seed` | Nạp dữ liệu mẫu nếu DB trống |
| `npm run db:reset` | **Xóa sạch** và nạp lại dữ liệu mẫu (bị chặn trên production) |
| `node scripts/e2e.js` | Kiểm thử end-to-end bằng trình duyệt; cần server đang chạy và Playwright |

---

## Deploy lên Hostinger (gói Business / Cloud)

### Bước 1 — Tạo database MySQL
hPanel → **Websites → Dashboard → Databases → MySQL Databases** → tạo database và user. Ghi lại **tên DB, user, mật khẩu** (dạng `u123456789_...`). Host thường là `localhost`.

### Bước 2 — Tạo Node.js Web App từ GitHub
1. hPanel → **Websites → Add Website → Node.js Web App**.
2. Chọn **Import Git repository**, kết nối GitHub và chọn repo này, nhánh `main`.
3. Cấu hình build:
   - **Node version:** 22.x (hoặc 20.x)
   - **Build command:** `npm install` (hoặc để trống nếu Hostinger tự chạy install)
   - **Entry file:** `server.js`
   - **Output directory:** để trống
4. **Environment variables:** thêm các biến trong `.env.example`. Bắt buộc có:

   | Biến | Ví dụ |
   |---|---|
   | `NODE_ENV` | `production` |
   | `BASE_URL` | `https://thuysantim.vn` |
   | `SESSION_SECRET` | chuỗi ngẫu nhiên ≥ 32 ký tự |
   | `DB_HOST` / `DB_NAME` / `DB_USER` / `DB_PASSWORD` | thông tin từ Bước 1 |
   | `ADMIN_EMAIL` / `ADMIN_PASSWORD` | tài khoản quản trị đầu tiên |

5. Bấm **Deploy**. Lần chạy đầu, app tự tạo bảng và nạp dữ liệu mẫu.
6. Gắn tên miền và bật **SSL** trong hPanel.

Từ đó, **mỗi lần push lên nhánh `main`, Hostinger sẽ tự build và deploy lại**. Biến môi trường được giữ nguyên qua các lần deploy.

### Bước 3 — Sau khi website chạy
1. Vào `https://tên-miền/admin` để đăng nhập, rồi **đổi mật khẩu** ngay.
2. **Cài đặt:** sửa hotline, Zalo, địa chỉ, tài khoản ngân hàng VietQR, phí ship.
3. **Sản phẩm / Bài viết / Tra cứu bệnh:** thay dữ liệu mẫu bằng dữ liệu thật và upload ảnh.
4. Muốn nhận email khi có đơn mới: tạo hộp mail trong Hostinger Email rồi điền `SMTP_*` và `MAIL_NOTIFY`.

### Kích hoạt VNPay / MoMo
- **VNPay:** đăng ký merchant tại vnpay.vn, nhận `TMN_CODE` + `HASH_SECRET`, điền vào biến môi trường.
  - Khai báo **IPN URL:** `https://tên-miền/payment/vnpay/ipn`.
  - Khi chạy thật, đổi `VNP_URL` sang `https://pay.vnpay.vn/vpcpay.html`.
- **MoMo:** đăng ký tại business.momo.vn, nhận `PARTNER_CODE`, `ACCESS_KEY`, `SECRET_KEY`.
  - IPN được gửi tự động về `https://tên-miền/payment/momo/ipn`.
  - Khi chạy thật, đổi `MOMO_ENDPOINT` sang `https://payment.momo.vn/v2/gateway/api/create`.
- Nếu chưa có key, phương thức tương ứng **tự động ẩn** ở trang thanh toán.

---

## Claude Code trên GitHub

File `.github/workflows/claude.yml` cho phép tag **`@claude`** trong Issue hoặc Pull Request để Claude sửa code, trả lời góp ý review hoặc sửa lỗi CI. Để bật tính năng này:
1. Cài Claude GitHub App cho repo, ví dụ bằng lệnh `/install-github-app` trong Claude Code.
2. Thêm secret `ANTHROPIC_API_KEY` tại **Settings → Secrets and variables → Actions**.

File `.github/workflows/ci.yml` chạy unit test, kiểm tra template và kiểm thử end-to-end với MySQL mỗi lần push hoặc mở PR.

---

## Cấu trúc thư mục

```
server.js                 Điểm khởi động (Entry file trên Hostinger)
src/
  app.js                  Cấu hình Express, bảo mật, session, routes
  config/                 Biến môi trường, kết nối MySQL
  db/                     schema.sql, migrate, seed, dữ liệu mẫu 3 ngôn ngữ
  i18n/                   vi.js, en.js, zh.js — chữ trên giao diện
  middleware/             Ngôn ngữ, CSRF, đăng nhập admin, Markdown
  models/                 Truy vấn sản phẩm, bài viết, bệnh, đơn hàng, cài đặt
  routes/                 public (trang), shop (giỏ/đặt hàng), payment (VNPay/MoMo), admin
  services/               payments, mailer, cart, packshot (ảnh bao bì SVG)
views/                    Template EJS: pages/, partials/, admin/
public/                   css/, js/, img/
test/                     Unit test (node:test)
scripts/                  check.js, e2e.js
```

> **Lưu ý nội dung:** Thông tin sản phẩm, liều dùng, chứng nhận, số liệu và đánh giá khách hàng hiện là **dữ liệu mẫu** để minh họa giao diện. Hãy thay bằng thông tin thật và đúng với giấy phép lưu hành trước khi công bố.
