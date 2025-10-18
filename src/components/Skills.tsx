import { useInView } from '../hooks/useInView';
import { skillsData } from '../data';
import { SectionWrapper, Card } from './ui';

export function Skills() {
  const { ref, isInView } = useInView();

  return (
    <SectionWrapper
      id="skills"
      title={skillsData.title}
      description={skillsData.description}
    >
      <div ref={ref} className="grid md:grid-cols-3 gap-8">
        {skillsData.categories.map((category, index) => (
          <Card
            key={index}
            className="bg-gradient-to-br from-sky-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 border border-sky-100 dark:border-gray-600 hover:shadow-lg"
            delay={200 + index * 150}
            isInView={isInView}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3 justify-center">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-lg font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 border border-gray-200 dark:border-gray-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
