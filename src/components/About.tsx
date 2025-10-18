import { Code2, Lightbulb, Users } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div ref={ref} className="max-w-6xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className={`text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-all duration-700 delay-150 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              I'm a passionate software engineer with a keen eye for detail and a love for
              crafting elegant solutions. With several years of experience in full-stack
              development, I've worked on projects ranging from dynamic web applications
              to complex backend systems.
            </p>

            <p className={`text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-all duration-700 delay-300 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              I believe in writing clean, maintainable code and staying up-to-date with
              the latest technologies. When I'm not coding, you'll find me exploring new
              frameworks, contributing to open-source, or sharing knowledge with the
              developer community.
            </p>
          </div>

          <div className="grid gap-6">
            <div className={`p-6 rounded-xl bg-gradient-to-br from-sky-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 border border-sky-100 dark:border-gray-600 hover:shadow-lg transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <Code2 className="w-8 h-8 text-blue-600 dark:text-sky-400 mb-3" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Clean Code Advocate
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Writing maintainable, scalable, and efficient code is my priority
              </p>
            </div>

            <div className={`p-6 rounded-xl bg-gradient-to-br from-sky-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 border border-sky-100 dark:border-gray-600 hover:shadow-lg transition-all duration-700 delay-300 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <Lightbulb className="w-8 h-8 text-blue-600 dark:text-sky-400 mb-3" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Problem Solver
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Passionate about tackling complex challenges with innovative solutions
              </p>
            </div>

            <div className={`p-6 rounded-xl bg-gradient-to-br from-sky-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 border border-sky-100 dark:border-gray-600 hover:shadow-lg transition-all duration-700 delay-500 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <Users className="w-8 h-8 text-blue-600 dark:text-sky-400 mb-3" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Team Player
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Collaborating effectively to deliver exceptional results
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
