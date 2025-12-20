"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  return (
    <header className="absolute w-[96%] z-10 bg-white rounded-full shadow-md m-7">
      <div className="mx-auto px-4">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <div className="flex items-center">
            <Image src="/website_logo.png" alt="Logo" width={250} height={50} />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 transition-colors relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Service Dropdown */}
            <div
              className="relative group h-20 flex items-center"
              onMouseEnter={() => setIsServiceOpen(true)}
              onMouseLeave={() => setIsServiceOpen(false)}
            >
              <button className="text-gray-700 hover:text-gray-900 transition-colors flex items-center space-x-1 relative">
                <span>Service</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isServiceOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
              </button>

              {/* Dropdown Menu */}
              {isServiceOpen && (
                <div className="absolute left-0 top-full w-48 bg-black rounded-lg shadow-lg py-2 z-50">
                  <Link
                    href="/our-services"
                    className="block px-4 py-2 text-white hover:underline transition-all"
                  >
                    Our Services
                  </Link>
                  <Link
                    href="/service-details"
                    className="block px-4 py-2 text-white hover:underline transition-all"
                  >
                    Service Detail
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="text-gray-700 hover:text-gray-900 transition-colors relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              href="/contact"
              className="text-gray-700 hover:text-gray-900 transition-colors relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Subscribe Button */}
          <div>
            <button className="bg-black text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
