// Platform enum for consistent referencing
export enum PlatformId {
  FACEBOOK = 'facebook',
  INSTAGRAM = 'instagram', 
  TIKTOK = 'tiktok',
  ONLYFANS = 'onlyfans',
  PORNHUB = 'pornhub',
  OTHER = 'other'
}

// Platform display names
export const PLATFORM_NAMES: Record<PlatformId, string> = {
  [PlatformId.FACEBOOK]: 'Facebook',
  [PlatformId.INSTAGRAM]: 'Instagram',
  [PlatformId.TIKTOK]: 'TikTok',
  [PlatformId.ONLYFANS]: 'OnlyFans',
  [PlatformId.PORNHUB]: 'Pornhub',
  [PlatformId.OTHER]: 'Other'
};

// Platform contact emails
export const PLATFORM_EMAILS: Record<PlatformId, string> = {
  [PlatformId.FACEBOOK]: 'records@facebook.com',
  [PlatformId.INSTAGRAM]: 'records@instagram.com',
  [PlatformId.TIKTOK]: 'legal@tiktok.com',
  [PlatformId.ONLYFANS]: 'support@onlyfans.com',
  [PlatformId.PORNHUB]: 'content@pornhub.com',
  [PlatformId.OTHER]: "Please check the platform's help center for the appropriate contact email"
};