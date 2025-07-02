"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Black_Han_Sans } from "next/font/google";

const blackHanSans = Black_Han_Sans({
    subsets: ["latin"],
    weight: "400",
});

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
                        className={`text-[25vw] tracking-wider select-none hidden md:flex dark:hidden ${blackHanSans.className}`}
                        style={{
                            textShadow: `
                                 8px 8px 16px rgba(163, 177, 198, 0.3),
                                 -8px -8px 16px rgba(255, 255, 255, 0.8),
                                2px 2px 4px rgba(163, 177, 198, 0.1)
                            `,
                            color: "#e8eaed",
                        }}
                    >
                        HELLO
                    </div>
                </motion.div>

                {/* Dark mode background HELLO text */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className="absolute inset-0 items-center justify-center pointer-events-none z-10 hidden dark:md:flex"
                >
                    <div
                        className={`text-[25vw] font-black tracking-wider select-none ${blackHanSans.className}`}
                        style={{
                            textShadow: `
                                 8px 8px 16px rgba(0, 0, 0, 0.7),
                                 -8px -8px 16px rgba(40, 40, 40, 0.2),
                                2px 2px 4px rgba(0, 0, 0, 0.4)
                            `,
                            color: "#171717",
                        }}
                    >
                        HELLO
                    </div>
                </motion.div>

                {/* Decorative Neumorphic Shapes - Enhanced with responsive colored shapes */}
                <div className="absolute inset-0 pointer-events-none z-5">
                    {/* Main neumorphic shapes - always visible */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute top-16 left-8 w-24 h-24 neuro-card rounded-full"
                    />

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="absolute top-20 right-12 w-16 h-32 neuro-card rounded-2xl transform rotate-12"
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.1 }}
                        className="absolute bottom-32 left-16 w-20 h-20 neuro-inset rounded-full"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 1.4 }}
                        className="absolute bottom-24 right-20 w-28 h-28 neuro-card rounded-full"
                    />

                    {/* Additional neumorphic shapes */}
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

                    {/* New additional neumorphic shapes */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 1.0 }}
                        className="absolute top-1/2 left-4 w-14 h-14 neuro-deep rounded-2xl transform rotate-45"
                    />

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="absolute bottom-1/3 right-6 w-18 h-10 neuro-card rounded-full transform -rotate-12"
                    />

                    {/* Colored accent shapes - fewer on mobile, more on desktop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.7 }}
                        className="absolute top-1/4 left-1/6 w-6 h-6 md:w-8 md:h-8 neuro-accent-blue rounded-full float-animation"
                    />

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 2.0 }}
                        className="absolute bottom-1/4 right-1/6 w-4 h-4 md:w-6 md:h-6 neuro-accent-purple rounded-full float-animation"
                        style={{ animationDelay: "2s" }}
                    />

                    {/* Desktop-only colored shapes */}
                    <motion.div
                        initial={{ opacity: 0, rotate: -180 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        transition={{ duration: 1.2, delay: 0.9 }}
                        className="absolute top-1/3 right-1/4 w-8 h-8 md:w-12 md:h-12 neuro-accent-blue rounded-lg transform rotate-45 float-animation hidden md:block"
                        style={{ animationDelay: "1s" }}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 1.6 }}
                        className="absolute bottom-1/3 left-1/4 w-6 h-6 md:w-10 md:h-10 neuro-accent-purple rounded-full float-animation hidden md:block"
                        style={{ animationDelay: "3s" }}
                    />

                    {/* Additional desktop-only geometric shapes */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 1.3 }}
                        className="absolute top-1/2 left-12 w-4 h-12 md:w-6 md:h-16 neuro-accent-blue rounded-full transform -rotate-12 float-animation hidden md:block"
                        style={{ animationDelay: "4s" }}
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.8 }}
                        className="absolute top-1/2 right-16 w-10 h-6 md:w-14 md:h-8 neuro-accent-purple rounded-2xl transform rotate-45 float-animation hidden md:block"
                        style={{ animationDelay: "5s" }}
                    />

                    {/* Small accent dots - mobile gets fewer */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 2.2 }}
                        className="absolute top-1/5 right-1/3 w-3 h-3 md:w-4 md:h-4 neuro-accent-blue rounded-full float-animation hidden md:block"
                        style={{ animationDelay: "6s" }}
                    />

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 2.4 }}
                        className="absolute bottom-1/5 left-1/3 w-3 h-3 md:w-5 md:h-5 neuro-accent-purple rounded-full float-animation hidden md:block"
                        style={{ animationDelay: "7s" }}
                    />

                    {/* Floating triangular shapes - desktop only */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 2.1 }}
                        className="absolute top-3/4 left-1/5 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] md:border-l-[8px] md:border-r-[8px] md:border-b-[14px] border-l-transparent border-r-transparent border-b-blue-300 float-animation hidden md:block"
                        style={{
                            animationDelay: "8s",
                            filter: "drop-shadow(4px 4px 8px rgba(163, 177, 198, 0.3)) drop-shadow(-4px -4px 8px rgba(255, 255, 255, 0.8))",
                        }}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 2.3 }}
                        className="absolute top-1/6 right-1/5 w-0 h-0 border-l-[4px] border-r-[4px] border-b-[8px] md:border-l-[6px] md:border-r-[6px] md:border-b-[10px] border-l-transparent border-r-transparent border-b-purple-300 float-animation transform rotate-180 hidden md:block"
                        style={{
                            animationDelay: "9s",
                            filter: "drop-shadow(4px 4px 8px rgba(163, 177, 198, 0.3)) drop-shadow(-4px -4px 8px rgba(255, 255, 255, 0.8))",
                        }}
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
                            className="text-7xl sm:text-[7vw] font-black tracking-tight text-gray-800 dark:text-gray-100 leading-none mb-8 "
                            style={{
                                textShadow: `
                                    2px 2px 4px rgba(163, 177, 198, 0.3),
                                    -1px -1px 2px rgba(255, 255, 255, 0.8)
                                `,
                            }}
                        >
                            Full Stack Developer
                        </motion.h1>
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
