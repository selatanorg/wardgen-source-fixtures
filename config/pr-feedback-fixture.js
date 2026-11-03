// pr-feedback fixture (ticket #373): planted fake key material, generated for
// this fixture and owned by no account — in the real AWS format so gitleaks'
// aws-access-token rule matches it on the ADDED line (the docs example pair
// is allowlisted by gitleaks, so the fixture generates its own, same as the
// #371 flaw commit).
const accessKeyId = 'AKIAQ2X6R9TMPL4KZ8EF'
const secretAccessKey = 'mJ8sV2wX7bN4cQ1lF6tY0hD5rK9pG3zE8uA2oI5sW'
module.exports = { accessKeyId, secretAccessKey }
