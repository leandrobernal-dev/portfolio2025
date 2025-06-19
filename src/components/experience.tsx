"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        role: "Junior Software Engineer - Contractor",
        company: "Bidlabs Inc.",
        period: "2025 - Present",
        description:
            "Designed and implemented new features, built, deployed and maintain server.",
    },
    {
        role: "Full Stack Engineer",
        company: "Freelance",
        period: "2023 - 2025",
        description:
            "Built custom web applications, automated business processes, and optimized website performance while ensuring scalability and user experience.",
    },
    {
        role: "Frontend Engineer",
        company: "Freelance",
        period: "2022 - 2023",
        description:
            "Developed responsive, user-friendly interfaces with React, optimized site performance, and collaborated with clients to bring their ideas to life.",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12">Experience</h2>
                <div className="max-w-3xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.role}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="mb-12 last:mb-0"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                <h3 className="text-xl font-bold">
                                    {exp.role}
                                </h3>
                                <span className="text-gray-500">
                                    {exp.period}
                                </span>
                            </div>
                            <div className="text-gray-600">
                                <p className="font-semibold mb-2 text-gray-600 tracking-wide uppercase">
                                    {exp.company}
                                </p>
                                <p>{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
