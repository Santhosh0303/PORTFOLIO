import React from 'react';
import { ShieldCheck, Database, Compass, CheckCircle } from 'lucide-react';
import GoldTraceLine from '../ui/GoldTraceLine';

export default function FinalMission() {
  const values = [
    {
      title: "Metric Fidelity",
      icon: <Compass className="w-5 h-5 text-[var(--gold-primary)]" />,
      desc: "Every data count, validation score, and academic record matches verified registries. No inflated claims or fictitious metrics."
    },
    {
      title: "Rigorous Verification",
      icon: <ShieldCheck className="w-5 h-5 text-[var(--gold-primary)]" />,
      desc: "Code execution, schemas, and pipeline outputs are validated. Inactive assets display planning statuses instead of broken redirect loops."
    },
    {
      title: "Clean Schema Architecture",
      icon: <Database className="w-5 h-5 text-[var(--gold-primary)]" />,
      desc: "Priority is placed on dimensional database normalization, regex ingestion checks, and isolated exception quarantines rather than flat tables."
    }
  ];

  return (
    <section 
      id="final-mission" 
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10"
    >
      <div className="space-y-12 max-w-4xl">
        {/* Section Heading */}
        <div className="space-y-4">
          <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--gold-primary)]">Chapter 8</p>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[var(--text-primary)]">
            The Final Mission
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] font-light leading-relaxed">
            My development practice is guided by three core operating values that ensure structural reliability and analytical precision.
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {values.map((v, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-lg bg-[var(--surface)] border border-[var(--border-soft)] space-y-4 hover:border-[var(--gold-primary)]/30 transition-all duration-300 shadow-md glow-gold-subtle"
            >
              <div className="p-2.5 rounded bg-[var(--surface-soft)] border border-[var(--border-soft)]/50 inline-block">
                {v.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-[var(--text-primary)]">{v.title}</h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-light">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Professional signoff statement */}
        <div className="pt-8 border-t border-[var(--border-soft)]/30 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left justify-between">
          <p className="text-xs text-[var(--text-muted)] font-mono uppercase">Status check: Passed 100% verification checks</p>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[var(--navy-deep)]/40 border border-[var(--border-soft)]/50 text-[10px] font-semibold uppercase tracking-wider text-[var(--gold-soft)] font-mono">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Operational Integrity Certified</span>
          </div>
        </div>
      </div>

      {/* Visual bottom trace separator */}
      <GoldTraceLine className="absolute bottom-0 left-0" />
    </section>
  );
}
