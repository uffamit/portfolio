'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from './ui/sheet';
import { navigationLinks } from '@/data/portfolio-data';

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between px-6 sm:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/favicon.svg" alt="Amit Divekar Logo" width={32} height={32} />
          <span className="sr-only">Amit Divekar</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navigationLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground/80 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background/95 backdrop-blur-xl">
               <SheetHeader>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">A list of links to navigate the site.</SheetDescription>
                <div className="flex items-center justify-between border-b pb-4">
                     <Link href="/" className="flex items-center gap-2">
                        <Image src="/favicon.svg" alt="Amit Divekar Logo" width={28} height={28} />
                         <span className="font-headline text-xl font-bold text-primary">Amit Divekar</span>
                    </Link>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" onClick={() => setIsSheetOpen(false)}>
                            <X className="h-6 w-6" />
                            <span className="sr-only">Close Menu</span>
                        </Button>
                    </SheetTrigger>
                </div>
              </SheetHeader>
              <div className="flex flex-col h-full">
                <nav className="mt-8 flex flex-col gap-6">
                  {navigationLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsSheetOpen(false)}
                      className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
