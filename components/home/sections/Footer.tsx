"use client";

import { Github, Linkedin, Mail, FileText, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 bg-[rgba(10,10,15,0.95)] pt-16 pb-12 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/5">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#7c3aed] to-[#06b6d4] flex items-center justify-center text-white font-black text-sm">
                YK
              </span>
              <span className="grad-text font-extrabold text-xl tracking-tight">
                Yash Kachhadiya
              </span>
            </div>
            <p className="text-[var(--muted)] text-sm max-w-[420px]">
              Full Stack Developer building high-performance web applications with
              React.js, Next.js, NestJS, and TypeScript.
            </p>
          </div>

          {/* Social Links & Resume */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/Yash_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs sm:text-sm font-medium text-white flex items-center gap-1.5 transition"
            >
              <FileText size={15} className="text-[#06b6d4]" />
              <span>Resume</span>
            </a>

            <a
              href="https://github.com/yashkachhadiya27"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[var(--muted)] hover:text-white transition"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>

            <a
              href="https://linkedin.com/in/yashkachhadiya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[var(--muted)] hover:text-[#06b6d4] transition"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="mailto:yashkachhadiya3302@gmail.com"
              className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[var(--muted)] hover:text-white transition"
              aria-label="Email Yash"
            >
              <Mail size={18} />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-[rgba(124,58,237,0.15)] hover:bg-[rgba(124,58,237,0.3)] border border-[rgba(124,58,237,0.3)] text-[#a78bfa] hover:text-white transition ml-2"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--muted)]">
          <p>© {new Date().getFullYear()} Yash Kachhadiya. All rights reserved.</p>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10b981]" />
            <span>Open to full-time engineering roles & collaborations</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
