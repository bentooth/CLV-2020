import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const siteUrl = "https://www.clvconstructionllc.com";
const siteName = "CLV Construction";
const siteDescription =
  "CLV Construction is a Texas based, full service contractor company specializing in commercial, residential & remodeling construction.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "brownsville",
    "construction",
    "residential",
    "remodel",
    "remodeling",
  ],
  openGraph: {
    locale: "en_US",
    type: "website",
    title: siteName,
    description:
      "CLV Construction is a Texas based, full service contractor company.",
    siteName,
    url: siteUrl,
    images: [
      {
        url: "/images/meta-banner.jpg",
        width: 1677,
        height: 770,
        alt: "CLV Construction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description:
      "CLV Construction is a Texas based, full service contractor company.",
    images: ["/images/meta-banner.jpg"],
  },
  icons: {
    icon: [
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "CLV Construction LLC",
  url: siteUrl,
  telephone: "+1-956-454-4141",
  email: "LennyVera1@gmail.com",
  image: `${siteUrl}/images/meta-banner.jpg`,
  areaServed: [
    {
      "@type": "City",
      name: "Brownsville",
      containedInPlace: {
        "@type": "State",
        name: "Texas",
      },
    },
    {
      "@type": "AdministrativeArea",
      name: "Rio Grande Valley",
    },
  ],
  description: siteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
