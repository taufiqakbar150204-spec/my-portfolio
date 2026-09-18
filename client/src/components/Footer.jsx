import React from 'react';
import { Terminal, Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#080c14] border-t border-slate-800/80 text-slate-400 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-slate-950 font-extrabold shadow-md">
              <Terminal className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <span className="font-bold text-white text-base tracking-tight">
                Muhamad Taufiq Akbar
              </span>
              <span className="block text-xs font-mono text-emerald-400">
                Full-Stack Developer &amp; IT Programmer
              </span>
            </div>
          </div>

          {/* Quick Nav Anchors */}
          <nav className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm font-medium">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </nav>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-400 transition-all hover:scale-105"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Credits & Watermark */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Muhamad Taufiq Akbar. All rights reserved.
          </div>

          {/* Requested Watermark */}
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Built with</span>
            <span className="text-emerald-400 font-semibold">React</span>,
            <span className="text-cyan-400 font-semibold">Node.js</span>,
            <span className="text-teal-400 font-semibold">Express.js</span> &amp;
            <span className="text-emerald-400 font-semibold">Tailwind CSS</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="taufiqakbar150204@gmail.com"
              className="hover:text-emerald-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
