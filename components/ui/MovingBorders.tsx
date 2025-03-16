"use client";
// import React, { useState, useRef, useEffect } from "react";
// import {
//   motion,
//   useAnimationFrame,
//   useMotionTemplate,
//   useMotionValue,
//   useTransform,
// } from "framer-motion";
import { cn } from "@/lib/utils";

export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  // borderClassName,
  // duration = 2000,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: React.ElementType;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: unknown;
}) {
  return (
    <Component
      className={cn(
        "bg-transparent relative text-xl p-[1px] overflow-hidden md:col-span-2 md:row-span-1",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0 rounde-[1.75rem]"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        {/* <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-16 w-16 opacity-[0.8] bg-[radial-gradient(#1e293b_40%,transparent_60%)] dark:bg-[radial-gradient(#cbd5e1_40%,transparent_60%)]",
              borderClassName
            )}
          />
        </MovingBorder> */}
      </div>

      <div
        className={cn(
          "relative bg-slate-900/[0.] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

// export const MovingBorder = ({
//   children,
//   duration = 2000,
//   rx = "30",
//   ry = "30",
// }: {
//   children: React.ReactNode;
//   duration?: number;
//   rx?: string;
//   ry?: string;
// }) => {
//   const pathRef = useRef<SVGPathElement>(null);
//   const progress = useMotionValue<number>(0);
//   const [pathLength, setPathLength] = useState(0);

//   useEffect(() => {
//     requestAnimationFrame(() => {
//       if (pathRef.current) {
//         setPathLength(pathRef.current.getTotalLength());
//       }
//     });
//   }, []);

//   useAnimationFrame((time) => {
//     if (pathLength > 0) {
//       const pxPerMillisecond = pathLength / duration;
//       progress.set((time * pxPerMillisecond) % pathLength);
//     }
//   });

//   const x = useTransform(
//     progress,
//     (val) => pathRef.current?.getPointAtLength(val || 0)?.x ?? 0
//   );

//   const y = useTransform(
//     progress,
//     (val) => pathRef.current?.getPointAtLength(val || 0)?.y ?? 0
//   );

// const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

// return (
//   <>
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       preserveAspectRatio="none"
//       className="absolute h-full w-full"
//       viewBox="0 0 100 100"
//     >
//       <path
//         ref={pathRef}
//         d={`M 0,50 L 100,50`}
//         fill="none"
//         stroke="transparent"
//         strokeWidth="1"
//       />
//     </svg>
//     {pathLength > 0 && (
//       <motion.div
//         style={{ position: "absolute", top: 0, left: 0, transform }}
//       >
//         {children}
//       </motion.div>
//     )}
//   </>
// );
// };
