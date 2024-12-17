import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/#about' },
    { text: 'Resume', href: '/#resume' },
  ],
  actions: [{ text: 'Hire me', href: getPermalink('/contact#form') }],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/in/pjmartorell' },
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://x.com/pjmartorell' },
    { ariaLabel: 'Bluesky', icon: 'tabler:brand-bluesky', href: 'https://bsky.app/profile/pjmartorell.dev' },
    { ariaLabel: 'Stack Overflow', icon: 'tabler:brand-stackoverflow', href: 'https://stackoverflow.com/users/960819/pere-joan-martorell' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ]
};
