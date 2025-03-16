"use client";

import { Button } from "./ui/button";

// import { Button } from "./ui/MovingBorders";

const DownloadCV = () => {
  return (
    <Button className="">
      <a
        href="/kabiru_shaibu_resume.pdf"
        download="kabiru_shaibu_resume.pdf"
        className="flex gap-1 "
        // className="flex items-center justify-center gap-1 px-2 py-[3px] mb-[2px] hover:mb-0 bg-gray-500 dark:bg-gray-800 text-gray-200 dark:text-white
        //  hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-5000 animate-pulse hover:animate-none rounded-none"
      >
        <span className="text-sm">Resume</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
      </a>
    </Button>
  );
};

export default DownloadCV;
