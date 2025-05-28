import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MZAS - Modern Solutions for Your Business",
  description:
    "MZAS provides innovative business solutions, professional services, and expert consulting to help your business grow and succeed in the digital age.",
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
  keywords: [
    "business solutions",
    "professional services",
    "consulting",
    "digital solutions",
    "MZAS",
  ],
  authors: [{ name: "MZAS Team" }],
  creator: "MZAS",
  publisher: "MZAS",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mzas.com",
    title: "MZAS - Modern Solutions for Your Business",
    description:
      "MZAS provides innovative business solutions, professional services, and expert consulting to help your business grow and succeed in the digital age.",
    siteName: "MZAS",
  },
  twitter: {
    card: "summary_large_image",
    title: "MZAS - Modern Solutions for Your Business",
    description:
      "MZAS provides innovative business solutions, professional services, and expert consulting to help your business grow and succeed in the digital age.",
    creator: "@mzas",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-[var(--color-text)] overflow-x-hidden`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
