/**
 * AVORA Consultation Email Service
 * Handles server-side validation, anti-spam honeypot, rate limiting,
 * email formatting, and secure delivery to kshaurya0708@gmail.com with Reply-To set to the customer.
 */

// In-memory rate limiting (max 5 requests per IP per hour)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 5;

// Email regex validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Basic HTML/Text sanitizer to prevent injection
 */
function sanitize(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .trim();
}

/**
 * Format project details into clean key-value text/html
 */
function formatProjectDetails(serviceKey, serviceData) {
  if (!serviceData || typeof serviceData !== 'object') return { text: 'No additional details provided.', html: '<p>No additional details provided.</p>' };

  const lines = [];
  const htmlLines = [];

  for (const [key, value] of Object.entries(serviceData)) {
    if (value === undefined || value === null || value === '') continue;

    const formattedKey = key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase())
      .trim();

    let formattedValue = value;
    if (Array.isArray(value)) {
      if (value.length === 0) continue;
      formattedValue = value.join(', ');
    } else if (typeof value === 'object') {
      formattedValue = JSON.stringify(value);
    }

    lines.push(`• ${formattedKey}: ${formattedValue}`);
    htmlLines.push(`<tr><td style="padding:6px 12px;font-weight:600;color:#18181B;border-bottom:1px solid #E4E4E7;width:35%;">${sanitize(formattedKey)}</td><td style="padding:6px 12px;color:#3F3F46;border-bottom:1px solid #E4E4E7;">${sanitize(String(formattedValue))}</td></tr>`);
  }

  return {
    text: lines.join('\n') || 'No project specific answers recorded.',
    html: htmlLines.length > 0
      ? `<table style="width:100%;border-collapse:collapse;font-size:13px;line-height:1.5;"><tbody>${htmlLines.join('')}</tbody></table>`
      : '<p>No project specific answers recorded.</p>',
  };
}

/**
 * Main email dispatcher function
 */
export async function handleConsultationRequest(payload, clientIp = '127.0.0.1') {
  // 1. Spam protection: Honeypot check
  if (payload._hp && String(payload._hp).trim().length > 0) {
    // Silently reject bots without revealing honeypot detection
    return { success: true, message: 'Consultation received' };
  }

  // 2. Rate limiting check
  const now = Date.now();
  const clientRecords = rateLimitMap.get(clientIp) || [];
  const recentRecords = clientRecords.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW);

  if (recentRecords.length >= MAX_REQUESTS_PER_WINDOW) {
    return {
      success: false,
      status: 429,
      error: 'Too many requests. Please wait a while before submitting another consultation inquiry.',
    };
  }

  recentRecords.push(now);
  rateLimitMap.set(clientIp, recentRecords);

  // 3. Server-side validation
  const name = sanitize(payload.name);
  const email = (payload.email || '').trim().toLowerCase();
  const phone = (payload.phone || '').trim();
  const company = sanitize(payload.company || payload.brandOrCompany || 'N/A');
  const serviceName = sanitize(payload.serviceName || payload.service || 'Creative Consultation');
  const serviceKey = sanitize(payload.serviceKey || 'general');
  const serviceData = payload.serviceData || {};
  const meetingPreference = sanitize(payload.meetingPreference || 'Flexible');
  const preferredDate = sanitize(payload.preferredDate || 'Flexible');
  const preferredTime = sanitize(payload.preferredTime || 'Flexible');
  const timezone = sanitize(payload.timezone || 'UTC');
  const references = sanitize(payload.references || payload.referenceLinks || 'None provided');
  const budget = sanitize(payload.budget || 'To be scoped');
  const deadline = sanitize(payload.deadline || 'Flexible');

  if (!name || name.length < 2) {
    return { success: false, status: 400, error: 'Full name is required.' };
  }

  if (!email || !EMAIL_REGEX.test(email)) {
    return { success: false, status: 400, error: 'A valid email address is required.' };
  }

  if (!phone || phone.replace(/\D/g, '').length < 6) {
    return { success: false, status: 400, error: 'A valid phone number is required.' };
  }

  // 4. Construct email contents
  const projectDetailsFormatted = formatProjectDetails(serviceKey, serviceData);

  const subject = `New AVORA Consultation — ${serviceName}`;

  const textBody = `
AVORA — NEW CONSULTATION REQUEST
=====================================================
SERVICE: ${serviceName}

CUSTOMER DETAILS
-----------------------------------------------------
Name:            ${name}
Email:           ${email}
Phone:           ${phone}
Company / Brand: ${company}

PROJECT DETAILS
-----------------------------------------------------
Budget:          ${budget}
Deadline:        ${deadline}
References:      ${references}

${projectDetailsFormatted.text}

MEETING PREFERENCE
-----------------------------------------------------
Mode:            ${meetingPreference}
Preferred Date:  ${preferredDate}
Preferred Time:  ${preferredTime}
Timezone:        ${timezone}
=====================================================
Submission Timestamp: ${new Date().toISOString()}
Reply-To: ${email}
`;

  const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${sanitize(subject)}</title>
