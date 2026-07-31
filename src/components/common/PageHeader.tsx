import Link from "next/link";
import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
  breadcrumb?: { name: string; path: string }[];
};

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
  breadcrumb,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-ink-100 bg-white">
      <div
        aria-hidden="true"
        className="bg-grid absolute inset-0 [mask-image:radial-gradient(60%_70%_at_30%_0%,black,transparent)]"
      />
      <Container width="wide" className="relative">
        <div className="py-14 sm:py-16 lg:py-20">
          {breadcrumb?.length ? (
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-xs text-ink-500">
                {breadcrumb.map((crumb, index) => (
                  <li key={crumb.path} className="flex items-center gap-2">
                    {index > 0 ? (
                      <span aria-hidden="true" className="text-ink-300">
                        /
                      </span>
                    ) : null}
                    {index === breadcrumb.length - 1 ? (
                      <span className="text-ink-700">{crumb.name}</span>
                    ) : (
                      <Link
                        href={crumb.path}
                        className="transition-colors hover:text-ink-800"
                      >
                        {crumb.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          ) : null}

          <p className="font-mono text-xs tracking-[0.18em] text-brand-700 uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.1] font-semibold tracking-tight text-ink-950 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-600 sm:text-lg">
            {description}
          </p>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
