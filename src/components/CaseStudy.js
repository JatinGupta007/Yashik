import Image from "next/image";
import { FaStethoscope, FaHospital, FaHeart } from "react-icons/fa";

const caseStudies = [
  {
    id: 1,
    label: "CASE STUDY 1",
    specialty: "CARDIOLOGIST, JAIPUR",
    title: "0 - 34 Appointments Per Month in Just 60 Days",
    description:
      "Used SEO, GMB, website optimization, and patient funnel system.",
    image: "/case_study_1.png", // Replace with your image path
  },
  {
    id: 2,
    label: "CASE STUDY 2",
    specialty: "IVF SPECIALIST, DELHI",
    title: "212% Increase in Patient Inquiries in 90 Days",
    description: "Powered by reputation growth engine and SEO accelerator.",
    image: "/case_study_2.png", // Replace with your image path
  },
  {
    id: 3,
    label: "CASE STUDY 3",
    specialty: "GASTRO, BANGALORE",
    title: "Ranked #1 for 9 High-Intent Treatment Keywords",
    description: "Achieved using local SEO and conversion-optimized website.",
    image: "/case_study_3.png", // Replace with your image path
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="bg-linear-to-b from-gray-50 to-white pb-12 md:pb-20 px-6 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-12 md:mb-16 flex flex-col items-center">
          <div
            data-aos="flip-up"
            className="bg-white/80 backdrop-blur-sm border border-gray-300 rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-12"
          >
            <span className="text-gray-600 font-semibold text-sm tracking-wider uppercase">
              Case Studies
            </span>
          </div>
          <h2
            data-aos="flip-up"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            <span className="text-gray-900">Real </span>
            <span className="text-blue-600">Doctors.</span>
            <span className="text-gray-900"> Real </span>
            <span className="text-blue-600">Results.</span>
            <span className="text-gray-900"> Real </span>
            <span className="text-blue-600">Growth.</span>
          </h2>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center md:gap-7">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-102"
              data-aos="zoom-out"
            >
              {/* Image Container */}
              <div className="relative h-64 md:h-72 overflow-hidden bg-gray-100 rounded-t-3xl">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Label */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs md:text-sm font-bold text-gray-900 tracking-wider">
                    {study.label}
                  </span>
                  <span className="text-xs md:text-sm text-gray-600 font-medium">
                    {study.specialty}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  {study.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {study.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
