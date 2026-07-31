import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  /** Alternating surfaces keep long pages from reading as one flat block. */
  tone?: "white" | "muted" | "dark";
  size?: "sm" | "md" | "lg";
};

const tones = {
  white: "bg-white",
  muted: "bg-ink-50",
  dark: "bg-ink-950 text-ink-200",
} as const;

const sizes = {
  sm: "py-14 sm:py-16",
  md: "py-16 sm:py-20 lg:py-24",
  lg: "py-20 sm:py-24 lg:py-32",
} as const;

export function Section({
  children,
  id,
  className,
  tone = "white",
  size = "md",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-24", tones[tone], sizes[size], className)}
    >
      {children}
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  as?: "h1" | "h2" | "h3";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 font-mono text-xs tracking-[0.18em] uppercase",
            isDark ? "text-brand-300" : "text-brand-700"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Heading
        className={cn(
          "text-3xl leading-tight font-semibold tracking-tight sm:text-4xl",
          isDark && "text-white"
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            isDark ? "text-ink-300" : "text-ink-600"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
