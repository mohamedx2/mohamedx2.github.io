'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiAcademicCap, HiCode, HiLightBulb, HiStar } from 'react-icons/hi';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: typeof HiCode;
  color: string;
}

const timeline: TimelineEvent[] = [
  {
    year: '2015',
    title: 'Started Programming Journey',
    description: 'Began coding at age 13, creating my first GitHub repository and falling in love with programming.',
    icon: HiCode,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    year: '2020',
    title: 'Mastered Full-Stack Development',
    description: 'Expanded skills to include modern frameworks like React, Node.js, and database technologies.',
    icon: HiLightBulb,
    color: 'from-purple-500 to-pink-500',
  },
  {
    year: '2022',
    title: 'Compiler Creation & Advanced Systems',
    description: 'Delved into compiler design and low-level programming, building innovative development tools.',
    icon: HiAcademicCap,
    color: 'from-green-500 to-teal-500',
  },
  {
    year: '2024',
    title: 'Baraqex Framework & WebAssembly',
    description: 'Created a revolutionary framework combining JavaScript/TypeScript with WebAssembly performance.',
    icon: HiStar,
    color: 'from-orange-500 to-red-500',
  },
];

const funFacts = [
  { label: 'Years of Experience', value: '9+', icon: '🚀' },
  { label: 'Projects Completed', value: '15+', icon: '💼' },
  { label: 'GitHub Commits', value: '1000+', icon: '📝' },
  { label: 'Technologies Mastered', value: '20+', icon: '⚡' },
];

export function EnhancedAboutSection() {
  const [timelineRef, timelineInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [factsRef, factsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-green-400/30 to-teal-400/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A passionate developer with a unique journey from teenage programmer to framework architect
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Personal Info & Fun Facts */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Background</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  I'm a passionate 22-year-old full-stack developer with a unique background in compiler creation. 
                  Fluent in both code and Arabic, I bring a multicultural perspective to software development.
                </p>
                <p>
                  My journey in tech started at age 13 when I created my first GitHub repository. Since then, 
                  I've been building innovative solutions that bridge the gap between traditional development 
                  and cutting-edge technologies like WebAssembly.
                </p>
                <p>
                  What sets me apart is my dedication to creating developer tools and frameworks that make 
                  software development more efficient and enjoyable. I believe in the power of clean code, 
                  innovative architecture, and continuous learning.
                </p>
              </div>
            </motion.div>

            {/* Fun Facts Grid */}
            <motion.div
              ref={factsRef}
              initial={{ opacity: 0, y: 50 }}
              animate={factsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {funFacts.map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={factsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 text-center"
                >
                  <div className="text-3xl mb-2">{fact.icon}</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {fact.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {fact.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Quick Facts */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6"
            >
              <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span>🎯</span> Quick Facts
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Arabic language enthusiast and native speaker
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Started coding on GitHub in 2015 at age 13
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Proud member of the "Java haters" club 😄
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Love bridging technology with Arabic culture
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Right Column - Timeline */}
          <div ref={timelineRef} className="space-y-8">
            <motion.h3
              initial={{ opacity: 0, x: 50 }}
              animate={timelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
            >
              Development Journey
            </motion.h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

              <div className="space-y-12">
                {timeline.map((event, index) => {
                  const Icon = event.icon;
                  return (
                    <motion.div
                      key={event.year}
                      initial={{ opacity: 0, x: 50 }}
                      animate={timelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                      transition={{ delay: index * 0.2, duration: 0.8 }}
                      className="relative flex items-start gap-6"
                    >
                      {/* Timeline Icon */}
                      <div className={`relative z-10 flex items-center justify-center w-16 h-16 bg-gradient-to-r ${event.color} rounded-full shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl font-bold text-gray-900 dark:text-white">
                            {event.year}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {event.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}