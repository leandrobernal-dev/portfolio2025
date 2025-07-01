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
import { Card, CardContent } from "@/components/ui/card";
import { Code, Server, Settings, Star } from "lucide-react";

const technologies = [
    {
        name: "React",
        icon: SiReact,
        category: "Frontend",
        featured: true,
        color: "text-blue-500",
    },
    {
        name: "Next.js",
        icon: SiNextdotjs,
        category: "Frontend",
        featured: true,
        color: "text-gray-800",
    },
    {
        name: "TypeScript",
        icon: SiTypescript,
        category: "Frontend",
        featured: false,
        color: "text-blue-600",
    },
    {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        category: "Frontend",
        featured: true,
        color: "text-cyan-500",
    },
    {
        name: "Shadcn UI",
        icon: SiShadcnui,
        category: "Frontend",
        featured: false,
        color: "text-gray-700",
    },
    {
        name: "Node.js",
        icon: SiNodedotjs,
        category: "Backend",
        featured: false,
        color: "text-green-600",
    },
    {
        name: "Firebase",
        icon: SiFirebase,
        category: "Backend",
        featured: false,
        color: "text-orange-500",
    },
    {
        name: "Supabase",
        icon: SiSupabase,
        category: "Backend",
        featured: true,
        color: "text-emerald-600",
    },
    {
        name: "MongoDB",
        icon: SiMongodb,
        category: "Backend",
        featured: false,
        color: "text-green-700",
    },
    {
        name: "PostgreSQL",
        icon: SiPostgresql,
        category: "Backend",
        featured: false,
        color: "text-blue-700",
    },
    {
        name: "GraphQL",
        icon: SiGraphql,
        category: "Backend",
        featured: false,
        color: "text-pink-600",
    },
    {
        name: "Python",
        icon: SiPython,
        category: "Backend",
        featured: false,
        color: "text-yellow-600",
    },
    {
        name: "Docker",
        icon: SiDocker,
        category: "DevOps",
        featured: false,
        color: "text-blue-600",
    },
    {
        name: "Git",
        icon: SiGit,
        category: "DevOps",
        featured: true,
        color: "text-orange-600",
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
        <section id="tech" className="py-20 neuro-section">
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
                    {["Frontend", "Backend", "DevOps"].map(
                        (category, categoryIndex) => {
                            const CategoryIcon = categoryIcons[category];
                            const categoryTechs = technologies.filter(
                                (tech) => tech.category === category
                            );
                            const featuredTechs = categoryTechs.filter(
                                (tech) => tech.featured
                            );
                            const otherTechs = categoryTechs.filter(
                                (tech) => !tech.featured
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
                                                                    category
                                                                ]
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Technologies Content */}
                                            <div className="p-8">
                                                {/* Featured Technologies */}
                                                {featuredTechs.length > 0 && (
                                                    <div className="mb-8">
                                                        <div className="flex items-center gap-2 mb-4">
                                                            <Star className="w-4 h-4 text-yellow-600 fill-current" />
                                                            <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                                                                Primary
                                                                Technologies
                                                            </h4>
                                                        </div>
                                                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                                                            {featuredTechs.map(
                                                                (
                                                                    tech,
                                                                    index
                                                                ) => {
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
                                                                                y: -5,
                                                                            }}
                                                                            viewport={{
                                                                                once: true,
                                                                            }}
                                                                            className="group"
                                                                        >
                                                                            <div className="neuro-tech p-6 flex flex-col items-center justify-center gap-3 min-h-[120px] relative">
                                                                                <div className="absolute top-2 right-2">
                                                                                    <Star className="w-3 h-3 text-yellow-600 fill-current" />
                                                                                </div>

                                                                                <Icon
                                                                                    className={`w-10 h-10 ${tech.color} group-hover:scale-110 transition-transform duration-300`}
                                                                                />
                                                                                <span className="text-sm font-semibold text-gray-800 text-center">
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
                                                )}

                                                {/* Other Technologies */}
                                                {otherTechs.length > 0 && (
                                                    <div>
                                                        <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-4">
                                                            Additional
                                                            Technologies
                                                        </h4>
                                                        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
                                                            {otherTechs.map(
                                                                (
                                                                    tech,
                                                                    index
                                                                ) => {
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
                                                                                    (featuredTechs.length +
                                                                                        index) *
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
                                                )}
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