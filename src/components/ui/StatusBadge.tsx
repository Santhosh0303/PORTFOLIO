import React from 'react';
import { ProjectStatus } from '../../data/types';

interface StatusBadgeProps {
  status: ProjectStatus;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const getStyles = () => {
    switch (status) {
      case 'Academic Dissertation Project':
        return 'bg-blue-500/10 border-blue-500/20 text-blue-400';
      case 'Portfolio Project':
        return 'bg-teal-500/10 border-teal-500/20 text-teal-400';
      case 'MSc / Academic BI Project':
        return 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400';
      case 'Independent R&D Project':
        return 'bg-purple-500/10 border-purple-500/20 text-purple-400';
      case 'Virtual Simulations':
        return 'bg-amber-500/10 border-amber-500/20 text-amber-400';
      default:
        return 'bg-slate-500/10 border-slate-500/20 text-slate-400';
    }
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getStyles()}`}>
      {status}
    </span>
  );
}
