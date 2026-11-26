'use strict';
/* Tải font Be Vietnam Pro + Cormorant Garamond (Google Fonts, OFL) về public/fonts để tự phục vụ.
   Chạy: node scripts/fetch-fonts.js  → ghi public/fonts/*.woff2 và khối @font-face đầu main.css và lp.css */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const API = 'https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap';
const out = path.join(__dirname, '../public/fonts');
(async () => {
  fs.mkdirSync(out, { recursive: true });
  const css = await (await fetch(API, { headers: { 'User-Agent': UA } })).text();
  // latin-ext phải khai báo TRƯỚC vietnamese/latin: các dải ký tự chồng nhau, face khai báo sau thắng → tránh tải thừa latin-ext
  const order = { 'latin-ext': 0, vietnamese: 1, latin: 2 };
  const blocks = css.split('/* ').slice(1).sort((a, b) => order[a.slice(0, a.indexOf(' */'))] - order[b.slice(0, b.indexOf(' */'))]);
  let gen = '';
  const seen = {};
  for (const b of blocks) {
    const subset = b.slice(0, b.indexOf(' */'));
    if (!['vietnamese', 'latin', 'latin-ext'].includes(subset)) continue;
    const fam = /font-family: '([^']+)'/.exec(b)[1];
    const style = /font-style: (\w+)/.exec(b)[1];
    const weight = /font-weight: (\d+)/.exec(b)[1];
    const url = /url\((https:[^)]+)\)/.exec(b)[1];
    const range = /unicode-range: ([^;]+);/.exec(b)[1];
    const buf = Buffer.from(await (await fetch(url)).arrayBuffer());
    const hash = crypto.createHash('md5').update(buf).digest('hex').slice(0, 8);
    // Cormorant dùng chung một file cho nhiều độ đậm → chỉ lưu một bản
    const name = seen[hash] || `${fam.toLowerCase().replace(/\s+/g, '-')}-${weight}${style === 'italic' ? 'i' : ''}-${subset}.woff2`;
    seen[hash] = name;
    fs.writeFileSync(path.join(out, name), buf);
    gen += `@font-face{font-family:'${fam}';font-style:${style};font-weight:${weight};font-display:swap;src:url(/fonts/${name}) format('woff2');unicode-range:${range}}\n`;
    console.log(name, buf.length);
  }
  const block = `/* fonts:start (tạo bởi scripts/fetch-fonts.js) */\n${gen}/* fonts:end */`;
  for (const f of ['main.css', 'lp.css']) {
    const cssFile = path.join(__dirname, '../public/css', f);
    const cur = fs.readFileSync(cssFile, 'utf8');
    fs.writeFileSync(cssFile, /\/\* fonts:start[\s\S]*?fonts:end \*\//.test(cur) ? cur.replace(/\/\* fonts:start[\s\S]*?fonts:end \*\//, () => block) : block + '\n' + cur);
  }
})();
