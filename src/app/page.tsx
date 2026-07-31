import type { Metadata } from "next";

import { CtaSection } from "@/components/common/CtaSection";
import { CompanyIntro } from "@/components/home/CompanyIntro";
import { EngagementModels } from "@/components/home/EngagementModels";
import { Hero } from "@/components/home/Hero";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { TechnologyStrip } from "@/components/home/TechnologyStrip";
import { ValueGrid } from "@/components/home/ValueGrid";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: siteConfig.url },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechnologyStrip />
      <ServicesOverview />
      <CompanyIntro />
      <ProcessSteps />
      <ValueGrid />
      <EngagementModels />
      <CtaSection />
    </>
  );
}
