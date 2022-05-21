import { Experience, Technology } from '../types';

export const experiences: Experience[] = [
  {
    companyName: 'Bilions',
    position: 'Frontend Developer',
    description:
      'Started developing frontend UIs in  Vue Js at first and mobile UIs in Flutter now. I’ve improved in organizing the components for better DevX and readability, refactoring state management and network requests and communication with other developers and designers',
    year: 1,
  },
  {
    companyName: "Partner Associates Int'l Co.,Ltd.",
    position: 'Junior Application Developer',
    description:
      'Started developing frontend UIs in  Vue Js at first and mobile UIs in Flutter now. I’ve improved in organizing the components for better DevX and readability, refactoring state management and network requests and communication with other developers and designers',
    year: 1,
  },
];

export const technologies: Technology[] = [
  {
    icon: '/assets/logos/js.svg',
    name: 'JavaScript',
    specialized: true,
    color: '#F0DB4F',
  },
  {
    icon: '/assets/logos/next.svg',
    name: 'Next.js',
    specialized: true,
    color: '#f3f3f3',
  },
  {
    icon: '/assets/logos/react.svg',
    name: 'React.js',
    specialized: true,
    color: '#61DAFB',
  },
  {
    icon: '/assets/logos/tailwind.svg',
    name: 'Tailwind CSS',
    specialized: true,
    color: '#38BDF8',
  },
  {
    icon: '/assets/logos/vue.svg',
    name: 'Vue Js',
    specialized: true,
    color: '#42B883',
  },
  {
    icon: '/assets/logos/flutter.svg',
    name: 'Flutter',
    specialized: false,
    color: '#54C5F8',
  },
  {
    icon: '/assets/logos/firebase.svg',
    name: 'Firebase',
    specialized: false,
    color: '#FFCA28',
  },
  {
    icon: '/assets/logos/node.svg',
    name: 'Node.js',
    specialized: false,
    color: '#87cb82',
  },
  {
    icon: '/assets/logos/python.svg',
    name: 'Python',
    specialized: false,
    color: '#5A9FD4',
  },
];
