import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Section, SectionHeading } from "@/components/ui/Section";
import { valuePoints } from "@/content/company";

export function ValueGrid() {
  return (
    <Section tone="muted">
      <Container width="wide">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Why Lennart Kits"
              title="Engineering capacity you can contract with confidence"
              description="An external partner is only useful if the working relationship is clear. These are the terms we operate on — stated plainly, without claims we cannot evidence."
            />
          </div>

          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-7">
            {valuePoints.map((point) => (
              <div key={point.title}>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-brand-700 ring-1 ring-ink-200/80">
                  <Icon name={point.icon} size={20} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink-950">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
