import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { JsonLd } from "@/components/JsonLd";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://nomadlyfr.vercel.app"
  ),
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  title: {
    default: "Nomadly — Strategic Intelligence for Space Markets",
    template: "%s | Nomadly",
  },
  description:
    "Nomadly is an innovative strategic intelligence consulting firm that democratizes access to global space and telecommunications markets through a network of experts, AI-powered regulatory monitoring, and data-driven analysis across Europe, Africa, and the Americas.",
  keywords: [
    "space technology consulting",
    "aerospace export strategy",
    "space market intelligence",
    "satellite telecommunications",
    "international space trade",
    "regulatory compliance space",
    "ITAR EAR compliance",
    "space industry consulting France",
    "NewSpace startups",
    "space market expansion",
    "strategic intelligence aerospace",
    "Nomadly",
  ],
  authors: [{ name: "Nomadly SAS", url: "https://www.nomadly.fr" }],
  creator: "Nomadly SAS",
  publisher: "Nomadly SAS",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: "https://www.nomadly.fr",
    languages: { "en": "https://www.nomadly.fr", "fr": "https://www.nomadly.fr" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "fr_FR",
    url: "https://www.nomadly.fr",
    siteName: "Nomadly",
    title: "Nomadly — Strategic Intelligence for Space Markets",
    description:
      "Democratizing access to global space and telecommunications markets through expert networks, AI-powered regulatory monitoring, and strategic consulting across 3 continents.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nomadly — Strategic Intelligence for Space Markets",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nomadly — Strategic Intelligence for Space Markets",
    description:
      "Democratizing access to global space and telecommunications markets through expert networks and AI-powered intelligence.",
    images: ["/og-image.png"],
    creator: "@nomadly_sas",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {},
  category: "technology",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nomadly",
  legalName: "Nomadly SAS",
  url: "https://www.nomadly.fr",
  logo: "https://www.nomadly.fr/images/logo.png",
  description:
    "Strategic intelligence consulting firm democratizing access to global space and telecommunications markets.",
  foundingDate: "2024",
  founder: {
    "@type": "Person",
    name: "Manassé Bokole",
    jobTitle: "Founder and CEO",
    description:
      "PhD candidate in Business Diplomacy and International Trade at HEIP School",
  },
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "25 Rue du Maréchal Foch",
      addressLocality: "Versailles",
      postalCode: "78000",
      addressCountry: "FR",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Le Perqo, 2 Rue Simone Veil",
      addressLocality: "Saint-Ouen-sur-Seine",
      postalCode: "93400",
      addressCountry: "FR",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+33761911049",
    contactType: "sales",
    email: "contact@nomadly.fr",
    availableLanguage: ["English", "French"],
  },
  sameAs: [
    "https://www.instagram.com/nomadly_sas/",
    "https://www.linkedin.com/company/nomadly-aerospace/",
  ],
  areaServed: ["Europe", "Africa", "Americas"],
  knowsAbout: [
    "Space technology export",
    "Satellite telecommunications",
    "International space trade regulations",
    "ITAR/EAR compliance",
    "Space market intelligence",
    "NewSpace startup consulting",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nomadly",
  url: "https://www.nomadly.fr",
  description:
    "Strategic intelligence for space and telecommunications market expansion.",
  publisher: { "@type": "Organization", name: "Nomadly" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-navy focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Skip to content
        </a>
        <Header />
        <main id="content" className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
