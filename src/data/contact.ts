import { socialLinks } from './socialLinks';

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export interface ContactData {
  title: string;
  description: string;
  contactInfo: ContactInfo;
  message: string;
}

export const contactData: ContactData = {
  title: "Get In Touch",
  description: "Have a project in mind or want to collaborate? I'd love to hear from you!",
  contactInfo: {
    email: socialLinks.email,
    phone: "+201111692388",
    location: "Cairo, Egypt"
  },
  message: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through the form or directly via email."
};
