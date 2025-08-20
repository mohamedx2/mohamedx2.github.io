'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { HiCode, HiExternalLink, HiSearch } from 'react-icons/hi';

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubLink?: string;
  demoLink?: string;
  category: 'framework' | 'fullstack' | 'ai' | 'database';
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'Baraqex Framework',
    description: 'A revolutionary JavaScript/TypeScript framework with WebAssembly integration, universal JSX, and zero dependencies. Complete full-stack solution with built-in SSR.',
    tags: ['TypeScript', 'WebAssembly', 'Go', 'Framework', 'SSR'],
    githubLink: 'https://github.com/mohamedx2/baraqex',
    demoLink: 'https://www.baraqex.tech',
    category: 'framework',
    featured: true,
  },
  {
    title: 'DBGO - Lightweight Database',
    description: 'A powerful database system in Go with ACID transactions, thread-safe operations, CLI tools, Node.js client library, and REST API.',
    tags: ['Go', 'Database', 'REST API', 'CLI', 'Node.js'],
    githubLink: 'https://github.com/mohamedx2/db',
    demoLink: 'https://dbgo.vercel.app/',
    category: 'database',
    featured: true,
  },
  {
    title: 'Modern E-commerce Platform',
    description: 'Full-featured e-commerce with Google OAuth, real-time cart, admin dashboard, analytics, and secure payments. Built with Next.js 15.',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'NextUI', 'NextAuth'],
    githubLink: 'https://github.com/mohamedx2/ecommerce',
    demoLink: 'https://ecommerce-ruddy-psi.vercel.app',
    category: 'fullstack',
    featured: true,
  },
  {
    title: 'AI-Powered Online Compiler',
    description: 'Online compiler with integrated AI to help learn programming languages. Deployed with Flask for robust backend support.',
    tags: ['Flask', 'AI', 'Compiler', 'Python', 'Education'],
    githubLink: 'https://github.com/mohamedx2/online_compiler_flask',
    demoLink: 'https://online-compiler-flask.onrender.com/',
    category: 'ai',
  },
  {
    title: 'Note-Taking Application',
    description: 'Modern note-taking app with drag-and-drop, NextAuth.js authentication, and Supabase backend. Clean, intuitive interface.',
    tags: ['Next.js', 'Framer Motion', 'NextAuth', 'Supabase', 'TypeScript'],
    githubLink: 'https://github.com/mohamedx2/dnd_notes_with_nextAuth_supabaseSQL',
    demoLink: 'https://dnd-notes-with-next-auth-supabase-sql.vercel.app/',
    category: 'fullstack',
  },
  {
    title: 'Mega-Tel Web Application',
    description: 'MERN stack telecom management app with real-time data handling, secure authentication, and responsive interface.',
    tags: ['MERN', 'MongoDB', 'Real-time', 'Authentication', 'React'],
    githubLink: 'https://github.com/mohamedx2/Web-Application-for-MegaTel',
    demoLink: 'https://mega-tel.surge.sh/',
    category: 'fullstack',
  },
];

const categories = [
  { id: 'all', label: 'All Projects', color: 'from-gray-500 to-gray-600' },
  { id: 'framework', label: 'Frameworks', color: 'from-purple-500 to-indigo-500' },
  { id: 'fullstack', label: 'Full Stack', color: 'from-blue-500 to-cyan-500' },
  { id: 'database', label: 'Database', color: 'from-green-500 to-teal-500' },
  { id: 'ai', label: 'AI & ML', color: 'from-pink-500 to-rose-500' },
];

export function EnhancedProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-40 left-1/4 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-40 right-1/4 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            A showcase of innovative solutions and cutting-edge technologies
          </p>

          {/* Search and Filter Controls */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-8">
            <div className="relative">
              <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
              />
            </div>
            
            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -50 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  layout: { duration: 0.3 }
                }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative group ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 h-full">
                  {project.featured && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </div>
                  )}

                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium hover:scale-110 transition-transform duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto">
                    {project.githubLink && (
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300 text-sm font-medium"
                      >
                        <HiCode className="w-4 h-4" />
                        Code
                      </motion.a>
                    )}
                    {project.demoLink && (
                      <motion.a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-sm font-medium"
                      >
                        <HiExternalLink className="w-4 h-4" />
                        Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found matching your criteria.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}