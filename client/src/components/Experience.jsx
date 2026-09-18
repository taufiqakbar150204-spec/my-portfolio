import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';

const Experience = () => {
 const experiences = [
  {
    role: "IoT & Embedded System Developer",
    company: "Proyek IoT Penyiraman Kebun Nanas Otomatis",
    location: "Kab. Semarang, Jawa Tengah",
    period: "Okt 2025 - Des 2025",
    description: "Membangun sistem otomatisasi berbasis IoT menggunakan sensor kelembapan tanah dan mikrokontroler untuk efisiensi perawatan tanaman.",
    achievements: [
      "Mengintegrasikan sensor kelembapan tanah dengan mikrokontroler untuk aktuasi penyiraman otomatis.",
      "Meningkatkan efisiensi penggunaan air dan efisiensi perawatan tanaman di perkebunan."
    ],
  },
  {
    role: "IoT System Developer",
    company: "Proyek IoT Penyiraman Tanaman Jamur Otomatis",
    location: "Kota Semarang, Jawa Tengah",
    period: "Apr 2025 - Jun 2025",
    description: "Mengembangkan sistem kontrol suhu dan kelembapan otomatis pada budidaya jamur berbasis IoT.",
    achievements: [
      "Mengoptimalkan kualitas tumbuh jamur dengan menjaga stabilitas mikroklimat (suhu & kelembapan).",
      "Mengurangi intervensi manual dalam perawatan harian budidaya jamur."
    ],
  },
  {
    role: "Team Leader / Main Developer",
    company: "Tim Kontes Robot ABU Indonesia (KRAI)",
    location: "Universitas PGRI Semarang",
    period: "2025",
    description: "Memimpin tim riset dan pengembangan robotika lintas divisi (pemrograman, elektronika, dan mekanik).",
    achievements: [
      "Mengendalikan alur kerja dan timeline riset 6 anggota tim inti hingga mencapai target 100% tepat waktu.",
      "Mengembangkan logic pemrograman dan kontrol hardware untuk kompetisi robot nasional."
    ],
  },
  {
    role: "IT & Network Instructor (Magang Kependidikan)",
    company: "SMK Pelita Nusantara 1 Semarang",
    location: "Kota Semarang, Jawa Tengah",
    period: "Feb 2025 - Apr 2025",
    description: "Mengajar dan membimbing siswa dalam praktik jaringan komputer dan pemeliharaan perangkat keras.",
    achievements: [
      "Mengampu materi instalasi jaringan komputer, perawatan hardware, dan dasar-dasar keamanan siber.",
      "Membimbing siswa dalam memahami arsitektur sistem komputer secara teoritis dan praktis."
    ],
  },
];

  return (
    <section id="experience" className="py-24 bg-[#0b0f19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience &amp;{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Track Record
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Demonstrated history of delivering impactful software solutions, working in agile engineering teams, and optimizing systems for scale.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-32 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-emerald-400 group-hover:bg-emerald-400 group-hover:scale-125 transition-all duration-300 shadow-md"></div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 group-hover:border-slate-700 transition-all duration-300 shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-emerald-400">
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Bullet Points */}
                <div className="space-y-2">
                  {exp.achievements.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
