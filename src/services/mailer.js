'use strict';
const nodemailer = require('nodemailer');
const config = require('../config');
const { money, escapeHtml } = require('../utils/helpers');

let transporter = null;
function getTransport() {
  if (!config.mail.host || !config.mail.user) return null;
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: config.mail.host,
      port: config.mail.port,
      secure: config.mail.secure,
      auth: { user: config.mail.user, pass: config.mail.pass },
    });
  }
  return transporter;
}

/** Fire-and-forget email; never throws into the request cycle. */
async function send({ to, subject, html }) {
  const t = getTransport();
  if (!t || !to) return false;
  try {
    await t.sendMail({ from: `"Thủy Sản Tím" <${config.mail.from}>`, to, subject, html });
    return true;
  } catch (err) {
    console.error('[mail] gửi thất bại:', err.message);
    return false;
  }
}

const wrap = (title, inner) => `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border:1px solid #eee;border-radius:12px;overflow:hidden">
  <div style="background:linear-gradient(135deg,#2e1065,#6d28d9);color:#fff;padding:20px 24px;font-size:18px;font-weight:bold">THỦY SẢN TÍM — ${escapeHtml(title)}</div>
  <div style="padding:20px 24px;color:#1f1b2e;font-size:14px;line-height:1.6">${inner}</div>
</div>`;

function orderHtml(order, items) {
  const rows = items
    .map((i) => `<tr><td style="padding:6px 0">${escapeHtml(i.name)} — ${escapeHtml(i.variant)}</td><td style="text-align:right">${i.qty} × ${money(i.price)}</td></tr>`)
    .join('');
  return `<p><b>Mã đơn:</b> ${order.code}<br><b>Khách hàng:</b> ${escapeHtml(order.customer_name)} — ${escapeHtml(order.phone)}<br><b>Địa chỉ:</b> ${escapeHtml(order.address)}, ${escapeHtml(order.province || '')}<br><b>Thanh toán:</b> ${order.payment_method.toUpperCase()}</p>
  <table style="width:100%;border-collapse:collapse">${rows}</table>
  <p style="font-size:16px"><b>Tổng cộng: ${money(order.total)}</b></p>`;
}

function notifyNewOrder(order, items) {
  const html = wrap('Đơn hàng mới', orderHtml(order, items));
  send({ to: config.mail.notify, subject: `[Đơn hàng mới] ${order.code} — ${money(order.total)}`, html });
  if (order.email) send({ to: order.email, subject: `Xác nhận đơn hàng ${order.code} — Thủy Sản Tím`, html: wrap('Xác nhận đơn hàng', `<p>Cảm ơn quý khách đã đặt hàng. Chúng tôi sẽ liên hệ xác nhận trong thời gian sớm nhất.</p>${orderHtml(order, items)}`) });
}

function notifyInquiry(inq) {
  const html = wrap(
    'Yêu cầu mới',
    `<p><b>Loại:</b> ${escapeHtml(inq.kind)}<br><b>Họ tên:</b> ${escapeHtml(inq.name)}<br><b>Điện thoại:</b> ${escapeHtml(inq.phone)}<br><b>Email:</b> ${escapeHtml(inq.email || '')}<br><b>Đơn vị:</b> ${escapeHtml(inq.company || '')}<br><b>Tỉnh:</b> ${escapeHtml(inq.province || '')}<br><b>Sản phẩm:</b> ${escapeHtml(inq.product || '')} ${escapeHtml(inq.quantity || '')}</p><p>${escapeHtml(inq.message || '').replace(/\n/g, '<br>')}</p>`
  );
  send({ to: config.mail.notify, subject: `[${inq.kind}] ${inq.name} — ${inq.phone}`, html });
}

module.exports = { send, notifyNewOrder, notifyInquiry };
