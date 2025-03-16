"use client";

import { motion } from "framer-motion";

function AnimatedName() {
  const firstName = "Kabiru".split("");
  const lastName = "Shaibu".split("");

  return (
    <div className="absolute inset-0 flex items-center justify-center space-x-4 md:space-x-8">
      <div className="flex space-x-2">
        {firstName.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              type: "spring",
              stiffness: 200,
            }}
            whileHover={{
              scale: 1.2,
              color: "#B8860B",
              transition: { duration: 0.2 },
            }}
            className="text-4xl md:text-6xl font-light text-white uppercase cursor-default"
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <div className="flex">
        {lastName.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: firstName.length * 0.1 + index * 0.1,
              type: "spring",
              stiffness: 200,
            }}
            whileHover={{
              scale: 1.2,
              color: "#B8860B",
              transition: { duration: 0.2 },
            }}
            className="text-4xl md:text-6xl font-thin text-white uppercase cursor-default"
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

export default AnimatedName;
