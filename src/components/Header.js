"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import { CgChevronUp, CgChevronDown } from "react-icons/cg";

const serviceDropDown = [
  "360° Reputation Growth Engine",
  "AI-Powered SEO Accelerator",
  "Website Revamp - Conversion Optimized",
  "Local Visibility & GMB Dominance System",
  "Automated Patient Capture & Follow-Up Funnel",
  "Clinic Growth Intelligence Dashboard",
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const path = usePathname();

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlHeader);

    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed w-[96%] z-50 bg-white rounded-full shadow-xl shadow-blue-100 m-2 md:m-4 lg:mx-7 lg:my-5 ${
        isVisible ? "translate-y-0" : "-translate-y-28"
      }`}
    >
      <div className="mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div
            data-aos="fade-right"
            className="hidden md:flex items-center z-50"
          >
            <Image
              src="/website_logo.png"
              alt="Logo"
              width={180}
              height={40}
              className="w-32 md:w-48 lg:w-56 h-auto"
            />
          </div>

          <div
            data-aos="fade-right"
            className="flex md:hidden items-center z-50"
          >
            <Image
              src="/justlogo.png"
              alt="Logo"
              width={180}
              height={40}
              className="w-10 h-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav
            data-aos="fade-up"
            className="hidden lg:flex items-center space-x-8 xl:space-x-10 absolute left-1/2 transform -translate-x-1/2"
          >
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 transition-colors relative group font-medium"
            >
              Home
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 ${
                  path === "/" ? "w-full" : "w-0"
                }`}
              ></span>
            </Link>

            <Link
              href="/about"
              className="text-gray-700 hover:text-gray-900 transition-colors relative group font-medium"
            >
              About
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 ${
                  path === "/about" ? "w-full" : "w-0"
                }`}
              ></span>
            </Link>

            {/* Service Dropdown */}
            <div
              className="relative group h-20 flex items-center"
              onMouseEnter={() => setIsServiceOpen(true)}
              onMouseLeave={() => setIsServiceOpen(false)}
            >
              <button className="text-gray-700 hover:text-gray-900 transition-colors flex items-center space-x-1 relative font-medium">
                <Link href="/services">Service</Link>
                <CgChevronUp
                  className={`w-4 h-4 transition-transform ${
                    isServiceOpen ? "rotate-180" : ""
                  }`}
                />
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 ${
                    path === "/services" ? "w-full" : "w-0"
                  }`}
                ></span>
              </button>

              {/* Dropdown Menu */}
              {isServiceOpen && (
                <div className="absolute -left-25 top-full w-83 text-sm bg-white rounded-lg shadow-lg z-50">
                  {serviceDropDown.map((service, idx) => (
                    <Link
                      key={idx}
                      href={`/services/${service}`}
                      className="block px-4 py-3.5 text-black hover:bg-blue-600 hover:text-white transition-all border-b border-gray-300 rounded-lg"
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="text-gray-700 hover:text-gray-900 transition-colors relative group font-medium"
            >
              Contact
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 ${
                  path === "/contact" ? "w-full" : "w-0"
                }`}
              ></span>
            </Link>
          </nav>

          {/* Subscribe Button - Desktop */}
          <div data-aos="fade-left" className="hidden lg:block">
            <button className="bg-black text-white px-6 py-2.5 rounded-full hover:bg-blue-600 transition-all duration-300 font-medium transform hover:scale-105 shadow-lg hover:shadow-xl">
              Book a Free Strategy Session
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            data-aos="fade-left"
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
        className={`lg:hidden max-h-screen fixed inset-0 bg-white z-40 transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="flex flex-col justify-center divide-y divide-solid divide-[#bebebe] bg-white py-24">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-2xl text-gray-700 hover:text-blue-600 transition-colors font-medium border-b border-[#bebebe] py-4 px-6 ${
              path === "/" ? "text-blue-600" : ""
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-2xl text-gray-700 hover:text-blue-600 transition-colors font-medium border-b border-[#bebebe] py-4 px-6 ${
              path === "/about" ? "text-blue-600" : ""
            }`}
          >
            About
          </Link>

          <Link
            href="/services"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`flex items-end gap-2 text-2xl text-gray-700 hover:text-blue-600 transition-colors font-medium border-b border-[#bebebe] py-4 px-6 `}
          >
            Services <CgChevronDown />
          </Link>

          <div>
            {serviceDropDown.map((service, idx) => (
              <Link
                key={idx}
                href={`/services/${service}`}
                className="block px-8 py-2 text-[15px] font-medium"
              >
                {service}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-2xl text-gray-700 hover:text-blue-600 transition-colors font-medium border-b border-[#bebebe] py-4 px-6 ${
              path === "/contact" ? "text-blue-600" : ""
            }`}
          >
            Contact
          </Link>

          {/* Subscribe Button - Mobile */}
          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-all duration-300 font-medium transform hover:scale-105 shadow-lg text-lg mt-10 mx-8">
            Book a Free Strategy session
          </button>
        </nav>
      </div>
    </header>
  );
}
