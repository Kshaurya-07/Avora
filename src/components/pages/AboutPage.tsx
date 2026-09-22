import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
} from 'lucide-react';

interface AboutPageProps {
  onBackToHome: () => void;
  onNavigateHomeSection: (sectionId: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBackToHome, onNavigateHomeSection }) => {
  const [activeProcessTab, setActiveProcessTab] = useState<string>('logo');

  const eightStepProcess = [
    { number: '01', title: 'DISCOVER', desc: 'Understand the underlying idea, market landscape, user objectives, and core creative ambitions.' },
    { number: '02', title: 'DEFINE', desc: 'Synthesize requirements to establish clear design constraints, art direction tone, and functional scope.' },
    { number: '03', title: 'EXPLORE', desc: 'Investigate typographic pairings, golden ratio geometry, composition studies, and material moodboards.' },
    { number: '04', title: 'DESIGN', desc: 'Craft the cohesive visual system, vector marks, apparel layouts, and pixel-precise interactive UI.' },
    { number: '05', title: 'REFINE', desc: 'Iterate based on optical alignment, chromatic balance, micro-spacing calibrations, and feedback.' },
    { number: '06', title: 'BUILD', desc: 'Translate approved designs into production React, Next.js, and Three.js WebGL with 120Hz-ready fluid motion.' },
    { number: '07', title: 'TEST', desc: 'Audit performance, Lighthouse Core Web Vitals, cross-device responsiveness, and accessibility (WCAG AA+).' },
    { number: '08', title: 'DELIVER', desc: 'Package vector assets, production build deployment, and documentation for client ownership.' },
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
      processSteps: ['Research', 'Brand Understanding', 'Concept Exploration', 'Sketch / Geometry', 'Typography', 'Refinement', 'Variations', 'Final Logo System'],
      animationType: 'geometry'
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
      processSteps: ['Discovery', 'Positioning', 'Moodboard', 'Visual Direction', 'Logo System', 'Typography', 'Color System', 'Applications', 'Guidelines'],
      animationType: 'identity'
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
      processSteps: ['Brief', 'Content Analysis', 'Research', 'Concept', 'Composition', 'Typography', 'Design', 'Refinement', 'Final Assets'],
      animationType: 'poster'
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
      processSteps: ['Concept', 'Audience', 'Garment Selection', 'Graphic Direction', 'Print Placement', 'Typography / Illustration', 'Mockup', 'Production Artwork'],
      animationType: 'garment'
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
      processSteps: ['Research', 'User Understanding', 'Information Architecture', 'User Flow', 'Wireframes', 'Design System', 'UI Design', 'Prototype', 'Testing', 'Handoff'],
      animationType: 'interface'
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
      processSteps: ['Discovery', 'Structure', 'Content', 'Wireframes', 'Visual Direction', 'UI Design', 'Responsive Layout', 'Interaction', 'Prototype'],
      animationType: 'browser'
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
      processSteps: ['Technical Planning', 'Architecture', 'Component Structure', 'Development', 'Integration', 'Animation', 'Responsive Implementation', 'Testing', 'Optimization', 'Deployment'],
      animationType: 'code'
    }
  ];

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
                  Inquiries: <a href="mailto:kshaurya0708@gmail.com" className="text-purple-600 font-semibold underline">kshaurya0708@gmail.com</a>
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

        {/* 03: 7 VISUAL SERVICE EXPLANATIONS */}
        <section className="space-y-8 border-b border-avora-border pb-20">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-purple-600">
            <span>03</span>
            <span>//</span>
            <span>WHAT AVORA CREATES — 7 DISCIPLINES</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-avora-charcoal">
            Visual & Functional Service Deep Dives.
          </h2>

          <div className="space-y-6">
            {serviceDeepDives.map((s) => (
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

                {/* Service Process Visual Flow */}
                <div className="pt-4 border-t border-avora-border-light">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-avora-muted block mb-2">
                    Service Execution Flowchart:
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono">
                    {s.processSteps.map((step, idx) => (
                      <React.Fragment key={idx}>
                        <span className="px-2.5 py-1 rounded-md bg-[#FAF9F6] border border-avora-border-light text-avora-charcoal">
                          {step}
                        </span>
                        {idx < s.processSteps.length - 1 && (
                          <span className="text-avora-muted">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 04: 8-STEP AVORA CREATIVE PROCESS */}
        <section className="space-y-8 border-b border-avora-border pb-20">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-purple-600">
            <span>04</span>
            <span>//</span>
            <span>HOW WE CREATE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-avora-charcoal">
            The 8-Step Creative Process.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {eightStepProcess.map((step) => (
              <div key={step.number} className="p-5 rounded-2xl bg-white border border-avora-border shadow-xs space-y-2">
                <span className="font-mono text-xs text-purple-500 font-bold">{step.number}</span>
                <h3 className="font-serif text-lg font-bold text-avora-charcoal">{step.title}</h3>
                <p className="text-xs font-sans text-avora-muted leading-relaxed">{step.desc}</p>
              </div>
            ))}
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
              className="px-8 py-3.5 rounded-full bg-[#FAF9F6] border border-avora-border text-avora-charcoal text-xs font-mono font-medium hover:bg-white transition-all"
            >
              kshaurya0708@gmail.com
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
