# Phase 6 Project Case Studies Implementation Plan

This plan details the design, structure, and behavior for adding detailed project case-study sections to the single-page homepage. It consumes the existing TypeScript data models to present evidence-led breakdowns of the 5 flagship projects.

## User Review Required

> [!IMPORTANT]
> **EVIDENCE REGISTRY INTEGRITY**
> - All project metrics, methods, inputs, and validation details are strictly loaded from `src/data/projects.ts` and `src/data/proofArtifacts.ts`. No new metrics or claims will be hardcoded or introduced.
> - The education parameters will strictly align with the corrected Phase 5A anchors (`MSc Data Analytics` at `De Montfort University` and `BE Computer Science` at `Anurag Group of Institutions`).

> [!WARNING]
> **SAFE LINKS FOR ARTIFACTS**
> - Project proof assets and repository links that are not yet check-in candidates (e.g. video walkthroughs, full PDF reports) will be wrapped in `SafeLink` showing planned coming-soon states. No fake link paths or placeholders will be used.

## Open Questions

There are no open questions. The existing `projects.ts` data records contain all the necessary detailed fields (problem, inputs, method, validation, outputs, limitations, recruiterRelevance) to map directly to the case-study layout fields.

---

## Proposed Changes

We will implement the detailed case studies by introducing modular sub-components inside `src/components/project/`, creating the main section wrapper inside `src/components/sections/`, and updating the main app mount.

### UI and Section Components

---

#### [NEW] [ProjectCaseStudiesSection.tsx](file:///C:/Portfolio/src/components/sections/ProjectCaseStudiesSection.tsx)
- **Purpose**: Homepage section component that wraps and displays the 5 flagship project case studies sequentially.
- **Implementation**:
  - Fetches the raw `projects` array from `src/data`.
  - Maps each project to a detailed `ProjectCaseStudy` card panel.
  - Implements semantic `<section>` wrapper and visual heading anchors for navigation.

#### [NEW] [ProjectCaseStudy.tsx](file:///C:/Portfolio/src/components/project/ProjectCaseStudy.tsx)
- **Purpose**: Sub-component container representing a single project's detailed case study.
- **Structure**:
  - Displays project title, subtitle, status badge (via `StatusBadge`), and high-level summary.
  - Hosts sub-components in a structured stack or two-column grid.
  - Sections rendered:
    1. Problem & Why It Matters
    2. Inputs / Dataset Description
    3. Method & Tool Stack
    4. Outputs & Validation Metrics
    5. Recruiter Relevance & What I Learned
    6. Limitations & Boundaries

#### [NEW] [ProjectMetricsGrid.tsx](file:///C:/Portfolio/src/components/project/ProjectMetricsGrid.tsx)
- **Purpose**: Renders the dynamic metrics badge grid.
- **Implementation**:
  - Maps `project.metrics` into 2-column or 3-column highlight cards.
  - Accentuate values with teal gradients and bold text styling.

#### [NEW] [ProjectMethodBlock.tsx](file:///C:/Portfolio/src/components/project/ProjectMethodBlock.tsx)
- **Purpose**: Structured presentation of dataset inputs, methodology pipeline, and tools.
- **Implementation**:
  - Renders input source bullet points.
  - Displays pipeline stages (methods) in a chronological sequence map.
  - Imports tool arrays and maps them into tech pill badges.

#### [NEW] [ProjectValidationBlock.tsx](file:///C:/Portfolio/src/components/project/ProjectValidationBlock.tsx)
- **Purpose**: Highlights model validation results, outputs, and quality gates.
- **Implementation**:
  - Renders performance outcomes (e.g., Random Forest ROC-AUC 0.793, 923 tests passed).
  - Highlights standard clean parquet outputs and quarantine metrics.

#### [NEW] [ProjectLimitationsBlock.tsx](file:///C:/Portfolio/src/components/project/ProjectLimitationsBlock.tsx)
- **Purpose**: Displays technical boundaries and lessons learned.
- **Implementation**:
  - Outlines the dataset limitations (e.g., static travel time network constraints, batch processing limits) and recruiter relevance summaries.

#### [NEW] [ProjectLinksBlock.tsx](file:///C:/Portfolio/src/components/project/ProjectLinksBlock.tsx)
- **Purpose**: Displays the links block for a project.
- **Implementation**:
  - Wraps all GitHub, video, report, and demo URLs in the `SafeLink` component to enforce coming-soon validation.

#### [MODIFY] [App.tsx](file:///C:/Portfolio/src/App.tsx)
- **Purpose**: Mount `ProjectCaseStudiesSection` on the homepage.
- **Changes**:
  - Replace `<FeaturedProjectsPreview />` with `<ProjectCaseStudiesSection />` (or mount it directly beneath it to provide detailed evidence breakdowns).
  - Note: `FeaturedProjectsPreview.tsx` will remain in the codebase to preserve Phase 4 build audit compliance.

#### [NEW] [PHASE_06_PROJECT_CASE_STUDIES_REPORT.md](file:///C:/Portfolio/docs/PHASE_06_PROJECT_CASE_STUDIES_REPORT.md)
- **Purpose**: Complete Phase 6 report with compilation results, DOM access verification, and gate checks.

---

## Verification Plan

### Automated Tests
- Run React/TypeScript compiler check:
  ```powershell
  npm run build
  ```
  *(Note: This command is forbidden during planning, but will be the primary automated verification run once Phase 6 is activated in the implementation stage.)*

### Manual Verification
- **Recruiter Scan Test**: Verify that each of the 5 project panels is readable, scannable, and presents problem-to-solution evidence flow within 10 seconds.
- **Responsive Stack Check**: Verify grid layouts stack neatly into a single column on mobile devices.
- **Aria focus review**: Tab through all links, verifying that focus borders outline interactive buttons and screen readers can read badges.
- **Status Tag Review**: Ensure exact matching strings are displayed:
  - Rural Financial Accessibility in Scotland -> "Academic Dissertation Project"
  - UK SME Data Quality Pipeline -> "Portfolio Project"
  - Midlands Theatre BI Data Mart -> "MSc / Academic BI Project"
  - VCCF -> "Independent R&D Project"
  - KPMG UK + British Airways -> "Virtual Simulations"
- **Zero-Cost Verification**: Check that no databases or server configurations are imported.

---

## Anti-Hallucination and Quality Checklist

- [ ] Every metric, row count, and classifier score is dynamically loaded from data records.
- [ ] No fake CV files or repo paths are mapped.
- [ ] VCCF is clearly designated as R&D work.
- [ ] Forage is clearly designated as virtual simulation modules.
- [ ] No salary, visa, or hiring probability assertions.
- [ ] Next exact step after PASS: Proceed with Phase 7 QA & Deployment Implementation Plan.
