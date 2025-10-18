import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  isInView?: boolean;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  delay = 0,
  isInView = true
}: FeatureCardProps) {
  return (
    <div
      className={`p-6 rounded-xl bg-gradient-to-br from-sky-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 border border-sky-100 dark:border-gray-600 hover:shadow-lg transition-all duration-700 ${
        isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Icon className="w-8 h-8 text-blue-600 dark:text-sky-400 mb-3" />
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}
