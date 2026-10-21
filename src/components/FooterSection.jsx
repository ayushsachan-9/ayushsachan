import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function FooterSection() {
  return (
    <footer className="py-10 text-xs mono text-[var(--faint)] flex items-center justify-between">
      <span>
        © {new Date().getFullYear()} {personalInfo.name} <span className="mx-1">•</span> {personalInfo.location}
      </span>
      <a
        href="#intro"
        className="text-[var(--soft)] hover:text-[var(--ink)] transition-colors"
      >
        ↑ Top
      </a>
    </footer>
  );
}
