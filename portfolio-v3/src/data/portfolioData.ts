// ============================================================
// PORTFOLIO DATA — Replace with your real content
// ============================================================

export const personalInfo = {
  name: 'Dilshan',
  handle: 'DilshanGDT',
  title: 'Full-Stack Web Developer',
  tagline: 'He crafts responsive websites where technologies meet creativity',
  quote: '"Sky is the Limit..."',
  currentlyWorking: 'Portfolio',
  email: 'dilshan@example.com',
  resumeUrl: '/resume.pdf', // Place your resume PDF in /public folder
};

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/dilshangdt', icon: 'github' },
  { name: 'Dribbble', url: 'https://dribbble.com/dilshangdt', icon: 'dribbble' },
  { name: 'Figma', url: 'https://figma.com/@dilshangdt', icon: 'figma' },
];

export const navLinks = [
  { label: '#about-me', href: '#about-me' },
  { label: '#skills', href: '#skills' },
  { label: '#my-work', href: '#my-work' },
  { label: '#contacts', href: '#contacts' },
];

export interface Experience {
  id: string;
  title: string;
  company: string;
  type: string;
  period: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    title: 'Social Media Manager',
    company: 'Baking Bliss',
    type: 'Part time',
    period: '2023 – Present',
    description:
      'Managed social media accounts and content strategy for Baking Bliss. Grew the Instagram following by 40% in 6 months. Created engaging content calendars, monitored analytics, and ran targeted ad campaigns. Collaborated with the design team to produce high-quality visuals and copy aligned with brand identity.',
  },
  {
    id: 'exp-2',
    title: 'Frontend Developer Intern',
    company: 'Tech Solutions LK',
    type: 'Internship',
    period: '2022 – 2023',
    description:
      'Developed and maintained client-facing React applications. Worked closely with the backend team to integrate REST APIs. Implemented responsive designs using Tailwind CSS and improved page load performance by 30% through code splitting and lazy loading.',
  },
  {
    id: 'exp-3',
    title: 'Web Design Freelancer',
    company: 'Self-Employed',
    type: 'Freelance',
    period: '2021 – Present',
    description:
      'Delivered custom website designs and full-stack web solutions for 10+ local businesses. Specialised in React, Next.js, and Node.js. Built e-commerce platforms, portfolio sites, and business landing pages tailored to each client\'s brand and goals.',
  },
  {
    id: 'exp-4',
    title: 'UI/UX Designer',
    company: 'Creative Agency',
    type: 'Part time',
    period: '2022 – 2023',
    description:
      "Designed user interfaces and prototypes using Figma. Conducted user research, created wireframes, and handed off pixel-perfect designs to the development team. Improved the client's app onboarding flow, reducing drop-off rates by 25%.",
  },
  {
    id: 'exp-5',
    title: 'BSc (Hons) in Computer Science',
    company: 'University of Kelaniya',
    type: 'Education',
    period: '2021 – Present',
    description:
      'Currently pursuing a Bachelor of Science (Honours) degree in Computer Science. Coursework covers algorithms, data structures, software engineering, databases, artificial intelligence, and computer networks. Member of the IT Society.',
  },
  {
    id: 'exp-6',
    title: 'A/L — Maths Stream',
    company: 'Dharmaraja College',
    type: 'Education',
    period: '2018 – 2020',
    description:
      'Completed Advanced Level examinations in the Mathematics stream. Subjects: Combined Mathematics, Physics, and Chemistry. Achieved results qualifying for university entrance in the Engineering and Computer Science faculties.',
  },
  {
    id: 'exp-7',
    title: 'O/L — General Stream',
    company: 'St. John\'s College',
    type: 'Education',
    period: '2016 – 2018',
    description:
      'Completed Ordinary Level examinations in the General Stream. Subjects: English, Sinhala, Mathematics, Science, History, and Geography. Achieved results qualifying for university entrance in the Engineering and Computer Science faculties.',
  },
  {
    id: 'exp-8',
    title: 'Primary School',
    company: 'St. John\'s College',
    type: 'Education',
    period: '2009 – 2015',
    description:
      'Completed Primary School education at St. John\'s College. Subjects: English, Sinhala, Mathematics, Science, History, and Geography. Achieved results qualifying for university entrance in the Engineering and Computer Science faculties.',
  },
];

