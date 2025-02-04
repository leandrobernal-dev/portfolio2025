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
} from "react-icons/si";

const technologies = [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Firebase", icon: SiFirebase },
    { name: "Supabase", icon: SiSupabase },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Docker", icon: SiDocker },
    { name: "Git", icon: SiGit },
    { name: "Python", icon: SiPython },
    { name: "GraphQL", icon: SiGraphql },
];

export default function TechStack() {
    return (
        <section id="tech" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12">Tech Stack</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {technologies.map((tech, index) => {
                        const Icon = tech.icon;
                        return (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.1,
                                }}
                                whileHover={{ scale: 1.05 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center gap-4 group"
                            >
                                <Icon className="w-8 h-8 text-gray-600 group-hover:text-gray-900 transition-colors" />
                                <span className="text-lg font-medium text-gray-800">
                                    {tech.name}
                                </span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
