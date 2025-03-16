"use client";

import { useEffect, useState, useRef } from "react";
import AnimatedName from "@/components/AnimatedName";
import { Boxes } from "@/components/ui/background-boxes";
// import { Boxes } from "../ui/background-boxes";
// import Image from "next/image";
// import { Boxes } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      // Get the duration of the video
      const duration = video.duration;
      // Check if the current time is past 50% of the duration
      if (video.currentTime >= duration / 2) {
        video.currentTime = 0; // Reset to the start
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  // const calculateParallax = (depth: number) => {
  //   if (!isMounted) return { transform: "translate(0px, 0px)" };

  //   const x = (
  //     (mousePosition.x - window.innerWidth / 2) *
  //     Number(depth)
  //   ).toFixed(2);
  //   const y = (
  //     (mousePosition.y - window.innerHeight / 2) *
  //     Number(depth)
  //   ).toFixed(2);

  //   return {
  //     transform: `translate(${x}px, ${y}px)`,
  //   };
  // };

  //  bg-gray-800 dark:bg-gray-600

  return (
    <div className="relative flex items-center justify-center h-screen w-full bg-[#292211] overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-slate-100 dark:bg-black z-0 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        <AnimatedName />
      </h1>

      <main>
        {/* <div className="absolute inset-0 flex items-center justify-center z-10 animate-pulse opacity-70">
          <AnimatedName />
        </div> */}
      </main>
    </div>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import AnimatedName from "@/components/AnimatedName";

// export default function Home() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);

//     const handleMouseMove = (event: MouseEvent) => {
//       setMousePosition({
//         x: event.clientX,
//         y: event.clientY,
//       });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const calculateParallax = (depth: number) => {
//     if (!isMounted) return { transform: "translate(0px, 0px)" };

//     const x = (
//       (mousePosition.x - window.innerWidth / 2) *
//       Number(depth)
//     ).toFixed(2);
//     const y = (
//       (mousePosition.y - window.innerHeight / 2) *
//       Number(depth)
//     ).toFixed(2);

//     return {
//       transform: `translate(${x}px, ${y}px)`,
//     };
//   };

//   return (
//     <div className="relative flex items-center justify-center h-screen w-full bg-gray-100 dark:bg-black overflow-hidden">
//       {/* Full-screen Video */}
//       <video
//         autoPlay
//         muted
//         loop
//         className="absolute inset-0 w-full h-full object-cover z-0 blur-2xl"
//       >
//         <source src="/rain-video.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Moon and Stars - Dark Mode */}
//       <div className="absolute inset-0 dark:block hidden opacity-5">
//         <Image
//           src="/smallthunder1.webp"
//           alt="moon"
//           width={500}
//           height={500}
//           className="absolute z-10 top-[35%] left-[35%] animate-pulse"
//           style={{
//             ...calculateParallax(0.03),
//             mixBlendMode: "multiply",
//             opacity: 0.9,
//           }}
//         />
//         <div className="opacity-0 md:opacity-100">
//           <Image
//             src="/moon1.jpg"
//             alt="moon"
//             width={300}
//             height={300}
//             className="absolute z-0 top-[20%] right-0"
//             style={{
//               ...calculateParallax(0.002),
//               mixBlendMode: "multiply",
//               opacity: 0.9,
//             }}
//           />
//         </div>

//         {/* Stars */}
//         <div
//           className="absolute bg-gray-200 rounded-full z-10"
//           style={{
//             ...calculateParallax(0.009),
//             width: "10px",
//             height: "10px",
//             top: "30%",
//             left: "20%",
//           }}
//         ></div>
//         <div
//           className="absolute bg-white rounded-full z-0"
//           style={{
//             ...calculateParallax(0.03),
//             width: "8px",
//             height: "8px",
//             top: "40%",
//             left: "50%",
//           }}
//         ></div>
//         <div
//           className="absolute bg-white rounded-full z-0"
//           style={{
//             ...calculateParallax(0.005),
//             width: "6px",
//             height: "6px",
//             top: "60%",
//             left: "70%",
//           }}
//         ></div>
//       </div>

//       {/* Clouds - Light Mode */}
//       <div className="absolute inset-0 dark:hidden block">
//         <div
//           className="absolute bg-gray-200 rounded-full z-20"
//           style={{
//             ...calculateParallax(0.009),
//             width: "10px",
//             height: "10px",
//             top: "30%",
//             left: "20%",
//           }}
//         ></div>
//         <div
//           className="absolute bg-gray-300 rounded-full z-0"
//           style={{
//             ...calculateParallax(0.03),
//             width: "8px",
//             height: "8px",
//             top: "40%",
//             left: "50%",
//           }}
//         ></div>
//         <div
//           className="absolute bg-gray-300 rounded-full z-0"
//           style={{
//             ...calculateParallax(0.005),
//             width: "6px",
//             height: "6px",
//             top: "60%",
//             left: "70%",
//           }}
//         ></div>
//       </div>

//       <main>
//         <div className="absolute inset-0 flex items-center justify-center z-10">
//           <AnimatedName />
//         </div>
//       </main>
//     </div>
//   );
// }
