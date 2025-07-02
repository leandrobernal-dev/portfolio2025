"use client";

import { motion } from "framer-motion";
import { Code, Zap, Heart, Guitar, ChessKnight, Printer } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-20 neuro-section">
            <div className="container mx-auto px-2">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto"
                >
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <div className="neuro-card p-6 max-w-2xl mx-auto">
                            <h2 className="text-4xl font-bold mb-3 text-gray-800 dark:text-gray-200">
                                About Me
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400">
                                Get to know more about my journey, skills, and what drives my passion for development.
                            </p>
                        </div>
                    </motion.div>

                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-3 gap-6">
                        {/* Left Column - From Robots to Web */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2"
                        >
                            <div className="neuro-card p-8 h-full relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                                <div className="flex items-start gap-6">
                                    <div className="neuro-medium p-4 mt-1 float-animation neuro-accent-blue flex-shrink-0">
                                        <Code className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-2xl text-gray-800 dark:text-gray-200 mb-4 tracking-wide">
                                            From Robots to Web
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg mb-4">
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
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                            This transition from hardware to software has given me a unique 
                                            perspective on problem-solving and systematic thinking. The precision 
                                            required in robotics translates perfectly to writing clean, efficient code.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column - Framework Expertise */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <div className="neuro-card p-8 h-full relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                                <div className="flex flex-col items-center text-center">
                                    <div
                                        className="neuro-medium p-4 mb-6 float-animation neuro-accent-purple"
                                        style={{ animationDelay: "2s" }}
                                    >
                                        <Zap className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="font-bold text-xl text-gray-800 dark:text-gray-200 mb-4 tracking-wide">
                                        My Go-To Framework
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        My go-to framework for both front-end and full-stack
                                        applications is{" "}
                                        <strong className="text-gray-800 dark:text-gray-200">
                                            Next.js
                                        </strong>
                                        . It allows for rapid testing and iteration, making it 
                                        perfect for exploring new concepts and refining them along the way.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Bottom Row - Hobbies Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="lg:col-span-3"
                        >
                            <div className="neuro-card p-8 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                                <div className="flex items-start gap-6 mb-6">
                                    <div
                                        className="neuro-medium p-4 float-animation"
                                        style={{ animationDelay: "4s" }}
                                    >
                                        <Heart className="w-8 h-8 text-red-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-2xl text-gray-800 dark:text-gray-200 mb-4 tracking-wide">
                                            Beyond the Code
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg mb-6">
                                            These hobbies keep me creative and help me approach coding challenges from different angles. 
                                            Whether it's the precision required in 3D modeling or the strategic thinking in chess, 
                                            these activities complement my development skills.
                                        </p>
                                    </div>
                                </div>

                                {/* Hobbies Grid */}
                                <div className="grid md:grid-cols-3 gap-4">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: 0.8 }}
                                        viewport={{ once: true }}
                                        className="neuro-inset p-6 text-center group hover:scale-105 transition-transform duration-300"
                                    >
                                        <div className="neuro-card p-3 w-fit mx-auto mb-4 group-hover:neuro-accent-blue transition-all duration-300">
                                            <Printer className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">3D Printing & Modeling</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            Creating physical objects from digital designs, bridging the gap between virtual and real.
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: 1.0 }}
                                        viewport={{ once: true }}
                                        className="neuro-inset p-6 text-center group hover:scale-105 transition-transform duration-300"
                                    >
                                        <div className="neuro-card p-3 w-fit mx-auto mb-4 group-hover:neuro-accent-purple transition-all duration-300">
                                            <Guitar className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Fingerstyle Guitar 🎸</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            Playing acoustic guitar with fingerstyle techniques, creating melodies and harmonies simultaneously.
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: 1.2 }}
                                        viewport={{ once: true }}
                                        className="neuro-inset p-6 text-center group hover:scale-105 transition-transform duration-300"
                                    >
                                        <div className="neuro-card p-3 w-fit mx-auto mb-4 group-hover:neuro-accent-blue transition-all duration-300">
                                            <ChessKnight className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Online Chess ♟️</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            Strategic thinking and pattern recognition that directly translates to problem-solving in code.
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}