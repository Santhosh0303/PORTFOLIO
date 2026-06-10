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
      className="p-6 md:p-8 rounded-2xl border border-slate-900 bg-slate-950/20 backdrop-blur-sm space-y-8 animate-fade-in"
    >
      {/* Header details */}
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-900 pb-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <h3 className="text-xl md:text-2xl font-bold text-slate-100">
              {role.title}
            </h3>
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
              role.category === 'Primary'
                ? 'bg-teal-500/10 border-teal-500/20 text-teal-400'
                : 'bg-slate-500/10 border-slate-800 text-slate-400'
            }`}>
              {role.category} Profile
            </span>
          </div>
          <p className="text-slate-300 text-sm md:text-base font-medium leading-relaxed">
            {role.tagline}
          </p>
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
            {role.description}
          </p>
        </div>
      </div>

      {/* Grid: Evidence Registry & Skills */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-slate-900 pb-8">
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-teal-400" />
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Verified Evidence & Fit
            </h4>
          </div>
          {role.evidence && role.evidence.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {role.evidence.map((ev, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-xl border border-slate-900/80 bg-slate-900/10 space-y-1"
                >
                  <div className="text-xs font-bold text-teal-400">
                    {ev.metric}
                  </div>
                  <p className="text-slate-300 text-xs leading-normal">
                    {ev.relevance}
                  </p>
                  <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider pt-1">
                    Source: {ev.sourceProject.replace(/-/g, ' ')}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-slate-500">No structured evidence registry for this role.</p>
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
