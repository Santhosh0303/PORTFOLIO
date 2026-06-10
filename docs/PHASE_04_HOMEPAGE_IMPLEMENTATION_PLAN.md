# Phase 4 Implementation Plan: Homepage

This document defines the recruiter-conversion homepage layout, component hierarchy, design rules, and data mapping. It enforces zero-cost static deployment constraints and protects public claims fidelity by using only the approved `src/data` layers.

---

## 1. Component Responsibility & Directory Layout
We will establish the homepage structure inside `C:\Portfolio\src\components/` using clean TypeScript React modules.

### 1.1 Layout Components
- **SiteShell** (`src/components/layout/SiteShell.tsx`): Holds the global responsive constraints, background styling (slate theme with subtle radial gradients), and layouts.
- **Header** (`src/components/layout/Header.tsx`): Displays name, navigation links mapped from `navigationItems`, and quick contacts.
- **Footer** (`src/components/layout/Footer.tsx`): Simple bottom footer containing copyright and quick profile links.

### 1.2 Page Section Components
- **HeroSection** (`src/components/sections/HeroSection.tsx`): Displayed above the fold. Shows name, identity, core tagline, main promise, and the primary CTAs.
- **ProofMetricsStrip** (`src/components/sections/ProofMetricsStrip.tsx`): Displays the 4 global metrics in a high-contrast panel immediately below the hero, visible without deep scrolling.
- **FeaturedProjectsPreview** (`src/components/sections/FeaturedProjectsPreview.tsx`): Previews the 5 flagship projects in a cards grid, displaying status badges, descriptions, and metrics.
- **RoleSelectorPlaceholder** (`src/components/sections/RoleSelectorPlaceholder.tsx`): A clean, disabled card detailing the Phase 5 interactive role selector interface.
- **SkillsSnapshot** (`src/components/sections/SkillsSnapshot.tsx`): Renders categorized technical tools (Python, SQL, Power BI) and capabilities.
- **WorkPrinciples** (`src/components/sections/WorkPrinciples.tsx`): Visually summarizes the evidence-led method ("Ingest -> Validate -> Models -> Decision").
- **VideoPlaceholder** (`src/components/sections/VideoPlaceholder.tsx`): Renders the walkthrough video panel with its planned/unavailable placeholder card.
- **ContactCTA** (`src/components/sections/ContactCTA.tsx`): Actionable card supporting safe email/linkedin triggers.

### 1.3 UI Helper Components
- **SectionHeading** (`src/components/ui/SectionHeading.tsx`): Unified styling for section headers and sub-headers.
- **StatusBadge** (`src/components/ui/StatusBadge.tsx`): Selects tailwind styles matching the `ProjectStatus` value (e.g. teal for Academic, indigo for Virtual Simulations).
- **SafeLink** (`src/components/ui/SafeLink.tsx`): Enhances accessibility and safety. If `isAvailable` is `false`, it renders a disabled button styling and displays a tooltip overlay showing `plannedPlaceholder`.

---

## 2. Component Hierarchy & Layout Flow
The components will be structured inside `src/App.tsx` in the following order:

```text
SiteShell
  ├── Header
  └── Main
       ├── HeroSection (Above-the-fold)
       ├── ProofMetricsStrip (Above-the-fold / Immediate scroll)
       ├── FeaturedProjectsPreview
       ├── RoleSelectorPlaceholder (Placeholder card)
       ├── SkillsSnapshot
       ├── WorkPrinciples
       ├── VideoPlaceholder
       ├── ContactCTA
  └── Footer
```

---

## 3. Data Imports & Source-of-Truth Mapping
All copy, descriptions, metrics, and URLs will be imported directly from the `src/data` bundle. Hardcoding strings inside markup is forbidden:
- Hero details (identity, tagline, promise, location) mapped from `profile`.
- CTA actions mapped from `ctaItems` and `profile.cvLinks`.
- Proof strip numbers mapped from `globalMetrics`.
- Flagship projects mapped from `projects`.
- Grouped technical capabilities mapped from `skills`.
- Walkthrough placeholder text mapped from `videos`.

---

## 4. Design Guidelines & Recruiter Conversion
- **Substance-First Styling**: Slate-900 to Slate-950 theme. Accent highlights in Teal (`#0d9488` / `text-teal-400`) and Emerald to signify validation and data quality.
- **No Heavy Overhead**: Framer Motion is restricted to light entrance fades (150-300ms transitions) to maintain low resource footprints and maximum page speed.
- **CTA Safety**: Links to CV downloads and repositories must use the `SafeLink` helper. If a file does not exist, the button must show a disabled/planned indicator to prevent 404 or broken transitions.
- **Strict Wording**:
  - Forage simulations are clearly labeled as `Virtual Simulations`.
  - VCCF is clearly labeled as an `Independent R&D Project`.
  - Dissertation is clearly labeled as an `Academic Dissertation Project`.

---

## 5. Accessibility (A11y) & Responsiveness
- **HTML5 Semantics**: Uses `<header>`, `<main>`, `<section>`, `<footer>`, and `<button>` elements.
- **Keyboard Navigation**: Interactive elements will feature visible `:focus-visible` outlines. Focus targets for scroll anchors will be configured.
- **Contrast Ratios**: Ensures AA contrast standards for background Slate colors against text Slate elements (no tiny font sizes below 12px / `text-xs`).
- **Responsive Layout**: Uses Tailwind CSS flex/grid column structures (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) to support mobile, tablet, and desktop screens naturally.

---

## 6. Anti-Hallucination & Dead-Code Checks
- **Fidelity Registry Audit**: UI components must display data exactly as defined. No text overlays may modify numerical proof values.
- **Unused imports gate**: `tsconfig.app.json` has `noUnusedLocals` and `noUnusedParameters` enabled. If unused assets are imported or layout code left orphan, the compilation check will block.

---

## 7. Verification Plan & Exit Gates
Once user approval is received to execute Phase 4:
1. Manually write layout and component files under their target directories.
2. Update `src/App.tsx` to reference and render the site skeleton inside the shell.
3. Run `npm run build` to verify standard bundling completes successfully.
4. Perform manual directory inspection to confirm no `.env` or backend files exist.
5. Exit Gate PASS triggers only when page builds without error, no files are deleted, and change logs are synchronized.

**Next Exact Step**: Proceed to Phase 4 execution.
