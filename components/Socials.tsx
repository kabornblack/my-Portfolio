// components/Socials.jsx or components/Socials.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaUserCircle,
  FaGithub,
  FaLinkedin,
  FaBriefcase,
} from "react-icons/fa";

function Socials() {
  return (
    <div className="flex gap-8 md:gap-16">
      {/* Linkedin Link */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Link
          href="https://www.linkedin.com/in/kabiru-shaibu-a81082164/"
          target="_blank"
          className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
        >
          <FaLinkedin className="w-10 h-10" />
        </Link>
      </motion.div>

      {/* GitHub Link */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <Link
          href="https://github.com/kabornblack"
          target="_blank"
          className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
        >
          <FaGithub className="w-10 h-10" />
        </Link>
      </motion.div>

      {/* Portfolio Link */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <Link
          href="/portfolio"
          className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
        >
          <FaBriefcase className="w-10 h-10" />
        </Link>
      </motion.div>

      {/* Profile Link */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Link
          href="/profile"
          className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
        >
          <FaUserCircle className="w-10 h-10" />
        </Link>
      </motion.div>
    </div>
  );
}

// Make sure to export default
export default Socials;
