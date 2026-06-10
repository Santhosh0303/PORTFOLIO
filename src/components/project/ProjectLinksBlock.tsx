import React from 'react';
import { Project } from '../../data/types';
import SafeLink from '../ui/SafeLink';
import { Github, ExternalLink, Video, FileText } from 'lucide-react';

interface ProjectLinksBlockProps {
  links: Project['links'];
}

export default function ProjectLinksBlock({ links }: ProjectLinksBlockProps) {
  const hasLinks = Object.values(links).some(link => link !== undefined);

  if (!hasLinks) {
    return (
      <div className="text-xs text-slate-500 italic">
        Evidence documents planned
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      {links.github && (
        <SafeLink
          linkObj={links.github}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-300 hover:text-teal-400 hover:bg-slate-800/80 transition-all duration-300 focus-visible:outline-none"
        >
          <Github className="w-3.5 h-3.5" />
          <span>{links.github.label || 'Code Repository'}</span>
        </SafeLink>
      )}

      {links.demo && (
        <SafeLink
          linkObj={links.demo}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-teal-500/10 border border-teal-500/20 text-teal-400 hover:bg-teal-500/25 transition-all duration-300 focus-visible:outline-none"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>{links.demo.label || 'Live Demo'}</span>
        </SafeLink>
      )}

      {links.video && (
        <SafeLink
          linkObj={links.video}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-300 hover:text-teal-400 hover:bg-slate-800/80 transition-all duration-300 focus-visible:outline-none"
        >
          <Video className="w-3.5 h-3.5" />
          <span>{links.video.label || 'Video Walkthrough'}</span>
        </SafeLink>
      )}

      {links.report && (
        <SafeLink
          linkObj={links.report}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-300 hover:text-teal-400 hover:bg-slate-800/80 transition-all duration-300 focus-visible:outline-none"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>{links.report.label || 'Report / Certificate'}</span>
        </SafeLink>
      )}
    </div>
  );
}
