import { Code2, Lightbulb, Users, Download, FileText } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { SectionWrapper, Button } from './ui';
import { aboutData, resumeData } from '../data';
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
                className={`about-paragraph delay-${index * 150} ${
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

        {/* Resume Download Section */}
        <div className={`about-resume-section ${
          isInView ? 'about-resume-animated' : 'about-resume-hidden'
        }`}>
          <div className="about-resume-card">
            <div className="about-resume-icon">
              <FileText className="w-8 h-8" />
            </div>
            <div className="about-resume-content">
              <h3 className="about-resume-title">Download My Resume</h3>
              <p className="about-resume-description">
                Get a detailed overview of my experience, skills, and achievements in PDF format.
              </p>
              <div className="about-resume-meta">
                <span className="about-resume-updated">
                  Last updated: {resumeData.lastUpdated}
                </span>
              </div>
              
              <Button
                variant="primary"
                size="lg"
                icon={Download}
                iconPosition="left"
                className="about-resume-button"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = resumeData.downloadUrl;
                  link.download = resumeData.fileName;
                  link.click();
                }}
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
