"use client";

import { FiCheck } from "react-icons/fi";
import Image from "next/image";

export default function SystemGrowthSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto md:text-center">
        {/* Heading */}
        <h1
          data-aos="zoom-in"
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-20"
        >
          Your Growth <span className="text-blue-600">Doesn&apos;t</span> Come
          From <span className="text-blue-600">One Service</span> It Comes From
          a <span className="text-blue-600">System.</span>
        </h1>

        {/* Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-20 md:place-items-center mx-auto text-left mb-20">
          {/* Left Column */}
          <div className="space-y-8">
            <Point text="Your reputation builds trust" />
            <Point text="Your website converts traffic" />
            <Point text="Your funnels capture & convert leads" />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <Point text="Your SEO provides visibility" />
            <Point text="Your GMB wins local intent" />
            <Point text="Your dashboard gives clarity" />
          </div>
        </div>

        {/* Footer Line */}
        <p data-aos="fade-up" className="text-gray-800 text-base md:text-lg">
          All work together to deliver consistent monthly appointments.
        </p>
      </div>
    </section>
  );
}

/* Reusable Point */
function Point({ text }) {
  return (
    <div data-aos="fade-right" className="flex items-start gap-4">
      <span className="flex items-center justify-center w-6 h-6 rounded-full">
        <FiCheck className="text-blue-600 text-xl" />
      </span>
      <p className="text-gray-700 text-base md:text-lg">
        {highlightWords(text)}
      </p>
    </div>
  );
}

/* Bold specific keywords like design */
function highlightWords(text) {
  const boldWords = [
    "reputation",
    "website",
    "funnels",
    "SEO",
    "GMB",
    "dashboard",
  ];

  return text.split(" ").map((word, i) => (
    <span
      key={i}
      className={
        boldWords.includes(word.replace(/[^a-zA-Z]/g, ""))
          ? "font-semibold text-gray-900"
          : ""
      }
    >
      {word}{" "}
    </span>
  ));
}
