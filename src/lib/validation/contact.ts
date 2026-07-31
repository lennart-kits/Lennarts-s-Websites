import { z } from "zod";

export const contactIntents = [
  "project",
  "consultation",
  "partnership",
  "other",
] as const;

export type ContactIntent = (typeof contactIntents)[number];

export const intentLabels: Record<ContactIntent, string> = {
  project: "New project enquiry",
  consultation: "Request a consultation",
  partnership: "Partnership or supplier onboarding",
  other: "Other question",
};

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(120, "Name is too long."),
  company: z
    .string()
    .trim()
    .max(160, "Company name is too long.")
    .optional()
    .or(z.literal("")),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .max(254, "Email address is too long.")
    .email("Please enter a valid email address."),
  intent: z.enum(contactIntents).default("project"),
  message: z
    .string()
    .trim()
    .min(20, "Please describe your enquiry in at least 20 characters.")
    .max(5000, "Message is too long — please keep it under 5000 characters."),
  // An unchecked checkbox is simply absent from FormData, so this is a plain
  // string check rather than a boolean coercion.
  consent: z.string().refine((value) => value === "on" || value === "true", {
    message: "Please confirm you agree to the privacy policy.",
  }),
  /** Honeypot: must stay empty. Never shown to real users. */
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors: Partial<Record<keyof ContactInput, string>>;
};

export const initialContactState: ContactFormState = {
  status: "idle",
  message: "",
  fieldErrors: {},
};
