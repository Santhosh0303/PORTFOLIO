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
          className="p-3.5 rounded-xl border border-neutral-900 bg-neutral-900/20 hover:border-gold/20 transition-all duration-300"
        >
          <div className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold font-mono">
            {metric.label}
          </div>
          <div className="text-sm md:text-base font-bold text-gold mt-1 bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent inline-block font-mono">
            {metric.value}
          </div>
        </div>
      ))}
    </div>
  );
}
