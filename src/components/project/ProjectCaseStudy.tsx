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
    <div className="p-6 md:p-8 rounded-2xl border border-slate-900 bg-slate-950/20 backdrop-blur-sm space-y-6 relative overflow-hidden group">
      {/* Background radial accent */}
      <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-teal-500/5 rounded-full blur-[80px] group-hover:bg-teal-500/10 transition-all duration-500 pointer-events-none" />

      {/* Title Header */}
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-900 pb-5">
        <div className="space-y-1 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2.5">
            <h3 className="text-lg md:text-xl font-bold text-slate-100">
              {project.title}
            </h3>
            <StatusBadge status={project.status} />
          </div>
          <p className="text-xs md:text-sm text-slate-400">
            {project.subtitle}
          </p>
        </div>
      </div>

      {/* Case Study Overview Summary */}
      <div className="space-y-2">
        <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-medium">
          {project.summary}
        </p>
      </div>

      {/* Metric badges strip */}
      <ProjectMetricsGrid metrics={project.metrics} />

      {/* Problem / Solution Narrative */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1.5">
          <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Operational Problem Statement
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            {project.problem}
          </p>
        </div>
        
        <div className="space-y-1.5">
          <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Why It Matters / Business Value
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            {project.whyItMatters}
          </p>
        </div>
      </div>

      {/* Method & Chronology Details */}
      <div className="border-t border-slate-900/60 pt-5">
        <ProjectMethodBlock 
          inputs={project.inputs} 
          method={project.method} 
          tools={project.tools} 
        />
      </div>

      {/* Outputs and Validation Checks */}
      <div className="border-t border-slate-900/60 pt-5">
        <ProjectValidationBlock 
          outputs={project.outputs} 
          validation={project.validation} 
        />
      </div>

      {/* Recruiter Relevance & Limits */}
      <div className="border-t border-slate-900/60 pt-5">
        <ProjectLimitationsBlock 
          limitations={project.limitations} 
          recruiterRelevance={project.recruiterRelevance} 
        />
      </div>

      {/* Links and Safe verification blocks */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-900/60 pt-5">
        <ProjectLinksBlock links={project.links} />
        
        {/* Verification check signoff label */}
        <div className="inline-flex items-center gap-1 text-[10px] font-semibold text-teal-400 bg-teal-500/5 px-2 py-1 rounded border border-teal-500/10 uppercase tracking-wider select-none">
          <ShieldAlert className="w-3.5 h-3.5" /> Checked & Mapped
        </div>
      </div>
    </div>
  );
}
