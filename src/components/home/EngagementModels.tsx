import { Card, CardIcon } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { engagementModels } from "@/content/company";

export function EngagementModels() {
  return (
    <Section id="engagement">
      <Container width="wide">
        <SectionHeading
          eyebrow="Engagement models"
          title="Three ways to work together"
          description="Commercial terms are agreed in writing before work starts. Rates and estimates are prepared per engagement, based on scope."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {engagementModels.map((model) => (
            <Card key={model.title} className="flex flex-col">
              <CardIcon name={model.icon} />
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink-950">
                {model.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">
                {model.description}
              </p>
              <p className="mt-5 border-t border-ink-100 pt-4 text-sm text-ink-500">
                <span className="font-medium text-ink-700">Suited to: </span>
                {model.suitedTo}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