export interface Skill {
  id: string;
  name: string;
  category: string;
  certificates: Certificate[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  imageUrl: string; // Place images in /public/certificates/
}

export const skills: Skill[] = [
  // Frontend
  {
    id: 'react',
    name: 'React',
    category: 'Frontend',
    certificates: [
      {
        id: 'react-cert-1',
        title: 'React — The Complete Guide',
        issuer: 'Udemy',
        date: 'Jan 2023',
        description: 'Completed a comprehensive 40-hour React course covering Hooks, Redux, Context API, and React Router.',
        imageUrl: '/certificates/react-cert-1.png',
      },
      {
        id: 'react-cert-2',
        title: 'React Advanced Patterns',
        issuer: 'Frontend Masters',
        date: 'Jun 2023',
        description: 'Advanced patterns including compound components, render props, and custom hooks.',
        imageUrl: '/certificates/react-cert-2.png',
      },
    ],
  },
  {
    id: 'nextjs',
    name: 'Next.JS',
    category: 'Frontend',
    certificates: [
      {
        id: 'next-cert-1',
        title: 'Next.js & React — The Complete Guide',
        issuer: 'Udemy',
        date: 'Mar 2023',
        description: 'Full-stack development with Next.js including SSR, SSG, API routes, and deployment on Vercel.',
        imageUrl: '/certificates/next-cert-1.png',
      },
    ],
  },
  {
    id: 'tailwind',
    name: 'TailwindCSS',
    category: 'Frontend',
    certificates: [
      {
        id: 'tailwind-cert-1',
        title: 'Tailwind CSS From Scratch',
        issuer: 'Udemy',
        date: 'Feb 2023',
        description: 'Mastered utility-first CSS framework including responsive design, dark mode, and custom configurations.',
        imageUrl: '/certificates/tailwind-cert-1.png',
      },
    ],
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Frontend',
    certificates: [
      {
        id: 'ts-cert-1',
        title: 'Understanding TypeScript',
        issuer: 'Udemy',
        date: 'Apr 2023',
        description: 'TypeScript fundamentals, generics, decorators, and integration with React and Node.js.',
        imageUrl: '/certificates/ts-cert-1.png',
      },
    ],
  },
  // Backend
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Backend',
    certificates: [
      {
        id: 'node-cert-1',
        title: 'Node.js — The Complete Guide',
        issuer: 'Udemy',
        date: 'May 2022',
        description: 'Built RESTful APIs, worked with Express.js, MongoDB, authentication, and deployment.',
        imageUrl: '/certificates/node-cert-1.png',
      },
    ],
  },
  {
    id: 'nestjs',
    name: 'NestJs',
    category: 'Backend',
    certificates: [
      {
        id: 'nest-cert-1',
        title: 'NestJS Zero to Hero',
        issuer: 'Udemy',
        date: 'Aug 2023',
        description: 'Enterprise-grade backend development using NestJS, TypeORM, GraphQL, and JWT authentication.',
        imageUrl: '/certificates/nest-cert-1.png',
      },
    ],
  },
  {
    id: 'springboot',
    name: 'SpringBoot',
    category: 'Backend',
    certificates: [
      {
        id: 'spring-cert-1',
        title: 'Spring Boot & Spring Framework',
        issuer: 'Udemy',
        date: 'Oct 2022',
        description: 'Java-based backend development with Spring Boot, REST APIs, JPA/Hibernate, and Spring Security.',
        imageUrl: '/certificates/spring-cert-1.png',
      },
    ],
  },
  {
    id: 'laravel',
    name: 'Laravel',
    category: 'Backend',
    certificates: [
      {
        id: 'laravel-cert-1',
        title: 'Laravel — Build Web Applications',
        issuer: 'Laracasts',
        date: 'Jul 2022',
        description: 'PHP framework for web artisans — MVC architecture, Eloquent ORM, Blade templating, and queues.',
        imageUrl: '/certificates/laravel-cert-1.png',
      },
    ],
  },
  {
    id: 'nodejs-lambda',
    name: 'Node.js Lambda',
    category: 'Backend',
    certificates: [
      {
        id: 'lambda-cert-1',
        title: 'AWS Lambda with Node.js',
        issuer: 'AWS',
        date: 'Nov 2023',
        description: 'Serverless functions using AWS Lambda and Node.js, API Gateway integration, and deployment pipelines.',
        imageUrl: '/certificates/lambda-cert-1.png',
      },
    ],
  },
  {
    id: 'dotnet',
    name: '.NET',
    category: 'Backend',
    certificates: [
      {
        id: 'dotnet-cert-1',
        title: 'C# and .NET — Full Guide',
        issuer: 'Udemy',
        date: 'Dec 2022',
        description: 'C# programming, ASP.NET Core, Entity Framework, and building robust web APIs.',
        imageUrl: '/certificates/dotnet-cert-1.png',
      },
    ],
  },
  {
    id: 'go',
    name: 'Go',
    category: 'Backend',
    certificates: [
      {
        id: 'go-cert-1',
        title: 'Go Programming Bootcamp',
        issuer: 'Udemy',
        date: 'Jan 2024',
        description: 'Golang fundamentals, concurrency patterns, building REST APIs, and microservices.',
        imageUrl: '/certificates/go-cert-1.png',
      },
    ],
  },
  // AI
  {
    id: 'python',
    name: 'Python',
    category: 'AI',
    certificates: [
      {
        id: 'python-cert-1',
        title: 'Python for Everybody',
        issuer: 'Coursera',
        date: 'Mar 2021',
        description: 'Python programming basics, data structures, web scraping, and database access.',
        imageUrl: '/certificates/python-cert-1.png',
      },
    ],
  },
  {
    id: 'llm',
    name: 'LLM',
    category: 'AI',
    certificates: [
      {
        id: 'llm-cert-1',
        title: 'Large Language Models with Semantic Search',
        issuer: 'Cohere / DeepLearning.AI',
        date: 'Feb 2024',
        description: 'Working with LLMs for semantic search, RAG pipelines, and prompt engineering.',
        imageUrl: '/certificates/llm-cert-1.png',
      },
    ],
  },
  {
    id: 'rl',
    name: 'Reinforcement Learning',
    category: 'AI',
    certificates: [
      {
        id: 'rl-cert-1',
        title: 'Deep Reinforcement Learning',
        issuer: 'Coursera',
        date: 'Jun 2024',
        description: 'Q-Learning, policy gradients, actor-critic methods, and OpenAI Gym environments.',
        imageUrl: '/certificates/rl-cert-1.png',
      },
    ],
  },
  {
    id: 'pytorch',
    name: 'PyTorch',
    category: 'AI',
    certificates: [
      {
        id: 'pytorch-cert-1',
        title: 'PyTorch for Deep Learning',
        issuer: 'Udemy',
        date: 'Sep 2023',
        description: 'Building neural networks, CNNs, RNNs, and deploying PyTorch models in production.',
        imageUrl: '/certificates/pytorch-cert-1.png',
      },
    ],
  },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'chert-nodes',
    title: 'ChertNodes',
    description: 'Minecraft servers hosting',
    longDescription: 'ChertNodes is a full-featured Minecraft server hosting platform built with HTML, SCSS, Python, and Flask. It allows users to spin up, manage, and monitor Minecraft servers through a clean web dashboard. Features include one-click server creation, real-time console output, automated backups, and plan management.',
    tags: ['HTML', 'SCSS', 'Python', 'Flask'],
    imageUrl: '/projects/chert-nodes.png',
    liveUrl: 'https://example.com/chert-nodes',
    repoUrl: 'https://github.com/dilshangdt/chert-nodes',
  },
  {
    id: 'protect-x',
    title: 'ProtectX',
    description: 'Discord anti-crash bot',
    longDescription: 'ProtectX is a powerful Discord bot designed to protect servers from raid attacks and crash attempts. Built with React, Express, Discord.js, and Node.js, it monitors server activity in real time and automatically takes action against spam, mass-mention, and suspicious mass-join events. Features include configurable protection thresholds, audit logging, and a web dashboard.',
    tags: ['React', 'Express', 'Discord.js', 'Node.js'],
    imageUrl: '/projects/protect-x.png',
    liveUrl: 'https://example.com/protect-x',
  },
  {
    id: 'kahoot-answers',
    title: 'Kahoot Answers Viewer',
    description: 'Get answers to your kahoot quiz',
    longDescription: 'Kahoot Answers Viewer is a web tool that lets you retrieve and display quiz answers for a given Kahoot session PIN. Built with CSS, Express, and Node.js, it fetches quiz data from the Kahoot API and renders questions and answers in a clean, readable format — handy for teachers reviewing quiz content or building study guides.',
    tags: ['CSS', 'Express', 'Node.js'],
    imageUrl: '/projects/kahoot-answers.png',
    liveUrl: 'https://example.com/kahoot-answers',
  },
  {
    id: 'kiwi-quiz',
    title: 'Kiwi Quiz',
    description: 'Quiz game',
    longDescription: 'Kiwi Quiz is a web game that lets you play a quiz game with your friends. Built with React, Node.js, and Socket.io, it allows you to create a quiz game and play it with your friends. It also allows you to see the results of the quiz game.',
    tags: ['React', 'Node.js', 'Socket.io'],
    imageUrl: '/projects/kiwi-quiz.png',
    liveUrl: 'https://example.com/kiwi-quiz',
  },
];

export const footerInfo = {
  email: 'tharakadilshan506@gmail.com',
  copyright: '© Copyright 2026. Made by Dilshan', // Update with your name
};
