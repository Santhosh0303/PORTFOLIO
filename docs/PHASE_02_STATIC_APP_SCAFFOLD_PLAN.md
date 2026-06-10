# Phase 2 Implementation Plan: Static App Scaffold

This document outlines the design and execution steps for Phase 2: Static App Scaffold. It defines a safe, manual setup strategy that preserves all existing repository governance files and configures the approved technical stack under zero-cost constraints.

## 1. Context & Scope
`C:\Portfolio` is **not** an empty directory. It contains critical bridge and governance files that must not be overwritten or deleted:
- `AGENTS.md`
- `llms.txt`
- `.brainlink/`
- `.agents/`
- `docs/` (including `LOCAL_IMPLEMENTATION_BRIEF.md` and `PHASE_01_READINESS_REPORT.md`)
- `Sai_Santhosh_Enterprise_Portfolio_Implementation_Dossier_LLM.md`

Consequently, executing standard interactive scaffolding commands (like `npm create vite@latest`) is prohibited, as they may prompt to clean the directory or overwrite files. Phase 2 will rely on a **manual, file-by-file scaffold strategy**.

### Phase 2 Scope:
- Scaffolding a static React + Vite + TypeScript + Tailwind CSS structure.
- Creating a minimal, clean placeholder `App.tsx` showing the primary identity above the fold.
- Zero backend, zero API integrations, and no final components.
- Confirming build and local preview work perfectly.

---

## 2. Safe Scaffold Strategy & File Definitions
The following files will be created manually to establish the Vite + React workspace:

### 2.1 `package.json`
Manually specify dependencies and build scripts.
```json
{
  "name": "saisanthosh-portfolio",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "framer-motion": "^11.15.0",
    "lucide-react": "^0.468.0",
    "recharts": "^2.15.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "@tailwindcss/vite": "^4.0.0",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.7.2",
    "vite": "^6.0.3"
  }
}
```

### 2.2 `vite.config.ts`
Vite configuration incorporating Tailwind v4 and React plugins.
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './', // Ensures relative path resolving for static GitHub Pages deployment
});
```

### 2.3 TSConfig Files
Establish TypeScript configuration for application logic and bundler environment.

#### `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ES2022"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
```

### 2.4 `index.html`
Manual HTML entry pointing to the main React entrypoint.
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📊</text></svg>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Sai Santhosh Bellam Ramesh - Evidence-Led Data Analyst & BI Builder Portfolio" />
    <title>Sai Santhosh - Evidence-Led Data Analyst</title>
  </head>
  <body class="bg-slate-950 text-slate-100 min-h-screen">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### 2.5 Code Directory structure (`src/`)
Create the directories manually:
- `src/`
- `src/styles/`
- `src/components/`

#### `src/styles/index.css`
Tailwind CSS v4 entrypoint.
```css
@import "tailwindcss";

@layer base {
  body {
    @apply antialiased selection:bg-teal-500/30 selection:text-teal-200;
  }
}
```

#### `src/main.tsx`
React rendering entry point.
```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

#### `src/App.tsx`
Minimal, beautiful above-the-fold display matching the core identity to verify setup.
```typescript
import React from 'react';
import { ShieldCheck, BarChart3, Database, Globe } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6 bg-radial from-slate-900 to-slate-950 text-slate-100">
      <div className="max-w-xl text-center space-y-6">
        <div className="inline-flex p-3 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
          Sai Santhosh Bellam Ramesh
        </h1>
        <p className="text-xl font-medium text-slate-300">
          Evidence-Led Data Analyst & BI Builder
        </p>
        <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
          Data Quality. BI Dashboards. Geospatial ML. AI Context Validation R&D.
        </p>
        <div className="flex justify-center gap-6 pt-4 text-xs font-semibold text-slate-500 uppercase tracking-widest">
          <span className="flex items-center gap-1"><Database className="w-4 h-4" /> Pipelines</span>
          <span className="flex items-center gap-1"><BarChart3 className="w-4 h-4" /> Dashboards</span>
          <span className="flex items-center gap-1"><Globe className="w-4 h-4" /> ML</span>
        </div>
      </div>
    </div>
  );
}
```

---

## 3. Dependency Policy & Constraints
- **Approved Packages**: Only React core modules (`react`, `react-dom`), development bundlers (`vite`, `typescript`, plugins), and approved presentation libraries (`lucide-react`, `framer-motion`, `recharts`) may be defined.
- **No Third-Party Paid / Backend APIs**: Explicitly exclude Supabase, Firebase, Vercel SDKs, Clerk, Stripe, Resend, EmailJS, OpenAI, Anthropic, or other paid analytics/backend systems.
- **Environment Isolation**: No `.env` files or API secrets are allowed. The app is purely static.

---

## 4. Verification & Testing Plan
Once user approval is received to execute Phase 2, the following verification commands will be run:
1. `Test-Path` checks on all manually created files.
2. `npm install` execution and verification of a clean `node_modules` structure.
3. `npm run build` execution to confirm standard bundling passes with zero compiler/lint warnings.
4. Confirm no backend files, `.env`, or forbidden packages exist.

---

## 5. Exit Gate Criteria
Phase 2 will be marked as PASS only when:
- [ ] Manual files (`package.json`, `index.html`, `vite.config.ts`, tsconfigs, `src/main.tsx`, `src/App.tsx`, `src/styles/index.css`) exist.
- [ ] `npm install` runs cleanly.
- [ ] `npm run build` executes successfully and generates a `dist/` folder.
- [ ] No `.env` or backend configuration files exist in the repository.
- [ ] No unapproved/paid packages exist in `package.json`.
- [ ] External digital brain context files and change logs are updated.
- [ ] Phase 2 is closed, and the next step is set to Phase 3 (Data Model).
