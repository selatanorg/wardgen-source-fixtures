// Clean baseline: the user lookup is parameterized — user input travels as
// a bound value, never concatenated into SQL text.
const { db } = require('./connection')

function findUserByName(userName) {
  const sql = 'SELECT id, name, email FROM users WHERE name = ?'
  return db.query(sql, [userName])
}

module.exports = { findUserByName }
