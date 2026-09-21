import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Clock } from 'lucide-react';
import { SERVICE_PACKAGES } from '../../data/packages';

interface PackagesProps {
  onSelectPackage: (packageName: string) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="relative w-full py-24 sm:py-32 px-4 sm:px-8 bg-[#FAF9F6] border-b border-avora-border">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-avora-border">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-avora-muted block mb-3">
              Engagement Scopes
            </span>
            <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-avora-charcoal leading-none">
              LET'S BUILD<br />SOMETHING.
            </h2>
          </div>
          <div className="max-w-md text-sm sm:text-base font-sans text-avora-muted">
            <p className="text-avora-charcoal font-medium">Curated creative partnerships tailored to your stage.</p>
            <p className="mt-1">Transparent scopes, clear deliverables, and obsessive attention to detail without opaque agency markups.</p>
          </div>
        </div>

        {/* 4 Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_PACKAGES.map((pkg, idx) => {
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                  pkg.featured
                    ? 'bg-white border-avora-charcoal shadow-xl relative'
                    : 'bg-white/70 border-avora-border hover:bg-white hover:shadow-md'
                }`}
              >
                {/* Featured Badge */}
                {pkg.featured && (
                  <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-avora-charcoal text-white text-[10px] font-mono uppercase tracking-widest font-semibold">
                    {pkg.tag}
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-avora-muted">
                    <span className="uppercase tracking-wider">{pkg.tag}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {pkg.timeline}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-avora-charcoal">
                    {pkg.title}
                  </h3>
                  <p className="text-xs font-sans text-avora-muted leading-relaxed">
                    {pkg.subtitle}
                  </p>

                  <div className="pt-4 border-t border-avora-border-light space-y-2">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-avora-charcoal font-semibold">
                      Included Deliverables:
                    </p>
                    {pkg.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs font-mono text-avora-charcoal/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-avora-lavender mt-1 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-avora-border-light">
                  <button
                    onClick={() => onSelectPackage(pkg.title)}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-sans font-semibold tracking-wide flex items-center justify-center gap-2 transition-all ${
                      pkg.featured
                        ? 'bg-avora-charcoal text-white hover:bg-black shadow'
                        : 'bg-avora-ivory hover:bg-avora-charcoal hover:text-white text-avora-charcoal border border-avora-border'
                    }`}
                  >
                    <span>Request a Quote</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
