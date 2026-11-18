import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiDownload, FiMail, FiMapPin } from 'react-icons/fi';
import Reveal from './Reveal';
import { profile } from '../data/content';
import divider from '../assets/canva/divider.webp';
import note from '../assets/canva/note.webp';
import hand from '../assets/canva/hand.webp';
import terracotta from '../assets/canva/terracotta.webp';

export default function Contact() {
  const ref = useRef(null);
  const handRef = useRef(null);
  const handIn = useInView(handRef, { once: true, amount: 0.25 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] });
  const groundY = useTransform(scrollYProgress, [0, 1], ['45%', '0%']);
  const dividerX = useTransform(scrollYProgress, [0, 1], ['-3%', '1%']);

  return (
    <section id="contact" ref={ref} className="contact">
      <motion.div className="contact__divider" style={{ x: dividerX }} aria-hidden="true">
        <img src={divider} alt="" />
        <img src={divider} alt="" />
        <img src={divider} alt="" />
      </motion.div>

      <div className="contact__side">
        <Reveal from={{ y: 30, rotate: -14 }} spring>
          <span className="script">say hi</span>
        </Reveal>
        <ul className="contact__list">
          <Reveal as="li" delay={0.1}>
            <FiMail aria-hidden="true" />
            <a className="link-ink" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </Reveal>
          <Reveal as="li" delay={0.18}>
            <FaLinkedinIn aria-hidden="true" />
            <a className="link-ink" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </Reveal>
          <Reveal as="li" delay={0.26}>
            <FaGithub aria-hidden="true" />
            <a className="link-ink" href={profile.github} target="_blank" rel="noreferrer">
              github.com/Sankavi1605
            </a>
          </Reveal>
          <Reveal as="li" delay={0.34}>
            <FiDownload aria-hidden="true" />
            <a className="link-ink" href={profile.cv} target="_blank" rel="noreferrer">
              Download CV
            </a>
          </Reveal>
          <Reveal as="li" delay={0.42}>
            <FiMapPin aria-hidden="true" />
            <span>
              {profile.location} • {profile.status}
            </span>
          </Reveal>
        </ul>
      </div>

      <motion.div
        className="contact__note"
        initial={{ opacity: 0, y: -120, rotate: 14 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ type: 'spring', stiffness: 90, damping: 11 }}
      >
        <img src={note} alt="" className="contact__note-paper" />
        <div className="contact__note-copy">
          <h2>Let's build something together</h2>
          <p>
            Whether you are looking for a software engineering intern, a graduate developer, or just want to chat about
            tech, I'd love to hear from you.
          </p>
          <div className="contact__note-links">
            <a className="link-ink" href={profile.github} target="_blank" rel="noreferrer">
              Github <FaGithub aria-hidden="true" />
            </a>
            <a className="link-ink" href={`mailto:${profile.email}`}>
              Email <FiMail aria-hidden="true" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* static wrapper is what gets observed; the hand slides in from off-screen inside it */}
      <div className="contact__hand" ref={handRef} aria-hidden="true">
        <motion.div
          initial={{ opacity: 0, x: '80%', y: '30%', rotate: 16 }}
          animate={handIn ? { opacity: 1, x: 0, y: 0, rotate: 0 } : { opacity: 0, x: '80%', y: '30%', rotate: 16 }}
          transition={{ type: 'spring', stiffness: 70, damping: 13, delay: 0.35 }}
        >
          <img src={hand} alt="" className="jitter jitter--b" />
        </motion.div>
      </div>

      <motion.div className="contact__ground" style={{ y: groundY }} aria-hidden="true">
        <img src={terracotta} alt="" />
      </motion.div>

      <footer className="contact__foot">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>{profile.role}</span>
      </footer>
    </section>
  );
}
