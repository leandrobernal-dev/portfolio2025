"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleCloseMobileMenu = () => {
            if (isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };
        document.addEventListener("click", handleCloseMobileMenu);

        return () => {
            document.removeEventListener("click", handleCloseMobileMenu);
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <motion.nav
            className={`fixed top-0 w-full z-50 transition-colors duration-300 bg-white/80 backdrop-blur-md`}
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
                        <img src="/logo.svg" alt="" className="w-14" />
                    </motion.a>
                    <div className="hidden md:flex space-x-8">
                        {["About", "Projects", "Experience", "Tech"].map(
                            (item) => (
                                <motion.a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-gray-600 hover:text-gray-900 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item}
                                </motion.a>
                            )
                        )}
                    </div>
                    <button className="md:hidden" onClick={toggleMobileMenu}>
                        <motion.div
                            className="w-6 h-5 flex flex-col justify-between"
                            animate={isMobileMenuOpen ? "open" : "closed"}
                        >
                            <motion.span
                                className="w-full h-0.5 bg-gray-800"
                                variants={{
                                    closed: { rotate: 0, y: 0 },
                                    open: { rotate: 45, y: 9 },
                                }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.span
                                className="w-full h-0.5 bg-gray-800"
                                variants={{
                                    closed: { opacity: 1 },
                                    open: { opacity: 0 },
                                }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.span
                                className="w-full h-0.5 bg-gray-800"
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
                        className="md:hidden mobile-menu"
                    >
                        <div className="container mx-auto px-6 py-4">
                            {["About", "Projects", "Experience", "Tech"].map(
                                (item) => (
                                    <motion.a
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        className="block py-2 text-gray-600 hover:text-[#8B7FD2] transition-colors"
                                        whileHover={{ x: 5 }}
                                        onClick={(e) => {
                                            router.push(
                                                `/#${item.toLowerCase()}`
                                            );
                                            setTimeout(() => {
                                                toggleMobileMenu();
                                            }, 100);
                                        }}
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
