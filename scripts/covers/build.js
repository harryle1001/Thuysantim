#!/usr/bin/env node
'use strict';
// Tạo thumbnail 4K (3840×2160) cho từng bài: ảnh Pexels + tấm chữ tím theo tỷ lệ φ.
//   node scripts/covers/build.js <thư-mục-ảnh-gốc> [--chi slug1,slug2]
// Xuất public/img/blog/<slug>.webp (3840), <slug>-1920.webp, <slug>-1280.webp.
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { pick } = require('./map');
const ROOT = path.join(__dirname, '..', '..');
const SRC = path.resolve(process.argv[2] || '');
const only = (process.argv.indexOf('--chi') > -1 ? process.argv[process.argv.indexOf('--chi') + 1].split(',') : null);
const OUT = path.join(ROOT, 'public', 'img', 'blog');
fs.mkdirSync(OUT, { recursive: true });
const FONTS = path.join(ROOT, 'nhan', 'fonts');
const fontFile = (n) => fs.readdirSync(FONTS).find((f) => f.toLowerCase().includes(n));
const data = require(path.join(ROOT, 'src', 'db', 'seed-data.js'));
const logo = fs.readFileSync(path.join(ROOT, 'nhan', 'logo-tim.svg'), 'utf8');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

function shortTitle(t) {
  let s = t.split(/[:?]/)[0].trim();
  if (s.length < 22) s = t.replace(/[?]$/, '').trim();
  return s;
}
const face = (fam, file, w, range) => `@font-face{font-family:'${fam}';src:url(data:font/woff2;base64,${fs.readFileSync(path.join(FONTS, file)).toString('base64')}) format('woff2');font-weight:${w};unicode-range:${range}}`;
const FLIP = new Set([11784965, 16521533]);
function html(p, ph) {
  const t = shortTitle(p.title.vi);
  const fs0 = t.length <= 34 ? 190 : t.length <= 52 ? 158 : 132;
  const chip = p.topic === 'disease' ? 'BỆNH & PHÒNG BỆNH' : 'KỸ THUẬT NUÔI';
  return `<!doctype html><meta charset="utf-8"><style>
${face('C','cormorant-garamond-vietnamese-700-normal.woff2','700','U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB')}
${face('C','cormorant-garamond-latin-700-normal.woff2','700','U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD')}
${face('B','be-vietnam-pro-vietnamese-600-normal.woff2','600','U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB')}
${face('B','be-vietnam-pro-latin-600-normal.woff2','600','U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD')}
${face('B','be-vietnam-pro-vietnamese-700-normal.woff2','700','U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB')}
${face('B','be-vietnam-pro-latin-700-normal.woff2','700','U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD')}
*{margin:0;box-sizing:border-box}body{width:3840px;height:2160px;overflow:hidden;position:relative;background:#2a0a2e}
.ph{position:absolute;inset:0;background:url("file://${SRC}/${ph.id}.jpg") ${ph.x}% ${ph.y}%/cover no-repeat;${FLIP.has(ph.id) ? 'transform:scaleX(-1)' : ''}}
.sc{position:absolute;inset:0;background:linear-gradient(90deg,rgba(42,6,48,.96) 0%,rgba(52,6,60,.92) 36%,rgba(60,8,68,.5) 44%,rgba(60,8,68,0) 56%)}
.bar{position:absolute;left:0;top:0;height:22px;width:100%;display:flex}
.bar i{display:block;height:100%}
.pnl{position:absolute;left:0;top:0;bottom:0;width:1700px;padding:190px 150px 170px 190px;display:flex;flex-direction:column;color:#fff}
.lg{width:210px;height:210px}.lg svg{width:100%;height:100%}
.chip{margin-top:110px;font:700 50px 'B';letter-spacing:.3em;color:#e4c98a;display:flex;align-items:center;gap:34px}
.chip::after{content:'';width:130px;height:4px;background:#e4c98a}
h1{margin-top:60px;font:700 ${fs0}px/1.06 'C',serif;letter-spacing:.005em;color:#fff;flex:1;display:flex;align-items:flex-start}
.ft{font:600 54px 'B';letter-spacing:.14em;color:#f1e6f3;border-top:4px solid rgba(228,201,138,.7);padding-top:46px}
</style><body><div class="ph"></div><div class="sc"></div>
<div class="bar"><i style="width:61.8%;background:#4a044e"></i><i style="width:23.6%;background:#b8914a"></i><i style="width:14.6%;background:#e4c98a"></i></div>
<div class="pnl"><div class="lg">${logo}</div><div class="chip">${chip}</div><h1>${esc(t)}</h1><div class="ft">THUYSANTIM.COM</div></div></body>`;
}
(async () => {
  const { chromium } = require('playwright');
  const b = await chromium.launch();
  const pg = await b.newPage({ viewport: { width: 3840, height: 2160 } });
  const tmp = path.join(require('os').tmpdir(), 'cover-build');
  fs.mkdirSync(tmp, { recursive: true });
  const posts = data.posts.filter((p) => !only || only.includes(p.slug));
  const map = {};
  for (const [i, p] of data.posts.entries()) map[p.slug] = pick(p.slug, i);
  for (const p of posts) {
    const f = path.join(tmp, p.slug + '.html');
    fs.writeFileSync(f, html(p, map[p.slug]));
    await pg.goto('file://' + f);
    await pg.waitForTimeout(400);
    const png = path.join(tmp, p.slug + '.png');
    await pg.screenshot({ path: png, type: 'png' });
    for (const [w, name, q] of [[3840, '', 80], [1920, '-1920', 80], [1280, '-1280', 78]]) {
      execFileSync('python3', ['-c', `from PIL import Image;im=Image.open(r'${png}').convert('RGB');w=${w};im=im.resize((w,w*9//16),Image.LANCZOS) if w!=3840 else im;im.save(r'${path.join(OUT, p.slug + name)}.webp','WEBP',quality=${q},method=6)`]);
    }
    console.log('ok', p.slug, map[p.slug].id);
  }
  await b.close();
})();
