import { ShoppingCart, BarChart2, MessageSquare } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-[100px] px-6">
      <div className="max-w-[1100px] mx-auto">
        {/* HEADER */}
        <div className="text-center mb-[60px]">
          <p className="section-label mb-3">MY WORK</p>
          <h2 className="section-title mb-3">Featured Projects</h2>
          <p className="section-description max-w-[520px] mx-auto">
            A selection of real-world projects that showcase my focus on
            performance, usability, and clean architecture.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[28px]">
          {[
            {
              title: "ShopFlow — E-Commerce Platform",
              desc: "Full-stack e-commerce app with real-time inventory, Stripe payments, and admin dashboard. Handles 1000+ products.",
              tag: "E-Commerce",
              icon: "shopping-cart",
              tech: ["Next.js", "Prisma", "Stripe"],
            },
            {
              title: "DataPulse — Analytics Dashboard",
              desc: "Real-time analytics SaaS with interactive charts, user authentication, and CSV export. Built for non-technical users.",
              tag: "SaaS",
              icon: "bar-chart-2",
              tech: ["React", "Node.js", "PostgreSQL"],
            },
            {
              title: "ChatHive — Team Chat App",
              desc: "Slack-inspired team messaging with WebSocket real-time updates, file sharing, and threaded conversations.",
              tag: "Real-time",
              icon: "message-square",
              tech: ["React", "Socket.io", "MongoDB"],
            },
          ].map((p, i) => (
            <div key={i} className="card overflow-hidden p-0">
              {/* TOP GRADIENT */}
              <div className="h-[170px] p-4 flex flex-col justify-between bg-[linear-gradient(135deg,rgba(124,58,237,0.3),rgba(6,182,212,0.25))]">
                {/* BADGE */}
                <div className="flex justify-end">
                  <span className="text-[0.7rem] py-1 px-[10px] rounded-full bg-[rgba(6,182,212,0.2)]">
                    {p.tag}
                  </span>
                </div>

                {/* ICON */}
                <div className="text-center">
                  {p.icon === "shopping-cart" && <ShoppingCart size={36} />}
                  {p.icon === "bar-chart-2" && <BarChart2 size={36} />}
                  {p.icon === "message-square" && <MessageSquare size={36} />}
                </div>
              </div>

              {/* BOTTOM DARK SECTION */}
              <div className="p-6">
                <h3 className="mb-[10px]">{p.title}</h3>

                <p className="text-[var(--muted)] text-[0.9rem] mb-[14px]">
                  {p.desc}
                </p>

                {/* TECH CHIPS */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t, idx) => (
                    <span key={idx} className="chip">
                      {t}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-[10px]">
                  <button className="btn-outline flex-1 py-2.5 px-[14px] rounded-[10px]">
                    Code
                  </button>

                  <button className="btn-glow flex-1 py-2.5 px-[14px] rounded-[10px] text-white">
                    Live
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
