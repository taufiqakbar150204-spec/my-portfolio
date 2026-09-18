import React from 'react';
import { skillCategories } from '../data/skillsData';
import { Cpu, CheckCircle, Code, Layers, Terminal, Sparkles } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#0b0f19] relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Proficiencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tech Stack &amp;{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Developer Tooling
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            A comprehensive overview of programming languages, libraries, databases, and DevOps utilities I use to build scalable web applications.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700/80 transition-all duration-300 shadow-xl relative group"
            >
              {/* Top Bar with Gradient Line */}
              <div className={`h-1.5 w-16 rounded-full bg-gradient-to-r ${category.color} mb-6`}></div>

              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {category.title}
                </h3>
                <span className="text-xs font-mono text-slate-400 px-2.5 py-1 rounded bg-slate-800 border border-slate-700">
                  {category.skills.length} Tools
                </span>
              </div>

              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {category.description}
              </p>

              {/* Skills Pills / Badges Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-emerald-500/40 hover:bg-slate-950 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-sm text-slate-200">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {skill.level}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {skill.experience}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner: IT & Systems Philosophy */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-base">Always Exploring Next-Gen Technologies</h4>
              <p className="text-slate-400 text-sm">Currently experimenting with Next.js App Router, GraphQL, Microfrontends, and AI LLM integrations.</p>
            </div>
          </div>
          <a
            href="#projects"
            className="whitespace-nowrap px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium border border-slate-700 transition-colors"
          >
            See Them In Action &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
