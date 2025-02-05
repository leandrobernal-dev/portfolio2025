"use client";

import { motion } from "framer-motion";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiNodedotjs,
    SiMongodb,
    SiGit,
    SiDocker,
    SiFirebase,
    SiSupabase,
    SiPython,
    SiGraphql,
    SiPostgresql,
    SiShadcnui,
} from "react-icons/si";

const technologies = [
    {
        name: "React",
        icon: SiReact,
        category: "Frontend",
    },
    {
        name: "Next.js",
        icon: SiNextdotjs,
        category: "Frontend",
    },
    {
        name: "TypeScript",
        icon: SiTypescript,
        category: "Frontend",
    },
    {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        category: "Frontend",
    },
    {
        name: "Shadcn UI",
        icon: SiShadcnui,
        category: "Frontend",
    },
    {
        name: "Node.js",
        icon: SiNodedotjs,
        category: "Backend",
    },
    {
        name: "Firebase",
        icon: SiFirebase,
        category: "Backend",
    },
    {
        name: "Supabase",
        icon: SiSupabase,
        category: "Backend",
    },
    {
        name: "MongoDB",
        icon: SiMongodb,
        category: "Backend",
    },
    {
        name: "Docker",
        icon: SiDocker,
        category: "DevOps",
    },
    {
        name: "Git",
        icon: SiGit,
        category: "DevOps",
    },
    {
        name: "Python",
        icon: SiPython,
        category: "Backend",
    },
    {
        name: "GraphQL",
        icon: SiGraphql,
        category: "Backend",
    },
    {
        name: "PostgreSQL",
        icon: SiPostgresql,
        category: "Backend",
    },
];

export default function TechStack() {
    return (
        <section id="tech" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12">Tech Stack</h2>
                <div className="space-y-12">
                    {["Frontend", "Backend", "DevOps"].map((category) => (
                        <div
                            key={category}
                            className="bg-gray-50 rounded-lg shadow-sm p-6"
                        >
                            <h3 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">
                                {category}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                                {technologies
                                    .filter(
                                        (tech) => tech.category === category
                                    )
                                    .map((tech, index) => {
                                        const Icon = tech.icon;
                                        return (
                                            <motion.div
                                                key={tech.name}
                                                initial={{
                                                    opacity: 0,
                                                    scale: 0.8,
                                                }}
                                                whileInView={{
                                                    opacity: 1,
                                                    scale: 1,
                                                }}
                                                transition={{
                                                    duration: 0.3,
                                                    delay: index * 0.1,
                                                }}
                                                whileHover={{ scale: 1.05 }}
                                                viewport={{ once: true }}
                                                className="bg-white rounded-lg p-4 flex flex-col items-center justify-center gap-3 group transition-all duration-300 ease-in-out hover:bg-gray-50 hover:shadow-md"
                                            >
                                                <Icon className="w-8 h-8 text-gray-600 group-hover:text-gray-900 transition-colors" />
                                                <span className="text-sm font-medium text-gray-800">
                                                    {tech.name}
                                                </span>
                                            </motion.div>
                                        );
                                    })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
