import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: string;
  delay?: number;
  isInView?: boolean;
}

export function Card({
  children,
  className = "bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700",
  hover = true,
  gradient,
  delay = 0,
  isInView = true
}: CardProps) {
  const baseClasses = `${className} transition-all duration-700 ${
    hover ? 'hover:shadow-xl' : ''
  } ${
    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`;

  return (
    <div
      className={baseClasses}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {gradient && (
        <div className={`h-2 bg-gradient-to-r ${gradient}`} />
      )}
      {children}
    </div>
  );
}
