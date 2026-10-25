"use client";

import {
  ArrowRight,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  CheckCircle,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-bg mesh relative px-6 pt-[120px] pb-[90px] overflow-hidden">
      {/* Decorative ambient glowing orbs */}
      <div className="orb absolute top-[12%] left-[4%] w-[320px] h-[320px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.22)_0%,transparent_70%)] pointer-events-none blur-2xl" />
      <div className="orb2 absolute bottom-[10%] right-[6%] w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.18)_0%,transparent_70%)] pointer-events-none blur-2xl" />

      <div className="max-w-[960px] mx-auto text-center relative z-10">
        {/* Availability / Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(124,58,237,0.15)] border border-[rgba(124,58,237,0.35)] text-xs md:text-sm text-[#06b6d4] font-medium mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
          <span>Full Stack Developer @ Advergrow Solution</span>
          <span className="text-white/30">•</span>
          <span className="text-[var(--text)]">Available for New Challenges</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-extrabold text-[clamp(2.4rem,6vw,4.8rem)] leading-[1.1] tracking-tight mb-5">
          Hi, I'm <span className="grad-text">Yash Kachhadiya</span>
          <br />
          <span className="text-white text-[0.85em]">Full Stack Developer</span>
        </h1>

        {/* Subtitle / Value Prop */}
        <p className="text-[var(--muted)] text-base md:text-lg max-w-[720px] mx-auto leading-relaxed mb-8">
          Architecting and shipping production-grade web applications end-to-end.
          Specialized in high-performance frontends with{" "}
          <span className="text-[var(--text)] font-semibold">React.js & Next.js</span>,
          scalable backend services with{" "}
          <span className="text-[var(--text)] font-semibold">NestJS, Node.js & TypeScript</span>,
          and robust database schemas.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center items-center mb-10">
          <a
            href="#projects"
            className="btn-glow px-7 py-3.5 rounded-xl text-white font-semibold flex items-center gap-2 group text-sm md:text-base"
          >
            <span>View Production & Personal Work</span>
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>

          <a
            href="/Yash_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline px-6 py-3.5 rounded-xl font-semibold flex items-center gap-2 text-sm md:text-base border-[rgba(6,182,212,0.4)] hover:border-[#06b6d4] hover:bg-[rgba(6,182,212,0.1)] transition"
          >
            <FileText size={18} className="text-[#06b6d4]" />
            <span>Download Resume</span>
          </a>

          <a
            href="#contact"
            className="btn-outline px-6 py-3.5 rounded-xl font-semibold text-sm md:text-base hover:bg-white/5 transition"
          >
            Get In Touch
          </a>
        </div>

        {/* Social / Contact Quick Bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--muted)] pt-4 border-t border-white/5">
          <a
            href="https://github.com/yashkachhadiya27"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white flex items-center gap-1.5 transition"
          >
            <Github size={16} />
            <span>github.com/yashkachhadiya27</span>
          </a>

          <a
            href="https://linkedin.com/in/yashkachhadiya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#06b6d4] flex items-center gap-1.5 transition"
          >
            <Linkedin size={16} />
            <span>linkedin.com/in/yashkachhadiya</span>
          </a>

          <a
            href="mailto:yashkachhadiya3302@gmail.com"
            className="hover:text-white flex items-center gap-1.5 transition"
          >
            <Mail size={16} />
            <span>yashkachhadiya3302@gmail.com</span>
          </a>

          <div className="flex items-center gap-1.5 text-white/50">
            <MapPin size={16} />
            <span>Ahmedabad, Gujarat, India</span>
          </div>
        </div>

        {/* Quick Highlights Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 text-left">
          <div className="card p-4 rounded-xl border border-white/10 bg-[rgba(19,19,26,0.6)] backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[rgba(124,58,237,0.15)] flex items-center justify-center text-[#a78bfa]">
                <Sparkles size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[var(--muted)] font-semibold">
                  Current Role
                </p>
                <p className="text-sm font-bold text-white">
                  Full Stack Dev @ Advergrow
                </p>
              </div>
            </div>
          </div>

          <div className="card p-4 rounded-xl border border-white/10 bg-[rgba(19,19,26,0.6)] backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[rgba(6,182,212,0.15)] flex items-center justify-center text-[#06b6d4]">
                <CheckCircle size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[var(--muted)] font-semibold">
                  Core Stack
                </p>
                <p className="text-sm font-bold text-white">
                  React • Next.js • NodeJS • Express • NestJS • TS • JS
                </p>
              </div>
            </div>
          </div>

          <div className="card p-4 rounded-xl border border-white/10 bg-[rgba(19,19,26,0.6)] backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[rgba(16,185,129,0.15)] flex items-center justify-center text-[#10b981]">
                <Sparkles size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[var(--muted)] font-semibold">
                  Education
                </p>
                <p className="text-sm font-bold text-white">
                  B.E. Computer Eng. (8.12 CGPA)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
