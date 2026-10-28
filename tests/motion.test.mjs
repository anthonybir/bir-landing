import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const css = fs.readFileSync('src/app/globals.css', 'utf8');
const root = css.match(/:root\s*\{([\s\S]*?)\n\}/)[1];
const tokens = Object.fromEntries([...root.matchAll(/--([\w-]+):\s*([^;]+);/g)].map(([, name, value]) => [name, value.trim()]));
const reducedStart = css.indexOf('@media (prefers-reduced-motion: reduce)');
const reduced = css.slice(reducedStart);
const motionCss = css.slice(0, reducedStart);

function rule(selector) {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = css.match(new RegExp(`(?:^|\\n)${escaped}\\s*\\{([^}]*)\\}`));
  assert.ok(match, `${selector} rule exists`);
  return match[1];
}

test('motion tokens match the design kit', () => {
  assert.equal(tokens['ease-standard'], 'cubic-bezier(0.2, 0.6, 0.2, 1)');
  assert.equal(tokens['ease-out'], 'cubic-bezier(0, 0.6, 0.2, 1)');
  assert.equal(tokens['duration-fast'], '140ms');
  assert.equal(tokens['duration-base'], '220ms');
  assert.equal(tokens['duration-reveal'], '700ms');
});

test('transitions name their properties instead of animating all', () => {
  const values = [...css.matchAll(/(?:^|[\s;{])(?:--)?transition[\w-]*:\s*([^;]+);/g)].map(([, value]) => value);
  assert.ok(values.length > 0);
  for (const value of values) assert.doesNotMatch(value, /\ball\b/, value);
});

test('timings come from tokens, not raw values', () => {
  const declarations = [...motionCss.matchAll(/(?:^|[\s;{])((?:transition|animation)(?:-duration|-delay)?):\s*([^;]+);/g)];
  assert.ok(declarations.length > 0);
  for (const [, property, value] of declarations) {
    assert.doesNotMatch(value, /\d(?:ms|s)\b/, `${property}: ${value}`);
  }
});

test('soft reveal moves content and never hides it', () => {
  for (const selector of ['.reveal', '.reveal-pending']) {
    const body = rule(selector);
    assert.doesNotMatch(body, /opacity|visibility|clip/, `${selector} must not hide content`);
  }
  assert.match(rule('.reveal-pending'), /translateY\(10px\)/);
  const component = fs.readFileSync('src/app/RevealOnScroll.tsx', 'utf8');
  assert.match(component, /prefers-reduced-motion: no-preference/, 'reveal is skipped under reduced motion');
});

test('reduced motion also stops page transitions', () => {
  for (const pseudo of ['::view-transition-group(*)', '::view-transition-old(*)', '::view-transition-new(*)']) {
    assert.ok(reduced.includes(pseudo), `${pseudo} is covered`);
  }
  assert.match(reduced, /animation:\s*none\s*!important/);
});

test('only the home monogram animates; nav and footer marks stay still', () => {
  assert.match(css, /\.profile-monogram path\s*\{[^}]*animation:/);
  assert.doesNotMatch(css, /\.(nav-brand|footer-lockup)[^{]*\{[^}]*animation/);
});
