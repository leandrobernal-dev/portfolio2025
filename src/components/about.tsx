"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl font-bold mb-8">About Me</h2>
                    <div className="space-y-4 text-gray-600">
                        <p>
                            I used to build <strong>robots</strong>, now I build
                            websites 🔨🤖➡️🌐. I've been freelancing for{" "}
                            <strong>3 years</strong> now, building and
                            maintaining websites and web applications for my
                            clients.
                        </p>
                        <div>
                            <p>
                                My go-to framework for both front-end and
                                full-stack applications is{" "}
                                <strong>Next.js</strong>. When I start building
                                a new personal project, Next.js helps me quickly
                                and efficiently bring ideas to life. It allows
                                for rapid testing and iteration, making it
                                perfect for exploring new concepts and refining
                                them along the way.
                            </p>
                        </div>
                        <p>
                            In my spare time, I enjoy 3D printing and 3d
                            modeling, or play fingerstyle on my acoustic
                            guitar🎸.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
