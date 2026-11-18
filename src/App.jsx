import { MotionConfig } from 'framer-motion';
import Nav from './components/Nav';
import Hero from './components/Hero';
import SkillsTape from './components/SkillsTape';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import PageTransition from './components/PageTransition';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="grain-fx" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <SkillsTape />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
      <PageTransition />
    </MotionConfig>
  );
}
