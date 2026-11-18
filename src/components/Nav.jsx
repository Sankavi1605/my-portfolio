import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from 'framer-motion';
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';
import { navLinks, profile } from '../data/content';
import { jumpTo, quiet } from '../lib/jump';

const bookHref = `mailto:${profile.email}?subject=${encodeURIComponent('Book a call')}`;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState('');
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });

  // On the hero the nav is the flat row from the design. Past it, it becomes a
  // floating glass pill that tucks away while you scroll down and returns as
  // soon as you scroll up.
  useMotionValueEvent(scrollY, 'change', (y) => {
    const delta = y - (scrollY.getPrevious() ?? 0);
    setScrolled(y > 40);
    if (y < 120 || performance.now() < quiet.until) setHidden(false);
    else if (delta > 6) setHidden(true);
    else if (delta < -6) setHidden(false);
  });

  // highlight the section that currently sits under the middle of the viewport
  useEffect(() => {
    // "top" is observed too so the highlight clears when you are back on the hero
    const sections = ['top', ...navLinks.map((l) => l.id)].map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setCurrent(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // section links play the page transition instead of a plain scroll
  const go = (id, label) => (e) => {
    e.preventDefault();
    setOpen(false);
    jumpTo(id, label);
  };

  const floating = scrolled || open;
  const tucked = hidden && !open;

  return (
    <>
      <motion.div className="progress" style={{ scaleX: progress }} aria-hidden="true" />

      <motion.header
        className={`nav ${floating ? 'is-floating' : ''}`}
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: tucked ? -110 : 0, opacity: tucked ? 0 : 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        onFocusCapture={() => setHidden(false)}
      >
        <div className="nav__bar">
          <a href="#top" className="nav__logo script" aria-label={`${profile.name} — back to top`} onClick={go('top', 'Hello!')}>
            {profile.initials}
          </a>

          <nav aria-label="Primary">
            <ul className="nav__links">
              {navLinks.map((l) => {
                const active = current === l.id;
                return (
                  <li key={l.id}>
                    <a
                      href={`#${l.id}`}
                      className={`nav__link ${active ? 'is-current' : ''}`}
                      aria-current={active ? 'true' : undefined}
                      onClick={go(l.id, l.label)}
                    >
                      {/* one shared pill that slides to whichever section is current */}
                      {active && (
                        <motion.span
                          layoutId="nav-pill"
                          className="nav__pill"
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        />
                      )}
                      <span>{l.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <a href={bookHref} className="nav__cta">
            Book a call <FiArrowUpRight aria-hidden="true" />
          </a>

          <button
            type="button"
            className="nav__burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="nav__sheet"
            aria-label="Mobile"
            initial={{ opacity: 0, scale: 0.92, y: -14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 26 }}
          >
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`nav__sheet-link ${current === l.id ? 'is-current' : ''}`}
                onClick={go(l.id, l.label)}
              >
                {l.label}
              </a>
            ))}
            <a href={bookHref} className="nav__sheet-cta" onClick={() => setOpen(false)}>
              Book a call <FiArrowUpRight aria-hidden="true" />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
