// Nhạc nền ambient "dưới nước" 60s, tổng hợp bằng code (không bản quyền) -> public/music.wav
import { writeFileSync, mkdirSync } from 'node:fs';
const SR = 44100, DUR = 60, N = SR * DUR, PHI = 1.618033988749895;
const L = new Float32Array(N), R = new Float32Array(N);
const mtof = (m) => 440 * 2 ** ((m - 69) / 12);
// Hợp âm pad chậm (A minor add9 -> F maj7 -> C add9 -> G sus), mỗi hợp âm 15s
const chords = [[45, 52, 59, 60, 64, 71], [41, 48, 57, 60, 64, 69], [48, 55, 62, 64, 67, 74], [43, 50, 57, 62, 67, 74]];
const env = (t) => Math.min(1, t / 3) * Math.min(1, (DUR - t) / 4);
let seed = 7; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647) * 2 - 1;
let lpL = 0, lpR = 0, lp2L = 0, lp2R = 0;
for (let i = 0; i < N; i++) {
  const t = i / SR, ci = Math.min(3, Math.floor(t / 15)), x = (t % 15) / 15;
  const xf = Math.min(1, x * 6), prev = chords[Math.max(0, ci - 1)], cur = chords[ci];
  let l = 0, r = 0;
  for (let k = 0; k < 6; k++) {
    const g = 0.05 * (1 - k * 0.08);
    for (const [notes, w] of [[cur, ci === 0 ? 1 : xf], [prev, ci === 0 ? 0 : 1 - xf]]) {
      if (w <= 0) continue;
      const f = mtof(notes[k]), det = 1 + 0.0018 * Math.sin(t * 0.21 + k);
      const trem = 0.75 + 0.25 * Math.sin(t * (0.13 + k * 0.031) * PHI + k);
      l += g * w * trem * (Math.sin(2 * Math.PI * f * t) + 0.3 * Math.sin(2 * Math.PI * f * 2 * det * t));
      r += g * w * trem * (Math.sin(2 * Math.PI * f * det * t + 0.4) + 0.3 * Math.sin(2 * Math.PI * f * 2 * t));
    }
  }
  // tiếng nước: noise lọc thấp, "thở" theo nhịp sóng
  const sw = 0.5 + 0.5 * Math.sin(t * 0.35) * Math.sin(t * 0.35 / PHI);
  lpL += 0.012 * (rnd() - lpL); lpR += 0.012 * (rnd() - lpR);
  lp2L += 0.05 * (lpL - lp2L); lp2R += 0.05 * (lpR - lp2R);
  l += lp2L * (0.9 + 1.4 * sw); r += lp2R * (0.9 + 1.4 * sw);
  // chuông thủy tinh nhẹ ở mỗi chuyển cảnh
  for (const [at, m] of [[0.4, 76], [6, 79], [16, 81], [26, 76], [42, 83], [52, 88]]) {
    const d = t - at; if (d < 0 || d > 5) continue;
    const e = Math.exp(-d * 1.3) * 0.11, f = mtof(m);
    const b = e * (Math.sin(2 * Math.PI * f * d) + 0.4 * Math.sin(2 * Math.PI * f * 2.76 * d) * Math.exp(-d * 2));
    l += b * 0.9; r += b * 1.1;
  }
  const e = env(t); L[i] = Math.tanh(l * e * 1.2) * 0.8; R[i] = Math.tanh(r * e * 1.2) * 0.8;
}
// echo nhẹ tạo không gian
for (let i = 0; i < N; i++) { const d = Math.floor(SR * 0.382); if (i >= d) { L[i] += R[i - d] * 0.28; R[i] += L[i - d] * 0.28; } }
const buf = Buffer.alloc(44 + N * 4);
buf.write('RIFF', 0); buf.writeUInt32LE(36 + N * 4, 4); buf.write('WAVEfmt ', 8); buf.writeUInt32LE(16, 16);
buf.writeUInt16LE(1, 20); buf.writeUInt16LE(2, 22); buf.writeUInt32LE(SR, 24); buf.writeUInt32LE(SR * 4, 28);
buf.writeUInt16LE(4, 32); buf.writeUInt16LE(16, 34); buf.write('data', 36); buf.writeUInt32LE(N * 4, 40);
for (let i = 0; i < N; i++) {
  buf.writeInt16LE(Math.max(-32767, Math.min(32767, Math.round(L[i] * 32767))), 44 + i * 4);
  buf.writeInt16LE(Math.max(-32767, Math.min(32767, Math.round(R[i] * 32767))), 46 + i * 4);
}
mkdirSync(new URL('../public/', import.meta.url), { recursive: true });
writeFileSync(new URL('../public/music.wav', import.meta.url), buf);
console.log('public/music.wav');
