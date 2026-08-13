/**
 * The ABN progression grid, assembled on load.
 *
 * Six tiles rise from near-invisible to solid teal. The headline states the
 * problem, this states the fix: order arriving where there was none. Geometry
 * is taken verbatim from /logos/abn-grid-progression.svg, inlined so each tile
 * can carry its own settle delay.
 *
 * Decorative. Hidden from assistive technology.
 */
const tiles = [
  { x: 10, y: 10, o: 0.08 },
  { x: 72, y: 10, o: 0.18 },
  { x: 134, y: 10, o: 0.35 },
  { x: 10, y: 72, o: 0.25 },
  { x: 72, y: 72, o: 0.5 },
  { x: 134, y: 72, o: 0.75 },
] as const;

export default function HeroGrid({ className }: { className?: string }) {
  return (
    <svg
      viewBox="10 10 176 114"
      className={`hero-grid h-auto w-full ${className ?? ''}`}
      aria-hidden="true"
      focusable="false"
    >
      {tiles.map((t, i) => (
        <rect
          key={`${t.x}-${t.y}`}
          x={t.x}
          y={t.y}
          width={52}
          height={52}
          rx={4}
          fill="var(--accent)"
          style={
            {
              '--tile-o': t.o,
              '--tile-i': i,
            } as React.CSSProperties
          }
        />
      ))}
    </svg>
  );
}
