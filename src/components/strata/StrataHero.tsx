// Strata hero: Hind's own photo of a trommel at a legacy dumpsite, the
// headline and the two actions. Three soil layers lie across the bottom; as you
// scroll they rise at different speeds over the photo, like ground being
// excavated, and the photo settles back. The headline words rise in once.
// Reduced motion: everything still. Without JavaScript: the same layout, still.
import { Fragment, useRef } from 'react';
import { motion, useScroll, useTransform, MotionConfig } from 'motion/react';

interface Props {
  img: { src: string; srcset?: string; width: number; height: number; alt: string };
  words: { text: string; india?: boolean }[];
  sub: string;
  quote: { label: string; href: string };
  explore: { label: string; href: string };
  powered: [string, string];
}

const LAYERS = [
  { fill: 'var(--ash)', d: 'M0 70 L120 58 L240 66 L380 50 L520 60 L660 46 L800 58 L940 44 L1080 56 L1220 42 L1360 54 L1440 48 L1440 640 L0 640Z', speed: 60 },
  { fill: 'var(--humus)', d: 'M0 84 L140 74 L270 82 L410 68 L560 78 L700 66 L850 76 L990 64 L1130 74 L1270 62 L1440 72 L1440 640 L0 640Z', speed: 110 },
  { fill: 'var(--silt)', d: 'M0 104 L130 96 L260 102 L400 92 L540 100 L690 90 L830 98 L970 88 L1110 96 L1250 86 L1380 94 L1440 90 L1440 640 L0 640Z', speed: 160 },
];

export default function StrataHero({ img, words, sub, quote, explore, powered }: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);
  const photoS = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  const y0 = useTransform(scrollYProgress, [0, 1], [0, -LAYERS[0].speed]);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -LAYERS[1].speed]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -LAYERS[2].speed]);
  const ys = [y0, y1, y2];

  return (
    <MotionConfig reducedMotion="user">
      <section ref={ref} className="hero" aria-labelledby="hero-title">
        <motion.div className="hero__photo" style={{ y: photoY, scale: photoS }}>
          <img src={img.src} srcSet={img.srcset} sizes="100vw" width={img.width} height={img.height} alt={img.alt} fetchPriority="high" />
        </motion.div>
        <div className="hero__veil" aria-hidden="true" />
        <div className="wrap hero__inner">
          <h1 className="display hero__title" id="hero-title">
            {words.map((w, i) => (
              <Fragment key={i}>
                <motion.span
                  className={w.india ? 'hero__word hero__india' : 'hero__word'}
                  data-m
                  initial={{ opacity: 0, y: '0.4em' }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.09, ease: [0.2, 0.7, 0.2, 1] }}
                >
                  {w.text}
                </motion.span>{' '}
              </Fragment>
            ))}
          </h1>
          <motion.p className="hero__sub" data-m initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.55 }}>
            {sub}
          </motion.p>
          <motion.div className="hero__actions" data-m initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.65 }}>
            <a className="s-btn s-btn--go" href={quote.href}>{quote.label}</a>
            <a className="s-btn s-btn--line hero__line" href={explore.href}>{explore.label}</a>
          </motion.div>
          <p className="hero__credit">
            {powered[0]}
            <a href="https://jobgen.ai/" target="_blank" rel="noopener noreferrer">JobGen.AI</a>
            {powered[1]}
          </p>
        </div>
        <svg className="hero__layers" viewBox="0 0 1440 140" preserveAspectRatio="none" aria-hidden="true">
          {LAYERS.map((l, i) => (
            <motion.path key={i} d={l.d} fill={l.fill} style={{ y: ys[i] }} />
          ))}
        </svg>
      </section>
    </MotionConfig>
  );
}
