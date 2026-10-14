import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';
import { createAppServer } from '../server/app.js';
import { createComplaintHandler } from '../server/complaints.js';

const env = {
  SMTP_HOST: 'smtp.example.com',
  SMTP_PORT: '587',
  SMTP_SECURE: 'false',
  SMTP_USER: 'sender@example.com',
  SMTP_PASS: 'test password with spaces',
  SMTP_FROM: 'wellbeing@example.com',
  COMPLAINT_EMAIL_TO: 'complaints@example.com'
};
const sentMessages = [];
const transportOptions = [];
let simulateFailure = false;
const handler = createComplaintHandler(env, (options) => {
  transportOptions.push(options);
  return {
    async sendMail(message) {
      if (simulateFailure) throw Object.assign(new Error('Test SMTP rejection'), { code: 'EAUTH' });
      sentMessages.push(message);
      return { accepted: [env.COMPLAINT_EMAIL_TO] };
    }
  };
});
const server = createAppServer({ complaintHandler: handler });
let baseUrl;

before(async () => {
  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', resolve);
  });
  baseUrl = `http://127.0.0.1:${server.address().port}`;
});
after(async () => {
  await new Promise((resolve) => server.close(resolve));
});

const submit = (body) => fetch(`${baseUrl}/api/complaints`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body)
});

test('serves the built SPA, deep links, and image assets', async () => {
  for (const route of ['/', '/events', '/support', '/emergency-contacts']) {
    const response = await fetch(`${baseUrl}${route}`);
    assert.equal(response.status, 200);
    assert.match(response.headers.get('content-type'), /text\/html/);
    assert.match(await response.text(), /id="root"/);
  }
  const photo = await fetch(`${baseUrl}/induction-programme.jpeg`);
  assert.equal(photo.status, 200);
  assert.equal(photo.headers.get('content-type'), 'image/jpeg');
});

test('health endpoint succeeds without requiring SMTP', async () => {
  const response = await fetch(`${baseUrl}/api/health`);
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { status: 'ok' });
});

test('does not serve secrets, server source, missing assets, or unknown APIs', async () => {
  for (const route of ['/.env', '/server/index.js', '/assets/missing.js', '/missing.jpeg', '/api/missing']) {
    const response = await fetch(`${baseUrl}${route}`);
    assert.equal(response.status, 404, route);
  }
});

test('rejects wrong methods, malformed JSON, oversized requests and missing fields before SMTP', async () => {
  assert.equal((await fetch(`${baseUrl}/api/complaints`)).status, 405);
  assert.equal((await submit({ name: 'Test' })).status, 400);
  const malformed = await fetch(`${baseUrl}/api/complaints`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{'
  });
  assert.equal(malformed.status, 400);
  assert.equal((await submit({ description: 'x'.repeat(40000) })).status, 413);
  assert.equal(sentMessages.length, 0);
});

test('honeypot submissions do not send email', async () => {
  const response = await submit({ website: 'spam.example' });
  assert.equal(response.status, 200);
  assert.equal(sentMessages.length, 0);
});

test('sends Unicode complaints only to the configured recipient with escaped HTML and STARTTLS', async () => {
  const description = '<script>alert(1)</script>\n' + 'समस्या '.repeat(500);
  const response = await submit({
    name: 'Student', rollNumber: 'TEST', description, to: 'attacker@example.com'
  });
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { success: true });
  assert.equal(sentMessages.length, 1);
  const message = sentMessages[0];
  assert.equal(message.to, env.COMPLAINT_EMAIL_TO);
  assert.equal(message.from.address, env.SMTP_FROM);
  assert.ok(message.text.includes(description.trim()));
  assert.ok(message.html.includes('&lt;script&gt;'));
  assert.ok(!message.html.includes('<script>'));
  assert.equal(transportOptions[0].secure, false);
  assert.equal(transportOptions[0].requireTLS, true);
  assert.equal(transportOptions[0].auth.pass, env.SMTP_PASS);
});

test('SMTP rejection produces a safe error and never reports success', async () => {
  simulateFailure = true;
  try {
    const response = await submit({ name: 'Test', rollNumber: 'TEST', description: 'Test complaint' });
    assert.equal(response.status, 502);
    const body = await response.json();
    assert.equal(body.success, undefined);
    assert.ok(!JSON.stringify(body).includes(env.SMTP_PASS));
    assert.equal(sentMessages.length, 1);
  } finally {
    simulateFailure = false;
  }
});
