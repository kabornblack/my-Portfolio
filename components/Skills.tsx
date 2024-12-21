import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import skillData, { tech } from "./data/skillData";

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex relative flex-col text-center md:text-left px-10 justify-evenly mx-auto items-center max-w-7xl"
    >
      <div className="flex flex-col items-center">
        <h2 className="uppercase tracking-[10px] text-gray-700 dark:text-gray-200 text-3xl font-serif font-bold pt-32 pb-10">
          Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-2 max-w-[800px] mb-4 pb-10">
          {tech.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="uppercase tracking-[3px] text-gray-500 dark:text-gray-400 text-sm font-serif pb-10">
          Hover over a skill for current proficiency
        </h3>

        <div className="grid grid-cols-4 gap-x-8 gap-y-4 max-w-[700px] justify-center items-center pb-24">
          {skillData.map((skill) => (
            <Skill key={skill.id} link={skill.link} level={skill.level} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
