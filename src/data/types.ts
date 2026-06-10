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
