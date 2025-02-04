"use client"

import { motion } from "framer-motion"
import {
  Code2,
  FileJson,
  Blocks,
  Server,
  Terminal,
  Database,
  Container,
  Cloud,
  Table2,
  Paintbrush,
  GitBranch,
} from "lucide-react"

const technologies = [
  {
    name: "JavaScript",
    icon: Code2,
  },
  {
    name: "TypeScript",
    icon: FileJson,
  },
  {
    name: "React",
    icon: Blocks,
  },
  {
    name: "Next.js",
    icon: Server,
  },
  {
    name: "Node.js",
    icon: Terminal,
  },
  {
    name: "Python",
    icon: Code2,
  },
  {
    name: "Docker",
    icon: Container,
  },
  {
    name: "AWS",
    icon: Cloud,
  },
  {
    name: "MongoDB",
    icon: Database,
  },
  {
    name: "PostgreSQL",
    icon: Table2,
  },
  {
    name: "Tailwind CSS",
    icon: Paintbrush,
  },
  {
    name: "Git",
    icon: GitBranch,
  },
]

export default function TechStack() {
  return (
    <section id="tech" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center gap-4 group"
              >
                <Icon className="w-8 h-8 text-gray-600 group-hover:text-gray-900 transition-colors" />
                <span className="text-lg font-medium text-gray-800">{tech.name}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

