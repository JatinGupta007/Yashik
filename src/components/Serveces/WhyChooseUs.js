"use client";

import Image from "next/image";
import { FiCheck } from "react-icons/fi";

const reasons = [
  "Proven 6-system clinic growth model",
  "Healthcare-only agency",
  "AI-backed + human strategy",
  "Transparent reporting",
  "Strong founder involvement",
  "Real results, fast execution",
];

export default function WhyDoctorsChooseUs() {
  return (
    <section className="px-6 md:px-8 py-16">
      {/* Outer rounded container */}
      <div className="mx-auto rounded-[48px] bg-linear-to-b from-[#155DFC21] via-[#F8FAFC00] to-[#155DFC21] px-6 md:px-12 py-10 md:py-16 text-center">
        {/* Heading */}
        <h2
          data-aos="flip-up"
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-16"
        >
          WHY DOCTORS CHOOSE US
        </h2>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-x-8 lg:gap-x-20 gap-y-8 mb-16">
          {reasons.map((text, index) => (
            <div
              key={index}
              data-aos="flip-up"
              className="bg-white rounded-2xl border border-blue-300
                          shadow-[0_10px_25px_rgba(0,0,0,0.08)]
                          px-14 py-8 text-xl text-gray-900
                          flex items-center justify-center text-center
                          transition-transform duration-300 hover:-translate-y-1"
            >
              <p className="w-50">{text}</p>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div
          data-aos="fade-down"
          className="text-gray-600 text-base md:text-lg leading-relaxed"
        >
          <p>We don’t do random marketing.</p>
          <p>We build clinic growth systems that get results.</p>
        </div>
      </div>
    </section>
  );
}
