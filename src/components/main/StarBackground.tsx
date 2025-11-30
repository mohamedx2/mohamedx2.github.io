"use client";

import React, { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import the entire Three.js canvas to avoid SSR issues
const ThreeStarsCanvas = dynamic(
    () => import("./ThreeStars.js").then((mod) => mod.default),
    { 
        ssr: false,
        loading: () => <div className="w-full h-full fixed inset-0 z-[20] bg-[#030014]" />
    }
);

// Fallback CSS stars for when WebGL fails
const CSSStars = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const stars: { x: number; y: number; size: number; speed: number; opacity: number }[] = [];
        for (let i = 0; i < 300; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2,
                speed: Math.random() * 0.3 + 0.1,
                opacity: Math.random() * 0.5 + 0.5
            });
        }

        let animationId: number;
        const animate = () => {
            ctx.fillStyle = 'rgba(3, 0, 20, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (const star of stars) {
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();

                star.y += star.speed;
                star.x += star.speed * 0.5;
                if (star.y > canvas.height || star.x > canvas.width) {
                    star.y = 0;
                    star.x = Math.random() * canvas.width;
                }
            }

            animationId = requestAnimationFrame(animate);
        };

        ctx.fillStyle = 'rgb(3, 0, 20)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full fixed inset-0 z-[20]"
        />
    );
};

const StarsCanvas = () => {
    const [useWebGL, setUseWebGL] = useState(true);
    const [mounted, setMounted] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Check WebGL support
        try {
            const canvas = document.createElement('canvas');
            const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            if (!gl) {
                setUseWebGL(false);
            }
        } catch {
            setUseWebGL(false);
        }
    }, []);

    if (!mounted) {
        return <div className="w-full h-full fixed inset-0 z-[20] bg-[#030014]" />;
    }

    if (!useWebGL || hasError) {
        return <CSSStars />;
    }

    return (
        <ErrorBoundary onError={() => setHasError(true)} fallback={<CSSStars />}>
            <ThreeStarsCanvas />
        </ErrorBoundary>
    );
};

// Simple Error Boundary
class ErrorBoundary extends React.Component<
    { children: React.ReactNode; fallback: React.ReactNode; onError?: () => void },
    { hasError: boolean }
> {
    constructor(props: { children: React.ReactNode; fallback: React.ReactNode; onError?: () => void }) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch() {
        this.props.onError?.();
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }
        return this.props.children;
    }
}

export default StarsCanvas;
