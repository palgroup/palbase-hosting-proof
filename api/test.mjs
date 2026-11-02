// The machine's test (its test command: node --test /app/test.mjs): the
// server starts and answers JSON. A build whose test fails takes no traffic.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

test('the server answers JSON', async () => {
  const port = 18080;
  const server = spawn('node', [fileURLToPath(new URL('./server.mjs', import.meta.url))], { env: { ...process.env, PORT: String(port) } });
  try {
    let res;
    for (let i = 0; i < 50 && !res; i++) {
      res = await fetch(`http://127.0.0.1:${port}/`).catch(() => new Promise((r) => setTimeout(r, 100)));
    }
    assert.ok(res, 'the server never answered');
    assert.equal(res.headers.get('content-type'), 'application/json');
    assert.ok('commit' in (await res.json()));
  } finally {
    server.kill();
  }
});
