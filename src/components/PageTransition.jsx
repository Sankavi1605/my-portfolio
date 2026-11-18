import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { navLinks } from '../data/content';
import { onJump, quiet } from '../lib/jump';
import sheetTop from '../assets/canva/sheet-top.webp';

/* Each of these sections is treated as a "page". The skills tape belongs to the hero page. */
const PAGES = [{ id: 'top', label: 'Hello!' }, ...navLinks];

/* Scrolling down: go to the next page once its top edge is this far down the viewport. */
const DOWN_LINE = 0.72;
/* Scrolling up: go back once the current page's top edge has dropped this far down the viewport. */
const UP_LINE = 0.28;

const pageTops = () =>
  PAGES.map(({ id }) => {
    const el = document.getElementById(id);
    return el ? Math.round(el.getBoundingClientRect().top + window.scrollY) : 0;
  });

const clampScroll = (y) => Math.max(0, Math.min(y, document.documentElement.scrollHeight - window.innerHeight));

/**
 * Page-to-page transition. Whenever you scroll across a section boundary (or use
 * the nav), a blank sheet of paper covers the whole screen, the page underneath
 * swaps to the next section, and the sheet carries on off the other side.
 */
export default function PageTransition() {
  const reduce = useReducedMotion();
  const [sheet, setSheet] = useState(null);
  const busy = useRef(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const start = (to, page, dir) => {
      if (busy.current) return;
      busy.current = true;
      quiet.until = performance.now() + 1800;
      // freeze scrolling while the sheet is over the page
      document.documentElement.style.overflowY = 'hidden';
      setSheet({
        to: clampScroll(to),
        id: page.id,
        label: page.label,
        dir,
        // viewport height plus the torn edge that hangs off each end
        travel: window.innerHeight + window.innerWidth * 0.22,
        key: Date.now(),
      });
    };

    const onScroll = () => {
      const y = window.scrollY;
      const prev = lastY.current;
      lastY.current = y;
      if (reduce || busy.current || y === prev) return;

      const vh = window.innerHeight;
      const tops = pageTops();
      if (y > prev) {
        // furthest page whose line was crossed (a big jump, e.g. the End key, can cross several)
        for (let i = tops.length - 1; i >= 1; i--) {
          const line = tops[i] - vh * DOWN_LINE;
          if (prev < line && y >= line) return start(Math.max(tops[i], y), PAGES[i], 1);
        }
      } else {
        for (let i = 1; i < tops.length; i++) {
          const line = tops[i] - vh * UP_LINE;
          // land on the end of the previous page: the boundary sits at the bottom of the screen
          if (prev > line && y <= line) return start(Math.min(y, Math.max(tops[i - 1], tops[i] - vh)), PAGES[i - 1], -1);
        }
      }
    };

    const offJump = onJump(({ id }) => {
      const i = Math.max(0, PAGES.findIndex((p) => p.id === id));
      const to = clampScroll(pageTops()[i]);
      if (reduce) {
        window.scrollTo({ top: to, behavior: 'instant' });
        return;
      }
      start(to, PAGES[i], to >= window.scrollY ? 1 : -1);
    });

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      offJump();
      document.documentElement.style.overflowY = '';
    };
  }, [reduce]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.documentElement.style.overflowY = '';
        lastY.current = window.scrollY;
        busy.current = false;
      }}
    >
      {sheet && (
        <motion.div
          key={sheet.key}
          className="wipe"
          aria-hidden="true"
          initial={{ y: sheet.dir * sheet.travel }}
          animate={{ y: 0, transition: { duration: 0.4, ease: [0.32, 0, 0.18, 1] } }}
          exit={{ y: -sheet.dir * sheet.travel, transition: { duration: 0.5, ease: [0.7, 0, 0.3, 1] } }}
          onAnimationComplete={(definition) => {
            if (definition.y !== 0) return; // only when the sheet has just covered the page
            window.scrollTo({ top: sheet.to, behavior: 'instant' });
            lastY.current = sheet.to;
            window.history.replaceState(null, '', sheet.id === 'top' ? window.location.pathname : `#${sheet.id}`);
            window.setTimeout(() => setSheet(null), 120);
          }}
        >
          <img src={sheetTop} alt="" className="wipe__edge wipe__edge--top" />
          <span className="wipe__label script">{sheet.label}</span>
          <img src={sheetTop} alt="" className="wipe__edge wipe__edge--bottom" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
