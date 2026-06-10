# Phase 5 Role Selector Implementation Plan

This plan details the design, structure, and behavior for replacing the static `RoleSelectorPlaceholder` with an interactive, recruiter-optimized `RoleSelector` component hierarchy. The selector maps target UK analytics roles directly to verified project evidence and metrics dynamically loaded from the `src/data` layer.

## User Review Required

> [!IMPORTANT]
> **CLAIMS AND EVIDENCE INTEGRITY**
> - All role mappings, fit statements, and projects are loaded directly from the existing `src/data/roles.ts` and `src/data/projects.ts` data records. No ad-hoc, unverified career claims or artificial stats will be introduced into the code.
> - `RoleSelectorPlaceholder.tsx` will remain in the codebase as an unused file to preserve Phase 4 audit integrity unless a global dead-code cleanup is approved by the user.

> [!WARNING]
> **SAFE LINKS FOR CV DOWNLOADS**
> - The CV download links for specific profiles (Data Analyst, BI Analyst, Data Quality Analyst) are configured to use `SafeLink`. Since actual CV files are not checked in, they will render in a disabled/planned state showing a "Planned CV download link" tooltip to prevent recruiter 404 errors.

## Open Questions

There are no unresolved open questions. The data layer defined in Phase 3 already maps all 9 roles to their corresponding metrics, descriptions, and associated projects.

---

## Proposed Changes

We will implement the interactive role selector by introducing modular components inside `src/components/role/`, updating the layout section container, and swapping imports inside the main layout.

### UI and Section Components

---

#### [NEW] [RoleSelector.tsx](file:///C:/Portfolio/src/components/sections/RoleSelector.tsx)
- **Purpose**: Section container replacing `RoleSelectorPlaceholder` in the homepage flow.
- **State Model**: Holds the selected role ID state: `const [selectedRoleId, setSelectedRoleId] = useState<string>("data-analyst")`.
- **Implementation**:
  - Fetches the raw `roles` array from `src/data`.
  - Coordinates layout rendering: left column (role tab buttons) and right column/panel (evidence, metrics, projects, skills).
  - Handles keyboard navigation state across role buttons.

#### [NEW] [RoleTabList.tsx](file:///C:/Portfolio/src/components/role/RoleTabList.tsx)
- **Purpose**: Renders the vertical tab navigation / card deck containing the 9 roles.
- **Rules**:
  - Order must exactly match:
    1. Data Analyst (`data-analyst`)
    2. BI Analyst (`bi-analyst`)
    3. Data Quality Analyst (`data-quality-analyst`)
    4. Reporting / MI Analyst (`reporting-mi-analyst`)
    5. Data Governance / Data Assurance Analyst (`data-governance-analyst`)
    6. Junior Data Scientist (`junior-data-scientist`)
    7. Geospatial / Public Sector Analyst (`geospatial-analyst`)
    8. AI Data / LLM Evaluation Analyst (`ai-data-evaluation-analyst`)
    9. Operations Data Analyst (`operations-data-analyst`)
  - Each button displays the role name, `Primary` or `Secondary` category badge, and a short fit statement.
  - Active tab receives highlighted background styling (using HSL teal accents) and `aria-selected="true"`.

#### [NEW] [RoleEvidencePanel.tsx](file:///C:/Portfolio/src/components/role/RoleEvidencePanel.tsx)
- **Purpose**: Standard template container presenting selected role details.
- **Implementation**:
  - Displays selected role details (title, description, key fit parameters).
  - Renders sub-components: `RoleProjectMatches`, `RoleSkillsList`, and `RoleCTAGroup` in a clean, legible grid layout.

