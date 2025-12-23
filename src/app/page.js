"use client";
import { useState, useRef } from "react";

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
import { FaLongArrowAltRight, FaLightbulb } from "react-icons/fa";
import { HiOutlineChartBar } from "react-icons/hi2";

import {
  FiCheck,
  FiMessageCircle,
  FiGlobe,
  FiSearch,
  FiStar,
  FiFileText,
  FiMinus,
  FiPlus,
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
      icon: <FiSearch className="text-blue-500" size={28} />,
      desc: " Top placement for “doctor near me” searches",
    },
    {
      icon: <MdAutorenew className="text-blue-500" size={28} />,
      desc: "Automated patient capture and follow-up",
    },
    {
      icon: <FiTrendingUp className="text-blue-500" size={28} />,
      desc: "Full visibility of every growth metric",
    },
  ],
  image: "/home4.png",
  rightPoints: [
    {
      icon: <FiStar className="text-blue-500" size={28} />,
      desc: " Strong online authority through 5★ reputation",
    },
    {
      icon: <HiOutlineChartBar className="text-blue-500" size={28} />,
      desc: "Higher rankings for specialty, symptoms & treatments",
    },
    {
      icon: <FiFileText className="text-blue-500" size={28} />,
      desc: "Website optimized for appointments & inquiries",
    },
  ],
};

const testimonials = [
  {
    quote:
      "As we explored new use cases, our feature requests were quickly loom prioritized in their backlog, the one of demonstrating.",
    name: "Emilio J. Harper",
    role: "CEO",
    image: "/img-video1.jpg",
  },
  {
    quote:
      "As we explored new use cases, our feature requests were quickly loom prioritized in their backlog, the one of demonstrating.",
    name: "Ricardo P. Wins",
    role: "Game Designer",
    image: "/img-client2.png",
  },
  {
    quote:
      "As we explored new use cases, our feature requests were quickly loom prioritized in their backlog, the one of demonstrating.",
    name: "Gabriel O. East",
    role: "Support Engr.",
    image: "/img-client1.png",
  },
  {
    quote:
      "As we explored new use cases, our feature requests were quickly loom prioritized in their backlog, the one of demonstrating.",
    name: "Javier C. Emerson",
    role: "UI/UX Designer",
    image: "/img-video1.jpg",
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
    title: "Step 1 - Audit",
    description:
      "We analyze your online presence, competition, reputation, website, funnels, and Google visibility.",
    image: "/home4.png",
  },
  {
    title: "Step 2 - Strategy",
    description:
      "We create a custom growth plan based on your specialty, locality, and patient intent.",
    image: "/img-video1.jpg",
  },
  {
    title: "Step 3 - Implementation",
    description:
      "We set up all 6 systems and fully manage your clinic's online growth foundation.",
    image: "/img-client2.png",
  },
  {
    title: "Step 4 - Optimization",
    description:
      "Weekly data analysis, reporting, and adjustments to maintain consistent growth.",
    image: "/img-client1.png",
  },
];

