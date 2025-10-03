'use client';

import { useEffect } from 'react';

export default function Navigation() {
  useEffect(() => {
    // Clean up any browser extension attributes
    const cleanupExtensionAttributes = () => {
      const extensionAttrs = ['data--h-bstatus', 'data--h-bresult'];
      extensionAttrs.forEach(attr => {
        const elements = document.querySelectorAll(`[${attr}]`);
        elements.forEach(el => el.removeAttribute(attr));
      });
    };
    
    cleanupExtensionAttributes();
    
    // Set up mutation observer to clean up dynamically added attributes
    const observer = new MutationObserver(cleanupExtensionAttributes);
    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm" suppressHydrationWarning>
      <div className="container mx-auto px-4 py-4" suppressHydrationWarning>
        <div className="flex justify-between items-center" suppressHydrationWarning>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xl font-bold text-gray-800 dark:text-white hover:text-blue-600 transition-colors"
            suppressHydrationWarning
            type="button"
          >
            Mohamed Ali Hamroun
          </button>
          <div 
            className="hidden md:flex space-x-8"
            suppressHydrationWarning
          >
            <a href="#about" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors" suppressHydrationWarning>
              About
            </a>
            <a href="#pfe" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors" suppressHydrationWarning>
              PFE
            </a>
            <a href="#skills" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors" suppressHydrationWarning>
              Skills
            </a>
            <a href="#projects" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors" suppressHydrationWarning>
              Projects
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors" suppressHydrationWarning>
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}