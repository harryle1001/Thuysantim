#!/usr/bin/env node
'use strict';
// Video giới thiệu bộ bao bì (concept E), dựng từ cảnh 3D của mockup.js + chữ động vẽ đè.
//   node nhan/video.js --chi vh-glubenco-pro --loai motion   video motion graphic 4K 30 fps (~21 s)
//   node nhan/video.js --chi vh-glubenco-pro --loai xoay     xoay 360° 4K 60 fps (12 s, lặp liền mạch)
//   --w 1920 --h 1080 --fps 30 --thu 40   (xem thử: khổ nhỏ, chỉ render khung 40)
// Cần THREE_JS như mockup.js và ffmpeg (libx264).
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const B = require('./build.js');
const { emblemSvg } = require('./emblem.js');
const { scene, texFor } = require('./mockup.js');

const OUT = path.join(__dirname, 'out');
const args = process.argv.slice(2);
const opt = (f, d) => { const i = args.indexOf(f); return i > -1 ? args[i + 1] : d; };
const slug = opt('--chi', 'vh-glubenco-pro');
const LOAI = opt('--loai', 'motion');
const W = +opt('--w', 3840), H = +opt('--h', 2160);
const FPS = +opt('--fps', LOAI === 'xoay' ? 60 : 30);
const p = B.data.san_pham.find((x) => x.slug === slug);
const DUR = LOAI === 'xoay' ? 12 : p.dang === 'chai' ? 18 : 21;
const THU = opt('--thu', null);
const K3D = +opt('--3d', 0.75); // tỷ lệ dựng cảnh 3D so với khung hình (chữ và logo luôn vẽ đúng độ phân giải đích)
const THREE_JS = process.env.THREE_JS || path.join(__dirname, '..', 'node_modules', 'three', 'build', 'three.min.js');

const svgUrl = (svg) => 'data:image/svg+xml;base64,' + Buffer.from(svg).toString('base64');
const iconSvgs = [...B.icons(p).matchAll(/<svg[^>]*>.*?<\/svg>/g)].map((m) => svgUrl(m[0].replace('<svg ', `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" style="color:${p.mau}" `)));
const PL = B.phanLoai(p);
const INFO = {
  ten: p.ten, tag: p.phu_de, cat: `${PL.ma} · ${PL.loai}`.toUpperCase(), ma: PL.ma, loai: PL.loai, pc: p.mau, P: B.P, G: B.G, dang: p.dang, dur: DUR,
  quyCach: (p.quy_cach || '').split(',')[0], hero: (p.thanh_phan[0] || '').replace(/\s*\(min\)/i, ''), icons: iconSvgs,
  iconLbl: ['TÔM', 'CÁ', PL.dang.toUpperCase(), PL.cach.toUpperCase()],
  emblem: svgUrl(B.brandMark({ fill: B.P }, 'width="600" height="600"')), web: B.data.phan_phoi.web,
};

