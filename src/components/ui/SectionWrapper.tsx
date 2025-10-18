import { ReactNode } from 'react';
import { useInView } from '../../hooks/useInView';

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: ReactNode;
  title?: string;
  description?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function SectionWrapper({
  id,
  className ,
  children,
  title,
  description,
  titleClassName = "text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center",
  descriptionClassName = "text-lg text-gray-600 dark:text-gray-400 mb-12 text-center max-w-2xl mx-auto"
}: SectionWrapperProps) {
  const { ref, isInView } = useInView();

  return (
    <section id={id} className={`min-h-screen ${className}`}>
      <div ref={ref} className="max-w-6xl mx-auto">
        {title && (
          <h2 className={`${titleClassName} transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {title}
          </h2>
        )}
        {description && (
          <p className={`${descriptionClassName} transition-all duration-700 delay-150 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
