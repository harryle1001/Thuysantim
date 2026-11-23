#!/usr/bin/env node
'use strict';
// Mockup 3D để test bộ bao bì trước khi in: chai 1 lít (nhãn quấn), túi đứng, bao dệt.
//   node nhan/mockup.js --chi vh-glubenco-pro [--w 3840 --h 2160]
// Cần: nhãn đã sinh (build.js --concept d, bo.js) và three.js bản UMD:
//   THREE_JS=/đường/dẫn/three.min.js (mặc định tìm node_modules/three/build/three.min.js).
// Xuất nhan/out/<slug>-mockup-{bo,chai,tui,bao}.png (4K).
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, 'out');
const args = process.argv.slice(2);
const opt = (f, d) => { const i = args.indexOf(f); return i > -1 ? args[i + 1] : d; };
const slug = opt('--chi', 'vh-glubenco-pro');
const KIEU = opt('--concept', 'e'); // e: trắng φ · d: tím + nhũ vàng
const W = +opt('--w', 3840), H = +opt('--h', 2160);
const THREE_JS = process.env.THREE_JS || path.join(__dirname, '..', 'node_modules', 'three', 'build', 'three.min.js');

const b64 = (f) => 'data:image/png;base64,' + fs.readFileSync(path.join(OUT, f)).toString('base64');