</head>
<body style="margin:0;padding:24px;background-color:#FAF9F6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#18181B;">
  <div style="max-width:640px;margin:0 auto;background:#FFFFFF;border:1px solid #E4E4E7;border-radius:16px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.04);">
    <!-- Header -->
    <div style="padding:24px 32px;background:#18181B;color:#FAF9F6;">
      <h1 style="margin:0;font-size:20px;letter-spacing:1px;font-family:serif;">AVORA STUDIO</h1>
      <p style="margin:4px 0 0 0;font-size:12px;color:#A1A1AA;font-family:monospace;text-transform:uppercase;">New Consultation Request</p>
    </div>

    <!-- Service Badge -->
    <div style="padding:20px 32px 10px 32px;border-bottom:1px solid #F4F4F5;">
      <span style="display:inline-block;padding:4px 12px;background:#FAF5FF;border:1px solid #E9D5FF;border-radius:20px;font-size:12px;font-family:monospace;font-weight:600;color:#9333EA;text-transform:uppercase;">
        DISCIPLINE: ${sanitize(serviceName)}
      </span>
    </div>

    <!-- Customer Coordinates -->
    <div style="padding:20px 32px;border-bottom:1px solid #F4F4F5;">
      <h3 style="margin:0 0 12px 0;font-size:13px;font-family:monospace;color:#71717A;text-transform:uppercase;letter-spacing:1px;">Customer Coordinates</h3>
      <table style="width:100%;font-size:14px;border-collapse:collapse;">
        <tr>
          <td style="padding:6px 0;color:#71717A;width:30%;">Full Name:</td>
          <td style="padding:6px 0;font-weight:600;color:#18181B;">${sanitize(name)}</td>
        </tr>
        <tr>
          <td style="padding:6px 0;color:#71717A;">Email Address:</td>
          <td style="padding:6px 0;"><a href="mailto:${sanitize(email)}" style="color:#9333EA;text-decoration:none;font-weight:600;">${sanitize(email)}</a></td>
        </tr>
        <tr>
          <td style="padding:6px 0;color:#71717A;">Phone Number:</td>
          <td style="padding:6px 0;color:#18181B;font-weight:600;">${sanitize(phone)}</td>
        </tr>
        <tr>
          <td style="padding:6px 0;color:#71717A;">Company / Brand:</td>
          <td style="padding:6px 0;color:#18181B;">${sanitize(company)}</td>
        </tr>
      </table>
    </div>

    <!-- Project Specifics -->
    <div style="padding:20px 32px;border-bottom:1px solid #F4F4F5;">
      <h3 style="margin:0 0 12px 0;font-size:13px;font-family:monospace;color:#71717A;text-transform:uppercase;letter-spacing:1px;">Project Specifications</h3>
      ${projectDetailsFormatted.html}
    </div>

    <!-- Logistics & Timeline -->
    <div style="padding:20px 32px;border-bottom:1px solid #F4F4F5;">
      <h3 style="margin:0 0 12px 0;font-size:13px;font-family:monospace;color:#71717A;text-transform:uppercase;letter-spacing:1px;">Logistics & Preferences</h3>
      <table style="width:100%;font-size:13px;border-collapse:collapse;">
        <tr><td style="padding:4px 0;color:#71717A;width:35%;">Budget Allocation:</td><td style="padding:4px 0;font-weight:600;">${sanitize(budget)}</td></tr>
        <tr><td style="padding:4px 0;color:#71717A;">Target Deadline:</td><td style="padding:4px 0;font-weight:600;">${sanitize(deadline)}</td></tr>
        <tr><td style="padding:4px 0;color:#71717A;">Meeting Preference:</td><td style="padding:4px 0;font-weight:600;">${sanitize(meetingPreference)}</td></tr>
        <tr><td style="padding:4px 0;color:#71717A;">Preferred Date & Time:</td><td style="padding:4px 0;">${sanitize(preferredDate)} (${sanitize(preferredTime)}) — ${sanitize(timezone)}</td></tr>
        <tr><td style="padding:4px 0;color:#71717A;">Reference Links:</td><td style="padding:4px 0;"><a href="${sanitize(references)}" style="color:#2563EB;word-break:break-all;">${sanitize(references)}</a></td></tr>
      </table>
    </div>

    <!-- Footer Note -->
    <div style="padding:20px 32px;background:#FAFAFA;color:#71717A;font-size:11px;font-family:monospace;">
      <p style="margin:0;">Reply-To is configured to <strong>${sanitize(email)}</strong>. Hit Reply to respond directly to the customer.</p>
    </div>
  </div>
</body>
</html>
`;

  // 5. Email Dispatcher
  const receiverEmail = process.env.CONSULTATION_RECEIVER || 'kshaurya0708@gmail.com';
  const apiKey = process.env.RESEND_API_KEY || process.env.EMAIL_API_KEY;
  const fromEmail = process.env.EMAIL_FROM || 'onboarding@resend.dev';

  // If an API key is configured, send via Resend API
  if (apiKey) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: `AVORA Inquiries <${fromEmail}>`,
          to: [receiverEmail],
          reply_to: email,
          subject: subject,
          text: textBody,
          html: htmlBody,
        }),
      });

      const resData = await res.json();
      if (!res.ok) {
        console.error('[AVORA Email Service Error]:', resData);
        return {
          success: false,
          status: 500,
          error: 'Something went wrong while sending your request. Please try again.',
        };
      }

      return {
        success: true,
        message: 'Consultation request successfully transmitted.',
        id: resData.id,
      };
    } catch (err) {
      console.error('[AVORA Email Network Error]:', err);
      return {
        success: false,
        status: 500,
        error: 'Something went wrong while sending your request. Please try again.',
      };
    }
  }

  // Fallback mode for development / testing without active API keys:
  // Securely log to server console and return success
  console.log('\n======================================================');
  console.log(`[AVORA DEV EMAIL DISPATCHED] -> To: ${receiverEmail} | Reply-To: ${email}`);
  console.log(`Subject: ${subject}`);
  console.log('------------------------------------------------------');
  console.log(textBody);
  console.log('======================================================\n');

  return {
    success: true,
    simulated: true,
    message: 'Consultation request successfully received.',
  };
}
