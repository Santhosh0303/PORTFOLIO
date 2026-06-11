import React, { useState } from 'react';
import { profile, navigationItems } from '../../data';
import { Menu, X, MapPin } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--bg-primary)]/90 border-b border-[var(--border-soft)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <span className="text-sm font-semibold tracking-wider text-[var(--text-primary)] uppercase sm:text-base font-mono">
              {profile.name}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[10px] px-2.5 py-0.5 rounded border border-[var(--border-soft)]/50 bg-[var(--surface)] text-[var(--text-secondary)] font-mono">
              <MapPin className="w-3 h-3 text-[var(--gold-primary)]" /> {profile.location}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" aria-label="Global navigation">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.path}
                className="text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--gold-soft)] transition-colors uppercase tracking-wider focus-visible:outline-none focus-visible:text-[var(--gold-soft)]"
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
              className="inline-flex items-center justify-center p-2 rounded text-[var(--text-secondary)] hover:text-[var(--gold-soft)] focus-visible:outline-none"
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
        <div className="md:hidden bg-[var(--bg-primary)] border-b border-[var(--border-soft)]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--gold-soft)] hover:bg-[var(--surface)] transition-all uppercase tracking-wider"
              >
                {item.label}
              </a>
            ))}
            <div className="px-3 py-2 flex items-center gap-2 text-xs text-[var(--text-muted)] border-t border-[var(--border-soft)] mt-2">
              <MapPin className="w-3 h-3 text-[var(--gold-primary)]" /> {profile.location}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
