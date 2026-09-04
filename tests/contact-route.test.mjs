import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
import { webcrypto } from 'node:crypto';
import { createRequire } from 'node:module';
const loadModule = createRequire(import.meta.url);

function compile(file, imports, globals = {}) {
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const exports = {};
  vm.runInNewContext(code, { exports, require: name => imports[name] || loadModule(name), ...globals });
  return exports;
}
const contract = compile('src/lib/contact.ts', {});
const valid = { nombre: ' Test <name> ', email: ' test@example.com ', mensaje: 'Mensaje de prueba seguro.', submissionId: '123e4567-e89b-42d3-a456-426614174000' };
function harness(provider = async () => Response.json({ id: 'mock' })) {
  const calls = [];
  const route = compile('src/app/api/contact/route.ts', {
    '@/lib/contact': contract,
    'next/server': { NextResponse: { json: (body, init) => Response.json(body, init) } },
    'next/headers': { headers: async () => new Headers({ 'x-forwarded-for': 'test-ip' }) },
  }, {
    process: { env: { RESEND_API_KEY: 'mock-key', CONTACT_TO: 'recipient@example.com' } },
    fetch: async (...args) => { calls.push(args); return provider(...args); },
    AbortSignal, TextDecoder, Uint8Array, crypto: webcrypto, console: { error() {} },
  });
  return { calls, post: body => route.POST(new Request('http://localhost/api/contact', {
    method: 'POST', body: typeof body === 'string' ? body : JSON.stringify(body),
  })) };
}

test('normalizes fields, escapes HTML, sets reply address and stable retry key', async () => {
  const h = harness();
  for (let i = 0; i < 2; i++) assert.equal((await h.post(valid)).status, 200);
  const options = h.calls[0][1];
  const mail = JSON.parse(options.body);
  assert.equal(mail.reply_to, 'test@example.com');
  assert.match(mail.html, /Test &lt;name&gt;/);
  assert.equal(options.headers['Idempotency-Key'], h.calls[1][1].headers['Idempotency-Key']);
  assert.equal(options.headers['Idempotency-Key'], `abn-contact/${valid.submissionId}`);
  assert.ok(options.signal instanceof AbortSignal);
});

test('invalid JSON, wrong field types and invalid retry IDs never call mail provider', async () => {
  const h = harness();
  for (const body of ['{', null, { ...valid, organizacion: 5 }, { ...valid, submissionId: 'bad' }, { ...valid, email: 'bad' }]) {
    const response = await h.post(body);
    assert.equal(response.status, 400);
    assert.doesNotMatch((await response.json()).error, /Invalid|expected|received/);
  }
  assert.equal(h.calls.length, 0);
});

test('honeypot returns silent success and oversized input is bounded', async () => {
  const h = harness();
  assert.deepEqual(await (await h.post({ website: 'spam' })).json(), { ok: true });
  assert.equal((await h.post('x'.repeat(32769))).status, 413);
  assert.equal(h.calls.length, 0);
});

test('provider rejection and transport timeout return recoverable Spanish errors', async () => {
  for (const provider of [async () => new Response('private provider detail', { status: 503 }), async () => { throw new DOMException('private timeout', 'TimeoutError'); }]) {
    const response = await harness(provider).post(valid);
    assert.equal(response.status, 502);
    assert.deepEqual(await response.json(), { error: contract.CONTACT_RETRY_MESSAGE });
  }
});

test('per-instance rate limit blocks the sixth request and provides retry guidance', async () => {
  const h = harness();
  for (let i = 0; i < 5; i++) await h.post({ website: 'spam' });
  const response = await h.post(valid);
  assert.equal(response.status, 429);
  assert.equal(response.headers.get('Retry-After'), '900');
  assert.equal(h.calls.length, 0);
});
