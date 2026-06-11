import React from 'react';
import { projects } from '../../data/projects';
import SectionHeading from '../ui/SectionHeading';
import ProjectCaseStudy from '../project/ProjectCaseStudy';
import GoldTraceLine from '../ui/GoldTraceLine';

export default function SystemsBuilt() {
  return (
    <section 
      id="systems-built" 
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 bg-black"
    >
      <div className="space-y-12">
        {/* Section Heading */}
        <div className="space-y-4 max-w-3xl">
          <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--gold-primary)]">Chapter 3</p>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[var(--text-primary)]">
            Systems Built
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] font-light leading-relaxed">
            Detailed breakdowns of flagship academic dissertations, portfolio engineering pipelines, and independent R&D context fabrics, mapping exact inputs to validated outputs.
          </p>
        </div>

        {/* Project Cases list */}
        <div className="space-y-16">
          {projects.map((project) => (
            <ProjectCaseStudy key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Visual bottom trace separator */}
      <GoldTraceLine className="absolute bottom-0 left-0" />
    </section>
  );
}
