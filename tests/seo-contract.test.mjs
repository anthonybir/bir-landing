import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
import { createRequire } from 'node:module';

const loadModule = createRequire(import.meta.url);
function compile(file, imports = {}) {
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX },
  }).outputText;
  const exports = {};
  vm.runInNewContext(code, { exports, require: name => imports[name] || loadModule(name), URL });
  return exports;
}
const site = compile('src/app/site-information.ts');
const metadata = compile('src/app/page-metadata.ts', { './site-information': site });

test('canonical identity uses the production www host, including entity and media URLs', () => {
  for (const path of ['/', '/servicios', '/blog/example', '/opengraph-image']) {
    const url = new URL(site.absoluteUrl(path));
    assert.equal(url.origin, 'https://www.bir.com.py');
    assert.equal(url.pathname, path);
  }
  assert.equal(site.ABN_ORGANIZATION.founder['@id'], site.PERSON_ID);
  assert.notEqual(site.ABN_ORGANIZATION['@id'], site.PERSON_ID);
  assert.equal(site.ABN_ORGANIZATION.url, site.absoluteUrl('/nosotros'));
});

test('metadata keeps one brand suffix and agrees across canonical and social previews', () => {
  for (const [brand, expected] of [[undefined, 'Anthony Bir'], ['ABN', 'ABN']]) {
    const result = metadata.pageMetadata('Sistemas de gestión', 'Descripción', '/servicios', brand);
    assert.equal(result.title.absolute, `Sistemas de gestión | ${expected}`);
    assert.equal(result.openGraph.title, result.title.absolute);
    assert.equal(result.twitter.title, result.title.absolute);
    assert.equal(result.alternates.canonical, 'https://www.bir.com.py/servicios');
    assert.equal(result.openGraph.url, result.alternates.canonical);
  }
});

test('sitemap covers all public routes and posts once on the canonical host', () => {
  const posts = [{ slug: 'example', dateISO: '2026-06-10' }];
  const sitemap = compile('src/app/sitemap.ts', {
    './site-information': site,
    '@/blog/posts': { getAllPosts: () => posts },
  }).default();
  const urls = Array.from(sitemap, entry => entry.url);
  assert.equal(new Set(urls).size, urls.length);
  for (const path of Object.values(site.PUBLIC_PAGES)) assert.ok(urls.includes(site.absoluteUrl(path)));
  assert.ok(urls.includes('https://www.bir.com.py/blog/example'));
  assert.ok(urls.every(url => new URL(url).origin === 'https://www.bir.com.py'));
  assert.equal(sitemap.at(-1).lastModified.toISOString(), '2026-06-10T00:00:00.000Z');
  assert.ok(sitemap.filter(entry => !entry.url.includes('/blog/')).every(entry => !entry.lastModified));
});

test('robots advertises the same canonical sitemap without blocking public pages', () => {
  const result = compile('src/app/robots.ts', { './site-information': site }).default();
  assert.equal(result.sitemap, 'https://www.bir.com.py/sitemap.xml');
  assert.equal(result.rules.userAgent, '*');
  assert.equal(result.rules.allow, '/');
});

test('structured data cannot close its script tag and preserves the original data', () => {
  const JsonLd = compile('src/app/JsonLd.tsx').default;
  const data = { headline: '</script><script>alert(1)</script>', name: 'Anthony Bir' };
  const element = JsonLd({ data });
  const html = element.props.dangerouslySetInnerHTML.__html;
  assert.equal(element.props.type, 'application/ld+json');
  assert.ok(!html.includes('<'));
  assert.deepEqual(JSON.parse(html), data);
});
