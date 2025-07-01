"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

const pastVersions = [
    {
        id: 1,
        year: 2022,
        image: "/placeholder.svg?height=200&width=300",
        link: "https://leandrobernal-dev.github.io/leiss-portfolio/",
    },
    {
        id: 2,
        year: 2024,
        image: "/portfolio.jpg",
        link: "https://v2.bernalleandro.com/",
    },
    {
        id: 3,
        year: 2025,
        image: "/portfoliov3.png",
        link: "https://bernalleandro.com/",
    },
];

export default function PastVersionsModal({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className="neuro-base p-6 w-full max-w-2xl"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold text-gray-800">
                                Past Portfolio Versions
                            </h2>
                            <button
                                onClick={onClose}
                                className="neuro-btn p-2 text-gray-600 hover:text-gray-800"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {pastVersions.map((version) => (
                                <a
                                    key={version.id}
                                    href={version.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block group"
                                >
                                    <div className="neuro-card p-3 hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                                        <div className="neuro-inset p-2 mb-3">
                                            <div className="relative h-32 overflow-hidden rounded-lg bg-white">
                                                <Image
                                                    src={
                                                        version.image ||
                                                        "/placeholder.svg"
                                                    }
                                                    alt={`Portfolio version ${version.year}`}
                                                    fill
                                                    className="object-cover transition-transform group-hover:scale-105"
                                                />
                                            </div>
                                        </div>
                                        <p className="text-center font-medium text-gray-800">
                                            v{version.id}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}