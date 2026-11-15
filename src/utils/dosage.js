'use strict';
/**
 * Turns the free-text Vietnamese dosage of a product into machine-readable rules
 * for the on-page pond dose calculator. Lines that cannot be parsed are skipped,
 * so admin-entered text never breaks the page — the calculator simply hides.
 *
 *   "Định kỳ: 1 kg/3.000–4.000 m³"  → { type: 'vol',  unit: 'kg', min: 1/4000, max: 1/3000 }
 *   "Đáy ao dơ: 20–30 kg/1.000 m²"  → { type: 'area', unit: 'kg', min: .02,    max: .03 }
 *   "Phòng: 3–5 g/kg thức ăn"       → { type: 'feed', unit: 'g',  min: 3,      max: 5 }
 */

// Vietnamese number: "3.000" = 3000, "0,5" = 0.5
function num(s) {
  return parseFloat(String(s).replace(/\.(?=\d{3}(?!\d))/g, '').replace(',', '.'));
}

const N = '(\\d[\\d.,]*)';
const RANGE = `${N}(?:\\s*[–-]\\s*${N})?`;
const FEED = new RegExp(`${RANGE}\\s*(g|ml)\\s*\\/\\s*kg\\s+thức ăn`, 'i');
const WATER = new RegExp(`${RANGE}\\s*(kg|lít|l|g|ml)\\s*\\/\\s*${RANGE}\\s*(m³|m3|m²|m2)`, 'i');
const UNIT = { kg: 'kg', g: 'g', ml: 'ml', 'lít': 'l', l: 'l' };

function labelOf(line) {
  const m = String(line || '').match(/^([^:：]{2,40})[:：]/);
  return m ? m[1].trim() : '';
}

function parseDosage(viText, localText) {
  const vi = String(viText || '').split('\n');
  const loc = String(localText || '').split('\n');
  const rules = [];
  vi.forEach((line, i) => {
    let m = line.match(FEED);
    let rule = null;
    if (m) {
      const a = num(m[1]);
      const b = m[2] ? num(m[2]) : a;
      rule = { type: 'feed', unit: m[3].toLowerCase(), min: a, max: b };
    } else if ((m = line.match(WATER))) {
      const a = num(m[1]);
      const b = m[2] ? num(m[2]) : a;
      const per1 = num(m[4]);
      const per2 = m[5] ? num(m[5]) : per1;
      const area = /²|2$/.test(m[6]);
      if (per1 > 0 && per2 > 0) rule = { type: area ? 'area' : 'vol', unit: UNIT[m[3].toLowerCase()], min: a / per2, max: b / per1 };
    }
    if (rule && rule.min > 0 && rule.max >= rule.min) {
      rule.label = labelOf(loc[i]) || labelOf(line);
      rules.push(rule);
    }
  });
  return rules;
}

module.exports = { parseDosage };
