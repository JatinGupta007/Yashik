import FinalCTA from "@/components/FinalCTA";
import GrowthSection from "@/components/GrowthSection";
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

  image: "/home4.png",

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
        <div className="mx-auto px-6 pt-24 pb-16 text-center bg-linear-to-br from-blue-50 via-blue-100 to-blue-100">
          {/* Badge */}
          <div className="mt-16 inline-flex items-center px-4 py-1 rounded-full border border-blue-300 bg-white text-sm font-medium text-blue-700 mb-6">
            ABOUT COMPANY
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            We Help Doctors Build <br className="hidden md:block" />
            Visibility, Authority & Predictable{" "}
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-40">
            <button className="flex items-center gap-3 px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              Book Free Strategy Session
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

      {/*Story Section */}
      <section className="py-16 px-16 bg-white">
        <div className="max-w-7xl mx-auto space-y-28">
          {/* ROW 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <HiOutlineBadgeCheck className="text-blue-600 text-3xl mb-4" />

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why We Started This Agency
              </h2>

              <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
                <p>Most doctors don’t struggle because they lack skill.</p>

                <p>
                  They struggle because the online world doesn’t reflect how
                  good they truly are.
                </p>

                <p className="font-medium text-gray-800">
                  Patients today choose doctors based on:
                </p>

                <ul className="space-y-2 pl-5 list-disc">
                  <li>Who ranks higher</li>
                  <li>Who has better reviews</li>
                  <li>Who appears more trustworthy</li>
                  <li>Who explains things better</li>
                  <li>Who shows up consistently online</li>
                </ul>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/about1.png"
                alt="Doctors collaboration"
                width={700}
                height={800}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* ROW 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg order-2 lg:order-1">
              <Image
                src="/about2.png"
                alt="Clinic growth discussion"
                width={700}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2">
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
      <section className="relative bg-white py-16 px-16">
        <div className="mx-auto">
          {/* Top Badge */}
          <div className="flex justify-center mb-6">
            <span className="px-5 py-2 rounded-full border text-sm font-medium">
              MEET THE FOUNDER
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-center text-4xl md:text-5xl font-bold mb-10">
            Meet "Yashik Yadav" <br />
            Founder - Clinic Growth Strategist
          </h2>

          {/* Grid */}
          <div className="flex gap-6 items-center">
            {/* LEFT COLUMN */}
            <div className="space-y-8 w-130">
              <div className="border rounded-2xl p-6">
                <p className="text-lg  mb-3">
                  They were losing patients to competitors who
                </p>
                <li className="text-[#6B7280] ml-4 mb-2">
                  Looked more credible online
                </li>
                <li className="text-[#6B7280] ml-4">
                  Followed up with leads instantly
                </li>
                <Image
                  src="/about4.png"
                  width={240}
                  height={50}
                  alt="img"
                  className="mx-auto mt-3"
                />
              </div>

              <div className="border rounded-2xl p-6">
                <Image
                  src="/about3.png"
                  width={150}
                  height={50}
                  alt="img"
                  className="mx-auto mb-3"
                />
                <li className="text-[#6B7280] ml-4 mb-2">
                  Had stronger reputations
                </li>
                <li className="text-[#6B7280] ml-4 mb-2">
                  Followed up with leads instantly
                </li>
                <li className="list-none">
                  So I built a simple, proven, repeatable system
                </li>
              </div>
            </div>

            {/* CENTER IMAGE */}
            <div className="border rounded-3xl p-6 shadow-sm w-200">
              <Image
                src="/about2.png"
                alt="Clinic Growth Dashboard"
                width={300}
                height={300}
                className="object-cover mx-auto rounded-xl"
              />
              <h3 className="text-2xl font-semibold mt-6 mb-3">
                About Yashik Yadav
              </h3>
              <p className="text-[#6B7280] mb-4">
                Over the last 5+ years, I’ve worked exclusively with doctors
                across India - from cardiologists and gynecologists to IVF
                specialists and surgeons.
              </p>
              <p className="text-xl font-semibold mb-3">
                I saw a repeated pattern:
              </p>
              <p className="text-[#6B7280] mb-1">
                Doctors were great at what they did… but their online presence
                didn’t represent it.
              </p>
              <p>
                a 6-pillar clinic growth framework that delivers consistent
                appointments month after month.
              </p>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-6">
              <div className="border rounded-2xl px-6 py-3">
                <li className="mb-3 list-none text-lg">
                  Founder Micro Credibility Stats
                </li>
                <li className="text-[#6B7280] ml-4 mb-2">
                  Had stronger reputations
                </li>

                <li className="text-[#6B7280] ml-4 mb-2">
                  Helped 150+ doctors grow their clinics
                </li>
                <Image
                  src="/about3.png"
                  width={150}
                  height={50}
                  alt="img"
                  className="mx-auto mb-3"
                />
              </div>

              <div className="border rounded-2xl p-6">
                <Image
                  src="/about4.png"
                  width={210}
                  height={50}
                  alt="img"
                  className="mx-auto mt-3"
                />
                <li className="text-[#6B7280] ml-4 mb-2">
                  Experience in healthcare marketing, patient acquisition &
                  automation
                </li>
                <li className="text-[#6B7280] ml-4 mb-2">
                  Runs "Saaro Health", a healthcare technology + EMR company
                </li>
                <li className="text-[#6B7280] ml-4 mb-2">
                  Trained under Avi Arya, one of India’s top digital agency
                  mentors
                </li>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deferences section */}
      <section className="pb-16 pt-7 bg-white">
        <div className="mx-auto px-16">
          {/* Badge */}
          <span className="inline-block mb-6 px-4 py-1 rounded-full border text-sm font-medium">
            OUR DEFFERENCES
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-16 max-w-3xl leading-tight">
            We Don’t “Do Marketing” - Build
            <br />
            Growth Foundations
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start relative">
            {/* LEFT IMAGE */}
            <div className="rounded-3xl sticky top-1">
              <Image
                src="/about2.png" // replace with your image
                alt="Team discussion"
                width={800}
                height={900}
                className="w-full h-full object-cover rounded-2xl"
                priority
              />
            </div>

            {/* RIGHT TIMELINE */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-20">
                {items.map((item, i) => (
                  <div key={i}>
                    {/* Icon box */}
                    <div className="w-14 h-14 rounded-xl bg-blue-500 flex items-center justify-center text-white text-2xl mb-6">
                      {item.icon}
                    </div>

                    {/* Text */}
                    <p className="text-lg font-semibold mb-2">{item.title}</p>
                    <p className="text-gray-600 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-16">
                <p className="text-xl font-semibold mb-1">
                  Our goal is simple:
                </p>
                <p className="text-gray-600">
                  Make you the most trusted doctor in your specialty and city.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/*Growth section */}
      <GrowthSection pillars={pillars} />

      {/*social proof section */}
      <section className="py-16 bg-white">
        <div className="mx-auto px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start relative">
            {/* LEFT CONTENT */}
            <div className="sticky top-1">
              {/* Badge */}
              <span className="inline-block mb-6 px-4 py-1 rounded-full border text-sm font-medium">
                SOCIAL PROOFS
              </span>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Results That Speak <br /> for Themselves.
              </h2>

              {/* Description */}
              <ul className="mb-10 space-y-2">
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
              <button className="inline-flex text-white items-center gap-5 px-7 py-3 rounded-full border font-medium bg-blue-600 transition">
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
