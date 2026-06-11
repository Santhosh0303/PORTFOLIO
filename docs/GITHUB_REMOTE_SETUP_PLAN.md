# GitHub Remote Setup Plan

This plan establishes the design, configurations, and verification steps required to add a GitHub remote repository and deploy the static portfolio application to GitHub Pages.

## 1. Local Workspace Parameters

- **Current Repository Path**: `C:\Portfolio`
- **External Obsidian Brain Path**: `C:\DigitalBrain-Portfolio`
- **Current Branch**: `master`
- **Working Tree Status**: Clean (Verified via `git status --short`)
- **Local Commit History**:
  - `ca01626 docs: record post-commit reconciliation audit`
  - `b257828 docs: record first commit execution report`
  - `f77a2c8 feat: complete static portfolio core with automated QA checkpoints`

---

## 2. GitHub Pages Target Options & Base-Path Analysis

### Option A: User Site Repository
- **Repository Name**: Must be exactly `<username>.github.io`
- **Served URL**: `https://<username>.github.io/`
- **Vite Base Path**: Default root `/` works correctly.
- **Pros**: Shortest, premium-looking URL path.
- **Cons**: Consumes the single root namespace slot under the GitHub account.

### Option B: Project Site Repository (Recommended)
- **Repository Name**: Any name (e.g., `saisanthosh-portfolio` or `portfolio`)
- **Served URL**: `https://<username>.github.io/<repository-name>/`
- **Vite Base Path**: Usually requires `/<repository-name>/` to resolve absolute asset paths correctly.
- **Pros**: Leaves the root user site slot open for other projects; keeps the portfolio compartmentalized.

### Vite Config Reconciliation
In `vite.config.ts`, the base path is currently configured as relative:
```typescript
base: './'
```
This relative configuration ensures that compiled asset paths (e.g. `assets/index.js`) resolve correctly against the current folder level, meaning it will function correctly on **both** User Sites and Project Sites without needing to hardcode the repository name in the configuration. 

---

## 3. Required User Confirmation

> [!IMPORTANT]
> **BEFORE ADDING REMOTES OR PUSHING CODE**
> Please review and confirm the following parameters:
> 1. Your exact **GitHub Username** (e.g., `saisanthosh0303`).
> 2. Your target **Repository Name** (e.g., `saisanthosh-portfolio`).
> 3. Your choice between a **Project Site** (Option B) or **User Site** (Option A).

---

## 4. Planned Git Remote Commands (Planned Only - Do Not Execute)

Once parameters are confirmed and you are ready to configure the remote:

1. **Rename local branch to main**:
   ```bash
   git branch -M main
   ```
2. **Add GitHub remote origin**:
   ```bash
   git remote add origin https://github.com/<username>/<repository-name>.git
   ```
3. **Verify remote settings**:
   ```bash
   git remote -v
   ```
4. **Push commits to GitHub**:
   ```bash
   git push -u origin main
   ```

---

## 5. Deployment & Build Expectations

Upon executing `git push`, the following automated steps occur:
1. **CI/CD Action Trigger**: GitHub Actions automatically starts the workflow defined in `.github/workflows/deploy.yml`.
2. **Quality Check Gate**: The workflow runs `npm ci` followed by `npm run qa`. If any check script (such as cost-risk or authenticity-regression) fails, the build halts and deployment is blocked.
3. **Asset Compilation**: If checks pass, `npm run build` compiles static production assets into `dist/`.
4. **Publishing**: The runner uploads the `dist/` directory and publishes the static page via GitHub Pages.

---

## 6. GitHub Pages Settings Checklist

After pushing the codebase, perform these checks in your web browser:
- [ ] Go to your repository page on GitHub.
- [ ] Click **Settings** -> **Pages** (in the sidebar).
- [ ] Under **Build and deployment** -> **Source**, select **GitHub Actions** from the dropdown menu.
- [ ] Under **Danger Zone** (at the bottom of Settings), verify the repository visibility is set to **Public** (required for free-tier Pages hosting).

---

## 7. Rollback & Safety Guidelines

- **Authentication Errors**: If HTTPS pushing fails, switch the remote to SSH:
  ```bash
  git remote set-url origin git@github.com:<username>/<repository-name>.git
  ```
- **Page asset 404s**: If the live URL renders as a blank screen or Console shows 404 errors, verify that `vite.config.ts` still has `base: './'`.
- **Accidental code deletion**: Do not use `git push --force` if the repository was initialized with files (like a default README or LICENSE). Fetch and merge them first or set up a clean, empty repository.

---

## 8. Next Exact Step

Await user approval of the GitHub Remote Setup Plan and confirmation of the repository name and username.
