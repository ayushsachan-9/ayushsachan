import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Sync-Space', href: '#sync-space' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Name / Title */}
          <a href="#" className="flex items-baseline gap-2 group">
            <span className="font-semibold text-white tracking-tight text-base group-hover:text-neutral-300 transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-xs text-neutral-500 hidden sm:inline">
              / ECE Undergrad
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 text-sm text-neutral-400">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}

            <a
              href={personalInfo.resumeUrl}
              className="inline-flex items-center gap-1 text-white hover:text-neutral-300 font-medium pl-2"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-neutral-400 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111111] border-b border-neutral-800 px-4 py-4 space-y-3">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-neutral-300 hover:text-white py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href={personalInfo.resumeUrl}
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-1 text-sm text-white hover:text-neutral-300 py-1"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
          </a>
        </div>
      )}
    </nav>
  );
}
