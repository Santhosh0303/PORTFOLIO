# Phase 7C: Obsidian Signal UI/UX Upgrade Plan

This document outlines the detailed implementation plan for Phase 7C on the portfolio repository (`C:\Portfolio`). It establishes the plan for transitioning the visual theme to **Obsidian Signal / Executive Lab**, redesigning recruiter conversion pathways, and applying comprehensive SEO and accessibility compliance upgrades.

---

## 1. What Will Change Now

Upon approval of this plan, the following structural, visual, and configuration files will be created or modified in `C:\Portfolio`:

*   **Design System & CSS Tokens**: Define the locked Obsidian Signal color variables, custom utility animations, outline focus rules, and typography defaults in `index.css`.
*   **Sequential Chapter-Based Layout**: Replace the traditional homepage layout in `App.tsx` with a sequential flow of 9 chapters.
*   **Intro & Credentials Strip**: Implement `OpeningSignal.tsx` with the primary system thesis and a verified above-the-fold credentials strip.
*   **Origin Story**: Implement `OriginSignal.tsx` detailing the 3-step chronological story (Foundations $\rightarrow$ Applied $\rightarrow$ Systems).
*   **Systems Built (Showcases)**: Implement `SystemsBuilt.tsx` presenting project cards as technical case studies using sequence numbers, theses, tech stacks, evidence chips, and status labels.
*   **Evidence Layer**: Implement `EvidenceLayer.tsx` mapping available and planned evidence assets with clear planned tags.
*   **Interactive Lab**: Implement `InteractiveLab.tsx` containing the Project Walkthrough Console, a 3-way view switcher (Story | Evidence | Technical), and a keyboard-accessible hidden developer signature.
*   **Experience & Education Timeline**: Implement `ExperienceSnapshot.tsx` rendering education and community volunteer details cleanly using verified fields from `experience.ts`.
*   **Final Mission Statement**: Implement `FinalMission.tsx` detailing development core values.
*   **SEO & Technical Metadata**: Create `public/robots.txt`, `public/sitemap.xml`, `public/manifest.json`, and update `index.html` with canonical tags, meta tags, and Person schema JSON-LD.
*   **Accessibility & Motion Settings**: Implement a Skip-to-Content link in `SiteShell.tsx`, focus rings on interactive elements, and media queries to disable transitions for `prefers-reduced-motion`.

---

## 2. What is Explicitly Deferred

The following assets and features are **explicitly deferred** to later updates. To preserve metric veracity and prevent broker link clicks, no placeholder assets or fake external resource links will be added:

*   **CV PDF Downloads**: The download button in `ContactCTA.tsx` and the credentials panels will be rendered in a planned state with a hover tooltip showing: `"CV download planned — Available after final upload"`.
*   **Walkthrough Videos**: Video interfaces and buttons will display: `"Evidence planned — Walkthrough video being recorded"`.
*   **Project Repository Links**: Target repository actions for non-public projects will display: `"Evidence planned"`.
*   **Screenshots & Schema Diagrams**: Dashboard assets and database schemas will be marked as `"Evidence planned — Available after final upload"`.
*   **Analytics**: Analytics trackers (e.g., Google Analytics, PostHog, or Mixpanel) are deferred as `"privacy decision pending"`. No tracking scripts will be loaded.
*   **CI/CD Advanced Configurations**: ESLint/Prettier setup, component unit tests, and Dependabot are deferred.

---

## 3. New UI/UX Chapter Flow

The portfolio layout will follow 9 sequential chapters instead of a standard template:

1.  **Opening Signal**
    *   **Headline**: *"Building verified systems for data, automation, and decision intelligence."*
    *   **Subtext**: *"A portfolio of geospatial analytics, ML pipelines, BI systems, and verified context engines — designed with evidence, clarity, and execution depth."*
    *   **Identity**: *Sai Santhosh (Data Analyst · System Builder · Context Intelligence Explorer)*
    *   **Credentials Micro-Strip**: Above-the-fold rendering of:
        *   MSc Data Analytics — De Montfort University
        *   BE Computer Science
        *   KPMG UK + British Airways Forage Simulations
2.  **Origin: From Analysis to Systems**
    *   An interactive, 3-step story detailing capability progression:
        1.  *Data Foundations*: SQL, Power BI, Python, Excel, data cleaning, dashboards.
        2.  *Applied Intelligence*: Dissertation, geospatial analytics, ML, accessibility modelling.
        3.  *System Thinking*: VCCF, automation agents, verified context fabric, portfolio-scale engineering.
