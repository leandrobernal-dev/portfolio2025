"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 7,
        title: "topRes",
        shortDescription: "Resume Generator",
        description:
            "topRes is a user-friendly web app designed to help you create a professional resume in seconds.",
        image: "/resumegenerator.png",
        githubUrl: "https://github.com/leandrobernal-dev/resumeGen",
        demoUrl: "https://topres.openideax.com/",
        tags: ["Next.js", "Tailwind CSS", "Typescript", "Javascript"],
    },
    {
        id: 1,
        title: "InstaViewer",
        shortDescription: "Anonymous Instagram Stories Viewer",
        description:
            "View Instagram stories anonymously with this Next.js web application. No login required.",
        image: "/instaviewer.jpg",
        githubUrl:
            "https://github.com/leandrobernal-dev/anonymous-insta_stories-viewer",
        demoUrl: "https://anonymous-insta-stories-viewer.vercel.app/",
        tags: [
            "Supabase",
            "Puppeteer",
            "Next.js",
            "Node.js",
            "Tailwind CSS",
            "Javascript",
        ],
    },
    {
        id: 5,
        title: "MusicViewr",
        shortDescription: "Sheet Music Viewer",
        description:
            "A lightweight web app for viewing and managing PDF sheet music, designed for musicians and music enthusiasts.",
        image: "/musicviewr.png",
        githubUrl: "https://github.com/leandrobernal-dev/musicviewr",
        demoUrl: "https://musicviewr.vercel.app/",
        tags: ["Next.js", "Tailwind CSS", "Typescript", "Javascript"],
    },
    {
        id: 2,
        title: "Ref Online",
        shortDescription: "Reference Canvas board for Designers",
        description:
            "A canvas for designers to put their image references on to. Similar to Pureref, but on the browser.",
        image: "/refonline.jpg",
        githubUrl: "https://github.com/leandrobernal-dev/ref-ol",
        demoUrl: "https://refonline.vercel.app/",
        tags: [
            "MongoDB",
            "AWS S3",
            "NextAuth",
            "Next.js",
            "Node.js",
            "Tailwind CSS",
            "Javascript",
        ],
    },
    {
        id: 3,
        title: "FakePost",
        shortDescription: "Chat Meme Generator",
        description:
            "Generate realistic funny chat screenshots from popular messaging platforms like WhatsApp, iMessage, and Facebook Messenger.",
        image: "/fakepost.jpg",
        githubUrl: "https://github.com/leandrobernal-dev/fakepost",
        demoUrl: "https://fakepost.vercel.app/create",
        tags: ["Next.js", "Tailwind CSS", "Javascript"],
    },

    {
        id: 4,
        title: "Portfolio Website",
        shortDescription: "My 2024 Portfolio Website",
        description:
            "My 2024 Portfolio Website made with Next.js and Tailwind CSS.",
        image: "/portfolio.jpg",
        githubUrl: "https://github.com/leandrobernal-dev/portfolio2024",
        demoUrl: "https://bernalleandro.com/",
        tags: ["Next.js", "Tailwind CSS", "Javascript"],
    },
];

import { useState } from "react";

const featuredProject = {
    id: 99,
    title: "DisguisMe",
    shortDescription: "One-Click Disposable Identity",
    description:
        "Create fake personas with custom names, emails, and more to stay private when signing up for shady sites. Now with browser extension and email forwarding!",
    images: [
        "/disguisme_extension_inline.gif",
        "/disguisme_screenshot1.png",
        "/disguisme_screenshot2.png",
        "/extension_popup.gif",
    ],
    githubUrl: "https://github.com/leandrobernal-dev",
    demoUrl: "https://disguis.me",
    tags: ["Next.js", "Tailwind CSS", "Typescript", "Supabase"],
};

