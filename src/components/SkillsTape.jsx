import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { marquee } from '../data/content';

function Row({ variant, items }) {
  // two identical tracks so the loop is seamless
  return (
    <div className={`tape__row tape__row--${variant}`}>
      {[0, 1, 2].map((n) => (
        <div className="tape__track" key={n} aria-hidden={n > 0 ? 'true' : undefined}>
          {items.map((item) => (
            <span className="tape__item" key={item}>
              {item}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function SkillsTape() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const a = useTransform(scrollYProgress, [0, 1], ['3%', '-6%']);
  const b = useTransform(scrollYProgress, [0, 1], ['-6%', '3%']);

  return (
    <section ref={ref} className="tape" aria-label="Skills">
      <motion.div style={{ x: a }}>
        <Row variant="paper" items={marquee} />
      </motion.div>
      <motion.div style={{ x: b }}>
        <Row variant="ink" items={[...marquee].reverse()} />
      </motion.div>
    </section>
  );
}
