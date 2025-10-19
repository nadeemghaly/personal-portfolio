import { socialLinksData } from './socialLinks';

export interface ContactInfoData {
  email: string;
  phone: string;
  location: string;
}

export interface ContactData {
  title: string;
  description: string;
  contactInfo: ContactInfoData;
  messages: string[];
}

export const contactData: ContactData = {
  title: "Get In Touch",
  description: "Have a project in mind or want to collaborate? I'd love to hear from you!",
  contactInfo: {
    email: socialLinksData.email,
    phone: "+201111692388",
    location: "Cairo, Egypt"
  },
  messages: [
    "I’m always excited to connect, whether it’s about a new project, a creative idea, or a chance to collaborate.",
    "Feel free to reach out through the form or email me directly, even if it’s just for a quick chat."
  ]
};
