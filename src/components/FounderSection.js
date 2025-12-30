import Image from "next/image";
import { FiGlobe, FiMessageCircle } from "react-icons/fi";
import { FaLightbulb } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

export default function FounderSection() {
  return (
    <section className="bg-linear-to-b from-gray-50 via-blue-50 to-white py-12 md:py-16 px-6 md:px-8 lg:px-16 overflow-hidden">
      <div className="mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="order-2">
            <div
              data-aos="fade-left"
              className="inline-block bg-white rounded-full px-6 py-3 shadow-sm border border-[#155DFC]/55 mb-5"
            >
              <span className="text-sm font-medium text-[#155DFC] uppercase tracking-wide">
                FOUNDER STORY
              </span>
            </div>

            <h1
              data-aos="fade-left"
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 leading-tight"
            >
              Meet Yashik Yadav
              <br />
              <p
                data-aos="fade-left"
                className="text-gray-600 text-2xl md:text-3xl lg:text-4xl font-semibold mb-7"
              >
                Clinic Growth Strategist
              </p>
            </h1>

            {/* Bio Section */}
            <div className="mb-12">
              <p
                data-aos="fade-right"
                className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8"
              >
                For over 5 years, I&apos;ve been helping doctors across India
                build a powerful online presence and grow consistently.
              </p>
              <p
                data-aos="fade-right"
                className="text-gray-900 text-lg md:text-xl font-semibold leading-relaxed mb-4"
              >
                My mission is simple:
              </p>
              <p
                data-aos="fade-right"
                className="text-gray-700 text-lg md:text-xl leading-relaxed"
              >
                Help doctors get the patients they deserve by giving their
                clinic the visibility and trust it deserves.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative order-1">
            <div data-aos="zoom-in" className="w-full bg-white rounded-3xl">
              <Image
                src="/yy.png"
                width={800}
                height={700}
                alt="Two professionals collaborating at a desk"
                className="object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap flex-col md:flex-row items-start md:items-center justify-around my-12 md:my-16 gap-6">
          <div data-aos="zoom-in" className="flex items-center space-x-4">
            <div className="shrink-0 w-11 h-11 md:w-12 md:h-11 bg-blue-600 rounded-xl flex items-center justify-center">
              <FaLightbulb className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900">
                150+ doctors supported
              </h3>
            </div>
          </div>

          <div data-aos="zoom-in" className="flex items-center space-x-4">
            <div className="shrink-0 w-11 h-11 md:w-12 md:h-11 bg-blue-600 rounded-xl flex items-center justify-center">
              <FiMessageCircle className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900">
                Background in healthcare marketing
              </h3>
            </div>
          </div>

          <div data-aos="zoom-in" className="flex items-center space-x-4">
            <div className="shrink-0 w-11 h-11 md:w-12 md:h-11 bg-blue-600 rounded-xl flex items-center justify-center">
              <FiGlobe className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900">
                Built multiple clinic growth systems
              </h3>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button
          data-aos="fade-up"
          className="bg-blue-600 text-white mx-auto font-semibold text-base md:text-lg px-6 gap-4 md:gap-6 py-3 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center space-x-3 shadow-lg"
        >
          <span>Meet the Founder</span>
          <div className="bg-white rounded-full p-2">
            <HiArrowRight className="text-blue-600 text-xl" />
          </div>
        </button>
      </div>
    </section>
  );
}
