"use client";
import React from "react";
import Link from "next/link";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/components/ui/ThemeProvider";

const navigationMenu = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    title: "LinkedIn",
    href: "https://linkedin.com/company/your-company",
    icon: Linkedin,
  },
];

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="w-full py-6 sm:py-8 ">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4">
            <Link href="/" className="relative w-24 h-10 flex items-center">
              <Image
                src={
                  theme === "dark"
                    ? "/logo/dark-theme.png"
                    : "/logo/white-theme.png"
                }
                alt="MZAS LLC"
                fill
                sizes="(max-width: 768px) 80px, 96px"
                className="object-contain"
                priority
                quality={100}
              />
            </Link>
            <p className="text-xs sm:text-sm text-[var(--color-text-muted)] max-w-[280px] sm:max-w-none">
              Providing innovative business solutions and professional services
              to help your business grow and succeed in the digital age.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-[var(--color-text)] text-sm sm:text-base">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-3">
              {navigationMenu.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors inline-block"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-[var(--color-text)] text-sm sm:text-base">
              Contact Us
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start sm:items-center space-x-2 text-xs sm:text-sm text-[var(--color-text-muted)]">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="break-words">Maryland, USA</span>
              </li>
              <li className="flex items-center space-x-2 text-xs sm:text-sm text-[var(--color-text-muted)]">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+1 301 221 5994</span>
              </li>
              {/* <li className="flex items-center space-x-2 text-xs sm:text-sm text-[var(--color-text-muted)]">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="break-all">mzasllc@gmail.com</span>
              </li> */}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-[var(--color-text)] text-sm sm:text-base">
              Follow Us
            </h3>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.title}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] p-1.5 cursor-pointer hover:bg-[var(--color-background-alt)] rounded-full hover:shadow-sm transition-all duration-300 ease-in-out "
                  aria-label={social.title}
                >
                  <social.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-dashed border-t border-[var(--color-border)]">
          <p className="text-center text-xs sm:text-sm text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} MZAS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
