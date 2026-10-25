"use client";

import {
  Briefcase,
  Calendar,
  ExternalLink,
  CheckCircle2,
  Building2,
  Sparkles,
} from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "Advergrow Solution",
      role: "Full Stack Developer",
      type: "Full-Time",
      duration: "2025 – Present",
      isCurrent: true,
      description:
        "Architecting, maintaining, and shipping production-grade full-stack web applications across frontend and backend layers with type safety and scalable performance.",
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
          name: "Adverti Dashboard",
          url: "https://dashboard.adverti.app",
          description: "Digital advertising & real-time analytics platform",
        },
        {
          name: "Edument Pathways",
          url: "https://edument-pathways.com/",
          description: "Educational consultancy & admissions portal",
        },
        {
          name: "Stetthups",
          url: "https://stetthups.com/",
          description: "Modern digital presence & client engagement platform",
        },
      ],
    },
    {
      company: "Advergrow Solution",
      role: "Web Development Intern",
      type: "Internship",
      duration: "6 Months",
      isCurrent: false,
      description:
        "Focused on full-stack web foundations, delivering responsive UI layouts and backend endpoints tested with Postman.",
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
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-[700px] mx-auto">
          <p className="section-label mb-3">CAREER PATH</p>
          <h2 className="section-title mb-4">
            Professional Experience <br />
            <span className="grad-text">& Production Delivery</span>
          </h2>
          <p className="section-description">
            Hands-on commercial software engineering, building high-availability
            web platforms, customer dashboards, and business-critical backend APIs.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-[rgba(124,58,237,0.3)] ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Indicator Dot */}
              <div
                className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full border-4 border-[#0a0a0f] flex items-center justify-center ${exp.isCurrent
                    ? "bg-[#06b6d4] ring-4 ring-[#06b6d4]/20"
                    : "bg-[#7c3aed]"
                  }`}
              />

              <div className="card p-6 md:p-8 rounded-2xl border border-white/10 bg-[rgba(19,19,26,0.7)] backdrop-blur-md hover:border-[rgba(124,58,237,0.4)] transition">
                {/* Header Info */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4 pb-4 border-b border-white/10">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-[rgba(6,182,212,0.15)] text-[#06b6d4] font-medium border border-[rgba(6,182,212,0.3)]">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-[var(--accent)] font-semibold">
                      <Building2 size={16} />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs md:text-sm text-[var(--muted)] px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">
                    <Calendar size={14} />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Role Overview */}
                <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Bullets from resume */}
                <div className="space-y-3 mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                    Key Deliverables & Responsibilities:
                  </p>
                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-3 text-xs md:text-sm text-gray-300 leading-relaxed"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-[#06b6d4] shrink-0 mt-0.5"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Highlight Deployed Sites if present */}
                {exp.deployedSites && (
                  <div className="mb-6 p-4 rounded-xl bg-[rgba(6,182,212,0.06)] border border-[rgba(6,182,212,0.2)]">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#06b6d4] mb-3">
                      <Sparkles size={14} />
                      <span>Production Deployments & Client Sites Worked On:</span>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-3">
                      {exp.deployedSites.map((site, sIdx) => (
                        <a
                          key={sIdx}
                          href={site.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col justify-between p-3 rounded-lg bg-[rgba(19,19,26,0.8)] border border-white/10 hover:border-[#06b6d4] hover:bg-[rgba(6,182,212,0.1)] transition group/site"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-1 mb-1">
                              <span className="font-semibold text-white text-xs group-hover/site:text-[#06b6d4] transition">
                                {site.name}
                              </span>
                              <ExternalLink
                                size={12}
                                className="text-[var(--muted)] group-hover/site:text-[#06b6d4]"
                              />
                            </div>
                            <p className="text-[0.7rem] text-[var(--muted)] leading-tight">
                              {site.description}
                            </p>
                          </div>
                          <span className="text-[0.65rem] text-[#06b6d4] font-mono mt-2 truncate">
                            {site.url.replace("https://", "")}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Skills tags */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-2.5">
                    Stack Applied:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300"
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
