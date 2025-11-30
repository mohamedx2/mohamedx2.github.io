"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col lg:flex-row items-center justify-center px-6 md:px-20 mt-20 md:mt-40 w-full z-[20] min-h-screen"
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center lg:text-start">
                <motion.div
                    variants={slideInFromTop()}
                    className="Welcome-box py-[8px] px-[16px] border border-[#7042f88b] opacity-[0.9] mx-auto lg:mx-0 backdrop-blur-sm bg-[#030014]/50"
                >
                    <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 animate-pulse" />
                    <h1 className="Welcome-text text-[13px] tracking-wider">
                        Fullstack Developer Portfolio
                    </h1>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto mx-auto lg:mx-0"
                >
                    <span className="leading-tight">
                        Providing
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5e6c8] via-[#d4a574] to-[#8b6914]">
                            {" "}the best{" "}
                        </span>
                        project experience
                    </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-lg text-gray-400 my-5 max-w-[600px] mx-auto lg:mx-0 leading-relaxed"
                >
                    I&apos;m a Full Stack Software Engineer with experience in Website,
                    Mobile, and Software development. Check out my projects and skills.
                </motion.p>
                
                <motion.div
                    variants={slideInFromLeft(1)}
                    className="flex gap-4 justify-center lg:justify-start"
                >
                    <a
                        href="#projects"
                        className="group relative py-3 px-8 text-center text-white cursor-pointer rounded-full overflow-hidden hover-lift"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600"></span>
                        <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        <span className="relative z-10 font-semibold tracking-wide">View Projects</span>
                    </a>
                    <a
                        href="#contact"
                        className="py-3 px-8 text-center text-white cursor-pointer rounded-full border border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 backdrop-blur-sm font-semibold tracking-wide"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </div>

            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-full h-full flex justify-center items-center mt-10 lg:mt-0"
            >
                <div className="relative animate-float">
                    {/* Outer glow rings */}
                    <div className="absolute -inset-8 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-full blur-xl"></div>
                    
                    {/* Orbiting elements */}
                    <div className="absolute inset-0 animate-orbit" style={{ animationDuration: '15s' }}>
                        <div className="w-3 h-3 bg-purple-500 rounded-full blur-sm"></div>
                    </div>
                    <div className="absolute inset-0 animate-orbit" style={{ animationDuration: '20s', animationDelay: '-5s' }}>
                        <div className="w-2 h-2 bg-cyan-500 rounded-full blur-sm"></div>
                    </div>
                    
                    {/* Main image */}
                    <div className="relative animate-glow-pulse rounded-full">
                        <Image
                            src="/profile.jpg"
                            alt="Mohamed Ali Hamroun"
                            height={350}
                            width={350}
                            className="relative rounded-full border-2 border-purple-500/50 shadow-2xl shadow-purple-500/30 object-cover"
                            priority
                        />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default HeroContent;
