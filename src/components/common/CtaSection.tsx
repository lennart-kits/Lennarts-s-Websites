import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/lib/site";

type CtaSectionProps = {
  title?: string;
  description?: string;
};

export function CtaSection({
  title = "Discuss your project with an engineer",
  description = "Describe the system, the constraints and the timeline. You will receive a considered technical response — not a sales sequence.",
}: CtaSectionProps) {
  return (
    <section className="relative overflow-hidden bg-ink-950">
      <div aria-hidden="true" className="bg-grid-inverted absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-3xl"
      />

      <Container width="wide" className="relative">
        <div className="flex flex-col items-start gap-10 py-16 sm:py-20 lg:flex-row lg:items-center lg:justify-between lg:py-24">
          <div className="max-w-2xl">
            <h2 className="text-3xl leading-tight font-semibold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-300 sm:text-lg">
              {description}
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-6 inline-flex items-center gap-2 rounded-md font-mono text-sm text-ink-300 transition-colors hover:text-white"
            >
              <Icon name="mail" size={16} />
              {siteConfig.email}
            </a>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:shrink-0 lg:flex-col xl:flex-row">
            <ButtonLink href="/contact" variant="inverted" size="lg">
              Contact Us
              <Icon name="arrowRight" size={18} />
            </ButtonLink>
            <ButtonLink
              href="/contact?intent=consultation"
              size="lg"
              className="border border-white/20 bg-white/5 text-white hover:bg-white/10"
            >
              Request Consultation
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
