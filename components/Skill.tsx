import Image from "next/image";
import React from "react";

type Props = {
  level: string;
  link: string;
};

function Skill({ level, link }: Props) {
  return (
    <div className="group relative flex cursor-pointer justify-center items-center">
      <Image
        src={link}
        width="56"
        height="56"
        alt="skill"
        className="rounded-full border border-gray-500 object-cover w-12 h-12 lg:h-16 lg:w-16 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-white w-12 h-12 lg:h-16 lg:w-16 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-sm lg:text-xl font-bold text-gray-700 opacity-100">
            {level}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
