import nodemailer from 'nodemailer';

const MAX_REQUEST_BYTES = 32768;
const normalizeField = (value) => typeof value === 'string' ? value.trim() : '';
const isEmailAddress = (value) => /^[^\s<>@]+@[^\s<>@]+\.[^\s<>@]+$/.test(value);
const escapeHtml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

export const sendJson = (response, status, body) => {
  response.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store'
  });
  response.end(JSON.stringify(body));
};

const readJsonBody = (request) => new Promise((resolve, reject) => {
  const chunks = [];
  let size = 0;
  request.on('data', (chunk) => {
    size += chunk.length;
    if (size > MAX_REQUEST_BYTES) {
      reject(Object.assign(new Error('Request too large.'), { status: 413 }));
      return;
    }
    chunks.push(chunk);
  });
  request.on('end', () => {
    if (size > MAX_REQUEST_BYTES) return;
    try {
      resolve(JSON.parse(Buffer.concat(chunks).toString('utf8')));
    } catch {
      reject(Object.assign(new Error('Invalid request body.'), { status: 400 }));
    }
  });
  request.on('error', reject);
  request.on('aborted', () => reject(new Error('Request aborted.')));
});

export const createComplaintHandler = (env, createTransport = nodemailer.createTransport) => async (request, response) => {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return sendJson(response, 405, { error: 'Method not allowed.' });
  }

  if (request.headers['content-type']?.split(';')[0].trim().toLowerCase() !== 'application/json') {
    return sendJson(response, 415, { error: 'Please submit JSON.' });
  }

  let body;
  try {
    body = await readJsonBody(request);
  } catch (error) {
    return sendJson(response, error.status || 400, { error: error.status ? error.message : 'Invalid request body.' });
  }

  if (body?.website) return sendJson(response, 200, { success: true });

  const name = normalizeField(body?.name);
  const rollNumber = normalizeField(body?.rollNumber);
  const complaint = normalizeField(body?.description);
  if (!name || !rollNumber || !complaint) {
    return sendJson(response, 400, { error: 'Please complete every required field.' });
  }
  if (name.length > 120 || rollNumber.length > 50 || complaint.length > 5000) {
    return sendJson(response, 400, { error: 'One or more fields are too long.' });
  }

  const host = normalizeField(env.SMTP_HOST);
  const port = Number(env.SMTP_PORT || 465);
  const secure = env.SMTP_SECURE !== 'false';
  const user = normalizeField(env.SMTP_USER);
  const pass = typeof env.SMTP_PASS === 'string' ? env.SMTP_PASS : '';
  const from = normalizeField(env.SMTP_FROM) || user;
  const to = normalizeField(env.COMPLAINT_EMAIL_TO);
  if (!host || !user || !pass || !isEmailAddress(from) || !isEmailAddress(to)
    || !Number.isInteger(port) || port < 1 || port > 65535
    || !['true', 'false'].includes(env.SMTP_SECURE || 'true')) {
    return sendJson(response, 503, { error: 'Complaint email service is not configured. Please contact the administrator.' });
  }

  try {
    const transporter = createTransport({
      host,
      port,
      secure,
      requireTLS: !secure,
      auth: { user, pass },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 20000
    });
    await transporter.sendMail({
      from: { name: 'Dean Student Wellbeing Complaints', address: from },
      to,
      subject: 'New student complaint submission',
      text: `Name: ${name}\nRoll Number: ${rollNumber}\n\nComplaint:\n${complaint}`,
      html: `<h2>New student complaint submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Roll Number:</strong> ${escapeHtml(rollNumber)}</p>
        <p><strong>Complaint:</strong></p>
        <p>${escapeHtml(complaint).replaceAll('\n', '<br>')}</p>`
    });
    return sendJson(response, 200, { success: true });
  } catch (error) {
    console.error('Complaint SMTP failure:', {
      code: error.code || 'UNKNOWN',
      responseCode: error.responseCode,
      command: error.command
    });
    return sendJson(response, 502, { error: 'Unable to submit the complaint right now. Please try again later.' });
  }
};