#### [NEW] [RoleProjectMatches.tsx](file:///C:/Portfolio/src/components/role/RoleProjectMatches.tsx)
- **Purpose**: Displays card summaries of the flagship projects matching the active role.
- **Implementation**:
  - Maps `associatedProjects` array of the selected role to corresponding records in `projects` data.
  - Displays the project's title, subtitle, standard claim status label (e.g. "Academic Dissertation Project", "Portfolio Project"), and key metrics.
  - Verification items: Ensure VCCF is labeled "Independent R&D", Forage is labeled "Virtual Simulations", and Scotland is labeled "Academic Dissertation Project".

#### [NEW] [RoleSkillsList.tsx](file:///C:/Portfolio/src/components/role/RoleSkillsList.tsx)
- **Purpose**: Renders tools and skills applicable to the chosen role profile.
- **Implementation**:
  - Extracts the union of `tools` used in the role's associated projects.
  - Renders styled capsules matching the site's layout color system.

#### [NEW] [RoleCTAGroup.tsx](file:///C:/Portfolio/src/components/role/RoleCTAGroup.tsx)
- **Purpose**: Recruiter primary CTAs (e.g., Download CV, View Projects, Get in touch).
- **Implementation**:
  - Maps appropriate CV profiles (e.g., Data Analyst, BI Analyst, Data Quality) from `profile.cvLinks` via `SafeLink` helper.
  - If a role does not map directly to a CV variant (e.g., Geospatial Analyst), default to the generic Data Analyst CV wrapper (wrapped in `SafeLink` to show planned status).

#### [MODIFY] [App.tsx](file:///C:/Portfolio/src/App.tsx)
- **Purpose**: Replace `RoleSelectorPlaceholder` mount with the real interactive `RoleSelector` component.
- **Changes**:
  - Swap `import RoleSelectorPlaceholder from './components/sections/RoleSelectorPlaceholder'` for `import RoleSelector from './components/sections/RoleSelector'`.
  - Replace `<RoleSelectorPlaceholder />` with `<RoleSelector />` in the layout tree.

#### [NEW] [PHASE_05_ROLE_SELECTOR_REPORT.md](file:///C:/Portfolio/docs/PHASE_05_ROLE_SELECTOR_REPORT.md)
- **Purpose**: Complete Phase 5 report containing verification logs, layout review, and check outcomes.

---

## Verification Plan

### Automated Tests
- Run React/TypeScript compiler check:
  ```powershell
  npm run build
  ```
  *(Note: This command is forbidden during planning, but will be the primary automated verification run once Phase 5 is activated in the implementation stage.)*

### Manual Verification
- **Recruiter Layout Check**: Tab through the 9 roles and verify the display updates instantly in under 100ms.
- **Responsive Audit**: Check stack flow on mobile screens (tabs convert into a vertical accordion or horizontal scroll area).
- **Aria Verification**: Inspect elements in browser DOM to verify that selected roles possess `aria-selected="true"`, non-selected roles possess `aria-selected="false"`, and focus outlines appear when navigating with the `Tab` key.
- **Fidelity Verification**: Ensure project status tags display:
  - "Rural Financial Accessibility in Scotland" -> "Academic Dissertation Project"
  - "UK SME Data Quality Pipeline" -> "Portfolio Project"
  - "Midlands Theatre BI Data Mart" -> "MSc / Academic BI Project"
  - "VCCF" -> "Independent R&D Project"
  - "KPMG UK + British Airways Forage" -> "Virtual Simulations"
- **Zero-Cost Audit**: Verify no backend services, databases, or API keys are introduced.

---

## Anti-Hallucination and Quality Checklist

- [ ] Every project metric matches the `src/data` module registry exactly.
- [ ] No fake CV file paths are added to anchors; `SafeLink` handles all placeholders with planned tooltips.
- [ ] The default state is set to `data-analyst` (Data Analyst).
- [ ] No unapproved packages or Tailwind config overrides are added.
- [ ] `RoleSelectorPlaceholder` remains physically present in the workspace directory to ensure previous phase audits compile.
- [ ] Next exact step after PASS: Proceed with Phase 6 Project Case Studies Implementation Plan.
