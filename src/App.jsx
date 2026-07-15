import { Routes, Route, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ErrorOverlay = () => {
  const [errors, setErrors] = useState([]);
  
  useEffect(() => {
    const handleError = (e) => setErrors(prev => [...prev, e.message || String(e)]);
    const handleRejection = (e) => setErrors(prev => [...prev, e.reason ? String(e.reason) : 'Promise Rejection']);
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleRejection);
    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleRejection);
    };
  }, []);

  if (errors.length === 0) return null;
  
  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-red-600/90 text-white p-4 max-h-[50vh] overflow-auto text-sm font-mono whitespace-pre-wrap pointer-events-auto shadow-2xl">
      <h3 className="font-bold text-lg mb-2">Caught Errors ({errors.length}):</h3>
      {errors.map((err, i) => (
        <div key={i} className="mb-1 pb-1 border-b border-white/20">{err}</div>
      ))}
      <button onClick={() => setErrors([])} className="mt-2 bg-white text-red-900 px-3 py-1 rounded">Dismiss</button>
    </div>
  );
};

import Footer from './components/Footer';
import FloatingMessageButton from './components/FloatingMessageButton';
import JellyfishBackground from './components/JellyfishBackground';
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
      <ErrorOverlay />
      <ScrollToTop />
      <JellyfishBackground />
      <div className="relative z-10 flex min-h-screen flex-col">

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
