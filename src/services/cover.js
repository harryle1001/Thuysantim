'use strict';
/**
 * Editorial cover art for articles without an uploaded cover (1200×675 SVG).
 * Deterministic per slug, so every article gets its own composition: deep
 * amethyst ground, champagne line-work, and a motif that matches the topic
 * (water/ripples for technique, molecules for disease, light rays for news).
 */

function rng(seed) {
  let h = 2166136261;
  for (const ch of String(seed)) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  return () => {
    h += 0x6d2b79f5;
    let t = h;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const PALETTES = [
  ['#072640', '#0e4a7c', '#1777bd'],
  ['#04162a', '#0b365c', '#0f5f9e'],
  ['#06213a', '#0d4470', '#1a86c9'],
  ['#052033', '#0b4a5e', '#13809a'],
];

const f = (n) => Math.round(n * 10) / 10;

function shrimpPath(x, y, s, rot) {
  // A stylised whiteleg shrimp in a single elegant stroke family.
  return `<g transform="translate(${f(x)} ${f(y)}) rotate(${f(rot)}) scale(${f(s)})" fill="none" stroke="url(#gold)" stroke-linecap="round" stroke-linejoin="round">
    <path d="M-120 10 C -90 -60 10 -78 78 -40 C 112 -20 126 14 110 44" stroke-width="5"/>
    <path d="M-120 10 C -80 -30 10 -44 74 -14 C 96 -2 104 18 96 38" stroke-width="2" opacity=".55"/>
    <path d="M-62 -40 L -54 -8 M -30 -54 L -24 -18 M 4 -60 L 6 -22 M 38 -56 L 34 -18 M 68 -42 L 58 -8" stroke-width="2.4" opacity=".7"/>
    <path d="M110 44 L 136 70 M 110 44 L 128 82 M 110 44 L 104 86" stroke-width="3"/>
    <path d="M-120 10 C -150 -14 -190 -50 -230 -96 M -118 18 C -160 12 -200 -6 -250 -26" stroke-width="1.6" opacity=".75"/>
    <path d="M-96 26 L -110 62 M -70 30 L -80 70 M -44 30 L -50 72 M -18 26 L -20 66" stroke-width="1.8" opacity=".6"/>
    <circle cx="-104" cy="-6" r="5" fill="#ecd49b" stroke="none"/>
  </g>`;
}

function coverSvg(slug, topic = 'technique') {
  const r = rng(slug);
  const [c0, c1, c2] = PALETTES[Math.floor(r() * PALETTES.length)];
  const gx = f(20 + r() * 60);
  const parts = [];

  // fine survey grid
  parts.push(`<g stroke="rgba(255,255,255,.035)" stroke-width="1">${Array.from({ length: 22 }, (_, i) => `<path d="M${i * 60} 0V675"/>`).join('')}${Array.from({ length: 12 }, (_, i) => `<path d="M0 ${i * 60}H1200"/>`).join('')}</g>`);

  if (topic === 'disease') {
    // molecule lattice
    const nodes = Array.from({ length: 16 }, () => [600 + r() * 560, 60 + r() * 560]);
    const edges = [];
    nodes.forEach((a, i) => nodes.forEach((b, j) => { if (j > i && Math.hypot(a[0] - b[0], a[1] - b[1]) < 170) edges.push(`<path d="M${f(a[0])} ${f(a[1])}L${f(b[0])} ${f(b[1])}"/>`); }));
    parts.push(`<g stroke="url(#gold)" stroke-width="1.6" opacity=".8">${edges.join('')}</g>`);
    parts.push(nodes.map(([x, y]) => `<circle cx="${f(x)}" cy="${f(y)}" r="${f(4 + r() * 9)}" fill="${r() > 0.6 ? '#ecd49b' : 'none'}" stroke="#ecd49b" stroke-width="1.6" opacity="${f(0.5 + r() * 0.5)}"/>`).join(''));
    parts.push(`<circle cx="880" cy="330" r="230" fill="none" stroke="rgba(236,212,155,.35)" stroke-width="1.4"/><circle cx="880" cy="330" r="244" fill="none" stroke="rgba(236,212,155,.18)" stroke-dasharray="3 9"/>`);
  } else if (topic === 'news') {
    const cx = 900, cy = 300;
    parts.push(`<g stroke="url(#gold)" opacity=".7">${Array.from({ length: 36 }, (_, i) => { const a = (i / 36) * Math.PI * 2; const r1 = 90 + (i % 3) * 14; const r2 = 260 + r() * 120; return `<path d="M${f(cx + Math.cos(a) * r1)} ${f(cy + Math.sin(a) * r1)}L${f(cx + Math.cos(a) * r2)} ${f(cy + Math.sin(a) * r2)}" stroke-width="${f(0.8 + r() * 1.6)}"/>`; }).join('')}</g>`);
    parts.push(`<circle cx="${cx}" cy="${cy}" r="70" fill="url(#goldFill)" opacity=".95"/>`);
  } else {
    // ripples + a shrimp gliding through them
    const cx = 820 + r() * 200, cy = 240 + r() * 200;
    parts.push(`<g fill="none" stroke="rgba(236,212,155,.32)">${Array.from({ length: 7 }, (_, i) => `<ellipse cx="${f(cx)}" cy="${f(cy)}" rx="${60 + i * 62}" ry="${f((60 + i * 62) * 0.42)}" stroke-width="${f(1.6 - i * 0.15)}" opacity="${f(1 - i * 0.12)}"/>`).join('')}</g>`);
    parts.push(shrimpPath(cx + 20, cy - 10, 0.9 + r() * 0.35, -18 + r() * 36));
  }

  // bubbles
  parts.push(Array.from({ length: 14 }, () => `<circle cx="${f(560 + r() * 620)}" cy="${f(40 + r() * 600)}" r="${f(2 + r() * 6)}" fill="none" stroke="rgba(236,212,155,.45)" stroke-width="1"/>`).join(''));

  // waves at the bottom
  parts.push(`<path d="M0 560 C 200 520 400 600 600 560 S 1000 520 1200 560 V675 H0z" fill="rgba(255,255,255,.035)"/><path d="M0 600 C 240 570 460 640 700 600 S 1060 570 1200 600 V675 H0z" fill="rgba(255,255,255,.05)"/>`);

  // editorial masthead, left: issue number + series name (language-neutral, like a journal)
  const series = { technique: 'Farming Notes', disease: 'Health Lab', news: 'Newsroom' }[topic] || 'Farming Notes';
  const issue = String(1 + Math.floor(r() * 98)).padStart(2, '0');
  parts.push(`<g font-family="Cormorant Garamond, Playfair Display, Georgia, serif">
    <text x="64" y="250" font-size="22" letter-spacing="6" fill="#ecd49b" font-family="Be Vietnam Pro, Arial, sans-serif">NO. ${issue}</text>
    <path d="M64 276H200" stroke="url(#gold)" stroke-width="1.4"/>
    <text x="60" y="372" font-size="80" font-style="italic" font-weight="600" fill="url(#gold)">${series}</text>
  </g>`);

  // brand mark, lower left
  parts.push(`<g transform="translate(64 600)"><path d="M0 0H44" stroke="#d6b56f" stroke-width="1.4"/><text x="60" y="5" font-family="Be Vietnam Pro, Arial, sans-serif" font-size="15" letter-spacing="5" fill="#ecd49b">THỦY SẢN TÍM · AQUA BIOSCIENCE</text></g>`);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675" role="img" aria-hidden="true">
  <defs>
    <radialGradient id="bg" cx="${gx}%" cy="10%" r="95%"><stop offset="0" stop-color="${c2}"/><stop offset=".45" stop-color="${c1}"/><stop offset="1" stop-color="${c0}"/></radialGradient>
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f6e7bd"/><stop offset=".5" stop-color="#d8b46c"/><stop offset="1" stop-color="#a47a36"/></linearGradient>
    <radialGradient id="goldFill"><stop offset="0" stop-color="#fff6dc"/><stop offset=".6" stop-color="#e2c27e"/><stop offset="1" stop-color="#a47a36"/></radialGradient>
    <radialGradient id="glow" cx="20%" cy="100%" r="70%"><stop offset="0" stop-color="rgba(164,122,54,.35)"/><stop offset="1" stop-color="rgba(164,122,54,0)"/></radialGradient>
  </defs>
  <rect width="1200" height="675" fill="url(#bg)"/>
  <rect width="1200" height="675" fill="url(#glow)"/>
  ${parts.join('\n  ')}
</svg>`;
}

module.exports = { coverSvg };