// Toàn bộ cảnh chạy trong trình duyệt (WebGL). Đơn vị: 1 = 10 mm.
function scene() {
  /* global THREE, TEX, SHOT, WW, HH */
  THREE.ColorManagement.legacyMode = false; // màu hex hiểu đúng là sRGB (tím không bị nhạt)
  const r = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
  r.setPixelRatio(1); r.setSize(WW, HH);
  r.outputEncoding = THREE.sRGBEncoding; r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = 0.92;
  r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFSoftShadowMap; r.physicallyCorrectLights = true;
  document.body.appendChild(r.domElement);
  const s = new THREE.Scene();
  const BG = 0xece6ee; s.background = new THREE.Color(BG); s.fog = new THREE.Fog(BG, 260, 520);

  // Môi trường phản chiếu: phòng studio có 3 softbox
  const env = new THREE.Scene();
  env.background = new THREE.Color(0x8d8592);
  const box = (w, h, x, y, z, i) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color(i, i, i), side: THREE.DoubleSide })); m.position.set(x, y, z); m.lookAt(0, 0, 0); env.add(m); };
  box(40, 60, -60, 40, 50, 6); box(30, 50, 70, 30, 40, 3); box(80, 20, 0, 80, -20, 4); box(200, 200, 0, -60, 0, 0.55);
  const pm = new THREE.PMREMGenerator(r); s.environment = pm.fromScene(env, 0.04).texture;

  // Mặt nạ nhũ vàng: điểm ảnh gần màu #b8914a → kim loại, bóng (mô phỏng mực nhũ / ép kim).
  const foilCache = new Map();
  function foil(img) {
    if (foilCache.has(img)) return foilCache.get(img);
    const c = document.createElement('canvas'); c.width = img.width; c.height = img.height;
    const x = c.getContext('2d'); x.drawImage(img, 0, 0);
    const d = x.getImageData(0, 0, c.width, c.height), a = d.data;
    const rc = document.createElement('canvas'); rc.width = c.width; rc.height = c.height;
    const rx = rc.getContext('2d'), rd = rx.createImageData(c.width, c.height), b = rd.data;
    for (let i = 0; i < a.length; i += 4) {
      const dr = a[i] - 184, dg = a[i + 1] - 145, db = a[i + 2] - 74;
      const k = Math.max(0, 1 - Math.sqrt(dr * dr + dg * dg + db * db) / 70);
      a[i] = a[i + 1] = a[i + 2] = 255 * k; a[i + 3] = 255;            // metalness (kênh B)
      b[i] = b[i + 1] = b[i + 2] = 255 * (0.62 - 0.4 * k); b[i + 3] = 255; // roughness (kênh G)
    }
    x.putImageData(d, 0, 0); rx.putImageData(rd, 0, 0);
    const mk = (cv) => { const t = new THREE.CanvasTexture(cv); t.anisotropy = 8; return t; };
    const out = { metalnessMap: mk(c), roughnessMap: mk(rc), metalness: 1, roughness: 1 };
    foilCache.set(img, out); return out;
  }
  const tex = (src, rep) => { const t = new THREE.Texture(); t.image = src; t.encoding = THREE.sRGBEncoding; t.anisotropy = r.capabilities.getMaxAnisotropy(); t.needsUpdate = true; return t; };

  // Sàn + đèn
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(2000, 2000), new THREE.MeshStandardMaterial({ color: BG, roughness: 0.95 }));
  floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; s.add(floor);
  s.add(new THREE.HemisphereLight(0xffffff, 0xd9d0dc, 0.55));
  const key = new THREE.DirectionalLight(0xfff6ee, 3.2); key.position.set(-95, 95, 55); key.castShadow = true;
  key.shadow.mapSize.set(4096, 4096); key.shadow.radius = 9; key.shadow.bias = -0.0004;
  Object.assign(key.shadow.camera, { left: -80, right: 80, top: 100, bottom: -20, near: 10, far: 400 });
  s.add(key);
  const fill = new THREE.DirectionalLight(0xf1e9ff, 1.1); fill.position.set(80, 40, 60); s.add(fill);
  const rim = new THREE.DirectionalLight(0xffffff, 1.6); rim.position.set(20, 70, -120); s.add(rim);

  const PURPLE = 0x4a044e;
  // ---- CHAI 1 lít: thân HDPE trắng, nắp tím, nhãn quấn 161,8 × 100 mm ----
  function bottle() {
    const g = new THREE.Group();
    const R = 4.5, prof = [[0, 0], [4.15, 0], [4.45, 0.18], [R, 0.6], [R, 15.2], [4.42, 16.4], [3.9, 18.2], [2.9, 20], [2.1, 21], [1.72, 21.5], [1.72, 22.6]];
    const lathe = new THREE.LatheGeometry(prof.map(([x, y]) => new THREE.Vector2(x, y)), 160);
    const body = new THREE.Mesh(lathe, new THREE.MeshPhysicalMaterial({ color: 0xfbfafc, roughness: 0.32, clearcoat: 0.35, clearcoatRoughness: 0.25, side: THREE.DoubleSide }));
    body.castShadow = true; body.receiveShadow = true; g.add(body);
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(1.98, 2.02, 2.7, 96), new THREE.MeshPhysicalMaterial({ color: PURPLE, roughness: 0.38, clearcoat: 0.5 }));
    cap.position.y = 23.75; cap.castShadow = true; g.add(cap);
    for (let i = 0; i < 48; i++) { // khía nắp
      const rib = new THREE.Mesh(new THREE.BoxGeometry(0.09, 2.3, 0.12), cap.material); const a = (i / 48) * Math.PI * 2;
      rib.position.set(Math.sin(a) * 2.01, 23.75, Math.cos(a) * 2.01); rib.rotation.y = a; g.add(rib);
    }
    const len = 16.18 / (R + 0.02); // góc phủ của nhãn (rad)
    const lg = new THREE.CylinderGeometry(R + 0.02, R + 0.02, 10, 200, 1, true, -len / 2, len);
    const lbl = new THREE.Mesh(lg, new THREE.MeshPhysicalMaterial(Object.assign({ map: tex(TEX.chai), clearcoat: 0.45, clearcoatRoughness: 0.3 }, foil(TEX.chai))));
    lbl.position.y = 8.1; lbl.rotation.y = -((38.2 + 61.8 / 2) / 161.8 - 0.5) * len; lbl.castShadow = true; g.add(lbl);
    return g;
  }
  // Hàm dựng "gối" (túi, bao): mặt trước/sau phồng theo hàm d(u,v)
  // Túi/bao phồng tự nhiên: mép hàn phẳng, thân phồng dạng parabol mềm, mép hông kéo lõm vào khi phồng,
  // nếp nhăn tỏa từ 4 góc, nếp nén theo chiều ngang. o: { seal, sealTop, sealBot, pull, belly, wrinkle, crimp }
  function pillow(w, h, depth, mapF, mapB, matOpts, o, useFoil) {
    const g = new THREE.Group();
    const cl = (x) => Math.min(1, Math.max(0, x));
    const sm = (e0, e1, x) => { const t = cl((x - e0) / (e1 - e0)); return t * t * (3 - 2 * t); };
    const hash = (x, y) => { const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453; return s - Math.floor(s); };
    const noise = (x, y) => { // value noise mượt
      const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi, u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
      return (hash(xi, yi) * (1 - u) + hash(xi + 1, yi) * u) * (1 - v) + (hash(xi, yi + 1) * (1 - u) + hash(xi + 1, yi + 1) * u) * v - 0.5;
    };
    // độ phồng 0..1 tại (u, v)
    const prof = (u, v) => {
      const su = (u - o.seal) / (1 - 2 * o.seal), sv = (v - o.sealBot) / (1 - o.sealBot - o.sealTop);
      if (su <= 0 || su >= 1 || sv <= 0 || sv >= 1) return 0;
      const x = 2 * su - 1, y = 2 * sv - 1;
      const fu = Math.pow(1 - x * x, 0.55), fv = Math.pow(1 - y * y, 0.5);
      const belly = 1 + o.belly * (1 - sv) * (1 - sv); // phần dưới nặng, phồng hơn
      return fu * fv * belly / (1 + o.belly);
    };
    for (const side of [1, -1]) {
      const geo = new THREE.PlaneGeometry(w, h, 170, 260);
      const p = geo.attributes.position;
      for (let i = 0; i < p.count; i++) {
        const X = p.getX(i), Y = p.getY(i), u = X / w + 0.5, v = Y / h + 0.5;
        const d = prof(u, v);
        // nếp nhăn: tỏa từ 4 góc + nếp nén ngang, chỉ ở vùng phồng vừa phải
        let wr = 0;
        for (const [cu, cv] of [[0, 0], [1, 0], [0, 1], [1, 1]]) {
          const du = (u - cu) * w, dv = (v - cv) * h, r = Math.hypot(du, dv), ang = Math.atan2(dv, du);
          wr += Math.sin(ang * o.rays + noise(r * 0.3, ang * 3) * 2) * Math.exp(-r / (w * 0.22)) * sm(0, 0.12 * w, r);
        }
        wr += 0.35 * noise(u * 9, v * 5 + side * 7) * Math.sin(Math.PI * cl(v)) ;
        const z = depth * d + depth * o.wrinkle * wr * d * (1 - d) * 4 + 0.02 + (v > 1 - o.sealTop ? o.crimp * Math.sin(Y * 40) : 0);
        p.setZ(i, z);
        // mép hông bị kéo vào giữa khi phồng (đường cong lõm đặc trưng của túi/bao đầy hàng)
        const pull = o.pull * Math.sin(Math.PI * cl((v - o.sealBot) / (1 - o.sealBot - o.sealTop))) * Math.pow(Math.abs(2 * u - 1), 3);
        p.setX(i, X * (1 - pull));
        // mép trên/dưới cũng hơi võng vào ở giữa
        const sag = o.pull * 0.5 * Math.sin(Math.PI * u) * Math.pow(Math.abs(2 * v - 1), 4) * (v > 0.5 ? 1 : 0.4);
        p.setY(i, Y * (1 - sag));
      }
      geo.computeVertexNormals();
      const m = new THREE.Mesh(geo, new THREE.MeshPhysicalMaterial(Object.assign({ map: tex(side > 0 ? mapF : mapB) }, matOpts, useFoil ? foil(side > 0 ? mapF : mapB) : {})));
      if (side < 0) m.rotation.y = Math.PI;
      m.castShadow = true; m.receiveShadow = true; m.position.y = h / 2; g.add(m);
    }
    g.userData.prof = prof;
    return g;
  }
  // ---- TÚI ĐỨNG 130 × 210 mm: mép hàn 5 mm, đáy nở để đứng, miệng zip ----
  function pouch() {
    const w = 13, h = 21.03, D = 2.5;
    const o = { seal: 0.04, sealTop: 0.075, sealBot: 0.0, pull: 0.075, belly: 0.55, wrinkle: 0.16, rays: 9, crimp: 0.006 };
    const g = pillow(w, h, D, TEX.tuiF, TEX.tuiB, { roughness: 0.52, clearcoat: 0.25, clearcoatRoughness: 0.45, side: THREE.DoubleSide }, o, true);
    // đáy elip (nếp gấp đứng)
    const bot = new THREE.Mesh(new THREE.CircleGeometry(1, 96), new THREE.MeshStandardMaterial({ color: 0xf4f1f6, roughness: 0.55 }));
    bot.scale.set(w / 2 * (1 - 2 * o.seal) * 0.98, D * 0.98, 1); bot.rotation.x = -Math.PI / 2; bot.position.y = 0.025; g.add(bot);
    const zip = new THREE.Mesh(new THREE.BoxGeometry(w * 0.9, 0.12, 0.09), new THREE.MeshStandardMaterial({ color: 0xe9e4ee, roughness: 0.35 }));
    zip.position.set(0, h * 0.86, D * g.userData.prof(0.5, 0.86) + 0.05); g.add(zip);
    return g;
  }
  // ---- BAO dệt PP 450 × 728 mm: đầy hàng, xệ đáy, nếp gấp miệng bao, đường may ----
  function sack() {
    const w = 45, h = 72.81, D = 8;
    const o = { seal: 0.012, sealTop: 0.03, sealBot: 0.02, pull: 0.09, belly: 0.7, wrinkle: 0.2, rays: 7, crimp: 0 };
    const c = document.createElement('canvas'); c.width = c.height = 256; const x = c.getContext('2d');
    x.fillStyle = '#808080'; x.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 256; i += 8) { x.fillStyle = '#b8b8b8'; x.fillRect(0, i, 256, 4); x.fillStyle = '#5c5c5c'; x.fillRect(i, 0, 3, 256); }
    const weave = new THREE.CanvasTexture(c); weave.wrapS = weave.wrapT = THREE.RepeatWrapping; weave.repeat.set(90, 145);
    const g = pillow(w, h, D, TEX.baoF, TEX.baoB, { roughness: 0.78, bumpMap: weave, bumpScale: 0.06, sheen: 0.4, sheenRoughness: 0.8, side: THREE.DoubleSide }, o);
    for (const yy of [h * (1 - o.sealTop / 2), h * o.sealBot / 2 + 0.3]) { // đường may
      for (let i = 0; i < 70; i++) {
        const st = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.12, 0.08), new THREE.MeshStandardMaterial({ color: 0xf2eee4, roughness: 0.9 }));
        const xx = -w / 2 + 1.2 + i * ((w - 2.4) / 69);
        st.position.set(xx * (1 - o.pull * 0.2), yy, 0.12); g.add(st);
      }
    }
    return g;
  }

  if (SHOT.k === 'api') { window.API = { s, r, bottle, pouch, sack, key, PURPLE }; return null; }
  const cam = new THREE.PerspectiveCamera(SHOT.fov, WW / HH, 1, 2000);
  if (SHOT.k === 'bo') {
    const sk = sack(); sk.position.set(-12, 0, -24); sk.rotation.y = 0.32; s.add(sk);
    const po = pouch(); po.position.set(15, 0, 8); po.rotation.y = -0.38; s.add(po);
    cam.position.set(8, 40, 176); cam.lookAt(-3, 31.5, 0);
  } else if (SHOT.k === 'chai') {
    const bo = bottle(); bo.rotation.y = 0.05; s.add(bo);
    const b2 = bottle(); b2.position.set(10.5, 0, -7); b2.rotation.y = -1.25; s.add(b2);
    cam.position.set(-4, 17, 70); cam.lookAt(3.5, 12.5, 0);
  } else if (SHOT.k === 'tui') {
    const a = pouch(); a.rotation.y = -0.12; s.add(a);
    const b = pouch(); b.position.set(13, 0, -9); b.rotation.y = Math.PI - 0.5; s.add(b);
    cam.position.set(-3, 15, 52); cam.lookAt(5, 10.8, 0);
  } else {
    const a = sack(); a.rotation.y = -0.15; s.add(a);
    cam.position.set(-12, 44, 192); cam.lookAt(0, 37, 0);
  }
  r.render(s, cam);
  return r.domElement.toDataURL('image/png');
}

