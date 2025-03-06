"use client";

import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <nav className="bg-neutral py-3 sm:py-4 px-4 sm:px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-90 transition-opacity">
          <Image
            src="/chayn_logo.png"
            alt="Chayn Logo"
            width={32}
            height={32}
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
          <div className="flex flex-col">
            <span className="font-merriweather text-xl sm:text-2xl">Advokit</span>
            <span className="text-xs text-muted-foreground">by Chayn</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}