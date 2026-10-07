/**
 * Contact form email server.
 *
 * In development this runs alongside the Vite dev server and is reached through
 * the `/api` proxy defined in vite.config.ts. In production it serves the
 * built site from dist/ and handles the same API route.
 *
 * The Resend API key is only ever read from the environment and is never
 * exposed to the browser.
 */

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';

import dotenv from 'dotenv';
import express from 'express';
import { Resend } from 'resend';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// AI Studio writes secrets to .env.local; a plain .env is convenient elsewhere.
dotenv.config({ path: path.join(__dirname, '.env.local') });
dotenv.config();

const PORT = Number(process.env.PORT) || 3001;
const CONTACT_EMAIL =
  process.env.CONTACT_TO_EMAIL || 'Mzansiplannersconnect@gmail.com';
const RESEND_FROM = 'Mzansi Planners Connect <onboarding@resend.dev>';

const ALLOWED_AREAS = new Set([
  'Pretoria (City of Tshwane)',
  'Secunda (Govan Mbeki Municipality)',
  'eMbalenhle & Surrounding Areas',
  'Surrounding Area / Other',
]);

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const app = express();
app.disable('x-powered-by');
app.use(express.json({ limit: '64kb' }));

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

// Strips CR/LF so user input can never inject extra email headers.
const singleLine = (value) => String(value ?? '').replace(/[\r\n]+/g, ' ').trim();

// `?? ''` keeps an absent value empty rather than the string "undefined".
const text = (value, max) => singleLine(value).slice(0, max);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+?[0-9()\s.-]{7,}$/;

function validate(body) {
  const errors = {};

  const fullName = text(body.fullName ?? '', 120);
  if (!fullName) errors.fullName = 'Name is required.';

  const phoneRaw = text(body.phone ?? '', 40);
  const phoneDigits = phoneRaw.replace(/\D/g, '');
  if (!phoneRaw || phoneDigits.length < 9 || !PHONE_RE.test(phoneRaw)) {
    errors.phone = 'A valid contact number is required.';
  }

  const email = text(body.email ?? '', 254);
  if (email && !EMAIL_RE.test(email)) {
    errors.email = 'Please provide a valid email address.';
  }

  const area = text(body.area ?? '', 80);
  if (!ALLOWED_AREAS.has(area)) {
    errors.area = 'Please choose a listed area.';
  }

  const service = text(body.service ?? '', 160);
  if (!service) errors.service = 'Please choose a service.';

  const propertyAddress = singleLine(body.propertyAddress ?? '').slice(0, 300);
  const message = singleLine(String(body.message ?? '').replace(/\r\n/g, '\n'))
    .slice(0, 5000);

  if (!propertyAddress && !message) {
    errors.message = 'Please include your property details or a message.';
  }

  return {
    errors,
    values: { fullName, phone: phoneRaw, email, area, service, propertyAddress, message },
  };
}

/* -------------------------------------------------------------------------- */
/* Rate limiting (in-memory, per IP)                                          */
/* -------------------------------------------------------------------------- */

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);

  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }

  recent.push(now);
  hits.set(ip, recent);
  return false;
}

// Keep the map from growing without bound.
setInterval(() => {
  const now = Date.now();
  for (const [ip, stamps] of hits) {
    const recent = stamps.filter((t) => now - t < WINDOW_MS);
    if (recent.length) hits.set(ip, recent);
    else hits.delete(ip);
  }
}, WINDOW_MS).unref();

/* -------------------------------------------------------------------------- */
/* Contact endpoint                                                           */
/* -------------------------------------------------------------------------- */

