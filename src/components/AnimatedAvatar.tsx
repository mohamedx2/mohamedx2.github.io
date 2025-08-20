'use client';

import { useState } from 'react';

interface AnimatedAvatarProps {
  size?: number;
  className?: string;
}

export default function AnimatedAvatar({ 
  size = 120, 
  className = '' 
}: AnimatedAvatarProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated border ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-spin" style={{ 
        width: size + 8, 
        height: size + 8,
        animationDuration: '3s'
      }} />
      
      {/* Avatar container */}
      <div 
        className="relative bg-white dark:bg-gray-900 rounded-full p-1 transition-all duration-300"
        style={{ width: size + 8, height: size + 8 }}
      >
        {/* Fallback avatar */}
        <div 
          className={`rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold transition-all duration-300 ${
            isHovered ? 'scale-110 shadow-2xl' : 'scale-100'
          }`}
          style={{ width: size, height: size, fontSize: size / 3 }}
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold" style={{ fontSize: size / 3 }}>
                MA
              </span>
            </div>
            {/* Floating emoji reactions on hover */}
            {isHovered && (
              <div className="absolute -top-2 -right-2 animate-bounce">
                <span className="text-2xl">👋</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Floating status indicator */}
      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse" />
    </div>
  );
}