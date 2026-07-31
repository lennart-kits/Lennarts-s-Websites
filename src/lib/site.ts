/**
 * Single source of truth for company-wide facts, navigation and contact data.
 *
 * Every value below is taken from the company's official registration in the
 * Republic of Indonesia — Business Identification Number (NIB) 1607260079991.
 * Nothing here may be invented or approximated: this file is what a payment
 * provider or financial platform reads when verifying the business, so a value
 * that cannot be matched against the registration is worse than no value.
 */

export const siteConfig = {
  name: "Lennart Kits",
  /** Registered legal name, used in structured data and legal pages. */
  legalName: "Lennart Kits",
  /** One-line legal identification, used where a short attribution is needed. */
  legalNameNote:
    "Lennart Kits, a Perseroan Perorangan registered in the Republic of Indonesia under Business Identification Number (NIB) 1607260079991.",
  tagline: "AI Engineering & Software Development Services",
  description:
    "Lennart Kits is an Indonesia-based technology company specializing in artificial intelligence, software engineering, machine learning solutions, and modern cloud technologies. The company provides professional technology consulting and software development services for businesses.",
  shortDescription:
    "Indonesia-based technology company for artificial intelligence, software engineering, machine learning solutions and modern cloud technologies.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://lennartkits.vercel.app",
  locale: "en",
  country: "Indonesia",
  countryCode: "ID",
  foundedNote: "Independent technology company operating from Indonesia.",
  email: "lennartkitssoletrader@gmail.com",
  industry: "Information Technology Services",
  /** KBLI-style activity description — descriptive, not a claimed code. */
  businessActivity:
    "Software development, AI engineering, machine learning solutions, cloud technologies, and technology consulting",
} as const;

/**
 * Registered address, held in parts so that structured data, the footer and the
 * Company Information page all render the same address from one definition.
 */
export const registeredAddress = {
  street: "Jalan Kakak Tua No.474",
  neighbourhood: "RT 005 RW 009",
  village: "Kelurahan Kranji",
  district: "Kecamatan Bekasi Barat",
  city: "Kota Bekasi",
  province: "Jawa Barat",
  postalCode: "17134",
  country: "Indonesia",
  countryCode: "ID",
  /** Display order used on the site, as recorded in the registration. */
  lines: [
    "Jalan Kakak Tua No.474",
    "RT 005 RW 009",
    "Kelurahan Kranji",
    "Kecamatan Bekasi Barat",
    "Kota Bekasi",
    "Jawa Barat 17134",
    "Indonesia",
  ],
  oneLine:
    "Jalan Kakak Tua No.474, RT 005 RW 009, Kelurahan Kranji, Kecamatan Bekasi Barat, Kota Bekasi, Jawa Barat 17134, Indonesia",
  /** schema.org PostalAddress mapping for the street-level components. */
  schemaStreetAddress:
    "Jalan Kakak Tua No.474, RT 005 RW 009, Kelurahan Kranji, Kecamatan Bekasi Barat",
} as const;

/** Registration details as recorded against the company's NIB. */
export const companyRegistry = {
  legalForm: "Perseroan Perorangan (Single-Shareholder Limited Liability Company)",
  /** Short form for compact, inline contexts. */
  legalFormShort: "Perseroan Perorangan",
  /** Label for the registration identifier — this is an NIB, not a tax number. */
  registryLabel: "Business Identification Number (NIB)",
  registrationType: "NIB (Business Identification Number)",
  registryCode: "1607260079991",
  registeredAddress: registeredAddress.oneLine,
  jurisdiction: "Republic of Indonesia",
  responsiblePerson: "MUHAMMAD FAWZAN AZHIMA",
  responsiblePersonPosition: "Director",
} as const;

export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export const primaryNav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Technology", href: "/technology" },
  { label: "About", href: "/about" },
  { label: "Company", href: "/company" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Services",
    items: [
      { label: "AI Solutions", href: "/services#ai-solutions" },
      { label: "Software Engineering", href: "/services#software-engineering" },
      { label: "Cloud Solutions", href: "/services#cloud-solutions" },
      { label: "Technical Consulting", href: "/services#technical-consulting" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Technology Expertise", href: "/technology" },
      { label: "Company Information", href: "/company" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
];
