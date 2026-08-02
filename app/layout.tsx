import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CLV Construction",
    template: "%s | CLV Construction",
  },
  description:
    "CLV Construction is a Texas based, full service contractor company specializing in commercial, residential & remodeling construction.",
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
    title: "CLV Construction",
    description:
      "CLV Construction is a Texas based, full service contractor company.",
    siteName: "CLV Construction",
    url: "https://www.clvconstructionllc.com",
    images: [
      {
        url: "https://clvconstructionllc.com/images/meta-banner.png",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
