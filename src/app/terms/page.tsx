import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/common/PageHeader";
import { Container } from "@/components/ui/Container";
import { Prose } from "@/components/ui/Prose";
import { Section } from "@/components/ui/Section";
import { createMetadata } from "@/lib/seo";
import { companyRegistry, registeredAddress, siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Terms of Service",
  description:
    "Terms governing the use of the Lennart Kits website and the general framework for professional services provided by the company.",
  path: "/terms",
});

const LAST_UPDATED = "31 July 2026";

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Service"
        description={`Terms governing use of this website and the framework for professional services. Last updated ${LAST_UPDATED}.`}
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms" },
        ]}
      />

      <Section>
        <Container width="narrow">
          <Prose>
            <h2>1. Provider</h2>
            <p>
              This website is operated by {siteConfig.name}, a sole proprietor
              ({companyRegistry.legalFormShort}) registered in the{" "}
              {companyRegistry.jurisdiction}:
            </p>
            <ul>
              <li>
                <strong>Registry code:</strong> {companyRegistry.registryCode} (
                {companyRegistry.supervisoryRegister})
              </li>
              <li>
                <strong>VAT number:</strong> {companyRegistry.vatNumber}
              </li>
              <li>
                <strong>Registered address:</strong>{" "}
                {registeredAddress.oneLine}
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
              <li>
                <strong>Website:</strong>{" "}
                <a href={siteConfig.url}>
                  {siteConfig.url.replace(/^https?:\/\//, "")}
                </a>
              </li>
              <li>
                <strong>Responsible person:</strong>{" "}
                {companyRegistry.responsiblePerson}
              </li>
            </ul>
            <p>
              Further registration details are published on the{" "}
              <Link href="/company">Company Information</Link> page.
            </p>

            <h2>2. Scope of these terms</h2>
            <p>
              These terms apply to your use of this website. They do not
              themselves create a services contract. Professional services are
              provided exclusively under a separate written agreement signed by
              both parties, which defines scope, deliverables, timelines, fees,
              confidentiality, intellectual property and liability. Where a
              signed agreement conflicts with these terms, the signed agreement
              prevails.
            </p>

            <h2>3. Website content</h2>
            <p>
              The content published here describes our services and technical
              capabilities. It is provided for general information and does not
              constitute technical, legal, financial or other professional
              advice, and it should not be relied upon as the sole basis for a
              business decision.
            </p>
            <p>
              No content on this website constitutes a binding offer. Estimates,
              timelines and technical recommendations are given only in writing,
              in the context of a specific engagement.
            </p>

            <h2>4. Intellectual property</h2>
            <p>
              The text, design, source code and graphical elements of this
              website are owned by {siteConfig.name} unless stated otherwise.
              You may view and print pages for your own business evaluation. Any
              other reproduction, distribution or modification requires prior
              written permission.
            </p>
            <p>
              Product, technology and company names referenced on this website
              are the property of their respective owners. Their use is
              descriptive and does not imply partnership, endorsement or
              certification.
            </p>

            <h2>5. Acceptable use</h2>
            <ul>
              <li>
                Do not attempt to gain unauthorised access to the website or its
                underlying infrastructure.
              </li>
              <li>
                Do not use automated systems to submit content through the
                contact form, or send unsolicited commercial messages.
              </li>
              <li>
                Do not use the website in a way that impairs its availability
                for other users.
              </li>
            </ul>

            <h2>6. Third-party links</h2>
            <p>
              This website may link to external resources that we do not
              control. We are not responsible for their content, availability or
              privacy practices.
            </p>

            <h2>7. Availability and disclaimer</h2>
            <p>
              We aim to keep the website available and its content accurate, but
              it is provided on an &ldquo;as available&rdquo; basis. We do not
              warrant uninterrupted availability or that the content is free of
              errors or omissions.
            </p>

            <h2>8. Limitation of liability</h2>
            <p>
              To the extent permitted by applicable law, {siteConfig.name} is
              not liable for indirect or consequential loss arising from use of
              this website, including loss of profit, revenue or data. Nothing
              in these terms excludes liability for intentional misconduct or
              gross negligence, or any other liability that cannot lawfully be
              excluded. Liability arising from a client engagement is governed
              by the signed services agreement for that engagement.
            </p>

            <h2>9. Data protection</h2>
            <p>
              Personal data submitted through this website is processed as
              described in our <Link href="/privacy">Privacy Policy</Link>.
            </p>

            <h2>10. Governing law and jurisdiction</h2>
            <p>
              These terms are governed by the laws of the{" "}
              {companyRegistry.jurisdiction}. Disputes that cannot be resolved
              amicably fall under the jurisdiction of Harju County Court (Harju
              Maakohus), the court of first instance competent for the
              registered seat of the provider, without prejudice to mandatory
              consumer protection rules that may apply.
            </p>

            <h2>11. Changes</h2>
            <p>
              We may amend these terms to reflect changes in our services or
              legal requirements. The version published on this page at the time
              of your visit is the one that applies.
            </p>
          </Prose>
        </Container>
      </Section>
    </>
  );
}
