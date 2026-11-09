'use strict';
const crypto = require('crypto');
const { marked } = require('marked');
const sanitizeHtml = require('sanitize-html');
const dict = { vi: require('../i18n/vi'), en: require('../i18n/en'), zh: require('../i18n/zh') };
const H = require('../utils/helpers');
const { getSettings } = require('../models');
const config = require('../config');
const { icon } = require('../utils/icons');

marked.setOptions({ gfm: true, breaks: false });

function renderMarkdown(md) {
  return sanitizeHtml(marked.parse(String(md || '')), {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'h1', 'h2', 'h3', 'figure', 'figcaption']),
    allowedAttributes: { a: ['href', 'title', 'target', 'rel'], img: ['src', 'alt', 'title', 'loading'] },
    transformTags: { a: sanitizeHtml.simpleTransform('a', { rel: 'noopener' }) },
  });
}

/** Turn multi-line text into <p>/<br> safely. */
function nl2p(text) {
  return String(text || '')
    .split(/\n{2,}/)
    .map((p) => `<p>${H.escapeHtml(p).replace(/\n/g, '<br>')}</p>`)
    .join('');
}

/** Generic deep getter: t('nav.home') */
function makeT(locale) {
  const d = dict[locale] || dict.vi;
  return (key) => key.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), d) ?? key;
}

/** Locale + common view locals for public routes mounted at /:lang */
function localeMiddleware(req, res, next) {
  const lang = req.params.lang;
  if (!H.LOCALES.includes(lang)) return next('route');
  req.locale = lang;
  res.locals.locale = lang;
  res.locals.t = makeT(lang);
  res.locals.L = dict[lang];
  res.locals.tr = (field) => H.tr(field, lang);
  res.locals.money = (n) => H.money(n, lang);
  res.locals.date = (d) => H.formatDate(d, lang);
  res.locals.url = (p = '') => `/${lang}${p}`;
  // path without lang prefix — used by the language switcher & hreflang
  res.locals.pathRest = req.originalUrl.replace(new RegExp(`^/${lang}`), '').split('?')[0] || '';
  // Parameters that produce a genuinely different page keep their own canonical URL.
  const keep = ['category', 'species', 'topic', 'kind', 'page'].filter((k) => {
    const v = req.query[k];
    return typeof v === 'string' && /^[a-z0-9-]{1,60}$/i.test(v) && !(k === 'page' && v === '1');
  });
  res.locals.canonicalQuery = keep.length ? `?${keep.map((k) => `${k}=${req.query[k]}`).join('&')}` : '';
  req.session.locale = lang;
  next();
}

async function commonLocals(req, res, next) {
  try {
    res.locals.settings = await getSettings();
  } catch (e) {
    return next(e);
  }
  res.locals.config = { baseUrl: config.baseUrl };
  res.locals.H = H;
  res.locals.icon = icon;
  res.locals.md = renderMarkdown;
  res.locals.nl2p = nl2p;
  res.locals.LOCALES = H.LOCALES;
  res.locals.dicts = dict;
  res.locals.currentPath = req.path;
  res.locals.cartCount = (req.session.cart || []).reduce((s, i) => s + i.qty, 0);
  res.locals.flash = req.session.flash || null;
  delete req.session.flash;
  res.locals.csrfToken = csrfToken(req);
  res.locals.nonce = res.locals.nonce || '';
  next();
}

/* ---------------- CSRF (synchronizer token) ---------------- */
function csrfToken(req) {
  if (!req.session.csrf) req.session.csrf = crypto.randomBytes(24).toString('hex');
  return req.session.csrf;
}

function csrfProtect(req, res, next) {
  if (['GET', 'HEAD', 'OPTIONS'].includes(req.method)) return next();
  const sent = (req.body && req.body._csrf) || req.get('x-csrf-token');
  const real = req.session.csrf;
  if (sent && real && sent.length === real.length && crypto.timingSafeEqual(Buffer.from(sent), Buffer.from(real))) return next();
  const err = new Error('Invalid CSRF token');
  err.status = 403;
  err.code = 'EBADCSRFTOKEN';
  next(err);
}

/* ---------------- Admin auth ---------------- */
function requireAdmin(req, res, next) {
  if (req.session.user) {
    res.locals.user = req.session.user;
    return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect('/admin/login');
}

function flash(req, type, message) {
  req.session.flash = { type, message };
}

/** Detect best locale from Accept-Language for "/" */
function detectLocale(req) {
  if (req.session.locale && H.LOCALES.includes(req.session.locale)) return req.session.locale;
  const al = String(req.get('accept-language') || '').toLowerCase();
  if (al.startsWith('zh')) return 'zh';
  if (al.startsWith('en')) return 'en';
  return 'vi';
}

module.exports = { localeMiddleware, commonLocals, csrfProtect, requireAdmin, flash, detectLocale, renderMarkdown, nl2p, makeT, dict };
