import React from 'react';

interface GoldTraceLineProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

export default function GoldTraceLine({ className = "", orientation = 'horizontal' }: GoldTraceLineProps) {
  if (orientation === 'vertical') {
    return (
      <div 
        className={`w-[1px] bg-gradient-to-b from-transparent via-[var(--gold-muted)] to-transparent opacity-20 ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <div 
      className={`h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--gold-muted)] to-transparent opacity-20 ${className}`}
      aria-hidden="true"
    />
  );
}
