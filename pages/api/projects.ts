import type { NextApiRequest, NextApiResponse } from 'next';
import { Project } from '../../types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Project[]>,
) {
  const projects: Project[] = [
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
  res.status(200).json(projects);
}
