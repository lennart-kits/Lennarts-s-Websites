"use client";

import Link from "next/link";
import { useActionState } from "react";

import { submitContactForm } from "@/app/actions/contact";
import { Button } from "@/components/ui/Button";
import { Field, Input, Select, Textarea } from "@/components/ui/Field";
import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/lib/site";
import {
  contactIntents,
  initialContactState,
  intentLabels,
  type ContactIntent,
} from "@/lib/validation/contact";

export function ContactForm({
  defaultIntent = "project",
}: {
  defaultIntent?: ContactIntent;
}) {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialContactState
  );

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-support-300 bg-support-100/50 p-8 text-center"
      >
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-support-700 ring-1 ring-support-300">
          <Icon name="check" size={24} />
        </span>
        <h2 className="mt-5 text-lg font-semibold text-ink-950">
          Message received
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-700">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="space-y-6">
      {state.status === "error" && state.message ? (
        <div
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          {state.message}
        </div>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="name" label="Name" required error={state.fieldErrors.name}>
          <Input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            invalid={Boolean(state.fieldErrors.name)}
            aria-describedby={state.fieldErrors.name ? "name-error" : undefined}
            placeholder="Your full name"
          />
        </Field>

        <Field id="company" label="Company" error={state.fieldErrors.company}>
          <Input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            invalid={Boolean(state.fieldErrors.company)}
            placeholder="Company or organisation"
          />
        </Field>
      </div>

      <Field id="email" label="Email" required error={state.fieldErrors.email}>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          invalid={Boolean(state.fieldErrors.email)}
          aria-describedby={state.fieldErrors.email ? "email-error" : undefined}
          placeholder="name@company.com"
        />
      </Field>

      <Field id="intent" label="How can we help?" required>
        <Select id="intent" name="intent" defaultValue={defaultIntent}>
          {contactIntents.map((intent) => (
            <option key={intent} value={intent}>
              {intentLabels[intent]}
            </option>
          ))}
        </Select>
      </Field>

      <Field
        id="message"
        label="Message"
        required
        hint="A short description of the system, the objective and any timing constraints is enough to start."
        error={state.fieldErrors.message}
      >
        <Textarea
          id="message"
          name="message"
          required
          minLength={20}
          maxLength={5000}
          invalid={Boolean(state.fieldErrors.message)}
          aria-describedby={
            state.fieldErrors.message ? "message-error" : "message-hint"
          }
          placeholder="What are you building, and where do you need engineering support?"
        />
      </Field>

      {/* Honeypot — hidden from users and assistive technology. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label
          htmlFor="consent"
          className="flex items-start gap-3 text-sm leading-relaxed text-ink-600"
        >
          <input
            id="consent"
            name="consent"
            type="checkbox"
            required
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-ink-300 text-brand-600 focus:ring-brand-500"
          />
          <span>
            I agree that the details submitted may be used to respond to this
            enquiry, as described in the{" "}
            <Link
              href="/privacy"
              className="font-medium text-brand-700 underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            .
          </span>
        </label>
        {state.fieldErrors.consent ? (
          <p role="alert" className="mt-1.5 text-xs font-medium text-red-600">
            {state.fieldErrors.consent}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4 border-t border-ink-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-500">
          Or email{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-medium text-ink-700 underline underline-offset-4"
          >
            {siteConfig.email}
          </a>
        </p>
        <Button type="submit" size="lg" disabled={isPending}>
          {isPending ? "Sending…" : "Send message"}
          {!isPending ? <Icon name="arrowRight" size={18} /> : null}
        </Button>
      </div>
    </form>
  );
}
