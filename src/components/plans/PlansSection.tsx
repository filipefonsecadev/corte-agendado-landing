
import React, { useEffect, useRef, useState } from "react";
import { Check, X } from "lucide-react";

interface PlanFeature {
  name: string;
  included: boolean;
}

interface Plan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  popular?: boolean;
}

const PlansSection = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>("intermediario");
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const plansRef = useRef<HTMLDivElement>(null);

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
    if (plansRef.current) observer.observe(plansRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (subtitleRef.current) observer.unobserve(subtitleRef.current);
      if (plansRef.current) observer.unobserve(plansRef.current);
    };
  }, []);

  const plans: Plan[] = [
    {
      id: "trial",
      name: "Teste Grátis",
      price: "R$ 0",
      description: "Acesso a todas as funcionalidades por 30 dias.",
      features: [
        { name: "Todas as funcionalidades", included: true },
        { name: "1 barbeiro", included: true },
        { name: "Notificações via WhatsApp", included: true },
        { name: "Histórico de 1 mês", included: true },
        { name: "Suporte por email", included: true },
      ],
    },
    {
      id: "basico",
      name: "Básico",
      price: "R$ 29,90",
      description: "Ideal para barbeiros que trabalham sozinhos.",
      features: [
        { name: "1 barbeiro", included: true },
        { name: "Notificações via WhatsApp", included: true },
        { name: "Histórico de 6 meses", included: true },
        { name: "Suporte por email", included: true },
        { name: "Controle de permissões", included: false },
      ],
    },
    {
      id: "intermediario",
      name: "Intermediário",
      price: "R$ 39,90",
      description: "Perfeito para barbearias em crescimento.",
      features: [
        { name: "5 barbeiros", included: true },
        { name: "Notificações via WhatsApp", included: true },
        { name: "Histórico de 1 ano", included: true },
        { name: "Suporte prioritário", included: true },
        { name: "Controle de permissões", included: true },
      ],
      popular: true,
    },
    {
      id: "intermediarioplus",
      name: "Intermediário Plus",
      price: "R$ 49,90",
      description: "Para barbearias de médio porte.",
      features: [
        { name: "10 barbeiros", included: true },
        { name: "Notificações via WhatsApp", included: true },
        { name: "Histórico de 1 ano", included: true },
        { name: "Suporte prioritário", included: true },
        { name: "Controle de permissões", included: true },
      ],
    },
    {
      id: "pro",
      name: "Pro",
      price: "R$ 69,90",
      description: "Para grandes barbearias com múltiplas unidades.",
      features: [
        { name: "30 barbeiros", included: true },
        { name: "Notificações via WhatsApp", included: true },
        { name: "Histórico de 3 anos", included: true },
        { name: "Suporte VIP", included: true },
        { name: "Controle de permissões", included: true },
      ],
    },
  ];

  return (
    <section
      id="plans"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
      ref={sectionRef}
    >
      <div className="section-container">
        <h2 ref={titleRef} className="section-title text-center opacity-0">
          Escolha o plano perfeito para sua barbearia
        </h2>
        <p
          ref={subtitleRef}
          className="section-subtitle text-center opacity-0"
        >
          Teste grátis por 30 dias em qualquer plano. Sem complicações, sem
          fidelidade.
        </p>

        <div
          ref={plansRef}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0"
        >
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-6 transition-all duration-300 ease-in-out ${
                plan.popular
                  ? "bg-white border-2 border-barber-accent shadow-xl transform scale-105 lg:scale-105 z-10"
                  : "bg-white border border-gray-200 shadow-card hover:shadow-card-hover"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-barber-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  POPULAR
                </div>
              )}
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-end mb-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.id !== "trial" && (
                    <span className="text-gray-500 ml-1">/mês</span>
                  )}
                </div>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start"
                  >
                    {feature.included ? (
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    ) : (
                      <X className="h-5 w-5 text-gray-300 mr-2 flex-shrink-0" />
                    )}
                    <span
                      className={
                        feature.included ? "text-gray-700" : "text-gray-400"
                      }
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full flex justify-center items-center py-3 rounded-full font-medium transition-all duration-300 ${
                  plan.popular
                    ? "bg-barber-accent text-white hover:bg-barber-accent-hover"
                    : "bg-white text-barber-dark border border-gray-300 hover:bg-gray-50"
                }`}
              >
                Escolher Plano
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
