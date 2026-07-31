import { Logo } from "@/components/layout/Logo";
import { MobileNav } from "@/components/layout/MobileNav";
import { NavLinks } from "@/components/layout/NavLinks";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-200/80 bg-white/85 backdrop-blur-md">
      <Container width="wide">
        <div className="flex h-16 items-center justify-between gap-4">
          <Logo />

          <nav aria-label="Primary" className="hidden lg:block">
            <NavLinks />
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 lg:flex">
              <ButtonLink href="/contact" variant="ghost">
                Contact
              </ButtonLink>
              <ButtonLink href="/contact?intent=consultation">
                Request Consultation
              </ButtonLink>
            </div>
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
