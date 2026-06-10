import React from 'react';
import { ProjectMetric } from '../../data/types';

interface ProjectMetricsGridProps {
  metrics: ProjectMetric[];
}

export default function ProjectMetricsGrid({ metrics }: ProjectMetricsGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
      {metrics.map((metric, idx) => (
        <div 
          key={idx} 
          className="p-3.5 rounded-xl border border-slate-900 bg-slate-900/10 hover:border-slate-800 transition-colors"
        >
          <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
            {metric.label}
          </div>
          <div className="text-sm md:text-base font-bold text-teal-400 mt-1 bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent inline-block">
            {metric.value}
          </div>
        </div>
      ))}
    </div>
  );
}
