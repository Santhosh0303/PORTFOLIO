# Phase 3 Implementation Plan: Data Model Architecture

This document defines the TypeScript data model architecture and structured records for the portfolio. It enforces strict separation of data and UI, ensures alignment with the external brain source-of-truth registry, and outlines validation rules.

---

## 1. Directory & File-by-File Purpose
All data modules will reside inside `C:\Portfolio\src\data/` and will be structured as follows:

| File | Target Path | Purpose |
|---|---|---|
| Types | `src/data/types.ts` | Declares all shared TypeScript interfaces, enums, and type aliases. |
| Profile | `src/data/profile.ts` | Stores global bio information (identity, main promise, contact, CV pathways). |
| Metrics | `src/data/metrics.ts` | Houses global dashboard proof strip metrics. |
| Projects | `src/data/projects.ts` | Details the 5 flagship projects with full metrics, validations, and limitations. |
| Roles | `src/data/roles.ts` | Maps the 9 target UK roles to verified evidence points and projects. |
| Skills | `src/data/skills.ts` | Categorizes core technical tools and secondary analytics capabilities. |
| Experience | `src/data/experience.ts` | Models chronological history (MSc Leicester, B.Tech, etc.) using strict labels. |
| Videos | `src/data/videos.ts` | Manages links and metadata for walkthrough/presentation videos. |
| Proof Artifacts | `src/data/proofArtifacts.ts` | Defines direct link registries for verification reports and drift metrics. |
| Bundle Entry | `src/data/index.ts` | Exports all types and data structures from a single entrypoint. |
| Phase Report | `docs/PHASE_03_DATA_MODEL_REPORT.md` | Post-implementation validation report. |

---

## 2. TypeScript Data Model Declarations
The types in `src/data/types.ts` are declared as follows:

```typescript
export type ProjectStatus =
  | "Academic Dissertation Project"
  | "Portfolio Project"
  | "MSc / Academic BI Project"
  | "Independent R&D Project"
  | "Virtual Simulations";

export interface ProjectMetric {
  label: string;
  value: string;
  source: string;
}

export interface ProjectLink {
  label: string;
  url: string;
  isAvailable: boolean;
  plannedPlaceholder?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  status: ProjectStatus;
  summary: string;
  problem: string;
  whyItMatters: string;
  inputs: string[];
  method: string[];
  outputs: string[];
  validation: string[];
  limitations: string[];
  recruiterRelevance: string[];
  metrics: ProjectMetric[];
  tools: string[];
  roles: string[];
  links: {
    github?: ProjectLink;
    demo?: ProjectLink;
    video?: ProjectLink;
    report?: ProjectLink;
  };
}

export interface RoleEvidence {
  metric: string;
  sourceProject: string;
  relevance: string;
}

export interface RoleTarget {
  id: string;
  title: string;
  category: "Primary" | "Secondary";
  tagline: string;
  description: string;
  evidence: RoleEvidence[];
  associatedProjects: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  duration: string;
  description: string[];
  type: "academic" | "simulation" | "project";
}

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  youtubeId?: string;
  isAvailable: boolean;
  plannedPlaceholder: string;
}

export interface ProofArtifact {
  id: string;
  name: string;
  filePath: string;
  type: "quality_report" | "drift_report" | "schema" | "eval_report";
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  promise: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  cvLinks: {
    dataAnalyst: ProjectLink;
    biAnalyst: ProjectLink;
    dataQuality: ProjectLink;
  };
}

export interface NavigationItem {
  label: string;
  path: string;
}

export interface CTAItem {
  label: string;
  action: string;
  primary: boolean;
}
```

---

## 3. Core Data Rules & Constraints
1. **No UI Hardcoding**: No project case study copy, metrics, or role descriptions may be hardcoded inside React components. They must be imported from `src/data`.
2. **Strict Project Labels**: All project status fields must conform strictly to the `ProjectStatus` type. No arbitrary names.
3. **Traceable Metrics**: Every metric object *must* specify its source (e.g. "Dissertation Evidence Registry", "AWS-REGEX validation report").
4. **Fidelity Registry Checks**: No inventing metrics, employment, or users. If a CV or demo link is not yet ready, `isAvailable` must be set to `false`, and `plannedPlaceholder` must indicate its status.
5. **No Claims of frontier affiliation**: Use only verified educational details (University of Leicester, Anurag Group) and virtual simulations (Forage).

---

## 4. Planned Structured Records

