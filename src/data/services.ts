import { ServiceDetail } from '../types';

export const SERVICES: ServiceDetail[] = [
  {
    id: 'branding',
    number: '01',
    name: 'BRANDING',
    shortTagline: 'Luxury Brand Identity & Systems',
    description: 'Forging iconic visual identities rooted in deep conceptual rigor. From mathematical logo construction grids to tactile stationery, custom packaging, and comprehensive brand architecture.',
    disciplinesCovered: [
      'Logo Explorations & Grid Systems',
      'Typography Architecture & Hierarchy',
      'Curated Color Harmonies (Pantone/Digital)',
      'Stationery & Tactile Packaging Mockups',
      'Comprehensive Brand Style Manuals',
      'Social & Environmental Spatial Identity'
    ],
    visualSequence: ['LOGO GRID', 'TYPOGRAPHY', 'COLOR SYSTEM', 'PACKAGING', 'BRAND MANUAL'],
    accentColor: '#A855F7',
    ctaText: 'VIEW BRANDING WORK ↗',
    filterKey: 'BRANDING'
  },
  {
    id: 'graphic-design',
    number: '02',
    name: 'GRAPHIC DESIGN',
    shortTagline: 'Experimental Digital & Print Studio',
    description: 'Pushing boundaries where high-fashion editorial meets raw visual composition. Layered typography posters, cultural campaign visuals, social assets, and exhibition graphics designed to command attention.',
    disciplinesCovered: [
      'Editorial Typography & Silkscreen Posters',
      'Brand Campaign & Event Key Visuals',
      'Curated Social Media Direction & Templates',
      'Artistic Book & Magazine Layouts',
      'Digital Compositions & Kinetic Artwork',
      'Print Finishes, Foiling & Texture Strategy'
    ],
    visualSequence: ['CONCEPT', 'TYPOGRAPHY', 'LAYERED COMPOSITION', 'TEXTURE', 'PRINT ARTIFACT'],
    accentColor: '#F472B6',
    ctaText: 'VIEW GRAPHIC WORK ↗',
    filterKey: 'GRAPHICS'
  },
  {
    id: 'apparel',
    number: '03',
    name: 'APPAREL',
    shortTagline: 'Contemporary Fashion & Streetwear Design',
    description: 'Transforming wearable garments into cultural statements. Heavyweight boxy silhouettes, technical print placements, high-density screen graphics, woven label systems, and full capsule direction.',
    disciplinesCovered: [
      'Oversized Hoodie & T-Shirt Graphics',
      'Front, Back & Spine Technical Print Placements',
      'Woven Neck Labels, Tyvek Tags & Hangtags',
      'Embroidery, Puff Ink & Heat Transfer Specs',
      'Tech Packs & Manufacturer-Ready Vector Files',
      'Streetwear Capsule Lookbook Art Direction'
    ],
    visualSequence: ['SILHOUETTE', 'GRAPHIC MOCKUP', 'PRINT PLACEMENT', 'HARDWARE/TAGS', 'CAPSULE'],
    accentColor: '#18181B',
    ctaText: 'VIEW APPAREL WORK ↗',
    filterKey: 'APPAREL'
  },
  {
    id: 'ui-ux',
    number: '04',
    name: 'UI/UX',
    shortTagline: 'High-End Digital Product Design',
    description: 'Designing purposeful, intuitive, and visually arresting user interfaces. Seamless design systems, multi-device responsiveness, micro-interactions, and frictionless consumer and enterprise SaaS workflows.',
    disciplinesCovered: [
      'Mobile iOS & Android App Interfaces',
      'Responsive Web Platforms & Dashboards',
      'Scalable Figma Design Systems & Tokens',
      'Wireframing, User Flows & Information Architecture',
      'Interactive Micro-Interactions & Prototyping',
      'Usability Testing & Design Handoff'
    ],
    visualSequence: ['RESEARCH', 'WIREFRAME', 'DESIGN SYSTEM', 'INTERFACE', 'PROTOTYPE'],
    accentColor: '#38BDF8',
    ctaText: 'VIEW UI/UX WORK ↗',
    filterKey: 'UI/UX'
  },
  {
    id: 'web-design',
    number: '05',
    name: 'WEB DESIGN',
    shortTagline: 'Immersive Editorial Digital Experiences',
    description: 'Crafting websites that win awards and convert audiences. Sophisticated editorial pacing, asymmetric grids, atmospheric cinematography, fluid scroll transitions, and precision responsive layout systems.',
    disciplinesCovered: [
      'Awwwards-Caliber Landing Pages',
      'Luxury Brand & Creative Studio Websites',
      'Editorial E-Commerce & Curated Portfolios',
      'Fluid Breakpoints (Desktop, Tablet, Mobile)',
      'Custom Navigation Systems & Micro-states',
      'Motion Design & Scroll Choreography'
    ],
    visualSequence: ['ART DIRECTION', 'GRID ARCHITECTURE', 'DESKTOP TO MOBILE', 'INTERACTION', 'FINAL WEBSITE'],
    accentColor: '#60A5FA',
    ctaText: 'VIEW WEB DESIGN ↗',
    filterKey: 'WEB'
  },
  {
    id: 'web-development',
    number: '06',
    name: 'WEB DEVELOPMENT',
    shortTagline: 'Design → Code → Living Interactive Experience',
    description: 'Bridging the chasm between design vision and technical execution. Clean, performant, modern frontend engineering with React, Next.js, Three.js WebGL shaders, Tailwind CSS, and silky 60 FPS animations.',
    disciplinesCovered: [
      'Custom React & Next.js Web Applications',
      'WebGL, Three.js & Interactive 3D Canvases',
      'Framer Motion & Smooth Momentum Scrolling (Lenis)',
      'Clean Modular TypeScript Architecture',
      'Lighthouse Performance & SEO Optimization',
      'Zero-Latency Responsive Fluidity'
    ],
    visualSequence: ['DESIGN FILE', 'COMPONENTS', 'CODE', 'INTERACTION', 'LIVE EXPERIENCE'],
    accentColor: '#10B981',
    ctaText: 'VIEW BUILT EXPERIENCES ↗',
    filterKey: 'WEB'
  }
];
