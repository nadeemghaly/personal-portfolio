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
    "I'm a software engineer driven by curiosity and innovation. I love building intelligent, scalable systems that blend clean architecture with creativity. Over the years, I've worked across the full stack — from intuitive frontends to robust, high-performance backends.",
    "I'm passionate about leveraging AI and automation to amplify productivity and create smarter digital experiences. Outside of coding, I explore emerging tools, contribute to open-source, and share knowledge with the developer community.",
    "I’m constantly pushing my boundaries — learning, experimenting, and evolving with every project. My goal is to build technology that not only solves problems but also inspires progress and empowers people."
  ],
  features: [
    {
      icon: "Code2",
      title: "Clean Code Advocate",
      description: "Committed to writing elegant, maintainable, and scalable solutions that stand the test of time."
    },
    {
      icon: "Lightbulb",
      title: "AI & Automation Enthusiast",
      description: "Committed to writing elegant, maintainable, and scalable solutions that stand the test of time."
    },
    {
      icon: "Users",
      title: "AI & Automation Enthusiast",
      description: "Thrives in team environments, driving innovation through clear communication and shared vision."
    }
  ]
};
