import React from 'react';
import { Project } from '../../data/types';
import StatusBadge from '../ui/StatusBadge';
import ProjectMetricsGrid from './ProjectMetricsGrid';
import ProjectMethodBlock from './ProjectMethodBlock';
import ProjectValidationBlock from './ProjectValidationBlock';
import ProjectLimitationsBlock from './ProjectLimitationsBlock';
import ProjectLinksBlock from './ProjectLinksBlock';
import { ShieldAlert } from 'lucide-react';

interface ProjectCaseStudyProps {
  project: Project;
}

export default function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  return (
    <div className="p-8 sm:p-10 rounded-2xl border border-neutral-900 bg-neutral-950/40 backdrop-blur-sm space-y-8 relative overflow-hidden group gold-glow">
      {/* Background radial accent */}
      <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-gold/5 rounded-full blur-[80px] group-hover:bg-gold/10 transition-all duration-500 pointer-events-none" />

      {/* Title Header */}
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-neutral-900 pb-6">
        <div className="space-y-2 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2.5">
            <h3 className="text-xl md:text-2xl font-bold text-neutral-100 font-sans">
              {project.title}
            </h3>
            <StatusBadge status={project.status} />
          </div>
          <p className="text-xs md:text-sm text-neutral-400 font-mono">
            {project.subtitle}
          </p>
        </div>
      </div>

      {/* Case Study Overview Summary */}
      <div className="space-y-2">
        <p className="text-base text-neutral-300 leading-relaxed font-medium">
          {project.summary}
        </p>
      </div>

      {/* Metric badges strip */}
      <ProjectMetricsGrid metrics={project.metrics} />

      {/* Problem / Solution Narrative */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <h4 className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider font-mono">
            Operational Problem Statement
          </h4>
          <p className="text-sm text-neutral-300 leading-relaxed">
            {project.problem}
          </p>
        </div>
        
        <div className="space-y-2">
          <h4 className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider font-mono">
            Why It Matters / Business Value
          </h4>
          <p className="text-sm text-neutral-300 leading-relaxed">
            {project.whyItMatters}
          </p>
        </div>
      </div>

      {/* Method & Chronology Details */}
      <div className="border-t border-neutral-900 pt-6">
        <ProjectMethodBlock 
          inputs={project.inputs} 
          method={project.method} 
          tools={project.tools} 
        />
      </div>

      {/* Outputs and Validation Checks */}
      <div className="border-t border-neutral-900 pt-6">
        <ProjectValidationBlock 
          outputs={project.outputs} 
          validation={project.validation} 
        />
      </div>

      {/* Recruiter Relevance & Limits */}
      <div className="border-t border-neutral-900 pt-6">
        <ProjectLimitationsBlock 
          limitations={project.limitations} 
          recruiterRelevance={project.recruiterRelevance} 
        />
      </div>

      {/* Links and Safe verification blocks */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-neutral-900 pt-6">
        <ProjectLinksBlock links={project.links} />
        
        {/* Verification check signoff label */}
        <div className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-gold bg-gold/5 px-2.5 py-1 rounded border border-gold/10 uppercase tracking-wider select-none font-mono">
          <ShieldAlert className="w-3.5 h-3.5" /> Checked & Mapped
        </div>
      </div>
    </div>
  );
}
