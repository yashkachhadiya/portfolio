"use client";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [toast, setToast] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      document.dispatchEvent(new Event("show-toast"));
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-[700px] mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="section-label mb-3">LET'S WORK TOGETHER</p>

          <h2 className="section-title mb-4">Ready to Start a Project?</h2>

          <p className="section-description max-w-[480px] mx-auto">
            Whether it's a quick consult or a full-scale build, I'm open to new
            freelance opportunities. Let's chat!
          </p>
        </div>

        {/* CARD (MAIN FIX) */}
        <div className="card p-10 max-w-[720px] mx-auto rounded-2xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setLoading(true);

              setTimeout(() => {
                setLoading(false);
                setToast(true);
                setTimeout(() => setToast(false), 4000);
              }, 1200);
            }}
            className="flex flex-col gap-5"
          >
            {/* GRID FIX */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
              <div>
                <label className="text-[0.9rem] text-[var(--muted)] mb-1 block font-bold">
                  Your Name *
                </label>
                <input className="form-input" placeholder="Jane Smith" />
              </div>

              <div>
                <label className="text-[0.9rem] text-[var(--muted)] mb-1 block font-bold">
                  Email Address *
                </label>
                <input className="form-input" placeholder="jane@company.com" />
              </div>
            </div>

            {/* SELECT */}
            <div>
              <label className="text-[0.9rem] text-[var(--muted)] mb-1 block font-bold">
                Project Type *
              </label>

              <select className="form-input">
                <option>Select a project type...</option>
                <option>Full Stack Web App</option>
                <option>Frontend Development</option>
                <option>Backend / API Development</option>
                <option>MVP / Prototype</option>
              </select>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-[0.9rem] text-[var(--muted)] mb-1 block font-bold">
                Tell me about your project *
              </label>

              <textarea
                className="form-input"
                rows={5}
                placeholder="Describe your project, goals, and timeline..."
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="btn-glow w-full py-[14px] rounded-[12px] text-white font-bold"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* SOCIAL LINKS (MISSING IN YOUR CODE) */}
        <div className="flex justify-center gap-5 mt-8">
          <span className="text-[var(--muted)]">GitHub</span>
          <span className="text-[var(--muted)]">LinkedIn</span>
          <span className="text-[var(--muted)]">
            yashkachhadiya3302@email.com
          </span>
        </div>
      </div>

      <div className={`toast ${toast ? "show" : ""}`}>
        <div className="flex items-center gap-3 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] px-6 py-3 shadow-lg">
          <CheckCircle2 className="w-5 h-5 text-white" />
          <p className="text-sm font-semibold text-white">
            Message sent! I'll be in touch soon.
          </p>
        </div>
      </div>
    </section>
  );
}
