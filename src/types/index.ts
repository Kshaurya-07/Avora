export type Discipline = 
  | 'BRANDING' 
  | 'GRAPHIC DESIGN' 
  | 'APPAREL' 
  | 'UI/UX' 
  | 'WEB DESIGN' 
  | 'WEB DEVELOPMENT';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'BRANDING' | 'GRAPHICS' | 'APPAREL' | 'UI/UX' | 'WEB';
  year: string;
  client?: string;
  role: string;
  deliverables: string[];
  heroImage: string;
  secondaryImages: string[];
  accentColor?: string;
  brief: {
    problem: string;
    objective: string;
  };
  approach: {
    concept: string;
    strategy: string;
  };
  process: {
    step: string;
    description: string;
  }[];
  outcome: {
    summary: string;
    highlights: string[];
  };
  liveUrl?: string;
  featured?: boolean;
}

export interface ServiceDetail {
  id: string;
  number: string;
  name: Discipline;
  shortTagline: string;
  description: string;
  disciplinesCovered: string[];
  visualSequence: string[];
  accentColor: string;
  ctaText: string;
  filterKey: 'BRANDING' | 'GRAPHICS' | 'APPAREL' | 'UI/UX' | 'WEB';
}

export interface PlaygroundItem {
  id: string;
  title: string;
  category: '3D' | 'Typography' | 'Concept UI' | 'Apparel' | 'Poster' | 'Generative';
  year: string;
  description: string;
  image: string;
  aspect: 'portrait' | 'landscape' | 'square';
  tags: string[];
}

export interface PackagePlan {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  timeline: string;
  deliverables: string[];
  idealFor: string;
  featured?: boolean;
}
