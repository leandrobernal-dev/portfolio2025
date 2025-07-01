"use client";

import { motion } from "framer-motion";
import { ChevronDown, MapPin, Code, Zap, Heart, Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative py-16 neuro-section">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="hero-main-card p-8 lg:p-12 relative overflow-hidden">
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
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="neuro-shallow p-2 relative">
                                        <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/30"></div>
                                        <div className="absolute inset-0 w-3 h-3 bg-emerald-400 rounded-full animate-ping opacity-20"></div>
                                    </div>
                                    <span className="text-gray-600 dark:text-gray-400 font-medium text-sm tracking-wide">Available for new projects</span>
                                </div>
                                
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
                                            <span className="text-gray-600 dark:text-gray-400 font-medium text-sm">Philippines</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <motion.a
                                        href="#projects"
                                        className="accent-blue inline-flex items-center gap-2 px-6 py-3 text-white font-semibold tracking-wide rounded-xl"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Sparkles className="w-4 h-4" />
                                        View My Work
                                    </motion.a>
                                    
                                    <motion.a
                                        href="#about"
                                        className="neuro-button inline-flex items-center gap-2 px-6 py-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-semibold tracking-wide"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Learn More
                                        <ChevronDown className="w-4 h-4" />
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
                                <div className="hero-content-card p-6 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                                    <div className="flex items-start gap-3">
                                        <div className="neuro-medium p-2 mt-1 float-animation accent-blue">
                                            <Code className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="text-left flex-1">
                                            <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-2 tracking-wide">From Robots to Web</h3>
                                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                                I used to build <strong className="text-gray-800 dark:text-gray-200">robots</strong>, now I build websites 🔨🤖➡️🌐. 
                                                My engineering background brings systematic thinking to every line of code.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="hero-content-card p-6 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                                    <div className="flex items-start gap-3">
                                        <div className="neuro-medium p-2 mt-1 float-animation accent-purple" style={{ animationDelay: '2s' }}>
                                            <Zap className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="text-left flex-1">
                                            <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-2 tracking-wide">3 Years of Impact</h3>
                                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                                For the past <strong className="text-gray-800 dark:text-gray-200">3 years</strong>, I've been helping businesses transform 
                                                their ideas into powerful <strong className="text-gray-800 dark:text-gray-200">Next.js</strong> applications that drive growth.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="hero-content-card p-6 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                                    <div className="flex items-start gap-3">
                                        <div className="neuro-medium p-2 mt-1 float-animation" style={{ animationDelay: '4s' }}>
                                            <Heart className="w-5 h-5 text-red-500" />
                                        </div>
                                        <div className="text-left flex-1">
                                            <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-2 tracking-wide">Beyond the Code</h3>
                                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                                When I'm not coding, you'll find me 3D printing, playing fingerstyle guitar 🎸, 
                                                or strategizing over chess ♟️. These hobbies keep my creativity flowing.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Enhanced scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            >
                <div className="neuro-medium p-3 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                    <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </div>
            </motion.div>
        </section>
    );
}