"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

const About = () => {
    return (
        <section id="about" className="py-20 px-10 md:px-20">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-6xl mx-auto"
            >
                <motion.h2
                    variants={slideInFromLeft(0.3)}
                    className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-10"
                >
                    About Me
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <motion.div
                        variants={slideInFromLeft(0.5)}
                        className="space-y-4"
                    >
                        <p className="text-lg text-gray-300 leading-relaxed">
                            I&apos;m a passionate 22-year-old full-stack developer with a unique 
                            background in compiler creation. Fluent in both code and Arabic, I bring 
                            a multicultural perspective to software development.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            My journey in tech started at age 13, and I&apos;ve been building innovative 
                            solutions ever since. I have experience in full-stack development, compiler 
                            creation, and backend frameworks. My innovative mindset is focused on solving 
                            problems efficiently and crafting unique digital solutions.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            What sets me apart is my dedication to building innovative tools like backend 
                            frameworks and compilers, always striving to make software development more 
                            efficient and user-friendly.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={slideInFromRight(0.5)}
                        className="space-y-6"
                    >
                        <div>
                            <h3 className="text-2xl font-semibold text-white mb-4">Quick Stats</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/30">
                                    <p className="text-3xl font-bold text-purple-400">2+</p>
                                    <p className="text-gray-400">Years Experience</p>
                                </div>
                                <div className="p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/30">
                                    <p className="text-3xl font-bold text-cyan-400">10+</p>
                                    <p className="text-gray-400">Projects</p>
                                </div>
                                <div className="p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/30">
                                    <p className="text-3xl font-bold text-purple-400">2015</p>
                                    <p className="text-gray-400">GitHub Since</p>
                                </div>
                                <div className="p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/30">
                                    <p className="text-3xl font-bold text-cyan-400">13</p>
                                    <p className="text-gray-400">Age Started</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-white mb-4">Fun Facts</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li>🌍 Arabic language enthusiast and native speaker</li>
                                <li>💻 Started coding on GitHub at age 13</li>
                                <li>☕ Proud member of the &quot;Java haters&quot; club</li>
                                <li>🌉 Love bridging technology with Arabic culture</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
