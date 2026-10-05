import nodemailer from 'nodemailer';

const MAX_NAME_LENGTH = 120;
const MAX_ROLL_NUMBER_LENGTH = 50;
const MAX_COMPLAINT_LENGTH = 5000;

const escapeHtml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const normalizeField = (value) => typeof value === 'string' ? value.trim() : '';

const jsonResponse = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store'
  }
});

export async function onRequest({ request, env }) {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed.' }), {
      status: 405,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
        'Allow': 'POST'
      }
    });
  }

  const smtpUser = env.SMTP_USER;
  const smtpPass = env.SMTP_PASS;
  const complaintRecipient = env.COMPLAINT_EMAIL_TO;

  if (!smtpUser || !smtpPass || !complaintRecipient) {
    return jsonResponse({ error: 'Complaint email service is not configured.' }, 500);
  }

  let body;

  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: 'Invalid request body.' }, 400);
  }

  const name = normalizeField(body?.name);
  const rollNumber = normalizeField(body?.rollNumber);
  const complaint = normalizeField(body?.description);

  if (body?.website) {
    return jsonResponse({ success: true });
  }

  if (!name || !rollNumber || !complaint) {
    return jsonResponse({ error: 'Please complete every required field.' }, 400);
  }

  if (
    name.length > MAX_NAME_LENGTH ||
    rollNumber.length > MAX_ROLL_NUMBER_LENGTH ||
    complaint.length > MAX_COMPLAINT_LENGTH
  ) {
    return jsonResponse({ error: 'One or more fields are too long.' }, 400);
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
    auth: {
      user: smtpUser,
      pass: smtpPass
    }
  });

  try {
    await transporter.sendMail({
      from: `Dean Student Wellbeing Complaints <${smtpUser}>`,
      to: complaintRecipient,
      subject: 'New student complaint submission',
      text: `Name: ${name}\nRoll Number: ${rollNumber}\n\nComplaint:\n${complaint}`,
      html: `
        <h2>New student complaint submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Roll Number:</strong> ${escapeHtml(rollNumber)}</p>
        <p><strong>Complaint:</strong></p>
        <p>${escapeHtml(complaint).replaceAll('\n', '<br>')}</p>
      `
    });

    return jsonResponse({ success: true });
  } catch (error) {
    console.error('SMTP complaint submission failed:', error.message);
    return jsonResponse({ error: 'Unable to send the complaint right now.' }, 500);
  }
}
