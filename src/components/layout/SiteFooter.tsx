import Link from "next/link";

import { Logo } from "@/components/layout/Logo";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import {
  companyRegistry,
  footerNav,
  registeredAddress,
  siteConfig,
} from "@/lib/site";

/** Registration details published in the footer for business verification. */
const legalDetails = [
  { label: "Legal form", value: companyRegistry.legalForm },
  { label: "NIB", value: companyRegistry.registryCode },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  const displayUrl = siteConfig.url.replace(/^https?:\/\//, "");

  return (
    <footer className="border-t border-ink-200 bg-ink-950">
      <Container width="wide">
        <div className="grid gap-12 py-14 lg:grid-cols-12 lg:gap-8 lg:py-16">
          <div className="lg:col-span-4">
            <Logo tone="dark" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-400">
              {siteConfig.shortDescription}
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-6 inline-flex items-center gap-2 rounded-md text-sm font-medium text-ink-200 transition-colors hover:text-white"
            >
              <Icon name="mail" size={16} />
              {siteConfig.email}
            </a>
            <p className="mt-3">
              <a
                href={siteConfig.url}
                className="inline-flex items-center gap-2 rounded-md text-sm font-medium text-ink-200 transition-colors hover:text-white"
              >
                <Icon name="globe" size={16} />
                {displayUrl}
              </a>
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8 lg:gap-8">
            {footerNav.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <h2 className="font-mono text-xs tracking-[0.16em] text-ink-500 uppercase">
                  {group.title}
                </h2>
                <ul className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <li key={`${group.title}-${item.href}`}>
                      <Link
                        href={item.href}
                        className="text-sm text-ink-300 transition-colors hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Legal identification — published for client, partner and payment
            provider verification against the company's NIB registration. */}
        <section
          aria-label="Company registration details"
          className="grid gap-8 border-t border-white/10 py-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div>
            <h2 className="font-mono text-xs tracking-[0.16em] text-ink-500 uppercase">
              Registered entity
            </h2>
            <p className="mt-4 text-sm font-medium text-ink-200">
              {siteConfig.name}
            </p>
            <dl className="mt-3 space-y-2 text-sm">
              {legalDetails.map((detail) => (
                <div key={detail.label}>
                  <dt className="text-ink-500">{detail.label}</dt>
                  <dd className="text-ink-300">{detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h2 className="font-mono text-xs tracking-[0.16em] text-ink-500 uppercase">
              Registered address
            </h2>
            <address className="mt-4 text-sm leading-relaxed text-ink-400 not-italic">
              {registeredAddress.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>

          <div>
            <h2 className="font-mono text-xs tracking-[0.16em] text-ink-500 uppercase">
              Responsible person
            </h2>
            <p className="mt-4 text-sm font-medium text-ink-200">
              {companyRegistry.responsiblePerson}
            </p>
            <p className="mt-1 text-sm text-ink-400">
              {companyRegistry.responsiblePersonPosition}
            </p>
          </div>

          <div>
            <h2 className="font-mono text-xs tracking-[0.16em] text-ink-500 uppercase">
              Business contact
            </h2>
            <p className="mt-4 text-sm">
              <a
                href={`mailto:${siteConfig.email}`}
                className="break-all text-ink-300 transition-colors hover:text-white"
              >
                {siteConfig.email}
              </a>
            </p>
            <p className="mt-2 text-sm">
              <a
                href={siteConfig.url}
                className="break-all text-ink-300 transition-colors hover:text-white"
              >
                {siteConfig.url}
              </a>
            </p>
          </div>
        </section>

        <div className="flex flex-col gap-4 border-t border-white/10 py-7 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="max-w-xl sm:text-right">
            Registered in the {companyRegistry.jurisdiction} · NIB{" "}
            {companyRegistry.registryCode} · Full details on the{" "}
            <Link
              href="/company"
              className="text-ink-300 underline underline-offset-4 hover:text-white"
            >
              Company Information
            </Link>{" "}
            page.
          </p>
        </div>
      </Container>
    </footer>
  );
}
