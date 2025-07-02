"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative py-16 neuro-section mt-10 overflow-hidden">
            <div className="container mx-auto px-2 relative">
                {/* Background HELLO Text */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
                >
                    <div className="text-[20vw] lg:text-[15vw] xl:text-[12vw] font-black tracking-wider select-none">
                        <span className="neuro-inset inline-block px-8 py-4 text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900">
                            HELLO
                        </span>
                    </div>
                </motion.div>

                {/* Decorative Neumorphic Shapes - Positioned to avoid HELLO text */}
                <div className="absolute inset-0 pointer-events-none z-10">
                    {/* Top left area */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute top-16 left-8 w-24 h-24 neuro-card rounded-full"
                    />
                    
                    {/* Top right area */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="absolute top-20 right-12 w-16 h-32 neuro-card rounded-2xl transform rotate-12"
                    />
                    
                    {/* Bottom left area */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.1 }}
                        className="absolute bottom-32 left-16 w-20 h-20 neuro-inset rounded-full"
                    />
                    
                    {/* Bottom right area */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 1.4 }}
                        className="absolute bottom-24 right-20 w-28 h-28 neuro-card rounded-full"
                    />
                    
                    {/* Small accent shapes */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.7 }}
                        className="absolute top-1/3 left-1/4 w-6 h-6 neuro-accent-blue rounded-full float-animation"
                    />
                    
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 2.0 }}
                        className="absolute bottom-1/3 right-1/4 w-4 h-4 neuro-accent-purple rounded-full float-animation"
                        style={{ animationDelay: "2s" }}
                    />

                    {/* Additional small shapes for visual interest */}
                    <motion.div
                        initial={{ opacity: 0, rotate: -45 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="absolute top-1/2 left-8 w-12 h-16 neuro-shallow rounded-xl transform -rotate-12"
                    />
                    
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.8 }}
                        className="absolute top-2/3 right-8 w-8 h-8 neuro-medium rounded-lg transform rotate-45"
                    />
                </div>

                {/* Main Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center relative z-20"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="space-y-8"
                    >
                        {/* Main Job Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="text-5xl lg:text-7xl xl:text-8xl font-black tracking-tight text-gradient leading-none mb-6"
                        >
                            Full Stack
                            <br />
                            <span className="relative">
                                Developer
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 1.2, duration: 0.5 }}
                                    className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full"
                                />
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="space-y-4"
                        >
                            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
                                I love building projects and experiences with users in mind.
                            </p>
                        </motion.div>

                        {/* Enhanced CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.0, duration: 0.6 }}
                            className="pt-8"
                        >
                            <motion.a
                                href="#work"
                                className="group relative inline-flex items-center gap-3 px-8 py-4 text-gray-800 dark:text-gray-200 font-semibold tracking-wide text-lg overflow-hidden"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {/* Button Background */}
                                <div className="absolute inset-0 neuro-btn rounded-2xl transition-all duration-300 group-hover:shadow-2xl"></div>
                                
                                {/* Button Border Effect */}
                                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                {/* Button Content */}
                                <div className="relative flex items-center gap-3">
                                    <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                                    <span>SEE MY WORKS</span>
                                    <motion.div
                                        className="w-5 h-5"
                                        animate={{ x: [0, 4, 0] }}
                                        transition={{ 
                                            duration: 1.5, 
                                            repeat: Infinity, 
                                            ease: "easeInOut" 
                                        }}
                                    >
                                        <ArrowRight className="w-5 h-5" />
                                    </motion.div>
                                </div>
                                
                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}