// Xuất phụ đề .srt (cho YouTube/Facebook) từ src/captions.json
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
const caps = JSON.parse(readFileSync(new URL('../src/captions.json', import.meta.url)));
const ts = (s) => { const ms = Math.round(s * 1000); const p = (n, w = 2) => String(n).padStart(w, '0');
  return `${p(Math.floor(ms / 3600000))}:${p(Math.floor(ms / 60000) % 60)}:${p(Math.floor(ms / 1000) % 60)},${p(ms % 1000, 3)}`; };
const srt = caps.map((c, i) => `${i + 1}\n${ts(c.from)} --> ${ts(c.to)}\n${c.text}\n`).join('\n');
mkdirSync(new URL('../out/', import.meta.url), { recursive: true });
writeFileSync(new URL('../out/thuysantim-intro.vi.srt', import.meta.url), srt);
console.log('out/thuysantim-intro.vi.srt');
