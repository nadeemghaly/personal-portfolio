export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface SkillsData {
  title: string;
  description: string;
  categories: SkillCategory[];
}

export const skillsData: SkillsData = {
  title: "Skills & Technologies",
  description: "Tools and technologies I use to bring ideas to life",
  categories: [
    {
      title: "Frontend",
      skills: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "GraphQL", "REST APIs", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Jest", "Webpack", "Vite", "Redis"]
    }
  ]
};
