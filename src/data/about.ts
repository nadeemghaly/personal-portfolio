export interface AboutData {
  title: string;
  paragraphs: string[];
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
}

export const aboutData: AboutData = {
  title: "About Me",
  paragraphs: [
    "I'm a passionate software engineer with a keen eye for detail and a love for crafting elegant solutions. With several years of experience in full-stack development, I've worked on projects ranging from dynamic web applications to complex backend systems.",
    "I believe in writing clean, maintainable code and staying up-to-date with the latest technologies. When I'm not coding, you'll find me exploring new frameworks, contributing to open-source, or sharing knowledge with the developer community."
  ],
  features: [
    {
      icon: "Code2",
      title: "Clean Code Advocate",
      description: "Writing maintainable, scalable, and efficient code is my priority"
    },
    {
      icon: "Lightbulb",
      title: "Problem Solver",
      description: "Passionate about tackling complex challenges with innovative solutions"
    },
    {
      icon: "Users",
      title: "Team Player",
      description: "Collaborating effectively to deliver exceptional results"
    }
  ]
};
