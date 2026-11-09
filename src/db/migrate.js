'use strict';
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const { query, one } = require('../config/db');
const config = require('../config');

async function migrate() {
  const sql = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');
  const statements = sql
    .split(/;\s*(?:\r?\n|$)/)
    .map((s) => s.replace(/^\s*--.*$/gm, '').trim())
    .filter(Boolean);
  for (const stmt of statements) {
    await query(stmt);
  }
  await ensureAdmin();
}

async function ensureAdmin() {
  const row = await one('SELECT COUNT(*) AS n FROM users');
  if (row && row.n > 0) return;
  let password = config.admin.password;
  if (config.isProd && !process.env.ADMIN_PASSWORD) {
    // Never ship a guessable default password to production.
    password = require('crypto').randomBytes(9).toString('base64url');
    console.warn(`[db] ADMIN_PASSWORD chưa đặt — mật khẩu quản trị tạm thời: ${password}  (hãy đổi ngay tại /admin/account)`);
  }
  const hash = await bcrypt.hash(password, 11);
  await query('INSERT INTO users (email, name, password_hash, role) VALUES (?, ?, ?, ?)', [
    config.admin.email.toLowerCase(),
    'Quản trị viên',
    hash,
    'admin',
  ]);
  console.log(`[db] Đã tạo tài khoản quản trị: ${config.admin.email}`);
}

module.exports = { migrate };
