"use client";

import {
  Code2,
  Server,
  Database,
  Layers,
  Sparkles,
  MapPin,
  Building2,
  GraduationCap,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: <Code2 size={22} className="text-primary" />,
      title: "Frontend Engineering",
      desc: "Architecting responsive, high-speed interfaces using React.js and Next.js (SSR/SSG) paired with Tailwind CSS, Material UI, and modern accessibility standards.",
      skills: ["React.js", "Next.js", "Tailwind CSS", "MUI", "TypeScript"],
    },
    {
      icon: <Server size={22} className="text-secondary" />,
      title: "Backend & REST APIs",
      desc: "Designing modular, type-safe backend microservices with NestJS, Node.js, and Express.js, implementing JWT authentication, validation middleware, and OOP patterns.",
      skills: ["NestJS", "Node.js", "ExpressJS", "RESTful APIs", "JWT Auth"],
    },
    {
      icon: <Database size={22} className="text-primary-light" />,
      title: "Relational & NoSQL Data",
      desc: "Modeling resilient database schemas and optimizing complex queries using Prisma ORM with MySQL and Mongoose with MongoDB for high-throughput environments.",
      skills: ["MySQL", "MongoDB", "Prisma ORM", "Mongoose", "Data Modeling"],
    },
    {
      icon: <Layers size={22} className="text-secondary-light" />,
      title: "Headless CMS & Tooling",
      desc: "Integrating decoupled CMS platforms like Strapi CMS and Headless WordPress, backed by disciplined Git version control, Postman API testing, and CI/CD.",
      skills: ["Strapi CMS", "Headless WP", "Postman", "Git / GitHub"],
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-[720px] mx-auto mb-16">
          <div className="inline-block mb-3">
            <span className="section-tag">WHO I AM</span>
          </div>
          <h2 className="section-heading mb-4">
            Passionate Full Stack Engineer, <br className="hidden sm:inline" />
            <span className="grad-text-aurora">Focused on Scalability & Clean Code</span>
          </h2>
          <p className="section-desc">
            Bridging pixel-perfect frontend experiences with robust, enterprise-grade backend
            architectures to deliver impactful web platforms.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-5">
          {/* Bento Tile 1: Professional Summary & Approach (Col 7) */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <span className="p-2 rounded-xl bg-white/5 border border-white/10 text-primary">
                  <Sparkles size={18} />
                </span>
                <h3 className="text-xl font-bold text-white">
                  Engineering Philosophy & Production Track Record
                </h3>
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                I am a results-driven <strong className="text-white">Full Stack Developer</strong> with
                hands-on production experience architecting, building, and shipping scalable web
                applications end-to-end.
              </p>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Currently at <strong className="text-white">Advergrow Solution</strong> in Ahmedabad,
                I develop mission-critical client platforms including the{" "}
                <a
                  href="https://dashboard.adverti.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline font-medium inline-flex items-center gap-0.5"
                >
                  Adverti Dashboard <ArrowUpRight size={13} />
                </a>
                ,{" "}
                <a
                  href="https://edument-pathways.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline font-medium inline-flex items-center gap-0.5"
                >
                  Edument Pathways <ArrowUpRight size={13} />
                </a>
                , and{" "}
                <a
                  href="https://stetthups.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline font-medium inline-flex items-center gap-0.5"
                >
                  Stetthups <ArrowUpRight size={13} />
                </a>
                . My core competency lies in delivering type-safe, maintainable, and high-performance solutions.
              </p>
            </div>

            <div className="pt-5 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <p className="text-[10px] uppercase font-mono tracking-wider text-gray-400">
                  Methodology
                </p>
                <p className="text-xs sm:text-sm font-bold text-white mt-0.5">
                  Type-Safe & Clean
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <p className="text-[10px] uppercase font-mono tracking-wider text-gray-400">
                  Focus
                </p>
                <p className="text-xs sm:text-sm font-bold text-white mt-0.5">
                  End-to-End Ownership
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 col-span-2 sm:col-span-1">
                <p className="text-[10px] uppercase font-mono tracking-wider text-gray-400">
                  Delivery
                </p>
                <p className="text-xs sm:text-sm font-bold text-white mt-0.5">
                  Production Scalability
                </p>
              </div>
            </div>
          </div>

          {/* Bento Tile 2: Professional Snapshot & Location (Col 5) */}
          <div className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Building2 size={18} className="text-primary" />
                  <span className="font-bold text-white text-base">Current Affiliation</span>
                </div>
                <span className="badge-primary font-mono text-[10px]">
                  Full-Time Active
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                  <p className="text-xs text-gray-400">Company</p>
                  <p className="text-base font-bold text-white">Advergrow Solution</p>
                  <p className="text-xs text-secondary mt-0.5">Full Stack Developer (2025 – Present)</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                  <p className="text-xs text-gray-400">Base Location</p>
                  <div className="flex items-center gap-1.5 text-white font-medium text-sm mt-0.5">
                    <MapPin size={14} className="text-primary" />
                    <span>Ahmedabad, Gujarat, India</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                  <p className="text-xs text-gray-400">Academic Education</p>
                  <div className="flex items-center gap-1.5 text-white font-medium text-sm mt-0.5">
                    <GraduationCap size={15} className="text-secondary" />
                    <span>Government Engineering College, Gandhinagar (GTU)</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">B.E. Computer Engineering • <strong className="text-white">8.12 CGPA</strong></p>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-primary" />
                <span>Verified Production Experience</span>
              </span>
              <a
                href="#experience"
                className="text-secondary hover:underline font-medium flex items-center gap-0.5"
              >
                <span>View Timeline</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          {/* Bento Tiles 3: 4 Engineering Pillars (Col 12) */}
          <div className="lg:col-span-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-white/20 transition-all group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {pillar.icon}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    {pillar.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {pillar.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
