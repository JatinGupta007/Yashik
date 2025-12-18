"use client";

import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="relative h-160 flex items-center justify-center bg-black overflow-hidden">
      {/* Diagonal Background Layers */}
      <div className="absolute inset-0">
        <div className="absolute -left-1/4 top-0 w-2/3 h-full bg-linear-to-br from-gray-900 to-black rotate-12 opacity-60" />
        <div className="absolute right-0 top-0 w-2/3 h-full bg-linear-to-bl from-gray-900 to-black -rotate-12 opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 mt-10">
        {/* 404 Text */}
        <h1 className="flex items-center justify-center gap-4 text-[120px] md:text-[300px] font-semibold leading-none">
          <span className="text-white">4</span>
          <span className="text-[#9EF06A]">0</span>
          <span className="text-white">4</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-base md:text-lg">
          Looks like here is nothing
        </p>

        {/* Button */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="group flex items-center gap-4 bg-[#9EF06A] text-black font-semibold px-8 py-3 rounded-full hover:scale-105 transition-transform"
          >
            Go Back Home
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white group-hover:translate-x-1 transition">
              <FaLongArrowAltRight className="text-black" />      
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
