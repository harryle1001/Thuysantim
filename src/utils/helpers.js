'use strict';
const crypto = require('crypto');

const LOCALES = ['vi', 'en', 'zh'];
const DEFAULT_LOCALE = 'vi';

/** Vietnamese-aware slug: "Men vi sinh Đặc trị" -> "men-vi-sinh-dac-tri" */
function slugify(input) {
  return String(input || '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/gi, 'd')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 150);
}

/** Parse a JSON column safely. */
function parseJSON(value, fallback) {
  if (value === null || value === undefined || value === '') return fallback;
  if (typeof value === 'object') return value;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

/** Pick a localized string from {vi,en,zh}, falling back to vi then any. */
function tr(field, locale) {
  const obj = parseJSON(field, null);
  if (obj === null) return '';
  if (typeof obj === 'string') return obj;
  return obj[locale] || obj[DEFAULT_LOCALE] || Object.values(obj).find(Boolean) || '';
}

const NUMBER_LOCALE = { vi: 'vi-VN', en: 'en-US', zh: 'zh-CN' };

function money(amount, locale = 'vi') {
  const n = Number(amount) || 0;
  const s = new Intl.NumberFormat(NUMBER_LOCALE[locale] || 'vi-VN').format(Math.round(n));
  return locale === 'vi' ? `${s} ₫` : `₫${s}`;
}

function formatDate(d, locale = 'vi') {
  if (!d) return '';
  const date = d instanceof Date ? d : new Date(d);
  return new Intl.DateTimeFormat(NUMBER_LOCALE[locale] || 'vi-VN', { day: '2-digit', month: 'long', year: 'numeric' }).format(date);
}

function formatDateTime(d) {
  if (!d) return '';
  const date = d instanceof Date ? d : new Date(d);
  return new Intl.DateTimeFormat('vi-VN', { dateStyle: 'short', timeStyle: 'short', timeZone: 'Asia/Ho_Chi_Minh' }).format(date);
}

function escapeHtml(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Short human-friendly order code: TST-7K2Q9M */
function orderCode() {
  const alphabet = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
  const bytes = crypto.randomBytes(6);
  let s = '';
  for (const b of bytes) s += alphabet[b % alphabet.length];
  return `TST${s}`;
}

function clampInt(v, min, max, d) {
  const n = parseInt(v, 10);
  if (Number.isNaN(n)) return d;
  return Math.min(max, Math.max(min, n));
}

function isPhone(v) {
  return /^[+0-9][0-9 .-]{7,16}$/.test(String(v || '').trim());
}

function isEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v || '').trim());
}

module.exports = {
  LOCALES,
  DEFAULT_LOCALE,
  slugify,
  parseJSON,
  tr,
  money,
  formatDate,
  formatDateTime,
  escapeHtml,
  orderCode,
  clampInt,
  isPhone,
  isEmail,
};
