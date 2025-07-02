"use client";

import { motion } from "framer-motion";
import { Code, Zap, Heart } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-20 neuro-section">
            <div className="container mx-auto px-2">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="neuro-card p-8 max-w-2xl mx-auto">
                            <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                                About Me
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400">
                                Get to know more about my journey, skills, and what drives my passion for development.
                            </p>
                        </div>
                    </motion.div>

                    {/* Content Cards */}
                    <div className="space-y-6">
                        {/* From Robots to Web */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="neuro-card p-8 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                            <div className="flex items-start gap-4">
                                <div className="neuro-medium p-3 mt-1 float-animation neuro-accent-blue">
                                    <Code className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-xl text-gray-800 dark:text-gray-200 mb-3 tracking-wide">
                                        From Robots to Web
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        I used to build{" "}
                                        <strong className="text-gray-800 dark:text-gray-200">
                                            robots
                                        </strong>
                                        , now I build websites 🔨🤖➡️🌐. I've been freelancing for{" "}
                                        <strong className="text-gray-800 dark:text-gray-200">
                                            3 years
                                        </strong>{" "}
                                        now, building and maintaining websites and web applications
                                        for my clients. This transition from hardware to software
                                        has given me a unique perspective on problem-solving and
                                        systematic thinking.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Framework Expertise */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="neuro-card p-8 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                            <div className="flex items-start gap-4">
                                <div
                                    className="neuro-medium p-3 mt-1 float-animation neuro-accent-purple"
                                    style={{ animationDelay: "2s" }}
                                >
                                    <Zap className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-xl text-gray-800 dark:text-gray-200 mb-3 tracking-wide">
                                        My Go-To Framework
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        My go-to framework for both front-end and full-stack
                                        applications is{" "}
                                        <strong className="text-gray-800 dark:text-gray-200">
                                            Next.js
                                        </strong>
                                        . When I start building a new personal project, Next.js helps
                                        me quickly and efficiently bring ideas to life. It allows for
                                        rapid testing and iteration, making it perfect for exploring
                                        new concepts and refining them along the way.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Beyond the Code */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="neuro-card p-8 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                            <div className="flex items-start gap-4">
                                <div
                                    className="neuro-medium p-3 mt-1 float-animation"
                                    style={{ animationDelay: "4s" }}
                                >
                                    <Heart className="w-6 h-6 text-red-500" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-xl text-gray-800 dark:text-gray-200 mb-3 tracking-wide">
                                        Beyond the Code
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        In my spare time, I enjoy 3D printing and 3D modeling, or
                                        play fingerstyle on my acoustic guitar🎸. I also play online
                                        chess♟️. These hobbies keep me creative and help me approach
                                        coding challenges from different angles. Whether it's the
                                        precision required in 3D modeling or the strategic thinking
                                        in chess, these activities complement my development skills.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}