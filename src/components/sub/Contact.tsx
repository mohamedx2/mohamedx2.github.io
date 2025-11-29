"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import Link from "next/link";

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-10 md:px-20">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-6xl mx-auto text-center"
            >
                <motion.h2
                    variants={slideInFromLeft(0.3)}
                    className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-6"
                >
                    Get In Touch
                </motion.h2>

                <motion.p
                    variants={slideInFromLeft(0.5)}
                    className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
                >
                    I&apos;m always interested in hearing about new projects and opportunities. 
                    Feel free to reach out through any of the channels below.
                </motion.p>

                <motion.div
                    variants={slideInFromLeft(0.7)}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <Link
                        href="mailto:hamroun1969@gmail.com"
                        className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                    >
                        ✉️ Email Me
                    </Link>
                    <Link
                        href="https://github.com/mohamedx2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 rounded-lg border border-purple-500/50 text-white font-semibold hover:bg-purple-500/10 transition-all duration-300"
                    >
                        🐙 GitHub
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/mohamed-ali-hamroun-486573314/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 rounded-lg border border-purple-500/50 text-white font-semibold hover:bg-purple-500/10 transition-all duration-300"
                    >
                        💼 LinkedIn
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Contact;