### 4.1 Project Records (`projects.ts`)
```typescript
import { Project } from './types';

export const projects: Project[] = [
  {
    id: "rural-financial-accessibility",
    title: "Rural Financial Accessibility in Scotland",
    subtitle: "Geospatial ML & Decision Engine for Accessibility Mapping",
    status: "Academic Dissertation Project",
    summary: "A geospatial machine learning study mapping physical access to financial services in rural Scotland, identifying scenario-based accessibility interventions.",
    problem: "Rural Scottish communities face declining access to banks and ATMs, creating financial exclusion zones that are difficult to identify using aggregate metrics.",
    whyItMatters: "Enables public-sector planners to make data-driven decisions on service preservation and postal-hub conversions based on localized accessibility indexes.",
    inputs: [
      "7,392 Scottish Data Zones (geographic shapefiles)",
      "OSM accessibility nodes and access points",
      "1,226 rural ML accessibility records"
    ],
    method: [
      "Geospatial network mapping of travel zones",
      "Random Forest classification model predicting exclusion risk",
      "Evaluation of 409 scenario candidates for service restoration"
    ],
    outputs: [
      "4-page Power BI dashboard visualizing accessibility indices",
      "Risk classification map for all Scottish Data Zones"
    ],
    validation: [
      "Random Forest model achieved ROC-AUC score of 0.793",
      "Quality audit passed with 71 PASS / 0 WARN / 0 FAIL checks"
    ],
    limitations: [
      "Based on static 2026 travel time networks, does not model real-time road closures or seasonal public transit changes."
    ],
    recruiterRelevance: [
      "Demonstrates geospatial SQL capabilities, Random Forest model evaluation, and multi-page Power BI dashboard mapping."
    ],
    metrics: [
      { label: "Scottish Data Zones Mapped", value: "7,392", source: "Dissertation Evidence Registry" },
      { label: "Rural ML Records", value: "1,226", source: "Dissertation Evidence Registry" },
      { label: "Scenario Candidates", value: "409", source: "Dissertation Evidence Registry" },
      { label: "Power BI Dashboard Pages", value: "4", source: "Dissertation Evidence Registry" },
      { label: "Random Forest ROC-AUC", value: "0.793", source: "Dissertation Evidence Registry" },
      { label: "Audit Validation", value: "71 PASS / 0 FAIL", source: "Dissertation Evidence Registry" }
    ],
    tools: ["Python", "SQL", "Power BI", "GeoPandas", "scikit-learn"],
    roles: ["Data Analyst", "BI Analyst", "Geospatial / Public Sector Analyst", "Junior Data Scientist"],
    links: {
      github: { label: "Repository", url: "https://github.com/saisanthosh0303/rural-finance-scotland", isAvailable: false, plannedPlaceholder: "Planned repository path" },
      video: { label: "Walkthrough", url: "#", isAvailable: false, plannedPlaceholder: "Walkthrough coming soon" }
    }
  },
  {
    id: "uk-sme-data-quality",
    title: "UK SME Data Quality Pipeline",
    subtitle: "AWS-REGEX Automated Ingestion & Quality Gate",
    status: "Portfolio Project",
    summary: "An automated data validation and quarantine pipeline cleaning customer, order, and booking transactional datasets for UK small businesses.",
    problem: "SME business data often suffers from corrupt emails, invalid postal formats, and structural drift, skewing dashboard reporting and query output.",
    whyItMatters: "Prevents dirty data from contaminating downstream analytics warehouses by isolating corrupt records at ingestion.",
    inputs: [
      "2,500 raw transactional input records (customer, booking, order csv)"
    ],
    method: [
      "REGEX validation rules matching UK postcodes and phone syntax",
      "Pydantic schemas checking schema structure and data types",
      "Isolation of corrupt files to quarantine storage"
    ],
    outputs: [
      "222 cleaned, standardized Parquet records",
      "2,278 quarantined records mapped by quarantine reason taxonomy",
      "Data Quality Scorecard showing 57 distinct metrics"
    ],
    validation: [
      "923 automated tests passed successfully under pytest",
      "2,963 regex rules applied with zero compiler faults"
    ],
    limitations: [
      "Designed for batch processing, not optimized for real-time streaming pipelines."
    ],
    recruiterRelevance: [
      "Demonstrates structural data validation (Pydantic), quarantine design patterns, and high-coverage unit testing (pytest)."
    ],
    metrics: [
      { label: "Input Records", value: "2,500", source: "AWS-REGEX Scorecard" },
      { label: "Processed Clean", value: "222", source: "AWS-REGEX Scorecard" },
      { label: "Quarantined Records", value: "2,278", source: "AWS-REGEX Scorecard" },
      { label: "Scorecard Metrics", value: "57", source: "AWS-REGEX Scorecard" },
      { label: "Automated Tests", value: "923", source: "AWS-REGEX Scorecard" },
      { label: "Regex Rules", value: "2,963", source: "AWS-REGEX Scorecard" }
    ],
    tools: ["Python", "pytest", "Pydantic", "Pandas", "Regex"],
    roles: ["Data Analyst", "Data Quality Analyst", "Data Governance / Assurance Analyst"],
    links: {
      github: { label: "Repository", url: "https://github.com/saisanthosh0303/sme-quality-pipeline", isAvailable: false, plannedPlaceholder: "Planned repository path" }
    }
  },
  {
    id: "midlands-theatre-bi-data-mart",
    title: "Midlands Theatre BI Data Mart",
    subtitle: "Star-Schema Dimensional Modeling & Sales Dashboard",
    status: "MSc / Academic BI Project",
    summary: "A star-schema dimensional model built to aggregate ticket sales and client spend data for a regional theatre venue.",
    problem: "Theatre managers lacked consolidated views on monthly performance, seat fill rates, and customer lifetime value across separate booking databases.",
    whyItMatters: "Provides managers with a solid reporting database that outputs transaction KPIs in under a second.",
    inputs: [
      "MSc academic booking transactions dataset"
    ],
    method: [
      "Dimensional modeling translating flat ticket CSVs into star schema",
      "Creation of 1 central Fact table and 5 Dimension tables",
      "Relational integrity check via foreign key enforcement"
    ],
    outputs: [
      "6-table star schema reporting database",
      "Power BI performance sales metrics dashboard"
    ],
    validation: [
      "18,942 rows successfully loaded",
      "6,132 fact rows mapped with 7 foreign-key integrity checks passed"
    ],
    limitations: [
      "Does not currently support dynamic updates, database must be rebuilt for new ticket transactions."
    ],
    recruiterRelevance: [
      "Demonstrates database design (Star Schema), SQL loader configurations, and business intelligence dashboard design."
    ],
    metrics: [
      { label: "Tables in Schema", value: "6", source: "BI Data Mart Schema" },
      { label: "Fact Tables", value: "1", source: "BI Data Mart Schema" },
      { label: "Dimension Tables", value: "5", source: "BI Data Mart Schema" },
      { label: "Total Rows Loaded", value: "18,942", source: "BI Data Mart Schema" },
      { label: "Fact Rows Loaded", value: "6,132", source: "BI Data Mart Schema" },
      { label: "FK Relationships", value: "7", source: "BI Data Mart Schema" }
    ],
    tools: ["SQL", "Power BI", "Excel", "Star Schema"],
    roles: ["Data Analyst", "BI Analyst", "Reporting / MI Analyst", "Analytics Engineer Trainee"],
    links: {
      github: { label: "Repository", url: "https://github.com/saisanthosh0303/theatre-bi-data-mart", isAvailable: false, plannedPlaceholder: "Planned repository path" }
    }
  },
  {
    id: "vccf-context-fabric",
    title: "VCCF — Verified Code Context Fabric",
    subtitle: "AI-Assisted Codebase Ingestion & Validation Harness",
    status: "Independent R&D Project",
    summary: "A personal research and development project building structured context indexes for LLM codebase navigation.",
    problem: "Standard RAG contexts lack structural syntax metadata, leading code assistants to write hallucinatory methods when querying nested directories.",
    whyItMatters: "Improves codebase indexing precision, minimizing token bloat in LLM contexts during pair programming.",
    inputs: [
      "Standard repository directories",
      "Markdown documentation artifacts"
    ],
    method: [
      "PII scanning of code snippets with Microsoft Presidio",
      "Lexical and syntactic context enrichment",
      "Prompt-injection red-teaming validation tests"
    ],
    outputs: [
      "Automated evaluation metrics harness checking citation coverage"
    ],
    validation: [
      "100% citation coverage achieved on custom codebase validation set",
      "Successfully blocked 100% of basic prompt-injection vector candidates in test suit"
    ],
    limitations: [
      "Under active R&D. Currently restricted to local static workspaces, not integrated with cloud code repos."
    ],
    recruiterRelevance: [
      "Demonstrates AI data analysis, LLM evaluation, PII protection, and prompt-security test suite scripting."
    ],
    metrics: [
      { label: "Citation Coverage", value: "100%", source: "VCCF Eval Suite" },
      { label: "Prompt-Injection Blocks", value: "100%", source: "VCCF security test" },
      { label: "Validation Engine", value: "Python pytest", source: "VCCF test config" }
    ],
    tools: ["Python", "pytest", "Microsoft Presidio", "LLM Evaluation"],
    roles: ["AI Data / LLM Evaluation Analyst", "Data Quality Analyst"],
    links: {
      github: { label: "Repository", url: "https://github.com/saisanthosh0303/vccf-fabric", isAvailable: false, plannedPlaceholder: "Planned repository path" }
    }
  },
  {
    id: "professional-simulations",
    title: "KPMG UK + British Airways Forage Simulations",
    subtitle: "Virtual Work Simulation Modules",
    status: "Virtual Simulations",
    summary: "Professional virtual simulations completed through Forage, practicing customer data analysis and business communication.",
    problem: "Honing core communication and analytical skills outside of traditional university coursework.",
    whyItMatters: "Applies standard business logic to structured analytical datasets under professional scenarios.",
    inputs: [
      "Forage business scenarios",
      "Mock customer booking and travel databases"
    ],
    method: [
      "Data cleaning and presentation prep for stakeholder reviews",
      "Predictive modeling practice for airline bookings"
    ],
    outputs: [
      "Customer booking recommendation summary slide deck",
      "Cleaned customer segments report"
    ],
    validation: [
      "Simulation completed successfully with modular project submissions"
    ],
    limitations: [
      "Simulated work environments, not direct commercial employment or client delivery."
    ],
    recruiterRelevance: [
      "Demonstrates professional data communication, client-style report drafting, and mock analytics project flow."
    ],
    metrics: [
      { label: "Completed Modules", value: "2", source: "Forage Certificates" },
      { label: "Skills Covered", value: "Business Analytics, Client Comm", source: "Forage Certificates" }
    ],
    tools: ["Excel", "PowerPoint", "Python"],
    roles: ["Data Analyst", "Reporting / MI Analyst", "Operations Data Analyst"],
    links: {
      report: { label: "Verify Module", url: "https://www.theforage.com", isAvailable: false, plannedPlaceholder: "Placeholder verify link" }
    }
  }
];
```

