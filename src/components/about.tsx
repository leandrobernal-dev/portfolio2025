"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-20 neuro-section">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="neuro-container p-12">
                        <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">About Me</h2>
                        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                            <div className="neuro-card-inset p-6">
                                <p>
                                    I used to build <strong className="text-gray-800">robots</strong>, now I build
                                    websites 🔨🤖➡️🌐. I've been freelancing for{" "}
                                    <strong className="text-gray-800">3 years</strong> now, building and
                                    maintaining websites and web applications for my
                                    clients.
                                </p>
                            </div>
                            <div className="neuro-card-inset p-6">
                                <p>
                                    My go-to framework for both front-end and
                                    full-stack applications is{" "}
                                    <strong className="text-gray-800">Next.js</strong>. When I start building
                                    a new personal project, Next.js helps me quickly
                                    and efficiently bring ideas to life. It allows
                                    for rapid testing and iteration, making it
                                    perfect for exploring new concepts and refining
                                    them along the way.
                                </p>
                            </div>
                            <div className="neuro-card-inset p-6">
                                <p>
                                    In my spare time, I enjoy 3D printing and 3d
                                    modeling, or play fingerstyle on my acoustic
                                    guitar🎸. I also play online chess♟️.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}