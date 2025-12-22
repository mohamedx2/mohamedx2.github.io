'use client';

/**
 * Home page component
 */

import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import TypingAnimation from '../components/TypingAnimation';
import ScrollProgress from '../components/ScrollProgress';
import ParticleSystem from '../components/ParticleSystem';
import ThemeToggle from '../components/ThemeToggle';
import DynamicStatus from '../components/DynamicStatus';
import MagneticButton from '../components/MagneticButton';
import AnimatedAvatar from '../components/AnimatedAvatar';
import InteractiveSkill from '../components/InteractiveSkill';
import FloatingActionButtons from '../components/FloatingActionButtons';
import InteractiveContactForm from '../components/InteractiveContactForm';

// Dynamically import 3D components with no SSR
const Background3D = dynamic(() => import('../components/Background3D'), { ssr: false });
const Avatar3D = dynamic(() => import('../components/Avatar3D'), { ssr: false });
const SkillsGlobe3D = dynamic(() => import('../components/SkillsGlobe3D'), { ssr: false });
const Enhanced3DProjectCard = dynamic(() => import('../components/Enhanced3DProjectCard'), { ssr: false });
export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 relative">
      {/* Interactive Background Elements */}
      <Background3D className="opacity-20" />
      <ParticleSystem className="opacity-30" />
      <ScrollProgress />
      <ThemeToggle />
      <FloatingActionButtons />
      
      {/* Hero Section with 3D */}
      <section className="container mx-auto px-4 py-20 relative">
        <div className="flex flex-col items-center text-center">
          {/* 3D Avatar */}
          <div className="mb-8 w-64 h-64 relative">
            <Avatar3D className="w-full h-full" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <AnimatedAvatar size={100} />
            </div>
          </div>
          
          {/* Dynamic Status */}
          <div className="mb-6">
            <DynamicStatus />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <TypingAnimation 
              text="Full Stack Developer" 
              speed={100}
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            />
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
            22-year-old developer passionate about full-stack development, compiler creation, and innovative solutions
          </p>
          <div className="flex gap-4">
            <MagneticButton
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              View Projects
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-6 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Contact Me
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 space-y-6">
            <p>
              I'm a passionate developer with experience in full-stack development, compiler creation, and backend frameworks. 
              My innovative mindset is focused on solving problems efficiently and crafting unique digital solutions.
            </p>
            <p>
              What sets me apart is my dedication to building innovative tools like backend frameworks and compilers, 
              always striving to make software development more efficient and user-friendly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
                <h3 className="font-semibold text-xl mb-4 text-gray-900 dark:text-white">Background</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A passionate 22-year-old full-stack developer with a unique background in compiler creation.
                  Fluent in both code and Arabic, I bring a multicultural perspective to software development.
                  My journey in tech started at age 13, and I've been building innovative solutions ever since.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
                <h3 className="font-semibold text-xl mb-4 text-gray-900 dark:text-white">Fun Facts</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Arabic language enthusiast and native speaker</li>
                  <li>• Started coding on GitHub in 2015 at age 13</li>
                  <li>• Proud member of the "Java haters" club</li>
                  <li>• Love bridging technology with Arabic culture</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Interactive Tech Stack
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Explore my skills in 3D - click and drag to rotate, scroll to zoom
          </p>
          
          {/* 3D Skills Globe */}
          <div className="mb-16 h-[600px] max-w-6xl mx-auto">
            <SkillsGlobe3D className="w-full h-full" />
          </div>
          
          <div className="text-center mb-12">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Or browse the traditional view below
            </p>
          </div>
          
          {/* Frontend Skills */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-200">
              🎨 Frontend Development
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <InteractiveSkill 
                name="JavaScript" 
                proficiency={95} 
                category="Frontend"
                description="Expert in modern ES6+ features, async/await, closures, and advanced JavaScript patterns."
              />
              <InteractiveSkill 
                name="TypeScript" 
                proficiency={90} 
                category="Frontend"
                description="Strong typing, interfaces, generics, and advanced TypeScript features for large-scale applications."
              />
              <InteractiveSkill 
                name="React.js" 
                proficiency={92} 
                category="Frontend"
                description="Hooks, context, state management, performance optimization, and component architecture."
              />
              <InteractiveSkill 
                name="Next.js" 
                proficiency={88} 
                category="Frontend"
                description="SSR, SSG, API routes, middleware, and modern Next.js 15 features for full-stack applications."
              />
              <InteractiveSkill 
                name="Tailwind CSS" 
                proficiency={85} 
                category="Frontend"
                description="Utility-first CSS, responsive design, custom components, and modern styling patterns."
              />
              <InteractiveSkill 
                name="Framer Motion" 
                proficiency={75} 
                category="Frontend"
                description="Advanced animations, transitions, and interactive UI components with physics-based motion."
              />
            </div>
          </div>

          {/* Backend Skills */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-200">
              ⚙️ Backend Development
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <InteractiveSkill 
                name="Node.js" 
                proficiency={87} 
                category="Backend"
                description="Express.js, RESTful APIs, middleware, authentication, and scalable backend architecture."
              />
              <InteractiveSkill 
                name="Python" 
                proficiency={82} 
                category="Backend"
                description="Flask, Django, data processing, AI integration, and automation scripting."
              />
              <InteractiveSkill 
                name="Go" 
                proficiency={78} 
                category="Backend"
                description="Concurrency, goroutines, web servers, and system programming with modern Go practices."
              />
              <InteractiveSkill 
                name="C" 
                proficiency={80} 
                category="Backend"
                description="System programming, memory management, and low-level optimization for performance-critical applications."
              />
            </div>
          </div>

          {/* Database & Tools */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-200">
              🗄️ Databases & DevOps
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <InteractiveSkill 
                name="MongoDB" 
                proficiency={85} 
                category="Database"
                description="NoSQL design, aggregation pipelines, indexing, and scalable document-based architectures."
              />
              <InteractiveSkill 
                name="Supabase" 
                proficiency={80} 
                category="Database"
                description="PostgreSQL, real-time subscriptions, auth, and modern backend-as-a-service solutions."
              />
              <InteractiveSkill 
                name="Docker" 
                proficiency={75} 
                category="DevOps"
                description="Containerization, multi-stage builds, orchestration, and development environment management."
              />
              <InteractiveSkill 
                name="Git" 
                proficiency={90} 
                category="DevOps"
                description="Version control, branching strategies, collaboration workflows, and advanced Git techniques."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Hover and move your mouse over the cards to see the 3D effect
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Enhanced3DProjectCard
              title="DBGO - Lightweight Database System"
              description="A simple yet powerful database system written in Go featuring ACID-like transactions, data validation, thread-safe operations, and cross-platform support. Includes CLI, Node.js client library, and REST API."
              tags={["Go", "Node.js", "REST API", "Database", "CLI"]}
              githubLink="https://github.com/mohamedx2/db"
              demoLink="https://dbgo.vercel.app/"
              featured
            />
            <Enhanced3DProjectCard
              title="Modern E-commerce Platform"
              description="Full-featured e-commerce platform with Google OAuth, real-time cart management, admin dashboard, analytics, and secure payment integration. Built with Next.js 15 and modern web technologies."
              tags={["Next.js", "TypeScript", "MongoDB", "NextUI", "Next-Auth", "Tailwind CSS"]}
              githubLink="https://github.com/mohamedx2/ecommerce"
              demoLink="https://ecommerce-ruddy-psi.vercel.app"
            />
            <Enhanced3DProjectCard
              title="Mega-Tel Web Application"
              description="A robust MERN stack application designed for managing telecommunications services. Implemented features for real-time data handling, secure authentication, and a responsive user interface."
              tags={["MERN Stack", "Real-time Data", "Authentication", "Responsive UI", "MongoDB"]}
              githubLink="https://github.com/mohamedx2/Web-Application-for-MegaTel"
              demoLink="https://mega-tel.surge.sh/"
            />
            <Enhanced3DProjectCard
              title="Note-Taking Application"
              description="A modern note-taking web app with drag-and-drop functionality for reordering notes, NextAuth.js authentication, and Supabase SQL backend. Built with Next.js and styled using @nextui-org/react for a clean, intuitive interface."
              tags={["Next.js", "Framer Motion", "NextAuth.js", "Supabase", "@nextui-org/react", "TypeScript"]}
              githubLink="https://github.com/mohamedx2/dnd_notes_with_nextAuth_supabaseSQL"
              demoLink="https://dnd-notes-with-next-auth-supabase-sql.vercel.app/"
            />
            <Enhanced3DProjectCard
              title="AI-Powered Online Compiler"
              description="Created an online compiler with integrated AI to help clients learn programming languages. Deployed using Flask for robust backend support."
              tags={["Flask", "AI Integration", "Compiler Design"]}
              githubLink="https://github.com/mohamedx2/online_compiler_flask"
              demoLink="https://online-compiler-flask.onrender.com/"
            />
            <Enhanced3DProjectCard
              title="Hotel & Coffee Table Reservation System"
              description="Collaborative MERN stack project enabling room and table reservations with a user-friendly interface and secure database operations."
              tags={["MERN Stack", "MongoDB", "Express", "React"]}
              githubLink="https://github.com/mohamedx2/bookingMern"
              demoLink="https://booking-reactjs-nine.vercel.app/"
            />
          </div>
        </div>
      </section>

      {/* PFE Project Section - Final Year Project */}
      <section id="pfe" className="relative py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-8 animate-bounce">
              <span>🎓</span>
              Final Year Project (PFE)
              <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">LIVE</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Baraqex Framework 🚀
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A powerful, modern JavaScript/TypeScript framework for building universal web applications with seamless WebAssembly integration, server-side rendering, and full-stack capabilities
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 md:p-16 hover:shadow-3xl transition-all duration-700 group border border-gray-100 dark:border-gray-800">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-4 hover:rotate-12 transition-transform duration-500 shadow-lg">
                      <Image
                        src="/logo.png"
                        alt="Baraqex Framework Logo"
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Universal Framework
                      </h3>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                          v1.0.74
                        </span>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                          1,124 weekly downloads
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
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
                    },
                    {
                      icon: "🏗️",
                      title: "Full-Stack",
                      desc: "Complete backend with API routes"
                    },
                    {
                      icon: "⚙️",
                      title: "Zero Dependencies",
                      desc: "Lightweight core, optimal performance"
                    }].map((feature, index) => (
                      <FeatureCard key={index} {...feature} />
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://www.baraqex.tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3 font-medium"
                    >
                      <span>📚</span>
                      Documentation
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <a
                      href="https://www.npmjs.com/package/baraqex"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3 font-medium"
                    >
                      <span>📦</span>
                      NPM Package
                    </a>
                    <a
                      href="https://github.com/mohamedx2/baraqex"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group border-2 border-blue-300 dark:border-blue-600 hover:border-blue-500 dark:hover:border-blue-400 text-blue-700 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-400 px-8 py-4 rounded-xl transition-all duration-300 hover:transform hover:scale-105 flex items-center justify-center gap-3 font-medium"
                    >
                      <span>🔗</span>
                      GitHub
                    </a>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl p-8 space-y-8">
                  <TechStack />
                  <PackageStats />
                  <InstallCommand />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <CertificationCard
              title="Git & GitHub"
              issuer="365 Data Science"
              date="2024"
              link="https://learn.365datascience.com/certificates/CC-1F47BE6F06/"
            />
            <CertificationCard
              title="Introduction to Python"
              issuer="365 Data Science"
              date="2024"
              link="https://learn.365datascience.com/certificates/CC-3D82ADAB87/"
            />
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section id="workshops" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Workshops & Training
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Sharing knowledge and expertise through workshops and training sessions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <WorkshopCard
              title="Workshop Title"
              description="Description of the workshop, topics covered, and key takeaways for participants."
              date="Coming Soon"
              imageUrl="/workshop-placeholder.jpg"
              participants="TBD"
            />
            {/* Additional workshop cards will be added here */}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. 
            Let's discuss how we can work together to bring your ideas to life!
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                Send me a message
              </h3>
              <InteractiveContactForm />
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800">
                <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                  Let's Connect
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Email</p>
                      <a href="mailto:hamroun1969@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                        hamroun1969@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">GitHub</p>
                      <a href="https://github.com/mohamedx2" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        @mohamedx2
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">LinkedIn</p>
                      <a href="https://www.linkedin.com/in/mohamed-ali-hamroun-486573314/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                        Mohamed Ali Hamroun
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800">
                <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                  Why Work With Me?
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">9+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Years Coding</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">15+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">24h</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">100%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


function CertificationCard({ 
  title, 
  issuer, 
  date,
  link 
}: { 
  title: string;
  issuer: string;
  date: string;
  link: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 transition-all hover:shadow-md"
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-xl text-gray-900 dark:text-white">{title}</h3>
        <span className="text-sm text-gray-500 dark:text-gray-400">{date}</span>
      </div>
      <p className="text-gray-600 dark:text-gray-300">{issuer}</p>
      <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400">
        <span className="text-sm">View Certificate</span>
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>
    </a>
  );
}

function TechStack() {
  return (
    <div>
      <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
        <span>🛠️</span> Technical Skills Applied
      </h4>
      <div className="flex flex-wrap gap-2">
        {["Software Engineering", "System Design", "Database Architecture", "API Development", "Testing & QA", "Documentation", "Project Management", "Research Methods"].map((skill, index) => (
          <span 
            key={skill} 
            className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm hover:scale-110 transition-all duration-300 cursor-pointer font-medium"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function PackageStats() {
  return (
    <div>
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
  );
}

function InstallCommand() {
  return (
    <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 border border-gray-700">
      <div className="flex items-center justify-between mb-2">
        <span className="text-green-400 text-sm font-mono">$</span>
        <button className="text-gray-400 hover:text-white text-xs">Copy</button>
      </div>
      <code className="text-blue-400 font-mono text-sm">npm install baraqex</code>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
      <div className="text-4xl text-blue-600 mb-4">
        <span>{icon}</span>
      </div>
      <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">{title}</h4>
      <p className="text-gray-600 dark:text-gray-300">{desc}</p>
    </div>
  );
}

function WorkshopCard({ 
  title, 
  description, 
  date,
  imageUrl,
  participants 
}: { 
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  participants: string;
}) {
  return (
    <div className="group bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-2xl hover:scale-105">
      {/* Workshop Image */}
      <div className="relative h-48 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 overflow-hidden">
        {imageUrl && imageUrl !== '/workshop-placeholder.jpg' ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-6xl">🎓</div>
          </div>
        )}
        {/* Date badge */}
        <div className="absolute top-4 right-4 bg-white dark:bg-gray-900 px-3 py-1 rounded-full shadow-lg">
          <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">{date}</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {description}
        </p>
        
        {/* Participants info */}
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span>{participants}</span>
        </div>
      </div>
      
      {/* Hover gradient effect */}
      <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
}
