
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
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" 
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-5 z-0"></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center bg-white/70 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-card">
          <h2 
            ref={headingRef}
            className="text-3xl md:text-4xl font-bold mb-4 opacity-0"
          >
            Pronto para transformar sua barbearia?
          </h2>
          <p 
            ref={textRef}
            className="text-lg text-gray-600 mb-8 opacity-0"
          >
            Comece hoje mesmo e experimente o Corte Agendado por 30 dias grátis.
          </p>
          <a
            ref={buttonRef}
            href="#plans"
            className="primary-button inline-flex items-center gap-2 opacity-0 group"
          >
            Experimente Grátis Agora
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
