import React from 'react';

interface SiteShellProps {
  children: React.ReactNode;
}

export default function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-secondary)] flex flex-col font-sans antialiased selection:bg-[var(--gold-primary)]/30 selection:text-[var(--gold-soft)]">
      {/* Skip to Content link for keyboard accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Background decoration elements conforming to Obsidian Signal */}
      <div className="absolute inset-0 grid-obsidian pointer-events-none z-0" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[var(--navy-deep)]/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[var(--red-accent)]/3 rounded-full blur-[140px] pointer-events-none z-0" />
      
      <div className="relative z-10 flex flex-col flex-grow">
        {children}
      </div>
    </div>
  );
}
