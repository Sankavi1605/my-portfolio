import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} • Project`;
    }
  }, [project]);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const p = height > 0 ? Math.min(100, Math.max(0, (scrollTop / height) * 100)) : 0;
      setProgress(p);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-gray-200">
        <h1 className="text-3xl font-bold mb-4">Project not found</h1>
        <p className="mb-6">We couldn't find that case study.</p>
        <Link to="/projects" className="text-green-400 hover:text-green-300 underline">Back to projects</Link>
      </div>
    );
  }

  const { title, subtitle, status, tech = [], image, description, link, liveUrl, caseStudy, role, teamSize, timeline, keyMetric } = project;

  // Derive structured sections if caseStudy not provided
  const sections = caseStudy || {
    problem: description,
    approach: project.highlights || [],
    impact: [],
    lessons: []
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Scroll progress bar */}
      <div className="fixed left-0 right-0 top-0 h-1 z-20">
        <div className="h-full bg-green-500" style={{ width: `${progress}%`, transition: 'width 0.1s linear' }} />
      </div>
      {/* Header */}
      <header className="mb-10">
        <nav className="mb-6">
          <Link to="/projects" className="text-green-400 hover:text-green-300">← All Projects</Link>
        </nav>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-300">
          {subtitle && <span className="px-3 py-1 rounded-full bg-gray-800 border border-gray-700">{subtitle}</span>}
          {status && <span className="px-3 py-1 rounded-full bg-green-600/20 text-green-300 border border-green-500/30">{status}</span>}
          {role && <span className="px-3 py-1 rounded-full bg-gray-800 border border-gray-700">{role}</span>}
          {teamSize != null && <span className="px-3 py-1 rounded-full bg-gray-800 border border-gray-700">Team: {teamSize}</span>}
          {timeline && <span className="px-3 py-1 rounded-full bg-gray-800 border border-gray-700">{timeline}</span>}
        </div>
      </header>

      {/* Hero image */}
      {image && (
        <div className="mb-10 overflow-hidden rounded-xl border border-gray-800">
          <img src={image} alt={`${title} cover`} loading="lazy" className="w-full h-auto object-cover" />
        </div>
      )}

      {/* Quick links */}
      <div className="flex flex-wrap gap-3 mb-10">
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-green-500/90 px-4 py-2 text-sm font-semibold text-white hover:bg-green-500">
            View Live
          </a>
        )}
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-green-400 hover:text-green-300 border border-green-700/50 rounded-lg">
            View Code
          </a>
        )}
      </div>

      {/* Tech */}
      {tech.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-12">
          {tech.map((t, i) => (
            <span key={i} className="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-xs border border-gray-700">{t}</span>
          ))}
        </div>
      )}

      {/* Sections */}
      <section className="space-y-10 text-gray-200">
        {sections.problem && (
          <div>
            <h2 className="text-2xl font-semibold mb-3">Problem</h2>
            <p className="text-gray-300 leading-relaxed">{sections.problem}</p>
          </div>
        )}

        {Array.isArray(sections.approach) && sections.approach.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-3">Approach</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              {sections.approach.map((a, idx) => <li key={idx}>{a}</li>)}
            </ul>
          </div>
        )}

        {(Array.isArray(sections.impact) && sections.impact.length > 0) || keyMetric ? (
          <div>
            <h2 className="text-2xl font-semibold mb-3">Impact</h2>
            {keyMetric && (
              <div className="mb-3 px-4 py-2 inline-block rounded-lg bg-green-600/10 text-green-300 border border-green-700/40">
                {keyMetric}
              </div>
            )}
            {Array.isArray(sections.impact) && sections.impact.length > 0 && (
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                {sections.impact.map((i, idx) => <li key={idx}>{i}</li>)}
              </ul>
            )}
          </div>
        ) : null}

        {Array.isArray(sections.lessons) && sections.lessons.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-3">Lessons</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              {sections.lessons.map((l, idx) => <li key={idx}>{l}</li>)}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
}
