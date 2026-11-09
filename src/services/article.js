'use strict';
/**
 * Turns an article's Markdown into everything the article page and its SEO need:
 * sanitized HTML with anchor ids, a table of contents, an FAQ block (for FAQPage
 * schema), automatic internal links to products the article names, and an honest
 * reading time. It works on any post, including ones written later in the admin,
 * because it only relies on ordinary Markdown conventions:
 *   - `## Heading` sections become the table of contents
 *   - a `## Câu hỏi thường gặp` / `## Frequently asked questions` / `## 常见问题`
 *     section with `### Question` + answer paragraphs becomes the FAQ
 *   - a product name in bold, e.g. **TÍM PRO-BIO 9**, links to that product
 */
const H = require('../utils/helpers');

const FAQ_HEADING = /^##\s+(câu hỏi thường gặp|hỏi\s*(?:&|và)\s*đáp|faqs?|frequently asked questions|常见问题|问答)\s*$/im;

function stripTags(html) {
  return String(html || '').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, ' ').trim();
}

/** Split the FAQ section out of the Markdown. */
function extractFaq(md) {
  const m = FAQ_HEADING.exec(md);
  if (!m) return { body: md, faqTitle: '', faqMd: '' };
  const start = m.index;
  const rest = md.slice(start + m[0].length);
  const next = rest.search(/^##\s(?!#)/m);
  const faqMd = next === -1 ? rest : rest.slice(0, next);
  const body = md.slice(0, start) + (next === -1 ? '' : rest.slice(next));
  return { body, faqTitle: m[1], faqMd };
}

function parseFaq(faqMd, render) {
  const items = [];
  const parts = faqMd.split(/^###\s+/m).slice(1);
  for (const part of parts) {
    const nl = part.indexOf('\n');
    const q = (nl === -1 ? part : part.slice(0, nl)).trim();
    const aMd = (nl === -1 ? '' : part.slice(nl + 1)).trim();
    if (!q || !aMd) continue;
    const html = render(aMd);
    items.push({ q, html, text: stripTags(html) });
  }
  return items;
}

/** Bold product names become links (first mention only), and we note which products were named. */
function linkProducts(md, products, productUrl) {
  const mentioned = [];
  let out = md;
  for (const p of products) {
    const name = String(p.shortName || '').trim();
    if (!name) continue;
    const esc = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    if (!new RegExp(esc, 'i').test(out)) continue;
    mentioned.push(p.slug);
    let done = false;
    out = out.replace(new RegExp(`\\*\\*(${esc})\\*\\*`, 'gi'), (all, txt, offset, str) => {
      // skip if already inside a link: "[**NAME**](...)"
      if (done || str[offset - 1] === '[') return all;
      done = true;
      return `[**${txt}**](${productUrl(p.slug)})`;
    });
  }
  return { md: out, mentioned };
}

/** Add ids to h2/h3 and build the table of contents. */
function addAnchors(html) {
  const toc = [];
  const used = new Set();
  const out = html.replace(/<h([23])>([\s\S]*?)<\/h\1>/g, (all, level, inner) => {
    const text = stripTags(inner);
    let id = H.slugify(text).slice(0, 60) || 'muc';
    if (/^\d/.test(id)) id = `m-${id}`;
    let n = 2;
    const base = id;
    while (used.has(id)) id = `${base}-${n++}`;
    used.add(id);
    if (level === '2') toc.push({ id, text });
    return `<h${level} id="${id}">${inner}</h${level}>`;
  });
  return { html: out, toc };
}

/**
 * @param {string} md       article Markdown (already localized)
 * @param {object} opts     { render: md => safeHtml, products: [{slug, shortName}], productUrl: slug => href, wordsPerMinute }
 */
function analyzeArticle(md, { render, products = [], productUrl = (s) => s, wordsPerMinute = 200 } = {}) {
  const src = String(md || '').replace(/\r\n/g, '\n');
  const { body, faqTitle, faqMd } = extractFaq(src);
  const linked = linkProducts(body, products, productUrl);
  const rendered = render(linked.md)
    // keep wide tables usable on phones
    .replace(/<table>/g, '<div class="table-wrap"><table>')
    .replace(/<\/table>/g, '</table></div>');
  const { html, toc } = addAnchors(rendered);
  const faq = faqMd ? parseFaq(linkProducts(faqMd, products, productUrl).md, render) : [];
  const plain = stripTags(html) + ' ' + faq.map((f) => `${f.q} ${f.text}`).join(' ');
  // CJK text has no spaces: count characters / 2 as "words" so read time stays honest.
  const cjk = (plain.match(/[㐀-鿿]/g) || []).length;
  const words = plain.split(/\s+/).filter(Boolean).length + Math.round(cjk / 2);
  return {
    html,
    toc,
    faq,
    faqTitle,
    words,
    readMinutes: Math.max(2, Math.round(words / wordsPerMinute)),
    mentioned: linked.mentioned,
  };
}

module.exports = { analyzeArticle, stripTags };
