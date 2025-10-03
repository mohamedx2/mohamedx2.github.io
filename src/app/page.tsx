/**
 * Home page component
 */

import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900" suppressHydrationWarning>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 overflow-hidden" suppressHydrationWarning>
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20" suppressHydrationWarning>
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-75"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-150"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 mt-[200px]">
          <div className="flex flex-col items-center text-center">
            {/* Profile Image */}
            <div className="mb-16 relative group flex items-center justify-center">
              <div className="relative w-56 h-56 md:w-64 md:h-64 flex items-center justify-center">
                {/* Animated background shapes */}
                <div className="absolute -inset-8 opacity-60">
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl rotate-12 animate-float opacity-80"></div>
                  <div className="absolute top-8 right-0 w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full animate-float-delay opacity-70"></div>
                  <div className="absolute bottom-0 left-8 w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl rotate-45 animate-float-delay-2 opacity-60"></div>
                  <div className="absolute bottom-8 right-8 w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full animate-float opacity-50"></div>
                </div>
                
                {/* Main gradient rings */}
                <div className="absolute -inset-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow opacity-30 blur-md"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full animate-pulse opacity-40 blur-sm"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full opacity-20 blur-xs"></div>
                
                {/* Glass morphism container */}
                <div className="relative w-full h-full rounded-full backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 shadow-2xl group-hover:shadow-3xl transition-all duration-700 overflow-hidden">
                  {/* Inner glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-500"></div>
                  
                  {/* Profile image */}
                  <div className="relative w-full rounded-full h-full overflow-hidden border-4 border-white/30 dark:border-gray-800/30 group-hover:border-white/50 dark:group-hover:border-gray-700/50 transition-all duration-500">
                    <Image
                      src="/profile.jpg"
                      alt="Mohamed Ali Hamroun - Full Stack Developer"
                      fill
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700 filter group-hover:brightness-110"
                      sizes="(max-width: 768px) 224px, 256px"
                      quality={85}
                      priority
                      suppressHydrationWarning
                    />
                    
                    {/* Overlay effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Rotating border effect */}
                  <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-60 transition-opacity duration-500" style={{mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'xor'}}></div>
                </div>
                
                {/* Floating orbs */}
                <div className="absolute -top-4 -left-4 w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full animate-float opacity-80 shadow-lg"></div>
                <div className="absolute -top-6 right-4 w-4 h-4 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full animate-float-delay opacity-70 shadow-lg"></div>
                <div className="absolute top-4 -right-6 w-3 h-3 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full animate-float-delay-2 opacity-60 shadow-lg"></div>
                <div className="absolute -bottom-4 left-4 w-5 h-5 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full animate-float opacity-75 shadow-lg"></div>
                <div className="absolute bottom-4 -right-4 w-2 h-2 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full animate-float-delay opacity-50 shadow-lg"></div>
                
                {/* Enhanced status indicator */}
                <div className="absolute -bottom-4 -right-4 group/status">
                  <div className="relative">
                    {/* Pulsing background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full animate-ping opacity-40"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full animate-pulse opacity-60"></div>
                    
                    {/* Main status circle */}
                    <div className="relative w-14 h-14 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full border-4 border-white dark:border-gray-900 shadow-2xl flex items-center justify-center group-hover/status:scale-110 transition-transform duration-300 backdrop-blur-sm">
                      <span className="text-white text-xl animate-wave">👋</span>
                    </div>
                    
                    {/* Sparkle effects */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse opacity-80"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-yellow-300 rounded-full animate-ping delay-300 opacity-60"></div>
                  </div>
                </div>
                
                {/* Professional status badge */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="relative">
                    {/* Badge background with glassmorphism */}
                    <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl px-6 py-3 rounded-2xl shadow-xl border border-white/30 dark:border-gray-700/30 group-hover:scale-105 transition-all duration-300">
                      <div className="flex items-center gap-3">
                        {/* Animated status dot */}
                        <div className="relative">
                          <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                          <div className="absolute inset-0 w-3 h-3 bg-emerald-400 rounded-full animate-ping opacity-40"></div>
                        </div>
                        
                        {/* Status text with gradient */}
                        <span className="text-sm font-semibold bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
                          Available for work
                        </span>
                        
                        {/* Sparkle icon */}
                        <div className="w-4 h-4 text-emerald-500 animate-pulse">✨</div>
                      </div>
                    </div>
                    
                    {/* Badge glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-green-400/20 rounded-2xl blur-xl animate-pulse opacity-60"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent mb-6 leading-tight">
              Full Stack Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl leading-relaxed">
              22-year-old developer passionate about full-stack development, compiler creation, and innovative solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="#projects"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
              >
                <span className="flex items-center justify-center gap-2">
                  View Projects
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
              <a
                href="#contact"
                className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white dark:bg-gray-900 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 dark:from-white dark:to-blue-100 bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm a passionate developer with experience in full-stack development, compiler creation, and backend frameworks. 
                  My innovative mindset is focused on solving problems efficiently and crafting unique digital solutions.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  What sets me apart is my dedication to building innovative tools like backend frameworks and compilers, 
                  always striving to make software development more efficient and user-friendly.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Quick Stats</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Years of Experience</span>
                      <span className="font-bold text-blue-600">9+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Projects Completed</span>
                      <span className="font-bold text-purple-600">50+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-300">GitHub Since</span>
                      <span className="font-bold text-green-600">2015</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl border border-blue-100 dark:border-blue-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <span className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-xl">📖</span>
                  Background
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  A passionate 22-year-old full-stack developer with a unique background in compiler creation.
                  Fluent in both code and Arabic, I bring a multicultural perspective to software development.
                  My journey in tech started at age 13, and I've been building innovative solutions ever since.
                </p>
              </div>
              
              <div className="group bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl border border-purple-100 dark:border-purple-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <span className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-xl">🎯</span>
                  Fun Facts
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                    Arabic language enthusiast and native speaker
                  </li>
                  <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                    Started coding on GitHub in 2015 at age 13
                  </li>
                  <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                    Proud member of the "Java haters" club
                  </li>
                  <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                    Love bridging technology with Arabic culture
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-800 dark:via-blue-900/10 dark:to-purple-900/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 dark:from-white dark:to-purple-100 bg-clip-text text-transparent mb-4">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <SkillCategory 
              title="Frontend Development"
              skills={[
                "JavaScript",
                "TypeScript",
                "React.js",
                "Next.js",
                "HTML",
                "CSS",
                "Tailwind CSS",
                "@nextui-org/react",
                "Framer Motion"
              ]}
            />
            <SkillCategory 
              title="Backend Development"
              skills={[
                "Node.js",
                "Python (Flask)",
                "PHP",
                "C",
                "Java",
                "RESTful APIs",
                "Express.js"
              ]}
            />
            <SkillCategory 
              title="Databases & Tools"
              skills={[
                "MongoDB",
                "Supabase",
                "SQL",
                "Docker",
                "Git (Certified)",
                "NextAuth.js",
                "JWT",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 dark:from-white dark:to-blue-100 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            <ProjectCard
              title="DBGO - Lightweight Database System"
              description="A simple yet powerful database system written in Go featuring ACID-like transactions, data validation, thread-safe operations, and cross-platform support. Includes CLI, Node.js client library, and REST API."
              tags={["Go", "Node.js", "REST API", "Database", "CLI"]}
              githubLink="https://github.com/mohamedx2/db"
              demoLink="https://dbgo.vercel.app/"
            />
            <ProjectCard
              title="Modern E-commerce Platform"
              description="Full-featured e-commerce platform with Google OAuth, real-time cart management, admin dashboard, analytics, and secure payment integration. Built with Next.js 15 and modern web technologies."
              tags={["Next.js", "TypeScript", "MongoDB", "NextUI", "Next-Auth", "Tailwind CSS"]}
              githubLink="https://github.com/mohamedx2/ecommerce"
              demoLink="https://ecommerce-ruddy-psi.vercel.app"
            />
            <ProjectCard
              title="Mega-Tel Web Application"
              description="A robust MERN stack application designed for managing telecommunications services. Implemented features for real-time data handling, secure authentication, and a responsive user interface."
              tags={["MERN Stack", "Real-time Data", "Authentication", "Responsive UI", "MongoDB"]}
              githubLink="https://github.com/mohamedx2/Web-Application-for-MegaTel"
              demoLink="https://mega-tel.surge.sh/"
            />
            <ProjectCard
              title="Note-Taking Application"
              description="A modern note-taking web app with drag-and-drop functionality for reordering notes, NextAuth.js authentication, and Supabase SQL backend. Built with Next.js and styled using @nextui-org/react for a clean, intuitive interface."
              tags={["Next.js", "Framer Motion", "NextAuth.js", "Supabase", "@nextui-org/react", "TypeScript"]}
              githubLink="https://github.com/mohamedx2/dnd_notes_with_nextAuth_supabaseSQL"
              demoLink="https://dnd-notes-with-next-auth-supabase-sql.vercel.app/"
            />
            <ProjectCard
              title="AI-Powered Online Compiler"
              description="Created an online compiler with integrated AI to help clients learn programming languages. Deployed using Flask for robust backend support."
              tags={["Flask", "AI Integration", "Compiler Design"]}
              githubLink="https://github.com/mohamedx2/online_compiler_flask"
              demoLink="https://online-compiler-flask.onrender.com/"
            />
            <ProjectCard
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
                        suppressHydrationWarning
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

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900/20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-75"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 dark:from-white dark:to-purple-100 bg-clip-text text-transparent mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities.
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 mb-8">
              <a
                href="mailto:hamroun1969@gmail.com"
                className="group block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
              >
                <span className="flex items-center justify-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Me
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            </div>
            
            <div className="flex justify-center gap-8">
              <a 
                href="https://github.com/mohamedx2" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-600 dark:text-gray-300 font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors">GitHub</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/mohamed-ali-hamroun-486573314/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <span className="text-gray-600 dark:text-gray-300 font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SkillCategory({ title, skills }: Readonly<{ title: string; skills: string[] }>) {
  const gradients = {
    "Frontend Development": "from-blue-500 to-cyan-500",
    "Backend Development": "from-purple-500 to-pink-500",
    "Databases & Tools": "from-green-500 to-blue-500"
  };
  
  const bgGradients = {
    "Frontend Development": "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
    "Backend Development": "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20", 
    "Databases & Tools": "from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20"
  };
  
  return (
    <div className={`group p-8 bg-gradient-to-br ${bgGradients[title as keyof typeof bgGradients]} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/50 dark:border-gray-700/50`}>
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-12 h-12 bg-gradient-to-r ${gradients[title as keyof typeof gradients]} rounded-xl flex items-center justify-center text-white font-bold text-lg`}>
          {title.charAt(0)}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <ul className="space-y-3">
        {skills.map((skill) => (
          <li key={skill} className="flex items-center gap-3 text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
            <span className={`w-2 h-2 bg-gradient-to-r ${gradients[title as keyof typeof gradients]} rounded-full flex-shrink-0`}></span>
            <span className="font-medium">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ 
  title, 
  description, 
  tags,
  githubLink,
  demoLink 
}: Readonly<{ 
  title: string; 
  description: string; 
  tags: string[];
  githubLink?: string;
  demoLink?: string;
}>) {
  return (
    <div className="group relative">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
      
      <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium hover:scale-110 transition-transform duration-200"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all duration-200 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">GitHub</span>
              <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg"
            >
              <span className="font-medium">Live Demo</span>
              <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function CertificationCard({ 
  title, 
  issuer, 
  date,
  link 
}: Readonly<{ 
  title: string;
  issuer: string;
  date: string;
  link: string;
}>) {
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

function FeatureCard({ icon, title, desc }: Readonly<{ icon: string; title: string; desc: string }>) {
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
