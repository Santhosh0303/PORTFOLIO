import React from 'react';
import { projects } from '../../data/projects';
import SectionHeading from '../ui/SectionHeading';
import ProjectCaseStudy from '../project/ProjectCaseStudy';

export default function ProjectCaseStudiesSection() {
  return (
    <section id="projects" className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 bg-black">
      <SectionHeading 
        title="Evidence-Led Case Studies" 
        subtitle="Explore detailed breakdowns of flagship academic dissertations, portfolio engineering pipelines, and MSc datasets, mapping exact inputs to validated outputs."
      />
      
      <div className="space-y-20 mt-12">
        {projects.map((project) => (
          <ProjectCaseStudy key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
