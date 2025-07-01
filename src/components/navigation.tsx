"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();

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
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <motion.a
                        href="/"
                        className="text-xl font-bold"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="neuro-card p-3">
                            <img src="/logo.svg" alt="" className="w-10 h-10" />
                        </div>
                    </motion.a>
                    <div className="hidden md:flex space-x-2">
                        {["About", "Projects", "Experience", "Tech"].map(
                            (item) => (
                                <motion.a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="neuro-button px-6 py-3 text-gray-700 hover:text-gray-900 font-medium"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item}
                                </motion.a>
                            )
                        )}
                    </div>
                    <button 
                        className="md:hidden neuro-button p-3" 
                        onClick={toggleMobileMenu}
                    >
                        <motion.div
                            className="w-6 h-5 flex flex-col justify-between"
                            animate={isMobileMenuOpen ? "open" : "closed"}
                        >
                            <motion.span
                                className="w-full h-0.5 bg-gray-700 rounded-full"
                                variants={{
                                    closed: { rotate: 0, y: 0 },
                                    open: { rotate: 45, y: 9 },
                                }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.span
                                className="w-full h-0.5 bg-gray-700 rounded-full"
                                variants={{
                                    closed: { opacity: 1 },
                                    open: { opacity: 0 },
                                }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.span
                                className="w-full h-0.5 bg-gray-700 rounded-full"
                                variants={{
                                    closed: { rotate: 0, y: 0 },
                                    open: { rotate: -45, y: -9 },
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                    </button>
                </div>
            </div>
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden neuro-card-inset mx-6 mb-4"
                    >
                        <div className="p-6 space-y-3">
                            {["About", "Projects", "Experience", "Tech"].map(
                                (item) => (
                                    <motion.a
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        className="block neuro-button p-3 text-gray-700 hover:text-gray-900 transition-colors text-center font-medium"
                                        whileHover={{ x: 5 }}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item}
                                    </motion.a>
                                )
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}