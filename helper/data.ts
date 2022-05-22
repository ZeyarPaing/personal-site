import {
  Education,
  Experience,
  Project,
  Technology,
  Voluntary,
} from '../types';

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

export const education: Education[] = [
  {
    name: 'University of Computer Studies, Yangon',
    description:
      'Started as a bachelor student in 2019. Specialized in Knowledge Engineering of Computer Science. After learning the fundamentals for a year and a half, the pandemic & the coup happened. Currently, I’m boycotting the Myanmar Junta by not taking classes managed by the Junta.',
  },
  {
    name: 'Turing Programming Training Center',
    description:
      'Started as a bachelor student in 2019. Specialized in Knowledge Engineering of Computer Science. After learning the fundamentals for a year and a half, the pandemic & the coup happened. Currently, I’m boycotting the Myanmar Junta by not taking classes managed by the Junta.',
  },
];

export const courses: string[] = [
  'Programming Foundations with JavaScript, HTML and CSS',
  'Visual Elements of User Interface Design',
  'Modern JavaScript: ES6 Basics',
  'Javascript animation for websites, storytelling',
  'Crash Course on Python',
  'Mathematics for Machine Learning: Linear Algebra',
];

export const voluntaries: Voluntary[] = [
  {
    place: 'Non-profit Organization',
    position: 'Public Relation Team Member',
    description: 'Crating graphics for social media and events',
  },
  {
    place: 'ICPC National Contest',
    position: 'Volunteer',
    description: 'Crating graphics for social media and events',
  },
  {
    place: 'UCSY IT Camp 2019',
    position: 'Public Relation Volunteer',
    description: 'The event had the attendees of over 2200 and 40 speakers.',
  },
  {
    place: 'University Events & Ceremonies',
    position: 'Volunteer',
    description:
      'Involved in running the events at university such as Thingyan Festival and Fresher Welcome',
  },
];
export const projects: Project[] = [
  {
    name: 'Monage',
    logo: '/assets/logos/monage.svg',
    type: 'Collaborative Expense/Income Tracker',
    description:
      'A personal project, simple expense/income tracker app with collaborative wallets. VueJs , node(express), mongodb are used to build it.',
    demoUrl: 'https://monage.zeyar.dev',
    color: '#4B5DFF',
  },
  {
    name: 'Spring University Myanmar',
    logo: '/assets/logos/sum.svg',
    type: 'University Website and CMS Panel ',
    description:
      'Website + admin console for Spring University Myanmar using Next.js, Firebase realtime database and Google Could Storage.',
    demoUrl: 'https://sum-five.vercel.app',
    color: '#F05655',
  },
];
