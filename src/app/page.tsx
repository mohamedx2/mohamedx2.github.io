/**
 * Home page component
 */

'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiDownload, HiMail } from 'react-icons/hi';
import { TypingAnimation } from '../components/TypingAnimation';
import { CurrentlyStatusWidget } from '../components/CurrentlyStatusWidget';
import { EnhancedAboutSection } from '../components/EnhancedAboutSection';
import { InteractiveSkillsSection } from '../components/InteractiveSkillsSection';
import { EnhancedProjectsSection } from '../components/EnhancedProjectsSection';

export default function Home() {
  const roles = [
    'Full Stack Developer',
    'Compiler Creator',
    'Framework Architect',
    'WebAssembly Enthusiast',
    'Open Source Contributor'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center min-h-[80vh]">
          {/* Main Content */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-24 h-24 lg:w-32 lg:h-32 mx-auto lg:mx-0 mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1"
              >
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-4xl lg:text-5xl">
                  👨‍💻
                </div>
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Mohamed Ali
                </span>
              </h1>
              
              <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6 h-16">
                <TypingAnimation
                  texts={roles}
                  className="text-blue-600 dark:text-blue-400"
                  delay={2000}
                  speed={80}
                />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              22-year-old passionate developer specializing in full-stack development, 
              compiler creation, and innovative WebAssembly solutions. Building the future 
              of web technology, one framework at a time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
              >
                View Projects
                <HiDownload className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900 px-8 py-4 rounded-xl transition-all duration-300 font-medium"
              >
                <HiMail className="w-5 h-5" />
                Contact Me
              </motion.a>
            </motion.div>
          </div>

          {/* Status Widget */}
          <div className="lg:col-span-1">
            <CurrentlyStatusWidget />
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <EnhancedAboutSection />

      {/* Enhanced Skills Section */}
      <InteractiveSkillsSection />

      {/* Enhanced Projects Section */}
      <EnhancedProjectsSection />

      {/* PFE Section - Keep Original */}
      <section id="pfe" className="bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900/20 py-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-6 py-3 rounded-full mb-6">
              <span className="text-2xl">🎓</span>
              <span className="text-gray-700 dark:text-gray-300 font-medium">Final Year Project (PFE)</span>
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">LIVE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Baraqex Framework 🚀
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A powerful, modern JavaScript/TypeScript framework for building universal web applications 
              with seamless WebAssembly integration, server-side rendering, and full-stack capabilities
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-16 hover:shadow-3xl transition-all duration-700 group border border-gray-100 dark:border-gray-700">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <motion.div
                      whileHover={{ rotate: 12 }}
                      className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-4 shadow-lg"
                    >
                      <Image
                        src="/logo.png"
                        alt="Baraqex Framework Logo"
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Universal Framework</h3>
                      <div className="flex gap-4 text-sm">
                        <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full">
                          v1.0.74
                        </span>
                        <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full">
                          1,124 weekly downloads
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Baraqex revolutionizes web development by seamlessly combining modern JavaScript/TypeScript 
                    with WebAssembly's performance. Features universal JSX, built-in SSR, and a complete 
                    full-stack architecture—all with zero dependencies.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[{
                      icon: "⚡",
                      title: "Universal JSX",
                      desc: "React-like components, zero dependencies"
                    },
                    {
                      icon: "🔧", 
                      title: "WebAssembly Ready",
                      desc: "Seamless Go WASM integration"
                    },
                    {
                      icon: "🚀",
                      title: "SSR Built-in",
                      desc: "Server rendering with hydration"
                    },
                    {
                      icon: "💎",
                      title: "TypeScript First",
                      desc: "Full type safety & IntelliSense"
                    }].map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="text-2xl mb-2">{feature.icon}</div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{feature.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{feature.desc}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <motion.a
                      href="https://www.baraqex.tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
                    >
                      📚 Documentation
                    </motion.a>
                    
                    <motion.a
                      href="https://www.npmjs.com/package/baraqex"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
                    >
                      📦 NPM Package
                    </motion.a>
                    
                    <motion.a
                      href="https://github.com/mohamedx2/baraqex"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-400 dark:hover:text-gray-900 px-6 py-3 rounded-xl transition-all duration-300 font-medium"
                    >
                      🔗 GitHub
                    </motion.a>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <span>🛠️</span> Technical Skills Applied
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["Software Engineering", "System Design", "Database Architecture", "API Development", "Testing & QA", "Documentation"].map((skill, index) => (
                        <motion.span 
                          key={skill} 
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium cursor-pointer"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-2xl p-6">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <span>📊</span> Package Statistics
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white dark:bg-gray-900 p-4 rounded-lg text-center border border-blue-200 dark:border-blue-700">
                        <div className="text-2xl font-bold text-blue-600">1,124</div>
                        <div className="text-xs text-gray-500">Weekly Downloads</div>
                      </div>
                      <div className="bg-white dark:bg-gray-900 p-4 rounded-lg text-center border border-blue-200 dark:border-blue-700">
                        <div className="text-2xl font-bold text-green-600">v1.0.74</div>
                        <div className="text-xs text-gray-500">Current Version</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 border border-gray-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-green-400 text-sm font-mono">$</span>
                      <button className="text-gray-400 hover:text-white text-xs">Copy</button>
                    </div>
                    <code className="text-blue-400 font-mono text-sm">npm install baraqex</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            
            <motion.a
              href="mailto:hamroun1969@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl font-medium mb-8"
            >
              <HiMail className="w-5 h-5" />
              Email Me
            </motion.a>
            
            <div className="flex justify-center gap-6">
              <motion.a
                href="https://github.com/mohamedx2"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mohamed-ali-hamroun-486573314/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}