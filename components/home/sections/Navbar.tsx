"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between h-[74px]">
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-[rgba(124,58,237,0.4)] bg-[rgba(10,10,15,0.9)] text-white"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <a href="/" className="grad-text font-extrabold text-[1.2rem]">
            YK.
          </a>
        </div>

        <div className="hidden md:flex gap-10">
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#skills" className="nav-link">
            Skills
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#experience" className="nav-link">
            Experience
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </div>

        <a href="#contact" className="btn-glow px-5 py-2 rounded-lg text-white">
          Hire Me
        </a>
        {mobileOpen && (
          <div className="fixed inset-0 top-[74px] md:hidden pb-10">
            <div className="flex flex-col items-start gap-6 bg-[rgba(10,10,15,0.95)] backdrop-blur-[16px] rounded-lg p-6">
              <a
                href="#about"
                className="nav-link"
                onClick={() => setMobileOpen(false)}
              >
                About
              </a>
              <a
                href="#skills"
                className="nav-link"
                onClick={() => setMobileOpen(false)}
              >
                Skills
              </a>
              <a
                href="#projects"
                className="nav-link"
                onClick={() => setMobileOpen(false)}
              >
                Projects
              </a>
              <a
                href="#experience"
                className="nav-link"
                onClick={() => setMobileOpen(false)}
              >
                Experience
              </a>
              <a
                href="#contact"
                className="nav-link"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
