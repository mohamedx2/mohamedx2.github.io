'use client';

import { useState } from 'react';
import { ChevronUp, Github, Mail, FileText, User, Code, Briefcase } from 'lucide-react';

export default function FloatingActionButtons() {
  const [isExpanded, setIsExpanded] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const actionButtons = [
    { icon: User, label: 'About', action: () => scrollToSection('about'), color: 'bg-blue-500 hover:bg-blue-600' },
    { icon: Code, label: 'Skills', action: () => scrollToSection('skills'), color: 'bg-purple-500 hover:bg-purple-600' },
    { icon: Briefcase, label: 'Projects', action: () => scrollToSection('projects'), color: 'bg-green-500 hover:bg-green-600' },
    { icon: FileText, label: 'PFE', action: () => scrollToSection('pfe'), color: 'bg-orange-500 hover:bg-orange-600' },
    { icon: Mail, label: 'Contact', action: () => scrollToSection('contact'), color: 'bg-red-500 hover:bg-red-600' },
    { icon: Github, label: 'GitHub', action: () => window.open('https://github.com/mohamedx2', '_blank'), color: 'bg-gray-800 hover:bg-gray-900' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Secondary action buttons */}
      <div className={`mb-4 space-y-3 transition-all duration-300 ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        {actionButtons.map((button, index) => (
          <div
            key={button.label}
            className={`transition-all duration-300 delay-${index * 50}`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <button
              onClick={button.action}
              className={`${button.color} text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group flex items-center gap-2 pr-3`}
              title={button.label}
            >
              <button.icon className="w-5 h-5" />
              <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {button.label}
              </span>
            </button>
          </div>
        ))}
      </div>

      {/* Main floating action button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label={isExpanded ? 'Close menu' : 'Open navigation menu'}
      >
        <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-45' : 'rotate-0'}`}>
          {isExpanded ? (
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="w-4 h-0.5 bg-white absolute"></div>
              <div className="w-4 h-0.5 bg-white absolute rotate-90"></div>
            </div>
          ) : (
            <ChevronUp className="w-6 h-6" />
          )}
        </div>
      </button>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-16 right-0 bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </div>
  );
}