"use client"

import { useState } from "react";
import Image from "next/image";

import GrowthSection from "@/components/GrowthSection";
import FinalCTA from "@/components/FinalCTA";

import {
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
  HiOutlineLightningBolt,
  HiArrowRight
} from "react-icons/hi";

import {
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
  FiCheckCircle,
  FiTrendingUp,
  FiCpu,
  FiUsers,
  FiAward,
  FiZap,
} from "react-icons/fi";


const pillars = [
  {
    title: "360° Reputation Growth Engine",
    highlight: "Build Trust → Convert More Patients",
    desc: "We grow your 5★ reviews, patient testimonials, and online trust across Google, social media, and key listings—so patients choose you with confidence.",
    cta: "Learn More →",
  },
  {
    title: "AI-Powered SEO Accelerator",
    highlight: "Rank Higher → Get Found by Local Patients",
    desc: "A powerful AI + human-led SEO system that improves visibility for specialty, treatment, and symptom-based searches that patients actually use.",
    cta: "Learn More →",
  },
  {
    title: "Website Revamp - Conversion Optimized",
    highlight: "Turn Visitors Into Booked Appointments",
    desc: "We redesign or optimize your clinic website for speed, clarity, trust, and conversions—making it a true 24/7 appointment engine.",
    cta: "Learn More →",
  },
  {
    title: "Local Visibility & GMB Dominance System",
    highlight: "Own the “Doctor Near Me” Searches",
    desc: "We optimize and manage your Google Business Profile and local listings to help you rank higher on Google Maps for your specialty.",
    cta: "Learn More →",
  },
  {
    title: "Automated Patient Capture & Follow-Up Funnel",
    highlight: "Capture Every Lead → Convert More Patients",
    desc: "Automated WhatsApp and SMS follow-ups, reminders, and reactivation flows ensure no patient inquiry is ever missed.",
    cta: "Learn More →",
  },
  {
    title: "Clinic Growth Intelligence Dashboard",
    highlight: "Track Every Important Metric in One Place",
    desc: "Monitor SEO performance, inquiries, calls, conversions, website traffic, and reviews in one real-time dashboard built for clinics.",
    cta: "Learn More →",
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

const reasons = [
  {
    icon: <FiTrendingUp size={24} />,
    text: "Proven 6-system clinic growth model",
  },
  {
    icon: <FiUsers size={24} />,
    text: "Healthcare-only agency",
  },
  {
    icon: <FiCpu size={24} />,
    text: "AI-backed + human strategy",
  },
  {
    icon: <FiCheckCircle size={24} />,
    text: "Strong founder involvement",
  },
  {
    icon: <FiAward size={24} />,
    text: "Mentored & trained under Avi Arya",
  },
  {
    icon: <FiZap size={24} />,
    text: "Real results, fast execution",
  },
];


export default function ServiceDetails() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % steps.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <main>
      <section className="relative">
        <div className="mx-auto px-6 pt-24 pb-16 text-center bg-linear-to-br from-blue-50 via-blue-100 to-blue-100">
          {/* Badge */}
          <div className="mt-16 inline-flex items-center px-4 py-1 rounded-full border border-blue-300 bg-white text-sm font-medium text-blue-700 mb-6">
            SERVICE DETAILS
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Everything You Need to <br className="hidden md:block" />
            Build a Trusted Visible & Fast
            <br className="hidden md:block" />
            Growing Clinic
          </h1>

          {/* Subheadline */}
          <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-10">
            Our 6-system approach helps private-practice doctors attract more
            patients, increase trust, dominate local search, and automate
            follow-ups for consistent appointment growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-40">
            <button className="flex items-center gap-3 px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              Get Your Personalized Growth Plan
              <span className="w-9 h-9 rounded-full bg-white text-blue-600 flex items-center justify-center">
                <HiArrowRight />
              </span>
            </button>

            <button className="flex items-center gap-3 px-8 py-4 rounded-full bg-white border border-gray-300 text-gray-900 font-semibold hover:bg-gray-100 transition">
              Get Started
              <span className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center">
                <HiArrowRight />
              </span>
            </button>
          </div>
        </div>

        {/* Bottom Image Section */}
        <div className="relative z-10 max-w-5xl mx-auto -mt-40">
          <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
            <Image
              src="/about.png" // bottom image
              alt="Dashboard Preview"
              width={1400}
              height={800}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* intro section */}
      <section className="pt-20 pb-7 bg-white">
        <div className="mx-auto px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            {/* LEFT CONTENT */}
            <div>
              {/* Badge */}
              <span className="inline-block mb-6 px-4 py-1 rounded-full border text-sm font-medium">
                INTRO STATEMENT
              </span>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Doctors don’t need
                <br className="hidden md:block" />
                unlimited services
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl mb-10">
                That’s why we built six powerful, interlinked growth engines -
                each created to solve a specific challenge doctors face online.
              </p>

              {/* Divider */}
              <div className="border-l-4 border-blue-600 pl-6 mb-5">
                <p className="text-lg text-gray-700 leading-relaxed">
                  They need a focused, predictable system that grows their
                  patient flow month after month.
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Together, they form your Complete Clinic Growth System.
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <Image
                src="/about2.png" // replace with your image
                alt="Analytics Dashboard"
                width={500}
                height={600}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/*Growth section */}
      <GrowthSection pillars={pillars} />

      {/* services section */}
      <section className="py-16 flex items-start px-16 bg-white gap-12">
        {/* Badge */}
        <div className="w-sm mt-7 flex flex-col justify-center items-center">
          <p className="inline-block mb-10 px-4 py-1 rounded-full border text-sm font-medium ">
            SERVICES
          </p>
          <button className="flex items-center gap-3 px-6 py-2 rounded-full bg-black text-white font-semibold hover:bg-blue-700 transition">
            See Our Process
            <span className="w-9 h-9 rounded-full bg-white text-blue-600 flex items-center justify-center">
              <HiArrowRight />
            </span>
          </button>
        </div>
        <div className="mx-auto">
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-5xl mb-20">
            Your Growth Doesn’t Come From One Service - It Comes From a System.
          </h2>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            {/* Vision */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <p className="uppercase text-sm tracking-wide text-gray-400">
                  DETAILS
                </p>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed max-w-md mb-5">
                Each of our services is powerful on its own. But when combined,
                they create a "complete, predictable clinic growth ecosystem"
                All 6 work together to deliver consistent monthly appointments.
              </p>
            </div>

            {/* Mission */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <p className="uppercase text-sm tracking-wide text-gray-400">
                  SERVICES
                </p>
              </div>

              <ul className="space-y-0.5">
                <li className="text-gray-600 text-">
                  Your reputation builds trust
                </li>
                <li className="text-gray-600 text-">
                  Your SEO provides visibility
                </li>
                <li className="text-gray-600 text-">
                  Your website converts traffic
                </li>
                <li className="text-gray-600 text-">
                  Your GMB wins local intent
                </li>
                <li className="text-gray-600 text-">
                  Your funnels capture & convert leads
                </li>
                <li className="text-gray-600 text-">
                  Your dashboard gives clarity
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/*outcome section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* LEFT CONTENT */}
            <div>
              {/* Badge */}
              <span className="inline-flex items-center gap-2 mb-8 px-4 py-1 rounded-full border text-sm font-medium">
                OUTCOMES
              </span>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-14">
                What Doctors Are <br /> Achieving with Our Growth System
              </h2>

              {/* FAQ List */}
              <div className="space-y-6 max-w-lg">
                <div className="flex items-center gap-4 pb-4 border-b">
                  <HiOutlineQuestionMarkCircle className="text-xl" />
                  <p className="text-lg font-medium">
                    0 - 34 appointments/mo in 60 days (Cardiology)
                  </p>
                </div>

                <div className="flex items-center gap-4 pb-4 border-b">
                  <HiOutlineCog className=" text-xl" />
                  <p className="text-lg font-medium">
                    212% inquiry growth in 90 days (IVF Clinic)
                  </p>
                </div>

                <div className="flex items-center gap-4 pb-4 border-b">
                  <HiOutlineLightningBolt className="text-xl" />
                  <p className="text-lg font-medium">
                    Top 3 GMB ranking in 45 days (Gastro Clinic)
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="/about1.png" // replace with your image
                alt="Upgrade spreadsheet"
                width={800}
                height={900}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/*process section */}
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
      
      {/* why doctor choose us */}
      <section className="bg-linear-to-br from-gray-50 via-blue-50 to-purple-50 py-20 px-16">
        <div className="mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block bg-white rounded-full px-8 py-3 shadow-sm border border-gray-200 mb-8">
              <span className="text-sm font-medium text-gray-900 uppercase tracking-wide">
                WHY DOCTORS CHOOSE US
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              We don't do random
              <br />
              marketing.
            </h1>

            <p className="text-2xl lg:text-3xl text-gray-600 font-semibold max-w-3xl mx-auto">
              We build clinic growth systems that get results.
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-600 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white group-hover:bg-gray-900 transition-colors duration-300">
                    {reason.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-xl font-bold text-gray-900 leading-relaxed">
                      {reason.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="bg-linear-to-r from-blue-400 to-blue-500 rounded-3xl p-12 lg:p-16 shadow-2xl text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to grow your clinic?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join 150+ doctors who've already transformed their practice with
              our proven system.
            </p>
            <button className="bg-white text-blue-600 font-bold text-lg px-10 py-4 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Book Your Free Consultation
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600 text-lg">Doctors Supported</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">6</div>
              <div className="text-gray-600 text-lg">Growth Systems</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600 text-lg">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/*Final CTA */}
      <FinalCTA />
    </main>
  );
}
