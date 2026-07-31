import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { processSteps } from "@/content/company";

export function ProcessSteps() {
  return (
    <Section id="process">
      <Container width="wide">
        <SectionHeading
          eyebrow="How we work"
          title="A predictable delivery process"
          description="Every engagement follows the same four stages, so scope, cost and responsibility are documented before development begins."
        />

        <ol className="mt-14 grid gap-y-10 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-6">
          {processSteps.map((step, index) => (
            <li key={step.step} className="relative">
              {/* Horizontal connector on wide screens */}
              {index < processSteps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute top-5 left-12 hidden h-px w-[calc(100%-2.5rem)] bg-gradient-to-r from-ink-200 to-transparent lg:block"
                />
              ) : null}

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-200 bg-brand-50 font-mono text-xs font-medium text-brand-700">
                {step.step}
              </div>
              <h3 className="mt-5 text-base font-semibold text-ink-950">
                {step.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-600">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
