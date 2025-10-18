import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <div className="snap-start min-h-screen">
        <Hero />
      </div>
      <div className="snap-start min-h-screen">
        <About />
      </div>
      <div className="snap-start min-h-screen">
        <Projects />
      </div>
      <div className="snap-start">
        <Contact />
      </div>
      <div className="snap-start">
        <Footer />
      </div>
    </div>
  );
}