async function main() {
  if (!fs.existsSync(THREE_JS)) { console.error('Không thấy three.min.js. Đặt THREE_JS=/đường/dẫn/three.min.js'); process.exit(2); }
  const sfx = KIEU === 'e' ? '' : '-d';
  const TEX = texFor(slug, sfx);
  const isChai = !TEX.tuiF;
  const { chromium } = require('playwright');
  const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await browser.newPage({ viewport: { width: 800, height: 600 } });
  await page.setContent('<!doctype html><html><body style="margin:0"></body></html>');
  await page.addScriptTag({ path: THREE_JS });
  await page.evaluate(async (T) => {
    window.TEX = {};
    await Promise.all(Object.entries(T).map(([k, src]) => new Promise((ok, no) => { const i = new Image(); i.onload = () => { window.TEX[k] = i; ok(); }; i.onerror = no; i.src = src; })));
  }, TEX);
  const shots = (opt('--shot', isChai ? 'chai' : 'bo,tui,bao')).split(',');
  for (const k of shots) {
    const t0 = Date.now();
    const url = await page.evaluate(`(() => { window.WW = ${W}; window.WH = ${H}; window.HH = ${H}; window.SHOT = ${JSON.stringify({ k, fov: k === 'bo' ? 24 : 26 })}; document.body.innerHTML = ''; return (${scene.toString()})(); })()`);
    const f = path.join(OUT, `${slug}-mockup-${k}.png`);
    fs.writeFileSync(f, Buffer.from(url.split(',')[1], 'base64'));
    console.log(`${path.relative(process.cwd(), f)}  ${W}×${H}  ${((Date.now() - t0) / 1000).toFixed(1)} s`);
  }
  await browser.close();
}

// Nước → chỉ có nhãn chai; bột → túi + bao (theo file bo.js đã sinh).
function texFor(slug, sfx = '') {
  const has = (f) => fs.existsSync(path.join(OUT, f));
  const sp = JSON.parse(fs.readFileSync(path.join(__dirname, 'san-pham.json'), 'utf8')).san_pham.find((x) => x.slug === slug);
  if (sp && sp.dang !== 'chai' && has(`${slug}-tui-truoc${sfx}.png`)) return { tuiF: b64(`${slug}-tui-truoc${sfx}.png`), tuiB: b64(`${slug}-tui-sau${sfx}.png`), baoF: b64(`${slug}-bao-truoc${sfx}.png`), baoB: b64(`${slug}-bao-sau${sfx}.png`) };
  return { chai: b64(`${slug}-concept-${sfx ? 'd' : 'e'}.png`) };
}
module.exports = { scene, b64, texFor };
if (require.main === module) main().catch((e) => { console.error(e); process.exit(1); });
