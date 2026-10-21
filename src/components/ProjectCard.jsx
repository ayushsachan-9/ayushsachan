import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, ChevronUp, Cpu, Radio, Zap, Shield, AlertCircle } from 'lucide-react';

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="border border-[var(--line)] rounded-xl overflow-hidden bg-[var(--panel)] transition-all hover:border-[var(--line-strong)]">
      {/* Project Image */}
      {project.image ? (
        <div className="relative aspect-[16/9] w-full bg-[var(--paper)] overflow-hidden border-b border-[var(--line)] flex items-center justify-center p-2 sm:p-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain"
            loading="lazy"
            onError={(e) => {
              if (project.id === 'sync-space') e.target.src = '/image/homeautomation.png';
              else if (project.id === 'library-system') e.target.src = '/image/library management system.jpg';
            }}
          />
        </div>
      ) : (
        <div className="aspect-[16/9] w-full bg-[var(--paper)] border-b border-[var(--line)] flex flex-col items-center justify-center p-6 text-center">
          <span className="mono text-xs text-[var(--faint)] uppercase tracking-wider">In Progress</span>
          <span className="text-sm text-[var(--soft)] mt-1">Circuit design & firmware under bench test</span>
        </div>
      )}

      {/* Card Body */}
      <div className="p-5 sm:p-6 space-y-3.5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[var(--ink)]">
            {project.title}
          </h3>
          <span className="px-2.5 py-0.5 rounded-full border border-[var(--line)] bg-[var(--paper)] text-xs mono text-[var(--soft)]">
            {project.status}
          </span>
        </div>

        <p className="text-[16px] sm:text-[17px] text-[var(--soft)] leading-relaxed">
          {project.description}
        </p>

        {/* Stack Chips */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.stack.map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-0.5 rounded border border-[var(--line)] bg-[var(--paper)] text-[12px] mono text-[var(--soft)]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Expandable Hardware Specs (if details exist) */}
        {project.details && (
          <div className="pt-2">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--ink)] hover:text-[var(--soft)] transition-colors mono"
            >
              <span>{expanded ? 'Hide system breakdown' : 'View system architecture & specs'}</span>
              {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {expanded && (
              <div className="mt-4 pt-4 border-t border-[var(--line)] space-y-4 text-sm animate-fadeIn">
                {/* Motivation */}
                {project.details.problem && (
                  <div className="p-3.5 rounded-lg bg-[var(--paper)] border border-[var(--line)] space-y-1">
                    <p className="text-xs font-medium mono uppercase tracking-wider text-[var(--faint)]">
                      The Problem It Solves
                    </p>
                    <p className="text-[var(--soft)] text-[15px] leading-relaxed">
                      {project.details.problem}
                    </p>
                  </div>
                )}

                {/* Hardware Stack */}
                {project.details.hardware && (
                  <div className="space-y-1.5">
                    <p className="text-xs font-medium mono uppercase tracking-wider text-[var(--faint)]">
                      Hardware & Components
                    </p>
                    <ul className="space-y-1 text-xs mono text-[var(--soft)]">
                      {project.details.hardware.map((item, idx) => (
                        <li key={idx} className="flex items-baseline gap-2">
                          <span className="text-[var(--faint)]">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Energy Modes (Sync-Space) */}
                {project.details.modes && (
                  <div className="space-y-2 pt-1">
                    <p className="text-xs font-medium mono uppercase tracking-wider text-[var(--faint)]">
                      4-Tier Power Conservation Modes
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.details.modes.map((mode, idx) => (
                        <div key={idx} className="p-2.5 rounded bg-[var(--paper)] border border-[var(--line)] text-xs">
                          <strong className="text-[var(--ink)] block mb-0.5">{mode.name}</strong>
                          <span className="text-[var(--soft)] leading-normal">{mode.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
