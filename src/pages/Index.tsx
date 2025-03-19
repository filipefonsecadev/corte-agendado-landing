
import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import HeroSection from "../components/hero/HeroSection";
import FeaturesSection from "../components/features/FeaturesSection";
import PlansSection from "../components/plans/PlansSection";
import BenefitsSection from "../components/benefits/BenefitsSection";
import CTASection from "../components/cta/CTASection";
import Footer from "../components/footer/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate page loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#1A1F2C]">
        <div className="text-center">
          <div className="mb-4 relative">
            <span className="text-3xl font-bold">
              <span className="text-[#4D9EEB]">Corte</span>{" "}
              <span className="text-white">Agendado</span>
            </span>
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-[#6C5CE7] to-[#4D9EEB] mx-auto rounded-full animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1A1F2C]">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PlansSection />
        <BenefitsSection />
        <CTASection />
      </main>
      <Footer />

      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  );
};

// Scroll to top component
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 bg-[#6C5CE7] p-3 rounded-full 
                 shadow-lg text-white transition-opacity duration-300 
                 hover:bg-[#5b4dd1] focus:outline-none z-50
                 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      aria-label="Voltar ao topo"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
    </button>
  );
};

export default Index;
