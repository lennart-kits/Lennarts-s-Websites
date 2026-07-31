import { ServiceCard } from "@/components/services/ServiceCard";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Section, SectionHeading } from "@/components/ui/Section";
import { services } from "@/content/services";

export function ServicesOverview() {
  return (
    <Section id="services" tone="muted">
      <Container width="wide">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Services"
            title="Engineering services for modern digital products"
            description="Four practice areas, delivered individually or as one engagement — from an initial technical assessment through to a system running in production."
          />
          <ButtonLink href="/services" variant="secondary" className="shrink-0">
            All services
            <Icon name="arrowRight" size={16} />
          </ButtonLink>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
