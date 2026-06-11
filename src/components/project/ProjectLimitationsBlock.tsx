import React from 'react';
import { AlertTriangle, Lightbulb } from 'lucide-react';

interface ProjectLimitationsBlockProps {
  limitations: string[];
  recruiterRelevance: string[];
}

export default function ProjectLimitationsBlock({ limitations, recruiterRelevance }: ProjectLimitationsBlockProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Recruiter Relevance / Key Lessons */}
      <div className="p-4 rounded-xl border border-neutral-900 bg-neutral-900/10 hover:border-gold/20 transition-all duration-300 space-y-3">
        <div className="flex items-center gap-2 text-neutral-300">
          <Lightbulb className="w-4 h-4 text-gold" />
          <h4 className="text-xs font-bold uppercase tracking-wider font-mono">
            Recruiter Relevance & Lessons
          </h4>
        </div>
        <ul className="space-y-1.5 pl-5 list-disc text-neutral-400 text-xs leading-relaxed">
          {recruiterRelevance.map((rel, idx) => (
            <li key={idx}>{rel}</li>
          ))}
        </ul>
      </div>

      {/* Model Limitations / Boundaries */}
      <div className="p-4 rounded-xl border border-neutral-900 bg-neutral-900/10 hover:border-gold/20 transition-all duration-300 space-y-3">
        <div className="flex items-center gap-2 text-neutral-300">
          <AlertTriangle className="w-4 h-4 text-gold-dark" />
          <h4 className="text-xs font-bold uppercase tracking-wider font-mono">
            Limitations & Technical Boundaries
          </h4>
        </div>
        <ul className="space-y-1.5 pl-5 list-disc text-neutral-400 text-xs leading-relaxed">
          {limitations.map((lim, idx) => (
            <li key={idx} className="marker:text-gold-muted">{lim}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
