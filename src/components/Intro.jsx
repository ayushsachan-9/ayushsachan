import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, FileText, Github, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Intro() {
  return (
    <section id="intro" className="py-8 border-b border-[var(--line)] space-y-6">
      
      {/* Lede */}
      <p className="text-xl sm:text-2xl text-[var(--ink)] font-normal leading-relaxed">
        {personalInfo.lede}
      </p>

      {/* Bulleted Highlights */}
      <ul className="space-y-3 text-[17px] sm:text-[18px] text-[var(--soft)] leading-relaxed list-disc list-outside pl-5 marker:text-[var(--faint)]">
        {personalInfo.bullets.map((bullet, idx) => (
          <li key={idx}>
            <span>{bullet.text}</span>
            <strong className="text-[var(--ink)] font-medium">{bullet.bold}</strong>
            <span>{bullet.after}</span>
          </li>
        ))}
      </ul>

      {/* Primary CTA Buttons */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--ink)] text-[var(--paper)] text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <Mail className="w-4 h-4" />
          <span>Send an email</span>
        </a>

        <a
          href={personalInfo.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--line-strong)] bg-[var(--panel)] text-[var(--ink)] text-sm font-medium hover:bg-[var(--panel-hover)] transition-colors"
        >
          <FileText className="w-4 h-4 text-[var(--soft)]" />
          <span>Resume</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[var(--faint)]" />
        </a>
      </div>

      {/* Social Chips */}
      <div className="pt-2">
        <p className="text-xs font-medium tracking-[0.14em] uppercase text-[var(--faint)] mb-2.5 mono">
          Socials & Code
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-[var(--line)] bg-[var(--panel)] text-[var(--ink)] text-sm font-medium hover:border-[var(--line-strong)] hover:bg-[var(--panel-hover)] transition-all"
          >
            <Github className="w-3.5 h-3.5 text-[var(--soft)]" />
            <span>GitHub</span>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-[var(--line)] bg-[var(--panel)] text-[var(--ink)] text-sm font-medium hover:border-[var(--line-strong)] hover:bg-[var(--panel-hover)] transition-all"
          >
            <Linkedin className="w-3.5 h-3.5 text-[var(--soft)]" />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-[var(--line)] bg-[var(--panel)] text-[var(--ink)] text-sm font-medium hover:border-[var(--line-strong)] hover:bg-[var(--panel-hover)] transition-all"
          >
            <Mail className="w-3.5 h-3.5 text-[var(--soft)]" />
            <span>{personalInfo.email}</span>
          </a>
        </div>
      </div>

    </section>
  );
}
