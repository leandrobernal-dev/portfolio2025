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
                    className="max-w-4xl mx-auto text-center"
                >
                    <div className="neuro-container p-8 md:p-12">
                        <motion.div
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="mb-8"
                        >
                            <div className="flex items-center justify-center gap-3 mb-6">
                                <div className="neuro-card p-2">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                </div>
                                <span className="text-gray-600 font-medium">Available for new projects</span>
                            </div>
                            
                            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-gray-800">
                                Leandro Bernal
                            </h1>
                            
                            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-700">
                                    Full Stack Developer
                                </h2>
                                <div className="neuro-card p-2 flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-gray-600" />
                                    <span className="text-sm text-gray-600">Philippines</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="space-y-6 mb-12"
                        >
                            <div className="neuro-card-inset p-6">
                                <div className="flex items-start gap-3">
                                    <div className="neuro-card p-2 mt-1">
                                        <Code className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="font-semibold text-gray-800 mb-2">From Robots to Web</h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            I used to build <strong>robots</strong>, now I build websites 🔨🤖➡️🌐. 
                                            My engineering background gives me a unique perspective on problem-solving, 
                                            bringing systematic thinking and precision to every line of code I write.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="neuro-card-inset p-6">
                                <div className="flex items-start gap-3">
                                    <div className="neuro-card p-2 mt-1">
                                        <Zap className="w-5 h-5 text-yellow-600" />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="font-semibold text-gray-800 mb-2">3 Years of Impact</h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            For the past <strong>3 years</strong>, I've been helping businesses transform 
                                            their ideas into powerful web applications. From startups to established companies, 
                                            I've delivered <strong>Next.js</strong> solutions that drive growth and enhance user experiences.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="neuro-card-inset p-6">
                                <div className="flex items-start gap-3">
                                    <div className="neuro-card p-2 mt-1">
                                        <Heart className="w-5 h-5 text-red-500" />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="font-semibold text-gray-800 mb-2">Beyond the Code</h3>
                                        <p className="text-gray-700 leading-relaxed">
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
                            className="flex flex-wrap justify-center gap-4"
                        >
                            <motion.a
                                href="#projects"
                                className="neuro-button inline-flex items-center gap-2 px-8 py-4 text-lg text-gray-800 hover:text-gray-900 font-semibold"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View My Work
                                <ChevronDown className="w-5 h-5" />
                            </motion.a>
                            
                            <motion.a
                                href="#about"
                                className="neuro-button inline-flex items-center gap-2 px-8 py-4 text-lg text-gray-700 hover:text-gray-900 font-medium"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Learn More
                            </motion.a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            >
                <div className="neuro-card p-3">
                    <ChevronDown className="w-6 h-6 text-gray-600" />
                </div>
            </motion.div>
        </section>
    );
}