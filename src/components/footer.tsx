"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import PastVersionsModal from "./past-versions-modal";

export default function Footer() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <footer className="py-12 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect</h3>
                        <div className="space-y-3">
                            <motion.a
                                href="https://github.com/leandrobernal-dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                                whileHover={{ x: 5 }}
                            >
                                <Github className="w-5 h-5" />
                                GitHub
                            </motion.a>

                            <motion.a
                                href="https://www.upwork.com/freelancers/~01a704d9fb8d180d89"
                                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                                whileHover={{ x: 5 }}
                            >
                                <img
                                    src="https://www.upwork.com/favicon.ico"
                                    className="w-6 invert"
                                    alt=""
                                />
                                Upwork
                            </motion.a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Quick Links
                        </h3>
                        <div className="space-y-3">
                            {["About", "Projects", "Experience", "Tech"].map(
                                (item) => (
                                    <motion.a
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        className="block text-gray-600 hover:text-gray-900 transition-colors"
                                        whileHover={{ x: 5 }}
                                    >
                                        {item}
                                    </motion.a>
                                )
                            )}
                        </div>
                    </div>

                    {/* Portfolio Versions */}
                    <div className="lg:text-right">
                        <h3 className="text-lg font-semibold mb-4">
                            Portfolio Timeline
                        </h3>
                        <Button
                            variant="outline"
                            className="gap-2"
                            onClick={() => setIsModalOpen(true)}
                        >
                            <Clock className="w-4 h-4" />
                            View Past Versions
                        </Button>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
                    <p>
                        © {new Date().getFullYear()} Leandro Bernal. All rights
                        reserved.
                    </p>
                </div>
            </div>
            <PastVersionsModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </footer>
    );
}
