import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Certifications from '../components/Certifications';
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <Certifications />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
