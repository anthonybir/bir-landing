import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  priority?: boolean;
  sizes?: string;
}

/** Preserve the complete source image; the native link supports full-size inspection. */
export default function ProductFigure({ src, alt, width, height, caption, priority = false, sizes = '(min-width: 1440px) 1200px, 100vw' }: Props) {
  return (
    <figure className={`product-figure${height > width ? ' product-figure-portrait' : ''}`}>
      <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`Ampliar imagen: ${alt} (se abre en otra pestaña)`} className="product-figure-link">
        <Image src={src} alt={alt} width={width} height={height} priority={priority} sizes={sizes} className="product-figure-image" />
      </a>
      <figcaption>
        <span>{caption ?? alt}</span>
        <a href={src} target="_blank" rel="noopener noreferrer" className="link-quiet" aria-label={`Ampliar imagen: ${alt} (se abre en otra pestaña)`}>Ampliar imagen</a>
      </figcaption>
    </figure>
  );
}
