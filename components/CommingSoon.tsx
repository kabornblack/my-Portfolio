"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function ComingSoon() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component mounts
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`relative top-0 left-0 w-full min-h-screen transform transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
      style={{
        background: `linear-gradient(
          to bottom, 
          var(--bg-start), 
          var(--bg-end)
        )`,
      }}
    >
      <div className="flex flex-col justify-center items-center py-48">
        {/* Spinner Animation */}
        <motion.div
          className="relative w-24 h-24 mb-6"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "linear",
          }}
        >
          <div className="absolute inset-0 rounded-full border-4 border-dashed border-gray-300 dark:border-gray-700" />
          <div className="absolute inset-0 rounded-full border-4 border-dashed border-transparent border-t-gray-800 dark:border-t-gray-300 animate-spin-fast" />
        </motion.div>

        {/* "Coming Soon" Message */}
        <motion.h1
          className="text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Coming Soon
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-lg text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I am working on something exciting! Stay tuned for updates.
        </motion.p>

        {/* Optional Back Button */}
        <motion.a
          href="/"
          className="mt-8 px-6 py-2 text-lg font-semibold rounded-full bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 hover:scale-105 transition-transform duration-300 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Go Back
        </motion.a>
      </div>
    </div>
  );
}

export default ComingSoon;

// "use client";

// import { motion } from "framer-motion";
// import { FC } from "react";

// interface ComingSoonProps {
//   title?: string;
//   subtitle?: string;
//   eta?: string;
// }

// const ComingSoon: FC<ComingSoonProps> = ({
//   title = "Coming Soon",
//   subtitle = "We're working on something amazing!",
//   eta = "Q1 2024",
// }) => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-center space-y-8 max-w-2xl mx-auto"
//       >
//         {/* Main Title with Animation */}
//         <motion.div
//           initial={{ scale: 0.5 }}
//           animate={{ scale: 1 }}
//           transition={{
//             type: "spring",
//             stiffness: 260,
//             damping: 20,
//             delay: 0.2,
//           }}
//         >
//           <h1 className="text-3xl md:text-5xl font-quicksand font-bold text-gray-800 dark:text-white">
//             {title}
//           </h1>
//         </motion.div>

//         {/* Animated Subtitle */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-hubballi"
//         >
//           {subtitle}
//         </motion.p>

//         {/* Animated Progress Bar */}
//         <motion.div
//           className="w-full max-w-md mx-auto h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
//           initial={{ width: 0 }}
//           animate={{ width: "100%" }}
//           transition={{ delay: 0.8, duration: 1 }}
//         >
//           <motion.div
//             className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
//             initial={{ width: "0%" }}
//             animate={{
//               width: ["0%", "100%"],
//               transition: {
//                 duration: 2,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               },
//             }}
//           />
//         </motion.div>

//         {/* ETA Display */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1 }}
//           className="inline-block px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg"
//         >
//           <p className="text-gray-600 dark:text-gray-300">
//             Expected Launch:{" "}
//             <span className="font-semibold text-blue-600 dark:text-blue-400">
//               {eta}
//             </span>
//           </p>
//         </motion.div>

//         {/* Decorative Elements */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <motion.div
//             className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
//             animate={{
//               scale: [1, 1.2, 1],
//               opacity: [0.2, 0.3, 0.2],
//             }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//           <motion.div
//             className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
//             animate={{
//               scale: [1.2, 1, 1.2],
//               opacity: [0.2, 0.3, 0.2],
//             }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: 2,
//             }}
//           />
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default ComingSoon;
