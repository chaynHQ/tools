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
              Chayn is a global nonprofit created by survivors for survivors, building resources to support 
              the healing journey of those affected by gender-based violence. Our approach is trauma-informed, 
              intersectional, multilingual, and centred on survivor experiences.
            </p>
          </div>
          <div>
            <h3 className="font-merriweather text-lg mb-4">About Advokit</h3>
            <p className="text-muted-foreground max-w-md">
              Advokit was created by Chayn to empower those affected by image-based abuse. We provide 
              compassionate guidance through the takedown request process, using AI to help you create 
              effective letters tailored to your specific situation.
            </p>
            <div className="mt-6 p-4 rounded-lg bg-accent-light/40 text-muted-foreground">
              <p className="text-sm">
                Advokit is a new tool in continuous development. If you have suggestions or encounter any issues, please{' '}
                <Link 
                  href={process.env.NEXT_PUBLIC_TYPEFORM_FEEDBACK_URL || '#'} 
                  target="_blank" 
                  className="text-muted-foreground underline hover:text-foreground/80"
                >
                  share your experience with us
                </Link>
                . Your insights help us better support others in similar situations.
              </p>
            </div>
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