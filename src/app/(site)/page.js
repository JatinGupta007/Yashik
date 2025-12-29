"use client";
import Image from "next/image";

import {
  HiChartBar,
  HiLocationMarker,
  HiDocumentText,
  HiPhone,
  HiChartPie,
  HiShieldCheck,
  HiArrowRight,
} from "react-icons/hi";
import { FaLongArrowAltRight } from "react-icons/fa";
import { HiOutlineChartBar } from "react-icons/hi2";

import {
  FiCheck,
  FiSearch,
  FiStar,
  FiFileText,
  FiTrendingUp,
} from "react-icons/fi";
import {
  MdOutlineAutoAwesome,
  MdOutlineWeb,
  MdOutlineLocationOn,
  MdOutlineEventRepeat,
  MdAutorenew,
} from "react-icons/md";

import FinalCTA from "@/components/FinalCTA";
import PromiseSection from "@/components/PromiseSection";
import ProcessSection from "@/components/GrowthSection";
import CaseStudiesSection from "@/components/CaseStudy";
import FounderSection from "@/components/FounderSection";
import FaqSection from "@/components/FaqSection";
import Testimonials from "@/components/Testimonials";

const features = [
  {
    icon: <HiChartBar className="text-2xl" />,
    title: "Dedicated",
    description: "healthcare growth strategist",
  },
  {
    icon: <HiLocationMarker className="text-2xl" />,
    title: "Local SEO + Google Maps",
    description: "optimization",
  },
  {
    icon: <HiDocumentText className="text-2xl" />,
    title: "High-converting",
    description: "landing pages",
  },
  {
    icon: <HiPhone className="text-2xl" />,
    title: "Lead tracking",
    description: "& call analytics",
  },
  {
    icon: <HiChartPie className="text-2xl" />,
    title: "Monthly",
    description: "performance reports",
  },
  {
    icon: <HiShieldCheck className="text-2xl" />,
    title: "Compliance-safe",
    description: "ad creatives",
  },
];

const promiseData = {
  subtitle: "THE PROMISE",
  title:
    "A growth system that increases trust, visibility, conversions, and patient bookings - consistently.",
  leftPoints: [
    {
      icon: <FiSearch className="text-white" size={28} />,
      desc: " Top placement for “doctor near me” searches",
    },
    {
      icon: <MdAutorenew className="text-white" size={28} />,
      desc: "Automated patient capture and follow-up",
    },
    {
      icon: <FiTrendingUp className="text-white" size={28} />,
      desc: "Full visibility of every growth metric",
    },
  ],
  image: "/promise.png",
  rightPoints: [
    {
      icon: <FiStar className="text-white" size={28} />,
      desc: " Strong online authority through 5★ reputation",
    },
    {
      icon: <HiOutlineChartBar className="text-white" size={28} />,
      desc: "Higher rankings for specialty, symptoms & treatments",
    },
    {
      icon: <FiFileText className="text-white" size={28} />,
      desc: "Website optimized for appointments & inquiries",
    },
  ],
};

const testimonials = [
  {
    quote:
      "Within the first month, we started receiving consistent appointment inquiries. The system helped us improve our online presence and patient trust without extra manual work.",
    name: "Dr Nitin Negi",
    role: "Urologist",
    image: "/img-video1.jpg",
  },
  {
    quote:
      "Our Google reviews increased steadily, and patients now mention finding us online more often. The automation saved our staff hours every week.",
    name: "Dr Vibha Chaturvedi",
    role: "Gynecologist",
    image: "/img-client2.png",
  },
  {
    quote:
      "Earlier, our website was just informative. Now it actually converts visitors into booked appointments. We finally have clarity on what is working.",
    name: "Dr Amit Bengani Jain",
    role: "General Sergeon",
    image: "/img-client3.png",
  },
  {
    quote:
      "The follow-up system ensured no patient inquiry was missed. Our clinic now runs more smoothly with predictable appointment flow.",
    name: "Dr Urmila Sharma",
    role: "Infertility Specialist",
    image: "/img-client1.png",
  },
];

const faqs = [
  {
    question: "What problem does your SaaS solve?",
    answer:
      "Automation & workflow features include a drag & drop builder, automated task assignments, conditional with good triggers, and api integrations.",
  },
  {
    question: "What pricing model will you use?",
    answer:
      "We offer flexible pricing tiers including monthly and annual subscriptions, with custom enterprise plans available for larger organizations.",
  },
  {
    question: "How is your SaaS different?",
    answer:
      "Our platform combines powerful automation with intuitive design, making complex workflows accessible to teams of all sizes without technical expertise.",
  },
  {
    question: "What design principles will you follow?",
    answer:
      "We follow modern UX principles focusing on simplicity, accessibility, and user-centered design to ensure the best possible experience.",
  },
];

