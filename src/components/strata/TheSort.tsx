// The sort: the signature scene of the Strata redesign. Excavated legacy waste
// is fed into a trommel and comes out as the four fractions Hind's own pages
// describe (soil-like fines, recyclables, RDF, inerts), each landing in its own
// pile, and the ground the heap stood on turns to reclaimed land.
//
// Wide, tall screens without reduced motion: the section pins and the scene
// follows the scroll through a spring (no dead stops); the stage being shown is
// marked in the list, which opens its text.
// Phones, short screens, reduced motion and no JavaScript: no pinning; the
// drawing shows the finished sort and every stage is written out in full.
import { useEffect, useRef, useState } from 'react';
import { useScroll, useSpring, useMotionValueEvent, MotionConfig } from 'motion/react';

export interface SortStage {
  name: string;
  how: string;
  where: string;
  /** 0–3 for the four fractions; absent for the opening and closing stages. */
  fraction?: 0 | 1 | 2 | 3;
}

interface Props {
  title: string;
  lead: string;
  stages: SortStage[];
  labels: [string, string, string, string];
  drawingLabel: string;
}

const COLORS = ['var(--f-fines)', 'var(--f-recyclables)', 'var(--f-rdf)', 'var(--f-inerts)'];
const BIN_X = [330, 450, 570, 690];
const DRUM = { x: 300, y: 150, w: 380, h: 112, cx: 490, cy: 206 };
const LAST = 5.999;

// A fixed scatter, so the server and the browser draw the same particles.
const rand = (i: number, k: number) => {
  const x = Math.sin(i * 127.1 + k * 311.7) * 43758.5453;
  return x - Math.floor(x);
};

interface Particle {
  f: number;
  sx: number;
  sy: number;
  dx: number;
  dy: number;
  ex: number;
  ey: number;
  a0: number;
  size: number;
}

// Each pile is a mound of rows (7, 6, 5, 4, 3, 1 from the floor up).
const ROWS = [7, 6, 5, 4, 3, 1];
const STEP = 13;
const SLOTS = ROWS.flatMap((w, r) => Array.from({ length: w }, (_, c) => ({ r, c, w })));
const N = SLOTS.length * 4;

const PARTICLES: Particle[] = Array.from({ length: N }, (_, i) => {
  const f = i % 4;
  // In the heap: under the mound's curve.
  const sx = 60 + rand(i, 1) * 180;
  const top = 520 - 170 * (1 - Math.pow((sx - 150) / 110, 2));
  const sy = top + 8 + rand(i, 2) * (512 - top - 8);
  // Inside the drum.
  const dx = DRUM.x + 30 + rand(i, 3) * (DRUM.w - 60);
  const dy = DRUM.cy - 30 + rand(i, 4) * 60;
  // On its pile.
  const slot = SLOTS[Math.floor(i / 4)];
  const ex = BIN_X[f] + (slot.c - (slot.w - 1) / 2) * STEP + (rand(i, 5) - 0.5) * 4;
  const ey = 512 - slot.r * STEP * 0.78 - rand(i, 6) * 3;
  return { f, sx, sy, dx, dy, ex, ey, a0: rand(i, 7) * Math.PI * 2, size: [5.5, 6, 6, 6.5][f] };
});

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const ease = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/** Where a particle is at a given point of the story (pos 0 … 6). */
function place(p: Particle, pos: number) {
  const feed = ease(clamp((pos - 0.15) / 0.8));
  const out = ease(clamp((pos - (p.f + 0.95)) / 0.75));
  if (out > 0) {
    // Falls out of the drum's underside above its bay, then settles.
    const x0 = lerp(p.dx, BIN_X[p.f], 0.7);
    const y0 = DRUM.cy + 46;
    return { x: lerp(x0, p.ex, out), y: lerp(y0, p.ey, out * out), r: out * (110 + p.a0 * 40) };
  }
  if (feed < 1) {
    // Up the feed conveyor into the drum's mouth.
    const mx = 285;
    const my = 230;
    const t = feed;
    const x = (1 - t) * (1 - t) * p.sx + 2 * (1 - t) * t * mx + t * t * p.dx;
    const y = (1 - t) * (1 - t) * p.sy + 2 * (1 - t) * t * my + t * t * p.dy;
    return { x, y, r: t * 90 };
  }
  // Tumbling inside the drum.
  const a = p.a0 + pos * 5;
  return { x: p.dx + Math.cos(a) * 10, y: p.dy + Math.sin(a) * 18, r: pos * 120 };
}

