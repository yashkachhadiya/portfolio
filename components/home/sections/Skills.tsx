import { Monitor, Cpu, Database, Cloud } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="py-[100px] px-6">
      <div className="max-w-[1100px] mx-auto">
        {/* HEADER */}
        <div className="text-center mb-[60px]">
          <p className="section-label mb-3">TECH STACK</p>

          <h2 className="section-title mb-3">Tools I Work With</h2>

          <p className="section-description max-w-[520px] mx-auto">
            Modern tools and frameworks I use to build fast, reliable products.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
          {[
            {
              title: "Frontend",
              icon: <Monitor size={20} />,
              items: [
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind",
                "HTML/CSS",
                "Redux",
              ],
            },
            {
              title: "Backend",
              icon: <Cpu size={20} />,
              items: ["Node.js", "Express", "Python", "REST APIs", "GraphQL"],
            },
            {
              title: "Database",
              icon: <Database size={20} />,
              items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma"],
            },
            {
              title: "DevOps & Cloud",
              icon: <Cloud size={20} />,
              items: ["AWS", "Docker", "Git", "CI/CD", "Vercel"],
            },
          ].map((s, i) => (
            <div
              key={i}
              className="card p-6 rounded-2xl border border-[rgba(124,58,237,0.2)] bg-[rgba(19,19,26,0.7)] backdrop-blur-[12px] transition duration-200"
            >
              {/* HEADER */}
              <div className="flex items-center gap-[10px] mb-4">
                <span className="text-[#22d3ee] flex items-center">
                  {s.icon}
                </span>

                <span className="font-bold">{s.title}</span>
              </div>

              {/* CHIPS */}
              <div className="flex flex-wrap gap-[10px]">
                {s.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="chip bg-[rgba(124,58,237,0.2)] border border-[rgba(124,58,237,0.3)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
