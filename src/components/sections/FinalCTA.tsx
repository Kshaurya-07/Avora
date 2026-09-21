import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onNavigate: (sectionId: string) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onNavigate }) => {
  return (
    <section className="relative w-full py-32 sm:py-44 px-4 sm:px-8 bg-[#FAF9F6] overflow-hidden">
      {/* Cinematic Mist & Atmospheric Lighting Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-[#F6F4EE] to-[#FAF9F6] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-tr from-purple-200/25 via-blue-100/25 to-pink-100/20 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Center Cinematic Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-avora-border text-[11px] font-mono uppercase tracking-widest text-avora-muted shadow-xs"
        >
          <Sparkles className="w-3 h-3 text-avora-lavender animate-pulse" />
          <span>New Commissions Welcome</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-avora-charcoal leading-[0.92]"
        >
          HAVE AN IDEA?<br />
          <span className="iridescent-text">LET'S BUILD IT.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-base sm:text-xl font-sans text-avora-muted max-w-2xl mx-auto leading-relaxed"
        >
          Whether you need a logo, website, apparel graphics, digital product or complete visual identity — let's create something meaningful together.
        </motion.p>

        {/* Dual Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <button
            onClick={() => onNavigate('planner')}
            className="px-8 py-4 rounded-full bg-avora-charcoal text-white text-sm font-sans font-semibold tracking-wide hover:bg-black transition-all shadow-md hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 group"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <a
            href="mailto:contact@avora-studio.com"
            className="px-8 py-4 rounded-full bg-white hover:bg-[#FAF9F6] text-avora-charcoal text-sm font-sans font-medium tracking-wide border border-avora-border transition-all shadow-xs hover:shadow-md flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-avora-muted" />
            <span>Direct Email</span>
          </a>
        </motion.div>

        {/* Availability Marker */}
        <div className="pt-8 flex items-center justify-center gap-2 text-xs font-mono text-avora-muted">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Currently accepting select Q3 / Q4 partnerships</span>
        </div>
      </div>
    </section>
  );
};
