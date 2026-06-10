import React from 'react';
import { globalMetrics } from '../../data';
import { Award, CheckCircle, Database, LayoutGrid } from 'lucide-react';

export default function ProofMetricsStrip() {
  const getIcon = (label: string) => {
    const lowercase = label.toLowerCase();
    if (lowercase.includes('zones') || lowercase.includes('mapped')) {
      return <Database className="w-5 h-5 text-teal-400" />;
    }
    if (lowercase.includes('pytest') || lowercase.includes('tests')) {
      return <CheckCircle className="w-5 h-5 text-emerald-400" />;
    }
    if (lowercase.includes('rows') || lowercase.includes('loaded')) {
      return <LayoutGrid className="w-5 h-5 text-indigo-400" />;
    }
    return <Award className="w-5 h-5 text-purple-400" />;
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-900/40 border border-slate-900 rounded-xl p-6 backdrop-blur-sm shadow-xl">
        {globalMetrics.map((metric) => (
          <div key={metric.label} className="space-y-2 flex flex-col justify-center p-2">
            <div className="flex items-center gap-2">
              {getIcon(metric.label)}
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {metric.label}
              </span>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-100 font-mono tracking-tight">
                {metric.value}
              </p>
              <p className="text-[10px] text-slate-600 mt-1 font-mono uppercase tracking-widest truncate">
                Source: {metric.source}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
