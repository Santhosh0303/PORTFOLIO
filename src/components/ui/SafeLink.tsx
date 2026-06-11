import React, { useState } from 'react';
import { ProjectLink } from '../../data/types';

interface SafeLinkProps {
  linkObj?: ProjectLink;
  children: React.ReactNode;
  className?: string;
}

export default function SafeLink({ linkObj, children, className = "" }: SafeLinkProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  if (!linkObj) {
    return <span className={className}>{children}</span>;
  }

  if (!linkObj.isAvailable) {
    return (
      <div 
        className="relative inline-block"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <button
          type="button"
          disabled
          className={`${className} opacity-50 cursor-not-allowed select-none`}
          aria-describedby={`tooltip-${linkObj.label.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {children}
        </button>
        {showTooltip && (
          <div 
            id={`tooltip-${linkObj.label.toLowerCase().replace(/\s+/g, '-')}`}
            className="absolute z-10 bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 text-[10px] font-mono tracking-wider uppercase bg-[var(--surface)] border border-[var(--border-soft)] text-[var(--text-secondary)] rounded shadow-xl whitespace-nowrap"
            role="tooltip"
          >
            {linkObj.plannedPlaceholder || "Planned / coming soon"}
          </div>
        )}
      </div>
    );
  }

  const isExternal = linkObj.url.startsWith('http');
  return (
    <a
      href={linkObj.url}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`${className} focus-visible:ring-2 focus-visible:ring-[var(--gold-soft)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)] focus-visible:outline-none`}
    >
      {children}
    </a>
  );
}