const steps = [
  {
    number: "Step 1",
    title: "Audit",
    description:
      "We analyze your online presence, competition, reputation, website, funnels, and Google visibility.",
    features: ["Online Analysis", "Competition Review", "SEO Audit"],
  },
  {
    number: "Step 2",
    title: "Strategy",
    description:
      "We create a custom growth plan based on your specialty, locality, and patient intent.",
    features: ["Custom Plan", "Target Mapping", "Growth Roadmap"],
  },
  {
    number: "Step 3",
    title: "Implementation",
    description:
      "We set up all 6 systems and fully manage your clinic's online growth foundation.",
    features: ["System Setup", "Full Management", "Foundation Build"],
  },
  {
    number: "Step 4",
    title: "Optimization",
    description:
      "Weekly data analysis, reporting, and adjustments to maintain consistent growth.",
    features: ["Data Analysis", "Weekly Reports", "Adjustments"],
  },
];

export default function LandingPage() {
  
  return (
    <main className="overflow-hidden lg:overflow-visible">
      {/* Hero Section */}
      <section className="flex flex-col items-center mx-auto px-6 md:px-8 lg:px-16 py-12 md:py-20 bg-linear-to-b from-gray-50 via-blue-50 to-white relative overflow-hidden">
        <div className="text-center mx-auto mt-24">
          <p
            data-aos="fade-down"
            className="text-gray-600 text-sm md:text-base font-medium mb-6 tracking-wide uppercase"
          >
            Launch your AI website within a days
          </p>

          <div className="max-w-4xl px-6">
            <h1
              data-aos="fade-down"
              className="relative z-10 text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 md:mb-8"
            >
              Get 30-60{" "}
              <span className="text-blue-600">Consistent Monthly</span>{" "}
              Appointments With a Complete{" "}
              <span className="text-blue-600">Clinic Growth</span> System
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 text-base md:text-xl px-4 relative z-10"
            >
              We help private-practice doctors build trust, increase visibility,
              convert more website visitors, and automate patient follow-ups
              using our 6-system growth framework.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="flex flex-col md:flex-row flex-wrap justify-around items-center gap-4 md:gap-6 mb-8 md:mb-12 text-sm md:text-base mt-8 md:mt-16 w-full px-4"
        >
          <div className="flex items-center space-x-3">
            <span className="border p-2.5 rounded-full flex items-center border-gray-300 bg-linear-to-r from-blue-50 to-gray-100">
              <FiCheck className="text-blue-600 shrink-0" size={15} />
            </span>
            <span className="text-gray-700 text-base md:text-lg">
              4.9 Rating Across Doctors
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="border p-2.5 rounded-full flex items-center border-gray-300 bg-linear-to-r from-blue-50 to-gray-100">
              <FiCheck className="text-blue-600 shrink-0" size={15} />
            </span>
            <span className="text-gray-700 text-base md:text-lg">
              150+ Clinics Supported
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="border p-2.5 rounded-full flex items-center border-gray-300 bg-linear-to-r from-blue-50 to-gray-100">
              <FiCheck className="text-blue-600 shrink-0" size={15} />
            </span>
            <span className="text-gray-700 text-base md:text-lg">
              Proven 6-System Clinic Growth
            </span>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8 px-4 w-full max-w-2xl"
        >
          <button className="bg-blue-600 text-white px-4 py-2 md:px-6 md:py-2.5 text-sm md:text-[16px] rounded-full font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-between space-x-4 shadow-lg w-full sm:w-auto">
            <span>Book Your Free Strategy Session</span>
            <span className="p-2 bg-blue-500 rounded-full">
              <FaLongArrowAltRight size={20} />
            </span>
          </button>
          <button className="bg-gray-900 text-white px-4 py-2 md:px-6 text-sm md:py-2.5 md:text-[16px] rounded-full font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 flex justify-between items-center space-x-4 shadow-lg w-full sm:w-auto">
            <span>See Real Results</span>
            <span className="p-2 bg-blue-500 rounded-full">
              <FaLongArrowAltRight size={20} />
            </span>
          </button>
        </div>

        {/* Sales Performance Card - Hidden on mobile */}
        <div className="hidden md:block absolute left-0 md:-left-1 top-50 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
          <Image
            src="/hero-left.png"
            alt="Sales Performance"
            width={340}
            height={120}
            className="mb-4"
            data-aos="fade-right"
          />
        </div>

        {/* Team Members Card - Hidden on mobile */}
        <div className="hidden md:block absolute right-0 md:-right-1 top-50 transform rotate-2 hover:rotate-0 transition-transform duration-300">
          <Image
            src="/hero1.png"
            alt="Team Members"
            width={300}
            height={200}
            className="mb-4 rounded-lg"
            data-aos="fade-left"
          />
        </div>
        <Image
          src="/hero3.png"
          alt="Team Members"
          width={300}
          height={200}
          className="mb-4 rounded-lg top-110 right-1 absolute z-0 hidden md:inline"
          data-aos="fade-left"
        />
      </section>

      {/* Pain Points Section */}
      <section className="pt-8 md:pt-10 px-6 md:px-8 lg:px-16">
        <div className="mx-auto">
          <div>
            <div>
              <div
                data-aos="fade-left"
                className="inline-block bg-white rounded-full px-8 py-2.5 shadow-sm mb-4 border border-gray-300"
              >
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  PAIN POINTS
                </span>
              </div>

              <div className="flex flex-col md:flex-row justify-between gap-8 lg:gap-18">
                <div className="w-full lg:w-1/2">
                  <h1
                    data-aos="fade-left"
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4"
                  >
                    Doctors don&apos;t lack expertise.
                  </h1>
                  <p
                    data-aos="fade-left"
                    className="text-gray-600 text-base md:text-lg mb-8 md:mb-10"
                  >
                    They lack a system that helps patients discover, trust, and
                    choose them.
                  </p>

                  <div className="space-y-8 md:space-y-12">
                    {/* <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                        <FiTrendingUp className="text-white" size={20} />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                        Pain Points
                      </h3>
                    </div>
                    <p className="text-gray-600 text-base md:text-lg mb-5">
                      If your clinic isn&apos;t visible, trusted, or easy to
                      book - patients simply choose someone else.
                    </p> */}
                    <ul className="text-gray-950 font-semibold max-w-95">
                      <hr className="border-gray-300" />
                      <li
                        data-aos="fade-down"
                        data-aos-delay="100"
                        className="flex items-start space-x-3 border-b border-gray-300 py-2.5"
                      >
                        <span>Inconsistent patient flow</span>
                      </li>
                      <li
                        data-aos="fade-down"
                        data-aos-delay="200"
                        className="flex items-start space-x-3 border-b border-gray-300 py-2.5"
                      >
                        <span>Limited online credibility and reputation</span>
                      </li>
                      <li
                        data-aos="fade-down"
                        data-aos-delay="300"
                        className="flex items-start space-x-3 border-b border-gray-300 py-2.5"
                      >
                        <span>
                          Not ranking for specialty or treatment keywords
                        </span>
                      </li>
                      <li
                        data-aos="fade-down"
                        data-aos-delay="400"
                        className="flex items-start space-x-3 border-b border-gray-300 py-2.5"
                      >
                        <span>
                          Website traffic isn&apos;t converting to appointments
                        </span>
                      </li>
                      <li
                        data-aos="fade-down"
                        data-aos-delay="500"
                        className="flex items-start space-x-3 border-b border-gray-300 py-2.5"
                      >
                        <span>No automated follow-up process</span>
                      </li>
                      <li
                        data-aos="fade-down"
                        data-aos-delay="600"
                        className="flex items-start space-x-3 border-b border-gray-300 py-2.5"
                      >
                        <span>Low visibility on Google Maps</span>
                      </li>
                      <li
                        data-aos="fade-down"
                        data-aos-delay="700"
                        className="flex items-start space-x-3 border-b border-gray-300 py-2.5"
                      >
                        <span>
                          Zero clarity on what&apos;s working and what&apos;s
                          not
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="lg:w-[70%] relative lg:pl-20 md:pt-20 lg:pt-0">
                  <Image
                    src="/mobile.png"
                    alt="Calendar View"
                    width={200}
                    height={300}
                    className="absolute z-5 top-1/3 lg:top-1/3  -left-1/120 w-40 lg:w-52"
                    data-aos="fade-left"
                  />
                  <Image
                    src="/dashboard.png"
                    alt="mac"
                    width={850}
                    height={800}
                    className="absolutw z-10"
                    data-aos="fade-right"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Promise */}
      <div className="mt-50 md:mt-10 lg:mt-20">
        <PromiseSection data={promiseData} />
      </div>

      {/* Unique Features Section */}
      <section className="mt-10">
        <div className="py-12 md:py-20 mx-auto mb-10 px-6 md:px-8 lg:px-16 bg-linear-to-b from-blue-50 to-white">
          <div className="relative flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16">
            <div className="lg:sticky lg:top-8 w-full lg:max-w-xl mb-10 lg:mb-0">
              <div
                data-aos="flip-up"
                className="inline-block border border-gray-300 rounded-full px-4 md:px-6 py-2 mb-6 md:mb-10 shadow"
              >
                <span className="text-xs md:text-sm font-medium uppercase tracking-wide">
                  See How Our System Works
                </span>
              </div>
              <h1
                data-aos="flip-up"
                className="text-2xl md:text-3xl lg:text-[44px] font-bold mb-6 md:mb-9 leading-tight"
              >
                Unique features that make a difference
              </h1>

              <p
                data-aos="flip-up"
                className="text-gray-600 text-base md:text-lg mb-8 md:mb-10 leading-relaxed"
              >
                Our growth system is built on 6 essential pillars that drive
                patient acquisition.
              </p>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8 lg:gap-12 mt-8 md:mt-16">
                <button
                  data-aos="flip-up"
                  className="bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center space-x-3 shadow-lg w-full sm:w-auto justify-between"
                >
                  <span>Explore All Services</span>
                  <span className="p-2 bg-blue-400 rounded-full">
                    <FaLongArrowAltRight size={20} />
                  </span>
                </button>

                {/* Happy Users */}
                <div data-aos="flip-up" className="flex items-center space-x-4">
                  <div className="flex -space-x-4">
                    <Image
                      src="/img-client1.png"
                      alt="User 1"
                      className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover"
                      width={48}
                      height={48}
                    />
                    <Image
                      src="/img-client2.png"
                      alt="User 2"
                      className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover"
                      width={48}
                      height={48}
                    />
                    <Image
                      src="/img-video1.jpg"
                      alt="User 3"
                      className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div data-aos="flip-up">
                    <p className="text-xl md:text-2xl font-bold">12000</p>
                    <p className="text-gray-400 text-xs md:text-sm">
                      Happy users
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Steps */}
            <div className="space-y-6 md:space-y-10 w-full lg:w-auto">
              <div
                data-aos="flip-down"
                data-aos-delay="100"
                className="flex items-start space-x-4 md:space-x-8 bg-white/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 hover:bg-white/80 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <FiTrendingUp className="text-white" size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    360° Reputation Growth Engine
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Grow trust, increase 5★ reviews, and build a powerful online
                    presence.
                  </p>
                </div>
              </div>

              <div
                data-aos="flip-down"
                data-aos-delay="100"
                className="flex items-start space-x-4 md:space-x-8 bg-white/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 hover:bg-white/80 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <HiOutlineChartBar className="text-white" size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    Clinic Growth Intelligence Dashboard
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Monitor SEO, inquiries, calls, conversions, and growth - in
                    real-time.
                  </p>
                </div>
              </div>

              <div
                data-aos="flip-down"
                data-aos-delay="100"
                className="flex items-start space-x-4 md:space-x-8 bg-white/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 hover:bg-white/80 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <MdOutlineAutoAwesome className="text-white" size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    AI-Powered SEO Accelerator
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Boost your rankings, attract more patient inquiries, and
                    stay discoverable.
                  </p>
                </div>
              </div>

              <div
                data-aos="flip-down"
                data-aos-delay="100"
                className="flex items-start space-x-4 md:space-x-8 bg-white/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 hover:bg-white/80 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <MdOutlineWeb className="text-white" size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    Website Revamp - Conversion Optimized
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Turn your website into a high-performing appointment
                    generator.
                  </p>
                </div>
              </div>

              <div
                data-aos="flip-down"
                data-aos-delay="100"
                className="flex items-start space-x-4 md:space-x-8 bg-white/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 hover:bg-white/80 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <MdOutlineLocationOn className="text-white" size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    Local Visibility & GMB Dominance System
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Appear at the top for critical "near me" and local search
                    queries.
                  </p>
                </div>
              </div>

              <div
                data-aos="flip-down"
                data-aos-delay="100"
                className="flex items-start space-x-4 md:space-x-8 bg-white/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 hover:bg-white/80 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <MdOutlineEventRepeat className="text-white" size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    Automated Patient Capture & Follow-Up Funnel
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Instant lead capture + follow-up automation to increase
                    appointments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          <h1
            data-aos="flip-up"
            className="text-2xl md:text-3xl lg:text-4xl text-center mb-8 md:mb-16 px-4"
          >
            AI-based customer service platform built for collaboration.
          </h1>
          <div className="px-4 md:px-8 lg:px-16 relative mt-20">
            <Image
              src="/Analytics.png"
              width={2000}
              height={800}
              alt="image"
              className="object-cover mb-10 w-full h-auto rounded-lg"
              data-aos="zoom-out"
            />
            <Image
              src="/Link.png"
              width={80}
              height={50}
              alt="btn"
              className="absolute left-[41%] md:left-[46%] -top-10"
              data-aos="zoom-out"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection steps={steps} />

      {/*Case studies */}
      <CaseStudiesSection />

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16 px-6 md:px-8 lg:px-16">
        <div className="mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-16 items-start lg:items-center">
            {/* Left Column */}
            <div className="w-full lg:w-1/2">
              <div
                data-aos="fade-down"
                className="inline-block border border-gray-300 shadow rounded-full px-6 py-3 mb-8 md:mb-12"
              >
                <span className="text-sm font-medium uppercase tracking-wide">
                  WHY CHOOSE US?
                </span>
              </div>

              <h1
                data-aos="fade-left"
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 leading-tight"
              >
                Built for Doctors. Proven Across Specialties.
              </h1>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 md:mb-16">
                <div data-aos="zoom-in" className="flex items-center space-x-3">
                  <FiCheck className="text-blue-500 shrink-0" size={24} />
                  <span className="text-base md:text-lg text-gray-500">
                    Healthcare-focused growth agency
                  </span>
                </div>
                <div data-aos="zoom-in" className="flex items-center space-x-3">
                  <FiCheck className="text-blue-500 shrink-0" size={24} />
                  <span className="text-base md:text-lg text-gray-500">
                    AI-powered optimization + human strategy
                  </span>
                </div>
                <div data-aos="zoom-in" className="flex items-center space-x-3">
                  <FiCheck className="text-blue-500 shrink-0" size={24} />
                  <span className="text-base md:text-lg text-gray-500">
                    Customized plans for every specialty
                  </span>
                </div>
                <div data-aos="zoom-in" className="flex items-center space-x-3">
                  <FiCheck className="text-blue-500 shrink-0" size={24} />
                  <span className="text-base md:text-lg text-gray-500">
                    Mentorship from Yashik Yadav
                  </span>
                </div>
              </div>

              <div className="mb-8">
                {/* Pagination Dots */}
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                </div>

                <blockquote
                  data-aos="fade-up"
                  className="text-gray-500 text-lg md:text-xl mb-6 leading-relaxed"
                >
                  &quot;We don&apos;t run random marketing activities - we build
                  predictable growth engines.&quot;
                </blockquote>
              </div>
            </div>

            {/* Right Column - Pricing Card */}
            <div
              data-aos="zoom-out"
              className="w-full md:w-2/3 lg:w-2/5 bg-linear-to-br from-blue-50 to-blue-100 rounded-3xl px-6 md:px-7 py-6 md:py-7 border-blue-400 border"
            >
              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">
                What&apos;s Included
              </h2>

              {/* Features List */}
              <div className="space-y-6 mb-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="bg-blue-600 text-white rounded-lg px-2 py-1.5 shrink-0 shadow-md">
                      {feature.icon}
                    </div>

                    {/* Text */}
                    <div className="pt-1">
                      <p className="text-base md:text-lg text-gray-900">
                        <span className="font-bold">{feature.title}</span>{" "}
                        <span className="font-normal">
                          {feature.description}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-sm text-white font-bold py-3 px-6 rounded-full flex items-center justify-between gap-3 shadow-lg hover:shadow-xl transition-all duration-300 md:text-lg">
                Book Free Strategy Session
                <div className="bg-white rounded-full p-2">
                  <HiArrowRight className="text-blue-600 text-xl" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/*Founder section */}
      <FounderSection />

      {/*Testimonial Section */}
      <Testimonials testimonials={testimonials} />

      {/* Faq Section */}
      <FaqSection faqs={faqs} />

      {/* CTA Section */}
      <FinalCTA />
    </main>
  );
}