export default function LandingPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="flex flex-col items-center mx-auto px-6 md:px-6 py-12 md:py-20 bg-linear-to-b from-gray-50 via-blue-50 to-white relative overflow-hidden">
        <div className="text-center mx-auto mt-24">
          <p className="text-gray-600 text-sm md:text-base font-medium mb-6 tracking-wide uppercase">
            Launch your AI website within a days
          </p>

          <div className="max-w-4xl px-6">
            <h1 className="relative z-10 text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 md:mb-8">
              Get 30-60{" "}
              <span className="text-blue-600">Consistent Monthly</span>{" "}
              Appointments With a Complete{" "}
              <span className="text-blue-600">Clinic Growth</span> System
            </h1>
            <p className="text-gray-600 text-base md:text-xl px-4 relative z-10">
              We help private-practice doctors build trust, increase visibility,
              convert more website visitors, and automate patient follow-ups
              using our 6-system growth framework.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 md:gap-6 mb-8 md:mb-12 text-sm md:text-base mt-8 md:mt-16 w-full px-4">
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
              Mentored by Avi Arya
            </span>
          </div>
          <div className="items-center space-x-3 hidden lg:flex">
            <span className="border p-2.5 rounded-full flex items-center border-gray-300 bg-linear-to-r from-blue-50 to-gray-100">
              <FiCheck className="text-blue-600 shrink-0" size={15} />
            </span>
            <span className="text-gray-700 text-base md:text-lg">
              Proven 6-System Clinic Growth Model
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8 px-4 w-full max-w-2xl">
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
            src="/hero2.png"
            alt="Sales Performance"
            width={300}
            height={120}
            className="mb-4 rounded-lg"
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
          />
        </div>
        <Image
          src="/hero3.png"
          alt="Team Members"
          width={300}
          height={200}
          className="mb-4 rounded-lg top-110 right-1 absolute z-0 hidden md:inline"
        />
      </section>

      {/* Pain Points Section */}
      <section className="pt-8 md:pt-16 px-6 md:px-8 lg:px-16">
        <div className="mx-auto">
          <div>
            <div>
              <div className="inline-block bg-white rounded-full px-6 py-3 shadow-sm mb-4 border border-gray-300">
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  GENERALE PRACTICE
                </span>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center gap-8 lg:gap-18">
                <div className="w-full lg:w-1/2">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                    Doctors don&apos;t lack expertise.
                  </h1>
                  <p className="text-gray-600 text-base md:text-lg mb-8 md:mb-10">
                    They lack a system that helps patients discover, trust, and
                    choose them.
                  </p>

                  <div className="space-y-8 md:space-y-12">
                    <div className="flex items-center space-x-3 mb-4">
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
                    </p>
                    <ul className="text-gray-950 font-semibold text-sm max-w-80">
                      <hr className="border-gray-300" />
                      <li className="flex items-start space-x-3 border-b border-gray-300 py-2.5">
                        <span>Inconsistent patient flow</span>
                      </li>
                      <li className="flex items-start space-x-3 border-b border-gray-300 py-2.5">
                        <span>Limited online credibility and reputation</span>
                      </li>
                      <li className="flex items-start space-x-3 border-b border-gray-300 py-2.5">
                        <span>
                          Not ranking for specialty or treatment keywords
                        </span>
                      </li>
                      <li className="flex items-start space-x-3 border-b border-gray-300 py-2.5">
                        <span>
                          Website traffic isn&apos;t converting to appointments
                        </span>
                      </li>
                      <li className="flex items-start space-x-3 border-b border-gray-300 py-2.5">
                        <span>No automated follow-up process</span>
                      </li>
                      <li className="flex items-start space-x-3 border-b border-gray-300 py-2.5">
                        <span>Low visibility on Google Maps</span>
                      </li>
                      <li className="flex items-start space-x-3 border-b border-gray-300 py-2.5">
                        <span>
                          Zero clarity on what&apos;s working and what&apos;s
                          not
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="lg:w-[70%] relative lg:pl-20">
                  <Image
                    src="/Frame 151.png"
                    alt="Calendar View"
                    width={200}
                    height={300}
                    className="absolute z-5 top-1/2 -left-1/120"
                  />
                  <Image
                    src="/macbook-screen.png"
                    alt="mac"
                    width={850}
                    height={800}
                    className="absolutw z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Promise */}
      <div className="mt-50 md:mt-10 lg:mt-5">
        <PromiseSection data={promiseData} />
      </div>

      {/* Unique Features Section */}
      <section className="mt-10">
        <div className="py-12 md:py-20 mx-auto mb-10 px-6 md:px-8 lg:px-16 bg-linear-to-b from-blue-50 to-white">
          <div className="relative flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16">
            <div className="lg:sticky lg:top-8 w-full lg:max-w-xl mb-10 lg:mb-0">
              <div className="inline-block border border-gray-300 rounded-full px-4 md:px-6 py-2 mb-6 md:mb-10 shadow">
                <span className="text-xs md:text-sm font-medium uppercase tracking-wide">
                  See How Our System Works
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-[44px] font-bold mb-6 md:mb-9 leading-tight">
                Unique features that make a difference
              </h1>

              <p className="text-gray-600 text-base md:text-lg mb-8 md:mb-10 leading-relaxed">
                Our growth system is built on 6 essential pillars that drive
                patient acquisition.
              </p>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8 lg:gap-12 mt-8 md:mt-16">
                <button className="bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center space-x-3 shadow-lg w-full sm:w-auto justify-between">
                  <span>Explore All Services</span>
                  <span className="p-2 bg-blue-400 rounded-full">
                    <FaLongArrowAltRight size={20} />
                  </span>
                </button>

                {/* Happy Users */}
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-3">
                    <Image
                      src="/img-client1.png"
                      alt="User 1"
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-black"
                      width={48}
                      height={48}
                    />
                    <Image
                      src="/img-client2.png"
                      alt="User 2"
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-black"
                      width={48}
                      height={48}
                    />
                    <Image
                      src="/img-video1.jpg"
                      alt="User 3"
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-black"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>
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
              <div className="flex items-start space-x-4 md:space-x-8 bg-white/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 hover:bg-white/80 transition-all duration-300 shadow-sm hover:shadow-md">
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

              <div className="flex items-start space-x-4 md:space-x-8 bg-white/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 hover:bg-white/80 transition-all duration-300 shadow-sm hover:shadow-md">
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

              <div className="flex items-start space-x-4 md:space-x-8 bg-white/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 hover:bg-white/80 transition-all duration-300 shadow-sm hover:shadow-md">
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

              <div className="flex items-start space-x-4 md:space-x-8 bg-white/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 hover:bg-white/80 transition-all duration-300 shadow-sm hover:shadow-md">
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

              <div className="flex items-start space-x-4 md:space-x-8 bg-white/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 hover:bg-white/80 transition-all duration-300 shadow-sm hover:shadow-md">
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

              <div className="flex items-start space-x-4 md:space-x-8 bg-white/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 hover:bg-white/80 transition-all duration-300 shadow-sm hover:shadow-md">
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
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center mb-8 md:mb-16 px-4">
          AI-based customer service platform built for collaboration.
        </h1>
        <div className="px-4 md:px-8 lg:px-16 relative mt-20">
          <Image
            src="/Analytics.png"
            width={2000}
            height={800}
            alt="image"
            className="object-cover mb-10 w-full h-auto rounded-lg"
          />
          <Image
            src="/Link.png"
            width={80}
            height={50}
            alt="btn"
            className="absolute left-[41%] md:left-[46%] -top-10"
          />
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      <CaseStudiesSection />

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16 px-6 md:px-8 lg:px-16">
        <div className="mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-16 items-start lg:items-center">
            {/* Left Column */}
            <div className="w-full lg:w-1/2">
              <div className="inline-block border border-gray-300 shadow rounded-full px-6 py-3 mb-8 md:mb-12">
                <span className="text-sm font-medium uppercase tracking-wide">
                  WHY CHOOSE US?
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 leading-tight">
                Built for Doctors. Proven Across Specialties.
              </h1>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 md:mb-16">
                <div className="flex items-center space-x-3">
                  <FiCheck className="text-blue-500 shrink-0" size={24} />
                  <span className="text-base md:text-lg text-gray-500">
                    Healthcare-focused growth agency
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiCheck className="text-blue-500 shrink-0" size={24} />
                  <span className="text-base md:text-lg text-gray-500">
                    AI-powered optimization + human strategy
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiCheck className="text-blue-500 shrink-0" size={24} />
                  <span className="text-base md:text-lg text-gray-500">
                    Customized plans for every specialty
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiCheck className="text-blue-500 shrink-0" size={24} />
                  <span className="text-base md:text-lg text-gray-500">
                    Mentorship from Avi Arya
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

                <blockquote className="text-gray-500 text-lg md:text-xl mb-6 leading-relaxed">
                  &quot;We don&apos;t run random marketing activities - we build
                  predictable growth engines.&quot;
                </blockquote>
              </div>
            </div>

            {/* Right Column - Pricing Card */}
            <div className="w-full md:w-2/3 lg:1/2 bg-linear-to-br from-blue-50 to-blue-100 rounded-3xl px-6 md:px-7 py-6 md:py-7 border-blue-400 border">
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
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-sm text-white font-bold py-3 px-6 rounded-full flex items-center justify-between gap-3 shadow-lg hover:shadow-xl transition-all duration-300 md:text-base md:text-lg">
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
      <section className="py-12 md:py-16 px-6 md:px-10 lg:px-16 mb-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-7">
            <div className="inline-block bg-white rounded-full px-8 py-3 shadow-sm border border-gray-200">
              <span className="text-sm font-medium text-gray-900 uppercase tracking-wide">
                TESTIMONIALS
              </span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-gray-900 mb-10 leading-tight px-4">
            Professionals use rewind to get
            <br className="hidden md:block" />
            more done, faster.
          </h1>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 md:p-7 transition-shadow relative pl-8 md:pl-12"
              >
                <blockquote className="text-gray-700 text-lg md:text-xl leading-relaxed mb-12">
                  &quot; {testimonial.quote} &quot;
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover absolute -left-3 md:-left-5 -bottom-5"
                      width={64}
                      height={64}
                    />
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900">
                        {testimonial.name}
                      </h3>
                    </div>
                  </div>
                  <span className="text-gray-500 text-sm md:text-base">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faq Section */}
      <section className="bg-linear-to-b from-blue-100 to-white py-12 md:py-16 px-6 md:px-8 lg:px-16">
        <div className="mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left Column - FAQ */}
            <div>
              <div className="inline-block bg-white rounded-full px-6 py-3 shadow-sm border border-gray-200 mb-8">
                <span className="text-sm font-medium text-gray-900 uppercase tracking-wide">
                  UNIVERSAL QUESTION
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 md:mb-12 leading-tight">
                Get every single answer
              </h1>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-300"
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
              <div className="lg:sticky lg:top-8">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-[#155DFC8C] border-2">
                  <Image
                    src="/image 1.png"
                    alt="Professional woman working on laptop"
                    width={800}
                    height={1000}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <FinalCTA />
    </main>
  );
}
