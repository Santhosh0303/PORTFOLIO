import React from 'react';
import { RoleTarget } from '../../data/types';
import { profile } from '../../data/profile';
import SafeLink from '../ui/SafeLink';
import { FileDown, Mail } from 'lucide-react';

interface RoleCTAGroupProps {
  role: RoleTarget;
}

export default function RoleCTAGroup({ role }: RoleCTAGroupProps) {
  // Determine which CV variant to link based on role
  const getCvLink = () => {
    switch (role.id) {
      case 'bi-analyst':
        return profile.cvLinks.biAnalyst;
      case 'data-quality-analyst':
      case 'data-governance-analyst':
        return profile.cvLinks.dataQuality;
      case 'data-analyst':
      default:
        return profile.cvLinks.dataAnalyst;
    }
  };

  const cvLink = getCvLink();

  return (
    <div className="flex flex-wrap items-center gap-3">
      <SafeLink 
        linkObj={cvLink}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 border border-teal-500/20 transition-all duration-300 focus-visible:outline-none"
      >
        <FileDown className="w-4 h-4" />
        <span>Download {cvLink.label}</span>
      </SafeLink>
      
      <a 
        href="#contact"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:outline-none"
      >
        <Mail className="w-4 h-4" />
        <span>Get in Touch</span>
      </a>
    </div>
  );
}
