import { HiArrowRight } from "react-icons/hi2";

export default function FinalCTA() {
  return (
    <section className="relative bg-linear-to-b from-[#155DFC21] via-[#F8FAFC00] to-[#155DFC21] overflow-hidden flex items-center justify-center px-6 py-16">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-[150%] h-full bg-linear-to-br from-black via-gray-800 to-black transform -rotate-12 origin-top-left"></div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-linear-to-tl from-green-900/30 to-transparent blur-3xl"></div>
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-linear-to-br from-green-900/20 to-transparent blur-3xl"></div>
      </div>

      {/* Left Card - Transfer Graph */}
      <div className="absolute left-1 bottom-10 lg:bottom-20 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
        <div className="bg-linear-to-br from-blue-400 to-blue-500 rounded-3xl p-8 w-64 h-64 shadow-2xl">
          <div className="text-white mb-4">
            <div className="text-sm font-semibold mb-1">Transfer</div>
            <div className="text-xs">Month</div>
          </div>
          <svg viewBox="0 0 200 120" className="w-full h-32 mt-8">
            <polyline
              points="0,100 40,80 80,90 120,60 160,70 200,40"
              fill="none"
              stroke="rgba(0,0,0,0.3)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <polyline
              points="0,100 40,80 80,90 120,60 160,70 200,40"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="40" cy="80" r="4" fill="white" />
            <circle cx="120" cy="60" r="4" fill="white" />
          </svg>
          <div className="text-white font-bold text-lg mt-4">+8.24%</div>
        </div>
      </div>

      {/* Right Card - Expenses Donut Chart */}
      <div className="absolute right-1 top-20 lg:top-22 transform rotate-8 hover:rotate-0 transition-transform duration-300">
        <div className="bg-linear-to-br from-gray-900 to-black rounded-3xl p-6 w-56 shadow-2xl border border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-white text-3xl font-bold">82.5k</div>
              <div className="text-gray-400 text-sm">Expenses</div>
            </div>
            {/* Donut Chart */}
            <svg viewBox="0 0 100 100" className="w-20 h-20">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="rgba(59, 130, 246, 0.2)" // light blue
                strokeWidth="12"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="rgb(59, 130, 246)" // blue
                strokeWidth="12"
                strokeDasharray="175 251"
                strokeDashoffset="0"
                transform="rotate(-90 50 50)"
                strokeLinecap="round"
              />
              <text
                x="50"
                y="55"
                textAnchor="middle"
                className="text-xl font-bold fill-white"
              >
                78%
              </text>
            </svg>
          </div>
          <div className="text-gray-400 text-xs">
            <div className="mb-1">$21k Expenses</div>
            <div>than...</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-block border border-white rounded-full px-8 py-3 mb-12">
          <span className="text-sm font-medium text-white uppercase tracking-wide">
            Conversion Booster
          </span>
        </div>

        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          Ready to Grow Your Clinic?
          <br />
        </h1>

        <p className="text-gray-400 text-lg lg:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
          Book your free strategy session and get a personalized plan for your
          specialty & city.
        </p>

        {/* CTA Button */}
        <button className="bg-blue-500 text-white text-lg px-6 gap-3 py-3 rounded-full hover:bg-blue-300 transition-all transform hover:scale-105 flex items-center space-x-3 mx-auto shadow-lg">
          <span>Book Free strategy Session</span>
          <div className="bg-white rounded-full p-2">
            <HiArrowRight className="text-blue-600 text-lg" />
          </div>
        </button>
      </div>
    </section>
  );
}
