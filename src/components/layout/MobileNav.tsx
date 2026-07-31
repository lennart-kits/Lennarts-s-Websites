"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { primaryNav, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpen(false), []);

  // Close the menu whenever navigation completes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Escape to dismiss, and keep the page behind the overlay from scrolling.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        triggerRef.current?.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    panelRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-ink-200 bg-white text-ink-800 transition-colors hover:bg-ink-50"
      >
        <Icon name={open ? "close" : "menu"} size={20} />
      </button>

      {/* Overlay */}
      <div
        onClick={close}
        aria-hidden="true"
        className={cn(
          "fixed inset-0 top-16 z-40 bg-ink-950/25 backdrop-blur-[2px] transition-opacity duration-200",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      />

      {/* Panel */}
      <div
        id="mobile-navigation"
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal={open}
        aria-label="Site navigation"
        className={cn(
          "fixed inset-x-0 top-16 z-50 origin-top overflow-y-auto border-b border-ink-200 bg-white shadow-lifted transition-all duration-250 ease-[cubic-bezier(0.22,1,0.36,1)]",
          "max-h-[calc(100dvh-4rem)]",
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        )}
      >
        <nav className="px-5 py-6 sm:px-8">
          <ul className="flex flex-col">
            {primaryNav.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <li key={item.href} className="border-b border-ink-100 last:border-0">
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between py-3.5 text-base font-medium transition-colors",
                      isActive ? "text-brand-700" : "text-ink-800"
                    )}
                  >
                    {item.label}
                    <Icon
                      name="arrowRight"
                      size={18}
                      className="text-ink-300"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 flex flex-col gap-3">
            <ButtonLink href="/contact" size="lg" fullWidth>
              Contact Us
            </ButtonLink>
            <ButtonLink
              href="/contact?intent=consultation"
              variant="secondary"
              size="lg"
              fullWidth
            >
              Request Consultation
            </ButtonLink>
          </div>

          <p className="mt-6 text-sm text-ink-500">
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-medium text-ink-700 underline underline-offset-4"
            >
              {siteConfig.email}
            </a>
          </p>
        </nav>
      </div>
    </div>
  );
}
