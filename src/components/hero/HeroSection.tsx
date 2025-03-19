
import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const elementRefs = useRef<(HTMLElement | null)[]>([]);

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

    elementRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#1A1F2C]">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/792cee7d-04bb-4771-8d60-9eab20dda90e.png')] bg-cover bg-center opacity-5 z-0"></div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-[#1A1F2C] z-0"></div>

      <div className="section-container relative z-10 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 reveal-animation">
          <div
            className="inline-block px-4 py-1 mb-6 rounded-full bg-[#6C5CE7]/10 text-[#4D9EEB] text-sm font-medium opacity-0"
            ref={(el) => (elementRefs.current[0] = el)}
            style={{ "--animation-order": 0 } as React.CSSProperties}
          >
            Sistema de Agendamento para Barbearias
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white opacity-0"
            ref={(el) => (elementRefs.current[1] = el)}
            style={{ "--animation-order": 1 } as React.CSSProperties}
          >
            Gerencie sua barbearia com facilidade e{" "}
            <span className="text-[#4D9EEB]">cresça seu negócio</span>
          </h1>
          <p
            className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 opacity-0"
            ref={(el) => (elementRefs.current[2] = el)}
            style={{ "--animation-order": 2 } as React.CSSProperties}
          >
            Agendamentos online, notificações via WhatsApp e controle total do
            seu time. Comece agora com 30 dias grátis!
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0"
            ref={(el) => (elementRefs.current[3] = el)}
            style={{ "--animation-order": 3 } as React.CSSProperties}
          >
            <a
              href="#plans"
              className="primary-button flex items-center justify-center gap-2 group"
            >
              Experimente Grátis por 30 Dias
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#features" className="secondary-button text-center">
              Ver Funcionalidades
            </a>
          </div>
        </div>

        <div className="lg:w-1/2 relative">
          <div
            className="relative rounded-2xl overflow-hidden shadow-xl opacity-0 animate-float"
            ref={(el) => (elementRefs.current[4] = el)}
            style={{ "--animation-order": 4 } as React.CSSProperties}
          >
            <img
              src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1344&q=80"
              alt="Barbeiro atendendo cliente em ambiente moderno"
              className="w-full h-auto rounded-2xl object-cover"
              width={600}
              height={400}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>

          {/* Floating badge */}
          <div
            className="absolute -bottom-6 -left-6 glass-card p-4 opacity-0 animate-float"
            style={{ 
              animationDelay: "0.3s", 
              animationFillMode: "forwards",
              "--animation-order": 5 
            } as React.CSSProperties}
            ref={(el) => (elementRefs.current[5] = el)}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-300">Agendamentos</p>
                <p className="text-[#4D9EEB] font-bold">+5000/mês</p>
              </div>
            </div>
          </div>

          {/* Calendar badge */}
          <div
            className="absolute -top-10 -right-6 glass-card p-4 opacity-0 animate-float"
            style={{ 
              animationDelay: "0.6s", 
              animationFillMode: "forwards",
              "--animation-order": 6 
            } as React.CSSProperties}
            ref={(el) => (elementRefs.current[6] = el)}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-300">Agenda</p>
                <p className="text-[#4D9EEB] font-bold">Otimizada</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#1A1F2C"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
