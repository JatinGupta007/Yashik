import Image from "next/image";

import FinalCTA from "@/components/FinalCTA";
import PromiseSection from "@/components/PromiseSection";
import FounderSection from "@/components/FounderSection";
import SixCoreServices from "@/components/Serveces/SixCoreServices";
import Testimonials from "@/components/Testimonials";

import { HiArrowRight } from "react-icons/hi";
import { HiOutlineBadgeCheck } from "react-icons/hi";

import {
  FiEye,
  FiZap,
  FiCompass,
  FiShield,
  FiCheckCircle,
  FiUsers,
} from "react-icons/fi";


const testimonials = [
  {
    quote: "Appointments became consistent within weeks.",
    name: "Dr. Aarav Mehta",
    role: "Orthopedic",
    image: "/img-video1.jpg",
  },
  {
    quote: "Patients now find us online effortlessly.",
    name: "Dr. Neha Kulkarni",
    role: "Gynecologist",
    image: "/img-client2.png",
  },
  {
    quote: "Our website finally started converting",
    name: "Dr. Rohit Malhotra ",
    role: "General Surgeon",
    image: "/img-client3.png",
  },
];


const promiseData = {
  subtitle: "OUR VALUES",
  title: "The Principles We Work By",

  leftPoints: [
    {
      icon: <FiEye className="text-white" size={28} />,
      desc: "Transparency: No hidden metrics. Real results only.",
    },
    {
      icon: <FiZap className="text-white" size={28} />,
      desc: "Speed: Execution over perfection.",
    },
    {
      icon: <FiCompass className="text-white" size={28} />,
      desc: "Clarity: Simple plans with zero jargon.",
    },
  ],

  image: "/promise.png",

  rightPoints: [
    {
      icon: <FiShield className="text-white" size={28} />,
      desc: "Ethics: Patient-first approach, always.",
    },
    {
      icon: <FiCheckCircle className="text-white" size={28} />,
      desc: "Accountability: Weekly tracking and clear updates.",
    },
    {
      icon: <FiUsers className="text-white" size={28} />,
      desc: "Partnership: We grow with your clinic, not above it.",
    },
  ],
};

export default function HeroSection() {
  return (
    <main className="overflow-hidden lg:overflow-visible">
      {/* Hero section */}
      <section className="relative">
        <div className="mx-auto px-6 pt-24 text-center bg-linear-to-b from-blue-50 via-blue-100 to-white">
          {/* Headline */}
          <h1
            data-aos="fade-down"
            className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 mt-24"
          >
            We Help Doctors Build <br className="hidden md:block" />
            <span className="text-[#155DFC]">
              {" "}
              Visibility, Authority & Predictable{" "}
            </span>
            <br className="hidden md:block" />
            Patient Flow
          </h1>

          {/* Subheadline */}
          <p
            data-aos="fade-up"
            className="max-w-3xl mx-auto text-lg text-gray-600 mb-10"
          >
            Founded by <strong>Yashik Yadav</strong>, we specialize in building
            long-term, consistent growth systems for private-practice doctors
            and clinics across India.
          </p>

          {/* CTA Buttons */}
          <div
            data-aos="fade-up"
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="flex items-center gap-3 px-5 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              Book Free Strategy Session
              <span className="w-9 h-9 rounded-full bg-white text-blue-600 flex items-center justify-center">
                <HiArrowRight />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/*Story Section */}
      <section className="py-16 px-6 md:px-8 lg:px-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-28">
          {/* ROW 1 */}
          <section className="bg-white pt-16">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24 ">
                {/* Left Column - Image */}
                <div className="order-2 lg:order-1">
                  <div
                    data-aos="zoom-in"
                    className="relative h-64 sm:h-80 md:h-96 lg:h-105 rounded-xl overflow-hidden shadow-xl"
                  >
                    <Image
                      src="/about-us.png" // Replace with your image path
                      alt="Team discussion"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Right Column - Content */}
                <div className="order-1 lg:order-2">
                  {/* Badge */}
                  <div
                    data-aos="fade-left"
                    className="inline-block mb-6 md:mb-8"
                  >
                    <div className="bg-white border border-[#155DFC]/55 text-blue-600 rounded-full px-7 py-2 shadow">
                      <span className="text-xs md:text-sm text-[#155DFC] font-medium uppercase">
                        ABOUT US
                      </span>
                    </div>
                  </div>

                  {/* Main Title */}
                  <h2
                    data-aos="fade-left"
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight"
                  >
                    Why We Started This Agency
                  </h2>

                  {/* Subtitle */}
                  <p
                    data-aos="fade-right"
                    className="text-gray-600 text-base md:text-lg mb-6 md:mb-8 leading-relaxed"
                  >
                    They struggle because the online world doesn&apos;t reflect
                    how good they truly are.
                  </p>

                  {/* Mission Statement */}
                  <div className="">
                    <p
                      data-aos="fade-right"
                      className="text-gray-900 text-base md:text-lg font-bold"
                    >
                      Yashik Yadav & Co. Was Created With A Single Mission:
                    </p>

                    <p
                      data-aos="fade-right"
                      className="text-gray-500 text-base md:text-lg leading-relaxed"
                    >
                      to help doctors get the patients they deserve by giving
                      their clinic the visibility, trust, and systems it
                      deserves. We don&apos;t run random marketing activities.
                      We build predictable clinic growth engines.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ROW 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div
              data-aos="zoom-out"
              className="relative h-64 sm:h-80 md:h-96 lg:h-116 rounded-xl overflow-hidden shadow-xl order-2"
            >
              <Image
                src="/about_us_2.png" // Replace with your image path
                alt="Team discussion"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Right Content */}
            <div className="order-1">
              <HiOutlineBadgeCheck
                data-aos="fade-right"
                className="text-blue-600 text-3xl mb-2"
              />

              <p data-aos="fade-right" className="mb-4 text-lg">
                But most clinics do not have the time, team, or systems to
                manage this.
              </p>

              <p
                data-aos="fade-right"
                className="font-semibold text-blue-700 mb-2"
              >
                That’s where we come in.
              </p>

              <h3
                data-aos="fade-right"
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              >
                Our Mission
              </h3>

              <p
                data-aos="fade-left"
                className="text-gray-600 text-lg leading-relaxed mb-2"
              >
                Yashik Yadav & Co. was created with a single mission:
              </p>

              <p
                data-aos="fade-left"
                className="text-xl font-semibold text-gray-900 mb-6"
              >
                to help doctors get the patients they deserve by giving their
                clinic the visibility, trust, and systems it deserves.
              </p>

              {/* Quote Card */}
              <div className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100">
                <p
                  data-aos="fade-left"
                  className="text-gray-700 text-lg leading-relaxed mb-4"
                >
                  “We don’t run random marketing activities. We build
                  predictable clinic growth engines.”
                </p>

                <div data-aos="fade-left" className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    Y
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Yashik Yadav</p>
                    <p className="text-sm text-gray-500">
                      Founder, Yashik Yadav & Co.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Founder Section */}
      <FounderSection />

      {/* Deferences section */}
      <SixCoreServices />

      {/*Testimonial Section */}
      <Testimonials testimonials={testimonials} />

      <PromiseSection data={promiseData} />

      <FinalCTA />
    </main>
  );
}
