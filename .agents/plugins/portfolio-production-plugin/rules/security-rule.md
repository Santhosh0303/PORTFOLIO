# Security Rule

## Objective
Enforce repository security and prevent execution of destructive commands.

## Rules
- Block creation of `.env` files.
- Reject committing hardcoded API keys or credentials.
- Block the usage of `npm install`, `npm create vite`, `git push --force`, `Remove-Item`, `rmdir`, and `del` within the workspace.
- Protect `.git` folders from deletion or modification.
