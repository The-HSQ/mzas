"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ui/ThemeProvider";
import {
  Sun,
  Moon,
  Menu,
  X,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
// import Image from "next/image";

const navigationMenu = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const socialLinks = [
  {
    title: "Facebook",
    href: "https://facebook.com/your-company",
    icon: Facebook,
  },
  {
    title: "Instagram",
    href: "https://instagram.com/your-company",
    icon: Instagram,
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com/company/your-company",
    icon: Linkedin,
  },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="w-full relative">
      <div className="flex h-14 items-center justify-between">
        {/* Logo, Brand and Navigation Links */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-8 w-8">
              {/* Replace with your logo */}
              <div className="h-8 w-8 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white font-bold">
                M
              </div>
            </div>
            <span className="font-bold text-xl text-[var(--color-text)]">
              MZAS
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationMenu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-[var(--color-primary)]"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop CTA Buttons and Theme Toggle */}
        <div className="hidden md:flex items-center gap-2">
          {/* Social Media Links */}
          <div className=" flex items-center gap-2 ">
            {socialLinks.map((social) => (
              <Button
                key={social.title}
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full"
                aria-label={social.title}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="size-5" />
                </Link>
              </Button>
            ))}
          </div>
          {/* <Button variant="ghost" size="sm" asChild>
            <Link href="/login">Sign In</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/register">Get Started</Link>
          </Button> */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="size-5" />
            ) : (
              <Moon className="size-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="size-5" />
            ) : (
              <Moon className="size-5" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X
                className={cn(
                  "size-5 transition-transform",
                  isMobileMenuOpen && "rotate-90"
                )}
              />
            ) : (
              <Menu className="size-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-[57px] z-[100] bg-[var(--color-background)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--color-background)]/60 md:hidden",
          "transition-all duration-300 ease-in-out rounded-b-2xl border-b border-dashed border-[var(--color-border)]",
          "max-h-[calc(100vh-57px)] overflow-y-auto",
          isMobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2 pointer-events-none"
        )}
        style={{
          backgroundColor: "var(--color-background)",
        }}
      >
        <div className="mx-4">
          <nav className="flex flex-col py-4">
            <div className=" flex flex-col gap-2.5 ">
              {navigationMenu.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block text-base font-medium transition-colors hover:bg-[var(--color-background-hover)] rounded-lg px-0",
                    pathname === item.href
                      ? "text-[var(--color-primary)]"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="my-4 w-full h-[1px] bg-[var(--color-border)]"></div>

            {/* Mobile CTA Buttons */}
            <div className="flex flex-col gap-2 px-3">
              {/* Social Media Links for Mobile */}
              <div className="flex justify-center gap-4 py-2">
                {socialLinks.map((social) => (
                  <Button
                    key={social.title}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="rounded-full"
                    aria-label={social.title}
                  >
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="size-5" />
                    </Link>
                  </Button>
                ))}
              </div>

              {/* <Button
                variant="ghost"
                size="lg"
                asChild
                className="w-full justify-center font-medium"
              >
                <Link href="/login">Sign In</Link>
              </Button>
              <Button
                size="lg"
                asChild
                className="w-full justify-center font-medium"
              >
                <Link href="/register">Get Started</Link>
              </Button> */}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
