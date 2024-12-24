"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import { projects } from "./data/projectData";
import { useRef } from "react";

export default function Portfolio() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const headerVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const tagVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.2,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div ref={containerRef} className="px-6 py-12 max-w-6xl mx-auto">
      <motion.div
        className="fixed top-0 left-0 w-full h-20 bg-gray-300 dark:bg-gray-800 z-20 justify-center items-center"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex items-center justify-center h-full px-4">
          <motion.h2
            className="flex justify-center items-center text-3xl font-serif font-bold uppercase text-gray-700 dark:text-gray-200 pb-8 pt-10"
            initial={{ letterSpacing: "0px" }}
            animate={{ letterSpacing: "4px" }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            portfolio
          </motion.h2>
        </div>
      </motion.div>

      <motion.div
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.1], [0, 1]),
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-36 z-10"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, margin: "-50px" }}
            className="rounded-lg bg-gray-300 dark:bg-gray-800 hover:shadow-xl transition-all max-w-[300px] h-[350px] flex flex-col overflow-hidden"
          >
            {/* Image Section with hover zoom effect */}
            <motion.div
              className="h-2/5 relative w-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform hover:scale-110"
              />
            </motion.div>

            {/* Content Section */}
            <div className="p-6 h-1/2">
              <motion.h3
                className="text-xl font-bold mb-2 dark:text-white"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {project.title}
              </motion.h3>
              <motion.p
                className="text-gray-600 dark:text-gray-300 mb-4"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                {project.description}
              </motion.p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tag}
                    custom={tagIndex}
                    variants={tagVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="px-1 py-[2px] text-xs rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              <motion.div
                className="flex gap-4"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
              >
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaGithub className="w-6 h-6" />
                  </motion.div>
                </Link>
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaExternalLinkAlt className="w-5 h-5" />
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
// import Image from "next/image";
// import { projects } from "./data/projectData";

// export default function Portfolio() {
//   return (
//     <div className="px-6 py-12 max-w-6xl mx-auto">
//       <div className="fixed top-0 left-0 w-full h-20 bg-gray-300 dark:bg-gray-800 z-20 justify-center items-center">
//         <div className="flex items-center justify-center h-full px-4">
//           <h2 className="flex justify-center items-center text-3xl font-serif font-bold uppercase text-gray-700 dark:text-gray-200 pb-8 pt-10">
//             portfolio
//           </h2>
//         </div>
//       </div>
//       <motion.div
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-36 z-10"
//       >
//         {projects.map((project, index) => (
//           <motion.div
//             key={project.title}
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             className="rounded-lg bg-gray-300 dark:bg-gray-800 hover:shadow transition-all max-w-[300px] h-[350px] flex flex-col overflow-hidden"
//           >
//             {/* Image Section */}
//             <div className="h-2/5 relative w-full">
//               <Image
//                 src={project.image}
//                 alt={project.title}
//                 fill
//                 className="object-cover"
//               />
//             </div>

//             {/* Content Section */}
//             <div className="p-6 h-1/2">
//               <h3 className="text-xl font-bold mb-2 dark:text-white">
//                 {project.title}
//               </h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">
//                 {project.description}
//               </p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.tags.map((tag) => (
//                   <span
//                     key={tag}
//                     className="px-1 py-[2px] text-xs rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex gap-4">
//                 <Link
//                   href={project.githubUrl}
//                   target="_blank"
//                   className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
//                 >
//                   <FaGithub className="w-6 h-6" />
//                 </Link>
//                 <Link
//                   href={project.liveUrl}
//                   target="_blank"
//                   className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
//                 >
//                   <FaExternalLinkAlt className="w-5 h-5" />
//                 </Link>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }
