"use client";

import React, { useRef, useState, useEffect } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { textLines } from "./data/aboutData";
import { motion } from "framer-motion";

// Remove the "export default" from here since we'll export at the end
function About() {
  const [isInView, setIsInView] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [currentTypingLine, setCurrentTypingLine] = useState<null | number>(
    null
  );

  useEffect(() => {
    if (isInView) {
      textLines.forEach((_, index) => {
        setTimeout(() => {
          setVisibleLines((prev) => [...prev, index]);
          setCurrentTypingLine(index);
        }, index * 3000);
      });

      setTimeout(() => {
        setCurrentTypingLine(null);
      }, textLines.length * 3000);
    }
  }, [isInView]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      ref={aboutRef}
      className="flex flex-col relative text-center px-10 py-16 justify-evenly max-w-3xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="flex justify-center text-3xl font-serif font-bold tracking-[10px] uppercase text-gray-700 dark:text-gray-200 pb-8 pt-20">
          about
        </h2>
      </motion.div>
      <div className="space-y-2">
        {textLines.map((line, index) => (
          <motion.h2
            key={index}
            initial={{ opacity: 0 }}
            animate={visibleLines.includes(index) ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="font-mono uppercase text-xm md:text-sm"
          >
            {visibleLines.includes(index) ? (
              <TypewriterLine
                text={line}
                isTyping={currentTypingLine === index}
                isLastLine={index === textLines.length - 1}
              />
            ) : null}
          </motion.h2>
        ))}
      </div>
    </motion.div>
  );
}

interface TypewriterLineProps {
  text: string;
  isTyping: boolean;
  isLastLine: boolean;
}

function TypewriterLine({ text, isTyping, isLastLine }: TypewriterLineProps) {
  const [typedText] = useTypewriter({
    words: [text],
    loop: 1,
    typeSpeed: 30,
    delaySpeed: 1000,
  });

  return (
    <span>
      {typedText}
      {(isTyping || isLastLine) && <Cursor />}
    </span>
  );
}

// Single export at the end
export default About;

// // "use client";

// import React, { useRef, useState, useEffect } from "react";
// import { Cursor, useTypewriter } from "react-simple-typewriter";
// import { textLines } from "./data/aboutData";
// import { motion } from "framer-motion";

// export default function About() {
//   const [isInView, setIsInView] = useState(false);
//   const aboutRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsInView(true);
//           observer.unobserve(entry.target); // Stop observing once in view
//         }
//       },
//       {
//         threshold: 0.5, // Trigger when 50% of the component is visible
//       }
//     );

//     if (aboutRef.current) {
//       observer.observe(aboutRef.current);
//     }

//     return () => {
//       if (aboutRef.current) {
//         observer.unobserve(aboutRef.current);
//       }
//     };
//   }, []);

//   // Managing visibility of each line
//   const [visibleLines, setVisibleLines] = useState<number[]>([]);
//   const [currentTypingLine, setCurrentTypingLine] = useState<null | number>(
//     null
//   );

//   useEffect(() => {
//     if (isInView) {
//       textLines.forEach((_, index) => {
//         setTimeout(() => {
//           setVisibleLines((prev) => [...prev, index]);
//           setCurrentTypingLine(index);
//         }, index * 3000); // Delay for each line
//       });

//       setTimeout(() => {
//         setCurrentTypingLine(null); // Stop showing cursors after all lines except the last
//       }, textLines.length * 3000);
//     }
//   }, [isInView]);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 2 }}
//       ref={aboutRef}
//       className="flex flex-col relative text-center px-10 py-16 justify-evenly max-w-3xl mx-auto"
//     >
//       <div>
//         <h2 className="flex justify-center text-3xl font-serif font-bold tracking-[10px] uppercase text-gray-700 dark:text-gray-200 pb-8 pt-20">
//           about
//         </h2>
//       </div>
//       <div className="space-y-2 ">
//         {textLines.map((line, index) => (
//           <h2 key={index} className="font-mono uppercase text-xm md:text-sm">
//             {visibleLines.includes(index) ? (
//               <>
//                 <span>
//                   <TypewriterLine
//                     text={line}
//                     isTyping={currentTypingLine === index}
//                     isLastLine={index === textLines.length - 1}
//                   />
//                 </span>
//               </>
//             ) : null}
//           </h2>
//         ))}
//       </div>
//     </motion.div>
//   );
// }

// interface TypewriterLineProps {
//   text: string;
//   isTyping: boolean;
//   isLastLine: boolean;
// }

// function TypewriterLine({ text, isTyping, isLastLine }: TypewriterLineProps) {
//   const [typedText] = useTypewriter({
//     words: [text],
//     loop: 1,
//     typeSpeed: 30,
//     delaySpeed: 1000,
//   });

//   return (
//     <span>
//       {typedText}
//       {(isTyping || isLastLine) && <Cursor />}
//     </span>
//   );
// }
