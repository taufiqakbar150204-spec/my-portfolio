import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Code, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#0b0f19]">
      {/* Background Decorative Gradients & Grid */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-500/15 to-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#94a3b8 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for Full-Time Roles &amp; Freelance Projects</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <p className="text-slate-400 text-base sm:text-lg font-mono tracking-wide">
                <span className="text-emerald-400 font-semibold">Muhamad Taufiq Akbar</span>
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Full-Stack Developer &amp;{' '}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  IT Programmer
                </span>
              </h1>
            </div>

            {/* Sub-headline / Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Memiliki spesialisasi dalam merancang arsitektur perangkat lunak *end-to-end* yang tangguh—mulai dari *frontend* React yang berkinerja tinggi dan aksesibel, hingga *microservices* Node.js yang dapat diskalakan serta basis data relasional yang andal. Berfokus pada kode yang bersih (*clean code*), keandalan sistem, dan dampak bisnis.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/CV_MUHAMAD TAUFIQ AKBAR.pdf"
                download="CV_MUHAMAD_TAUFIQ_AKBAR.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social Links & Quick Proof */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all hover:scale-105"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:taufiqakbar150204@gmail.com"
                  aria-label="Send Email"
                  className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-400 hover:text-teal-400 hover:border-teal-500/40 transition-all hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              <div className="h-6 w-px bg-slate-800 hidden sm:block"></div>

              <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Production-Ready
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Scalable APIs
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Code Terminal / Architecture Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl bg-slate-900/90 border border-slate-800/90 shadow-2xl backdrop-blur-xl overflow-hidden group hover:border-slate-700/80 transition-all duration-300">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span>developer.ts</span>
                </div>
                <div className="text-[10px] text-slate-500 font-mono">UTF-8</div>
              </div>

              {/* Code Snippet */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed text-slate-300 overflow-x-auto space-y-2.5">
                <div>
                  <span className="text-cyan-400 font-semibold">const</span>{' '}
                  <span className="text-yellow-300">fullStackEngineer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">name:</span>{' '}
                  <span className="text-emerald-300">'Muhamad Taufiq Akbar'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">role:</span>{' '}
                  <span className="text-emerald-300">'Full-Stack &amp; IT Systems'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">status:</span>{' '}
                  <span className="text-teal-300">'Ready for Impact'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">coreStack:</span> [
                  <div className="pl-4 text-emerald-400">
                    'React', 'Vite', 'Tailwind CSS',<br />
                    'Node.js', 'Express', 'PostgreSQL'
                  </div>
                  ],
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">passion:</span> (&#123;{' '}
                  <span className="text-cyan-300">problem</span> &#125;) =&gt; &#123;
                  <div className="pl-4 text-slate-300">
                    <span className="text-cyan-400">return</span>{' '}
                    <span className="text-emerald-300">
                      `CleanCode( <span className="text-slate-200">problem</span> ) + ScalableArch()`
                    </span>;
                  </div>
                  &#125;
                </div>
                <div>&#125;;</div>
                <div className="pt-2 text-slate-500 text-xs">
                  // Execute: deploy robust solution...
                </div>
              </div>

              {/* Bottom Quick Metric Bar */}
              <div className="px-5 py-3 bg-slate-950/60 border-t border-slate-800/60 grid grid-cols-3 text-center gap-2">
                <div>
                  <div className="text-base font-bold text-white">4+</div>
                  <div className="text-[11px] text-slate-400">Years Coding</div>
                </div>
                <div>
                  <div className="text-base font-bold text-emerald-400">20+</div>
                  <div className="text-[11px] text-slate-400">Projects Done</div>
                </div>
                <div>
                  <div className="text-base font-bold text-cyan-400">99.9%</div>
                  <div className="text-[11px] text-slate-400">Uptime Focus</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
