"use client";

import React from "react";
import {
    RxGithubLogo,
    RxLinkedinLogo,
} from "react-icons/rx";
import { FaEnvelope, FaHeart, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

const socialLinks = [
    { icon: RxGithubLogo, label: "GitHub", href: "https://github.com/mohamedx2" },
    { icon: RxLinkedinLogo, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: FaEnvelope, label: "Email", href: "mailto:hamroun1969@gmail.com" },
];

const Footer = () => {
    return (
        <footer className="relative w-full bg-gradient-to-t from-[#0a0118] to-transparent pt-20 pb-8 z-[20]">
            {/* Top Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

            <div className="max-w-6xl mx-auto px-6">
                {/* Main Footer Content */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                    {/* Logo & Description */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center md:text-left"
                    >
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                            Mohamed Ali
                        </h3>
                        <p className="text-gray-400 text-sm max-w-xs">
                            Full Stack Developer passionate about creating beautiful and functional web experiences.
                        </p>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4"
                    >
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative p-3 rounded-xl bg-white/5 border border-white/10 
                                         hover:border-purple-500/50 hover:bg-purple-500/10 
                                         transition-all duration-300"
                                aria-label={social.label}
                            >
                                <social.icon className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                                
                                {/* Tooltip */}
                                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 text-xs
                                               bg-white/10 backdrop-blur-sm rounded-lg border border-white/10
                                               opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    {social.label}
                                </span>
                            </a>
                        ))}
                    </motion.div>

                    {/* Quick Contact */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-center md:text-right"
                    >
                        <p className="text-gray-400 text-sm mb-2">Get in touch</p>
                        <a 
                            href="mailto:hamroun1969@gmail.com"
                            className="text-purple-400 hover:text-cyan-400 transition-colors"
                        >
                            hamroun1969@gmail.com
                        </a>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2"
                    >
                        <FaCode className="text-purple-500" />
                        <span>Built with Next.js & Tailwind CSS</span>
                    </motion.p>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2"
                    >
                        Made with <FaHeart className="text-red-500 animate-pulse" /> by Mohamed Ali
                    </motion.p>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        &copy; {new Date().getFullYear()} All rights reserved
                    </motion.p>
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-purple-500/10 blur-[100px] pointer-events-none" />
        </footer>
    );
};

export default Footer;
