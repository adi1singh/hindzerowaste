// Rethink. Reduce. Reuse. Recover. The four words light in reading order as
// the section scrolls through the screen (the colour changes, never the
// opacity, so every word keeps its contrast). Reduced motion and no
// JavaScript: all four are lit.
import { useRef, useState } from 'react';
import { useScroll, useMotionValueEvent } from 'motion/react';

interface Props {
  words: string[];
  paras: string[];
  link: { label: string; href: string };
}

export default function WordsScrub({ words, paras, link }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [lit, setLit] = useState(words.length);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 45%'] });
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return setLit(words.length);
    const n = Math.round(v * words.length);
    setLit((c) => (c === n ? c : n));
  });

  return (
    <section className="words stratum tone-silt" aria-labelledby="words-title">
      <div className="wrap words__grid" ref={ref}>
        <h2 className="words__list" id="words-title">
          {words.map((w, i) => (
            <span key={w} className={i < lit ? 'is-lit' : undefined}>
              {w}
            </span>
          ))}
        </h2>
        <div className="words__body">
          {paras.map((p, i) => (
            <p key={i} className={i === 0 ? 's-lead' : 's-muted'}>
              {p}
            </p>
          ))}
          <a className="s-link" href={link.href}>{link.label}</a>
        </div>
      </div>
    </section>
  );
}
