import React from 'react';
import { personalInfo } from '../data/portfolioData';
import ThemeToggle from './ThemeToggle';
import { Cpu } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex items-center justify-between pb-8 pt-10 border-b border-[var(--line)]">
      <div className="flex items-center gap-4">
        {/* Monogram Avatar */}
        <div className="w-12 h-12 rounded-full border border-[var(--line-strong)] bg-[var(--panel)] flex items-center justify-center text-[var(--ink)] font-semibold text-lg tracking-tight select-none">
          AS
        </div>

        <div className="space-y-0.5">
          <h1 className="text-2xl sm:text-3xl font-medium tracking-tight text-[var(--ink)] leading-none">
            {personalInfo.name}
          </h1>
          <p className="text-sm text-[var(--soft)] font-normal">
            {personalInfo.location} <span className="mx-1 text-[var(--faint)]">•</span> {personalInfo.tagline}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <ThemeToggle />
      </div>
    </header>
  );
}
