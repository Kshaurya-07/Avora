import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, ArrowRight, Layers, CheckCircle2, Globe } from 'lucide-react';
import { Project } from '../../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onNextProject: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, onNextProject }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[500] flex items-center justify-center p-0 sm:p-6 md:p-10 bg-black/40 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.98 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl h-full sm:h-[90vh] bg-[#FAF9F6] border border-avora-border shadow-2xl rounded-none sm:rounded-3xl overflow-y-auto flex flex-col"
        >
          {/* Floating Sticky Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-avora-border">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono tracking-widest text-avora-muted uppercase">
                {project.category} // CASE STUDY
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-avora-lavender" />
              <span className="text-xs font-mono text-avora-charcoal font-semibold">{project.year}</span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white border border-avora-border text-avora-charcoal hover:bg-black hover:text-white transition-colors shadow-xs"
              aria-label="Close Case Study"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Hero Imagery Banner */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-avora-gray">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-transparent to-black/20" />
            
            <div className="absolute bottom-6 left-6 sm:left-10 right-6 sm:right-10">
              <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-avora-charcoal">
                {project.title}
              </h2>
              <p className="text-sm sm:text-lg font-sans text-avora-charcoal/80 mt-1 max-w-2xl">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Case Study Editorial Content Body */}
          <div className="p-6 sm:p-10 space-y-12 max-w-4xl mx-auto w-full">
            {/* Meta Row: Role & Deliverables */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8 border-b border-avora-border">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-avora-muted">ROLE & RESPONSIBILITY</p>
                <p className="text-sm font-sans font-semibold text-avora-charcoal mt-1">{project.role}</p>
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-avora-muted">DELIVERABLES</p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.deliverables.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-white border border-avora-border text-xs font-mono text-avora-charcoal"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* The Brief */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-avora-muted">01 // THE BRIEF</span>
                <h3 className="font-serif text-2xl font-bold text-avora-charcoal mt-1">Challenge & Objective</h3>
              </div>
              <div className="md:col-span-2 space-y-3 text-sm sm:text-base font-sans leading-relaxed text-avora-charcoal/90">
                <p><strong className="text-avora-charcoal">The Problem:</strong> {project.brief.problem}</p>
                <p><strong className="text-avora-charcoal">The Objective:</strong> {project.brief.objective}</p>
              </div>
            </div>

            {/* The Approach */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-avora-border">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-avora-muted">02 // THE APPROACH</span>
                <h3 className="font-serif text-2xl font-bold text-avora-charcoal mt-1">Creative Strategy</h3>
              </div>
              <div className="md:col-span-2 space-y-3 text-sm sm:text-base font-sans leading-relaxed text-avora-charcoal/90">
                <p><strong className="text-avora-charcoal">Core Concept:</strong> {project.approach.concept}</p>
                <p>{project.approach.strategy}</p>
              </div>
            </div>

            {/* Secondary Visuals Gallery Grid */}
            {project.secondaryImages && project.secondaryImages.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                {project.secondaryImages.map((img, idx) => (
                  <div key={idx} className="rounded-2xl overflow-hidden aspect-[4/3] bg-avora-gray shadow-sm border border-avora-border">
                    <img src={img} alt={`${project.title} detail ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                ))}
              </div>
            )}

            {/* The Process */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-avora-border">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-avora-muted">03 // THE PROCESS</span>
                <h3 className="font-serif text-2xl font-bold text-avora-charcoal mt-1">Execution Steps</h3>
              </div>
              <div className="md:col-span-2 space-y-4">
                {project.process.map((step, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-avora-border shadow-xs">
                    <span className="text-xs font-mono text-avora-lavender font-bold block mb-1">
                      {step.step}
                    </span>
                    <p className="text-sm font-sans text-avora-charcoal/90">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* The Outcome */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-avora-border">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-avora-muted">04 // THE OUTCOME</span>
                <h3 className="font-serif text-2xl font-bold text-avora-charcoal mt-1">Impact & Results</h3>
              </div>
              <div className="md:col-span-2 space-y-4">
                <p className="text-sm sm:text-base font-sans text-avora-charcoal/90 leading-relaxed font-medium">
                  {project.outcome.summary}
                </p>
                <div className="space-y-2 pt-2">
                  {project.outcome.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs font-mono text-avora-charcoal">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Project Actions */}
            <div className="pt-10 border-t border-avora-border flex flex-wrap items-center justify-between gap-4">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-avora-charcoal text-white text-xs font-sans font-semibold hover:bg-black transition-colors"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>View Live Experience ↗</span>
                </a>
              ) : (
                <div />
              )}

              <button
                onClick={onNextProject}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-avora-border text-avora-charcoal text-xs font-sans font-semibold hover:bg-[#FAF9F6] transition-colors ml-auto"
              >
                <span>Next Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
