export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
  techStack: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  featured: boolean;
  internalRoute?: string;
  comingSoon?: boolean;
}
