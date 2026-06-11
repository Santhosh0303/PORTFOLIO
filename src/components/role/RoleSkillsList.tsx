import React from 'react';
import { RoleTarget } from '../../data/types';
import { projects } from '../../data/projects';

interface RoleSkillsListProps {
  role: RoleTarget;
}

export default function RoleSkillsList({ role }: RoleSkillsListProps) {
  // Get the union of tools used across all projects associated with this role
  const matchedProjects = projects.filter((project) =>
    role.associatedProjects.includes(project.id)
  );
  
  const tools = Array.from(
    new Set(matchedProjects.flatMap((project) => project.tools))
  );

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 font-mono">
        Skills & Technologies Mapped
      </h4>
      {tools.length === 0 ? (
        <p className="text-xs text-neutral-500 font-mono">No specific tools mapped to this profile.</p>
      ) : (
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="text-xs font-medium px-3 py-1.5 rounded-lg border border-neutral-900 bg-neutral-900/20 text-neutral-300 hover:border-gold/20 transition-colors duration-300 font-mono"
            >
              {tool}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
