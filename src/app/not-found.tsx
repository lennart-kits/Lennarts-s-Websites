import type { Metadata } from "next";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { primaryNav } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="bg-grid absolute inset-0 [mask-image:radial-gradient(55%_55%_at_50%_0%,black,transparent)]"
      />
      <Container className="relative">
        <div className="py-24 text-center sm:py-32">
          <p className="font-mono text-xs tracking-[0.18em] text-brand-700 uppercase">
            Error 404
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl">
            Page not found
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-ink-600">
            The page you requested does not exist or has been moved. The links
            below cover everything published on this site.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/" size="lg">
              Back to home
              <Icon name="arrowRight" size={18} />
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary" size="lg">
              Contact us
            </ButtonLink>
          </div>

          <nav aria-label="Site sections" className="mt-14">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 border-t border-ink-100 pt-8 text-sm">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-medium text-ink-600 transition-colors hover:text-brand-700"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </section>
  );
}
