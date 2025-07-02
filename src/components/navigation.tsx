"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check for saved theme preference or default to light mode
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

        if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
            setIsDark(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleDarkMode = () => {
        setIsDark(!isDark);
        if (!isDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <motion.nav
            className="fixed top-0 w-full z-50 neuro-nav"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-2 py-4">
                <div className="flex items-center justify-between">
                    <motion.a
                        href="/"
                        className="text-xl font-bold"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="neuro-card p-3">
                            <img src="/logo.svg" alt="" className="w-8 h-8 logo-invert" />
                        </div>
                    </motion.a>

                    <div className="hidden md:flex items-center space-x-2">
                        {["Projects", "Experience", "Tech"].map((item) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="neuro-btn px-5 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium text-sm"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item}
                            </motion.a>
                        ))}

                        {/* Dark Mode Toggle */}
                        <motion.button
                            onClick={toggleDarkMode}
                            className="neuro-toggle p-3 ml-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                initial={false}
                                animate={{ rotate: isDark ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {isDark ? (
                                    <Sun className="w-5 h-5 text-yellow-500" />
                                ) : (
                                    <Moon className="w-5 h-5 text-gray-600" />
                                )}
                            </motion.div>
                        </motion.button>
                    </div>

                    <div className="md:hidden flex items-center gap-2">
                        {/* Mobile Dark Mode Toggle */}
                        <motion.button
                            onClick={toggleDarkMode}
                            className="neuro-toggle p-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                initial={false}
                                animate={{ rotate: isDark ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {isDark ? (
                                    <Sun className="w-4 h-4 text-yellow-500" />
                                ) : (
                                    <Moon className="w-4 h-4 text-gray-600" />
                                )}
                            </motion.div>
                        </motion.button>

                        <button
                            className="neuro-btn p-2"
                            onClick={toggleMobileMenu}
                        >
                            <motion.div
                                className="w-5 h-4 flex flex-col justify-between"
                                animate={isMobileMenuOpen ? "open" : "closed"}
                            >
                                <motion.span
                                    className="w-full h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full"
                                    variants={{
                                        closed: { rotate: 0, y: 0 },
                                        open: { rotate: 45, y: 7 },
                                    }}
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.span
                                    className="w-full h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full"
                                    variants={{
                                        closed: { opacity: 1 },
                                        open: { opacity: 0 },
                                    }}
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.span
                                    className="w-full h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full"
                                    variants={{
                                        closed: { rotate: 0, y: 0 },
                                        open: { rotate: -45, y: -7 },
                                    }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                        </button>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden neuro-inset mx-6 mb-4"
                    >
                        <div className="p-4 space-y-2">
                            {["Projects", "Experience", "Tech"].map((item) => (
                                <motion.a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="block neuro-btn p-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-center font-medium text-sm"
                                    whileHover={{ x: 5 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}