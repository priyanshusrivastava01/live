import { Resend } from 'resend';

// Resend client is created lazily inside the function so the server never
// crashes at startup when RESEND_API_KEY is still a placeholder.

/**
 * Sends a lead notification email via Resend.
 * Called after the lead is saved to MongoDB.
 * All errors are caught internally — NEVER throws or rejects.
 *
 * @param {Object} lead - The saved Mongoose Lead document.
 */
export const sendLeadNotificationEmail = async (lead) => {
  const apiKey = process.env.RESEND_API_KEY;

  // ADMIN_EMAIL is the primary var; NOTIFICATION_TO_EMAIL is the legacy fallback
  const notifyEmail =
    process.env.ADMIN_EMAIL ||
    process.env.NOTIFICATION_TO_EMAIL ||
    'info@arunlive.com';

  if (!apiKey || apiKey === 'your_resend_api_key_here') {
    console.warn('[Email] RESEND_API_KEY is not configured. Skipping email notification.');
    return;
  }

  const submissionTime = new Date(lead.createdAt).toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'long',
    timeStyle: 'medium'
  });

  // Use proper model fields (company, revenue) or fall back gracefully
  const company = lead.company || 'N/A';
  const revenue = lead.revenue || 'N/A';
  const userMessage = lead.message || 'N/A';

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
    .divider { border: none; border-top: 1px solid #f0f0f0; margin: 4px 0 18px; }
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
      <hr class="divider" />
      <div class="field">
        <div class="label">Email Address</div>
        <div class="value"><a href="mailto:${lead.email}" style="color:#C9A227;">${lead.email}</a></div>
      </div>
      <hr class="divider" />
      <div class="field">
        <div class="label">Phone</div>
        <div class="value">${lead.phone || 'Not Provided'}</div>
      </div>
      <hr class="divider" />
      <div class="field">
        <div class="label">Company Name</div>
        <div class="value">${company}</div>
      </div>
      <hr class="divider" />
      <div class="field">
        <div class="label">Annual Revenue Range</div>
        <div class="value">${revenue}</div>
      </div>
      <hr class="divider" />
      <div class="field">
        <div class="label">Core Scaling Bottleneck / Message</div>
        <div class="message-box">${userMessage}</div>
      </div>
      <hr class="divider" />
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
      console.error('[Email] Email sending failed. Resend error:', error.message || JSON.stringify(error));
      return;
    }

    console.log('[Email] Email sent successfully. Resend ID:', data?.id);
  } catch (err) {
    console.error('[Email] Email sending failed. Exception:', err.message);
  }
};