// ---------- Chạy trong trình duyệt: dựng khung hình thứ i ----------
function setup(INFO, LOAI, K3D) {
  /* global THREE, API, WW, HH */
  const { s, r } = API;
  r.setSize(Math.round(WW * K3D), Math.round(HH * K3D));
  const S = WW / 1920;
  const ease = (t) => (t < 0 ? 0 : t > 1 ? 1 : t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const out = (t) => 1 - Math.pow(1 - Math.min(1, Math.max(0, t)), 3);
  const lerp = (a, b, t) => a + (b - a) * t;
  const V = (x, y, z) => new THREE.Vector3(x, y, z);
  const cam = new THREE.PerspectiveCamera(24, WW / HH, 1, 2000);
  const img = (src) => new Promise((ok) => { const i = new Image(); i.onload = () => ok(i); i.src = src; });

  // nền sáng hơn cho thiết kế trắng
  const BG = 0xf1eef4; s.background = new THREE.Color(BG); s.fog = new THREE.Fog(BG, 260, 560);
  s.children.forEach((o) => { if (o.geometry && o.geometry.type === 'PlaneGeometry' && o.material.color) o.material.color.set(BG); });

  const isChai = INFO.dang === 'chai';
  const sk = isChai ? null : API.sack(), po = isChai ? null : API.pouch(), bo = isChai ? API.bottle() : null, bo2 = isChai ? API.bottle() : null;
  const M = isChai ? bo : po; // sản phẩm chính
  let stage = null;
  if (LOAI === 'xoay') {
    // bàn xoay: đĩa trắng bóng viền tím
    stage = new THREE.Group();
    const Rd = isChai ? 15 : 42;
    const disc = new THREE.Mesh(new THREE.CylinderGeometry(Rd, Rd, 1.6, 160), new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.22, clearcoat: 0.8 }));
    disc.position.y = 0.8; disc.receiveShadow = true; disc.castShadow = true; stage.add(disc);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(Rd, isChai ? 0.16 : 0.35, 16, 200), new THREE.MeshStandardMaterial({ color: API.PURPLE, roughness: 0.35 }));
    rim.rotation.x = Math.PI / 2; rim.position.y = 1.6; stage.add(rim);
    if (isChai) { bo.position.set(0, 1.6, 0); stage.add(bo); }
    else { sk.position.set(-5, 1.6, -9); po.position.set(17, 1.6, 12); po.rotation.y = -0.5; stage.add(sk, po); }
    s.add(stage);
  } else if (isChai) {
    bo2.position.set(10.5, 0, -7); s.add(bo, bo2);
  } else {
    sk.position.set(-12, 0, -24); po.position.set(15, 0, 8); s.add(sk, po);
  }

  // lớp chữ 2D
  const cv = document.createElement('canvas'); cv.width = WW; cv.height = HH; const x = cv.getContext('2d'); x.imageSmoothingQuality = 'high';
  const font = (w, px, fam) => `${w} ${px * S}px ${fam === 'serif' ? 'Cormorant' : 'BVP'}`;
  function text(t, px, py, f, col, a, ls = 0, align = 'left') {
    x.save(); x.globalAlpha = a; x.font = f; x.fillStyle = col; x.textAlign = align; x.textBaseline = 'alphabetic';
    x.letterSpacing = `${ls * S}px`; x.fillText(t, px, py); x.restore();
  }
  function stripe() { // dải 3 màu tỷ lệ φ ở mép trên — chữ ký thương hiệu
    const h = 10 * S, a = WW * 0.618, b = WW * 0.236;
    x.fillStyle = INFO.pc; x.fillRect(0, 0, a, h); x.fillStyle = INFO.P; x.fillRect(a, 0, b, h); x.fillStyle = INFO.G; x.fillRect(a + b, 0, WW - a - b, h);
  }
  let EM, IC = [];
  async function load() {
    await Promise.all(['700 40px BVP', '500 40px BVP', 'italic 600 40px Cormorant', '700 40px Cormorant'].map((f) => document.fonts.load(f, 'ThủySảnTím')));
    EM = await img(INFO.emblem); IC = await Promise.all(INFO.icons.map(img));
  }
  function lockup(px, py, sz, a) { // logo góc trái trên
    x.save(); x.globalAlpha = a; x.drawImage(EM, px, py, sz, sz); x.restore();
    text('THỦY SẢN TÍM', px + sz * 1.22, py + sz * 0.47, font(700, sz / S * 0.24), INFO.P, a, sz / S * 0.075);
    text('Tinh hoa sinh học · Vững vàng mùa vụ', px + sz * 1.22, py + sz * 0.8, font('italic 600', sz / S * 0.25, 'serif'), INFO.G, a);
  }
  function block(t0, t, lines, px, py) { // các dòng trượt lên lần lượt (trễ 0,162 s)
    let yy = py;
    lines.forEach((l, i) => {
      const k = out((t - t0 - i * 0.162) / 0.618);
      yy += l.gap * S;
      if (l.bar) { x.save(); x.globalAlpha = k; x.fillStyle = INFO.pc; x.fillRect(px, yy - 6 * S, 150 * S * k, 5 * S); x.restore(); return; }
      if (l.pill) {
        x.save(); x.globalAlpha = k; x.font = font(600, 30); x.letterSpacing = `${1.5 * S}px`; const w = x.measureText(l.pill).width + 70 * S;
        x.fillStyle = INFO.pc; x.beginPath(); x.roundRect(px, yy - 44 * S + (1 - k) * 30 * S, w, 64 * S, 32 * S); x.fill(); x.restore();
        text(l.pill, px + 35 * S, yy - 2 * S + (1 - k) * 30 * S, font(600, 30), '#fff', k, 1.5); return;
      }
      if (l.icons) {
        IC.forEach((im, j) => { const kk = out((t - t0 - (i + j * 0.5) * 0.162) / 0.618); x.save(); x.globalAlpha = kk; x.drawImage(im, px + j * 185 * S, yy - 110 * S + (1 - kk) * 25 * S, 100 * S, 100 * S); x.restore();
          text(INFO.iconLbl[j], px + j * 185 * S + 50 * S, yy + 30 * S, font(700, 20), INFO.P, kk, 3, 'center'); });
        return;
      }
      text(l.t, px, yy + (1 - k) * 36 * S, l.f, l.c, k, l.ls || 0);
    });
  }
  function nameLines() { const w = INFO.ten.split(' '); if (INFO.ten.length <= 11 || w.length < 2) return [INFO.ten]; let best = [INFO.ten], bd = 1e9; for (let i = 1; i < w.length; i++) { const a = w.slice(0, i).join(' '), b = w.slice(i).join(' '); if (Math.abs(a.length - b.length) < bd) { bd = Math.abs(a.length - b.length); best = [a, b]; } } return best; }
  const NL = nameLines();

  // ---- kịch bản motion (giây): logo → sản phẩm → phân loại → (bao) → cả bộ + thẻ kết ----
  const SH = isChai ? [[0, 2.8, 'logo'], [2.8, 7.8, 'main'], [7.8, 12.6, 'info'], [12.6, 18, 'bo']]
    : [[0, 2.8, 'logo'], [2.8, 7.8, 'main'], [7.8, 12.4, 'info'], [12.4, 16.2, 'bao'], [16.2, 21, 'bo']];
  const END = SH[SH.length - 1][1];
  function motion(t) {
    const sh = SH.find(([a, b]) => t >= a && t < b) || SH[SH.length - 1];
    const u = (t - sh[0]) / (sh[1] - sh[0]), k = sh[2];
    if (isChai) { bo.visible = k !== 'logo'; bo2.visible = k === 'bo'; bo.rotation.y = 0.05; bo2.rotation.y = -1.25; }
    else { sk.visible = k === 'bao' || k === 'bo'; po.visible = k === 'main' || k === 'info' || k === 'bo'; sk.rotation.y = 0.32; po.rotation.y = -0.38; }
    const c = M.position;
    if (k === 'main') {
      M.rotation.y = isChai ? lerp(-1.1, 0.35, ease(u)) : lerp(-0.9, 0.22, ease(u));
      cam.position.copy(c).add(V(lerp(-22, 6, ease(u)), lerp(10, 16, u), lerp(84, 72, ease(u)))); cam.lookAt(c.x - 13.5, isChai ? 12.2 : 10.6, c.z);
    } else if (k === 'info') {
      M.rotation.y = isChai ? lerp(0.35, 2.75, ease(u)) : lerp(0.5, -0.75, ease(u));
      cam.position.copy(c).add(V(lerp(18, -8, ease(u)), lerp(11, 17, u), lerp(78, 70, ease(u)))); cam.lookAt(c.x + 9.5, isChai ? 12.4 : 11, c.z);
    } else if (k === 'bao') {
      const q = sk.position; cam.position.copy(q).add(V(lerp(36, 4, ease(u)), lerp(22, 48, ease(u)), lerp(236, 222, u))); cam.lookAt(q.x + 31, lerp(34, 38, ease(u)), q.z);
    } else if (isChai) {
      cam.position.set(lerp(-4, -16, ease(u)), lerp(21, 17, ease(u)), lerp(86, 72, ease(Math.min(1, u * 1.3)))); cam.lookAt(-9.5, 12.5, 0);
    } else {
      cam.position.set(lerp(30, 8, ease(u)), lerp(52, 40, ease(u)), lerp(230, 176, ease(Math.min(1, u * 1.3)))); cam.lookAt(-3, 31.5, 0);
    }
    cam.fov = 24; cam.updateProjectionMatrix();
    x.clearRect(0, 0, WW, HH);
    if (k !== 'logo') { r.render(s, cam); x.drawImage(r.domElement, 0, 0, WW, HH); }
    if (k === 'logo') {
      x.fillStyle = '#fbfafc'; x.fillRect(0, 0, WW, HH);
      const a = out(t / 0.9), sz = 330 * S * lerp(0.82, 1, out(t / 1.4));
      x.save(); x.globalAlpha = a; x.translate(WW / 2, HH * 0.42); x.drawImage(EM, -sz / 2, -sz / 2, sz, sz); x.restore();
      text('THỦY SẢN TÍM', WW / 2, HH * 0.42 + 270 * S, font(700, 64), INFO.P, out((t - 0.6) / 0.8), lerp(40, 22, out((t - 0.6) / 1.2)), 'center');
      text('Tinh hoa sinh học · Vững vàng mùa vụ', WW / 2, HH * 0.42 + 340 * S, font('italic 600', 44, 'serif'), INFO.G, out((t - 1.1) / 0.8), 0, 'center');
    } else {
      lockup(70 * S, 60 * S, 92 * S, 1);
      const made = [{ t: 'SẢN XUẤT TẠI VIỆT NAM', f: font(700, 26), c: INFO.pc, ls: 7, gap: 0 }, { bar: 1, gap: 26 },
        { t: isChai ? 'Chai · Can' : 'Túi · Bao', f: font(700, 84), c: INFO.P, gap: 130 }, { t: INFO.quyCach, f: font('italic 600', 50, 'serif'), c: INFO.pc, gap: 86 }];
      if (k === 'main') block(sh[0] + 0.4, t, [
        { t: INFO.cat, f: font(700, 26), c: INFO.pc, ls: 7, gap: 0 }, { bar: 1, gap: 26 },
        ...NL.map((l, i) => ({ t: l, f: font(700, NL.some((n) => n.length > 11) ? 104 : 128), c: INFO.P, ls: -2, gap: i ? 118 : 130 })),
        { t: INFO.tag, f: font('italic 600', 52, 'serif'), c: INFO.pc, gap: 88 }], 150 * S, HH * 0.36);
      if (k === 'info') block(sh[0] + 0.3, t, [
        { t: 'PHÂN LOẠI · ' + INFO.ma, f: font(700, 26), c: INFO.pc, ls: 7, gap: 0 }, { bar: 1, gap: 26 },
        { t: INFO.loai, f: font(700, 72), c: INFO.P, gap: 120 }, { pill: INFO.hero, gap: 110 }, { icons: 1, gap: 250 }], WW * 0.58, HH * 0.32);
      if (k === 'bao') block(sh[0] + 0.3, t, made, WW * 0.5, HH * 0.4);
      if (k === 'bo') {
        if (isChai) block(sh[0] + 0.3, t, made, 150 * S, HH * 0.4);
        const a = out((t - (END - 2.8)) / 1);
        if (a > 0) {
          x.save(); x.globalAlpha = a * 0.97; x.fillStyle = '#fbfafc'; x.fillRect(0, 0, WW, HH); x.restore();
          const sz = 300 * S; x.save(); x.globalAlpha = a; x.drawImage(EM, WW / 2 - sz / 2, HH * 0.38 - sz / 2, sz, sz); x.restore();
          text('THỦY SẢN TÍM', WW / 2, HH * 0.38 + 250 * S, font(700, 64), INFO.P, a, 22, 'center');
          text('Tinh hoa sinh học · Vững vàng mùa vụ', WW / 2, HH * 0.38 + 320 * S, font('italic 600', 44, 'serif'), INFO.G, a, 0, 'center');
          text(INFO.web, WW / 2, HH * 0.38 + 400 * S, font(500, 32), INFO.pc, out((t - (END - 2.2)) / 0.8), 6, 'center');
        }
      }
    }
    // chuyển cảnh: chớp trắng 0,382 s quanh mỗi mốc
    SH.slice(1).forEach(([a]) => { const d = Math.abs(t - a); if (d < 0.382) { x.save(); x.globalAlpha = 1 - d / 0.382; x.fillStyle = '#fbfafc'; x.fillRect(0, 0, WW, HH); x.restore(); } });
    stripe();
  }

  // ---- xoay 360°: bàn xoay quay đúng 1 vòng, lặp liền mạch ----
  function turn(t, dur) {
    stage.rotation.y = (t / dur) * Math.PI * 2;
    cam.fov = 24; cam.updateProjectionMatrix();
    if (isChai) { cam.position.set(-10, 22, 88); cam.lookAt(-10, 13.2, 0); } else { cam.position.set(-34, 64, 262); cam.lookAt(-34, 31, 0); }
    r.render(s, cam);
    x.clearRect(0, 0, WW, HH); x.drawImage(r.domElement, 0, 0, WW, HH);
    lockup(70 * S, 60 * S, 92 * S, 1);
    const big = NL.some((n) => n.length > 11) ? 80 : 96;
    text(INFO.cat, 80 * S, 300 * S, font(700, 24), INFO.pc, 1, 6);
    x.fillStyle = INFO.pc; x.fillRect(80 * S, 322 * S, 150 * S, 5 * S);
    NL.forEach((l, i) => text(l, 80 * S, 420 * S + i * 92 * S, font(700, big), INFO.P, 1, -1));
    text(INFO.tag, 80 * S, 430 * S + NL.length * 92 * S, font('italic 600', 42, 'serif'), INFO.pc, 1);
    text('SẢN XUẤT TẠI VIỆT NAM', 80 * S, HH - 70 * S, font(700, 22), INFO.P, 1, 6);
    stripe();
  }

  window.frame = (t, dur) => { (LOAI === 'xoay' ? turn : motion)(t, dur); return cv.toDataURL('image/jpeg', 0.94); };
  return load();
}

