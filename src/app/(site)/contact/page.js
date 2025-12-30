"use client";
import { useState } from "react";

import { HiArrowRight } from "react-icons/hi";

import ClinicContactSection from "@/components/Serveces/ContactSection";

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
    document.getElementById("contactForm").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="overflow-hidden">
      <div className="pt-30 bg-linear-to-b from-gray-50 via-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-16 px-6 md:px-8 lg:px-16">
          <div className="mx-auto text-center max-w-5xl">
            <h1
              data-aos="fade-down"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 leading-tight"
            >
              <span className="text-[#155DFC]">Let's Build</span> Your Clinic
              Growth System
            </h1>
            <p
              data-aos="fade-up"
              className="text-lg md:text-xl mb-16 opacity-95 max-w-3xl mx-auto text-gray-500"
            >
              Have questions? Want to understand how our 6-system framework
              works for your specialty? Fill the form below and get a
              personalized clinic growth strategy.
            </p>
            <div
              data-aos="fade-up"
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button
                onClick={scrollToForm}
                className="flex items-center gap-3 px-6 py-2.5 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                Book Free Strategy Session
                <span className="w-9 h-9 rounded-full bg-white text-blue-600 flex items-center justify-center">
                  <HiArrowRight />
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Value Block Section */}
        <section className="py-16 px-6 md:px-8 lg:px-16 bg-white">
          <div className="mx-auto max-w-7xl">
            <h2
              data-aos="flip-up"
              className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-16"
            >
              Why Doctors Contact Us
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-x-16 mb-8">
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
                  data-aos="flip-up"
                  className="bg-gray-50 p-8 rounded-xl shadow-lg border-l-4 border-[#2563EB] hover:shadow-2xl transition-shadow duration-300"
                >
                  <p className="text-gray-700 font-medium text-lg">{item}</p>
                </div>
              ))}
            </div>
            <p
              data-aos="fade-down"
              className="text-center text-gray-500 text-2xl mt-12"
            >
              Whether you're just getting started or looking to scale{" "}
              <br className="hidden md:block" /> we're here to help.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <ClinicContactSection />
      </div>
    </main>
  );
}
