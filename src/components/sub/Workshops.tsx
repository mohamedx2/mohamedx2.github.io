"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";

const Workshops = () => {
    const workshops = [
        {
            title: "Full-Stack Development Bootcamp",
            description: "Comprehensive hands-on workshop covering complete web application development from frontend to backend with modern frameworks and databases.",
            topics: ["React", "Node.js", "MongoDB", "TypeScript"],
            date: "2024",
            image: "/workshop-1.jpg",
        },
        {
            title: "Web Development Fundamentals",
            description: "Learn the core concepts of HTML, CSS, and JavaScript to build modern web applications.",
            topics: ["HTML", "CSS", "JavaScript"],
            date: "2024",
        },
    ];

    return (
        <section id="workshops" className="py-20 px-10 md:px-20">
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
                    Workshops
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {workshops.map((workshop, index) => (
                        <motion.div
                            key={index}
                            variants={slideInFromLeft(0.5 + index * 0.2)}
                            className="rounded-lg bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer overflow-hidden"
                        >
                            {workshop.image && (
                                <div className="relative h-48 w-full overflow-hidden">
                                    <Image
                                        src={workshop.image}
                                        alt={workshop.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )}
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">
                                            {workshop.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm mb-4">
                                            {workshop.description}
                                        </p>
                                    </div>
                                    <span className="text-2xl">📚</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {workshop.topics.map((topic, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-400 border border-purple-500/30"
                                        >
                                            {topic}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-sm text-gray-500 mt-4">{workshop.date}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Workshops;
