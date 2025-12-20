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
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import {
  MdOutlineAutoAwesome,
  MdOutlineWeb,
  MdOutlineLocationOn,
  MdOutlineEventRepeat,
  MdAutorenew,
} from "react-icons/md";
import GrowthSection from "@/components/GrowthSection";
import FinalCTA from "@/components/FinalCTA";
import PromiseSection from "@/components/PromiseSection";

const pillars = [
  {
    title: "360° Reputation Growth Engine",
    desc: "Grow patient trust with more 5★ reviews and a strong, credible online presence across platforms.",
  },
  {
    title: "AI-Powered SEO Accelerator",
    desc: "Increase visibility for specialties, symptoms, and treatments to attract high-intent patient searches.",
  },
  {
    title: "Website Revamp — Conversion Optimized",
    desc: "Transform your website into a fast, mobile-friendly appointment booking machine.",
  },
  {
    title: "Local Visibility & GMB Dominance System",
    desc: "Rank at the top for “near me” and city-based searches where patients are ready to book.",
  },
  {
    title: "Automated Patient Capture & Follow-Up Funnel",
    desc: "Capture leads instantly and follow up automatically to maximize appointment conversions.",
  },
  {
    title: "Clinic Growth Intelligence Dashboard",
    desc: "Track SEO, calls, inquiries, conversions, and overall growth in one real-time dashboard.",
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
  image: "/home4.png",
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
  const [contacts, setContacts] = useState(500);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % steps.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + steps.length) % steps.length);
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

              <div className="flex items-center gap-10">
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-10">
                    Doctors don&apos;t lack expertise.
                  </h1>

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
                      <p className="text-[#6B7280] w-lg text-lg mb-10">
                        If your clinic isn&apos;t visible, trusted, or easy to
                        book - patients simply choose someone else.
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
                            Website traffic isn&apos;t converting to
                            appointments
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
                            Zero clarity on what&apos;s working and what&apos;s
                            not
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="lg:w-5xl">
                  <p className="text-[#6B7280] text-lg xl:mb-22 mb-36  ml-10">
                    They lack a system that helps patients discover, trust, and
                    choose them.
                  </p>
                  <Image
                    src="/home3.png"
                    alt="Calendar View"
                    width={900}
                    height={900}
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Promise */}
      <PromiseSection data={promiseData} />

      {/* Growth Section */}
      <GrowthSection pillars={pillars} />

      {/* Process Section */}
      <section className="py-16 px-36">
        <div className="mx-auto">
          {/* Header Badge */}
          <div className="text-center mb-8">
            <div className="inline-block bg-white rounded-full px-8 py-3 shadow-sm border border-gray-200">
              <span className="text-sm font-medium text-gray-900 uppercase tracking-wide">
                OUR PROCESS
              </span>
            </div>
          </div>

          {/* Main Heading with Emojis */}
          <h1 className="text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-10 leading-tight">
            Our 4-Step Clinic <span className="inline-block"></span>
            <br />
            <span className="inline-block"></span> Growth System
          </h1>

          {/* Carousel Container */}
          <div className="relative">
            {/* Slides */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="w-full shrink-0 px-16 py-3 bg-[#f7f8fa] rounded-3xl"
                  >
                    <div className="flex justify-between items-center gap-12">
                      {/* Left Content */}
                      <div className="">
                        <p className="text-2xl md:text-3xl leading-relaxed text-gray-900 font-medium">
                          {step.title}
                        </p>
                        <p className="text-gray-700 text-lg mt-4">
                          {step.description}
                        </p>
                        <button className="mt-8 bg-blue-600 gap-5 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center space-x-3 shadow-lg">
                          Get a Free Clinic Growth Audit
                          <span className="p-2 bg-blue-400 rounded-full">
                            <FiArrowRight size={16} className="text-white" />
                          </span>
                        </button>
                      </div>

                      {/* Right Image */}
                      <div className="">
                        <Image
                          src="/process.png" // replace with actual image
                          alt="Testimonial"
                          width={300}
                          height={200}
                          className="object cover"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-center space-x-4 mt-12">
              <button
                onClick={prevSlide}
                className="w-14 h-14 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 hover:bg-gray-50 transition-all disabled:opacity-30"
                disabled={currentSlide === 0}
              >
                <FiChevronLeft size={24} className="text-gray-900" />
              </button>
              <button
                onClick={nextSlide}
                className="w-14 h-14 rounded-full border-2 border-gray-900 bg-white flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all disabled:opacity-30"
                disabled={currentSlide === steps.length - 1}
              >
                <FiChevronRight size={24} />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex items-center justify-center space-x-2 mt-6">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === index
                      ? "w-8 bg-gray-900"
                      : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-black text-white py-16 px-16">
        <div className="mx-auto">
          <div className="flex gap-24 items-center">
            {/* Left Column */}
            <div className="w-[55%]">
              <div className="inline-block border border-white rounded-full px-6 py-3 mb-8">
                <span className="text-sm font-medium uppercase tracking-wide">
                  WHY CHOOSE US?
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold mb-12 leading-tight">
                Built for Doctors. Proven Across Specialties.
              </h1>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                <div className="flex items-center space-x-3">
                  <FiCheck className="text-green-400 shrink-0" size={24} />
                  <span className="text-lg text-gray-300">
                    Healthcare-focused growth agency
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiCheck className="text-green-400 shrink-0" size={24} />
                  <span className="text-lg text-gray-300">
                    AI-powered optimization + human strategy
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiCheck className="text-green-400 shrink-0" size={24} />
                  <span className="text-lg text-gray-300">
                    Customized plans for every specialty
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiCheck className="text-green-400 shrink-0" size={24} />
                  <span className="text-lg text-gray-300">
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
            <div className="bg-linear-to-br from-gray-900 to-gray-800 rounded-3xl p-10 shadow-2xl border border-gray-700 w-[40%]">
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
      <FinalCTA />
    </main>
  );
}
