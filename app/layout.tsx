import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const display = Space_Grotesk({ subsets: ["latin", "latin-ext"], variable: "--font-display", display: "swap" });
const body = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | High-Altitude Work & Rope Access`, template: `%s | ${site.name}` },
  description: site.description,
  keywords: site.keywords,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", url: site.url, siteName: site.name,
    title: `${site.name} | High-Altitude Work & Rope Access`, description: site.description, locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

export const viewport: Viewport = { themeColor: "#07111f", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
