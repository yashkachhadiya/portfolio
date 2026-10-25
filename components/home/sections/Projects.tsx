"use client";

import { useState } from "react";
import {
  ExternalLink,
  Github,
  Globe,
  Layers,
  Server,
  Sparkles,
  BarChart3,
  GraduationCap,
  Boxes,
} from "lucide-react";

type ProjectCategory = "all" | "production" | "personal";

interface ProjectItem {
  title: string;
  category: "production" | "personal";
  badge: string;
  organization: string;
  description: string;
  highlights: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  icon: "dashboard" | "education" | "brand" | "hoarding" | "inventory";
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const projects: ProjectItem[] = [
    {
      title: "Adverti App Dashboard",
      category: "production",
      badge: "Commercial Production Platform",
      organization: "Advergrow Solution",
      description:
        "High-performance digital advertising and analytics management dashboard engineered for campaign tracking, real-time performance metrics, and enterprise user account workflows.",
      highlights: [
        "Live production dashboard serving active advertising operations",
        "Engineered with Next.js, React.js, TypeScript, and high-speed API endpoints",
        "Responsive analytics charts and role-based workspace management",
      ],
      tech: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "RESTful APIs", "Analytics"],
      liveUrl: "https://dashboard.adverti.app",
      icon: "dashboard",
    },
    {
      title: "Edument Pathways",
      category: "production",
      badge: "Production Client Web Portal",
      organization: "Advergrow Solution",
      description:
        "Comprehensive educational consulting and career pathway portal delivering streamlined navigation, university program exploration, and dynamic lead management for students.",
      highlights: [
        "Dynamic content delivery with headless CMS integrations",
        "Mobile-first, cross-browser optimized interface ensuring fast load times",
        "Interactive course search, filtering, and consultation request pipelines",
      ],
      tech: ["Next.js", "React.js", "Tailwind CSS", "Headless CMS", "REST APIs", "SEO"],
      liveUrl: "https://edument-pathways.com/",
      icon: "education",
    },
    {
      title: "Stetthups",
      category: "production",
      badge: "Production Web Platform",
      organization: "Advergrow Solution",
      description:
        "Modern digital web platform engineered for seamless user engagement, interactive brand presentation, and reliable performance across desktop and mobile devices.",
      highlights: [
        "Modular and reusable UI component architecture",
        "Polished visual typography, fluid transitions, and performance optimization",
        "Robust API integrations for real-time contact and inquiry workflows",
      ],
      tech: ["React.js", "Node.js", "Tailwind CSS", "REST APIs", "Responsive UI"],
      liveUrl: "https://stetthups.com/",
      icon: "brand",
    },
    {
      title: "Hoarding Buddies",
      category: "personal",
      badge: "Full-Stack Web Platform",
      organization: "Independent Full-Stack Project",
      description:
        "End-to-end full-stack web platform featuring secure user authentication, item lifecycle management, and real-time dynamic data rendering for an interactive user experience.",
      highlights: [
        "Designed modular RESTful APIs and Mongoose schemas to support high-speed CRUD operations and filtering",
        "Seamless client-server state synchronization with optimized MongoDB database queries",
        "Secure JWT authentication and protected routes for authenticated user actions",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "RESTful APIs"],
      githubUrl: "https://github.com/yashkachhadiya27/hording-buddies",
      icon: "hoarding",
    },
    {
      title: "Asset Management System",
      category: "personal",
      badge: "Enterprise Inventory Platform",
      organization: "Independent Full-Stack Project",
      description:
        "Full-stack asset tracking and inventory management system featuring role-based authentication, real-time stock monitoring, and administrative governance.",
      highlights: [
        "Crafted a responsive, mobile-friendly React.js dashboard integrated with a scalable Node.js/Express.js backend",
        "Role-based access control (RBAC) to streamline organizational asset auditing and equipment checkout",
        "Structured RESTful APIs for inventory tracking, user management, and automated stock alerts",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "RBAC"],
      githubUrl: "https://github.com/yashkachhadiya27/Asset-Management-System",
      icon: "inventory",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const getIcon = (iconName: ProjectItem["icon"]) => {
    switch (iconName) {
      case "dashboard":
        return <BarChart3 size={32} className="text-[#06b6d4]" />;
      case "education":
        return <GraduationCap size={32} className="text-[#a78bfa]" />;
      case "brand":
        return <Globe size={32} className="text-[#38bdf8]" />;
      case "hoarding":
        return <Boxes size={32} className="text-[#34d399]" />;
      case "inventory":
        return <Layers size={32} className="text-[#f59e0b]" />;
    }
  };

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-[1200px] mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12 max-w-[760px] mx-auto">
          <p className="section-label mb-3">PORTFOLIO SHOWCASE</p>
          <h2 className="section-title mb-4">
            Featured Projects & <br />
            <span className="grad-text">Production Deployments</span>
          </h2>
          <p className="section-description">
            A blend of live commercial web applications delivered at{" "}
            <span className="text-white font-medium">Advergrow Solution</span> and
            full-stack open-source platforms built with React, Node.js, and MongoDB.
          </p>

          {/* FILTER BUTTONS */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                activeFilter === "all"
                  ? "bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] text-white shadow-md"
                  : "bg-white/5 border border-white/10 text-[var(--muted)] hover:text-white"
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("production")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                activeFilter === "production"
                  ? "bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] text-white shadow-md"
                  : "bg-white/5 border border-white/10 text-[var(--muted)] hover:text-white"
              }`}
            >
              Company Production Sites (3)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("personal")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                activeFilter === "personal"
                  ? "bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] text-white shadow-md"
                  : "bg-white/5 border border-white/10 text-[var(--muted)] hover:text-white"
              }`}
            >
              Full-Stack GitHub Platforms (2)
            </button>
          </div>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((p, i) => (
            <div
              key={i}
              className="card overflow-hidden p-0 rounded-2xl border border-white/10 bg-[rgba(19,19,26,0.7)] backdrop-blur-md flex flex-col justify-between hover:border-[rgba(124,58,237,0.4)] transition group"
            >
              {/* TOP HEADER SECTION WITH ACCENT GRADIENT */}
              <div className="p-6 bg-gradient-to-br from-[rgba(124,58,237,0.18)] to-[rgba(6,182,212,0.12)] border-b border-white/5 flex flex-col justify-between h-[150px] relative overflow-hidden">
                <div className="flex items-center justify-between z-10">
                  <span className="text-[0.7rem] uppercase tracking-wider font-semibold py-1 px-2.5 rounded-full bg-[rgba(10,10,15,0.7)] border border-white/10 text-[#06b6d4]">
                    {p.badge}
                  </span>
                  <span className="text-xs text-[var(--muted)] font-medium">
                    {p.organization}
                  </span>
                </div>

                <div className="flex items-center gap-3 z-10">
                  <div className="p-2.5 rounded-xl bg-[rgba(10,10,15,0.7)] border border-white/10 group-hover:scale-110 transition-transform">
                    {getIcon(p.icon)}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg group-hover:text-[#06b6d4] transition">
                      {p.title}
                    </h3>
                  </div>
                </div>

                {/* Ambient glow decoration */}
                <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-[#7c3aed]/10 blur-xl group-hover:bg-[#06b6d4]/20 transition" />
              </div>

              {/* BODY SECTION */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-[var(--muted)] text-xs md:text-sm leading-relaxed mb-4">
                    {p.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-1.5 mb-5">
                    {p.highlights.map((h, hIdx) => (
                      <div
                        key={hIdx}
                        className="text-[0.75rem] text-gray-300 flex items-start gap-1.5"
                      >
                        <span className="text-[#06b6d4] font-bold">›</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-white/5">
                    {p.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[0.7rem] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links / Action Buttons */}
                  <div className="flex items-center gap-2 pt-2">
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-glow flex-1 py-2.5 px-3 rounded-xl text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5"
                      >
                        <Globe size={15} />
                        <span>Visit Live Site</span>
                        <ExternalLink size={13} />
                      </a>
                    )}

                    {p.githubUrl && (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 hover:border-[#7c3aed] transition"
                      >
                        <Github size={15} />
                        <span>GitHub Code</span>
                        <ExternalLink size={13} />
                      </a>
                    )}
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
