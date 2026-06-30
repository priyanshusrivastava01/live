import { Resend } from 'resend';

// Resend client is created lazily inside the function so the server never
// crashes at startup when RESEND_API_KEY is still a placeholder.

/**
 * Parse the compound message string stored in MongoDB back into readable fields.
 * The message is formatted as:
 *   Company: <company>\nRevenue: <revenue>\n\nMessage: <message>
 * Returns { company, revenue, userMessage } or falls back gracefully.
 */
const parseMessage = (rawMessage = '') => {
  const companyMatch = rawMessage.match(/^Company:\s*(.+)/m);
  const revenueMatch = rawMessage.match(/^Revenue:\s*(.+)/m);
  const messageMatch = rawMessage.match(/^Message:\s*([\s\S]+)/m);

  return {
    company: companyMatch ? companyMatch[1].trim() : 'N/A',
    revenue: revenueMatch ? revenueMatch[1].trim() : 'N/A',
    userMessage: messageMatch ? messageMatch[1].trim() : rawMessage.trim()
  };
};

/**
 * Sends a lead notification email via Resend.
 * Called after the lead is saved to MongoDB.
 * All errors are caught internally — never throws.
 *
 * @param {Object} lead - The saved Mongoose Lead document.
 */
export const sendLeadNotificationEmail = async (lead) => {
  const apiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.NOTIFICATION_TO_EMAIL || 'info@arunlive.com';

  if (!apiKey || apiKey === 'your_resend_api_key_here') {
    console.warn('[Email] RESEND_API_KEY is not configured. Skipping email notification.');
    return;
  }

  const { company, revenue, userMessage } = parseMessage(lead.message);
  const submissionTime = new Date(lead.createdAt).toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'long',
    timeStyle: 'medium'
  });

  const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 32px auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
    .header { background: #0F0F10; padding: 28px 32px; }
    .header h1 { color: #C9A227; margin: 0; font-size: 20px; font-weight: 700; letter-spacing: 1px; }
    .header p { color: #999; margin: 6px 0 0; font-size: 12px; }
    .body { padding: 28px 32px; }
    .field { margin-bottom: 18px; }
    .label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #888; margin-bottom: 4px; }
    .value { font-size: 14px; color: #111; font-weight: 500; }
    .message-box { background: #fafafa; border-left: 3px solid #C9A227; padding: 12px 16px; border-radius: 4px; font-size: 13px; color: #333; line-height: 1.6; white-space: pre-wrap; }
    .footer { background: #f4f4f4; padding: 16px 32px; text-align: center; font-size: 11px; color: #aaa; }
    .badge { display: inline-block; background: #C9A227; color: #fff; font-size: 10px; font-weight: 700; padding: 3px 10px; border-radius: 20px; margin-bottom: 8px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <span class="badge">NEW LEAD</span>
      <h1>New Strategic Session Lead</h1>
      <p>A new strategic session application has been submitted.</p>
    </div>
    <div class="body">
      <div class="field">
        <div class="label">Full Name</div>
        <div class="value">${lead.fullName}</div>
      </div>
      <div class="field">
        <div class="label">Email Address</div>
        <div class="value"><a href="mailto:${lead.email}" style="color:#C9A227;">${lead.email}</a></div>
      </div>
      <div class="field">
        <div class="label">Phone</div>
        <div class="value">${lead.phone || 'Not Provided'}</div>
      </div>
      <div class="field">
        <div class="label">Company Name</div>
        <div class="value">${company}</div>
      </div>
      <div class="field">
        <div class="label">Annual Revenue Range</div>
        <div class="value">${revenue}</div>
      </div>
      <div class="field">
        <div class="label">Core Scaling Bottleneck</div>
        <div class="message-box">${userMessage}</div>
      </div>
      <div class="field">
        <div class="label">Submission Time (IST)</div>
        <div class="value">${submissionTime}</div>
      </div>
    </div>
    <div class="footer">
      This notification was generated automatically by the Arunn Guptaa advisory intake system.
    </div>
  </div>
</body>
</html>
`;

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: 'Arunn Guptaa Advisory <onboarding@resend.dev>',
      to: [notifyEmail],
      subject: 'New Strategic Session Lead',
      html: htmlBody
    });

    if (error) {
      console.error('[Email] Resend API returned an error:', error.message || error);
      return;
    }

    console.log('[Email] Lead notification sent successfully. Resend ID:', data?.id);
  } catch (err) {
    console.error('[Email] Failed to send lead notification email:', err.message);
  }
};
