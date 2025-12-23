"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="absolute w-[96%] z-50 bg-white rounded-full shadow-xl shadow-blue-100 m-2 md:m-4 lg:m-7">
      <div className="mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center z-50">
            <Image
              src="/website_logo.png"
              alt="Logo"
              width={180}
              height={40}
              className="w-32 md:w-48 lg:w-56 h-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10 absolute left-1/2 transform -translate-x-1/2">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 transition-colors relative group font-medium"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              href="/about"
              className="text-gray-700 hover:text-gray-900 transition-colors relative group font-medium"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              href="/service-details"
              className="text-gray-700 hover:text-gray-900 transition-colors relative group font-medium"
            >
              Service
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              href="/contact"
              className="text-gray-700 hover:text-gray-900 transition-colors relative group font-medium"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Subscribe Button - Desktop */}
          <div className="hidden lg:block">
            <button className="bg-black text-white px-6 py-2.5 rounded-full hover:bg-blue-600 transition-all duration-300 font-medium transform hover:scale-105 shadow-lg hover:shadow-xl">
              Subscribe
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-gray-900 transition-colors z-50"
          >
            {isMobileMenuOpen ? (
              <HiX className="w-7 h-7" />
            ) : (
              <HiMenu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden h-130 fixed inset-0 bg-white z-40 transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="flex flex-col justify-center items-center space-y-8 px-6 py-16">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            Home
          </Link>

          <Link
            href="/service-details"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            Services
          </Link>

          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            About
          </Link>

          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            Contact
          </Link>

          {/* Subscribe Button - Mobile */}
          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-all duration-300 font-medium transform hover:scale-105 shadow-lg text-lg mt-4">
            Subscribe
          </button>
        </nav>
      </div>
    </header>
  );
}
