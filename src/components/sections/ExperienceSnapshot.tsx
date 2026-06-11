import React from 'react';
import { experience } from '../../data/experience';
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';
import GoldTraceLine from '../ui/GoldTraceLine';

export default function ExperienceSnapshot() {
  return (
    <section 
      id="experience-snapshot" 
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 bg-black"
    >
      <div className="space-y-12">
        {/* Section Heading */}
        <div className="space-y-4 max-w-3xl">
          <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--gold-primary)]">Chapter 7</p>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[var(--text-primary)]">
            Experience Snapshot
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] font-light leading-relaxed">
            Verified academic credentials and voluntary/community analytics roles forming my data engineering and analytical foundations.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-[var(--border-soft)] ml-4 sm:ml-6 space-y-12 max-w-4xl">
          {experience.map((item) => (
            <div key={item.id} className="relative pl-8 sm:pl-10 group">
              {/* Timeline bubble icon */}
              <div className="absolute -left-5 top-0.5 p-2 rounded-full bg-[var(--surface-soft)] border border-[var(--border-soft)] group-hover:border-[var(--gold-primary)]/40 transition-colors">
                {item.type === 'academic' ? (
                  <GraduationCap className="w-4 h-4 text-[var(--gold-primary)]" />
                ) : (
                  <Award className="w-4 h-4 text-[var(--gold-primary)]" />
                )}
              </div>

              {/* Card Container */}
              <div className="p-6 rounded-lg bg-[var(--surface)] border border-[var(--border-soft)] space-y-4 glow-gold-subtle relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-[1px] bg-gradient-to-l from-[var(--gold-primary)]/20 to-transparent" />
                
                {/* Header info */}
                <div className="space-y-1.5">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)]">{item.role}</h3>
                    <div className="flex items-center gap-1 text-[10px] font-mono text-[var(--gold-soft)] bg-[var(--navy-deep)]/40 px-2 py-0.5 rounded border border-[var(--border-soft)]/40">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-muted)] font-mono">
                    <span>{item.organization}</span>
                    <span className="text-[var(--border-soft)]">&middot;</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Details list */}
                <ul className="space-y-2 pt-2 border-t border-[var(--border-soft)]/20">
                  {item.description.map((desc, idx) => (
                    <li key={idx} className="text-xs text-[var(--text-secondary)] leading-relaxed font-light flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold-muted)] mt-1.5 flex-shrink-0" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visual bottom trace separator */}
      <GoldTraceLine className="absolute bottom-0 left-0" />
    </section>
  );
}
