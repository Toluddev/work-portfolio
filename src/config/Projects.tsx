import Appwrite from '@/components/technologies/Appwrite';
import Github from '@/components/technologies/Github';
import MongoDB from '@/components/technologies/MongoDB';
import Motion from '@/components/technologies/Motion';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import ReactIcon from '@/components/technologies/ReactIcon';
import Shadcn from '@/components/technologies/Shadcn';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import Framer from '@/components/technologies/Framer';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Oakridge',
    description:
      'A modern real estate website design and development project showcasing properties with advanced search and filter options',
    image: '/project/real estate.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/notesbuddy.mp4?tr=orig',
    link: 'https://real-estate-alpha-blond.vercel.app/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'NodeJs', icon: <NodeJs key="nodejs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Framer', icon: <Framer key="framer" /> },
    ],
    github: 'https://github.com/Toluddev/RealEstate',
    live: 'https://real-estate-alpha-blond.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/real-estate',
    isWorking: true,
  },
  {
    title: 'Zentra',
    description:
      'Fintech Saas platform for managing personal finances, investments, and budgeting with advanced analytics',
    image: '/project/zentra.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/appwrite.mp4',
    link: 'https://zentra-delta.vercel.app/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
    ],
    github: 'https://github.com/ramxcodes/mcp-server',
    live: 'https://zentra-delta.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/appwrite-mcp-server',
    isWorking: false, // Currently in development
  },
  {
    title: 'Bupay',
    description:
      'A modern multi-bank payment platform with seamless integration, advanced security, and user-friendly interface',
    image: '/project/bupay.png',
    video: '',
    link: 'https://bupay.vercel.app/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
       { name: 'Appwrite', icon: <Appwrite key="appwrite" /> },
    ],
    github: '',
    live: '',
    details: true,
    projectDetailsPageSlug: '',
    isWorking: false,
  },
  {
    title: 'Fitness App',
    description:
      'A comprehensive modern fitness exercise app with personalized workout plans, progress tracking, and community features - currently in development',
    image: '/project/pasandida.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/pasandida.mp4',
    link: '',
    technologies: [
       { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Github', icon: <Github key="github" /> },
      { name: 'Motion', icon: <Motion key="motion" /> },
    ],
    live: '',
    details: true,
    projectDetailsPageSlug: '',
    isWorking: false, // Currently in development
  },
];
