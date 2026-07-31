import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { highlightedTechnologies } from "@/content/technology";

/**
 * Technology names only — deliberately no vendor logos, which would imply
 * partnerships or certifications that do not exist.
 */
export function TechnologyStrip() {
  return (
    <Section size="sm" className="border-y border-ink-100">
      <Container width="wide">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
          <div className="lg:w-64 lg:shrink-0">
            <p className="font-mono text-xs tracking-[0.18em] text-brand-700 uppercase">
              Core technology
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">
              The stack used day to day across AI, backend and infrastructure
              work.
            </p>
            <ButtonLink
              href="/technology"
              variant="ghost"
              className="-ml-3 mt-2 text-brand-700"
            >
              Technology expertise
              <Icon name="arrowRight" size={16} />
            </ButtonLink>
          </div>

          <ul className="flex flex-1 flex-wrap gap-2.5">
            {highlightedTechnologies.map((tech) => (
              <li
                key={tech}
                className="rounded-lg border border-ink-200/80 bg-white px-3.5 py-2 font-mono text-[0.8125rem] text-ink-700 transition-colors duration-200 hover:border-brand-200 hover:text-ink-950"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
