import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useNavigate } from 'react-router-dom';

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/skills' },
  { label: 'Experience', href: '/experience' },
  { label: 'Contact', href: '/contact' }
];

export function Navigation() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check both window scroll and the main scroll container
      const scrollContainer = document.querySelector('.snap-y.snap-mandatory');
      const scrollY = scrollContainer ? scrollContainer.scrollTop : window.scrollY;
      setIsScrolled(scrollY > 250);
    };

    // Listen to both window and the scroll container
    const scrollContainer = document.querySelector('.snap-y.snap-mandatory');
    
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (href: string) => {
    navigate(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 text-transparent bg-clip-text hover:scale-105 transition-transform"
          >
            Home
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-sky-400 font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Right side menu */}
            <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out">
              <div className="flex flex-col h-full">
                {/* Menu header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Menu</h2>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                {/* Menu items */}
                <div className="flex-1 py-6">
                  <nav className="space-y-2">
                    {navLinks.map((link) => (
                      <button
                        key={link.href}
                        onClick={() => handleNavClick(link.href)}
                        className="block w-full text-left px-6 py-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-sky-400 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium transition-colors"
                      >
                        {link.label}
                      </button>
                    ))}
                  </nav>
                </div>
                
                {/* Menu footer */}
                <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex justify-center">
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
