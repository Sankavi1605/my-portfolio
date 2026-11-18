import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

/**
 * Fades/slides its children in the first time they scroll into view.
 * `from` is the hidden state; anything omitted falls back to a soft rise.
 */
export default function Reveal({
  as = 'div',
  from,
  delay = 0,
  duration = 0.75,
  amount = 0.3,
  spring = false,
  children,
  ...rest
}) {
  const Tag = motion[as] ?? motion.div;
  const hidden = { opacity: 0, y: 26, ...from };
  const shown = { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 };

  return (
    <Tag
      initial={hidden}
      whileInView={shown}
      viewport={{ once: true, amount }}
      transition={
        spring
          ? { type: 'spring', stiffness: 130, damping: 13, delay }
          : { duration, ease: EASE, delay }
      }
      {...rest}
    >
      {children}
    </Tag>
  );
}
