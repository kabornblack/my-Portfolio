import { motion } from "framer-motion";

const AnimatedText = () => {
  return (
    <motion.div
      className="relative w-[569px] h-[186px] flex items-center justify-center bg-transparent font-['Quicksand']"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="flex flex-col items-center gap-4">
        <motion.h1
          className="text-6xl font-bold text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          style={{ fontFamily: "Quicksand" }}
        >
          KABIRU
        </motion.h1>

        <motion.h1
          className="text-6xl font-bold text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          style={{ fontFamily: "Quicksand" }}
        >
          SHAIBU
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default AnimatedText;

// import { motion } from "framer-motion";

// const AnimatedText = () => {
//   // Animation variants for container
//   const containerVariants = {
//     hidden: {
//       opacity: 0,
//     },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//         delayChildren: 0.6,
//         duration: 1.2,
//         ease: "easeOut",
//       },
//     },
//   };

//   // Animation variants for each letter
//   const letterVariants = {
//     hidden: {
//       y: 50,
//       opacity: 0,
//       rotateX: -90,
//     },
//     visible: {
//       y: 0,
//       opacity: 1,
//       rotateX: 0,
//       transition: {
//         duration: 1.2,
//         ease: [0.6, 0.01, -0.05, 0.95],
//       },
//     },
//   };

//   const firstName = "KABIRU".split("");
//   const lastName = "SHAIBU".split("");

//   return (
//     <motion.div
//       className="relative overflow-hidden text-center w-[569px] h-[186px] box-border"
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//       style={{
//         fontFamily: "Quicksand, sans-serif",
//         WebkitFontSmoothing: "antialiased",
//         textSizeAdjust: "100%",
//         fill: "none",
//       }}
//     >
//       <motion.div
//         className="flex flex-col items-center justify-center h-full"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1.5, ease: "easeOut" }}
//       >
//         {/* First Name */}
//         <motion.div className="flex mb-4">
//           {firstName.map((letter, index) => (
//             <motion.span
//               key={index}
//               variants={letterVariants}
//               className="text-7xl font-bold text-white inline-block mx-[2px]"
//               style={{ lineHeight: "1.5" }}
//               whileHover={{
//                 scale: 1.2,
//                 color: "#f0f0f0",
//                 transition: { duration: 0.3 },
//               }}
//             >
//               {letter}
//             </motion.span>
//           ))}
//         </motion.div>

//         {/* Last Name */}
//         <motion.div className="flex">
//           {lastName.map((letter, index) => (
//             <motion.span
//               key={index}
//               variants={letterVariants}
//               className="text-7xl font-bold text-white inline-block mx-[2px]"
//               style={{ lineHeight: "1.5" }}
//               whileHover={{
//                 scale: 1.2,
//                 color: "#f0f0f0",
//                 transition: { duration: 0.3 },
//               }}
//             >
//               {letter}
//             </motion.span>
//           ))}
//         </motion.div>
//       </motion.div>

//       {/* Background gradient effect */}
//       <motion.div
//         className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
//         initial={{ x: "-100%" }}
//         animate={{ x: "100%" }}
//         transition={{
//           duration: 2,
//           ease: "easeInOut",
//           repeat: Infinity,
//           repeatDelay: 1,
//         }}
//       />
//     </motion.div>
//   );
// };

// export default AnimatedText;
