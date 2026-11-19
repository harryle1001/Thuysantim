#!/usr/bin/env node
'use strict';
// Dựng trọn bộ (concept E) cho từng sản phẩm: nhãn/túi/bao → mockup 4K → video motion 4K → video xoay 360° 4K.
//   THREE_JS=<three.min.js> node nhan/tat-ca.js --chi us-lacto,mix-79     (bỏ --chi = tất cả)
//   --khong-video   chỉ nhãn + mockup. Chạy lại sẽ bỏ qua bước đã có file (xóa nhan/out/<slug>-* để làm lại).
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'san-pham.json'), 'utf8'));
const args = process.argv.slice(2);
const i = args.indexOf('--chi');
const only = i > -1 ? args[i + 1].split(',') : data.san_pham.map((p) => p.slug);
const OUT = path.join(__dirname, 'out');
const has = (f) => fs.existsSync(path.join(OUT, f)) && fs.statSync(path.join(OUT, f)).size > 10000;
const run = (script, a) => { const r = spawnSync('node', [path.join(__dirname, script), ...a], { stdio: 'inherit' }); if (r.status) console.error(`!! ${script} ${a.join(' ')} lỗi (mã ${r.status})`); return !r.status; };
const t0 = Date.now();
// Lượt 1: nhãn + mockup cho mọi sản phẩm (nhanh). Lượt 2: video (mỗi sản phẩm khoảng 40–45 phút).
for (const pass of ['nhan', 'video']) {
  if (pass === 'video' && args.includes('--khong-video')) break;
  for (const slug of only) {
    const p = data.san_pham.find((x) => x.slug === slug);
    if (!p) { console.error('Không có sản phẩm', slug); continue; }
    console.log(`\n===== [${pass}] ${p.ten} (${p.dang === 'chai' ? 'chai' : 'túi + bao'}) =====`);
    if (pass === 'nhan') {
      if (p.dang === 'chai') { if (!has(`${slug}-concept-e.pdf`)) run('build.js', ['--chi', slug, '--concept', 'e']); }
      else if (!has(`${slug}-bao-sau.pdf`)) { run('build.js', ['--chi', slug, '--concept', 'e']); run('bo.js', ['--chi', slug]); }
      if (!has(`${slug}-mockup-${p.dang === 'chai' ? 'chai' : 'bao'}.png`)) run('mockup.js', ['--chi', slug]);
    } else {
      if (!has(`${slug}-video-motion-4k.mp4`)) run('video.js', ['--chi', slug, '--loai', 'motion']);
      if (!has(`${slug}-video-xoay-360-4k.mp4`)) run('video.js', ['--chi', slug, '--loai', 'xoay']);
    }
    console.log(`-- xong [${pass}] ${slug} · ${((Date.now() - t0) / 60000).toFixed(0)} phút từ lúc bắt đầu`);
  }
}
