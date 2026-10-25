"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  FileText,
  Copy,
  Check,
  CheckCircle2,
  Send,
  ArrowUpRight,
} from "lucide-react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [toast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("Message sent successfully!");
  const [loading, setLoading] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields (Name, Email, Message).");
      return;
    }

    setLoading(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    if (serviceId && templateId && userId) {
      emailjs
        .send(
          serviceId,
          templateId,
          {
            name: formData.name,
            email: formData.email,
            projectType: formData.projectType || "General Inquiry",
            message: formData.message,
          },
          userId
        )
        .then(
          () => {
            setLoading(false);
            setToastMessage("Message sent! I'll be in touch soon.");
            setToast(true);
            setTimeout(() => setToast(false), 3500);
            setFormData({
              name: "",
              email: "",
              projectType: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.error("EmailJS Error:", error);
            // Fallback for user ease
            window.location.href = `mailto:yashkachhadiya3302@gmail.com?subject=Contact from ${encodeURIComponent(
              formData.name
            )}&body=${encodeURIComponent(formData.message)}`;
          }
        );
    } else {
      // Graceful fallback to mailto if env variables aren't configured yet
      setLoading(false);
      window.location.href = `mailto:yashkachhadiya3302@gmail.com?subject=Contact from ${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(
        `Hi Yash,\n\n${formData.message}\n\nProject Type: ${formData.projectType || "General Inquiry"
        }\nFrom: ${formData.name} (${formData.email})`
      )}`;
      setToastMessage("Opening your email client to send message...");
      setToast(true);
      setTimeout(() => setToast(false), 3500);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-[1100px] mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16 max-w-[650px] mx-auto">
          <p className="section-label mb-3">GET IN TOUCH</p>
          <h2 className="section-title mb-4">
            Let's Build Something <br />
            <span className="grad-text">Impactful Together</span>
          </h2>
          <p className="section-description">
            Whether you have a full-stack project in mind, need scalable architecture
            consulting, or want to discuss full-time opportunities, my inbox is always open.
          </p>
        </div>

        {/* 2-COLUMN LAYOUT */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: CONTACT DETAILS & SOCIALS */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Contact info card */}
            <div className="card p-7 rounded-2xl border border-white/10 bg-[rgba(19,19,26,0.7)] backdrop-blur-md">
              <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#06b6d4]" />
                Direct Contact Information
              </h3>

              <div className="space-y-4">
                {/* Email item */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 group hover:border-[#7c3aed]/40 transition">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-[rgba(124,58,237,0.15)] flex items-center justify-center text-[#a78bfa] shrink-0">
                      <Mail size={18} />
                    </div>
                    <div className="truncate">
                      <p className="text-[0.7rem] uppercase text-[var(--muted)] font-semibold">
                        Email
                      </p>
                      <a
                        href="mailto:yashkachhadiya3302@gmail.com"
                        className="text-xs sm:text-sm font-medium text-white hover:text-[#06b6d4] transition truncate block"
                      >
                        yashkachhadiya3302@gmail.com
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      copyToClipboard("yashkachhadiya3302@gmail.com", "email")
                    }
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[var(--muted)] hover:text-white transition"
                    title="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check size={16} className="text-[#10b981]" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>

                {/* Phone item */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 group hover:border-[#06b6d4]/40 transition">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-[rgba(6,182,212,0.15)] flex items-center justify-center text-[#06b6d4] shrink-0">
                      <Phone size={18} />
                    </div>
                    <div className="truncate">
                      <p className="text-[0.7rem] uppercase text-[var(--muted)] font-semibold">
                        Phone / WhatsApp
                      </p>
                      <a
                        href="tel:+916354081193"
                        className="text-xs sm:text-sm font-medium text-white hover:text-[#06b6d4] transition truncate block"
                      >
                        +91 6354081193
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => copyToClipboard("+916354081193", "phone")}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[var(--muted)] hover:text-white transition"
                    title="Copy phone number"
                  >
                    {copiedPhone ? (
                      <Check size={16} className="text-[#10b981]" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>

                {/* Location item */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-9 h-9 rounded-lg bg-[rgba(16,185,129,0.15)] flex items-center justify-center text-[#10b981] shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[0.7rem] uppercase text-[var(--muted)] font-semibold">
                      Location
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-white">
                      Ahmedabad, Gujarat, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social profiles & Resume card */}
            <div className="card p-7 rounded-2xl border border-white/10 bg-[rgba(19,19,26,0.7)] backdrop-blur-md">
              <h3 className="text-base font-bold text-white mb-4">
                Profiles & Resume
              </h3>

              <div className="space-y-2.5">
                <a
                  href="https://github.com/yashkachhadiya27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-gray-200 hover:text-white transition group"
                >
                  <div className="flex items-center gap-3">
                    <Github size={18} className="text-white" />
                    <span className="text-sm font-medium">
                      github.com/yashkachhadiya27
                    </span>
                  </div>
                  <ArrowUpRight
                    size={15}
                    className="text-[var(--muted)] group-hover:text-white"
                  />
                </a>

                <a
                  href="https://linkedin.com/in/yashkachhadiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-gray-200 hover:text-white transition group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin size={18} className="text-[#06b6d4]" />
                    <span className="text-sm font-medium">
                      linkedin.com/in/yashkachhadiya
                    </span>
                  </div>
                  <ArrowUpRight
                    size={15}
                    className="text-[var(--muted)] group-hover:text-white"
                  />
                </a>

                <a
                  href="/Yash_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[rgba(124,58,237,0.12)] hover:bg-[rgba(124,58,237,0.2)] border border-[rgba(124,58,237,0.3)] text-white transition group"
                >
                  <div className="flex items-center gap-3">
                    <FileText size={18} className="text-[#a78bfa]" />
                    <span className="text-sm font-medium">
                      Download Updated Resume (PDF)
                    </span>
                  </div>
                  <ArrowUpRight
                    size={15}
                    className="text-[#a78bfa] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="lg:col-span-7">
            <div className="card p-7 sm:p-9 rounded-2xl border border-white/10 bg-[rgba(19,19,26,0.7)] backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-[var(--muted)] text-xs sm:text-sm mb-6">
                Fill in the details below and I'll respond within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-[var(--muted)] mb-1.5 block font-semibold">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      className="form-input text-sm"
                      placeholder="e.g. Alex Sharma"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="text-xs text-[var(--muted)] mb-1.5 block font-semibold">
                      Your Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      className="form-input text-sm"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-[var(--muted)] mb-1.5 block font-semibold">
                    Inquiry / Project Type
                  </label>
                  <select
                    className="form-input text-sm"
                    value={formData.projectType}
                    onChange={(e) =>
                      setFormData({ ...formData, projectType: e.target.value })
                    }
                  >
                    <option value="">Select an inquiry type...</option>
                    <option value="Full Stack Web Application">
                      Full Stack Web Application (React/Next.js/NestJS)
                    </option>
                    <option value="Frontend Development">
                      Frontend Development (Next.js / React / Tailwind)
                    </option>
                    <option value="Backend & API Architecture">
                      Backend & API Architecture (NestJS / Node / SQL / NoSQL)
                    </option>
                    <option value="Headless CMS & Integrations">
                      Headless CMS & Integrations (Strapi / WordPress)
                    </option>
                    <option value="Full-Time Engineering Role">
                      Full-Time Engineering Role Opportunity
                    </option>
                    <option value="General Collaboration">General Collaboration</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-[var(--muted)] mb-1.5 block font-semibold">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="form-input text-sm resize-none"
                    placeholder="Tell me about your project, requirements, or team..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-glow w-full py-3.5 rounded-xl text-white font-bold flex items-center justify-center gap-2 text-sm shadow-xl mt-2 disabled:opacity-50"
                >
                  <Send size={16} />
                  <span>{loading ? "Sending Message..." : "Send Message"}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* TOAST NOTIFICATION */}
      <div className={`toast ${toast ? "show" : ""}`}>
        <div className="flex items-center gap-3 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] px-6 py-3.5 shadow-2xl border border-white/20">
          <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
          <p className="text-sm font-semibold text-white">{toastMessage}</p>
        </div>
      </div>
    </section>
  );
}
