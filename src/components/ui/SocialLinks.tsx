import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface SocialLinksProps {
  links: {
    github?: string;
    linkedin?: string;
    email?: string;
    twitter?: string;
  };
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function SocialLinks({ links, size = 'md', className = '' }: SocialLinksProps) {
  const socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      url: links.github || '',
      icon: Github,
      color: 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 transition-colors duration-300'
    },
    {
      name: 'LinkedIn',
      url: links.linkedin || '',
      icon: Linkedin,
      color: 'bg-blue-600 text-white'
    },
    {
      name: 'Email',
      url: links.email ? `mailto:${links.email}` : '',
      icon: Mail,
      color: 'bg-gradient-to-r from-sky-400 to-blue-600 text-white'
    },
    {
      name: 'Twitter',
      url: links.twitter || '',
      icon: Twitter,
      color: 'bg-sky-500 text-white'
    }
  ].filter(link => link.url);

  const sizeClasses = {
    sm: 'p-2',
    md: 'p-3',
    lg: 'p-4'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div className={`flex items-center justify-center gap-4 transition-colors duration-300 ${className}`}>
      {socialLinks.map((link) => {
        const IconComponent = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            target={link.name === 'Email' ? undefined : '_blank'}
            rel={link.name === 'Email' ? undefined : 'noopener noreferrer'}
            className={`${sizeClasses[size]} rounded-full ${link.color} hover:scale-110 transition-transform duration-200`}
            aria-label={link.name}
          >
            <IconComponent className={iconSizes[size]} />
          </a>
        );
      })}
    </div>
  );
}
