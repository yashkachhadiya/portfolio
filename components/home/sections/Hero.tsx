"use client";

import {
  ArrowRight,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Terminal,
  CheckCircle2,
  ExternalLink,
  Activity,
  Cpu,
  Layers,
  Code2,
  Server,
  Database,
  Globe,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-36 sm:pt-40 pb-20 sm:pb-28 px-4 sm:px-6 overflow-hidden aurora-mesh">
      {/* Dynamic Ambient Spotlights using global primary & secondary */}
      <div className="aurora-glow-1 absolute top-[10%] left-[8%] w-[380px] sm:w-[540px] h-[380px] sm:h-[540px] rounded-full bg-gradient-to-tr from-primary/20 via-secondary/15 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="aurora-glow-2 absolute bottom-[10%] right-[5%] w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] rounded-full bg-gradient-to-bl from-secondary/20 via-primary/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Live Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-6 text-xs sm:text-sm text-gray-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="font-semibold text-white">Full Stack Developer</span>
              <span className="text-white/30">•</span>
              <span className="text-secondary font-medium">Advergrow Solution</span>
            </div>

            {/* Main Headline */}
            <h1 className="section-heading mb-6">
              Engineering High-Speed, <br className="hidden sm:inline" />
              Scalable Web Apps with{" "}
              <span className="grad-text-aurora">Next.js, NodeJS & NestJS</span>
            </h1>

            {/* Subtitle / Bio summary */}
            <p className="section-desc max-w-[620px] mx-auto lg:mx-0 mb-8 text-base sm:text-lg">
              Hi, I'm <strong className="text-white font-semibold">Yash Kachhadiya</strong>.
              I architect, build, and ship production-grade web platforms end-to-end — from
              modular, high-performance frontends to type-safe REST APIs and resilient database schemas.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-10">
              <a
                href="#projects"
                className="btn-glow px-6 sm:px-7 py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 group"
              >
                <span>View Live Work & Projects</span>
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              <a
                href="/Yash_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass px-5 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 border-white/15 hover:border-primary-soft"
              >
                <FileText size={15} className="text-secondary" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="btn-glass px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold hover:border-white/20"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Quick Bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-gray-400 pt-6 border-t border-white/5">
              <a
                href="https://github.com/yashkachhadiya27"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition"
              >
                <Github size={15} />
                <span>github.com/yashkachhadiya27</span>
              </a>

              <a
                href="https://linkedin.com/in/yashkachhadiya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-secondary transition"
              >
                <Linkedin size={15} />
                <span>linkedin.com/in/yashkachhadiya</span>
              </a>

              <div className="flex items-center gap-1.5 text-gray-400">
                <MapPin size={15} className="text-primary" />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Engineering Telemetry Console */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-2xl p-5 sm:p-6 border border-white/15 shadow-2xl relative overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <div className="flex items-center gap-1.5 ml-2 text-xs font-mono text-gray-300">
                    <Activity size={13} className="text-secondary" />
                    <span>System Architecture Console</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono font-semibold text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Operational</span>
                </div>
              </div>

              {/* Engineering Telemetry Panels */}
              <div className="space-y-3.5 font-sans">
                {/* 1. Active Engineering Workstation */}
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-primary-light flex items-center gap-1.5">
                      <Cpu size={12} className="text-primary" />
                      Active Engineering Workstation
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono">Full-Time</span>
                  </div>
                  <p className="text-white font-bold text-sm">
                    Full Stack Developer @ Advergrow Solution
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">
                    Ahmedabad, Gujarat, India • Scalable Web Architectures
                  </p>
                </div>

                {/* 2. Architectural Layers & Subsystems */}
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-secondary flex items-center gap-1.5">
                      <Layers size={12} />
                      Architectural Layers & Capabilities
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono">3 Layers</span>
                  </div>

                  <div className="space-y-2">
                    <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Code2 size={14} className="text-primary shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-white">Frontend SSR & Dynamic UI</p>
                          <p className="text-[11px] text-gray-400">Next.js 15, React.js, Tailwind CSS</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary-soft text-primary-light border border-primary-soft shrink-0">
                        SSR / SSG
                      </span>
                    </div>

                    <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Server size={14} className="text-secondary shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-white">Type-Safe Backend Microservices</p>
                          <p className="text-[11px] text-gray-400">NestJS, Node.js, REST APIs, JWT Auth</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-secondary-soft text-secondary shrink-0">
                        Type-Safe
                      </span>
                    </div>

                    <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Database size={14} className="text-primary-light shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-white">Relational & NoSQL Data Pipelines</p>
                          <p className="text-[11px] text-gray-400">Prisma ORM, MySQL, MongoDB, Strapi</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/10 shrink-0">
                        ORM / NoSQL
                      </span>
                    </div>
                  </div>
                </div>

                {/* 3. Shipped Production Platforms */}
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-secondary flex items-center gap-1.5">
                      <Globe size={12} />
                      Shipped Production Platforms
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Live in Production
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <a
                      href="https://dashboard.adverti.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-secondary-soft text-[11px] font-medium text-white flex flex-col justify-between group/site transition"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-xs text-white group-hover/site:text-secondary transition-colors truncate">Adverti App</span>
                        <ExternalLink size={11} className="text-gray-400 group-hover/site:text-secondary" />
                      </div>
                      <span className="text-[10px] text-gray-400 mt-1">Analytics Dashboard</span>
                    </a>

                    <a
                      href="https://edument-pathways.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-secondary-soft text-[11px] font-medium text-white flex flex-col justify-between group/site transition"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-xs text-white group-hover/site:text-secondary transition-colors truncate">Edument</span>
                        <ExternalLink size={11} className="text-gray-400 group-hover/site:text-secondary" />
                      </div>
                      <span className="text-[10px] text-gray-400 mt-1">Client Web Portal</span>
                    </a>

                    <a
                      href="https://stetthups.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-secondary-soft text-[11px] font-medium text-white flex flex-col justify-between group/site transition"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-xs text-white group-hover/site:text-secondary transition-colors truncate">Stetthups</span>
                        <ExternalLink size={11} className="text-gray-400 group-hover/site:text-secondary" />
                      </div>
                      <span className="text-[10px] text-gray-400 mt-1">Production Platform</span>
                    </a>
                  </div>
                </div>

                {/* 4. Academic Accreditation */}
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase font-mono tracking-wider text-gray-400">
                      Academic Accreditation • GTU
                    </p>
                    <p className="text-xs font-semibold text-white">
                      B.E. Computer Engineering • GEC Gandhinagar
                    </p>
                  </div>
                  <span className="badge-primary font-bold text-xs">
                    8.12 CGPA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
