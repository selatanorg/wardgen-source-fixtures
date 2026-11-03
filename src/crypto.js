// Clean baseline: digests use sha-256, passwords use a salted KDF.
const { createHash, randomBytes, scryptSync } = require('node:crypto')

function contentDigest(data) {
  return createHash('sha256').update(data).digest('hex')
}

function hashPassword(password) {
  const salt = randomBytes(16).toString('hex')
  return `${salt}:${scryptSync(password, salt, 64).toString('hex')}`
}

module.exports = { contentDigest, hashPassword }
