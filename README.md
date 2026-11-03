# wardgen-source-fixtures

Scan fixture repo for the wardgen repo-tier source checks (ticket #371).

- Commit 1 (this one) is the CLEAN baseline: parameterized SQL, sha256,
  no secrets, non-vulnerable dependency pins.
- The next commit plants four flaw classes, one per source.* check:
  secret-in-code, unparameterized SQL, weak crypto, vulnerable dependency.

Nothing in this repo is a real credential. Do not add real ones.
