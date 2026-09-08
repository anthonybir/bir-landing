/** Vector redraw of the founder-supplied AB identity. */
export default function BrandMark({ className, width = 200, height = 160 }: { className?: string; width?: number; height?: number }) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 400 310" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M0 300 117 80 121 89 12 300Z" />
      <path d="M130 50 156 0 290 300 247 300Z" />
      <path d="M87 199 162 199 220 307 195 307 159 220 83 205Z" />
      <path d="M201 32H280C381 32 399 123 323 156 423 181 423 300 304 300H247L245 295H292C369 295 373 161 290 161H253L250 156H274C342 156 340 37 269 37H203Z" />
    </svg>
  );
}