app.post('/api/contact', async (req, res) => {
  const body = req.body || {};

  // Honeypot: real users never see this field, bots usually fill it in.
  if (singleLine(body.website ?? '')) {
    return res.status(200).json({ ok: true });
  }

  if (rateLimited(req.ip || 'unknown')) {
    return res.status(429).json({
      ok: false,
      error: 'Too many enquiries were sent. Please try again later.',
    });
  }

  const { errors, values } = validate(body);
  if (Object.keys(errors).length) {
    return res.status(400).json({
      ok: false,
      error: Object.values(errors)[0],
      errors,
    });
  }

  if (!resend) {
    console.error('[contact] RESEND_API_KEY is not set.');
    return res.status(503).json({
      ok: false,
      error: 'Enquiries are temporarily unavailable. Please email or WhatsApp us directly.',
    });
  }

  const { fullName, phone, email, area, service, propertyAddress, message } = values;

  const rows = [
    ['Name', fullName],
    ['Phone', phone],
    ['Email', email || 'Not provided'],
    ['Area / Municipality', area],
    ['Service Needed', service],
    ['Property Erf / Address', propertyAddress || 'Not provided'],
  ]
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 16px;border-bottom:1px solid #E2E7E3;color:#46524B;font-size:13px;width:180px;vertical-align:top;">${label}</td>
          <td style="padding:10px 16px;border-bottom:1px solid #E2E7E3;color:#111613;font-size:14px;font-weight:600;">${escapeHtml(value)}</td>
        </tr>`
    )
    .join('');

  const html = `
    <!doctype html>
    <html>
      <body style="margin:0;padding:24px;background:#F5F7F5;font-family:'Helvetica Neue',Arial,sans-serif;">
        <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #E2E7E3;border-radius:8px;overflow:hidden;">
          <div style="background:#14532D;padding:22px 24px;">
            <div style="color:#86EFAC;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;font-weight:700;">
              New Website Enquiry
            </div>
            <h1 style="margin:6px 0 0;color:#ffffff;font-size:20px;font-weight:700;">
              ${escapeHtml(service)}
            </h1>
          </div>
          <table style="width:100%;border-collapse:collapse;">
            ${rows}
          </table>
          <div style="padding:18px 24px;background:#F5F7F5;">
            <div style="color:#46524B;font-size:12px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase;margin-bottom:6px;">
              Message
            </div>
            <div style="color:#111613;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(message || 'No message provided.')}</div>
          </div>
        </div>
      </body>
    </html>`;

  const plain = [
    `New website enquiry: ${service}`,
    '',
    `Name: ${fullName}`,
    `Phone: ${phone}`,
    `Email: ${email || 'Not provided'}`,
    `Area / Municipality: ${area}`,
    `Service Needed: ${service}`,
    `Property Erf / Address: ${propertyAddress || 'Not provided'}`,
    '',
    'Message:',
    message || 'No message provided.',
  ].join('\n');

  try {
    const result = await resend.emails.send({
      from: RESEND_FROM,
      to: CONTACT_EMAIL,
      replyTo: email || undefined,
      subject: `Website Enquiry: ${service} (${area})`,
      html,
      text: plain,
    });

    if (result.error) {
      console.error('[contact] Resend error:', result.error);
      return res.status(502).json({
        ok: false,
        error: 'We could not send your enquiry. Please try again or contact us directly.',
      });
    }

    console.log('[contact] Enquiry sent:', result.data?.id);
    return res.status(200).json({ ok: true, id: result.data?.id });
  } catch (error) {
    console.error('[contact] Unexpected send failure:', error);
    return res.status(502).json({
      ok: false,
      error: 'We could not send your enquiry. Please try again or contact us directly.',
    });
  }
});

/* -------------------------------------------------------------------------- */
/* Static site (production only)                                              */
/* -------------------------------------------------------------------------- */

const distDir = path.join(__dirname, 'dist');

if (fs.existsSync(distDir)) {
  app.use(express.static(distDir));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api/')) return next();
    res.sendFile(path.join(distDir, 'index.html'));
  });
}

export default app;

if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`[server] listening on http://localhost:${PORT}`);
    if (!process.env.RESEND_API_KEY) {
      console.warn('[server] RESEND_API_KEY is missing — /api/contact will return 503.');
    }
  });
}
