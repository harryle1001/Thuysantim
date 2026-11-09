'use strict';
const express = require('express');
const rateLimit = require('express-rate-limit');
const M = require('../models');
const H = require('../utils/helpers');
const cart = require('../services/cart');
const pay = require('../services/payments');
const { query, one } = require('../config/db');
const { notifyNewOrder } = require('../services/mailer');
const config = require('../config');

const router = express.Router({ mergeParams: true });
const orderLimiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 15, standardHeaders: 'draft-7', legacyHeaders: false });
const lookupLimiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 30, standardHeaders: 'draft-7', legacyHeaders: false });

const METHODS = ['cod', 'vietqr', 'vnpay', 'momo', 'callback'];

function availableMethods(settings) {
  const enabled = settings.payments || {};
  return METHODS.filter((m) => {
    if (enabled[m] === false) return false;
    if (m === 'vnpay') return pay.vnpayEnabled();
    if (m === 'momo') return pay.momoEnabled();
    if (m === 'vietqr') return Boolean(settings.bank && settings.bank.accountNo);
    return true;
  });
}

/* ---------------- Cart API (JSON) ---------------- */
router.post('/cart/add', async (req, res) => {
  const pid = H.clampInt(req.body.pid, 1, 1e9, 0);
  const vi = H.clampInt(req.body.vi, 0, 50, 0);
  const qty = H.clampInt(req.body.qty, 1, 999, 1);
  const p = pid && (await M.products.byId(pid));
  const variants = p ? H.parseJSON(p.variants, []) : [];
  if (!p || !p.is_active || !variants[vi]) return res.status(404).json({ ok: false });
  cart.add(req, pid, vi, qty);
  const summary = await cart.resolve(req, req.locale, res.locals.settings);
  if (req.body.redirect) return res.redirect(`/${req.locale}/${req.body.redirect === 'checkout' ? 'checkout' : 'cart'}`);
  res.json({ ok: true, count: summary.count, message: res.locals.t('product.added') });
});

router.post('/cart/update', async (req, res) => {
  const pid = H.clampInt(req.body.pid, 1, 1e9, 0);
  const vi = H.clampInt(req.body.vi, 0, 50, 0);
  const qty = H.clampInt(req.body.qty, 0, 999, 0);
  cart.update(req, pid, vi, qty);
  const s = await cart.resolve(req, req.locale, res.locals.settings);
  if (!req.xhr && !(req.get('accept') || '').includes('json')) return res.redirect(`/${req.locale}/cart`);
  const m = res.locals.money;
  res.json({
    ok: true,
    count: s.count,
    subtotal: m(s.subtotal),
    shipping: s.shipping ? m(s.shipping) : res.locals.t('cart.free'),
    total: m(s.total),
    line: (() => {
      const l = s.lines.find((x) => x.pid === pid && x.vi === vi);
      return l ? m(l.amount) : null;
    })(),
  });
});

/* ---------------- Cart & checkout pages ---------------- */
router.get('/cart', async (req, res) => {
  const s = await cart.resolve(req, req.locale, res.locals.settings);
  res.locals.seo = { title: `${res.locals.t('cart.title')} — Thủy Sản Tím`, description: '', noindex: true };
  res.render('pages/cart', { page: 'cart', cart: s });
});

router.get('/checkout', async (req, res) => {
  const s = await cart.resolve(req, req.locale, res.locals.settings);
  if (!s.lines.length) return res.redirect(`/${req.locale}/cart`);
  res.locals.seo = { title: `${res.locals.t('checkout.title')} — Thủy Sản Tím`, description: '', noindex: true };
  res.render('pages/checkout', { page: 'cart', cart: s, methods: availableMethods(res.locals.settings), form: req.session.checkoutForm || {}, error: null });
});

