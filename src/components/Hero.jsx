import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-neutral-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="space-y-6">
          
          {/* Status pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
            <span>{personalInfo.status}</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Ayush Sachan
            </h1>
            <p className="text-lg sm:text-xl text-neutral-300 font-medium">
              {personalInfo.title}
            </p>
          </div>

          {/* Intro Paragraphs */}
          <div className="space-y-4 text-base sm:text-lg text-neutral-400 leading-relaxed max-w-2xl">
            {personalInfo.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Action Links & Socials */}
          <div className="pt-2 flex flex-wrap items-center gap-3 text-sm">
            <a
              href="#sync-space"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white hover:bg-neutral-200 text-neutral-950 font-medium transition-colors"
            >
              <span>View Sync-Space Project</span>
              <ArrowDown className="w-4 h-4 text-neutral-900" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 transition-colors"
            >
              <Mail className="w-4 h-4 text-neutral-400" />
              <span>Email</span>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
