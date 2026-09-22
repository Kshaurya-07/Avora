import { ServiceDetail } from '../types';

export const SERVICES: ServiceDetail[] = [
  {
    id: 'logo-design',
    number: '01',
    name: 'LOGO DESIGN',
    shortTagline: 'Geometric Grids, Marks & Responsive Systems',
    description: 'Engineering memorable, mathematically calibrated logo marks. From precision golden-ratio circles and custom typography to versatile monograms, wordmarks, and responsive multi-scale lockups.',
    disciplinesCovered: [
      'Mathematical Construction Grids & Geometry',
      'Symbol Development & Custom Monograms',
      'Wordmarks & Bespoke Lettering Architecture',
      'Black / White Inversion & Contrast Systems',
      'Multi-Scale Responsive Lockup Frameworks',
      'Favicon, App Icon & Vector File Packages'
    ],
    visualSequence: ['CONSTRUCTION GRID', 'GEOMETRY', 'TYPOGRAPHY', 'MONOGRAM', 'RESPONSIVE SYSTEM'],
    accentColor: '#C084FC',
    ctaText: 'START LOGO CONSULTATION ↗',
    filterKey: 'LOGO'
  },
  {
    id: 'branding',
    number: '02',
    name: 'BRANDING',
    shortTagline: 'Luxury Brand Identity & Systems',
    description: 'Forging iconic visual identities rooted in deep conceptual rigor. Comprehensive brand architecture spanning typography hierarchy, curated color harmonies, stationery, packaging, and brand manuals.',
    disciplinesCovered: [
      'Comprehensive Brand Strategy & Positioning',
      'Typography Architecture & Hierarchy (Canva / Adobe)',
      'Curated Color Harmonies (Pantone / Hex / CMYK)',
      'Stationery & Tactile Packaging Prototypes',
      'Complete Brand Style Manuals & Token Kits',
      'Social & Spatial Environmental Guidelines'
    ],
    visualSequence: ['DISCOVERY', 'IDENTITY', 'TYPOGRAPHY', 'COLOR SYSTEM', 'GUIDELINES'],
    accentColor: '#A855F7',
    ctaText: 'START BRAND CONSULTATION ↗',
    filterKey: 'BRANDING'
  },
  {
    id: 'graphic-design',
    number: '03',
    name: 'GRAPHIC DESIGN',
    shortTagline: 'Experimental Digital & Editorial Print Studio',
    description: 'Pushing boundaries where high-fashion editorial meets raw visual composition. Layered typography posters, cultural campaign visuals, social assets, and exhibition graphics created with Canva, Photoshop, Illustrator, and Figma.',
    disciplinesCovered: [
      'Editorial Typography & Silkscreen Posters',
      'Brand Campaign & Event Key Visuals',
      'Canva & Figma Social Templates & Systems',
      'Photoshop & Illustrator Composite Artworks',
      'Digital Compositions & Kinetic Artwork',
      'Print Finishes, Foiling & Texture Strategy'
    ],
    visualSequence: ['CONCEPT', 'TYPOGRAPHY', 'LAYERED COMPOSITION', 'TEXTURE', 'FINAL ASSETS'],
    accentColor: '#F472B6',
    ctaText: 'START GRAPHIC CONSULTATION ↗',
    filterKey: 'GRAPHICS'
  },
  {
    id: 'apparel',
    number: '04',
    name: 'APPAREL',
    shortTagline: 'Contemporary Fashion & Streetwear Design',
    description: 'Transforming wearable garments into cultural statements. Heavyweight boxy silhouettes, technical print placements, high-density screen graphics, woven label systems, and full capsule direction.',
    disciplinesCovered: [
      'Oversized Hoodie & T-Shirt Graphics',
      'Front, Back & Sleeve Technical Print Placements',
      'Woven Neck Labels, Tyvek Tags & Hangtags',
      'Embroidery, Puff Ink & Screen Print Specifications',
      'Tech Packs & Manufacturer-Ready Vector Files',
      'Streetwear Capsule Lookbook Art Direction'
    ],
    visualSequence: ['SILHOUETTE', 'GRAPHIC DIRECTION', 'PRINT PLACEMENT', 'HARDWARE/TAGS', 'TECH PACK'],
    accentColor: '#18181B',
    ctaText: 'START APPAREL CONSULTATION ↗',
    filterKey: 'APPAREL'
  },
  {
    id: 'ui-ux',
    number: '05',
    name: 'UI/UX',
    shortTagline: 'High-End Digital Product Design',
    description: 'Designing purposeful, intuitive, and visually arresting user interfaces. Seamless design systems, multi-device responsiveness, micro-interactions, and frictionless consumer and enterprise SaaS workflows.',
    disciplinesCovered: [
      'Mobile iOS & Android App Interfaces',
      'Responsive Web Platforms & Dashboards',
      'Scalable Figma Design Systems & Tokens',
      'Wireframing, User Flows & Information Architecture',
      'Interactive Micro-Interactions & Prototyping',
      'Usability Testing & Design-to-Code Handoff'
    ],
    visualSequence: ['RESEARCH', 'WIREFRAME', 'DESIGN SYSTEM', 'INTERFACE', 'PROTOTYPE'],
    accentColor: '#38BDF8',
    ctaText: 'START UI/UX CONSULTATION ↗',
    filterKey: 'UI/UX'
  },
  {
    id: 'web-design',
    number: '06',
    name: 'WEB DESIGN',
    shortTagline: 'Immersive Editorial Digital Experiences',
    description: 'Crafting websites that win awards and convert audiences. Sophisticated editorial pacing, asymmetric grids, atmospheric cinematography, fluid scroll transitions, and precision responsive layout systems.',
    disciplinesCovered: [
      'Awwwards-Caliber Landing Pages & Showcases',
      'Luxury Brand & Creative Studio Websites',
      'Editorial E-Commerce & Curated Portfolios',
      'Fluid Breakpoints (Desktop, Tablet, Mobile)',
      'Custom Navigation Systems & Micro-states',
      'Motion Design & Scroll Choreography'
    ],
    visualSequence: ['DISCOVERY', 'GRID ARCHITECTURE', 'DESKTOP TO MOBILE', 'INTERACTION', 'PROTOTYPE'],
    accentColor: '#60A5FA',
    ctaText: 'START WEB CONSULTATION ↗',
    filterKey: 'WEB'
  },
  {
    id: 'web-development',
    number: '07',
    name: 'WEB DEVELOPMENT',
    shortTagline: 'Design → Code → Living Interactive Experience',
    description: 'Bridging the chasm between design vision and technical execution. Clean, performant, modern frontend engineering with React, Next.js, Three.js WebGL shaders, Tailwind CSS, and silky 120Hz-ready animations.',
    disciplinesCovered: [
      'Custom React & Next.js Web Applications',
      'WebGL, Three.js & Interactive 3D Canvases',
      'Framer Motion & Smooth Momentum Scrolling (Lenis)',
      'Clean Modular TypeScript Architecture',
      'Lighthouse Performance & Core Web Vitals Optimization',
      'Zero-Latency Responsive Fluidity'
    ],
    visualSequence: ['PLANNING', 'COMPONENTS', 'CODE ARCHITECTURE', 'ANIMATION', 'DEPLOYMENT'],
    accentColor: '#10B981',
    ctaText: 'START DEVELOPMENT CONSULTATION ↗',
    filterKey: 'WEB'
  }
];
