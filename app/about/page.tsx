"use client";

import { textLines } from "@/components/data/aboutData";
import React, { useRef, useState, useEffect } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
// import { textLines } from "./data/aboutData";

export default function About() {
  const [isInView, setIsInView] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target); // Stop observing once in view
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the component is visible
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

  // Managing visibility of each line
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
        }, index * 3000); // Delay for each line
      });

      setTimeout(() => {
        setCurrentTypingLine(null); // Stop showing cursors after all lines except the last
      }, textLines.length * 3000);
    }
  }, [isInView]);

  return (
    <div
      ref={aboutRef}
      className="flex flex-col relative text-center px-10 justify-evenly max-w-3xl mx-auto"
    >
      <div>
        <h2 className="flex justify-center text-3xl font-serif font-bold tracking-[10px] uppercase text-gray-700 dark:text-gray-200 pb-8 pt-10">
          about
        </h2>
      </div>
      <div className="space-y-2 tracking-[1px]">
        {textLines.map((line, index) => (
          <h2 key={index} className="font-mono uppercase text-sm">
            {visibleLines.includes(index) ? (
              <>
                <span>
                  <TypewriterLine
                    text={line}
                    isTyping={currentTypingLine === index}
                    isLastLine={index === textLines.length - 1}
                  />
                </span>
              </>
            ) : null}
          </h2>
        ))}
      </div>
    </div>
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
    typeSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <span>
      {typedText}
      {(isTyping || isLastLine) && <Cursor />}
    </span>
  );
}
