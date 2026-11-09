'use strict';
const crypto = require('crypto');
const config = require('../config');

/* ======================= VietQR ======================= */
/** Build a VietQR image URL (img.vietqr.io — free, no API key). */
function vietqrUrl({ bin, accountNo, accountName }, amount, addInfo) {
  const params = new URLSearchParams({ amount: String(Math.round(amount)), addInfo, accountName: accountName || '' });
  return `https://img.vietqr.io/image/${encodeURIComponent(bin)}-${encodeURIComponent(accountNo)}-compact2.png?${params}`;
}

/* ======================= VNPay (v2.1.0) ======================= */
const vnpayEnabled = () => Boolean(config.vnpay.tmnCode && config.vnpay.hashSecret);

function vnpSortedQuery(params) {
  return Object.keys(params)
    .sort()
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(params[k]).replace(/%20/g, '+')}`)
    .join('&');
}

function vnpDate(d = new Date()) {
  const vn = new Date(d.getTime() + 7 * 3600 * 1000); // GMT+7
  const p = (n) => String(n).padStart(2, '0');
  return `${vn.getUTCFullYear()}${p(vn.getUTCMonth() + 1)}${p(vn.getUTCDate())}${p(vn.getUTCHours())}${p(vn.getUTCMinutes())}${p(vn.getUTCSeconds())}`;
}

function vnpayCreateUrl({ order, ip, locale, returnUrl }) {
  const params = {
    vnp_Version: '2.1.0',
    vnp_Command: 'pay',
    vnp_TmnCode: config.vnpay.tmnCode,
    vnp_Locale: locale === 'vi' ? 'vn' : 'en',
    vnp_CurrCode: 'VND',
    vnp_TxnRef: order.code,
    vnp_OrderInfo: `Thanh toan don hang ${order.code}`,
    vnp_OrderType: 'other',
    vnp_Amount: String(Math.round(order.total) * 100),
    vnp_ReturnUrl: returnUrl,
    vnp_IpAddr: ip || '127.0.0.1',
    vnp_CreateDate: vnpDate(),
    vnp_ExpireDate: vnpDate(new Date(Date.now() + 15 * 60 * 1000)),
  };
  const signData = vnpSortedQuery(params);
  const hash = crypto.createHmac('sha512', config.vnpay.hashSecret).update(Buffer.from(signData, 'utf-8')).digest('hex');
  return `${config.vnpay.url}?${signData}&vnp_SecureHash=${hash}`;
}

/** Verify VNPay return/IPN query. Returns { valid, code, txnRef, amount, transactionNo }. */
function vnpayVerify(query) {
  const params = { ...query };
  const secureHash = params.vnp_SecureHash;
  delete params.vnp_SecureHash;
  delete params.vnp_SecureHashType;
  const signData = vnpSortedQuery(params);
  const hash = crypto.createHmac('sha512', config.vnpay.hashSecret).update(Buffer.from(signData, 'utf-8')).digest('hex');
  const valid = Boolean(secureHash) && secureHash.length === hash.length && crypto.timingSafeEqual(Buffer.from(hash), Buffer.from(String(secureHash).toLowerCase()));
  return {
    valid,
    code: params.vnp_ResponseCode,
    status: params.vnp_TransactionStatus,
    txnRef: params.vnp_TxnRef,
    amount: Number(params.vnp_Amount || 0) / 100,
    transactionNo: params.vnp_TransactionNo,
  };
}

/* ======================= MoMo (captureWallet v2) ======================= */
const momoEnabled = () => Boolean(config.momo.partnerCode && config.momo.accessKey && config.momo.secretKey);

function momoSign(raw) {
  return crypto.createHmac('sha256', config.momo.secretKey).update(raw).digest('hex');
}

async function momoCreate({ order, redirectUrl, ipnUrl, locale }) {
  const requestId = `${order.code}-${Date.now()}`;
  const amount = String(Math.round(order.total));
  const orderInfo = `Thanh toan don hang ${order.code}`;
  const requestType = 'captureWallet';
  const extraData = '';
  const raw = `accessKey=${config.momo.accessKey}&amount=${amount}&extraData=${extraData}&ipnUrl=${ipnUrl}&orderId=${requestId}&orderInfo=${orderInfo}&partnerCode=${config.momo.partnerCode}&redirectUrl=${redirectUrl}&requestId=${requestId}&requestType=${requestType}`;
  const body = {
    partnerCode: config.momo.partnerCode,
    requestId,
    amount,
    orderId: requestId,
    orderInfo,
    redirectUrl,
    ipnUrl,
    lang: locale === 'vi' ? 'vi' : 'en',
    requestType,
    extraData,
    signature: momoSign(raw),
  };
  const resp = await fetch(config.momo.endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(15000),
  });
  const data = await resp.json();
  if (data.resultCode !== 0 || !data.payUrl) {
    const e = new Error(`MoMo: ${data.message || 'create failed'}`);
    e.momo = data;
    throw e;
  }
  return data.payUrl;
}

/** Verify MoMo redirect/IPN payload signature. */
function momoVerify(p) {
  const raw = `accessKey=${config.momo.accessKey}&amount=${p.amount}&extraData=${p.extraData || ''}&message=${p.message}&orderId=${p.orderId}&orderInfo=${p.orderInfo}&orderType=${p.orderType}&partnerCode=${p.partnerCode}&payType=${p.payType}&requestId=${p.requestId}&responseTime=${p.responseTime}&resultCode=${p.resultCode}&transId=${p.transId}`;
  const sig = momoSign(raw);
  const valid = Boolean(p.signature) && sig.length === String(p.signature).length && crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(String(p.signature)));
  return { valid, success: String(p.resultCode) === '0', orderCode: String(p.orderId || '').split('-')[0], amount: Number(p.amount), transId: p.transId };
}

module.exports = { vietqrUrl, vnpayEnabled, vnpayCreateUrl, vnpayVerify, momoEnabled, momoCreate, momoVerify };