### 4.2 Role Records (`roles.ts`)
```typescript
import { RoleTarget } from './types';

export const roles: RoleTarget[] = [
  {
    id: "data-analyst",
    title: "Data Analyst",
    category: "Primary",
    tagline: "I turn messy data into validated pipelines and reports.",
    description: "Junior/Graduate profile focused on extracting, cleaning, and mapping data into actionable dashboards.",
    evidence: [
      { metric: "7,392 Scottish Data Zones", sourceProject: "rural-financial-accessibility", relevance: "Geospatial network mapping" },
      { metric: "18,942 loaded database rows", sourceProject: "midlands-theatre-bi-data-mart", relevance: "SQL transactional modeling" }
    ],
    associatedProjects: ["rural-financial-accessibility", "uk-sme-data-quality", "midlands-theatre-bi-data-mart", "professional-simulations"]
  },
  {
    id: "bi-analyst",
    title: "BI Analyst",
    category: "Primary",
    tagline: "I build relational star-schemas and interactive dashboards.",
    description: "Developing robust data models and visual metrics to support business intelligence.",
    associatedProjects: ["midlands-theatre-bi-data-mart", "rural-financial-accessibility"],
    evidence: [
      { metric: "6-table Star Schema", sourceProject: "midlands-theatre-bi-data-mart", relevance: "Structured analytics database" },
      { metric: "4 Power BI pages", sourceProject: "rural-financial-accessibility", relevance: "Interactive travel network visualization" }
    ]
  },
  {
    id: "data-quality-analyst",
    title: "Data Quality Analyst",
    category: "Primary",
    tagline: "I script automated data-quality gates and test suites.",
    description: "Ensuring database inputs conform strictly to schema and validation logic.",
    associatedProjects: ["uk-sme-data-quality", "vccf-context-fabric"],
    evidence: [
      { metric: "923 pytest tests passed", sourceProject: "uk-sme-data-quality", relevance: "Automated unit test coverage" },
      { metric: "57 distinct quality metrics", sourceProject: "uk-sme-data-quality", relevance: "Continuous ingestion scorecard" }
    ]
  },
  {
    id: "reporting-mi-analyst",
    title: "Reporting / MI Analyst",
    category: "Primary",
    tagline: "I automate management reporting and metrics tracking.",
    description: "Consolidating datasets into consistent monthly performance decks.",
    associatedProjects: ["midlands-theatre-bi-data-mart", "professional-simulations"],
    evidence: [
      { metric: "18,942 rows loaded", sourceProject: "midlands-theatre-bi-data-mart", relevance: "Data mart reporting" }
    ]
  },
  {
    id: "data-governance-analyst",
    title: "Data Governance / Assurance Analyst",
    category: "Primary",
    tagline: "I implement schema validation and PII detection.",
    description: "Auditing ingestion flows and protecting privacy constraints.",
    associatedProjects: ["uk-sme-data-quality", "vccf-context-fabric"],
    evidence: [
      { metric: "PII scan Microsoft Presidio", sourceProject: "vccf-context-fabric", relevance: "Automated privacy filtering" },
      { metric: "2,278 quarantined records", sourceProject: "uk-sme-data-quality", relevance: "Isolation of corrupt database inputs" }
    ]
  },
  {
    id: "junior-data-scientist",
    title: "Junior Data Scientist",
    category: "Secondary",
    tagline: "I build classification models and evaluate risk factors.",
    description: "Applying basic machine learning and statistical methods to address questions.",
    associatedProjects: ["rural-financial-accessibility"],
    evidence: [
      { metric: "Random Forest ROC-AUC 0.793", sourceProject: "rural-financial-accessibility", relevance: "Model classification performance" },
      { metric: "1,226 ML records", sourceProject: "rural-financial-accessibility", relevance: "Cleaned ML feature tables" }
    ]
  },
  {
    id: "geospatial-analyst",
    title: "Geospatial / Public Sector Analyst",
    category: "Secondary",
    tagline: "I analyze physical transit zones and mapping shapefiles.",
    description: "Using spatial databases to solve public sector access problems.",
    associatedProjects: ["rural-financial-accessibility"],
    evidence: [
      { metric: "7,392 Scottish Data Zones", sourceProject: "rural-financial-accessibility", relevance: "Boundary shapefile mapping" }
    ]
  },
  {
    id: "ai-data-evaluation-analyst",
    title: "AI Data / LLM Evaluation Analyst",
    category: "Secondary",
    tagline: "I red-team prompt contexts and verify RAG citation coverage.",
    description: "Auditing structured inputs for LLM code assistants and RAG validation.",
    associatedProjects: ["vccf-context-fabric"],
    evidence: [
      { metric: "100% citation coverage", sourceProject: "vccf-context-fabric", relevance: "Automated RAG verification checks" }
    ]
  },
  {
    id: "operations-data-analyst",
    title: "Operations Data Analyst",
    category: "Secondary",
    tagline: "I prepare stakeholder slide decks and segment customer metrics.",
    description: "Using operational data to identify process and segment optimization.",
    associatedProjects: ["professional-simulations"],
    evidence: [
      { metric: "Customer Booking deck", sourceProject: "professional-simulations", relevance: "Business recommendations" }
    ]
  }
];
```

