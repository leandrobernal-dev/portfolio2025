"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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

export default function Projects() {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12">Projects</h2>
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
