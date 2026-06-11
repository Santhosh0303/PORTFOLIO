import React from 'react';
import { profile, ctaItems } from '../../data';
import SafeLink from '../ui/SafeLink';
import { Github, Linkedin, ArrowRight, FileText } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="py-28 sm:py-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-[70vh] relative z-10 bg-black">
      <div className="max-w-4xl space-y-8 text-left">
        {/* Name / Location tag */}
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-gold bg-gold/10 px-3 py-1.5 rounded-full border border-gold/20 select-none">
          <span>Available for UK Analyst Roles</span>
        </div>

        {/* Title / Identity */}
        <div className="space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl text-neutral-100 font-sans">
            {profile.name}
          </h1>
          <p className="text-2xl font-light sm:text-3xl text-gold font-sans tracking-wide">
            {profile.title}
          </p>
        </div>

        {/* Tagline & Promise */}
        <div className="space-y-6 max-w-3xl">
          <p className="text-neutral-300 font-light text-lg sm:text-xl leading-relaxed">
            {profile.promise}
          </p>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-mono">
            {profile.tagline}
          </p>
        </div>

        {/* Primary CTAs & Socials */}
        <div className="flex flex-wrap items-center gap-6 pt-6">
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
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold text-neutral-950 bg-gold hover:bg-gold-light transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  {cta.label} <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              );
            }

            return (
              <SafeLink
                key={cta.label}
                linkObj={linkObj}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold border border-neutral-800 bg-neutral-900/60 text-neutral-300 hover:text-gold hover:border-gold/30 transition-all focus-visible:outline-none"
              >
                <FileText className="w-4 h-4 mr-2 text-gold" /> {cta.label}
              </SafeLink>
            );
          })}

          <div className="flex items-center gap-4 border-l border-neutral-800 pl-6 h-10 ml-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-neutral-400 hover:text-gold hover:bg-neutral-900/60 rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-neutral-400 hover:text-gold hover:bg-neutral-900/60 rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
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
