"use client";

import { motion } from "framer-motion";
import { MapPin, Code, Zap, Heart, Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative py-16 neuro-section mt-10">
            <div className="container mx-auto px-2">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="neuro-hero-main p-8 lg:p-12 relative overflow-hidden">
                        {/* Subtle background decoration */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            {/* Left Column - Header */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="space-y-6"
                            >
                                <div>
                                    <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black mb-4 tracking-tight text-gradient leading-none">
                                        Leandro Bernal
                                    </h1>

                                    <div className="flex flex-wrap items-center gap-4 mb-6">
                                        <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-700 dark:text-gray-300 tracking-wide">
                                            Full Stack Developer
                                        </h2>
                                        <div className="neuro-shallow p-2 flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                                            <span className="text-gray-600 dark:text-gray-400 font-medium text-sm">
                                                Philippines
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <motion.a
                                        href="#projects"
                                        className="neuro-accent-blue inline-flex items-center gap-2 px-6 py-3 text-white font-semibold tracking-wide rounded-xl"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Sparkles className="w-4 h-4" />
                                        View My Work
                                    </motion.a>
                                </div>
                            </motion.div>

                            {/* Right Column - Details */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="space-y-4"
                            >
                                <div className="neuro-hero-content p-6 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                                    <div className="flex items-start gap-3">
                                        <div className="neuro-medium p-2 mt-1 float-animation neuro-accent-blue">
                                            <Code className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="text-left flex-1">
                                            <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-2 tracking-wide">
                                                From Robots to Web
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                                I used to build{" "}
                                                <strong className="text-gray-800">
                                                    robots
                                                </strong>
                                                , now I build websites 🔨🤖➡️🌐.
                                                I've been freelancing for{" "}
                                                <strong className="text-gray-800">
                                                    3 years
                                                </strong>{" "}
                                                now, building and maintaining
                                                websites and web applications
                                                for my clients.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="neuro-hero-content p-6 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                                    <div className="flex items-start gap-3">
                                        <div
                                            className="neuro-medium p-2 mt-1 float-animation neuro-accent-purple"
                                            style={{ animationDelay: "2s" }}
                                        >
                                            <Zap className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="text-left flex-1">
                                            <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-2 tracking-wide">
                                                Framework
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                                My go-to framework for both
                                                front-end and full-stack
                                                applications is{" "}
                                                <strong className="text-gray-800">
                                                    Next.js
                                                </strong>
                                                . When I start building a new
                                                personal project, Next.js helps
                                                me quickly and efficiently bring
                                                ideas to life. It allows for
                                                rapid testing and iteration,
                                                making it perfect for exploring
                                                new concepts and refining them
                                                along the way.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="neuro-hero-content p-6 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                                    <div className="flex items-start gap-3">
                                        <div
                                            className="neuro-medium p-2 mt-1 float-animation"
                                            style={{ animationDelay: "4s" }}
                                        >
                                            <Heart className="w-5 h-5 text-red-500" />
                                        </div>
                                        <div className="text-left flex-1">
                                            <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-2 tracking-wide">
                                                Beyond the Code
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                                In my spare time, I enjoy 3D
                                                printing and 3d modeling, or
                                                play fingerstyle on my acoustic
                                                guitar🎸. I also play online
                                                chess♟️.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}