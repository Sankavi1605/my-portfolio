import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Project`;
    }
  }, [project]);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const nextProgress = height > 0 ? Math.min(100, Math.max(0, (scrollTop / height) * 100)) : 0;
      setProgress(nextProgress);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!project) {
    return (
      <div className="page-shell py-16 text-slate-200">
        <h1 className="mb-4 text-3xl font-bold">Project not found</h1>
        <p className="mb-6 text-slate-400">The requested case study could not be found.</p>
        <Link to="/projects" className="text-emerald-200 hover:text-white">Back to projects</Link>
      </div>
    );
  }

  const { title, subtitle, status, tech = [], image, description, link, liveUrl, caseStudy, role, teamSize, timeline, keyMetric } = project;

  const sections = caseStudy || {
    problem: description,
    approach: project.highlights || [],
    impact: [],
    lessons: [],
  };

  return (
    <div className="page-shell py-6">
      <div className="fixed left-0 right-0 top-0 z-20 h-1">
        <div className="h-full bg-emerald-400" style={{ width: `${progress}%`, transition: 'width 0.1s linear' }} />
      </div>

      <header className="page-hero pb-6 text-left">
        <nav className="mb-6">
          <Link to="/projects" className="text-sm font-medium text-emerald-200 hover:text-white">
            Back to projects
          </Link>
        </nav>
        <h1 className="max-w-4xl">{title}</h1>
        <p className="mx-0 mt-4 max-w-3xl">{description}</p>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-300">
          {subtitle && <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">{subtitle}</span>}
          {status && <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-emerald-200">{status}</span>}
          {role && <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">{role}</span>}
          {teamSize != null && <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">Team: {teamSize}</span>}
          {timeline && <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">{timeline}</span>}
        </div>
      </header>

      {image && (
        <div className="panel mb-10 overflow-hidden rounded-[1.75rem]">
          <img src={image} alt={`${title} cover`} loading="lazy" className="h-auto w-full object-cover" />
        </div>
      )}

      <div className="mb-10 flex flex-wrap gap-3">
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
            View Live
          </a>
        )}
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            View Code
          </a>
        )}
      </div>

      {tech.length > 0 && (
        <div className="mb-12 flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span key={index} className="rounded-full border border-white/8 bg-white/5 px-3 py-1 text-xs text-slate-200">
              {item}
            </span>
          ))}
        </div>
      )}

      <section className="space-y-10 pb-8 text-slate-200">
        {sections.problem && (
          <div className="panel rounded-[1.5rem] p-6">
            <h2 className="mb-3 text-2xl font-semibold text-white">Problem</h2>
            <p className="text-sm leading-7 text-slate-300">{sections.problem}</p>
          </div>
        )}

        {Array.isArray(sections.approach) && sections.approach.length > 0 && (
          <div className="panel rounded-[1.5rem] p-6">
            <h2 className="mb-3 text-2xl font-semibold text-white">Approach</h2>
            <ul className="space-y-2 text-sm leading-7 text-slate-300">
              {sections.approach.map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {(Array.isArray(sections.impact) && sections.impact.length > 0) || keyMetric ? (
          <div className="panel rounded-[1.5rem] p-6">
            <h2 className="mb-3 text-2xl font-semibold text-white">Impact</h2>
            {keyMetric && (
              <div className="mb-4 inline-block rounded-xl border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
                {keyMetric}
              </div>
            )}
            {Array.isArray(sections.impact) && sections.impact.length > 0 && (
              <ul className="space-y-2 text-sm leading-7 text-slate-300">
                {sections.impact.map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : null}

        {Array.isArray(sections.lessons) && sections.lessons.length > 0 && (
          <div className="panel rounded-[1.5rem] p-6">
            <h2 className="mb-3 text-2xl font-semibold text-white">Lessons</h2>
            <ul className="space-y-2 text-sm leading-7 text-slate-300">
              {sections.lessons.map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
}
