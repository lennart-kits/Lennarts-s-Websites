import Link from "next/link";

import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Text-first wordmark with a geometric mark.
 * To swap in a supplied logo file later, replace <LogoMark /> with next/image
 * — the surrounding layout and sizing stay unchanged.
 */
function LogoMark({ tone }: { tone: "light" | "dark" }) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect
        x="16"
        y="1.5"
        width="20.5"
        height="20.5"
        rx="4"
        transform="rotate(45 16 1.5)"
        className={tone === "light" ? "fill-brand-600" : "fill-brand-500"}
      />
      <rect
        x="16"
        y="9.8"
        width="8.7"
        height="8.7"
        rx="2"
        transform="rotate(45 16 9.8)"
        className={tone === "light" ? "fill-white" : "fill-ink-950"}
      />
    </svg>
  );
}

export function Logo({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-md",
        className
      )}
      aria-label={`${siteConfig.name} — home`}
    >
      <LogoMark tone={tone} />
      <span
        className={cn(
          "text-[1.0625rem] font-semibold tracking-tight",
          tone === "light" ? "text-ink-950" : "text-white"
        )}
      >
        {siteConfig.name}
      </span>
    </Link>
  );
}
