import { DisclaimerBanner } from '@/components/feedback/disclaimer-banner';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { FormProvider } from '@/lib/context/FormContext';
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Merriweather, Open_Sans } from 'next/font/google';
import 'regenerator-runtime/runtime';
import './globals.css';

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-merriweather',
  display: 'swap',
  preload: true,
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-open-sans',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Advokit by Chayn - Image Takedown Support',
  description: 'AI-powered tool helping survivors request the removal of non-consensual images',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${merriweather.variable} ${openSans.variable}`}>
      <body className="font-open-sans bg-background min-h-screen flex flex-col">
        <FormProvider>
          <Header />
          <main className="flex-1">
            <div className="max-w-7xl mx-auto px-6 py-6">
              <DisclaimerBanner />
              {children}
            </div>
          </main>
          <Footer />
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"} />
        </FormProvider>
      </body>
    </html>
  );
}