
import React, { useEffect, useRef } from "react";
import { 
  MessageSquare, 
  UserPlus, 
  Clock, 
  BarChart, 
  Lock, 
  ChevronRight 
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-reveal");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className="feature-card opacity-0"
    >
      <div className="w-12 h-12 bg-barber-accent/10 rounded-full flex items-center justify-center text-barber-accent mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
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

    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (subtitleRef.current) observer.unobserve(subtitleRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);

  const features = [
    {
      icon: <MessageSquare size={24} />,
      title: "Notificações via WhatsApp",
      description:
        "Envio automático de lembretes e confirmações para clientes e barbeiros.",
      delay: 100,
    },
    {
      icon: <UserPlus size={24} />,
      title: "Cadastro Completo",
      description:
        "Gerencie serviços, barbeiros, clientes e produtos com fotos personalizadas.",
      delay: 200,
    },
    {
      icon: <Clock size={24} />,
      title: "Configuração de Horários",
      description:
        "Defina duração, valores e disponibilidade para cada serviço oferecido.",
      delay: 300,
    },
    {
      icon: <BarChart size={24} />,
      title: "Gráficos Detalhados",
      description:
        "Acompanhe o desempenho da sua barbearia com relatórios visuais.",
      delay: 400,
    },
    {
      icon: <Lock size={24} />,
      title: "Controle de Permissões",
      description:
        "Gerencie o acesso de cada membro da equipe ao painel administrativo.",
      delay: 500,
    },
  ];

  return (
    <section id="features" className="py-20 bg-white" ref={sectionRef}>
      <div className="section-container">
        <h2 
          ref={titleRef} 
          className="section-title text-center opacity-0"
        >
          Tudo o que sua barbearia precisa em um só lugar
        </h2>
        <p 
          ref={subtitleRef} 
          className="section-subtitle text-center opacity-0"
        >
          Simplifique a gestão e encante seus clientes com um sistema completo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            ref={buttonRef}
            href="#plans"
            className="inline-flex items-center opacity-0 text-barber-accent font-medium hover:text-barber-accent-hover transition-colors group"
          >
            Veja Todas as Funcionalidades
            <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
