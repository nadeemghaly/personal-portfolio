import { Mail, MapPin, Phone } from 'lucide-react';

interface ContactInfoItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
  href?: string;
}

interface ContactInfoProps {
  email: string;
  phone?: string;
  location: string;
  className?: string;
}

export function ContactInfo({ email, phone, location, className = '' }: ContactInfoProps) {
  const contactItems: ContactInfoItem[] = [
    {
      icon: Mail,
      title: 'Email',
      value: email,
      href: `mailto:${email}`
    },
    ...(phone ? [{
      icon: Phone,
      title: 'Phone',
      value: phone,
      href: `tel:${phone}`
    }] : []),
    {
      icon: MapPin,
      title: 'Location',
      value: location
    }
  ];

  return (
    <div className={`space-y-6 ${className}`}>
      {contactItems.map((item, index) => {
        const IconComponent = item.icon;
        const content = item.href ? (
          <a
            href={item.href}
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
          >
            {item.value}
          </a>
        ) : (
          <p className="text-gray-600 dark:text-gray-400">{item.value}</p>
        );

        return (
          <div key={index} className="flex items-start gap-4">
            <div className="p-3 bg-gradient-to-r from-sky-400 to-blue-600 rounded-lg">
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                {item.title}
              </h3>
              {content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
