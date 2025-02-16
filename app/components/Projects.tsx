"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

const projects = [
  {
    title: "Custom PDF Viewer",
    description: "A web-based PDF viewer with file upload, page tracking, and bookmarking features.",
    technologies: ["PDF.js", "Next.js", "Redux", "AWS S3"],
    github: "https://github.com/pdf-viewer",
    live: "#",
  },
  {
    title: "Android Automation Testing Framework",
    description:
      "An automated testing framework for Android applications with intelligent test case generation and image recognition.",
    technologies: ["Python", "OpenCV", "Gemini API", "Appium"],
    github: "https://github.com/drizz",
    live: "#",
  },
  {
    title: "Real-time Web Chat Application",
    description: "A responsive web chat application with rooms, search functionality, and file sharing capabilities.",
    technologies: ["Socket.IO", "JWT", "SEO techniques"],
    github: "https://github.com/chat.com",
    live: "#",
  },
  {
    title: "Complaint Management System",
    description:
      "A web-based system for managing and tracking complaints in residence halls with filtering and status updates.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/csrsweb",
    live: "#",
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Featured Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

