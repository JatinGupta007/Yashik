"use client";

import { useState } from "react";
import Image from "next/image";

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
import SixCoreServices from "@/components/Serveces/SixCoreServices";
import SystemGrowthSection from "@/components/Serveces/SystemGrowth";
import GrowthResultsSection from "@/components/Serveces/ResultSection";
import WhyDoctorsChooseUs from "@/components/Serveces/WhyChooseUs";
import ClinicContactSection from "@/components/Serveces/ContactSection";
import FounderSection from "@/components/FounderSection";
import ProcessSection from "@/components/GrowthSection";

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
    number: "Step 1",
    title: "Audit",
    description:
      "We deeply audit your clinic’s online presence, competitors, reviews, website performance, funnels, and Google visibility.",
    features: [
      "Online Presence Audit",
      "Competitor Benchmarking",
      "SEO & GMB Review",
    ],
  },
  {
    number: "Step 2",
    title: "Strategy",
    description:
      "We design a clear, data-backed growth strategy tailored to your specialty, city, and patient search intent.",
    features: [
      "Custom Growth Strategy",
      "Patient Intent Mapping",
      "Channel Prioritization",
    ],
  },
  {
    number: "Step 3",
    title: "Implementation",
    description:
      "We implement all systems end-to-end and manage your clinic’s digital growth foundation completely.",
    features: [
      "System Setup & Integration",
      "Website & Funnel Launch",
      "Reputation & SEO Activation",
    ],
  },
  {
    number: "Step 4",
    title: "Optimization",
    description:
      "We continuously monitor performance, analyze data weekly, and optimize for consistent patient growth.",
    features: [
      "Weekly Performance Tracking",
      "Conversion Optimization",
      "Ongoing Improvements",
    ],
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

export default function Services() {

  return (
    <main className="overflow-hidden">
      <section className="bg-linear-to-b from-white to-gray-50 py-12 md:py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto mt-30">
          {/* Images Row */}
          <div className="flex  gap-3 md:gap-3 mb-12 md:mb-20">
            {/* First Image */}
            <div
              data-aos="fade-right"
              className="relative h-64 md:h-80 lg:h-110 w-200 rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src="/service.png" // Replace with your image path
                alt="Team collaboration"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Second Image */}
            <div
              data-aos="fade-left"
              className="relative h-64 md:h-80 lg:h-110 w-116 rounded-xl overflow-hidden shadow-xl"
            >
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
            <h2
              data-aos="fade-up"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="text-gray-900">
                Everything You Need to Build a{" "}
              </span>
              <span className="text-blue-600">
                Trusted, Visible & Fast-Growing
              </span>
              <span className="text-gray-900"> Clinic</span>
            </h2>
            <p
              data-aos="fade-up"
              className="text-gray-600 text-base md:text-lg lg:text-xl max-w-5xl mx-auto leading-relaxed"
            >
              Our 6-system approach helps private-practice doctors attract more
              patients, increase trust, dominate local search, and automate
              follow-ups for consistent appointment growth.
            </p>
          </div>

          {/* CTA Button */}
          <div
            data-aos="fade-up"
            className="flex justify-center mb-10 md:mb-12"
          >
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
            <h3
              data-aos="fade-down"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8"
            >
              Doctors don&apos;t need unlimited services.
            </h3>
            <p
              data-aos="fade-down"
              className="text-gray-600 text-base md:text-lg lg:text-xl max-w-5xl mx-auto leading-relaxed mb-8 md:mb-10"
            >
              They need a focused, predictable system that grows their patient
              flow month after month. That&apos;s why we built six powerful,
              interlinked growth engines - each created to solve a specific
              challenge doctors face online.
            </p>
            <p
              data-aos="fade-down"
              className="text-gray-900 text-lg md:text-xl font-semibold"
            >
              Together, they form your Complete Clinic Growth System.
            </p>
          </div>
        </div>
      </section>

      {/* intro section */}
      <SixCoreServices />

      {/*Growth Section */}
      <SystemGrowthSection />

      {/*Process section */}
      <ProcessSection steps={steps} />

      {/*outcome section */}
      <GrowthResultsSection />

      {/* why doctor choose us */}
      <WhyDoctorsChooseUs />

      <FounderSection />

      {/*Contact Section */}
      <ClinicContactSection />

      {/*Final CTA */}
      <FinalCTA />
    </main>
  );
}
