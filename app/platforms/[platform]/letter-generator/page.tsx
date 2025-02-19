import { platforms } from '@/lib/platforms';
import { LetterGeneratorClient } from './letter-generator-client';

export function generateStaticParams() {
  return platforms.map((platform) => ({
    platform: platform.id,
  }));
}

export default function LetterGenerator({
  params
}: {
  params: { platform: string }
}) {
  return <LetterGeneratorClient params={params} />;
}