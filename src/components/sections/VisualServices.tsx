import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronRight, Sparkles } from 'lucide-react';
import { SERVICES } from '../../data/services';
import { LogoDesignMockup } from '../mockups/LogoDesignMockup';
import { BrandingMockup } from '../mockups/BrandingMockup';
import { GraphicDesignMockup } from '../mockups/GraphicDesignMockup';
import { ApparelMockup } from '../mockups/ApparelMockup';
import { UIUXMockup } from '../mockups/UIUXMockup';
import { WebDesignMockup } from '../mockups/WebDesignMockup';
import { WebDevMockup } from '../mockups/WebDevMockup';

interface VisualServicesProps {
  onSelectConsultation?: (serviceId: string) => void;
}

export const VisualServices: React.FC<VisualServicesProps> = ({ onSelectConsultation }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('logo-design');

  const currentService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  const handleStartConsultation = (serviceId: string) => {
    if (onSelectConsultation) {
      onSelectConsultation(serviceId);
    } else {
      const el = document.getElementById('consultation');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const renderVisualStage = () => {
    switch (selectedServiceId) {
      case 'logo-design':
        return <LogoDesignMockup />;
      case 'branding':
        return <BrandingMockup />;
      case 'graphic-design':
        return <GraphicDesignMockup />;
      case 'apparel':
        return <ApparelMockup />;
      case 'ui-ux':
        return <UIUXMockup />;
      case 'web-design':
        return <WebDesignMockup />;
      case 'web-development':
        return <WebDevMockup />;
      default:
        return <LogoDesignMockup />;
    }
  };

  return (
    <section id="services" className="relative w-full py-24 sm:py-32 px-4 sm:px-8 bg-[#FAF9F6] border-b border-avora-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-avora-muted block mb-3">
              Capability Demonstrations // What AVORA Can Create
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-avora-charcoal leading-none">
              WHAT I DO.
            </h2>
          </div>
          <div className="max-w-md text-sm sm:text-base font-sans text-avora-muted">
            <p className="font-medium text-avora-charcoal">Design, develop and everything in between.</p>
            <p className="mt-1">
              Interactive demonstrations showing how AVORA approaches form, systems, garments, and functional code. Select a discipline below to transform the studio stage.
            </p>
          </div>
        </div>

        {/* 2-Column Split: Discipline Selector (Left) & Dynamic Visual Stage (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: 7 Disciplines Interactive List */}
          <div className="lg:col-span-5 flex flex-col space-y-2">
            {SERVICES.map((service) => {
              const isSelected = selectedServiceId === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`group relative w-full text-left p-5 sm:p-6 rounded-2xl transition-all duration-300 border ${
                    isSelected
                      ? 'bg-white border-avora-border shadow-md translate-x-1'
                      : 'bg-transparent border-transparent hover:bg-white/60 hover:border-avora-border-light'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-baseline gap-4">
                      <span className={`text-xs font-mono font-bold tracking-wider ${
                        isSelected ? 'text-avora-lavender' : 'text-avora-muted'
                      }`}>
                        {service.number}
                      </span>
                      <div>
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-avora-charcoal group-hover:text-black">
                          {service.name}
                        </h3>
                        <p className="text-xs font-sans text-avora-muted mt-1">
                          {service.shortTagline}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                      isSelected ? 'text-avora-charcoal translate-x-1' : 'text-avora-subtle group-hover:text-avora-muted'
                    }`} />
                  </div>

                  {/* Expanded Summary details when active */}
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pt-4 mt-4 border-t border-avora-border-light space-y-3"
                    >
                      <p className="text-xs font-sans text-avora-charcoal/80 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Capabilities Checklist */}
                      <div className="grid grid-cols-1 gap-1.5 pt-1">
                        {service.disciplinesCovered.slice(0, 3).map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-[11px] font-mono text-avora-muted">
                            <span className="w-1.5 h-1.5 rounded-full bg-avora-lavender" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA to Personalized Consultation */}
                      <div className="pt-2">
                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                            handleStartConsultation(service.id);
                          }}
                          className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-avora-charcoal hover:text-avora-lavender transition-colors cursor-pointer"
                        >
                          <span>{service.ctaText}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </motion.div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Visual Stage */}
          <div className="lg:col-span-7 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedServiceId}
                initial={{ opacity: 0, scale: 0.97, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="w-full min-h-[500px]"
              >
                {renderVisualStage()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
