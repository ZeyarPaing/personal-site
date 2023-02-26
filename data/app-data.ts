import { ContactInfo, NavItem } from '../types';

export const navItems: NavItem[] = [
  {
    name: 'Projects',
    url: '/projects',
  },
  {
    name: 'Blogs',
    url: '/blogs',
    beta: true,
  },
];

export const contactInfo: ContactInfo[] = [
  {
    name: '+95 978302 4165',
    link: 'tel:+959783024165',
    icon: 'phone.svg',
  },
  {
    name: 'zeyarpaing@porton.me',
    link: 'mailto:zeyarpaing@porton.me',
    icon: 'mail.svg',
  },
  {
    name: 'ZeyarPaing',
    link: 'https://github.com/ZeyarPaing',
    icon: 'github.svg',
  },
  {
    name: 'zeyar-paing',
    link: 'https://linkedin.com/in/zeyar-paing',
    icon: 'linkedin.svg',
  },
];

export const hostDomain = 'https://zeyar.dev/';
export const previewImage = 'https://zeyar.dev/assets/image/preview.jpg';
