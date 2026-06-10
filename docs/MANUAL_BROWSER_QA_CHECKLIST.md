# Manual Browser QA Checklist

This checklist defines the visual, interactive, and structural quality checks to perform manually in a web browser before marking the release gate as completed.

## 1. Visual & Layout Audits

### Desktop Layout Audit
- [ ] Header logo and navigation items align correctly.
- [ ] Hero section typography renders without overlap or clipping.
- [ ] Proof metrics cards are laid out in a grid of 4.
- [ ] Case study section renders cleanly with distinct visual separation.
- [ ] Grid layouts display cleanly with appropriate margins and padding.
- [ ] Hover states on active cards/buttons animate smoothly.

### Mobile Layout Audit
- [ ] Layout wraps cleanly on viewport widths below 768px (Mobile/Tablet).
- [ ] Navigation header scales or uses a responsive menu without overflowing the window.
- [ ] Proof metrics stack into a readable vertical or 2x2 grid.
- [ ] Case study methodologies, inputs, and validation lists wrap without clipping.
- [ ] Text remains highly legible on smaller viewports.

---

## 2. Interactive & Accessibility (A11y) Audits

### Keyboard Navigation Audit
- [ ] Focus states are visible and clear on all clickable elements.
- [ ] `Tab` navigation order is logical (Header -> Hero -> Case Studies -> Role Selector -> Contact -> Footer).
- [ ] Recruiter target roles list can be navigated and activated via keyboard inputs.
- [ ] Interactive buttons do not trap focus.

### Accessibility & Contrast Checks
- [ ] Color contrast for body text against dark backgrounds satisfies accessibility metrics.
- [ ] Form controls and active tags have corresponding descriptive label attributes.
- [ ] HTML semantic tags (`<header>`, `<main>`, `<section>`, `<footer>`) match layout structures.

### State & Button Validations
- [ ] **Role Selector Tab list**: Clicking roles updates the associated evidence, project matches, and skills list instantly.
- [ ] **CV download buttons**: Direct to the contact section or output planned placeholder tooltips on click.
- [ ] **SafeLink tooltips**: Inactive links (such as unpublished repositories or demos) show descriptive planned tooltips on hover/focus and cannot be clicked (disabled state).
- [ ] **CTAs**: Main GitHub, LinkedIn, and Email anchors open in a new tab with proper security handling where applicable.

---

## 3. Link & Console Audits

### Broken-Link Visual Check
- [ ] Every button, anchor, and image source has a resolved href or src path.
- [ ] No empty hrefs or default `#` links bypass disabled tooltip states.
- [ ] Visual assets (icons, font glyphs) render without placeholders.

### Browser Console Audit
- [ ] Open Developer Tools Console (F12) and reload the page:
  - [ ] Zero red errors (JavaScript exceptions or failed resource loads).
  - [ ] Zero yellow warning logs from React or Vite compiler.
