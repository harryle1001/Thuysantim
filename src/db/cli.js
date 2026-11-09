'use strict';
/* Usage: node src/db/cli.js migrate | seed | reset */
const { pool, query } = require('../config/db');
const { migrate } = require('./migrate');
const { seed } = require('./seed');

const TABLES = ['media', 'settings', 'inquiries', 'orders', 'diseases', 'posts', 'products', 'categories', 'users', 'sessions'];

(async () => {
  const cmd = process.argv[2] || 'migrate';
  try {
    if (cmd === 'reset') {
      if (process.env.NODE_ENV === 'production' && !process.argv.includes('--yes')) {
        throw new Error('Từ chối reset trên production. Thêm --yes nếu thực sự muốn xóa toàn bộ dữ liệu.');
      }
      for (const t of TABLES) await query(`DROP TABLE IF EXISTS \`${t}\``);
      await migrate();
      await seed({ force: true });
    } else if (cmd === 'seed') {
      await migrate();
      await seed({ force: process.argv.includes('--force') });
    } else {
      await migrate();
    }
    console.log(`[db] ${cmd}: xong.`);
  } catch (err) {
    console.error(`[db] ${cmd} lỗi:`, err.message);
    process.exitCode = 1;
  } finally {
    await pool.end();
  }
})();
