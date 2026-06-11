import React from 'react';
import { RoleTarget } from '../../data/types';
import { projects } from '../../data/projects';
import StatusBadge from '../ui/StatusBadge';
import SafeLink from '../ui/SafeLink';
import { ExternalLink, Github, Video } from 'lucide-react';

interface RoleProjectMatchesProps {
  role: RoleTarget;
}

export default function RoleProjectMatches({ role }: RoleProjectMatchesProps) {
  // Find projects associated with the current role
  const matchedProjects = projects.filter((project) =>
    role.associatedProjects.includes(project.id)
  );

  return (
    <div className="space-y-6">
      <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 font-mono">
        Evidence / Flagship Case Studies
      </h4>
      {matchedProjects.length === 0 ? (
        <p className="text-sm text-neutral-500 font-mono">No project case studies mapped to this role.</p>
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          {matchedProjects.map((project) => (
            <div 
              key={project.id} 
              className="p-5 rounded-xl border border-neutral-900 bg-neutral-950/80 hover:bg-neutral-900/40 hover:border-gold/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="space-y-1">
                    <h5 className="text-base font-bold text-neutral-100">
                      {project.title}
                    </h5>
                    <p className="text-xs text-neutral-400 font-mono">
                      {project.subtitle}
                    </p>
                  </div>
                  <StatusBadge status={project.status} />
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed">
                  {project.summary}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  {project.metrics.slice(0, 4).map((metric, idx) => (
                    <div key={idx} className="p-2 rounded bg-neutral-900/50 border border-neutral-900">
                      <div className="text-[10px] text-neutral-400 uppercase tracking-wider line-clamp-1 font-mono">
                        {metric.label}
                      </div>
                      <div className="text-xs font-bold text-gold mt-0.5 font-mono">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-3 mt-4 pt-3 border-t border-neutral-900/60">
                {project.links.github && (
                  <SafeLink 
                    linkObj={project.links.github}
                    className="inline-flex items-center gap-1 text-xs font-medium text-neutral-400 hover:text-gold transition-colors font-mono"
                  >
                    <Github className="w-3.5 h-3.5 text-gold" />
                    <span>Code Repo</span>
                  </SafeLink>
                )}
                {project.links.demo && (
                  <SafeLink 
                    linkObj={project.links.demo}
                    className="inline-flex items-center gap-1 text-xs font-medium text-neutral-400 hover:text-gold transition-colors font-mono"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-gold" />
                    <span>Live Demo</span>
                  </SafeLink>
                )}
                {project.links.video && (
                  <SafeLink 
                    linkObj={project.links.video}
                    className="inline-flex items-center gap-1 text-xs font-medium text-neutral-400 hover:text-gold transition-colors font-mono"
                  >
                    <Video className="w-3.5 h-3.5 text-gold" />
                    <span>Video walk</span>
                  </SafeLink>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