---

## 5. Anti-Hallucination & Dead-Code Prevention Controls

### 5.1 Anti-Hallucination Rules
1. **Source Registry Mapping**: All metrics exported in `src/data/projects.ts` must correspond exactly to the registry values in `C:\DigitalBrain-Portfolio\brain\00_CONTROL\SOURCE_ALIGNMENT.md`.
2. **Affiliation Restrictions**: Strict check preventing any keywords related to employment at SpaceX, Tesla, Google, xAI, or similar from entering public profiles.
3. **Labels Validation**: Verification scripts in subsequent phases must check that all status tags match enums precisely.

### 5.2 Dead-Code Prevention Rules
1. **Centralized Types**: All interfaces and shared types *must* reside in `types.ts`. Avoid local duplicate type declarations.
2. **Compiler Directives**: `tsconfig.app.json` has `noUnusedLocals: true` and `noUnusedParameters: true` enabled. Any unused data exports will trigger a build warning/error.

---

## 6. Verification Plan & Exit Gates
To verify Phase 3 data implementation:
1. **Local TypeScript Verification**: Execute `npm run build` (runs `tsc && vite build`). Any type inconsistencies or missing fields in the structured records will fail compile.
2. **Checks**: Verify no files contain hardcoded UI values.
3. **No Deleted Files**: Ensure existing docs and configuration remain intact.

**Next Exact Step**: Proceed to Phase 3 execution to create the data directory structure and files.
