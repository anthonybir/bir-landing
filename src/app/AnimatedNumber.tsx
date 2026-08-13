'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  /** Final value. Rendered on the server, so crawlers and no-JS see the truth. */
  to: number;
  /** Starting value for the count. */
  from?: number;
  decimals?: number;
  suffix?: string;
  durationMs?: number;
};

/** es-ES decimal separator. */
function format(value: number, decimals: number) {
  return value.toFixed(decimals).replace('.', ',');
}

/**
 * Counts up when the number scrolls into view.
 *
 * The final value is what renders server-side. On mount the component only
 * rewinds to the start value if the element is still below the fold, so an
 * already-visible number never flashes. Reduced motion never rewinds at all.
 */
export default function AnimatedNumber({
  to,
  from = 0,
  decimals = 0,
  suffix = '',
  durationMs = 1100,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    let armed = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!armed) {
          // First callback fires on observe. If the number is already on
          // screen, leave it settled and stop; there is nothing to reveal.
          if (entry.isIntersecting) {
            observer.disconnect();
            return;
          }
          armed = true;
          setValue(from);
          return;
        }
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / durationMs);
          const eased = 1 - Math.pow(1 - t, 3);
          setValue(from + (to - from) * eased);
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [from, to, durationMs]);

  return (
    <span ref={ref}>
      {format(value, decimals)}
      {suffix}
    </span>
  );
}
