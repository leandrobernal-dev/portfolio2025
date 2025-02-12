"use client";

import { motion } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center space-y-8"
                >
                    <motion.h1
                        className="text-6xl md:text-8xl font-black mb-2 tracking-wide text-[#323539]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Leandro Bernal
                    </motion.h1>
                    <div className="w-16 h-px bg-gray-300 mx-auto"></div>
                    <motion.h2
                        className="text-2xl font-bold md:text-4xl text-gray-700 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Full Stack Developer
                    </motion.h2>
                    <motion.p
                        className="text-lg md:text-xl text-gray-500 mb-8 flex flex-col md:flex-row gap-1 justify-center items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <span>Creating stuff from the</span>
                        <MapPin />
                        <span>Philippines</span>
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <motion.a
                            href="#projects"
                            className="inline-block text-lg text-gray-800 hover:text-gray-600 transition-colors relative group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View My Work
                            <div className="w-full h-0.5 bg-gray-900 mt-1" />
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
            <motion.div
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            >
                <ChevronDown className="w-8 h-8 text-gray-400" />
            </motion.div>
        </section>
    );
}
