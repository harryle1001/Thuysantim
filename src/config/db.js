'use strict';
const mysql = require('mysql2/promise');
const config = require('./index');

const pool = mysql.createPool({
  ...config.db,
  charset: 'utf8mb4',
  waitForConnections: true,
  connectionLimit: 8,
  enableKeepAlive: true,
  dateStrings: false,
  multipleStatements: false,
});

/** Run a query and return rows. */
async function query(sql, params = []) {
  const [rows] = await pool.query(sql, params);
  return rows;
}

/** Return first row or null. */
async function one(sql, params = []) {
  const rows = await query(sql, params);
  return rows[0] || null;
}

/** Run fn inside a transaction with a dedicated connection. */
async function tx(fn) {
  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();
    const result = await fn({
      query: async (sql, params = []) => (await conn.query(sql, params))[0],
    });
    await conn.commit();
    return result;
  } catch (err) {
    await conn.rollback();
    throw err;
  } finally {
    conn.release();
  }
}

module.exports = { pool, query, one, tx };
