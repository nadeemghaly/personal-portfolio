import { ChevronDown } from 'lucide-react';
import { heroData, socialLinksData } from '../data';
import { SectionWrapper, SocialLinks } from './ui';

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <SectionWrapper
    id="hero"
    className="bg-gradient-to-br from-sky-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
  >
    <section className="hero-section">
      <div className="hero-container">
        <div className="mb-6">
          <h1 className="hero-name">
            Hi, I'm{' '}
            <span className="hero-name-gradient">
              {heroData.name}
            </span>
          </h1>
          <p className="hero-title">
            {heroData.title}
          </p>
        </div>

        <p className="hero-description">
          {heroData.description}
        </p>

        <SocialLinks
          links={socialLinksData}
          size="md"
          className="mb-12"
        />

        <button
          onClick={() => scrollToSection('about')}
          className="hero-scroll-button"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="hero-scroll-icon" />
        </button>
      </div>
    </section>
    </SectionWrapper>
  );
}
