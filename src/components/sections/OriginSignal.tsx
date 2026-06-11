import React, { useState } from 'react';
import { Database, Briefcase, ShieldCheck, ArrowRight, GraduationCap } from 'lucide-react';
import GoldTraceLine from '../ui/GoldTraceLine';

interface TimelinePhase {
  id: number;
  title: string;
  period: string;
  tagline: string;
  icon: React.ReactNode;
  credentials: string[];
  skills: string[];
  details: string[];
}

export default function OriginSignal() {
  const [activePhase, setActivePhase] = useState<number>(1);

  const phases: TimelinePhase[] = [
    {
      id: 1,
      title: "Phase 1: Data Analytics Foundations",
      period: "2024 - 2025",
      tagline: "Academic Depth & Quantitative Training",
      icon: <GraduationCap className="w-5 h-5 text-[var(--gold-primary)]" />,
      credentials: [
        "MSc Data Analytics - De Montfort University (Leicester, UK)",
        "BE Computer Science - Anurag Group of Institutions (Hyderabad, India)"
      ],
      skills: ["SQL (PostgreSQL/SQLite)", "Python Data Structures", "Dimensional Modeling (Star Schema)", "Statistical Forecasting"],
      details: [
        "Studied advanced data analysis methodologies, database systems, and predictive algorithms.",
        "Engineered a regional ticket booking star-schema data mart aggregating 18,942 source rows.",
        "Completed dissertation mapping travel accessibility travel times across 7,392 Scottish Data Zones using Random Forest classifiers."
      ]
    },
    {
      id: 2,
      title: "Phase 2: Applied Projects & Simulations",
      period: "2025",
      tagline: "Virtual Simulations & Stakeholder Communication",
      icon: <Briefcase className="w-5 h-5 text-[var(--gold-primary)]" />,
      credentials: [
        "KPMG UK Virtual Simulation (Forage)",
        "British Airways Virtual Simulation (Forage)"
      ],
      skills: ["Customer Data Cleaning", "Predictive Modeling Practice", "Business Intelligence Reporting", "Stakeholder Presentation"],
      details: [
        "Applied business analytics frameworks to simulated customer transaction datasets.",
        "Cleaned, segmented, and optimized customer booking behaviors for predictive airline targeting.",
        "Prepared analytical reports and PowerPoint slide decks designed for executive stakeholder review."
      ]
    },
    {
      id: 3,
      title: "Phase 3: Systems & Governance R&D",
      period: "2026",
      tagline: "Custom Quality Gates & Context Fabric Architecture",
      icon: <ShieldCheck className="w-5 h-5 text-[var(--gold-primary)]" />,
      credentials: [
        "Independent Research & Development",
        "Portfolio pipeline engineering"
      ],
      skills: ["Regex Engine Security", "Pydantic Schema Validation", "pytest Test Coverage", "LLM Context Red-Teaming"],
      details: [
        "Designed VCCF (Verified Code Context Fabric) context index evaluation harnesses checking citation accuracy.",
        "Built automated UK SME data pipelines, processing 2,500 CSV records and quarantining 2,278 corrupt inputs.",
        "Practiced code security audits utilizing Microsoft Presidio for automated PII scanning filters."
      ]
    }
  ];

  return (
    <section 
      id="origin-signal" 
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10"
    >
      {/* Decorative navy glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[var(--navy-deep)]/10 blur-[100px] pointer-events-none" />

      <div className="space-y-12">
        {/* Section Heading */}
        <div className="space-y-4 max-w-3xl">
          <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--gold-primary)]">Chapter 2</p>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[var(--text-primary)]">
            The Origin Signal
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] font-light leading-relaxed">
            Trace the evolution of my analytical skillset from academic principles to simulation contexts and advanced systems validation.
          </p>
        </div>

        {/* Timeline Interaction Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Phase Selector Tabs */}
          <div className="lg:col-span-4 space-y-3" role="tablist" aria-label="Career Phases">
            {phases.map((p) => (
              <button
                key={p.id}
                role="tab"
                aria-selected={activePhase === p.id}
                onClick={() => setActivePhase(p.id)}
                className={`w-full text-left p-5 rounded-lg border transition-all duration-300 focus-visible:ring-1 focus-visible:ring-[var(--gold-soft)] focus-visible:outline-none flex gap-4 items-center ${
                  activePhase === p.id
                    ? 'bg-[var(--surface)] border-[var(--gold-primary)]/40 text-[var(--text-primary)] shadow-md shadow-[var(--navy-deep)]/40'
                    : 'bg-[var(--surface-soft)] border-[var(--border-soft)]/50 text-[var(--text-secondary)] hover:border-[var(--border-soft)] hover:bg-[var(--surface)]'
                }`}
              >
                <div className={`p-2.5 rounded border transition-colors ${
                  activePhase === p.id
                    ? 'bg-[var(--navy-deep)] border-[var(--gold-primary)]/30'
                    : 'bg-[var(--surface)] border-[var(--border-soft)]'
                }`}>
                  {p.icon}
                </div>
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-[var(--text-muted)] block">{p.period}</span>
                  <span className="text-xs sm:text-sm font-semibold block mt-0.5">{p.title.split(': ')[1]}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Active Phase Details Console */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-lg bg-[var(--surface)] border border-[var(--border-soft)] space-y-6 relative overflow-hidden glow-gold-subtle min-h-[380px]">
            {/* Visual gradient accent */}
            <div className="absolute top-0 right-0 w-32 h-[1px] bg-gradient-to-l from-[var(--gold-primary)]/30 to-transparent" />
            <div className="absolute bottom-0 left-0 w-32 h-[1px] bg-gradient-to-r from-[var(--gold-primary)]/30 to-transparent" />

            {phases.map((p) => {
              if (p.id !== activePhase) return null;
              return (
                <div key={p.id} className="space-y-6 animate-fadeIn">
                  {/* Title Header */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--gold-primary)]">{p.period}</span>
                    <h3 className="text-xl sm:text-2xl font-light text-[var(--text-primary)]">{p.title}</h3>
                    <p className="text-xs sm:text-sm font-mono text-[var(--text-muted)]">{p.tagline}</p>
                  </div>

                  {/* Credentials / Affiliation */}
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)]">Credentials / Focus</h4>
                    <div className="flex flex-col gap-2">
                      {p.credentials.map((cred, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[var(--text-secondary)] font-light">
                          <div className="w-1.5 h-1.5 rounded-full bg-[var(--red-soft)]" />
                          {cred}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Skills */}
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)]">Core Methods</h4>
                    <div className="flex flex-wrap gap-2">
                      {p.skills.map((s, idx) => (
                        <span key={idx} className="px-2 py-1 text-[10px] font-mono rounded bg-[var(--surface-soft)] border border-[var(--border-soft)]/50 text-[var(--gold-soft)]">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description Details */}
                  <div className="space-y-2 pt-2 border-t border-[var(--border-soft)]/30">
                    <h4 className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)]">Execution Highlights</h4>
                    <ul className="space-y-3">
                      {p.details.map((d, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)] leading-relaxed font-light">
                          <ArrowRight className="w-3.5 h-3.5 text-[var(--gold-muted)] mt-0.5 flex-shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Visual bottom trace separator */}
      <GoldTraceLine className="absolute bottom-0 left-0" />
    </section>
  );
}
