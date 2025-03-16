"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";
import DownloadCV from "./DownloadCV";

const baseTabs = [
  { id: "me", label: "Me", href: "#me" },
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "clients", label: "Clients", href: "#clients" },
  { id: "contact", label: "Contact", href: "#contact" },
];

const Header = () => {
  const [activeTab, setActiveTab] = useState("hero");
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      threshold: 0.6, // Adjust threshold to prevent overlapping detections
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (isScrolling.current) return;

      const visibleEntry = entries.find((entry) => entry.isIntersecting);

      if (visibleEntry) {
        const newActiveTab = visibleEntry.target.id;

        // Update active tab only if it's different from the current one
        if (newActiveTab !== activeTab) {
          setActiveTab(newActiveTab);
          localStorage.setItem("activeTab", newActiveTab);
        }
      }
    };

    const sections = Array.from(document.querySelectorAll("section"));
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [activeTab]);

  useEffect(() => {
    const handleBodyClick = (e: MouseEvent) => {
      if (isMenuOpen) {
        const menuElement = document.querySelector(".menu-container");
        if (menuElement && !menuElement.contains(e.target as Node)) {
          setIsMenuOpen(false);
        }
      }
    };

    document.addEventListener("click", handleBodyClick);
    return () => document.removeEventListener("click", handleBodyClick);
  }, [isMenuOpen]);

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
    <div className="fixed top-0 left-0 w-full h-20 z-50 bg-white/80 dark:bg-gray-900/80 md:bg-transparent dark:md:bg-transparent">
      <div className="flex items-center justify-between h-full px-10">
        {isSmallScreen ? (
          <>
            <Link
              href="/"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
            >
              <FaHome className="w-6 h-6" />
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>

            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="menu-container absolute top-20 left-0 w-full bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-700"
                >
                  {baseTabs.map((tab) => (
                    <Link
                      key={tab.id}
                      href={tab.href}
                      className={`block px-4 py-3 text-sm transition-colors duration-200 ${
                        activeTab === tab.id
                          ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleTabClick(tab.id);
                        setIsMenuOpen(false);
                      }}
                    >
                      {tab.label}
                    </Link>
                  ))}
                  <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700">
                    <DownloadCV />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        ) : (
          <nav className="w-full flex items-center justify-center pt-6">
            <div className="absolute left-8 top-10">
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              >
                <FaHome className="w-6 h-6" />
              </Link>
            </div>
            <div className="flex items-center justify-center gap-1 md:gap-2">
              {baseTabs.map((tab) => (
                <Link
                  key={tab.id}
                  href={tab.href}
                  className={`relative rounded-full px-3 md:px-5 py-1.5 text-[12px] md:text-sm font-medium ${
                    activeTab === tab.id
                      ? "text-gray-200 dark:text-white"
                      : "text-gray-700 dark:text-gray-300"
                  } transition focus-visible:outline-2 hover:border dark:hover:border`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabClick(tab.id);
                  }}
                >
                  {activeTab === tab.id && (
                    <motion.span
                      layoutId="bubble"
                      className="absolute inset-0 z-10 bg-gray-600 dark:bg-gray-700 mix-blend-lighten"
                      style={{ borderRadius: 9999 }}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  {tab.label}
                </Link>
              ))}
              <div className="hidden md:flex absolute right-10 top-10">
                <DownloadCV />
              </div>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Header;
