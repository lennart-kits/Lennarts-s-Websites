import "server-only";

type SendEmailInput = {
  subject: string;
  text: string;
  replyTo?: string;
};

type SendResult =
  | { ok: true }
  | { ok: false; reason: "not-configured" | "provider-error" };

/**
 * Minimal transactional email delivery via the Resend HTTP API.
 *
 * Implemented with fetch rather than an SDK: one endpoint is used, and the
 * dependency surface stays small. Swapping providers means changing this file
 * only — nothing else imports the provider.
 */
export async function sendContactEmail({
  subject,
  text,
  replyTo,
}: SendEmailInput): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;
  const from = process.env.RESEND_FROM;

  if (!apiKey || !to || !from) {
    return { ok: false, reason: "not-configured" };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        text,
        ...(replyTo ? { reply_to: replyTo } : {}),
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      // Log server-side only; the response body may contain provider detail
      // that must not reach the browser.
      console.error(
        "[contact] Email provider rejected the request",
        response.status
      );
      return { ok: false, reason: "provider-error" };
    }

    return { ok: true };
  } catch (error) {
    console.error("[contact] Email delivery failed", error);
    return { ok: false, reason: "provider-error" };
  }
}
