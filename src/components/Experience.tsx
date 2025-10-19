import { Calendar, MapPin } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { SectionWrapper } from './ui';
import '../styles/components/experience.css';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Company Inc.',
    location: 'Remote',
    period: '2022 - Present',
    description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
    technologies: ['React', 'TypeScript', 'Node.js', 'AWS', 'PostgreSQL'],
    achievements: [
      'Led a team of 5 developers in building a customer portal serving 100k+ users',
      'Reduced application load time by 40% through performance optimization',
      'Implemented CI/CD pipelines reducing deployment time by 60%'
    ]
  },
  {
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    location: 'San Francisco, CA',
    period: '2020 - 2022',
    description: 'Developed end-to-end web applications from concept to deployment. Worked closely with product managers and designers to deliver user-centric solutions.',
    technologies: ['React', 'Express', 'MongoDB', 'Docker', 'Redis'],
    achievements: [
      'Built a real-time chat application supporting 10k+ concurrent users',
      'Designed and implemented RESTful APIs handling 1M+ requests daily',
      'Collaborated with design team to create responsive UI components'
    ]
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Agency',
    location: 'New York, NY',
    period: '2019 - 2020',
    description: 'Created responsive web applications and user interfaces for various clients. Focused on modern JavaScript frameworks and best practices.',
    technologies: ['JavaScript', 'Vue.js', 'Sass', 'Webpack', 'Jest'],
    achievements: [
      'Developed 15+ client websites with mobile-first responsive design',
      'Improved page load speeds by 35% through code optimization',
      'Implemented automated testing reducing bugs by 50%'
    ]
  }
];

export function Experience() {
  const { ref, isInView } = useInView();

  return (
    <SectionWrapper
      id="experience"
      className="experience-section"
      title="Professional Experience"
      description="My journey in software development and the impact I've made along the way"
    >
      <div className="experience-container">
        <div ref={ref} className="experience-timeline">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`experience-item ${
                isInView ? 'experience-item-animated' : 'experience-item-hidden'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="experience-title">{experience.title}</h3>
                  <div className="experience-company">{experience.company}</div>
                </div>
                
                <div className="experience-meta">
                  <div className="experience-period">
                    <Calendar className="experience-icon" />
                    {experience.period}
                  </div>
                  <div className="experience-location">
                    <MapPin className="experience-icon" />
                    {experience.location}
                  </div>
                </div>

                <p className="experience-description">
                  {experience.description}
                </p>

                <div className="experience-technologies">
                  {experience.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="experience-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="experience-achievements">
                  <h4 className="experience-achievements-title">Key Achievements:</h4>
                  <ul className="experience-achievements-list">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="experience-achievement-item">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
