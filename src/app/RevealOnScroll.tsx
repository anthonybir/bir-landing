'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/** Top-level page blocks. Bands reveal their content so the color field never shifts. */
const TARGETS = 'main > :not(script, .teal-band), main > .teal-band > *';

let lastHistoryTraversal = -Infinity;
if (typeof window !== 'undefined') {
  window.addEventListener('popstate', () => { lastHistoryTraversal = performance.now(); });
}

/**
 * Blocks below the fold settle 10px into place as they scroll in. Content is
 * never hidden: without JavaScript, or with reduced motion, nothing moves.
 */
export default function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    // A hidden or prerendered page has no fold to measure against.
    if (!window.innerHeight || !window.matchMedia('(prefers-reduced-motion: no-preference)').matches) return;

    // Back/Forward returns to a page already seen, and scroll is restored after this runs.
    if (performance.now() - lastHistoryTraversal < 1000) return;

    const pending = [...document.querySelectorAll<HTMLElement>(TARGETS)]
      .filter((el) => el.getBoundingClientRect().top > window.innerHeight);
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.remove('reveal-pending');
        observer.unobserve(entry.target);
      }
    }, { rootMargin: '0px 0px -10% 0px' });

    for (const el of pending) {
      el.classList.add('reveal', 'reveal-pending');
      observer.observe(el);
    }
    return () => {
      observer.disconnect();
      for (const el of pending) el.classList.remove('reveal', 'reveal-pending');
    };
  }, [pathname]);

  return null;
}
