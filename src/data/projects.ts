import { Project } from '../types';

/**
 * AVORA CENTRALIZED PROJECT REPOSITORY
 * 
 * To add a new real client or personal project to the portfolio:
 * Add an object to the PROJECTS array following the Project schema below.
 * When this array has 1 or more items, the archive automatically transitions
 * from the curated loading state to the full asymmetric editorial grid.
 */

export const PROJECTS: Project[] = [
  /* 
  Uncomment or add your real projects here:
  {
    id: 'project-slug',
    title: 'PROJECT TITLE',
    subtitle: 'Project Subtitle / Scope',
    category: 'BRANDING', // 'BRANDING' | 'GRAPHICS' | 'APPAREL' | 'UI/UX' | 'WEB'
    year: '2025',
    role: 'Creative Director & Lead Designer',
    deliverables: ['Visual Identity', 'Typography', 'Packaging'],
    heroImage: 'https://...',
    secondaryImages: ['https://...', 'https://...'],
    accentColor: '#A855F7',
    brief: {
      problem: 'Description of the challenge...',
      objective: 'Core creative objective...'
    },
    approach: {
      concept: 'Concept statement...',
      strategy: 'Strategic execution...'
    },
    process: [
      { step: '01 Discovery', description: '...' },
      { step: '02 Gridding', description: '...' },
      { step: '03 Application', description: '...' }
    ],
    outcome: {
      summary: 'Impact and results summary...',
      highlights: ['Custom type system', 'Packaging suite']
    },
    liveUrl: 'https://...'
  }
  */
];
