import type { ExperienceItem, ProjectItem } from "./types";


export const personalInfo = {
  name: "Walter Mendoza",
  title: "Full Stack Software Engineer",
  email: "email@email.com",
  github: "https://github.com/danny-mendoza1",
  linkedin: "https://linkedin.com/in/walterdmendoza",
  about: "Full Stack Software Engineer with deep expertise in distributed systems debugging, API integration, and internal tooling. Proven track record of reverse-engineering undocumented environments to unblock enterprise integrations and contributing production code to core Rails monoliths.",
  location: "Chicago, IL"
};

export const experience: ExperienceItem[] = [
  {
    id: "snapsheet-senior",
    company: "Snapsheet",
    role: "Senior Technical Support Engineer",
    location: "Chicago, IL",
    startDate: "Jul 2025",
    endDate: "Present",
    description: "Specialist in bridging the gap between Support and Engineering by building automated sanitation, observability, and data transformation pipelines.",
    highlights: [
      "Authored a production fix for SendGrid integration to enforce strict attachment size validation, preventing silent failures.",
      "Initiated and implemented a Zendesk to LLM ticket summarization pipeline with parallel processing optimizations.",
      "Led root cause analysis for a distributed authentication outage (401 errors), identifying distinct failure modes across multiple tenant configurations.",
      "Served as technical authority for API integration disputes, reverse-engineering undocumented HMAC signatures for enterprise clients."
    ],
    techStack: ["Ruby on Rails", "Python", "Node.js", "LLM Integration"]
  },
  {
    id: "snapsheet-engineer",
    company: "Snapsheet",
    role: "Technical Support Engineer",
    location: "Chicago, IL",
    startDate: "Jul 2024",
    endDate: "Jul 2025",
    description: "Built high-impact internal tools used daily by Support and Engineering.",
    highlights: [
      "Built a JSON/PII sanitization tool that reduced payload preparation from 45 mins to <1 min.",
      "Developed a Node.js attachment reconciliation script capable of validating thousands of document records in seconds.",
      "Identified systemic rate-limit defects by analyzing New Relic throughput, proving limits were not scoped per-client.",
      "Designed and implemented Opsgenie on-call automation, replacing manual paging with structured escalation."
    ],
    techStack: ["Node.js", "New Relic", "Opsgenie", "JavaScript"]
  },
  {
    id: "insight-dev",
    company: "Insight2Profit",
    role: "Application Developer",
    location: "Chicago, IL",
    startDate: "Apr 2021",
    endDate: "Jul 2024",
    description: "Implemented dynamic pricing algorithms and visualization tools for manufacturing clients.",
    highlights: [
      "Implemented dynamic pricing algorithms integrating real-time commodity costs into React-based visualizations.",
      "Owned resolution of a critical timezone synchronization defect; standardized UTC/Local date handling across the stack.",
      "Enhanced core 'Mass Update' feature to allow modification of large datasets in a single transaction.",
      "Solely engineered a React/TS 'Decision Support' tool to provide transparency into automated price generation."
    ],
    techStack: ["React", "TypeScript", "C#", ".NET", "SQL"]
  }
];

export const projects: ProjectItem[] = [
  {
    id: "financial-recon",
    title: "Financial Data Reconciliation Tool",
    tagline: "O(n) lookup logic optimization",
    description: "Engineered a standalone application for a business client to diff complex CSV/JSON datasets; optimized lookup logic to reduce weekly workflow time from 25 hours to 4 hours.",
    techStack: ["React", "TypeScript", "Vite"],
    featured: true,
    internalRoute: "/projects/financial-tool" 
  },
  {
    id: "mendo-os",
    title: "Mendo-OS",
    tagline: "Web-based Operating System Simulation",
    description: "A complex desktop environment simulation featuring window management, a file system, and process tracking running entirely in the browser.",
    techStack: ["React", "Redux", "Framer Motion"],
    featured: true,
    internalRoute: "/os",
    comingSoon: true
  }
];