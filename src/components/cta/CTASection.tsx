
import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (textRef.current) observer.observe(textRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);

  return (
    <section 
      id="contact" 
      className="py-20 bg-[#1A1F2C] relative overflow-hidden" 
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-[url('/lovable-uploads/792cee7d-04bb-4771-8d60-9eab20dda90e.png')] bg-cover bg-center opacity-5 z-0"></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center bg-[#1A1F2C]/70 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-lg border border-[#2A3042]/50">
          <h2 
            ref={headingRef}
            className="text-3xl md:text-4xl font-bold mb-4 opacity-0 text-[#4D9EEB]"
          >
            Pronto para transformar sua barbearia?
          </h2>
          <p 
            ref={textRef}
            className="text-lg text-gray-300 mb-8 opacity-0"
          >
            Comece hoje mesmo e experimente o Corte Agendado por 30 dias grátis.
          </p>
          <a
            ref={buttonRef}
            href="#plans"
            className="bg-[#6C5CE7] hover:bg-[#5b4dd1] text-white font-medium py-3 px-8 rounded-full inline-flex items-center gap-2 opacity-0 group transition-all duration-300"
          >
            Experimente Grátis por 30 Dias
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
