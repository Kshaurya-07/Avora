import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { HeroScene } from '../canvas/HeroScene';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 sm:px-8 overflow-hidden bg-[#FAF9F6]"
    >
      {/* 3D WebGL Glass Crystal Canvas Layer */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* Atmospheric Radial Gradient for Soft Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-radial from-purple-200/20 via-blue-100/10 to-transparent blur-3xl pointer-events-none z-0" />

      {/* Top Eyebrow */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-avora-border text-[11px] font-mono tracking-[0.2em] text-avora-muted uppercase shadow-xs"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-avora-lavender animate-pulse" />
          <span>Multidisciplinary Designer & Web Developer</span>
        </motion.div>
      </div>

      {/* Center Cinematic Editorial Display Headline */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-10 sm:py-16">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-avora-charcoal leading-[0.92] select-none"
          >
            <span>DESIGN.</span><br />
            <span>DEVELOP.</span><br />
            <span>CREATE.</span><br />
            <span className="iridescent-text">IMPACT.</span>
          </motion.h1>

          {/* Supporting Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="mt-8 max-w-xl space-y-2 text-avora-charcoal/80"
          >
            <p className="text-base sm:text-lg font-sans font-normal leading-relaxed">
              I turn ideas into powerful brands, memorable visuals and modern digital experiences.
            </p>
            <p className="text-xs sm:text-sm font-mono text-avora-muted">
              From identity and apparel to UI/UX and fully functional websites.
            </p>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
            className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4"
          >
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('planner')}
                className="px-7 py-4 rounded-full bg-avora-charcoal text-white text-xs sm:text-sm font-sans font-semibold tracking-wide hover:bg-black transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 group"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('consultation')}
                className="px-7 py-4 rounded-full bg-white/80 hover:bg-white text-avora-charcoal text-xs sm:text-sm font-sans font-medium tracking-wide border border-avora-border transition-all duration-300 shadow-xs hover:shadow-md flex items-center gap-2 group backdrop-blur-md"
              >
                <span>Book a Consultation</span>
                <ArrowUpRight className="w-4 h-4 text-avora-muted group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Subtle "Not sure what you need? → Let's talk" Prompt */}
            <button
              onClick={() => onNavigate('consultation')}
              className="text-xs font-mono text-avora-muted hover:text-avora-charcoal transition-colors flex items-center gap-1.5 pt-1 sm:pt-0 sm:pl-2"
            >
              <span>Not sure what you need?</span>
              <span className="font-semibold underline decoration-avora-border hover:decoration-black">
                → Let's talk
              </span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Row: Philosophy & Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-end justify-between border-t border-avora-border-light pt-6 text-xs font-mono text-avora-muted">
        <div className="hidden sm:block">
          <p className="tracking-widest uppercase text-[10px]">PHILOSOPHY</p>
          <p className="text-avora-charcoal font-semibold mt-0.5">IDEA → DESIGN → EXPERIENCE → DEVELOPMENT</p>
        </div>

        <button
          onClick={() => onNavigate('services')}
          className="flex items-center gap-2 hover:text-avora-charcoal transition-colors ml-auto sm:ml-0 group"
        >
          <span className="text-[11px] tracking-widest uppercase">Explore Disciplines</span>
          <div className="w-7 h-7 rounded-full border border-avora-border flex items-center justify-center group-hover:border-avora-charcoal transition-colors">
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </div>
        </button>
      </div>
    </section>
  );
};