function FeaturedProjectCarousel({
    images,
    alt,
}: {
    images: string[];
    alt: string;
}) {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0); // 1 for next, -1 for prev
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Auto-advance every 3 seconds
    useEffect(() => {
        if (images.length <= 1) return;
        timeoutRef.current = setTimeout(() => {
            setDirection(1);
            setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
        }, 8000);
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [current, images.length]);

    const prev = () => {
        setDirection(-1);
        setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
    };
    const next = () => {
        setDirection(1);
        setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
    };

    // Animation variants for sliding
    const variants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 300 : -300,
            opacity: 0,
            position: "absolute" as const,
        }),
        center: {
            x: 0,
            opacity: 1,
            position: "relative" as const,
        },
        exit: (dir: number) => ({
            x: dir > 0 ? -300 : 300,
            opacity: 0,
            position: "absolute" as const,
        }),
    };

    return (
        <div className="relative w-full h-full flex items-center justify-center p-4 overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={current}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 400, damping: 30 },
                        opacity: { duration: 0.2 },
                    }}
                    className="w-full h-full flex items-center justify-center"
                    style={{ minHeight: 200 }}
                >
                    <Image
                        src={images[current]}
                        alt={alt}
                        fill
                        className="object-contain rounded-xl shadow-lg border-2 border-yellow-300 bg-white"
                        priority
                        sizes="(max-width: 768px) 100vw, 40vw"
                    />
                </motion.div>
            </AnimatePresence>
            {images.length > 1 && (
                <>
                    <button
                        onClick={prev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-yellow-300/80 hover:bg-yellow-400 text-yellow-900 rounded-full p-2 shadow z-20"
                        aria-label="Previous image"
                        type="button"
                    >
                        <svg
                            width="20"
                            height="20"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M13 16l-5-6 5-6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-300/80 hover:bg-yellow-400 text-yellow-900 rounded-full p-2 shadow z-20"
                        aria-label="Next image"
                        type="button"
                    >
                        <svg
                            width="20"
                            height="20"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M7 4l5 6-5 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 z-20">
                        {images.map((_, idx) => (
                            <span
                                key={idx}
                                className={`w-2 h-2 rounded-full ${
                                    idx === current
                                        ? "bg-yellow-500"
                                        : "bg-yellow-200"
                                }`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12">Projects</h2>
                {/* Featured Project */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <Card className="overflow-hidden flex flex-col lg:flex-row h-full shadow-2xl border-0 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 relative">
                        {/* Decorative Accent */}
                        <div className="absolute top-0 left-0 w-2 h-full bg-yellow-400 hidden lg:block z-10" />
                        {/* Image Section */}
                        <div className="relative w-full lg:w-2/5 h-64 lg:h-auto flex items-center justify-center bg-yellow-100">
                            <FeaturedProjectCarousel
                                images={featuredProject.images}
                                alt={featuredProject.title}
                            />
                        </div>
                        {/* Content Section */}
                        <div className="flex-1 flex flex-col justify-center p-8 lg:p-12">
                            <div className="mb-6">
                                <span className="inline-block bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1 rounded-full mb-4 shadow">
                                    <span className="mr-2">⭐</span> Featured
                                    Project
                                </span>
                                <div className="flex items-center gap-3 mb-2">
                                    <Image
                                        src="/disguisme.png"
                                        alt="DisguisMe Logo"
                                        width={40}
                                        height={40}
                                        className="rounded-lg shadow border border-yellow-300 bg-white"
                                    />
                                    <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                                        {featuredProject.title}
                                    </h3>
                                </div>
                                <p className="text-lg text-gray-700 mb-4 font-medium">
                                    {featuredProject.shortDescription}
                                </p>
                                <p className="text-md text-gray-600 mb-6 leading-relaxed">
                                    {featuredProject.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {featuredProject.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-yellow-200 text-yellow-900 text-xs font-semibold rounded-full shadow-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4 mt-auto">
                                <Button
                                    asChild
                                    className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold shadow"
                                    size="lg"
                                >
                                    <a
                                        href={featuredProject.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2"
                                    >
                                        <ExternalLink size={18} />
                                        Live Demo
                                    </a>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="border-yellow-400 text-yellow-900 hover:bg-yellow-100"
                                    size="lg"
                                >
                                    <a
                                        href={featuredProject.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2"
                                    >
                                        <Github size={18} />
                                        GitHub
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </Card>
                </motion.div>
                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="overflow-hidden h-full">
                                <CardContent className="p-0">
                                    <div className="relative h-48">
                                        <Image
                                            src={
                                                project.image ||
                                                "/placeholder.svg"
                                            }
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-lg font-semibold mb-2">
                                                {project.title}
                                            </h3>
                                            <div className="flex gap-2">
                                                <Button
                                                    asChild
                                                    variant="outline"
                                                >
                                                    <a
                                                        href={project.demoUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-1"
                                                    >
                                                        <ExternalLink />
                                                        Live Demo
                                                    </a>
                                                </Button>
                                                <Button
                                                    asChild
                                                    variant="outline"
                                                >
                                                    <a
                                                        href={project.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-1"
                                                    >
                                                        <Github />
                                                        GitHub
                                                    </a>
                                                </Button>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-4">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-1 bg-gray-100 text-xs rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
