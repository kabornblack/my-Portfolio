"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "C-U international school",
    description: "Educational website with multiple languages",
    githubUrl: "https://github.com/kabornblack/C-U-Language-School",
    liveUrl: "https://www.cuilschool.ee/",
    tags: ["React", "NextJs", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Swapify",
    description: "A barter and donation platform",
    githubUrl: "https://github.com/swapify-ou",
    liveUrl: "https://www.swapify.ee",
    tags: ["React", "JavaScript", "NextJs", "Dart"],
  },
  {
    title: "Upto-date",
    description:
      "App where you can share facts and other users can agree or disagree.",
    githubUrl: "https://github.com/kabornblack/Upto-date",
    liveUrl: "https://uptodate-kabbi.netlify.app/",
    tags: ["HTML", "CSS", "React", "Superbase"],
  },
  {
    title: "Disney-Clone",
    description:
      "A clone of the Disney website strickly for personal learning purpose",
    githubUrl: "https://github.com/kabornblack/Disney-clone",
    liveUrl: "https://disney-clone-omega-henna.vercel.app/",
    tags: ["React", "NextJs", "TypeScript", "Tailwind"],
  },
  {
    title: "Walmart-Clone",
    description: "Walmart's online shopping experience.",
    githubUrl: "https://github.com/kabornblack/walmart-clone",
    liveUrl: "https://walmart-clone-one-steel.vercel.app/",
    tags: ["React", "NextJs", "Typescript"],
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
