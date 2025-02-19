import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Merriweather, Open_Sans } from 'next/font/google';
import 'regenerator-runtime/runtime';
import './globals.css';

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-merriweather',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-open-sans',
  display: 'swap',
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
        <Header />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}