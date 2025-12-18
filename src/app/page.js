"use client";
import { useState } from "react";
import Image from "next/image";

import { FaLongArrowAltRight, FaLightbulb } from "react-icons/fa";
import { HiOutlineChartBar } from "react-icons/hi2";
import {
  FiCheck,
  FiMessageCircle,
  FiGlobe,
  FiSearch,
  FiStar,
  FiFileText,
  FiChevronDown,
  FiMinus,
  FiPlus,
  FiArrowRight,
  FiTrendingUp, 
} from "react-icons/fi";
import {
  MdOutlineAutoAwesome,
  MdOutlineWeb,
  MdOutlineLocationOn,
  MdOutlineEventRepeat,
  MdAutorenew,
} from "react-icons/md";


const blogPosts = [
  {
    image: "/home5.jpeg",
    category: "CASE STUDY 1",
    date: "CARDIOLOGIST • JAIPUR",
    title: "0 - 34 Appointments Per Month in Just 60 Days",
    description:
      "Used SEO, GMB, website optimization, and patient funnel system.",
  },
  {
    image: "/home6.jpeg",
    category: "CASE STUDY 2",
    date: "IVF SPECIALIST • DELHI",
    title: "212% Increase in Patient Inquiries in 90 Days",
    description: "Powered by reputation growth engine and SEO accelerator.",
  },
  {
    image: "/home7.jpeg",
    category: "CASE STUDY 3",
    date: "GASTRO CLINIC • BANGALORE",
    title: "Ranked #1 for 9 High-Intent Treatment Keywords",
    description: "Achieved using local SEO and conversion-optimized website.",
  },
];

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
  {
    quote:
      "As we explored new use cases, our feature requests were quickly loom prioritized in their backlog, the one of demonstrating.",
    name: "Adrian B. Fulton",
    role: "Web Developer",
    image: "/img-client2.png",
  },
  {
    quote:
      "As we explored new use cases, our feature requests were quickly loom prioritized in their backlog, the one of demonstrating.",
    name: "Oscar N. Winsley",
    role: "Founder",
    image: "/img-client2.png",
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

export default function LandingPage() {
  const [contacts, setContacts] = useState(500);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="flex flex-col items-center -z-5 mx-auto px-6 py-20 bg-linear-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="text-center mx-auto max-w-6xl mt-24">
          <p className="text-gray-600 text-sm md:text-base font-medium mb-6 tracking-wide uppercase">
            Launch your AI website within a days
          </p>

          <div className="max-w-4xl">
            <h1 className="relative z-10 text-4xl md:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
              Get 30-60{" "}
              <span className="text-blue-600">Consistent Monthly</span>
              Appointments
              <br />
              With a Complete{" "}
              <span className="text-blue-600">Clinic Growth</span> System
            </h1>
            <p className="text-[#6B7280] relative z-12 text-xl">
              We help private-practice doctors build trust, increase visibility,
              convert more website visitors, and automate patient follow-ups
              using our 6-system growth framework.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-12 text-sm md:text-base mt-16">
          <div className="flex items-center space-x-3">
            <span className="border p-1.5 rounded-full flex items-center border-gray-300">
              <FiCheck className="text-blue-600 shrink-0" size={15} />
            </span>
            <span className="text-gray-700">4.9 Rating Across Doctors</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="border p-1.5 rounded-full flex items-center border-gray-300">
              <FiCheck className="text-blue-600 shrink-0" size={15} />
            </span>
            <span className="text-gray-700">150+ Clinics Supported</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="border p-1.5 rounded-full flex items-center border-gray-300">
              <FiCheck className="text-blue-600 shrink-0" size={15} />
            </span>
            <span className="text-gray-700">Mentored by Avi Arya</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="border p-1.5 rounded-full flex items-center border-gray-300">
              <FiCheck className="text-blue-600 shrink-0" size={15} />
            </span>
            <span className="text-gray-700">
              Proven 6-System Clinic Growth Model
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 text-white px-8 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-4 shadow-lg">
            <span>Get Started Today</span>
            <span className="p-2 bg-blue-500 rounded-full">
              <FaLongArrowAltRight size={20} />
            </span>
          </button>
          <button className="bg-[#111827] text-white px-8 py-2.5 rounded-full font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 flex items-center justify-center space-x-4 shadow-lg">
            <span>Sign Up</span>
            <span className="p-2 bg-blue-500 rounded-full">
              <FaLongArrowAltRight size={20} />
            </span>
          </button>
        </div>

        {/* Sales Performance Card */}
        <div className="absolute left-0 md:-left-10 top-40 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
          <Image
            src="/home1.png"
            alt="Sales Performance"
            width={400}
            height={120}
            className="mb-4 rounded-lg"
          />
        </div>

        {/* Team Members Card */}
        <div className="absolute right-0 md:-right-10 top-50 transform rotate-2 hover:rotate-0 transition-transform duration-300">
          <Image
            src="/home2.png"
            alt="Team Members"
            width={400}
            height={200}
            className="mb-4 rounded-lg"
          />
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="pt-16 px-16">
        <div className="mx-auto">
          <div>
            <div>
              <div className="inline-block bg-white rounded-full px-6 py-3 shadow-sm mb-4 border border-gray-200">
                <span className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                  GENERALE PRACTICE
                </span>
              </div>

              <div className="flex items-center mb-10">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Doctors don&apos;t lack expertise.
                </h1>
                <p className="text-[#6B7280] text-lg">
                  They lack a system that helps patients discover, trust, and
                  choose them.
                </p>
              </div>
              <div className="space-y-12 flex gap-8">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                      <FiTrendingUp className="text-white" size={20} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Pain Points
                    </h3>
                  </div>
                  <p className="text-[#6B7280] w-sm text-lg mb-10">
                    If your clinic isn&apos;t visible, trusted, or easy to book
                    - patients simply choose someone else.
                  </p>
                  <ul className="text-gray-950 font-semibold">
                    <hr className="border-gray-300" />
                    <li className="flex items-start space-x-3 border-b border-gray-300 py-3">
                      <span>Inconsistent patient flow</span>
                    </li>
                    <li className="flex items-start space-x-3 border-b border-gray-300 py-3">
                      <span>Limited online credibility and reputation</span>
                    </li>
                    <li className="flex items-start space-x-3 border-b border-gray-300 py-3">
                      <span>
                        Not ranking for specialty or treatment keywords
                      </span>
                    </li>
                    <li className="flex items-start space-x-3 border-b border-gray-300 py-3">
                      <span>
                        Website traffic isn&apos;t converting to appointments
                      </span>
                    </li>
                    <li className="flex items-start space-x-3 border-b border-gray-300 py-3">
                      <span>No automated follow-up process</span>
                    </li>
                    <li className="flex items-start space-x-3 border-b border-gray-300 py-3">
                      <span>Low visibility on Google Maps</span>
                    </li>
                    <li className="flex items-start space-x-3 border-b border-gray-300 py-3">
                      <span>
                        Zero clarity on what&apos;s working and what&apos;s not
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="relative">
                  <Image
                    src="/home3.png"
                    alt="Calendar View"
                    width={800}
                    height={800}
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Promise */}
      <section className="py-10 px-16">
        <div className="mx-auto flex flex-col items-center">
          <div className="text-center mb-7">
            <div className="inline-block bg-white rounded-full px-8 py-3 shadow-sm border border-gray-200">
              <span className="text-sm font-medium text-gray-900 uppercase tracking-wide">
                THE PROMISE
              </span>
            </div>
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-10 leading-tight">
            A growth system that increases trust, visibility,
            <br />
            conversions, and patient bookings - consistently.
            <br />
          </h1>

          <div className="flex gap-7">
            <div className="space-y-8">
              <div className="bg-white rounded-xl w-78 p-7 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-6">
                  <FiSearch className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  Top placement for “doctor near me” searches
                </h3>
              </div>

              {/* Card 2 - Search */}
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-6">
                  <MdAutorenew className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  Automated patient capture and follow-up
                </h3>
              </div>

              {/* Card 3 - Service */}
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-6">
                  <FiTrendingUp className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  Full visibility of every growth metric
                </h3>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-linear-to-br from-black via-gray-900 to-green-500">
                <Image
                  src="/home4.png"
                  alt="Happy customer"
                  className=""
                  width={900}
                  height={800}
                />
              </div>

              {/* Floating ROI Card */}
              <div className="absolute bottom-1 left-18 bg-white rounded-2xl shadow-2xl p-6 max-w-xs">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <FiTrendingUp className="text-green-600" size={20} />
                  </div>
                  <span className="text-xl font-bold text-gray-900">
                    ROI Rates
                  </span>
                </div>
                <div className="flex items-baseline space-x-2 mb-2">
                  <span className="text-4xl font-bold text-gray-900">
                    27,127
                  </span>
                  <span className="text-green-600 text-sm font-semibold bg-green-100 px-2 py-1 rounded">
                    ↑ 12%
                  </span>
                  <span className="text-gray-500 text-sm">vs last years</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <span className="mr-2">🕐</span>
                  <span>Updated 1 month ago</span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-xl p-7 w-78 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-6">
                  <FiStar className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  Strong online authority through 5★ reputation
                </h3>
              </div>

              <div className="bg-white rounded-xl p-7 w-78 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-6">
                  <HiOutlineChartBar className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  Higher rankings for specialty, symptoms & treatments
                </h3>
              </div>

              <div className="bg-white rounded-xl p-7 w-78 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-6">
                  <FiFileText className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  Website optimized for appointments & inquiries
                </h3>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-10">
            <div className="inline-block bg-white rounded-full px-8 py-4 shadow-lg border border-gray-200">
              <span className="text-gray-700 text-lg">
                See How Our System Works.{" "}
                <a
                  href="#"
                  className="font-bold text-gray-900 underline hover:text-blue-600 transition-colors"
                >
                  Try It Out
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Features Section */}
      <section className="bg-black text-white py-10 pb-16 px-12 mt-10">
        <div className="mx-auto relative flex flex-col items-center">
          <div className="flex items-center gap-36">
            <div className="w-px left-[51%]  h-[85%] absolute bg-[#6B7280]"></div>
            <div className="">
              <div className="inline-block border border-white rounded-full px-6 py-2 mb-7">
                <span className="text-sm font-medium uppercase tracking-wide">
                  HOW IT WORKS?
                </span>
              </div>
              <h1 className="text-3xl lg:text-[44px] font-bold mb-8">
                Snapshot of our 6 core services
              </h1>

              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Our growth system is built on 6 essential pillars that drive
                patient acquisition.
              </p>

              <div className="flex items-start space-x-8 mb-10">
                <div className="shrink-0">
                  <div className="w-12 h-10 mt-3 bg-blue-600 rounded-lg flex items-center justify-center">
                    <FiTrendingUp className="text-white" size={22} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    360° Reputation Growth Engine
                  </h3>
                  <p className="text-gray-400 text-[16px] leading-relaxed">
                    Grow trust, increase 5★ reviews, and build a powerful online
                    presence.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-8 mb-12">
                {/* Quote */}
                <div className="shrink-0">
                  <div className="w-12 h-10 mt-3 bg-blue-600 rounded-xl flex items-center justify-center">
                    <HiOutlineChartBar className="text-white" size={22} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Clinic Growth Intelligence Dashboard
                  </h3>
                  <p className="text-gray-400 text-[16px] leading-relaxed">
                    Monitor SEO, inquiries, calls, conversions, and growth - in
                    real-time.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Steps */}
            <div className="space-y-10">
              <div className="flex items-start space-x-8">
                <div className="shrink-0">
                  <div className="w-12 h-10 mt-3 bg-blue-600 rounded-xl flex items-center justify-center">
                    <MdOutlineAutoAwesome className="text-white" size={22} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    AI-Powered SEO Accelerator
                  </h3>
                  <p className="text-gray-400 text-[16px] leading-relaxed">
                    Boost your rankings, attract more patient inquiries, and
                    stay discoverable.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-8">
                <div className="shrink-0">
                  <div className="w-12 h-10 mt-3 bg-blue-600 rounded-xl flex items-center justify-center">
                    <MdOutlineWeb className="text-white" size={22} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Website Revamp - Conversion Optimized
                  </h3>
                  <p className="text-gray-400 text-[16px] leading-relaxed">
                    Turn your website into a high-performing appointment
                    generator.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-8">
                <div className="shrink-0">
                  <div className="w-12 h-10 mt-3 bg-blue-600 rounded-xl flex items-center justify-center">
                    <MdOutlineLocationOn className="text-white" size={22} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Local Visibility & GMB Dominance System
                  </h3>
                  <p className="text-gray-400 text-[16px] leading-relaxed">
                    Appear at the top for critical “near me” and local search
                    queries.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-8">
                <div className="shrink-0">
                  <div className="w-12 h-10 mt-3 bg-blue-600 rounded-xl flex items-center justify-center">
                    <MdOutlineEventRepeat className="text-white" size={22} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Automated Patient Capture & Follow-Up Funnel
                  </h3>
                  <p className="text-gray-400 text-[16px] leading-relaxed">
                    Instant lead capture + follow-up automation to increase
                    appointments.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* CTA Button */}
          <div className="flex items-center gap-24 mt-7">
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center space-x-3 shadow-lg">
              <span className="">Explore All Services</span>
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
                  className="w-12 h-12 rounded-full border-2 border-black"
                  width={48}
                  height={48}
                />
                <Image
                  src="/img-client2.png"
                  alt="User 2"
                  className="w-12 h-12 rounded-full border-2 border-black"
                  width={48}
                  height={48}
                />
                <Image
                  src="/img-video1.jpg"
                  alt="User 3"
                  className="w-12 h-12 rounded-full border-2 border-black"
                  width={48}
                  height={48}
                />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">12000</p>
                <p className="text-gray-400 text-sm">Happy users</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-[#F8FAFC] py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 100 0 L 0 0 0 100"
                  fill="none"
                  stroke="gray"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="mx-auto relative z-10">
          <div className="text-center mb-8">
            <div className="inline-block bg-white rounded-full px-8 py-3 shadow-sm border border-gray-200">
              <span className="text-sm font-medium text-gray-900 uppercase tracking-wide">
                OUR PROCESS
              </span>
            </div>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-center text-gray-900 mb-12 leading-tight">
            Our 4-Step Clinic <span className="inline-block">🎩</span>
            <br />
            Growth System
          </h1>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-">
            <div className="bg-white rounded-xl p-8  border-gray-200 hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <span className="inline-block bg-gray-100 text-gray-900 text-sm font-semibold px-4 py-2 rounded-full">
                  Step 1
                </span>
              </div>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">Audit</span>
              </div>
              <p className="text-gray-600 text-base mb-7 border-b pb-4 border-gray-300">
                We analyze your online presence
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2 text-gray-700">
                  <span className="text-blue-600">✓</span>
                  <span>competition</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-700">
                  <span className="text-blue-600">✓</span>
                  <span>reputation</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-700">
                  <span className="text-blue-600">✓</span>
                  <span>website</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-700">
                  <span className="text-blue-600">✓</span>
                  <span>funnels</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-700">
                  <span className="text-blue-600">✓</span>
                  <span>Google visibility</span>
                </li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-gray-100 rounded-xl p-8  border-gray-200 hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <span className="inline-block bg-white text-gray-900 text-sm font-semibold px-4 py-2 rounded-full">
                  Step 2
                </span>
              </div>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">
                  Strategy
                </span>
              </div>
              <p className="text-gray-600 text-base mb-7 border-b pb-4 border-gray-300">
                We analyze your online presence
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2 text-gray-700">
                  <span className="text-blue-600">✓</span>
                  <span>competition</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-700">
                  <span className="text-blue-600">✓</span>
                  <span>reputation</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-700">
                  <span className="text-blue-600">✓</span>
                  <span>website</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-700">
                  <span className="text-blue-600">✓</span>
                  <span>funnels</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-700">
                  <span className="text-blue-600">✓</span>
                  <span>Google visibility</span>
                </li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-white rounded-xl p-8  border-gray-200 hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <span className="inline-block bg-gray-100 text-gray-900 text-sm font-semibold px-4 py-2 rounded-full">
                  Step 3
                </span>
              </div>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">
                  Implementation
                </span>
              </div>
              <p className="text-gray-600 text-base mb-7 border-b pb-4 border-gray-300">
                We analyze your online presence
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2 text-gray-700">
                  <span className="text-blue-600">✓</span>
                  <span>competition</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-700">
                  <span className="text-blue-600">✓</span>
                  <span>reputation</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-700">
                  <span className="text-blue-600">✓</span>
                  <span>website</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-700">
                  <span className="text-blue-600">✓</span>
                  <span>funnels</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-700">
                  <span className="text-blue-600">✓</span>
                  <span>Google visibility</span>
                </li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-gray-100 rounded-xl p-8  border-gray-200 hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <span className="inline-block bg-white text-gray-900 text-sm font-semibold px-4 py-2 rounded-full">
                  Step 4
                </span>
              </div>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">
                  {" "}
                  <span>Optimization</span>
                </span>
              </div>
              <p className="text-gray-600 text-base mb-7 border-b pb-4 border-gray-300">
                We analyze your online presence
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2 text-gray-700">
                  <span className="text-blue-600">✓</span>
                  <span>competition</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-700">
                  <span className="text-blue-600">✓</span>
                  <span>reputation</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-700">
                  <span className="text-blue-600">✓</span>
                  <span>website</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-700">
                  <span className="text-blue-600">✓</span>
                  <span>funnels</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-700">
                  <span className="text-blue-600">✓</span>
                  <span>Google visibility</span>
                </li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-linear-to-br from-gray-50 via-blue-50 to-purple-50 py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
              backgroundSize: "100px 100px",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <div className="inline-block bg-white rounded-full px-8 py-3 shadow-sm border border-gray-200">
              <span className="text-sm font-medium text-gray-900 uppercase tracking-wide">
                CASE STUDIES
              </span>
            </div>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-center text-gray-900 mb-20 leading-tight">
            Real Doctors. Real <span className="inline-block">🚀</span> Results.
            Real Growth
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    width={400}
                    height={320}
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500 uppercase">
                      {post.date}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-base mt-4">
                    {post.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-black text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div>
              <div className="inline-block border border-white rounded-full px-6 py-3 mb-8">
                <span className="text-sm font-medium uppercase tracking-wide">
                  WHY CHOOSE US?
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-12 leading-tight">
                Built for Doctors. Proven Across Specialties.
              </h1>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                <div className="flex items-center space-x-3">
                  <FiCheck className="text-green-400 shrink-0" size={24} />
                  <span className="text-xl text-gray-300">
                    Healthcare-focused growth agency
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiCheck className="text-green-400 shrink-0" size={24} />
                  <span className="text-xl text-gray-300">
                    AI-powered optimization + human strategy
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiCheck className="text-green-400 shrink-0" size={24} />
                  <span className="text-xl text-gray-300">
                    Customized plans for every specialty
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiCheck className="text-green-400 shrink-0" size={24} />
                  <span className="text-xl text-gray-300">
                    Mentorship from Avi Arya
                  </span>
                </div>
              </div>

              <div className="mb-8">
                {/* Pagination Dots */}
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                </div>

                <blockquote className="text-gray-300 text-xl mb-6 leading-relaxed">
                  &quote;We don’t run random marketing activities - we build
                  predictable growth engines. &quote;
                </blockquote>
              </div>
            </div>

            {/* Right Column - Pricing Card */}
            <div className="bg-linear-to-br from-gray-900 to-gray-800 rounded-3xl p-10 shadow-2xl border border-gray-700">
              <h2 className="text-5xl font-bold mb-4">Standard</h2>
              <p className="text-gray-400 text-lg mb-8">
                Send up to 6,000 emails each month.
              </p>
              <div className="flex items-center justify-between bg-gray-800 rounded-full p-2 mb-8">
                <span className="text-white text-lg px-6">Legit contact</span>
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="bg-green-400 text-black font-bold px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-green-300 transition-colors"
                  >
                    <span>{contacts}</span>
                    <FiChevronDown size={20} />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 bg-gray-800 rounded-2xl shadow-xl border border-gray-700 overflow-hidden z-10">
                      {contactOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setContacts(option);
                            setIsDropdownOpen(false);
                          }}
                          className="block w-full text-left px-6 py-3 hover:bg-gray-700 transition-colors text-white"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-8">
                <p className="text-gray-400 text-sm mb-2">starts at</p>
                <div className="flex items-baseline space-x-2 mb-4">
                  <span className="text-5xl font-bold text-gray-600 line-through">
                    $20
                  </span>
                  <span className="text-6xl font-bold text-green-400">$10</span>
                  <span className="text-gray-400 text-lg">/FOR 12 MONTHS</span>
                </div>
                <p className="text-gray-400 text-lg">
                  Then, starts at{" "}
                  <span className="text-white font-semibold">$20 /month</span>
                </p>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-green-400 text-black font-bold text-xl py-5 rounded-full hover:bg-green-300 transition-all transform hover:scale-105 flex items-center justify-between px-8 shadow-lg">
                <span>Buy Now</span>
                <div className="bg-white rounded-full p-2">
                  <FiArrowRight size={24} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/*Founder section */}
      <section className="bg-linear-to-br from-gray-50 via-blue-50 to-purple-50 py-16 px-16">
        <div className="mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80"
                  alt="Two professionals collaborating at a desk"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            {/* Left Column - Content */}
            <div>
              <div className="inline-block bg-white rounded-full px-6 py-3 shadow-sm border border-gray-200 mb-5">
                <span className="text-sm font-medium text-gray-900 uppercase tracking-wide">
                  FOUNDER STORY
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-3 leading-tight">
                Meet Yashik Yadav
                <br />
                <span className="text-gray-600 text-3xl lg:text-4xl font-semibold">
                  Clinic Growth Strategist
                </span>
              </h1>

              {/* Bio Section */}
              <div className="mb-12">
                <p className="text-gray-700 text-xl leading-relaxed mb-6">
                  For over 5 years, I&apos;ve been helping doctors across India
                  build a powerful online presence and grow consistently.
                </p>
                <p className="text-gray-900 text-xl font-semibold leading-relaxed mb-4">
                  My mission is simple:
                </p>
                <p className="text-gray-700 text-xl leading-relaxed">
                  Help doctors get the patients they deserve by giving their
                  clinic the visibility and trust it deserves.
                </p>
              </div>

              <div className="space-y-5 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                    <FaLightbulb className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      150+ doctors supported
                    </h3>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                    <FiMessageCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Background in healthcare marketing
                    </h3>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                    <FiGlobe className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Built multiple clinic growth systems
                    </h3>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                    <FaLightbulb className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Trained under Avi Arya&apos;s agency mentorship
                    </h3>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="bg-black text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center space-x-3 shadow-lg">
                <span>Meet the Founder</span>
                <FiArrowRight size={20} />
              </button>
            </div>

            {/* Right Column - Image */}
          </div>
        </div>
      </section>

      {/*Testimonial Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-7">
            <div className="inline-block bg-white rounded-full px-8 py-3 shadow-sm border border-gray-200">
              <span className="text-sm font-medium text-gray-900 uppercase tracking-wide">
                TESTIMONIALS
              </span>
            </div>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-10 leading-tight">
            Professionals use rewind to get
            <br />
            more done, faster.
          </h1>

          <div className="grid md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#f7f8fa] rounded-xl p-7 transition-shadow relative pl-12"
              >
                <blockquote className="text-gray-700 text-xl leading-relaxed mb-12">
                  &quot; {testimonial.quote} &quot; 
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover absolute -left-5 -bottom-5"
                      width={64}
                      height={64}
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {testimonial.name}
                      </h3>
                    </div>
                  </div>
                  <span className="text-gray-500 text-base">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faq Section */}
      <section className="bg-linear-to-br from-gray-50 via-blue-50 to-purple-50 py-16 px-16">
        <div className="mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - FAQ */}
            <div>
              <div className="inline-block bg-white rounded-full px-6 py-3 shadow-sm border border-gray-200 mb-8">
                <span className="text-sm font-medium text-gray-900 uppercase tracking-wide">
                  UNIVERSAL QUESTION
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 leading-tight">
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
                      className="w-full flex items-center justify-between px-9 py-5 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-xl font-semibold text-gray-900 pr-4">
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
                      <div className="px-8 pb-8">
                        <p className="text-gray-600 text-lg leading-relaxed">
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
              <div className="sticky top-8">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/contact_image_2.png"
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
      <section className="relative bg-black overflow-hidden flex items-center justify-center px-6 py-16">
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
          <button className="bg-blue-400 text-white text-lg px-8 py-3 rounded-full hover:bg-blue-300 transition-all transform hover:scale-105 flex items-center space-x-3 mx-auto shadow-lg">
            <span>Book Free strategy Session</span>
            <div className="bg-white rounded-full p-2">
              <FaLongArrowAltRight color="black" size={20} />
            </div>
          </button>
        </div>
      </section>
    </main>
  );
}
