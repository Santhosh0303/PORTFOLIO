import React from 'react';
import { RoleTarget } from '../../data/types';
import RoleProjectMatches from './RoleProjectMatches';
import RoleSkillsList from './RoleSkillsList';
import RoleCTAGroup from './RoleCTAGroup';
import { Target, Award } from 'lucide-react';

interface RoleEvidencePanelProps {
  role: RoleTarget;
}

export default function RoleEvidencePanel({ role }: RoleEvidencePanelProps) {
  return (
    <div 
      id={`panel-${role.id}`}
      role="tabpanel"
      aria-labelledby={`tab-${role.id}`}
      className="p-6 md:p-8 rounded-2xl border border-neutral-900 bg-neutral-950/40 backdrop-blur-sm space-y-8 animate-fade-in gold-glow"
    >
      {/* Header details */}
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-neutral-900 pb-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <h3 className="text-xl md:text-2xl font-bold text-neutral-100">
              {role.title}
            </h3>
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
              role.category === 'Primary'
                ? 'bg-gold/10 border-gold/20 text-gold'
                : 'bg-neutral-900 border-neutral-800 text-neutral-400'
            }`}>
              {role.category} Profile
            </span>
          </div>
          <p className="text-neutral-300 text-sm md:text-base font-medium leading-relaxed font-mono">
            {role.tagline}
          </p>
          <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
            {role.description}
          </p>
        </div>
      </div>

      {/* Grid: Evidence Registry & Skills */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-neutral-900 pb-8">
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-gold" />
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 font-mono">
              Verified Evidence & Fit
            </h4>
          </div>
          {role.evidence && role.evidence.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {role.evidence.map((ev, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-xl border border-neutral-900 bg-neutral-900/20 space-y-1 hover:border-gold/20 transition-all duration-300"
                >
                  <div className="text-xs font-bold text-gold font-mono">
                    {ev.metric}
                  </div>
                  <p className="text-neutral-300 text-xs leading-normal">
                    {ev.relevance}
                  </p>
                  <div className="text-[10px] text-neutral-500 font-semibold uppercase tracking-wider pt-1 font-mono">
                    Source: {ev.sourceProject.replace(/-/g, ' ')}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-neutral-500">No structured evidence registry for this role.</p>
          )}
        </div>

        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          <RoleSkillsList role={role} />
          <RoleCTAGroup role={role} />
        </div>
      </div>

      {/* Case studies list */}
      <RoleProjectMatches role={role} />
    </div>
  );
}
