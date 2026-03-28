import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kerolosrefaat.com"),
  title: {
    default: "Kerolos Refaat — UX/UI Designer & Pharmacist",
    template: "%s | Kerolos Refaat",
  },
  description:
    "UX/UI Designer with 3 years of experience and a background in pharmacy. Specializing in healthcare-focused digital experiences, interaction design, and user research using Figma.",
  keywords: [
    "UX Designer",
    "UI Designer",
    "Pharmacist",
    "Healthcare Design",
    "Figma",
    "Portfolio",
    "Kerolos Refaat",
  ],
  authors: [{ name: "Kerolos Refaat" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kerolosrefaat.com",
    siteName: "Kerolos Refaat Portfolio",
    title: "Kerolos Refaat — UX/UI Designer & Pharmacist",
    description:
      "UX/UI Designer with 3 years of experience and a background in pharmacy. Specializing in healthcare-focused digital experiences.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kerolos Refaat — UX/UI Designer & Pharmacist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kerolos Refaat — UX/UI Designer & Pharmacist",
    description:
      "UX/UI Designer with 3 years of experience and a background in pharmacy.",
    images: ["/og-image.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${playfair.variable} antialiased`}
    >
      <body className="bg-[#0A0A0F] text-[#F0EDE8] min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
