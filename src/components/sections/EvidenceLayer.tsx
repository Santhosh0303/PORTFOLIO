import React, { useState } from 'react';
import { proofArtifacts } from '../../data/proofArtifacts';
import { FileText, Database, ShieldAlert, CheckSquare, Download, AlertCircle } from 'lucide-react';
import GoldTraceLine from '../ui/GoldTraceLine';

export default function EvidenceLayer() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const getIcon = (type: string) => {
    switch (type) {
      case 'quality_report':
        return <ShieldAlert className="w-5 h-5 text-[var(--gold-primary)]" />;
      case 'schema':
        return <Database className="w-5 h-5 text-[var(--gold-primary)]" />;
      case 'eval_report':
        return <CheckSquare className="w-5 h-5 text-[var(--gold-primary)]" />;
      default:
        return <FileText className="w-5 h-5 text-[var(--gold-primary)]" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'quality_report':
        return 'QA Quality Audit';
      case 'schema':
        return 'SQL Data Schema';
      case 'eval_report':
        return 'Evaluation Report';
      default:
        return 'Technical Asset';
    }
  };

  return (
    <section 
      id="evidence-layer" 
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10"
    >
      <div className="space-y-12">
        {/* Section Heading */}
        <div className="space-y-4 max-w-3xl">
          <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--gold-primary)]">Chapter 4</p>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[var(--text-primary)]">
            The Evidence Layer
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] font-light leading-relaxed">
            A registry of validation scorecards, schema scripts, and QA quality audits mapping code compliance. These assets are planned for upload to public repositories.
          </p>
        </div>

        {/* Evidence Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {proofArtifacts.map((art) => (
            <div
              key={art.id}
              className="p-6 rounded-lg bg-[var(--surface)] border border-[var(--border-soft)] flex flex-col justify-between space-y-6 relative overflow-hidden transition-all duration-300 hover:border-[var(--gold-primary)]/30 glow-gold-subtle"
              onMouseEnter={() => setHoveredId(art.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Card top details */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded bg-[var(--surface-soft)] border border-[var(--border-soft)]/50">
                      {getIcon(art.type)}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--gold-soft)]">
                      {getTypeLabel(art.type)}
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-[var(--text-muted)] uppercase">ID: {art.id}</span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-light text-[var(--text-primary)]">{art.name}</h3>
                  <code className="text-[10px] text-[var(--gold-muted)] font-mono block break-all bg-[var(--surface-soft)]/40 p-1.5 rounded border border-[var(--border-soft)]/20">
                    {art.filePath}
                  </code>
                </div>
              </div>

              {/* Status and Action block */}
              <div className="flex items-center justify-between pt-4 border-t border-[var(--border-soft)]/30">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-[var(--text-muted)]">
                  <AlertCircle className="w-3.5 h-3.5 text-[var(--gold-muted)]" />
                  <span>Evidence planned</span>
                </div>

                <div className="relative">
                  <button
                    disabled
                    type="button"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[var(--surface-soft)] border border-[var(--border-soft)]/50 text-[10px] font-semibold uppercase tracking-wider text-[var(--text-muted)] cursor-not-allowed select-none"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>View Asset</span>
                  </button>

                  {hoveredId === art.id && (
                    <div className="absolute z-20 bottom-full right-0 mb-2 px-3 py-1.5 text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-300 rounded shadow-xl whitespace-nowrap">
                      Available after final upload
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visual bottom trace separator */}
      <GoldTraceLine className="absolute bottom-0 left-0" />
    </section>
  );
}