router.post('/checkout', orderLimiter, async (req, res, next) => {
  const t = res.locals.t;
  const settings = res.locals.settings;
  const s = await cart.resolve(req, req.locale, settings);
  if (!s.lines.length) return res.redirect(`/${req.locale}/cart`);
  const b = req.body || {};
  const clean = (v, n) => (typeof v === 'string' ? v.trim().slice(0, n) : '');
  const form = {
    name: clean(b.name, 160),
    phone: clean(b.phone, 30),
    email: clean(b.email, 190),
    province: clean(b.province, 120),
    address: clean(b.address, 255),
    note: clean(b.note, 2000),
    method: clean(b.method, 20),
  };
  const methods = availableMethods(settings);
  let error = null;
  if (!form.name || !form.phone || !form.address) error = t('form.errors.required');
  else if (!H.isPhone(form.phone)) error = t('form.errors.phone');
  else if (form.email && !H.isEmail(form.email)) error = t('form.errors.email');
  else if (!methods.includes(form.method)) error = t('checkout.unavailable');
  if (error) {
    res.locals.seo = { title: t('checkout.title'), description: '', noindex: true };
    return res.status(422).render('pages/checkout', { page: 'cart', cart: s, methods, form, error });
  }
  req.session.checkoutForm = { name: form.name, phone: form.phone, email: form.email, province: form.province, address: form.address };

  const items = s.lines.map((l) => ({ pid: l.pid, sku: l.product.sku, name: l.product.title, variant: l.variant, price: l.price, qty: l.qty, amount: l.amount }));
  let code;
  for (let i = 0; i < 5; i += 1) {
    code = H.orderCode();
    // eslint-disable-next-line no-await-in-loop
    if (!(await one('SELECT id FROM orders WHERE code = ?', [code]))) break;
  }
  const order = {
    code,
    customer_name: form.name,
    phone: form.phone,
    email: form.email || null,
    province: form.province || null,
    address: form.address,
    note: form.note || null,
    items: JSON.stringify(items),
    subtotal: s.subtotal,
    shipping_fee: s.shipping,
    total: s.total,
    payment_method: form.method,
    locale: req.locale,
  };
  await query('INSERT INTO orders SET ?', [order]);
  req.session.cart = [];
  req.session.myOrders = [...(req.session.myOrders || []), code].slice(-20);
  notifyNewOrder(order, items);

  try {
    if (form.method === 'vnpay') {
      const url = pay.vnpayCreateUrl({ order, ip: req.ip, locale: req.locale, returnUrl: `${config.baseUrl}/payment/vnpay/return` });
      return res.redirect(url);
    }
    if (form.method === 'momo') {
      const url = await pay.momoCreate({ order, locale: req.locale, redirectUrl: `${config.baseUrl}/payment/momo/return`, ipnUrl: `${config.baseUrl}/payment/momo/ipn` });
      return res.redirect(url);
    }
  } catch (err) {
    console.error('[payment]', err.message);
    return res.redirect(`/${req.locale}/order/${code}?pay=failed`);
  }
  res.redirect(`/${req.locale}/order/${code}`);
});

/* ---------------- Order pages ---------------- */
async function renderOrder(req, res, order) {
  const settings = res.locals.settings;
  const items = H.parseJSON(order.items, []);
  const qr = order.payment_method === 'vietqr' && order.payment_status !== 'paid' && settings.bank ? pay.vietqrUrl(settings.bank, order.total, order.code) : null;
  res.locals.seo = { title: `${res.locals.t('order.code')} ${order.code} — Thủy Sản Tím`, description: '', noindex: true };
  res.render('pages/order', { page: 'cart', order, items, qr, payState: req.query.pay || '', canRetry: ['vnpay', 'momo'].includes(order.payment_method) && order.payment_status !== 'paid' });
}

router.get('/order/:code', async (req, res, next) => {
  const code = String(req.params.code).toUpperCase();
  if (!(req.session.myOrders || []).includes(code)) return res.redirect(`/${req.locale}/order-lookup`);
  const order = await M.orders.byCode(code);
  if (!order) return next();
  renderOrder(req, res, order);
});

router.post('/order/:code/retry', async (req, res, next) => {
  const code = String(req.params.code).toUpperCase();
  if (!(req.session.myOrders || []).includes(code)) return res.redirect(`/${req.locale}/order-lookup`);
  const order = await M.orders.byCode(code);
  if (!order || order.payment_status === 'paid') return next();
  try {
    if (order.payment_method === 'vnpay' && pay.vnpayEnabled()) return res.redirect(pay.vnpayCreateUrl({ order, ip: req.ip, locale: req.locale, returnUrl: `${config.baseUrl}/payment/vnpay/return` }));
    if (order.payment_method === 'momo' && pay.momoEnabled()) return res.redirect(await pay.momoCreate({ order, locale: req.locale, redirectUrl: `${config.baseUrl}/payment/momo/return`, ipnUrl: `${config.baseUrl}/payment/momo/ipn` }));
  } catch (err) {
    console.error('[payment retry]', err.message);
  }
  res.redirect(`/${req.locale}/order/${code}?pay=failed`);
});

router.get('/order-lookup', (req, res) => {
  res.locals.seo = { title: `${res.locals.t('order.lookupTitle')} — Thủy Sản Tím`, description: res.locals.t('order.lookupLead') };
  res.render('pages/lookup', { page: 'lookup', error: null, form: {} });
});

router.post('/order-lookup', lookupLimiter, async (req, res) => {
  const code = String(req.body.code || '').trim().toUpperCase().slice(0, 20);
  const phone = String(req.body.phone || '').replace(/\D/g, '');
  const order = code && (await M.orders.byCode(code));
  if (!order || order.phone.replace(/\D/g, '') !== phone || !phone) {
    res.locals.seo = { title: res.locals.t('order.lookupTitle'), description: '' };
    return res.status(404).render('pages/lookup', { page: 'lookup', error: res.locals.t('order.notFound'), form: { code, phone: req.body.phone } });
  }
  req.session.myOrders = [...(req.session.myOrders || []), order.code].slice(-20);
  res.redirect(`/${req.locale}/order/${order.code}`);
});

module.exports = router;
module.exports.availableMethods = availableMethods;
