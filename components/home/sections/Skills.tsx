"use client";

import {
  Code,
  Layout,
  Server,
  Database,
  Cpu,
  Layers,
  Terminal,
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Terminal size={20} className="text-[#06b6d4]" />,
      badge: "Core Fundamentals",
      items: [
        "JavaScript (ES6+)",
        "TypeScript",
        "HTML5",
        "CSS3",
        "SQL",
      ],
    },
    {
      title: "Frontend Engineering",
      icon: <Layout size={20} className="text-[#a78bfa]" />,
      badge: "User Interface",
      items: [
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
      icon: <Server size={20} className="text-[#38bdf8]" />,
      badge: "APIs & Services",
      items: [
        "NestJS",
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "JWT Authentication",
        "Request Middleware",
        "OOP Principles",
      ],
    },
    {
      title: "Databases & ORM",
      icon: <Database size={20} className="text-[#34d399]" />,
      badge: "Data Modeling",
      items: [
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
      icon: <Layers size={20} className="text-[#f59e0b]" />,
      badge: "Workflows & Delivery",
      items: [
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
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-[1200px] mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16 max-w-[700px] mx-auto">
          <p className="section-label mb-3">TECHNICAL SKILLS</p>
          <h2 className="section-title mb-4">
            Technologies & Frameworks <br />
            <span className="grad-text">I Build With Daily</span>
          </h2>
          <p className="section-description">
            A comprehensive overview of the modern programming languages, libraries,
            frameworks, and developer tooling directly featured in my production work.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((s, i) => (
            <div
              key={i}
              className={`card p-6 rounded-2xl border border-white/10 bg-[rgba(19,19,26,0.65)] backdrop-blur-md hover:border-[rgba(124,58,237,0.35)] transition flex flex-col justify-between ${
                i === 2 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                {/* CARD HEADER */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                  <div className="flex items-center gap-2.5">
                    <span className="p-2 rounded-lg bg-white/5 flex items-center justify-center">
                      {s.icon}
                    </span>
                    <h3 className="font-bold text-white text-base">
                      {s.title}
                    </h3>
                  </div>
                  <span className="text-[0.7rem] uppercase tracking-wider text-[var(--muted)] font-medium">
                    {s.badge}
                  </span>
                </div>

                {/* SKILLS CHIPS */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {s.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[rgba(124,58,237,0.12)] border border-[rgba(124,58,237,0.25)] text-gray-200 hover:text-white hover:border-[#06b6d4] transition cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* FOOTER ACCENT */}
              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[0.75rem] text-[var(--muted)]">
                <span>Verified in production</span>
                <span className="text-[#06b6d4]">● Active</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
