import React from 'react';
import { educationInfo } from '../data/portfolioData';

export default function EducationSection() {
  return (
    <section id="education" className="py-8 border-b border-[var(--line)] space-y-4">
      <h2 className="text-[12px] font-medium tracking-[0.16em] uppercase text-[var(--faint)] mono">
        Education & Core ECE
      </h2>

      <div className="p-5 sm:p-6 rounded-xl border border-[var(--line)] bg-[var(--panel)] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
          <div>
            <h3 className="text-xl font-medium text-[var(--ink)] tracking-tight">
              {educationInfo.degree}
            </h3>
            <p className="text-sm text-[var(--soft)]">
              {educationInfo.institution}
            </p>
          </div>
          <span className="text-xs mono text-[var(--faint)]">
            {educationInfo.period}
          </span>
        </div>

        <div>
          <p className="text-xs mono uppercase tracking-wider text-[var(--faint)] mb-2">
            Selected Coursework & Lab Disciplines
          </p>
          <div className="flex flex-wrap gap-1.5">
            {educationInfo.coursework.map((course, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded border border-[var(--line)] bg-[var(--paper)] text-[12px] mono text-[var(--soft)]"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
