import AWS from '@/components/technologies/AWS';
import BootStrap from '@/components/technologies/BootStrap';
import Bun from '@/components/technologies/Bun';
import CSS from '@/components/technologies/CSS';
import ExpressJs from '@/components/technologies/ExpressJs';
import Figma from '@/components/technologies/Figma';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import Postman from '@/components/technologies/Postman';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: false,
    company: 'Aliance Consulting and Digital Solutions Ltd',
    position: 'FullStack Developer Intern',
    location: 'Lagos, Nigeria',
    image: '/company/acds.png',
    description: [
      'Contributed to the development of client-facing websites and internal tools using HTML, CSS, JavaScript, and React.js.',
      'Assisted in transforming UI/UX designs into interactive, responsive components, ensuring cross-browser and device compatibility.',
      'Collaborated with senior developers to debug and optimize existing codebases for better performance and maintainability',
      'Gained hands-on experience with version control using Git and task tracking via Jira.'
    ],
    startDate: 'Jan 2024',
    endDate: 'June 2024',
    technologies: [
      {
        name: 'HTML',
        href: 'https://html.com/',
        icon: <Html />,
      },
      {
        name: 'CSS',
        href: 'https://css.com/',
        icon: <CSS />,
      },
      {
        name: 'JavaScript',
        href: 'https://javascript.com/',
        icon: <JavaScript />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Vercel',
        href: 'https://vercel.com/',
        icon: <Vercel />,
      },
      {
        name: 'AWS',
        href: 'https://aws.amazon.com/',
        icon: <AWS />,
      },
      {
        name: 'Postman',
        href: 'https://www.postman.com/',
        icon: <Postman />,
      },
      {
        name: 'ASP.NET',
        href: 'https://dotnet.microsoft.com/en-us/apps/aspnet',
        icon: '' // Placeholder icon, replace with actual ASP.NET icon component
      },
    ],
    website: 'https://www.acdsconsulting.com/',
    github: '',
  },
  {
    isCurrent: false,
    company: 'Upwork',
    position: 'Freelance Frontend Developer',
    location: 'Remote',
    image: '/company/upwork.png',
    description: [
      'Built and deployed responsive web applications using React.js and Tailwind CSS, tailored to client specifications across diverse industries.',
      'Translated Figma/Adobe XD designs into functional, component-based React applications with clean, maintainable code.',
      'Integrated RESTful APIs and implemented state management with tools like Redux and React Context for dynamic, scalable apps.',
      'Collaborated with backend developers to ensure seamless frontend-backend integration, optimizing performance .'
    ],
    startDate: 'Jun 2024',
    endDate: 'Present',
     technologies: [
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'Vercel',
        href: 'https://vercel.com/',
        icon: <Vercel />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: '' // Placeholder icon, replace with actual Tailwind CSS icon component
      },
      {
        name: 'Figma',
        href: 'https://www.figma.com/',
        icon: <Figma />,
      },
    ],
    website: '',
    x: '',
    linkedin: '',
    github: '',
  },
];
