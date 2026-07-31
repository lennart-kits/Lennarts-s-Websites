import type { Metadata } from "next";

import { CtaSection } from "@/components/common/CtaSection";
import { PageHeader } from "@/components/common/PageHeader";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section, SectionHeading } from "@/components/ui/Section";
import { technologyGroups } from "@/content/technology";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Technology Expertise",
  description:
    "Technology stack used by Lennart Kits: Python, PyTorch, TensorFlow, OpenAI, LangChain, Hugging Face, FastAPI, Flask, PostgreSQL, Redis, AWS, Docker and Kubernetes.",
  path: "/technology",
  keywords: [
    "Python development",
    "FastAPI",
    "LangChain",
    "PyTorch",
    "AWS",
    "Kubernetes",
    "PostgreSQL",
  ],
});

const engineeringPractices = [
  {
    title: "Version control and review",
    description:
      "All work is delivered through Git with reviewed changes and a traceable history in the client's repository.",
  },
  {
    title: "Automated testing",
    description:
      "Test coverage focused on business-critical paths, run automatically on every change through CI.",
  },
  {
    title: "Reproducible environments",
    description:
      "Containerised builds and infrastructure defined as code, so environments can be rebuilt rather than repaired.",
  },
  {
    title: "Security and data handling",
    description:
      "Secret management, least-privilege access and GDPR-aware data handling as part of the standard setup.",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Technology"
        title="Technology expertise"
        description="A deliberately focused stack. We work in depth with a defined set of technologies rather than claiming coverage of everything, and we say so when a requirement falls outside it."
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Technology", path: "/technology" },
        ]}
      />

      {technologyGroups.map((group, index) => (
        <Section
          key={group.id}
          id={group.id}
          tone={index % 2 === 0 ? "white" : "muted"}
        >
          <Container width="wide">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                  <Icon name={group.icon} size={22} />
                </span>
                <h2 className="mt-5 text-2xl font-semibold tracking-tight text-ink-950">
                  {group.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-ink-600">
                  {group.description}
                </p>
              </div>

              <div className="lg:col-span-8">
                <ul className="grid gap-px overflow-hidden rounded-2xl border border-ink-200/80 bg-ink-100 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <li key={item.name} className="bg-white px-5 py-4">
                      <p className="font-mono text-sm font-medium text-ink-950">
                        {item.name}
                      </p>
                      <p className="mt-1 text-sm text-ink-500">{item.note}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>
      ))}

      <Section tone="white" className="border-t border-ink-100">
        <Container width="wide">
          <SectionHeading
            eyebrow="Engineering practice"
            title="How the stack is applied"
            description="Tools matter less than the discipline around them. These practices apply to every engagement regardless of the technology involved."
          />
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {engineeringPractices.map((practice) => (
              <div key={practice.title}>
                <Icon name="check" size={20} className="text-brand-600" />
                <h3 className="mt-4 text-base font-semibold text-ink-950">
                  {practice.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {practice.description}
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
          { name: "Technology", path: "/technology" },
        ])}
      />
    </>
  );
}
