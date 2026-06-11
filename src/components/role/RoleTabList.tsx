import React from 'react';
import { RoleTarget } from '../../data/types';

interface RoleTabListProps {
  roles: RoleTarget[];
  selectedRoleId: string;
  onSelectRole: (roleId: string) => void;
}

export default function RoleTabList({ roles, selectedRoleId, onSelectRole }: RoleTabListProps) {
  return (
    <div 
      className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 scrollbar-none snap-x"
      role="tablist"
      aria-label="Target recruitment profiles"
    >
      {roles.map((role) => {
        const isSelected = role.id === selectedRoleId;
        return (
          <button
            key={role.id}
            id={`tab-${role.id}`}
            role="tab"
            type="button"
            aria-selected={isSelected}
            aria-controls={`panel-${role.id}`}
            tabIndex={0}
            onClick={() => onSelectRole(role.id)}
            className={`flex-shrink-0 snap-align-start w-[260px] md:w-full text-left p-4 rounded-xl border transition-all duration-300 relative overflow-hidden focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none ${
              isSelected
                ? 'bg-neutral-900/80 border-gold/40 shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                : 'bg-neutral-950/20 border-neutral-900 hover:border-neutral-800 hover:bg-neutral-950/40'
            }`}
          >
            {/* Active Indicator Bar */}
            {isSelected && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold to-gold-dark md:block hidden" />
            )}
            {isSelected && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-gold-dark md:hidden block" />
            )}

            <div className="flex items-center justify-between mb-1.5">
              <span className={`text-sm font-bold tracking-tight ${isSelected ? 'text-gold' : 'text-neutral-200'}`}>
                {role.title}
              </span>
              <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded border ${
                role.category === 'Primary'
                  ? 'bg-gold/10 border-gold/20 text-gold'
                  : 'bg-neutral-900 border-neutral-800 text-neutral-400'
              }`}>
                {role.category}
              </span>
            </div>

            <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
              {role.tagline}
            </p>
          </button>
        );
      })}
    </div>
  );
}
