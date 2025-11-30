"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { FaEnvelope, FaArrowRight } from "react-icons/fa";

const contactMethods = [
    {
        icon: FaEnvelope,
        label: "Email",
        value: "hamroun1969@gmail.com",
        href: "mailto:hamroun1969@gmail.com",
        color: "from-purple-500 to-pink-500",
        description: "Drop me a line anytime",
    },
    {
        icon: RxGithubLogo,
        label: "GitHub",
        value: "@mohamedx2",
        href: "https://github.com/mohamedx2",
        color: "from-gray-600 to-gray-800",
        description: "Check out my projects",
    },
    {
        icon: RxLinkedinLogo,
        label: "LinkedIn",
        value: "Mohamed Ali Hamroun",
        href: "https://www.linkedin.com/in/mohamed-ali-hamroun-486573314/",
        color: "from-blue-500 to-blue-700",
        description: "Let's connect professionally",
    },
];

const Contact = () => {
    return (
        <section id="contact" className="relative min-h-screen py-24 px-6 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-cyan-500/20 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full 
                                   bg-gradient-to-r from-purple-500/20 to-cyan-500/20 
                                   border border-purple-500/30 text-purple-300">
                        Let&apos;s Work Together
                    </span>
                    
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="text-white">Get In </span>
                        <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                            Touch
                        </span>
                    </h2>
                    
                    <p className="text-lg text-gray-400 max-w-xl mx-auto">
                        I&apos;m always excited to discuss new projects, creative ideas, 
                        or opportunities to be part of your vision.
                    </p>
                </motion.div>

                {/* Contact Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {contactMethods.map((method, index) => (
                        <motion.div
                            key={method.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Link
                                href={method.href}
                                target={method.href.startsWith('mailto') ? undefined : "_blank"}
                                rel={method.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                                className="group block h-full p-6 rounded-2xl bg-white/5 backdrop-blur-sm 
                                         border border-white/10 hover:border-purple-500/50 
                                         hover:bg-white/10 transition-all duration-300"
                            >
                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} 
                                               flex items-center justify-center mb-4
                                               group-hover:scale-110 transition-transform duration-300`}>
                                    <method.icon className="w-7 h-7 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors">
                                    {method.label}
                                </h3>
                                <p className="text-sm text-gray-500 mb-3">{method.description}</p>
                                <p className="text-gray-400 group-hover:text-white transition-colors flex items-center gap-2">
                                    {method.value}
                                    <FaArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </p>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="inline-flex flex-col sm:flex-row gap-4 p-2 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                        <Link
                            href="mailto:hamroun1969@gmail.com"
                            className="group relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden"
                        >
                            {/* Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:scale-105 transition-transform duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            <span className="relative flex items-center gap-2">
                                <FaEnvelope className="w-4 h-4" />
                                Send a Message
                            </span>
                        </Link>
                        
                        <Link
                            href="https://github.com/mohamedx2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 rounded-xl font-semibold text-white 
                                     border border-white/20 hover:border-purple-500/50 
                                     hover:bg-purple-500/10 transition-all duration-300
                                     flex items-center gap-2"
                        >
                            <RxGithubLogo className="w-5 h-5" />
                            View My Work
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030014] to-transparent z-10" />
        </section>
    );
};

export default Contact;
