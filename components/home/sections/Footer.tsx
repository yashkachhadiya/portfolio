"use client";

import { Github, Linkedin, Mail, FileText, ArrowUp } from "lucide-react";
import Image from "next/image";
import { getAssetPath } from "@/lib/asset";

export default function Footer() {
  const scrollToTop = () => {
    const topElem = document.getElementById("top") || document.body;
    if (topElem && typeof topElem.scrollIntoView === "function") {
      topElem.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      if (document.documentElement) {
        document.documentElement.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="border-t border-white/5 bg-[rgba(5,5,10,0.85)] backdrop-blur-2xl pt-16 pb-12 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/5">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-primary to-secondary p-[1.5px] overflow-hidden">
                <div className="w-full h-full bg-[#080d1a] rounded-full overflow-hidden flex items-center justify-center">
                  <Image
                    src={getAssetPath("/profile.png")}
                    alt="Yash Kachhadiya"
                    width={40}
                    height={40}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                Yash Kachhadiya
              </span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm max-w-[420px]">
              Full Stack Developer building scalable web applications with
              React.js, Next.js, NestJS, and TypeScript.
            </p>
          </div>

          {/* Social Links & Resume */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={getAssetPath("/Yash_resume.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 hover:border-primary-soft"
            >
              <FileText size={13} className="text-secondary" />
              <span>Resume</span>
            </a>

            <a
              href="https://github.com/yashkachhadiya27"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full glass-pill text-gray-300 hover:text-white transition"
              aria-label="GitHub Profile"
            >
              <Github size={16} />
            </a>

            <a
              href="https://linkedin.com/in/yashkachhadiya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full glass-pill text-gray-300 hover:text-secondary transition"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={16} />
            </a>

            <a
              href="mailto:yashkachhadiya3302@gmail.com"
              className="p-2.5 rounded-full glass-pill text-gray-300 hover:text-white transition"
              aria-label="Email Yash"
            >
              <Mail size={16} />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition ml-1"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Yash Kachhadiya. Engineered with Modern Glassmorphism.</p>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-gray-400">Open to full-time engineering roles & collaborations</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
