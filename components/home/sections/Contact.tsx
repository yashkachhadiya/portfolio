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
  Sparkles,
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
            window.location.href = `mailto:yashkachhadiya3302@gmail.com?subject=Contact from ${encodeURIComponent(
              formData.name
            )}&body=${encodeURIComponent(formData.message)}`;
          }
        );
    } else {
      setLoading(false);
      window.location.href = `mailto:yashkachhadiya3302@gmail.com?subject=Contact from ${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(
        `Hi Yash,\n\n${formData.message}\n\nProject Type: ${
          formData.projectType || "General Inquiry"
        }\nFrom: ${formData.name} (${formData.email})`
      )}`;
      setToastMessage("Opening your email client to send message...");
      setToast(true);
      setTimeout(() => setToast(false), 3500);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-[1100px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-[650px] mx-auto mb-16">
          <div className="inline-block mb-3">
            <span className="section-tag">GET IN TOUCH</span>
          </div>
          <h2 className="section-heading mb-4">
            Let's Collaborate On <br />
            <span className="grad-text-aurora">Your Next Big Build</span>
          </h2>
          <p className="section-desc">
            Whether you have a web application to architect, need full-stack consulting,
            or are looking to hire a dedicated engineer in Ahmedabad or remotely — let's connect!
          </p>
        </div>

        {/* 2-Column Glass Grid */}
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Direct Contact & Profiles */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Contact Details Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-7">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Direct Communication
              </h3>

              <div className="space-y-3">
                {/* Email Item */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition group">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-primary-soft border border-primary-soft flex items-center justify-center text-primary shrink-0">
                      <Mail size={16} />
                    </div>
                    <div className="truncate">
                      <p className="text-[10px] uppercase font-mono text-gray-400">
                        Email Address
                      </p>
                      <a
                        href="mailto:yashkachhadiya3302@gmail.com"
                        className="text-xs sm:text-sm font-medium text-white hover:text-secondary transition truncate block"
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
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check size={14} className="text-primary" />
                    ) : (
                      <Copy size={14} />
                    )}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition group">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-secondary-soft border border-secondary-soft flex items-center justify-center text-secondary shrink-0">
                      <Phone size={16} />
                    </div>
                    <div className="truncate">
                      <p className="text-[10px] uppercase font-mono text-gray-400">
                        Phone / WhatsApp
                      </p>
                      <a
                        href="tel:+916354081193"
                        className="text-xs sm:text-sm font-medium text-white hover:text-secondary-light transition truncate block"
                      >
                        +91 6354081193
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => copyToClipboard("+916354081193", "phone")}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition"
                    title="Copy Phone"
                  >
                    {copiedPhone ? (
                      <Check size={14} className="text-secondary" />
                    ) : (
                      <Copy size={14} />
                    )}
                  </button>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="w-9 h-9 rounded-xl bg-primary-soft border border-primary-soft flex items-center justify-center text-primary-light shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-mono text-gray-400">
                      Location
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-white">
                      Ahmedabad, Gujarat, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials & Resume Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-7">
              <h3 className="text-base font-bold text-white mb-3">
                Profiles & Resume
              </h3>

              <div className="space-y-2">
                <a
                  href="https://github.com/yashkachhadiya27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 text-gray-200 hover:text-white transition group"
                >
                  <div className="flex items-center gap-2.5">
                    <Github size={16} className="text-white" />
                    <span className="text-xs font-medium">github.com/yashkachhadiya27</span>
                  </div>
                  <ArrowUpRight size={13} className="text-gray-400 group-hover:text-white" />
                </a>

                <a
                  href="https://linkedin.com/in/yashkachhadiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 text-gray-200 hover:text-white transition group"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin size={16} className="text-secondary" />
                    <span className="text-xs font-medium">linkedin.com/in/yashkachhadiya</span>
                  </div>
                  <ArrowUpRight size={13} className="text-gray-400 group-hover:text-white" />
                </a>

                <a
                  href="/Yash_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-primary-soft hover:bg-primary/20 border border-primary-soft text-white transition group"
                >
                  <div className="flex items-center gap-2.5">
                    <FileText size={16} className="text-secondary" />
                    <span className="text-xs font-semibold">Download Resume (PDF)</span>
                  </div>
                  <ArrowUpRight size={13} className="text-secondary" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Glass Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-1.5">
                Send a Message
              </h3>
              <p className="text-xs text-gray-400 mb-6">
                Have a question or opportunity? Drop a note below and I will get back to you promptly.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-300 mb-1.5 block font-semibold">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      className="glass-input"
                      placeholder="e.g. Alex Sharma"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="text-xs text-gray-300 mb-1.5 block font-semibold">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      className="glass-input"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-300 mb-1.5 block font-semibold">
                    Inquiry Type
                  </label>
                  <select
                    className="glass-input"
                    value={formData.projectType}
                    onChange={(e) =>
                      setFormData({ ...formData, projectType: e.target.value })
                    }
                  >
                    <option value="" className="bg-[#080d1a] text-white">Select inquiry type...</option>
                    <option value="Full Stack Web Application" className="bg-[#080d1a] text-white">
                      Full Stack Web Application (React / Next.js / NestJS)
                    </option>
                    <option value="Frontend Engineering" className="bg-[#080d1a] text-white">
                      Frontend Engineering (Next.js / Tailwind CSS)
                    </option>
                    <option value="Backend & APIs" className="bg-[#080d1a] text-white">
                      Backend & APIs (NestJS / Node / SQL / NoSQL)
                    </option>
                    <option value="Full-Time Engineering Role" className="bg-[#080d1a] text-white">
                      Full-Time Engineering Role
                    </option>
                    <option value="General Collaboration" className="bg-[#080d1a] text-white">General Collaboration</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-gray-300 mb-1.5 block font-semibold">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="glass-input resize-none"
                    placeholder="Tell me about your requirements, project timeline, or team..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-glow w-full py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 text-xs sm:text-sm mt-2 disabled:opacity-50"
                >
                  <Send size={15} />
                  <span>{loading ? "Sending..." : "Send Message"}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <div className={`toast ${toast ? "show" : ""}`}>
        <div className="flex items-center gap-3 rounded-2xl glass-dock px-6 py-3.5 shadow-2xl border border-white/20">
          <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
          <p className="text-xs sm:text-sm font-semibold text-white">{toastMessage}</p>
        </div>
      </div>
    </section>
  );
}