function shape(p: Particle) {
  if (p.f === 0) return <circle r={p.size} />;
  if (p.f === 1) return <rect x={-p.size} y={-p.size * 0.7} width={p.size * 2} height={p.size * 1.4} rx="1" />;
  if (p.f === 2) return <rect x={-p.size * 1.3} y={-1.8} width={p.size * 2.6} height="3.6" rx="1" />;
  return <polygon points={`0,${-p.size} ${p.size},${p.size * 0.6} ${-p.size},${p.size * 0.7}`} />;
}

function Drawing({ pos, label, labels, refs }: { pos: number; label: string; labels: string[]; refs?: React.RefObject<(SVGGElement | null)[]> }) {
  const heap = 1 - ease(clamp((pos - 0.1) / 0.9));
  const land = ease(clamp((pos - 5) / 0.6));
  return (
    <svg className="sort__svg" viewBox="0 120 800 445" role="img" aria-label={label}>
      <defs>
        <pattern id="sort-holes" width="22" height="22" patternUnits="userSpaceOnUse" patternTransform={`translate(${(pos * 44) % 22} 0)`} data-sort-holes>
          <circle cx="11" cy="11" r="4.2" fill="rgba(0,0,0,0.35)" />
        </pattern>
        <linearGradient id="sort-drum" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6d665c" />
          <stop offset="0.45" stopColor="#8b8378" />
          <stop offset="1" stopColor="#4c463f" />
        </linearGradient>
      </defs>

      {/* Ground: the heap's floor, turning to reclaimed land at the end */}
      <rect x="0" y="520" width="800" height="40" fill="#2a2119" />
      <rect x="0" y="520" width="800" height="40" fill="var(--field)" opacity={land} data-sort-land />
      <path d="M0 520 C140 512 260 524 400 518 S640 512 800 520" fill="none" stroke="#9cc46b" strokeWidth="3" opacity={land} data-sort-grass />

      {/* The heap */}
      <path d="M40 520 Q150 330 260 520 Z" fill="#3b322a" transform={`translate(150 520) scale(1 ${Math.max(0.04, heap)}) translate(-150 -520)`} data-sort-heap />

      {/* Feed conveyor */}
      <line x1="236" y1="470" x2="312" y2="214" stroke="#77706a" strokeWidth="8" strokeLinecap="round" />
      <line x1="252" y1="474" x2="252" y2="520" stroke="#5a544d" strokeWidth="5" />

      {/* Bays */}
      {BIN_X.map((x, i) => (
        <g key={i}>
          <path d={`M${x - 56} 520 L${x - 56} 486 M${x + 56} 520 L${x + 56} 486`} stroke="#6e675f" strokeWidth="3" />
          <rect x={x - 54} y="530" width="108" height="5" rx="2" fill={COLORS[i]} />
        </g>
      ))}

      {/* Trommel drum on its frame */}
      <g>
        <line x1={DRUM.x + 40} y1={DRUM.y + DRUM.h} x2={DRUM.x + 20} y2="520" stroke="#5a544d" strokeWidth="6" />
        <line x1={DRUM.x + DRUM.w - 40} y1={DRUM.y + DRUM.h} x2={DRUM.x + DRUM.w - 20} y2="520" stroke="#5a544d" strokeWidth="6" />
        <rect x={DRUM.x} y={DRUM.y} width={DRUM.w} height={DRUM.h} rx="56" fill="url(#sort-drum)" />
        <rect x={DRUM.x} y={DRUM.y} width={DRUM.w} height={DRUM.h} rx="56" fill="url(#sort-holes)" />
        {[0.18, 0.5, 0.82].map((t) => (
          <rect key={t} x={DRUM.x + DRUM.w * t - 5} y={DRUM.y - 4} width="10" height={DRUM.h + 8} rx="3" fill="#2f2a25" />
        ))}
      </g>

      {/* Particles */}
      <g>
        {PARTICLES.map((p, i) => {
          const at = place(p, pos);
          return (
            <g
              key={i}
              ref={refs ? (el) => { refs.current[i] = el; } : undefined}
              transform={`translate(${at.x.toFixed(1)} ${at.y.toFixed(1)}) rotate(${at.r.toFixed(0)})`}
              fill={COLORS[p.f]}
            >
              {shape(p)}
            </g>
          );
        })}
      </g>

      {/* Short labels under the bays (the full text is in the list) */}
      <g aria-hidden="true" className="sort__bay-labels">
        {labels.map((l, i) => (
          <text key={i} x={BIN_X[i]} y="554" textAnchor="middle">
            {l}
          </text>
        ))}
      </g>
    </svg>
  );
}

