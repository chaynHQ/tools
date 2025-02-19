import './globals.css';
import type { Metadata } from 'next';
import { Merriweather, Open_Sans } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const merriweather = Merriweather({ 
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-merriweather'
});

const openSans = Open_Sans({ 
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-open-sans'
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
      </body>
    </html>
  );
}