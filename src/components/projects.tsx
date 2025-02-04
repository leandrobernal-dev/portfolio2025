"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "Project One",
    description: "A minimal design project showcasing modern web technologies.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    title: "Project Two",
    description: "An e-commerce platform with seamless user experience.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["TypeScript", "Node.js", "MongoDB"],
  },
  {
    title: "Project Three",
    description: "A real-time collaboration tool for remote teams.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Socket.io", "Express"],
  },
  {
    title: "Project Four",
    description: "A mobile-first progressive web app for task management.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React Native", "Redux", "Firebase"],
  },
  {
    title: "Project Five",
    description: "An AI-powered content recommendation engine.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Python", "TensorFlow", "AWS"],
  },
]

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
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-gray-100 text-xs rounded-full">
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
  )
}

