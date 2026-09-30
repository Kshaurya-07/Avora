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
  const [hoveredServiceId, setHoveredServiceId] = useState<string | null>(null);

  const activeServiceId = hoveredServiceId || selectedServiceId;
  const currentService = SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0];

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

  const getServiceHoverReaction = (serviceId: string) => {
    switch (serviceId) {
      case 'logo-design':
        return (
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-purple-700 bg-purple-50/80 px-2 py-0.5 rounded border border-purple-200">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-ping" />
            <span>📐 Logo Geometry & Construction Grid</span>
          </div>
        );
      case 'branding':
        return (
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-blue-700 bg-blue-50/80 px-2 py-0.5 rounded border border-blue-200">
            <span className="inline-flex gap-1">
              <span className="w-2 h-2 rounded-full bg-[#18181B]" />
              <span className="w-2 h-2 rounded-full bg-[#C084FC]" />
              <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
            </span>
            <span>🎨 Typography & Color Swatches</span>
          </div>
        );
      case 'graphic-design':
        return (
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-pink-700 bg-pink-50/80 px-2 py-0.5 rounded border border-pink-200">
            <span>▯ Editorial Poster 3:4 Ratio Grid</span>
          </div>
        );
      case 'apparel':
        return (
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-amber-700 bg-amber-50/80 px-2 py-0.5 rounded border border-amber-200">
            <span>👕 Garment Silhouette & Silkscreen Specs</span>
          </div>
        );
      case 'ui-ux':
        return (
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-700 bg-cyan-50/80 px-2 py-0.5 rounded border border-cyan-200">
            <span>📱 Responsive Design Tokens & Wireframes</span>
          </div>
        );
      case 'web-design':
        return (
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-indigo-700 bg-indigo-50/80 px-2 py-0.5 rounded border border-indigo-200">
            <span>◫ 1440px Fluid Viewport & Interaction</span>
          </div>
        );
      case 'web-development':
        return (
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-700 bg-emerald-50/80 px-2 py-0.5 rounded border border-emerald-200">
            <span>&lt;Code /&gt; 120Hz React / WebGL Architecture</span>
          </div>
        );
      default:
        return null;
    }
  };

  const renderVisualStage = (id: string) => {
    switch (id) {
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
              Hover or select a discipline below to transform the studio stage with live geometry, swatches, blueprints, and responsive interfaces.
            </p>
          </div>
        </div>

        {/* 2-Column Split: Discipline Selector (Left) & Dynamic Visual Stage (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: 7 Disciplines Interactive List */}
          <div
            className="lg:col-span-5 flex flex-col space-y-2"
            onMouseLeave={() => setHoveredServiceId(null)}
          >
            {SERVICES.map((service) => {
              const isSelected = selectedServiceId === service.id;
              const isHovered = hoveredServiceId === service.id;
              const isCurrentActive = activeServiceId === service.id;

              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  onMouseEnter={() => setHoveredServiceId(service.id)}
                  className={`group relative w-full text-left p-5 sm:p-6 rounded-2xl transition-all duration-300 border ${
                    isSelected
                      ? 'bg-white border-purple-300 shadow-md translate-x-1 ring-1 ring-purple-100'
                      : isHovered
                      ? 'bg-white/90 border-avora-border shadow-xs translate-x-0.5'
                      : 'bg-transparent border-transparent hover:bg-white/60 hover:border-avora-border-light'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-baseline gap-4">
                      <span className={`text-xs font-mono font-bold tracking-wider ${
                        isCurrentActive ? 'text-avora-lavender' : 'text-avora-muted'
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

                        {/* Interactive Visual Reaction Cue on Hover / Active */}
                        {(isHovered || isSelected) && (
                          <motion.div
                            initial={{ opacity: 0, y: 3 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-2.5"
                          >
                            {getServiceHoverReaction(service.id)}
                          </motion.div>
                        )}
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
          <div className="lg:col-span-7 sticky top-28 space-y-3">
            {/* Visual Stage Context Indicator */}
            <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-white/70 border border-avora-border-light text-[11px] font-mono text-avora-muted backdrop-blur-xs">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                <span className="font-semibold text-avora-charcoal uppercase tracking-wider">
                  {hoveredServiceId && hoveredServiceId !== selectedServiceId
                    ? `PREVIEWING // ${currentService.name}`
                    : `ACTIVE DISCIPLINE // ${currentService.name}`}
                </span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-avora-muted hidden sm:inline">
                Interactive Studio Canvas
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeServiceId}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="w-full min-h-[500px]"
              >
                {renderVisualStage(activeServiceId)}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
