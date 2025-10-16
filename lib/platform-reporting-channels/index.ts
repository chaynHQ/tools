import { PlatformReportingChannels } from '../../types/platforms';
import { facebookReportingChannels } from './facebook';
import { instagramReportingChannels } from './instagram';
import { onlyfansReportingChannels } from './onlyfans';
import { pornhubReportingChannels } from './pornhub';
import { tiktokReportingChannels } from './tiktok';

const platformReportingChannels: Record<string, PlatformReportingChannels> = {
  facebook: facebookReportingChannels,
  instagram: instagramReportingChannels,
  tiktok: tiktokReportingChannels,
  onlyfans: onlyfansReportingChannels,
  pornhub: pornhubReportingChannels,
};

function getPlatformReportingChannels(platformId: string): PlatformReportingChannels | null {
  return platformReportingChannels[platformId] || null;
}

export { getPlatformReportingChannels };
