import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/contact/ContactForm";
import { PageHeader } from "@/components/common/PageHeader";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";
import { companyRegistry, registeredAddress, siteConfig } from "@/lib/site";
import { contactIntents, type ContactIntent } from "@/lib/validation/contact";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Lennart Kits, an Indonesia-based technology company, about AI engineering, software development, machine learning or cloud technology projects. Email lennartkitssoletrader@gmail.com — business enquiries are answered within two business days.",
  path: "/contact",
});

const enquiryNotes = [
  {
    title: "What happens next",
    description:
      "Your message is read by the engineer who would do the work. You receive a reply within two business days — a direct answer, or a short set of questions if the scope needs clarifying.",
    icon: "chat" as const,
  },
  {
    title: "Initial consultation",
    description:
      "The first conversation is a technical discussion about the objective, constraints and feasibility. There is no charge and no obligation to continue.",
    icon: "consulting" as const,
  },
  {
    title: "Confidentiality",
    description:
      "Enquiry details are treated as confidential. A mutual non-disclosure agreement can be signed before any detailed technical discussion.",
    icon: "shield" as const,
  },
];

function resolveIntent(value: string | undefined): ContactIntent {
  return contactIntents.includes(value as ContactIntent)
    ? (value as ContactIntent)
    : "project";
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ intent?: string }>;
}) {
  const params = await searchParams;
  const defaultIntent = resolveIntent(params.intent);

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to us about your project"
        description="Send a short description of what you are building and where you need engineering support. Business enquiries are answered within two business days."
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />

      <Section>
        <Container width="wide">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-ink-200/80 bg-white p-6 shadow-card sm:p-8">
                <h2 className="text-lg font-semibold tracking-tight text-ink-950">
                  Send a message
                </h2>
                <p className="mt-2 text-sm text-ink-600">
                  Fields marked with an asterisk are required.
                </p>
                <div className="mt-8">
                  <ContactForm defaultIntent={defaultIntent} />
                </div>
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="rounded-2xl border border-ink-200/80 bg-ink-50/60 p-6 sm:p-8">
                <h2 className="text-sm font-semibold tracking-wide text-ink-950 uppercase">
                  Direct contact
                </h2>
                <dl className="mt-6 space-y-5">
                  <div>
                    <dt className="font-mono text-[0.6875rem] tracking-[0.14em] text-ink-500 uppercase">
                      Business email
                    </dt>
                    <dd className="mt-1.5">
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="inline-flex items-center gap-2 text-sm font-medium text-brand-700 underline underline-offset-4 hover:text-brand-800"
                      >
                        <Icon name="mail" size={16} />
                        {siteConfig.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[0.6875rem] tracking-[0.14em] text-ink-500 uppercase">
                      Website
                    </dt>
                    <dd className="mt-1.5">
                      <a
                        href={siteConfig.url}
                        className="inline-flex items-center gap-2 text-sm font-medium text-brand-700 underline underline-offset-4 hover:text-brand-800"
                      >
                        <Icon name="globe" size={16} />
                        {siteConfig.url.replace(/^https?:\/\//, "")}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[0.6875rem] tracking-[0.14em] text-ink-500 uppercase">
                      Company
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed font-medium text-ink-900">
                      {siteConfig.name}
                      <br />
                      {companyRegistry.legalForm}
                      <br />
                      {companyRegistry.registryLabel}:{" "}
                      {companyRegistry.registryCode}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[0.6875rem] tracking-[0.14em] text-ink-500 uppercase">
                      Country
                    </dt>
                    <dd className="mt-1.5 text-sm font-medium text-ink-900">
                      {siteConfig.country}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[0.6875rem] tracking-[0.14em] text-ink-500 uppercase">
                      Registered address
                    </dt>
                    <dd className="mt-1.5">
                      <address className="text-sm leading-relaxed font-medium text-ink-900 not-italic">
                        {registeredAddress.lines.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </address>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[0.6875rem] tracking-[0.14em] text-ink-500 uppercase">
                      Working language
                    </dt>
                    <dd className="mt-1.5 text-sm font-medium text-ink-900">
                      English
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[0.6875rem] tracking-[0.14em] text-ink-500 uppercase">
                      Company details
                    </dt>
                    <dd className="mt-1.5">
                      <Link
                        href="/company"
                        className="text-sm font-medium text-brand-700 underline underline-offset-4 hover:text-brand-800"
                      >
                        Registration and business information
                      </Link>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-8 space-y-7">
                {enquiryNotes.map((note) => (
                  <div key={note.title} className="flex gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-brand-700 ring-1 ring-ink-200/80">
                      <Icon name={note.icon} size={19} />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-ink-950">
                        {note.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                        {note.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: `Contact ${siteConfig.name}`,
            url: `${siteConfig.url}/contact`,
            mainEntity: { "@id": `${siteConfig.url}/#organization` },
          },
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
    </>
  );
}
