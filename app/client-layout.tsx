"use client";

import { DisclaimerBanner } from '@/components/feedback/disclaimer-banner';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { IS_PRODUCTION } from '@/lib/constants/common';
import { FormProvider } from '@/lib/context/FormContext';
import { GoogleAnalytics } from '@next/third-parties/google';
import { ReactNode } from 'react';

export function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <FormProvider>
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 min-h-[calc(100vh-4rem)]">
          <DisclaimerBanner />
          {children}
        </div>
      </main>
      <Footer />
      <GoogleAnalytics 
        gaId={process.env.NEXT_PUBLIC_GA_ID || ''} 
      />
    </FormProvider>
  );
}