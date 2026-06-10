import React from 'react';
import { profile, ctaItems } from '../../data';
import SafeLink from '../ui/SafeLink';
import { Github, Linkedin, ArrowRight, FileText } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-[60vh] relative z-10">
      <div className="max-w-3xl space-y-6">
        {/* Name / Location tag */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-teal-400 bg-teal-500/10 px-3 py-1.5 rounded-full border border-teal-500/20">
          <span>Available for UK Roles</span>
        </div>

        {/* Title / Identity */}
        <div className="space-y-3">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-slate-100">
            {profile.name}
          </h1>
          <p className="text-2xl font-bold sm:text-3xl text-teal-400">
            {profile.title}
          </p>
        </div>

        {/* Tagline & Promise */}
        <div className="space-y-4 max-w-2xl">
          <p className="text-slate-300 font-medium text-lg leading-relaxed">
            {profile.promise}
          </p>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {profile.tagline}
          </p>
        </div>

        {/* Primary CTAs & Socials */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          {ctaItems.map((cta) => {
            const isPrimary = cta.primary;
            const isCv = cta.label.toLowerCase().includes('cv');
            // Mapped target
            const linkObj = isCv 
              ? profile.cvLinks.dataAnalyst 
              : { label: cta.label, url: cta.action, isAvailable: true };

            if (isPrimary) {
              return (
                <a
                  key={cta.label}
                  href={cta.action}
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  {cta.label} <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              );
            }

            return (
              <SafeLink
                key={cta.label}
                linkObj={linkObj}
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-semibold border border-slate-800 bg-slate-900 text-slate-300 hover:text-teal-400 hover:border-slate-700 transition-all focus-visible:outline-none"
              >
                <FileText className="w-4 h-4 mr-2 text-teal-400" /> {cta.label}
              </SafeLink>
            );
          })}

          <div className="flex items-center gap-3 border-l border-slate-800 pl-4 h-10 ml-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-teal-400 hover:bg-slate-900 rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-teal-400 hover:bg-slate-900 rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
