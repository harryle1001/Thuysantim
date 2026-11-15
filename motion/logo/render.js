// Render logo reveal → PNG frames → MP4 / WebM (alpha) / MOV ProRes 4444 (alpha).
// Usage: node render.js [h|v|all] [--fps 60] [--stills 0.5,2,3,6] [--no-alpha]
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const which = ['h', 'v'].includes(args[0]) ? [args[0]] : ['h', 'v'];
const opt = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const FPS = +opt('--fps', 60);
const stills = opt('--stills', null);
const doAlpha = !args.includes('--no-alpha');
const OUT = path.join(__dirname, 'out');
const TMP = path.join(__dirname, '.frames');
fs.mkdirSync(OUT, { recursive: true });

const ff = a => execFileSync('ffmpeg', ['-y', '-loglevel', 'error', ...a], { stdio: 'inherit' });

(async () => {
  const browser = await chromium.launch();
  for (const o of which) {
    for (const alpha of doAlpha && !stills ? [false, true] : [false]) {
      const W = o === 'h' ? 1920 : 1080, H = o === 'h' ? 1080 : 1920;
      const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
      await page.goto('file://' + path.join(__dirname, 'stage.html') + `?o=${o}&alpha=${alpha ? 1 : 0}`);
      const { DUR } = await page.evaluate(() => window.ready);
      if (stills) {
        for (const t of stills.split(',').map(Number)) {
          await page.evaluate(t => window.renderAt(t), t);
          await page.screenshot({ path: path.join(OUT, `still-${o}-${t}.png`) });
        }
        await page.close(); continue;
      }
      const dir = path.join(TMP, `${o}${alpha ? '-a' : ''}`);
      fs.rmSync(dir, { recursive: true, force: true }); fs.mkdirSync(dir, { recursive: true });
      const N = Math.round(DUR * FPS);
      for (let f = 0; f <= N; f++) {
        await page.evaluate(t => window.renderAt(t), f / FPS);
        await page.screenshot({ path: path.join(dir, `f${String(f).padStart(4, '0')}.png`), omitBackground: alpha });
        if (f % 60 === 0) process.stdout.write(`${o}${alpha ? '-alpha' : ''} ${f}/${N}\r`);
      }
      await page.close();
      const inp = ['-framerate', String(FPS), '-i', path.join(dir, 'f%04d.png')];
      const name = `thuysantim-logo-${o === 'h' ? '1920x1080' : '1080x1920'}`;
      if (!alpha) {
        ff([...inp, '-c:v', 'libx264', '-preset', 'slow', '-crf', '14', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', path.join(OUT, name + '.mp4')]);
        if (o === 'h') ff(['-i', path.join(dir, `f${String(N).padStart(4, '0')}.png`), path.join(OUT, 'poster-1920x1080.jpg')]);
      } else {
        ff([...inp, '-c:v', 'libvpx-vp9', '-pix_fmt', 'yuva420p', '-b:v', '0', '-crf', '24', '-row-mt', '1', '-auto-alt-ref', '0', path.join(OUT, name + '-alpha.webm')]);
        ff([...inp, '-c:v', 'prores_ks', '-profile:v', '4444', '-pix_fmt', 'yuva444p10le', '-vendor', 'apl0', path.join(OUT, name + '-alpha.mov')]);
      }
      fs.rmSync(dir, { recursive: true, force: true });
      console.log(`done ${name}${alpha ? ' (alpha)' : ''}`);
    }
  }
  await browser.close();
  fs.rmSync(TMP, { recursive: true, force: true });
})();
