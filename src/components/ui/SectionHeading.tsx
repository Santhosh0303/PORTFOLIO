import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={`space-y-2 mb-10 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent inline-block">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
