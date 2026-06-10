# Local Implementation Brief: Portfolio Development

This document provides a localized, compact execution guide for the Portfolio development, derived from the Enterprise Portfolio Implementation Dossier. It establishes the constraints, stack, and rules required for all cooperating agents to align with the core requirements.

## 1. Project Identity & Positioning
- **Primary Identity**: Evidence-Led Data Analyst & BI Builder
- **Core Tagline**: Data Quality. BI Dashboards. Geospatial ML. AI Context Validation R&D.
- **Main Promise**: I turn messy data into validated pipelines, dashboards and decisions.
- **Role Positioning Rules**:
  - **Primary Target UK Roles**: Junior Data Analyst, Graduate Data Analyst, BI Analyst, Power BI Analyst, Data Quality Analyst, Data Governance / Assurance Analyst, Reporting / MI Analyst.
  - **Secondary Target Roles**: Operations Data Analyst, Geospatial / Public Sector Analyst, AI Data / LLM Evaluation Analyst, Analytics Engineer Trainee.
  - **Excluded / Do Not Lead With**: ML Engineer, MLOps Engineer, Backend Developer, AI Researcher, Cybersecurity Analyst, Quant Analyst.

## 2. Locked Split-Brain Operating Model
To prevent repository contamination and optimize token budget:
- **C:\Portfolio**: The *only* directory containing portfolio code, scripts, static build artifacts, and local documentation. No Obsidian vaults or governance folders.
- **C:\DigitalBrain-Portfolio**: The external Obsidian Digital Brain and governance repository. No application source code or package configurations.
- **Rules**:
  - Do not merge these folders.
  - Do not copy the full digital brain into `C:\Portfolio`.
  - Do not move code files into `C:\DigitalBrain-Portfolio`.
  - Always read the local context gateway first before any task.
  - Sync session logs and task changelogs back to the external brain after every task.

## 3. Zero-Cost & Static-First Architecture
- **Core Application**: Must be hosted on **GitHub Pages** as a Static Single Page Application (SPA).
- **Stack Constraint**: standard client-side HTML, JS, CSS, and React/Vite/TS/Tailwind. No backend runtime server (Node/Python), database servers, authentication portals, or payment gateways.
- **API and Dependency Rules**: Zero paid dependencies, subscriptions, or infrastructure keys.
- **Free-Tier Satellite Principle**: Optional labs or APIs (e.g. Hugging Face Spaces, Cloudflare Pages, Pinecone Starter, Supabase pgvector) are permitted *only* if:
  1. The portfolio core runs completely fine without them.
  2. They fail gracefully with visual fallback states and have local/offline mocks.
  3. They include a `FREE_TIER_RISK.md` and `LOCAL_FALLBACK.md`.

## 4. Phase Roadmap
- **Phase 1**: Portfolio Repo Readiness + Development Plan Ingestion (Current)
- **Phase 2**: Static App Scaffold
- **Phase 3**: Data Model
- **Phase 4**: Homepage
- **Phase 5**: Role Selector
- **Phase 6**: Project Case Studies
- **Phase 7**: QA & Deployment

## 5. Approved Stack
- **Portfolio Core**: React, Vite, TypeScript, Tailwind CSS, HTML5, Vanilla CSS.
- **CI/CD & Hosting**: GitHub Actions, GitHub Pages.
- **Data Formats & Pipelines**: Apache Arrow / Parquet, CSV, JSON, DuckDB, Pandas, GeoPandas.
- **ML & Analysis**: scikit-learn.
- **Optional Telemetry & Validation (Demos)**: FastAPI, Prometheus, OpenTelemetry, Arize Phoenix / Langfuse (local or screenshots), Microsoft Presidio (PII masking), pytest.

