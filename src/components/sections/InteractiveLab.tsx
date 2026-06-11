import React, { useState } from 'react';
import { projects } from '../../data/projects';
import { Project } from '../../data/types';
import ViewSwitch from '../ui/ViewSwitch';
import EvidenceChip from '../ui/EvidenceChip';
import GoldTraceLine from '../ui/GoldTraceLine';
import { Terminal, Database, BookOpen, KeyRound } from 'lucide-react';

export default function InteractiveLab() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(projects[0].id);
  const [activeView, setActiveView] = useState<string>('story');
  const [isRevealed, setIsRevealed] = useState(false);

  const selectedProject = projects.find(p => p.id === selectedProjectId) || projects[0];

  const viewOptions = [
    { id: 'story', label: 'Story' },
    { id: 'evidence', label: 'Evidence' },
    { id: 'technical', label: 'Technical' }
  ];

  return (
    <section 
      id="interactive-lab" 
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 bg-black"
    >
      <div className="space-y-12">
        {/* Section Heading */}
        <div className="space-y-4 max-w-3xl">
          <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--gold-primary)]">Chapter 5</p>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[var(--text-primary)]">
            Interactive Lab
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] font-light leading-relaxed">
            Toggle perspective views (Story, Evidence, or Technical) across my flagship systems to audit verification records and data schemas in real-time.
          </p>
        </div>

        {/* Lab Workspace Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Project List Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-2.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] px-1">Select System</span>
            <div className="flex flex-col gap-2">
              {projects.map((proj) => (
                <button
                  key={proj.id}
                  onClick={() => setSelectedProjectId(proj.id)}
                  className={`w-full text-left p-4 rounded border transition-all duration-300 focus-visible:ring-1 focus-visible:ring-[var(--gold-soft)] focus-visible:outline-none ${
                    selectedProjectId === proj.id
                      ? 'bg-[var(--surface)] border-[var(--gold-primary)]/40 text-[var(--text-primary)] shadow-md shadow-[var(--navy-deep)]/20'
                      : 'bg-[var(--surface-soft)]/60 border-[var(--border-soft)]/30 text-[var(--text-secondary)] hover:border-[var(--border-soft)] hover:bg-[var(--surface)]'
                  }`}
                >
                  <span className="text-[9px] font-mono text-[var(--gold-muted)] uppercase block">{proj.status}</span>
                  <span className="text-xs sm:text-sm font-semibold block mt-0.5">{proj.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Console Main Viewport */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-lg bg-[var(--surface)] border border-[var(--border-soft)] flex flex-col justify-between min-h-[460px] relative glow-gold-subtle">
            {/* Fine border accents */}
            <div className="absolute top-0 right-0 w-32 h-[1px] bg-gradient-to-l from-[var(--gold-primary)]/30 to-transparent" />
            <div className="absolute bottom-0 left-0 w-32 h-[1px] bg-gradient-to-r from-[var(--gold-primary)]/30 to-transparent" />

            <div className="space-y-6">
              {/* Console Header / View Switcher */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[var(--border-soft)]/30">
                <div className="space-y-0.5">
                  <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)]">{selectedProject.title}</h3>
                  <p className="text-[10px] font-mono text-[var(--text-muted)] uppercase">{selectedProject.subtitle}</p>
                </div>
                <ViewSwitch
                  options={viewOptions}
                  activeId={activeView}
                  onChange={setActiveView}
                />
              </div>

              {/* View Content Panels */}
              <div className="min-h-[260px] flex flex-col justify-between">
                {activeView === 'story' && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="space-y-2">
                      <h4 className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)]">Executive Summary</h4>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-light">{selectedProject.summary}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[var(--border-soft)]/20">
                      <div className="space-y-1.5">
                        <h5 className="text-[10px] font-mono uppercase tracking-wider text-[var(--gold-soft)]">Operational Problem</h5>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-light">{selectedProject.problem}</p>
                      </div>
                      <div className="space-y-1.5">
                        <h5 className="text-[10px] font-mono uppercase tracking-wider text-[var(--gold-soft)]">Business / Public Value</h5>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-light">{selectedProject.whyItMatters}</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeView === 'evidence' && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="space-y-3">
                      <h4 className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)]">Verified Metric Scorecard</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {selectedProject.metrics.map((m, idx) => (
                          <EvidenceChip
                            key={idx}
                            label={m.label}
                            value={m.value}
                            source={m.source}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 pt-4 border-t border-[var(--border-soft)]/20">
                      <h4 className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)]">Validation Checks Passed</h4>
                      <ul className="space-y-1.5">
                        {selectedProject.validation.map((v, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-[var(--text-secondary)] font-light">
                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold-primary)]" />
                            {v}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeView === 'technical' && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <h4 className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)]">Input Datasets</h4>
                        <ul className="space-y-1">
                          {selectedProject.inputs.map((inp, idx) => (
                            <li key={idx} className="text-xs text-[var(--text-secondary)] font-mono flex items-center gap-2">
                              <span className="text-[var(--gold-soft)]">&gt;</span> {inp}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)]">Method / Pipeline Steps</h4>
                        <ul className="space-y-1">
                          {selectedProject.method.map((met, idx) => (
                            <li key={idx} className="text-xs text-[var(--text-secondary)] font-light flex items-start gap-2">
                              <span className="text-[var(--gold-primary)] mt-1 font-mono text-[9px]">{idx + 1}.</span>
                              <span>{met}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[var(--border-soft)]/20">
                      <div className="space-y-2">
                        <h4 className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)]">Output Deliverables</h4>
                        <ul className="space-y-1">
                          {selectedProject.outputs.map((out, idx) => (
                            <li key={idx} className="text-xs text-[var(--text-secondary)] font-light flex items-center gap-2">
                              <div className="w-1 h-1 bg-[var(--gold-primary)] rounded-full" />
                              {out}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)]">System Constraints & Limitations</h4>
                        <ul className="space-y-1">
                          {selectedProject.limitations.map((lim, idx) => (
                            <li key={idx} className="text-xs text-[var(--text-muted)] font-light leading-relaxed">
                              {lim}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Console Footer Status */}
            <div className="flex justify-between items-center text-[9px] font-mono text-[var(--text-muted)] border-t border-[var(--border-soft)]/30 pt-4 mt-6">
              <span>SYSTEM STATE: ACTIVE</span>
              <span>VERIFIED EVIDENCE COMPLIANCE: 100%</span>
            </div>
          </div>
        </div>

        {/* Hidden Signature Interaction block */}
        <div className="py-6 flex flex-col items-center justify-center bg-[var(--surface-soft)]/40 border border-[var(--border-soft)]/60 rounded-lg p-6 max-w-xl mx-auto relative overflow-hidden">
          <button
            type="button"
            className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--gold-primary)] focus:text-[var(--gold-primary)] focus:outline-none transition-colors duration-300 cursor-pointer"
            onMouseEnter={() => setIsRevealed(true)}
            onMouseLeave={() => setIsRevealed(false)}
            onFocus={() => setIsRevealed(true)}
            onBlur={() => setIsRevealed(false)}
            aria-label="Reveal developer signature note"
          >
            <KeyRound className="w-3.5 h-3.5" />
            <span>[ Signature Interaction: Inspect Codebase ]</span>
          </button>

          <div 
            className={`mt-4 text-xs font-mono text-[var(--gold-muted)] transition-all duration-500 text-center
              ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'}`}
            aria-live="polite"
          >
            "You found this. Most people won't. I care about validation, accessibility, and details."
          </div>
        </div>
      </div>

      {/* Visual bottom trace separator */}
      <GoldTraceLine className="absolute bottom-0 left-0" />
    </section>
  );
}
