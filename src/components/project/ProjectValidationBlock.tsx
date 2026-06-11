import React from 'react';
import { CheckCircle2, FileCheck } from 'lucide-react';

interface ProjectValidationBlockProps {
  outputs: string[];
  validation: string[];
}

export default function ProjectValidationBlock({ outputs, validation }: ProjectValidationBlockProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Outputs Block */}
      <div className="p-4 rounded-xl border border-neutral-900 bg-neutral-900/10 hover:border-gold/20 transition-all duration-300 space-y-3">
        <div className="flex items-center gap-2 text-neutral-300">
          <FileCheck className="w-4 h-4 text-gold" />
          <h4 className="text-xs font-bold uppercase tracking-wider font-mono">
            Standard Clean Outputs
          </h4>
        </div>
        <ul className="space-y-1.5 pl-5 list-disc text-neutral-400 text-xs leading-relaxed">
          {outputs.map((output, idx) => (
            <li key={idx}>{output}</li>
          ))}
        </ul>
      </div>

      {/* Validation / QA Checks */}
      <div className="p-4 rounded-xl border border-neutral-900 bg-neutral-900/10 hover:border-gold/20 transition-all duration-300 space-y-3">
        <div className="flex items-center gap-2 text-neutral-300">
          <CheckCircle2 className="w-4 h-4 text-gold" />
          <h4 className="text-xs font-bold uppercase tracking-wider font-mono">
            QA Checks & Model Validation
          </h4>
        </div>
        <ul className="space-y-1.5 pl-5 list-disc text-neutral-400 text-xs leading-relaxed">
          {validation.map((val, idx) => (
            <li key={idx} className="marker:text-gold">{val}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
