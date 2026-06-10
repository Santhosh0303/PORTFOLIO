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
      { metric: "57 distinct quality metrics", sourceProject: "uk-sme-data-quality", relevance: "Ingestion validation scorecard" }
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
