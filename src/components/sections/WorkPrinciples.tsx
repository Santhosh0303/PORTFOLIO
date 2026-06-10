import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Import, Search, ShieldCheck, AreaChart } from 'lucide-react';

export default function WorkPrinciples() {
  const steps = [
    {
      title: "1. Ingestion",
      icon: <Import className="w-5 h-5 text-teal-400" />,
      desc: "Structured data pipelines read transaction logs, CSV files, and network nodes cleanly using Parquet columnar storage."
    },
    {
      title: "2. Schema & PII Validation",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      desc: "Strict quarantine rules filter corrupt syntax. Microsoft Presidio flags PII to preserve data privacy at the gate."
    },
    {
      title: "3. ML & BI Modeling",
      icon: <Search className="w-5 h-5 text-indigo-400" />,
      desc: "Relational star-schema marts align transactional data, while scikit-learn models evaluate accessibility indexes."
    },
    {
      title: "4. Decision Support",
      icon: <AreaChart className="w-5 h-5 text-purple-400" />,
      desc: "Power BI dashboards map scenario candidates, providing planners and stakeholders with validated support."
    }
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <SectionHeading 
        title="Evidence-Led Workflow" 
        subtitle="A reproducible data engineering and analytics framework designed to secure data integrity at every step."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => (
          <div 
            key={step.title}
            className="p-5 rounded-xl border border-slate-900 bg-slate-950/40 backdrop-blur-sm space-y-4 hover:border-slate-800 transition-all shadow-md relative"
          >
            <div className="inline-flex p-2 rounded-lg bg-slate-900 border border-slate-800">
              {step.icon}
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-slate-100">
                {step.title}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
