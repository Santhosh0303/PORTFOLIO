# Phase 7 QA and Deployment Implementation Plan (Revised)

This plan details the design, structure, and behavior for the Quality Assurance (QA) verification checks and the Continuous Integration/Continuous Deployment (CI/CD) deployment workflow to host the static portfolio on GitHub Pages. It defines 8 local automated scripts, new `package.json` scripts, a manual browser QA checklist, and a launch readiness report.

## User Review Required

> [!IMPORTANT]
> **CLAIMS & EDUCATION AUTHENTICITY GATE**
> - The automated authenticity regression script will check all source code and documentation to ensure that no university, degree, or background entries are reintroduced that violate the approved education profile.
> - Required education entries: `De Montfort University`, `MSc Data Analytics`, `BE Computer Science`.
> - Blocked entries that trigger failure: `University of Leicester`, `MSc Business Analysis and Finance`, `B.Tech Mechanical Engineering`.

> [!WARNING]
> **CI/CD DEPLOYMENT PIPELINE CONSTRAINTS**
> - The GitHub Pages workflow is client-side static only. No database setups, API keys, or auth configurations are permitted.
> - Actual GitHub remote repository setup and pushing code remains a later, human-approved step outside the automated workflow.

---

## File-by-File Purpose

The following files will be created or modified in Phase 7:

### Automated QA Scripts

