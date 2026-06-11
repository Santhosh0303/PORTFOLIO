import React from 'react';
import { Database, GitCommit, Cpu } from 'lucide-react';

interface ProjectMethodBlockProps {
  inputs: string[];
  method: string[];
  tools: string[];
}

export default function ProjectMethodBlock({ inputs, method, tools }: ProjectMethodBlockProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Inputs / Dataset */}
      <div className="lg:col-span-4 space-y-3">
        <div className="flex items-center gap-2 text-neutral-300">
          <Database className="w-4 h-4 text-gold" />
          <h4 className="text-xs font-bold uppercase tracking-wider font-mono">
            Dataset / Inputs
          </h4>
        </div>
        <ul className="space-y-1.5 pl-5 list-disc text-neutral-400 text-xs leading-relaxed">
          {inputs.map((input, idx) => (
            <li key={idx}>{input}</li>
          ))}
        </ul>
      </div>

      {/* Methodology chronological steps */}
      <div className="lg:col-span-5 space-y-3">
        <div className="flex items-center gap-2 text-neutral-300">
          <GitCommit className="w-4 h-4 text-gold" />
          <h4 className="text-xs font-bold uppercase tracking-wider font-mono">
            Methodology & Pipeline
          </h4>
        </div>
        <ol className="space-y-2 pl-4 list-decimal text-neutral-400 text-xs leading-relaxed">
          {method.map((step, idx) => (
            <li key={idx} className="pl-1">
              {step}
            </li>
          ))}
        </ol>
      </div>

      {/* Tools stack */}
      <div className="lg:col-span-3 space-y-3">
        <div className="flex items-center gap-2 text-neutral-300">
          <Cpu className="w-4 h-4 text-gold" />
          <h4 className="text-xs font-bold uppercase tracking-wider font-mono">
            Tools Utilized
          </h4>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {tools.map((tool) => (
            <span
              key={tool}
              className="text-[10px] font-mono px-2.5 py-1 rounded bg-neutral-900 border border-neutral-900 text-neutral-300 hover:border-gold/20 transition-all duration-300"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
