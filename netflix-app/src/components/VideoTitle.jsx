import React from "react";
import { FaPlay } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";

export const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[18%] px-12 md:px-24 absolute text-white bg-gradient-to-r from-black z-10">
      <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">{title}</h1>
      <p className="py-6 text-sm md:text-lg w-full md:w-1/3 text-gray-200 leading-relaxed max-h-40 overflow-hidden">
        {overview}
      </p>

      <div className="flex space-x-4 mt-4">
        <button className="bg-white text-black text-sm md:text-lg font-semibold py-2 px-6 md:px-10 rounded hover:bg-opacity-80 transition flex items-center gap-2 shadow">
          <FaPlay className="text-sm md:text-lg" />
          Play
        </button>
        <button className="bg-white/30 text-white text-sm md:text-lg font-semibold py-2 px-6 md:px-10 rounded hover:bg-white/40 transition flex items-center gap-2 shadow border border-white/20">
          <BsInfoCircle className="text-sm md:text-lg" />
          More Info
        </button>
      </div>
    </div>
  );
};
