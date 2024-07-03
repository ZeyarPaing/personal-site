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
    name: '+66 621342935',
    link: 'tel:+66621342935',
    icon: 'phone.svg',
  },
  {
    name: 'zeyarpaing@porton.me',
    link: 'mailto:zeyarpaing@porton.me',
    icon: 'mail.svg',
  },
  {
    name: 'zeyarpaing',
    link: 'https://github.com/zeyarpaing',
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
