import React from 'react';
import { projects } from '../../data';
import SectionHeading from '../ui/SectionHeading';
import StatusBadge from '../ui/StatusBadge';
import SafeLink from '../ui/SafeLink';
import { ExternalLink, GitBranch, ArrowUpRight } from 'lucide-react';

export default function FeaturedProjectsPreview() {
  return (
    <section id="projects" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <SectionHeading 
        title="Featured Projects" 
        subtitle="Flagship analytics, data quality, and BI engineering case studies aligned with verified evidence metrics."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="flex flex-col justify-between p-6 rounded-xl border border-slate-900 bg-slate-950/40 backdrop-blur-sm hover:border-slate-800 transition-all shadow-lg group"
          >
            <div className="space-y-4">
              {/* Badge & Title */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <StatusBadge status={project.status} />
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                  ID: {project.id}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 font-medium">
                  {project.subtitle}
                </p>
              </div>

              {/* Summary */}
              <p className="text-sm text-slate-400 leading-relaxed">
                {project.summary}
              </p>

              {/* Key Metrics */}
              <div className="py-2 border-y border-slate-900/60 my-2">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {project.metrics.slice(0, 3).map((m) => (
                    <div key={m.label} className="space-y-0.5">
                      <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block">
                        {m.label}
                      </span>
                      <span className="text-sm font-bold font-mono text-slate-200">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tools.map((t) => (
                  <span 
                    key={t}
                    className="text-[10px] font-mono px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links CTA */}
            <div className="flex items-center gap-4 pt-6 mt-6 border-t border-slate-900/60">
              {project.links.github && (
                <SafeLink 
                  linkObj={project.links.github}
                  className="inline-flex items-center text-xs font-semibold text-slate-400 hover:text-teal-400 transition-colors"
                >
                  <GitBranch className="w-4 h-4 mr-1.5" /> Repository
                </SafeLink>
              )}
              {project.links.demo && (
                <SafeLink 
                  linkObj={project.links.demo}
                  className="inline-flex items-center text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-1.5" /> Interactive Demo
                </SafeLink>
              )}
              {project.links.report && (
                <SafeLink 
                  linkObj={project.links.report}
                  className="inline-flex items-center text-xs font-semibold text-slate-400 hover:text-teal-400 transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4 mr-1.5" /> Audit Verification
                </SafeLink>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
