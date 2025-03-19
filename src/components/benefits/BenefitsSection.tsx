
import React, { useEffect, useRef } from "react";
import { Smartphone, TrendingUp, Palette } from "lucide-react";

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Benefit = ({ icon, title, description, delay }: BenefitProps) => {
  const benefitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-fade-in-left");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (benefitRef.current) {
      observer.observe(benefitRef.current);
    }

    return () => {
      if (benefitRef.current) {
        observer.unobserve(benefitRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={benefitRef}
      className="flex items-start opacity-0"
    >
      <div className="mr-4 p-3 bg-barber-accent/10 rounded-lg text-barber-accent">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const BenefitsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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

    if (titleRef.current) observer.observe(titleRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  const benefits = [
    {
      icon: <Smartphone size={24} />,
      title: "Praticidade",
      description:
        "Agendamentos organizados e notificações instantâneas para você e seus clientes.",
      delay: 100,
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Crescimento",
      description:
        "Acompanhe relatórios detalhados e otimize a operação da sua barbearia.",
      delay: 300,
    },
    {
      icon: <Palette size={24} />,
      title: "Personalização",
      description:
        "Adapte o sistema ao tamanho e estilo da sua barbearia com facilidade.",
      delay: 500,
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-white" ref={sectionRef}>
      <div className="section-container">
        <h2 
          ref={titleRef} 
          className="section-title text-center mb-16 opacity-0"
        >
          Por que escolher o <span className="text-barber-accent">Corte Agendado</span>?
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-10 order-2 lg:order-1">
            {benefits.map((benefit, index) => (
              <Benefit
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                delay={benefit.delay}
              />
            ))}
          </div>

          <div 
            ref={imageRef}
            className="lg:w-1/2 order-1 lg:order-2 opacity-0"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                alt="Barbeiro feliz com o celular"
                className="rounded-2xl shadow-xl object-cover max-h-[600px]"
                loading="lazy"
              />
              
              {/* Floating mockup */}
              <div className="absolute -right-6 -bottom-6 glass-card p-4 shadow-lg rounded-xl">
                <div className="bg-white rounded-lg p-3 w-[260px]">
                  <div className="flex justify-between items-center mb-3">
                    <div className="font-bold text-barber-dark">Dashboard</div>
                    <div className="text-sm text-barber-accent">Hoje</div>
                  </div>
                  <div className="space-y-2 mb-3">
                    <div className="h-2 bg-gray-100 rounded-full w-full"></div>
                    <div className="h-2 bg-gray-100 rounded-full w-3/4"></div>
                    <div className="h-2 bg-gray-100 rounded-full w-1/2"></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div className="text-gray-500">Agendamentos</div>
                    <div className="font-bold text-barber-accent">+18%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
