import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function ResetDiagram() {
  const [mounted, setMounted] = useState(false);
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");

  const FIXED_PATHS = {
    curve1: "M 45 0 A 45 45 0 0 1 90 45",
    curve2: "M 90 45 A 45 45 0 0 1 45 90",
    curve3: "M 45 90 A 45 45 0 0 1 0 45",
    curve4: "M 0 45 A 45 45 0 0 1 45 0",
    curve5: "M 45 0 A 45 45 0 0 1 90 45",
  };

  const texts = ["DESIGN", "DEBUG", "SCALE", "DEPLOY", "COLLABORATE"];

  useEffect(() => {
    setMounted(true);

    // Define the type for setText (React.Dispatch<React.SetStateAction<string>>)
    const typeText = (
      setText: React.Dispatch<React.SetStateAction<string>>,
      text: string
    ) => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 100);
    };

    // Start typing effects with delays
    setTimeout(() => typeText(setText1, texts[0]), 0);
    setTimeout(() => typeText(setText2, texts[1]), 1000);
    setTimeout(() => typeText(setText3, texts[2]), 2000);
    setTimeout(() => typeText(setText4, texts[3]), 3000);

    return () => {
      // Cleanup if necessary
    };
  }, []);

  // Wait for client-side hydration to complete
  if (!mounted) {
    return null;
  }

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="relative max-w-xl w-full p-20 aspect-square">
        {/* Centered Image */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <div className="w-52 md:w-64 h-52 md:h-64 rounded-full overflow-hidden  animate-breathing">
            <Image
              src="/profile.jpg"
              alt="page image"
              width={128}
              height={128}
              className="w-full h-full object-cover rounded-full hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>
        </div>

        {/* Circular SVG with text */}
        <svg
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full"
          viewBox="-25 -25 140 140"
          fill="none"
        >
          <defs>
            <path id="curve1" d={FIXED_PATHS.curve1} />
            <path id="curve2" d={FIXED_PATHS.curve2} />
            <path id="curve3" d={FIXED_PATHS.curve3} />
            <path id="curve4" d={FIXED_PATHS.curve4} />
          </defs>

          {/* Animated text elements */}
          <g
            className="text-sm font-semibold animate-breath"
            fill="currentColor"
          >
            <text className="text-gray-600">
              <textPath href="#curve1" startOffset="25%" className="text-xs">
                {text1}
              </textPath>
            </text>
            <text className="text-gray-600">
              <textPath href="#curve2" startOffset="25%" className="text-xs">
                {text2}
              </textPath>
            </text>
            <text className="text-gray-600">
              <textPath href="#curve3" startOffset="25%" className="text-xs">
                {text3}
              </textPath>
            </text>
            <text className="text-gray-600">
              <textPath href="#curve4" startOffset="25%" className="text-xs">
                {text4}
              </textPath>
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}

// import Image from "next/image";
// import React, { useState, useEffect } from "react";

// export default function ResetDiagram() {
//   const [mounted, setMounted] = useState(false);
//   const [text1, setText1] = useState("");
//   const [text2, setText2] = useState("");
//   const [text3, setText3] = useState("");
//   const [text4, setText4] = useState("");
//   // const [text5, setText5] = useState("");

//   const FIXED_PATHS = {
//     curve1: "M 45 0 A 45 45 0 0 1 90 45",
//     curve2: "M 90 45 A 45 45 0 0 1 45 90",
//     curve3: "M 45 90 A 45 45 0 0 1 0 45",
//     curve4: "M 0 45 A 45 45 0 0 1 45 0",
//     curve5: "M 45 0 A 45 45 0 0 1 90 45",
//   };

//   const texts = ["DESIGN", "DEBUG", "SCALE", "DEPLOY", "COLLABORATE"];

//   useEffect(() => {
//     setMounted(true);

//     const typeText = (setText, text) => {
//       let currentIndex = 0;
//       const interval = setInterval(() => {
//         if (currentIndex <= text.length) {
//           setText(text.slice(0, currentIndex));
//           currentIndex++;
//         } else {
//           clearInterval(interval);
//         }
//       }, 100);
//     };

//     // Start typing effects with delays
//     setTimeout(() => typeText(setText1, texts[0], 0), 0);
//     setTimeout(() => typeText(setText2, texts[1], 0), 1000);
//     setTimeout(() => typeText(setText3, texts[2], 0), 2000);
//     setTimeout(() => typeText(setText4, texts[3], 0), 3000);
//     // setTimeout(() => typeText(setText5, texts[4], 0), 4000);

//     return () => {
//       // Cleanup
//     };
//   }, []);

//   // Wait for client-side hydration to complete
//   if (!mounted) {
//     return null;
//   }

//   return (
//     <div className="flex justify-center items-center h-screen w-screen">
//       <div className="relative max-w-xl w-full p-20 aspect-square">
//         {/* Centered Image */}
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
//           <div className="w-52 md:w-64 h-52 md:h-64 rounded-full overflow-hidden  animate-breathing">
//             <Image
//               src="/profile.jpg"
//               alt="page image"
//               width={128}
//               height={128}
//               className="w-full h-full object-cover rounded-full hover:scale-110 transition duration-300 ease-in-out"
//             />
//           </div>
//         </div>

//         {/* Circular SVG with text */}
//         <svg
//           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full"
//           viewBox="-25 -25 140 140"
//           fill="none"
//         >
//           <defs>
//             <path id="curve1" d={FIXED_PATHS.curve1} />
//             <path id="curve2" d={FIXED_PATHS.curve2} />
//             <path id="curve3" d={FIXED_PATHS.curve3} />
//             <path id="curve4" d={FIXED_PATHS.curve4} />
//             <path id="curve5" d={FIXED_PATHS.curve5} />
//           </defs>
//           {/* <circle
//             cx="45"
//             cy="45"
//             r="45"
//             stroke="gray"
//             strokeDasharray="4 4"
//             fill="none"
//             opacity="0.2"
//           /> */}

//           {/* Animated text elements */}

//           <g
//             className="text-sm font-semibold animate-breath"
//             fill="currentColor"
//           >
//             <text className="text-gray-600">
//               <textPath href="#curve1" startOffset="25%" className="text-xs">
//                 {text1}
//               </textPath>
//             </text>
//             <text className="text-gray-600">
//               <textPath href="#curve2" startOffset="25%" className="text-xs">
//                 {text2}
//               </textPath>
//             </text>
//             <text className="text-gray-600">
//               <textPath href="#curve3" startOffset="25%" className="text-xs">
//                 {text3}
//               </textPath>
//             </text>
//             <text className="text-gray-600">
//               <textPath href="#curve4" startOffset="25%" className="text-xs">
//                 {text4}
//               </textPath>
//             </text>
//             {/* We can remove curve5 since it's redundant and causing overlap */}
//           </g>
//         </svg>
//       </div>
//     </div>
//   );
// }
