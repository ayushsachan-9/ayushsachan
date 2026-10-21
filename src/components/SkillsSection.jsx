import React from 'react';
import { skillsList } from '../data/portfolioData';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-8 border-b border-[var(--line)] space-y-4">
      <h2 className="text-[12px] font-medium tracking-[0.16em] uppercase text-[var(--faint)] mono">
        Technical Skills & Tooling
      </h2>

      <div className="divide-y divide-[var(--line)] border border-[var(--line)] rounded-xl bg-[var(--panel)] overflow-hidden">
        {skillsList.map((skill, idx) => (
          <div
            key={idx}
            className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-6"
          >
            <span className="text-sm font-medium text-[var(--ink)] sm:w-1/3 shrink-0">
              {skill.title}
            </span>
            <span className="text-xs sm:text-sm mono text-[var(--soft)] sm:w-2/3">
              {skill.items}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
