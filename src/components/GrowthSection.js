"use client";
import { useState, useRef, useEffect } from "react";
import { HiArrowRight, HiCheck } from "react-icons/hi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


export default function ProcessSection({steps}) {
  const [selectedStep, setSelectedStep] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const autoplayRef = useRef(null);

  // Responsive card sizes
  const getCardSize = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 300; // Mobile
      if (window.innerWidth < 1024) return 420; // Tablet
      return 420; // Desktop
    }
    return 420;
  };

  const [CARD_SIZE, setCardSize] = useState(getCardSize());
  const SIDE_SCALE = isMobile ? 0.9 : 0.85;
  const SIDE_OPACITY = isMobile ? 0.3 : 0.5;
  const GAP = isMobile ? 20 : 40; // px

  // Handle responsive card size
  useEffect(() => {
    const handleResize = () => {
      setCardSize(getCardSize());
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (isAutoplay && steps.length > 0) {
      autoplayRef.current = setInterval(() => {
        setSelectedStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
      }, 2000); // 2 seconds interval
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isAutoplay, steps.length]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setIsAutoplay(false);
  const handleMouseLeave = () => setIsAutoplay(true);

  const goToPrev = () => {
    if (steps.length > 0) {
      setSelectedStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
      setIsAutoplay(false);
    }
  };

  const goToNext = () => {
    if (steps.length > 0) {
      setSelectedStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
      setIsAutoplay(false);
    }
  };

  return (
    <section className="relative bg-linear-to-b from-blue-50 via-white to-gray-50 py-12 md:py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Badge */}
        <div data-aos="fade-down" className="flex justify-center mb-8 md:mb-12">
          <div className="bg-white/80 backdrop-blur-sm border border-gray-300 rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span className="text-gray-600 text-sm uppercase">
              Our Process
            </span>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center mb-12 md:mb-16 px-6">
          <h2
            data-aos="fade-down"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-400">
              {steps.length}-Step
            </span>{" "}
            Clinic Growth System
          </h2>
          <p
            data-aos="fade-down"
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mt-4"
          >
            A proven framework that transforms your clinic's online presence
            into a patient magnet
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative w-full flex flex-col items-center max-w-7xl mx-auto"
          data-aos="zoom-in"
          style={{
            height: isMobile ? `${CARD_SIZE + 100}px` : `${CARD_SIZE + 100}px`,
            minHeight: isMobile
              ? `${CARD_SIZE + 100}px`
              : `${CARD_SIZE + 100}px`,
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Carousel */}
          <div
            className="relative flex items-center justify-center w-full overflow-hidden"
            style={{
              height: `${CARD_SIZE}px`,
              minHeight: `${CARD_SIZE}px`,
            }}
          >
            {/* Left Arrow */}
            <button
              onClick={goToPrev}
              className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white shadow-xl text-blue-600 p-2 sm:p-3 md:p-4 rounded-full hover:bg-blue-50 transition-all duration-300 z-20 focus:outline-none hover:scale-110"
              aria-label="Previous step"
            >
              <FaChevronLeft className="text-lg sm:text-xl md:text-2xl" />
            </button>

            {/* Cards Container */}
            <div
              className="relative w-full flex items-center justify-center"
              style={{ height: `${CARD_SIZE}px` }}
            >
              {steps.length > 0 &&
                steps.map((step, idx) => {
                  const offset = idx - selectedStep;
                  // On mobile, only show center and 1 side. On desktop, show center and 2 sides
                  const maxVisible = isMobile ? 1 : 2;
                  if (Math.abs(offset) > maxVisible) return null;

                  let scale = 1;
                  let opacity = 1;
                  let zIndex = 10 - Math.abs(offset);
                  let translateX =
                    offset * (CARD_SIZE * (isMobile ? 0.85 : 0.75) + GAP);

                  if (offset === -2 || offset === 2) {
                    scale = SIDE_SCALE * 0.9;
                    opacity = SIDE_OPACITY * 0.6;
                  } else if (offset === -1 || offset === 1) {
                    scale = SIDE_SCALE;
                    opacity = SIDE_OPACITY;
                  }

                  return (
                    <div
                      key={idx}
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: "0",
                        width: `${CARD_SIZE}px`,
                        height: `${CARD_SIZE}px`,
                        transform: `
                          translateX(${translateX - CARD_SIZE / 2}px)
                          scale(${scale})
                        `,
                        transition:
                          "transform 0.5s cubic-bezier(.25,.8,.25,1), opacity 0.5s",
                        zIndex,
                        opacity,
                        boxShadow:
                          offset === 0
                            ? "0 20px 60px rgba(59, 130, 246, 0.3)"
                            : "0 8px 20px rgba(0,0,0,0.1)",
                        cursor: offset === 0 ? "default" : "pointer",
                        background:
                          "linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%)",
                        borderRadius: "1.5rem",
                        overflow: "hidden",
                        border: offset === 0 ? "1px solid #3b82f6" : "none",
                      }}
                      onClick={() => {
                        if (offset !== 0) {
                          setSelectedStep(idx);
                          setIsAutoplay(false);
                        }
                      }}
                    >
                      <div className="p-4 sm:p-6 md:p-8 h-full flex flex-col justify-between">
                        {/* Step Number Badge */}
                        <div className="flex items-center justify-between mb-4 md:mb-6">
                          <div className="bg-linear-to-r from-blue-600 to-blue-500 text-white rounded-full px-3 sm:px-4 md:px-5 py-1.5 md:py-2 shadow-lg">
                            <span className="text-xs sm:text-sm font-bold tracking-wide">
                              {step.number}
                            </span>
                          </div>
                          <div className="bg-blue-600/10 rounded-full p-1.5 md:p-2">
                            <div
                              className={`w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-600 rounded-full ${
                                offset === 0 ? "animate-pulse" : ""
                              }`}
                            ></div>
                          </div>
                        </div>

                        {/* Step Title */}
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
                          {step.title}
                        </h3>

                        {/* Step Description */}
                        <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed mb-4 md:mb-6 grow">
                          {step.description}
                        </p>

                        {/* Features List */}
                        <div className="space-y-1.5 md:space-y-2 mb-4 md:mb-6">
                          {step.features.map((feature, i) => (
                            <div
                              key={i}
                              className="flex items-center space-x-2 md:space-x-3"
                            >
                              <div className="bg-blue-600 rounded-full p-0.5 md:p-1 shrink-0">
                                <HiCheck className="text-white w-2.5 h-2.5 md:w-3 md:h-3" />
                              </div>
                              <span className="text-xs md:text-sm text-gray-600 font-medium">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Get Started Button */}
                        <button
                          className={`w-full bg-linear-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-between group text-sm md:text-base ${
                            offset === 0 ? "transform hover:scale-105" : ""
                          }`}
                        >
                          <span>Get Started</span>
                          <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform text-base md:text-lg" />
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>

            {/* Right Arrow */}
            <button
              onClick={goToNext}
              className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white shadow-xl text-blue-600 p-2 sm:p-3 md:p-4 rounded-full hover:bg-blue-50 transition-all duration-300 z-20 focus:outline-none hover:scale-110"
              aria-label="Next step"
            >
              <FaChevronRight className="text-lg sm:text-xl md:text-2xl" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 md:mt-8 space-x-2 md:space-x-3">
            {steps.length > 0 &&
              steps.map((_, index) => (
                <button
                  key={index}
                  className={`rounded-full transition-all duration-300 ${
                    selectedStep === index
                      ? "bg-blue-600 w-6 md:w-8 h-2.5 md:h-3"
                      : "bg-blue-200 hover:bg-blue-300 w-2.5 md:w-3 h-2.5 md:h-3"
                  }`}
                  onClick={() => {
                    setSelectedStep(index);
                    setIsAutoplay(false);
                  }}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
