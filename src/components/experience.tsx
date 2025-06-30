"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Building2, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
    {
        role: "Junior Software Engineer - Contractor",
        company: "Bidlabs Inc.",
        period: "2025 - Present",
        location: "Remote",
        type: "Contract",
        description:
            "Designed and implemented new features, built, deployed and maintain server.",
        highlights: [
            "Feature development and implementation",
            "Server deployment and maintenance",
            "Full-stack development",
        ],
        color: "from-blue-500 to-indigo-600",
    },
    {
        role: "Full Stack Engineer",
        company: "Freelance",
        period: "2023 - 2025",
        location: "Remote",
        type: "Freelance",
        description:
            "Built custom web applications, automated business processes, and optimized website performance while ensuring scalability and user experience.",
        highlights: [
            "Custom web application development",
            "Business process automation",
            "Performance optimization",
            "Scalability implementation",
        ],
        color: "from-emerald-500 to-teal-600",
    },
    {
        role: "Frontend Engineer",
        company: "Freelance",
        period: "2022 - 2023",
        location: "Remote",
        type: "Freelance",
        description:
            "Developed responsive, user-friendly interfaces with React, optimized site performance, and collaborated with clients to bring their ideas to life.",
        highlights: [
            "Responsive interface development",
            "React development",
            "Client collaboration",
            "Performance optimization",
        ],
        color: "from-purple-500 to-violet-600",
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50"
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
                        Professional Experience
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        My journey in software development, from frontend
                        specialization to full-stack engineering.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-emerald-200 to-purple-200 hidden md:block"></div>

                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.role}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.2,
                                }}
                                viewport={{ once: true }}
                                className="relative mb-12 last:mb-0"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-6 top-8 w-4 h-4 rounded-full bg-white border-4 border-gray-300 shadow-lg z-10 hidden md:block">
                                    <div
                                        className={`absolute inset-1 rounded-full bg-gradient-to-r ${exp.color}`}
                                    ></div>
                                </div>

                                <Card className="ml-0 md:ml-20 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white group hover:-translate-y-1">
                                    <CardContent className="p-0">
                                        {/* Header with gradient */}
                                        <div
                                            className={`p-6 bg-gradient-to-r ${exp.color} text-white relative overflow-hidden`}
                                        >
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                                            
                                            <div className="relative z-10">
                                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                                                    <h3 className="text-xl font-bold">
                                                        {exp.role}
                                                    </h3>
                                                    <div className="flex items-center gap-2 text-white/90">
                                                        <Calendar className="w-4 h-4" />
                                                        <span className="text-sm font-medium">
                                                            {exp.period}
                                                        </span>
                                                    </div>
                                                </div>
                                                
                                                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-white/90">
                                                    <div className="flex items-center gap-2">
                                                        <Building2 className="w-4 h-4" />
                                                        <span className="font-semibold">
                                                            {exp.company}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <MapPin className="w-4 h-4" />
                                                        <span className="text-sm">
                                                            {exp.location}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Briefcase className="w-4 h-4" />
                                                        <span className="text-sm bg-white/20 px-2 py-1 rounded-full">
                                                            {exp.type}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <p className="text-gray-700 mb-4 leading-relaxed">
                                                {exp.description}
                                            </p>
                                            
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                                                    Key Highlights
                                                </h4>
                                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                    {exp.highlights.map((highlight, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="flex items-center gap-2 text-sm text-gray-600"
                                                        >
                                                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color}`}></div>
                                                            {highlight}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}