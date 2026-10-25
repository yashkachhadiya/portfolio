"use client";

import { useState } from "react";
import {
  ExternalLink,
  Github,
  Globe,
  Layers,
  Sparkles,
  BarChart3,
  GraduationCap,
  Boxes,
  ArrowUpRight,
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
        return <BarChart3 size={24} className="text-primary" />;
      case "education":
        return <GraduationCap size={24} className="text-secondary" />;
      case "brand":
        return <Globe size={24} className="text-primary-light" />;
      case "hoarding":
        return <Boxes size={24} className="text-secondary-light" />;
      case "inventory":
        return <Layers size={24} className="text-primary" />;
    }
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-[760px] mx-auto mb-12">
          <div className="inline-block mb-3">
            <span className="section-tag">PROJECT PORTFOLIO</span>
          </div>
          <h2 className="section-heading mb-4">
            Production Deployments <br className="hidden sm:inline" />
            <span className="grad-text-aurora">& Full-Stack Architectures</span>
          </h2>
          <p className="section-desc">
            Explore live commercial platforms built for enterprise clients at{" "}
            <strong className="text-white">Advergrow Solution</strong> alongside full-stack
            open-source applications.
          </p>

          {/* Frosted Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeFilter === "all"
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25 border border-white/20"
                  : "glass-pill text-gray-400 hover:text-white"
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("production")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeFilter === "production"
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25 border border-white/20"
                  : "glass-pill text-gray-400 hover:text-white"
              }`}
            >
              Company Production Sites (3)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("personal")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeFilter === "personal"
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25 border border-white/20"
                  : "glass-pill text-gray-400 hover:text-white"
              }`}
            >
              Full-Stack GitHub Repos (2)
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p, i) => (
            <div
              key={i}
              className="glass-panel rounded-3xl overflow-hidden p-0 flex flex-col justify-between hover:border-white/20 transition-all group"
            >
              {/* Card Header Top Gradient */}
              <div className="p-6 bg-gradient-to-br from-white/[0.04] to-transparent border-b border-white/10 relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <span className="badge-secondary">
                    {p.badge}
                  </span>
                  <span className="text-[11px] text-gray-400 font-mono">
                    {p.organization}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                    {getIcon(p.icon)}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg group-hover:text-secondary-light transition-colors">
                      {p.title}
                    </h3>
                  </div>
                </div>

                {/* Ambient glow decoration */}
                <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-primary/10 blur-xl group-hover:bg-secondary/20 transition" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {p.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-1.5 mb-5">
                    {p.highlights.map((h, hIdx) => (
                      <div
                        key={hIdx}
                        className="text-[11px] text-gray-400 flex items-start gap-1.5"
                      >
                        <span className="text-secondary font-bold">›</span>
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
                        className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action CTAs */}
                  <div className="flex items-center gap-2 pt-2">
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-glow flex-1 py-2.5 px-3 rounded-xl text-white text-xs font-bold flex items-center justify-center gap-1.5"
                      >
                        <Globe size={13} />
                        <span>Visit Live Site</span>
                        <ArrowUpRight size={13} />
                      </a>
                    )}

                    {p.githubUrl && (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-glass flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 hover:border-white/20 transition"
                      >
                        <Github size={13} />
                        <span>GitHub Repo</span>
                        <ArrowUpRight size={13} />
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
