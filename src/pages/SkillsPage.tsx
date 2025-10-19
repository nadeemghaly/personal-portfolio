import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Skills } from '../components/Skills';

export function SkillsPage() {
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
            Skills & Technologies
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            Tools and technologies I use to bring ideas to life and solve complex problems.
          </p>
        </div>
      </div>

      {/* Skills Content */}
      <Skills />
    </div>
  );
}
