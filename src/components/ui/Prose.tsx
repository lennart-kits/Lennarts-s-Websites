import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Long-form text styling for legal and informational pages.
 * Implemented with child selectors instead of the typography plugin to keep
 * the dependency list minimal and the rhythm aligned with the design tokens.
 */
export function Prose({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "text-[0.9375rem] leading-relaxed text-ink-700",
        "[&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-ink-950",
        "[&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-ink-900",
        "[&_p]:my-4",
        "[&_ul]:my-4 [&_ul]:space-y-2 [&_ul]:pl-5",
        "[&_ol]:my-4 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5",
        "[&_li]:relative [&_ul>li]:list-disc",
        "[&_a]:font-medium [&_a]:text-brand-700 [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-brand-800",
        "[&_strong]:font-semibold [&_strong]:text-ink-900",
        "[&_table]:my-6 [&_table]:w-full [&_table]:border-collapse [&_table]:text-left",
        "[&_th]:border-b [&_th]:border-ink-200 [&_th]:py-2 [&_th]:pr-4 [&_th]:text-xs [&_th]:font-semibold [&_th]:tracking-wide [&_th]:text-ink-500 [&_th]:uppercase",
        "[&_td]:border-b [&_td]:border-ink-100 [&_td]:py-3 [&_td]:pr-4 [&_td]:align-top",
        className
      )}
    >
      {children}
    </div>
  );
}