3.  **Systems Built**
    *   Dynamic case study showcases mapping flagship projects from `projects.ts`:
        *   *Project 01*: Verified Code Context Fabric (VCCF) — *Independent R&D Project*
        *   *Project 02*: Rural Financial Accessibility in Scotland — *Academic Dissertation Project*
        *   *Project 03*: UK SME / AWS-REGEX Data Quality Pipeline — *Portfolio Project*
        *   *Project 04*: Midlands Theatre Data Mart & BI Reporting — *MSc / Academic BI Project*
        *   *Project 05*: KPMG UK & British Airways Simulations — *Virtual Simulations*
4.  **Evidence Layer**
    *   Structured grid showing planned artifacts, dashboards, and video walkthroughs, clearly marked as `"Evidence planned"` where files are not yet uploaded.
5.  **Interactive Lab**
    *   A dashboard console for recruiters featuring:
        *   *Evidence Switch*: Toggle between **Story View** (layman value), **Evidence View** (metrics & validation), and **Technical View** (code details & schema).
        *   *Hidden Signature Interaction*: Tab-accessible secret text showing: *"Built by Sai Santhosh — systems first, evidence always. Every project here is designed as proof, not decoration."*
6.  **Skills as Capabilities**
    *   Functional grouping of technical tools mapping languages, libraries, and design workflows to verified projects.
7.  **Experience Snapshot**
    *   A chronological timeline of verified education and volunteer experience from `experience.ts`.
8.  **Final Mission**
    *   A short statement summarizing active directions and professional code engineering principles.
9.  **Connect**
    *   A minimal contact section using the email masking pattern (mailto: target triggers on interaction click with appropriate `aria-label` tags).

---

## 4. Component-Level Changes

The following React components will be created or modified:

### A. Style System
*   **`src/styles/index.css` [UPDATE]**: Setup variables and utilities:
    ```css
    :root {
      --bg-primary: #070707;
      --bg-secondary: #101010;
      --surface: #15120E;
      --surface-soft: #1B1B22;
      --gold-primary: #C8A75D;
      --gold-muted: #8F7440;
      --gold-soft: #E3C878;
      --navy-deep: #071526;
      --navy-accent: #102A43;
      --red-accent: #7A1E1E;
      --red-soft: #A33A2F;
      --text-primary: #F4EFE6;
      --text-secondary: #B8B1A5;
      --text-muted: #7D766D;
      --border-soft: rgba(200, 167, 93, 0.18);
      --glow-gold: rgba(200, 167, 93, 0.22);
    }
    ```
    *   **Typography rules**:
        *   Heading font: Space Grotesk preferred.
        *   Body font: Inter preferred.
        *   Body text size: 16px minimum.
        *   Line height: 1.65–1.75.
        *   Avoid thin fonts on dark background.
    *   **Motion rules**:
        *   Slow fade-in with slight upward reveal.
        *   Soft blur-to-clear transitions.
        *   Gold border glow on hover (`--glow-gold`).
        *   Red pulse animation for active live status (`--red-accent`).
        *   No fast bouncing, heavy particles, or aggressive scaling.
        *   Must respect `prefers-reduced-motion` settings.

### B. Core UI Primitives
*   **`src/components/ui/GoldTraceLine.tsx` [NEW]**: Renders a thin, elegant trace line surrounding selected layout panels.
*   **`src/components/ui/EvidenceChip.tsx` [NEW]**: Small badge component summarizing project evidence values.
*   **`src/components/ui/ViewSwitch.tsx` [NEW]**: Tab-select switcher for Interactive Lab perspectives.

### C. Layout & Sections
*   **`src/components/sections/OpeningSignal.tsx` [NEW]**: Above-the-fold hero section containing the credentials strip and identity headers.
*   **`src/components/sections/OriginSignal.tsx` [NEW]**: 3-step capability component detailing the chronological data-to-systems story.
*   **`src/components/sections/SystemsBuilt.tsx` [NEW]**: Lists projects in detail, structured as case studies.
*   **`src/components/sections/EvidenceLayer.tsx` [NEW]**: Grid mapping walkthrough reports, schemas, and PDFs.
*   **`src/components/sections/InteractiveLab.tsx` [NEW]**: Walkthrough console supporting 3 view states.
*   **`src/components/sections/ExperienceSnapshot.tsx` [NEW]**: Timeline rendering DMU MSc, BE Computer Science, and community roles.
*   **`src/components/sections/FinalMission.tsx` [NEW]**: Executive summary of design values.
*   **`src/App.tsx` [UPDATE]**: Import and mount the new components.
*   **`src/components/layout/Header.tsx` / `Footer.tsx` [UPDATE]**: Modify nav links to target correct chapter tags.

