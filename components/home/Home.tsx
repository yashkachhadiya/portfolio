import Navbar from "@/components/home/sections/Navbar";
import Hero from "@/components/home/sections/Hero";
import About from "@/components/home/sections/About";
import Skills from "@/components/home/sections/Skills";
import Experience from "@/components/home/sections/Experience";
import Projects from "@/components/home/sections/Projects";
import Education from "@/components/home/sections/Education";
import Contact from "@/components/home/sections/Contact";
import Footer from "@/components/home/sections/Footer";

export default function Home() {
  return (
    <div id="top" className="portfolio-wrapper">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <Hero />

      {/* ABOUT ME */}
      <About />

      {/* TECHNICAL SKILLS */}
      <Skills />

      {/* PROFESSIONAL EXPERIENCE */}
      <Experience />

      {/* FEATURED PROJECTS & DEPLOYMENTS */}
      <Projects />

      {/* EDUCATION & ACADEMICS */}
      <Education />

      {/* CONTACT & CONNECT */}
      <Contact />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
