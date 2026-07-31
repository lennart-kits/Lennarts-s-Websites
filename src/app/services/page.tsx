import type { Metadata } from "next";
import Link from "next/link";

import { CtaSection } from "@/components/common/CtaSection";
import { PageHeader } from "@/components/common/PageHeader";
import { Container } from "@/components/ui/Container";
import { CardIcon } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { TechBadge } from "@/components/ui/TechBadge";
import { services } from "@/content/services";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Services",
  description:
    "AI solutions, software engineering, machine learning, cloud infrastructure and technical consulting services delivered by Lennart Kits, an Indonesia-based technology company.",
  path: "/services",
  keywords: [
    "AI development services",
    "custom software development",
    "backend engineering services",
    "cloud deployment services",
    "technical consulting",
  ],
});

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `${siteConfig.name} services`,
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.summary,
      serviceType: service.title,
      provider: { "@id": `${siteConfig.url}/#organization` },
      areaServed: "Worldwide",
      url: `${siteConfig.url}/services#${service.id}`,
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Software engineering, AI and cloud services"
        description="Four practice areas covering the full path from technical assessment to a maintained production system. Engagements are scoped in writing and delivered against agreed milestones."
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      >
        <nav aria-label="Services on this page">
          <ul className="flex flex-wrap gap-2">
            {services.map((service) => (
              <li key={service.id}>
                <Link
                  href={`#${service.id}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-ink-200 bg-white px-3.5 py-2 text-sm font-medium text-ink-700 transition-colors hover:border-brand-200 hover:text-ink-950"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>

      {services.map((service, index) => (
        <Section
          key={service.id}
          id={service.id}
          tone={index % 2 === 0 ? "white" : "muted"}
        >
          <Container width="wide">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <CardIcon name={service.icon} />
                <h2 className="mt-5 text-2xl font-semibold tracking-tight text-ink-950 sm:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink-600">
                  {service.body}
                </p>

                <div className="mt-7">
                  <p className="font-mono text-[0.6875rem] tracking-[0.16em] text-ink-400 uppercase">
                    Technology
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {service.technologies.map((tech) => (
                      <TechBadge key={tech} label={tech} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-ink-200/80 bg-white p-6 shadow-card sm:p-8">
                  <h3 className="text-sm font-semibold tracking-wide text-ink-950 uppercase">
                    What this includes
                  </h3>
                  <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {service.capabilities.map((capability) => (
                      <li
                        key={capability}
                        className="flex items-start gap-2.5 text-sm text-ink-700"
                      >
                        <Icon
                          name="check"
                          size={17}
                          className="mt-0.5 shrink-0 text-brand-600"
                        />
                        {capability}
                      </li>
                    ))}
                  </ul>

                  <h3 className="mt-8 border-t border-ink-100 pt-6 text-sm font-semibold tracking-wide text-ink-950 uppercase">
                    What you receive
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {service.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="flex items-start gap-2.5 text-sm text-ink-600"
                      >
                        <Icon
                          name="arrowRight"
                          size={16}
                          className="mt-0.5 shrink-0 text-ink-300"
                        />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      ))}

      <CtaSection
        title="Not sure which service applies?"
        description="Describe the situation in a few sentences. If the work is outside what we do well, we will say so and point you in a more useful direction."
      />

      <JsonLd
        data={[
          serviceJsonLd,
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />
    </>
  );
}
