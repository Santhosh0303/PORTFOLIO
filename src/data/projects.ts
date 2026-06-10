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
