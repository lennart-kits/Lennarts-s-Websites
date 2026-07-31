"use client";

import { useEffect } from "react";

import { Button, ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Reported to the server console / platform logs only.
    // No stack detail is rendered to the visitor.
    console.error(error);
  }, [error]);

  return (
    <section className="bg-white">
      <Container>
        <div className="py-24 text-center sm:py-32">
          <p className="font-mono text-xs tracking-[0.18em] text-brand-700 uppercase">
            Unexpected error
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
            Something went wrong
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-ink-600">
            The page could not be displayed. Please try again — if the problem
            continues, contact{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-medium text-brand-700 underline underline-offset-4"
            >
              {siteConfig.email}
            </a>
            .
          </p>
          {error.digest ? (
            <p className="mt-3 font-mono text-xs text-ink-400">
              Reference: {error.digest}
            </p>
          ) : null}

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" onClick={reset}>
              Try again
            </Button>
            <ButtonLink href="/" variant="secondary" size="lg">
              Back to home
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
