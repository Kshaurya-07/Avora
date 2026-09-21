import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const endorsements = [
    {
      quote: "AVORA delivered an identity system that genuinely stopped people in their tracks. The balance of brutalist precision and French luxury perfumery gave VYNE an unfair advantage from day one.",
      author: "Élise Laurent",
      title: "Founder & Creative Director",
      context: "VYNE Botanical Atelier — Paris",
    },
    {
      quote: "Rarely do you meet someone who can sculpt an oversized 480gsm streetwear silhouette in the afternoon and build a custom 3D WebGL spatial player that same evening. AVORA is pure multidisciplinary mastery.",
      author: "Marcus Vance",
      title: "Co-Founder",
      context: "STREET THEORY Apparel — London",
    },
    {
      quote: "The combination of high-fashion editorial art direction with sub-second React engineering elevated our platform to an Awwwards Site of the Day honor.",
      author: "Devon Chen",
      title: "Head of Product",
      context: "MUSIVO Audio Technologies — Berlin",
    },
  ];

  return (
    <section className="relative w-full py-24 sm:py-32 px-4 sm:px-8 bg-[#F8F7F3] border-b border-avora-border overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16 pb-6 border-b border-avora-border">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-avora-muted block mb-3">
            Voices & Collaboration
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-avora-charcoal leading-none">
            WHAT PEOPLE SAY.
          </h2>
        </div>

        {/* 3-Column Editorial Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {endorsements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-avora-border shadow-xs flex flex-col justify-between space-y-6"
            >
              <Quote className="w-8 h-8 text-avora-lavender/40" />

              <p className="font-serif text-lg sm:text-xl text-avora-charcoal leading-relaxed">
                "{item.quote}"
              </p>

              <div className="pt-4 border-t border-avora-border-light space-y-0.5">
                <p className="font-sans font-bold text-sm text-avora-charcoal">{item.author}</p>
                <p className="text-xs font-sans text-avora-muted">{item.title}</p>
                <p className="text-[11px] font-mono text-avora-muted/80">{item.context}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
