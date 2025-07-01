"use client";

import { motion } from "framer-motion";
import { ChevronDown, MapPin, Code, Zap, Heart } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative py-20 neuro-section">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto text-center"
                >
                    <div className="neuro-container p-10 md:p-16 relative overflow-hidden">
                        {/* Subtle background decoration */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="mb-10"
                        >
                            <div className="flex items-center justify-center gap-3 mb-8">
                                <div className="neuro-shallow p-3 relative">
                                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/30"></div>
                                    <div className="absolute inset-0 w-3 h-3 bg-emerald-400 rounded-full animate-ping opacity-20"></div>
                                </div>
                                <span className="text-gray-600 font-medium tracking-wide">Available for new projects</span>
                            </div>
                            
                            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tight text-gray-800 leading-none">
                                Leandro Bernal
                            </h1>
                            
                            <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-gray-700 tracking-wide">
                                    Full Stack Developer
                                </h2>
                                <div className="neuro-shallow p-3 flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-gray-600" />
                                    <span className="text-gray-600 font-medium">Philippines</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="space-y-8 mb-12"
                        >
                            <div className="neuro-card-inset p-8 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                                <div className="flex items-start gap-4">
                                    <div className="neuro-medium p-3 mt-1 float-animation">
                                        <Code className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div className="text-left flex-1">
                                        <h3 className="font-bold text-xl text-gray-800 mb-3 tracking-wide">From Robots to Web</h3>
                                        <p className="text-gray-700 leading-relaxed text-lg">
                                            I used to build <strong className="text-gray-800">robots</strong>, now I build websites 🔨🤖➡️🌐. 
                                            My engineering background gives me a unique perspective on problem-solving, 
                                            bringing systematic thinking and precision to every line of code I write.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="neuro-card-inset p-8 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                                <div className="flex items-start gap-4">
                                    <div className="neuro-medium p-3 mt-1 float-animation" style={{ animationDelay: '2s' }}>
                                        <Zap className="w-6 h-6 text-yellow-600" />
                                    </div>
                                    <div className="text-left flex-1">
                                        <h3 className="font-bold text-xl text-gray-800 mb-3 tracking-wide">3 Years of Impact</h3>
                                        <p className="text-gray-700 leading-relaxed text-lg">
                                            For the past <strong className="text-gray-800">3 years</strong>, I've been helping businesses transform 
                                            their ideas into powerful web applications. From startups to established companies, 
                                            I've delivered <strong className="text-gray-800">Next.js</strong> solutions that drive growth and enhance user experiences.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="neuro-card-inset p-8 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                                <div className="flex items-start gap-4">
                                    <div className="neuro-medium p-3 mt-1 float-animation" style={{ animationDelay: '4s' }}>
                                        <Heart className="w-6 h-6 text-red-500" />
                                    </div>
                                    <div className="text-left flex-1">
                                        <h3 className="font-bold text-xl text-gray-800 mb-3 tracking-wide">Beyond the Code</h3>
                                        <p className="text-gray-700 leading-relaxed text-lg">
                                            When I'm not coding, you'll find me 3D printing, playing fingerstyle guitar 🎸, 
                                            or strategizing over a chess game ♟️. These hobbies keep my creativity flowing 
                                            and my problem-solving skills sharp.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="flex flex-wrap justify-center gap-6"
                        >
                            <motion.a
                                href="#projects"
                                className="neuro-button inline-flex items-center gap-3 px-10 py-5 text-xl text-gray-800 hover:text-gray-900 font-bold tracking-wide"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View My Work
                                <ChevronDown className="w-6 h-6" />
                            </motion.a>
                            
                            <motion.a
                                href="#about"
                                className="neuro-button inline-flex items-center gap-3 px-10 py-5 text-xl text-gray-700 hover:text-gray-900 font-semibold tracking-wide"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Learn More
                            </motion.a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Enhanced scroll indicator */}
            <motion.div
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            >
                <div className="neuro-medium p-4 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                    <ChevronDown className="w-6 h-6 text-gray-600" />
                </div>
            </motion.div>
        </section>
    );
}