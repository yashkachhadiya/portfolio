import Navbar from "@/components/home/sections/Navbar";
import Hero from "@/components/home/sections/Hero";
import About from "@/components/home/sections/About";
import Skills from "@/components/home/sections/Skills";
import Projects from "@/components/home/sections/Projects";
import Experience from "@/components/home/sections/Experience";
import Contact from "@/components/home/sections/Contact";
import Footer from "@/components/home/sections/Footer";

export default function Home() {
  return (
    <div className="portfolio-wrapper">
      {/* NAV */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* About me  */}
      <About />

      {/* SKILLS */}
      <Skills />

      {/* PROJECTS */}
      <Projects />

      {/* EXPERIENCE */}
      <Experience />

      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
