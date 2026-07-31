import type { Metadata } from "next";

import { CtaSection } from "@/components/common/CtaSection";
import { PageHeader } from "@/components/common/PageHeader";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section, SectionHeading } from "@/components/ui/Section";
import { principles } from "@/content/company";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";
import { companyRegistry, siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "About the Company",
  description: siteConfig.description,
  path: "/about",
  keywords: [
    "Estonian IT company",
    "technology consultancy Estonia",
    "AI consultancy Europe",
    "machine learning solutions",
  ],
});

const clientProfiles = [
  {
    title: "Product companies",
    description:
      "Teams building a software product that need additional backend or AI engineering capacity for a defined period.",
  },
  {
    title: "Established businesses",
    description:
      "Organisations digitising internal processes, integrating systems, or evaluating where AI genuinely applies to their operations.",
  },
  {
    title: "Technical founders",
    description:
      "Early-stage teams that need a production-grade foundation rather than a prototype that has to be rebuilt within a year.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="An Estonia-based technology consultancy"
        description={siteConfig.description}
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />

      <Section>
        <Container width="wide">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="space-y-5 text-base leading-relaxed text-ink-600">
                <p className="text-lg font-medium text-ink-900">
                  The company works with organisations that need experienced
                  engineering expertise to design reliable, scalable and secure
                  digital solutions.
                </p>
                <p>
                  Most engagements begin the same way: a business has a clear
                  objective — an integration that has to work, a manual process
                  that should be automated, an AI capability that has to move
                  from idea to something customers can actually use — and needs
                  an engineering partner who can take technical responsibility
                  for it.
                </p>
                <p>
                  {siteConfig.name} covers that work end to end. That includes
                  the parts that are easy to skip and expensive to retrofit:
                  data modelling, error handling, testing, deployment
                  automation, monitoring and documentation. The objective is a
                  system that keeps running after the engagement ends, and that
                  another engineer can pick up without a rewrite.
                </p>
                <p>
                  {siteConfig.name} is registered in the{" "}
                  {companyRegistry.jurisdiction} as a sole proprietor (FIE)
                  under registry code {companyRegistry.registryCode} and VAT
                  number {companyRegistry.vatNumber}, and therefore operates
                  within the European Union legal and data protection framework.
                  Clients are served across Europe and internationally, with work
                  delivered remotely, in English, under written agreement.
                </p>
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href="/services">
                  Services
                  <Icon name="arrowRight" size={16} />
                </ButtonLink>
                <ButtonLink href="/company" variant="secondary">
                  Company information
                </ButtonLink>
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="rounded-2xl border border-ink-200/80 bg-ink-50/60 p-6 sm:p-8">
                <h2 className="text-sm font-semibold tracking-wide text-ink-950 uppercase">
                  At a glance
                </h2>
                <dl className="mt-6 space-y-5">
                  {[
                    { term: "Company", detail: siteConfig.name },
                    {
                      term: "Legal form",
                      detail: companyRegistry.legalFormShort,
                    },
                    {
                      term: "Registry code",
                      detail: companyRegistry.registryCode,
                    },
                    { term: "VAT number", detail: companyRegistry.vatNumber },
                    {
                      term: "Responsible person",
                      detail: companyRegistry.responsiblePerson,
                    },
                    { term: "Country", detail: siteConfig.country },
                    { term: "Industry", detail: siteConfig.industry },
                    {
                      term: "Business activity",
                      detail: siteConfig.businessActivity,
                    },
                    {
                      term: "Service delivery",
                      detail: "Remote, working in English",
                    },
                    {
                      term: "Clients served",
                      detail: "Europe and international",
                    },
                  ].map((row) => (
                    <div
                      key={row.term}
                      className="border-b border-ink-200/70 pb-4 last:border-0 last:pb-0"
                    >
                      <dt className="font-mono text-[0.6875rem] tracking-[0.14em] text-ink-500 uppercase">
                        {row.term}
                      </dt>
                      <dd className="mt-1.5 text-sm font-medium text-ink-900">
                        {row.detail}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container width="wide">
          <SectionHeading
            eyebrow="Working principles"
            title="How the company operates"
            description="These are commitments about process, not claims about outcomes."
          />
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {principles.map((principle) => (
              <div key={principle.title} className="flex gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-brand-700 ring-1 ring-ink-200/80">
                  <Icon name={principle.icon} size={21} />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-ink-950">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <ProcessSteps />

      <Section tone="muted">
        <Container width="wide">
          <SectionHeading
            eyebrow="Who we work with"
            title="Typical client profiles"
            description="Engagements vary in size, but the requirement is consistent: dependable engineering delivered under a clear agreement."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {clientProfiles.map((profile) => (
              <div
                key={profile.title}
                className="rounded-2xl border border-ink-200/80 bg-white p-6 shadow-card sm:p-7"
              >
                <h3 className="text-base font-semibold text-ink-950">
                  {profile.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">
                  {profile.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CtaSection />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
    </>
  );
}
