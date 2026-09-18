import React from 'react';
import { Layout, Server, Database, CheckCircle, ShieldCheck, Zap, Layers } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Layout,
      title: 'Frontend Mastery',
      subtitle: 'Component-Driven & Responsive',
      description:
        'Crafting pixel-perfect, accessible user interfaces with React, Vite, and Tailwind CSS. Obsessed with high Lighthouse scores, seamless state management, and fluid responsive behaviors across all devices.',
      accentColor: 'text-emerald-400',
      borderColor: 'group-hover:border-emerald-500/50',
      bgColor: 'bg-emerald-500/10',
      badge: 'React & Tailwind',
    },
    {
      icon: Server,
      title: 'Backend & API Architecture',
      subtitle: 'Resilient Microservices & REST',
      description:
        'Building scalable Node.js and Express.js backends equipped with rate-limiting, JWT authentication, robust input validation, and clear error handling hierarchies that power mission-critical clients.',
      accentColor: 'text-cyan-400',
      borderColor: 'group-hover:border-cyan-500/50',
      bgColor: 'bg-cyan-500/10',
      badge: 'Node & Express',
    },
    {
      icon: Database,
      title: 'Database & System Design',
      subtitle: 'Relational & NoSQL Modeling',
      description:
        'Architecting structured schemas in PostgreSQL and MySQL, indexing for sub-second query latency, data normalization, transaction integrity, and caching strategies using Redis for peak performance.',
      accentColor: 'text-teal-400',
      borderColor: 'group-hover:border-teal-500/50',
      bgColor: 'bg-teal-500/10',
      badge: 'Postgres & Redis',
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0d1322] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>About The Developer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bridging Business Needs with{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Clean Engineering
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
           Seorang software engineer yang berkomitmen untuk menulis kode yang mudah dipelihara, memecahkan logika bisnis yang kompleks, serta senantiasa mengadopsi paradigma teknologi modern.
          </p>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-6 space-y-5 text-slate-300 leading-relaxed text-base">
            <p>
              I am a dedicated <strong className="text-white">Full-Stack Developer &amp; IT Programmer</strong> with extensive hands-on experience developing both consumer-facing applications and mission-critical enterprise systems.
            </p>
            <p>
              My engineering philosophy revolves around three foundational pillars: <strong className="text-emerald-400">clean code principles</strong>, <strong className="text-cyan-400">scalable modular architecture</strong>, and <strong className="text-teal-300">pragmatic problem-solving</strong>. Whether building a complex multi-tenant SaaS, setting up automated CI/CD pipelines, or optimizing database queries, I take pride in delivering solutions that are secure, documented, and easy to maintain.
            </p>
            <p>
              As technology evolves rapidly, I maintain an active habit of continuous learning—staying sharp with the latest developments in modern JavaScript, cloud infrastructure, and software design patterns.
            </p>

            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>SOLID Principles</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>REST &amp; OpenAPI</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Test-Driven Mindset</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Secure Auth &amp; OWASP</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Agile / Git Flow</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Continuous Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Visual Stats Showcase */}
          <div className="lg:col-span-6 bg-slate-900/80 rounded-2xl border border-slate-800 p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5 text-emerald-400" />
              Core Competencies Snapshot
            </h3>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm font-medium mb-1.5">
                  <span className="text-slate-200">Full-Stack Development (React / Node / Express)</span>
                  <span className="text-emerald-400">95%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div className="bg-gradient-to-r from-emerald-400 to-teal-400 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm font-medium mb-1.5">
                  <span className="text-slate-200">RESTful API Design &amp; Security (JWT/OAuth)</span>
                  <span className="text-cyan-400">92%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm font-medium mb-1.5">
                  <span className="text-slate-200">Database Schema Design &amp; SQL Query Tuning</span>
                  <span className="text-emerald-400">90%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm font-medium mb-1.5">
                  <span className="text-slate-200">DevOps, Docker &amp; Cloud Deployment</span>
                  <span className="text-teal-400">85%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div className="bg-gradient-to-r from-teal-400 to-emerald-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-2 gap-4 text-center">
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="block text-2xl font-extrabold text-emerald-400">100%</span>
                <span className="text-xs text-slate-400">Code Reliability &amp; Review</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="block text-2xl font-extrabold text-cyan-400">&lt; 100ms</span>
                <span className="text-xs text-slate-400">Target API Response Latency</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Key Feature Cards (Requested by User) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`group p-8 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:bg-slate-900 transition-all duration-300 shadow-lg ${item.borderColor} relative`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3.5 rounded-xl ${item.bgColor} ${item.accentColor}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mb-4">{item.subtitle}</p>
                <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
