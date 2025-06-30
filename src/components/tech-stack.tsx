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
        proficiency: 95,
        color: "text-blue-500",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
    },
    {
        name: "Next.js",
        icon: SiNextdotjs,
        category: "Frontend",
        proficiency: 90,
        color: "text-gray-900",
        bgColor: "bg-gray-50",
        borderColor: "border-gray-200",
    },
    {
        name: "TypeScript",
        icon: SiTypescript,
        category: "Frontend",
        proficiency: 85,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
    },
    {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        category: "Frontend",
        proficiency: 95,
        color: "text-cyan-500",
        bgColor: "bg-cyan-50",
        borderColor: "border-cyan-200",
    },
    {
        name: "Shadcn UI",
        icon: SiShadcnui,
        category: "Frontend",
        proficiency: 80,
        color: "text-gray-800",
        bgColor: "bg-gray-50",
        borderColor: "border-gray-200",
    },
    {
        name: "Node.js",
        icon: SiNodedotjs,
        category: "Backend",
        proficiency: 85,
        color: "text-green-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-200",
    },
    {
        name: "Firebase",
        icon: SiFirebase,
        category: "Backend",
        proficiency: 80,
        color: "text-orange-500",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-200",
    },
    {
        name: "Supabase",
        icon: SiSupabase,
        category: "Backend",
        proficiency: 85,
        color: "text-emerald-600",
        bgColor: "bg-emerald-50",
        borderColor: "border-emerald-200",
    },
    {
        name: "MongoDB",
        icon: SiMongodb,
        category: "Backend",
        proficiency: 75,
        color: "text-green-700",
        bgColor: "bg-green-50",
        borderColor: "border-green-200",
    },
    {
        name: "PostgreSQL",
        icon: SiPostgresql,
        category: "Backend",
        proficiency: 70,
        color: "text-blue-700",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
    },
    {
        name: "GraphQL",
        icon: SiGraphql,
        category: "Backend",
        proficiency: 65,
        color: "text-pink-600",
        bgColor: "bg-pink-50",
        borderColor: "border-pink-200",
    },
    {
        name: "Python",
        icon: SiPython,
        category: "Backend",
        proficiency: 70,
        color: "text-yellow-600",
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-200",
    },
    {
        name: "Docker",
        icon: SiDocker,
        category: "DevOps",
        proficiency: 70,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
    },
    {
        name: "Git",
        icon: SiGit,
        category: "DevOps",
        proficiency: 90,
        color: "text-orange-600",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-200",
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

                                            {/* Technologies Grid */}
                                            <div className="p-8">
                                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                                    {technologies
                                                        .filter(
                                                            (tech) =>
                                                                tech.category ===
                                                                category
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
                                                                        className={`${tech.bgColor} ${tech.borderColor} border-2 rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:shadow-lg hover:border-opacity-60 relative overflow-hidden`}
                                                                    >
                                                                        {/* Proficiency indicator */}
                                                                        {tech.proficiency >= 90 && (
                                                                            <div className="absolute top-2 right-2">
                                                                                <Star className="w-3 h-3 text-yellow-500 fill-current" />
                                                                            </div>
                                                                        )}
                                                                        
                                                                        <Icon
                                                                            className={`w-8 h-8 ${tech.color} group-hover:scale-110 transition-transform duration-300`}
                                                                        />
                                                                        <span className="text-sm font-semibold text-gray-800 text-center">
                                                                            {tech.name}
                                                                        </span>
                                                                        
                                                                        {/* Proficiency bar */}
                                                                        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                                                            <motion.div
                                                                                className={`h-1.5 rounded-full bg-gradient-to-r ${categoryColors[category]}`}
                                                                                initial={{ width: 0 }}
                                                                                whileInView={{
                                                                                    width: `${tech.proficiency}%`,
                                                                                }}
                                                                                transition={{
                                                                                    duration: 1,
                                                                                    delay: index * 0.1 + 0.5,
                                                                                }}
                                                                                viewport={{ once: true }}
                                                                            />
                                                                        </div>
                                                                        <span className="text-xs text-gray-500 font-medium">
                                                                            {tech.proficiency}%
                                                                        </span>
                                                                    </div>
                                                                </motion.div>
                                                            );
                                                        })}
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