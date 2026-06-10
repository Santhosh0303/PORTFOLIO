import { ExperienceItem } from './types';

export const experience: ExperienceItem[] = [
  {
    id: "msc-dmu",
    role: "Postgraduate Student (MSc Data Analytics)",
    organization: "De Montfort University",
    location: "Leicester, UK",
    duration: "2024 - 2025",
    description: [
      "Studied advanced data analysis, SQL database systems, and statistical forecasting models.",
      "Delivered a star-schema BI Data Mart group project loading ticket databases.",
      "Conducted dissertation mapping of travel indices for 7,392 Scottish Data Zones using geospatial Random Forest classifiers."
    ],
    type: "academic"
  },
  {
    id: "dmu-science",
    role: "Data Science Analyst (Volunteer / Community Role)",
    organization: "DMU Data Science Community",
    location: "Leicester, UK",
    duration: "2025",
    description: [
      "Worked on community analytics tasks supporting data quality audits and pipeline reviews.",
      "Prepared data cleaning metrics summaries and standard validation checklist structures."
    ],
    type: "project"
  },
  {
    id: "be-anurag",
    role: "Undergraduate Student (BE Computer Science)",
    organization: "Anurag Group of Institutions",
    location: "Hyderabad, India",
    duration: "2019 - 2023",
    description: [
      "Practiced quantitative modeling, numerical analytics, and Python scripting.",
      "Completed modular capstone projects and software engineering tasks."
    ],
    type: "academic"
  }
];
