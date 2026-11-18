import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { services } from '../data/content';

const tilt = [-2.4, 1.6, -1.2, 2.2];

export default function Services() {
  return (
    <section id="services" className="services">
      <Reveal className="services__head">
        <span className="script">what I do</span>
        <h2 className="serif">Services</h2>
      </Reveal>

      <div className="services__grid">
        {services.map((s, i) => (
          <motion.article
            className="note"
            key={s.title}
            initial={{ opacity: 0, y: -70, rotate: tilt[i] * 5, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, rotate: tilt[i], scale: 1 }}
            whileHover={{ rotate: 0, y: -10, scale: 1.03 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 150, damping: 13, delay: i * 0.1 }}
          >
            <span className="note__no script" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="serif">{s.title}</h3>
            <p>{s.description}</p>
            <ul>
              {s.tools.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
