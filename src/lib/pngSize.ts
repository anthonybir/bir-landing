import { openSync, readSync, closeSync } from 'node:fs';
import path from 'node:path';

export type Size = { width: number; height: number };

/**
 * Read intrinsic dimensions from a PNG in /public, given a public-rooted src
 * (e.g. "/blog/slug/img.png"). Reads only the IHDR header. Build-time only.
 */
export function pngSize(publicSrc: string): Size {
  const file = path.join(process.cwd(), 'public', publicSrc.replace(/^\//, ''));
  const buf = Buffer.alloc(24);
  const descriptor = openSync(file, 'r');
  try {
    if (readSync(descriptor, buf, 0, 24, 0) !== 24 || buf.toString('ascii', 12, 16) !== 'IHDR') {
      throw new Error(`Invalid PNG header: ${publicSrc}`);
    }
  } finally {
    closeSync(descriptor);
  }
  // PNG signature (8 bytes) + IHDR length (4) + "IHDR" (4) + width (4) + height (4)
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}
