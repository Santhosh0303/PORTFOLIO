import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Target, Lock } from 'lucide-react';

export default function RoleSelectorPlaceholder() {
  return (
    <section id="roles" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="p-8 rounded-xl border border-slate-900 bg-slate-950/20 backdrop-blur-sm relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-teal-500/5 rounded-full blur-[60px]" />
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-teal-400 bg-teal-500/10 px-2.5 py-1 rounded border border-teal-500/20">
              <Lock className="w-3.5 h-3.5" /> Planned for Phase 5
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <Target className="w-5 h-5 text-teal-400" /> Interactive Role Selector
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                A custom filter mapping Sai's verified portfolio evidence directly against target recruitment profiles (e.g. Data Quality Analyst, BI Analyst, Reporting Specialist).
              </p>
            </div>
          </div>

          <div className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-500 border border-slate-900 bg-slate-950 select-none">
            Selector Locked
          </div>
        </div>
      </div>
    </section>
  );
}
