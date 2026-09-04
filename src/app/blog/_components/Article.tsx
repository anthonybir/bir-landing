import ProductFigure from '../../ProductFigure';
import Link from 'next/link';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeUnwrapImages from 'rehype-unwrap-images';
import { pngSize } from '@/lib/pngSize';

function ArticleImage({ src, alt }: { src?: string | Blob; alt?: string }) {
  if (typeof src !== 'string') return null;
  const { width, height } = pngSize(src);
  return <ProductFigure src={src} alt={alt ?? 'Imagen del artículo'} width={width} height={height} sizes="(min-width: 800px) 736px, 100vw" />;
}

function ArticleLink({ href, children }: { href?: string; children?: React.ReactNode }) {
  if (href && href.startsWith('/') && !href.startsWith('//')) {
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
