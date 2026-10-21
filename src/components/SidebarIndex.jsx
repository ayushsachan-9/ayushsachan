import React from 'react';

export default function SidebarIndex() {
  const links = [
    { label: 'Overview', href: '#intro' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <aside className="hidden xl:block fixed top-32 left-[calc(50%-360px-150px)] w-28 text-left font-sans select-none z-10">
      <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--faint)] mb-3 mono">
        Index
      </p>
      <nav className="space-y-1.5 text-[15px]">
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            className="block text-[var(--soft)] hover:text-[var(--ink)] transition-colors py-0.5"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
