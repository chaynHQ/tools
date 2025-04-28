import { Facebook, Github, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white mt-auto border-t border-border/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
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
            <p className="text-muted-foreground max-w-md text-sm md:text-[15px]">
              Chayn is a global nonprofit created by survivors for survivors, building resources to support 
              the healing journey of those affected by gender-based violence. Our approach is trauma-informed, 
              intersectional, multilingual, and centred on survivor experiences.
            </p>
          </div>
          <div>
            <h3 className="font-merriweather text-lg mb-4">About Chayn's Survivor AI</h3>
            <p className="text-muted-foreground max-w-md text-sm md:text-[15px]">
              Our Survivor AI was created by Chayn to empower those affected by image-based abuse. We provide 
              compassionate guidance through the takedown request process, using AI to help you create 
              effective letters tailored to your specific situation.
            </p>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 border-t border-border/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center sm:justify-start gap-4">
              <Link 
                href="https://www.facebook.com/chayn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link 
                href="https://www.instagram.com/chaynhq/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link 
                href="https://x.com/ChaynHQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link 
                href="https://www.youtube.com/channel/UC5_1Ci2SWVjmbeH8_USm-Bg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Youtube className="w-5 h-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link 
                href="https://www.linkedin.com/company/chayn/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link 
                href="https://github.com/chaynHQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center sm:justify-end gap-6">
              <Link 
                href="https://chayn.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Visit Chayn
              </Link>
              <Link 
                href="https://www.paypal.com/paypalme/chaynhq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Donate
              </Link>
              <Link 
                href="https://www.chayn.co/policies/privacy-policy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          <div className="mt-6 text-center sm:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Chayn CIO. UK Charity Number: 1196098
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}