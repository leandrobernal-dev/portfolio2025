"use client";

import { motion } from "framer-motion";
import { MapPin, Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative py-16 neuro-section mt-10 overflow-hidden">
            <div className="container mx-auto px-2 relative">
                {/* Decorative Neumorphic Shapes */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Large circle - top right */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute top-20 right-10 w-32 h-32 neuro-card rounded-full"
                        style={{
                            background: "linear-gradient(145deg, #f8f9fa, #e9ecef)",
                        }}
                    />
                    
                    {/* Medium circle - left side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="absolute top-1/3 left-16 w-20 h-20 neuro-inset rounded-full"
                    />
                    
                    {/* Small circle - bottom right */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.1 }}
                        className="absolute bottom-32 right-1/4 w-12 h-12 neuro-card rounded-full"
                    />
                    
                    {/* Accent circle - top left */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 1.4 }}
                        className="absolute top-1/4 left-1/3 w-6 h-6 neuro-accent-blue rounded-full"
                    />
                    
                    {/* Rectangle shape - middle right */}
                    <motion.div
                        initial={{ opacity: 0, rotate: -45 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="absolute top-1/2 right-20 w-16 h-24 neuro-card rounded-2xl transform rotate-12"
                    />
                    
                    {/* Small accent dot - bottom left */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.7 }}
                        className="absolute bottom-1/3 left-1/4 w-4 h-4 neuro-accent-purple rounded-full"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center relative z-10"
                >
                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="space-y-8"
                    >
                        {/* Greeting */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="inline-block"
                        >
                            <div className="neuro-card px-6 py-3 inline-flex items-center gap-2">
                                <span className="text-2xl">👋</span>
                                <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
                                    Hello, I am
                                </span>
                            </div>
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="text-6xl lg:text-8xl xl:text-9xl font-black tracking-tight text-gradient leading-none"
                        >
                            Leandro
                            <br />
                            <span className="relative">
                                Bernal
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 1.2, duration: 0.5 }}
                                    className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full"
                                />
                            </span>
                        </motion.h1>

                        {/* Role & Location */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="space-y-4"
                        >
                            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-700 dark:text-gray-300 tracking-wide">
                                Full Stack Developer
                            </h2>
                            
                            <div className="flex justify-center">
                                <div className="neuro-shallow p-3 flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                                    <span className="text-gray-600 dark:text-gray-400 font-medium">
                                        Philippines
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.0, duration: 0.6 }}
                            className="pt-8"
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
                </motion.div>
            </div>
        </section>
    );
}