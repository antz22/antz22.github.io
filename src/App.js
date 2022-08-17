import NavBar from './components/navbar';
import Hero from './components/sections/hero';
import About from './components/sections/about';
import Skills from './components/sections/skills';
import Experience from './components/sections/experience';
import Awards from './components/sections/awards';
import Projects from './components/sections/projects';
import Footer from './components/sections/footer';

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      once: true
    });
  }, []);

  return (
    <div>
      <NavBar />
      <Hero />
      <span id="about" />
      <About />
      <Skills />
      <span id="experience" />
      <Experience />
      <span id="awards" />
      <Awards />
      <span id="projects" />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
