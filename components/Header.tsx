"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
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
  const isScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const storedTab = localStorage.getItem("activeTab");
    if (storedTab) {
      setActiveTab(storedTab);
      const targetElement = document.getElementById(storedTab);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (isScrolling.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const newActiveTab = entry.target.id;
          setActiveTab(newActiveTab);
          localStorage.setItem("activeTab", newActiveTab);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    localStorage.setItem("activeTab", tabId);
    isScrolling.current = true;

    const targetElement = document.getElementById(tabId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      isScrolling.current = false;
    }, 800);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-20 z-50">
      <div className="flex items-center justify-between h-full px-4">
        <nav className="w-full flex items-center justify-center pt-6">
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
          <div className="flex items-center justify-center gap-1 md:gap-2">
            {isSmallScreen && (
              <Link
                href="/"
                className="relative rounded-full px-3 md:px-8 py-1.5 text-sm font-medium text-gray-800 dark:text-gray-300 outline-sky-400 transition focus-visible:outline-2"
              >
                {/* We can keep the animation if you want */}
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
                className="relative rounded-full px-3 md:px-8 py-1.5 text-sm font-medium text-gray-800 dark:text-gray-300 outline-sky-400 transition focus-visible:outline-2"
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick(tab.id);
                }}
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
