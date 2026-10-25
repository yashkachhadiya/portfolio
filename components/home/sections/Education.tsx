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
    <section id="education" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-[1100px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-[720px] mx-auto mb-16">
          <div className="inline-block mb-3">
            <span className="section-tag">ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="section-heading mb-4">
            Education & <br className="hidden sm:inline" />
            <span className="grad-text-aurora">Academic Milestones</span>
          </h2>
          <p className="section-desc">
            Rigorous training in Computer Engineering, establishing strong algorithmic,
            architectural, and systems-level foundations.
          </p>
        </div>

        {/* Education Glass Cards */}
        <div className="grid gap-5">
          {educationHistory.map((edu, idx) => (
            <div
              key={idx}
              className={`glass-panel rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all ${
                edu.isCurrent ? "border-primary-soft" : ""
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${
                      edu.isCurrent
                        ? "bg-primary-soft border-primary-soft text-primary"
                        : "bg-secondary-soft border-secondary-soft text-secondary"
                    }`}
                  >
                    <GraduationCap size={22} />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {edu.degree}
                      </h3>
                      {edu.isCurrent && (
                        <span className="badge-primary">
                          Currently Pursuing
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-secondary">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 text-xs">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-bold text-white flex items-center gap-1.5">
                    <Award size={14} className="text-secondary" />
                    {edu.score}
                  </span>
                  <div className="flex items-center gap-3 text-gray-400 text-xs">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {edu.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {edu.location}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                {edu.description}
              </p>

              {edu.coursework && (
                <div className="pt-3 border-t border-white/5">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-2 flex items-center gap-1.5">
                    <BookOpen size={12} className="text-primary" />
                    Key Modules & Topics:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-gray-300"
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
