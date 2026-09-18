import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import ProjectCard from './ProjectCard';
import { FolderGit2, Sparkles, Filter } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterOptions = ['All', 'E-Commerce', 'SaaS', 'Healthcare', 'Fintech'];

  const filteredProjects = projectsData.filter((proj) => {
    if (activeFilter === 'All') return true;
    return proj.category.toLowerCase().includes(activeFilter.toLowerCase());
  });

  return (
    <section id="projects" className="py-24 bg-[#0d1322] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production-Grade{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Full-Stack Applications
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Real-world projects demonstrating architectural design, security implementations, database transactions, and reactive user interfaces.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 font-mono mr-2">
            <Filter className="w-3.5 h-3.5 text-emerald-400" /> Filter:
          </div>
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-md shadow-emerald-500/25'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub Repository Callout */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm mb-4">
            Looking for more utility scripts, backend microservices, or algorithm solutions?
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-emerald-400 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-850 transition-all font-mono text-xs sm:text-sm"
          >
            <span>Explore all repositories on GitHub</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
