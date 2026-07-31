"use server";

import { headers } from "next/headers";

import { sendContactEmail } from "@/lib/email";
import { checkRateLimit } from "@/lib/rate-limit";
import { siteConfig } from "@/lib/site";
import {
  contactSchema,
  intentLabels,
  type ContactFormState,
  type ContactInput,
} from "@/lib/validation/contact";

/** Strips control characters that could be used for header or log injection. */
function sanitize(value: string): string {
  // Drops C0/C1 control characters (header and log injection vectors) while
  // preserving the newlines and tabs that belong in a message body.
  return Array.from(value)
    .filter((character) => {
      const code = character.codePointAt(0) ?? 0;
      if (code === 10 || code === 13 || code === 9) return true;
      return code > 31 && code !== 127 && !(code >= 128 && code <= 159);
    })
    .join("")
    .trim();
}

async function clientKey(): Promise<string> {
  const headerList = await headers();
  const forwarded = headerList.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() ?? headerList.get("x-real-ip");
  return ip && ip.length > 0 ? ip : "unknown";
}

export async function submitContactForm(
  _previousState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    name: String(formData.get("name") ?? ""),
    company: String(formData.get("company") ?? ""),
    email: String(formData.get("email") ?? ""),
    intent: String(formData.get("intent") ?? "project"),
    message: String(formData.get("message") ?? ""),
    consent: String(formData.get("consent") ?? ""),
    website: String(formData.get("website") ?? ""),
  };

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: ContactFormState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0] as keyof ContactInput | undefined;
      if (field && !fieldErrors[field]) {
        fieldErrors[field] = issue.message;
      }
    }

    return {
      status: "error",
      message: "Please correct the highlighted fields and try again.",
      fieldErrors,
    };
  }

  // Honeypot filled in — a bot. Report success without delivering anything.
  if (parsed.data.website) {
    return {
      status: "success",
      message: "Thank you — your message has been received.",
      fieldErrors: {},
    };
  }

  const { allowed, retryAfterSeconds } = checkRateLimit(await clientKey());
  if (!allowed) {
    const minutes = Math.max(1, Math.ceil(retryAfterSeconds / 60));
    return {
      status: "error",
      message: `Too many submissions from this connection. Please try again in ${minutes} minute${minutes === 1 ? "" : "s"}, or email ${siteConfig.email} directly.`,
      fieldErrors: {},
    };
  }

  const data = parsed.data;
  const subject = `[Website enquiry] ${intentLabels[data.intent]} — ${sanitize(data.name)}`;
  const body = [
    `Enquiry type: ${intentLabels[data.intent]}`,
    `Name: ${sanitize(data.name)}`,
    `Company: ${data.company ? sanitize(data.company) : "—"}`,
    `Email: ${sanitize(data.email)}`,
    "",
    "Message:",
    sanitize(data.message),
    "",
    "---",
    `Submitted via ${siteConfig.url}/contact`,
  ].join("\n");

  const result = await sendContactEmail({
    subject,
    text: body,
    replyTo: data.email,
  });

  if (!result.ok) {
    // Never claim a message was delivered when it was not.
    return {
      status: "error",
      message:
        result.reason === "not-configured"
          ? `Message delivery is not configured on this deployment yet. Please email ${siteConfig.email} directly and your enquiry will be answered.`
          : `We could not deliver your message just now. Please email ${siteConfig.email} directly, or try again shortly.`,
      fieldErrors: {},
    };
  }

  return {
    status: "success",
    message:
      "Thank you — your message has been received. You will get a reply within two business days.",
    fieldErrors: {},
  };
}
