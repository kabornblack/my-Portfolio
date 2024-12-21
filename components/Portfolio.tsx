"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import { projects } from "./data/projectData";

export default function Portfolio() {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <div className="fixed top-0 left-0 w-full h-20 bg-gray-300 dark:bg-gray-800 z-20 justify-center items-center">
        <div className="flex items-center justify-center h-full px-4">
          <h2 className="flex justify-center items-center text-3xl font-serif font-bold uppercase text-gray-700 dark:text-gray-200 pb-8 pt-10">
            portfolio
          </h2>
        </div>
      </div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-36 z-10"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-lg bg-gray-300 dark:bg-gray-800 hover:shadow transition-all max-w-[300px] h-[350px] flex flex-col overflow-hidden"
          >
            {/* Image Section */}
            <div className="h-2/5 relative w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="p-6 h-1/2">
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
                    className="px-1 py-[2px] text-xs rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
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
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
