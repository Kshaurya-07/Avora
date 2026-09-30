import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Palette,
  Code,
  Sparkles,
  ArrowUpRight,
  Layers,
  Cpu,
  PenTool,
  CheckCircle2,
} from 'lucide-react';

interface ToolDetail {
  name: string;
  category: 'design' | 'development';
  disciplineTag: string;
  relevantService: string;
  whatAvoraUsesItFor: string;
  keyOutputs: string[];
  isHighlighted?: boolean;
  highlightBadge?: string;
  whyChosen: string;
}

export const Toolkit: React.FC = () => {
  const [selectedToolName, setSelectedToolName] = useState<string>('Canva');

  const tools: ToolDetail[] = [
    {
      name: 'Canva',
      category: 'design',
      disciplineTag: 'Agile Visuals & Social Systems',
      relevantService: 'Graphic Design, Branding, Marketing Collateral',
      whatAvoraUsesItFor:
        'Rapid marketing graphics, agile pitch decks, editable brand templates, and high-velocity social asset suites that clients can independently manage without software friction.',
      keyOutputs: ['Editable Social Template Suites', 'Pitch Decks & Presentations', 'Marketing Banners & Ad Sets'],
      isHighlighted: true,
      highlightBadge: 'STUDIO ESSENTIAL // AGILE CLIENT DELIVERABLES',
      whyChosen: 'Gives clients instant autonomy to edit social visuals without needing complex Adobe software.',
    },
    {
      name: 'Adobe Illustrator',
      category: 'design',
      disciplineTag: 'Precision Vector Marks & Geometry',
      relevantService: 'Logo Design, Branding, Apparel Design',
      whatAvoraUsesItFor:
        'Mathematical bezier curve vector crafting, golden ratio logo construction grids, monograms, silkscreen color separations, and factory-ready apparel tech packs.',
      keyOutputs: ['Master Scalable Vectors (SVG, EPS, AI)', 'Golden Ratio Construction Grids', 'Garment Print Separations'],
      whyChosen: 'The gold standard for mathematical bezier precision and infinite vector scalability.',
    },
    {
      name: 'Figma',
      category: 'design',
      disciplineTag: 'UI/UX & Design Systems',
      relevantService: 'UI/UX Design, Web Design, Interactive Prototypes',
      whatAvoraUsesItFor:
        'Multi-screen wireframe hierarchies, scalable auto-layout components, design token architectures, interactive click-through prototypes, and developer redline handoff.',
      keyOutputs: ['Figma Design Token Libraries', 'Interactive Clickable Prototypes', 'Responsive Multi-Device Layouts'],
      whyChosen: 'Seamless collaborative canvas linking visual design directly to frontend component structures.',
    },
    {
      name: 'Adobe Photoshop',
      category: 'design',
      disciplineTag: 'Editorial Compositing & Texture',
      relevantService: 'Graphic Design, Editorial Posters, Lookbooks',
      whatAvoraUsesItFor:
        'High-fashion editorial compositing, 300 DPI analog grain texturing, chromatic duotone mapping, garment mockup textures, and print prepress retouching.',
      keyOutputs: ['High-Res 300 DPI Print Composites', 'Editorial Fashion Posters', 'Tactile Texture Overlays'],
      whyChosen: 'Unmatched raster photo manipulation and tactile film grain texture capabilities.',
    },
    {
      name: 'React 18 / 19',
      category: 'development',
      disciplineTag: 'UI Component Engineering',
      relevantService: 'Web Development, Interactive Web Apps',
      whatAvoraUsesItFor:
        'Modular, high-performance UI components, custom reactive state hooks, suspense data hydration, and dynamic route rendering.',
      keyOutputs: ['Declarative Component Architecture', 'Optimized State Trees', 'Sub-100ms Interactions'],
      whyChosen: 'Modern component-driven development with strict rendering lifecycle control.',
    },
    {
      name: 'Next.js',
      category: 'development',
      disciplineTag: 'Fullstack & Edge Delivery',
      relevantService: 'Web Development, High-Traffic Web Apps',
      whatAvoraUsesItFor:
        'Server-side rendering (SSR), edge caching, dynamic API routing, image optimization, and lightning-fast SEO indexing.',
      keyOutputs: ['Edge Deployed Web Applications', 'Server-Side Rendered Routes', 'Production API Middleware'],
      whyChosen: 'Production-proven framework delivering peak Lighthouse performance and SEO scores.',
    },
    {
      name: 'Three.js / WebGL',
      category: 'development',
      disciplineTag: '3D Spatial Interactive & Shaders',
      relevantService: 'Web Design, 3D Interactive Experiences',
      whatAvoraUsesItFor:
        'Real-time GPU-rendered 3D hero crystal, physical refraction shaders, dynamic light calculations, and pointer-reactive spatial geometry.',
      keyOutputs: ['Custom GLSL Shader Materials', 'Interactive 3D Meshes', 'GPU-Accelerated 120Hz Animation'],
      whyChosen: 'Transforms flat web pages into memorable, living 3D spatial brand statements.',
    },
    {
      name: 'Tailwind CSS',
      category: 'development',
      disciplineTag: 'Utility Styling & Fluid Design Tokens',
      relevantService: 'Web Design, Web Development',
      whatAvoraUsesItFor:
        'Fluid clamp() responsive typography scales, bespoke color palettes, micro-spacing tokens, and ultra-lightweight CSS bundles with zero unused styles.',
      keyOutputs: ['Zero-Runtime CSS Bundles', 'Fluid Clamp Typography Scales', 'Unified Color & Spacing Tokens'],
      whyChosen: 'Maintains pixel-perfect design token fidelity across every viewport with zero bloat.',
    },
    {
      name: 'TypeScript',
      category: 'development',
      disciplineTag: 'Type-Safe Architecture',
      relevantService: 'Web Development, Enterprise Web Apps',
      whatAvoraUsesItFor:
        'Strict compile-time type validation, reliable component interfaces, API contract verification, and bug elimination prior to deployment.',
      keyOutputs: ['Strict Type Declarations', 'Resilient Component Interfaces', 'Bug-Free Production Code'],
      whyChosen: 'Guarantees stability and prevents runtime exceptions in complex client applications.',
    },
    {
      name: 'Framer Motion',
      category: 'development',
      disciplineTag: 'Cinematic Physics & Micro-Gestures',
      relevantService: 'Web Design, Web Development',
      whatAvoraUsesItFor:
        'Spring physics transitions, staggered element reveals, layout animations, and silky 120Hz-ready micro-interactions.',
      keyOutputs: ['Spring Physics Transitions', 'Gesture-Driven Interactions', 'Staggered Layout Animations'],
      whyChosen: 'Physics-based animation engine that feels natural, organic, and ultra-fluid.',
    },
  ];

  const selectedTool = tools.find((t) => t.name === selectedToolName) || tools[0];

  const designTools = tools.filter((t) => t.category === 'design');
  const devTools = tools.filter((t) => t.category === 'development');

  return (
    <section className="relative w-full py-24 sm:py-32 px-4 sm:px-8 bg-[#F8F7F3] border-b border-avora-border overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-avora-border">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-avora-muted block mb-3">
              Craft & Capabilities // Selected Instruments
            </span>
            <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-avora-charcoal leading-none">
              MY TOOLKIT.
            </h2>
          </div>
          <div className="max-w-md text-sm sm:text-base font-sans text-avora-muted">
            <p className="font-medium text-avora-charcoal">Calibrated instruments for visual and digital craft.</p>
            <p className="mt-1">
              Click or hover any tool below to inspect its exact implementation, relevant service, and why AVORA selects it.
            </p>
          </div>
        </div>

        {/* Canva Studio Spotlight Banner (Requirement 24: Visible importance for Canva) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-100/80 via-blue-50/70 to-pink-50/60 border border-purple-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-600 text-white text-[11px] font-mono tracking-wider uppercase font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FEATURED INSTRUMENT // CANVA FOR CLIENT AGILITY</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-avora-charcoal">
              Empowering Clients With Editable Canva Systems.
            </h3>
            <p className="text-xs sm:text-sm font-sans text-avora-charcoal/80 leading-relaxed">
              At AVORA, high-end design does not mean locking clients into expensive proprietary software. We create bespoke, editable Canva templates for social campaigns, pitch decks, and brand collateral—allowing your team to produce on-brand visuals rapidly with complete independence.
            </p>
          </div>

          <button
            onClick={() => setSelectedToolName('Canva')}
            className="px-6 py-3 rounded-full bg-avora-charcoal hover:bg-black text-white text-xs font-sans font-semibold tracking-wide transition-all shadow-md flex items-center gap-2 flex-shrink-0"
          >
            <span>Inspect Canva Workflow</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* 2-Column Split: Interactive Tools Matrix (Left) & Live Tool Inspector (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Tools Selector Matrix */}
          <div className="lg:col-span-7 space-y-8">
            {/* Design Column */}
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-avora-border text-xs font-mono tracking-widest text-avora-muted uppercase">
                <span className="flex items-center gap-2">
                  <Palette className="w-3.5 h-3.5 text-avora-lavender" />
                  <span>Design & Visual Brand Systems</span>
                </span>
                <span className="text-[10px] text-purple-600 font-semibold">Click to inspect</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {designTools.map((tool) => {
                  const isSelected = selectedToolName === tool.name;
                  return (
                    <button
                      key={tool.name}
                      onClick={() => setSelectedToolName(tool.name)}
                      onMouseEnter={() => setSelectedToolName(tool.name)}
                      className={`text-left p-4 rounded-2xl border transition-all ${
                        isSelected
                          ? 'bg-white border-purple-400 shadow-md ring-1 ring-purple-200 translate-x-1'
                          : 'bg-white/70 border-avora-border hover:bg-white hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-serif text-lg font-bold text-avora-charcoal">
                            {tool.name}
                          </h4>
                          <p className="text-[11px] font-mono text-purple-700 font-medium mt-0.5">
                            {tool.disciplineTag}
                          </p>
                        </div>
                        {tool.isHighlighted && (
                          <span className="text-[9px] font-mono bg-purple-100 text-purple-800 px-1.5 py-0.5 rounded font-bold">
                            Key Tool
                          </span>
                        )}
                      </div>
                      <p className="text-xs font-sans text-avora-muted mt-2 line-clamp-2">
                        {tool.whatAvoraUsesItFor}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Development Column */}
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-avora-border text-xs font-mono tracking-widest text-avora-muted uppercase">
                <span className="flex items-center gap-2">
                  <Code className="w-3.5 h-3.5 text-avora-blue" />
                  <span>120Hz Frontend & WebGL Architecture</span>
                </span>
                <span className="text-[10px] text-blue-600 font-semibold">Click to inspect</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {devTools.map((tool) => {
                  const isSelected = selectedToolName === tool.name;
                  return (
                    <button
                      key={tool.name}
                      onClick={() => setSelectedToolName(tool.name)}
                      onMouseEnter={() => setSelectedToolName(tool.name)}
                      className={`text-left p-4 rounded-2xl border transition-all ${
                        isSelected
                          ? 'bg-white border-blue-400 shadow-md ring-1 ring-blue-200 translate-x-1'
                          : 'bg-white/70 border-avora-border hover:bg-white hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-serif text-lg font-bold text-avora-charcoal">
                            {tool.name}
                          </h4>
                          <p className="text-[11px] font-mono text-blue-700 font-medium mt-0.5">
                            {tool.disciplineTag}
                          </p>
                        </div>
                      </div>
                      <p className="text-xs font-sans text-avora-muted mt-2 line-clamp-2">
                        {tool.whatAvoraUsesItFor}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Live Tool Inspector Panel (Sticky) */}
          <div className="lg:col-span-5 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTool.name}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.2 }}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-avora-border shadow-xl space-y-6"
              >
                {/* Header */}
                <div className="pb-4 border-b border-avora-border-light space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-purple-600 font-bold">
                      {selectedTool.category === 'design' ? 'Visual Atelier' : 'Engineering Stack'}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-avora-ivory border border-avora-border-light text-avora-muted">
                      Inspecting
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-avora-charcoal">
                    {selectedTool.name}
                  </h3>
                  <p className="text-xs font-mono text-avora-muted">
                    {selectedTool.disciplineTag}
                  </p>
                </div>

                {/* What AVORA Uses It For (Requirement 24) */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-avora-muted block">
                    What AVORA Uses It For:
                  </span>
                  <p className="text-sm font-sans text-avora-charcoal leading-relaxed">
                    {selectedTool.whatAvoraUsesItFor}
                  </p>
                </div>

                {/* Relevant Service (Requirement 24) */}
                <div className="space-y-1.5 p-3.5 rounded-xl bg-[#FAF9F6] border border-avora-border-light">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-purple-700 font-semibold block">
                    Relevant AVORA Service:
                  </span>
                  <p className="text-xs font-mono text-avora-charcoal font-medium">
                    {selectedTool.relevantService}
                  </p>
                </div>

                {/* Key Outputs */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-avora-muted block">
                    Standard Outputs & Deliverables:
                  </span>
                  <ul className="space-y-1.5">
                    {selectedTool.keyOutputs.map((out, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-mono text-avora-charcoal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Craftsmanship Rationale */}
                <div className="pt-2 border-t border-avora-border-light">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-avora-muted block mb-1">
                    Studio Rationale:
                  </span>
                  <p className="text-xs font-sans italic text-avora-muted leading-relaxed">
                    "{selectedTool.whyChosen}"
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
