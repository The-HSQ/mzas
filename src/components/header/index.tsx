'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navigationMenu = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Services',
    href: '/services',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full relative">
      <div className="flex h-14 items-center justify-between md:justify-start gap-20">
        {/* Logo */}
        <div className="flex justify-center">
          <Link
            href="/"
            className="relative w-24 h-10 flex items-center"
          >
            <Image
              src="/logo/dark_mode.png"
              alt="MZAS LLC"
              fill
              sizes="(max-width: 768px) 80px, 96px"
              className="object-contain"
              priority
              quality={100}
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-12">
          {navigationMenu.slice(0, 4).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-md font-medium transition-colors',
                pathname === item.href
                  ? 'text-[var(--color-primary)]'
                  : 'text-[var(--color-text-muted)] hover:text-[var(--color-primary)]'
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <div
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            className="rounded-full hover:bg-[var(--color-background-alt)] hover:text-[var(--color-primary)] hover:shadow-sm transition-all duration-300 ease-in-out p-1.5 cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <X
                className={cn(
                  'size-5 transition-transform',
                  isMobileMenuOpen && 'rotate-90'
                )}
              />
            ) : (
              <Menu className="size-5" />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-x-0 top-[57px] z-[100] bg-[var(--color-background)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--color-background)]/60 md:hidden',
          'transition-all duration-300 ease-in-out rounded-b-2xl border-b border-dashed border-[var(--color-border)]',
          'max-h-[calc(100vh-57px)] overflow-y-auto',
          isMobileMenuOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-2 pointer-events-none'
        )}
        style={{
          backgroundColor: 'var(--color-background)',
        }}
      >
        <div className="mx-4">
          <nav className="flex flex-col py-4">
            <div className=" flex flex-col gap-4 ">
              {navigationMenu.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'block text-base font-medium transition-colors hover:bg-[var(--color-background-hover)] rounded-lg px-0',
                    pathname === item.href
                      ? 'text-[var(--color-primary)]'
                      : 'text-[var(--color-text-muted)] hover:text-[var(--color-primary)]'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
