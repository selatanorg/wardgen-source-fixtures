// FLAW (source.sql-injection): user input is concatenated straight into the
// SQL text — the classic unparameterized query.
const { db } = require('./connection')

function findUserByName(userName) {
  const sql = "SELECT id, name, email FROM users WHERE name = '" + userName + "'"
  return db.query(sql)
}

module.exports = { findUserByName }
