"use client";

export default function GrowthResultsSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto md:text-center">
        {/* Heading */}
        <h1
          data-aos="zoom-out"
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-10 md:mb-20"
        >
          What <span className="text-blue-600">Doctors</span> Are Achieving with
          <br className="hidden lg:block" />
          Our <span className="text-blue-600">Growth System</span>
        </h1>

        {/* Results */}
        <div className="flex flex-col justify-center gap-y-5 md:gap-y-10 items-center max-w-6xl mx-auto">
          {/* Left */}

          <div
            data-aos="zoom-in"
            className="flex items-center justify-center gap-5 text-left bg-linear-to-b from-[#155DFC21] via-[#F8FAFC00] to-[#155DFC21] border-[#155DFC8C] rounded-lg px-5 md:px-40 lg:px-70 py-3 border-1"
          >
            <p className="text-gray-800 text-lg md:text-xl font-semibold leading-snug">
              0 - 34 appointments/mo in 60 days
            </p>
          </div>

          {/* Center */}

          <div
            data-aos="zoom-in"
            className="flex items-center justify-center gap-5 text-left bg-linear-to-b from-[#155DFC21] via-[#F8FAFC00] to-[#155DFC21] border-[#155DFC8C] rounded-lg px-6 md:px-32 lg:px-48 py-3 border-1"
          >
            <p className="text-gray-800 text-lg md:text-xl font-semibold leading-snug">
              Top 3 GMB ranking in 45 days
            </p>
          </div>

          {/* Right */}

          <div
            data-aos="zoom-in"
            className="flex items-center justify-center gap-5 text-left bg-linear-to-b from-[#155DFC21] via-[#F8FAFC00] to-[#155DFC21] border-[#155DFC8C] rounded-lg px-1 md:px-14 lg:px-22 py-3 border-1"
          >
            <p className="text-gray-800 text-lg md:text-xl font-semibold leading-snug">
              212% inquiry growth in 90 days
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

