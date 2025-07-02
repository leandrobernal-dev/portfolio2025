"use client";

import { motion } from "framer-motion";
import { MapPin, Code, Zap, Heart } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-20 neuro-section">
            <div className="container mx-auto px-2">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="neuro-card p-8 max-w-2xl mx-auto">
                            <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                                About Me
                            </h2>
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <div className="neuro-shallow p-2 flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                                    <span className="text-gray-600 dark:text-gray-400 font-medium text-sm">
                                        Philippines
                                    </span>
                                </div>
                            </div>
                            <p className="text-lg text-gray-600 dark:text-gray-400">
                                From robotics to web development - my journey in building digital experiences
                            </p>
                        </div>
                    </div>

                    {/* Content Cards */}
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* From Robots to Web */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="neuro-card p-8 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="neuro-medium p-4 float-animation neuro-accent-blue">
                                    <Code className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-bold text-xl text-gray-800 dark:text-gray-200 tracking-wide">
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
                                    for my clients.
                                </p>
                            </div>
                        </motion.div>

                        {/* Framework Expertise */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="neuro-card p-8 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div
                                    className="neuro-medium p-4 float-animation neuro-accent-purple"
                                    style={{ animationDelay: "2s" }}
                                >
                                    <Zap className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-bold text-xl text-gray-800 dark:text-gray-200 tracking-wide">
                                    Framework of Choice
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    My go-to framework for both front-end and full-stack
                                    applications is{" "}
                                    <strong className="text-gray-800 dark:text-gray-200">
                                        Next.js
                                    </strong>
                                    . It helps me quickly and efficiently bring ideas to life,
                                    allowing for rapid testing and iteration to explore new
                                    concepts.
                                </p>
                            </div>
                        </motion.div>

                        {/* Beyond the Code */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="neuro-card p-8 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div
                                    className="neuro-medium p-4 float-animation"
                                    style={{ animationDelay: "4s" }}
                                >
                                    <Heart className="w-8 h-8 text-red-500" />
                                </div>
                                <h3 className="font-bold text-xl text-gray-800 dark:text-gray-200 tracking-wide">
                                    Beyond the Code
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    In my spare time, I enjoy 3D printing and 3D modeling, or
                                    play fingerstyle on my acoustic guitar🎸. I also play online
                                    chess♟️.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}