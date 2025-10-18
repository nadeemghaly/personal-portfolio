import { Code2, Lightbulb, Users } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { SectionWrapper } from './ui';
import { aboutData } from '../data';
import '../styles/components/about.css';

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
    <section id="about" className="about-section">
      <div ref={ref} className="about-container">
        <h2 className={`about-title transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {aboutData.title}
        </h2>

        <div className="about-content">
          <div className="about-text-container">
            {aboutData.paragraphs.map((paragraph, index) => (
              <p 
                key={index}
                className={`about-paragraph ${
                  index === 0 ? 'delay-150' : 'delay-300'
                } ${
                  isInView ? 'about-paragraph-animated' : 'about-paragraph-hidden'
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="about-features-container">
            {aboutData.features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
              
              return (
                <div 
                  key={index}
                  className={`about-feature-card delay-${index * 150} ${
                    isInView ? 'about-feature-card-animated' : 'about-feature-card-hidden'
                  }`}
                >
                  <IconComponent className="about-feature-icon" />
                  <h3 className="about-feature-title">
                    {feature.title}
                  </h3>
                  <p className="about-feature-description">
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
