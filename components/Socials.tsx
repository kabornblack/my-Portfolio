"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconType } from "react-icons";

function SocialIcon({
  icon: Icon,
  href,
  delay = 0,
}: {
  icon: IconType;
  href: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay }}
      className="relative z-50"
    >
      <Link
        href={href}
        target="_blank"
        className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-600 
                   transition-all duration-300 relative z-50"
      >
        <motion.div
          whileHover={{
            scale: 1.3,
            rotate: 360,
            transition: { duration: 0.3 },
          }}
        >
          <Icon className="w-8 h-8" />
        </motion.div>
      </Link>
    </motion.div>
  );
}

function Socials() {
  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/kabiru-shaibu-a81082164/",
      delay: 0,
    },
    {
      icon: FaGithub,
      href: "https://github.com/kabornblack",
      delay: 0.2,
    },
  ];

  return (
    <div className="flex gap-10 mr-3 z-50">
      {socialLinks.map((social, index) => (
        <SocialIcon
          key={index}
          icon={social.icon}
          href={social.href}
          delay={social.delay}
        />
      ))}
    </div>
  );
}

export default Socials;

// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   FaUserCircle,
//   FaGithub,
//   FaLinkedin,
//   FaBriefcase,
// } from "react-icons/fa";
// import { IconType } from "react-icons";

// function SocialIcon({
//   icon: Icon,
//   href,
//   label,
//   delay = 0,
// }: {
//   icon: IconType;
//   href: string;
//   label: string;
//   delay?: number;
// }) {
//   return (
//     <motion.div
//       initial={{ scale: 0.5, opacity: 0 }}
//       animate={{ scale: 1, opacity: 1 }}
//       transition={{ duration: 1, delay }}
//       className="relative group z-50"
//     >
//       <motion.div
//         className="absolute -top-20 -left-3 transform -translate-x-1/2
//                    bg-gray-800 text-white px-2 py-1 rounded-lg text-sm
//                    opacity-0 invisible group-hover:opacity-100 group-hover:visible
//                    transition-all duration-300 z-50"
//         initial={{ y: 10 }}
//         whileHover={{ y: 0 }}
//       >
//         {label}
//         <div
//           className="absolute -bottom-1 left-1/2 transform -translate-x-1/2
//                       border-t-8 border-l-8 border-r-8
//                       border-l-transparent border-r-transparent border-gray-800"
//         />
//       </motion.div>

//       <Link
//         href={href}
//         target={href.startsWith("http") ? "_blank" : undefined}
//         className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-600
//                    transition-all duration-300 relative z-50"
//       >
//         <motion.div
//           whileHover={{
//             scale: 1.3,
//             rotate: 360,
//             transition: { duration: 0.3 },
//           }}
//         >
//           <Icon className="w-10 h-10" />
//         </motion.div>
//       </Link>
//     </motion.div>
//   );
// }

// function Socials() {
//   const socialLinks = [
//     {
//       icon: FaLinkedin,
//       href: "https://www.linkedin.com/in/kabiru-shaibu-a81082164/",
//       label: "LinkedIn",
//       delay: 0,
//     },
//     {
//       icon: FaGithub,
//       href: "https://github.com/kabornblack",
//       label: "GitHub",
//       delay: 0.2,
//     },
//     {
//       icon: FaBriefcase,
//       href: "/portfolio",
//       label: "Portfolio",
//       delay: 0.4,
//     },
//     {
//       icon: FaUserCircle,
//       href: "/profile",
//       label: "Profile",
//       delay: 0.6,
//     },
//   ];

//   return (
//     <div className="flex gap-8 md:gap-16 z-50">
//       {socialLinks.map((social, index) => (
//         <SocialIcon
//           key={index}
//           icon={social.icon}
//           href={social.href}
//           label={social.label}
//           delay={social.delay}
//         />
//       ))}
//     </div>
//   );
// }

// export default Socials;