## 6. Forbidden Stack & Actions
- **Stack**: Paid domains, paid databases, paid backends, paid form services, authentication providers (Clerk, Auth0), payment gateways (Stripe).
- **Destructive/Forbidden Commands**:
  - `npm create vite`
  - `npm install`
  - `git push`
  - `git commit`
  - `Remove-Item`
  - `rmdir`
  - `del`
  - (and equivalent terminal commands for deletion or unauthorized scaffolding/installation/commits in Phase 1).

## 7. Mandatory Project Labels & Evidence Registry
Every reference to a project must use these exact labels and metrics:

### Academic Dissertation Project: Rural Financial Accessibility in Scotland
- **Metrics**: 7,392 Scottish Data Zones; 1,226 rural ML records; 409 scenario candidates; 4 Power BI pages; Random Forest ROC-AUC 0.793; QA 71 PASS / 0 WARN / 0 FAIL.
- **Constraint**: Must never be described as commercial client work or direct government policy deployment.

### Portfolio Project: UK SME Data Quality Pipeline
- **Metrics**: 2,500 input records; 222 processed; 2,278 quarantined; 57 scorecard metrics; 923 tests passed; 2,963 regex rules applied.
- **Constraint**: Must be presented as a portfolio engineering proof piece using synthetic data.

### MSc / Academic BI Project: Midlands Theatre BI Data Mart
- **Metrics**: 6-table star schema; 1 fact table; 5 dimensions; 18,942 rows loaded; 6,132 fact rows; 7 foreign-key relationships.
- **Constraint**: Must be labelled as MSc or academic work.

### Independent R&D Project: VCCF (Verified Code Context Fabric)
- **Constraint**: Must always be designated as an Independent R&D Project, never a commercialized production software product.

### Virtual Simulations: KPMG UK + British Airways Forage
- **Constraint**: Must always be designated as Virtual Simulations, never as direct employment, contracting, or internships at those firms.

## 8. Source-of-Truth Hierarchy
1. [COMPACT_CONTEXT.md](file:///C:/DigitalBrain-Portfolio/brain/00_CONTROL/COMPACT_CONTEXT.md)
2. [PROJECT_CHARTER.md](file:///C:/DigitalBrain-Portfolio/brain/00_CONTROL/PROJECT_CHARTER.md)
3. [SOURCE_ALIGNMENT.md](file:///C:/DigitalBrain-Portfolio/brain/00_CONTROL/SOURCE_ALIGNMENT.md)
4. [PUBLIC_CLAIMS_POLICY.md](file:///C:/DigitalBrain-Portfolio/brain/01_SOURCE_OF_TRUTH/PUBLIC_CLAIMS_POLICY.md)
5. [ZERO_COST_POLICY.md](file:///C:/DigitalBrain-Portfolio/brain/01_SOURCE_OF_TRUTH/ZERO_COST_POLICY.md)

## 9. Phase 2 Scaffold Readiness Checklist
- [x] Phase 1 Repo Readiness audit completed.
- [x] Compact local execution brief created at `docs/LOCAL_IMPLEMENTATION_BRIEF.md`.
- [x] Phase 1 readiness report created at `docs/PHASE_01_READINESS_REPORT.md`.
- [x] External digital brain files updated (`COMPACT_CONTEXT.md`, `NEXT_EXACT_STEP.md`, `SESSION_LOG.md`, `AGENT_CHANGELOG.md`).
- [x] External digital brain ADR written (`ADR_0005_LOCKED_SPLIT_BRAIN_OPERATING_PROTOCOL.md`).
- [x] Confirmed `C:\Portfolio\package.json` does not exist yet.
- [x] Confirmed `C:\Portfolio\src` does not exist yet.
- [x] Confirmed `C:\Portfolio\.env` does not exist yet.
- [x] Confirmed no forbidden commands were executed.

## 10. Next Exact Step
Obtain user approval on the Phase 1 Readiness Report, update the Gate Register to mark Phase 1 as PASS and Phase 2 as ACTIVE, and proceed to Phase 2 to scaffold the React/Vite/TS/Tailwind project structure.
