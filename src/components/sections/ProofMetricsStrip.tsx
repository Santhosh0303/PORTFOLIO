import React from 'react';
import { globalMetrics } from '../../data';
import { Award, CheckCircle, Database, LayoutGrid } from 'lucide-react';

export default function ProofMetricsStrip() {
  const getIcon = (label: string) => {
    const lowercase = label.toLowerCase();
    if (lowercase.includes('zones') || lowercase.includes('mapped')) {
      return <Database className="w-5 h-5 text-gold" />;
    }
    if (lowercase.includes('pytest') || lowercase.includes('tests')) {
      return <CheckCircle className="w-5 h-5 text-gold-light" />;
    }
    if (lowercase.includes('rows') || lowercase.includes('loaded')) {
      return <LayoutGrid className="w-5 h-5 text-gold-dark" />;
    }
    return <Award className="w-5 h-5 text-gold" />;
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 bg-black">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-neutral-950 border border-neutral-900 rounded-xl p-8 backdrop-blur-sm shadow-xl gold-glow">
        {globalMetrics.map((metric) => (
          <div key={metric.label} className="space-y-3 flex flex-col justify-center p-2">
            <div className="flex items-center gap-2">
              {getIcon(metric.label)}
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 font-mono">
                {metric.label}
              </span>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-neutral-100 font-mono tracking-tight">
                {metric.value}
              </p>
              <p className="text-[10px] text-neutral-600 mt-1.5 font-mono uppercase tracking-widest truncate">
                Source: {metric.source}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
