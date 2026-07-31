import { cn } from "@/lib/utils";

type TechBadgeProps = {
  label: string;
  tone?: "light" | "dark";
  className?: string;
};

/** Neutral technology chip — no vendor logos, no implied partnerships. */
export function TechBadge({ label, tone = "light", className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-1 font-mono text-xs tracking-tight",
        tone === "light"
          ? "bg-ink-50 text-ink-700 ring-1 ring-ink-200/80 ring-inset"
          : "bg-white/[0.06] text-ink-200 ring-1 ring-white/10 ring-inset",
        className
      )}
    >
      {label}
    </span>
  );
}
