# Lennart Kits — Company Website

Official website for **Lennart Kits**, an Indonesia-based technology company
specializing in artificial intelligence, software engineering, machine learning
solutions, and modern cloud technologies.

Built with Next.js (App Router), TypeScript and Tailwind CSS. Statically
rendered, no third-party scripts, no tracking cookies.

---

## 1. Company data

All company information is defined **once** in `src/lib/site.ts` and rendered
from there by the footer, `/company`, `/about`, `/contact`, the legal pages, the
JSON-LD structured data and the generated social card. Nothing is hard-coded in
a component, so a registry change is a one-file edit.

| Field | Value |
| --- | --- |
| Company | Lennart Kits |
| Legal form | Perseroan Perorangan (Single-Shareholder Limited Liability Company) |
| Registration type | NIB (Business Identification Number) |
| NIB | 1607260079991 |
| Registered address | Jalan Kakak Tua No.474, RT 005 RW 009, Kelurahan Kranji, Kecamatan Bekasi Barat, Kota Bekasi, Jawa Barat 17134, Indonesia |
| Jurisdiction | Republic of Indonesia |
| Responsible person | MUHAMMAD FAWZAN AZHIMA, Director |
| Email | lennartkitssoletrader@gmail.com |
| Website | https://lennartkits.vercel.app |

There is deliberately **no tax-number field**: only the NIB is published, and no
component renders a tax row anywhere on the site. If a tax identifier is added
later, add it to `companyRegistry` in `src/lib/site.ts` and render it in the
places that list registration details.

These values must always match the official registration — they are what a
payment provider or financial platform (Wise Business, Stripe and similar)
checks during verification. Never publish a value that cannot be matched there.

### Legal pages

`/privacy`, `/terms` and `/cookies` carry the full registered identification of
the provider and contain no placeholders. They are written for an Indonesian
company: the privacy policy is framed around Law No. 27 of 2022 on Personal Data
Protection (PDP Law), and the terms name the Bekasi District Court as the
competent forum. Have them reviewed by a qualified Indonesian adviser before
relying on them in a dispute.

---

## 2. Installation

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
```

Requires Node.js 20 or newer.

## 3. Environment variables

| Variable | Scope | Required | Purpose |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | public | yes | Canonical URL for metadata, sitemap, robots |
| `CONTACT_EMAIL_TO` | server | for the form | Mailbox receiving contact submissions |
| `RESEND_API_KEY` | server | for the form | Resend API key — never exposed to the browser |
| `RESEND_FROM` | server | for the form | Sender address on a domain verified in Resend |

If the email variables are absent, the contact form still renders and validates,
but tells the visitor to email the business address directly rather than
silently discarding the message. Swapping providers means editing
`src/lib/email.ts` only.

## 4. Scripts

```bash
npm run dev         # development server
npm run build       # production build
npm run start       # serve the production build
npm run lint        # ESLint
npm run typecheck   # tsc --noEmit
```

## 5. Project structure

```
src/
  app/
    actions/contact.ts        Server Action: validate, rate-limit, send
    layout.tsx                Root layout, fonts, metadata, JSON-LD
    page.tsx                  Homepage
    about|services|technology|company|contact/
    privacy|terms|cookies/    Legal pages
    icon.tsx                  Favicon (generated)
    opengraph-image.tsx       Social card (generated at build)
    sitemap.ts, robots.ts     SEO route handlers
    not-found.tsx, error.tsx  404 and error boundary
  components/
    layout/                   Header, footer, navigation, logo
    home/                     Homepage sections
    services/                 Service card
    contact/                  Contact form (Client Component)
    common/                   Page header, CTA band
    ui/                       Button, Card, Container, Section, Field, Icon…
  content/                    Site copy as typed data (services, technology…)
  lib/                        site config, SEO helpers, email, rate limit, validation
```

**Server Components by default.** Only three components are client-side:
`ContactForm` (form state), `MobileNav` (menu state) and `NavLinks` (active
route). Everything else is rendered on the server.

**Copy lives in `src/content/`.** Editing service or technology text does not
require touching a component.

## 6. Design system

Tokens are defined once in `src/app/globals.css` under `@theme` (Tailwind v4):

- **Brand** — cobalt `brand-50…950`, primary action colour `brand-600`
- **Ink** — near-black navy `ink-50…950` for text, borders and dark panels
- **Support** — muted teal, used sparingly for status accents
- **Type** — Inter (UI) and IBM Plex Mono (labels, technology names), both
  self-hosted through `next/font`
- **Elevation** — two soft shadows (`shadow-card`, `shadow-lifted`)

Add or change a colour in `@theme` and it propagates across the site.

## 7. Accessibility & performance

- Semantic landmarks, skip link, visible focus rings, `aria-current` on the
  active nav item, labelled form fields with inline error messages
- Escape-to-close and scroll lock on the mobile menu
- `prefers-reduced-motion` disables all animation
- No third-party scripts, no web fonts fetched at runtime, no client-side data
  fetching; every page except `/contact` is statically prerendered

## 8. Security

- Strict security headers set in `next.config.ts` (HSTS, `X-Frame-Options`,
  `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`)
- Contact form: server-side Zod validation, honeypot field, in-memory
  fixed-window rate limit, control-character stripping before the message is
  composed
- Secrets are read server-side only; nothing sensitive is prefixed
  `NEXT_PUBLIC_`
- Errors are logged server-side; visitors see a generic message, never a stack
  trace

The rate limiter is per server instance. On a multi-instance deployment, back it
with Redis or a platform-level rule — the interface in `src/lib/rate-limit.ts`
stays the same.

## 9. Deployment (Vercel)

1. Push the repository to GitHub/GitLab.
2. Import the project in Vercel — the framework is detected automatically.
3. Add the environment variables from section 3 for the Production environment.
4. Add the domain and point DNS at Vercel.
5. Set `NEXT_PUBLIC_SITE_URL` to the final domain and redeploy so canonical
   URLs, the sitemap and `robots.txt` are correct.

Any Node.js host works equally well: `npm run build && npm run start`.

### Post-deploy checklist

- [ ] `https://<domain>/sitemap.xml` and `/robots.txt` return the live domain
- [ ] Contact form delivers a test message to `CONTACT_EMAIL_TO`
- [ ] `/company` matches the current NIB registration field for field
- [ ] Legal pages reviewed by a qualified adviser
- [ ] Domain verified in Resend so the form sender address passes SPF/DKIM
      (a `*.vercel.app` domain cannot be verified — a custom domain is needed)

## 10. Content conventions

The site makes **no unverifiable claims** — no client logos, testimonials,
revenue figures, team-size claims or certifications. Statements describe process
and capability, which is what a compliance reviewer can check. Keep it that way:
add claims only when there is evidence to support them.
