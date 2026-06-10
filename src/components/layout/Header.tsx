import React, { useState } from 'react';
import { profile, navigationItems } from '../../data';
import { Menu, X, MapPin } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <span className="text-sm font-bold tracking-tight text-slate-100 uppercase sm:text-base">
              {profile.name}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full border border-slate-800 bg-slate-900 text-slate-400">
              <MapPin className="w-3 h-3 text-teal-400" /> {profile.location}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" aria-label="Global navigation">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.path}
                className="text-xs font-semibold text-slate-400 hover:text-teal-400 transition-colors uppercase tracking-wider focus-visible:outline-none focus-visible:text-teal-400"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-teal-400 focus-visible:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-semibold text-slate-400 hover:text-teal-400 hover:bg-slate-900 transition-all uppercase tracking-wider"
              >
                {item.label}
              </a>
            ))}
            <div className="px-3 py-2 flex items-center gap-2 text-xs text-slate-500 border-t border-slate-900 mt-2">
              <MapPin className="w-3 h-3 text-teal-400" /> {profile.location}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
