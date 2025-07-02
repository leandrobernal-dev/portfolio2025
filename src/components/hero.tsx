"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative py-16 neuro-section mt-10">
            <div className="container mx-auto px-2">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <div className="neuro-hero-main p-8 lg:p-16 relative overflow-hidden">
                        {/* Subtle background decoration */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

                        {/* Main Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="space-y-8"
                        >
                            {/* Name and Title */}
                            <div className="space-y-6">
                                <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black tracking-tight text-gradient leading-none">
                                    Leandro Bernal
                                </h1>
                                
                                <div className="neuro-card inline-block px-8 py-4">
                                    <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-700 dark:text-gray-300 tracking-wide">
                                        Full Stack Developer
                                    </h2>
                                </div>
                            </div>

                            {/* Tagline */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="max-w-2xl mx-auto"
                            >
                                <div className="neuro-inset p-6">
                                    <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
                                        Building modern web experiences with{" "}
                                        <span className="font-semibold text-gray-800 dark:text-gray-200">Next.js</span>{" "}
                                        and innovative solutions
                                    </p>
                                </div>
                            </motion.div>

                            {/* CTA Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="pt-4"
                            >
                                <motion.a
                                    href="#projects"
                                    className="neuro-accent-blue inline-flex items-center gap-3 px-8 py-4 text-white font-semibold tracking-wide rounded-2xl text-lg"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Sparkles className="w-5 h-5" />
                                    View My Work
                                </motion.a>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}