import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-neutral py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/chayn_logo.png"
                alt="Chayn Logo"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="font-merriweather text-xl">Chayn</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Chayn is a global nonprofit, run by survivors and allies from around the world, creating resources to support 
              the healing of survivors of gender-based violence. We create open, online resources and services for survivors 
              of abuse that are trauma-informed, intersectional, multilingual and feminist.
            </p>
          </div>
          <div>
            <h3 className="font-merriweather text-lg mb-4">About Advokit</h3>
            <p className="text-muted-foreground max-w-md">
              Advokit is a tool created by Chayn to support those affected by image-based abuse. We provide guidance 
              through the process of requesting image takedowns, using AI to generate effective letters specific to your case.
            </p>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-muted">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Chayn. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="https://chayn.co/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="https://chayn.co/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="https://chayn.co" className="text-sm text-muted-foreground hover:text-foreground">
                Visit Chayn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}