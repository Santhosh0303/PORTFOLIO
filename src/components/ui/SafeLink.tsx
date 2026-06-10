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
            className="absolute z-10 bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 text-xs font-medium bg-slate-900 border border-slate-800 text-slate-300 rounded-lg shadow-xl whitespace-nowrap"
            role="tooltip"
          >
            {linkObj.plannedPlaceholder || "Planned / coming soon"}
          </div>
        )}
      </div>
    );
  }

  return (
    <a
      href={linkObj.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:outline-none`}
    >
      {children}
    </a>
  );
}
