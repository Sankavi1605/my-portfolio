import { useRef } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import { profile } from '../data/content';
import { jumpTo } from '../lib/jump';
import paperStrip from '../assets/canva/paper-strip.webp';
import crumpledStrip from '../assets/canva/crumpled-strip.webp';
import arrow from '../assets/canva/arrow.webp';
import portrait from '../assets/canva/portrait.webp';

const EASE = [0.22, 1, 0.36, 1];

function useDrift(sx, sy, depth) {
  const x = useTransform(sx, (v) => v * depth);
  const y = useTransform(sy, (v) => v * depth);
  return { x, y };
}

export default function Hero() {
  const ref = useRef(null);

  // pointer parallax: -0.5..0.5 across the hero
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 16 });
  const sy = useSpring(my, { stiffness: 50, damping: 16 });
  const driftHello = useDrift(sx, sy, 22);
  const driftArrow = useDrift(sx, sy, -18);
  const driftPortrait = useDrift(sx, sy, 10);

  // scroll parallax while the hero leaves the screen
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const portraitY = useTransform(scrollYProgress, [0, 1], ['0%', '9%']);
  const stripX = useTransform(scrollYProgress, [0, 1], ['0%', '-3%']);
  const helloY = useTransform(scrollYProgress, [0, 1], ['0%', '-35%']);
  const crumpleX = useTransform(scrollYProgress, [0, 1], ['0%', '2.5%']);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const line = (i) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: EASE, delay: 0.75 + i * 0.12 },
  });

  return (
    <section id="top" ref={ref} className="hero" onPointerMove={onMove} onPointerLeave={onLeave}>
      <div className="hero__clip">
        <motion.div
          className="hero__studio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
        />

        <motion.div className="hero__strip" style={{ x: stripX }}>
          <motion.img
            src={paperStrip}
            alt=""
            initial={{ x: '-22%', rotate: -3, opacity: 0 }}
            animate={{ x: 0, rotate: 0, opacity: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.1 }}
          />
        </motion.div>

        <motion.div className="hero__arrow" style={driftArrow} aria-hidden="true">
          <img src={arrow} alt="" />
        </motion.div>

        <motion.div className="hero__portrait" style={{ y: portraitY }}>
          <motion.div style={driftPortrait}>
            <motion.img
              src={portrait}
              alt={`Portrait of ${profile.name}`}
              initial={{ y: '14%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: EASE, delay: 0.45 }}
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div className="hero__hello script" style={{ y: helloY }} aria-hidden="true">
        <motion.div style={driftHello}>
          {/* the word is written on, then the "!" is stamped after it */}
          <motion.span
            className="hero__hello-word"
            initial={{ clipPath: 'inset(-20% 100% -20% 0)' }}
            animate={{ clipPath: 'inset(-20% -5% -20% 0)' }}
            transition={{ duration: 1.1, ease: [0.6, 0, 0.3, 1], delay: 0.3 }}
          >
            Hello
          </motion.span>
          <motion.span
            className="hero__hello-bang"
            initial={{ scale: 0, rotate: -45, y: '-40%', opacity: 0 }}
            animate={{ scale: 1, rotate: 0, y: '0%', opacity: 1 }}
            transition={{ type: 'spring', stiffness: 280, damping: 10, delay: 1.3 }}
          >
            !
          </motion.span>
        </motion.div>
      </motion.div>

      <div className="hero__text">
        <motion.h1 className="hero__name serif" {...line(0)}>
          <span className="sr-only">Hello, </span>It’s {profile.shortName}
        </motion.h1>
        <motion.p className="hero__role" {...line(1)}>
          {profile.role}
        </motion.p>
        <motion.p className="hero__tagline" {...line(2)}>
          {profile.tagline.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </motion.p>
        <motion.a
          href="#about"
          className="hero__scroll link-ink"
          onClick={(e) => {
            e.preventDefault();
            jumpTo('about');
          }}
          {...line(3)}
        >
          Scroll down <FiArrowDown aria-hidden="true" />
        </motion.a>
      </div>

      <motion.div className="hero__crumple" style={{ x: crumpleX }} aria-hidden="true">
        <motion.img
          src={crumpledStrip}
          alt=""
          initial={{ x: '18%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.55 }}
        />
      </motion.div>
    </section>
  );
}
