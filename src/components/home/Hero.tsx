import { ArchitectureDiagram } from "@/components/home/ArchitectureDiagram";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { companyRegistry, siteConfig } from "@/lib/site";

const assurances = [
  `Registered Estonian business · Registry code ${companyRegistry.registryCode}`,
  "Written scope and contract before delivery",
  "Direct communication with the engineer",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-100 bg-white">
      {/* Background: engineering grid fading out, plus a soft brand wash */}
      <div
        aria-hidden="true"
        className="bg-grid absolute inset-0 [mask-image:radial-gradient(75%_60%_at_50%_0%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-40 -left-32 h-[32rem] w-[32rem] rounded-full bg-brand-100/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -top-24 right-0 h-[26rem] w-[26rem] rounded-full bg-support-100/40 blur-3xl"
      />

      <Container width="wide" className="relative">
        <div className="grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-12 lg:gap-12 lg:py-28">
          <div className="reveal lg:col-span-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/80 px-3 py-1.5 font-mono text-[0.6875rem] tracking-[0.14em] text-ink-600 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
              {siteConfig.country} · Technology consultancy
            </p>

            <h1 className="mt-6 text-4xl leading-[1.08] font-semibold tracking-tight text-ink-950 sm:text-5xl lg:text-[3.5rem]">
              {siteConfig.name}
            </h1>
            <p className="mt-4 text-xl font-medium text-brand-700 sm:text-2xl">
              {siteConfig.tagline}
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-600 sm:text-lg">
              We help businesses design, develop, and deploy reliable software,
              artificial intelligence and machine learning solutions, and
              cloud-based systems.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" size="lg">
                Contact Us
                <Icon name="arrowRight" size={18} />
              </ButtonLink>
              <ButtonLink
                href="/contact?intent=consultation"
                variant="secondary"
                size="lg"
              >
                Request Consultation
              </ButtonLink>
            </div>

            <ul className="mt-10 grid gap-3 border-t border-ink-100 pt-8 sm:grid-cols-1">
              {assurances.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-ink-600"
                >
                  <Icon
                    name="check"
                    size={18}
                    className="mt-px shrink-0 text-brand-600"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal lg:col-span-6 lg:pl-4 [animation-delay:120ms]">
            <ArchitectureDiagram />
          </div>
        </div>
      </Container>
    </section>
  );
}
