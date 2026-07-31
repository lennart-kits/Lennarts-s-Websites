"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { primaryNav } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Desktop navigation with an active-route indicator. */
export function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-1">
      {primaryNav.map((item) => {
        const isActive =
          pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "relative rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200",
                isActive
                  ? "text-ink-950"
                  : "text-ink-600 hover:text-ink-950"
              )}
            >
              {item.label}
              <span
                className={cn(
                  "absolute inset-x-3 -bottom-px h-px origin-left scale-x-0 bg-brand-600 transition-transform duration-300",
                  isActive && "scale-x-100"
                )}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
