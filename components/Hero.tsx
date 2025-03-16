import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function ResetDiagram() {
  const [mounted, setMounted] = useState(false);
  const [textSegments, setTextSegments] = useState({
    segment1: "",
    segment2: "",
    segment3: "",
    segment4: "",
  });

  const FIXED_PATHS = {
    curve1: "M 45 0 A 45 45 0 0 1 90 45",
    curve2: "M 90 45 A 45 45 0 0 1 45 90",
    curve3: "M 45 90 A 45 45 0 0 1 0 45",
    curve4: "M 0 45 A 45 45 0 0 1 45 0",
    curve5: "M 45 10 A 35 35 0 0 1 80 45",
    curve6: "M 80 45 A 35 35 0 0 1 45 80",
    curve7: "M 45 80 A 35 35 0 0 1 10 45",
    curve8: "M 10 45 A 35 35 0 0 1 45 10",
    curve9: "M 45 20 A 25 25 0 0 1 70 45",
    curve10: "M 70 45 A 25 25 0 0 1 45 70",
    curve11: "M 45 70 A 25 25 0 0 1 20 45",
    curve12: "M 20 45 A 25 25 0 0 1 45 20",
  };

  const texts = [
    "ARCHITECT",
    "INTEGRATE",
    "BUILD",
    "DEVELOP",
    "MAINTAIN",
    "TEST",
    "INNOVATE",
    "DEBUG",
    "REFACTOR",
    "OPTIMIZE",
    "DEPLOY",
    "SCALE",
  ];

  useEffect(() => {
    setMounted(true);

    const typeText = (
      segmentKey: keyof typeof textSegments,
      textGroup: string[]
    ) => {
      const fullText = textGroup.join(" · ");
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTextSegments((prev) => ({
            ...prev,
            [segmentKey]: fullText.slice(0, currentIndex),
          }));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 50);
    };

    // Start typing effects with delays
    setTimeout(() => typeText("segment1", texts.slice(0, 3)), 0);
    setTimeout(() => typeText("segment2", texts.slice(3, 6)), 1000);
    setTimeout(() => typeText("segment3", texts.slice(6, 9)), 2000);
    setTimeout(() => typeText("segment4", texts.slice(9, 12)), 3000);
  }, []);

  // Wait for client-side hydration to complete
  if (!mounted) {
    return null;
  }

  return (
    <div className="flex justify-center items-center min-h-screen w-screen pt-16">
      <div className="relative max-w-xl w-full p-20 aspect-square">
        {/* Centered Image */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <div className="w-28 md:w-44 h-28 md:h-44 rounded-full overflow-hidden ">
            <Image
              src="/profile.jpg"
              alt="page image"
              width={128}
              height={128}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Largest circle - only visible on lg screens */}
        <motion.svg
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block w-[700px] h-[700px] opacity-15"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http:www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            className="stroke-gray-400 dark:stroke-gray-700"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 80,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
        <motion.svg
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block w-[600px] h-[600px] opacity-15"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http:www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            className="stroke-gray-400 dark:stroke-gray-700"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>

        {/* Medium circle - your original circle */}
        <motion.svg
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[330px] md:w-[450px] h-[330px] md:h-[450px] opacity-15"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http:www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            className="stroke-gray-400 dark:stroke-gray-700"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 50,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>

        <motion.svg
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] opacity-15"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http:www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            className="stroke-gray-400 dark:stroke-gray-700"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>

        {/* Smallest circle */}
        <motion.svg
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[130px] md:w-[205px] h-[130px] md:h-[205px] z-50 opacity-50"
          fill="transparent"
          viewBox="0 0 100 100"
          xmlns="http:www.w3.org/2000/svg"
        >
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            className="stroke-gray-100 dark:stroke-gray-700"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            // animate={{
            //   strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            //   rotate: [120, 360],
            // }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>

        <svg
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full animate-pulse"
          viewBox="-25 -25 140 140"
          fill="none"
        >
          <defs>
            {Object.entries(FIXED_PATHS).map(([key, path]) => (
              <path key={key} id={key} d={path} />
            ))}
          </defs>

          <g className="text-[4px] font-semibold" fill="currentColor">
            <text className="text-gray-600">
              <textPath href="#curve1" startOffset="15%" className="text-[4px]">
                {textSegments.segment1}
              </textPath>
            </text>
            <text className="text-gray-600">
              <textPath href="#curve2" startOffset="15%" className="text-[4px]">
                {textSegments.segment2}
              </textPath>
            </text>
            <text className="text-gray-600">
              <textPath href="#curve3" startOffset="15%" className="text-[4px]">
                {textSegments.segment3}
              </textPath>
            </text>
            <text className="text-gray-600">
              <textPath href="#curve4" startOffset="20%" className="text-[4px]">
                {textSegments.segment4}
              </textPath>
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}
