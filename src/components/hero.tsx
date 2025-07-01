"use client";

import { motion } from "framer-motion";
import { ChevronDown, MapPin, Code, Zap, Heart } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative py-20 neuro-section">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="neuro-container p-8 md:p-12">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left Column - Text Content */}
                            <div className="space-y-8 order-2 lg:order-1">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="neuro-card p-2">
                                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                        </div>
                                        <span className="text-gray-600 font-medium">Available for new projects</span>
                                    </div>
                                    
                                    <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight text-gray-800">
                                        Leandro Bernal
                                    </h1>
                                    
                                    <div className="flex flex-wrap items-center gap-4 mb-6">
                                        <h2 className="text-xl md:text-2xl font-bold text-gray-700">
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
                                    className="space-y-6"
                                >
                                    <div className="neuro-card-inset p-6">
                                        <div className="flex items-start gap-3">
                                            <div className="neuro-card p-2 mt-1">
                                                <Code className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <div>
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
                                            <div>
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
                                            <div>
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
                                    className="flex flex-wrap gap-4"
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
                                </div>

                                {/* Quick Stats */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8, duration: 0.6 }}
                                    className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-300"
                                >
                                    <div className="text-center">
                                        <div className="neuro-card p-4">
                                            <div className="text-2xl font-bold text-gray-800">3+</div>
                                            <div className="text-sm text-gray-600">Years Experience</div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <div className="neuro-card p-4">
                                            <div className="text-2xl font-bold text-gray-800">20+</div>
                                            <div className="text-sm text-gray-600">Projects Delivered</div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <div className="neuro-card p-4">
                                            <div className="text-2xl font-bold text-gray-800">100%</div>
                                            <div className="text-sm text-gray-600">Client Satisfaction</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Right Column - Professional Headshot */}
                            <div className="order-1 lg:order-2">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3, duration: 0.8 }}
                                    className="relative"
                                >
                                    <div className="neuro-card p-8">
                                        <div className="relative">
                                            {/* Main headshot container */}
                                            <div className="neuro-card-inset p-4">
                                                <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                                                    {/* Placeholder for professional headshot */}
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <div className="text-center">
                                                            <div className="w-32 h-32 mx-auto mb-4 neuro-card rounded-full flex items-center justify-center">
                                                                <div className="w-20 h-20 bg-gray-400 rounded-full flex items-center justify-center">
                                                                    <span className="text-2xl font-bold text-white">LB</span>
                                                                </div>
                                                            </div>
                                                            <p className="text-gray-600 text-sm">
                                                                Professional headshot<br />coming soon
                                                            </p>
                                                        </div>
                                                    </div>
                                                    
                                                    {/* Uncomment and replace with your actual headshot */}
                                                    {/* <Image
                                                        src="/headshot.jpg"
                                                        alt="Leandro Bernal - Professional Headshot"
                                                        fill
                                                        className="object-cover"
                                                        priority
                                                        sizes="(max-width: 768px) 100vw, 50vw"
                                                    /> */}
                                                </div>
                                            </div>

                                            {/* Floating elements */}
                                            <motion.div
                                                className="absolute -top-4 -right-4 neuro-card p-3"
                                                animate={{ y: [0, -10, 0] }}
                                                transition={{ repeat: Infinity, duration: 3, delay: 0 }}
                                            >
                                                <Code className="w-6 h-6 text-blue-600" />
                                            </motion.div>

                                            <motion.div
                                                className="absolute -bottom-4 -left-4 neuro-card p-3"
                                                animate={{ y: [0, -10, 0] }}
                                                transition={{ repeat: Infinity, duration: 3, delay: 1.5 }}
                                            >
                                                <Zap className="w-6 h-6 text-yellow-600" />
                                            </motion.div>

                                            <motion.div
                                                className="absolute top-1/2 -left-6 neuro-card p-2"
                                                animate={{ x: [0, -5, 0] }}
                                                transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
                                            >
                                                <Heart className="w-4 h-4 text-red-500" />
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Background decoration */}
                                    <div className="absolute inset-0 -z-10">
                                        <div className="absolute top-8 left-8 w-24 h-24 neuro-card rounded-full opacity-50"></div>
                                        <div className="absolute bottom-8 right-8 w-16 h-16 neuro-card rounded-full opacity-30"></div>
                                        <div className="absolute top-1/2 right-0 w-8 h-8 neuro-card rounded-full opacity-40"></div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
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