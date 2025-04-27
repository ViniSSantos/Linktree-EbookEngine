export interface LinkType {
  id: string;
  title: string;
  url: string;
  icon?: string;
}

export interface SocialLinkType {
  platform: string;
  url: string;
}

export interface ProfileType {
  name: string;
  avatar: string;
  bio: string;
  links: LinkType[];
  socialLinks: SocialLinkType[];
}