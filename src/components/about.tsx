"use client"

import { motion } from "framer-motion"

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
              I'm a passionate full-stack developer with a keen eye for design and a love for creating seamless user
              experiences. My approach combines technical expertise with creative problem-solving.
            </p>
            <p>
              With years of experience in web development, I specialize in building modern applications using
              cutting-edge technologies. I believe in writing clean, maintainable code and creating intuitive user
              interfaces.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

