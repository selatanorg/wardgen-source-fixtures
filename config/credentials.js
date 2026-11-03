// FLAW (source.secrets): long-lived cloud credentials committed to code.
// Fake key material in the real AWS format — generated for this fixture,
// belongs to no account (not the documentation example pair, which gitleaks
// allowlists).
module.exports = {
  accessKeyId: 'AKIAJ4XWD6KWM3YCKDVQ',
  secretAccessKey: 'kWq3vR7xTb2mN9pZsY5cH8jL4eF6uA1dG0iS2wQ',
  region: 'us-east-1',
}
