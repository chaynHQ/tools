import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Letter Generator - Survivor AI by Chayn',
  description: 'Create a personalised takedown request letter',
};

export default function LetterGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}