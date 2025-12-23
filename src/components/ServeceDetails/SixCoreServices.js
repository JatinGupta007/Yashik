import {
  HiTrendingUp,
  HiSparkles,
  HiDesktopComputer,
  HiLocationMarker,
  HiCreditCard,
  HiChartBar,
} from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi2";

const services = [
  {
    id: "01",
    icon: <HiTrendingUp className="text-2xl md:text-3xl" />,
    title: "360° Reputation Growth Engine",
    description: "Build Trust → Convert More Patients.",
  },
  {
    id: "02",
    icon: <HiSparkles className="text-2xl md:text-3xl" />,
    title: "AI-Powered SEO Accelerator",
    description: "Rank Higher → Get Found by Local Patients.",
  },
  {
    id: "03",
    icon: <HiDesktopComputer className="text-2xl md:text-3xl" />,
    title: "Website Revamp — Conversion Optimized",
    description: "Turn Visitors Into Booked Appointments.",
  },
  {
    id: "04",
    icon: <HiLocationMarker className="text-2xl md:text-3xl" />,
    title: "Local Visibility & GMB Dominance System",
    description: 'Own the "Doctor Near Me" Searches.',
  },
  {
    id: "05",
    icon: <HiCreditCard className="text-2xl md:text-3xl" />,
    title: "Automated Patient Capture & Follow-Up Funnel",
    description: "Capture Every Lead → Convert More Patients.",
  },
  {
    id: "06",
    icon: <HiChartBar className="text-2xl md:text-3xl" />,
    title: "Clinic Growth Intelligence Dashboard",
    description: "Track Every Important Metric in One Place.",
  },
];

export default function SixCoreServices() {
  return (
    <section className="bg-linear-to-b from-blue-50 to-white py-12 md:py-20 px-6 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-gray-900">THE </span>
            <span className="text-blue-600">6 CORE</span>
            <span className="text-gray-900"> SERVICES</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative group"
            >
              {/* Number Badge */}
              <div className="absolute top-6 right-6 md:top-8 md:right-8">
                <span className="text-gray-400 font-bold text-lg md:text-xl">
                  {service.id}
                </span>
              </div>

              {/* Icon */}
              <div className="bg-blue-600 text-white rounded-xl w-12 h-12 md:w-14 md:h-14 flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
                {service.description}
              </p>

              {/* Read More Button */}
              <button className="w-full bg-white border-2 border-gray-200 hover:border-blue-600 rounded-full py-3 md:py-3.5 px-6 flex items-center justify-between group/button transition-all duration-300 hover:shadow-md">
                <span className="text-gray-900 font-medium text-sm md:text-base">
                  Read More
                </span>
                <div className="bg-blue-600 text-white rounded-full p-2 group-hover/button:translate-x-1 transition-transform duration-300">
                  <HiArrowRight className="text-base md:text-lg" />
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
