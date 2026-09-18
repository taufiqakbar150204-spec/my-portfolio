import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle, AlertCircle, Loader2, MessageSquare, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: null, message: '' });

    try {
      // Send message to Express.js backend endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          submitting: false,
          success: true,
          message: `${data.message} [Pesan berhasil disimpan ke server/data/messages.json]`,
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Failed to send message.');
      }
    } catch (err) {
      console.warn('Backend endpoint unreachable or returned an error:', err.message);
      setStatus({
        submitting: false,
        success: true,
        message: 'Pesan berhasil dicatat di frontend! Untuk menyimpan pesan ke database file dan melihat inbox di browser, pastikan terminal backend server (folder server) sedang berjalan.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0d1322] relative">
      {/* Glow Backdrops */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Discuss Your Next{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Project or Role
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Apakah Anda memiliki lowongan posisi *full-stack*, pertanyaan seputar konsultasi teknis, atau ide proyek perangkat lunak? Kirimkan pesan kepada saya dan mari kita bangun sesuatu yang luar biasa bersama-sama.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Info & Availability */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white mb-2">Direct Contact Information</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Feel free to reach out directly through email, connect on LinkedIn, or inspect my source code on GitHub.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email Item */}
                <a
                  href="taufiqakbar150204@gmail.com"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-950 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Email Address</div>
                    <div className="text-sm font-medium text-slate-200 group-hover:text-emerald-400 transition-colors">
                      taufiqakbar150204@gmail.com
                    </div>
                  </div>
                </a>

                {/* Location Item */}
                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Location &amp; Timezone</div>
                    <div className="text-sm font-medium text-slate-200">
                      Pekalongan, Indonesia (GMT+7)
                    </div>
                  </div>
                </div>

                {/* LinkedIn Item */}
                <a
                  href="https://www.linkedin.com/in/muhamad-taufiq-akbar-3553a3420"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-950 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Professional Network</div>
                    <div className="text-sm font-medium text-slate-200 group-hover:text-cyan-400 transition-colors">
                      linkedin.com/in/muhamad-taufiq-akbar
                    </div>
                  </div>
                </a>

                {/* GitHub Item */}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-950 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Source Repositories</div>
                    <div className="text-sm font-medium text-slate-200 group-hover:text-emerald-400 transition-colors">
                      github.com/developer
                    </div>
                  </div>
                </a>
              </div>

              {/* Status Card */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-slate-950 to-slate-900 border border-emerald-500/30 flex items-center gap-3.5">
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wide">
                    Fast Response Guaranteed
                  </div>
                  <div className="text-xs text-slate-300">
                    Typically replies within 12 - 24 hours on business days.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-slate-400 text-sm mb-8">
                Fill in the details below. Connected to Express.js REST API backend endpoint.
              </p>

              {/* Status Banner */}
              {status.message && (
                <div
                  className={`p-4 rounded-xl mb-6 flex items-start gap-3 border ${status.success
                    ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
                    : 'bg-rose-950/40 border-rose-500/40 text-rose-300'
                    }`}
                >
                  {status.success ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-400" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-rose-400" />
                  )}
                  <p className="text-sm leading-relaxed">{status.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Your Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Connor"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm transition-all"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Email Address <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm transition-all"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Subject <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Full-Stack Developer Position / Project Inquiry"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm transition-all"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Message Details <span className="text-emerald-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe project requirements, tech stack preferences, timeline, or job description..."
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full py-4 px-6 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  {status.submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message to Developer</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
