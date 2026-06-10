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
      <div className="p-4 rounded-xl border border-slate-900 bg-slate-900/5 space-y-3">
        <div className="flex items-center gap-2 text-slate-300">
          <FileCheck className="w-4 h-4 text-teal-400" />
          <h4 className="text-xs font-bold uppercase tracking-wider">
            Standard Clean Outputs
          </h4>
        </div>
        <ul className="space-y-1.5 pl-5 list-disc text-slate-400 text-xs leading-relaxed">
          {outputs.map((output, idx) => (
            <li key={idx}>{output}</li>
          ))}
        </ul>
      </div>

      {/* Validation / QA Checks */}
      <div className="p-4 rounded-xl border border-slate-900 bg-slate-900/5 space-y-3">
        <div className="flex items-center gap-2 text-slate-300">
          <CheckCircle2 className="w-4 h-4 text-teal-400" />
          <h4 className="text-xs font-bold uppercase tracking-wider">
            QA Checks & Model Validation
          </h4>
        </div>
        <ul className="space-y-1.5 pl-5 list-disc text-slate-400 text-xs leading-relaxed">
          {validation.map((val, idx) => (
            <li key={idx} className="marker:text-teal-500">{val}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
