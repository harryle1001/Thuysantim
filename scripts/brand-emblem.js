/* Generates the THỦY SẢN TÍM emblem: a segmented shrimp curling around a fish, gold on a navy-to-amethyst shield. */
const cx = 32, cy = 33.5, R = 13.6;
const a0 = -38, a1 = 222; // head (upper right) -> tail (upper left), clockwise through the bottom
const rad = (d) => (d * Math.PI) / 180;
const f = (n) => Math.round(n * 100) / 100;
const thick = (t) => 6.4 - 4.4 * Math.pow(t, 1.15); // body thickness, head -> tail
const pt = (deg, r) => [cx + r * Math.cos(rad(deg)), cy + r * Math.sin(rad(deg))];

function bodyPath() {
  const N = 60, outer = [], inner = [];
  for (let i = 0; i <= N; i++) {
    const t = i / N, d = a0 + (a1 - a0) * t, w = thick(t);
    outer.push(pt(d, R + w / 2));
    inner.push(pt(d, R - w / 2));
  }
  const pts = outer.concat(inner.reverse());
  return 'M' + pts.map((p) => `${f(p[0])} ${f(p[1])}`).join(' L') + ' Z';
}

function segments() {
  const out = [];
  for (let i = 1; i <= 6; i++) {
    const t = 0.1 + i * 0.12, d = a0 + (a1 - a0) * t, w = thick(t);
    const o = pt(d + 4, R + w / 2 + 0.2), m = pt(d, R), n = pt(d + 4, R - w / 2 - 0.2);
    out.push(`M${f(o[0])} ${f(o[1])} Q${f(m[0] - 0.4)} ${f(m[1])} ${f(n[0])} ${f(n[1])}`);
  }
  return out.join(' ');
}

function legs() {
  const out = [];
  for (let i = 0; i < 5; i++) {
    const t = 0.16 + i * 0.1, d = a0 + (a1 - a0) * t;
    const s = pt(d, R - thick(t) / 2), e = pt(d - 6, R - thick(t) / 2 - 2.6);
    out.push(`M${f(s[0])} ${f(s[1])} L${f(e[0])} ${f(e[1])}`);
  }
  return out.join(' ');
}

const tail = pt(a1, R);
const tDir = a1 + 90; // tangent at the tail, pointing onward
const fan = [-28, 0, 28].map((k) => {
  const e = [tail[0] + 5.2 * Math.cos(rad(tDir + k)), tail[1] + 5.2 * Math.sin(rad(tDir + k))];
  const l = [tail[0] + 3 * Math.cos(rad(tDir + k - 14)), tail[1] + 3 * Math.sin(rad(tDir + k - 14))];
  const r = [tail[0] + 3 * Math.cos(rad(tDir + k + 14)), tail[1] + 3 * Math.sin(rad(tDir + k + 14))];
  return `M${f(tail[0])} ${f(tail[1])} L${f(l[0])} ${f(l[1])} L${f(e[0])} ${f(e[1])} L${f(r[0])} ${f(r[1])} Z`;
}).join(' ');

const head = pt(a0, R);
const hDir = a0 - 90; // tangent at the head, pointing forward (up-right-ish)
const rost = [head[0] + 6 * Math.cos(rad(hDir + 8)), head[1] + 6 * Math.sin(rad(hDir + 8))];
const eye = pt(a0 + 4, R + 1.2);
const ant1 = `M${f(rost[0] - 1)} ${f(rost[1] + 1)} C ${f(rost[0] - 2)} ${f(rost[1] - 7)}, ${f(cx + 2)} ${f(cy - 25)}, ${f(cx - 12)} ${f(cy - 21.5)}`;
const ant2 = `M${f(rost[0])} ${f(rost[1] + 0.6)} C ${f(rost[0] + 3)} ${f(rost[1] - 7)}, ${f(cx + 8)} ${f(cy - 27)}, ${f(cx - 3)} ${f(cy - 25.4)}`;

