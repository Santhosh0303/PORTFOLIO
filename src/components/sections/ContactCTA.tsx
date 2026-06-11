import React from 'react';
import { profile } from '../../data';
import SafeLink from '../ui/SafeLink';
import { Mail, Linkedin, FileDown } from 'lucide-react';

export default function ContactCTA() {
  const mailtoLink = { label: "Email Contact", url: `mailto:${profile.email}`, isAvailable: true };
  const linkedinLink = { label: "LinkedIn Profile", url: profile.linkedin, isAvailable: true };

  return (
    <section id="contact" className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 bg-black">
      <div className="bg-neutral-950 border border-neutral-900 rounded-2xl p-10 md:p-14 backdrop-blur-sm shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 gold-glow">
        
        <div className="space-y-4 max-w-xl">
          <p className="text-xs uppercase tracking-widest text-gold font-semibold font-mono">Let’s connect</p>
          <h3 className="text-3xl font-light tracking-tight text-neutral-100">
            If something here resonated with you… we should talk.
          </h3>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            I am currently seeking Junior/Graduate Data Analyst and BI Specialist roles in the UK. Select a channel to establish contact.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full lg:w-auto">
          {/* Email */}
          <SafeLink
            linkObj={mailtoLink}
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold border border-neutral-800 bg-neutral-900/40 text-neutral-300 hover:text-gold hover:border-gold/30 transition-all focus-visible:outline-none font-mono"
            aria-label="Send email to Sai Santhosh"
          >
            <Mail className="w-4 h-4 mr-2 text-gold" /> Let's connect
          </SafeLink>

          {/* LinkedIn */}
          <SafeLink
            linkObj={linkedinLink}
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold border border-neutral-800 bg-neutral-900/40 text-neutral-300 hover:text-gold hover:border-gold/30 transition-all focus-visible:outline-none font-mono"
            aria-label="Visit LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4 mr-2 text-gold" /> LinkedIn Profile
          </SafeLink>

          {/* CV Links */}
          <SafeLink
            linkObj={profile.cvLinks.dataAnalyst}
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold text-neutral-950 bg-gold hover:bg-gold-light transition-all focus-visible:outline-none font-mono"
            aria-label="Download Data Analyst CV"
          >
            <FileDown className="w-4 h-4 mr-2" /> Download CV (Data Analyst)
          </SafeLink>
        </div>
      </div>
    </section>
  );
}
