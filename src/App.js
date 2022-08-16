import NavBar from './components/navbar';
import Hero from './components/sections/hero';
import About from './components/sections/about';
import Skills from './components/sections/skills';
import Experience from './components/sections/experience';
import Awards from './components/sections/awards';
import Projects from './components/sections/projects';
import Footer from './components/sections/footer';

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Awards />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
