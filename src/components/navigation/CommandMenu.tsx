import React, { useState, useEffect } from 'react';
import { Search, FolderGit2, Sparkles, User, Lightbulb, Mail, ArrowUpRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CommandItem {
  id: string;
  label: string;
  category: string;
  icon: React.ReactNode;
  action: () => void;
}

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

export const CommandMenu: React.FC<CommandMenuProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');

  const commands: CommandItem[] = [
    {
      id: 'work',
      label: 'Selected Work & Case Studies',
      category: 'Navigation',
      icon: <FolderGit2 className="w-4 h-4 text-avora-lavender" />,
      action: () => { onNavigate('work'); onClose(); }
    },
    {
      id: 'services',
      label: 'Visual Discipline Experiences',
      category: 'Navigation',
      icon: <Sparkles className="w-4 h-4 text-avora-blue" />,
      action: () => { onNavigate('services'); onClose(); }
    },
    {
      id: 'about',
      label: 'About AVORA & Philosophy',
      category: 'Navigation',
      icon: <User className="w-4 h-4 text-avora-pink" />,
      action: () => { onNavigate('about'); onClose(); }
    },
    {
      id: 'playground',
      label: 'Creative Playground & Experiments',
      category: 'Navigation',
      icon: <Lightbulb className="w-4 h-4 text-emerald-500" />,
      action: () => { onNavigate('playground'); onClose(); }
    },
    {
      id: 'planner',
      label: 'Start a Project Planner',
      category: 'Actions',
      icon: <Mail className="w-4 h-4 text-amber-500" />,
      action: () => { onNavigate('planner'); onClose(); }
    },
  ];

  const filtered = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-start justify-center pt-24 px-4 bg-black/20 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="w-full max-w-xl bg-[#FAF9F6] border border-avora-border shadow-2xl rounded-2xl overflow-hidden"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-avora-border bg-white/60">
              <Search className="w-5 h-5 text-avora-muted" />
              <input
                type="text"
                autoFocus
                placeholder="Type a command or jump to section... (Esc to close)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-sm focus:outline-none placeholder:text-avora-subtle text-avora-charcoal font-sans"
              />
              <button
                onClick={onClose}
                className="p-1 rounded-md text-avora-muted hover:text-black hover:bg-black/5 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* List */}
            <div className="max-h-80 overflow-y-auto p-2 divide-y divide-avora-border-light">
              {filtered.length === 0 ? (
                <div className="py-8 text-center text-sm text-avora-muted">
                  No matching destination found.
                </div>
              ) : (
                <div className="space-y-1">
                  {filtered.map((item) => (
                    <button
                      key={item.id}
                      onClick={item.action}
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left hover:bg-white transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-black/[0.03] group-hover:bg-black/[0.06] transition-colors">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-avora-charcoal">{item.label}</p>
                          <p className="text-[11px] font-mono uppercase tracking-wider text-avora-muted">{item.category}</p>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-avora-subtle group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Footer helper */}
            <div className="flex items-center justify-between px-4 py-2.5 border-t border-avora-border bg-white/40 text-[11px] font-mono text-avora-muted">
              <span>AVORA Digital Universe</span>
              <span>Use <kbd className="px-1.5 py-0.5 bg-white border border-avora-border rounded">Esc</kbd> to exit</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
