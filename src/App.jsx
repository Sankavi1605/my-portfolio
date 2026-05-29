import { Routes, Route, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingMessageButton from './components/FloatingMessageButton';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Learning from './pages/Learning';
import Education from './pages/Education';
import Contact from './pages/Contact';

// Page transition component
const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="site-shell">
      <ScrollToTop />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={
                <PageTransition>
                  <Home />
                </PageTransition>
              } />
              <Route path="/projects" element={
                <PageTransition>
                  <Projects />
                </PageTransition>
              } />
              <Route path="/projects/:slug" element={
                <PageTransition>
                  <ProjectDetails />
                </PageTransition>
              } />
              <Route path="/learning" element={
                <PageTransition>
                  <Learning />
                </PageTransition>
              } />
              <Route path="/education" element={
                <PageTransition>
                  <Education />
                </PageTransition>
              } />
              <Route path="/contact" element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              } />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <FloatingMessageButton />
      </div>
    </div>
  );
}

export default App;
