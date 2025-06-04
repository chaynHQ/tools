import { CookieConsent } from '@/components/cookie-consent';
import { IS_PRODUCTION } from '@/lib/constants/common';
import type { Metadata } from 'next';
import { Merriweather, Open_Sans } from 'next/font/google';
import Script from 'next/script';
import 'regenerator-runtime/runtime'; // Ensure this import goes first otherwise you will get a runtime error
import './app.css';
import { ClientLayout } from './client-layout';
import { Providers } from './providers';

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
  title: 'Survivor AI | Free AI-Powered Image Takedown Tool by Chayn',
  description:
    'Get free, confidential help removing non-consensual images online. Our AI-powered tool creates personalized takedown requests for major platforms, with step-by-step guidance and trauma-informed support.',
  metadataBase: new URL('https://survivorai.chayn.co'),
  openGraph: {
    title: 'Survivor AI | Free AI-Powered Image Takedown Tool by Chayn',
    description:
      'Get free, confidential help removing non-consensual images online. Our AI-powered tool creates personalized takedown requests for major platforms, with step-by-step guidance and trauma-informed support.',
    images: [
      {
        url: '/meta_image.png',
        width: 1200,
        height: 630,
        alt: 'Survivor AI by Chayn',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Survivor AI | Free AI-Powered Image Takedown Tool by Chayn',
    description:
      'Get free, confidential help removing non-consensual images online. Our AI-powered tool creates personalized takedown requests for major platforms, with step-by-step guidance and trauma-informed support.',
    images: ['/meta_image.png'],
  },
  robots: {
    index: IS_PRODUCTION,
    follow: IS_PRODUCTION,
  },
  themeColor: '#F0244D',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${merriweather.variable} ${openSans.variable}`}>
      <head>
        {/* Initialize Google Analytics with consent mode */}
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                'consent': 'default',
                'analytics_storage': 'denied'
              });
            `,
          }}
        />
      </head>
      <body className="font-open-sans bg-background min-h-screen flex flex-col">
        <Providers>
          <ClientLayout>{children}</ClientLayout>
          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}
