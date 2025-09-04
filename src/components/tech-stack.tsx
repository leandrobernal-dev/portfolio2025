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
    SiApache,
    SiNginx,
    SiGooglecloud,
    SiAwslambda,
    SiGithubactions,
    SiKubernetes,
    SiAnsible,
    SiVite,
    SiMysql,
    SiExpress,
    SiDjango,
} from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Server, Settings } from "lucide-react";
import { FaAws } from "react-icons/fa";

const technologies = [
    {
        name: "React",
        icon: SiReact,
        category: "Frontend",

        color: "text-blue-500",
    },
    {
        name: "Next.js",
        icon: SiNextdotjs,
        category: "Frontend",

        color: "text-gray-800",
    },
    {
        name: "TypeScript",
        icon: SiTypescript,
        category: "Frontend",

        color: "text-blue-600",
    },
    {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        category: "Frontend",

        color: "text-cyan-500",
    },
    {
        name: "Shadcn UI",
        icon: SiShadcnui,
        category: "Frontend",

        color: "text-gray-700",
    },
    {
        name: "Vite",
        icon: SiVite,
        category: "Frontend",
        // color: "text-purple-500",
    },
    {
        name: "Node.js",
        icon: SiNodedotjs,
        category: "Backend",

        color: "text-green-600",
    },
    {
        name: "Express.js",
        icon: SiExpress,
        category: "Backend",
        color: "text-gray-700",
    },
    {
        name: "Django",
        icon: SiDjango,
        category: "Backend",
        color: "text-green-800",
    },
    {
        name: "Firebase",
        icon: SiFirebase,
        category: "Backend",

        color: "text-orange-500",
    },
    {
        name: "Supabase",
        icon: SiSupabase,
        category: "Backend",

        color: "text-emerald-600",
    },
    {
        name: "MongoDB",
        icon: SiMongodb,
        category: "Backend",

        color: "text-green-700",
    },
    {
        name: "PostgreSQL",
        icon: SiPostgresql,
        category: "Backend",

        color: "text-blue-700",
    },
    {
        name: "MySQL",
        icon: SiMysql,
        category: "Backend",
        color: "text-blue-500",
    },
    {
        name: "GraphQL",
        icon: SiGraphql,
        category: "Backend",

        color: "text-pink-600",
    },
    {
        name: "Python",
        icon: SiPython,
        category: "Backend",

        color: "text-yellow-600",
    },
    {
        name: "Docker",
        icon: SiDocker,
        category: "DevOps",

        color: "text-blue-600",
    },
    {
        name: "Git",
        icon: SiGit,
        category: "DevOps",

        color: "text-orange-600",
    },
    {
        name: "GitHub Actions",
        icon: SiGithubactions,
        category: "DevOps",

        color: "text-blue-500",
    },
    {
        name: "Kubernetes",
        icon: SiKubernetes,
        category: "DevOps",

        color: "text-blue-400",
    },
    {
        name: "Ansible",
        icon: SiAnsible,
        category: "DevOps",

        color: "text-red-600",
    },
    {
        name: "AWS",
        icon: FaAws,
        category: "DevOps",

        color: "text-orange-500",
    },
    {
        name: "Google Cloud",
        icon: SiGooglecloud,
        category: "DevOps",

        color: "text-blue-500",
    },
    {
        name: "Nginx",
        icon: SiNginx,
        category: "DevOps",

        color: "text-green-600",
    },
    {
        name: "Apache",
        icon: SiApache,
        category: "DevOps",

        color: "text-red-600",
    },
];

const categoryIcons = {
    Frontend: Code,
    Backend: Server,
    DevOps: Settings,
};

const categoryDescriptions = {
    Frontend: "Building beautiful, responsive user interfaces",
    Backend: "Creating robust server-side solutions and APIs",
    DevOps: "Streamlining development and deployment processes",
};

export default function TechStack() {
    return (
        <section
            id="skills"
            className="py-20 neuro-section px-2 sm:px-4 lg:px-16"
        >
            <div className="container mx-auto px-2">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="neuro-card p-8 max-w-2xl mx-auto">
                        <h2 className="text-4xl font-bold mb-4 text-gray-800">
                            Technology Stack
                        </h2>
                        <p className="text-lg text-gray-600">
                            The tools and technologies I use to bring ideas to
                            life, from frontend interfaces to backend
                            infrastructure.
                        </p>
                    </div>
                </motion.div>

                <div className="space-y-12">
                    {(["Frontend", "Backend", "DevOps"] as const).map(
                        (category, categoryIndex) => {
                            type CategoryType = keyof typeof categoryIcons;
                            const typedCategory = category as CategoryType;
                            const CategoryIcon = categoryIcons[typedCategory];
                            const categoryTechs = technologies.filter(
                                (tech) => tech.category === category
                            );

                            return (
                                <motion.div
                                    key={category}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: categoryIndex * 0.2,
                                    }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="neuro-card overflow-hidden">
                                        <CardContent className="p-0">
                                            {/* Category Header */}
                                            <div className="neuro-inset p-6 m-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="neuro-card p-3">
                                                        <CategoryIcon className="w-8 h-8 text-gray-700" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-2xl font-bold mb-1 text-gray-800">
                                                            {category}
                                                        </h3>
                                                        <p className="text-gray-600 text-sm">
                                                            {
                                                                categoryDescriptions[
                                                                    typedCategory
                                                                ]
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Technologies Content */}
                                            <div className="p-8">
                                                <div>
                                                    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
                                                        {categoryTechs.map(
                                                            (tech, index) => {
                                                                const Icon =
                                                                    tech.icon;
                                                                return (
                                                                    <motion.div
                                                                        key={
                                                                            tech.name
                                                                        }
                                                                        initial={{
                                                                            opacity: 0,
                                                                            scale: 0.8,
                                                                        }}
                                                                        whileInView={{
                                                                            opacity: 1,
                                                                            scale: 1,
                                                                        }}
                                                                        transition={{
                                                                            duration: 0.4,
                                                                            delay:
                                                                                index *
                                                                                0.1,
                                                                        }}
                                                                        whileHover={{
                                                                            scale: 1.05,
                                                                            y: -3,
                                                                        }}
                                                                        viewport={{
                                                                            once: true,
                                                                        }}
                                                                        className="group"
                                                                    >
                                                                        <div className="neuro-tech p-4 flex flex-col items-center justify-center gap-2 min-h-[90px]">
                                                                            <Icon
                                                                                className={`w-6 h-6 ${tech.color} group-hover:scale-110 transition-transform duration-300`}
                                                                            />
                                                                            <span className="text-xs font-medium text-gray-700 text-center leading-tight">
                                                                                {
                                                                                    tech.name
                                                                                }
                                                                            </span>
                                                                        </div>
                                                                    </motion.div>
                                                                );
                                                            }
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            );
                        }
                    )}
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="neuro-card p-8 max-w-2xl mx-auto">
                        <h3 className="text-xl font-bold text-gray-800 mb-3">
                            Always Learning
                        </h3>
                        <p className="text-gray-600">
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
