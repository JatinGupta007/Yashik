import FinalCTA from "@/components/FinalCTA";

import PromiseSection from "@/components/PromiseSection";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import {
  HiOutlineHeart,
  HiOutlineSparkles,
  HiOutlineChartBar,
  HiOutlineCursorClick,
  HiOutlineRefresh,
  HiOutlineStar,
} from "react-icons/hi";

import {
  FiEye,
  FiZap,
  FiCompass,
  FiShield,
  FiCheckCircle,
  FiUsers,
} from "react-icons/fi";
import ProcessSection from "@/components/GrowthSection";
import FounderSection from "@/components/FounderSection";
import SixCoreServices from "@/components/ServeceDetails/SixCoreServices";


const promiseData = {
  subtitle: "OUR VALUES",
  title: "The Principles We Work By",

  leftPoints: [
    {
      icon: <FiEye className="text-blue-600" size={28} />,
      desc: "Transparency: No hidden metrics. Real results only.",
    },
    {
      icon: <FiZap className="text-blue-600" size={28} />,
      desc: "Speed: Execution over perfection.",
    },
    {
      icon: <FiCompass className="text-blue-600" size={28} />,
      desc: "Clarity: Simple plans with zero jargon.",
    },
  ],

  image: "/home4.png",

  rightPoints: [
    {
      icon: <FiShield className="text-blue-600" size={28} />,
      desc: "Ethics: Patient-first approach, always.",
    },
    {
      icon: <FiCheckCircle className="text-blue-600" size={28} />,
      desc: "Accountability: Weekly tracking and clear updates.",
    },
    {
      icon: <FiUsers className="text-blue-600" size={28} />,
      desc: "Partnership: We grow with your clinic, not above it.",
    },
  ],
};


const items = [
  {
    title: "Healthcare-Only Focus",
    text: "We deeply understand patients, symptoms, treatment journeys, and medical search intent.",
    icon: <HiOutlineHeart />,
  },
  {
    title: "AI-Powered SEO + Human Strategy",
    text: "The perfect blend of automation, data, and expert-led growth decisions.",
    icon: <HiOutlineSparkles />,
  },
  {
    title: "Weekly Reporting with Real Numbers",
    text: "Clear visibility into calls, inquiries, appointments, and keyword rankings.",
    icon: <HiOutlineChartBar />,
  },
  {
    title: "Conversion-First Websites",
    text: "Websites designed to educate patients and turn visits into booked appointments.",
    icon: <HiOutlineCursorClick />,
  },
  {
    title: "Automation for Follow-Ups",
    text: "No missed leads with smart follow-ups across calls, WhatsApp, and CRM.",
    icon: <HiOutlineRefresh />,
  },
  {
    title: "Reputation-First Approach",
    text: "Trust and credibility systems that directly drive patient bookings.",
    icon: <HiOutlineStar />,
  },
];

export default function HeroSection() {
  return (
    <main>
      {/* Hero section */}
      <section className="relative">
        <div className="mx-auto px-6 pt-24 text-center bg-linear-to-b from-blue-50 via-blue-100 to-white">
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 mt-24">
            We Help Doctors Build <br className="hidden md:block" />
            <span className="text-[#155DFC]">
              {" "}
              Visibility, Authority & Predictable{" "}
            </span>
            <br className="hidden md:block" />
            Patient Flow
          </h1>

          {/* Subheadline */}
          <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-10">
            Founded by <strong>Yashik Yadav</strong>, we specialize in building
            long-term, consistent growth systems for private-practice doctors
            and clinics across India.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
      <section className="py-16 px-6 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto space-y-28">
          {/* ROW 1 */}
          <section className="bg-white pt-16">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24 ">
                {/* Left Column - Image */}
                <div className="order-2 lg:order-1">
                  <div className="relative h-64 sm:h-80 md:h-96 lg:h-105 rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src="/img-his.png" // Replace with your image path
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
                  <div className="inline-block mb-6 md:mb-8">
                    <div className="bg-white border-2 border-blue-600 text-blue-600 rounded-full px-6 py-2 shadow-sm">
                      <span className="text-xs md:text-sm font-bold tracking-wider uppercase">
                        About Us
                      </span>
                    </div>
                  </div>

                  {/* Main Title */}
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                    Why We Started This Agency
                  </h2>

                  {/* Subtitle */}
                  <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                    They struggle because the online world doesn&apos;t reflect
                    how good they truly are.
                  </p>

                  {/* Mission Statement */}
                  <div className="">
                    <p className="text-gray-900 text-base md:text-lg font-bold">
                      Yashik Yadav & Co. Was Created With A Single Mission:
                    </p>

                    <p className="text-gray-500 text-base md:text-lg leading-relaxed">
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
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-125 rounded-xl overflow-hidden shadow-xl order-2">
              <Image
                src="/img2.png" // Replace with your image path
                alt="Team discussion"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Right Content */}
            <div className="order-1">
              <HiOutlineBadgeCheck className="text-blue-600 text-3xl mb-4" />

              <p className="mb-2">
                But most clinics do not have the time, team, or systems to
                manage this.
              </p>

              <p className="font-semibold text-blue-700 mb-6">
                That’s where we come in.
              </p>

              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Yashik Yadav & Co. was created with a single mission:
              </p>

              <p className="text-xl font-semibold text-gray-900 mb-8">
                to help doctors get the patients they deserve by giving their
                clinic the visibility, trust, and systems it deserves.
              </p>

              {/* Quote Card */}
              <div className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  “We don’t run random marketing activities. We build
                  predictable clinic growth engines.”
                </p>

                <div className="flex items-center gap-3">
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

      {/*social proof section */}
      <section className="py-16 bg-white">
        <div className="mx-auto px-6 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start relative">
            {/* LEFT CONTENT */}
            <div className="lg:sticky top-1">
              {/* Badge */}
              <span className="inline-block mb-10 px-4 py-1 rounded-full border text-sm font-medium">
                SOCIAL PROOFS
              </span>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">
                Results That Speak <br /> for Themselves.
              </h2>

              {/* Description */}
              <ul className="mb-12 space-y-5">
                <li className="text-lg text-gray-600 ">
                  “30+ monthly appointments consistently.” - Dr. R, Cardiologist
                </li>
                <li className="text-lg text-gray-600 ">
                  “212% increase in IVF inquiries.” - Dr. S, IVF Specialist
                </li>
                <li className="text-lg text-gray-600 ">
                  “Ranking #1 for 9 procedures.” - Dr. A, Gastroenterologist
                </li>
              </ul>

              {/* CTA */}
              <button className="inline-flex text-white items-center gap-5 px-5 text-lg py-3 rounded-full border font-medium bg-blue-600 transition">
                View Case Studies
                <span className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center">
                  <HiArrowRight />
                </span>
              </button>
            </div>

            {/* RIGHT GRID */}
            <div className="grid grid-cols-2 gap-8">
              {["/about5.png", "/about5.png", "/about5.png", "/about5.png"].map(
                (src, i) => (
                  <div
                    key={i}
                    className="relative rounded-2xl overflow-hidden aspect-3/4"
                  >
                    <Image
                      src={src}
                      alt={`Advisor ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <PromiseSection data={promiseData} />

      <FinalCTA />
    </main>
  );
}