1. **[check-cost-risk.mjs](file:///C:/Portfolio/scripts/check-cost-risk.mjs) [NEW]**
   - Purpose: Scans `package.json` and code for forbidden paid/backend/auth/API dependencies. Fails if found.
2. **[check-content-integrity.mjs](file:///C:/Portfolio/scripts/check-content-integrity.mjs) [NEW]**
   - Purpose: Scans code and docs to fail if blocked false authority claims (e.g. xAI, SpaceX, Tesla, Google/OpenAI internal authority, H3+/Q20+ public credentials, fake SLAs/users) are found.
3. **[check-links.mjs](file:///C:/Portfolio/scripts/check-links.mjs) [NEW]**
   - Purpose: Checks that all links are protected. Fails if unavailable links are not marked planned/disabled, fake CV path is used, available link has empty href, or `javascript:` links appear.
4. **[check-proof-artifacts.mjs](file:///C:/Portfolio/scripts/check-proof-artifacts.mjs) [NEW]**
   - Purpose: Checks case study proof artifacts. Fails if any artifact has unsafe status, unavailable assets are marked available, or fake screenshots/demos are marked available.
5. **[check-security.mjs](file:///C:/Portfolio/scripts/check-security.mjs) [NEW]**
   - Purpose: Verifies that no `.env` file exists, scans code/docs for API-key-like patterns, credentials, or private certificate material.
6. **[check-no-backend.mjs](file:///C:/Portfolio/scripts/check-no-backend.mjs) [NEW]**
   - Purpose: Scans repository directories to fail if server, api, database configs, auth configs, or express/fastify servers are present.
7. **[check-data-labels.mjs](file:///C:/Portfolio/scripts/check-data-labels.mjs) [NEW]**
   - Purpose: Scans `projects.ts` and UI views to fail unless project statuses match allowed labels exactly.
8. **[check-authenticity-regression.mjs](file:///C:/Portfolio/scripts/check-authenticity-regression.mjs) [NEW]**
   - Purpose: Enforces correct education (DMU & BE Computer Science) and blocks previous Leicester/Mechanical entries.

### CI/CD Workflow & Reports

9. **[deploy.yml](file:///C:/Portfolio/.github/workflows/deploy.yml) [NEW]**
   - Purpose: Configures GitHub Actions CI/CD to run `npm ci`, execute the local QA check suite, run `npm run build`, and deploy the resulting `dist/` folder artifact to GitHub Pages.
10. **[PHASE_07_QA_AND_DEPLOYMENT_REPORT.md](file:///C:/Portfolio/docs/PHASE_07_QA_AND_DEPLOYMENT_REPORT.md) [NEW]**
    - Purpose: Validates build results, QA checks output, and gate pass status.
11. **[LAUNCH_READINESS_REPORT.md](file:///C:/Portfolio/docs/LAUNCH_READINESS_REPORT.md) [NEW]**
    - Purpose: Aggregates verified metrics, project evidence points, and final credentials checklist.
12. **[MANUAL_BROWSER_QA_CHECKLIST.md](file:///C:/Portfolio/docs/MANUAL_BROWSER_QA_CHECKLIST.md) [NEW]**
    - Purpose: Manual audit checklists for browser visuals, screen reader outlines, and responsiveness flow.

---

## Package Script Map & QA Gate Map

We will modify `package.json` to include the following scripts under `scripts`:

```json
"scripts": {
  "dev": "vite",
  "build": "tsc && vite build",
  "preview": "vite preview",
  "qa:cost": "node scripts/check-cost-risk.mjs",
  "qa:content": "node scripts/check-content-integrity.mjs",
  "qa:links": "node scripts/check-links.mjs",
  "qa:proof": "node scripts/check-proof-artifacts.mjs",
  "qa:security": "node scripts/check-security.mjs",
  "qa:no-backend": "node scripts/check-no-backend.mjs",
  "qa:labels": "node scripts/check-data-labels.mjs",
  "qa:authenticity": "node scripts/check-authenticity-regression.mjs",
  "qa": "npm run qa:cost && npm run qa:content && npm run qa:links && npm run qa:proof && npm run qa:security && npm run qa:no-backend && npm run qa:labels && npm run qa:authenticity",
  "deploy:check": "npm run qa && npm run build"
}
```

---

## Detailed QA Scripts Definition

### 1. check-cost-risk.mjs (Zero-Cost Controls)
- **Logic**: Reads `package.json` dependencies and devDependencies, plus source codes.
- **Fail criteria**: If any of the following strings appear: `supabase`, `firebase`, `@vercel/analytics`, `@vercel/speed-insights`, `netlify`, `clerk`, `stripe`, `resend`, `emailjs`, `openai`, `anthropic`, `express`, `fastify`, `next`, or database driver dependencies.

### 2. check-content-integrity.mjs (Content Integrity Checks)
- **Logic**: Scans `src/` and `docs/` files for false authority or metric claims.
- **Fail criteria**: If text contains claims matching high-profile firms (e.g. `xAI`, `Tesla`, `SpaceX`, `OpenAI` as employee/intern, `Google` internal authority), internal aspiration labels (e.g. `H3+`, `Q20+`), SLA metrics (e.g. `99.9% uptime`, `enterprise SLA`), unapproved metrics, or incorrect universities (`University of Leicester`, `Business Analysis and Finance`, `B.Tech Mechanical Engineering`).

### 3. check-links.mjs (Broken Links Check)
- **Logic**: Inspects all `ProjectLink` objects in `src/data/projects.ts` and `profile.ts`.
- **Fail criteria**:
  - `isAvailable` is false but url is not `#`, or planned placeholder details are absent.
  - `isAvailable` is true but url has empty string.
  - Links containing `javascript:` commands.
  - Fake CV file paths present in download anchors.

### 4. check-proof-artifacts.mjs (Proof Integrity Checks)
- **Logic**: Verifies proof artifact records from `src/data/proofArtifacts.ts`.
- **Fail criteria**: If any artifact contains unsafe statuses, or claims live available demo/report URLs that are not validated or exist as fakes.

### 5. check-security.mjs (Security & Credentials Checks)
- **Logic**:
  - Scans for existence of `.env` or `.env.local` files.
  - Scans `src/` and `docs/` for credential-like strings (e.g. password patterns, token patterns, AWS secret keys, private keys).
- **Fail criteria**: If files are found or secret patterns matched.

### 6. check-no-backend.mjs (Static-First Checks)
- **Logic**: Scans the project directory layout.
- **Fail criteria**: If folders like `server/`, `api/`, or files specifying server listeners, express instances, DB connection pools, or auth providers are discovered.

### 7. check-data-labels.mjs (Data Labels Validation)
- **Logic**: Checks that every project status matches the allowed designations.
- **Fail criteria**: If any project status does not exactly match:
  - `Academic Dissertation Project`
  - `Portfolio Project`
  - `MSc / Academic BI Project`
  - `Independent R&D Project`
  - `Virtual Simulations`

### 8. check-authenticity-regression.mjs (Authenticity Regression Checks)
- **Logic**: Checks education bio keywords.
- **Fail criteria**:
  - Fails unless `De Montfort University`, `MSc Data Analytics`, and `BE Computer Science` are found.
  - Fails if `University of Leicester`, `MSc Business Analysis and Finance`, or `B.Tech Mechanical Engineering` appears in the source code or portfolio datasets.

---

## Dead-Code Controls

- Ensure all 8 scripts are wired into the `package.json` `"qa"` script.
- Ensure `.github/workflows/deploy.yml` runs `npm run qa` before `npm run build`.
- Document unused components (e.g., `FeaturedProjectsPreview.tsx` or `RoleSelectorPlaceholder.tsx`) inside the `PHASE_07_QA_AND_DEPLOYMENT_REPORT.md` as intentionally retained placeholders. Do not delete them.

---

## GitHub Pages Workflow Strategy

- **Static-Only**: No server-side tasks. Bundles index files to `dist/`.
- **Build Order**:
  1. `npm ci` (safe install)
  2. `npm run qa` (runs all 8 check scripts)
  3. `npm run build` (bundles React assets)
- **Artifacts**: Uses `actions/upload-pages-artifact` mapping the `dist/` output folder, followed by `actions/deploy-pages` to publish.
- **Security**: Zero secrets are passed or defined. Zero credentials stored in Actions settings.
- **Deployment Gate**: Actual Git branch pushes and repository remote configuration are human-managed, triggered only after local builds pass.

---

## Verification Plan

### Automated Tests
- Verification of QA scripts execution:
  ```powershell
  npm run qa
  ```
  *(Note: This command is forbidden during planning, but will be the core automated verification step during execution.)*

### Manual Verification
- Deploy build folder locally and run manual visual browser checks against `docs/MANUAL_BROWSER_QA_CHECKLIST.md`.
- Inspect build logs to verify that no files are ignored or missing.

---

## Next Exact Step after Implementation

Upon passing all Phase 7 QA and Deployment checks and deploying the static portfolio successfully to GitHub Pages:
- Prepare the final portfolio closure report.
- Deliver the verified production URL to the user.
