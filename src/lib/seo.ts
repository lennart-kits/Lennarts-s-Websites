import type { Metadata } from "next";

import { companyRegistry, registeredAddress, siteConfig } from "@/lib/site";

type PageMetaInput = {
  title: string;
  description: string;
  /** Route path, e.g. "/services". Used for the canonical URL. */
  path: string;
  keywords?: string[];
};

/**
 * Builds consistent per-page metadata: canonical URL, Open Graph and Twitter
 * cards all derive from the same values so they can never drift apart.
 */
export function createMetadata({
  title,
  description,
  path,
  keywords,
}: PageMetaInput): Metadata {
  const url = `${siteConfig.url}${path === "/" ? "" : path}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
    },
  };
}

/**
 * Organization structured data. Only verifiable, non-invented facts are
 * emitted — registry identifiers come from the Estonian Business Register, and
 * there are no employee counts, revenue figures or ratings.
 */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    email: siteConfig.email,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    /** Estonian registry code (registrikood). */
    identifier: {
      "@type": "PropertyValue",
      name: "Estonian Business Register code",
      value: companyRegistry.registryCode,
    },
    taxID: companyRegistry.registryCode,
    vatID: companyRegistry.vatNumber,
    founder: {
      "@type": "Person",
      name: companyRegistry.responsiblePerson,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: registeredAddress.street,
      addressLocality: registeredAddress.locality,
      addressRegion: registeredAddress.region,
      postalCode: registeredAddress.postalCode,
      addressCountry: registeredAddress.countryCode,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "business enquiries",
      email: siteConfig.email,
      availableLanguage: "English",
      areaServed: "Worldwide",
    },
    areaServed: [
      { "@type": "Place", name: "Europe" },
      { "@type": "Place", name: "Worldwide" },
    ],
    knowsAbout: [
      "Artificial intelligence engineering",
      "Machine learning solutions",
      "Large language model applications",
      "Retrieval augmented generation",
      "Backend software development",
      "API development",
      "Cloud infrastructure",
      "DevOps automation",
    ],
    serviceType: [
      "AI engineering",
      "Software development",
      "Machine learning solutions",
      "Cloud and infrastructure",
      "Technical consulting",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    inLanguage: "en",
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}
