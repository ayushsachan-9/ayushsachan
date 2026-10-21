import React from 'react';
import Header from './components/Header';
import SidebarIndex from './components/SidebarIndex';
import Intro from './components/Intro';
import ProjectCard from './components/ProjectCard';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
import { projectsData } from './data/portfolioData';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)] antialiased transition-colors duration-200">
      {/* Floating Index on large screens */}
      <SidebarIndex />

      {/* Main Single Column (matches nirbhay.me width ~700px) */}
      <main className="max-w-[700px] mx-auto px-5 sm:px-6">
        <Header />
        <Intro />

        {/* Projects Section */}
        <section id="projects" className="py-8 border-b border-[var(--line)] space-y-6">
          <h2 className="text-[12px] font-medium tracking-[0.16em] uppercase text-[var(--faint)] mono">
            Projects & Systems
          </h2>

          <div className="space-y-6">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <EducationSection />
        <SkillsSection />
        <ContactSection />
        <FooterSection />
      </main>
    </div>
  );
}
