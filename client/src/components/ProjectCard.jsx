import React, { useState } from 'react';
import { ExternalLink, Github, Check, AlertCircle, Sparkles } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="group rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-xl overflow-hidden flex flex-col h-full hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/5">
      {/* Project Mockup / Preview Header */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-slate-800/80">
        {/* Category Pill Over Image */}
        <div className="absolute top-3.5 left-3.5 z-20">
          <span className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-slate-950/80 text-emerald-400 border border-emerald-500/30 backdrop-blur-md shadow-md">
            {project.category}
          </span>
        </div>

        {/* Action Link Overlay on Hover */}
        <div className="absolute inset-0 z-10 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-transform hover:scale-110 shadow-lg"
            title="View Live Demo"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-transform hover:scale-110 border border-slate-700 shadow-lg"
            title="View Source Code"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>

        {/* Project Image */}
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            // Fallback gradient if image fails to load
            e.target.style.display = 'none';
          }}
        />
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-4">
            {project.title}
          </h3>

          {/* Problem & Solution Mini Blocks */}
          <div className="space-y-3 mb-5 text-xs sm:text-sm">
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
              <div className="font-semibold text-rose-400 flex items-center gap-1.5 mb-1 text-xs uppercase tracking-wider">
                <AlertCircle className="w-3.5 h-3.5" /> Problem
              </div>
              <p className="text-slate-300 leading-relaxed">{project.problem}</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
              <div className="font-semibold text-emerald-400 flex items-center gap-1.5 mb-1 text-xs uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> Solution
              </div>
              <p className="text-slate-300 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="mb-5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Tech Stack Used:
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-800/80 text-emerald-300 border border-slate-700/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features Bullet Points */}
          <div className="mb-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
              Key Engineering Features:
            </h4>
            <ul className="space-y-1.5">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <span className="mt-1 p-0.5 rounded-full bg-emerald-500/20 text-emerald-400 flex-shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Buttons: Live Demo & GitHub Code */}
        <div className="pt-4 border-t border-slate-800/90 grid grid-cols-2 gap-3 mt-auto">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-slate-950 transition-all shadow-md"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
          >
            <Github className="w-4 h-4 text-emerald-400" />
            <span>GitHub Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
