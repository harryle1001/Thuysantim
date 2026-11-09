'use strict';
const { products, localizeProduct } = require('../models');

const MAX_QTY = 999;

function getCart(req) {
  if (!Array.isArray(req.session.cart)) req.session.cart = [];
  return req.session.cart;
}

function add(req, productId, variantIndex, qty) {
  const cart = getCart(req);
  const line = cart.find((l) => l.pid === productId && l.vi === variantIndex);
  if (line) line.qty = Math.min(MAX_QTY, line.qty + qty);
  else cart.push({ pid: productId, vi: variantIndex, qty: Math.min(MAX_QTY, qty) });
}

function update(req, productId, variantIndex, qty) {
  const cart = getCart(req);
  const idx = cart.findIndex((l) => l.pid === productId && l.vi === variantIndex);
  if (idx === -1) return;
  if (qty <= 0) cart.splice(idx, 1);
  else cart[idx].qty = Math.min(MAX_QTY, qty);
}

/** Resolve session cart into priced lines using current DB prices. */
async function resolve(req, locale, settings) {
  const cart = getCart(req);
  const rows = await products.byIds([...new Set(cart.map((l) => l.pid))]);
  const byId = new Map(rows.map((r) => [r.id, localizeProduct(r, locale)]));
  const lines = [];
  for (const l of cart) {
    const p = byId.get(l.pid);
    const variant = p && p.variantList[l.vi];
    if (!variant) continue;
    const price = Number(variant.price) || 0;
    lines.push({ product: p, pid: p.id, vi: l.vi, variant: variant.label, price, qty: l.qty, amount: price * l.qty });
  }
  // drop stale lines
  req.session.cart = lines.map((l) => ({ pid: l.pid, vi: l.vi, qty: l.qty }));
  const subtotal = lines.reduce((s, l) => s + l.amount, 0);
  const ship = settings.shipping || { fee: 0, freeFrom: 0 };
  const shipping = !lines.length || (ship.freeFrom && subtotal >= ship.freeFrom) ? 0 : Number(ship.fee) || 0;
  return { lines, subtotal, shipping, total: subtotal + shipping, count: lines.reduce((s, l) => s + l.qty, 0) };
}

module.exports = { getCart, add, update, resolve };
