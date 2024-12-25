"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Socials from "@/components/Socials";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false); // Track if the component has mounted

  useEffect(() => {
    setIsMounted(true); // Mark as mounted to enable client-side parallax calculations

    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX as number,
        y: event.clientY as number,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const calculateParallax = (depth: number | bigint) => {
    if (!isMounted) return { transform: "translate(0px, 0px)" };

    const x = (
      (mousePosition.x - window.innerWidth / 2) *
      Number(depth)
    ).toFixed(2);
    const y = (
      (mousePosition.y - window.innerHeight / 2) *
      Number(depth)
    ).toFixed(2);

    return {
      transform: `translate(${x}px, ${y}px)`,
    };
  };

  return (
    <div className="relative flex items-center justify-center h-screen w-full overflow-hidden">
      {/* Moon and Stars - Dark Mode */}
      <div className="absolute inset-0 dark:block hidden opacity-5">
        <Image
          src="/smallthunder1.webp"
          alt="moon"
          width={500}
          height={500}
          className="absolute z-10 top-0 left-0"
          style={{
            ...calculateParallax(0.03),
            mixBlendMode: "multiply",
            opacity: 0.9,
          }}
        />
        <div className="opacity-0 md:opacity-100">
          <Image
            src="/moon1.jpg"
            alt="moon"
            width={300}
            height={300}
            className="absolute z-0 top-0 right-0"
            style={{
              ...calculateParallax(0.002),
              mixBlendMode: "multiply",
              opacity: 0.9,
            }}
          />
        </div>

        {/* Stars */}
        <div
          className="absolute bg-gray-200 rounded-full z-20"
          style={{
            ...calculateParallax(0.009),
            width: "10px",
            height: "10px",
            top: "30%",
            left: "20%",
          }}
        ></div>
        <div
          className="absolute bg-white rounded-full z-0"
          style={{
            ...calculateParallax(0.03),
            width: "8px",
            height: "8px",
            top: "40%",
            left: "50%",
          }}
        ></div>
        <div
          className="absolute bg-white rounded-full z-0"
          style={{
            ...calculateParallax(0.005),
            width: "6px",
            height: "6px",
            top: "60%",
            left: "70%",
          }}
        ></div>
      </div>

      {/* Clouds - Light Mode */}
      <div className="absolute inset-0 dark:hidden block">
        {/* Left image */}
        <Image
          src="/cloud.jpg"
          alt="cloud"
          width={500}
          height={250}
          className="absolute z-10 bottom-90 left-20 opacity-40"
          style={calculateParallax(0.009)}
        />

        {/* Right image */}
        <Image
          src="/cloud.jpg"
          alt="cloud"
          width={500}
          height={250}
          className="absolute z-10 bottom-20 right-20 opacity-15 animate-breathing"
          style={calculateParallax(0.009)}
        />
        {/* Stars */}
        <div
          className="absolute bg-gray-200 rounded-full z-20"
          style={{
            ...calculateParallax(0.009),
            width: "10px",
            height: "10px",
            top: "30%",
            left: "20%",
          }}
        ></div>
        <div
          className="absolute bg-gray-300 rounded-full z-0"
          style={{
            ...calculateParallax(0.03),
            width: "8px",
            height: "8px",
            top: "40%",
            left: "50%",
          }}
        ></div>
        <div
          className="absolute bg-gray-300 rounded-full z-0"
          style={{
            ...calculateParallax(0.005),
            width: "6px",
            height: "6px",
            top: "60%",
            left: "70%",
          }}
        ></div>
      </div>

      <main>
        <Socials />
      </main>
    </div>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Socials from "@/components/Socials";

// export default function Home() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     "@ts-expect-error";
//     const handleMouseMove = (event: MouseEvent) => {
//       setMousePosition({
//         x: event.clientX,
//         y: event.clientY,
//       });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const calculateParallax = (depth: number): { transform: string } => ({
//     transform: `translate(${
//       (mousePosition.x - window.innerWidth / 2) * depth
//     }px, ${(mousePosition.y - window.innerHeight / 2) * depth}px)`,
//   });

//   return (
//     <div className="relative flex items-center justify-center h-screen w-full overflow-hidden">
//       {/* Moon and Stars - Dark Mode */}
//       <div className="absolute inset-0 dark:block hidden opacity-5">
//         <Image
//           src="/smallthunder1.webp"
//           alt="moon"
//           width={500}
//           height={500}
//           className="absolute z-10 top-0 left-0"
//           style={calculateParallax(0.03)}
//         />
//         <Image
//           src="/moon1.jpg"
//           alt="moon"
//           width={300}
//           height={300}
//           className="absolute z-10 top-10 right-10"
//           style={{
//             ...calculateParallax(0.002),
//             mixBlendMode: "multiply",
//             opacity: 0.9,
//           }}
//         />

//         {/* Stars */}
//         <div
//           className="absolute bg-white rounded-full z-20"
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
//         {/* //Left image */}
//         <Image
//           src="/cloud.jpg"
//           alt="cloud"
//           width={500}
//           height={250}
//           className="absolute z-10 bottom-90 left-20 opacity-40"
//           style={calculateParallax(0.009)}
//         />

//         {/* Right image */}
//         <Image
//           src="/cloud.jpg"
//           alt="cloud"
//           width={500}
//           height={250}
//           className="absolute z-10 bottom-20 right-20 opacity-15"
//           style={calculateParallax(0.009)}
//         />

//         {/* Stars */}
//         <div
//           className="absolute bg-gray-300 rounded-full z-20"
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
//         <Socials />
//       </main>
//     </div>
//   );
// }
