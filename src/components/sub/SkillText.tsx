"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
    return (
        <div className='relative z-10 w-full h-auto flex flex-col items-center justify-center mb-8'>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-6"
            >
                <SparklesIcon className="text-purple-400 h-5 w-5 animate-pulse" />
                <span className="text-sm font-medium text-purple-300">
                    Full Stack Developer
                </span>
            </motion.div>
            
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className='text-4xl md:text-5xl font-bold text-center mb-4'
            >
                <span className="text-white">My </span>
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Tech Stack
                </span>
            </motion.h2>
            
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className='text-lg text-gray-400 text-center max-w-xl'
            >
                Building modern, scalable applications with cutting-edge technologies
            </motion.p>
            
            {/* Decorative Line */}
            <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-8 h-1 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
            />
        </div>
    )
}

export default SkillText
