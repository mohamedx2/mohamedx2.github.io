'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiCode, HiServer, HiDatabase } from 'react-icons/hi';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
}

const skills: Skill[] = [
  // Frontend
  { name: 'JavaScript/TypeScript', level: 95, category: 'frontend' },
  { name: 'React.js & Next.js', level: 90, category: 'frontend' },
  { name: 'Tailwind CSS', level: 85, category: 'frontend' },
  { name: 'Framer Motion', level: 80, category: 'frontend' },
  { name: 'HTML/CSS', level: 90, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Python (Flask)', level: 80, category: 'backend' },
  { name: 'Go (WebAssembly)', level: 75, category: 'backend' },
  { name: 'RESTful APIs', level: 85, category: 'backend' },
  { name: 'Compiler Design', level: 70, category: 'backend' },
  
  // Tools & Databases
  { name: 'MongoDB', level: 80, category: 'tools' },
  { name: 'Supabase', level: 75, category: 'tools' },
  { name: 'Git & GitHub', level: 90, category: 'tools' },
  { name: 'Docker', level: 70, category: 'tools' },
  { name: 'NextAuth.js', level: 80, category: 'tools' },
];

const categoryIcons = {
  frontend: HiCode,
  backend: HiServer,
  tools: HiDatabase,
};

const categoryColors = {
  frontend: 'from-blue-500 to-cyan-500',
  backend: 'from-purple-500 to-pink-500', 
  tools: 'from-green-500 to-teal-500',
};

const categoryNames = {
  frontend: 'Frontend Development',
  backend: 'Backend Development',
  tools: 'Databases & Tools',
};

interface SkillBarProps {
  skill: Skill;
  index: number;
  inView: boolean;
}

function SkillBar({ skill, index, inView }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {skill.name}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {skill.level}%
        </span>
      </div>
      
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ delay: index * 0.1 + 0.2, duration: 1, ease: "easeOut" }}
          className={`h-full bg-gradient-to-r ${categoryColors[skill.category]} rounded-full relative`}
        >
          <motion.div
            animate={{ x: [-20, 20, -20] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export function InteractiveSkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons];
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]} text-white`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {categoryNames[category as keyof typeof categoryNames]}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {categorySkills.map((skill, index) => (
                    <SkillBar 
                      key={skill.name} 
                      skill={skill} 
                      index={index} 
                      inView={inView} 
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {skills.length}+
            </div>
            <div className="text-gray-600 dark:text-gray-300">Technologies</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              9+
            </div>
            <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-2xl">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              15+
            </div>
            <div className="text-gray-600 dark:text-gray-300">Projects Built</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}