import { ImageResponse } from "next/og";

import { companyRegistry, siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social preview card generated at build time — no binary asset to maintain,
 * and the wording always matches the site configuration.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#080d17",
          backgroundImage:
            "radial-gradient(circle at 12% 0%, rgba(47,75,220,0.35), transparent 55%)",
          padding: "72px",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 44,
              height: 44,
              backgroundColor: "#2f4bdc",
              borderRadius: 10,
              transform: "rotate(45deg)",
            }}
          />
          <div style={{ fontSize: 34, fontWeight: 600, letterSpacing: -0.5 }}>
            {siteConfig.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 600,
              letterSpacing: -2,
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            {siteConfig.tagline}
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 28,
              color: "#adb9cd",
              maxWidth: 860,
              lineHeight: 1.4,
            }}
          >
            Artificial intelligence, software development, machine learning and
            cloud technologies.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.14)",
            paddingTop: 28,
            fontSize: 22,
            color: "#7f8fab",
          }}
        >
          <div style={{ display: "flex" }}>
            {siteConfig.url.replace(/^https?:\/\//, "")}
          </div>
          <div style={{ display: "flex" }}>
            {siteConfig.country} · Reg. {companyRegistry.registryCode}
          </div>
        </div>
      </div>
    ),
    size
  );
}
