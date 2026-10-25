"use client";

import { GraduationCap, Award, Calendar, MapPin, BookOpen } from "lucide-react";

export default function Education() {
  const educationHistory = [
    {
      institution: "Government Engineering College, Gandhinagar (GTU)",
      degree: "Bachelor of Engineering in Computer Engineering",
      score: "CGPA: 8.12 / 10",
      duration: "Sept 2022 – May 2026",
      location: "Gandhinagar, Gujarat",
      isCurrent: true,
      description:
        "Comprehensive engineering curriculum covering core computer science principles, database architectures, scalable software engineering, and full-stack development methodologies.",
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems (DBMS)",
        "Object-Oriented Programming (OOP)",
        "Operating Systems",
        "Computer Networks",
        "Web Application Development",
      ],
    },
    {
      institution: "Alpha Vidhya Sankul",
      degree: "Higher Secondary Certificate (Class XII – Science, NCERT)",
      score: "Score: 80.33%",
      duration: "Apr 2021 – Mar 2022",
      location: "Junagadh, Gujarat",
      isCurrent: false,
      description:
        "Focused academic foundation in Science stream with Physics, Chemistry, and Mathematics (PCM).",
      coursework: ["Mathematics", "Physics", "Chemistry"],
    },
    {
      institution: "Alpha Vidhya Sankul",
      degree: "Secondary School Certificate (Class X)",
      score: "Score: 82.83%",
      duration: "Apr 2019 – Mar 2020",
      location: "Mendarda, Gujarat",
      isCurrent: false,
      description:
        "Secondary education establishing strong foundations in analytical thinking, mathematics, and science.",
      coursework: ["General Science", "Mathematics", "Social Science"],
    },
  ];

  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-[700px] mx-auto">
          <p className="section-label mb-3">ACADEMIC FOUNDATION</p>
          <h2 className="section-title mb-4">
            Education & <br />
            <span className="grad-text">Academic Milestones</span>
          </h2>
          <p className="section-description">
            My academic training in Computer Engineering, solidifying theoretical
            foundations in algorithms, system design, and software engineering.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid gap-6">
          {educationHistory.map((edu, idx) => (
            <div
              key={idx}
              className={`card p-6 md:p-8 rounded-2xl border border-white/10 bg-[rgba(19,19,26,0.65)] backdrop-blur-md hover:border-[rgba(124,58,237,0.35)] transition ${
                edu.isCurrent ? "border-[rgba(6,182,212,0.3)]" : ""
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-white/5">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      edu.isCurrent
                        ? "bg-[rgba(6,182,212,0.15)] text-[#06b6d4]"
                        : "bg-[rgba(124,58,237,0.15)] text-[#a78bfa]"
                    }`}
                  >
                    <GraduationCap size={24} />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-lg md:text-xl font-bold text-white">
                        {edu.degree}
                      </h3>
                      {edu.isCurrent && (
                        <span className="text-[0.7rem] px-2 py-0.5 rounded-full bg-[rgba(16,185,129,0.15)] text-[#10b981] font-medium border border-[rgba(16,185,129,0.3)]">
                          Pursuing
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-[var(--accent2)]">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 text-xs md:text-sm">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-bold text-white flex items-center gap-1.5">
                    <Award size={14} className="text-[#f59e0b]" />
                    {edu.score}
                  </span>
                  <div className="flex items-center gap-3 text-[var(--muted)] text-xs">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} />
                      {edu.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={13} />
                      {edu.location}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-[var(--muted)] text-xs md:text-sm leading-relaxed mb-4">
                {edu.description}
              </p>

              {edu.coursework && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-2 flex items-center gap-1.5">
                    <BookOpen size={13} className="text-[#06b6d4]" />
                    Key Subjects / Modules:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-gray-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