export default function TheSort({ title, lead, stages, labels, drawingLabel }: Props) {
  const root = useRef<HTMLElement>(null);
  const parts = useRef<(SVGGElement | null)[]>([]);
  const [pinned, setPinned] = useState(false);
  const [active, setActive] = useState(stages.length - 1);
  const { scrollYProgress } = useScroll({ target: root, offset: ['start 76px', 'end end'] });
  const smooth = useSpring(scrollYProgress, { stiffness: 140, damping: 32, mass: 0.35 });

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1000px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)');
    const set = () => setPinned(mq.matches);
    set();
    mq.addEventListener('change', set);
    return () => mq.removeEventListener('change', set);
  }, []);

  const draw = (v: number) => {
    const svg = root.current?.querySelector('svg');
    if (!svg) return;
    const pos = v * LAST;
    PARTICLES.forEach((p, i) => {
      const el = parts.current[i];
      if (!el) return;
      const at = place(p, pos);
      el.setAttribute('transform', `translate(${at.x.toFixed(1)} ${at.y.toFixed(1)}) rotate(${at.r.toFixed(0)})`);
    });
    const heap = 1 - ease(clamp((pos - 0.1) / 0.9));
    const land = ease(clamp((pos - 5) / 0.6));
    svg.querySelector('[data-sort-heap]')?.setAttribute('transform', `translate(150 520) scale(1 ${Math.max(0.04, heap)}) translate(-150 -520)`);
    svg.querySelector('[data-sort-land]')?.setAttribute('opacity', String(land));
    svg.querySelector('[data-sort-grass]')?.setAttribute('opacity', String(land));
    svg.querySelector('[data-sort-holes]')?.setAttribute('patternTransform', `translate(${(pos * 44) % 22} 0)`);
    root.current?.style.setProperty('--sort-p', v.toFixed(4));
    const idx = Math.min(stages.length - 1, Math.floor(pos));
    setActive((cur) => (cur === idx ? cur : idx));
  };

  useMotionValueEvent(smooth, 'change', (v) => {
    if (pinned) draw(v);
  });

  useEffect(() => {
    if (pinned) draw(smooth.get());
    else {
      draw(1);
      setActive(stages.length - 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pinned]);

  return (
    <MotionConfig reducedMotion="user">
      <section ref={root} className={`sort stratum tone-humus${pinned ? ' is-pinned' : ''}`} aria-labelledby="sort-title" style={{ height: pinned ? `${stages.length * 85}vh` : undefined }}>
        <div className="sort__stage">
          <div className="wrap sort__grid">
            <div className="sort__text">
              <h2 className="s-h2" id="sort-title">{title}</h2>
              <p className="s-lead sort__lead">{lead}</p>
              <ol className="sort__list">
                {stages.map((s, i) => (
                  <li key={s.name} className={`sort__item${i === active ? ' is-active' : ''}${i < active ? ' is-done' : ''}`} style={s.fraction !== undefined ? ({ '--fc': COLORS[s.fraction] } as React.CSSProperties) : undefined}>
                    <span className="sort__mark" aria-hidden="true" />
                    <h3 className="sort__name">{s.name}</h3>
                    <div className="sort__detail">
                      <div>
                        <p>{s.how}</p>
                        <p className="sort__where">{s.where}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="sort__figure">
              <Drawing pos={pinned ? 0 : LAST} label={drawingLabel} labels={labels} refs={parts} />
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
