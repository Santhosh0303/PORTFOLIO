import React, { useState } from 'react';
import { roles } from '../../data/roles';
import SectionHeading from '../ui/SectionHeading';
import RoleTabList from '../role/RoleTabList';
import RoleEvidencePanel from '../role/RoleEvidencePanel';

export default function RoleSelector() {
  const [selectedRoleId, setSelectedRoleId] = useState<string>('data-analyst');

  // Enforce mandatory sorting order to guarantee matching requirements
  const order = [
    'data-analyst',
    'bi-analyst',
    'data-quality-analyst',
    'reporting-mi-analyst',
    'data-governance-analyst',
    'junior-data-scientist',
    'geospatial-analyst',
    'ai-data-evaluation-analyst',
    'operations-data-analyst'
  ];

  const sortedRoles = [...roles].sort((a, b) => {
    return order.indexOf(a.id) - order.indexOf(b.id);
  });

  const selectedRole = sortedRoles.find((role) => role.id === selectedRoleId) || sortedRoles[0];

  return (
    <section id="roles" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <SectionHeading 
        title="Recruiter Alignment" 
        subtitle="Select a target analyst profile to inspect fit criteria, verified project evidence, mapped tools, and download tailored CV variant guides."
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
        {/* Left Sidebar Role Tabs */}
        <div className="lg:col-span-4">
          <RoleTabList 
            roles={sortedRoles} 
            selectedRoleId={selectedRoleId} 
            onSelectRole={setSelectedRoleId} 
          />
        </div>

        {/* Right Active Evidence Panel */}
        <div className="lg:col-span-8">
          <RoleEvidencePanel role={selectedRole} />
        </div>
      </div>
    </section>
  );
}
