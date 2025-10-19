import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { About } from '../components/About';
import { SectionWrapper } from '../components/ui';

export function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <div className="bg-white dark:bg-gray-900 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            Learn more about my background, skills, and passion for software development.
          </p>
        </div>
      </div>

      {/* About Content */}
      <About />
    </div>
  );
}
