import React from 'react';
import { skills } from '../../data';
import SectionHeading from '../ui/SectionHeading';
import { Check } from 'lucide-react';

export default function SkillsSnapshot() {
  return (
    <section className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 bg-black">
      <SectionHeading 
        title="Technical Capabilities" 
        subtitle="Grouped capabilities spanning database systems, validation pipelines, visual analytics, and model testing."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {skills.map((group) => (
          <div 
            key={group.category}
            className="p-8 rounded-2xl border border-neutral-900 bg-neutral-950/40 backdrop-blur-sm space-y-6 hover:border-gold-muted/30 transition-all duration-300 shadow-lg gold-glow-hover"
          >
            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-400 font-mono">
              {group.category}
            </h4>
            <ul className="space-y-3">
              {group.skills.map((skill) => (
                <li key={skill} className="flex items-center text-sm text-neutral-300">
                  <Check className="w-4 h-4 mr-2.5 text-gold flex-shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
