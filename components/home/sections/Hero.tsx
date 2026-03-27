export default function Hero() {
  return (
    <section className="hero-bg mesh relative px-6 pt-[90px] pb-[80px]">
      <div className="orb absolute top-[10%] left-[5%] w-[280px] h-[280px]" />
      <div className="orb2 absolute bottom-[10%] right-[5%] w-[220px] h-[220px]" />

      <div className="max-w-[900px] mx-auto text-center">
        <span className="badge">Available for Freelance</span>

        <h1 className="font-extrabold text-[clamp(2.5rem,7vw,5rem)]">
          Hi, I'm <span className="grad-text">Yash Kachhadiya</span>
        </h1>

        <p className="text-[var(--muted)]">Full Stack Software Engineer</p>

        <p className="text-[var(--muted)]">
          I craft fast, scalable & beautiful web applications
        </p>

        <div className="flex gap-[14px] justify-center">
          <a
            href="#projects"
            className="btn-glow px-8 py-4 rounded-xl text-white"
          >
            View My Work
          </a>
          <a href="#contact" className="btn-outline px-8 py-4 rounded-xl">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
