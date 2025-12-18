/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { LiaPhoneAltSolid } from "react-icons/lia";
import { GoPencil } from "react-icons/go";
import { FaRegHospital } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { CiStethoscope } from "react-icons/ci";
import { IoIosTimer } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    clinicName: "",
    specialty: "",
    city: "",
    phone: "",
    email: "",
    preferredTime: "",
    challenge: "",
    requestAudit: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const specialties = [
    "Select Specialty",
    "Dermatology",
    "Orthopedics",
    "Cardiology",
    "Pediatrics",
    "Gynecology",
    "Dentistry",
    "ENT",
    "Ophthalmology",
    "General Practice",
    "Other",
  ];

  const timeSlots = [
    "Select Preferred Time",
    "Morning (10 AM - 12 PM)",
    "Afternoon (12 PM - 4 PM)",
    "Evening (4 PM - 7 PM)",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert("Form submitted successfully! We will contact you soon.");
      setIsSubmitting(false);
      // Reset form
      setFormData({
        fullName: "",
        clinicName: "",
        specialty: "",
        city: "",
        phone: "",
        email: "",
        preferredTime: "",
        challenge: "",
        requestAudit: false,
      });
    }, 1500);
  };

  const scrollToForm = () => {
    document.getElementById("contact-form").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="min-h-screen bg-black pt-30">
        {/* Hero Section */}
        <section className="bg-black text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Let's Build Your Clinic Growth System
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-95 max-w-3xl mx-auto">
              Have questions? Want to understand how our 6-system framework
              works for your specialty? Fill the form below and get a
              personalized clinic growth strategy.
            </p>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center text-white bg-[#2563EB] px-8 py-4 rounded-full hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Book Free Strategy Session
            </button>
          </div>
        </section>

        {/* Value Block Section */}
        <section className="py-16 px-16 bg-white">
          <div className="mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Why Doctors Contact Us
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mb-8">
              {[
                "To increase patient flow",
                "To fix reputation or bad reviews",
                "To rank higher on Google",
                "To improve conversions from their website",
                "To automate follow-ups & reduce no-shows",
                "To get clarity on patient acquisition",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl shadow-lg border-l-4 border-[#2563EB] hover:shadow-2xl transition-shadow duration-300"
                >
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 text-lg mt-12">
              Whether you're just getting started or looking to scale - we're
              here to help.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-gray-50 px-6">
          <div className="mx-auto">
            <div className="flex gap-8">
              {/* Left Side - Form */}
              <div className="bg-white px-8 rounded-2xl max-w-3xl">
                <div className="mb-8">
                  <span className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    LET'S TALK
                  </span>
                  <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Tell Us About Your Clinic - We’ll Create a Custom Growth
                    Plan
                  </h1>
                </div>

                <form
                  id="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-4 pb-16"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Your Name */}
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="w-full px-4 py-4 pr-12 bg-gray-50 border-0 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all outline-none"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <FaRegUser />
                      </span>
                    </div>

                    {/* Your Email */}
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className="w-full px-4 py-4 pr-12 bg-gray-50 border-0 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all outline-none"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <HiOutlineMailOpen />
                      </span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 items-baseline">
                    {/* Your Phone */}
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your Phone"
                        required
                        className="w-full px-4 py-4 pr-12 bg-gray-50 border-0 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all outline-none"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <LiaPhoneAltSolid />
                      </span>
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        name="clinicName"
                        value={formData.clinicName}
                        onChange={handleChange}
                        placeholder="Clinic Name"
                        required
                        className="w-full px-4 py-4 pr-12 bg-gray-50 border-0 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all outline-none"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <FaRegHospital />
                      </span>
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Your location"
                        required
                        className="w-full px-4 py-4 pr-12 bg-gray-50 border-0 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all outline-none"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <SlLocationPin />
                      </span>
                    </div>

                    {/* Reason for enquiry */}
                    <div className="relative">
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 pr-12 bg-gray-50 border-0 rounded-xl text-gray-900 appearance-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all outline-none"
                      >
                        {timeSlots.map((slot, index) => (
                          <option key={index} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                        <IoIosTimer />
                      </span>
                    </div>
                  </div>

                  <div className="relative">
                    <select
                      name="specialty"
                      value={formData.specialty}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 pr-12 bg-gray-50 border-0 rounded-xl text-gray-900 appearance-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all outline-none"
                    >
                      {specialties.map((spec, index) => (
                        <option key={index} value={spec}>
                          {spec}
                        </option>
                      ))}
                    </select>
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                      <CiStethoscope />
                    </span>
                  </div>
                  <div className="flex items-center ml-2w-full px-4 py-4 pr-12 bg-gray-50 border-0 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all outline-none">
                    <input
                      type="checkbox"
                      name="requestAudit"
                      checked={formData.requestAudit}
                      onChange={handleChange}
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="requestAudit"
                      className="ml-2 block text-gray-900"
                    >
                      Request a Free Clinic Audit
                    </label>
                  </div>

                  {/* Tell us about your project */}
                  <div className="relative">
                    <textarea
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      placeholder="What’s your biggest growth challenge?"
                      rows="2"
                      required
                      className="w-full px-4 py-4 pr-12 bg-gray-50 border-0 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all outline-none resize-none"
                    ></textarea>
                    <span className="absolute right-4 top-4 text-gray-400">
                      <GoPencil />
                    </span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="bg-black text-white font-medium py-4 px-8 rounded-xl hover:bg-gray-800 transition-colors duration-300"
                  >
                    Request My Free Strategy Session
                  </button>
                </form>
              </div>

              {/* Right Side - Contact Info & Images */}
              <div className="">
                {/* Images Section */}

                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=500&fit=crop"
                    alt="Person working"
                    className="object-cover h-100 w-full"
                  />
                </div>

                {/* Contact Details */}
                <div className="bg-white p-8 rounded-2xl flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Hate contact forms? Contact us directly
                  </h3>

                  <div className="space-y-3">
                    <a
                      href="mailto:info@saliver.com"
                      className="block text-gray-700 hover:text-purple-600 transition-colors"
                    >
                      info@yashikyadav.co
                    </a>

                    <a
                      href="tel:+1234567890"
                      className="block text-gray-700 hover:text-purple-600 transition-colors"
                    >
                      +91 9887007362
                    </a>
                    <p className="text-gray-700">
                      Available: Monday-Saturday, 10 AM - 7 PM{" "}
                    </p>

                    <div className="pt-4 border-t border-gray-200 mt-6 ml-36">
                      <p className="font-semibold text-gray-900">
                        Yashik Yadav & Co
                      </p>
                      <p className="text-gray-600 mt-2">
                        123 Coly new road, Horwich
                        <br />
                        Bolton, BL7 9QN
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 bg-gray-900 text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-colors z-50"
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
        </section>

        {/* Trust Booster Section */}
        <section className="py-16 px-6 bg-[#e5edfd]">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
              You're in Good Hands
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-5xl mb-4 flex items-center justify-center text-amber-500">
                  <FaStar />
                </div>
                <div className="text-3xl font-bold mb-2">4.9</div>
                <div className="text-gray-700">Average Rating by Doctors</div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-5xl mb-4 flex items-center justify-center text-[#9fe870]">
                  <FaRegHospital />
                </div>
                <div className="text-3xl font-bold mb-2">150+</div>
                <div className="text-gray-700">Clinics Supported</div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-5xl mb-4 flex items-center justify-center text-purple-600">
                  <BsGraphUpArrow />
                </div>
                <div className="text-2xl font-bold mb-2">Proven</div>
                <div className="text-gray-700">6-System Growth Model</div>
              </div>
            </div>
            <p className="text-gray-600 text-lg">
              We work exclusively with private-practice doctors and specialty
              clinics across India.
            </p>
          </div>
        </section>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg=[#9fe870] text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-300"
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
      </div>
    </>
  );
}
