import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/common/PageHeader";
import { Container } from "@/components/ui/Container";
import { Prose } from "@/components/ui/Prose";
import { Section } from "@/components/ui/Section";
import { createMetadata } from "@/lib/seo";
import { companyRegistry, registeredAddress, siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "How Lennart Kits collects, uses and protects personal data, including the legal bases for processing and the rights available under Indonesian Law No. 27 of 2022 on Personal Data Protection.",
  path: "/privacy",
});

const LAST_UPDATED = "31 July 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description={`How personal data is collected, used and protected. Last updated ${LAST_UPDATED}.`}
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ]}
      />

      <Section>
        <Container width="narrow">
          <Prose>
            <h2>1. Data controller</h2>
            <p>
              The personal data controller responsible for personal data
              processed through this website is {siteConfig.name}, a{" "}
              {companyRegistry.legalFormShort} registered in the{" "}
              {companyRegistry.jurisdiction} under{" "}
              {companyRegistry.registryLabel} {companyRegistry.registryCode}.
              Further registration details are published on the{" "}
              <Link href="/company">Company Information</Link> page.
            </p>
            <ul>
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
                {companyRegistry.responsiblePerson},{" "}
                {companyRegistry.responsiblePersonPosition}
              </li>
            </ul>
            <p>
              This policy is issued under Law of the Republic of Indonesia No. 27
              of 2022 on Personal Data Protection (Undang-Undang Pelindungan Data
              Pribadi, the &ldquo;PDP Law&rdquo;). Data protection enquiries are
              handled directly at the contact details above.
            </p>

            <h2>2. Data we process</h2>
            <h3>2.1 Information you provide</h3>
            <p>
              When you use the contact form or send an email, we process the
              name, company name, email address and the content of your message.
              Providing this information is voluntary, but without it we cannot
              respond to your enquiry.
            </p>
            <h3>2.2 Information collected automatically</h3>
            <p>
              Our hosting provider records technical server logs for security
              and reliability purposes. These logs may include the IP address,
              the requested URL, the timestamp, the referring page and browser
              user-agent details. We do not use these logs to build profiles.
            </p>
            <h3>2.3 Client project data</h3>
            <p>
              Where personal data is processed on behalf of a client during a
              consulting engagement, we act as a personal data processor under a
              separate data processing agreement, and that agreement governs the
              processing — not this policy. Where a client engagement is subject
              to another data protection regime, the terms of that agreement
              apply in addition to the PDP Law.
            </p>

            <h2>3. Purposes and legal bases</h2>
            <p>
              Each processing activity relies on one of the lawful bases set out
              in Article 20 of the PDP Law:
            </p>
            <table>
              <thead>
                <tr>
                  <th>Purpose</th>
                  <th>Legal basis (PDP Law)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Responding to enquiries and preparing proposals</td>
                  <td>
                    Fulfilment of a request made prior to entering an agreement;
                    legitimate interest in business communication
                  </td>
                </tr>
                <tr>
                  <td>Performing and administering client contracts</td>
                  <td>Performance of a contractual obligation</td>
                </tr>
                <tr>
                  <td>Website security, abuse prevention and availability</td>
                  <td>
                    Legitimate interest in operating a secure and available
                    service
                  </td>
                </tr>
                <tr>
                  <td>Accounting and statutory record keeping</td>
                  <td>Compliance with a legal obligation</td>
                </tr>
              </tbody>
            </table>

            <h2>4. Recipients and processors</h2>
            <p>
              We do not sell personal data. Data is shared only with service
              providers acting on our instructions under a data processing
              agreement:
            </p>
            <ul>
              <li>
                <strong>Hosting and content delivery</strong> — the platform
                serving this website processes request data and server logs.
              </li>
              <li>
                <strong>Email delivery and mailbox provider</strong> — used to
                transmit and store contact form submissions and correspondence.
              </li>
              <li>
                <strong>Accounting services</strong> — where invoice-related
                data must be recorded for statutory purposes.
              </li>
            </ul>
            <p>
              A current list of processors is available on request from{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
            </p>

            <h2>5. International transfers</h2>
            <p>
              Some providers may process data outside Indonesia. Where this
              occurs, the transfer is made only where the receiving jurisdiction
              provides a level of personal data protection at least equivalent to
              the PDP Law, or on the basis of adequate binding safeguards agreed
              with the recipient, or with your consent, as required by the PDP
              Law.
            </p>

            <h2>6. Retention</h2>
            <ul>
              <li>
                Enquiry correspondence: retained while a business relationship
                is being discussed and for up to 24 months afterwards, unless
                deletion is requested earlier.
              </li>
              <li>
                Contract and project records: retained for the duration of the
                engagement and afterwards for the period required by Indonesian
                company-document and tax record-keeping rules.
              </li>
              <li>
                Server logs: retained for a short technical period defined by the
                hosting provider, typically no longer than 30 days.
              </li>
            </ul>

            <h2>7. Your rights</h2>
            <p>
              As a personal data subject under the PDP Law you may request
              information about the processing of your personal data, access to
              it, and its correction or erasure. You may request that processing
              be restricted, object to processing, withdraw consent where the
              processing relies on it, and request that your data be transferred
              to another controller where technically possible. Withdrawing
              consent does not affect processing carried out beforehand.
            </p>
            <p>
              To exercise these rights, contact{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. We
              acknowledge requests without undue delay and respond within 14
              days, or tell you within that period if more time is needed.
            </p>
            <p>
              If a personal data breach occurs, affected data subjects are
              notified in writing within 3 × 24 hours, as required by the PDP
              Law.
            </p>
            <p>
              You may also lodge a complaint with the supervisory authority
              designated under the PDP Law, and you retain the right to seek
              compensation through the courts of the{" "}
              {companyRegistry.jurisdiction}.
            </p>

            <h2>8. Cookies</h2>
            <p>
              This website does not use advertising or analytics cookies. See the{" "}
              <Link href="/cookies">Cookie Policy</Link> for details.
            </p>

            <h2>9. Security</h2>
            <p>
              We apply technical and organisational measures appropriate to the
              risk, including encrypted transport (TLS), access control on
              systems holding client data, least-privilege credentials, and
              secret management separated from application source code.
            </p>

            <h2>10. Changes to this policy</h2>
            <p>
              This policy may be updated to reflect changes in our services or
              legal requirements. The date at the top of this page shows when it
              was last revised.
            </p>
          </Prose>
        </Container>
      </Section>
    </>
  );
}
