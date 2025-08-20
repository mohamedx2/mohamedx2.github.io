'use client';

import { useState } from 'react';

interface InteractiveSkillProps {
  name: string;
  proficiency: number; // 1-100
  category: string;
  description?: string;
}

export default function InteractiveSkill({ name, proficiency, category, description }: InteractiveSkillProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const getProficiencyColor = (level: number) => {
    if (level >= 90) return 'from-green-400 to-emerald-500';
    if (level >= 75) return 'from-blue-400 to-cyan-500';
    if (level >= 60) return 'from-yellow-400 to-orange-500';
    return 'from-gray-400 to-gray-500';
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      className={`relative p-4 rounded-xl transition-all duration-300 cursor-pointer ${
        isHovered ? 'scale-110 z-10' : 'scale-100'
      } ${
        isClicked ? 'shadow-2xl' : 'shadow-lg hover:shadow-xl'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Skill bubble */}
      <div className={`bg-gradient-to-br ${getProficiencyColor(proficiency)} text-white rounded-xl p-4 relative overflow-hidden`}>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-4 -top-4 w-16 h-16 rounded-full bg-white" />
          <div className="absolute -left-2 -bottom-2 w-8 h-8 rounded-full bg-white" />
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <h3 className="font-bold text-lg mb-1">{name}</h3>
          <p className="text-sm opacity-90 mb-2">{category}</p>
          
          {/* Proficiency bar */}
          <div className="w-full bg-white/20 rounded-full h-2 mb-2">
            <div 
              className="bg-white rounded-full h-2 transition-all duration-1000 ease-out"
              style={{ width: `${isHovered ? proficiency : 0}%` }}
            />
          </div>
          
          {/* Proficiency percentage */}
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">{proficiency}% proficient</span>
            {isHovered && (
              <span className="text-xs animate-pulse">Click for details</span>
            )}
          </div>
        </div>
      </div>
      
      {/* Expanded details */}
      {isClicked && description && (
        <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-20">
          <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      )}
    </div>
  );
}