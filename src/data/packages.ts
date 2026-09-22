import { PackagePlan } from '../types';

export const SERVICE_PACKAGES: PackagePlan[] = [
  {
    id: 'brand-starter',
    title: 'BRAND STARTER',
    subtitle: 'Foundation Identity System',
    tag: 'Identity & Direction',
    timeline: '2–3 Weeks',
    deliverables: [
      'Primary & Secondary Logo Marks',
      'Construction Grid & Clearspace Rules',
      'Typography Hierarchy & Font Pairing',
      'Curated Brand Color Palette',
      'Business Card & Stationery Suite',
      'Core Brand Guidelines PDF'
    ],
    idealFor: 'Emerging founders, boutique ventures, and bespoke studios seeking an uncompromising brand debut.',
    featured: false
  },
  {
    id: 'digital-presence',
    title: 'DIGITAL PRESENCE',
    subtitle: 'UI/UX, Web Design & Modern Online Experience',
    tag: 'Most Popular',
    timeline: '3–5 Weeks',
    deliverables: [
      'Digital Brand Identity & Visual Language',
      'User Flow & Wireframe Architecture',
      'High-Fidelity UI/UX Design System in Figma',
      'Responsive Breakpoints (Desktop, Tablet, Mobile)',
      'Modern Website Design & Interactive Prototyping',
      'Clean Web Development Implementation Spec / Code Handoff'
    ],
    idealFor: 'Brands & founders wanting a modern, high-converting digital identity and seamless responsive website.',
    featured: true
  },
  {
    id: 'web-experience',
    title: 'WEB EXPERIENCE',
    subtitle: 'Design + Frontend Development',
    tag: 'Bespoke Experience',
    timeline: '4–6 Weeks',
    deliverables: [
      'Custom Creative Web Art Direction',
      'Bespoke Interactive UI/UX Architecture',
      'Full React / Next.js Production Build',
      'Interactive 3D / Three.js WebGL Accents',
      'Smooth Momentum Scroll & Page Transitions',
      'SEO & Lighthouse 95+ Performance Audit'
    ],
    idealFor: 'Forward-thinking brands wanting an Awwwards-caliber digital flagship that turns visitors into advocates.',
    featured: false
  },
  {
    id: 'complete-brand',
    title: 'COMPLETE BRAND',
    subtitle: 'Full-Spectrum Design & Digital Ecosystem',
    tag: 'All-Inclusive',
    timeline: '6–8 Weeks',
    deliverables: [
      'Full Brand Identity System & Guidelines',
      'Graphic Design Suite & Campaign Visuals',
      'Custom Apparel / Streetwear Merchandise Kit',
      'Complete Flagship Website (Design + Code)',
      '3D Interactive Visual Elements',
      'Priority Post-Launch Support & Evolution'
    ],
    idealFor: 'Visionary brands requiring cohesive mastery across every physical, wearable, and digital touchpoint.',
    featured: false
  }
];
