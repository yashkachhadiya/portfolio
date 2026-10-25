"use client";

import {
  Briefcase,
  Calendar,
  ExternalLink,
  CheckCircle2,
  Building2,
  Sparkles,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "Advergrow Solution",
      role: "Full Stack Developer",
      type: "Full-Time",
      duration: "2025 – Present",
      location: "Ahmedabad, Gujarat, India",
      isCurrent: true,
      description:
        "Architecting, maintaining, and shipping production-grade full-stack web applications across frontend and backend layers with type safety, robust security, and scalable performance.",
      bullets: [
        "Engineered and maintained production-grade full-stack web applications using React.js, Next.js, NestJS, Node.js, and TypeScript, ensuring modular, type-safe architecture.",
        "Architected and deployed scalable RESTful APIs with NestJS and Express.js, implementing secure authentication workflows, request validation middleware, and core business logic.",
        "Modeled and managed high-reliability relational and NoSQL databases using Prisma ORM with MySQL and Mongoose with MongoDB, optimizing schema design and query performance.",
        "Built mobile-first, cross-browser user interfaces utilizing Tailwind CSS, Material UI (MUI), and Bootstrap, elevating user experience and component reusability.",
        "Integrated decoupled Headless CMS platforms (Strapi CMS & Headless WordPress), empowering editorial teams with flexible, real-time content publishing capabilities.",
      ],
      skills: [
        "React.js",
        "Next.js",
        "NestJS",
        "Node.js",
        "ExpressJS",
        "TypeScript",
        "Prisma ORM",
        "MySQL",
        "MongoDB",
        "Tailwind CSS",
        "Strapi CMS",
      ],
      deployedSites: [
        {
          name: "Adverti App Dashboard",
          url: "https://dashboard.adverti.app",
          tag: "Advertising & Analytics",
          description: "High-performance digital advertising & live metrics dashboard",
        },
        {
          name: "Edument Pathways",
          url: "https://edument-pathways.com/",
          tag: "Educational Portal",
          description: "Comprehensive educational consulting & admissions platform",
        },
        {
          name: "Stetthups",
          url: "https://stetthups.com/",
          tag: "Production Platform",
          description: "Modern brand presence and client engagement web application",
        },
      ],
    },
    {
      company: "Advergrow Solution",
      role: "Web Development Intern",
      type: "Internship",
      duration: "6 Months",
      location: "Ahmedabad, Gujarat, India",
      isCurrent: false,
      description:
        "Focused on full-stack web development fundamentals, delivering interactive frontend layouts, managing Strapi CMS models, and engineering backend REST endpoints tested via Postman.",
      bullets: [
        "Developed interactive frontend components using React.js and engineered backend REST APIs with Node.js, Express.js, and Mongoose.",
        "Conducted comprehensive endpoint testing and verification via Postman to ensure reliable request-response contracts.",
        "Delivered responsive, accessible UI layouts using Bootstrap and MUI while configuring and managing dynamic content structures within Strapi CMS.",
      ],
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Bootstrap",
        "Material UI",
        "Strapi CMS",
        "Postman",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-[1100px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-[720px] mx-auto mb-16">
          <div className="inline-block mb-3">
            <span className="section-tag">CAREER PATH</span>
          </div>
          <h2 className="section-heading mb-4">
            Professional Experience <br className="hidden sm:inline" />
            <span className="grad-text-aurora">& Production Delivery</span>
          </h2>
          <p className="section-desc">
            Hands-on software engineering experience delivering commercial web applications,
            production client dashboards, and scalable backend infrastructure.
          </p>
        </div>

        {/* Illuminated Vertical Timeline */}
        <div className="relative ml-2 sm:ml-6 space-y-12">
          {/* Continuous vertical timeline track line, perfectly centered at x = 10px */}
          <div className="absolute top-4 bottom-4 left-[10px] w-[2px] bg-white/10 -translate-x-1/2 pointer-events-none" />

          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10 group">
              {/* Timeline Indicator Beacon, perfectly centered at x = 10px */}
              <div
                className={`absolute left-[10px] top-8 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-4 border-[#030712] flex items-center justify-center transition-transform group-hover:scale-125 z-10 ${
                  exp.isCurrent
                    ? "bg-primary shadow-[0_0_16px_var(--primary)]"
                    : "bg-secondary shadow-[0_0_14px_var(--secondary)]"
                }`}
              />

              <div className="glass-panel rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all">
                {/* Header Information */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5 pb-5 border-b border-white/10">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <span className="badge-primary">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-300">
                      <span className="flex items-center gap-1.5 text-white font-semibold">
                        <Building2 size={15} className="text-primary" />
                        <span>{exp.company}</span>
                      </span>
                      <span className="text-white/30">•</span>
                      <span className="flex items-center gap-1 text-gray-400">
                        <MapPin size={13} className="text-secondary" />
                        <span>{exp.location}</span>
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-gray-300 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                    <Calendar size={13} className="text-secondary" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Role Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Bullets from resume */}
                <div className="space-y-3 mb-6">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-gray-400">
                    Key Deliverables & Responsibilities:
                  </p>
                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 leading-relaxed"
                      >
                        <CheckCircle2
                          size={15}
                          className="text-primary shrink-0 mt-0.5"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Live Client Sites Showcase */}
                {exp.deployedSites && (
                  <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-primary-soft">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-secondary mb-3.5">
                      <Sparkles size={14} />
                      <span>Production Web Platforms Built at Advergrow:</span>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-3">
                      {exp.deployedSites.map((site, sIdx) => (
                        <a
                          key={sIdx}
                          href={site.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-secondary-soft transition-all flex flex-col justify-between group/site"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-1 mb-1">
                              <span className="font-bold text-white text-xs group-hover/site:text-secondary-light transition-colors">
                                {site.name}
                              </span>
                              <ExternalLink
                                size={12}
                                className="text-gray-400 group-hover/site:text-secondary-light transition-colors"
                              />
                            </div>
                            <p className="text-[11px] text-gray-400 leading-tight">
                              {site.description}
                            </p>
                          </div>
                          <span className="text-[10px] text-secondary font-mono mt-3 truncate block">
                            {site.url.replace("https://", "")}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech applied */}
                <div className="pt-4 border-t border-white/10">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-2.5">
                    Stack Applied:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
