"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function HomeSocial() {
  return (
    <div className="fixed top-8 left-8 z-50 animate-bounce hover:animate-none">
      {/* Home Link */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Link
          href="/"
          className="text-gray-600 dark:text-gray-400 dark:hover:text-white"
        >
          <FaHome className="w-6 h-6" />
        </Link>
      </motion.div>
    </div>
  );
}
