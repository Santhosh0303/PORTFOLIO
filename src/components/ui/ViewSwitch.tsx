import React from 'react';

interface ViewSwitchOption {
  id: string;
  label: string;
}

interface ViewSwitchProps {
  options: ViewSwitchOption[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
}

export default function ViewSwitch({ options, activeId, onChange, className = "" }: ViewSwitchProps) {
  return (
    <div 
      className={`inline-flex rounded-lg p-1 bg-[var(--surface-soft)] border border-[var(--border-soft)] ${className}`} 
      role="tablist"
    >
      {options.map((opt) => (
        <button
          key={opt.id}
          role="tab"
          aria-selected={activeId === opt.id}
          onClick={() => onChange(opt.id)}
          className={`px-4 py-2 rounded-md text-xs font-semibold tracking-wider uppercase transition-all duration-200 font-mono focus-visible:ring-1 focus-visible:ring-[var(--gold-soft)] focus-visible:outline-none ${
            activeId === opt.id
              ? 'bg-[var(--surface)] border border-[var(--border-soft)] text-[var(--gold-soft)] font-medium shadow-md'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-transparent'
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
