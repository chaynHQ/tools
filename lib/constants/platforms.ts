// Platform enum for consistent referencing
export enum PlatformId {
  FACEBOOK = 'facebook',
  INSTAGRAM = 'instagram',
  TIKTOK = 'tiktok',
  ONLYFANS = 'onlyfans',
  PORNHUB = 'pornhub',
  OTHER = 'other',
}

// Platform display names
export const PLATFORM_NAMES: Record<PlatformId, string> = {
  [PlatformId.FACEBOOK]: 'Facebook',
  [PlatformId.INSTAGRAM]: 'Instagram',
  [PlatformId.TIKTOK]: 'TikTok',
  [PlatformId.ONLYFANS]: 'OnlyFans',
  [PlatformId.PORNHUB]: 'Pornhub',
  [PlatformId.OTHER]: 'Other',
};
