import type {
  Education,
  Experience,
  Project,
  Technology,
  Voluntary,
} from 'types';

export const experiences: Experience[] = [
  {
    companyName: 'Rezeve',
    current: true,
    year: 0.4,
    websiteLink: 'https://www.rezeve.com/',
    position: 'Frontend Developer',
    description:
      'Building user interfaces of Rezeve SaaS platform using Next.Js, React and other related technologies. I am also responsible for the maintenance of the existing codebase.',
  },
  {
    companyName: 'Bilions',
    position: 'Frontend Developer',
    description:
      "Implemented user-friendly web applications designed by UI/UX designer. I've developed a good way of communication with UI/UX designer which benefits in theming & asset sharing for the app.  I’ve improved in organizing the components for better DevX and readability, refactoring, state management and better network requests",
    year: 0.9,
    websiteLink: 'https://www.bilions.org/',
  },
  {
    companyName: "Partner Associates Int'l Co.,Ltd.",
    position: 'Junior Application Developer',
    description:
      'Joined as an Internship Student responsible not only for coding web UIs but also for designing UI/UX for mobile and web applications.' +
      " After almost a year, I've been promoted to Junior Application Developer. I've designed many elegant and usable UI and developed web interfaces with the best performance and design. I've gained a lot of experience about layouts, network request and refactoring techniques",
    year: 1.4,
    websiteLink: 'https://www.partnerassociates.com/',
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
      "Started as a bachelor student in 2019. Specialized in Knowledge Engineering Major of Computer Science Category. During the periods of learning, I've learned the fundamentals of Computer Sciences such as Data Structures & Algorithms, Programming Foundations, Basic Database Systems and Web Development Foundations ",
  },
  {
    name: 'Turing Programming Training Center',
    description:
      "Joined a course taught by Ko Thet Khine, Javascript & React Course. I've learned how to use JavaScript in an efficient and pragmatic way. After completing this course, I started developing React apps and involved in Js coding challenges",
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
    description:
      'Responsible for social media awareness for the events and publications',
  },
  {
    place: 'ICPC National Contest',
    position: 'Volunteer',
    description:
      "A role for reporting technical errors of computers and contestants' scores",
  },
  {
    place: 'UCSY IT Camp 2019',
    position: 'Public Relation Volunteer',
    description:
      'Participated in inviting Speakers and making social media marketing for the event',
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
    name: 'Rezeve',
    logo: '/assets/logos/rezeve.svg',
    type: 'Website and web app',
    description:
      'Website for Rezeve, a company that provides a platform for booking and royalty management for fitness',
    demoUrl: 'https://rezeve.com',
    color: '#5DFC70',
    media: '/assets/image/projects/rezeve-mockup.webp',
  },
  {
    name: 'MaNaw Store',
    logo: '/assets/logos/manawstore.svg',
    type: 'Web and mobile app',
    description:
      'All in one POS, Accounting, Invoices, Inventory software for both web and mobile',
    demoUrl: 'https://merchant.manawstore.com/',
    color: '#f1ca3b',
    media: '/assets/image/projects/manaw-mockup.webp',
  },
  {
    name: 'Monage',
    logo: '/assets/logos/monage.svg',
    type: 'Mobile-first Expense/Income Tracker',
    description:
      'Simple expense/income tracker app with collaborative features. This app can make the fund usage between friends, families and teams more transparent',
    demoUrl: 'https://monage.zeyar.dev',
    color: '#5f6eff',
    media: '/assets/image/projects/monage-mockup.webp',
  },
  {
    name: 'Spring University Myanmar',
    logo: '/assets/logos/sum.svg',
    type: 'University Website + Admin Panel ',
    description:
      'A multilingual, Server Side Rendered website. The major data includes Schools, Courses, Careers and Articles, all of them can be manipulated from a Customized Admin Panel ',
    demoUrl: 'https://sum-five.vercel.app',
    color: '#fa6261',
    media: '/assets/image/projects/sum-mockup.webp',
  },
];
