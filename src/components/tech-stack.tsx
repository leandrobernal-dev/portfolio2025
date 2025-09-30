"use client";

import { motion } from "framer-motion";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiShadcnui,
    SiVite,
    SiNodedotjs,
    SiExpress,
    SiLaravel,
    SiDjango,
    SiGraphql,
    SiFirebase,
    SiSupabase,
    SiPostgresql,
    SiMysql,
    SiMongodb,
    SiDocker,
    SiGit,
    SiGithubactions,
    SiKubernetes,
    SiAnsible,
    SiGooglecloud,
    SiNginx,
    SiApache,
    SiPython,
    SiPhp,
    SiJavascript,
} from "react-icons/si";
// ...existing code...
import { Card, CardContent } from "@/components/ui/card";
import { Code, Server, Settings } from "lucide-react";
import { FaAws } from "react-icons/fa";

const technologies = {
    languages: [
        {
            name: "JavaScript",
            icon: SiJavascript,
            color: "text-yellow-500",
        },
        {
            name: "TypeScript",
            icon: SiTypescript,
            color: "text-blue-600",
        },
        {
            name: "Python",
            icon: SiPython,
            color: "text-yellow-600",
        },
        {
            name: "PHP",
            icon: SiPhp,
            color: "text-indigo-600",
        },
    ],
    frontend: [
        { name: "React", icon: SiReact, color: "text-blue-500" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-gray-800" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
        { name: "Shadcn UI", icon: SiShadcnui, color: "text-gray-700" },
        { name: "Vite", icon: SiVite, color: "text-purple-500" },
    ],
    backend: [
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
        { name: "Express.js", icon: SiExpress, color: "text-gray-700" },
        { name: "Laravel", icon: SiLaravel, color: "text-red-600" },
        { name: "Django", icon: SiDjango, color: "text-green-800" },
        { name: "GraphQL", icon: SiGraphql, color: "text-pink-600" },
        { name: "Firebase", icon: SiFirebase, color: "text-orange-500" },
        { name: "Supabase", icon: SiSupabase, color: "text-emerald-600" },
    ],
    databases: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
        { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-700" },
    ],
    devops: [
        { name: "Docker", icon: SiDocker, color: "text-blue-600" },
        { name: "Git", icon: SiGit, color: "text-orange-600" },
        {
            name: "GitHub Actions",
            icon: SiGithubactions,
            color: "text-blue-500",
        },
        { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-400" },
        { name: "Ansible", icon: SiAnsible, color: "text-red-600" },
        { name: "AWS", icon: FaAws, color: "text-orange-500" },
        { name: "Google Cloud", icon: SiGooglecloud, color: "text-blue-500" },
        { name: "Nginx", icon: SiNginx, color: "text-green-600" },
        { name: "Apache", icon: SiApache, color: "text-red-600" },
    ],
};

const techCategories = [
    { key: "languages", label: "Languages" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "databases", label: "Databases" },
    { key: "devops", label: "DevOps" },
];

export default function TechStack() {
    return (
        <section
            id="skills"
            className="py-16 neuro-section px-2 sm:px-4 lg:px-16"
        >
            <div className="container mx-auto px-2">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <div className="neuro-card p-6 max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold mb-2 text-gray-800">
                            Technology Stack
                        </h2>
                        <p className="text-base text-gray-600">
                            The tools and technologies I use to bring ideas to
                            life.
                        </p>
                    </div>
                </motion.div>

                <Card className="neuro-card overflow-hidden">
                    <CardContent className="p-4 lg:p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                            {techCategories.map((cat) => (
                                <div
                                    key={cat.key}
                                    className="flex flex-col items-center"
                                >
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                        {cat.label}
                                    </h3>
                                    <div className="grid grid-cols-3 gap-2">
                                        {technologies[
                                            cat.key as keyof typeof technologies
                                        ].map((tech, idx) => {
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
                                                        delay: idx * 0.05,
                                                    }}
                                                    whileHover={{
                                                        scale: 1.08,
                                                        y: -2,
                                                    }}
                                                    viewport={{ once: true }}
                                                    className="group"
                                                >
                                                    <div className="neuro-tech p-2 flex flex-col items-center justify-center gap-1 min-h-[60px]">
                                                        <Icon
                                                            className={`w-6 h-6 ${tech.color} group-hover:scale-110 transition-transform duration-200`}
                                                        />
                                                        <span className="text-[11px] font-medium text-gray-700 text-center leading-tight">
                                                            {tech.name}
                                                        </span>
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-10 text-center"
                >
                    <div className="neuro-card p-6 max-w-2xl mx-auto">
                        <h3 className="text-lg font-bold text-gray-800 mb-2">
                            Always Learning
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Technology evolves rapidly, and I'm committed to
                            continuous learning. I regularly explore new tools,
                            frameworks, and best practices to stay current with
                            industry trends and deliver cutting-edge solutions.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
