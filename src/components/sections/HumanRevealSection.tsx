import React from 'react';

export default function HumanRevealSection() {
  return (
    <section className="py-24 sm:py-32 bg-black border-y border-neutral-900/50 relative z-10">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-12">
        <div className="border-l-2 border-gold/40 pl-8 space-y-6">
          <p className="text-3xl sm:text-4xl font-light text-neutral-100 tracking-wide leading-relaxed font-sans">
            "I experiment."
          </p>
          <p className="text-3xl sm:text-4xl font-light text-neutral-100 tracking-wide leading-relaxed font-sans">
            "I question patterns."
          </p>
          <p className="text-3xl sm:text-4xl font-light text-neutral-100 tracking-wide leading-relaxed font-sans">
            "I try to make data work feel more human."
          </p>
          <p className="text-3xl sm:text-4xl font-light text-neutral-100 tracking-wide leading-relaxed font-sans">
            "I’m still learning — but I build anyway."
          </p>
        </div>
        <div className="max-w-2xl text-neutral-400 text-base sm:text-lg pl-8 leading-relaxed">
          Behind every SQL query and dashboard is a human story of trial, error, and iterative refinement. I don’t believe in magic templates or absolute metrics; I believe in clean pipelines, repeatable validations, and design that honors the context of the user.
        </div>
      </div>
    </section>
  );
}
