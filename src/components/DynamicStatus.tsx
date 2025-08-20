'use client';

import { useState } from 'react';

const statuses = [
  { emoji: '💻', text: 'Currently coding', color: 'bg-green-500' },
  { emoji: '🚀', text: 'Building amazing projects', color: 'bg-blue-500' },
  { emoji: '☕', text: 'Powered by coffee', color: 'bg-amber-500' },
  { emoji: '🎯', text: 'Available for work', color: 'bg-emerald-500' },
  { emoji: '🌙', text: 'Late night coding', color: 'bg-purple-500' },
  { emoji: '🔥', text: 'In the zone', color: 'bg-red-500' },
];

export default function DynamicStatus() {
  const [currentStatus, setCurrentStatus] = useState(0);

  const nextStatus = () => {
    setCurrentStatus(prev => (prev + 1) % statuses.length);
  };

  const status = statuses[currentStatus];

  return (
    <div 
      onClick={nextStatus}
      className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 group"
    >
      <div className={`w-3 h-3 rounded-full ${status.color} animate-pulse`} />
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
        {status.emoji} {status.text}
      </span>
    </div>
  );
}