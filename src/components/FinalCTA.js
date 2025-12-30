import Image from "next/image";
import { HiArrowRight } from "react-icons/hi2";

export default function FinalCTA() {
  return (
    <section className="relative bg-linear-to-b from-[#155DFC21] via-[#F8FAFC00] to-[#155DFC21] flex items-center justify-center px-6 py-16 m-6 md:mx-8 lg:mx-12 rounded-4xl overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-linear-to-tl from-green-900/30 to-transparent blur-3xl"></div>
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-linear-to-br from-green-900/20 to-transparent blur-3xl"></div>
      </div>

      {/* Left Card - Transfer Graph */}
      <div
        data-aos="fade-left"
        className="hidden md:block absolute left-1 bottom-1 lg:bottom-2 transform -rotate-6 hover:rotate-0 transition-transform duration-300"
      >
        <Image src="/cta3.png" width={220} height={200} alt="cta" />
      </div>

      {/* Right Card - Expenses Donut Chart */}
      <div
        data-aos="fade-right"
        className="hidden md:block absolute right-1 top-2 lg:top-2 transform rotate-8 hover:rotate-0 transition-transform duration-300"
      >
        <Image src="/cta2.png" width={220} height={200} alt="cta" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Badge */}
        <div
          data-aos="flip-up"
          className="inline-block border border-[#155DFC]/55 text-[#155DFC] shadow rounded-full px-8 py-3 mb-12"
        >
          <span className="text-sm font-medium uppercase tracking-wide">
            Conversion Booster
          </span>
        </div>

        <h1
          data-aos="flip-up"
          className="text-5xl lg:text-6xl font-bold mb-8 leading-tight"
        >
          Ready to Grow Your Clinic?
          <br />
        </h1>

        <p
          data-aos="flip-down"
          className="text-gray-400 text-lg lg:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Book your free strategy session and get a personalized plan for your
          specialty & city.
        </p>

        {/* CTA Button */}
        <button
          data-aos="flip-down"
          className="bg-blue-500 text-white text-[14px] md:text-lg px-6 gap-3 py-3 rounded-full hover:bg-blue-300 transition-all transform hover:scale-105 flex items-center space-x-3 mx-auto shadow-lg"
        >
          <span>Book Free strategy Session</span>
          <div className="bg-white rounded-full p-2">
            <HiArrowRight className="text-blue-600 text-lg" />
          </div>
        </button>
      </div>
    </section>
  );
}
