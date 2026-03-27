export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-[var(--surface)]">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-12">
          <p className="section-label">My Journey</p>
          <h2 className="font-extrabold">Work Experience</h2>
        </div>

        <div className="border-l-2 border-l-[rgba(124,58,237,0.25)] pl-[30px]">
          <div className="mb-10">
            <h3>Junior Full Stack Engineer</h3>
            <span className="badge">2023 – Present</span>
            <p className="text-[var(--muted)]">
              Built React & Node apps, improved API performance.
            </p>
          </div>

          <div>
            <h3>Software Engineer Intern</h3>
            <span className="badge">2022 – 2023</span>
            <p className="text-[var(--muted)]">
              Built reusable components and worked with teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
