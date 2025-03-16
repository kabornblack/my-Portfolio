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
      {/* <AnimatedCircles /> */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2
          className="flex justify-center text-3xl font-serif font-bold tracking-[10px] uppercase 
        bg-gradient-to-r from-gray-300 via-gray-700 to-gray-300 dark:from-gray-700 dark:via-gray-300 dark:to-gray-700 
        bg-clip-text text-transparent pb-8 pt-20"
        >
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

export default About;
