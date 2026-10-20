import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-neutral-800 text-xs text-neutral-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-neutral-400 font-medium">{personalInfo.name}</span>
          <span className="mx-2">•</span>
          <span>ECE Undergrad Portfolio</span>
        </div>
        <div>
          © {new Date().getFullYear()} Ayush Sachan
        </div>
      </div>
    </footer>
  );
}
