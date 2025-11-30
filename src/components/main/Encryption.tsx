"use client";
import React, { useRef, useEffect } from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        fetch('/encryption.mp4')
            .then(res => res.blob())
            .then(blob => {
                video.src = URL.createObjectURL(blob);
                video.play().catch(() => {});
            })
            .catch(() => {
                video.src = '/encryption.mp4';
            });
    }, []);

    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden py-20">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[150px] animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-[120px] animate-float-slow" />
            </div>

            {/* Title */}
            <motion.div
                variants={slideInFromTop()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative z-10 mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-center">
                    <span className="text-white">Performance</span>
                    <span className="mx-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        &
                    </span>
                    <span className="text-white">Security</span>
                </h2>
                <div className="h-1 w-32 mx-auto mt-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
            </motion.div>

            {/* Lock Animation */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
                viewport={{ once: true }}
                className="relative z-20 flex flex-col items-center"
            >
                {/* Glowing Ring */}
                <div className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-purple-500/30 to-cyan-500/30 blur-2xl animate-glow-pulse" />
                
                {/* Lock Container */}
                <div className="relative flex flex-col items-center group cursor-pointer">
                    {/* Lock Top */}
                    <motion.div
                        whileHover={{ y: 15 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Image
                            src="/LockTop.svg"
                            alt="Lock top"
                            width={50}
                            height={50}
                            className="w-[50px] translate-y-5 transition-all duration-300"
                        />
                    </motion.div>
                    
                    {/* Lock Body */}
                    <Image
                        src="/LockMain.svg"
                        alt="Lock Main"
                        width={70}
                        height={70}
                        className="z-10 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                    />
                </div>

                {/* Badge */}
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 
                               border border-purple-500/40 backdrop-blur-sm"
                >
                    <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        🔐 End-to-End Encryption
                    </span>
                </motion.div>
            </motion.div>

            {/* Description */}
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="relative z-10 mt-10 text-center text-lg text-gray-400 max-w-md px-4"
            >
                Your data is protected with industry-leading security standards 
                and encrypted communications.
            </motion.p>

            {/* Features */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="relative z-10 mt-8 flex flex-wrap justify-center gap-4"
            >
                {['SSL/TLS', 'AES-256', 'Zero Trust'].map((feature) => (
                    <span 
                        key={feature}
                        className="px-4 py-2 text-sm text-gray-300 rounded-lg bg-white/5 border border-white/10
                                   hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
                    >
                        {feature}
                    </span>
                ))}
            </motion.div>

            {/* Video Background */}
            <div className="absolute inset-0 z-[-1] opacity-30">
                <video
                    ref={videoRef}
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030014] to-transparent z-10" />
        </section>
    );
};

export default Encryption;
