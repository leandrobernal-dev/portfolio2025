"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github, Star, Sparkles } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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

export default function Projects() {
    return (
        <section id="projects" className="py-20 neuro-section">
            <div className="container mx-auto px-2">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="neuro-card p-8 max-w-2xl mx-auto">
                        <h2 className="text-4xl font-bold mb-4 text-gray-800">
                            Featured Work
                        </h2>
                        <p className="text-lg text-gray-600">
                            A collection of projects that showcase my skills in
                            full-stack development, from concept to deployment.
                        </p>
                    </div>
                </motion.div>

                {/* Featured Project */}
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="neuro-featured p-8 relative overflow-hidden">
                        <div className="flex flex-col lg:flex-row relative z-10">
                            {/* Image Section */}
                            <div className="w-full lg:w-3/5 relative">
                                <div className="p-4 lg:p-8">
                                    <Carousel
                                        opts={{
                                            loop: true,
                                        }}
                                        plugins={[Autoplay({ delay: 8000 })]}
                                    >
                                        <CarouselContent>
                                            {featuredProject.images.map(
                                                (image, index) => (
                                                    <CarouselItem key={index}>
                                                        <div className="neuro-inset p-4">
                                                            <div className="relative aspect-video rounded-xl overflow-hidden bg-white">
                                                                <Image
                                                                    src={image}
                                                                    alt={`${
                                                                        featuredProject.title
                                                                    } screenshot ${
                                                                        index +
                                                                        1
                                                                    }`}
                                                                    fill
                                                                    className="object-contain p-2"
                                                                    priority={
                                                                        index ===
                                                                        0
                                                                    }
                                                                    sizes="(max-width: 768px) 100vw, 60vw"
                                                                />
                                                            </div>
                                                        </div>
                                                    </CarouselItem>
                                                )
                                            )}
                                        </CarouselContent>
                                        <CarouselPrevious />
                                        <CarouselNext />
                                    </Carousel>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="flex-1 flex flex-col justify-center p-4 lg:p-8">
                                <div className="mb-6">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="neuro-card flex items-center gap-2 px-4 py-2">
                                            <Star className="w-4 h-4 text-yellow-600 fill-current" />
                                            <span className="text-sm font-bold text-gray-800">
                                                Featured Project
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="neuro-card p-2 relative">
                                            <Image
                                                src="/disguisme.png"
                                                alt="DisguisMe Logo"
                                                width={40}
                                                height={40}
                                                className="rounded-lg"
                                            />
                                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center">
                                                <Sparkles className="w-2 h-2 text-white" />
                                            </div>
                                        </div>
                                        <h3 className="text-3xl lg:text-4xl font-black text-gray-800 tracking-tight">
                                            {featuredProject.title}
                                        </h3>
                                    </div>

                                    <p className="text-xl text-gray-700 mb-4 font-semibold">
                                        {featuredProject.shortDescription}
                                    </p>

                                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                        {featuredProject.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {featuredProject.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="neuro-card px-3 py-1 text-gray-700 text-sm font-medium"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <Button asChild size="lg">
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
                                    <Button asChild variant="outline" size="lg">
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
                        </div>
                    </div>
                </motion.div>

                {/* Other Projects */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="neuro-card p-6 max-w-md">
                        <h3 className="text-2xl font-bold text-gray-800">
                            Other Projects
                        </h3>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <Card className="neuro-card overflow-hidden h-full hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                                <CardContent className="p-0">
                                    <div className="neuro-inset p-3 m-4">
                                        <div className="relative h-40 overflow-hidden rounded-xl bg-white">
                                            <Image
                                                src={
                                                    project.image ||
                                                    "/placeholder.svg"
                                                }
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h4 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-gray-900 transition-colors">
                                            {project.title}
                                        </h4>
                                        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tags
                                                .slice(0, 3)
                                                .map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="neuro-card px-2 py-1 text-gray-600 text-xs font-medium"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            {project.tags.length > 3 && (
                                                <span className="neuro-card px-2 py-1 text-gray-500 text-xs">
                                                    +{project.tags.length - 3}
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex gap-3">
                                            <Button
                                                asChild
                                                variant="outline"
                                                size="sm"
                                                className="flex-1"
                                            >
                                                <a
                                                    href={project.demoUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center gap-1"
                                                >
                                                    <ExternalLink size={14} />
                                                    Demo
                                                </a>
                                            </Button>
                                            <Button
                                                asChild
                                                variant="outline"
                                                size="sm"
                                                className="flex-1"
                                            >
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center gap-1"
                                                >
                                                    <Github size={14} />
                                                    Code
                                                </a>
                                            </Button>
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