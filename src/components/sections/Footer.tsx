import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onNavigateAbout?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onNavigateAbout }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Playground', id: 'playground' },
    { label: 'Consultation', id: 'consultation' },
    { label: 'Packages', id: 'packages' },
    { label: 'Contact', id: 'planner' },
  ];

  const socialLinks = [
    { label: 'Instagram', url: 'https://instagram.com' },
    { label: 'LinkedIn', url: 'https://linkedin.com' },
    { label: 'Behance', url: 'https://behance.net' },
    { label: 'Dribbble', url: 'https://dribbble.com' },
    { label: 'GitHub', url: 'https://github.com/Kshaurya-07/Avora' },
  ];

  const handleLinkClick = (id: string) => {
    if (id === 'about') {
      if (onNavigateAbout) onNavigateAbout();
      else onNavigate('about');
    } else {
      onNavigate(id);
    }
  };

  return (
    <footer className="relative w-full bg-[#FAF9F6] border-t border-avora-border pt-20 pb-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Footer Tier: Brand Wordmark & Back to Top */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 border-b border-avora-border">
          <div className="space-y-3">
            <h2 className="font-serif text-6xl sm:text-8xl md:text-9xl font-bold tracking-tight text-avora-charcoal leading-none select-none">
              AVORA
            </h2>
            <p className="text-sm sm:text-base font-sans text-avora-muted">
              Designing ideas into living digital experiences.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-avora-muted hover:text-black transition-colors self-start md:self-end"
          >
            <span>Back to top</span>
            <div className="w-8 h-8 rounded-full border border-avora-border flex items-center justify-center">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

        {/* Middle Footer Grid: Disciplines, Sitemaps, Socials */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 py-12 border-b border-avora-border-light text-xs font-mono">
          {/* Navigation */}
          <div className="space-y-3">
            <p className="font-bold text-avora-charcoal uppercase tracking-wider">Navigation</p>
            <ul className="space-y-2 text-avora-muted">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleLinkClick(item.id)}
                    className="hover:text-black transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Creative Disciplines (All 7 in order) */}
          <div className="space-y-3">
            <p className="font-bold text-avora-charcoal uppercase tracking-wider">Disciplines</p>
            <ul className="space-y-2 text-avora-muted">
              <li>01 Logo Design</li>
              <li>02 Brand Identity</li>
              <li>03 Graphic & Editorial</li>
              <li>04 Apparel & Capsule</li>
              <li>05 UI/UX & Systems</li>
              <li>06 Immersive Web Design</li>
              <li>07 Frontend & WebGL</li>
            </ul>
          </div>

          {/* Social Presence */}
          <div className="space-y-3">
            <p className="font-bold text-avora-charcoal uppercase tracking-wider">Connect</p>
            <ul className="space-y-2 text-avora-muted">
              {socialLinks.map((soc) => (
                <li key={soc.label}>
                  <a
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black transition-colors flex items-center gap-1 group"
                  >
                    <span>{soc.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-avora-subtle group-hover:text-black transition-colors" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Coordinate */}
          <div className="space-y-3 col-span-2 sm:col-span-1">
            <p className="font-bold text-avora-charcoal uppercase tracking-wider">Direct Atelier</p>
            <p className="text-avora-muted leading-relaxed">
              Operating globally across digital space. Remote-first studio atelier.
            </p>
            <p className="text-avora-muted pt-2">
              Inquiries:{' '}
              <a
                href="mailto:kshaurya0708@gmail.com"
                className="text-avora-charcoal font-semibold underline hover:text-purple-600 transition-colors"
              >
                kshaurya0708@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-avora-muted">
          <p>© {new Date().getFullYear()} AVORA — Kumar Shaurya. All Rights Reserved.</p>
          <p className="tracking-wider">DESIGNING IDEAS INTO EXPERIENCES.</p>
        </div>
      </div>
    </footer>
  );
};
