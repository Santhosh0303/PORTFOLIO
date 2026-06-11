import React from 'react';

interface EvidenceChipProps {
  label: string;
  value: string;
  source?: string;
  className?: string;
}

export default function EvidenceChip({ label, value, source, className = "" }: EvidenceChipProps) {
  return (
    <div 
      className={`inline-flex flex-col px-3 py-1.5 rounded bg-[var(--surface)] border border-[var(--border-soft)] text-left font-mono text-[10px] sm:text-xs tracking-tight ${className}`}
      title={source ? `Source: ${source}` : undefined}
    >
      <span className="text-[9px] uppercase tracking-wider text-[var(--text-muted)]">{label}</span>
      <span className="font-semibold text-[var(--gold-soft)] mt-0.5">{value}</span>
    </div>
  );
}
