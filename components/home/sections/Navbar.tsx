"use client";

import { useState, useEffect } from "react";
import { Menu, X, FileText, ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ["about", "skills", "experience", "projects", "education", "contact"];

      // If user scrolled to bottom of the page, activate contact
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60
      ) {
        setActiveSection("contact");
        return;
      }

      // If near the top (Hero area), no section is active
      if (window.scrollY < 200) {
        setActiveSection("");
        return;
      }

      const triggerPoint = 200;
      let current = "";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
            current = id;
            break;
          }
        }
      }

      if (!current) {
        let minDistance = Infinity;
        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 400 && rect.bottom > 0) {
              const dist = Math.abs(rect.top);
              if (dist < minDistance) {
                minDistance = dist;
                current = id;
              }
            }
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-3 sm:pt-4 transition-all duration-300">
      <div
        className={`max-w-[1180px] mx-auto rounded-2xl md:rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-300 ${scrolled
          ? "glass-dock bg-[rgba(8,13,26,0.88)] border-white/15 shadow-2xl"
          : "glass-dock"
          }`}
      >
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-primary to-secondary p-[1.5px] shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform overflow-hidden">
              <div className="w-full h-full bg-[#080d1a] rounded-full overflow-hidden flex items-center justify-center">
                <Image
                  src="/profile.png"
                  alt="Yash Kachhadiya"
                  width={40}
                  height={40}
                  className="w-full h-full"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-white group-hover:text-secondary transition-colors">
                Yash Kachhadiya
              </span>
              <span className="text-[10px] text-gray-400 tracking-widest uppercase font-mono hidden sm:block">
                Full Stack Dev
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/5 rounded-full px-3 py-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-all ${
                  isActive
                    ? "bg-white/[0.08] text-white font-semibold border border-white/10 shadow-sm"
                    : "text-gray-400 hover:text-white hover:bg-white/[0.08] border border-transparent"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action CTAs */}
        <div className="flex items-center gap-2.5">
          <a
            href="/Yash_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold hover:border-primary-soft"
            title="Download Yash's Resume"
          >
            <FileText size={13} className="text-secondary" />
            <span>Resume</span>
            <ArrowUpRight size={12} className="opacity-60" />
          </a>

          <a
            href="#contact"
            className="btn-glow inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold"
          >
            <Sparkles size={12} />
            <span>Hire Me</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu with Frosted Glass */}
      {mobileOpen && (
        <div className="lg:hidden mt-2 max-w-[1180px] mx-auto">
          <div className="glass-dock rounded-2xl p-5 border border-white/15 bg-[rgba(8,13,26,0.95)] shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition flex items-center justify-between ${
                      isActive
                        ? "bg-white/10 text-white font-semibold border border-white/15"
                        : "text-gray-200 hover:text-white hover:bg-white/10"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span>{link.label}</span>
                    <span className={`text-xs ${isActive ? "text-secondary font-bold" : "text-secondary"}`}>›</span>
                  </a>
                );
              })}

              <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
                <a
                  href="/Yash_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glass flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold"
                  onClick={() => setMobileOpen(false)}
                >
                  <FileText size={15} className="text-secondary" />
                  <span>Download Resume (PDF)</span>
                  <ArrowUpRight size={13} />
                </a>

                <a
                  href="#contact"
                  className="btn-glow flex items-center justify-center py-2.5 rounded-xl text-xs font-bold"
                  onClick={() => setMobileOpen(false)}
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
