"use client";

import { ReactNode } from 'react';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { GoogleAnalytics } from '@next/third-parties/google';
import { DisclaimerBanner } from '@/components/feedback/disclaimer-banner';
import { FormProvider } from '@/lib/context/FormContext';
import { IS_PRODUCTION } from '@/lib/constants/common';

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
      {IS_PRODUCTION && (
        <GoogleAnalytics 
          gaId={process.env.NEXT_PUBLIC_GA_ID || ''} 
          gaMeasurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
        />
      )}
    </FormProvider>
  );
}