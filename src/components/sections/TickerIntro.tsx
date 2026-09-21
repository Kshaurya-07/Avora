import React from 'react';
import { motion } from 'framer-motion';

export const TickerIntro: React.FC = () => {
  const disciplines = [
    'BRANDING',
    'GRAPHICS',
    'APPAREL',
    'UI/UX',
    'WEB DESIGN',
    'DEVELOPMENT',
    'BRAND IDENTITY',
    'PACKAGING',
    'STREETWEAR',
    'INTERACTION',
    '3D EXPERIENCES',
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-[#F8F7F3] border-y border-avora-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-avora-muted block mb-3">
            Creative Disciplines & Focus
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-avora-charcoal leading-tight">
            DESIGNING FOR PEOPLE, BRANDS & DIGITAL EXPERIENCES.
          </h2>
        </motion.div>
      </div>

      {/* Infinite Seamless Editorial Marquee Ribbon */}
      <div className="relative w-full overflow-hidden py-4 border-y border-avora-border/60 bg-white/60 backdrop-blur-sm">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...disciplines, ...disciplines].map((item, idx) => (
            <div key={idx} className="flex items-center mx-4 sm:mx-6">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-avora-charcoal/80 hover:text-avora-lavender transition-colors cursor-default">
                {item}
              </span>
              <span className="ml-6 sm:ml-8 text-xs font-mono text-avora-muted/60">/</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
