export default function About() {
  return (
    <section id="about" className="px-6 py-20 max-w-[1100px] mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="section-label">Who I Am</p>

          <h2 className="text-3xl font-extrabold mt-4">
            Passionate engineer,
            <br />
            <span className="grad-text">creative problem solver</span>
          </h2>

          <p className="text-[var(--muted)] mt-4">
            I'm a software engineer with 2 years of experience...
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {["Frontend Dev", "Backend Dev", "Responsive", "Performance"].map(
            (item, i) => (
              <div key={i} className="card p-6">
                <p className="font-bold">{item}</p>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
