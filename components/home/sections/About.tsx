"use client";

import {
  Code2,
  Server,
  Database,
  Layers,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: <Code2 size={24} className="text-[#06b6d4]" />,
      title: "Frontend Craftsmanship",
      desc: "Creating high-speed, interactive, and responsive web applications with React.js, Next.js (SSR/SSG), Tailwind CSS, Material UI, and modern UI best practices.",
      tags: ["React.js", "Next.js", "Tailwind CSS", "MUI", "TypeScript"],
    },
    {
      icon: <Server size={24} className="text-[#a78bfa]" />,
      title: "Scalable Backend & APIs",
      desc: "Engineering robust, modular backend services with NestJS, Node.js, and Express.js, featuring secure JWT auth, request validation middleware, and clean OOP architecture.",
      tags: ["NestJS", "Node.js", "Express.js", "REST APIs", "JWT"],
    },
    {
      icon: <Database size={24} className="text-[#38bdf8]" />,
      title: "Relational & NoSQL Data",
      desc: "Architecting high-reliability database structures with Prisma ORM (MySQL) and Mongoose (MongoDB), focusing on query optimization and resilient schema modeling.",
      tags: ["Prisma ORM", "MySQL", "MongoDB", "Mongoose"],
    },
    {
      icon: <Layers size={24} className="text-[#34d399]" />,
      title: "Headless CMS & Tooling",
      desc: "Integrating decoupled CMS platforms like Strapi CMS & Headless WordPress, enabling agile content publishing with Git, GitHub, and Postman API workflows.",
      tags: ["Strapi CMS", "Headless WP", "Postman", "Git / GitHub"],
    },
  ];

  return (
    <section id="about" className="px-6 py-24 max-w-[1200px] mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-[760px] mx-auto mb-16">
        <p className="section-label mb-3">WHO I AM</p>
        <h2 className="section-title mb-4">
          Architecting Products from <br className="hidden sm:inline" />
          <span className="grad-text">Design to Production</span>
        </h2>
        <p className="section-description text-base md:text-lg">
          A results-driven Full Stack Developer with hands-on experience building,
          shipping, and maintaining scalable web applications end-to-end.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Bio & Core Highlights */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="card p-7 rounded-2xl border border-white/10 bg-[rgba(19,19,26,0.7)] backdrop-blur-md">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7c3aed]" />
              Professional Summary
            </h3>
            <p className="text-[var(--muted)] text-[0.95rem] leading-relaxed mb-4">
              I am a Full Stack Developer currently engineering production-grade web
              applications at <span className="text-white font-medium">Advergrow Solution</span>.
              My work spans architecting modular frontends with Next.js & React, writing
              type-safe backend services with NestJS & Node.js, and structuring scalable
              databases.
            </p>
            <p className="text-[var(--muted)] text-[0.95rem] leading-relaxed mb-6">
              I have delivered commercial applications including the{" "}
              <a
                href="https://dashboard.adverti.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#06b6d4] hover:underline font-medium inline-flex items-center gap-0.5"
              >
                Adverti Dashboard <ArrowUpRight size={14} />
              </a>
              ,{" "}
              <a
                href="https://edument-pathways.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#06b6d4] hover:underline font-medium inline-flex items-center gap-0.5"
              >
                Edument Pathways <ArrowUpRight size={14} />
              </a>
              , and{" "}
              <a
                href="https://stetthups.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#06b6d4] hover:underline font-medium inline-flex items-center gap-0.5"
              >
                Stetthups <ArrowUpRight size={14} />
              </a>
              .
            </p>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5 text-sm">
              <div className="flex items-center gap-2 text-[var(--muted)]">
                <Briefcase size={16} className="text-[#a78bfa]" />
                <span>
                  Experience:{" "}
                  <strong className="text-white">Full Stack Developer @ Advergrow</strong>
                </span>
              </div>
              <div className="flex items-center gap-2 text-[var(--muted)]">
                <GraduationCap size={16} className="text-[#06b6d4]" />
                <span>
                  Degree:{" "}
                  <strong className="text-white">B.E. Computer Engineering (8.12 CGPA)</strong>
                </span>
              </div>
              <div className="flex items-center gap-2 text-[var(--muted)]">
                <CheckCircle2 size={16} className="text-[#10b981]" />
                <span>
                  Focus:{" "}
                  <strong className="text-white">Production Scalability & Clean Code</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: 4 Capability Pillars */}
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="card p-6 rounded-2xl border border-white/10 bg-[rgba(19,19,26,0.6)] backdrop-blur-md hover:border-[rgba(124,58,237,0.4)] transition group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                {pillar.title}
              </h4>
              <p className="text-[var(--muted)] text-xs md:text-sm leading-relaxed mb-4">
                {pillar.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {pillar.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="chip text-[0.7rem] px-2 py-0.5 bg-white/5 border border-white/10 text-[var(--muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
