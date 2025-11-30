"use client";

import React, { useRef, useEffect } from "react";
import { Backend_skill, Frontend_skill, Full_stack, Other_skill } from "@/constants";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import { motion } from "framer-motion";

const skillCategories = [
    { skills: Frontend_skill, label: "Frontend", color: "from-cyan-500 to-blue-500" },
    { skills: Backend_skill, label: "Backend", color: "from-purple-500 to-pink-500" },
    { skills: Full_stack, label: "Full Stack", color: "from-green-500 to-emerald-500" },
    { skills: Other_skill, label: "Tools & Other", color: "from-orange-500 to-yellow-500" },
];

const Skills = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        fetch('/cards-video.mp4')
            .then(res => res.blob())
            .then(blob => {
                video.src = URL.createObjectURL(blob);
                video.play().catch(() => {});
            })
            .catch(() => {
                video.src = '/cards-video.mp4';
            });
    }, []);

    return (
        <section
            id="skills"
            className="flex flex-col items-center justify-center gap-8 min-h-screen relative overflow-hidden py-20 px-4"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                {/* Gradient Orbs */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px] animate-float-slow" />
                <div className="absolute bottom-40 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-float" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]" />
            </div>

            <SkillText />

            {/* Skills Grid with Categories */}
            <div className="relative z-10 w-full max-w-6xl mx-auto mt-8 space-y-12">
                {skillCategories.map((category, categoryIndex) => (
                    <motion.div
                        key={category.label}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Category Label */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className={`h-1 w-12 bg-gradient-to-r ${category.color} rounded-full`} />
                            <h3 className={`text-lg font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                                {category.label}
                            </h3>
                            <div className={`h-[1px] flex-1 bg-gradient-to-r ${category.color} opacity-20`} />
                        </div>

                        {/* Skills Row */}
                        <div className="flex flex-row justify-start flex-wrap gap-4 items-center">
                            {category.skills.map((image, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ 
                                        duration: 0.3, 
                                        delay: index * 0.05,
                                        type: "spring",
                                        stiffness: 200
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{ 
                                        scale: 1.15,
                                        y: -5,
                                        transition: { duration: 0.2 }
                                    }}
                                    className="relative group"
                                >
                                    {/* Glow Effect on Hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-xl blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300`} />
                                    
                                    <SkillDataProvider
                                        src={image.Image}
                                        width={image.width}
                                        height={image.height}
                                        index={index}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Video Background */}
            <div className="absolute inset-0 z-[-1]">
                <div className="w-full h-full opacity-20 flex items-center justify-center">
                    <video
                        ref={videoRef}
                        className="w-full h-auto object-cover"
                        playsInline
                        loop
                        muted
                    />
                </div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030014] to-transparent z-10" />
        </section>
    );
};

export default Skills;
