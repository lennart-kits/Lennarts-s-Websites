import type { Metadata } from "next";
import Link from "next/link";

import { CtaSection } from "@/components/common/CtaSection";
import { PageHeader } from "@/components/common/PageHeader";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";
import { companyRegistry, registeredAddress, siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Company Information",
  description:
    "Official company information for Lennart Kits, a Perseroan Perorangan registered in the Republic of Indonesia under Business Identification Number (NIB) 1607260079991, including legal form, registered address in Kota Bekasi and business contact details.",
  path: "/company",
  keywords: [
    "company information",
    "business details",
    "Indonesia company",
    "Perseroan Perorangan",
    "NIB 1607260079991",
  ],
});

/** Business identity — the fields a payment provider or platform checks first. */
const businessIdentity = [
  { label: "Company", value: siteConfig.name },
  { label: "Legal form", value: companyRegistry.legalForm },
  { label: companyRegistry.registryLabel, value: companyRegistry.registryCode },
  { label: "Responsible person", value: companyRegistry.responsiblePerson },
  { label: "Position", value: companyRegistry.responsiblePersonPosition },
  { label: "Country", value: siteConfig.country },
];

const registryRows = [
  { label: "Registration type", value: companyRegistry.registrationType },
  { label: "Jurisdiction", value: companyRegistry.jurisdiction },
  { label: "Industry", value: siteConfig.industry },
  { label: "Business activity", value: siteConfig.businessActivity },
];

const operationalFacts = [
  {
    title: "Service delivery",
    description:
      "Services are delivered remotely to business clients. Communication and documentation are in English.",
  },
  {
    title: "Contracting",
    description:
      "Work is performed under a written services agreement. Non-disclosure agreements and data processing agreements are available on request.",
  },
  {
    title: "Invoicing",
    description:
      "Invoices are issued by Lennart Kits under Business Identification Number (NIB) 1607260079991, in the currency agreed in the services agreement. Any taxes applicable under Indonesian law are shown separately.",
  },
  {
    title: "Data protection",
    description:
      "Personal data is processed in accordance with Indonesian Law No. 27 of 2022 on Personal Data Protection. See the Privacy Policy for details.",
  },
];

export default function CompanyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Company information"
        title="Business and registration details"
        description="Published for clients, partners and verification purposes. Only registered, verifiable information appears on this page."
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Company Information", path: "/company" },
        ]}
      />

      <Section>
        <Container width="wide">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Business identity */}
            <div className="rounded-2xl border border-ink-200/80 bg-white p-6 shadow-card sm:p-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                  <Icon name="document" size={20} />
                </span>
                <h2 className="text-lg font-semibold tracking-tight text-ink-950">
                  Business identity
                </h2>
              </div>

              <dl className="mt-7 divide-y divide-ink-100">
                {businessIdentity.map((row) => (
                  <div
                    key={row.label}
                    className="flex flex-col gap-1 py-4 first:pt-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <dt className="font-mono text-[0.6875rem] tracking-[0.14em] text-ink-500 uppercase">
                      {row.label}
                    </dt>
                    <dd className="text-sm font-medium text-ink-900 sm:text-right">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Registration */}
            <div className="rounded-2xl border border-ink-200/80 bg-white p-6 shadow-card sm:p-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                  <Icon name="shield" size={20} />
                </span>
                <h2 className="text-lg font-semibold tracking-tight text-ink-950">
                  Registration
                </h2>
              </div>

              <dl className="mt-7 divide-y divide-ink-100">
                <div className="flex flex-col gap-1.5 py-4 first:pt-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <dt className="font-mono text-[0.6875rem] tracking-[0.14em] text-ink-500 uppercase">
                    Registered address
                  </dt>
                  <dd className="sm:text-right">
                    <address className="text-sm leading-relaxed font-medium text-ink-900 not-italic">
                      {registeredAddress.lines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  </dd>
                </div>

                {registryRows.map((row) => (
                  <div
                    key={row.label}
                    className="flex flex-col gap-1.5 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <dt className="font-mono text-[0.6875rem] tracking-[0.14em] text-ink-500 uppercase">
                      {row.label}
                    </dt>
                    <dd className="text-sm font-medium text-ink-900 sm:text-right">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-6 rounded-lg border border-ink-200 bg-ink-50/80 p-4 text-xs leading-relaxed text-ink-600">
                The details above correspond to the registration held by{" "}
                {siteConfig.name} under {companyRegistry.registryLabel}{" "}
                {companyRegistry.registryCode}, issued through the Online Single
                Submission (OSS) system of the {companyRegistry.jurisdiction}.
              </p>
            </div>
          </div>

          {/* Contact block */}
          <div className="mt-8 grid gap-8 rounded-2xl border border-ink-200/80 bg-ink-50/60 p-6 sm:p-8 lg:grid-cols-3">
            <div>
              <h2 className="text-sm font-semibold tracking-wide text-ink-950 uppercase">
                Business contact
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">
                All business, contractual and verification correspondence.
              </p>
            </div>
            <div className="lg:col-span-2">
              <dl className="grid gap-6 sm:grid-cols-2">
                <div>
                  <dt className="font-mono text-[0.6875rem] tracking-[0.14em] text-ink-500 uppercase">
                    Email
                  </dt>
                  <dd className="mt-1.5">
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-sm font-medium text-brand-700 underline underline-offset-4 hover:text-brand-800"
                    >
                      {siteConfig.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[0.6875rem] tracking-[0.14em] text-ink-500 uppercase">
                    Contact form
                  </dt>
                  <dd className="mt-1.5">
                    <Link
                      href="/contact"
                      className="text-sm font-medium text-brand-700 underline underline-offset-4 hover:text-brand-800"
                    >
                      Send a message
                    </Link>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[0.6875rem] tracking-[0.14em] text-ink-500 uppercase">
                    Website
                  </dt>
                  <dd className="mt-1.5">
                    <a
                      href={siteConfig.url}
                      className="text-sm font-medium text-brand-700 underline underline-offset-4 hover:text-brand-800"
                    >
                      {siteConfig.url.replace(/^https?:\/\//, "")}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[0.6875rem] tracking-[0.14em] text-ink-500 uppercase">
                    Response time
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium text-ink-900">
                    Within two business days
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container width="wide">
          <h2 className="text-2xl font-semibold tracking-tight text-ink-950">
            Operating information
          </h2>
          <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {operationalFacts.map((fact) => (
              <div key={fact.title}>
                <h3 className="text-base font-semibold text-ink-950">
                  {fact.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {fact.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-ink-200 pt-8 text-sm">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
              { label: "Cookie Policy", href: "/cookies" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex items-center gap-1.5 font-medium text-brand-700 hover:text-brand-800"
              >
                {item.label}
                <Icon name="arrowRight" size={15} />
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CtaSection
        title="Need documentation for onboarding or procurement?"
        description="Contracts, data processing agreements and registration extracts can be provided on request for supplier onboarding and verification processes."
      />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Company Information", path: "/company" },
        ])}
      />
    </>
  );
}
