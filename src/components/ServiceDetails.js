import { HiArrowRight } from "react-icons/hi";
import { FaStar } from "react-icons/fa";

import FaqSection from "./FaqSection";
import ProcessSection from "./GrowthSection";

export default function ServiceDetails({ data }) {
  const {
    title,
    desc,
    steps,
    faqs,
    getFeatures,
    promiseFeatures,
    problems,
    promiseTitle,
    problemTitle,
  } = data;
  return (
    <main className="overflow-hidden lg:overflow-visible">
      {/*Hero Section */}
      <section className="py-16 px-6 md:px-8 lg:px-16 pt-32 md:pt-50 overflow-hidden">
        <div className="mx-auto text-center max-w-5xl">
          <h1
            data-aos="fade-down"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 leading-tight"
          >
            {title.split(" ").slice(0, 1).join(" ")}{" "}
            <span className="text-blue-600">
              {title.split(" ").slice(1, 3).join(" ")}
            </span>{" "}
            {title.split(" ").slice(3, title.length).join(" ")}
          </h1>
          <p
            data-aos="fade-up"
            className="text-lg md:text-xl mb-16 opacity-95 max-w-3xl mx-auto text-gray-500"
          >
            {desc}
          </p>
          <div
            data-aos="fade-up"
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="flex items-center gap-3 px-6 py-2.5 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              Book Free Strategy Session
              <span className="w-9 h-9 rounded-full bg-white text-blue-600 flex items-center justify-center">
                <HiArrowRight />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/*Problem Section */}
      <section className="bg-linear-to-b from-white to-gray-50 py-12 md:py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div
            data-aos="zoom-out"
            className="flex justify-center mb-8 md:mb-12"
          >
            <div className="bg-white border border-gray-300 text-gray-600 rounded-full px-6 md:px-8 py-2 md:py-3 shadow-sm">
              <span className="text-xs md:text-sm uppercase">The Problem</span>
            </div>
          </div>

          {/* Main Title */}
          <div className="text-center mb-12 md:mb-16 px-4">
            <h2
              data-aos="zoom-in"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight capitalize"
            >
              {problemTitle.split(" ").slice(0, 1).join(" ")}{" "}
              <span className="text-blue-600">
                {problemTitle.split(" ").slice(1, 3).join(" ")}
              </span>{" "}
              {problemTitle.split(" ").slice(3, -1).join(" ")}{" "}
              <span className="text-blue-600">
                {problemTitle.split(" ").at(-1)}
              </span>
            </h2>
          </div>

          {/* Problems Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
            {problems.map((problem) => (
              <div
                key={problem.id}
                data-aos="zoom-in"
                className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg"
              >
                {/* Number */}
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                  {problem.id}
                </h3>

                {/* Content */}
                <div className="text-gray-900">
                  <p className="text-base md:text-lg leading-relaxed">
                    {problem.title}
                  </p>
                  <p className="text-base md:text-lg leading-relaxed flex items-center gap-1">
                    {problem.showStar && problem.subtitle.includes("5★") ? (
                      <>
                        5
                        <FaStar className="text-yellow-400 inline-block" />
                        {problem.subtitle.replace("5★", "").trim()}
                      </>
                    ) : (
                      problem.subtitle
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Text */}
          <div className="text-center px-4">
            <p
              data-aos="zoom-out"
              className="text-gray-900 text-lg md:text-xl lg:text-2xl font-medium max-w-4xl mx-auto leading-relaxed"
            >
              If your reputation doesn&apos;t reflect your skills, patients pick
              another doctor - even if you&apos;re better.
            </p>
          </div>
        </div>
      </section>

      {/*Promise Section */}
      <section className="bg-white py-12 md:py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div data-aos="fade-left" className="mb-8 md:mb-12">
            <div className="inline-block bg-white border border-gray-300 text-gray-600 rounded-full px-6 md:px-8 py-2 md:py-3 shadow-sm">
              <span className="text-xs md:text-sm uppercase">The Promise</span>
            </div>
          </div>

          {/* Main Title */}
          <div className="mb-12 md:mb-16">
            <h2
              data-aos="fade-left"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6"
            >
              {promiseTitle.split(" ").slice(0, 1).join(" ")}{" "}
              <span className="text-blue-600">
                {promiseTitle.split(" ").slice(1, 3).join(" ")}
              </span>{" "}
              {promiseTitle.split(" ").slice(3, -2).join(" ")}{" "}
              <span className="text-blue-600">
                {promiseTitle.split(" ").at(-2)}
              </span>{" "}
              {promiseTitle.split(" ").at(-1)}
            </h2>
            <p
              data-aos="fade-right"
              className="text-gray-600 text-base md:text-lg lg:text-xl"
            >
              We set up a clinic-wide reputation engine that:
            </p>
          </div>

          {/* Features Grid */}
          <div className="flex justify-center flex-wrap gap-6 md:gap-x-24 md:gap-y-16 place-items-center">
            {promiseFeatures.map((feature, index) => (
              <div
                key={feature.id}
                data-aos="flip-up"
                className={`bg-linear-to-br from-[#155DFC]/25 via-gray-50 to-white rounded-2xl flex flex-col justify-center items-center w-65 h-57 border-2 border-blue-300 hover:border-blue-500 transition-all duration-300 hover:shadow-xl transform hover:scale-105 ${
                  index >= 3 ? "lg:col-start-auto" : ""
                } ${index === 3 ? "sm:col-start-1 lg:col-start-2" : ""} ${
                  index === 4 ? "sm:col-start-2 lg:col-start-3" : ""
                }`}
              >
                {/* Icon */}
                <div className="flex justify-center mb-6 md:mb-8">
                  <div className="text-blue-600">{feature.icon}</div>
                </div>

                {/* Title */}
                <h3 className="text-center text-base md:text-lg font-bold text-gray-900 leading-tight w-[140]">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*Get Section */}
      <section className="bg-white py-12 md:py-20 px-4 md:px-8 lg:px-16 overflow-hidden flex flex-col justify-center">
        <div className="mx-auto">
          {/* Main Title */}
          <div data-aos="fade-dwon" className="mb-12 md:mb-16 text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-gray-900">What You </span>
              <span className="text-blue-600">Get</span>
            </h2>
          </div>

          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-8 lg:gap-30 mb-8 md:mb-12">
            {/* Left Column */}
            <div className="space-y-8 md:space-y-10">
              {getFeatures.slice(0, 3).map((feature) => (
                <div
                  key={feature.id}
                  className="flex items-start gap-4 md:gap-6"
                  data-aos="fade-down"
                >
                  {/* Icon */}
                  <div className="shrink-0 bg-blue-600 text-white rounded-2xl w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-8 md:space-y-10">
              {getFeatures.slice(3, getFeatures.length).map((feature) => (
                <div
                  key={feature.id}
                  className="flex items-start gap-4 md:gap-6"
                  data-aos="fade-down"
                >
                  {/* Icon */}
                  <div className="shrink-0 bg-blue-600 text-white rounded-2xl w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProcessSection steps={steps} />

      <FaqSection faqs={faqs} />

      {/* Trust Booster Section */}
      <section className="bg-linear-to-b from-[#E3ECFF] via-[#FFFFFF] to-[#E3ECFF] py-20 px-6 md:px-8 lg:px-16 mx-6 md:mx-8 lg:mx-12 my-10 rounded-4xl mb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto md:text-center">
          {/* Heading */}
          <h1
            data-aos="zoom-out"
            className="text-[28px] md:text-5xl lg:text-6xl font-extrabold leading-tight mb-10 md:mb-16"
          >
            You’re in <span className="text-blue-600">Good Hands</span>
          </h1>

          {/* Results */}
          <div className="flex flex-col justify-center gap-y-5 md:gap-y-10 items-center max-w-6xl mx-auto">
            {/* Left */}

            <div
              data-aos="zoom-in"
              className="flex items-center justify-center gap-5 text-left bg-linear-to-b from-[#155DFC21] via-[#F8FAFC00] to-[#155DFC21] border-[#155DFC8C] rounded-lg px-4 md:px-50 lg:px-60 py-3 border-1"
            >
              <p className="text-gray-800 text-lg md:text-xl font-semibold leading-snug">
                Proven 6-System Growth Model
              </p>
            </div>

            {/* Center */}

            <div
              data-aos="zoom-in"
              className="flex items-center justify-center gap-5 text-left bg-linear-to-b from-[#155DFC21] via-[#F8FAFC00] to-[#155DFC21] border-[#155DFC8C] rounded-lg px-2.5 md:px-31 lg:px-36 py-3 border-1"
            >
              <p className="text-gray-800 text-lg md:text-xl font-semibold leading-snug">
                4.9 Average Rating by Doctors
              </p>
            </div>

            {/* Right */}

            <div
              data-aos="zoom-in"
              className="flex items-center justify-center gap-5 text-left bg-linear-to-b from-[#155DFC21] via-[#F8FAFC00] to-[#155DFC21] border-[#155DFC8C] rounded-lg px-4 md:px-20 py-3 border-1"
            >
              <p className="text-gray-800 text-lg md:text-xl font-semibold leading-snug">
                150+ Clinics Supported
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
