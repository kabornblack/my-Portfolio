"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Project One",
    description:
      "A fullstack web application built with Next.js and TypeScript",
    githubUrl: "https://github.com/kabornblack/project-one",
    liveUrl: "https://project-one.vercel.app",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Project Two",
    description: "Real-time chat application with WebSocket integration",
    githubUrl: "https://github.com/kabornblack/project-two",
    liveUrl: "https://project-two.vercel.app",
    tags: ["React", "Node.js", "Socket.io"],
  },
  {
    title: "Project Three",
    description: "E-commerce platform with payment integration",
    githubUrl: "https://github.com/kabornblack/project-three",
    liveUrl: "https://project-three.vercel.app",
    tags: ["Next.js", "Stripe", "MongoDB"],
  },
  {
    title: "Project Four",
    description: "E-commerce platform with payment integration",
    githubUrl: "https://github.com/kabornblack/project-three",
    liveUrl: "https://project-three.vercel.app",
    tags: ["Next.js", "Stripe", "MongoDB"],
  },
  {
    title: "Project Five",
    description: "E-commerce platform with payment integration",
    githubUrl: "https://github.com/kabornblack/project-three",
    liveUrl: "https://project-three.vercel.app",
    tags: ["Next.js", "Stripe", "MongoDB"],
  },
  {
    title: "Project Six",
    description: "E-commerce platform with payment integration",
    githubUrl: "https://github.com/kabornblack/project-three",
    liveUrl: "https://project-three.vercel.app",
    tags: ["Next.js", "Stripe", "MongoDB"],
  },
  {
    title: "Project Seven",
    description: "E-commerce platform with payment integration",
    githubUrl: "https://github.com/kabornblack/project-three",
    liveUrl: "https://project-three.vercel.app",
    tags: ["Next.js", "Stripe", "MongoDB"],
  },
];

export default function Portfolio() {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 rounded-lg bg-gray-100 dark:bg-gray-800 hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-bold mb-2 dark:text-white">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-sm rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <Link
                href={project.githubUrl}
                target="_blank"
                className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </Link>
              <Link
                href={project.liveUrl}
                target="_blank"
                className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <FaExternalLinkAlt className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
