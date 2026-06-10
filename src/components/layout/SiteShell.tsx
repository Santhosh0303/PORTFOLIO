import React from 'react';

interface SiteShellProps {
  children: React.ReactNode;
}

export default function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans antialiased selection:bg-teal-500/30 selection:text-teal-200">
      {/* Background decoration elements */}
      <div className="absolute inset-0 bg-radial from-slate-900 via-slate-950 to-slate-950 pointer-events-none z-0" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none z-0" />
      
      <div className="relative z-10 flex flex-col flex-grow">
        {children}
      </div>
    </div>
  );
}
