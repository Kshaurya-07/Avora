import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass, Eye, ShieldCheck } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const principles = [
    {
      number: '01',
      title: 'CLARITY OF FORM',
      tagline: 'Intentionality Over Noise',
      description:
        'Every ligature cut, grid coordinate, and whitespace ratio exists for a reason. We strip away superficial decoration until only essential, memorable design remains.',
    },
    {
      number: '02',
      title: 'TACTILE RESONANCE',
      tagline: 'Materiality in Every Medium',
      description:
        'Whether specified for high-density silicone puff prints on 480gsm combed cotton or rendered inside real-time 3D WebGL transmission shaders, the work must feel physically alive.',
    },
    {
      number: '03',
      title: 'SEAMLESS TRANSLATION',
      tagline: 'Artistry Meets Clean Code',
      description:
        'Bridging the divide between visionary art direction and production-grade engineering. Design files and live codebases speak the same uncompromising language.',
    },
  ];

  return (
    <section className="relative w-full py-24 sm:py-36 px-4 sm:px-8 bg-[#F8F7F3] border-b border-avora-border overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16 pb-6 border-b border-avora-border">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-avora-muted block mb-3">
            Core Philosophy & Standards
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-avora-charcoal leading-none">
            CREATIVE<br />PRINCIPLES.
          </h2>
          <p className="text-sm sm:text-base font-sans text-avora-muted mt-4 max-w-xl leading-relaxed">
            The foundational convictions guiding every brand identity, print placement, and interactive digital universe created by AVORA.
          </p>
        </div>

        {/* 3-Column Editorial Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {principles.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-avora-border shadow-xs flex flex-col justify-between space-y-6 group hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-avora-lavender">
                  {item.number}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-avora-muted bg-avora-ivory px-2.5 py-1 rounded-md border border-avora-border-light">
                  {item.tagline}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-avora-charcoal group-hover:text-black transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm font-sans text-avora-muted leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-avora-border-light text-[11px] font-mono text-avora-charcoal/70">
                <span>Standard of Excellence // AVORA Atelier</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
