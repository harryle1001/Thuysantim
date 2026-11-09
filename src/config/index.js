'use strict';
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env'), quiet: true });

const env = process.env;
const bool = (v, d = false) => (v === undefined || v === '' ? d : ['1', 'true', 'yes', 'on'].includes(String(v).toLowerCase()));

const config = {
  env: env.NODE_ENV || 'development',
  isProd: env.NODE_ENV === 'production',
  port: Number(env.PORT) || 3000,
  baseUrl: (env.BASE_URL || `http://localhost:${Number(env.PORT) || 3000}`).replace(/\/$/, ''),
  sessionSecret: env.SESSION_SECRET || 'dev-only-change-me-please-0f3c9a',
  trustProxy: bool(env.TRUST_PROXY, true),

  db: {
    host: env.DB_HOST || '127.0.0.1',
    port: Number(env.DB_PORT) || 3306,
    user: env.DB_USER || 'root',
    password: env.DB_PASSWORD || '',
    database: env.DB_NAME || 'thuysantim',
  },
  autoMigrate: bool(env.AUTO_MIGRATE, true),
  autoSeed: bool(env.AUTO_SEED, true),

  admin: {
    email: env.ADMIN_EMAIL || 'admin@thuysantim.vn',
    password: env.ADMIN_PASSWORD || 'ThuySanTim@2026',
  },

  mail: {
    host: env.SMTP_HOST || '',
    port: Number(env.SMTP_PORT) || 465,
    secure: bool(env.SMTP_SECURE, true),
    user: env.SMTP_USER || '',
    pass: env.SMTP_PASS || '',
    from: env.MAIL_FROM || env.SMTP_USER || '',
    notify: env.MAIL_NOTIFY || '',
  },

  vnpay: {
    tmnCode: env.VNP_TMN_CODE || '',
    hashSecret: env.VNP_HASH_SECRET || '',
    url: env.VNP_URL || 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html',
  },
  momo: {
    partnerCode: env.MOMO_PARTNER_CODE || '',
    accessKey: env.MOMO_ACCESS_KEY || '',
    secretKey: env.MOMO_SECRET_KEY || '',
    endpoint: env.MOMO_ENDPOINT || 'https://test-payment.momo.vn/v2/gateway/api/create',
  },
};

if (config.isProd && config.sessionSecret.startsWith('dev-only')) {
  console.warn('[config] CẢNH BÁO: SESSION_SECRET chưa được đặt trong môi trường production.');
}

module.exports = config;
