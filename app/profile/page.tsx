"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import HomeSocial from "@/components/HomeSocial";
import Skills from "@/components/Skills";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// export default function Home() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   return (
//     <div
//       ref={containerRef}
//       className="h-[300vh] relative  snap-y snap-mandatory overflow-y-scroll"
//     >
//       <HomeSocial />
//       {/* Fixed sections that stay in place */}
//       <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black snap-start">
//         <About />
//       </div>

//       {/* Overlaying sections that slide up */}
//       <motion.div
//         style={{
//           y: useTransform(scrollYProgress, [0, 0.33], ["100vh", "0vh"]),
//         }}
//         className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-gray-900 snap-start"
//       >
//         <Skills />
//       </motion.div>

//       <motion.div
//         style={{
//           y: useTransform(scrollYProgress, [0.33, 0.66], ["100vh", "0vh"]),
//         }}
//         className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black snap-start"
//       >
//         <Contact />
//       </motion.div>
//     </div>
//   );
// }

function page() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll">
      <HomeSocial />
      <section className="snap-start h-screen flex items-center justify-center bg-black">
        <About />
      </section>

      <section className="snap-start h-screen flex items-center justify-center bg-gray-900">
        <Skills />
      </section>

      <section className="snap-start h-screen flex items-center justify-center bg-black">
        <Contact />
      </section>
    </main>
  );
}

export default page;
