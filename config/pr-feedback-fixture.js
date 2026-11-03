// pr-feedback fixture (ticket #373): a planted fake AWS-format key — the
// canonical AWS DOCUMENTATION example key (not a real credential), the same
// class the #371 flaw commit planted. This file exists so the wardgen PR
// feedback round-trip has a secret to find on an ADDED line.
const accessKeyId = 'AKIAIOSFODNN7EXAMPLE'
const secretAccessKey = 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY'
module.exports = { accessKeyId, secretAccessKey }
