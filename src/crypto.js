// FLAW (source.weak-crypto): passwords hashed with plain md5 — broken and
// unsalted; contentDigest downgraded to md5 as well.
const { createHash } = require('node:crypto')

function contentDigest(data) {
  return createHash('md5').update(data).digest('hex')
}

function hashPassword(password) {
  return createHash('md5').update(password).digest('hex')
}

module.exports = { contentDigest, hashPassword }
