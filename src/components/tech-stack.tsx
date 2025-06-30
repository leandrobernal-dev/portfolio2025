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
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        hoverColor: "hover:bg-blue-100",
    },
    {
        name: "Next.js",
        icon: SiNextdotjs,
        category: "Frontend",
        featured: true,
        color: "text-gray-900",
        bgColor: "bg-gray-50",
        borderColor: "border-gray-200",
        hoverColor: "hover:bg-gray-100",
    },
    {
        name: "TypeScript",
        icon: SiTypescript,
        category: "Frontend",
        featured: false,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        hoverColor: "hover:bg-blue-100",
    },
    {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        category: "Frontend",
        featured: true,
        color: "text-cyan-500",
        bgColor: "bg-cyan-50",
        borderColor: "border-cyan-200",
        hoverColor: "hover:bg-cyan-100",
    },
    {
        name: "Shadcn UI",
        icon: SiShadcnui,
        category: "Frontend",
        featured: false,
        color: "text-gray-800",
        bgColor: "bg-gray-50",
        borderColor: "border-gray-200",
        hoverColor: "hover:bg-gray-100",
    },
    {
        name: "Node.js",
        icon: SiNodedotjs,
        category: "Backend",
        featured: false,
        color: "text-green-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-200",
        hoverColor: "hover:bg-green-100",
    },
    {
        name: "Firebase",
        icon: SiFirebase,
        category: "Backend",
        featured: false,
        color: "text-orange-500",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-200",
        hoverColor: "hover:bg-orange-100",
    },
    {
        name: "Supabase",
        icon: SiSupabase,
        category: "Backend",
        featured: true,
        color: "text-emerald-600",
        bgColor: "bg-emerald-50",
        borderColor: "border-emerald-200",
        hoverColor: "hover:bg-emerald-100",
    },
    {
        name: "MongoDB",
        icon: SiMongodb,
        category: "Backend",
        featured: false,
        color: "text-green-700",
        bgColor: "bg-green-50",
        borderColor: "border-green-200",
        hoverColor: "hover:bg-green-100",
    },
    {
        name: "PostgreSQL",
        icon: SiPostgresql,
        category: "Backend",
        featured: false,
        color: "text-blue-700",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        hoverColor: "hover:bg-blue-100",
    },
    {
        name: "GraphQL",
        icon: SiGraphql,
        category: "Backend",
        featured: false,
        color: "text-pink-600",
        bgColor: "bg-pink-50",
        borderColor: "border-pink-200",
        hoverColor: "hover:bg-pink-100",
    },
    {
        name: "Python",
        icon: SiPython,
        category: "Backend",
        featured: false,
        color: "text-yellow-600",
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-200",
        hoverColor: "hover:bg-yellow-100",
    },
    {
        name: "Docker",
        icon: SiDocker,
        category: "DevOps",
        featured: false,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        hoverColor: "hover:bg-blue-100",
    },
    {
        name: "Git",
        icon: SiGit,
        category: "DevOps",
        featured: true,
        color: "text-orange-600",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-200",
        hoverColor: "hover:bg-orange-100",
    },
];

const categoryIcons = {
    Frontend: Code,
    Backend: Server,
    DevOps: Settings,
};

const categoryColors = {
    Frontend: "from-blue-500 to-purple-600",
    Backend: "from-green-500 to-emerald-600",
    DevOps: "from-orange-500 to-red-600",
};

const categoryDescriptions = {
    Frontend: "Building beautiful, responsive user interfaces",
    Backend: "Creating robust server-side solutions and APIs",
    DevOps: "Streamlining development and deployment processes",
};

export default function TechStack() {
    return (
        <section
            id="tech"
            className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50"
        >
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                        Technology Stack
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        The tools and technologies I use to bring ideas to life,
                        from frontend interfaces to backend infrastructure.
                    </p>
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
                                    <Card className="overflow-hidden shadow-xl border-0 bg-white">
                                        <CardContent className="p-0">
                                            {/* Category Header */}
                                            <div
                                                className={`p-6 bg-gradient-to-r ${categoryColors[category]} text-white relative overflow-hidden`}
                                            >
                                                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
                                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>
                                                
                                                <div className="relative z-10 flex items-center gap-4">
                                                    <div className="p-3 bg-white/20 rounded-xl">
                                                        <CategoryIcon className="w-8 h-8" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-2xl font-bold mb-1">
                                                            {category}
                                                        </h3>
                                                        <p className="text-white/90 text-sm">
                                                            {categoryDescriptions[category]}
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
                                                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                                            <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                                                                Primary Technologies
                                                            </h4>
                                                        </div>
                                                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                                                            {featuredTechs.map((tech, index) => {
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
                                                                            duration: 0.4,
                                                                            delay: index * 0.1,
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
                                                                        <div
                                                                            className={`${tech.bgColor} ${tech.borderColor} ${tech.hoverColor} border-2 rounded-xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:shadow-lg hover:border-opacity-60 relative overflow-hidden min-h-[120px]`}
                                                                        >
                                                                            <div className="absolute top-2 right-2">
                                                                                <Star className="w-3 h-3 text-yellow-500 fill-current" />
                                                                            </div>
                                                                            
                                                                            <Icon
                                                                                className={`w-10 h-10 ${tech.color} group-hover:scale-110 transition-transform duration-300`}
                                                                            />
                                                                            <span className="text-sm font-semibold text-gray-800 text-center">
                                                                                {tech.name}
                                                                            </span>
                                                                        </div>
                                                                    </motion.div>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Other Technologies */}
                                                {otherTechs.length > 0 && (
                                                    <div>
                                                        <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-4">
                                                            Additional Technologies
                                                        </h4>
                                                        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
                                                            {otherTechs.map((tech, index) => {
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
                                                                            duration: 0.4,
                                                                            delay: (featuredTechs.length + index) * 0.1,
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
                                                                        <div
                                                                            className={`${tech.bgColor} ${tech.borderColor} ${tech.hoverColor} border rounded-lg p-4 flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:shadow-md min-h-[90px]`}
                                                                        >
                                                                            <Icon
                                                                                className={`w-6 h-6 ${tech.color} group-hover:scale-110 transition-transform duration-300`}
                                                                            />
                                                                            <span className="text-xs font-medium text-gray-700 text-center leading-tight">
                                                                                {tech.name}
                                                                            </span>
                                                                        </div>
                                                                    </motion.div>
                                                                );
                                                            })}
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
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Always Learning
                        </h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
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