"use client";

import React, { useRef, useEffect } from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Fetch video as blob to avoid range request issues
        fetch('/blackhole.mp4')
            .then(res => res.blob())
            .then(blob => {
                video.src = URL.createObjectURL(blob);
                video.play().catch(() => {});
            })
            .catch(() => {
                video.src = '/blackhole.mp4';
            });
    }, []);

    return (
        <div className="relative flex flex-col h-full w-full overflow-hidden" id="about-me">
            {/* Video Background */}
            <video
                ref={videoRef}
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-[1] opacity-60"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 z-[2] bg-gradient-to-b from-transparent via-[#030014]/50 to-[#030014]" />
            
            {/* Floating orbs */}
            <div className="absolute inset-0 z-[3] pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[150px] animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-[120px] animate-float-slow" />
            </div>
            
            <HeroContent />
        </div>
    );
};

export default Hero;
