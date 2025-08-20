'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HiLocationMarker, HiClock, HiCode } from 'react-icons/hi';

export function CurrentlyStatusWidget() {
  const status = {
    location: 'Tunisia',
    timezone: 'CET (UTC+1)',
    currentProject: 'Baraqex Framework',
    availability: 'Available for freelance',
    workingOn: 'WebAssembly Integration'
  };

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('en-US', {
      timeZone: 'Europe/Paris',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const [currentTime, setCurrentTime] = React.useState(getCurrentTime());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center gap-2 mb-4">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-3 h-3 bg-green-500 rounded-full"
        />
        <h3 className="font-semibold text-gray-900 dark:text-white">Currently</h3>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-3 text-sm">
          <HiLocationMarker className="w-4 h-4 text-blue-500 flex-shrink-0" />
          <span className="text-gray-600 dark:text-gray-300">
            {status.location} • {currentTime} {status.timezone}
          </span>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <HiCode className="w-4 h-4 text-purple-500 flex-shrink-0" />
          <span className="text-gray-600 dark:text-gray-300">
            Working on: <span className="text-gray-900 dark:text-white font-medium">{status.workingOn}</span>
          </span>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <HiClock className="w-4 h-4 text-green-500 flex-shrink-0" />
          <span className="text-gray-600 dark:text-gray-300">
            <span className="text-green-600 dark:text-green-400 font-medium">{status.availability}</span>
          </span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="text-xs text-gray-500 dark:text-gray-400">
          Main Project: <span className="text-blue-600 dark:text-blue-400 font-medium">{status.currentProject}</span>
        </div>
      </div>
    </motion.div>
  );
}