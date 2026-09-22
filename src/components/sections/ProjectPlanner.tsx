import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check, ArrowRight, ArrowLeft, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProjectPlannerProps {
  initialService?: string;
}

export const ProjectPlanner: React.FC<ProjectPlannerProps> = ({ initialService }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [services, setServices] = useState<string[]>(initialService ? [initialService] : []);
  const [budget, setBudget] = useState<string>('');
  const [timeline, setTimeline] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [contact, setContact] = useState({ name: '', email: '', brand: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const availableServices = [
    'Logo Design',
    'Branding & Identity',
    'Graphic Design',
    'Apparel & Streetwear',
    'UI/UX Design',
    'Website Design',
    'Full Frontend Development',
    'Interactive 3D Experience',
  ];

  const budgetTiers = [
    '₹5K – ₹10K',
    '₹10K – ₹25K',
    '₹25K – ₹50K',
    '₹50K+',
  ];

  const timelineOptions = [
    'ASAP (Rush priority)',
    '1 – 2 Weeks',
    '2 – 4 Weeks',
    'Flexible schedule',
  ];

  const toggleService = (s: string) => {
    setServices((prev) =>
      prev.includes(s) ? prev.filter((item) => item !== s) : [...prev, s]
    );
  };

  const handleNext = () => {
    setErrorMsg('');
    if (currentStep === 1 && services.length === 0) {
      setErrorMsg('Please select at least one creative discipline.');
      return;
    }
    if (currentStep === 2 && !budget) {
      setErrorMsg('Please select an estimated budget range.');
      return;
    }
    if (currentStep === 3 && !timeline) {
      setErrorMsg('Please select your preferred project timeline.');
      return;
    }
    if (currentStep === 4 && description.trim().length < 10) {
      setErrorMsg('Please provide a brief sentence about your project vision.');
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contact.name || !contact.email) {
      setErrorMsg('Please enter your name and valid email address.');
      return;
    }
    setIsSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#A855F7', '#60A5FA', '#F472B6', '#38BDF8'],
    });
  };

  return (
    <section id="planner" className="relative w-full py-24 sm:py-32 px-4 sm:px-8 bg-[#F8F7F3] border-b border-avora-border">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-avora-muted inline-block">
            Project Onboarding
          </span>
          <h2 className="font-serif text-5xl sm:text-7xl font-bold tracking-tight text-avora-charcoal">
            START A PROJECT.
          </h2>
          <p className="text-sm sm:text-base font-sans text-avora-muted max-w-xl mx-auto">
            Answer a few quick questions to align on scope, deliverables, timeline and vision.
          </p>
        </div>

        {/* Multi-step Card Container */}
        <div className="bg-white rounded-3xl border border-avora-border shadow-xl p-6 sm:p-10 relative overflow-hidden">
          {/* Top Progress Bar */}
          {!isSubmitted && (
            <div className="mb-8">
              <div className="flex justify-between items-center text-xs font-mono text-avora-muted mb-2">
                <span>STEP 0{currentStep} OF 05</span>
                <span>{Math.round((currentStep / 5) * 100)}% COMPLETE</span>
              </div>
              <div className="w-full h-1 bg-avora-border rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-avora-charcoal rounded-full"
                  animate={{ width: `${(currentStep / 5) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>
          )}

          {/* Form Step Stages */}
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* STEP 1: SERVICES */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl font-bold text-avora-charcoal">
                      What do you need?
                    </h3>
                    <p className="text-xs font-mono text-avora-muted">Select all disciplines that apply to your initiative:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {availableServices.map((srv) => {
                        const selected = services.includes(srv);
                        return (
                          <button
                            key={srv}
                            type="button"
                            onClick={() => toggleService(srv)}
                            className={`p-4 rounded-xl text-left font-sans text-sm font-medium border transition-all flex items-center justify-between ${
                              selected
                                ? 'bg-avora-charcoal text-white border-avora-charcoal shadow-sm'
                                : 'bg-[#FAF9F6] text-avora-charcoal border-avora-border hover:bg-white'
                            }`}
                          >
                            <span>{srv}</span>
                            {selected && <Check className="w-4 h-4" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 2: BUDGET */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl font-bold text-avora-charcoal">
                      What is your estimated budget?
                    </h3>
                    <p className="text-xs font-mono text-avora-muted">Select an approximate investment tier:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {budgetTiers.map((b) => {
                        const selected = budget === b;
                        return (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setBudget(b)}
                            className={`p-4 rounded-xl text-left font-serif text-lg font-bold border transition-all flex items-center justify-between ${
                              selected
                                ? 'bg-avora-charcoal text-white border-avora-charcoal shadow-sm'
                                : 'bg-[#FAF9F6] text-avora-charcoal border-avora-border hover:bg-white'
                            }`}
                          >
                            <span>{b}</span>
                            {selected && <Check className="w-4 h-4" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 3: TIMELINE */}
                {currentStep === 3 && (
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl font-bold text-avora-charcoal">
                      When do you envision launching?
                    </h3>
                    <p className="text-xs font-mono text-avora-muted">Estimated time horizon for final handoff:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {timelineOptions.map((t) => {
                        const selected = timeline === t;
                        return (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setTimeline(t)}
                            className={`p-4 rounded-xl text-left font-sans text-sm font-medium border transition-all flex items-center justify-between ${
                              selected
                                ? 'bg-avora-charcoal text-white border-avora-charcoal shadow-sm'
                                : 'bg-[#FAF9F6] text-avora-charcoal border-avora-border hover:bg-white'
                            }`}
                          >
                            <span>{t}</span>
                            {selected && <Check className="w-4 h-4" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 4: DESCRIPTION */}
                {currentStep === 4 && (
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl font-bold text-avora-charcoal">
                      Tell me about your project.
                    </h3>
                    <p className="text-xs font-mono text-avora-muted">Describe the vision, challenges, and goals you want to achieve:</p>
                    <textarea
                      rows={5}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="We are building a new luxury botanical brand and need complete identity guidelines, bespoke typography, packaging and a flagship digital storefront..."
                      className="w-full p-4 rounded-xl border border-avora-border bg-[#FAF9F6] text-avora-charcoal text-sm font-sans focus:outline-none focus:ring-2 focus:ring-avora-charcoal"
                    />
                  </div>
                )}

                {/* STEP 5: CONTACT */}
                {currentStep === 5 && (
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl font-bold text-avora-charcoal">
                      Where should I send the proposal?
                    </h3>
                    <p className="text-xs font-mono text-avora-muted">Your contact coordinates for direct follow-up:</p>
                    <div className="space-y-3 pt-2">
                      <div>
                        <label className="text-xs font-mono uppercase text-avora-muted block mb-1">Your Full Name</label>
                        <input
                          type="text"
                          required
                          value={contact.name}
                          onChange={(e) => setContact({ ...contact, name: e.target.value })}
                          placeholder="Julian Thorne"
                          className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm text-avora-charcoal focus:outline-none focus:ring-2 focus:ring-avora-charcoal"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-mono uppercase text-avora-muted block mb-1">Email Address</label>
                        <input
                          type="email"
                          required
                          value={contact.email}
                          onChange={(e) => setContact({ ...contact, email: e.target.value })}
                          placeholder="julian@atelier.com"
                          className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm text-avora-charcoal focus:outline-none focus:ring-2 focus:ring-avora-charcoal"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-mono uppercase text-avora-muted block mb-1">Brand or Company (Optional)</label>
                        <input
                          type="text"
                          value={contact.brand}
                          onChange={(e) => setContact({ ...contact, brand: e.target.value })}
                          placeholder="Atelier Thorne Ltd"
                          className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm text-avora-charcoal focus:outline-none focus:ring-2 focus:ring-avora-charcoal"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Error Banner */}
                {errorMsg && (
                  <p className="text-xs font-mono text-rose-600 bg-rose-50 p-2.5 rounded-lg border border-rose-200">
                    {errorMsg}
                  </p>
                )}

                {/* Step Navigation Controls */}
                <div className="pt-6 border-t border-avora-border-light flex items-center justify-between">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={() => setCurrentStep((prev) => prev - 1)}
                      className="px-4 py-2.5 rounded-xl border border-avora-border bg-white text-xs font-sans font-medium text-avora-charcoal hover:bg-avora-ivory flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {currentStep < 5 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-6 py-3 rounded-xl bg-avora-charcoal text-white text-xs font-sans font-semibold tracking-wide hover:bg-black flex items-center gap-2 shadow"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="px-8 py-3.5 rounded-xl bg-avora-charcoal text-white text-xs font-sans font-bold tracking-wider uppercase hover:bg-black flex items-center gap-2 shadow-lg hover:shadow-xl"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Project Brief ↗</span>
                    </button>
                  )}
                </div>
              </motion.div>
            ) : (
              /* Success State */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-avora-charcoal">
                  BRIEF TRANSMITTED.
                </h3>
                <p className="text-sm font-sans text-avora-muted max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-avora-charcoal">{contact.name}</strong>. Your project brief has been received by AVORA. I will review the scope and reach back within 24–48 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setCurrentStep(1);
                      setServices([]);
                      setBudget('');
                      setTimeline('');
                      setDescription('');
                    }}
                    className="text-xs font-mono text-avora-muted underline hover:text-black"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
