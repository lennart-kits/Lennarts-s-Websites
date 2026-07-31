import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/common/PageHeader";
import { Container } from "@/components/ui/Container";
import { Prose } from "@/components/ui/Prose";
import { Section } from "@/components/ui/Section";
import { createMetadata } from "@/lib/seo";
import { companyRegistry, siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Cookie Policy",
  description:
    "How this website uses cookies and similar technologies. Lennart Kits does not use advertising or tracking cookies.",
  path: "/cookies",
});

const LAST_UPDATED = "31 July 2026";

export default function CookiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Cookie Policy"
        description={`How this website uses cookies and similar technologies. Last updated ${LAST_UPDATED}.`}
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Cookie Policy", path: "/cookies" },
        ]}
      />

      <Section>
        <Container width="narrow">
          <Prose>
            <h2>1. Summary</h2>
            <p>
              This website is operated by {siteConfig.name},{" "}
              {companyRegistry.legalFormShort}, registry code{" "}
              {companyRegistry.registryCode}, registered in the{" "}
              {companyRegistry.jurisdiction}.
            </p>
            <p>
              The site is built to work without tracking. It does not use
              advertising cookies, analytics cookies, social media pixels or
              cross-site tracking technologies, and it embeds no third-party
              scripts. For that reason no consent banner is presented — there is
              nothing to consent to.
            </p>

            <h2>2. What cookies are</h2>
            <p>
              Cookies are small text files stored by your browser when you visit
              a website. Similar technologies include local storage and session
              storage. They can be used to keep a session active, remember
              preferences, or track behaviour across sites.
            </p>

            <h2>3. Cookies used on this website</h2>
            <table>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Used</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Strictly necessary</td>
                  <td>Only if required</td>
                  <td>
                    Security and abuse protection for form submissions. Exempt
                    from consent under Art. 5(3) of the ePrivacy Directive.
                  </td>
                </tr>
                <tr>
                  <td>Preferences</td>
                  <td>No</td>
                  <td>Not used.</td>
                </tr>
                <tr>
                  <td>Analytics / statistics</td>
                  <td>No</td>
                  <td>Not used.</td>
                </tr>
                <tr>
                  <td>Marketing / advertising</td>
                  <td>No</td>
                  <td>Not used.</td>
                </tr>
              </tbody>
            </table>

            <h2>4. Server logs</h2>
            <p>
              Independently of cookies, the hosting provider keeps technical
              request logs for security and reliability. This is described in
              the <Link href="/privacy">Privacy Policy</Link>.
            </p>

            <h2>5. Managing cookies in your browser</h2>
            <p>
              You can block or delete cookies through your browser settings.
              Because this website does not depend on non-essential cookies,
              blocking them will not affect how it works.
            </p>

            <h2>6. If this changes</h2>
            <p>
              Should analytics or other non-essential technologies be introduced
              in future, this page will be updated and a consent mechanism will
              be presented before any such cookie is set. Questions can be sent
              to <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
            </p>
          </Prose>
        </Container>
      </Section>
    </>
  );
}
