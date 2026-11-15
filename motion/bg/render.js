// Render background: node render.js  → out/*.mp4 (10s lặp liền mạch) + ảnh 4K PNG
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const fs = require('fs'), path = require('path');
const FPS = 30, OUT = path.join(__dirname, 'out'), TMP = path.join(__dirname, '.frames');
fs.mkdirSync(OUT, { recursive: true });
(async () => {
  const b = await chromium.launch();
  for (const o of ['h', 'v']) for (const logo of [1, 0]) {
    const W = o === 'h' ? 1920 : 1080, H = o === 'h' ? 1080 : 1920;
    const name = `thuysantim-bg-${o === 'h' ? '1920x1080' : '1080x1920'}${logo ? '' : '-trong'}`;
    // ảnh tĩnh 4K
    let p = await b.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 2 });
    await p.goto(`file://${__dirname}/scene.html?o=${o}&logo=${logo}&dpr=2`); await p.evaluate(() => window.ready);
    await p.evaluate(() => renderAt(3.3)); await p.screenshot({ path: path.join(OUT, name.replace(/\d+x\d+/, o === 'h' ? '3840x2160' : '2160x3840') + '.png') });
    await p.close();
    // video
    p = await b.newPage({ viewport: { width: W, height: H } });
    await p.goto(`file://${__dirname}/scene.html?o=${o}&logo=${logo}`); const { DUR } = await p.evaluate(() => window.ready);
    const dir = path.join(TMP, name); fs.rmSync(dir, { recursive: true, force: true }); fs.mkdirSync(dir, { recursive: true });
    const N = DUR * FPS;                                   // N khung: khung N trùng khung 0 → lặp liền mạch
    for (let f = 0; f < N; f++) { await p.evaluate(t => renderAt(t), f / FPS); await p.screenshot({ path: path.join(dir, `f${String(f).padStart(4, '0')}.png`) }); }
    await p.close();
    execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', String(FPS), '-i', path.join(dir, 'f%04d.png'),
      '-c:v', 'libx264', '-preset', 'slow', '-crf', '17', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', path.join(OUT, name + '.mp4')]);
    fs.rmSync(dir, { recursive: true, force: true }); console.log('done', name);
  }
  await b.close(); fs.rmSync(TMP, { recursive: true, force: true });
})();