async function main() {
  if (!fs.existsSync(THREE_JS)) { console.error('Không thấy three.min.js. Đặt THREE_JS=…'); process.exit(2); }
  const TEX = texFor(slug);
  const { chromium } = require('playwright');
  const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await browser.newPage({ viewport: { width: 800, height: 600 } });
  await page.setContent(`<!doctype html><html><head><meta charset="utf-8"><style>${B.fontFaces()}</style></head><body style="margin:0"></body></html>`);
  await page.addScriptTag({ path: THREE_JS });
  await page.evaluate(async (T) => {
    window.TEX = {};
    await Promise.all(Object.entries(T).map(([k, src]) => new Promise((ok, no) => { const i = new Image(); i.onload = () => { window.TEX[k] = i; ok(); }; i.onerror = no; i.src = src; })));
  }, TEX);
  await page.evaluate(`(() => { window.WW = ${W}; window.HH = ${H}; window.SHOT = { k: 'api', fov: 24 }; (${scene.toString()})(); })()`);
  await page.evaluate(`(${setup.toString()})(${JSON.stringify(INFO)}, ${JSON.stringify(LOAI)}, ${K3D})`);

  const N = Math.round(DUR * FPS);
  if (THU !== null) {
    for (const f of THU.split(',')) {
      const url = await page.evaluate(([t, d]) => window.frame(t, d), [+f / FPS, DUR]);
      const file = path.join(OUT, `${slug}-video-${LOAI}-thu-${f}.jpg`);
      fs.writeFileSync(file, Buffer.from(url.split(',')[1], 'base64')); console.log(file);
    }
    await browser.close(); return;
  }
  const file = path.join(OUT, `${slug}-video-${LOAI === 'xoay' ? 'xoay-360' : 'motion'}-${H >= 2160 ? '4k' : H + 'p'}.mp4`);
  const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-c:v', 'mjpeg', '-framerate', String(FPS), '-i', '-',
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '15', '-pix_fmt', 'yuv420p', '-profile:v', 'high', '-movflags', '+faststart', file], { stdio: ['pipe', 'inherit', 'inherit'] });
  const t0 = Date.now();
  for (let i = 0; i < N; i++) {
    const url = await page.evaluate(([t, d]) => window.frame(t, d), [i / FPS, DUR]);
    const buf = Buffer.from(url.split(',')[1], 'base64');
    if (!ff.stdin.write(buf)) await new Promise((ok) => ff.stdin.once('drain', ok));
    if (i % 30 === 0) console.log(`khung ${i}/${N}  ${((Date.now() - t0) / 1000 / (i + 1)).toFixed(2)} s/khung`);
  }
  ff.stdin.end();
  await new Promise((ok) => ff.on('close', ok));
  await browser.close();
  console.log(`${path.relative(process.cwd(), file)}  ${W}×${H} ${FPS} fps ${DUR} s  (${((Date.now() - t0) / 60000).toFixed(1)} phút)`);
}

main().catch((e) => { console.error(e); process.exit(1); });
