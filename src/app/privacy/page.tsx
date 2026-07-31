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
    "How Lennart Kits collects, uses and protects personal data, including the legal bases for processing and the rights available under the GDPR.",
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
            <h2>1. Controller</h2>
            <p>
              The controller responsible for personal data processed through
              this website is {siteConfig.name},{" "}
              {companyRegistry.legalFormShort}, registered in the{" "}
              {companyRegistry.jurisdiction} under registry code{" "}
              {companyRegistry.registryCode} (VAT number{" "}
              {companyRegistry.vatNumber}). Further registration details are
              published on the <Link href="/company">Company Information</Link>{" "}
              page.
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
                {companyRegistry.responsiblePerson}
              </li>
            </ul>
            <p>
              No separate data protection officer is appointed; data protection
              enquiries are handled directly at the address above.
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
              consulting engagement, we act as a processor under a separate data
              processing agreement, and that agreement governs the processing —
              not this policy.
            </p>

            <h2>3. Purposes and legal bases</h2>
            <table>
              <thead>
                <tr>
                  <th>Purpose</th>
                  <th>Legal basis (GDPR)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Responding to enquiries and preparing proposals</td>
                  <td>
                    Art. 6(1)(b) — steps prior to entering a contract; Art.
                    6(1)(f) — legitimate interest in business communication
                  </td>
                </tr>
                <tr>
                  <td>Performing and administering client contracts</td>
                  <td>Art. 6(1)(b) — performance of a contract</td>
                </tr>
                <tr>
                  <td>Website security, abuse prevention and availability</td>
                  <td>
                    Art. 6(1)(f) — legitimate interest in operating a secure
                    service
                  </td>
                </tr>
                <tr>
                  <td>Accounting and statutory record keeping</td>
                  <td>Art. 6(1)(c) — compliance with a legal obligation</td>
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
              Some providers may process data outside the European Economic
              Area. Where this occurs, transfers are based on an adequacy
              decision of the European Commission or on Standard Contractual
              Clauses together with any additional safeguards required.
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
                engagement and afterwards as required by Estonian accounting and
                limitation-period rules.
              </li>
              <li>
                Server logs: retained for a short technical period defined by the
                hosting provider, typically no longer than 30 days.
              </li>
            </ul>

            <h2>7. Your rights</h2>
            <p>
              Under the GDPR you may request access to your personal data, its
              rectification or erasure, restriction of processing, data
              portability, and you may object to processing based on legitimate
              interests. Where processing is based on consent, you may withdraw
              that consent at any time without affecting the lawfulness of
              processing carried out beforehand.
            </p>
            <p>
              To exercise these rights, contact{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. We
              respond within one month, as required by Art. 12(3) GDPR.
            </p>
            <p>
              You also have the right to lodge a complaint with a supervisory
              authority. In Estonia this is the Estonian Data Protection
              Inspectorate (Andmekaitse Inspektsioon), Tatari 39, 10134 Tallinn.
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
