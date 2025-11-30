import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
    const projects = [
        {
            src: "/project-dbgo.svg",
            title: "DBGO - Lightweight Database System",
            description: "A simple yet powerful database system written in Go featuring ACID-like transactions, data validation, thread-safe operations, and cross-platform support.",
            tags: ["Go", "Node.js", "REST API", "Database", "CLI"],
            github: "https://github.com/mohamedx2/db",
            demo: "https://dbgo.vercel.app/",
        },
        {
            src: "/project-ecommerce.svg",
            title: "Modern E-commerce Platform",
            description: "Full-featured e-commerce platform with Google OAuth, real-time cart management, admin dashboard, analytics, and secure payment integration.",
            tags: ["Next.js", "TypeScript", "MongoDB", "NextUI", "Next-Auth"],
            github: "https://github.com/mohamedx2/ecommerce",
            demo: "https://ecommerce-ruddy-psi.vercel.app/",
        },
        {
            src: "/project-megatel.svg",
            title: "Mega-Tel Web Application",
            description: "A robust MERN stack application designed for managing telecommunications services with real-time data handling and secure authentication.",
            tags: ["MERN", "Real-time Data", "Authentication", "MongoDB", "React"],
            github: "https://github.com/mohamedx2/Web-Application-for-MegaTel",
            demo: "https://mega-tel.surge.sh/",
        },
        {
            src: "/project-notes.svg",
            title: "Note-Taking Application",
            description: "A modern note-taking web app with drag-and-drop functionality, NextAuth.js authentication, and Supabase SQL backend.",
            tags: ["Next.js", "Framer Motion", "NextAuth", "Supabase", "TypeScript"],
            github: "https://github.com/mohamedx2/dnd_notes_with_nextAuth_supabaseSQL",
            demo: "https://dnd-notes-with-next-auth-supabase-sql.vercel.app/",
        },
        {
            src: "/project-compiler.svg",
            title: "AI-Powered Online Compiler",
            description: "An online compiler with integrated AI to help clients learn programming languages. Deployed using Flask for robust backend support.",
            tags: ["Flask", "AI Integration", "Compiler Design", "Python"],
            github: "https://github.com/mohamedx2/online_compiler_flask",
            demo: "https://online-compiler-flask.onrender.com/",
        },
        {
            src: "/project-booking.svg",
            title: "Hotel & Coffee Table Reservation System",
            description: "A collaborative MERN stack project enabling room and table reservations with a user-friendly interface and secure database operations.",
            tags: ["MERN Stack", "MongoDB", "Express", "React"],
            github: "https://github.com/mohamedx2/bookingMern",
            demo: "https://booking-reactjs-nine.vercel.app/",
        },
    ];

    return (
        <div
            className="flex flex-col items-center justify-center py-20"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Projects
            </h1>
            <div className="h-full w-full flex flex-col gap-10 px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            src={project.src}
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                            github={project.github}
                            demo={project.demo}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
