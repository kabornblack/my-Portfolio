"use client";

import React from "react";

import { InfiniteMovingCards } from "./ui/InfinityCards";
import { testimonials } from "./data/clientData";
// import AnimatedCircles from "./AnimatedCircles";

const Clients = () => {
  return (
    <section id="testimonials">
      <div className="flex flex-col items-center max-w-3xl mx-auto">
        {/* <AnimatedCircles /> */}

        <div className=" flex flex-col items-center justify-center">
          <h1 className="max-w-3xl mx-auto px-4 text-center pt-20 lg:pt-32">
            <span className="block text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Kind words from
            </span>
            <span
              className="mt-2 block text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight
             bg-gradient-to-r from-gray-600 to-gray-300 inline-block text-transparent bg-clip-text"
            >
              valued partners and collaborators
            </span>
            <span className="mt-4 block text-base md:text-lg text-gray-500 dark:text-gray-400 ">
              Discover what others are saying about their experience working
              with me
            </span>
          </h1>
        </div>

        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden -pt-10">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
