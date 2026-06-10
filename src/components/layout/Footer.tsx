import React from 'react';
import { profile } from '../../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-xs sm:text-sm">
        <div>
          &copy; {currentYear} {profile.name}. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="#home" className="hover:text-teal-400 transition-colors uppercase tracking-wider text-xs font-semibold focus-visible:outline-none">Back to top</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors uppercase tracking-wider text-xs font-semibold focus-visible:outline-none">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors uppercase tracking-wider text-xs font-semibold focus-visible:outline-none">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
