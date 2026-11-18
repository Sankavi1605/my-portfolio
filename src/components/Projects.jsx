import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiArrowUpRight, FiPlus } from 'react-icons/fi';
import Reveal from './Reveal';
import useMediaQuery from '../hooks/useMediaQuery';
import { projects } from '../data/content';
import fist from '../assets/canva/fist.webp';
import frameLight from '../assets/canva/frame-light.webp';
import frameDark from '../assets/canva/frame-dark.webp';
import burst from '../assets/canva/burst.webp';

function Links({ project, className }) {
  if (!project.live && !project.code) return null;
  return (
    <div className={className}>
      {project.live && (
        <a className="link-ink" href={project.live} target="_blank" rel="noreferrer" aria-label={`${project.title} — live site`}>
          Live <FiArrowUpRight aria-hidden="true" />
        </a>
      )}
      {project.code && (
        <a className="link-ink" href={project.code} target="_blank" rel="noreferrer" aria-label={`${project.title} — source code`}>
          Code <FaGithub aria-hidden="true" />
        </a>
      )}
    </div>
  );
}

function Column({ project, index, active, desktop, onOpen, onToggle }) {
  const dark = index % 2 === 1;
  const frame = dark ? frameDark : frameLight;
  const panelId = `project-panel-${project.id}`;

  // gallery projects (the landing pages) cycle through their screenshots while open
  const pages = project.pages;
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (!pages || !active || paused) return;
    const timer = setInterval(() => setPage((p) => (p + 1) % pages.length), 2800);
    return () => clearInterval(timer);
  }, [pages, active, paused]);
  const shown = pages ? pages[page] : null;

  return (
    <motion.article
      className={`acc__col ${dark ? 'acc__col--dark' : ''} ${active ? 'is-active' : ''}`}
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.07 }}
      onPointerEnter={(e) => desktop && e.pointerType === 'mouse' && onOpen()}
    >
      <div className="acc__face">
        <span className="acc__no" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <button
          type="button"
          className="acc__toggle"
          aria-expanded={active}
          aria-controls={panelId}
          aria-label={`${project.title} — ${active ? 'hide' : 'show'} details`}
          onClick={() => (desktop ? onOpen() : onToggle())}
          onFocus={() => desktop && onOpen()}
        />
        <span className="acc__name">{project.title}</span>
        {pages ? (
          <div className="acc__links">
            <span>{pages.length} live pages</span>
          </div>
        ) : (
          <Links project={project} className="acc__links" />
        )}
        <FiPlus className="acc__chev" aria-hidden="true" />
      </div>

      <div className="acc__panel" id={panelId} inert={!active}>
        <div className="acc__panel-clip">
          <div className="acc__panel-inner">
            <div className="shot">
              {shown ? (
                <a
                  className="shot__link"
                  href={shown.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${shown.title} — open live page`}
                >
                  <AnimatePresence initial={false}>
                    <motion.img
                      key={shown.title}
                      className="shot__img"
                      src={shown.image}
                      alt={`${shown.title} screenshot`}
                      initial={{ opacity: 0, scale: 1.06 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </AnimatePresence>
                </a>
              ) : project.image ? (
                <img className="shot__img" src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
              ) : (
                <div className="shot__empty">
                  <span className="script">soon</span>
                  <span>Screenshot coming soon</span>
                </div>
              )}
              <img className="shot__edge shot__edge--t" src={frame} alt="" />
              <img className="shot__edge shot__edge--b" src={frame} alt="" />
              <img className="shot__edge shot__edge--l" src={frame} alt="" />
              <img className="shot__edge shot__edge--r" src={frame} alt="" />
              <span className="shot__burst" aria-hidden="true">
                <img src={burst} alt="" className="jitter jitter--c" />
              </span>
            </div>

            <div className="acc__info">
              <h3>{project.title}</h3>
              <p>
                {project.subtitle}
                <br />
                {project.focus}
              </p>
              {pages ? (
                <ul
                  className="acc__pages"
                  onPointerEnter={() => setPaused(true)}
                  onPointerLeave={() => setPaused(false)}
                >
                  {pages.map((pg, i) => (
                    <li key={pg.title}>
                      <a
                        href={pg.live}
                        target="_blank"
                        rel="noreferrer"
                        className={i === page ? 'is-on' : ''}
                        onPointerEnter={() => setPage(i)}
                        onFocus={() => setPage(i)}
                      >
                        {pg.title} <FiArrowUpRight aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              ) : project.tech.length > 0 ? (
                <ul className="acc__tech">
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
              <Links project={project} className="acc__panel-links" />
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [active, setActive] = useState(null);
  const desktop = useMediaQuery('(min-width: 760px)');
  const fistRef = useRef(null);
  const fistIn = useInView(fistRef, { once: true, amount: 0.6 });

  return (
    <section id="projects" className="projects">
      <div className="projects__intro">
        {/* the wrapper stays put so it can be observed; the fist itself punches in from off-screen */}
        <div className="projects__fist" ref={fistRef} aria-hidden="true">
          <motion.div
            initial={{ x: '-110%', rotate: -10 }}
            animate={
              !fistIn
                ? { x: '-110%', y: 0, rotate: -10 }
                : desktop && (active === 0 || active === 1)
                  ? { x: '-112%', y: 0, rotate: -12 } // pull back off-screen: it would cover the open panel
                  : { x: 0, y: 0, rotate: 0 } // otherwise it stays planted on the strips, as in the Canva page
            }
            transition={{ type: 'spring', stiffness: 150, damping: 13 }}
          >
            <img src={fist} alt="" className="jitter" />
          </motion.div>
        </div>
        <Reveal className="projects__head" delay={0.25}>
          <span className="script">my</span>
          <h2 className="serif">Projects</h2>
          <p>{desktop ? 'Hover a strip to open it' : 'Tap a strip to open it'}</p>
        </Reveal>
      </div>

      <div
        className={`acc ${active !== null ? 'acc--open' : ''}`}
        onPointerLeave={(e) => desktop && e.pointerType === 'mouse' && setActive(null)}
        onBlur={(e) => {
          if (desktop && !e.currentTarget.contains(e.relatedTarget)) setActive(null);
        }}
      >
        {projects.map((project, i) => (
          <Column
            key={project.id}
            project={project}
            index={i}
            active={active === i}
            desktop={desktop}
            onOpen={() => setActive(i)}
            onToggle={() => setActive((cur) => (cur === i ? null : i))}
          />
        ))}
      </div>
    </section>
  );
}
