import React from 'react';
import { otherProjects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 border-b border-neutral-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="space-y-2 mb-10">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Other Projects
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Software tools and ongoing hardware work alongside Sync-Space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl bg-neutral-900/40 border border-neutral-800 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                {project.image ? (
                  <div className="h-48 bg-neutral-950 overflow-hidden border-b border-neutral-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "/image/library management system.jpg";
                      }}
                    />
                  </div>
                ) : (
                  <div className="h-48 bg-neutral-950/60 border-b border-neutral-800 flex flex-col items-center justify-center p-6 text-center text-neutral-500">
                    <span className="font-mono text-xs text-neutral-400 font-medium">Work in Progress</span>
                    <span className="text-xs text-neutral-600 mt-1">Circuit schematics & code to be added</span>
                  </div>
                )}

                {/* Details */}
                <div className="p-5 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-neutral-400">
                      {project.category}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 border border-neutral-700">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="p-5 pt-0">
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-800/80">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-neutral-950 border border-neutral-800 text-xs text-neutral-400 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
