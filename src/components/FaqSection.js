"use client";
import { useState } from "react";
import Image from "next/image";
import { FiMinus, FiPlus } from "react-icons/fi";

export default function FaqSection({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-linear-to-b from-blue-100 to-white py-12 md:py-16 px-6 md:px-8 lg:px-16 overflow-hidden">
      <div className="mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column - FAQ */}
          <div>
            <div
              data-aos="fade-left"
              className="inline-block rounded-full px-6 py-3 shadow-sm border border-[#155DFC]/55 mb-8"
            >
              <span className="text-sm font-medium text-[#155DFC] uppercase tracking-wide">
                UNIVERSAL QUESTION
              </span>
            </div>

            <h1
              data-aos="fade-left"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 md:mb-12 leading-tight"
            >
              Get every single answer
            </h1>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-300"
                  data-aos="fade-right"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between px-6 md:px-9 py-4 md:py-5 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <div className="shrink-0">
                      {openIndex === index ? (
                        <FiMinus className="text-gray-900" size={24} />
                      ) : (
                        <FiPlus className="text-gray-900" size={24} />
                      )}
                    </div>
                  </button>

                  {/* Answer Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8">
                      <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-full">
            <div className="lg:sticky lg:top-16">
              <div className="rounded-3xl" data-aos="zoom-out">
                <Image
                  src="/faqs.png"
                  alt="Professional woman working on laptop"
                  width={800}
                  height={1000}
                  className="rounded-3xl object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
