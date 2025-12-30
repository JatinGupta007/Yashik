"use client";

import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

export default function ClinicContactSection() {
  return (
    <section id="contactForm" className="py-16 px-6 md:px-8 lg:px-16 bg-white">
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT: FORM */}
          <div>
            {/* Tag */}
            <span
              data-aos="fade-right"
              className="inline-block mb-6 px-4 py-2 text-xs font-semibold text-[#155DFC] border border-[#155DFC]/55 rounded-full"
            >
              LET’S TALK
            </span>

            {/* Heading */}
            <h1
              data-aos="fade-right"
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-3"
            >
              Tell Us About <br />
              <span className="text-blue-600">Your Clinic</span>
            </h1>

            <p data-aos="fade-right" className="text-gray-500 mb-10">
              We’ll Create a Custom Growth Plan
            </p>

            {/* Form */}
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Input placeholder="Your Name" />
                <Input placeholder="Email Address" />
                <Input placeholder="Clinic / Hospital Name" />
                <Input placeholder="Specialty" />
                <Input placeholder="City / Location" />
                <Input placeholder="Preferred Time to Connect" />
              </div>

              <textarea
                data-aos="zoom-in"
                placeholder="What’s your biggest growth challenge?"
                className="w-full h-36 rounded-xl border border-blue-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-200 shadow-[0_0_25px_rgba(0,0,0,0.12)]"
              />

              <div
                data-aos="fade-left"
                className="flex items-center gap-3 text-sm text-gray-600"
              >
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded"
                />
                <span>Request a Free Clinic Audit</span>
              </div>

              <button
                data-aos="fade-left"
                type="submit"
                className="mt-6 inline-flex items-center gap-4 bg-black text-white
                            px-6 py-3 rounded-full font-semibold
                          hover:bg-gray-900 transition"
              >
                Request My Free Strategy Session
                <span className="bg-blue-600 p-2 rounded-full">
                  <HiArrowRight className="text-white" />
                </span>
              </button>
            </form>
          </div>

          {/* RIGHT: IMAGE + CONTACT */}
          <div className="space-y-8">
            <div
              data-aos="zoom-out"
              className="rounded-xl overflow-hidden border border-blue-300 shadow-md"
            >
              <Image
                src="/img3.png" // replace with your image
                alt="Consultation"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>

            <div data-aos="zoom-in">
              <h3 className="font-semibold text-gray-900 mb-2 text-xl">
                Prefer to Talk Directly?
              </h3>

              <div className="text-lg font-medium text-gray-600 space-y-1">
                <p>info@yashikyadav.co</p>
                <p>+91 9887007362</p>
                <p className="flex items-center gap-3">
                  Chat Now <FaWhatsapp className="text-green-500 text-[20px]" />
                </p>
              </div>

              <div className="mt-2 text-lg text-gray-700 font-medium">
                <p>Yashik Yadav and Co.</p>
                <p>Jaipur, Rajasthan</p>
              </div>

              <p className="mt-2 text-lg text-gray-500 underline font-medium">
                Available: Monday - Saturday, 10 AM - 7 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Reusable Input */
function Input({ placeholder }) {
  return (
    <input
      data-aos="zoom-in"
      type="text"
      placeholder={placeholder}
      className="w-full rounded-xl border border-blue-300 px-4 py-3 text-sm
                  outline-none focus:ring-2 focus:ring-blue-200 shadow-lg"
    />
  );
}
