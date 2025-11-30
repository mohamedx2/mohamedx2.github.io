import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
    src: string;
    title: string;
    description: string;
    tags?: string[];
    github?: string;
    demo?: string;
}

const ProjectCard = ({ src, title, description, tags = [], github, demo }: Props) => {
    return (
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-purple-900/10 to-cyan-900/10 backdrop-blur-sm hover-lift group h-full flex flex-col">
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            {/* Image container */}
            <div className="relative overflow-hidden h-52 w-full">
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent z-10" />
                <Image
                    src={src}
                    alt={title}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Floating badges on hover */}
                <div className="absolute top-3 right-3 flex gap-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {github && (
                        <Link
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center hover:bg-purple-500/60 transition-colors"
                        >
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                            </svg>
                        </Link>
                    )}
                    {demo && (
                        <Link
                            href={demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center hover:bg-cyan-500/60 transition-colors"
                        >
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </Link>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="relative p-6 flex-1 flex flex-col gap-4">
                <h1 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                    {title}
                </h1>
                <p className="text-gray-400 text-sm flex-1 leading-relaxed">{description}</p>
                
                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {tags.slice(0, 4).map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-colors cursor-default"
                            >
                                {tag}
                            </span>
                        ))}
                        {tags.length > 4 && (
                            <span className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-500">
                                +{tags.length - 4}
                            </span>
                        )}
                    </div>
                )}

                {/* Bottom action bar */}
                <div className="flex gap-3 pt-4 border-t border-white/5 mt-auto">
                    {github && (
                        <Link
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 py-2.5 px-4 rounded-xl bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 transition-all duration-300 text-center text-sm font-semibold border border-purple-500/20 hover:border-purple-500/40"
                        >
                            View Code
                        </Link>
                    )}
                    {demo && (
                        <Link
                            href={demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 text-center text-sm font-semibold"
                        >
                            Live Demo
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
