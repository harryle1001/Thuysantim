'use strict';
/* Payment gateway callbacks (no locale prefix, no CSRF — verified by HMAC signatures). */
const express = require('express');
const M = require('../models');
const pay = require('../services/payments');

const router = express.Router();

async function markPaid(code, amount, ref) {
  const order = await M.orders.byCode(code);
  if (!order) return { order: null, rsp: 'not_found' };
  if (Math.round(Number(order.total)) !== Math.round(Number(amount))) return { order, rsp: 'amount' };
  if (order.payment_status === 'paid') return { order, rsp: 'already' };
  await M.orders.setPayment(code, 'paid', ref);
  return { order, rsp: 'ok' };
}

/* ---------- VNPay ---------- */
router.get('/vnpay/return', async (req, res) => {
  const v = pay.vnpayVerify(req.query);
  const order = v.txnRef ? await M.orders.byCode(v.txnRef) : null;
  const locale = (order && order.locale) || 'vi';
  if (!order) return res.redirect(`/${locale}`);
  req.session.myOrders = [...(req.session.myOrders || []), order.code].slice(-20);
  if (v.valid && v.code === '00') {
    await markPaid(order.code, v.amount, `VNPAY:${v.transactionNo}`);
    return res.redirect(`/${locale}/order/${order.code}?pay=success`);
  }
  if (v.valid) await M.orders.setPayment(order.code, 'failed', null);
  res.redirect(`/${locale}/order/${order.code}?pay=failed`);
});

router.get('/vnpay/ipn', async (req, res) => {
  const v = pay.vnpayVerify(req.query);
  if (!v.valid) return res.json({ RspCode: '97', Message: 'Invalid signature' });
  const order = await M.orders.byCode(v.txnRef);
  if (!order) return res.json({ RspCode: '01', Message: 'Order not found' });
  if (Math.round(Number(order.total)) !== Math.round(v.amount)) return res.json({ RspCode: '04', Message: 'Invalid amount' });
  if (order.payment_status === 'paid') return res.json({ RspCode: '02', Message: 'Order already confirmed' });
  if (v.code === '00' && v.status === '00') await M.orders.setPayment(order.code, 'paid', `VNPAY:${v.transactionNo}`);
  else await M.orders.setPayment(order.code, 'failed', null);
  res.json({ RspCode: '00', Message: 'Confirm Success' });
});

/* ---------- MoMo ---------- */
router.get('/momo/return', async (req, res) => {
  const v = pay.momoVerify(req.query);
  const order = v.orderCode ? await M.orders.byCode(v.orderCode) : null;
  const locale = (order && order.locale) || 'vi';
  if (!order) return res.redirect(`/${locale}`);
  req.session.myOrders = [...(req.session.myOrders || []), order.code].slice(-20);
  if (v.valid && v.success) {
    await markPaid(order.code, v.amount, `MOMO:${v.transId}`);
    return res.redirect(`/${locale}/order/${order.code}?pay=success`);
  }
  res.redirect(`/${locale}/order/${order.code}?pay=failed`);
});

router.post('/momo/ipn', express.json(), async (req, res) => {
  const v = pay.momoVerify(req.body || {});
  if (v.valid && v.success) await markPaid(v.orderCode, v.amount, `MOMO:${v.transId}`);
  else if (v.valid) await M.orders.setPayment(v.orderCode, 'failed', null);
  res.status(204).end();
});

module.exports = router;
