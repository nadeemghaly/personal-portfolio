import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import { projects } from '../data';
import { SectionWrapper, Card, Button } from './ui';

// Show only the first 3 projects as featured
const featuredProjects = projects.slice(0, 3);

export function Projects() {
  const { ref, isInView } = useInView();

  return (
    <SectionWrapper
      id="projects"
      className="py-32 px-6 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
      title="Featured Projects"
      description="A selection of projects that showcase my skills and passion for development"
    >
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-gray-200 dark:border-gray-700"
              gradient={project.gradient}
              delay={200 + index * 100}
              isInView={isInView}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-sky-400 group-hover:to-blue-600 transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm font-medium">Code</span>
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Button
            as={Link}
            to="/projects"
            variant="primary"
            size="lg"
            icon={ArrowRight}
            iconPosition="right"
            className="px-8 py-4 shadow-lg hover:shadow-xl"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
