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
      <div className="text-xs text-neutral-500 italic font-mono">
        Evidence documents planned
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      {links.github && (
        <SafeLink
          linkObj={links.github}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-gold hover:bg-neutral-800 transition-all duration-300 focus-visible:outline-none font-mono"
        >
          <Github className="w-3.5 h-3.5 text-gold" />
          <span>{links.github.label || 'Code Repository'}</span>
        </SafeLink>
      )}

      {links.demo && (
        <SafeLink
          linkObj={links.demo}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gold/10 border border-gold/20 text-gold hover:bg-gold/20 transition-all duration-300 focus-visible:outline-none font-mono"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>{links.demo.label || 'Live Demo'}</span>
        </SafeLink>
      )}

      {links.video && (
        <SafeLink
          linkObj={links.video}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-gold hover:bg-neutral-800 transition-all duration-300 focus-visible:outline-none font-mono"
        >
          <Video className="w-3.5 h-3.5 text-gold" />
          <span>{links.video.label || 'Video Walkthrough'}</span>
        </SafeLink>
      )}

      {links.report && (
        <SafeLink
          linkObj={links.report}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-gold hover:bg-neutral-800 transition-all duration-300 focus-visible:outline-none font-mono"
        >
          <FileText className="w-3.5 h-3.5 text-gold" />
          <span>{links.report.label || 'Report / Certificate'}</span>
        </SafeLink>
      )}
    </div>
  );
}
