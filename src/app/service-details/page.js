"use client";

import { useState } from "react";
import Image from "next/image";

import GrowthSection from "@/components/GrowthSection";
import FinalCTA from "@/components/FinalCTA";

import {
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
  HiOutlineLightningBolt,
  HiArrowRight,
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
import SixCoreServices from "@/components/ServeceDetails/SixCoreServices";
import SystemGrowthSection from "@/components/ServeceDetails/SystemGrowth";
import GrowthResultsSection from "@/components/ServeceDetails/ResultSection";
import WhyDoctorsChooseUs from "@/components/ServeceDetails/WhyChooseUs";
import ClinicContactSection from "@/components/ServeceDetails/ContactSection";
import FounderSection from "@/components/FounderSection";

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
      <section className="bg-linear-to-b from-white to-gray-50 py-12 md:py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto mt-30">
          {/* Images Row */}
          <div className="flex  gap-3 md:gap-3 mb-12 md:mb-20">
            {/* First Image */}
            <div className="relative h-64 md:h-80 lg:h-110 w-200 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/img1.png" // Replace with your image path
                alt="Team collaboration"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Second Image */}
            <div className="relative h-64 md:h-80 lg:h-110 w-116 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/img2.png" // Replace with your image path
                alt="Team meeting"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-8 md:mb-12 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-gray-900">
                Everything You Need to Build a{" "}
              </span>
              <span className="text-blue-600">
                Trusted, Visible & Fast-Growing
              </span>
              <span className="text-gray-900"> Clinic</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg lg:text-xl max-w-5xl mx-auto leading-relaxed">
              Our 6-system approach helps private-practice doctors attract more
              patients, increase trust, dominate local search, and automate
              follow-ups for consistent appointment growth.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mb-10 md:mb-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 md:font-bold md:py-4 md:px-8 rounded-full flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
              <span className="text-base md:text-lg">
                Get Your Personalized Growth Plan
              </span>
              <div className="bg-blue-500 rounded-full p-2 group-hover:translate-x-1 transition-transform">
                <HiArrowRight className="text-xl" />
              </div>
            </button>
          </div>

          {/* Divider Line */}
          <div className="w-full h-px bg-gray-200 mb-8 md:mb-10"></div>

          {/* Bottom Section */}
          <div className="text-center px-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8">
              Doctors don&apos;t need unlimited services.
            </h3>
            <p className="text-gray-600 text-base md:text-lg lg:text-xl max-w-5xl mx-auto leading-relaxed mb-8 md:mb-10">
              They need a focused, predictable system that grows their patient
              flow month after month. That&apos;s why we built six powerful,
              interlinked growth engines - each created to solve a specific
              challenge doctors face online.
            </p>
            <p className="text-gray-900 text-lg md:text-xl font-semibold">
              Together, they form your Complete Clinic Growth System.
            </p>
          </div>
        </div>
      </section>

      {/* intro section */}
      <SixCoreServices />

      <SystemGrowthSection />

      {/*Growth section */}
      <GrowthSection pillars={pillars} />

      {/*outcome section */}
      <GrowthResultsSection />

      {/* why doctor choose us */}
      <WhyDoctorsChooseUs />

      <FounderSection />

      <ClinicContactSection />

      {/*Final CTA */}
      <FinalCTA />
    </main>
  );
}
