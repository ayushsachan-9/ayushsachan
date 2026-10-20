import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Github, Linkedin, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      `Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="space-y-2 mb-10">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Feel free to reach out if you'd like to discuss embedded systems, internships, or collaborate on a project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Direct channels */}
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800 space-y-3">
              <span className="text-xs text-neutral-400 uppercase tracking-wider font-mono">
                Email
              </span>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm sm:text-base font-medium text-white hover:text-neutral-300 transition-colors truncate"
                >
                  {personalInfo.email}
                </a>
                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors shrink-0"
                  title="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-3.5 rounded-xl bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white text-sm font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-3.5 rounded-xl bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white text-sm font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Clean Message form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <input
                type="text"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900/60 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors"
              />
            </div>

            <div>
              <input
                type="email"
                required
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900/60 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors"
              />
            </div>

            <div>
              <textarea
                rows={3}
                required
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900/60 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-white hover:bg-neutral-200 text-neutral-950 text-sm font-medium transition-colors"
            >
              Send Message
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
