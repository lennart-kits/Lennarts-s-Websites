import type { ReactNode } from "react";

import { Icon, type IconName } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
  /** Adds a hover lift — only for cards that are actually clickable. */
  interactive?: boolean;
  tone?: "light" | "dark";
};

export function Card({
  children,
  className,
  interactive = false,
  tone = "light",
}: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border p-6 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:p-7",
        tone === "light"
          ? "border-ink-200/70 bg-white shadow-card"
          : "border-white/10 bg-white/[0.04]",
        interactive &&
          (tone === "light"
            ? "hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lifted"
            : "hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07]"),
        className
      )}
    >
      {children}
    </div>
  );
}

type CardIconProps = {
  name: IconName;
  tone?: "light" | "dark";
  className?: string;
};

export function CardIcon({ name, tone = "light", className }: CardIconProps) {
  return (
    <span
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-xl",
        tone === "light"
          ? "bg-brand-50 text-brand-700 ring-1 ring-brand-100"
          : "bg-white/10 text-brand-200 ring-1 ring-white/10",
        className
      )}
    >
      <Icon name={name} size={22} />
    </span>
  );
}
