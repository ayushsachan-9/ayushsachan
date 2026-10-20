import React from 'react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24 border-b border-neutral-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="space-y-2 mb-10">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Education
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Academic training in electronics, hardware circuits, and communication systems.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-neutral-900/40 border border-neutral-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-neutral-800 pb-4">
            <div>
              <h3 className="text-lg font-semibold text-white">
                {education.degree}
              </h3>
              <p className="text-sm text-neutral-300">
                {education.institution}
              </p>
            </div>
            <div className="text-xs font-mono text-neutral-400">
              {education.batch}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">
              Relevant Coursework
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {education.coursework.map((course, idx) => (
                <div
                  key={idx}
                  className="px-3 py-2 rounded-lg bg-neutral-950/70 border border-neutral-800 text-xs text-neutral-300"
                >
                  {course}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
