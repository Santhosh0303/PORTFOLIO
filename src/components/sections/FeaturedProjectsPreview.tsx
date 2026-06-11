import React from 'react';
import { projects } from '../../data';
import SectionHeading from '../ui/SectionHeading';
import StatusBadge from '../ui/StatusBadge';
import SafeLink from '../ui/SafeLink';
import { ExternalLink, GitBranch, ArrowUpRight } from 'lucide-react';

export default function FeaturedProjectsPreview() {
  return (
    <section id="projects" className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 bg-black">
      <SectionHeading 
        title="Featured Projects" 
        subtitle="Flagship analytics, data quality, and BI engineering case studies aligned with verified evidence metrics."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="flex flex-col justify-between p-8 rounded-2xl border border-neutral-900 bg-neutral-950/40 backdrop-blur-sm hover:border-gold-muted/30 transition-all duration-300 shadow-xl group gold-glow-hover"
          >
            <div className="space-y-6">
              {/* Badge & Title */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <StatusBadge status={project.status} />
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                  ID: {project.id}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-neutral-100 group-hover:text-gold transition-colors font-sans">
                  {project.title}
                </h3>
                <p className="text-sm text-gold-dark font-medium font-mono uppercase tracking-wider">
                  {project.subtitle}
                </p>
              </div>

              {/* Summary */}
              <p className="text-base text-neutral-400 leading-relaxed font-sans">
                {project.summary}
              </p>

              {/* Key Metrics */}
              <div className="py-4 border-y border-neutral-900/80 my-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {project.metrics.slice(0, 3).map((m) => (
                    <div key={m.label} className="space-y-1">
                      <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block font-mono">
                        {m.label}
                      </span>
                      <span className="text-base font-bold font-mono text-neutral-200">
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
                    className="text-[10px] font-mono px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links CTA */}
            <div className="flex items-center gap-6 pt-6 mt-8 border-t border-neutral-900/80">
              {project.links.github && (
                <SafeLink 
                  linkObj={project.links.github}
                  className="inline-flex items-center text-xs font-semibold text-neutral-400 hover:text-gold transition-colors font-mono"
                >
                  <GitBranch className="w-4 h-4 mr-1.5 text-gold" /> Repository
                </SafeLink>
              )}
              {project.links.demo && (
                <SafeLink 
                  linkObj={project.links.demo}
                  className="inline-flex items-center text-xs font-semibold text-gold hover:text-gold-light transition-colors font-mono"
                >
                  <ExternalLink className="w-4 h-4 mr-1.5" /> Interactive Demo
                </SafeLink>
              )}
              {project.links.report && (
                <SafeLink 
                  linkObj={project.links.report}
                  className="inline-flex items-center text-xs font-semibold text-neutral-400 hover:text-gold transition-colors font-mono"
                >
                  <ArrowUpRight className="w-4 h-4 mr-1.5 text-gold" /> Audit Verification
                </SafeLink>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
