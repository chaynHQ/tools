import { platforms } from '@/lib/platforms';
import { RemovalProcessClient } from './removal-process-client';

export function generateStaticParams() {
  return platforms.map((platform) => ({
    platform: platform.id,
  }));
}

export default function RemovalProcess({
  params
}: {
  params: { platform: string }
}) {
  return <RemovalProcessClient params={params} />;
}