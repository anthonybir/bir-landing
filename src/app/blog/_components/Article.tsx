import Image from 'next/image';
import Link from 'next/link';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeUnwrapImages from 'rehype-unwrap-images';
import { pngSize } from '@/lib/pngSize';

function ArticleImage({ src, alt }: { src?: string | Blob; alt?: string }) {
  if (typeof src !== 'string') return null;
  const { width, height } = pngSize(src);
  return (
    <figure className="article-figure">
      <div className="card overflow-hidden p-2">
        <Image
          src={src}
          alt={alt ?? ''}
          width={width}
          height={height}
          className="h-auto w-full rounded-[calc(var(--radius-lg)-0.25rem)]"
          sizes="(min-width: 768px) 720px, 100vw"
        />
      </div>
      {alt ? <figcaption>{alt}</figcaption> : null}
    </figure>
  );
}

function ArticleLink({ href, children }: { href?: string; children?: React.ReactNode }) {
  if (href && href.startsWith('/')) {
    return (
      <Link href={href} className="link-quiet">
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className="link-quiet" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function Article({ body }: { body: string }) {
  return (
    <div className="article">
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeUnwrapImages]}
        components={{ img: ArticleImage, a: ArticleLink }}
      >
        {body}
      </Markdown>
    </div>
  );
}
