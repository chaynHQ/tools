import { Metadata } from 'next';
import 'regenerator-runtime/runtime';

export const metadata: Metadata = {
  title: 'Letter Generator - Advokit by Chayn',
  description: 'Create a personalised takedown request letter',
};

export default function LetterGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}