import React from 'react';
import { skills } from '../../data';
import SectionHeading from '../ui/SectionHeading';
import { Check } from 'lucide-react';

export default function SkillsSnapshot() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <SectionHeading 
        title="Technical Capabilities" 
        subtitle="Grouped capabilities spanning database systems, validation pipelines, visual analytics, and model testing."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((group) => (
          <div 
            key={group.category}
            className="p-6 rounded-xl border border-slate-900 bg-slate-950/40 backdrop-blur-sm space-y-4 hover:border-slate-800 transition-all shadow-md"
          >
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              {group.category}
            </h4>
            <ul className="space-y-2.5">
              {group.skills.map((skill) => (
                <li key={skill} className="flex items-center text-sm text-slate-300">
                  <Check className="w-4 h-4 mr-2.5 text-teal-400 flex-shrink-0" />
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
