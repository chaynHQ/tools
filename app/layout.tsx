import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Merriweather, Open_Sans } from 'next/font/google';
import 'regenerator-runtime/runtime';
import './globals.css';

const merriweather = Merriweather({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-merriweather',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
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
    <html lang="en">
      <body className={`${merriweather.variable} ${openSans.variable} font-sans bg-background min-h-screen flex flex-col`}>
        <Header />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}