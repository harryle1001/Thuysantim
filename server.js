'use strict';
/**
 * THỦY SẢN TÍM — entry point.
 * Hostinger (hPanel → Websites → Node.js): Entry file = server.js, Start command = npm start.
 */
const config = require('./src/config');
const { pool } = require('./src/config/db');
const { migrate } = require('./src/db/migrate');
const { seed } = require('./src/db/seed');
const { createApp } = require('./src/app');

async function start() {
  if (config.autoMigrate) {
    await migrate();
    if (config.autoSeed) await seed();
  }
  const app = createApp();
  const server = app.listen(config.port, () => {
    console.log(`[server] THỦY SẢN TÍM đang chạy tại cổng ${config.port} (${config.env}) — ${config.baseUrl}`);
  });

  const shutdown = (sig) => {
    console.log(`[server] Nhận ${sig}, đang tắt…`);
    server.close(async () => {
      try {
        await app.locals.sessionStore.close();
      } catch {
        /* ignore */
      }
      await pool.end().catch(() => {});
      process.exit(0);
    });
    setTimeout(() => process.exit(0), 8000).unref();
  };
  process.on('SIGTERM', () => shutdown('SIGTERM'));
  process.on('SIGINT', () => shutdown('SIGINT'));
}

start().catch((err) => {
  console.error('[server] Không thể khởi động:', err.message);
  if (err.code === 'ECONNREFUSED' || err.code === 'ER_ACCESS_DENIED_ERROR' || err.code === 'ER_BAD_DB_ERROR') {
    console.error('[server] Kiểm tra lại các biến DB_HOST, DB_USER, DB_PASSWORD, DB_NAME trong file .env hoặc hPanel.');
  }
  process.exit(1);
});
