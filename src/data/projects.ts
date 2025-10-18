export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string | null;
  gradient: string;
}

export const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with payment integration, product management, and real-time inventory tracking.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/yourusername/project1',
    live: 'https://project1-demo.com',
    gradient: 'from-sky-400 to-blue-600'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates, team workspaces, and advanced filtering capabilities.',
    tech: ['TypeScript', 'React', 'PostgreSQL', 'WebSockets'],
    github: 'https://github.com/yourusername/project2',
    live: 'https://project2-demo.com',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Analytics Dashboard',
    description: 'Data visualization platform with interactive charts, custom reports, and export functionality for business insights.',
    tech: ['React', 'D3.js', 'Express', 'Redis'],
    github: 'https://github.com/yourusername/project3',
    live: 'https://project3-demo.com',
    gradient: 'from-cyan-400 to-teal-500'
  },
  {
    title: 'Social Media API',
    description: 'RESTful API for a social media platform with authentication, post management, and real-time notifications.',
    tech: ['Node.js', 'GraphQL', 'MongoDB', 'JWT'],
    github: 'https://github.com/yourusername/project4',
    live: null,
    gradient: 'from-blue-600 to-indigo-600'
  },
  {
    title: 'Weather Forecast App',
    description: 'Beautiful weather application with location-based forecasts, interactive maps, and severe weather alerts.',
    tech: ['React', 'Tailwind CSS', 'OpenWeather API'],
    github: 'https://github.com/yourusername/project5',
    live: 'https://project5-demo.com',
    gradient: 'from-sky-500 to-blue-500'
  },
  {
    title: 'Blog CMS',
    description: 'Content management system with markdown support, image optimization, and SEO-friendly URL structure.',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS S3'],
    github: 'https://github.com/yourusername/project6',
    live: 'https://project6-demo.com',
    gradient: 'from-teal-400 to-cyan-600'
  }
];
