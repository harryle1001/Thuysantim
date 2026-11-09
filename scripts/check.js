'use strict';
/* Static checks that need no database: compile every EJS template and require every module. */
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

let failed = 0;
const root = path.join(__dirname, '..');

function walk(dir, ext, out = []) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name);
    if (f.isDirectory()) walk(p, ext, out);
    else if (p.endsWith(ext)) out.push(p);
  }
  return out;
}

for (const file of walk(path.join(root, 'views'), '.ejs')) {
  try {
    ejs.compile(fs.readFileSync(file, 'utf8'), { filename: file });
  } catch (err) {
    failed += 1;
    console.error(`✗ ${path.relative(root, file)}: ${err.message}`);
  }
}

for (const file of walk(path.join(root, 'src'), '.js')) {
  if (file.endsWith(path.join('db', 'cli.js'))) continue; // runs on require
  try {
    require(file);
  } catch (err) {
    failed += 1;
    console.error(`✗ ${path.relative(root, file)}: ${err.message}`);
  }
}

if (failed) {
  console.error(`\n${failed} lỗi.`);
  process.exit(1);
}
console.log('✓ Tất cả template EJS và module đều hợp lệ.');
process.exit(0);
