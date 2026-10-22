// The machinery range on a conveyor. Wide, tall screens without reduced motion:
// the section pins and the nine machines ride sideways as you scroll, on a belt
// whose rollers turn with the scroll (spring-smoothed, no dead stops).
// Phones, short screens and reduced motion: a row you swipe (scroll snap).
// Without JavaScript: the same swipeable row, every machine a real link.
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, MotionConfig } from 'motion/react';

export interface Machine {
  name: string;
  category: string;
  range: string;
  short: string;
  href: string;
  img: { src: string; srcset?: string; width: number; height: number; alt: string; position?: string };
}

interface Props {
  title: string;
  intro: string;
  machines: Machine[];
  all: { label: string; href: string };
}

export default function MachineReel({ title, intro, machines, all }: Props) {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = useState(false);
  const [distance, setDistance] = useState(0);
  const { scrollYProgress } = useScroll({ target: root, offset: ['start 76px', 'end end'] });
  const smooth = useSpring(scrollYProgress, { stiffness: 150, damping: 34, mass: 0.35 });
  const x = useTransform(smooth, (v) => -v * distance);
  const belt = useTransform(smooth, (v) => `${-v * 1400}px 0`);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1000px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)');
    const measure = () => {
      setPinned(mq.matches);
      const el = track.current;
      if (el) setDistance(Math.max(0, el.scrollWidth - window.innerWidth + 80));
    };
    measure();
    mq.addEventListener('change', measure);
    window.addEventListener('resize', measure);
    return () => {
      mq.removeEventListener('change', measure);
      window.removeEventListener('resize', measure);
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <section
        ref={root}
        className={`reel stratum tone-ash${pinned ? ' is-pinned' : ''}`}
        aria-labelledby="reel-title"
        style={{ height: pinned ? `calc(100vh + ${distance}px)` : undefined }}
      >
        <div className="reel__stage">
          <div className="wrap reel__head">
            <h2 className="s-h2" id="reel-title" dangerouslySetInnerHTML={{ __html: title }} />
            <div className="reel__side">
              <p className="s-lead">{intro}</p>
              <a className="s-link" href={all.href}>{all.label}</a>
            </div>
          </div>
          <div className="reel__viewport">
            <motion.div ref={track} className="reel__track" style={pinned ? { x } : undefined}>
              {machines.map((m) => (
                <a key={m.href} className="reel__card" href={m.href}>
                  <span className="reel__photo">
                    <img src={m.img.src} srcSet={m.img.srcset} sizes="(min-width: 1000px) 30vw, 80vw" width={m.img.width} height={m.img.height} alt={m.img.alt} loading="lazy" style={m.img.position ? { objectPosition: m.img.position } : undefined} />
                  </span>
                  <span className="reel__body">
                    <span className="reel__cat">{m.category}</span>
                    <span className="reel__name">{m.name}</span>
                    <span className="reel__short">{m.short}</span>
                    <span className="reel__range tabular">{m.range}</span>
                  </span>
                </a>
              ))}
            </motion.div>
            <motion.div className="reel__belt" aria-hidden="true" style={pinned ? { backgroundPosition: belt } : undefined} />
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
