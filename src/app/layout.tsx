import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--color-background)] text-[var(--color-text)]`}
      >
        <ThemeProvider defaultTheme="light">
          <div className="sticky top-0 z-50 border-dashed border-b border-[var(--color-border)] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto max-w-[1400px] 1xl:border-dashed border-l border-r border-[var(--color-border)] h-14 border-none px-[1rem]">
              <Header />
            </div>
          </div>
          <main className="mx-auto max-w-[1400px] 1xl:border-dashed border-l border-r border-[var(--color-border)] flex-1 border-none py-10 bg-[var(--color-background)] px-[1rem]">
            {children}
          </main>
          <div className="border-dashed border-t border-[var(--color-border)]">
            <div className="mx-auto max-w-[1400px] 1xl:border-dashed border-l border-r border-[var(--color-border)] border-none px-[1rem] flex items-center">
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
