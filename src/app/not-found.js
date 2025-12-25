"use client";

import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-linear-to-b from-blue-100 to-blue-50 overflow-hidden">
    

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-8 lg:px-16">
        {/* 404 Text */}
        <h1 className="flex items-center justify-center gap-4 text-[120px] md:text-[300px] font-semibold leading-none">
          <span className="">4</span>
          <span className="text-blue-600">0</span>
          <span className="">4</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-base md:text-lg">
          Looks like here is nothing
        </p>

        {/* Button */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="group flex items-center justify-between gap-7 bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-full hover:scale-105 transition-transform"
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
