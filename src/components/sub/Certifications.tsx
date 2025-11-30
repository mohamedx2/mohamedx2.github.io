"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";

const Certifications = () => {
    const certifications = [
        {
            title: "Git & GitHub",
            issuer: "365 Data Science",
            year: "2024",
            url: "https://learn.365datascience.com/certificates/CC-1F47BE6F06/",
        },
        {
            title: "Introduction to Python",
            issuer: "365 Data Science",
            year: "2024",
            url: "https://learn.365datascience.com/certificates/CC-3D82ADAB87/",
        },
    ];

    return (
        <section id="certifications" className="py-20 px-10 md:px-20">
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
                    Certifications
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.a
                            key={index}
                            variants={slideInFromLeft(0.5 + index * 0.2)}
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-6 rounded-lg bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {cert.title}
                                    </h3>
                                    <p className="text-gray-400 mb-2">{cert.issuer}</p>
                                    <p className="text-sm text-purple-400">{cert.year}</p>
                                </div>
                                <span className="text-2xl">🎓</span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Certifications;
