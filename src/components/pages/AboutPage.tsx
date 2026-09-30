import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  Compass,
  CheckCircle2,
  Code2,
  Palette,
  Layers,
  Shirt,
  Layout,
  Globe,
  PenTool,
  Cpu,
  Workflow,
  HelpCircle,
  Eye,
  Terminal,
  ChevronDown,
  ChevronRight,
  Check,
} from 'lucide-react';

interface AboutPageProps {
  onBackToHome: () => void;
  onNavigateHomeSection: (sectionId: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBackToHome, onNavigateHomeSection }) => {
  const [selectedProcessStep, setSelectedProcessStep] = useState<number>(0);
  const [serviceStageMap, setServiceStageMap] = useState<Record<string, number>>({
    logo: 0,
    branding: 0,
    graphic: 0,
    apparel: 0,
    uiux: 0,
    webdesign: 0,
    webdev: 0,
  });

  const eightStepProcess = [
    {
      number: '01',
      title: 'DISCOVER',
      subtitle: 'Context & Vision Extraction',
      desc: 'Understand the underlying idea, market landscape, user objectives, and core creative ambitions.',
      focus: 'Market Positioning & Creative Intent',
      deliverables: ['Brand Brief', 'Aesthetic Benchmarks', 'Strategic Scope'],
      diagramType: 'discover',
    },
    {
      number: '02',
      title: 'DEFINE',
      subtitle: 'Constraints & System Architecture',
      desc: 'Synthesize requirements to establish clear design constraints, art direction tone, and functional scope.',
      focus: 'System Architecture & Design Constraints',
      deliverables: ['Design Constraints', 'Typography Spec', 'Feature Matrix'],
      diagramType: 'define',
    },
    {
      number: '03',
      title: 'EXPLORE',
      subtitle: 'Divergent Form Exploration',
      desc: 'Investigate typographic pairings, golden ratio geometry, composition studies, and material moodboards.',
      focus: 'Geometry, Chromatics & Composition Studies',
      deliverables: ['Golden Ratio Grids', 'Color Swatches', 'Moodboards'],
      diagramType: 'explore',
    },
    {
      number: '04',
      title: 'DESIGN',
      subtitle: 'Core Asset & Interface Crafting',
      desc: 'Craft the cohesive visual system, vector marks, apparel layouts, and pixel-precise interactive UI.',
      focus: 'Vector Precision & UI Token Hierarchy',
      deliverables: ['Vector Marks', 'Responsive Layouts', 'Design Tokens'],
      diagramType: 'design',
    },
    {
      number: '05',
      title: 'REFINE',
      subtitle: 'Micro-Calibration & Optical Tuning',
      desc: 'Iterate based on optical alignment, chromatic balance, micro-spacing calibrations, and feedback.',
      focus: 'Optical Alignment & WCAG AA+ Contrast',
      deliverables: ['Kerning Adjustments', 'Contrast Compliance', 'Prototype Polish'],
      diagramType: 'refine',
    },
    {
      number: '06',
      title: 'BUILD',
      subtitle: '120Hz Frontend Engineering',
      desc: 'Translate approved designs into production React, Next.js, and Three.js WebGL with 120Hz-ready fluid motion.',
      focus: 'GPU-Accelerated Component Engineering',
      deliverables: ['React Components', 'Three.js Shaders', 'Framer Motion Springs'],
      diagramType: 'build',
    },
    {
      number: '07',
      title: 'TEST',
      subtitle: 'Stress Testing & Performance Audit',
      desc: 'Audit performance, Lighthouse Core Web Vitals, cross-device responsiveness, and accessibility (WCAG AA+).',
      focus: 'Lighthouse 100 & Cross-Device Resilience',
      deliverables: ['Core Web Vitals 100/100', 'Mobile Viewport Tests', 'Accessibility Audit'],
      diagramType: 'test',
    },
    {
      number: '08',
      title: 'DELIVER',
      subtitle: 'Master Package & Deployment',
      desc: 'Package vector assets, production build deployment, and documentation for client ownership.',
      focus: 'Full Client Ownership & Live Launch',
      deliverables: ['Master Vector Bundle', 'Production Deployment', 'Complete Documentation'],
      diagramType: 'deliver',
    },
  ];

  const serviceDeepDives = [
    {
      id: 'logo',
      number: '01',
      name: 'LOGO DESIGN',
      whatIsIt: 'The mathematical and conceptual distillation of an entity into an unmistakable visual mark.',
      whoNeedsIt: 'New ventures, personal brands, and companies seeking a timeless, versatile symbol.',
      whatAvoraCreates: 'Monograms, geometric symbols, wordmarks, construction grids, and responsive multi-scale lockup suites.',
      tools: 'Adobe Illustrator, Figma, Canva, Geometry Math Grids',
      aiUsage: 'Rapid conceptual brainstorming & semantic ideation; 100% human vector crafting.',
      stages: [
        {
          number: '01',
          name: 'DISCOVER',
          summary: 'Inquiry & Conceptual Roots',
          explanation: 'Deep dive into your brand core, competitors, and semantic territory to isolate timeless visual concepts.',
          visualContent: 'Concept Mindmap: Geometry • Simplicity • Memory • Scalability',
          stageOutput: 'Creative Brief & Concept Direction',
        },
        {
          number: '02',
          name: 'EXPLORE',
          summary: 'Mathematical Geometry & Sketching',
          explanation: 'Drawing with golden ratio circular calipers and precision vector bezier curves to establish structural balance.',
          visualContent: 'Golden Ratio Grid: 1:1.618 circular geometry overlay on mark',
          stageOutput: '3 Distinct Logo Vector Archetypes',
        },
        {
          number: '03',
          name: 'REFINE',
          summary: 'Optical Kerning & Scale Testing',
          explanation: 'Calibrating stroke weights for 16px favicon rendering up to billboard scales. Optical spacing and legibility tuning.',
          visualContent: 'Scale Matrix: 16px • 32px • 120px • 1200px lockup tests',
          stageOutput: 'Master Wordmark & Monogram Lockup Suite',
        },
        {
          number: '04',
          name: 'FINALIZE',
          summary: 'Production Assets & Guidelines',
          explanation: 'Exporting infinitely scalable SVGs, EPS vectors, high-res PNGs, and clear construction documentation.',
          visualContent: 'Deliverables Bundle: SVG + EPS + Dark/Light Variants + Guidelines',
          stageOutput: 'Client Master Vector Package',
        },
      ],
    },
    {
      id: 'branding',
      number: '02',
      name: 'BRANDING & IDENTITY SYSTEMS',
      whatIsIt: 'A holistic visual ecosystem defining how a company expresses itself across every physical and digital surface.',
      whoNeedsIt: 'Businesses scaling up, launching flagships, or needing to command market authority.',
      whatAvoraCreates: 'Complete brand guidelines, typography hierarchies, Pantone color systems, tactile packaging, and business suites.',
      tools: 'Figma, Adobe Illustrator, Canva, Photoshop',
      aiUsage: 'Moodboard thematic clustering, copy exploration, market positioning research.',
      stages: [
        {
          number: '01',
          name: 'DISCOVER',
          summary: 'Brand DNA & Positioning',
          explanation: 'Synthesizing your value proposition, tone of voice, and market category to identify a distinctive visual lane.',
          visualContent: 'Positioning Matrix: High-End vs Accessible • Editorial vs Brutalist',
          stageOutput: 'Brand Strategy Document',
        },
        {
          number: '02',
          name: 'EXPLORE',
          summary: 'Chromatic & Typographic Moodboards',
          explanation: 'Curating Pantone pairings, editorial serif and monospace typography combinations, and physical materiality.',
          visualContent: 'Color Swatches: #18181B • #FAF9F6 • #C084FC • #38BDF8',
          stageOutput: 'Comprehensive Visual Direction Deck',
        },
        {
          number: '03',
          name: 'REFINE',
          summary: 'System Stress-Testing',
          explanation: 'Applying the identity across digital banners, business cards, invoice templates, and product packaging.',
          visualContent: 'Collateral Mockup: Stationery, packaging box, social tokens',
          stageOutput: 'Omnichannel Application Suite',
        },
        {
          number: '04',
          name: 'FINALIZE',
          summary: 'Master Brand Guidelines & Tokens',
          explanation: 'Publishing an exhaustive digital brand guideline detailing typography rules, clear space, and token variables.',
          visualContent: 'Design Token Spec: Font families, spacing scale, hex values',
          stageOutput: 'Brand Book PDF & Figma Token Library',
        },
      ],
    },
    {
      id: 'graphic',
      number: '03',
      name: 'GRAPHIC DESIGN',
      whatIsIt: 'High-fashion editorial compositions and digital campaign assets that arrest attention.',
      whoNeedsIt: 'Cultural events, brands launching marketing campaigns, publications, and social creators.',
      whatAvoraCreates: 'Silkscreen posters, exhibition graphics, marketing collateral, social design systems (Canva/Figma), and decks.',
      tools: 'Canva (Agile marketing visuals), Adobe Photoshop, Adobe Illustrator, Figma',
      aiUsage: 'Visual asset synthesis, texture ideation, rapid social format adaptation.',
      stages: [
        {
          number: '01',
          name: 'DISCOVER',
          summary: 'Narrative & Content Hierarchy',
          explanation: 'Determining the primary focal hook, message priority, and distribution channels for maximum visual impact.',
          visualContent: 'Information Hierarchy: Headline (70%) • Visual (20%) • Details (10%)',
          stageOutput: 'Content Architecture & Focal Points',
        },
        {
          number: '02',
          name: 'EXPLORE',
          summary: 'Editorial Layout & High-Fashion Grid',
          explanation: 'Composing Swiss-style spatial layouts, experimental typographic scales, and texture overlays.',
          visualContent: 'Editorial 3:4 Composition: Asymmetric columns & negative space',
          stageOutput: '3 Poster & Campaign Concepts',
        },
        {
          number: '03',
          name: 'REFINE',
          summary: 'Grain, Halftones & Print Separations',
          explanation: 'Applying analog photo grain, chromatic duotone mapping, and print-ready color separation profiles.',
          visualContent: 'Halftone & CMYK Spec: 300 DPI high-fidelity output',
          stageOutput: 'Master Artwork at Production Res',
        },
        {
          number: '04',
          name: 'FINALIZE',
          summary: 'Multi-Channel & Canva Systems',
          explanation: 'Creating easily editable Canva social templates and print-ready CMYK PDFs for immediate deployment.',
          visualContent: 'Canva Social Kit: 9:16 Stories • 1:1 Posts • 16:9 Decks',
          stageOutput: 'Canva Template Links & Print-Ready Files',
        },
      ],
    },
    {
      id: 'apparel',
      number: '04',
      name: 'APPAREL DESIGN',
      whatIsIt: 'Wearable cultural artifacts combining silhouette curation, heavyweight fabrics, and screen graphics.',
      whoNeedsIt: 'Streetwear brands, music artists, creative studios, and companies creating premium merchandise.',
      whatAvoraCreates: 'Oversized t-shirt & hoodie graphics, tech packs, technical print placements, woven neck labels, and lookbook art direction.',
      tools: 'Adobe Illustrator, Photoshop, Physical Tech Packs',
      aiUsage: 'Garment drape ideation, theme brainstorming; tech packs are manually vectorized.',
      stages: [
        {
          number: '01',
          name: 'DISCOVER',
          summary: 'Subcultural Theme & Fabric Curation',
          explanation: 'Analyzing garment weight (e.g. 280 GSM heavyweight cotton), drop-shoulder cuts, and subcultural cues.',
          visualContent: 'Fabric & Cut Spec: Boxy fit • 100% French Terry / Heavyweight cotton',
          stageOutput: 'Garment Direction & Moodboard',
        },
        {
          number: '02',
          name: 'EXPLORE',
          summary: 'Graphic Placement & Scale Studies',
          explanation: 'Testing chest pocket typography, oversized back prints, and sleeve coordinates across garment silhouettes.',
          visualContent: 'Placement Blueprint: Front 12cm mark • Back 38cm artwork',
          stageOutput: 'Front & Back Silhouette Visuals',
        },
        {
          number: '03',
          name: 'REFINE',
          summary: 'Colorway Separations & Ink Profiling',
          explanation: 'Specifying water-based inks, puff print highlights, screen mesh counts, and spot Pantone colors.',
          visualContent: 'Screen Separation: 3 Spot Pantone Colors + Underbase',
          stageOutput: 'Production-Separated Vector Art',
        },
        {
          number: '04',
          name: 'FINALIZE',
          summary: 'Factory Tech Pack Deliverable',
          explanation: 'Producing exact millimeter measurement callouts, neck label art, and care tag specifications for garment manufacturers.',
          visualContent: 'Tech Pack PDF: Dimension specs • Pantone callouts • Stitching notes',
          stageOutput: 'Complete Factory-Ready Tech Pack',
        },
      ],
    },
    {
      id: 'uiux',
      number: '05',
      name: 'UI/UX DESIGN',
      whatIsIt: 'Frictionless, visually striking digital product interfaces engineered around intuitive human behavior.',
      whoNeedsIt: 'SaaS startups, mobile app founders, and enterprise products needing consumer-grade refinement.',
      whatAvoraCreates: 'Multi-device design systems, clickable prototypes, wireframe architectures, dashboards, and mobile iOS/Android screens.',
      tools: 'Figma, FigJam, Principle, Whimsical',
      aiUsage: 'User persona research, UX copywriting exploration, workflow edge-case stress testing.',
      stages: [
        {
          number: '01',
          name: 'DISCOVER',
          summary: 'User Journeys & Workflow Mapping',
          explanation: 'Mapping user personas, core task funnels, and friction points into clean information architecture.',
          visualContent: 'User Journey Flow: Sign Up → Onboard → Core Value Trigger',
          stageOutput: 'Information Architecture Map',
        },
        {
          number: '02',
          name: 'EXPLORE',
          summary: 'Low-Fidelity Wireframing',
          explanation: 'Drafting structural layout alternatives focusing on usability, scanability, and thumb-zone ergonomics.',
          visualContent: 'Wireframe Layout: Multi-screen low-fi navigation schematics',
          stageOutput: 'Full Clickable Wireframe Prototype',
        },
        {
          number: '03',
          name: 'REFINE',
          summary: 'Design System & Token Hierarchy',
          explanation: 'Building reusable auto-layout components, color tokens, typography scales, and interactive states in Figma.',
          visualContent: 'Figma Component Set: Buttons, inputs, modals with hover/active states',
          stageOutput: 'High-Fidelity Component Library',
        },
        {
          number: '04',
          name: 'FINALIZE',
          summary: 'Interactive Prototype & Redline Handoff',
          explanation: 'Creating dynamic micro-interactions, responsive device breakdowns, and exact engineering redlines for developers.',
          visualContent: 'Developer Handoff: Tokens, layout specs, micro-interaction guides',
          stageOutput: 'Interactive Figma Prototype & Dev Specs',
        },
      ],
    },
    {
      id: 'webdesign',
      number: '06',
      name: 'WEB DESIGN',
      whatIsIt: 'Awwwards-caliber editorial websites that merge cinematic art direction with conversion psychology.',
      whoNeedsIt: 'Creative studios, visionary founders, and brands ready to stand apart from generic templates.',
      whatAvoraCreates: 'Fluid responsive layout systems, custom scroll choreography, interactive 3D concepts, and micro-states.',
      tools: 'Figma, Adobe Creative Suite, Blender (Assets)',
      aiUsage: 'Atmospheric visual generation, typography pairing experiments, layout prototyping.',
      stages: [
        {
          number: '01',
          name: 'DISCOVER',
          summary: 'Editorial Rhythm & Content Strategy',
          explanation: 'Architecting the narrative arc from hero arrival to final conversion CTA with calibrated pacing.',
          visualContent: 'Page Arc Blueprint: Hook (Hero) → Proof → Detail → Action (CTA)',
          stageOutput: 'Sitemap & Content Choreography',
        },
        {
          number: '02',
          name: 'EXPLORE',
          summary: 'Hero & Viewport Exploration',
          explanation: 'Designing cinematic typography, spatial grid layouts, and dynamic 3D focal elements.',
          visualContent: '1440px Viewport Mockup: High-contrast typography & glass crystal',
          stageOutput: 'Visual Direction & Hero Prototypes',
        },
        {
          number: '03',
          name: 'REFINE',
          summary: 'Responsive Fluid Scaling & Motion Specs',
          explanation: 'Creating seamless breakpoints across 390px mobile, 768px tablet, 1440px laptop, and 2560px 4K displays.',
          visualContent: 'Responsive Breakpoints: Mobile • Tablet • Desktop layouts',
          stageOutput: 'Complete Multi-Device Design System',
        },
        {
          number: '04',
          name: 'FINALIZE',
          summary: 'Interaction Documentation & Assets',
          explanation: 'Exporting optimized SVGs, WebP visual assets, and detailed scroll interaction storyboards.',
          visualContent: 'Interaction Map: Scroll trigger points & spring physics curves',
          stageOutput: 'Ready-to-Develop Design Package',
        },
      ],
    },
    {
      id: 'webdev',
      number: '07',
      name: 'WEB DEVELOPMENT',
      whatIsIt: 'Translating design visions into silky, 120Hz-ready frontend code that performs flawlessly.',
      whoNeedsIt: 'Teams wanting an uncompromising living digital presence built with cutting-edge web technologies.',
      whatAvoraCreates: 'Custom React & Next.js web applications, Three.js WebGL shaders, Tailwind CSS styling, and Lenis momentum scrolling.',
      tools: 'React, Next.js, Three.js, TypeScript, Tailwind CSS, Framer Motion, Vite',
      aiUsage: 'Code autocompletion, regex assistance, unit test scaffolding, debugging assistance.',
      stages: [
        {
          number: '01',
          name: 'DISCOVER',
          summary: 'Technical Architecture & Performance Budget',
          explanation: 'Establishing the stack (Vite/React/Three.js), bundle size limits, and sub-100ms interaction budgets.',
          visualContent: 'Architecture: Vite SPA • Node Native Server • WebGL Render Loop',
          stageOutput: 'System Architecture Specification',
        },
        {
          number: '02',
          name: 'EXPLORE',
          summary: 'Component Engineering & Shader Scaffolding',
          explanation: 'Writing modular TypeScript components, custom Three.js transmission materials, and responsive layouts.',
          visualContent: 'Code Stack: React 18 hooks • Three.js MeshTransmissionMaterial',
          stageOutput: 'Core Interactive Application Engine',
        },
        {
          number: '03',
          name: 'REFINE',
          summary: '120Hz Motion Tuning & Accessibility',
          explanation: 'Calibrating GPU transforms, eliminating layout recalculations, and auditing WCAG AA+ keyboard navigation.',
          visualContent: '60/120 FPS Monitor: GPU transform/opacity only • Zero sound',
          stageOutput: 'Butter-Smooth Performance Profile',
        },
        {
          number: '04',
          name: 'FINALIZE',
          summary: 'Lighthouse 100 & Production Edge Deploy',
          explanation: 'Testing Core Web Vitals, deploying on edge hosting, and delivering clean, well-commented source code.',
          visualContent: 'Audit Scorecard: Performance 100 • Accessibility 100 • SEO 100',
          stageOutput: 'Live Deployed Web Application',
        },
      ],
    },
  ];

  const renderProcessDiagram = (type: string) => {
    switch (type) {
      case 'discover':
        return (
          <div className="w-full h-full flex flex-col justify-center items-center p-6 bg-gradient-to-br from-purple-50/50 to-blue-50/30 rounded-2xl border border-purple-100">
            <div className="relative w-40 h-40 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-dashed border-purple-300 animate-spin-slow" />
              <div className="absolute inset-4 rounded-full border border-purple-200" />
              <div className="w-16 h-16 rounded-full bg-white border border-purple-300 shadow-md flex items-center justify-center">
                <Compass className="w-6 h-6 text-purple-600 animate-pulse" />
              </div>
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 text-[9px] font-mono bg-white px-2 py-0.5 rounded border border-purple-200 text-purple-700">Market</span>
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[9px] font-mono bg-white px-2 py-0.5 rounded border border-purple-200 text-purple-700">Vision</span>
              <span className="absolute top-1/2 -left-3 -translate-y-1/2 text-[9px] font-mono bg-white px-2 py-0.5 rounded border border-purple-200 text-purple-700">Users</span>
              <span className="absolute top-1/2 -right-3 -translate-y-1/2 text-[9px] font-mono bg-white px-2 py-0.5 rounded border border-purple-200 text-purple-700">Brand</span>
            </div>
            <span className="text-[10px] font-mono text-purple-600 font-semibold mt-4">DISCOVERY RADAR & MARKET AUDIT</span>
          </div>
        );
      case 'define':
        return (
          <div className="w-full h-full flex flex-col justify-center items-center p-6 bg-gradient-to-br from-blue-50/50 to-purple-50/30 rounded-2xl border border-blue-100">
            <div className="w-48 p-4 bg-white rounded-xl border border-blue-200 shadow-xs space-y-2.5">
              <div className="flex justify-between items-center text-[10px] font-mono text-blue-700 border-b border-blue-100 pb-1">
                <span>CONSTRAINTS</span>
                <span className="font-bold">STATUS</span>
              </div>
              <div className="flex justify-between text-[11px] font-mono text-avora-charcoal">
                <span>Typography</span>
                <span className="text-emerald-600 font-semibold">Defined</span>
              </div>
              <div className="flex justify-between text-[11px] font-mono text-avora-charcoal">
                <span>Chromatic Rules</span>
                <span className="text-emerald-600 font-semibold">Locked</span>
              </div>
              <div className="flex justify-between text-[11px] font-mono text-avora-charcoal">
                <span>Core Objectives</span>
                <span className="text-purple-600 font-semibold">100% Aligned</span>
              </div>
            </div>
            <span className="text-[10px] font-mono text-blue-600 font-semibold mt-4">CREATIVE CONSTRAINTS SPECIFICATION</span>
          </div>
        );
      case 'explore':
        return (
          <div className="w-full h-full flex flex-col justify-center items-center p-6 bg-gradient-to-br from-pink-50/50 to-purple-50/30 rounded-2xl border border-pink-100">
            <div className="relative w-44 h-32 flex items-center justify-center">
              <div className="absolute inset-0 border border-pink-300 rounded-lg" />
              <div className="absolute top-2 left-2 w-12 h-12 rounded-full border border-dashed border-purple-400" />
              <div className="absolute bottom-2 right-2 w-20 h-20 rounded-full border border-blue-400" />
              <div className="flex gap-2">
                <span className="w-6 h-6 rounded-full bg-[#18181B] shadow-xs" />
                <span className="w-6 h-6 rounded-full bg-[#C084FC] shadow-xs" />
                <span className="w-6 h-6 rounded-full bg-[#38BDF8] shadow-xs" />
                <span className="w-6 h-6 rounded-full bg-[#FAF9F6] border border-gray-300 shadow-xs" />
              </div>
            </div>
            <span className="text-[10px] font-mono text-pink-600 font-semibold mt-4">GOLDEN RATIO GEOMETRY & SWATCHES</span>
          </div>
        );
      case 'design':
        return (
          <div className="w-full h-full flex flex-col justify-center items-center p-6 bg-gradient-to-br from-purple-50/50 to-emerald-50/30 rounded-2xl border border-purple-100">
            <div className="w-48 h-32 bg-white rounded-xl border border-purple-200 shadow-xs relative overflow-hidden flex flex-col justify-between p-3">
              <div className="flex items-center gap-1.5 border-b border-gray-100 pb-1.5">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-[9px] font-mono text-gray-400 ml-auto">Vector Bézier</span>
              </div>
              <div className="flex items-center justify-center my-auto">
                <PenTool className="w-8 h-8 text-purple-600 animate-pulse" />
              </div>
              <div className="text-[9px] font-mono text-center text-purple-700 font-medium">
                P(x, y) = (1-t)³P₀ + 3(1-t)²tP₁
              </div>
            </div>
            <span className="text-[10px] font-mono text-purple-600 font-semibold mt-4">VECTOR BEZIER & INTERFACE TOKENS</span>
          </div>
        );
      case 'refine':
        return (
          <div className="w-full h-full flex flex-col justify-center items-center p-6 bg-gradient-to-br from-amber-50/50 to-purple-50/30 rounded-2xl border border-amber-100">
            <div className="w-48 p-3 bg-white rounded-xl border border-amber-200 shadow-xs space-y-2">
              <div className="text-[10px] font-mono text-amber-800 font-bold flex justify-between">
                <span>OPTICAL TUNING</span>
                <span>Δe &lt; 0.5</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-mono text-gray-600">
                  <span>Kerning Balance:</span>
                  <span className="text-emerald-600 font-bold">+0.02 em</span>
                </div>
                <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[95%]" />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-mono text-gray-600">
                  <span>Contrast Ratio:</span>
                  <span className="text-purple-600 font-bold">14.8:1 (AAA)</span>
                </div>
                <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-purple-500 h-full w-[100%]" />
                </div>
              </div>
            </div>
            <span className="text-[10px] font-mono text-amber-700 font-semibold mt-4">OPTICAL KERNING & WCAG AAA AUDIT</span>
          </div>
        );
      case 'build':
        return (
          <div className="w-full h-full flex flex-col justify-center items-center p-6 bg-gradient-to-br from-cyan-50/50 to-blue-50/30 rounded-2xl border border-cyan-100">
            <div className="w-48 p-3 bg-[#18181B] text-emerald-400 rounded-xl shadow-md font-mono text-[10px] space-y-1">
              <div className="text-gray-400">// 120Hz Render Engine</div>
              <div>&lt;<span className="text-blue-400">GlassCrystal</span> /&gt;</div>
              <div className="text-purple-300">useFrame(lerp) =&gt; GPU</div>
              <div className="text-amber-300">frameloop="always" 120fps</div>
            </div>
            <span className="text-[10px] font-mono text-cyan-700 font-semibold mt-4">REACT 18 + THREE.JS WEBGL PIPELINE</span>
          </div>
        );
      case 'test':
        return (
          <div className="w-full h-full flex flex-col justify-center items-center p-6 bg-gradient-to-br from-emerald-50/50 to-teal-50/30 rounded-2xl border border-emerald-100">
            <div className="flex gap-2">
              <div className="w-14 h-14 rounded-full border-2 border-emerald-500 flex flex-col items-center justify-center bg-white shadow-xs">
                <span className="text-xs font-mono font-bold text-emerald-600">100</span>
                <span className="text-[7px] font-mono uppercase text-gray-400">Perf</span>
              </div>
              <div className="w-14 h-14 rounded-full border-2 border-emerald-500 flex flex-col items-center justify-center bg-white shadow-xs">
                <span className="text-xs font-mono font-bold text-emerald-600">100</span>
                <span className="text-[7px] font-mono uppercase text-gray-400">A11y</span>
              </div>
              <div className="w-14 h-14 rounded-full border-2 border-emerald-500 flex flex-col items-center justify-center bg-white shadow-xs">
                <span className="text-xs font-mono font-bold text-emerald-600">100</span>
                <span className="text-[7px] font-mono uppercase text-gray-400">SEO</span>
              </div>
            </div>
            <span className="text-[10px] font-mono text-emerald-700 font-semibold mt-4">LIGHTHOUSE AUDIT: PERFECT 100/100</span>
          </div>
        );
      case 'deliver':
        return (
          <div className="w-full h-full flex flex-col justify-center items-center p-6 bg-gradient-to-br from-purple-50/50 to-indigo-50/30 rounded-2xl border border-purple-100">
            <div className="w-48 p-3 bg-white rounded-xl border border-purple-200 shadow-sm space-y-2 text-[10px] font-mono">
              <div className="flex items-center gap-1.5 text-purple-700 font-bold border-b border-purple-100 pb-1">
                <Check className="w-3.5 h-3.5 text-purple-600" />
                <span>MASTER DEPLOYMENT</span>
              </div>
              <div className="text-gray-600">• Vector Suite (.SVG, .EPS)</div>
              <div className="text-gray-600">• Production Edge Build</div>
              <div className="text-gray-600">• Full IP Ownership Handover</div>
            </div>
            <span className="text-[10px] font-mono text-purple-700 font-semibold mt-4">CLIENT MASTER ASSET PACK</span>
          </div>
        );
      default:
        return null;
    }
  };

  const activeStep = eightStepProcess[selectedProcessStep];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#18181B] flex flex-col antialiased selection:bg-purple-200">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-avora-border py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-avora-muted hover:text-avora-charcoal transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to AVORA Studio</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-purple-600 font-semibold hidden sm:inline">
              ATELIER ARCHIVE & PHILOSOPHY
            </span>
            <button
              onClick={() => {
                onBackToHome();
                setTimeout(() => onNavigateHomeSection('consultation'), 100);
              }}
              className="px-4 py-1.5 rounded-full bg-avora-charcoal text-white text-xs font-sans font-semibold hover:bg-black transition-all"
            >
              Book Consultation ↗
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-8 py-16 sm:py-24 space-y-24">
        {/* Hero Section */}
        <section className="space-y-6 border-b border-avora-border pb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-avora-border text-[11px] font-mono uppercase tracking-widest text-avora-muted shadow-xs">
            <Compass className="w-3.5 h-3.5 text-purple-500 animate-spin-slow" />
            <span>ABOUT AVORA // COMPLETE STUDIO DISCLOSURE</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-avora-charcoal leading-[0.95]">
            IDEA → DESIGN →<br />
            <span className="iridescent-text">EXPERIENCE → CODE.</span>
          </h1>

          <p className="text-lg sm:text-2xl font-serif text-avora-charcoal/90 leading-relaxed max-w-3xl pt-2">
            AVORA exists to bridge the gap between abstract imagination and tangible, living digital experiences. A multidisciplinary practice uniting brand identity, graphics, streetwear, product UI/UX, and web development.
          </p>
        </section>

        {/* 01: FOUNDER SECTION (Kumar Shaurya - 100% Honest, No Fabricated Claims) */}
        <section id="founder" className="space-y-8 border-b border-avora-border pb-20">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-purple-600">
            <span>01</span>
            <span>//</span>
            <span>THE FOUNDER</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Refined Geometric Identity Placeholder (Honest: No fake photo) */}
            <div className="md:col-span-4 p-8 rounded-3xl bg-white border border-avora-border shadow-md flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-purple-100 via-blue-50 to-pink-50 border border-avora-border flex items-center justify-center shadow-inner">
                <span className="font-serif text-6xl font-black text-avora-charcoal">KS</span>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-avora-charcoal">Kumar Shaurya</h3>
                <p className="text-xs font-mono text-avora-muted mt-0.5">Founder & Multidisciplinary Creator</p>
                <p className="text-[11px] font-mono text-purple-600 font-semibold mt-1">Designer & Web Developer</p>
              </div>
              <div className="w-full pt-4 border-t border-avora-border-light text-[11px] font-mono text-avora-muted flex justify-between">
                <span>FOCUS:</span>
                <span className="text-avora-charcoal font-medium">Design Systems & Frontend</span>
              </div>
            </div>

            {/* Founder Narrative & Philosophy */}
            <div className="md:col-span-8 space-y-4 font-sans text-base text-avora-charcoal/80 leading-relaxed">
              <p>
                AVORA was conceived and built by <strong>Kumar Shaurya</strong>, an independent designer and frontend web developer operating across digital spaces worldwide.
              </p>
              <p>
                Rather than treating design and code as separate departmental silos, AVORA was founded on the belief that the strongest work occurs when the same eye that crafts the typographic baseline and color palette also writes the component architecture and WebGL shaders.
              </p>
              <p className="font-serif text-xl font-medium text-avora-charcoal italic bg-white p-4 rounded-2xl border border-avora-border">
                "My philosophy is straightforward: turning ideas into things people can actually see, use, and remember. No buzzwords, no exaggerated agency layers, just direct craftsmanship."
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono">
                <span className="px-3 py-1 rounded-full bg-white border border-avora-border">
                  Inquiries: <a href="mailto:kshaurya0708@gmail.com" className="text-purple-600 font-semibold underline">Email AVORA ↗</a>
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Accepting Q3 / Q4 Commissions
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 02: WHY AVORA? (Purpose & Storytelling) */}
        <section className="space-y-6 border-b border-avora-border pb-20">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-purple-600">
            <span>02</span>
            <span>//</span>
            <span>WHY AVORA EXISTS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-avora-charcoal">
            The Problem AVORA Solves.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-white border border-avora-border shadow-xs space-y-3">
              <span className="font-mono text-xs text-purple-500 font-bold">01 // THE TRANSLATION LOSS</span>
              <h3 className="font-serif text-xl font-bold text-avora-charcoal">Designers who can't code.</h3>
              <p className="text-xs font-sans text-avora-muted leading-relaxed">
                Beautiful Figma mockups often lose their soul, responsiveness, and micro-interactions when passed to developers who don't care about typography or optical balance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-avora-border shadow-xs space-y-3">
              <span className="font-mono text-xs text-blue-500 font-bold">02 // THE AESTHETIC VOID</span>
              <h3 className="font-serif text-xl font-bold text-avora-charcoal">Developers who can't design.</h3>
              <p className="text-xs font-sans text-avora-muted leading-relaxed">
                Functional applications that run fast but look cold, generic, and indistinguishable from basic dashboard templates.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-avora-border shadow-xs space-y-3">
              <span className="font-mono text-xs text-emerald-500 font-bold">03 // THE AVORA SYNTHESIS</span>
              <h3 className="font-serif text-xl font-bold text-avora-charcoal">Complete Cohesion.</h3>
              <p className="text-xs font-sans text-avora-muted leading-relaxed">
                AVORA unifies both worlds. From the geometric logo grid to the final 120Hz-ready production React code, every detail is engineered with unified intent.
              </p>
            </div>
          </div>
        </section>

        {/* 03: 7 VISUAL SERVICE EXPLANATIONS WITH EXPANDABLE PROCESSES (Requirement 23) */}
        <section className="space-y-8 border-b border-avora-border pb-20">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-purple-600">
            <span>03</span>
            <span>//</span>
            <span>WHAT AVORA CREATES — 7 DISCIPLINES</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-avora-charcoal">
                Interactive Service Deep Dives.
              </h2>
              <p className="text-xs font-mono text-avora-muted mt-2">
                Click any step (01 Discover → 04 Finalize) in any service card below to inspect its exact methodology and visual blueprints.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {serviceDeepDives.map((s) => {
              const activeStageIndex = serviceStageMap[s.id] ?? 0;
              const currentStage = s.stages[activeStageIndex];

              return (
                <div
                  key={s.id}
                  className="p-6 sm:p-8 rounded-3xl bg-white border border-avora-border shadow-sm space-y-6"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-4 pb-4 border-b border-avora-border-light">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-purple-600 font-bold">{s.number}</span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-avora-charcoal">{s.name}</h3>
                    </div>
                    <span className="text-xs font-mono text-avora-muted">{s.whoNeedsIt}</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-xs font-sans">
                    <div className="md:col-span-6 space-y-3">
                      <div>
                        <span className="font-mono font-semibold uppercase text-avora-muted text-[10px]">What It Is:</span>
                        <p className="text-sm text-avora-charcoal font-medium mt-0.5 leading-relaxed">{s.whatIsIt}</p>
                      </div>
                      <div>
                        <span className="font-mono font-semibold uppercase text-avora-muted text-[10px]">What AVORA Delivers:</span>
                        <p className="text-xs text-avora-charcoal/80 mt-0.5 leading-relaxed">{s.whatAvoraCreates}</p>
                      </div>
                    </div>

                    <div className="md:col-span-6 space-y-3 md:border-l md:border-avora-border-light md:pl-6">
                      <div>
                        <span className="font-mono font-semibold uppercase text-avora-muted text-[10px]">Instruments & Tools:</span>
                        <p className="text-xs font-mono text-purple-600 font-medium mt-0.5">{s.tools}</p>
                      </div>
                      <div>
                        <span className="font-mono font-semibold uppercase text-avora-muted text-[10px]">Transparent AI Integration:</span>
                        <p className="text-xs text-avora-muted mt-0.5">{s.aiUsage}</p>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Service Execution Flowchart (Requirement 23) */}
                  <div className="pt-4 border-t border-avora-border-light space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-avora-muted">
                        Interactive Step-by-Step Flow (Click to expand):
                      </span>
                      <span className="text-[10px] font-mono text-purple-600 font-semibold">
                        Stage {activeStageIndex + 1} of 4: {currentStage.name}
                      </span>
                    </div>

                    {/* Step Switcher Buttons */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {s.stages.map((stage, idx) => {
                        const isActive = activeStageIndex === idx;
                        return (
                          <button
                            key={idx}
                            onClick={() =>
                              setServiceStageMap((prev) => ({
                                ...prev,
                                [s.id]: idx,
                              }))
                            }
                            className={`p-3 rounded-xl border text-left transition-all ${
                              isActive
                                ? 'bg-purple-50/70 border-purple-300 shadow-xs ring-1 ring-purple-200'
                                : 'bg-[#FAF9F6] border-avora-border-light hover:bg-gray-50'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className={`text-[10px] font-mono font-bold ${
                                isActive ? 'text-purple-600' : 'text-avora-muted'
                              }`}>
                                {stage.number} {stage.name}
                              </span>
                              {isActive && <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />}
                            </div>
                            <p className="text-[11px] font-sans font-medium text-avora-charcoal truncate mt-0.5">
                              {stage.summary}
                            </p>
                          </button>
                        );
                      })}
                    </div>

                    {/* Expanded Detail Panel */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeStageIndex}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                        className="p-4 sm:p-5 rounded-2xl bg-[#FAF9F6] border border-avora-border-light grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
                      >
                        <div className="md:col-span-8 space-y-2">
                          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-purple-100 text-purple-800 text-[10px] font-mono font-semibold">
                            <span>PHASE {currentStage.number} // {currentStage.name}</span>
                          </div>
                          <h4 className="font-serif text-base sm:text-lg font-bold text-avora-charcoal">
                            {currentStage.summary}
                          </h4>
                          <p className="text-xs font-sans text-avora-charcoal/80 leading-relaxed">
                            {currentStage.explanation}
                          </p>
                          <div className="pt-1 flex items-center gap-2 text-[11px] font-mono text-purple-700 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                            <span>Deliverable: {currentStage.stageOutput}</span>
                          </div>
                        </div>

                        {/* Visual Blueprint Badge */}
                        <div className="md:col-span-4 p-4 rounded-xl bg-white border border-avora-border shadow-xs text-center space-y-1">
                          <span className="text-[9px] font-mono uppercase tracking-widest text-avora-muted block">
                            Visual Blueprint & Spec
                          </span>
                          <p className="text-xs font-mono font-semibold text-avora-charcoal">
                            {currentStage.visualContent}
                          </p>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 04: 8-STEP AVORA CREATIVE PROCESS WITH INTERACTIVE STAGE (Requirement 22) */}
        <section className="space-y-8 border-b border-avora-border pb-20">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-purple-600">
            <span>04</span>
            <span>//</span>
            <span>HOW WE CREATE</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-avora-charcoal">
                The 8-Step Creative Process.
              </h2>
              <p className="text-xs font-mono text-avora-muted mt-2">
                Click any step below to transform the central studio canvas with dynamic visual diagrams.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedProcessStep((prev) => Math.max(0, prev - 1))}
                disabled={selectedProcessStep === 0}
                className="px-3 py-1.5 rounded-lg border border-avora-border text-xs font-mono disabled:opacity-30 hover:bg-white transition-colors"
              >
                ← Prev
              </button>
              <span className="text-xs font-mono text-purple-600 font-semibold px-2">
                {activeStep.number} / 08
              </span>
              <button
                onClick={() => setSelectedProcessStep((prev) => Math.min(eightStepProcess.length - 1, prev + 1))}
                disabled={selectedProcessStep === eightStepProcess.length - 1}
                className="px-3 py-1.5 rounded-lg border border-avora-border text-xs font-mono disabled:opacity-30 hover:bg-white transition-colors"
              >
                Next →
              </button>
            </div>
          </div>

          {/* Stepper Navigation Bar */}
          <div className="flex items-center overflow-x-auto gap-2 pb-2 scrollbar-none">
            {eightStepProcess.map((step, idx) => {
              const isSelected = selectedProcessStep === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => setSelectedProcessStep(idx)}
                  className={`flex-shrink-0 px-4 py-2.5 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-purple-600 text-white border-purple-600 shadow-md font-bold'
                      : 'bg-white text-avora-charcoal border-avora-border hover:border-purple-300'
                  }`}
                >
                  <div className="text-[10px] font-mono tracking-wider opacity-80">
                    {step.number}
                  </div>
                  <div className="text-xs font-sans tracking-wide whitespace-nowrap">
                    {step.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Central Interactive Showcase Stage */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProcessStep}
              initial={{ opacity: 0, scale: 0.98, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -8 }}
              transition={{ duration: 0.25 }}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-purple-200 shadow-lg grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Details & Deliverables */}
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-mono font-bold">
                    STEP {activeStep.number} OF 08
                  </span>
                  <span className="text-xs font-mono text-avora-muted">
                    {activeStep.subtitle}
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-avora-charcoal">
                  {activeStep.title}
                </h3>

                <p className="text-sm font-sans text-avora-charcoal/80 leading-relaxed">
                  {activeStep.desc}
                </p>

                <div className="pt-2 border-t border-avora-border-light space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-avora-muted block">
                    Strategic Deliverables & Outputs:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeStep.deliverables.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-[#FAF9F6] border border-avora-border-light text-xs font-mono text-purple-800 font-medium"
                      >
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Visual Diagram */}
              <div className="md:col-span-5 h-64 w-full">
                {renderProcessDiagram(activeStep.diagramType)}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Quick Grid Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {eightStepProcess.map((step, idx) => {
              const isSelected = selectedProcessStep === idx;
              return (
                <div
                  key={step.number}
                  onClick={() => setSelectedProcessStep(idx)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-purple-50/80 border-purple-400 shadow-sm ring-1 ring-purple-200'
                      : 'bg-white border-avora-border shadow-xs hover:border-purple-200'
                  }`}
                >
                  <span className={`font-mono text-xs font-bold ${
                    isSelected ? 'text-purple-600' : 'text-purple-500'
                  }`}>
                    {step.number}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-avora-charcoal mt-1">
                    {step.title}
                  </h3>
                  <p className="text-xs font-sans text-avora-muted leading-relaxed mt-1">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 05: WHERE DO IDEAS COME FROM? */}
        <section className="space-y-6 border-b border-avora-border pb-20">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-purple-600">
            <span>05</span>
            <span>//</span>
            <span>CREATIVE INSPIRATION & ARCHITECTURE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-avora-charcoal">
            Where Do The Ideas Come From?
          </h2>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-avora-border shadow-xs space-y-4 text-sm font-sans text-avora-charcoal/80 leading-relaxed">
            <p>
              Design at AVORA never happens in a vacuum. Visual forms and interface structures are grounded in deliberate cross-disciplinary research:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono">
              <div className="p-3 rounded-xl bg-[#FAF9F6] border border-avora-border-light">
                <strong className="text-purple-600 block mb-0.5">Architectural & Brutalist Structures</strong>
                Pacing, golden ratio calibers, concrete texture, and structural baseline grids.
              </div>
              <div className="p-3 rounded-xl bg-[#FAF9F6] border border-avora-border-light">
                <strong className="text-blue-600 block mb-0.5">High-Fashion & Contemporary Editorial</strong>
                Typographic scale contrasts, white space confidence, and tactile packaging nuances.
              </div>
              <div className="p-3 rounded-xl bg-[#FAF9F6] border border-avora-border-light">
                <strong className="text-pink-600 block mb-0.5">Streetwear & Subcultural Graphics</strong>
                Screen print separations, garment silhouettes, heavyweight materiality, and raw composition.
              </div>
              <div className="p-3 rounded-xl bg-[#FAF9F6] border border-avora-border-light">
                <strong className="text-emerald-600 block mb-0.5">Modern Digital Product Architecture</strong>
                Fluid responsive ergonomics, component token hierarchy, and 120Hz micro-interactions.
              </div>
            </div>
          </div>
        </section>

        {/* 06: TEMPLATES & STARTING POINTS (100% Transparent Disclosure) */}
        <section className="space-y-6 border-b border-avora-border pb-20">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-purple-600">
            <span>06</span>
            <span>//</span>
            <span>TRANSPARENT WORKFLOW</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-avora-charcoal">
            Templates & Starting Points.
          </h2>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-avora-border shadow-xs space-y-3 font-sans text-sm text-avora-charcoal/80 leading-relaxed">
            <p>
              AVORA values radical transparency. When building digital experiences, templates and boilerplate scaffolding (such as Vite templates, Next.js starters, Tailwind utility frameworks, or Figma layout components) may be utilized as starting points for technical reliability and rapid prototyping.
            </p>
            <p className="font-medium text-avora-charcoal">
              However, every finished deliverable is deeply customized, refined, styled, and engineered specifically for that client's brand. Nothing is shipped as an uninspired generic template.
            </p>
          </div>
        </section>

        {/* 07: AI USAGE (AI × AVORA Transparent Disclosure) */}
        <section className="space-y-6 border-b border-avora-border pb-20">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-purple-600">
            <span>07</span>
            <span>//</span>
            <span>ETHICS & TECHNOLOGY</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-avora-charcoal">
            AI × AVORA.
          </h2>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-avora-border shadow-xs space-y-4 font-sans text-sm text-avora-charcoal/80 leading-relaxed">
            <p>
              Artificial Intelligence is embraced as an accelerator in the AVORA studio, not as an autonomous replacement for human creativity.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono pt-2">
              <div className="p-3.5 rounded-xl bg-purple-50/50 border border-purple-200">
                <span className="font-bold text-purple-700 block mb-1">WHERE AI IS USED:</span>
                <ul className="space-y-1 text-purple-900/80">
                  <li>• Brainstorming initial metaphorical concepts</li>
                  <li>• Market & competitor research distillation</li>
                  <li>• Boilerplate code acceleration & syntax debugging</li>
                  <li>• Responsive edge-case stress testing</li>
                </ul>
              </div>
              <div className="p-3.5 rounded-xl bg-amber-50/50 border border-amber-200">
                <span className="font-bold text-amber-800 block mb-1">WHERE HUMAN ARTISTRY RULES:</span>
                <ul className="space-y-1 text-amber-900/80">
                  <li>• Mathematical bezier logo curve construction</li>
                  <li>• Visual taste, curation, and typographic judgment</li>
                  <li>• Bespoke art direction & tactile packaging specs</li>
                  <li>• High-touch founder client partnerships</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Bar */}
        <section className="py-12 text-center space-y-6 bg-white rounded-3xl border border-avora-border shadow-md p-8">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-avora-charcoal">
            Ready to Build Something Meaningful?
          </h2>
          <p className="text-sm font-sans text-avora-muted max-w-md mx-auto">
            Direct collaboration with founder Kumar Shaurya. No middlemen, no template factories.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => {
                onBackToHome();
                setTimeout(() => onNavigateHomeSection('consultation'), 100);
              }}
              className="px-8 py-3.5 rounded-full bg-avora-charcoal text-white text-xs font-sans font-bold tracking-wider uppercase hover:bg-black transition-all shadow-md"
            >
              Book a Consultation ↗
            </button>
            <a
              href="mailto:kshaurya0708@gmail.com"
              className="px-8 py-3.5 rounded-full bg-[#FAF9F6] border border-avora-border text-avora-charcoal text-xs font-mono font-semibold hover:bg-white transition-all shadow-xs"
            >
              Email AVORA ↗
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-avora-border py-8 px-4 text-center text-xs font-mono text-avora-muted">
        <p>© {new Date().getFullYear()} AVORA Studio — Kumar Shaurya. All Rights Reserved.</p>
      </footer>
    </div>
  );
};
