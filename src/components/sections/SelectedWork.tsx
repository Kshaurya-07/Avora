import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';
import { PROJECTS } from '../../data/projects';
import { Project } from '../../types';
import { CaseStudyModal } from './CaseStudyModal';

interface SelectedWorkProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ activeFilter, onFilterChange }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterOptions = ['ALL', 'BRANDING', 'GRAPHICS', 'APPAREL', 'UI/UX', 'WEB'];

  const filteredProjects = activeFilter === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % PROJECTS.length;
    setSelectedProject(PROJECTS[nextIndex]);
  };

  return (
    <section id="work" className="relative w-full py-24 sm:py-32 px-4 sm:px-8 bg-[#FAF9F6] border-b border-avora-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-avora-border">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-avora-muted block mb-3">
              Portfolio & Archives
            </span>
            <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-avora-charcoal leading-none">
              SELECTED<br />WORK.
            </h2>
          </div>

          <div className="max-w-md space-y-4">
            <p className="text-sm sm:text-base font-sans text-avora-muted leading-relaxed">
              A collection of visual identities, digital experiences, streetwear capsules and creative experiments.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {filterOptions.map((filter) => {
                const isActive = activeFilter === filter;
                return (
                  <button
                    key={filter}
                    onClick={() => onFilterChange(filter)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                      isActive
                        ? 'bg-avora-charcoal text-white shadow-xs'
                        : 'bg-white text-avora-muted border border-avora-border hover:text-black hover:bg-white/90'
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Asymmetric Editorial Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {filteredProjects.map((project, idx) => {
            // Asymmetric column spans and aspect ratios
            const isLarge = idx % 3 === 0;
            const colSpan = isLarge ? 'md:col-span-8' : idx % 3 === 1 ? 'md:col-span-4' : 'md:col-span-12';
            const aspectClass = isLarge ? 'aspect-[16/10]' : idx % 3 === 1 ? 'aspect-[4/5]' : 'aspect-[21/9]';

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => setSelectedProject(project)}
                className={`${colSpan} group cursor-pointer flex flex-col justify-between`}
              >
                {/* Visual Image Container with Parallax & Hover Zoom */}
                <div className={`relative w-full ${aspectClass} rounded-2xl overflow-hidden bg-avora-gray border border-avora-border shadow-xs group-hover:shadow-glass-hover transition-all duration-700`}>
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle Soft Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 sm:p-8">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 text-avora-charcoal text-xs font-mono uppercase tracking-wider font-semibold shadow-lg">
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-avora-charcoal border border-avora-border/80 shadow-xs">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Editorial Metadata */}
                <div className="pt-4 flex items-start justify-between">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-avora-charcoal group-hover:text-avora-lavender transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-sans text-avora-muted mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-avora-muted/80 pt-1">
                    {project.year}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal Presentation */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNextProject={handleNextProject}
      />
    </section>
  );
};
