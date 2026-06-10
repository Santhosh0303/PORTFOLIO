import React from 'react';
import { profile } from '../../data';
import SafeLink from '../ui/SafeLink';
import { Mail, Linkedin, FileDown } from 'lucide-react';

export default function ContactCTA() {
  const mailtoLink = { label: "Email", url: `mailto:${profile.email}`, isAvailable: true };
  const linkedinLink = { label: "LinkedIn", url: profile.linkedin, isAvailable: true };

  return (
    <section id="contact" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="bg-slate-900/30 border border-slate-900 rounded-xl p-8 md:p-12 backdrop-blur-sm shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        
        <div className="space-y-4 max-w-xl">
          <h3 className="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">
            Let's Discuss Opportunities
          </h3>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            I am currently seeking Junior/Graduate Data Analyst and BI Specialist roles in the UK. Contact me directly or download targeted CV evidence sheets below.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full lg:w-auto">
          {/* Email */}
          <SafeLink
            linkObj={mailtoLink}
            className="inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-semibold border border-slate-800 bg-slate-950 text-slate-300 hover:text-teal-400 hover:border-slate-800 transition-all focus-visible:outline-none"
          >
            <Mail className="w-4 h-4 mr-2" /> Email Contact
          </SafeLink>

          {/* LinkedIn */}
          <SafeLink
            linkObj={linkedinLink}
            className="inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-semibold border border-slate-800 bg-slate-950 text-slate-300 hover:text-teal-400 hover:border-slate-800 transition-all focus-visible:outline-none"
          >
            <Linkedin className="w-4 h-4 mr-2" /> LinkedIn Profile
          </SafeLink>

          {/* CV Links */}
          <SafeLink
            linkObj={profile.cvLinks.dataAnalyst}
            className="inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-all focus-visible:outline-none"
          >
            <FileDown className="w-4 h-4 mr-2" /> Download CV (Data Analyst)
          </SafeLink>
        </div>
      </div>
    </section>
  );
}