const body = bodyPath();
const headCap = `M${f(head[0] - 3.3)} ${f(head[1] + 1.6)} Q${f(head[0] - 1.5)} ${f(head[1] - 4.8)} ${f(rost[0])} ${f(rost[1])} Q${f(head[0] + 4.2)} ${f(head[1] + 0.4)} ${f(head[0] + 2.6)} ${f(head[1] + 3.6)} Z`;

const SHIELD = 'M32 1.6 L57.6 9.4 C58.2 25.6 56.6 45 32 62.4 C7.4 45 5.8 25.6 6.4 9.4 Z';
const SHIELD_IN = 'M32 4.5 L54.9 11.5 C55.3 25.8 53.9 43.2 32 59 C10.1 43.2 8.7 25.8 9.1 11.5 Z';

function emblem(id = 'e', { ring = true, bg = true, shield = true } = {}) {
  return `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
<defs>
<linearGradient id="${id}g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f6e7bd"/><stop offset=".45" stop-color="#d8b46c"/><stop offset="1" stop-color="#a47a36"/></linearGradient>
<linearGradient id="${id}b" x1="0" y1="0" x2=".35" y2="1"><stop offset="0" stop-color="#4a2f86"/><stop offset=".5" stop-color="#0f3f6e"/><stop offset="1" stop-color="#061f36"/></linearGradient>
</defs>
${bg ? (shield ? `<path d="${SHIELD}" fill="url(#${id}b)" stroke="url(#${id}g)" stroke-width="1.6" stroke-linejoin="round"/>` : `<circle cx="32" cy="32" r="31.5" fill="url(#${id}b)"/>`) : ''}
${ring ? (shield ? `<path d="${SHIELD_IN}" fill="none" stroke="url(#${id}g)" stroke-width=".45" stroke-linejoin="round" opacity=".6"/>` : `<circle cx="32" cy="32" r="29.6" fill="none" stroke="url(#${id}g)" stroke-width="1"/><circle cx="32" cy="32" r="27.4" fill="none" stroke="url(#${id}g)" stroke-width=".4" opacity=".5"/>`) : ''}
${shield && bg ? '<g transform="translate(32 35) scale(.9) translate(-32 -33)">' : '<g>'}
<g fill="none" stroke="url(#${id}g)" stroke-linecap="round" stroke-width=".55" opacity=".9"><path d="${ant1}"/><path d="${ant2}"/></g><path d="${legs()}" fill="none" stroke="url(#${id}g)" stroke-width=".5" stroke-linecap="round" opacity=".55"/>
<path d="${fan}" fill="url(#${id}g)"/>
<path d="${body}" fill="url(#${id}g)"/>
<path d="${headCap}" fill="url(#${id}g)"/>
<path d="${segments()}" fill="none" stroke="#061f36" stroke-width=".5" opacity=".55"/>
<circle cx="${f(eye[0])}" cy="${f(eye[1])}" r=".95" fill="#061f36"/>
<g fill="url(#${id}g)">
<path d="M22.6 34.2 C 25.8 29.9, 32.6 29.7, 36.6 33.6 C 32.6 37.6, 25.8 37.6, 22.6 34.2 Z"/>
<path d="M36.3 33.6 L 41 30.5 Q 39.6 33.6 41 36.8 Z"/>
<path d="M28.4 30.7 Q 30.4 28 33.2 30.6 Z" opacity=".9"/>
<path d="M29.4 36.7 Q 30.6 38.8 32.6 37 Z" opacity=".8"/>
</g>
<circle cx="25.4" cy="33.6" r=".8" fill="#061f36"/>
<path d="M27.7 32 q1.1 2.1 0 4.2" stroke="#061f36" stroke-width=".5" fill="none" opacity=".6"/>
</g>
</svg>`;
}

module.exports = { emblem };
if (require.main === module) process.stdout.write(emblem(process.argv[2] || 'e'));
