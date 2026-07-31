import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { principles } from "@/content/company";
import { siteConfig } from "@/lib/site";

export function CompanyIntro() {
  return (
    <Section>
      <Container width="wide">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs tracking-[0.18em] text-brand-700 uppercase">
              The company
            </p>
            <p className="mt-6 text-xl leading-relaxed font-medium text-ink-900 sm:text-2xl">
              {siteConfig.name} is an Estonia-based technology consultancy
              specializing in artificial intelligence, software development,
              machine learning solutions, and cloud technologies.
            </p>
            <p className="mt-5 text-base leading-relaxed text-ink-600">
              We work with organisations that need experienced engineering
              expertise to design reliable, scalable and secure digital
              solutions — whether that means adding capacity to an existing
              team, taking ownership of a defined system, or providing a
              technical view before a decision is made.
            </p>
            <ButtonLink href="/about" variant="secondary" className="mt-8">
              About the company
              <Icon name="arrowRight" size={16} />
            </ButtonLink>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-px overflow-hidden rounded-2xl border border-ink-200/80 bg-ink-100 sm:grid-cols-2">
              {principles.map((principle) => (
                <div key={principle.title} className="bg-white p-6 sm:p-7">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                    <Icon name={principle.icon} size={20} />
                  </span>
                  <h3 className="mt-4 text-[0.9375rem] font-semibold text-ink-950">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
