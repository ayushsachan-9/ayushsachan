import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-8 border-b border-[var(--line)] space-y-4">
      <h2 className="text-[12px] font-medium tracking-[0.16em] uppercase text-[var(--faint)] mono">
        Contact
      </h2>

      <div className="space-y-4">
        <p className="text-[17px] sm:text-[18px] text-[var(--soft)] leading-relaxed">
          Email is the fastest way to reach me. I read everything and reply promptly.
        </p>

        <div className="inline-flex items-center gap-2 p-1.5 pl-3 rounded-lg border border-[var(--line-strong)] bg-[var(--panel)]">
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-base sm:text-lg font-medium text-[var(--ink)] hover:underline underline-offset-4 decoration-[var(--line-strong)]"
          >
            {personalInfo.email}
          </a>

          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md hover:bg-[var(--panel-hover)] text-[var(--soft)] hover:text-[var(--ink)] transition-colors"
            title="Copy email to clipboard"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>

        {copied && (
          <p className="text-xs mono text-emerald-600 dark:text-emerald-400">
            ✓ Copied email address to clipboard.
          </p>
        )}
      </div>
    </section>
  );
}
