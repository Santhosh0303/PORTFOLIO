import React from 'react';
import { profile } from '../../data';
import SafeLink from '../ui/SafeLink';
import { Mail, Linkedin, FileDown } from 'lucide-react';

export default function ContactCTA() {
  const mailtoLink = { label: "Email Contact", url: `mailto:${profile.email}`, isAvailable: true };
  const linkedinLink = { label: "LinkedIn Profile", url: profile.linkedin, isAvailable: true };

  return (
    <section id="contact" className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 bg-[var(--bg-primary)]">
      <div className="bg-[var(--surface)] border border-[var(--border-soft)] rounded p-10 md:p-14 backdrop-blur-sm shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 glow-gold-subtle">
        
        <div className="space-y-4 max-w-xl">
          <p className="text-xs uppercase tracking-widest text-[var(--gold-primary)] font-semibold font-mono">Let’s connect</p>
          <h3 className="text-3xl font-light tracking-tight text-[var(--text-primary)]">
            If something here resonated with you… we should talk.
          </h3>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
            I am currently seeking Junior/Graduate Data Analyst and BI Specialist roles in the UK. Select a channel to establish contact.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full lg:w-auto">
          {/* Email */}
          <SafeLink
            linkObj={mailtoLink}
            className="inline-flex items-center justify-center px-6 py-3.5 rounded text-xs font-semibold uppercase tracking-wider border border-[var(--border-soft)] bg-[var(--surface)] text-[var(--text-primary)] hover:border-[var(--gold-primary)]/40 hover:text-[var(--gold-primary)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-soft)]"
            aria-label="Send email to Sai Santhosh"
          >
            <Mail className="w-4 h-4 mr-2 text-[var(--gold-primary)]" /> Let's connect
          </SafeLink>

          {/* LinkedIn */}
          <SafeLink
            linkObj={linkedinLink}
            className="inline-flex items-center justify-center px-6 py-3.5 rounded text-xs font-semibold uppercase tracking-wider border border-[var(--border-soft)] bg-[var(--surface)] text-[var(--text-primary)] hover:border-[var(--gold-primary)]/40 hover:text-[var(--gold-primary)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-soft)]"
            aria-label="Visit LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4 mr-2 text-[var(--gold-primary)]" /> LinkedIn Profile
          </SafeLink>

          {/* CV Links */}
          <SafeLink
            linkObj={profile.cvLinks.dataAnalyst}
            className="inline-flex items-center justify-center px-6 py-3.5 rounded text-xs font-semibold uppercase tracking-wider border border-[var(--border-soft)] bg-[var(--gold-primary)] text-neutral-950 hover:bg-[var(--gold-soft)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-soft)]"
            aria-label="Download Data Analyst CV"
          >
            <FileDown className="w-4 h-4 mr-2" /> Download CV (Data Analyst)
          </SafeLink>
        </div>
      </div>
    </section>
  );
}
