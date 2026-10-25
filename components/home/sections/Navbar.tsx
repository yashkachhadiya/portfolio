"use client";

import { useState } from "react";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="nav">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[74px]">
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-[rgba(124,58,237,0.4)] bg-[rgba(10,10,15,0.9)] text-white hover:border-[#7c3aed] transition"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <a href="/" className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#7c3aed] to-[#06b6d4] flex items-center justify-center text-white font-black text-sm shadow-sm group-hover:scale-105 transition-transform">
              YK
            </span>
            <span className="grad-text font-extrabold text-[1.2rem] tracking-tight">
              Yash Kachhadiya
            </span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-3">
          <a
            href="/Yash_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium hover:border-[#06b6d4] transition"
            title="View or download Yash's resume"
          >
            <FileText size={15} className="text-[#06b6d4]" />
            <span>Resume</span>
            <ArrowUpRight size={13} className="opacity-70" />
          </a>

          <a
            href="#contact"
            className="btn-glow inline-flex items-center gap-1.5 px-5 py-2 rounded-lg text-sm font-semibold text-white shadow-lg"
          >
            <span>Let's Talk</span>
          </a>
        </div>

        {/* Mobile dropdown menu */}
        {mobileOpen && (
          <div className="fixed inset-x-0 top-[74px] md:hidden bg-[rgba(10,10,15,0.98)] backdrop-blur-2xl border-b border-[rgba(124,58,237,0.25)] shadow-2xl p-6 transition-all animate-in fade-in duration-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link text-base py-2 border-b border-white/5"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-2 flex flex-col gap-3">
                <a
                  href="/Yash_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  <FileText size={16} className="text-[#06b6d4]" />
                  <span>Download / View Resume</span>
                  <ArrowUpRight size={14} />
                </a>

                <a
                  href="#contact"
                  className="btn-glow flex items-center justify-center py-2.5 rounded-lg text-sm font-semibold text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
