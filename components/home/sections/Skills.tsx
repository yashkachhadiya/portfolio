"use client";

import {
  Terminal,
  Layout,
  Server,
  Database,
  Layers,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function Skills() {
  const categories = [
    {
      title: "Core Languages",
      icon: <Terminal size={18} className="text-primary" />,
      badge: "Foundations",
      skills: [
        "JavaScript (ES6+)",
        "TypeScript",
        "HTML5",
        "CSS3",
        "SQL",
      ],
    },
    {
      title: "Frontend Engineering",
      icon: <Layout size={18} className="text-secondary" />,
      badge: "UI / UX & SSR",
      skills: [
        "React.js",
        "Next.js (SSR / SSG)",
        "Tailwind CSS",
        "Material UI (MUI)",
        "Bootstrap",
        "Responsive Web Design",
      ],
    },
    {
      title: "Backend & Architecture",
      icon: <Server size={18} className="text-primary-light" />,
      badge: "Services & APIs",
      skills: [
        "NestJS",
        "Node.js",
        "ExpressJS",
        "RESTful APIs",
        "JWT Authentication",
        "Request Middleware",
        "OOP Principles",
      ],
    },
    {
      title: "Databases & ORM",
      icon: <Database size={18} className="text-secondary-light" />,
      badge: "Data Modeling",
      skills: [
        "MySQL",
        "MongoDB",
        "Prisma ORM",
        "Mongoose",
        "Relational Schema Design",
        "NoSQL Modeling",
      ],
    },
    {
      title: "CMS & Developer Tools",
      icon: <Layers size={18} className="text-primary" />,
      badge: "Delivery & Tooling",
      skills: [
        "Strapi CMS",
        "Headless WordPress",
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-[720px] mx-auto mb-16">
          <div className="inline-block mb-3">
            <span className="section-tag">TECHNICAL ARSENAL</span>
          </div>
          <h2 className="section-heading mb-4">
            Technologies & Frameworks <br className="hidden sm:inline" />
            <span className="grad-text-aurora">I Build Scalable Products With</span>
          </h2>
          <p className="section-desc">
            A comprehensive, verified technology stack practiced across production platforms,
            commercial dashboards, and high-load web architectures.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className={`glass-panel rounded-2xl p-6 flex flex-col justify-between hover:border-white/20 transition-all ${
                idx === 2 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <span className="p-2 rounded-xl bg-white/5 border border-white/10">
                      {cat.icon}
                    </span>
                    <h3 className="font-bold text-white text-base">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-gray-400 px-2 py-0.5 rounded-full bg-white/5 border border-white/5">
                    {cat.badge}
                  </span>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-xl text-xs font-medium text-gray-200 bg-white/[0.03] border border-white/10 hover:border-secondary-soft hover:bg-white/[0.07] hover:text-white transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Status */}
              <div className="mt-6 pt-3.5 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-primary" />
                  <span>Production verified</span>
                </span>
                <span className="text-secondary font-mono text-[10px]">● Active Stack</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
