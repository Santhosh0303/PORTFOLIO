import { Profile, NavigationItem, CTAItem } from './types';

export const profile: Profile = {
  name: "Sai Santhosh Bellam Ramesh",
  title: "Evidence-Led Data Analyst & BI Builder",
  tagline: "Data Quality. BI Dashboards. Geospatial ML. AI Context Validation R&D.",
  promise: "I turn messy data into validated pipelines, dashboards and decisions.",
  location: "Leicester, UK",
  email: "saisanthoshbr2003@gmail.com",
  linkedin: "https://www.linkedin.com/in/saisanthosh0303",
  github: "https://github.com/Santhosh0303",
  cvLinks: {
    dataAnalyst: { label: "Data Analyst CV", url: "#", isAvailable: false, plannedPlaceholder: "Planned CV download link" },
    biAnalyst: { label: "BI Analyst CV", url: "#", isAvailable: false, plannedPlaceholder: "Planned CV download link" },
    dataQuality: { label: "Data Quality CV", url: "#", isAvailable: false, plannedPlaceholder: "Planned CV download link" }
  }
};

export const navigationItems: NavigationItem[] = [
  { label: "Home", path: "#home" },
  { label: "Role selector", path: "#roles" },
  { label: "Projects", path: "#projects" },
  { label: "Project Walkthroughs", path: "#walkthroughs" },
  { label: "CV / Contact", path: "#contact" }
];

export const ctaItems: CTAItem[] = [
  { label: "View Projects", action: "#projects", primary: true },
  { label: "Download CV", action: "#contact", primary: false }
];
