import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { projectsData } from '../data';
import { SectionWrapper } from '../components/ui';

export function ProjectsPage() {

  return (
    <SectionWrapper
      id="projects"
    > 
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      {/* Header */}
      <div className="bg-white dark:bg-gray-900 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            All Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            A comprehensive showcase of my development work, featuring various technologies and project types.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

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
            </div>
          ))}
        </div>
      </div>
    </div>
    </SectionWrapper>
  );
}
