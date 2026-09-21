import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download, Sparkles, Compass } from 'lucide-react';

interface AboutProps {
  onNavigate: (sectionId: string) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const stats = [
    { value: '20+', label: 'Curated Projects', sub: 'Across visual & digital mediums' },
    { value: '10+', label: 'Design Categories', sub: 'From branding to 3D web' },
    { value: '∞', label: 'Ideas & Concepts', sub: 'Driven by continuous discovery' },
    { value: '5+', label: 'Collaborations', sub: 'Visionary founders & studios' },
  ];

  const handleDownloadCV = () => {
    // Generate an authentic, formatted CV document directly in the browser
    const cvText = `=====================================================
AVORA — MULTIDISCIPLINARY DESIGNER & WEB DEVELOPER
Designing ideas into experiences.
=====================================================

CORE DISCIPLINES:
• Brand Identity & Systems
• Graphic Design & Editorial Posters
• Contemporary Apparel & Streetwear
• Digital Product UI/UX Architecture
• Fullstack Creative Frontend Development (React/Next.js/Three.js)

PHILOSOPHY:
"Turning ideas into things people can actually see, use and remember."

PORTFOLIO:
https://avora-studio.example.com

CONTACT:
Available for select commissions, brand identity systems, and digital flagships.
=====================================================`;

    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'AVORA-Creative-Curriculum.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="about" className="relative w-full py-24 sm:py-32 px-4 sm:px-8 bg-[#FAF9F6] border-b border-avora-border">
      <div className="max-w-7xl mx-auto">
        {/* Main Editorial Bio Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-20 border-b border-avora-border">
          <div className="lg:col-span-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-avora-muted block mb-4">
              Atelier Profile & Philosophy
            </span>
            <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-avora-charcoal leading-none">
              DESIGNER.<br />
              DEVELOPER.<br />
              CREATOR.
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-6 pt-2">
            <p className="font-serif text-2xl sm:text-3xl font-medium text-avora-charcoal leading-relaxed">
              AVORA is a multidisciplinary design and web development practice focused on creating meaningful visual and digital experiences.
            </p>
            <p className="text-base sm:text-lg font-sans text-avora-muted leading-relaxed">
              The work moves fluidly between brands, graphics, apparel, interfaces and websites. Guided by an uncompromising commitment to craftsmanship: turning ideas into things people can actually see, use and remember.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onNavigate('planner')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-avora-charcoal text-white text-xs font-sans font-semibold hover:bg-black transition-all shadow-sm"
              >
                <span>More About AVORA</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-avora-border text-avora-charcoal text-xs font-sans font-semibold hover:bg-avora-ivory transition-all shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </button>
            </div>
          </div>
        </div>

        {/* Animated Statistics Metric Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-16 border-b border-avora-border">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-1"
            >
              <p className="font-serif text-4xl sm:text-6xl font-bold text-avora-charcoal">
                {stat.value}
              </p>
              <p className="font-sans text-sm font-semibold text-avora-charcoal pt-1">
                {stat.label}
              </p>
              <p className="text-xs font-mono text-avora-muted">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* AVORA WORLD: Cinematic Atmospheric Quote */}
        <div className="pt-20 text-center space-y-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-avora-border text-[10px] font-mono uppercase tracking-widest text-avora-muted">
            <Compass className="w-3 h-3 text-avora-lavender animate-spin-slow" />
            <span>Creative Horizon</span>
          </div>
          <h3 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-avora-charcoal leading-tight">
            ALWAYS CREATING.<br />ALWAYS EXPLORING.
          </h3>
          <p className="text-sm sm:text-base font-sans text-avora-muted max-w-xl mx-auto leading-relaxed pt-2">
            Every project begins with radical curiosity and ends with precision execution. No formulaic shortcuts, only intentional design.
          </p>
        </div>
      </div>
    </section>
  );
};
