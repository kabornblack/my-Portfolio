"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";

const baseTabs = [
  { id: "hero", label: "Hero", href: "#hero" },
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "contact", label: "Contact", href: "#contact" },
];

const Header = () => {
  const [activeTab, setActiveTab] = useState("hero");
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Set the active tab based on the current path
    const currentPath = pathname.slice(1) || "hero";
    setActiveTab(currentPath);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-20 bg-transparent z-50">
      <div className="flex items-center justify-between h-full px-4">
        {/* Navigation container */}
        <nav className="w-full flex items-center justify-center pt-6">
          {/* Home icon for larger screens */}
          {!isSmallScreen && (
            <div className="absolute left-8 top-10">
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              >
                <FaHome className="w-6 h-6" />
              </Link>
            </div>
          )}

          {/* Tabs with responsive sizing */}
          <div className="flex items-center justify-center gap-1 md:gap-2">
            {isSmallScreen && (
              <Link
                href="/"
                className={`relative rounded-full px-3 md:px-8 py-1.5 text-sm font-medium text-gray-800 dark:text-gray-300 outline-sky-400 transition focus-visible:outline-2`}
                style={{
                  WebkitTapHighlightColor: "transparent",
                }}
                onClick={() => setActiveTab("home")}
              >
                {activeTab === "home" && (
                  <motion.span
                    layoutId="bubble"
                    className="absolute inset-0 z-10 bg-gray-600 dark:bg-white mix-blend-difference"
                    style={{ borderRadius: 9999 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                Home
              </Link>
            )}
            {baseTabs.map((tab) => (
              <Link
                key={tab.id}
                href={tab.href}
                className={`relative rounded-full px-3 md:px-8 py-1.5 text-sm font-medium text-gray-800 dark:text-gray-300 outline-sky-400 transition focus-visible:outline-2`}
                style={{
                  WebkitTapHighlightColor: "transparent",
                }}
                onClick={() => setActiveTab(tab.id)}
              >
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="bubble"
                    className="absolute inset-0 z-10 bg-gray-600 dark:bg-white mix-blend-difference"
                    style={{ borderRadius: 9999 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {tab.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
