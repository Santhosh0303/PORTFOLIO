import React from 'react';

export default function WhyIBuild() {
  return (
    <section className="py-24 sm:py-32 bg-black relative z-10">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-8 text-center sm:text-left">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-widest text-gold font-semibold">Motivation</p>
          <h3 className="text-3xl font-light text-neutral-100">Why I Build</h3>
        </div>
        <p className="text-lg sm:text-xl text-neutral-300 font-light leading-relaxed max-w-3xl">
          “I didn’t start with a perfect plan. I started by trying things, testing ideas, and learning through projects. Over time, I realised I care about evidence, clarity, and how an experience feels — not just whether it looks finished.”
        </p>
        <div className="w-16 h-px bg-gold/40 mt-6 mx-auto sm:mx-0"></div>
      </div>
    </section>
  );
}
