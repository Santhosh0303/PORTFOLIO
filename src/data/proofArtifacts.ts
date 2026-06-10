import { ProofArtifact } from './types';

export const proofArtifacts: ProofArtifact[] = [
  {
    id: "scotland-finance-qa",
    name: "Dissertation QA Gate Audit Report",
    filePath: "rural-financial-accessibility/reports/qa_report.md",
    type: "quality_report"
  },
  {
    id: "sme-quality-scorecard",
    name: "UK SME Ingestion Ingestion Quality Scorecard",
    filePath: "uk-sme-data-quality/reports/data_quality_scorecard.md",
    type: "eval_report"
  },
  {
    id: "theatre-star-schema",
    name: "Midlands Theatre Star Schema Loader SQL Script",
    filePath: "midlands-theatre-bi-data-mart/sql/schema.sql",
    type: "schema"
  },
  {
    id: "vccf-citation-coverage",
    name: "VCCF RAG Context Evaluation Citation Coverage Report",
    filePath: "vccf-context-fabric/reports/citation_coverage_report.md",
    type: "eval_report"
  }
];
