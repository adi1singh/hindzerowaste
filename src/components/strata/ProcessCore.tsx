// How we work, drawn as a core sample: the four steps are layers along one
// vertical core, and the core fills from the top as you scroll past them
// (spring-smoothed): a sleeve over the layers not yet reached slides away. The
// step being read is marked. No pinning.
// Reduced motion and no JavaScript: the core is full and every step reads.
import { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent, MotionConfig } from 'motion/react';

interface Props {
  title: string;
  intro: string;
  steps: [string, string][];
}

const BANDS = ['var(--f-fines)', 'var(--ash)', 'var(--f-rdf)', 'var(--field)'];

export default function ProcessCore({ title, intro, steps }: Props) {
  const list = useRef<HTMLOListElement>(null);
  const [current, setCurrent] = useState(-1);
  const { scrollYProgress } = useScroll({ target: list, offset: ['start 70%', 'end 55%'] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const sleeve = useTransform(fill, (v) => 1 - v);
  useMotionValueEvent(fill, 'change', (v) => {
    const i = v <= 0.001 ? -1 : Math.min(steps.length - 1, Math.floor(v * steps.length));
    setCurrent((c) => (c === i ? c : i));
  });

  return (
    <MotionConfig reducedMotion="user">
      <section className="core stratum tone-paper" aria-labelledby="core-title">
        <div className="wrap core__grid">
          <div className="core__head">
            <h2 className="s-h2" id="core-title" dangerouslySetInnerHTML={{ __html: title }} />
            <p className="s-lead s-muted">{intro}</p>
          </div>
          <div className="core__body">
            <span className="core__tube" aria-hidden="true">
              {steps.map((_, i) => (
                <span key={i} style={{ background: BANDS[i] }} />
              ))}
              <motion.i className="core__sleeve" style={{ scaleY: sleeve }} />
            </span>
            <ol className="core__list" ref={list}>
              {steps.map(([name, text], i) => (
                <li key={name} className={`core__step${i === current ? ' is-current' : ''}`}>
                  <span className="core__n tabular" aria-hidden="true">{i + 1}</span>
                  <h3 className="s-h3">{name}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
