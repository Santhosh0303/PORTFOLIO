import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { HelpCircle, ShieldCheck, Database, PenTool } from 'lucide-react';

export default function WorkPrinciples() {
  const steps = [
    {
      title: "I question defaults.",
      icon: <HelpCircle className="w-5 h-5 text-gold" />,
      desc: "Every configuration, framework, and pipeline parameter is examined to ensure it aligns with security guidelines and project scope."
    },
    {
      title: "I validate before I claim.",
      icon: <ShieldCheck className="w-5 h-5 text-gold-light" />,
      desc: "Authenticity and test coverage are non-negotiable. Claims are verified locally and in CI before staging code."
    },
    {
      title: "I care about evidence, not just layout.",
      icon: <Database className="w-5 h-5 text-gold-dark" />,
      desc: "Clean database marts, schema verification layers, and Parquet data pipelines hold more weight than aesthetic placeholders."
    },
    {
      title: "I redesign until it feels right and works clearly.",
      icon: <PenTool className="w-5 h-5 text-gold" />,
      desc: "Iterative testing, typography size audits, and responsive layout spacing are continuously polished to satisfy recruiters."
    }
  ];

  return (
    <section className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 bg-black">
      <SectionHeading 
        title="How I Approach Things" 
        subtitle="Thinking blocks and principles guiding my development, pipeline engineering, and data analysis work."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {steps.map((step) => (
          <div 
            key={step.title}
            className="p-6 rounded-2xl border border-neutral-900 bg-neutral-950/40 backdrop-blur-sm space-y-6 hover:border-gold-muted/30 transition-all duration-300 shadow-lg gold-glow-hover"
          >
            <div className="inline-flex p-3 rounded-lg bg-neutral-900 border border-neutral-800">
              {step.icon}
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-neutral-100 font-sans">
                {step.title}
              </h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
