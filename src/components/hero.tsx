"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center py-16 overflow-hidden bg-[#f0f0f3] dark:bg-[#0f0f0f]">
            <div className="container mx-auto px-2 relative">
                {/* Background HELLO Text - Lower z-index */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
                >
                    <div
                        className="text-[25vw] font-black tracking-wider select-none dark:hidden"
                        style={{
                            textShadow: `
                                 8px 8px 16px rgba(163, 177, 198, 0.3),
                                 -8px -8px 16px rgba(255, 255, 255, 0.8),
                                2px 2px 4px rgba(163, 177, 198, 0.1)
                            `,
                            color: "#e8eaed",
                            // WebkitTextStroke: "1px rgba(163, 177, 198, 0.2)",
                        }}
                    >
                        HELLO
                    </div>
                </motion.div>

                {/* Dark mode background HELLO text */}
                {/* <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 hidden dark:flex"
                >
                    <div
                        className="text-[20vw] lg:text-[15vw] xl:text-[12vw] font-black tracking-wider select-none"
                        style={{
                            textShadow: `
                                inset 8px 8px 16px rgba(0, 0, 0, 0.7),
                                inset -8px -8px 16px rgba(40, 40, 40, 0.2),
                                2px 2px 4px rgba(0, 0, 0, 0.4)
                            `,
                            color: "#171717",
                            WebkitTextStroke: "1px rgba(0, 0, 0, 0.3)",
                        }}
                    >
                        HELLO
                    </div>
                </motion.div> */}

                {/* Decorative Neumorphic Shapes - Lower z-index, positioned to avoid center */}
                <div className="absolute inset-0 pointer-events-none z-5">
                    {/* Top left corner */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute top-16 left-8 w-24 h-24 neuro-card rounded-full"
                    />

                    {/* Top right corner */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="absolute top-20 right-12 w-16 h-32 neuro-card rounded-2xl transform rotate-12"
                    />

                    {/* Bottom left corner */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.1 }}
                        className="absolute bottom-32 left-16 w-20 h-20 neuro-inset rounded-full"
                    />

                    {/* Bottom right corner */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 1.4 }}
                        className="absolute bottom-24 right-20 w-28 h-28 neuro-card rounded-full"
                    />

                    {/* Small accent shapes - positioned in corners */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.7 }}
                        className="absolute top-1/4 left-1/6 w-6 h-6 neuro-accent-blue rounded-full float-animation"
                    />

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 2.0 }}
                        className="absolute bottom-1/4 right-1/6 w-4 h-4 neuro-accent-purple rounded-full float-animation"
                        style={{ animationDelay: "2s" }}
                    />

                    {/* Additional corner shapes */}
                    <motion.div
                        initial={{ opacity: 0, rotate: -45 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="absolute top-1/3 left-8 w-12 h-16 neuro-shallow rounded-xl transform -rotate-12"
                    />

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.8 }}
                        className="absolute top-2/3 right-8 w-8 h-8 neuro-medium rounded-lg transform rotate-45"
                    />
                </div>

                {/* Main Content - Higher z-index to appear on top */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto text-center relative z-50"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="space-y-12"
                    >
                        {/* Main Job Title - Much Larger and Centered */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="text-6xl sm:text-7xl font-black tracking-tight text-gray-800 dark:text-gray-100 leading-none mb-8 "
                            style={{
                                textShadow: `
                                    2px 2px 4px rgba(163, 177, 198, 0.3),
                                    -1px -1px 2px rgba(255, 255, 255, 0.8)
                                `,
                            }}
                        >
                            Full Stack Developer
                            <br />
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="space-y-4"
                        >
                            <p className="lg:text-xl text-gray-600 dark:text-gray-400 font-medium max-w-3xl mx-auto leading-relaxed">
                                I love building projects and experiences with
                                users in mind.
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
            {/* Enhanced CTA Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="pt-8 absolute bottom-16 w-full flex justify-center"
            >
                <motion.a
                    href="#work"
                    className="neuro-btn group relative inline-flex items-center gap-4 px-10 py-5 text-gray-800 dark:text-gray-200 font-bold tracking-wider text-lg overflow-hidden"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {/* Button Background with enhanced neumorphic effect */}
                    <div className="absolute inset-0 neuro-btn rounded-2xl transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105"></div>

                    {/* Animated Border Effect */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                    {/* Button Content */}
                    <div className="relative flex items-center gap-4 ">
                        <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="group-hover:scale-110 transition-transform duration-300"
                        >
                            <Sparkles className="w-6 h-6" />
                        </motion.div>
                        <span className="text-xl font-bold">SEE MY WORKS</span>
                        <motion.div
                            className="w-6 h-6"
                            animate={{ x: [0, 6, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <ArrowRight className="w-6 h-6" />
                        </motion.div>
                    </div>

                    {/* Enhanced Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl scale-110"></div>
                </motion.a>
            </motion.div>
        </section>
    );
}
