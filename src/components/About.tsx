import { Code2, Lightbulb, Users } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { SectionWrapper } from './ui';
import { aboutData } from '../data';

const iconMap = {
  Code2,
  Lightbulb,
  Users,
};

export function About() {
  const { ref, isInView } = useInView();

  return (
    <SectionWrapper
      id="about"
      className="bg-white dark:bg-gray-900 transition-colors duration-300"
      >
    <section id="about" className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div ref={ref} className="max-w-6xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {aboutData.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {aboutData.paragraphs.map((paragraph, index) => (
              <p 
                key={index}
                className={`text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-all duration-700 ${
                  index === 0 ? 'delay-150' : 'delay-300'
                } ${
                  isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid gap-6">
            {aboutData.features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
              
              return (
                <div 
                  key={index}
                  className={`p-6 rounded-xl bg-gradient-to-br from-sky-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 border border-sky-100 dark:border-gray-600 hover:shadow-lg transition-all duration-700 delay-${index * 150} ${
                    isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                >
                  <IconComponent className="w-8 h-8 text-blue-600 dark:text-sky-400 mb-3" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
    </SectionWrapper>
  );
}
