'use client';

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  /** Stagger offset in ms, for siblings that reveal as a group. */
  delay?: number;
};

type Phase = 'idle' | 'armed' | 'in';

/**
 * Settles content into place when it scrolls into view.
 *
 * The server renders the content visible, so crawlers and no-JS see the page
 * at rest. On mount the wrapper only hides itself if it starts below the fold,
 * so nothing already on screen ever flashes. Reduced motion never arms.
 *
 * Same contract as AnimatedNumber: final state first, motion as a bonus.
 */
export default function Reveal({ children, className, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>('idle');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let armed = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!armed) {
          // First callback fires on observe. Already on screen: leave it
          // settled and stop. Below the fold: hide it and wait.
          if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight) {
            observer.disconnect();
            return;
          }
          armed = true;
          setPhase('armed');
          return;
        }
        if (!entry.isIntersecting) return;
        observer.disconnect();
        setPhase('in');
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = ['reveal', phase !== 'idle' && 'reveal-armed', phase === 'in' && 'reveal-in', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      ref={ref}
      className={classes}
      style={delay ? ({ '--reveal-delay': `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
