import React from 'react';
import { profile } from '../../data/profile';
import { ShieldCheck, MapPin, ArrowUpRight, GraduationCap, Briefcase } from 'lucide-react';
import GoldTraceLine from '../ui/GoldTraceLine';

export default function OpeningSignal() {
  return (
    <section 
      id="opening-signal" 
      className="relative min-h-[90vh] flex flex-col justify-center py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 overflow-hidden"
    >
      {/* Decorative background aura */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-[var(--navy-deep)]/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-[var(--red-accent)]/5 blur-[100px] pointer-events-none" />

      <div className="space-y-8 max-w-4xl relative z-10">
        {/* Availability status beacon */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded bg-[var(--surface)] border border-[var(--border-soft)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-signal-pulse absolute inline-flex h-full w-full rounded-full bg-[var(--red-soft)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--red-accent)]"></span>
          </span>
          <span className="text-[10px] font-mono tracking-wider uppercase text-[var(--text-secondary)]">
            Signal Active &middot; seeking opportunities in the uk
          </span>
        </div>

        {/* Identity & Role Sub-headers */}
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-[var(--text-primary)]">
            {profile.name}
          </h1>
          <p className="text-sm sm:text-base font-mono uppercase tracking-widest text-[var(--gold-primary)]">
            Data Analyst &middot; System Builder &middot; Context Intelligence Explorer
          </p>
        </div>

        {/* Major Systems Thesis */}
        <h2 className="text-2xl sm:text-4xl font-light leading-snug tracking-tight text-[var(--text-primary)] max-w-3xl">
          Building verified systems for data, automation, and decision intelligence.
        </h2>

        {/* Subtext */}
        <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed max-w-2xl font-light">
          A portfolio of geospatial analytics, ML pipelines, BI systems, and verified context engines &mdash; designed with evidence, clarity, and execution depth.
        </p>

        {/* Credentials Micro-Strip */}
        <div className="pt-4 border-t border-[var(--border-soft)] max-w-3xl">
          <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] mb-3">Verified Academic & Professional Credentials</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-start gap-2.5 p-3 rounded bg-[var(--surface)] border border-[var(--border-soft)]/50">
              <GraduationCap className="w-4 h-4 text-[var(--gold-primary)] mt-0.5 flex-shrink-0" />
              <div className="text-xs">
                <p className="font-semibold text-[var(--text-primary)]">MSc Data Analytics</p>
                <p className="text-[var(--text-secondary)] text-[10px] mt-0.5">De Montfort University</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded bg-[var(--surface)] border border-[var(--border-soft)]/50">
              <GraduationCap className="w-4 h-4 text-[var(--gold-primary)] mt-0.5 flex-shrink-0" />
              <div className="text-xs">
                <p className="font-semibold text-[var(--text-primary)]">BE Computer Science</p>
                <p className="text-[var(--text-secondary)] text-[10px] mt-0.5">Anurag Group of Institutions</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded bg-[var(--surface)] border border-[var(--border-soft)]/50">
              <Briefcase className="w-4 h-4 text-[var(--gold-primary)] mt-0.5 flex-shrink-0" />
              <div className="text-xs">
                <p className="font-semibold text-[var(--text-primary)]">Virtual Simulations</p>
                <p className="text-[var(--text-secondary)] text-[10px] mt-0.5">KPMG UK & British Airways</p>
              </div>
            </div>
          </div>
        </div>

        {/* Primary CTAs */}
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="#systems-built"
            className="inline-flex items-center px-5 py-3 rounded text-xs font-semibold uppercase tracking-wider border border-[var(--border-soft)] bg-[var(--gold-primary)] text-neutral-950 hover:bg-[var(--gold-soft)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-soft)]"
          >
            Explore Systems <ArrowUpRight className="w-4 h-4 ml-1.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-3 rounded text-xs font-semibold uppercase tracking-wider border border-[var(--border-soft)] bg-[var(--surface)] text-[var(--text-primary)] hover:border-[var(--gold-primary)]/40 hover:text-[var(--gold-primary)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-soft)]"
          >
            Establish Contact
          </a>
        </div>
      </div>
      
      {/* Visual bottom trace separator */}
      <GoldTraceLine className="absolute bottom-0 left-0" />
    </section>
  );
}
