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
        <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 flex flex-col h-full group">
            <div className="relative overflow-hidden bg-black/40 h-48 w-full">
                <Image
                    src={src}
                    alt={title}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
            </div>

            <div className="relative p-5 flex-1 flex flex-col gap-3">
                <h1 className="text-2xl font-semibold text-white">{title}</h1>
                <p className="text-gray-400 text-sm flex-1">{description}</p>
                
                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {(github || demo) && (
                    <div className="flex gap-2 pt-3 border-t border-purple-500/20">
                        {github && (
                            <Link
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 py-2 px-3 rounded bg-purple-500/20 text-purple-300 hover:bg-purple-500/40 transition-colors text-center text-sm font-semibold"
                            >
                                🔗 GitHub
                            </Link>
                        )}
                        {demo && (
                            <Link
                                href={demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 py-2 px-3 rounded bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/40 transition-colors text-center text-sm font-semibold"
                            >
                                🚀 Live Demo
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
