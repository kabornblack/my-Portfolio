"use client";

import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      "Hi - The Name's Kabiru Shaibu",
      "Full Of Life And Love To--Code!",
      "Dedicated, Disciplined and Organize",
      "I'm currently Available!",
    ],
    loop: 9,
    onLoopDone: () => console.log(`Loop completed after 9 runs.`),
    delaySpeed: 2000,
  });

  return (
    <>
      <div className="relative min-h-screen flex flex-col justify-center text-center pt-24">
        {/* <BackgroundCircles /> */}
        <div className="z-30 flex flex-col items-center pt-24 ">
          <motion.div
            initial={{
              x: 0,
              opacity: 0,
              scale: 0.1,
            }}
            animate={{
              x: 0,
              opacity: 0.9,
              scale: [3, 0.5, 1.2, 1],
            }}
            transition={{ duration: 2 }}
          >
            <Image
              src="/profile.jpg"
              alt="page image"
              width={1000}
              height={1000}
              className="h-52 w-52 rounded-full object-cover mb-24 -mt-40 md:mb-8 md:mt-0 space-y-5 hover:scale-110 transition duration-300 ease-in-out transform hover:transform"
            />
          </motion.div>
          <div className="text-gray-700 dark:text-gray-200 pt-4">
            <h2 className="text-2xl text-gray-700 dark:text-gray-200 font-thin uppercase pb-8 tracking-[5px] md:tracking-[5px] z-50">
              <span className="mr-4">software</span>engineer
            </h2>
            <h1 className="font-mono uppercase text-sm">
              <span>{text}</span>
              <Cursor />
            </h1>
            <motion.div
              initial={{
                x: 0,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{ duration: 2 }}
              className="pt-8"
            ></motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
