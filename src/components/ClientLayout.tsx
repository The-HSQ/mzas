'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <>
      {/* <div className="sticky top-0 z-50 border-dashed border-b border-[var(--color-border)] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90">
        <div className="mx-auto max-w-[1400px] 1xl:border-dashed border-l border-r border-[var(--color-border)] h-14 border-none px-[1rem] lg:px-[2rem]"> */}
      <div className="sticky top-0 z-50 border-dashed border-b border-[var(--color-border)] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90">
        <div className="mx-auto max-w-[1400px] h-14 border-none px-[1rem] lg:px-[2rem]">
          <Header />
        </div>
      </div>
      <main
        className={`mx-auto max-w-[1400px] flex-1 border-none ${
          isHome ? '' : 'py-10 px-[1rem] lg:px-[2rem]'
        }`}
      >
        {children}
      </main>
      <div className="border-dashed border-t border-[var(--color-border)]">
        <div className="mx-auto max-w-[1400px] border-none px-[1rem] lg:px-[2rem] flex items-center">
          <Footer />
        </div>
      </div>
    </>
  );
}
