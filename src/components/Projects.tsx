import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import { projectsData } from '../data';
import { SectionWrapper, Button } from './ui';
import '../styles/components/projects.css';

// Show only the first 3 projects as featured
const featuredProjects = projectsData.slice(0, 3);

export function Projects() {
  const { ref, isInView } = useInView();

  return (
    <SectionWrapper
      id="projects"
      className="projects-section"
      title="Featured Projects"
      description="A selection of projects that showcase my skills and passion for development"
    >
      <div className="projects-container">
        <div ref={ref} className="projects-grid">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`project-card group ${
                isInView ? 'project-card-animated' : 'project-card-hidden'
              }`}
              style={{ transitionDelay: `${(index - 1) * 50}ms` }}
            >
              <div className={`project-card-gradient ${project.gradient}`}></div>
              <div className="project-card-content">
                <h3 className="project-card-title">
                  {project.title}
                </h3>

                <p className="project-card-description">
                  {project.description}
                </p>

                <div className="project-tech-container">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="project-tech-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links-container">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <Github className="project-link-icon" />
                    <span className="project-link-text">Code</span>
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <ExternalLink className="project-link-icon" />
                      <span className="project-link-text">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className={`projects-view-all-container ${
          isInView ? 'projects-view-all-animated' : 'projects-view-all-hidden'
        }`}>
          <Button
            as={Link}
            to="/projects"
            variant="primary"
            size="lg"
            icon={ArrowRight}
            iconPosition="right"
            className="projects-view-all-button"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}