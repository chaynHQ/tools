import { Metadata } from 'next';
import HomePage from '../page';

export const metadata: Metadata = {
  title: 'Advokit by Chayn - Image Takedown Support',
  description: 'AI-powered tool helping survivors request the removal of non-consensual images',
};

export default function Home() {
  return <HomePage />;
}