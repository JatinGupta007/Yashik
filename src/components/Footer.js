import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook, FaLinkedin, FaSquareTwitter, FaSquareWhatsapp} from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 px-4 md:px-8 lg:px-16 py-12 overflow-hidden">
      <div className="mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-42 mb-12">
          {/* Left Column - Logo and Description */}
          <div className="md:col-span-1">
            <div data-aos="fade-right" className="flex items-center h-16 mb-4">
              <Image
                src="/website_logo.png"
                alt="Logo"
                width={250}
                height={50}
              />
            </div>
            <p
              data-aos="fade-right"
              className="text-gray-600 mb-6 leading-relaxed"
            >
              Products & services are important. They might sell dairy, meat,
              maybe even eco-friendly manure compost. Including a CSA program...
            </p>
            {/* Social Icons */}
            <div data-aos="fade-right" className="flex space-x-3">
              <Link
                href="#"
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <FaFacebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <FaSquareTwitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <FaSquareWhatsapp className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Resources Column */}
          <div data-aos="zoom-in">
            <h3 className="text-gray-900 font-semibold text-lg mb-6">
              RESOURCES
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Documentation Column */}
          <div>
            <h3
              data-aos="fade-left"
              className="text-gray-900 font-semibold text-lg mb-6"
            >
              Contact Us
            </h3>
            <ul data-aos="fade-left" className="space-y-3">
              <li className="flex gap-2 items-center">
                <FaPhoneAlt />
                <p>Call Us: +91 9887007362</p>
              </li>
              <li className="flex gap-2 items-center">
                <IoLogoWhatsapp size={20} />
                <p>Chat Now →</p>
              </li>
              <li className="flex gap-2 items-center">
                <IoIosMail size={22} />
                <p>Email: info@yashikyadav.co</p>
              </li>
              <li>
                <p className="font-semibold">Note:</p>
                <p>
                  Available: Monday - Saturday <br /> 10 AM - 7 PM
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-300 mb-6" />

        {/* Bottom Section */}
        <div
          className="flex flex-col md:flex-row justify-center items-center"
        >
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Link
              href="#"
              className="bg-[#155DFC] text-white px-6 py-2.5 rounded-full hover:bg-blue-800 transition-colors font-medium flex items-center space-x-2"
            >
              <span>Subscribe</span>
            </Link>
            <p className="text-gray-600 text-sm">
              2025 © All rights reserved by{" "}
              <span className="font-semibold text-gray-900">
                Yasik Yadav & Co.
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