---

## 5. Data-Level Changes

*   **`src/data/profile.ts` [UPDATE]**: Refine bio headers to match the Obsidian Signal theme.
*   **`src/data/projects.ts` [UPDATE]**: Maintain metric alignment. Keep dissertation and VCCF labels exactly as mandated.
*   **`src/data/experience.ts` [UPDATE]**: Verify Anurag CS BE and DMU MSc are the only degrees. Prevent Mechanical Engineering or Leicester regressions.

---

## 6. SEO & Accessibility Changes

*   **`index.html` [UPDATE]**:
    *   Add canonical URL: `https://santhosh0303.github.io/PORTFOLIO/`.
    *   Add OpenGraph/Twitter meta tags.
    *   Add Person schema JSON-LD metadata utilizing verified profile claims.
    *   Set `font-display: swap` for external font linkages.
*   **`public/robots.txt` [NEW]**: Configures crawler access.
*   **`public/sitemap.xml` [NEW]**: List main entry point for search indexers.
*   **`public/manifest.json` [NEW]**: Basic application manifest setup.
*   **Focus Ring Indicator Audit**: Ensure all interactive controls have visible focus rings (`focus:outline-none focus:ring-2 focus:ring-gold-soft`).
*   **Skip-to-Content Link**: Mount screen-reader skip link inside `SiteShell.tsx` targetting `id="main-content"`.

---

## 7. Evidence Placeholder Rules

Deferred assets will follow these UI rendering policies:
*   **No dead clicks**: Inactive buttons must be disabled and display a tooltip explaining that the asset is planned.
*   **Clear labeling**: Missing images, schemas, or videos must display `"Evidence planned — Available after final upload"` with an clean graphite border box.
*   **Truthful State**: Do not write mock urls or fake file names. Link target URLs will remain `#` with `SafeLink` protections preventing navigation drift.

---

## 8. Artefact Upload Requirements for Later

When the user is ready to upload visual files, they will place them in:
*   **CV PDFs**: `public/assets/cv/`
*   **Screenshots**: `public/assets/images/`
*   **Schemas**: `public/assets/schemas/`
*   **Videos**: `public/assets/videos/`
The code will be updated by changing the corresponding `isAvailable` flags to `true` in `src/data/*.ts` files.

---

## 9. No-Fake-Assets Policy

*   Do not create placeholder PDF files or mock image assets.
*   Do not invent client names, visa stats, salaries, or mock endorsements.
*   Keep VCCF styled strictly as an *"Independent R&D Project"*.

---

## 10. Build/QA Validation Plan

After code changes are completed, validation will run:
1.  **Compilation check**:
    ```bash
    npm run build
    ```
    Confirming clean asset production in `dist/` with zero TypeScript or build errors.
2.  **QA validations**:
    ```bash
    npm run qa
    ```
    Confirming all 8 checking scripts pass.
3.  **Manual testing**:
    *   Tab through navigation items to verify skip-link and focus ring states.
    *   Verify mailto connectivity on the contact buttons.

---

## 11. Commit/Push Plan after Implementation

Following validation, the updates will be committed and pushed:
*   **Local staging**:
    ```bash
    git add .
    ```
*   **Local commit**:
    ```bash
    git commit -m "feat: implement Phase 7C Obsidian Signal UI/UX, SEO, and accessibility upgrades"
    ```
*   **Remote push**:
    ```bash
    git push origin main
    ```

---

## 12. Digital Brain Update Plan

Upon successful push, sync details to the external Digital Brain:
*   Add entry in `brain/05_CONTEXT_LOGS/SESSION_LOG.md` and `brain/05_CONTEXT_LOGS/AGENT_CHANGELOG.md`.
*   Update active task in `brain/00_CONTROL/COMPACT_CONTEXT.md` and check active phase indicators.
*   Update active direction in `brain/03_TASKS/NEXT_EXACT_STEP.md`.

---

## 13. Next Exact Step after Plan Approval

Upon user approval of this plan, proceed with the implementation of the Phase 7C upgrades in the portfolio repository.
