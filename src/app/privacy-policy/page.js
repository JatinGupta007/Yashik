
"use client";

import { HiOutlineMailOpen } from "react-icons/hi";
import { LiaPhoneAltSolid } from "react-icons/lia";
import { CgWebsite } from "react-icons/cg";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-soft-white text-dark-charcoal">
      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-6 flex flex-col items-center justify-center relative overflow-hidden mb-16 min-h-screen">
        <div className="absolute inset-0 bg-jet-black/10"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-7 mt-28">
            Privacy Policy
          </h1>

          <div className="text-center">
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
              At Yashik Yadav & Co., we value your trust and are committed to
              protecting your privacy.
            </p>
          </div>
          <p className="text-lg md:text-xl mb-8 opacity-95 max-w-3xl mx-auto leading-relaxed">
            Last Updated: 15-12-2025
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="px-6 lg:px-16 mx-auto space-y-16">
        {/* Intro Paragraphs */}
        <ul className="bg-soft-white rounded-3xl shadow-lg p-7 lg:p-10 border border-[#2563EB] list-disc">
          <li className="text-lg text-cool-gray mb-6 ">
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website or use our
            digital marketing, advertising, automation, and consulting services.
          </li>
          <li className="text-lg font-semibold text-dark-charcoal">
            By accessing or using our website and services, you agree to the
            terms of this Privacy Policy.
          </li>
        </ul>
        {/* 1. Information We Collect */}
        <div className="bg-soft-white rounded-3xl shadow-lg px-10 lg:px-12 py-5 border-l-8 border-[#2563EB] hover:shadow-xl transition-all duration-300">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-charcoal mb-5 flex items-center gap-4">
            <span className="w-10 h-10 bg-[#2563EB] text-white rounded-2xl flex items-center justify-center text-lg font-bold">
              01
            </span>
            Information We Collect
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-electric-blue mb-4 ml-3">
                a. Personal Information
              </h3>
              <ul className="space-y-3 text-cool-gray">
                <li className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl  transition-all">
                  <span className="w-6 h-6 bg-electric-blue text-soft-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5 shrink-0">
                    ✓
                  </span>
                  Name, Email address, Phone number
                </li>
                <li className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl hover:bg-electric-blue/5 transition-all">
                  <span className="w-6 h-6 bg-electric-blue text-soft-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5 shrink-0">
                    ✓
                  </span>
                  Company name, Website URL
                </li>
                <li className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl hover:bg-electric-blue/5 transition-all">
                  <span className="w-6 h-6 bg-electric-blue text-soft-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5 shrink-0">
                    ✓
                  </span>
                  Details from contact forms & inquiries
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-cool-gray mb-6">
                b. Non-Personal Information
              </h3>
              <ul className="space-y-3 text-cool-gray">
                <li className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all">
                  <span className="w-6 h-6 bg-cool-gray text-soft-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5 shrink-0">
                    ●
                  </span>
                  IP address, Browser type, Device info
                </li>
                <li className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all">
                  <span className="w-6 h-6 bg-cool-gray text-soft-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5 shrink-0">
                    ●
                  </span>
                  Pages visited, Time spent, Referring URLs
                </li>
              </ul>
              <p className="text-sm text-cool-gray mt-4 italic">
                Used to improve website performance.
              </p>
            </div>
          </div>
        </div>

        {/* 2-5 Grid Sections */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* How We Use */}
          <div className="bg-soft-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-electric-blue/10 hover:border-electric-blue/30">
            <h2 className="text-2xl lg:text-3xl font-bold text-dark-charcoal mb-3 flex items-center gap-3">
              <span className="w-10 h-10 bg-[#2563EB] text-white rounded-xl flex items-center justify-center text-lg font-bold">
                02
              </span>
              How We Use Your Information
            </h2>
            <ul className="space-y-2 text-cool-gray text- list-disc pl-5">
              <li>Respond to inquiries</li>
              <li>Provide & improve services</li>
              <li>Run analytics & advertising</li>
              <li>Send service updates</li>
              <li>Enhance website functionality</li>
              <li>Ensure security</li>
            </ul>
          </div>

          {/* Cookies */}
          <div className="bg-linear-to-br from-electric-blue/5 to-blue-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-[#2563EB]">
            <h2 className="text-2xl lg:text-3xl font-bold text-dark-charcoal mb-3 flex items-center gap-3">
              <span className="w-10 h-10 bg-[#2563EB]  text-white rounded-xl flex items-center justify-center text-lg font-bold">
                03
              </span>
              Cookies & Tracking
            </h2>
            <p className="text-cool-gray mb-4 leading-relaxed">
              We use cookies to analyze traffic, run remarketing campaigns, and
              improve user experience. You can disable cookies in browser
              settings.
            </p>
          </div>

          {/* Third-Party */}
          <div className="bg-soft-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-cool-gray/20">
            <h2 className="text-2xl lg:text-3xl font-bold text-dark-charcoal mb-3 flex items-center gap-3">
              <span className="w-10 h-10 bg-[#2563EB]  text-white rounded-xl flex items-center justify-center text-lg font-bold">
                04
              </span>
              Third-Party Services
            </h2>
            <ul className="space-y-2 text-cool-gray list-disc pl-5 columns-2">
              <li>Google Analytics</li>
              <li>Google Ads</li>
              <li>Meta Ads</li>
              <li>WhatsApp Business</li>
              <li>Email/CRM tools</li>
            </ul>
          </div>

          {/* Data Sharing */}
          <div className="bg-linear-to-br from-electric-blue/5 to-blue-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-6 border-[#2563EB]">
            <h2 className="text-2xl lg:text-3xl font-bold text-dark-charcoal mb-4 flex items-center gap-3">
              <span className="w-10 h-10 bg-[#2563EB] text-white rounded-xl flex items-center justify-center text-lg font-bold">
                05
              </span>
              We Never Sell Data
            </h2>
            <p className="text-lg mb-3">
              Your personal information is{" "}
              <strong>never sold, rented, or traded.</strong>
            </p>
            <p className="text-sm text-cool-gray">
              Shared only when legally required or for service delivery.
            </p>
          </div>
        </div>

        {/* Security & Rights */}
        <div className="bg-linear-to-r from-blue-50 to-blue-200 text-soft-white p-12 lg:p-16 rounded-4xl shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 flex items-center gap-4">
                Data Security
              </h2>
              <p className="text-xl opacity-95 mb-6 leading-relaxed">
                We implement reasonable administrative, technical, and physical
                security measures. No internet transmission is 100% secure.
              </p>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Your Rights
              </h2>
              <ul className="space-y-3 text-lg list-disc pl-7">
                <li>Access your personal data</li>
                <li>Request correction/deletion</li>
                <li>Withdraw marketing consent</li>
                <li>Data retained only as needed</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Policy Updates & Links */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-soft-white rounded-3xl p-10 shadow-xl border border-cool-gray/20">
            <h2 className="text-2xl font-bold text-dark-charcoal mb-6">
              Policy Updates
            </h2>
            <p className="text-cool-gray mb-4">
              We may update this policy. Changes will be posted here with the
              updated date. Continued use means acceptance.
            </p>
          </div>
          <div className="bg-soft-white rounded-3xl p-10 shadow-xl border border-cool-gray/20">
            <h2 className="text-2xl font-bold text-dark-charcoal mb-6">
              External Links
            </h2>
            <p className="text-cool-gray">
              We are not responsible for third-party website privacy practices.
              Please review their policies separately.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section - Matching Contact Page Style */}
      <section className="py-20 px-16 bg-[#e5edfd] mt-16">
        <div className="mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Questions About Privacy?
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Contact us directly for any privacy concerns or to exercise your
            data rights.
          </p>
          <div className="grid lg:grid-cols-3 gap-7 mx-auto">
            <div className="group hover:scale-105 transition-all duration-300 shadow-lg p-6 rounded-3xl bg-[#F8FAFC]">
              <a href="mailto:contact@yashikyadavandco.com" className="block">
                <div className="flex items-center justify-center text-3xl mb-5 text-[#2563EB]">
                  <HiOutlineMailOpen />
                </div>
                <p className="text-xl ">
                  contact@yashikyadavandco.com
                </p>
              </a>
            </div>
            <div className="group hover:scale-105 transition-all duration-300 shadow-lg p-6 rounded-3xl bg-[#F8FAFC]">
              <a href="tel:+919887007362" className="block">
                <div className="flex items-center justify-center text-3xl mb-5 text-[#2563EB]">
                  <LiaPhoneAltSolid />
                </div>
                <p className="text-xl">+91 9887007362</p>
              </a>
            </div>
            <div className="group hover:scale-105 transition-all duration-300 shadow-lg p-6 rounded-3xl bg-[#F8FAFC]">
              <a href="https://yashikyadavandco.com" className="block">
                <div className="flex items-center justify-center text-3xl mb-5 text-[#2563EB]">
                  <CgWebsite />
                </div>
                <p className="text-xl">yashikyadavandco.com</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-electric-blue text-soft-white p-4 rounded-full shadow-2xl hover:shadow-3xl hover:bg-blue-600 transition-all duration-300 z-50 border-2 border-electric-blue/50"
        aria-label="Scroll to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </main>
  );
}
