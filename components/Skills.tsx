import React, { useRef } from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import skillData, { tech } from "./data/skillData";
// import AnimatedCircles from "./AnimatedCircles";

export default function Skills() {
  const ref = useRef(null);

  return (
    <motion.div
      // ref={ref}
      className="flex relative flex-col text-center md:text-left px-10 py-10 justify-evenly mx-auto items-center max-w-7xl"
    >
      {/* <AnimatedCircles /> */}
      <div className="flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center text-3xl font-serif font-bold tracking-[10px] uppercase 
        bg-gradient-to-r from-gray-300 via-gray-700 to-gray-300 dark:from-gray-700 dark:via-gray-300 dark:to-gray-700 
        bg-clip-text text-transparent pb-8 pt-20"
        >
          Skills
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 max-w-[800px] mb-4 pb-10"
        >
          {tech.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="uppercase tracking-[3px] text-gray-500 dark:text-gray-400 text-sm font-serif pb-10"
        >
          Hover over a skill for current proficiency
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid grid-cols-8 gap-x-1 gap-y-4 max-w-3xl justify-start items-start pb-24"
        >
          {skillData.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Skill link={skill.link} level={skill.level} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
