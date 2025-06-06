'use client';

import { Button } from '@/components/ui/button';
import { analytics } from '@/lib/analytics';
import { motion } from 'framer-motion';
import { ExternalLink, XCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  const handleSafeExit = () => {
    analytics.trackEvent('safe_exit_clicked');
    // Clear form data from localStorage
    localStorage.clear();
    // Redirect to Google as a safe exit
    window.open('https://www.google.com');
    location.replace(
      'https://www.google.co.uk/search?tbm=isch&sa=1&ei=esSCW4LPH4WugQaZsbqoDw&q=cute+baby+animal+memes&oq=cute+baby+animal+memes&gs_l=',
    );
  };

  const handleResourcesClick = () => {
    analytics.trackEvent('chayn_resources_clicked');
  };

  return (
    <nav className="bg-secondary/40 py-3 sm:py-4 px-4 sm:px-6 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3 hover:opacity-90 transition-opacity"
        >
          <Image
            src="/chayn_logo.png"
            alt="Chayn Logo"
            width={32}
            height={32}
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
          <div className="flex flex-col">
            <span className="font-merriweather text-xl sm:text-2xl">Survivor AI</span>
            <span className="text-xs text-muted-foreground">by Chayn</span>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="https://www.chayn.co/resources"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleResourcesClick}
            >
              <Button
                variant="outline"
                className="pill bg-background hover:bg-white border-transparent"
              >
                Chayn resources
                <ExternalLink className="w-4 h-4 ml-2 text-primary" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              variant="outline"
              className="pill bg-primary text-white hover:text-white hover:bg-primary/60"
              onClick={handleSafeExit}
            >
              <XCircle className="w-4 h-4 mr-2" />
              Leave site
            </Button>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
