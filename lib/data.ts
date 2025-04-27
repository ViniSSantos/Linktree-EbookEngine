import { ProfileType } from './types';

export const profileData: ProfileType = {
  name: 'Ebook Engine',
  avatar: '/logoEbookEngine.png',
  bio: 'EBook Factory | Producing knowledge in digital format',
  links: [
    {
      id: '1',
      title: 'Personal Portfolio',
      url: 'https://example.com/portfolio',
      icon: 'Briefcase'
    },
    // },
    // {
    //   id: '2',
    //   title: 'Latest Blog Post',
    //   url: 'https://example.com/blog',
    //   icon: 'FileText'
    // },
    // {
    //   id: '3',
    //   title: 'Design Resources',
    //   url: 'https://example.com/resources',
    //   icon: 'PaintBucket'
    // },
    // {
    //   id: '4',
    //   title: 'Book a Consultation',
    //   url: 'https://example.com/consultation',
    //   icon: 'Calendar'
    // }
  ],
  socialLinks: [
    {
      platform: 'twitter',
      url: 'https://twitter.com/username'
    },
    {
      platform: 'github',
      url: 'https://github.com/ViniSSantos'
    },
    {
      platform: 'instagram',
      url: 'https://instagram.com/username'
    },
    {
      platform: 'linkedin',
      url: 'https://linkedin.com/in/username'
    }
  ]
};