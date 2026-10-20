import React from 'react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 border-b border-neutral-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="space-y-2 mb-10">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Skills & Hardware Tooling
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Microcontrollers, sensors, and languages I use for prototyping and firmware development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((group, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800 space-y-4"
            >
              <h3 className="text-sm font-semibold text-white tracking-wide border-b border-neutral-800 pb-2">
                {group.category}
              </h3>

              <div className="space-y-3">
                {group.items.map((item, iIdx) => (
                  <div key={iIdx} className="text-sm flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <span className="font-medium text-neutral-200">
                      {item.name}
                    </span>
                    <span className="text-xs text-neutral-400 sm:text-right">
                      {item.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
