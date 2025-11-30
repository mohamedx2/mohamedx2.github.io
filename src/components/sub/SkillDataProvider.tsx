"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';

interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
}

const SkillDataProvider = ({ src, width, height, index }: Props) => {
    const { ref, inView } = useInView({
        triggerOnce: true
    })

    const imageVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.8 },
        visible: { opacity: 1, y: 0, scale: 1 }
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{ 
                delay: index * 0.05,
                duration: 0.4,
                type: "spring",
                stiffness: 150
            }}
            className="relative p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 
                       hover:border-white/30 hover:bg-white/10 transition-all duration-300
                       shadow-lg hover:shadow-xl hover:shadow-purple-500/10"
        >
            <Image
                src={src}
                width={width}
                height={height}
                alt='skill image'
                className="transition-transform duration-300"
            />
        </motion.div>
    )
}

export default SkillDataProvider
