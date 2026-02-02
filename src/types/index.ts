export type TechCategory = "Frontend" | "Backend" | "Database" | "Tools";

export interface TechItem {
  name: string;
  category: TechCategory;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  highlights: string[];
  github: string;
  demo?: string;
}

export interface Certification {
  id: string;
  name: string;
  platform: string;
  year: string;
  summary: string;
}
