import { socialLinksData } from '../data';
import { SocialLinks } from './ui';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Connect with me section */}
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Connect with me
          </h3>
          <SocialLinks
            links={socialLinksData}
            size="md"
            className="justify-center space-x-6"
          />
        </div>

        {/* Copyright section */}
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 flex flex-col items-center justify-center gap-2">
            <span>All rights reserved.</span>
            <span>© {currentYear} Nadeem Ghaly</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
