"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import Link from "next/link";

const Baraqex = () => {
    const features = [
        {
            icon: "⚡",
            title: "Universal JSX",
            description: "React-like components, zero dependencies",
        },
        {
            icon: "🚀",
            title: "WebAssembly Ready",
            description: "Seamless Go WASM integration",
        },
        {
            icon: "🔄",
            title: "SSR Built-in",
            description: "Server rendering with hydration",
        },
        {
            icon: "💎",
            title: "TypeScript First",
            description: "Full type safety & IntelliSense",
        },
        {
            icon: "🏗️",
            title: "Full-Stack",
            description: "Complete backend with API routes",
        },
        {
            icon: "⚙️",
            title: "Zero Dependencies",
            description: "Lightweight core, optimal performance",
        },
    ];

    return (
        <section id="baraqex" className="py-20 px-10 md:px-20 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-6xl mx-auto"
            >
                <motion.div
                    variants={slideInFromLeft(0.3)}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
                        Baraqex Framework 🚀
                    </h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        A powerful, modern JavaScript/TypeScript framework for building universal web 
                        applications with seamless WebAssembly integration, server-side rendering, and 
                        full-stack capabilities
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12">
                    <motion.div
                        variants={slideInFromLeft(0.5)}
                        className="space-y-4"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/30"
                                >
                                    <p className="text-2xl mb-2">{feature.icon}</p>
                                    <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                                    <p className="text-sm text-gray-400">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        variants={slideInFromRight(0.5)}
                        className="p-8 rounded-lg bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/30"
                    >
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="flex-1">
                                    <p className="text-sm text-gray-400">Current Version</p>
                                    <p className="text-2xl font-bold text-purple-400">v1.0.74</p>
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-400">Weekly Downloads</p>
                                    <p className="text-2xl font-bold text-cyan-400">1,124</p>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-purple-500/30">
                                <p className="text-sm text-gray-400 mb-3">Installation</p>
                                <code className="block p-3 bg-black/40 rounded border border-purple-500/20 text-cyan-400 text-sm overflow-x-auto">
                                    npm install baraqex
                                </code>
                            </div>

                            <div className="flex gap-3 pt-6">
                                <Link
                                    href="https://www.baraqex.tech/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 py-2 px-4 rounded bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold text-center hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                                >
                                    📚 Documentation
                                </Link>
                                <Link
                                    href="https://www.npmjs.com/package/baraqex"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 py-2 px-4 rounded border border-purple-500/50 text-white font-semibold text-center hover:bg-purple-500/10 transition-all duration-300"
                                >
                                    📦 NPM Package
                                </Link>
                                <Link
                                    href="https://github.com/mohamedx2/baraqex"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 py-2 px-4 rounded border border-purple-500/50 text-white font-semibold text-center hover:bg-purple-500/10 transition-all duration-300"
                                >
                                    🔗 GitHub
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Baraqex;
